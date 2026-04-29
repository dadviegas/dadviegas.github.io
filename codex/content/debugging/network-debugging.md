# Network Debugging

The Network panel in Chrome DevTools is the single most useful tool for diagnosing API failures, slow requests, CORS errors, and caching problems. Knowing how to read it precisely cuts debugging time dramatically.

## Network panel anatomy

```
Filter bar: All | Fetch/XHR | Doc | CSS | JS | Font | Img | Media | WS | Wasm | Manifest | Other
Toolbar: Preserve log | Disable cache | Throttle dropdown

Columns:
- Name        — URL (hover for full path)
- Status      — HTTP status code
- Type        — Request type
- Initiator   — What triggered the request (hover to see call stack)
- Size        — Transferred size / Resource size (hover to see both)
- Time        — Duration (hover for breakdown: Queuing, Stalled, TTFB, Content Download)
- Waterfall   — Visual timing relative to other requests
```

## Reading a request detail

Click any request to open its detail pane:

```
Headers tab:
- Request URL — the actual URL after redirects
- Request Method — GET/POST/etc.
- Status Code — the final response code
- Request Headers — sent by the browser (check Authorization, Content-Type)
- Response Headers — from the server (check Cache-Control, CORS headers)

Preview tab:
- Parsed response body — JSON, HTML tree, image preview

Response tab:
- Raw response body — useful for malformed JSON

Timing tab:
- Queued at / Started at — when the request started
- TTFB (Time to First Byte) — server processing time + network RTT
- Content Download — time to download the response body
```

## CORS errors — diagnosis

CORS errors appear in two places: the failed network request (status 0 or opaque), and the Console (`Access-Control-Allow-Origin` error).

```
Diagnostic steps:
1. Network panel → click the failed request → Headers tab
2. Check: is there a preflight OPTIONS request before it?
   - If yes: look at its response — does it have Access-Control-Allow-Origin?
   - If no: it's a simple request — check response headers directly
3. Console will show the specific CORS header that's missing

Common causes:
- Missing Access-Control-Allow-Origin header on the server
- Credentials mode mismatch (fetch with credentials but no Allow-Credentials header)
- Method not in Access-Control-Allow-Methods
- Custom header not in Access-Control-Allow-Headers

Quick check without the browser:
curl -I -X OPTIONS https://api.example.com/endpoint \
  -H "Origin: https://app.example.com" \
  -H "Access-Control-Request-Method: POST"
```

## Caching — what's actually happening

```
Status codes and their cache meanings:
- 200 (from network) — fetched fresh
- 200 (from disk cache) — served from browser cache, no request made
- 200 (from memory cache) — served from in-memory cache
- 304 Not Modified — conditional request; server says "your cache is still valid"
- (failed) — offline or server error

Cache-Control in the Response Headers tells you why:
- max-age=31536000, immutable → cached for 1 year, no revalidation
- no-cache → must revalidate with server each time (but can use cache if 304)
- no-store → never cached
```

## Initiator — why is this request happening?

Hover over the Initiator column to see the call stack that triggered the request. Click to jump to the source. This is essential for finding unexpected network calls from third-party scripts.

## Copying requests for reproduction

```
Right-click any request:
- Copy → Copy as cURL           → reproduce in terminal exactly
- Copy → Copy as fetch          → reproduce in browser console
- Copy → Copy response          → get the raw JSON
- Replay XHR                    → retrigger the exact request
```

## WebSocket inspection

```
Network panel → WS tab → click a WebSocket connection

Messages tab shows:
- Green rows = server → client (incoming)
- White rows = client → server (outgoing)
- Each message shows timestamp and payload

Useful for debugging: multiplayer, live data feeds, chat
```

## Simulating network conditions

```
Network throttle presets:
- Fast 3G: 1.5 Mbps, 300ms latency
- Slow 3G: 400 kbps, 400ms latency

Custom throttle:
- Throttle → Add custom profile

Block specific requests:
- Settings (gear) → Request Blocking → Add pattern
- e.g., *analytics* → tests behaviour without analytics

Go offline:
- Network throttle → Offline
- Tests service worker + Cache API fallback
```

## Related

- See also: [Debugging → Chrome DevTools Deep Dive](#/codex/debugging-chrome-devtools-deep-dive) for DevTools panel overview.
- See also: [Foundations → HTTP Fundamentals](#/codex/foundations-http-fundamentals) for HTTP headers and methods.
- See also: [Networking → HTTP Caching](#/codex/networking-http-caching) for Cache-Control semantics.

## Sources

- [Chrome DevTools — Network features](https://developer.chrome.com/docs/devtools/network/)
- [Chrome DevTools — Inspect network activity](https://developer.chrome.com/docs/devtools/network/reference)
- [MDN — CORS errors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors)
- [web.dev — Network reliability](https://web.dev/learn/pwa/offline-data)
