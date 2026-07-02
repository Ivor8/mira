import { createClient } from '@supabase/supabase-js';

const OLD_URL = 'https://c--9a677c57-dd00-4bce-948b-4dd7d7aca8f7-prod.lovable.cloud';
const OLD_PUB_KEY = 'sb_publishable_elh8s2WTau6RM4RcrthU_w_oK35rke1';

const testAsync = async (label, fn) => {
  try {
    const result = await fn();
    console.log(`${label}: OK -`, result);
  } catch (err) {
    console.log(`${label}: FAILED - ${err.message}`);
  }
};

await testAsync('Old project API reachable', async () => {
  const res = await fetch(`${OLD_URL}/rest/v1/`, {
    headers: { 'apikey': OLD_PUB_KEY, 'Authorization': `Bearer ${OLD_PUB_KEY}` },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return { status: res.status };
});

await testAsync('Old project tables readable', async () => {
  const client = createClient(OLD_URL, OLD_PUB_KEY);
  const { data, error } = await client.from('bootcamps').select('*').limit(1);
  return { rows: data?.length ?? 0, error: error?.message };
});

await testAsync('Old auth works', async () => {
  const client = createClient(OLD_URL, OLD_PUB_KEY);
  const { data, error } = await client.auth.signInWithPassword({
    email: 'admin@miraedge.tech',
    password: 'Admin@12345',
  });
  return { hasError: !!error, hasSession: !!data.session };
});
