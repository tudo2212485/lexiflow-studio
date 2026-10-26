import jwt from 'jsonwebtoken';
import { query } from '../db.js';

export async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Yêu cầu xác thực: Không tìm thấy Token đăng nhập'
    });
  }

  try {
    const secret = process.env.JWT_SECRET || 'lexiflow_super_secret_jwt_key_2026_modern_fullstack_studio';
    const decoded = jwt.verify(token, secret);

    // Verify user still exists in database
    const userRes = await query(
      'SELECT id, email, full_name, avatar_url FROM users WHERE id = $1',
      [decoded.userId]
    );

    if (userRes.rowCount === 0) {
      return res.status(401).json({
        success: false,
        message: 'Tài khoản không tồn tại hoặc đã bị xóa'
      });
    }

    const u = userRes.rows[0];
    req.user = {
      id: u.id,
      email: u.email,
      fullName: u.full_name,
      avatarUrl: u.avatar_url
    };

    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại'
      });
    }
    return res.status(403).json({
      success: false,
      message: 'Token không hợp lệ hoặc bị từ chối'
    });
  }
}
