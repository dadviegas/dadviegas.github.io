# Narrowing & Control Flow

TypeScript's type system follows control flow. After an `if` check, the type of a variable is narrowed within that branch. This is not magic — it's a systematic analysis of every assignment, guard, and branch. The senior move is understanding exactly what narrowing proves and what it doesn't.

## Discriminated unions

The most reliable narrowing pattern is a discriminated union with a literal type field:

```ts
type ApiState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

function renderWidget<T>(state: ApiState<T>) {
  switch (state.status) {
    case 'idle':    return null;
    case 'loading': return <Spinner />;
    case 'success': return <DataView data={state.data} />; // 'data' is available here
    case 'error':   return <ErrorBanner message={state.message} />;
  }
}
```

TypeScript narrows `state` to the matching variant inside each `case`. `state.data` is only accessible inside `case 'success'` because only that variant has the `data` property.

## Type guards — `typeof`, `instanceof`, `in`

```ts
function processInput(input: string | number | null) {
  if (typeof input === 'string') {
    return input.toUpperCase(); // narrowed to string
  }
  if (input === null) {
    return ''; // narrowed to null
  }
  return input.toFixed(2); // narrowed to number
}
```

`instanceof` narrows to a class type:

```ts
function handleError(err: unknown) {
  if (err instanceof Error) {
    console.error(err.message); // err is Error here
  } else {
    console.error(String(err));
  }
}
```

`in` narrows when a property is known to exist:

```ts
type Cat = { meow: () => void };
type Dog = { bark: () => void };

function makeSound(animal: Cat | Dog) {
  if ('meow' in animal) {
    animal.meow(); // narrowed to Cat
  } else {
    animal.bark(); // narrowed to Dog
  }
}
```

## User-defined type guards

When built-in guards aren't expressive enough, write a predicate function:

```ts
function isNonNullable<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

const rawIds = [1, null, 3, undefined, 5];
const ids: number[] = rawIds.filter(isNonNullable); // correctly typed
```

Without the return type `value is NonNullable<T>`, `filter` would return `(number | null | undefined)[]` — TypeScript doesn't analyse the predicate logic automatically.

## `never` for exhaustiveness checking

Use `never` to ensure every case of a union is handled:

```ts
type NotificationKind = 'email' | 'sms' | 'push';

function formatNotification(kind: NotificationKind): string {
  switch (kind) {
    case 'email': return 'Email notification';
    case 'sms':   return 'SMS message';
    case 'push':  return 'Push notification';
    default: {
      const exhaustiveCheck: never = kind;
      throw new Error(`Unhandled kind: ${exhaustiveCheck}`);
    }
  }
}
```

When you add `'in-app'` to `NotificationKind`, TypeScript raises an error in `default` because `kind` no longer narrows to `never`. The runtime `throw` is a fallback for JavaScript callers; TypeScript catches it at compile time.

## Control flow and assignments

TypeScript tracks assignments and narrowing through control flow, but not across asynchronous boundaries:

```ts
async function fetchAndProcess(id: string) {
  let result: User | null = null;
  result = await fetchUser(id);

  // TypeScript doesn't narrow across await — result might have been reassigned
  if (result !== null) {
    processUser(result); // ✅ narrowed here because we just checked
  }
}
```

Inside a `Promise.then()` callback, TypeScript may not narrow variables captured from the outer scope. Assign to a `const` inside the narrowing check to preserve the narrowed type.

## Related

- See also: [TypeScript → Generics in Practice](#/codex/typescript-generics-in-practice) for narrowing within generic functions.
- See also: [TypeScript → Conditional & Mapped Types](#/codex/typescript-conditional-and-mapped-types) for type-level conditional logic.
