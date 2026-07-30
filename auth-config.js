// ─── Vorsa AUTH CONFIG ────────────────────────────────────────
// 1. Supabase credentials — find at: supabase.com → project → Settings → Data API
const SUPABASE_URL  = 'https://fcewnsodztrwyeeensof.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjZXduc29kenRyd3llZWVuc29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2NzYzNjQsImV4cCI6MjEwMDI1MjM2NH0.Yi8FrYE0LmMFiia9rm6syL-QiM8P2wsWsx6sybKMppA';

// 2. Anthropic API key — enables live AI generation in the app
//    Find at: console.anthropic.com → API Keys
//    Safe for demo use. For production, use a backend proxy instead.
const Vorsa_DEMO_KEY = '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';

// ─── DO NOT EDIT BELOW THIS LINE ─────────────────────────────
var _supabase = null;
try {
  if (SUPABASE_URL !== 'YOUR_SUPABASE_PROJECT_URL' && typeof supabase !== 'undefined') {
    _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
  }
} catch(e) {
  console.warn('Vorsa: Supabase not configured — running in demo mode');
}
