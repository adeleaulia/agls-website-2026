-- Additive only. The display limit is enforced by SELECT, never by deletion.
CREATE TABLE IF NOT EXISTS words (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  word TEXT NOT NULL CHECK(length(word) BETWEEN 1 AND 40),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);
CREATE TABLE IF NOT EXISTS word_rate_limits (
  client_hash TEXT PRIMARY KEY,
  bucket INTEGER NOT NULL,
  hits INTEGER NOT NULL
);
