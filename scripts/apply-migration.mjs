/**
 * Apply supabase/migrations/*.sql to the remote database using DATABASE_URL from .env
 */
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import pg from 'pg';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const env = Object.fromEntries(
  readFileSync(resolve(root, '.env'), 'utf8')
    .split('\n')
    .map((line) => line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/))
    .filter(Boolean)
    .map((m) => [m[1], m[2].replace(/^"|"$/g, '')]),
);

const databaseUrl = env.DATABASE_URL;
if (!databaseUrl) {
  console.error('Missing DATABASE_URL in .env');
  process.exit(1);
}

const migrationsDir = resolve(root, 'supabase', 'migrations');
const files = readdirSync(migrationsDir).filter((f) => f.endsWith('.sql')).sort();

const client = new pg.Client({
  connectionString: databaseUrl,
  ssl: { rejectUnauthorized: false },
});

async function main() {
  console.log('Connecting to database...');
  await client.connect();
  console.log('Connected. Applying', files.length, 'migration(s)...');

  for (const file of files) {
    const sql = readFileSync(resolve(migrationsDir, file), 'utf8');
    console.log('Running', file);
    await client.query(sql);
    console.log('Done:', file);
  }

  await client.query("NOTIFY pgrst, 'reload schema'");
  console.log('PostgREST schema reload notified.');
  await client.end();
  console.log('Migration complete.');
}

main().catch(async (err) => {
  console.error('Migration failed:', err.message);
  try {
    await client.end();
  } catch {
    /* ignore */
  }
  process.exit(1);
});
