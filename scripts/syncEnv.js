import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const rootEnvPath = path.resolve(rootDir, '.env');
const serverEnvPath = path.resolve(rootDir, 'server', '.env');

/**
 * Synchronize environment variables between root .env and server/.env
 */
export function syncEnv() {
  if (process.env.VERCEL) return;

  let rootContent = fs.existsSync(rootEnvPath) ? fs.readFileSync(rootEnvPath, 'utf-8') : '';
  let serverContent = fs.existsSync(serverEnvPath) ? fs.readFileSync(serverEnvPath, 'utf-8') : '';

  // Extract VITE_GOOGLE_CLIENT_ID from root .env
  const viteMatch = rootContent.match(/^VITE_GOOGLE_CLIENT_ID=(.*)$/m);
  const viteGoogleId = viteMatch ? viteMatch[1].trim() : '';

  // Extract GOOGLE_CLIENT_ID from server/.env
  const serverMatch = serverContent.match(/^GOOGLE_CLIENT_ID=(.*)$/m);
  const serverGoogleId = serverMatch ? serverMatch[1].trim() : '';

  let syncedId = '';
  if (viteGoogleId && !serverGoogleId) {
    syncedId = viteGoogleId;
  } else if (serverGoogleId && !viteGoogleId) {
    syncedId = serverGoogleId;
  } else if (viteGoogleId) {
    syncedId = viteGoogleId;
  }

  let updated = false;

  if (syncedId) {
    // Sync into server/.env if needed
    if (serverGoogleId !== syncedId) {
      if (serverMatch) {
        serverContent = serverContent.replace(/^GOOGLE_CLIENT_ID=.*$/m, `GOOGLE_CLIENT_ID=${syncedId}`);
      } else {
        serverContent += `\nGOOGLE_CLIENT_ID=${syncedId}\n`;
      }
      fs.writeFileSync(serverEnvPath, serverContent, 'utf-8');
      console.log(`[Env Sync] ✅ Đã đồng bộ GOOGLE_CLIENT_ID vào server/.env`);
      updated = true;
    }

    // Sync into root .env if needed
    if (viteGoogleId !== syncedId) {
      if (viteMatch) {
        rootContent = rootContent.replace(/^VITE_GOOGLE_CLIENT_ID=.*$/m, `VITE_GOOGLE_CLIENT_ID=${syncedId}`);
      } else {
        rootContent += `\nVITE_GOOGLE_CLIENT_ID=${syncedId}\n`;
      }
      fs.writeFileSync(rootEnvPath, rootContent, 'utf-8');
      console.log(`[Env Sync] ✅ Đã đồng bộ VITE_GOOGLE_CLIENT_ID vào root .env`);
      updated = true;
    }
  }

  return { syncedId, updated };
}

// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const result = syncEnv();
  console.log('[Env Sync Status]:', result);
}
