import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../server/.env') });

const user = (process.env.SMTP_EMAIL || '').trim();
const pass = (process.env.SMTP_APP_PASSWORD || '').replace(/\s+/g, '');

console.log('--- KIỂM TRA KẾT NỐI SMTP GMAIL ---');
console.log('Tài khoản gửi:', user);
console.log('Độ dài mật khẩu ứng dụng:', pass.length);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user, pass }
});

try {
  await transporter.verify();
  console.log('✅ transporter.verify() THÀNH CÔNG! Kết nối SMTP sẵn sàng.');

  const testOtp = crypto.randomInt(100000, 1000000).toString();
  console.log(`Đang gửi thử email chứa mã OTP: ${testOtp} tới ${user}...`);

  const info = await transporter.sendMail({
    from: `"LexiFlow Studio" <${user}>`,
    to: user,
    subject: `[LexiFlow] Mã OTP xác nhận kết nối hệ thống: ${testOtp}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #4f46e5; margin-bottom: 12px;">LexiFlow Studio</h2>
        <p>Xin chào, hệ thống gửi email xác thực OTP tự động của LexiFlow Studio đã kết nối thành công 100% với hộp thư Gmail của bạn.</p>
        <div style="background-color: #f1f5f9; padding: 16px; border-radius: 8px; text-align: center; margin: 20px 0;">
          <span style="font-size: 28px; font-weight: bold; letter-spacing: 6px; color: #4f46e5; font-family: monospace;">${testOtp}</span>
        </div>
        <p style="color: #64748b; font-size: 13px;">Mã này được gửi tự động để kiểm thử tính năng bảo mật OTP.</p>
      </div>
    `
  });

  console.log('🎉 GỬI EMAIL THÀNH CÔNG!');
  console.log('Message ID:', info.messageId);
  console.log('Response:', info.response);
  process.exit(0);
} catch (err) {
  console.error('❌ Lỗi kiểm tra SMTP:', err.message);
  process.exit(1);
}
