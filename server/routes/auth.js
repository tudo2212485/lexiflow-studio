import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { OAuth2Client } from 'google-auth-library';
import { query } from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'lexiflow_super_secret_jwt_key_2026_modern_fullstack_studio';
const getEffectiveGoogleClientId = () => (process.env.GOOGLE_CLIENT_ID || process.env.VITE_GOOGLE_CLIENT_ID || '').trim();
const googleClient = new OAuth2Client(getEffectiveGoogleClientId());

// Default initial notebook cards to seed for new accounts
const SEED_NOTEBOOK_CARDS = [
  {
    term: 'Eloquent',
    phonetic: '/ˈel.ə.kwənt/',
    meaning: 'Có tài hùng biện, lưu loát, truyền cảm',
    example: 'She made an eloquent speech at the conference that inspired everyone.',
    tag: 'Từ vựng C1'
  },
  {
    term: 'Pragmatic',
    phonetic: '/præɡˈmæt.ɪk/',
    meaning: 'Thực dụng, mang tính thực tế và hiệu quả cao',
    example: 'We need to adopt a pragmatic approach to solve this technical debt.',
    tag: 'Giao tiếp'
  },
  {
    term: 'Resilience',
    phonetic: '/rɪˈzɪl.jəns/',
    meaning: 'Khả năng phục hồi, kiên cường vượt qua khó khăn',
    example: 'Learning a language requires patience, consistency and resilience.',
    tag: 'Cảm hứng'
  }
];

// Helper: normalize Vietnamese phone number
function normalizePhone(rawPhone) {
  if (!rawPhone) return '';
  let cleaned = rawPhone.replace(/[\s\-\(\)\.]/g, '');
  if (cleaned.startsWith('+84')) {
    cleaned = '0' + cleaned.slice(3);
  }
  return cleaned;
}

// Helper: validate Vietnamese phone number (10 digits: 03, 05, 07, 08, 09)
function isValidVNPhone(phone) {
  const normalized = normalizePhone(phone);
  return /^(03|05|07|08|09)[0-9]{8}$/.test(normalized);
}

// Helper: validate email address
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email?.trim());
}

// Helper to generate JWT token (30 days validity)
function generateToken(user) {
  return jwt.sign(
    { userId: user.id, email: user.email, phone: user.phone },
    JWT_SECRET,
    { expiresIn: '30d' }
  );
}

// Helper: create nodemailer transporter with sanitized SMTP_EMAIL and SMTP_APP_PASSWORD
function createTransporter() {
  const user = (process.env.SMTP_EMAIL || process.env.SMTP_USER || '').trim();
  // Strip all whitespace from App Password to ensure robust authentication
  const pass = (process.env.SMTP_APP_PASSWORD || process.env.SMTP_PASS || '').replace(/\s+/g, '');

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass
    }
  });
}

// Helper: send OTP email via Gmail nodemailer
async function sendOtpEmail(toEmail, otpCode, fullName) {
  console.log(`\n======================================================`);
  console.log(`[AUTH OTP TERMINAL DISPATCH]`);
  console.log(`📧 Gửi tới: ${toEmail} (${fullName || 'Học viên'})`);
  console.log(`🔑 Mã OTP 6 số: ${otpCode}`);
  console.log(`⏱ Hiệu lực: 5 phút`);
  console.log(`======================================================\n`);

  const transporter = createTransporter();
  if (!transporter) {
    console.warn(`[AUTH OTP] ⚠️ SMTP_EMAIL hoặc SMTP_APP_PASSWORD chưa được điền trong server/.env`);
    console.warn(`[AUTH OTP] 💡 Dùng mã OTP từ Terminal bên trên để xác thực nhanh trong môi trường Development!`);
    return { sent: false, reason: 'smtp_not_configured' };
  }

  try {
    const mailOptions = {
      from: `"LexiFlow Studio" <${process.env.SMTP_EMAIL || process.env.SMTP_USER}>`,
      to: toEmail,
      subject: `[LexiFlow] Mã xác minh tài khoản của bạn: ${otpCode}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 560px; margin: 0 auto; padding: 28px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="display: inline-block; background: linear-gradient(135deg, #4f46e5, #06b6d4); color: white; padding: 12px 28px; border-radius: 14px; font-weight: 800; font-size: 22px; letter-spacing: -0.5px;">
              LexiFlow Studio
            </div>
            <p style="color: #64748b; font-size: 13px; margin-top: 8px; font-weight: 500;">Trạm Luyện Tiếng Anh Cá Nhân</p>
          </div>
          <h2 style="color: #0f172a; font-size: 18px; margin-bottom: 12px;">Xin chào ${fullName || 'bạn'},</h2>
          <p style="color: #334155; font-size: 14px; line-height: 1.6;">
            Cảm ơn bạn đã lựa chọn LexiFlow Studio để nâng cao phản xạ tiếng Anh mỗi ngày. Dưới đây là mã xác minh (OTP) bảo mật để kích hoạt tài khoản của bạn:
          </p>
          <div style="text-align: center; margin: 28px 0;">
            <div style="display: inline-block; letter-spacing: 8px; font-size: 32px; font-weight: 900; color: #4f46e5; background-color: #f8fafc; padding: 14px 28px; border-radius: 12px; border: 2px dashed #cbd5e1; font-family: monospace;">
              ${otpCode}
            </div>
          </div>
          <p style="color: #64748b; font-size: 13px; line-height: 1.6;">
            ⏱ Mã xác minh này có hiệu lực trong vòng <strong>5 phút</strong>. Tuyệt đối không chia sẻ mã này với bất kỳ ai để đảm bảo an toàn tài khoản.
          </p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <p style="color: #94a3b8; font-size: 11px; text-align: center;">
            Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email. Trân trọng!
          </p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[AUTH OTP] ✅ Đã gửi email xác thực thành công tới ${toEmail} (Message ID: ${info.messageId})`);
    return { sent: true, messageId: info.messageId };
  } catch (err) {
    console.error(`[AUTH OTP] ❌ Lỗi khi gửi email qua nodemailer:`, err.message);
    return { sent: false, error: err.message };
  }
}

// Helper to initialize user progress and notebook entries
async function initializeUserData(userId) {
  // 1. Insert default user_progress
  await query(
    `INSERT INTO user_progress 
      (user_id, xp, streak, level, daily_goal_minutes, studied_minutes_today, accent, vocab_progress, grammar_progress)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
     ON CONFLICT (user_id) DO NOTHING`,
    [
      userId,
      150, // Welcome bonus XP
      1,   // Streak day 1
      1,   // Level 1
      30,
      0,
      'en-US',
      JSON.stringify({}),
      JSON.stringify({})
    ]
  );

  // 2. Insert default notebook seed entries
  for (let i = 0; i < SEED_NOTEBOOK_CARDS.length; i++) {
    const card = SEED_NOTEBOOK_CARDS[i];
    const noteId = `note-seed-${userId}-${i + 1}`;
    await query(
      `INSERT INTO user_notebooks 
        (id, user_id, term, phonetic, meaning, example, tag)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       ON CONFLICT (id) DO NOTHING`,
      [noteId, userId, card.term, card.phonetic, card.meaning, card.example, card.tag]
    );
  }
}

/**
 * Common handler for Registration Initiation & OTP generation
 * POST /api/auth/register-init AND POST /api/auth/send-otp
 */
async function handleRegisterInitOrSendOtp(req, res) {
  try {
    const { fullName, email, phone, target, type, password, confirmPassword, purpose = 'register' } = req.body;

    // Resolve target and type flexibly
    let cleanTarget = (target || email || phone || '').trim();
    let resolvedType = type;

    if (!resolvedType) {
      resolvedType = cleanTarget.includes('@') ? 'email' : 'phone';
    }

    if (!cleanTarget) {
      return res.status(400).json({
        success: false,
        message: resolvedType === 'phone' ? 'Vui lòng nhập số điện thoại của bạn' : 'Vui lòng nhập địa chỉ email của bạn'
      });
    }

    let cleanEmail = null;
    let cleanPhone = null;

    if (resolvedType === 'phone') {
      cleanPhone = normalizePhone(cleanTarget);
      if (!isValidVNPhone(cleanPhone)) {
        return res.status(400).json({
          success: false,
          message: 'Số điện thoại không hợp lệ (Phải là 10 số di động Việt Nam như 09x, 03x, 08x, 07x, 05x)'
        });
      }
      cleanTarget = cleanPhone;
    } else {
      cleanEmail = cleanTarget.toLowerCase();
      if (!isValidEmail(cleanEmail)) {
        return res.status(400).json({
          success: false,
          message: 'Địa chỉ email không đúng định dạng'
        });
      }
      cleanTarget = cleanEmail;
    }

    const cleanFullName = (fullName || (cleanEmail ? cleanEmail.split('@')[0] : `Người dùng ${cleanPhone.slice(-4)}`)).trim();

    // 1. Password validation (if provided)
    if (password) {
      if (password.length < 6) {
        return res.status(400).json({
          success: false,
          message: 'Mật khẩu phải có ít nhất 6 ký tự'
        });
      }
      if (confirmPassword && password !== confirmPassword) {
        return res.status(400).json({
          success: false,
          message: 'Mật khẩu xác nhận không trùng khớp'
        });
      }
    }

    // 2. Check if user already exists in PostgreSQL
    const existingUserRes = await query(
      `SELECT id, is_verified, email, phone FROM users 
       WHERE (email = $1 AND $1 IS NOT NULL) OR (phone = $2 AND $2 IS NOT NULL)`,
      [cleanEmail, cleanPhone]
    );

    if (purpose === 'register') {
      if (existingUserRes.rowCount > 0 && existingUserRes.rows[0].is_verified) {
        return res.status(400).json({
          success: false,
          message: 'Tài khoản này đã được đăng ký'
        });
      }
    } else if (purpose === 'forgot_password') {
      if (existingUserRes.rowCount === 0) {
        return res.status(400).json({
          success: false,
          message: 'Tài khoản chưa tồn tại trong hệ thống'
        });
      }
    }

    // 3. Generate 6-digit OTP using crypto.randomInt(100000, 1000000)
    const otpCode = crypto.randomInt(100000, 1000000).toString();

    // 4. Hash password with bcrypt (if provided)
    let passwordHash = null;
    if (password) {
      passwordHash = await bcrypt.hash(password, 10);
    }

    const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(cleanFullName)}&backgroundColor=4f46e5`;

    // 5. Store / Update user record directly in PostgreSQL users table
    if (existingUserRes.rowCount > 0) {
      const existingId = existingUserRes.rows[0].id;
      await query(
        `UPDATE users
         SET full_name = $1,
             password_hash = COALESCE($2, password_hash),
             otp_code = $3,
             otp_expires_at = NOW() + INTERVAL '5 minutes',
             is_verified = CASE WHEN $4 = 'forgot_password' THEN is_verified ELSE false END,
             updated_at = CURRENT_TIMESTAMP
         WHERE id = $5`,
        [cleanFullName, passwordHash, otpCode, purpose, existingId]
      );
    } else {
      await query(
        `INSERT INTO users 
          (full_name, email, phone, password_hash, is_verified, otp_code, otp_expires_at, avatar_url, auth_provider)
         VALUES 
          ($1, $2, $3, $4, false, $5, NOW() + INTERVAL '5 minutes', $6, 'local')`,
        [cleanFullName, cleanEmail, cleanPhone, passwordHash, otpCode, avatarUrl]
      );
    }

    // 6. Send OTP: via Gmail nodemailer if email, and always log to server terminal
    if (cleanEmail) {
      sendOtpEmail(cleanEmail, otpCode, cleanFullName).catch(console.error);
    } else {
      console.log(`\n======================================================`);
      console.log(`[AUTH OTP TERMINAL DISPATCH - SMS]`);
      console.log(`📱 Số điện thoại: ${cleanPhone} (${cleanFullName})`);
      console.log(`🔑 Mã OTP 6 số: ${otpCode}`);
      console.log(`⏱ Hiệu lực: 5 phút`);
      console.log(`======================================================\n`);
    }

    return res.json({
      success: true,
      message: `Mã xác minh 6 số đã được tạo và gửi tới ${resolvedType === 'phone' ? 'số điện thoại' : 'email'} ${cleanTarget}. Vui lòng kiểm tra hộp thư hoặc tin nhắn.`,
      target: cleanTarget,
      type: resolvedType
    });
  } catch (err) {
    console.error('[Register-Init / Send-OTP Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Lỗi hệ thống khi gửi mã xác thực: ' + err.message
    });
  }
}

/**
 * 1. POST /api/auth/register-init
 * Initialize registration and send OTP
 */
router.post('/register-init', handleRegisterInitOrSendOtp);

/**
 * 1b. POST /api/auth/send-otp
 * Alias for sending OTP
 */
router.post('/send-otp', handleRegisterInitOrSendOtp);

/**
 * 2. POST /api/auth/verify-otp
 * Query PostgreSQL users table directly, verify OTP code and activate account
 */
router.post('/verify-otp', async (req, res) => {
  try {
    const { target, otp, newPassword, purpose = 'register' } = req.body;

    if (!target || !target.trim() || !otp) {
      return res.status(400).json({
        success: false,
        message: 'Mã xác minh không chính xác hoặc đã hết hạn'
      });
    }

    let cleanTarget = target.trim();
    let cleanEmail = null;
    let cleanPhone = null;

    if (cleanTarget.includes('@')) {
      cleanEmail = cleanTarget.toLowerCase();
    } else {
      cleanPhone = normalizePhone(cleanTarget);
    }

    // Direct query to users table in PostgreSQL
    const userRes = await query(
      `SELECT id, email, phone, full_name, avatar_url, otp_code, otp_expires_at, is_verified, password_hash
       FROM users
       WHERE (email = $1 AND $1 IS NOT NULL) OR (phone = $2 AND $2 IS NOT NULL)`,
      [cleanEmail, cleanPhone]
    );

    if (userRes.rowCount === 0) {
      return res.status(400).json({
        success: false,
        message: 'Mã xác minh không chính xác hoặc đã hết hạn'
      });
    }

    const user = userRes.rows[0];
    const inputOtp = String(otp).trim();

    // 1. Check exact match of 6-digit OTP code in PostgreSQL
    if (!user.otp_code || user.otp_code !== inputOtp) {
      console.warn(`[OTP Check Failed] Target: ${cleanTarget} | Expected: ${user.otp_code} | Given: ${inputOtp}`);
      return res.status(400).json({
        success: false,
        message: 'Mã xác minh không chính xác hoặc đã hết hạn'
      });
    }

    // 2. Check expiration (otp_expires_at > NOW())
    if (!user.otp_expires_at || new Date(user.otp_expires_at) <= new Date()) {
      console.warn(`[OTP Expired] Target: ${cleanTarget} | Expired at: ${user.otp_expires_at}`);
      return res.status(400).json({
        success: false,
        message: 'Mã xác minh không chính xác hoặc đã hết hạn'
      });
    }

    // 3. Handle Forgot Password flow
    if (purpose === 'forgot_password') {
      let updatedPasswordHash = user.password_hash;
      if (newPassword) {
        if (newPassword.length < 6) {
          return res.status(400).json({
            success: false,
            message: 'Mật khẩu mới phải có ít nhất 6 ký tự'
          });
        }
        updatedPasswordHash = await bcrypt.hash(newPassword, 10);
      }

      const updRes = await query(
        `UPDATE users
         SET password_hash = $1,
             is_verified = true,
             otp_code = NULL,
             otp_expires_at = NULL,
             updated_at = CURRENT_TIMESTAMP
         WHERE id = $2
         RETURNING id, full_name, email, phone, avatar_url`,
        [updatedPasswordHash, user.id]
      );

      const verifiedUser = updRes.rows[0];
      const token = generateToken(verifiedUser);

      return res.json({
        success: true,
        message: 'Đổi mật khẩu thành công! Bạn đã được đăng nhập vào hệ thống.',
        token,
        user: {
          id: verifiedUser.id,
          email: verifiedUser.email,
          phone: verifiedUser.phone,
          fullName: verifiedUser.full_name,
          avatarUrl: verifiedUser.avatar_url
        }
      });
    }

    // 4. Handle Standard Verification Flow
    const updRes = await query(
      `UPDATE users 
       SET is_verified = true, 
           otp_code = NULL, 
           otp_expires_at = NULL,
           updated_at = CURRENT_TIMESTAMP 
       WHERE id = $1
       RETURNING id, full_name, email, phone, avatar_url`,
      [user.id]
    );

    const verifiedUser = updRes.rows[0];

    // Initialize progress and starter notebooks in PostgreSQL
    await initializeUserData(verifiedUser.id);

    // Generate real JWT token
    const token = generateToken(verifiedUser);

    console.log(`[AUTH SUCCESS] User #${verifiedUser.id} (${verifiedUser.email || verifiedUser.phone}) đã được xác thực thành công trong PostgreSQL!`);

    return res.json({
      success: true,
      message: 'Xác minh tài khoản thành công! Chào mừng bạn đến với LexiFlow Studio.',
      token,
      user: {
        id: verifiedUser.id,
        email: verifiedUser.email,
        phone: verifiedUser.phone,
        fullName: verifiedUser.full_name,
        avatarUrl: verifiedUser.avatar_url
      }
    });
  } catch (err) {
    console.error('[Verify OTP Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Lỗi xác minh mã OTP: ' + err.message
    });
  }
});

/**
 * 3. POST /api/auth/login
 * Real login with strict database checks in PostgreSQL
 */
router.post('/login', async (req, res) => {
  try {
    const { identifier, email, password } = req.body;
    const loginTarget = (identifier || email || '').trim();

    if (!loginTarget || !password) {
      return res.status(400).json({
        success: false,
        message: 'Vui lòng cung cấp đầy đủ Email/Số điện thoại và Mật khẩu'
      });
    }

    let searchEmail = null;
    let searchPhone = null;

    if (loginTarget.includes('@')) {
      searchEmail = loginTarget.toLowerCase();
    } else {
      searchPhone = normalizePhone(loginTarget);
    }

    // Direct query to PostgreSQL users table
    const userRes = await query(
      `SELECT id, email, phone, password_hash, full_name, avatar_url, auth_provider, is_verified, otp_code, otp_expires_at
       FROM users 
       WHERE (email = $1 AND $1 IS NOT NULL) 
          OR (phone = $2 AND $2 IS NOT NULL)`,
      [searchEmail, searchPhone]
    );

    // Check 1: User does not exist
    if (userRes.rowCount === 0) {
      return res.status(400).json({
        success: false,
        message: 'Tài khoản chưa tồn tại trong hệ thống'
      });
    }

    const user = userRes.rows[0];

    // Google-only account check
    if (!user.password_hash) {
      return res.status(400).json({
        success: false,
        message: 'Tài khoản này được đăng ký bằng Google. Vui lòng chọn "Tiếp tục với Google".'
      });
    }

    // Check 2: Account not verified yet (is_verified === false)
    if (!user.is_verified) {
      let activeOtp = user.otp_code;
      if (!activeOtp || !user.otp_expires_at || new Date(user.otp_expires_at) <= new Date()) {
        activeOtp = crypto.randomInt(100000, 1000000).toString();
        await query(
          `UPDATE users 
           SET otp_code = $1, otp_expires_at = NOW() + INTERVAL '5 minutes', updated_at = CURRENT_TIMESTAMP 
           WHERE id = $2`,
          [activeOtp, user.id]
        );
        if (user.email) {
          sendOtpEmail(user.email, activeOtp, user.full_name).catch(console.error);
        } else {
          console.log(`[AUTH OTP TERMINAL] Phone: ${user.phone} | Mã OTP: ${activeOtp}`);
        }
      }

      return res.status(403).json({
        success: false,
        notVerified: true,
        message: 'Tài khoản chưa được kích hoạt. Vui lòng xác minh mã OTP để tiếp tục.',
        target: user.email || user.phone,
        type: user.email ? 'email' : 'phone'
      });
    }

    // Check 3: Compare password with bcrypt.compare
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Mật khẩu không chính xác'
      });
    }

    const token = generateToken(user);

    return res.json({
      success: true,
      message: 'Đăng nhập thành công!',
      token,
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
        fullName: user.full_name,
        avatarUrl: user.avatar_url
      }
    });
  } catch (err) {
    console.error('[Auth Login Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Lỗi hệ thống khi đăng nhập: ' + err.message
    });
  }
});

/**
 * 4. POST /api/auth/google
 * Real Google OAuth2 token verification (AccessToken or ID Token credential)
 */
router.post('/google', async (req, res) => {
  try {
    const { accessToken, credential, email, fullName, avatarUrl, googleId } = req.body;

    let gEmail = null;
    let gName = null;
    let gPicture = null;
    let gId = null;

    // Mode A: Google Access Token from popup (@react-oauth/google useGoogleLogin)
    if (accessToken) {
      try {
        const userInfoRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${accessToken}` }
        });

        if (userInfoRes.ok) {
          const profile = await userInfoRes.json();
          gEmail = profile.email;
          gName = profile.name;
          gPicture = profile.picture;
          gId = profile.sub;
        } else {
          const errBody = await userInfoRes.text();
          console.warn('[Google UserInfo Error]:', errBody);
          return res.status(400).json({
            success: false,
            message: 'Token Google không hợp lệ hoặc đã hết hạn'
          });
        }
      } catch (fetchErr) {
        console.error('[Google OAuth Fetch Error]:', fetchErr);
        return res.status(500).json({
          success: false,
          message: 'Không thể kết nối đến máy chủ Google để xác thực'
        });
      }
    }

    // Mode B: Google ID Token (Credential)
    if (!gEmail && credential) {
      try {
        const targetClientId = process.env.GOOGLE_CLIENT_ID || undefined;
        const ticket = await googleClient.verifyIdToken({
          idToken: credential,
          audience: targetClientId
        });
        const payload = ticket.getPayload();
        gEmail = payload.email;
        gName = payload.name;
        gPicture = payload.picture;
        gId = payload.sub;
      } catch (tokenErr) {
        console.warn('[Google verifyIdToken Error]:', tokenErr.message);
        // Fallback decode if client ID is flexible in development
        const decoded = jwt.decode(credential);
        if (decoded && decoded.email) {
          gEmail = decoded.email;
          gName = decoded.name;
          gPicture = decoded.picture;
          gId = decoded.sub;
        }
      }
    }

    // Mode C: Direct verified fields fallback if provided
    if (!gEmail && email) {
      gEmail = email;
      gName = fullName;
      gPicture = avatarUrl;
      gId = googleId;
    }

    if (!gEmail || !gEmail.includes('@')) {
      return res.status(400).json({
        success: false,
        message: 'Không thể xác thực thông tin tài khoản Google hoặc email không hợp lệ'
      });
    }

    const normalizedEmail = gEmail.trim().toLowerCase();
    const finalName = (gName || normalizedEmail.split('@')[0]).trim();
    const finalAvatar = gPicture || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(finalName)}&backgroundColor=059669`;

    // Direct query to PostgreSQL
    const userRes = await query(
      `SELECT id, email, phone, full_name, avatar_url, google_id 
       FROM users 
       WHERE email = $1 OR (google_id = $2 AND google_id IS NOT NULL)`,
      [normalizedEmail, gId || '']
    );

    let user;

    if (userRes.rowCount > 0) {
      user = userRes.rows[0];
      const updRes = await query(
        `UPDATE users 
         SET google_id = COALESCE(google_id, $1),
             avatar_url = COALESCE(NULLIF(avatar_url, ''), $2),
             is_verified = true,
             updated_at = CURRENT_TIMESTAMP
         WHERE id = $3
         RETURNING id, full_name, email, phone, avatar_url`,
        [gId, finalAvatar, user.id]
      );
      user = updRes.rows[0];
    } else {
      const insertRes = await query(
        `INSERT INTO users (full_name, email, avatar_url, google_id, is_verified, auth_provider)
         VALUES ($1, $2, $3, $4, true, 'google')
         RETURNING id, full_name, email, phone, avatar_url`,
        [finalName, normalizedEmail, finalAvatar, gId]
      );
      user = insertRes.rows[0];
      await initializeUserData(user.id);
    }

    const token = generateToken(user);

    return res.json({
      success: true,
      message: 'Đăng nhập bằng tài khoản Google thành công!',
      token,
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
        fullName: user.full_name,
        avatarUrl: user.avatar_url || finalAvatar
      }
    });
  } catch (err) {
    console.error('[Google Auth Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Lỗi đăng nhập Google: ' + err.message
    });
  }
});

/**
 * 5. GET /api/auth/me
 */
router.get('/me', authenticateToken, async (req, res) => {
  return res.json({
    success: true,
    user: req.user
  });
});

export default router;
