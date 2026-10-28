import express from 'express';
import { query } from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Apply auth middleware to all user endpoints
router.use(authenticateToken);

/**
 * Safe JSON parse helper that handles null, undefined, strings, double-stringified JSON, and objects
 */
export function safeJsonParse(val, fallback = {}) {
  if (val === null || val === undefined) return fallback;
  if (typeof val === 'object') return val;
  if (typeof val === 'string') {
    const trimmed = val.trim();
    if (!trimmed || trimmed === 'null' || trimmed === 'undefined') return fallback;
    try {
      const parsed = JSON.parse(trimmed);
      if (typeof parsed === 'string') {
        try {
          const doubleParsed = JSON.parse(parsed);
          return (doubleParsed && typeof doubleParsed === 'object') ? doubleParsed : fallback;
        } catch {
          return fallback;
        }
      }
      return (parsed && typeof parsed === 'object') ? parsed : fallback;
    } catch {
      return fallback;
    }
  }
  return fallback;
}

/**
 * Deep merge helper for vocab_progress
 * Safely preserves learnedWords, topicState, and lastActiveTopicId without overwriting
 * Guaranteed NEVER to downgrade mastered cards or overwrite progress with empty objects
 */
export function mergeVocabProgress(existingRaw = {}, incomingRaw = {}) {
  const existing = safeJsonParse(existingRaw, {});
  const incoming = safeJsonParse(incomingRaw, {});

  const existingLearned = safeJsonParse(existing.learnedWords, {});
  const existingTopicState = safeJsonParse(existing.topicState, {});

  const incomingLearned = safeJsonParse(incoming.learnedWords, {});
  const incomingTopicState = safeJsonParse(incoming.topicState, {});

  // Extract flat card records from legacy format (e.g. key = 'c1-s8-w1')
  const legacyExistingCards = {};
  for (const [k, v] of Object.entries(existing)) {
    if (
      k !== 'learnedWords' &&
      k !== 'topicState' &&
      k !== 'lastActiveTopicId' &&
      k !== 'starredWords' &&
      k !== 'starredCardIds' &&
      v &&
      typeof v === 'object'
    ) {
      legacyExistingCards[k] = v;
    }
  }

  const legacyIncomingCards = {};
  for (const [k, v] of Object.entries(incoming)) {
    if (
      k !== 'learnedWords' &&
      k !== 'topicState' &&
      k !== 'lastActiveTopicId' &&
      k !== 'starredWords' &&
      k !== 'starredCardIds' &&
      v &&
      typeof v === 'object'
    ) {
      legacyIncomingCards[k] = v;
    }
  }

  // Base learned dictionary: start with all existing cards
  const mergedLearned = {
    ...legacyExistingCards,
    ...existingLearned
  };

  // Helper to merge a single card without downgrading
  function mergeSingleCard(currentCard = {}, newCard = {}) {
    if (!newCard || typeof newCard !== 'object') return currentCard;
    if (!currentCard || Object.keys(currentCard).length === 0) return { ...newCard };

    // Anti-downgrade status: if already mastered, preserve mastered status
    const isCurrentlyMastered = currentCard.status === 'mastered';
    const isIncomingMastered = newCard.status === 'mastered';
    const status = (isCurrentlyMastered || isIncomingMastered)
      ? 'mastered'
      : (newCard.status || currentCard.status || 'learning');

    const stepCompleted = Math.max(
      Number(currentCard.stepCompleted || 0),
      Number(newCard.stepCompleted || 0)
    );

    const reviewCount = Math.max(
      Number(currentCard.reviewCount || 0),
      Number(newCard.reviewCount || 0)
    );

    const intervalDays = Math.max(
      Number(currentCard.intervalDays || 0),
      Number(newCard.intervalDays || 0)
    );

    const lastStudiedAt = Math.max(
      Number(currentCard.lastStudiedAt || 0),
      Number(newCard.lastStudiedAt || 0),
      Date.now()
    );

    const nextReviewAt = newCard.nextReviewAt !== undefined ? newCard.nextReviewAt : (currentCard.nextReviewAt || null);

    return {
      ...currentCard,
      ...newCard,
      status,
      stepCompleted,
      reviewCount,
      intervalDays,
      lastStudiedAt,
      nextReviewAt
    };
  }

  // Merge legacy incoming cards
  for (const [cardId, cardData] of Object.entries(legacyIncomingCards)) {
    mergedLearned[cardId] = mergeSingleCard(mergedLearned[cardId], cardData);
  }

  // Merge incoming learnedWords
  for (const [cardId, cardData] of Object.entries(incomingLearned)) {
    mergedLearned[cardId] = mergeSingleCard(mergedLearned[cardId], cardData);
  }

  // Deeply merge topicState (anti-downgrade for lastWordIndex and lastStep)
  const mergedTopicState = { ...existingTopicState };
  for (const [tId, tData] of Object.entries(incomingTopicState)) {
    if (tData && typeof tData === 'object') {
      const curTopic = existingTopicState[tId] || {};
      const lastWordIndex = Math.max(
        Number(curTopic.lastWordIndex || 0),
        Number(tData.lastWordIndex || 0)
      );
      const lastStep = Math.max(
        Number(curTopic.lastStep || 1),
        Number(tData.lastStep || 1)
      );
      const existingCompleted = Array.isArray(curTopic.completedWordIds) ? curTopic.completedWordIds : [];
      const incomingCompleted = Array.isArray(tData.completedWordIds) ? tData.completedWordIds : [];
      const completedWordIds = Array.from(new Set([...existingCompleted, ...incomingCompleted]));

      mergedTopicState[tId] = {
        ...curTopic,
        ...tData,
        lastWordIndex,
        lastStep,
        completedWordIds,
        updatedAt: tData.updatedAt || curTopic.updatedAt || new Date().toISOString()
      };
    }
  }

  // Preserve starred words
  const existingStarred = Array.isArray(existing.starredWords)
    ? existing.starredWords
    : Array.isArray(existing.starredCardIds)
    ? existing.starredCardIds
    : [];

  const incomingStarred = Array.isArray(incoming.starredWords)
    ? incoming.starredWords
    : Array.isArray(incoming.starredCardIds)
    ? incoming.starredCardIds
    : [];

  const mergedStarred = Array.from(new Set([...existingStarred, ...incomingStarred]));
  const lastActiveTopicId = incoming.lastActiveTopicId || existing.lastActiveTopicId || null;

  return {
    ...mergedLearned,
    learnedWords: mergedLearned,
    topicState: mergedTopicState,
    starredWords: mergedStarred,
    starredCardIds: mergedStarred,
    lastActiveTopicId
  };
}

/**
 * 1. GET /api/user/sync & GET /api/progress Handler
 * Return complete profile, vocab_progress, grammar_progress, and notebooks from PostgreSQL
 * Always cross-check highest XP between users and user_progress tables
 */
export async function getProgressHandler(req, res) {
  try {
    const userId = req.user.id;

    // 1. Fetch user & progress from BOTH users and user_progress
    const progressRes = await query(
      `SELECT 
        u.id, u.full_name, u.email, u.avatar_url, u.xp as user_xp, u.streak as user_streak,
        p.xp as progress_xp, p.streak as progress_streak, p.level, p.daily_goal_minutes, p.studied_minutes_today, p.accent,
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

    const safeXP = Math.max(Number(row.user_xp || 0), Number(row.progress_xp || 0));
    const safeStreak = Math.max(Number(row.user_streak || 1), Number(row.progress_streak || 1));
    const safeLevel = Math.max(Number(row.level || 1), Math.floor(safeXP / 300) + 1);

    const vocabProgress = safeJsonParse(row.vocab_progress, {});
    const grammarProgress = safeJsonParse(row.grammar_progress, {});

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
      vocab_progress: vocabProgress,
      grammarProgress,
      grammar_progress: grammarProgress,
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
 * Enforces Anti-Downgrade Guard for XP, streak, and vocab_progress
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

    const incomingVocab = safeJsonParse(vocabProgress || vocab_progress || {}, {});
    if (topicState && !incomingVocab.topicState) {
      incomingVocab.topicState = safeJsonParse(topicState, {});
    }
    if (lastActiveTopicId && !incomingVocab.lastActiveTopicId) {
      incomingVocab.lastActiveTopicId = lastActiveTopicId;
    }

    const incomingGrammar = safeJsonParse(grammarProgress || grammar_progress || {}, {});

    // 1. Fetch current DB record from BOTH users and user_progress
    const [userRes, progressRes] = await Promise.all([
      query('SELECT xp, streak FROM users WHERE id = $1', [userId]),
      query('SELECT * FROM user_progress WHERE user_id = $1', [userId])
    ]);

    const userRow = userRes.rows[0] || {};
    const progressRow = progressRes.rows[0] || {};

    const currentDbXp = Math.max(Number(userRow.xp || 0), Number(progressRow.xp || 0));
    const currentDbStreak = Math.max(Number(userRow.streak || 1), Number(progressRow.streak || 1));
    const currentDbLevel = Math.max(Number(progressRow.level || 1), Math.floor(currentDbXp / 300) + 1);

    // ANTI-DOWNGRADE RULE: Math.max ensures XP and streak NEVER decrease!
    const incomingXpNum = xp !== undefined ? Number(xp) : 0;
    const finalXP = Math.max(currentDbXp, incomingXpNum);

    const incomingStreakNum = streak !== undefined ? Number(streak) : 1;
    const finalStreak = Math.max(currentDbStreak, incomingStreakNum);

    const incomingLevelNum = level !== undefined ? Number(level) : 1;
    const finalLevel = Math.max(currentDbLevel, incomingLevelNum, Math.floor(finalXP / 300) + 1);

    let finalVocab = {};
    let finalGrammar = {};

    if (progressRes.rowCount === 0) {
      finalVocab = mergeVocabProgress({}, incomingVocab);
      finalGrammar = incomingGrammar;

      await query(
        `INSERT INTO user_progress 
          (user_id, xp, streak, level, daily_goal_minutes, studied_minutes_today, accent, vocab_progress, grammar_progress)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8::jsonb, $9::jsonb)`,
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
      finalVocab = mergeVocabProgress(progressRow.vocab_progress, incomingVocab);
      const existingGrammar = safeJsonParse(progressRow.grammar_progress, {});
      finalGrammar = { ...existingGrammar, ...incomingGrammar };

      await query(
        `UPDATE user_progress
         SET xp = $1,
             streak = $2,
             level = $3,
             daily_goal_minutes = COALESCE($4, daily_goal_minutes),
             studied_minutes_today = COALESCE($5, studied_minutes_today),
             accent = COALESCE($6, accent),
             vocab_progress = $7::jsonb,
             grammar_progress = $8::jsonb,
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

    // Keep users table in sync with highest XP and streak
    await query(
      `UPDATE users 
       SET xp = GREATEST(COALESCE(xp, 0), $1),
           streak = GREATEST(COALESCE(streak, 1), $2),
           updated_at = CURRENT_TIMESTAMP 
       WHERE id = $3`,
      [finalXP, finalStreak, userId]
    ).catch((e) => console.warn('[Update users xp/streak notice]:', e.message));

    return res.json({
      success: true,
      message: 'Cập nhật tiến độ học tập thành công!',
      xp: finalXP,
      streak: finalStreak,
      level: finalLevel,
      vocabProgress: finalVocab,
      vocab_progress: finalVocab,
      grammarProgress: finalGrammar,
      grammar_progress: finalGrammar
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
