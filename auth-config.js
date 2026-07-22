// ─── VELA AUTH CONFIG ────────────────────────────────────────
// 1. Supabase credentials — find at: supabase.com → project → Settings → Data API
const SUPABASE_URL  = 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_ANON = 'YOUR_SUPABASE_ANON_KEY';

// 2. Anthropic API key — enables live AI generation in the app
//    Find at: console.anthropic.com → API Keys
//    Safe for demo use. For production, use a backend proxy instead.
const VELA_DEMO_KEY = 'YOUR_ANTHROPIC_KEY_HERE';

// ─── DO NOT EDIT BELOW THIS LINE ─────────────────────────────
var _supabase = null;
try {
  if (SUPABASE_URL !== 'YOUR_SUPABASE_PROJECT_URL' && typeof supabase !== 'undefined') {
    _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
  }
} catch(e) {
  console.warn('Vela: Supabase not configured — running in demo mode');
}
