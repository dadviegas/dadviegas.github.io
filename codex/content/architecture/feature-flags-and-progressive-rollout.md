# Feature Flags and Progressive Rollout

A feature flag is a boolean condition in code that enables or disables a feature without deploying new code. The purpose is decoupling deployment from release: code ships to production in a disabled state, and the feature is activated separately — gradually, for specific users, or instantly, by toggling the flag.

## Why flags matter at scale

Without flags:
- New features must be fully complete before any code ships
- Rollback means reverting a commit and redeploying
- Testing in production with real traffic requires deploying to production

With flags:
- Ship code continuously; release deliberately
- Roll back a feature by toggling a boolean, not reverting a deploy
- Test with 1% of traffic before a full rollout

## Local flags: localStorage-backed toggles

The simplest possible flag implementation — no external service needed:

```ts
// packages/bll/src/session/flags.ts

const FLAG_DEFAULTS: Record<string, boolean> = {
  'stockpulse.enabled': true,
  'codex.enabled': true,
  'experimental.newExpenseForm': false,  // disabled by default
};

function resolveFlag(name: string): boolean {
  const stored = localStorage.getItem(`shell:flag:${name}`);
  if (stored === 'true') return true;
  if (stored === 'false') return false;
  return FLAG_DEFAULTS[name] ?? false;
}

function setFlag(name: string, value: boolean | null): void {
  if (value === null) {
    localStorage.removeItem(`shell:flag:${name}`);
  } else {
    localStorage.setItem(`shell:flag:${name}`, String(value));
  }
}
```

This pattern is synchronous (no async wait), device-local, and usable inside `useMemo` without an effect. Developers can toggle flags in the browser console:

```ts
// Enable in browser console
setFlag('experimental.newExpenseForm', true);
location.reload();

// Clear override (fall back to default)
setFlag('experimental.newExpenseForm', null);
```

## Connecting flags to app manifests

An app's manifest can declare a flag that controls whether the app appears in the home grid:

```ts
// apps/stockpulse/src/manifest.ts
const manifest = {
  id: 'stockpulse',
  flag: 'stockpulse.enabled',
  enabled: false,  // fallback when flag isn't set
  // …
} as const;
```

The shell reads the flag at render time and skips the app if the flag is false. This gates the entire app from the home grid without any other code change.

## Remote feature flags

For user-targeted rollouts, a remote flag service evaluates flags per user:

```ts
interface FlagEvaluationContext {
  userId: string;
  email: string;
  plan?: 'free' | 'pro';
  country?: string;
}

async function evaluateFlag(
  flagName: string,
  context: FlagEvaluationContext
): Promise<boolean> {
  const response = await fetch(`/api/flags/${flagName}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(context),
  });
  const { enabled } = await response.json();
  return enabled;
}
```

Services like LaunchDarkly, Statsig, and GrowthBook provide this with targeting rules (percentage rollout, user attributes, A/B testing) through a UI rather than code.

For most apps, start with localStorage flags and graduate to a service when you need user-level targeting.

## Gradual rollout

A percentage rollout enables a feature for a deterministic subset of users — the same user always gets the same experience:

```ts
function isInRolloutGroup(userId: string, flagName: string, percentage: number): boolean {
  // Hash the user+flag combination to a number 0–100
  const hash = simpleHash(`${userId}:${flagName}`);
  return (hash % 100) < percentage;
}

function simpleHash(input: string): number {
  let hash = 0;
  for (const char of input) {
    hash = ((hash << 5) - hash) + char.charCodeAt(0);
    hash |= 0;  // convert to 32-bit integer
  }
  return Math.abs(hash);
}

// Enable for 10% of users
const enabled = isInRolloutGroup(userId, 'newExpenseForm', 10);
```

The deterministic property is important: a user should see the same experience on every visit, not a random 10% chance per page load. Hashing `userId + flagName` achieves this.

## Cleaning up old flags

Flags accumulate. Every flag that was added but never removed is permanent complexity. Treat flags like branches: clean them up after the rollout is complete.

The lifecycle:
1. **Add flag** — feature is disabled by default, flag code added alongside feature code.
2. **Partial rollout** — flag enabled for 10%, then 50%, then 100%.
3. **Full rollout** — remove the flag, delete the disabled code path, delete the flag from `FLAG_DEFAULTS`.

A dead flag — always true with no alternate path — is worse than no flag at all. The code complexity remains with none of the benefits.

## Testing with flags

Tests that depend on flag state must be explicit about which flags are set:

```ts
// Set a specific flag state for this test
beforeEach(() => {
  vi.spyOn(localStorage, 'getItem').mockImplementation((key) => {
    if (key === 'shell:flag:experimental.newExpenseForm') return 'true';
    return null;
  });
});
```

Or use the `setFlag` helper directly if tests run in an environment with localStorage.

## Related

- See also: [Architecture → Monorepos with pnpm Workspaces](#/codex/architecture-monorepos-with-pnpm-workspaces) for how flags interact with the manifest system across the monorepo.
- See also: [Architecture → Design Systems and Tokens](#/codex/architecture-design-systems-and-tokens) for the broader system-level tooling that flags complement.

## Sources

- [Martin Fowler — Feature Toggles](https://martinfowler.com/articles/feature-toggles.html)
- [LaunchDarkly — Feature flag best practices](https://launchdarkly.com/blog/feature-flag-best-practices/)
- [OpenFeature — Standards for feature flags](https://openfeature.dev/)
