# Content Security Policy

Content Security Policy (CSP) is an HTTP header that controls which resources the browser is allowed to load and execute. A correctly configured CSP makes injected scripts inert — even a successful XSS payload cannot execute if the policy doesn't allow it.

## The header anatomy

```http
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-abc123' https://cdn.example.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https://img.example.com;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://api.example.com wss://ws.example.com;
  frame-src 'none';
  frame-ancestors 'none';
  object-src 'none';
  base-uri 'self';
  upgrade-insecure-requests;
  report-uri https://csp.example.com/report;
```

Each directive overrides `default-src` for its resource type. `'self'` means same origin. `'none'` blocks all.

## Implementing nonce-based CSP

Hash and nonce modes avoid `'unsafe-inline'` while still allowing inline scripts you control:

```ts
// Next.js middleware — generate nonce per request
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}'`,
    `style-src 'self' 'nonce-${nonce}'`,
    `img-src 'self' data: blob:`,
    `font-src 'self'`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `upgrade-insecure-requests`,
  ].join('; ');

  const response = NextResponse.next();
  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('x-nonce', nonce); // pass to _document.tsx
  return response;
}
```

```tsx
// pages/_document.tsx — use the nonce
import { Html, Head, Main, NextScript } from 'next/document';
import { headers } from 'next/headers';

export default function Document() {
  const nonce = headers().get('x-nonce') ?? '';
  return (
    <Html>
      <Head nonce={nonce} />
      <body>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  );
}
```

## Report-only mode for gradual rollout

Start with `Content-Security-Policy-Report-Only` to observe violations without blocking anything:

```http
Content-Security-Policy-Report-Only:
  default-src 'self';
  script-src 'self' 'nonce-{n}';
  report-uri https://csp.example.com/report
```

Review reports, fix violations, then switch to enforcing mode.

## Common violations and fixes

| Violation | Cause | Fix |
|-----------|-------|-----|
| `script-src 'unsafe-inline'` needed | Inline `<script>` without nonce | Add nonce to all inline scripts |
| `style-src 'unsafe-inline'` needed | Emotion inserts style tags at runtime | Suppress via `@emotion/server` or use `nonce` prop |
| External script blocked | Third-party SDK loaded from CDN | Add the CDN origin to `script-src` |
| `eval` blocked | `new Function()` or `eval()` in code | Refactor — never `'unsafe-eval'` in production |
| WebSocket blocked | Missing `wss://` in `connect-src` | Add `wss://ws.example.com` |

## Emotion and CSP

Emotion inserts `<style>` tags at runtime. To make it CSP-compatible without `'unsafe-inline'`:

```ts
// Server-side rendering with nonce
import { cache } from '@emotion/css';
import createEmotionServer from '@emotion/server/create-instance';

const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
// Pass nonce to constructStyleTagsFromChunks
```

Or use Emotion's `nonce` option in the cache:

```ts
import { createCache } from '@emotion/cache';
const cache = createCache({ key: 'css', nonce: serverNonce });
```

## Related

- See also: [Security → CSRF and XSS Defences](#/codex/security-csrf-and-xss) for XSS attack mechanics.
- See also: [Foundations → HTTP Fundamentals](#/codex/foundations-http-fundamentals) for HTTP security headers.

## Sources

- [MDN — Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [web.dev — Content Security Policy](https://web.dev/articles/csp)
- [OWASP — CSP Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
