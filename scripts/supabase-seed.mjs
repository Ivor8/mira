/**
 * Seed demo users and verify Supabase after schema migration.
 * Requires schema to be applied first (see npm run supabase:migrate instructions).
 */
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@supabase/supabase-js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function loadEnv() {
  const env = {};
  for (const line of readFileSync(resolve(root, '.env'), 'utf8').split('\n')) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (m) env[m[1]] = m[2].replace(/^"|"$/g, '');
  }
  return env;
}

function fetchFor(key) {
  const isNew = key.startsWith('sb_publishable_') || key.startsWith('sb_secret_');
  return (input, init) => {
    const headers = new Headers(init?.headers);
    if (isNew && headers.get('Authorization') === `Bearer ${key}`) headers.delete('Authorization');
    headers.set('apikey', key);
    return fetch(input, { ...init, headers });
  };
}

function makeClient(url, key) {
  return createClient(url, key, {
    global: { fetch: fetchFor(key) },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

const env = loadEnv();
const url = env.SUPABASE_URL;
const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
const publishableKey = env.SUPABASE_PUBLISHABLE_KEY;

if (!url || !serviceKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

const admin = makeClient(url, serviceKey);

const DEMO_USERS = [
  { email: 'admin@miraedge.tech', password: 'Admin@12345', full_name: 'Mira Edge Admin', roles: ['super_admin', 'admin'] },
  { email: 'student@miraedge.tech', password: 'Student@12345', full_name: 'Demo Student', roles: ['student'] },
];

async function ensureSchema() {
  const { error } = await admin.from('settings').select('key').limit(1);
  if (error) {
    console.error('Schema not ready:', error.message);
    console.error('\nApply migration first:');
    console.error('  1. Open https://supabase.com/dashboard/project/uqpifkzdkrifbsnuoovl/sql/new');
    console.error('  2. Paste contents of supabase/migrations/20260701232335_539ecde5-2f01-4bfe-b4be-afd022b52d69.sql');
    console.error('  3. Click Run');
    console.error('  4. Re-run: npm run supabase:seed');
    process.exit(2);
  }
}

async function seedUsers() {
  const results = [];
  for (const u of DEMO_USERS) {
    const { data: list } = await admin.auth.admin.listUsers({ page: 1, perPage: 200 });
    let user = list?.users.find((x) => x.email === u.email);

    if (!user) {
      const { data, error } = await admin.auth.admin.createUser({
        email: u.email,
        password: u.password,
        email_confirm: true,
        user_metadata: { full_name: u.full_name },
      });
      if (error) {
        results.push({ email: u.email, error: error.message });
        continue;
      }
      user = data.user;
    }

    for (const role of u.roles) {
      await admin.from('user_roles').upsert({ user_id: user.id, role }, { onConflict: 'user_id,role' });
    }
    results.push({ email: u.email, id: user.id, ok: true });
  }
  return results;
}

async function verifyPublishableKey() {
  const pub = makeClient(url, publishableKey);
  const { error } = await pub.from('settings').select('key').limit(1);
  return error ? { ok: false, message: error.message } : { ok: true };
}

async function main() {
  console.log('Checking schema...');
  await ensureSchema();
  console.log('Schema OK.\nSeeding demo users...');
  const users = await seedUsers();
  console.log(JSON.stringify(users, null, 2));

  const pubCheck = await verifyPublishableKey();
  console.log('\nPublishable key:', pubCheck.ok ? 'OK' : `FAIL — ${pubCheck.message}`);

  const { data: settings } = await admin.from('settings').select('key');
  const { count: bootcamps } = await admin.from('bootcamps').select('*', { count: 'exact', head: true });
  console.log(`\nSettings: ${settings?.length ?? 0} row(s), Bootcamps: ${bootcamps ?? 0}`);
  console.log('\nDemo logins:');
  console.log('  Admin:   admin@miraedge.tech / Admin@12345');
  console.log('  Student: student@miraedge.tech / Student@12345');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
