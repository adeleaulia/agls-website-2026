import { readFileSync } from 'node:fs';
const config = JSON.parse(readFileSync(new URL('../wrangler.jsonc', import.meta.url), 'utf8'));
if (config.d1_databases.some(db => db.database_id === '00000000-0000-0000-0000-000000000000')) {
  throw new Error('Production D1 is not configured. Follow DATABASE.txt before deploying.');
}
