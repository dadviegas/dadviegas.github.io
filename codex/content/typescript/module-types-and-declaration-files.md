# Module Types & Declaration Files

Declaration files (`.d.ts`) describe the shape of JavaScript code without implementing it. They are what TypeScript uses when you import a third-party library. Understanding them is essential for working with untyped packages, Module Federation remotes, and global augmentations.

## What a `.d.ts` file does

A `.d.ts` file contains only type information — no runtime code. The TypeScript compiler uses it to type-check usages of the described code without needing the source:

```ts
// dist/utils.d.ts — generated from utils.ts by tsc
export declare function formatDate(date: Date, locale?: string): string;
export declare function formatCurrency(amount: number, currency: string): string;
export declare type DateRange = { from: Date; to: Date };
```

`declare` keyword signals "this exists at runtime, I'm only describing it."

## Ambient modules — describing unknown imports

When you import a module with no types, TypeScript raises `Cannot find module`. An ambient module declaration silences it and provides a type:

```ts
// src/declarations.d.ts
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.yaml' {
  const content: Record<string, unknown>;
  export default content;
}

// Module Federation remote — describe the shape without importing it
declare module 'payments/App' {
  import type React from 'react';
  const App: React.ComponentType<{ onSuccess: () => void }>;
  export default App;
}
```

Ambient module declarations use glob patterns (`*.svg`) to match multiple module paths.

## Declaration merging

TypeScript merges multiple declarations of the same name into one combined type. This is how `interface` works across files:

```ts
// Augmenting a third-party module's types
import 'express';

declare module 'express' {
  interface Request {
    user?: AuthenticatedUser;
    correlationId: string;
  }
}
```

Now `req.user` is typed on all Express requests in the project. The same pattern works for augmenting Window globals:

```ts
// globals.d.ts
interface Window {
  analytics: AnalyticsSDK;
  __APP_CONFIG__: AppConfig;
}
```

## Global augmentation

For truly global identifiers (not module-scoped):

```ts
// globals.d.ts — must NOT have any import/export statements at the top level
// (if it does, it becomes a module and loses global scope)

declare const __DEV__: boolean;
declare const __VERSION__: string;

declare function require(module: string): unknown; // for bundler environments
```

If your file has `import` or `export`, wrap globals in a `declare global {}` block:

```ts
// augment.d.ts — has an import, so it's a module
import type { LogEntry } from './logging';

declare global {
  interface Window {
    captureLog: (entry: LogEntry) => void;
  }
}

export {}; // makes this a module (required for declare global to work)
```

## The `moduleResolution` impact

Different `moduleResolution` settings change which files TypeScript looks for:

| Setting | Looks for |
|---------|-----------|
| `node` (classic) | `./foo`, `./foo.ts`, `./foo/index.ts` |
| `node16` / `nodenext` | Requires explicit `.js` extensions in imports |
| `bundler` (Vite/Webpack) | Allows extensionless imports; resolves like a bundler |

The Atlantis repo uses `bundler` in `tsconfig.base.json`. This means you can import `'./translations'` without the `.ts` extension, matching what the bundler resolves at build time.

## Checking ambient declarations match reality

TypeScript cannot verify that your `.d.ts` file accurately describes the runtime behaviour. Common mismatches:

- Declaring a module as having a default export when it only has named exports.
- Getting the argument order wrong in an ambient function declaration.
- Forgetting to mark a parameter as optional.

The `@types/` packages on npm (DefinitelyTyped) are community-maintained for this reason — and sometimes wrong. When `@types/somelib` is stale, write a local override in your project's `declarations.d.ts`.

## Related

- See also: [TypeScript → Conditional & Mapped Types](#/codex/typescript-conditional-and-mapped-types) for building utility types used in `.d.ts` files.
- See also: [Module Federation → Module Federation Fundamentals](#/codex/module-federation-fundamentals) for the pattern this repo uses for remote declarations.
