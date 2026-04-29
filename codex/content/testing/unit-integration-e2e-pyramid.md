# Unit, Integration, and E2E Testing Pyramid

The test pyramid describes the relationship between test types: many unit tests, fewer integration tests, few E2E tests. The shape reflects cost — E2E tests are expensive to write, slow to run, and brittle when UI changes. But ignoring them entirely misses the user's actual experience.

## Unit tests — single function, no dependencies

Unit tests cover the smallest isolated piece: a pure function, a custom hook, a utility. They're fast (milliseconds), deterministic, and cheap to maintain.

```ts
// Good unit test target — pure function with no side effects
import { computeWeeklyBudgetStatus } from '@atlantis/bll';

describe('computeWeeklyBudgetStatus', () => {
  it('returns "good" when spending is below 70% of budget', () => {
    const status = computeWeeklyBudgetStatus({
      weeklyBudget: 500,
      spent: 300,  // 60%
    });
    expect(status.status).toBe('good');
    expect(status.remaining).toBe(200);
  });

  it('returns "danger" when spending exceeds budget', () => {
    const status = computeWeeklyBudgetStatus({
      weeklyBudget: 500,
      spent: 550,
    });
    expect(status.status).toBe('danger');
    expect(status.remaining).toBe(-50);
  });
});
```

When to write unit tests:
- Pure business logic functions with multiple code paths
- Data transformation helpers (formatting, parsing, computing)
- Custom hooks with complex state logic

When NOT to write unit tests:
- Components that just render data (test at the integration level)
- Functions that simply delegate to another function

## Integration tests — component + realistic dependencies

Integration tests render a component (or a tree of components) with realistic data and test user interactions. They test *behavior* from the user's perspective, not implementation details.

React Testing Library is the standard tool — it renders components into a real DOM and encourages testing through what users see and do:

```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExpenseForm } from './ExpenseForm';

describe('ExpenseForm', () => {
  it('calls onSubmit with parsed expense data after form fill', async () => {
    const onSubmit = vi.fn();
    render(<ExpenseForm onSubmit={onSubmit} />);

    const input = screen.getByRole('textbox', { name: /description/i });
    await userEvent.type(input, 'spotify 9.99 entertainment');

    await userEvent.click(screen.getByRole('button', { name: /add expense/i }));

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        description: 'spotify',
        amount: 9.99,
        categoryId: expect.any(String),
      })
    );
  });

  it('shows an error when the amount is missing', async () => {
    render(<ExpenseForm onSubmit={vi.fn()} />);
    await userEvent.type(screen.getByRole('textbox', { name: /description/i }), 'just text');
    await userEvent.click(screen.getByRole('button', { name: /add expense/i }));
    expect(screen.getByRole('alert')).toHaveTextContent(/enter a valid amount/i);
  });
});
```

The key: testing through the rendered output and user interactions, not through component props or state. If you rename an internal state variable, no test breaks. If you change the label "Add Expense" to "Record Expense," the test correctly fails — because the user experience changed.

## The `userEvent` vs `fireEvent` distinction

`fireEvent` dispatches synthetic DOM events. `userEvent` simulates realistic user behavior — typing one character at a time, triggering focus/blur/keydown/keyup in sequence, handling pointer events. For testing input handling, always prefer `userEvent`:

```ts
// ❌ fireEvent — dispatches a single change event, doesn't test keystroke handling
fireEvent.change(input, { target: { value: 'spotify 9.99' } });

// ✅ userEvent — simulates typing character by character, triggers all related events
await userEvent.type(input, 'spotify 9.99');
```

## E2E tests — full browser, real server

E2E tests run a real browser (Playwright or Cypress) against a running server. They test the full stack: routing, API calls, authentication, rendering.

Playwright:

```ts
import { test, expect } from '@playwright/test';

test('user can add and delete an expense', async ({ page }) => {
  await page.goto('/finance');
  
  // Type in the quick-add input
  const input = page.getByRole('textbox', { name: /add expense/i });
  await input.fill('spotify 9.99');
  await input.press('Enter');

  // The new expense appears in the list
  await expect(page.getByText('spotify')).toBeVisible();
  await expect(page.getByText('€9.99')).toBeVisible();

  // Delete it
  await page.getByTestId('expense-spotify').hover();
  await page.getByRole('button', { name: /delete/i }).click();
  await page.getByRole('button', { name: /confirm/i }).click();

  await expect(page.getByText('spotify')).not.toBeVisible();
});
```

E2E tests are the only tests that catch:
- Routing bugs (navigating to a URL and getting a 404)
- Auth flows (login redirects, token expiry)
- Full-page rendering (SSR hydration mismatches)
- Cross-app integration (shell + remote app interaction)

## The pyramid in practice

The "pyramid" shape means: write as many unit tests as make sense, then integration tests for key user flows, then E2E tests only for the critical paths.

**Critical paths worth E2E coverage:**
- Login / logout
- The primary user action (creating an expense, completing a mission, starting a fast)
- Payment or destructive action (delete, clear data)

**Not worth E2E coverage:**
- Every button variant
- Error messages on invalid input (integration tests cover this faster)
- Component styling

## The anti-pyramid (testing ice cream cone)

The anti-pattern: writing mostly E2E tests with few unit tests. This is:
- Slow (E2E suites take minutes, blocking CI)
- Brittle (UI selectors break on refactors that don't change behavior)
- Hard to debug (a failing E2E test might be caused by any of 10 layers)

## Test file co-location

Place test files next to the code they test:

```
src/
  ExpenseForm/
    ExpenseForm.tsx
    ExpenseForm.test.tsx     ← integration test
  utils/
    parseQuickInput.ts
    parseQuickInput.test.ts  ← unit test
e2e/
  expense-flow.spec.ts       ← E2E test (Playwright)
```

Co-located tests make it obvious what's tested. E2E tests live in a top-level `e2e/` folder because they need a separate config and run environment.

## Related

- See also: [Testing → React Testing Library Philosophy](#/codex/testing-react-testing-library-philosophy) for the RTL mental model and query priority.
- See also: [Testing → Mocking Strategies](#/codex/testing-mocking-strategies) for when and how to mock modules, APIs, and timers in integration tests.

## Sources

- [Martin Fowler — Test Pyramid](https://martinfowler.com/bliki/TestPyramid.html)
- [Google Testing Blog — Just Say No to More End-to-End Tests](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)
- [Vitest docs](https://vitest.dev/guide/)
- [Playwright docs](https://playwright.dev/docs/intro)
