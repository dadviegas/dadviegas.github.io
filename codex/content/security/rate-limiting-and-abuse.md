# Rate Limiting and Abuse Prevention

APIs without rate limiting are vulnerable to brute force attacks, credential stuffing, scraping, and denial-of-service. Rate limiting defines the maximum number of requests a client can make in a time window — it's one of the first controls you add to any public API.

## Strategies

| Strategy | Basis | Use for |
|----------|-------|---------|
| Fixed window | Count resets every N seconds | Simple; vulnerable to burst at window boundary |
| Sliding window | Rolling N-second average | Smoother; more fair |
| Token bucket | Tokens replenish at a rate; consumed per request | Allows controlled bursts |
| Leaky bucket | Requests queued; processed at fixed rate | Smoothest; adds latency |

## Implementing in middleware (Next.js / Edge)

```ts
import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory sliding window — use Redis in production for multi-instance
const requestCounts = new Map<string, { count: number; resetAt: number }>();

function getClientKey(req: NextRequest): string {
  // Use IP, or authenticated user ID for better accuracy
  return req.headers.get('x-forwarded-for') ?? 'unknown';
}

export function rateLimitMiddleware(
  req: NextRequest,
  { limit = 60, windowMs = 60_000 } = {}
): NextResponse | null {
  const key = getClientKey(req);
  const now = Date.now();

  const state = requestCounts.get(key);

  if (!state || now > state.resetAt) {
    requestCounts.set(key, { count: 1, resetAt: now + windowMs });
    return null; // allow
  }

  state.count++;
  if (state.count > limit) {
    return NextResponse.json(
      { error: 'Too many requests' },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil((state.resetAt - now) / 1000)),
          'X-RateLimit-Limit': String(limit),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': String(Math.ceil(state.resetAt / 1000)),
        },
      }
    );
  }

  return null; // allow
}
```

## Redis-backed sliding window (production)

```ts
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL!);

async function slidingWindowRateLimit(
  key: string,
  limit: number,
  windowSeconds: number
): Promise<{ allowed: boolean; remaining: number }> {
  const now = Date.now();
  const windowStart = now - windowSeconds * 1000;

  const pipeline = redis.pipeline();
  pipeline.zremrangebyscore(key, '-inf', windowStart);   // remove old entries
  pipeline.zadd(key, now, `${now}-${Math.random()}`);   // add current
  pipeline.zcard(key);                                   // count in window
  pipeline.expire(key, windowSeconds);                   // auto-expire

  const results = await pipeline.exec();
  const count = results?.[2]?.[1] as number;

  return {
    allowed: count <= limit,
    remaining: Math.max(0, limit - count),
  };
}
```

## Specific abuse vectors

**Credential stuffing** — bots try username/password combinations from breached databases:

```ts
// Account lockout after N failed attempts
const LOCKOUT_THRESHOLD = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000;

async function checkLoginAttempts(userId: string): Promise<boolean> {
  const attempts = await redis.incr(`login-attempts:${userId}`);
  if (attempts === 1) await redis.pexpire(`login-attempts:${userId}`, LOCKOUT_DURATION_MS);
  return attempts <= LOCKOUT_THRESHOLD;
}
```

**Scraping** — add jitter to responses, vary content per session, check for bot signals (no mouse movement, near-instant form fills, missing Accept headers).

**Enumeration attacks** — revealing whether a username/email exists:

```ts
// ❌ Leaks whether the email exists
if (!user) return res.status(404).json({ error: 'User not found' });
if (!passwordMatches) return res.status(401).json({ error: 'Wrong password' });

// ✅ Generic error — doesn't reveal which check failed
if (!user || !passwordMatches) {
  return res.status(401).json({ error: 'Invalid credentials' });
}
```

## Related

- See also: [Security → CSRF and XSS Defences](#/codex/security-csrf-and-xss) for auth-layer attacks.
- See also: [Networking → HTTP Caching](#/codex/networking-http-caching) for cache-as-shield patterns.
- See also: [Observability → Logging and Structured Events](#/codex/observability-logging) for rate-limit event logging.

## Sources

- [Cloudflare — Rate limiting](https://developers.cloudflare.com/waf/rate-limiting-rules/)
- [OWASP — Blocking Brute Force Attacks](https://owasp.org/www-community/controls/Blocking_Brute_Force_Attacks)
- [Upstash — Redis rate limiting](https://upstash.com/blog/upstash-ratelimit)
- [MDN — 429 Too Many Requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429)
