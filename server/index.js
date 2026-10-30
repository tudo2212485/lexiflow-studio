import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { initDatabase, ensureDbInitialized, ensureDbSchema, pool } from './db.js';
import { syncEnv } from '../scripts/syncEnv.js';
import authRoutes from './routes/auth.js';
import userRoutes, { getProgressHandler, updateProgressHandler } from './routes/user.js';
import { authenticateToken } from './middleware/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sync and Load env (Only on local machine, Vercel provides environment variables via dashboard)
if (!process.env.VERCEL) {
  try {
    syncEnv();
  } catch (err) {
    console.warn('[SyncEnv Notice]:', err.message);
  }
  dotenv.config({ path: path.resolve(__dirname, '.env') });
  dotenv.config({ path: path.resolve(__dirname, '../.env') });
}

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all environments (Vercel domains, preview URLs, and local dev)
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// Body parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Middleware to ensure DB tables are ready on serverless cold starts
app.use(async (req, res, next) => {
  try {
    await ensureDbInitialized();
  } catch (err) {
    console.warn('[Database Notice]: Initializing DB in background -', err.message);
  }
  next();
});

// Health check endpoint handler
const healthHandler = async (req, res) => {
  try {
    const dbRes = await pool.query('SELECT NOW() as current_time, current_database() as database');
    return res.json({
      status: 'ok',
      service: 'LexiFlow Studio Backend API',
      timestamp: dbRes.rows[0].current_time,
      database: dbRes.rows[0].database,
      environment: process.env.VERCEL ? 'vercel-serverless' : 'local-node',
      version: '4.0.0'
    });
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      message: 'Lỗi kết nối cơ sở dữ liệu: ' + err.message
    });
  }
};

app.get('/api/health', healthHandler);
app.get('/health', healthHandler);

// Mount Routes (supporting both /api/* and direct path for Vercel rewrites)
app.use('/api/auth', authRoutes);
app.use('/auth', authRoutes);

app.use('/api/user', userRoutes);
app.use('/user', userRoutes);

// Direct /api/progress and /progress aliases for study progress
app.get('/api/progress', authenticateToken, getProgressHandler);
app.get('/progress', authenticateToken, getProgressHandler);
app.post('/api/progress', authenticateToken, updateProgressHandler);
app.post('/progress', authenticateToken, updateProgressHandler);
app.put('/api/progress', authenticateToken, updateProgressHandler);
app.put('/progress', authenticateToken, updateProgressHandler);

// 404 handler for API routes
app.use('/api', (req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint "${req.method} ${req.originalUrl}" không tồn tại`
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Unhandled Server Error]:', err);
  res.status(500).json({
    success: false,
    message: 'Lỗi máy chủ nội bộ',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start Server and Initialize PostgreSQL locally (Skip on Vercel Serverless environment)
async function startServer() {
  try {
    console.log('🚀 Đang khởi động LexiFlow Studio Backend Server...');
    
    // Auto-create database and tables if not exist
    await initDatabase();

    app.listen(PORT, () => {
      console.log(`=======================================================`);
      console.log(`✨ LexiFlow Studio Backend API is RUNNING!`);
      console.log(`🔗 API Base URL : http://localhost:${PORT}/api`);
      console.log(`🩺 Health Check : http://localhost:${PORT}/api/health`);
      console.log(`🔐 Auth API     : http://localhost:${PORT}/api/auth`);
      console.log(`🔄 Sync API     : http://localhost:${PORT}/api/user/sync`);
      console.log(`🐘 PostgreSQL   : Connected to localhost:5432/lexiflow_db`);
      console.log(`=======================================================`);
    });
  } catch (err) {
    console.error('❌ Không thể khởi động server do lỗi kết nối Database:', err.message);
    process.exit(1);
  }
}

if (!process.env.VERCEL) {
  startServer();
}

export default app;
