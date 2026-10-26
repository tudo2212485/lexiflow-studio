import { initDatabase, pool, query } from '../server/db.js';

console.log('--- KIỂM TRA TOÀN DIỆN POSTGRESQL & BẢNG DỮ LIỆU ---');

try {
  await initDatabase();
  console.log('✅ Khởi tạo & xác thực database thành công.');

  const res = await query(`
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public' 
    ORDER BY table_name;
  `);

  console.log('📋 Danh sách các bảng trong PostgreSQL:');
  res.rows.forEach(r => console.log('   - ' + r.table_name));

  const columnsRes = await query(`
    SELECT column_name, data_type 
    FROM information_schema.columns 
    WHERE table_name = 'users' 
    ORDER BY ordinal_position;
  `);

  console.log('\n🔍 Các cột trong bảng users:');
  columnsRes.rows.forEach(c => console.log(`   - ${c.column_name} (${c.data_type})`));

  process.exit(0);
} catch (err) {
  console.error('❌ Lỗi kết nối PostgreSQL:', err);
  process.exit(1);
}
