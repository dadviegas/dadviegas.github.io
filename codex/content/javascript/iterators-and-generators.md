# Iterators & Generators

Iterators and generators are the foundation of for...of, destructuring, spread syntax, and async streams. They're underused by most frontend engineers but become essential when dealing with lazy sequences, infinite data, or async pipelines.

## The iterator protocol

An iterator is any object with a `next()` method that returns `{ value, done }`:

```ts
interface Iterator<T> {
  next(): { value: T; done: boolean };
  return?(value?: T): { value: T; done: boolean };
  throw?(e?: unknown): { value: T; done: boolean };
}
```

An iterable is any object with a `[Symbol.iterator]()` method that returns an iterator. Built-in iterables include `Array`, `Map`, `Set`, `String`, `NodeList`, and generator objects.

## Creating a custom iterable

```ts
function range(start: number, end: number, step = 1): Iterable<number> {
  return {
    [Symbol.iterator]() {
      let current = start;
      return {
        next() {
          if (current < end) {
            const value = current;
            current += step;
            return { value, done: false };
          }
          return { value: undefined as never, done: true };
        },
      };
    },
  };
}

for (const n of range(0, 10, 2)) {
  console.log(n); // 0 2 4 6 8
}

const evens = [...range(0, 10, 2)]; // [0, 2, 4, 6, 8]
```

## Generators — pauseable functions

Generators are functions that produce iterators. `yield` pauses execution and returns a value; `next()` resumes from where it paused:

```ts
function* fibonacci(): Generator<number> {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
fib.next().value; // 0
fib.next().value; // 1
fib.next().value; // 1
fib.next().value; // 2
fib.next().value; // 3

// Take first 8 Fibonacci numbers
const first8 = Array.from({ length: 8 }, () => fib.next().value);
```

Generators are lazy — they compute values on demand. `fibonacci()` produces an infinite sequence that never allocates more than one value at a time.

## Generator composition with `yield*`

```ts
function* flatten<T>(nested: Iterable<Iterable<T>>): Generator<T> {
  for (const inner of nested) {
    yield* inner; // delegate to inner iterable
  }
}

const result = [...flatten([[1, 2], [3, 4], [5]])];
// [1, 2, 3, 4, 5]
```

## Async iterators for streams

Async iterators handle sequences that arrive asynchronously — ideal for streaming API responses, WebSocket messages, or paginated data:

```ts
async function* fetchPaginatedUsers(apiUrl: string): AsyncGenerator<User> {
  let cursor: string | null = null;

  do {
    const url = cursor ? `${apiUrl}?cursor=${cursor}` : apiUrl;
    const response = await fetch(url);
    const { users, nextCursor } = await response.json() as PagedResponse<User>;
    yield* users;
    cursor = nextCursor;
  } while (cursor !== null);
}

// Process users as they arrive, one page at a time
for await (const user of fetchPaginatedUsers('/api/users')) {
  await processUser(user);
}
```

`for await...of` works with async iterables. It waits for each `next()` call to resolve before proceeding.

## When to reach for iterators vs arrays

Use generators/iterators when:
- The sequence is infinite or very large (don't materialise the whole thing).
- You want lazy evaluation (only compute what's consumed).
- You're building composable data pipelines.

Use arrays when:
- You need random access, `length`, or array methods (`filter`, `map`, `reduce`).
- The full sequence is needed at once.
- Performance profiling shows iterator overhead matters (rare).

## Related

- See also: [JavaScript → Promises & async/await](#/codex/javascript-promises-and-async-await) for async/await semantics underlying async generators.
- See also: [State → Data Fetching as State](#/codex/state-data-fetching-as-state) for how streaming APIs integrate with React.

## Sources

- [MDN — Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [MDN — function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
- [MDN — for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [V8 blog — ES2018: async iteration](https://v8.dev/features/async-iteration)
