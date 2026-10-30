import express from 'express';
import { query, ensureDbSchema } from '../db.js';
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
 * Safe fetch for user notebooks with multi-schema fallback.
 * Resilient against missing columns, JSONB items schemas, or table migration variations.
 */
export async function fetchUserNotebooks(userId) {
  try {
    const res = await query(
      `SELECT 
        id, 
        COALESCE(term, '') AS term, 
        COALESCE(phonetic, '') AS phonetic, 
        COALESCE(meaning, '') AS meaning, 
        COALESCE(example, '') AS example, 
        COALESCE(tag, 'Từ mới') AS tag, 
        created_at AS "createdAt"
       FROM user_notebooks
       WHERE user_id = $1
       ORDER BY created_at DESC`,
      [userId]
    );

    const notes = [];
    for (const r of (res.rows || [])) {
      if (r.term || r.meaning) {
        notes.push({
          id: r.id,
          term: r.term || '',
          phonetic: r.phonetic || '',
          meaning: r.meaning || '',
          example: r.example || '',
          tag: r.tag || 'Từ mới',
          createdAt: r.createdAt
        });
      }
    }
    return notes;
  } catch (err) {
    console.warn('[Notebooks Fetch Notice]:', err.message);
    // Fallback 1: Try querying JSONB items column if present
    try {
      const fallbackRes = await query(
        `SELECT id, items, created_at as "createdAt" FROM user_notebooks WHERE user_id = $1`,
        [userId]
      );
      const notes = [];
      for (const r of (fallbackRes.rows || [])) {
        if (r.items) {
          const parsed = typeof r.items === 'string' ? JSON.parse(r.items) : r.items;
          if (Array.isArray(parsed)) {
            notes.push(...parsed);
          } else if (parsed && typeof parsed === 'object') {
            notes.push(parsed);
          }
        }
      }
      if (notes.length > 0) return notes;
    } catch {}

    // Fallback 2: Try querying saved_words table if present
    try {
      const swRes = await query(
        `SELECT id, term, phonetic, meaning, example, tag, created_at as "createdAt" FROM saved_words WHERE user_id = $1 ORDER BY created_at DESC`,
        [userId]
      );
      if (swRes.rows && swRes.rows.length > 0) return swRes.rows;
    } catch {}

    return [];
  }
}

/**
 * 1. GET /api/user/sync & GET /api/progress Handler
 * Return complete profile, vocab_progress, grammar_progress, and notebooks from PostgreSQL
 * Always cross-check highest XP between users and user_progress tables
 */
export async function getProgressHandler(req, res) {
  try {
    await ensureDbSchema();
    const userId = req.user.id;

    // 1. Fetch user & progress in parallel with explicit table aliases
    const [progressRes, notebooks] = await Promise.all([
      query(
        `SELECT 
          u.id, u.full_name, u.email, u.phone, u.avatar_url,
          GREATEST(COALESCE(u.xp, 0), COALESCE(up.xp, 0)) AS xp,
          GREATEST(COALESCE(u.streak, 1), COALESCE(up.streak, 1)) AS streak,
          COALESCE(up.level, 1) AS level,
          COALESCE(up.daily_goal_minutes, 30) AS daily_goal_minutes,
          COALESCE(up.studied_minutes_today, 0) AS studied_minutes_today,
          COALESCE(up.accent, 'en-US') AS accent,
          up.vocab_progress,
          up.grammar_progress,
          up.last_active_date
         FROM users u
         LEFT JOIN user_progress up ON u.id = up.user_id
         WHERE u.id = $1`,
        [userId]
      ),
      fetchUserNotebooks(userId)
    ]);

    if (progressRes.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy người dùng' });
    }

    const row = progressRes.rows[0];
    const safeXP = Number(row.xp || 0);
    const safeStreak = Math.max(1, Number(row.streak || 1));
    const safeLevel = Math.max(1, Number(row.level || 1), Math.floor(safeXP / 300) + 1);

    const vocabProgress = safeJsonParse(row.vocab_progress, {});
    const grammarProgress = safeJsonParse(row.grammar_progress, {});

    return res.json({
      success: true,
      profile: {
        id: row.id,
        email: row.email,
        phone: row.phone,
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
      user: {
        id: row.id,
        email: row.email,
        phone: row.phone,
        fullName: row.full_name,
        avatarUrl: row.avatar_url,
        xp: safeXP,
        streak: safeStreak,
        level: safeLevel
      },
      xp: safeXP,
      streak: safeStreak,
      level: safeLevel,
      vocabProgress,
      vocab_progress: vocabProgress,
      grammarProgress,
      grammar_progress: grammarProgress,
      notebooks: notebooks || []
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
    await ensureDbSchema();
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

    // 1. Fetch current DB record with explicit aliases
    const currentRes = await query(
      `SELECT 
        GREATEST(COALESCE(u.xp, 0), COALESCE(up.xp, 0)) AS xp,
        GREATEST(COALESCE(u.streak, 1), COALESCE(up.streak, 1)) AS streak,
        COALESCE(up.level, 1) AS level,
        up.vocab_progress,
        up.grammar_progress
       FROM users u
       LEFT JOIN user_progress up ON u.id = up.user_id
       WHERE u.id = $1`,
      [userId]
    );

    const currentRow = currentRes.rows[0] || {};
    const currentDbXp = Number(currentRow.xp || 0);
    const currentDbStreak = Math.max(1, Number(currentRow.streak || 1));
    const currentDbLevel = Math.max(1, Number(currentRow.level || 1), Math.floor(currentDbXp / 300) + 1);

    // ANTI-DOWNGRADE RULE: Math.max ensures XP and streak NEVER decrease!
    const incomingXpNum = xp !== undefined ? Number(xp) : 0;
    const finalXP = Math.max(currentDbXp, incomingXpNum);

    const incomingStreakNum = streak !== undefined ? Number(streak) : 1;
    const finalStreak = Math.max(currentDbStreak, incomingStreakNum);

    const incomingLevelNum = level !== undefined ? Number(level) : 1;
    const finalLevel = Math.max(currentDbLevel, incomingLevelNum, Math.floor(finalXP / 300) + 1);

    // Deep merge vocab_progress (preserves mastered cards, reviews, topic lastWordIndex, and never lets {} wipe DB)
    const finalVocab = mergeVocabProgress(currentRow.vocab_progress, incomingVocab);
    const existingGrammar = safeJsonParse(currentRow.grammar_progress, {});
    const finalGrammar = { ...existingGrammar, ...incomingGrammar };

    // Atomic UPSERT into user_progress with GREATEST
    await query(
      `INSERT INTO user_progress 
        (user_id, xp, streak, level, daily_goal_minutes, studied_minutes_today, accent, vocab_progress, grammar_progress, last_active_date, updated_at)
       VALUES 
        ($1, $2, $3, $4, COALESCE($5, 30), COALESCE($6, 0), COALESCE($7, 'en-US'), $8::jsonb, $9::jsonb, CURRENT_DATE, CURRENT_TIMESTAMP)
       ON CONFLICT (user_id) DO UPDATE
       SET xp = GREATEST(COALESCE(user_progress.xp, 0), EXCLUDED.xp),
           streak = GREATEST(COALESCE(user_progress.streak, 1), EXCLUDED.streak),
           level = GREATEST(COALESCE(user_progress.level, 1), EXCLUDED.level),
           daily_goal_minutes = COALESCE(EXCLUDED.daily_goal_minutes, user_progress.daily_goal_minutes),
           studied_minutes_today = COALESCE(EXCLUDED.studied_minutes_today, user_progress.studied_minutes_today),
           accent = COALESCE(EXCLUDED.accent, user_progress.accent),
           vocab_progress = EXCLUDED.vocab_progress,
           grammar_progress = EXCLUDED.grammar_progress,
           last_active_date = CURRENT_DATE,
           updated_at = CURRENT_TIMESTAMP`,
      [
        userId,
        finalXP,
        finalStreak,
        finalLevel,
        dailyGoalMinutes !== undefined ? dailyGoalMinutes : null,
        studiedMinutesToday !== undefined ? studiedMinutesToday : null,
        accent !== undefined ? accent : null,
        JSON.stringify(finalVocab),
        JSON.stringify(finalGrammar)
      ]
    );

    // Also update users table using GREATEST
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
