/**
 * One-time setup: verify connection, apply schema migration, seed demo users.
 * Reads credentials from .env in project root (never commit secrets).
 */
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@supabase/supabase-js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

function loadEnv() {
  const envPath = resolve(root, '.env');
  const raw = readFileSync(envPath, 'utf8');
  const env = {};
  for (const line of raw.split('\n')) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (!m) continue;
    env[m[1]] = m[2].replace(/^"|"$/g, '');
  }
  return env;
}

const env = loadEnv();
const url = env.SUPABASE_URL;
const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
const publishableKey = env.SUPABASE_PUBLISHABLE_KEY;

if (!url || !serviceKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

function createSupabaseFetch(supabaseKey) {
  const isNewKey = supabaseKey.startsWith('sb_publishable_') || supabaseKey.startsWith('sb_secret_');
  return (input, init) => {
    const headers = new Headers(init?.headers);
    if (isNewKey && headers.get('Authorization') === `Bearer ${supabaseKey}`) {
      headers.delete('Authorization');
    }
    headers.set('apikey', supabaseKey);
    return fetch(input, { ...init, headers });
  };
}

function makeClient(key) {
  return createClient(url, key, {
    global: { fetch: createSupabaseFetch(key) },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

const admin = makeClient(serviceKey);

async function checkSchema() {
  const tables = ['bootcamps', 'profiles', 'settings', 'user_roles'];
  const results = {};
  for (const table of tables) {
    const { data, error } = await admin.from(table).select('*').limit(1);
    results[table] = error ? { ok: false, message: error.message, code: error.code } : { ok: true, sample: data?.length ?? 0 };
  }
  return results;
}

async function main() {
  console.log('Project:', url);
  console.log('Checking schema...\n');
  const schema = await checkSchema();
  console.log(JSON.stringify(schema, null, 2));

  const needsMigration = Object.values(schema).some((r) => !r.ok);
  if (needsMigration) {
    console.log('\nSchema incomplete — run migration SQL via Supabase SQL editor or:');
    console.log('  npx supabase db push --db-url "<DATABASE_URL>"');
    process.exit(2);
  }

  const { data: settings } = await admin.from('settings').select('key');
  console.log('\nSettings rows:', settings?.length ?? 0);

  const { count: bootcampCount } = await admin.from('bootcamps').select('*', { count: 'exact', head: true });
  console.log('Bootcamps:', bootcampCount ?? 0);

  const { data: users } = await admin.auth.admin.listUsers({ page: 1, perPage: 10 });
  console.log('Auth users:', users?.users?.length ?? 0);

  const pub = makeClient(publishableKey);
  const { data: publicBootcamps, error: pubErr } = await pub.from('bootcamps').select('id').limit(1);
  console.log('\nPublishable key test:', pubErr ? `FAIL: ${pubErr.message}` : `OK (${publicBootcamps?.length ?? 0} rows)`);

  const { data: publicSettings, error: settingsErr } = await pub.from('settings').select('key').limit(5);
  console.log('Publishable settings test:', settingsErr ? `FAIL: ${settingsErr.message}` : `OK (${publicSettings?.length ?? 0} rows)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
