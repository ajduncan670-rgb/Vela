// ─── VELA AUTH CONFIG ────────────────────────────────────────
// Replace these two values with your Supabase project credentials.
// Find them at: supabase.com → your project → Settings → Data API
//
// ANON KEY is safe to expose in frontend code.
// NEVER put your service_role key here.

const SUPABASE_URL  = 'https://fcewnsodztrwyeeensof.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjZXduc29kenRyd3llZWVuc29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2NzYzNjQsImV4cCI6MjEwMDI1MjM2NH0.Yi8FrYE0LmMFiia9rm6syL-QiM8P2wsWsx6sybKMppA';

// ─── DO NOT EDIT BELOW THIS LINE ─────────────────────────────
var _supabase = null;
try {
  if (SUPABASE_URL !== 'YOUR_SUPABASE_PROJECT_URL' && typeof supabase !== 'undefined') {
    _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
  }
} catch(e) {
  console.warn('Vela: Supabase not configured — running in demo mode');
}
