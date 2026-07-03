import fs from 'fs';
import { Client } from 'pg';
import https from 'https';

function parseCredentials(text) {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const out = {};
  for (const l of lines) {
    if (l.startsWith('http')) out.SUPABASE_URL = l;
    if (l.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) out.SUPABASE_URL = l.split('=')[1];
    if (l.startsWith('sb_publishable_') || l.startsWith('sb_secret_')) out.PUBLISHABLE_KEY = l;
    if (l.startsWith('NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=')) out.PUBLISHABLE_KEY = l.split('=')[1];
    if (l.toLowerCase().startsWith('service role key') || l.toLowerCase().startsWith('service role key =')) {
      const m = l.match(/=\s*(.+)$/);
      if (m) out.SERVICE_ROLE_KEY = m[1].trim();
      else out.SERVICE_ROLE_KEY = l.split(':').pop().trim();
    }
    if (l.toLowerCase().startsWith('db connection string') || l.toLowerCase().startsWith('db connection string =')) {
      const m = l.match(/=\s*(.+)$/);
      out.DATABASE_URL = m ? m[1].trim() : l.split(':').pop().trim();
    }
    if (l.startsWith('postgresql://')) out.DATABASE_URL = l;
  }
  return out;
}

(async function main(){
  const email = 'miraedge8@gmail.com';
  const password = 'password';

  const credText = fs.readFileSync(new URL('../credentials.txt', import.meta.url), 'utf8');
  const cfg = parseCredentials(credText);
  if (!cfg.SUPABASE_URL || !cfg.SERVICE_ROLE_KEY || !cfg.DATABASE_URL) {
    console.error('Missing SUPABASE_URL, SERVICE_ROLE_KEY or DATABASE_URL in credentials.txt');
    process.exit(2);
  }

  console.log('Using SUPABASE_URL=', cfg.SUPABASE_URL);

  // 1) Connect to Postgres and delete any existing auth.users row for this email
  try {
    const client = new Client({ connectionString: cfg.DATABASE_URL, ssl: { rejectUnauthorized: false } });
    await client.connect();
    const res = await client.query('SELECT id, email, raw_app_meta_data, raw_user_meta_data FROM auth.users WHERE email=$1', [email]);
    console.log('Found rows:', res.rows.length);
    if (res.rows.length) {
      for (const r of res.rows) {
        console.log('Deleting user id', r.id);
        await client.query('DELETE FROM auth.users WHERE id=$1', [r.id]);
      }
    }
    await client.end();
  } catch (err) {
    console.error('Postgres error:', err.message || err);
    // continue — deletion is optional
  }

  // 2) Call Supabase Admin REST API to create the user
  const createUrl = `${cfg.SUPABASE_URL.replace(/\/$/,'')}/auth/v1/admin/users`;
  const body = JSON.stringify({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: 'Mira Edge Admin' },
    app_metadata: { role: 'admin' }
  });

  console.log('Creating user via admin API...');
  const createResp = await new Promise((resolve, reject) => {
    const u = new URL(createUrl);
    const req = https.request({
      hostname: u.hostname,
      path: u.pathname + u.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': cfg.SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${cfg.SERVICE_ROLE_KEY}`,
        'Content-Length': Buffer.byteLength(body),
      }
    }, (res) => {
      let d = '';
      res.on('data', (c) => d += c);
      res.on('end', () => resolve({ status: res.statusCode, body: d }));
    });
    req.on('error', (e) => reject(e));
    req.write(body);
    req.end();
  }).catch((e)=>({ error: e.message }));

  console.log('Create response:', createResp.status);
  console.log(createResp.body);

  // 3) Try password grant to verify login
  const tokenUrl = `${cfg.SUPABASE_URL.replace(/\/$/,'')}/auth/v1/token?grant_type=password`;
  const form = new URLSearchParams({ email, password }).toString();
  const pubkey = cfg.PUBLISHABLE_KEY || cfg.SERVICE_ROLE_KEY;
  const tokenResp = await new Promise((resolve, reject) => {
    const u = new URL(tokenUrl);
    const req = https.request({
      hostname: u.hostname,
      path: u.pathname + u.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'apikey': pubkey,
        'Authorization': `Bearer ${pubkey}`,
        'Content-Length': Buffer.byteLength(form),
      }
    }, (res) => {
      let d = '';
      res.on('data', (c) => d += c);
      res.on('end', () => resolve({ status: res.statusCode, body: d }));
    });
    req.on('error', (e) => reject(e));
    req.write(form);
    req.end();
  }).catch((e)=>({ error: e.message }));

  console.log('Token response status:', tokenResp.status);
  console.log(tokenResp.body);

  console.log('\nAdmin credentials:');
  console.log('  Email:', email);
  console.log('  Password:', password);

  if (createResp.status && createResp.status >= 200 && createResp.status < 300) {
    console.log('\nUser creation appears successful.');
  } else {
    console.error('\nUser creation failed or returned error. Check the responses above.');
  }
})();
