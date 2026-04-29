# Logging and Structured Events

Good logging is the difference between a 5-minute incident diagnosis and a 5-hour one. Structured logs — JSON with consistent fields — are machine-parseable, filterable, and aggregatable in ways that free-text logs are not.

## Structured logging vs printf logging

```ts
// ❌ Printf-style — hard to filter, no consistent schema
console.log(`User ${userId} purchased item ${itemId} for €${price}`);
// Searching for userId=abc123 requires a regex on freeform text

// ✅ Structured — every field is queryable
logger.info({
  event: 'purchase.completed',
  userId: 'user_abc123',
  itemId: 'item_456',
  price: 49.99,
  currency: 'EUR',
  durationMs: 120,
});
// Filter: event="purchase.completed" AND price > 100
```

## Log levels — use them correctly

| Level | When to use |
|-------|-------------|
| `debug` | Development only — variable values, decision paths |
| `info` | Normal operations — user actions, key business events |
| `warn` | Degraded state — retrying, fallback used, approaching limits |
| `error` | Unexpected failures — exceptions, failed transactions |
| `fatal` | Process-crashing failures — unrecoverable state |

```ts
// info — expected, auditable business events
logger.info({ event: 'user.login', userId, method: 'oauth' });

// warn — something is off but recoverable
logger.warn({ event: 'cache.miss', key, fallback: 'origin' });

// error — an exception occurred; include the full error
logger.error({ event: 'payment.failed', userId, error: err.message, stack: err.stack });
```

## Minimal structured logger

```ts
const LOG_LEVELS = { debug: 0, info: 1, warn: 2, error: 3 } as const;
type LogLevel = keyof typeof LOG_LEVELS;

const MIN_LEVEL: LogLevel = (process.env.LOG_LEVEL as LogLevel) ?? 'info';

function log(level: LogLevel, data: Record<string, unknown>) {
  if (LOG_LEVELS[level] < LOG_LEVELS[MIN_LEVEL]) return;
  const entry = { ts: new Date().toISOString(), level, ...data };
  const output = JSON.stringify(entry);
  if (level === 'error') process.stderr.write(output + '\n');
  else process.stdout.write(output + '\n');
}

export const logger = {
  debug: (data: Record<string, unknown>) => log('debug', data),
  info: (data: Record<string, unknown>) => log('info', data),
  warn: (data: Record<string, unknown>) => log('warn', data),
  error: (data: Record<string, unknown>) => log('error', data),
};
```

## Correlation IDs — trace a request across services

Every incoming request gets a correlation ID that flows through all downstream calls:

```ts
import { AsyncLocalStorage } from 'async_hooks';

const requestContext = new AsyncLocalStorage<{ requestId: string }>();

// Middleware — generate and store the ID
app.use((req, res, next) => {
  const requestId = req.headers['x-request-id'] as string ?? crypto.randomUUID();
  res.setHeader('x-request-id', requestId);
  requestContext.run({ requestId }, next);
});

// Logger — automatically includes the correlation ID
function log(level: LogLevel, data: Record<string, unknown>) {
  const context = requestContext.getStore();
  const entry = { ts: new Date().toISOString(), level, requestId: context?.requestId, ...data };
  process.stdout.write(JSON.stringify(entry) + '\n');
}
```

## What NOT to log

```ts
// ❌ Never log credentials or PII
logger.info({ password: req.body.password });  // ❌
logger.info({ creditCard: card.number });       // ❌
logger.info({ headers: req.headers });          // ❌ — includes Authorization

// ✅ Log identifiers, not values
logger.info({ userId: user.id, action: 'password-changed' });
logger.info({ maskedCard: `****${card.number.slice(-4)}` });
```

## Related

- See also: [Observability → Error Tracking and Alerting](#/codex/observability-error-tracking) for error aggregation.
- See also: [Security → Secrets Management](#/codex/security-secrets-management) for PII in logs.
- See also: [Debugging → Production Debugging](#/codex/debugging-production-debugging) for log-based diagnosis workflow.

## Sources

- [Twelve-Factor App — Logs](https://12factor.net/logs)
- [Structured Logging — Best practices](https://www.structlog.org/en/stable/why.html)
- [OpenTelemetry — Logs](https://opentelemetry.io/docs/concepts/signals/logs/)
- [Pino — Fast JSON logger](https://getpino.io/)
