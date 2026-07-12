/**
 * Automated Fapshi Integration Test.
 * Verifies both initiate and status endpoints, database tracking, and registration updates.
 * Usage: node scripts/test-fapshi.mjs
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

const env = loadEnv();
const url = env.SUPABASE_URL;
const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
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

const supabase = createClient(url, serviceKey, {
  global: { fetch: fetchFor(serviceKey) },
  auth: { persistSession: false, autoRefreshToken: false },
});

async function runTest() {
  console.log('--- STARTING FAPSHI CHECKOUT END-TO-END TESTS ---');

  // 1. Fetch Student User (student@miraedge.tech)
  const { data: list, error: listError } = await supabase.auth.admin.listUsers({ page: 1, perPage: 200 });
  if (listError) throw listError;
  const student = list.users.find(u => u.email === 'student@miraedge.tech');
  if (!student) {
    throw new Error('Student account student@miraedge.tech not found. Please run npm run supabase:seed first.');
  }
  const studentId = student.id;
  console.log(`Verified Student Student ID: ${studentId}`);

  // 2. Fetch Bootcamp ID
  const { data: bootcamps, error: bootcampsError } = await supabase.from('bootcamps').select('*').limit(1);
  if (bootcampsError) throw bootcampsError;
  if (!bootcamps || bootcamps.length === 0) {
    throw new Error('No bootcamps found in database. Seed bootcamps first!');
  }
  const bootcamp = bootcamps[0];
  const bootcampId = bootcamp.id;
  console.log(`Verified Bootcamp: "${bootcamp.title}" (ID: ${bootcampId}, Price: ${bootcamp.price} XAF)`);

  // Clean existing registrations & payments for this test student/bootcamp to avoid conflicts
  console.log('Cleaning up existing registrations & payments for this test pair to ensure fresh execution...');
  await supabase.from('payments').delete().eq('student_id', studentId).eq('bootcamp_id', bootcampId);
  await supabase.from('registrations').delete().eq('student_id', studentId).eq('bootcamp_id', bootcampId);

  // 3. TEST 1: SUCCESS MOBILE MONEY FLOW (Triggered by phone 670000000)
  console.log('\n--- TEST CASE 1: Successful payment checkout (MTN MoMo - 670000000) ---');
  console.log('Calling API to initiate direct payment...');
  const initRes = await fetch('http://localhost:8081/api/payments/initiate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: bootcamp.price,
      phone: '670000000',
      provider: 'mtn_momo',
      studentId,
      bootcampId,
    }),
  });

  const initData = await initRes.json();
  if (!initRes.ok) {
    throw new Error(`Init payment API error: ${initData.error}`);
  }

  const transId = initData.transId;
  console.log(`API returned transaction token: ${transId}`);
  if (!transId.startsWith('mock_trans_')) {
    throw new Error('Expected mock transaction ID starting with mock_trans_');
  }

  // Check state in DB (should be pending)
  const { data: pay1, error: pay1Error } = await supabase
    .from('payments')
    .select('*')
    .eq('transaction_ref', transId)
    .single();

  if (pay1Error || !pay1) throw new Error(`Payment record not created: ${pay1Error?.message}`);
  console.log(`DB payment record status checks OK (status: ${pay1.status})`);

  // Poll 1: Expect PENDING (since mock is configured to wait 2 increments)
  console.log('Polling status endpoint (1st check)...');
  const poll1Res = await fetch(`http://localhost:8081/api/payments/status?transId=${transId}`);
  const poll1Data = await poll1Res.json();
  console.log(`Poll 1 Status result: ${poll1Data.status} (Details: ${poll1Data.message})`);
  if (poll1Data.status !== 'PENDING') {
    throw new Error(`Expected Poll 1 to return PENDING, got ${poll1Data.status}`);
  }

  // Poll 2: Expect SUCCESSFUL
  console.log('Polling status endpoint (2nd check)...');
  const poll2Res = await fetch(`http://localhost:8081/api/payments/status?transId=${transId}`);
  const poll2Data = await poll2Res.json();
  console.log(`Poll 2 Status result: ${poll2Data.status} (Details: ${poll2Data.message})`);
  if (poll2Data.status !== 'SUCCESSFUL') {
    throw new Error(`Expected Poll 2 to return SUCCESSFUL, got ${poll2Data.status}`);
  }

  // Verify DB state after SUCCESS
  const { data: dbPaymentSuccess } = await supabase.from('payments').select('*').eq('transaction_ref', transId).single();
  const { data: dbReg } = await supabase.from('registrations').select('*').eq('student_id', studentId).eq('bootcamp_id', bootcampId).single();

  console.log(`Checking DB updates post-successful payment verification:`);
  console.log(`  - Local Payment status updated to: ${dbPaymentSuccess?.status}`);
  console.log(`  - Local Registration record created: ${dbReg ? 'YES' : 'NO'}`);
  console.log(`  - Local Registration status details: status="${dbReg?.status}", payment_status="${dbReg?.payment_status}"`);
  console.log(`  - Registration ID linked in Payment record: ${dbPaymentSuccess?.registration_id === dbReg?.id ? 'MATCH' : 'MISMATCH'}`);

  if (dbPaymentSuccess?.status !== 'successful' || !dbReg || dbReg.status !== 'confirmed' || dbReg.payment_status !== 'successful') {
    throw new Error('Database updates post-success validation failed!');
  }

  // 4. TEST 2: FAILED MOBILE MONEY FLOW (Triggered by phone 690000001)
  console.log('\n--- TEST CASE 2: Failed payment checkout (Orange Money - 690000001) ---');
  
  // Clean first
  await supabase.from('payments').delete().eq('student_id', studentId).eq('bootcamp_id', bootcampId);
  await supabase.from('registrations').delete().eq('student_id', studentId).eq('bootcamp_id', bootcampId);

  console.log('Calling API to initiate direct payment (expecting failure on 690000001)...');
  const initResFail = await fetch('http://localhost:8081/api/payments/initiate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: bootcamp.price,
      phone: '690000001',
      provider: 'orange_money',
      studentId,
      bootcampId,
    }),
  });

  const initDataFail = await initResFail.json();
  const transIdFail = initDataFail.transId;
  console.log(`API returned transaction token: ${transIdFail}`);

  console.log('Polling status endpoint (1st check)...');
  const pollFail1 = await fetch(`http://localhost:8081/api/payments/status?transId=${transIdFail}`);
  const pollFail1Data = await pollFail1.json();
  console.log(`Poll 1 Status result: ${pollFail1Data.status}`);

  console.log('Polling status endpoint (2nd check)...');
  const pollFail2 = await fetch(`http://localhost:8081/api/payments/status?transId=${transIdFail}`);
  const pollFail2Data = await pollFail2.json();
  console.log(`Poll 2 Status result: ${pollFail2Data.status} (Details: ${pollFail2Data.message})`);
  if (pollFail2Data.status !== 'FAILED') {
    throw new Error(`Expected Poll 2 to return FAILED, got ${pollFail2Data.status}`);
  }

  // Verify DB state after FAILURE
  const { data: dbPaymentFail } = await supabase.from('payments').select('*').eq('transaction_ref', transIdFail).single();
  const { data: dbRegFail } = await supabase.from('registrations').select('*').eq('student_id', studentId).eq('bootcamp_id', bootcampId).maybeSingle();

  console.log(`Checking DB updates post-failed payment verification:`);
  console.log(`  - Local Payment status updated to: ${dbPaymentFail?.status}`);
  console.log(`  - Local Registration record exists: ${dbRegFail ? 'YES (Error!)' : 'NO (CORRECT)'}`);

  if (dbPaymentFail?.status !== 'failed' || dbRegFail) {
    throw new Error('Database updates post-failure validation failed!');
  }

  console.log('\n--- ALL TEST CASES COMPLETED SUCCESSFULLY ---');
}

runTest().catch((err) => {
  console.error('\nTEST FAILED WITH EXCEPTION:', err);
  process.exit(1);
});
