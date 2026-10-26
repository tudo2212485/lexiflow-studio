import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env from server/.env or project root .env
dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const { Pool, Client } = pg;

const dbUrl = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/lexiflow_db';

// Extract connection parameters for maintenance check
function parseDbConfig(connectionString) {
  try {
    const url = new URL(connectionString);
    return {
      host: url.hostname || 'localhost',
      port: parseInt(url.port || '5432', 10),
      user: url.username || 'postgres',
      password: url.password || 'postgres',
      database: url.pathname ? url.pathname.replace(/^\//, '') : 'lexiflow_db'
    };
  } catch {
    return {
      host: process.env.PGHOST || 'localhost',
      port: parseInt(process.env.PGPORT || '5432', 10),
      user: process.env.PGUSER || 'postgres',
      password: process.env.PGPASSWORD || 'postgres',
      database: process.env.PGDATABASE || 'lexiflow_db'
    };
  }
}

const config = parseDbConfig(dbUrl);

// Create Pool for application queries
export const pool = new Pool({
  connectionString: dbUrl,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000
});

export const query = (text, params) => pool.query(text, params);

/**
 * Ensure the target database exists; if not, create it via maintenance database 'postgres'
 */
async function ensureDatabaseExists() {
  const targetDb = config.database;
  if (!targetDb || targetDb === 'postgres') return;

  const maintenanceClient = new Client({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: 'postgres'
  });

  try {
    await maintenanceClient.connect();
    const res = await maintenanceClient.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [targetDb]
    );

    if (res.rowCount === 0) {
      console.log(`[Database] Database "${targetDb}" chưa tồn tại. Đang tự động tạo...`);
      // Escape identifier safely
      await maintenanceClient.query(`CREATE DATABASE "${targetDb.replace(/"/g, '""')}"`);
      console.log(`[Database] ✅ Đã tạo thành công database "${targetDb}" trên PostgreSQL!`);
    }
  } catch (err) {
    console.warn(`[Database] Lưu ý khi kiểm tra database: ${err.message}`);
  } finally {
    try {
      await maintenanceClient.end();
    } catch {}
  }
}

/**
 * Initialize all required tables: users, user_progress, user_notebooks
 */
export async function initDatabase() {
  try {
    await ensureDatabaseExists();

    console.log('[Database] Đang khởi tạo các bảng trong PostgreSQL...');

    // 1. Table users
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE,
        phone VARCHAR(20) UNIQUE,
        password_hash VARCHAR(255),
        full_name VARCHAR(255) NOT NULL,
        avatar_url TEXT,
        google_id VARCHAR(255) UNIQUE,
        auth_provider VARCHAR(30) DEFAULT 'local',
        is_verified BOOLEAN DEFAULT false,
        otp_code VARCHAR(10),
        otp_expires_at TIMESTAMP WITH TIME ZONE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Ensure columns exist if table was already created
    await pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS phone VARCHAR(20) UNIQUE;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS auth_provider VARCHAR(30) DEFAULT 'local';
      ALTER TABLE users ADD COLUMN IF NOT EXISTS is_verified BOOLEAN DEFAULT false;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS otp_code VARCHAR(10);
      ALTER TABLE users ADD COLUMN IF NOT EXISTS otp_expires_at TIMESTAMP WITH TIME ZONE;
      ALTER TABLE users ALTER COLUMN email DROP NOT NULL;
    `);

    // 2. Table user_progress
    await pool.query(`
      CREATE TABLE IF NOT EXISTS user_progress (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE UNIQUE,
        xp INTEGER DEFAULT 0,
        streak INTEGER DEFAULT 1,
        level INTEGER DEFAULT 1,
        daily_goal_minutes INTEGER DEFAULT 30,
        studied_minutes_today INTEGER DEFAULT 0,
        accent VARCHAR(20) DEFAULT 'en-US',
        vocab_progress JSONB DEFAULT '{}'::jsonb,
        grammar_progress JSONB DEFAULT '{}'::jsonb,
        last_active_date DATE DEFAULT CURRENT_DATE,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 3. Table user_notebooks
    await pool.query(`
      CREATE TABLE IF NOT EXISTS user_notebooks (
        id VARCHAR(100) PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        term VARCHAR(255) NOT NULL,
        phonetic VARCHAR(255) DEFAULT '',
        meaning TEXT NOT NULL,
        example TEXT DEFAULT '',
        tag VARCHAR(100) DEFAULT 'Từ mới',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 4. Table otp_verifications for pending signups and forgot passwords
    await pool.query(`
      CREATE TABLE IF NOT EXISTS otp_verifications (
        id SERIAL PRIMARY KEY,
        target VARCHAR(255) NOT NULL,
        otp_code VARCHAR(10) NOT NULL,
        type VARCHAR(20) NOT NULL,
        purpose VARCHAR(50) DEFAULT 'register',
        metadata JSONB DEFAULT '{}'::jsonb,
        expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Create indexes for fast lookups
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
      CREATE INDEX IF NOT EXISTS idx_users_phone ON users(phone);
      CREATE INDEX IF NOT EXISTS idx_users_google_id ON users(google_id);
      CREATE INDEX IF NOT EXISTS idx_progress_user_id ON user_progress(user_id);
      CREATE INDEX IF NOT EXISTS idx_notebooks_user_id ON user_notebooks(user_id);
      CREATE INDEX IF NOT EXISTS idx_otp_target ON otp_verifications(target);
    `);

    console.log('[Database] ✅ Khởi tạo 3 bảng (users, user_progress, user_notebooks) và các Index thành công!');
    return true;
  } catch (err) {
    console.error('[Database] ❌ Lỗi khởi tạo cơ sở dữ liệu:', err);
    throw err;
  }
}
