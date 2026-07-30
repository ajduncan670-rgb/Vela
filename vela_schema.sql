-- ─────────────────────────────────────────────────────────────
-- Vorsa — Supabase Campaign Persistence Schema
-- Run this in: Supabase Dashboard → SQL Editor → New query
-- ─────────────────────────────────────────────────────────────

-- Campaigns table
CREATE TABLE IF NOT EXISTS campaigns (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name        TEXT NOT NULL,
  type        TEXT,
  mode        TEXT CHECK (mode IN ('b2b','b2c')),
  channels    JSONB,        -- array of channel objects {id, name, role, rationale}
  strategy    TEXT,         -- full strategy document markdown
  assets      TEXT,         -- full asset package markdown
  qa          TEXT,         -- QA results markdown
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast per-user lookups
CREATE INDEX IF NOT EXISTS campaigns_user_id_idx ON campaigns(user_id);

-- Row Level Security — users can only see their own campaigns
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can select own campaigns"
  ON campaigns FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own campaigns"
  ON campaigns FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own campaigns"
  ON campaigns FOR DELETE
  USING (auth.uid() = user_id);

-- ─────────────────────────────────────────────────────────────
-- DONE. No other tables needed — repo stays in user_metadata.
-- ─────────────────────────────────────────────────────────────
