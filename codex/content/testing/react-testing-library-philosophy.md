# React Testing Library Philosophy

React Testing Library (RTL) is built on one principle: test what the user sees, not how the component is implemented. This means querying by accessible roles and labels, not by CSS classes or component internal state.

## The guiding rule

> "The more your tests resemble the way your software is used, the more confidence they can give you."
> — Kent C. Dodds

Querying by `data-testid` is a last resort. Querying by CSS class is an anti-pattern. The preferred path:

```ts
// ❌ Tests the implementation — breaks if you rename the CSS class
container.querySelector('.expense-form-submit');

// ❌ Tests the component tree — breaks on refactors that preserve behavior
wrapper.find('Button').at(0).simulate('click');

// ✅ Tests what the user sees — role + accessible name
screen.getByRole('button', { name: /add expense/i });
```

## Query priority order

RTL provides multiple ways to find elements. The priority (from most to least preferred):

1. `getByRole` — the primary query. Every interactive element has an ARIA role. Use this.
2. `getByLabelText` — for form inputs associated with a `<label>`.
3. `getByPlaceholderText` — when there's no label (last resort for inputs).
4. `getByText` — for non-interactive text content.
5. `getByDisplayValue` — for the current value of an input.
6. `getByAltText` — for images.
7. `getByTitle` — for elements with a `title` attribute.
8. `getByTestId` — when nothing else works. Requires adding `data-testid` to the DOM.

```tsx
// Accessible label wires the input to its label element
<label htmlFor="expense-desc">Description</label>
<input id="expense-desc" type="text" />

// Test queries by label
const input = screen.getByLabelText('Description');
```

The reason role queries are preferred: if a `<div>` gets an `onClick` without `role="button"`, the test using `getByRole('button')` fails — correctly signaling an accessibility violation.

## Async queries

```ts
// getBy* throws immediately if not found — for synchronous rendering
const button = screen.getByRole('button', { name: /submit/i });

// findBy* waits (default 1s) — for elements that appear after async operations
const notification = await screen.findByRole('alert');

// queryBy* returns null if not found — for asserting absence
expect(screen.queryByRole('alert')).not.toBeInTheDocument();
```

`waitFor` wraps an assertion that may pass after async work completes:

```ts
await waitFor(() => {
  expect(screen.getByText('Expense saved')).toBeInTheDocument();
});
```

## `userEvent` for realistic interactions

`@testing-library/user-event` simulates real browser interactions:

```ts
import userEvent from '@testing-library/user-event';

// Setup userEvent once per test (creates a new instance with pointer simulation)
const user = userEvent.setup();

it('filters the expense list when the user types', async () => {
  render(<ExpenseList expenses={mockExpenses} />);
  
  const searchInput = screen.getByRole('textbox', { name: /search/i });
  await user.type(searchInput, 'spotify');
  
  // Only the spotify expense is visible
  expect(screen.getAllByRole('row')).toHaveLength(2);  // header + 1 result
  expect(screen.getByText('Spotify Premium')).toBeInTheDocument();
  expect(screen.queryByText('Amazon')).not.toBeInTheDocument();
});
```

## Testing context-dependent components

Components that use context need the context provided in the test render. Create a custom render wrapper:

```tsx
// test-utils.tsx — project-wide custom render
import { render as rtlRender, type RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@atlantis/shared';

interface WrapperProps { children: React.ReactNode }

function AllProviders({ children }: WrapperProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

function render(ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return rtlRender(ui, { wrapper: AllProviders, ...options });
}

export * from '@testing-library/react';
export { render };  // override render with wrapped version
```

Then import from your utils instead of directly from `@testing-library/react`:

```ts
import { render, screen } from '../test-utils';  // not from @testing-library/react
```

## Mocking hooks with MSW

For components that fetch data, Mock Service Worker (MSW) intercepts network requests at the network level — not by mocking `fetch` or patching module exports:

```ts
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

const server = setupServer(
  http.get('/api/expenses', () => {
    return HttpResponse.json([
      { id: '1', description: 'Spotify', amount: 9.99, date: '2026-04-01' },
    ]);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('displays fetched expenses', async () => {
  render(<ExpenseList />);
  const row = await screen.findByText('Spotify');
  expect(row).toBeInTheDocument();
});
```

MSW works in both Node (Vitest) and browser (Playwright) — the same handler definitions can be reused across test types.

## What NOT to test

- **Internal component state** — don't reach into component internals. Test what the user sees.
- **Implementation details** — if you rename a method or restructure a component without changing behavior, no test should break.
- **Snapshot tests for everything** — snapshots for entire component trees fail on any HTML change. Use them only for small, stable primitives where visual regression matters.
- **Every possible prop combination** — test behavior through user flows, not the permutation space of props.

## Debugging failing tests

```ts
// Print the current DOM to understand what's rendered
screen.debug();

// Print a specific subtree
screen.debug(screen.getByRole('form'));

// Log all accessible roles in the current DOM
screen.logTestingPlaygroundURL();  // opens query helper in browser
```

`getByRole` queries are strict about ARIA roles — if a query fails, it may mean the element lacks the expected role, which is often an accessibility bug worth fixing.

## Related

- See also: [Testing → Unit, Integration, and E2E Pyramid](#/codex/testing-unit-integration-e2e-pyramid) for when to use integration tests vs the alternatives.
- See also: [Testing → Mocking Strategies](#/codex/testing-mocking-strategies) for MSW setup, module mocking, and timer control.
- See also: [Accessibility → ARIA Patterns and Anti-Patterns](#/codex/accessibility-aria-patterns-and-anti-patterns) for why role-based queries are the correct way to query — and what accessible markup looks like.

## Sources

- [Testing Library docs — Guiding Principles](https://testing-library.com/docs/guiding-principles)
- [Testing Library docs — React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library docs — Queries](https://testing-library.com/docs/queries/about)
- [Kent C. Dodds — Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
