# Cookie Security

Cookies are the primary transport mechanism for session tokens and authentication in browser-based apps. Their security attributes determine resistance to XSS, CSRF, and network interception attacks.

## The security attributes

```http
Set-Cookie: session_id=abc123; HttpOnly; Secure; SameSite=Lax; Max-Age=604800; Path=/; Domain=example.com
```

| Attribute | Effect | When to use |
|-----------|--------|------------|
| `HttpOnly` | JavaScript cannot read the cookie | **Always** for session/auth tokens |
| `Secure` | Only sent over HTTPS | **Always** in production |
| `SameSite=Strict` | Never sent on cross-site requests | Highest CSRF protection; breaks OAuth redirects |
| `SameSite=Lax` | Sent on top-level navigations (GET) | **Good default** — allows OAuth redirects |
| `SameSite=None; Secure` | Always sent cross-site | Required for embedded widgets, payment iframes |
| `Max-Age` | Expiry in seconds | Prefer over `Expires` (relative, not absolute) |
| `Domain` | Accessible to subdomains | Omit if you want host-only cookies |
| `Path` | Cookie only sent for matching paths | Useful for scoping to API paths |
| `Partitioned` | Third-party partition (CHIPS) | For legitimate third-party cookies |

## HttpOnly is your first line of defence

`HttpOnly` prevents `document.cookie` access from JavaScript — an XSS attacker who injects code still can't steal the session token. For all auth cookies:

```ts
res.cookie('session', sessionId, {
  httpOnly: true,   // not accessible via document.cookie
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: 7 * 24 * 60 * 60 * 1000,  // 7 days
});
```

## SameSite and CSRF

`SameSite=Lax` is the browser default for new cookies (Chrome 80+). It blocks the cookie on cross-site POST/PUT requests (CSRF vectors) but allows it on top-level GET navigations. This breaks `SameSite=None; Secure` attacks without requiring a CSRF token in most scenarios.

```ts
// ❌ Old pattern — CSRF token required
res.cookie('session', id, { sameSite: 'none', secure: true }); // sent everywhere

// ✅ SameSite=Lax + Double Submit Cookie as belt-and-suspenders
res.cookie('session', id, { httpOnly: true, sameSite: 'lax', secure: true });
res.cookie('csrf', csrfToken, { sameSite: 'lax', secure: true }); // readable by JS
// Client reads csrf cookie and includes in request header
```

## Cookie theft vectors and mitigations

```
XSS → steal document.cookie → mitigated by HttpOnly
Network sniff → steal cookie in transit → mitigated by Secure + HTTPS
CSRF → forge requests using ambient cookie → mitigated by SameSite
Session fixation → force a known session ID → mitigated by rotating ID on login
Subdomain takeover → malicious sub sets cookie for parent → mitigated by omitting Domain
```

## Supabase auth cookies (practical example)

Supabase Auth sets the session cookie server-side when using SSR helpers. The correct flags for Next.js / Edge:

```ts
const cookieOptions = {
  path: '/',
  secure: true,
  httpOnly: true,
  sameSite: 'lax' as const,
  maxAge: 60 * 60 * 24 * 365,  // 1 year
};
```

## Related

- See also: [Security → CSRF and XSS Defences](#/codex/security-csrf-and-xss) for attack mechanics.
- See also: [Auth → JWT and Sessions](#/codex/auth-jwt-and-sessions) for session storage strategies.
- See also: [Networking → HTTPS and TLS](#/codex/networking-https-and-tls) for transport security.

## Sources

- [MDN — Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
- [web.dev — SameSite cookies explained](https://web.dev/articles/samesite-cookies-explained)
- [OWASP — Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- [RFC 6265 — HTTP State Management Mechanism](https://datatracker.ietf.org/doc/html/rfc6265)
