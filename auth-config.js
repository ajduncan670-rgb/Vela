// ─── Vorsa AUTH CONFIG ────────────────────────────────────────
// 1. Supabase credentials — find at: supabase.com → project → Settings → Data API
const SUPABASE_URL  = 'https://fcewnsodztrwyeeensof.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjZXduc29kenRyd3llZWVuc29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2NzYzNjQsImV4cCI6MjEwMDI1MjM2NH0.Yi8FrYE0LmMFiia9rm6syL-QiM8P2wsWsx6sybKMppA';

// 2. Anthropic API key — enables live AI generation in the app
//    Find at: console.anthropic.com → API Keys
//    Safe for demo use. For production, use a backend proxy instead.
const Vela_DEMO_KEY = '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';

// ─── DO NOT EDIT BELOW THIS LINE ─────────────────────────────
var _supabase = null;
try {
  if (SUPABASE_URL !== 'YOUR_SUPABASE_PROJECT_URL' && typeof supabase !== 'undefined') {
    _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
  }
} catch(e) {
  console.warn('Vorsa: Supabase not configured — running in demo mode');
}
