import express from 'express';
import { query } from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Apply auth middleware to all user endpoints
router.use(authenticateToken);

/**
 * 1. GET /api/user/sync
 * Return complete profile, vocab_progress, grammar_progress, and notebooks from PostgreSQL
 */
router.get('/sync', async (req, res) => {
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

    return res.json({
      success: true,
      profile: {
        id: row.id,
        email: row.email,
        fullName: row.full_name,
        name: row.full_name,
        avatarUrl: row.avatar_url,
        xp: row.xp !== null ? row.xp : 2450,
        streak: row.streak !== null ? row.streak : 1,
        level: row.level !== null ? row.level : 1,
        dailyGoalMinutes: row.daily_goal_minutes || 30,
        studiedMinutesToday: row.studied_minutes_today || 0,
        accent: row.accent || 'en-US'
      },
      vocabProgress: row.vocab_progress || {},
      grammarProgress: row.grammar_progress || {},
      notebooks: notebooksRes.rows || []
    });
  } catch (err) {
    console.error('[User Sync Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Lỗi khi đồng bộ dữ liệu: ' + err.message
    });
  }
});

/**
 * 2. PUT /api/user/progress
 * Update vocab_progress, grammar_progress, xp, streak, level, daily goal
 */
router.put('/progress', async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      vocabProgress,
      grammarProgress,
      xp,
      streak,
      level,
      dailyGoalMinutes,
      studiedMinutesToday,
      accent
    } = req.body;

    // Fetch existing progress
    const currentRes = await query('SELECT * FROM user_progress WHERE user_id = $1', [userId]);

    if (currentRes.rowCount === 0) {
      // Insert if row did not exist
      await query(
        `INSERT INTO user_progress 
          (user_id, xp, streak, level, daily_goal_minutes, studied_minutes_today, accent, vocab_progress, grammar_progress)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [
          userId,
          xp || 0,
          streak || 1,
          level || 1,
          dailyGoalMinutes || 30,
          studiedMinutesToday || 0,
          accent || 'en-US',
          JSON.stringify(vocabProgress || {}),
          JSON.stringify(grammarProgress || {})
        ]
      );
    } else {
      const current = currentRes.rows[0];

      // Merge vocab progress if partial update provided
      const mergedVocab = vocabProgress !== undefined
        ? { ...(current.vocab_progress || {}), ...vocabProgress }
        : current.vocab_progress;

      const mergedGrammar = grammarProgress !== undefined
        ? { ...(current.grammar_progress || {}), ...grammarProgress }
        : current.grammar_progress;

      await query(
        `UPDATE user_progress
         SET xp = COALESCE($1, xp),
             streak = COALESCE($2, streak),
             level = COALESCE($3, level),
             daily_goal_minutes = COALESCE($4, daily_goal_minutes),
             studied_minutes_today = COALESCE($5, studied_minutes_today),
             accent = COALESCE($6, accent),
             vocab_progress = $7,
             grammar_progress = $8,
             updated_at = CURRENT_TIMESTAMP
         WHERE user_id = $9`,
        [
          xp !== undefined ? xp : null,
          streak !== undefined ? streak : null,
          level !== undefined ? level : null,
          dailyGoalMinutes !== undefined ? dailyGoalMinutes : null,
          studiedMinutesToday !== undefined ? studiedMinutesToday : null,
          accent !== undefined ? accent : null,
          JSON.stringify(mergedVocab || {}),
          JSON.stringify(mergedGrammar || {}),
          userId
        ]
      );
    }

    return res.json({
      success: true,
      message: 'Cập nhật tiến độ học tập thành công!'
    });
  } catch (err) {
    console.error('[Update Progress Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Lỗi khi cập nhật tiến độ: ' + err.message
    });
  }
});

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
