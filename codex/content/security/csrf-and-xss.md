# CSRF and XSS Defences

Cross-Site Request Forgery (CSRF) and Cross-Site Scripting (XSS) are the two most common web attack classes. They require different defences, and getting either wrong leads to account takeover.

## XSS — injecting malicious scripts

XSS happens when attacker-controlled content reaches the DOM as executable JavaScript. Three types:

| Type | Vector | Example |
|------|--------|---------|
| Reflected | URL parameter echoed into the page | `?q=<script>steal()</script>` |
| Stored | Persisted in DB, rendered to all users | Comment containing `<img onerror="...">` |
| DOM-based | Client-side code writes to `innerHTML` | `el.innerHTML = location.hash` |

```ts
// ❌ Direct DOM injection — XSS
el.innerHTML = userInput;
el.innerHTML = `<span>${data.name}</span>`;

// ✅ Use textContent for plain text
el.textContent = userInput;

// ✅ In React — JSX escapes by default
<span>{userInput}</span>  // safe — React escapes HTML entities

// ❌ dangerouslySetInnerHTML bypasses escaping
<div dangerouslySetInnerHTML={{ __html: userInput }} />  // only with sanitised content

// ✅ When rich HTML is required — sanitise first
import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlContent) }} />
```

## Content Security Policy (CSP)

CSP is the most effective XSS mitigation. It tells the browser which origins are allowed to execute scripts, load images, and make connections:

```http
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-{random}';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https://cdn.example.com;
  connect-src 'self' https://api.example.com;
  frame-ancestors 'none';
  upgrade-insecure-requests;
```

**Nonce-based CSP** (preferred over `'unsafe-inline'`):

```ts
// Server generates a per-request nonce
const nonce = crypto.randomBytes(16).toString('base64');

// Headers
res.setHeader('Content-Security-Policy', `script-src 'nonce-${nonce}'`);

// In HTML — only scripts with the matching nonce execute
`<script nonce="${nonce}">...</script>`
```

## CSRF — forging authenticated requests

CSRF tricks an authenticated user's browser into sending a request to your app. It exploits the fact that cookies are sent automatically with cross-origin requests.

**Attack scenario:**

```html
<!-- On evil.com — victim visits while logged in to bank.com -->
<img src="https://bank.com/transfer?to=attacker&amount=1000" />
<!-- Browser sends the session cookie automatically — bank processes it -->
```

## CSRF mitigations

**`SameSite=Lax` cookies** are the simplest defence for most apps. They block the cookie on cross-site POST requests:

```ts
res.cookie('session', sessionId, { sameSite: 'lax', httpOnly: true, secure: true });
```

**Double Submit Cookie pattern** when you need cross-origin forms:

```ts
// Server sets a readable CSRF cookie (no HttpOnly)
res.cookie('csrf', csrfToken, { sameSite: 'strict', secure: true });

// Client reads it and includes in headers
const csrf = document.cookie.match(/csrf=([^;]+)/)?.[1];
fetch('/api/transfer', {
  method: 'POST',
  headers: { 'X-CSRF-Token': csrf ?? '' },
});

// Server verifies header matches cookie
if (req.headers['x-csrf-token'] !== req.cookies.csrf) {
  return res.status(403).end();
}
```

**Checking `Origin`/`Referer` headers** as a defence-in-depth measure:

```ts
const origin = req.headers.origin ?? req.headers.referer ?? '';
if (!origin.startsWith('https://app.example.com')) {
  return res.status(403).end();
}
```

## Related

- See also: [Auth → Cookie Security](#/codex/auth-cookie-security) for cookie flags that prevent CSRF.
- See also: [Security → Content Security Policy](#/codex/security-content-security-policy) for CSP in depth.
- See also: [Security → Dependency Supply Chain](#/codex/security-dependency-supply-chain) for npm package attacks.

## Sources

- [OWASP — XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [OWASP — CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
- [MDN — Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [web.dev — SameSite cookies](https://web.dev/articles/samesite-cookies-explained)
