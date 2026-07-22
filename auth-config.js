// ─── VELA AUTH CONFIG ────────────────────────────────────────
// Replace these two values with your Supabase project credentials.
// Find them at: supabase.com → your project → Settings → API
//
// IMPORTANT: The anon key is safe to expose in frontend code.
// It is restricted by Row Level Security policies in Supabase.
// Never put your service_role key here.

const SUPABASE_URL  = 'https://fcewnsodztrwyeeensof.supabase.co/rest/v1/';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjZXduc29kenRyd3llZWVuc29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2NzYzNjQsImV4cCI6MjEwMDI1MjM2NH0.Yi8FrYE0LmMFiia9rm6syL-QiM8P2wsWsx6sybKMppA';

// ─────────────────────────────────────────────────────────────
// No edits needed below this line
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
