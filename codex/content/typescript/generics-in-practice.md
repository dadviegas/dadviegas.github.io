# Generics in Practice

Generics let you write type-safe code over shapes you don't know at write time. The pitfall is overusing them — a generic function that is only ever called with one type is noise, not abstraction. The senior move is knowing when a generic actually buys you something versus when a `string | number` union would do.

## Constraints — ensuring properties exist

```ts
// ❌ Too permissive — 'T' could be anything; accessing .id would be unsafe
function findById<T>(items: T[], id: string): T | undefined {
  return items.find((item) => (item as any).id === id); // unsafe cast needed
}

// ✅ Constrain T to have an 'id' field
function findById<T extends { id: string }>(items: T[], id: string): T | undefined {
  return items.find((item) => item.id === id); // type-safe, no cast
}

// Usage — T is inferred as the specific type
const user = findById(users, 'u-123');   // T = User
const order = findById(orders, 'o-456'); // T = Order
```

The constraint `T extends { id: string }` means "T must have at least an `id: string` property." The caller gets back the full type — not the constraint — because TypeScript infers `T` from the argument.

## Default type parameters

```ts
interface PaginatedResponse<T = Record<string, unknown>> {
  items: T[];
  total: number;
  cursor: string | null;
}

// Defaults to Record<string, unknown> when no type argument is provided
function fetchPage(url: string): Promise<PaginatedResponse> { ... }

// Explicit type argument when the shape is known
function fetchUsers(url: string): Promise<PaginatedResponse<User>> { ... }
```

Default type parameters reduce boilerplate at call sites where the concrete type isn't known yet, while keeping strict types where it matters.

## Inference points — when TypeScript infers vs. when you must specify

TypeScript infers `T` from the function arguments. If the argument that would inform `T` isn't present, you must specify:

```ts
function createStore<T>(initialState: T): { get: () => T; set: (next: T) => void } {
  let state = initialState;
  return {
    get: () => state,
    set: (next) => { state = next; },
  };
}

const counterStore = createStore(0);           // T inferred as number
const userStore = createStore<User | null>(null); // T specified — null alone would infer null
```

When a generic is only in the return type (not in any parameter), TypeScript cannot infer it — you must specify:

```ts
function deserialize<T>(json: string): T {
  return JSON.parse(json) as T; // T cannot be inferred from 'string'
}

const config = deserialize<AppConfig>(rawJson); // must specify T
```

## Avoiding the `any` escape hatch

```ts
// ❌ Generic-looking but not actually generic — 'any' breaks the chain
function pick<T>(obj: any, keys: (keyof T)[]): Partial<T> {
  return Object.fromEntries(keys.map((k) => [k, obj[k]])) as Partial<T>;
}

// ✅ Proper generic with keyof constraint
function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return Object.fromEntries(keys.map((k) => [k, obj[k]])) as Pick<T, K>;
}

const subset = pick(user, ['name', 'email']); // typed as Pick<User, 'name' | 'email'>
```

`Pick<T, K>` preserves the exact type of each selected property. `Partial<T>` makes every field optional — stronger than needed when you know which keys are selected.

## Generics in React components

```tsx
interface SelectProps<T> {
  options: T[];
  value: T | null;
  onChange: (value: T) => void;
  getLabel: (option: T) => string;
  getValue: (option: T) => string;
}

function Select<T>({ options, value, onChange, getLabel, getValue }: SelectProps<T>) {
  return (
    <select
      value={value !== null ? getValue(value) : ''}
      onChange={(e) => {
        const selected = options.find((o) => getValue(o) === e.target.value);
        if (selected !== undefined) onChange(selected);
      }}
    >
      {options.map((opt) => (
        <option key={getValue(opt)} value={getValue(opt)}>
          {getLabel(opt)}
        </option>
      ))}
    </select>
  );
}

// Usage — T inferred from options
<Select<User>
  options={users}
  value={selectedUser}
  onChange={setSelectedUser}
  getLabel={(u) => u.name}
  getValue={(u) => u.id}
/>
```

## Related

- See also: [TypeScript → Conditional & Mapped Types](#/codex/typescript-conditional-and-mapped-types) for `Omit`, `Pick`, `Record`, and custom mapped types.
- See also: [TypeScript → Narrowing & Control Flow](#/codex/typescript-narrowing-and-control-flow) for narrowing inside generic functions.
