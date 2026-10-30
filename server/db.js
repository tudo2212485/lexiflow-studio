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

// Detect if running against a local database or a cloud database (Neon, Supabase, etc.)
const isLocal =
  config.host === 'localhost' ||
  config.host === '127.0.0.1' ||
  dbUrl.includes('localhost') ||
  dbUrl.includes('127.0.0.1');

// Create Pool with SSL enabled for cloud database providers
export const pool = new Pool({
  connectionString: dbUrl,
  ssl: isLocal ? false : { rejectUnauthorized: false },
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
  keepAlive: true
});

export const query = (text, params) => pool.query(text, params);

/**
 * Ensure the target database exists; if not, create it via maintenance database 'postgres'
 * (Skipped on Cloud databases like Neon/Supabase where DB is pre-provisioned)
 */
async function ensureDatabaseExists() {
  if (!isLocal) return;

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
 * Global flag ensuring schema migration runs EXACTLY ONCE per Serverless instance lifecycle.
 * Cached to prevent executing DDL queries on subsequent requests, eliminating login lag.
 */
let isSchemaInitialized = false;
let schemaInitPromise = null;

/**
 * Ensure database schema exists and is fully migrated.
 * Consolidates all required tables and columns into a single atomic SQL command.
 */
export async function ensureDbSchema() {
  if (isSchemaInitialized) return true;

  if (!schemaInitPromise) {
    schemaInitPromise = (async () => {
      try {
        await ensureDatabaseExists();

        console.log('[Database Schema] Đang kiểm tra và khởi tạo schema trong PostgreSQL...');

        // Execute unified migration in a single round-trip
        await pool.query(`
          CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE,
            phone VARCHAR(20) UNIQUE,
            password_hash VARCHAR(255),
            full_name VARCHAR(255) NOT NULL DEFAULT 'Học viên',
            avatar_url TEXT,
            google_id VARCHAR(255) UNIQUE,
            auth_provider VARCHAR(30) DEFAULT 'local',
            is_verified BOOLEAN DEFAULT false,
            otp_code VARCHAR(10),
            otp_expires_at TIMESTAMP WITH TIME ZONE,
            xp INT DEFAULT 0,
            streak INT DEFAULT 1,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );

          ALTER TABLE users ADD COLUMN IF NOT EXISTS xp INT DEFAULT 0, ADD COLUMN IF NOT EXISTS streak INT DEFAULT 1, ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
          ALTER TABLE users ADD COLUMN IF NOT EXISTS phone VARCHAR(20);
          ALTER TABLE users ADD COLUMN IF NOT EXISTS auth_provider VARCHAR(30) DEFAULT 'local';
          ALTER TABLE users ADD COLUMN IF NOT EXISTS is_verified BOOLEAN DEFAULT false;
          ALTER TABLE users ADD COLUMN IF NOT EXISTS otp_code VARCHAR(10);
          ALTER TABLE users ADD COLUMN IF NOT EXISTS otp_expires_at TIMESTAMP WITH TIME ZONE;
          ALTER TABLE users ADD COLUMN IF NOT EXISTS avatar_url TEXT;
          ALTER TABLE users ADD COLUMN IF NOT EXISTS google_id VARCHAR(255);

          CREATE TABLE IF NOT EXISTS user_progress (
            user_id INT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
            xp INT DEFAULT 0,
            streak INT DEFAULT 1,
            vocab_progress JSONB DEFAULT '{}'::jsonb,
            grammar_progress JSONB DEFAULT '{}'::jsonb,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          );

          ALTER TABLE user_progress ADD COLUMN IF NOT EXISTS xp INT DEFAULT 0, ADD COLUMN IF NOT EXISTS streak INT DEFAULT 1, ADD COLUMN IF NOT EXISTS vocab_progress JSONB DEFAULT '{}'::jsonb, ADD COLUMN IF NOT EXISTS grammar_progress JSONB DEFAULT '{}'::jsonb, ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
          ALTER TABLE user_progress ADD COLUMN IF NOT EXISTS level INT DEFAULT 1;
          ALTER TABLE user_progress ADD COLUMN IF NOT EXISTS daily_goal_minutes INT DEFAULT 30;
          ALTER TABLE user_progress ADD COLUMN IF NOT EXISTS studied_minutes_today INT DEFAULT 0;
          ALTER TABLE user_progress ADD COLUMN IF NOT EXISTS accent VARCHAR(20) DEFAULT 'en-US';
          ALTER TABLE user_progress ADD COLUMN IF NOT EXISTS last_active_date DATE DEFAULT CURRENT_DATE;

          CREATE TABLE IF NOT EXISTS user_notebooks (
            id VARCHAR(100) PRIMARY KEY,
            user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            term VARCHAR(255) NOT NULL DEFAULT '',
            phonetic VARCHAR(255) DEFAULT '',
            meaning TEXT NOT NULL DEFAULT '',
            example TEXT DEFAULT '',
            tag VARCHAR(100) DEFAULT 'Từ mới',
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );

          ALTER TABLE user_notebooks ADD COLUMN IF NOT EXISTS user_id INTEGER REFERENCES users(id) ON DELETE CASCADE;
          ALTER TABLE user_notebooks ADD COLUMN IF NOT EXISTS term VARCHAR(255) DEFAULT '';
          ALTER TABLE user_notebooks ADD COLUMN IF NOT EXISTS phonetic VARCHAR(255) DEFAULT '';
          ALTER TABLE user_notebooks ADD COLUMN IF NOT EXISTS meaning TEXT DEFAULT '';
          ALTER TABLE user_notebooks ADD COLUMN IF NOT EXISTS example TEXT DEFAULT '';
          ALTER TABLE user_notebooks ADD COLUMN IF NOT EXISTS tag VARCHAR(100) DEFAULT 'Từ mới';
          ALTER TABLE user_notebooks ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;
          ALTER TABLE user_notebooks ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;
          ALTER TABLE user_notebooks ADD COLUMN IF NOT EXISTS items JSONB;

          CREATE TABLE IF NOT EXISTS saved_words (
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(id) ON DELETE CASCADE,
            term VARCHAR(255) NOT NULL DEFAULT '',
            phonetic VARCHAR(255) DEFAULT '',
            meaning TEXT DEFAULT '',
            definition TEXT DEFAULT '',
            example TEXT DEFAULT '',
            tag VARCHAR(100) DEFAULT 'Từ mới',
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
          ALTER TABLE saved_words ADD COLUMN IF NOT EXISTS term VARCHAR(255) DEFAULT '';
          ALTER TABLE saved_words ADD COLUMN IF NOT EXISTS phonetic VARCHAR(255) DEFAULT '';
          ALTER TABLE saved_words ADD COLUMN IF NOT EXISTS meaning TEXT DEFAULT '';
          ALTER TABLE saved_words ADD COLUMN IF NOT EXISTS definition TEXT DEFAULT '';
          ALTER TABLE saved_words ADD COLUMN IF NOT EXISTS example TEXT DEFAULT '';
          ALTER TABLE saved_words ADD COLUMN IF NOT EXISTS tag VARCHAR(100) DEFAULT 'Từ mới';

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

          CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
          CREATE INDEX IF NOT EXISTS idx_users_google_id ON users(google_id);
          CREATE INDEX IF NOT EXISTS idx_progress_user_id ON user_progress(user_id);
          CREATE INDEX IF NOT EXISTS idx_notebooks_user_id ON user_notebooks(user_id);
          CREATE INDEX IF NOT EXISTS idx_saved_words_user_id ON saved_words(user_id);
        `);

        isSchemaInitialized = true;
        console.log('[Database Schema] ✅ Khởi tạo & xác thực schema PostgreSQL thành công!');
        return true;
      } catch (err) {
        console.error('[Database Schema] ❌ Lỗi tự động khởi tạo schema:', err.message);
        schemaInitPromise = null;
        throw err;
      }
    })();
  }
  return schemaInitPromise;
}

// Aliases for backwards compatibility
export const ensureDbInitialized = ensureDbSchema;
export const initDatabase = ensureDbSchema;
