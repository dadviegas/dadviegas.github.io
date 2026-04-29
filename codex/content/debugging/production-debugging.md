# Production Debugging

Production debugging is constrained: you can't set breakpoints, you can't add `console.log` without a deploy, and you may be debugging a live incident while users are affected. The tools are logs, error tracking, distributed traces, and a disciplined elimination process.

## Before an incident — instrument in advance

Good production debugging starts before the bug happens. The instruments you add now are the evidence you'll have during an incident:

```ts
// 1. Structured logging on every significant operation
logger.info({
  event: 'checkout.completed',
  orderId: order.id,
  userId: user.id,
  amount: order.total,
  durationMs: performance.now() - startTime,
});

// 2. Error tracking with context
Sentry.setUser({ id: user.id });
Sentry.setTag('feature', 'checkout');

// 3. Custom spans for distributed tracing
const span = Sentry.startTransaction({ name: 'processCheckout' });
try {
  await stripe.charges.create({ ... });
  span.setStatus('ok');
} catch (err) {
  span.setStatus('internal_error');
  Sentry.captureException(err);
  throw err;
} finally {
  span.finish();
}

// 4. Web Vitals reported to your analytics
import { onLCP, onINP, onCLS } from 'web-vitals';
onLCP(({ value, rating }) => analytics.track('web-vital', { metric: 'LCP', value, rating }));
```

## During an incident — the runbook

```
1. Triage — understand the scope
   - What % of users are affected? (error tracking: event count vs unique users)
   - What actions trigger it? (error grouping by URL, action, user segment)
   - When did it start? (check deploy time vs first error timestamp)

2. Correlate with changes
   - Was there a recent deploy? git log --since="2 hours ago"
   - Was there a third-party outage? check status.stripe.com, etc.
   - Did traffic spike? check CDN / server logs for request count

3. Gather evidence
   - Error tracking: full stack trace, user context, breadcrumbs (what happened before the error)
   - Logs: filter by requestId or userId to see the full request lifecycle
   - Network: does the error correlate with specific API responses?

4. Form and test a hypothesis
   - "This started with deploy X which changed the auth token format"
   - Verify: find a user who can reproduce → check their session logs
   - If you can reproduce locally: reproduce, add logging, redeploy to staging

5. Mitigate first, fix second
   - If possible: roll back the problematic deploy
   - If not: feature-flag off the broken feature
   - Communicate status to affected users while working on the root cause

6. Root cause analysis and fix
   - Write the fix with a test that would have caught it
   - Deploy to staging → verify → deploy to production
   - Monitor error rate drops to confirm fix

7. Post-mortem
   - What broke and why?
   - How can we detect this sooner?
   - What instrument should we add?
```

## Reading a stack trace in production

With source maps uploaded, Sentry and other trackers show the original TypeScript source. Without source maps, you get minified gibberish:

```
// Minified (useless)
at t.r (main.abc123.js:1:34521)

// With source maps (actionable)
at processCheckout (src/checkout/processor.ts:142:12)
  called by handleSubmit (src/pages/checkout.tsx:87:5)
```

Check the **breadcrumbs** in Sentry — these are the events leading up to the error (navigation, user actions, API calls, console logs).

## Debugging without a stack trace

When errors surface as user reports without a clear trace:

```ts
// Add error IDs for user-reported bugs
const errorId = crypto.randomUUID();
logger.error({ event: 'checkout.failed', errorId, userId, reason: err.message });

// Show the ID to the user so they can report it
return res.status(500).json({
  error: 'Something went wrong',
  errorId, // "Please include this when contacting support: abc-123-xyz"
});
```

## Feature flags as a debugging tool

Feature flags let you disable a broken feature instantly without a deploy:

```ts
import { resolveFlag } from '@atlantis/bll';

function CheckoutButton() {
  const enabled = resolveFlag('checkout.new-flow');
  return enabled
    ? <NewCheckoutFlow />
    : <LegacyCheckoutFlow />;
}

// During incident: setFlag('checkout.new-flow', false) → redeploy
// Or if using a remote flag service: flip in dashboard, no deploy needed
```

## Related

- See also: [Observability → Logging and Structured Events](#/codex/observability-logging) for log structure.
- See also: [Observability → Error Tracking and Alerting](#/codex/observability-error-tracking) for Sentry setup.
- See also: [Architecture → Feature Flags and Progressive Rollout](#/codex/architecture-feature-flags-and-progressive-rollout) for rollback strategies.

## Sources

- [Sentry — Production debugging](https://docs.sentry.io/product/issues/)
- [Google SRE Book — Handling Incidents](https://sre.google/sre-book/managing-incidents/)
- [Honeycomb — Observability Engineering](https://www.honeycomb.io/ebooks/observability-engineering-oreilly)
- [Dan Slimmon — Do-nothing scripting](https://blog.danslimmon.com/2019/07/15/do-nothing-scripting-the-key-to-gradual-automation/)
