import express from 'express';
import { query } from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Apply auth middleware to all user endpoints
router.use(authenticateToken);

/**
 * Deep merge helper for vocab_progress
 * Safely preserves learnedWords, topicState, and lastActiveTopicId without overwriting
 */
export function mergeVocabProgress(existing = {}, incoming = {}) {
  if (!existing || typeof existing !== 'object') existing = {};
  if (!incoming || typeof incoming !== 'object') return existing;

  const existingLearned = (existing.learnedWords && typeof existing.learnedWords === 'object') ? existing.learnedWords : {};
  const existingTopicState = (existing.topicState && typeof existing.topicState === 'object') ? existing.topicState : {};

  const incomingLearned = (incoming.learnedWords && typeof incoming.learnedWords === 'object') ? incoming.learnedWords : {};
  const incomingTopicState = (incoming.topicState && typeof incoming.topicState === 'object') ? incoming.topicState : {};

  // Extract flat card records from legacy format
  const legacyExistingCards = {};
  for (const [k, v] of Object.entries(existing)) {
    if (k !== 'learnedWords' && k !== 'topicState' && k !== 'lastActiveTopicId' && v && typeof v === 'object') {
      legacyExistingCards[k] = v;
    }
  }

  const legacyIncomingCards = {};
  for (const [k, v] of Object.entries(incoming)) {
    if (k !== 'learnedWords' && k !== 'topicState' && k !== 'lastActiveTopicId' && v && typeof v === 'object') {
      legacyIncomingCards[k] = v;
    }
  }

  // Deeply merge learned words (key by card.id or word)
  const mergedLearned = {
    ...legacyExistingCards,
    ...existingLearned
  };

  // Merge legacy incoming
  for (const [k, v] of Object.entries(legacyIncomingCards)) {
    mergedLearned[k] = { ...(mergedLearned[k] || {}), ...v };
  }

  // Merge incoming learnedWords
  for (const [k, v] of Object.entries(incomingLearned)) {
    mergedLearned[k] = { ...(mergedLearned[k] || {}), ...v };
  }

  // Deeply merge topicState
  const mergedTopicState = { ...existingTopicState };
  for (const [tId, tData] of Object.entries(incomingTopicState)) {
    if (tData && typeof tData === 'object') {
      mergedTopicState[tId] = {
        ...(existingTopicState[tId] || {}),
        ...tData,
        updatedAt: tData.updatedAt || new Date().toISOString()
      };
    }
  }

  const lastActiveTopicId = incoming.lastActiveTopicId || existing.lastActiveTopicId || null;

  return {
    ...legacyExistingCards,
    ...legacyIncomingCards,
    ...mergedLearned,
    learnedWords: mergedLearned,
    topicState: mergedTopicState,
    lastActiveTopicId
  };
}

/**
 * 1. GET /api/user/sync & GET /api/progress Handler
 * Return complete profile, vocab_progress, grammar_progress, and notebooks from PostgreSQL
 */
export async function getProgressHandler(req, res) {
  try {
    const userId = req.user.id;

    // 1. Fetch user & progress
    const progressRes = await query(
      `SELECT 
        u.id, u.full_name, u.email, u.avatar_url,
        p.xp, p.streak, p.level, p.daily_goal_minutes, p.studied_minutes_today, p.accent,
        p.vocab_progress, p.grammar_progress, p.last_active_date
       FROM users u
       LEFT JOIN user_progress p ON u.id = p.user_id
       WHERE u.id = $1`,
      [userId]
    );

    if (progressRes.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy người dùng' });
    }

    const row = progressRes.rows[0];

    // 2. Fetch all notebooks for this user ordered by created_at DESC
    const notebooksRes = await query(
      `SELECT id, term, phonetic, meaning, example, tag, created_at as "createdAt"
       FROM user_notebooks
       WHERE user_id = $1
       ORDER BY created_at DESC`,
      [userId]
    );

    const safeXP = row.xp !== null ? Number(row.xp) : 0;
    const safeStreak = row.streak !== null ? Number(row.streak) : 1;
    const safeLevel = row.level !== null ? Number(row.level) : 1;

    const vocabProgress = row.vocab_progress || {};
    const grammarProgress = row.grammar_progress || {};

    return res.json({
      success: true,
      profile: {
        id: row.id,
        email: row.email,
        fullName: row.full_name,
        name: row.full_name,
        avatarUrl: row.avatar_url,
        xp: safeXP,
        streak: safeStreak,
        level: safeLevel,
        dailyGoalMinutes: row.daily_goal_minutes || 30,
        studiedMinutesToday: row.studied_minutes_today || 0,
        accent: row.accent || 'en-US'
      },
      xp: safeXP,
      streak: safeStreak,
      level: safeLevel,
      vocabProgress,
      grammarProgress,
      notebooks: notebooksRes.rows || []
    });
  } catch (err) {
    console.error('[User Progress Sync Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Lỗi khi đồng bộ dữ liệu: ' + err.message
    });
  }
}

/**
 * 2. PUT/POST /api/user/progress & /api/progress Handler
 * Update vocab_progress, grammar_progress, xp, streak, level, daily goal
 * Guaranteed never to overwrite existing data with empty states
 */
export async function updateProgressHandler(req, res) {
  try {
    const userId = req.user.id;
    const {
      vocabProgress,
      vocab_progress,
      grammarProgress,
      grammar_progress,
      xp,
      streak,
      level,
      dailyGoalMinutes,
      studiedMinutesToday,
      accent,
      topicState,
      lastActiveTopicId
    } = req.body;

    const incomingVocab = vocabProgress || vocab_progress || {};
    if (topicState && !incomingVocab.topicState) {
      incomingVocab.topicState = topicState;
    }
    if (lastActiveTopicId && !incomingVocab.lastActiveTopicId) {
      incomingVocab.lastActiveTopicId = lastActiveTopicId;
    }

    const incomingGrammar = grammarProgress || grammar_progress || {};

    // Fetch existing progress
    const currentRes = await query('SELECT * FROM user_progress WHERE user_id = $1', [userId]);

    let finalVocab = {};
    let finalGrammar = {};
    let finalXP = 0;
    let finalStreak = 1;
    let finalLevel = 1;

    if (currentRes.rowCount === 0) {
      finalVocab = mergeVocabProgress({}, incomingVocab);
      finalGrammar = incomingGrammar;
      finalXP = xp !== undefined ? Number(xp) : 0;
      finalStreak = streak !== undefined ? Number(streak) : 1;
      finalLevel = level !== undefined ? Number(level) : 1;

      await query(
        `INSERT INTO user_progress 
          (user_id, xp, streak, level, daily_goal_minutes, studied_minutes_today, accent, vocab_progress, grammar_progress)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [
          userId,
          finalXP,
          finalStreak,
          finalLevel,
          dailyGoalMinutes || 30,
          studiedMinutesToday || 0,
          accent || 'en-US',
          JSON.stringify(finalVocab),
          JSON.stringify(finalGrammar)
        ]
      );
    } else {
      const current = currentRes.rows[0];
      finalVocab = mergeVocabProgress(current.vocab_progress || {}, incomingVocab);
      finalGrammar = { ...(current.grammar_progress || {}), ...incomingGrammar };

      // Ensure XP, streak, and level NEVER decrease due to race condition with empty state!
      const existingXP = Number(current.xp || 0);
      const incomingXP = xp !== undefined ? Number(xp) : existingXP;
      finalXP = Math.max(existingXP, incomingXP);

      const existingStreak = Number(current.streak || 1);
      const incomingStreak = streak !== undefined ? Number(streak) : existingStreak;
      finalStreak = Math.max(existingStreak, incomingStreak);

      const existingLevel = Number(current.level || 1);
      const incomingLevel = level !== undefined ? Number(level) : existingLevel;
      finalLevel = Math.max(existingLevel, incomingLevel);

      await query(
        `UPDATE user_progress
         SET xp = $1,
             streak = $2,
             level = $3,
             daily_goal_minutes = COALESCE($4, daily_goal_minutes),
             studied_minutes_today = COALESCE($5, studied_minutes_today),
             accent = COALESCE($6, accent),
             vocab_progress = $7,
             grammar_progress = $8,
             last_active_date = CURRENT_DATE,
             updated_at = CURRENT_TIMESTAMP
         WHERE user_id = $9`,
        [
          finalXP,
          finalStreak,
          finalLevel,
          dailyGoalMinutes !== undefined ? dailyGoalMinutes : null,
          studiedMinutesToday !== undefined ? studiedMinutesToday : null,
          accent !== undefined ? accent : null,
          JSON.stringify(finalVocab),
          JSON.stringify(finalGrammar),
          userId
        ]
      );
    }

    return res.json({
      success: true,
      message: 'Cập nhật tiến độ học tập thành công!',
      xp: finalXP,
      streak: finalStreak,
      level: finalLevel,
      vocabProgress: finalVocab,
      grammarProgress: finalGrammar
    });
  } catch (err) {
    console.error('[Update Progress Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Lỗi khi cập nhật tiến độ: ' + err.message
    });
  }
}

// Bind endpoints to router
router.get('/sync', getProgressHandler);
router.get('/progress', getProgressHandler);
router.post('/progress', updateProgressHandler);
router.put('/progress', updateProgressHandler);

/**
 * 3. POST /api/user/notebooks
 * Add or upsert a note to user's notebook
 */
router.post('/notebooks', async (req, res) => {
  try {
    const userId = req.user.id;
    const { id, term, phonetic, meaning, example, tag } = req.body;

    if (!term || !meaning) {
      return res.status(400).json({
        success: false,
        message: 'Từ vựng và Nghĩa là bắt buộc'
      });
    }

    const noteId = id || `note-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;

    const insertRes = await query(
      `INSERT INTO user_notebooks (id, user_id, term, phonetic, meaning, example, tag)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       ON CONFLICT (id) DO UPDATE
       SET term = EXCLUDED.term,
           phonetic = EXCLUDED.phonetic,
           meaning = EXCLUDED.meaning,
           example = EXCLUDED.example,
           tag = EXCLUDED.tag,
           updated_at = CURRENT_TIMESTAMP
       RETURNING id, term, phonetic, meaning, example, tag, created_at as "createdAt"`,
      [noteId, userId, term.trim(), (phonetic || '').trim(), meaning.trim(), (example || '').trim(), tag || 'Từ mới']
    );

    return res.status(201).json({
      success: true,
      message: 'Đã lưu ghi chú vào PostgreSQL!',
      note: insertRes.rows[0]
    });
  } catch (err) {
    console.error('[Create Notebook Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Lỗi khi lưu ghi chú: ' + err.message
    });
  }
});

/**
 * 4. PUT /api/user/notebooks/:id
 * Update an existing note
 */
router.put('/notebooks/:id', async (req, res) => {
  try {
    const userId = req.user.id;
    const noteId = req.params.id;
    const { term, phonetic, meaning, example, tag } = req.body;

    const updateRes = await query(
      `UPDATE user_notebooks
       SET term = COALESCE($1, term),
           phonetic = COALESCE($2, phonetic),
           meaning = COALESCE($3, meaning),
           example = COALESCE($4, example),
           tag = COALESCE($5, tag),
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $6 AND user_id = $7
       RETURNING id, term, phonetic, meaning, example, tag, created_at as "createdAt"`,
      [term, phonetic, meaning, example, tag, noteId, userId]
    );

    if (updateRes.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy ghi chú hoặc bạn không có quyền sửa ghi chú này'
      });
    }

    return res.json({
      success: true,
      message: 'Đã cập nhật ghi chú thành công!',
      note: updateRes.rows[0]
    });
  } catch (err) {
    console.error('[Update Notebook Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Lỗi khi cập nhật ghi chú: ' + err.message
    });
  }
});

/**
 * 5. DELETE /api/user/notebooks/:id
 * Delete a note
 */
router.delete('/notebooks/:id', async (req, res) => {
  try {
    const userId = req.user.id;
    const noteId = req.params.id;

    const delRes = await query(
      `DELETE FROM user_notebooks WHERE id = $1 AND user_id = $2`,
      [noteId, userId]
    );

    if (delRes.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy ghi chú để xóa'
      });
    }

    return res.json({
      success: true,
      message: 'Đã xóa ghi chú khỏi PostgreSQL thành công!'
    });
  } catch (err) {
    console.error('[Delete Notebook Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Lỗi khi xóa ghi chú: ' + err.message
    });
  }
});

/**
 * 6. POST /api/user/notebooks/batch
 * Bulk upsert notes (e.g. from local initial notes or imported CSV/JSON)
 */
router.post('/notebooks/batch', async (req, res) => {
  try {
    const userId = req.user.id;
    const { notes } = req.body;

    if (!Array.isArray(notes) || notes.length === 0) {
      return res.json({ success: true, count: 0 });
    }

    let insertedCount = 0;
    for (const note of notes) {
      if (!note.term || !note.meaning) continue;
      const noteId = note.id || `note-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      await query(
        `INSERT INTO user_notebooks (id, user_id, term, phonetic, meaning, example, tag)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         ON CONFLICT (id) DO UPDATE
         SET term = EXCLUDED.term,
             phonetic = EXCLUDED.phonetic,
             meaning = EXCLUDED.meaning,
             example = EXCLUDED.example,
             tag = EXCLUDED.tag,
             updated_at = CURRENT_TIMESTAMP`,
        [
          noteId,
          userId,
          note.term.trim(),
          (note.phonetic || '').trim(),
          note.meaning.trim(),
          (note.example || '').trim(),
          note.tag || 'Từ mới'
        ]
      );
      insertedCount++;
    }

    return res.json({
      success: true,
      message: `Đã đồng bộ thành công ${insertedCount} thẻ ghi chú vào PostgreSQL!`,
      count: insertedCount
    });
  } catch (err) {
    console.error('[Batch Notebooks Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Lỗi đồng bộ danh sách ghi chú: ' + err.message
    });
  }
});

export default router;
