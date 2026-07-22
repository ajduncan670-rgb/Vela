// ─── VELA AUTH CONFIG ────────────────────────────────────────
// Replace these two values with your Supabase project credentials.
// Find them at: supabase.com → your project → Settings → Data API
//
// ANON KEY is safe to expose in frontend code.
// NEVER put your service_role key here.

const SUPABASE_URL  = 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_ANON = 'YOUR_SUPABASE_ANON_KEY';

// ─── DO NOT EDIT BELOW THIS LINE ─────────────────────────────
var _supabase = null;
try {
  if (SUPABASE_URL !== 'YOUR_SUPABASE_PROJECT_URL' && typeof supabase !== 'undefined') {
    _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
  }
} catch(e) {
  console.warn('Vela: Supabase not configured — running in demo mode');
}
