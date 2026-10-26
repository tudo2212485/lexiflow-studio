import { query } from '../server/db.js';

async function runTestSuite() {
  console.log('🧪 BẮT ĐẦU KIỂM THỬ HỆ THỐNG AUTHENTICATION & POSTGRESQL THẬT...\n');

  const testEmail = `engineer.test.${Date.now()}@lexiflow.com`;
  const password = 'SeniorPassword2026!';

  // TEST 1: Password mismatch on register-init
  console.log('1️⃣ Kiểm thử mật khẩu xác nhận không khớp:');
  const res1 = await fetch('http://localhost:5000/api/auth/register-init', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullName: 'Engineer Test',
      email: testEmail,
      password: password,
      confirmPassword: 'WrongPassword!'
    })
  });
  const data1 = await res1.json();
  console.log(`   Status: ${res1.status} | Message: ${data1.message}`);
  if (res1.status === 400 && data1.message.includes('không trùng khớp')) {
    console.log('   ✅ ĐẠT: Từ chối đăng ký khi mật khẩu xác nhận sai.\n');
  } else {
    throw new Error('Test 1 thất bại');
  }

  // TEST 2: Valid register-init
  console.log('2️⃣ Kiểm thử khởi tạo đăng ký hợp lệ:');
  const res2 = await fetch('http://localhost:5000/api/auth/register-init', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullName: 'Senior Engineer',
      email: testEmail,
      password: password,
      confirmPassword: password
    })
  });
  const data2 = await res2.json();
  console.log(`   Status: ${res2.status} | Message: ${data2.message}`);

  // Query database to check user state
  const dbUserRes = await query('SELECT id, email, full_name, is_verified, otp_code, otp_expires_at, password_hash FROM users WHERE email = $1', [testEmail]);
  const dbUser = dbUserRes.rows[0];
  console.log(`   Database User ID: ${dbUser.id}`);
  console.log(`   Database is_verified: ${dbUser.is_verified}`);
  console.log(`   Database otp_code: ${dbUser.otp_code}`);
  console.log(`   Database otp_expires_at: ${dbUser.otp_expires_at}`);
  if (dbUser && !dbUser.is_verified && dbUser.otp_code && dbUser.otp_code.length === 6) {
    console.log('   ✅ ĐẠT: Người dùng đã được lưu vào PostgreSQL với is_verified=false và mã OTP 6 số hợp lệ.\n');
  } else {
    throw new Error('Test 2 thất bại: Dữ liệu PostgreSQL không đúng');
  }

  // TEST 3: Verify OTP with wrong code
  console.log('3️⃣ Kiểm thử nhập sai mã OTP:');
  const res3 = await fetch('http://localhost:5000/api/auth/verify-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      target: testEmail,
      otp: '000000',
      purpose: 'register'
    })
  });
  const data3 = await res3.json();
  console.log(`   Status: ${res3.status} | Message: ${data3.message}`);
  if (res3.status === 400 && data3.message.includes('Mã xác minh không chính xác')) {
    console.log('   ✅ ĐẠT: Chặn tuyệt đối khi nhập sai mã OTP.\n');
  } else {
    throw new Error('Test 3 thất bại: Cho phép mã sai');
  }

  // TEST 4: Verify OTP with CORRECT code
  console.log('4️⃣ Kiểm thử nhập ĐÚNG mã OTP từ PostgreSQL:');
  const res4 = await fetch('http://localhost:5000/api/auth/verify-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      target: testEmail,
      otp: dbUser.otp_code,
      purpose: 'register'
    })
  });
  const data4 = await res4.json();
  console.log(`   Status: ${res4.status} | Message: ${data4.message}`);
  console.log(`   JWT Token: ${data4.token?.slice(0, 25)}...`);

  // Check updated database state
  const dbUserVerified = (await query('SELECT is_verified, otp_code FROM users WHERE id = $1', [dbUser.id])).rows[0];
  console.log(`   Database after verify is_verified: ${dbUserVerified.is_verified}`);
  console.log(`   Database after verify otp_code: ${dbUserVerified.otp_code}`);
  if (dbUserVerified.is_verified && dbUserVerified.otp_code === null && data4.token) {
    console.log('   ✅ ĐẠT: Tài khoản kích hoạt thành công, otp_code reset về NULL, trả về JWT token thật.\n');
  } else {
    throw new Error('Test 4 thất bại');
  }

  // TEST 5: Login with wrong password
  console.log('5️⃣ Kiểm thử Đăng nhập với mật khẩu SAI:');
  const res5 = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      identifier: testEmail,
      password: 'IncorrectPassword!'
    })
  });
  const data5 = await res5.json();
  console.log(`   Status: ${res5.status} | Message: ${data5.message}`);
  if (res5.status === 400 && data5.message.includes('Mật khẩu không chính xác')) {
    console.log('   ✅ ĐẠT: Chặn mật khẩu sai qua bcrypt.compare.\n');
  } else {
    throw new Error('Test 5 thất bại');
  }

  // TEST 6: Login with right password
  console.log('6️⃣ Kiểm thử Đăng nhập với mật khẩu ĐÚNG:');
  const res6 = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      identifier: testEmail,
      password: password
    })
  });
  const data6 = await res6.json();
  console.log(`   Status: ${res6.status} | Message: ${data6.message}`);
  console.log(`   JWT Token: ${data6.token?.slice(0, 25)}...`);
  if (res6.status === 200 && data6.token && data6.user.email === testEmail) {
    console.log('   ✅ ĐẠT: Đăng nhập thành công và cấp JWT token chuẩn.\n');
  } else {
    throw new Error('Test 6 thất bại');
  }

  // TEST 7: Register-init on already verified account
  console.log('7️⃣ Kiểm thử đăng ký lại trên tài khoản đã tồn tại và đã kích hoạt:');
  const res7 = await fetch('http://localhost:5000/api/auth/register-init', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullName: 'Duplicate User',
      email: testEmail,
      password: password
    })
  });
  const data7 = await res7.json();
  console.log(`   Status: ${res7.status} | Message: ${data7.message}`);
  if (res7.status === 400 && data7.message.includes('Tài khoản này đã được đăng ký')) {
    console.log('   ✅ ĐẠT: Báo lỗi 400 "Tài khoản này đã được đăng ký" khi đã kích hoạt.\n');
  } else {
    throw new Error('Test 7 thất bại');
  }

  // TEST 8: Login on non-existent account
  console.log('8️⃣ Kiểm thử đăng nhập tài khoản không tồn tại:');
  const res8 = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      identifier: 'nonexistent.user.12345@gmail.com',
      password: 'SomePassword!'
    })
  });
  const data8 = await res8.json();
  console.log(`   Status: ${res8.status} | Message: ${data8.message}`);
  if (res8.status === 400 && data8.message.includes('Tài khoản chưa tồn tại')) {
    console.log('   ✅ ĐẠT: Báo lỗi rõ ràng "Tài khoản chưa tồn tại trong hệ thống".\n');
  } else {
    throw new Error('Test 8 thất bại');
  }

  console.log('🎉 TOÀN BỘ 8 BÀI TEST BACKEND VÀ POSTGRESQL ĐỀU VƯỢT QUA 100%!');
  process.exit(0);
}

runTestSuite().catch(err => {
  console.error('❌ Lỗi kiểm thử:', err);
  process.exit(1);
});
