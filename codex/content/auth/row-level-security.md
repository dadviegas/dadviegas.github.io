# Row-Level Security

Row-Level Security (RLS) is a database-native authorisation mechanism that restricts which rows a query can see or modify based on the current user's identity — without any application-layer filtering. In Supabase (Postgres), RLS policies are written in SQL and enforced inside the database engine.

## The problem RLS solves

Without RLS, a bug in application code — a missing `WHERE user_id = $current_user` clause — leaks all rows to any authenticated user. With RLS, the database enforces access rules independently of application logic.

```sql
-- Enable RLS on the table
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;

-- Policy: users can only see their own notes
CREATE POLICY "Users see own notes"
  ON notes FOR SELECT
  USING (user_id = auth.uid());

-- Policy: users can only insert their own notes
CREATE POLICY "Users insert own notes"
  ON notes FOR INSERT
  WITH CHECK (user_id = auth.uid());

-- Policy: users can update and delete their own notes
CREATE POLICY "Users modify own notes"
  ON notes FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Users delete own notes"
  ON notes FOR DELETE USING (user_id = auth.uid());
```

`auth.uid()` is a Supabase helper that returns the authenticated user's UUID from the JWT. It runs inside the database — no application code needed.

## Supabase integration

When a user makes a request via the Supabase JS client with an active session, the SDK attaches the JWT as a Bearer token. The Supabase PostgREST layer extracts the JWT, sets `auth.uid()` for the session, and runs queries through the RLS filter.

```ts
// Client automatically sends the user's JWT
const { data, error } = await supabase
  .from('notes')
  .select('*');
// Returns only rows where user_id = auth.uid()
// No application-level filter needed
```

## Service role bypass

The `service_role` key bypasses RLS entirely — it's for server-side admin operations. Never expose it to the browser:

```ts
// ❌ NEVER use service_role key client-side
const supabaseAdmin = createClient(url, process.env.SERVICE_ROLE_KEY!);

// ✅ Use it server-side only (Next.js API route, Edge Function)
// Client uses the anon key — subject to RLS
const supabase = createClient(url, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
```

## More complex policies

```sql
-- Shared data: members of the same team can see each other's notes
CREATE POLICY "Team members see team notes"
  ON notes FOR SELECT
  USING (
    team_id IN (
      SELECT team_id FROM team_members WHERE user_id = auth.uid()
    )
  );

-- Time-based: only see notes created in the last 90 days
CREATE POLICY "Recency filter"
  ON notes FOR SELECT
  USING (created_at > now() - INTERVAL '90 days');

-- Role-based: admins see everything
CREATE POLICY "Admin bypass"
  ON notes FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );
```

## Performance: index the filter columns

RLS policies are evaluated per-row. Without an index on `user_id`, every `SELECT` does a full table scan:

```sql
CREATE INDEX CONCURRENTLY idx_notes_user_id ON notes(user_id);
```

Use `EXPLAIN ANALYZE` to verify the policy uses the index:

```sql
EXPLAIN ANALYZE SELECT * FROM notes WHERE user_id = auth.uid();
```

## Related

- See also: [Auth → JWT and Sessions](#/codex/auth-jwt-and-sessions) for how Supabase delivers the JWT.
- See also: [Auth → OAuth 2.0 and PKCE](#/codex/auth-oauth-2-and-pkce) for authentication flows before RLS is reached.

## Sources

- [Postgres — Row Security Policies](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)
- [Supabase — Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase — Policies guide](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [OWASP — Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)
