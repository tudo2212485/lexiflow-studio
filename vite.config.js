import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const rootEnv = loadEnv(mode, process.cwd(), '');
  const serverEnvPath = path.resolve(process.cwd(), 'server', '.env');
  let serverGoogleId = '';

  if (fs.existsSync(serverEnvPath)) {
    const serverContent = fs.readFileSync(serverEnvPath, 'utf-8');
    const match = serverContent.match(/^GOOGLE_CLIENT_ID=(.*)$/m);
    if (match) {
      serverGoogleId = match[1].replace(/['"]/g, '').trim();
    }
  }

  const effectiveGoogleId = (process.env.VITE_GOOGLE_CLIENT_ID || process.env.GOOGLE_CLIENT_ID || rootEnv.VITE_GOOGLE_CLIENT_ID || rootEnv.GOOGLE_CLIENT_ID || serverGoogleId || '').replace(/['"]/g, '').trim();

  return {
    plugins: [
      tailwindcss(),
      react(),
    ],
    define: {
      'import.meta.env.VITE_GOOGLE_CLIENT_ID': JSON.stringify(effectiveGoogleId)
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true
        }
      }
    }
  };
});
