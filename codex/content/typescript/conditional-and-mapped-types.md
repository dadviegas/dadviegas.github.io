# Conditional & Mapped Types

Conditional and mapped types let you derive new types programmatically from existing ones. They are the foundation of TypeScript's utility types (`Omit`, `Pick`, `Partial`, `ReturnType`) and are essential for building strongly-typed library abstractions.

## Conditional types

A conditional type evaluates a condition at the type level:

```ts
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
type C = IsString<'hello'>; // true — string literal extends string
```

The `extends` clause at the type level is not the same as at the value level. `T extends string` means "T is assignable to string."

## `infer` — extracting types from a shape

`infer` lets you capture a type from within a conditional:

```ts
// Extract the resolved type of a Promise
type Awaited<T> = T extends Promise<infer U> ? U : T;

type UserResult = Awaited<Promise<User>>;     // User
type StringResult = Awaited<string>;          // string (not a Promise, returned as-is)
type NestedResult = Awaited<Promise<Promise<number>>>; // Promise<number> (one level only)
```

A more robust version handles nested Promises recursively:

```ts
type DeepAwaited<T> = T extends Promise<infer U> ? DeepAwaited<U> : T;
type Deep = DeepAwaited<Promise<Promise<number>>>; // number
```

## Extracting function types

```ts
// Extract the return type of a function
type ReturnType<T extends (...args: any[]) => any> =
  T extends (...args: any[]) => infer R ? R : never;

// Extract parameter types as a tuple
type Parameters<T extends (...args: any[]) => any> =
  T extends (...args: infer P) => any ? P : never;

type SaveFn = (userId: string, data: UserUpdate) => Promise<User>;
type SaveReturn = ReturnType<SaveFn>;   // Promise<User>
type SaveParams = Parameters<SaveFn>;  // [userId: string, data: UserUpdate]
```

These are built into TypeScript (`ReturnType<T>`, `Parameters<T>`), but knowing how they're implemented lets you write similar patterns for your own types.

## Distributive conditionals

When `T` is a bare type parameter, conditional types distribute over unions:

```ts
type NonNullable<T> = T extends null | undefined ? never : T;

type A = NonNullable<string | null | undefined>; // string
// Distributes as: (string extends null|undefined ? never : string) | (null extends ...) | ...
// = string | never | never = string
```

To prevent distribution, wrap `T` in a tuple:

```ts
type IsUnion<T> = [T] extends [T] ? false : true; // always false with tuple wrapping
type CheckUnion<T> = T extends any ? T[] : never;
// CheckUnion<string | number> = string[] | number[] (distributed)
```

## Mapped types — transforming object shapes

```ts
// Make all properties optional and readonly
type FrozenPartial<T> = {
  readonly [K in keyof T]?: T[K];
};

// Convert all properties to their string representation
type Stringified<T> = {
  [K in keyof T]: string;
};

// Key remapping (TypeScript 4.1+)
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getters<{ name: string; age: number }>;
// { getName: () => string; getAge: () => number }
```

`as` in the mapped type key position lets you remap the key name. `Capitalize<string & K>` converts the key to a string (since `K` is `string | number | symbol`) and capitalises it.

## Template literal types

```ts
type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<'click'>; // 'onClick'
type ChangeEvent = EventName<'change'>; // 'onChange'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiRoute = `/api/${string}`;
type Handler = Record<HttpMethod, (route: ApiRoute) => Response>;
```

Template literals combine with conditional and mapped types to build route-type systems and event-name mappers that would require runtime code in plain JavaScript.

## Related

- See also: [TypeScript → Generics in Practice](#/codex/typescript-generics-in-practice) for `Pick<T, K>` and `Omit<T, K>`.
- See also: [TypeScript → Module Types & Declaration Files](#/codex/typescript-module-types-and-declaration-files) for using these patterns in `.d.ts` files.
