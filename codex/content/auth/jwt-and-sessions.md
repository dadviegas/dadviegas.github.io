# JWT and Sessions

Two dominant strategies for authenticating HTTP requests: stateless JWTs that encode claims in the token itself, and stateful sessions backed by a server-side store. Each has a distinct security profile and operational cost.

## How JWT works

A JSON Web Token is a base64url-encoded string with three dot-separated parts: header, payload, signature.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiJ1c2VyXzEyMyIsInJvbGUiOiJhZG1pbiIsImV4cCI6MTcxNDAwMDAwMH0.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

```ts
import jwt from 'jsonwebtoken';

// Sign — happens on the server after login
const token = jwt.sign(
  { sub: user.id, role: user.role },
  process.env.JWT_SECRET!,
  { expiresIn: '15m' }
);

// Verify — happens on every protected request
try {
  const payload = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
  req.userId = payload.sub;
} catch (err) {
  res.status(401).json({ error: 'Invalid token' });
}
```

The server **never stores the token**. Validity is proven by re-computing the signature with the secret. If the secret is compromised, all tokens become forgeable.

## Access + refresh token pattern

Short-lived access tokens (15 min) + long-lived refresh tokens (7d, httpOnly cookie) reduce the blast radius of a stolen access token:

```ts
// On login: issue both
const accessToken  = sign({ sub }, secret, { expiresIn: '15m' });
const refreshToken = sign({ sub }, refreshSecret, { expiresIn: '7d' });

// Store refresh token in DB for revocability
await db.sessions.create({ userId: sub, token: hash(refreshToken) });
res.cookie('refresh_token', refreshToken, { httpOnly: true, sameSite: 'strict' });
res.json({ accessToken });

// On /auth/refresh
const payload = verify(req.cookies.refresh_token, refreshSecret);
const session = await db.sessions.findByUser(payload.sub);
if (!session) return res.status(401).end(); // token revoked
const newAccessToken = sign({ sub: payload.sub }, secret, { expiresIn: '15m' });
res.json({ accessToken: newAccessToken });
```

## Session cookies

Traditional server-side sessions store state in a database (Redis is common). The browser holds a cookie with a session ID; the server looks up session data on every request.

```ts
app.use(session({
  secret: process.env.SESSION_SECRET!,
  store: new RedisStore({ client }),
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,  // 7d
  },
  resave: false,
  saveUninitialized: false,
}));
```

Sessions are trivially revocable — delete the Redis key and the user is immediately logged out. JWTs require waiting for the `exp` claim to pass or maintaining a denylist (which re-introduces state).

## JWT vs sessions — when to use each

| Concern | JWT | Session |
|---------|-----|---------|
| Horizontal scaling | Stateless — any server verifies | Requires shared session store (Redis) |
| Immediate revocation | Hard without a denylist | Trivial — delete the DB record |
| Payload size | Grows with claims — all sent on every request | Session ID is tiny (~32 bytes) |
| Cross-origin APIs | Easy — `Authorization: Bearer` header | Cookies + CORS + SameSite friction |
| Microservices | Each service verifies the JWT independently | Services need session store access |

The common advice is: **use sessions for web apps, JWTs for service-to-service APIs**. The stateless advantage matters most when services can't share a session store.

## Common JWT pitfalls

```ts
// ❌ Never store JWTs in localStorage — XSS steals them trivially
localStorage.setItem('token', accessToken);

// ✅ Store access token in memory; refresh token in httpOnly cookie
let accessToken: string | null = null;  // in-memory; lost on tab close

// ❌ Never accept the 'none' algorithm
jwt.verify(token, secret, { algorithms: ['HS256'] }); // allowlist explicitly

// ❌ Don't put secrets in the payload — payload is base64, not encrypted
jwt.sign({ password: user.password }, secret); // ❌

// ❌ Never verify against a public key an attacker supplies
// Always hardcode the expected algorithm
```

## Related

- See also: [Auth → OAuth 2.0 and PKCE](#/codex/auth-oauth-2-and-pkce) for delegated auth flows.
- See also: [Security → CSRF and XSS Defences](#/codex/security-csrf-and-xss) for cookie security.
- See also: [Networking → HTTPS and TLS](#/codex/networking-https-and-tls) for transport security.

## Sources

- [RFC 7519 — JSON Web Token](https://datatracker.ietf.org/doc/html/rfc7519)
- [auth0 — JWT Introduction](https://jwt.io/introduction)
- [OWASP — Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- [web.dev — Secure cookies](https://web.dev/articles/samesite-cookies-explained)
