# Mocking Strategies

Mocking is about isolating the system under test from dependencies that are hard to control: network requests, timers, random values, third-party modules. Over-mocking is as harmful as under-mocking — when you mock too much, tests pass even when the real system is broken.

## Module mocking with Vitest

`vi.mock` replaces the entire module at the path level:

```ts
// ❌ Mocking a pure function that's just math — test the real thing
vi.mock('../utils/computeStreak');

// ✅ Mock only when the dependency has side effects or is hard to control
vi.mock('../api/fetchExpenses', () => ({
  fetchExpenses: vi.fn().mockResolvedValue([
    { id: '1', description: 'Spotify', amount: 9.99 },
  ]),
}));
```

Mocking the function is correct here because `fetchExpenses` makes a network call. If you mock `computeStreak`, your test no longer verifies streak logic — it verifies that you connected the streak computation to the right rendering code, nothing else.

### Partial mocks

Mock only specific exports while keeping the rest real:

```ts
vi.mock('../bll/financeHelpers', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../bll/financeHelpers')>();
  return {
    ...actual,
    generateInsights: vi.fn().mockReturnValue([]),  // override one function
    // computeWeeklyStatus — keep the real implementation
  };
});
```

### Spy on methods without mocking the module

```ts
const fetchSpy = vi.spyOn(global, 'fetch').mockResolvedValue(
  new Response(JSON.stringify({ ok: true }), { status: 200 })
);

// After the test, restore
fetchSpy.mockRestore();
```

## MSW for network requests

Mock Service Worker intercepts at the network layer — your component's actual `fetch` or `axios` calls fire, the request is intercepted before leaving the process, and a handler returns a fake response. This is the closest possible simulation to a real network call without a server:

```ts
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

const server = setupServer(
  http.get('/api/expenses', () =>
    HttpResponse.json([{ id: '1', description: 'Spotify', amount: 9.99 }])
  ),
  http.post('/api/expenses', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ id: 'new-id', ...body }, { status: 201 });
  })
);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

`onUnhandledRequest: 'error'` — any unmocked request throws. This catches tests that accidentally make real network calls.

### Per-test override

```ts
it('shows an error banner when the API fails', async () => {
  server.use(
    http.get('/api/expenses', () =>
      HttpResponse.json({ message: 'Server error' }, { status: 500 })
    )
  );
  render(<ExpenseList />);
  const alert = await screen.findByRole('alert');
  expect(alert).toHaveTextContent(/failed to load/i);
});
```

`server.use` within a test overrides the default handler for that test only. `afterEach(() => server.resetHandlers())` restores the defaults.

## Timer mocking

Components with `setTimeout`, `setInterval`, or `Date.now()` are non-deterministic without timer control:

```ts
// Component uses setTimeout for a toast notification
function showSuccessToast() {
  setVisible(true);
  setTimeout(() => setVisible(false), 3000);
}

// Test with fake timers
it('hides the toast after 3 seconds', () => {
  vi.useFakeTimers();
  render(<ExpenseForm />);

  fireEvent.submit(screen.getByRole('form'));
  expect(screen.getByRole('status')).toHaveTextContent('Saved');

  vi.advanceTimersByTime(3000);
  expect(screen.queryByRole('status')).not.toBeInTheDocument();

  vi.useRealTimers();
});
```

For date-dependent tests, control `Date.now()`:

```ts
vi.useFakeTimers();
vi.setSystemTime(new Date('2026-04-01T10:00:00.000Z'));

const streak = computeStreak(history);

vi.useRealTimers();
```

## Avoiding over-mocking

A test that mocks everything is testing nothing. The rule: only mock dependencies at the *boundary* of what you're testing.

**Testing a form component:**
- ✅ Mock the API call it submits to
- ❌ Mock `useState` (tests React itself, not your code)
- ❌ Mock child components (now testing that you connected them, not that they work together)

**Testing a compute function:**
- ✅ No mocks — pure functions need none
- ❌ Mocking `Date.now()` unless the function actually calls `Date.now()` (then use `vi.setSystemTime` instead)

## The `vi.fn()` tracking API

```ts
const onSubmit = vi.fn();
render(<ExpenseForm onSubmit={onSubmit} />);
await userEvent.click(screen.getByRole('button', { name: /add/i }));

expect(onSubmit).toHaveBeenCalledTimes(1);
expect(onSubmit).toHaveBeenCalledWith(
  expect.objectContaining({ amount: 9.99 })
);

// Reset call history between tests
onSubmit.mockClear();    // clears calls + instances, preserves implementation
onSubmit.mockReset();    // clears calls + removes implementation
```

## Testing error boundaries

```ts
it('renders the error fallback when a child throws', () => {
  const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  
  const Throws = () => { throw new Error('render error'); };
  render(
    <ErrorBoundary fallback={<div role="alert">Something went wrong</div>}>
      <Throws />
    </ErrorBoundary>
  );
  
  expect(screen.getByRole('alert')).toHaveTextContent('Something went wrong');
  consoleSpy.mockRestore();
});
```

Suppressing `console.error` in the spy prevents JSDOM from printing the expected error to the test output — but restore it after to catch real errors.

## Related

- See also: [Testing → Unit, Integration, and E2E Pyramid](#/codex/testing-unit-integration-e2e-pyramid) for the broader test strategy context.
- See also: [Testing → React Testing Library Philosophy](#/codex/testing-react-testing-library-philosophy) for how to query and interact with components in the tests that use these mocks.

## Sources

- [Vitest docs — Mocking](https://vitest.dev/guide/mocking.html)
- [Jest docs — Mock Functions](https://jestjs.io/docs/mock-functions)
- [MSW docs — Introduction](https://mswjs.io/docs/)
- [Testing Library docs — user-event](https://testing-library.com/docs/user-event/intro)
