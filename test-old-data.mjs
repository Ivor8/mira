import { createClient } from '@supabase/supabase-js';

const OLD_URL = 'https://c--9a677c57-dd00-4bce-948b-4dd7d7aca8f7-prod.lovable.cloud';
const OLD_PUB_KEY = 'sb_publishable_elh8s2WTau6RM4RcrthU_w_oK35rke1';
const oldClient = createClient(OLD_URL, OLD_PUB_KEY);

const NEW_URL = 'https://uqpifkzdkrifbsnuoovl.supabase.co';
const NEW_SVC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxcGlma3pka3JpZmJzbnVvb3ZsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4Mjk4MTYyNSwiZXhwIjoyMDk4NTU3NjI1fQ._wxgHNP3Dp_UWFSwKEuYj2flq-3P6EezDoziwAWEjmw';
const newAdmin = createClient(NEW_URL, NEW_SVC_KEY);

async function tryGet(label, query) {
  const { data, error } = await query;
  if (error) {
    console.log(`${label}: ERROR - ${error.message}`);
    return null;
  }
  console.log(`${label}: ${Array.isArray(data) ? data.length : 1} rows`);
  return data;
}

async function main() {
  const bootcamps = await tryGet('Old bootcamps', oldClient.from('bootcamps').select('*'));
  const settings = await tryGet('Old settings', oldClient.from('settings').select('*'));
  const certificates = await tryGet('Old certificates', oldClient.from('certificates').select('*'));

  console.log('\nResult: bootcamps data available?', !!bootcamps?.length);
  console.log('Result: settings data available?', !!settings?.length);
  console.log('Result: certificates data available?', !!certificates?.length);
}

main().catch(console.error);
