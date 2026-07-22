// ─── VELA AUTH CONFIG ────────────────────────────────────────
// Replace these two values with your Supabase project credentials.
// Find them at: supabase.com → your project → Settings → API
//
// IMPORTANT: The anon key is safe to expose in frontend code.
// It is restricted by Row Level Security policies in Supabase.
// Never put your service_role key here.

const SUPABASE_URL  = 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_ANON = 'YOUR_SUPABASE_ANON_KEY';

// ─────────────────────────────────────────────────────────────
// No edits needed below this line
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
