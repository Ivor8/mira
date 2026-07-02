import { createClient } from '@supabase/supabase-js';

const NEW_URL = 'https://uqpifkzdkrifbsnuoovl.supabase.co';
const NEW_PUB_KEY = 'sb_publishable_Hi_5bBLRLzY72bHULPqQdA_85a8jVRf';
const NEW_SVC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxcGlma3pka3JpZmJzbnVvb3ZsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4Mjk4MTYyNSwiZXhwIjoyMDk4NTU3NjI1fQ._wxgHNP3Dp_UWFSwKEuYj2flq-3P6EezDoziwAWEjmw';

const testAsync = async (label, fn) => {
  try {
    const result = await fn();
    console.log(`${label}: OK -`, result);
  } catch (err) {
    console.log(`${label}: FAILED - ${err.message}`);
  }
};

await testAsync('New project API reachable', async () => {
  const res = await fetch(`${NEW_URL}/rest/v1/`, {
    headers: { 'apikey': NEW_PUB_KEY, 'Authorization': `Bearer ${NEW_PUB_KEY}` },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return { status: res.status };
});

await testAsync('New auth works', async () => {
  const client = createClient(NEW_URL, NEW_PUB_KEY);
  const { data, error } = await client.auth.signInWithPassword({
    email: 'admin@miraedge.tech',
    password: 'Admin@12345',
  });
  return { hasError: !!error, hasSession: !!data.session };
});

await testAsync('New admin RPC works', async () => {
  const admin = createClient(NEW_URL, NEW_SVC_KEY);
  const { data, error } = await admin.from('settings').select('*').limit(1);
  return { rows: data?.length ?? 0, error: error?.message };
});
