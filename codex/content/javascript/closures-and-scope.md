# Closures & Scope

A closure is a function that retains access to its outer lexical environment after the outer function has returned. Every function in JavaScript is a closure — what varies is whether the captured bindings are mutable and whether they outlive the stack frame.

## Lexical scope

JavaScript uses lexical (static) scope: a function's scope is determined by where it is *defined*, not where it is *called*.

```ts
const prefix = 'user';

function createId(suffix: string) {
  return `${prefix}-${suffix}`; // captures 'prefix' from the enclosing module scope
}

function withPrefix(outer: string) {
  return function inner(suffix: string) {
    return `${outer}-${suffix}`; // captures 'outer' from 'withPrefix's scope
  };
}

const userTag = withPrefix('user');
userTag('42'); // 'user-42' — 'outer' is still in memory
```

`inner` holds a reference to `outer`'s variable binding, not its value at call time. If `outer` were reassigned after `inner` was created, `inner` would see the new value.

## The classic loop bug

```ts
// ❌ All callbacks share the same 'i' binding — all log 5
const handlers: Array<() => void> = [];
for (var i = 0; i < 5; i++) {
  handlers.push(() => console.log(i));
}
handlers.forEach((fn) => fn()); // 5 5 5 5 5

// ✅ 'let' creates a new binding per iteration
for (let i = 0; i < 5; i++) {
  handlers.push(() => console.log(i));
}
handlers.forEach((fn) => fn()); // 0 1 2 3 4
```

`var` is function-scoped. All closures in the loop capture the same variable, which ends at `5` after the loop. `let` is block-scoped — each iteration gets a fresh binding.

## Closure leaks

A closure that is kept alive (e.g. stored in a module-level map or a long-lived event listener) retains everything in its outer scope, including large objects:

```ts
// ❌ Leaks the entire 'largeReport' object
function setupExport(largeReport: ReportData) {
  document.getElementById('export-btn')?.addEventListener('click', () => {
    downloadReport(largeReport); // closure captures the whole object
  });
  // If the button is never removed, largeReport lives forever
}

// ✅ Extract only what's needed
function setupExport(largeReport: ReportData) {
  const reportId = largeReport.id;
  document.getElementById('export-btn')?.addEventListener('click', () => {
    downloadReportById(reportId); // only captures a string
  });
}
```

In React, this pattern appears when an event listener is registered in `useEffect` without a cleanup that removes it, and the effect's closure captures large state objects.

## IIFE in the module era

Immediately Invoked Function Expressions (IIFEs) were the pre-module pattern for creating private scope:

```ts
// Pre-ESM: create a private scope to avoid polluting the global namespace
const CounterModule = (function () {
  let count = 0;
  return {
    increment: () => ++count,
    reset: () => { count = 0; },
    value: () => count,
  };
})();
```

With ES modules, every file has its own module scope. IIFEs are still occasionally useful for immediately executing async setup code:

```ts
(async () => {
  const config = await loadRemoteConfig();
  initApp(config);
})();
```

And in bundler configurations that need to wrap code in a self-contained scope to avoid variable collisions.

## Related

- See also: [JavaScript → Promises & async/await](#/codex/javascript-promises-and-async-await) for how closures interact with microtask timing.
- See also: [React → Hooks: Rules & Mental Model](#/codex/react-hooks-rules-and-mental-model) for closures over state in hooks.
