# Secrets Management

API keys, database passwords, and signing secrets don't belong in source code. A leaked secret in a git commit lives forever in history, even after deletion. Secrets management is about keeping credentials out of code and out of logs.

## What counts as a secret

```
❌ Never in code or .env committed to git:
- Database connection strings (postgres://user:pass@host/db)
- API keys (OPENAI_API_KEY, STRIPE_SECRET_KEY)
- JWT signing secrets (JWT_SECRET)
- OAuth client secrets
- SSH private keys
- Encryption keys

✅ Not secrets (safe to commit):
- Public API base URLs (NEXT_PUBLIC_API_URL)
- Feature flag names
- Non-sensitive configuration (NEXT_PUBLIC_ANALYTICS_ID if low-risk)
- Public OAuth client_id (not client_secret)
```

## Environment variables — the basics

```bash
# .env.local (gitignored) — local development only
DATABASE_URL=postgres://localhost/myapp
JWT_SECRET=local-dev-secret-only

# .env.example (committed) — shows required variables without values
DATABASE_URL=
JWT_SECRET=

# .gitignore must include
.env
.env.local
.env.*.local
```

```ts
// Validate required secrets at startup — fail fast before serving requests
function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
}

const jwtSecret = requireEnv('JWT_SECRET');
const dbUrl = requireEnv('DATABASE_URL');
```

## Never log secrets

```ts
// ❌ Logs the entire request object including authorization headers
console.log('Request:', req);
console.log('Headers:', req.headers);  // includes Authorization: Bearer <token>

// ✅ Log only what you need, explicitly
console.log('Request path:', req.path, 'method:', req.method);

// ❌ Structured logs that serialise objects too deeply
logger.info({ user, apiKey });  // logs apiKey!

// ✅ Allowlist log fields
logger.info({ userId: user.id, path: req.path });
```

## Secret scanning

Add pre-commit hooks to catch secrets before they reach git:

```bash
# Install gitleaks
brew install gitleaks

# Scan the entire repo history
gitleaks detect --source .

# Pre-commit hook
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/sh
gitleaks protect --staged
EOF
chmod +x .git/hooks/pre-commit
```

GitHub Advanced Security runs secret scanning on every push and alerts on 200+ patterns (AWS keys, Stripe keys, GitHub tokens, etc.).

## Secret rotation

When a secret leaks:

1. **Revoke immediately** — don't wait to understand the blast radius.
2. **Issue a new secret** — rotate, don't just change.
3. **Audit logs** — check for unauthorised usage before revocation.
4. **Update all consumers** — deployment secrets, CI/CD variables, team members.

Design for rotation: secrets should be loadable at runtime without a deploy. Environment variables reloaded from a secrets manager on startup (or per-request for short-lived credentials) enable zero-downtime rotation.

## Client-side secrets — there are none

There is no such thing as a secret in browser code. Anything in a bundle, a `NEXT_PUBLIC_` variable, or an API call from the client is visible to any user with DevTools.

```ts
// ❌ These are NOT secrets — visible to all users
process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY  // anon key has RLS — not a secret

// ❌ Never put these client-side
process.env.STRIPE_SECRET_KEY
process.env.SUPABASE_SERVICE_ROLE_KEY
```

## Related

- See also: [Auth → JWT and Sessions](#/codex/auth-jwt-and-sessions) for signing secret management.
- See also: [Security → CSRF and XSS Defences](#/codex/security-csrf-and-xss) for what happens when a token is stolen.

## Sources

- [OWASP — Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
- [GitHub — Secret scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)
- [gitleaks](https://github.com/gitleaks/gitleaks)
- [Doppler — Secrets management](https://docs.doppler.com/docs/getting-started)
