# Error Tracking and Alerting

Errors in production are invisible without tooling. Error tracking captures unhandled exceptions with context (user, URL, browser, stack trace), deduplicates them, and alerts on spikes — turning "the site is broken" into "this specific function on this specific page throws for iOS Safari users on the pricing page".

## Global error boundary (React)

```tsx
import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props { children: ReactNode; fallback?: ReactNode; }
interface State { hasError: boolean; error?: Error; }

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Report to error tracking service
    reportError(error, {
      componentStack: info.componentStack,
      userId: getCurrentUser()?.id,
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div role="alert">
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false })}>Try again</button>
        </div>
      );
    }
    return this.props.children;
  }
}
```

## Sentry integration

```ts
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,    // 10% of requests get performance tracing
  replaysSessionSampleRate: 0.01,  // 1% get session replay
  beforeSend(event, hint) {
    // Scrub PII before sending
    if (event.user) delete event.user.email;
    // Filter out expected errors
    const error = hint.originalException;
    if (error instanceof NetworkError && error.status === 404) return null;
    return event;
  },
});

// Set user context after login
Sentry.setUser({ id: user.id, role: user.role });

// Manual capture with context
Sentry.captureException(error, {
  tags: { feature: 'checkout', paymentProvider: 'stripe' },
  extra: { cartItems: cart.length, total: cart.total },
});

// Capture a non-fatal message
Sentry.captureMessage('Deprecation warning triggered', 'warning');
```

## Alerting strategy — alert on symptoms, not causes

```
❌ Alert on every 5xx — too noisy; 5xx spikes at deploy time are expected
✅ Alert on error rate > 1% of requests over 5 minutes

❌ Alert on every exception — most exceptions are expected flows
✅ Alert on new issue types (never-before-seen errors)

❌ Alert on response time > 200ms (too many false positives)
✅ Alert on p99 response time > 2s (sustained, not spiky)
```

## Error fingerprinting — deduplication

Error trackers group errors by their "fingerprint" — a hash of the error message and stack trace minus volatile parts (line numbers that shift with deploys, user-specific values).

```ts
// Custom fingerprint for better grouping
Sentry.captureException(error, {
  fingerprint: [
    'payment-failure',
    error.code,  // consistent part
    // NOT: error.message (contains user amounts — every error unique)
  ],
});
```

## Source maps — readable stack traces in production

Without source maps, production stack traces point to minified bundles. Configure source map upload at build time:

```ts
// next.config.ts
import { withSentryConfig } from '@sentry/nextjs';

export default withSentryConfig(nextConfig, {
  org: 'my-org',
  project: 'my-project',
  // Automatically uploads source maps during build
  authToken: process.env.SENTRY_AUTH_TOKEN,
  // Delete source maps from deployment (server has them, not users)
  hideSourceMaps: true,
});
```

## Related

- See also: [Observability → Logging and Structured Events](#/codex/observability-logging) for contextual log data.
- See also: [Debugging → Production Debugging](#/codex/debugging-production-debugging) for using error data during an incident.
- See also: [React → Concurrent Rendering and Suspense](#/codex/react-concurrent-rendering-and-suspense) for error boundary + Suspense composition.

## Sources

- [Sentry docs — JavaScript](https://docs.sentry.io/platforms/javascript/)
- [React docs — Error boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [OpenTelemetry — Traces and Errors](https://opentelemetry.io/docs/concepts/signals/)
- [Google SRE Book — Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/)
