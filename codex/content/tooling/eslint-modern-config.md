# ESLint: Modern Flat Config

ESLint 9 replaced the `.eslintrc.*` format with a single `eslint.config.js` file. The flat config is just JavaScript — explicit imports, no implicit inheritance, no magic `extends` string resolution. If you're starting a new project in 2024+, start with flat config.

## The shift from eslintrc to flat config

The legacy format loaded plugins and parsers by string name, relied on `extends` chains that were hard to trace, and had implicit merging rules. Flat config replaces this with explicit JavaScript objects:

```js
// Legacy .eslintrc.json — implicit, magic strings
{
  "extends": ["react-app", "plugin:@typescript-eslint/recommended"],
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error"
  }
}

// Modern eslint.config.js — explicit imports, no magic
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { 'react-hooks': reactHooks },
    rules: reactHooks.configs.recommended.rules,
  },
];
```

Every plugin is an import. Every config is an object. No strings to remember.

## Base config for a TypeScript React project

```js
// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default tseslint.config(
  // Baseline: JS recommended + TS recommended
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    // Apply to all TS/TSX files
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.es2022 },
    },
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // TypeScript: allow `_`-prefixed unused vars (convention for ignored args)
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // Prefer `import type` for type-only imports (matches tsconfig: verbatimModuleSyntax)
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],

      // Enforce exhaustive switch on discriminated unions
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
    },
  },

  // Relax rules for test files
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },

  // Ignore generated files
  {
    ignores: ['dist/', 'node_modules/', '*.d.ts'],
  }
);
```

## Type-aware rules

Some TypeScript ESLint rules require the TypeScript type checker — they use the full type graph, not just the AST. They're much more powerful but slower:

```js
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...tseslint.configs.recommendedTypeChecked,  // includes type-aware rules
  {
    languageOptions: {
      parserOptions: {
        project: true,          // auto-finds tsconfig.json
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
);
```

Useful type-aware rules:
- `@typescript-eslint/no-floating-promises` — catches `async` calls without `await` or `.catch`
- `@typescript-eslint/no-misused-promises` — catches passing an async function where a sync one is expected (e.g. `onClick={async (e) => …}` passed to an onClick that doesn't handle the promise)
- `@typescript-eslint/await-thenable` — catches `await`ing non-promise values

Type-aware rules can increase lint time by 2–5× on large projects. Evaluate whether the rules justify the cost in your CI context.

## Plugin for imports

`eslint-plugin-import` enforces import organization rules:

```js
import importPlugin from 'eslint-plugin-import';

{
  plugins: { import: importPlugin },
  rules: {
    'import/no-cycle': 'error',           // prevent circular dependencies
    'import/no-default-export': 'off',    // default exports are fine in route files
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
      },
    ],
  },
}
```

`import/no-cycle` catches circular imports that cause `undefined` values at module initialization time — a common and confusing bug in modular codebases.

## Running ESLint in monorepos

Each app and package can have its own `eslint.config.js`, or the root config can use `files` globs to apply different rules per package:

```js
// Root eslint.config.js
export default tseslint.config(
  // Base rules for all packages
  { files: ['**/*.{ts,tsx}'], rules: baseRules },

  // Stricter rules for shared packages
  {
    files: ['packages/**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'error',
    },
  },

  // Relaxed rules for test infrastructure
  {
    files: ['**/vitest.config.ts', '**/eslint.config.js'],
    rules: {
      'import/no-default-export': 'off',
    },
  }
);
```

Running lint in CI:

```bash
pnpm eslint --max-warnings 0 .   # fail on any warning
```

`--max-warnings 0` enforces zero-warning policy — no hiding problems behind "warn" severity.

## What NOT to lint

ESLint is for code quality, not formatting. Formatting rules (line width, quote style, semicolons) belong in Prettier. Mixing formatting rules in ESLint causes conflicts when the two tools disagree on the same rule.

Use `eslint-config-prettier` to disable ESLint rules that conflict with Prettier:

```js
import prettier from 'eslint-config-prettier';

export default [
  ...baseRules,
  prettier,  // must be last — disables formatting rules that Prettier handles
];
```

## Related

- See also: [Tooling → Prettier and Formatting Discipline](#/codex/tooling-prettier-and-formatting-discipline) for setting up Prettier alongside ESLint without conflicts.
- See also: [Tooling → Babel vs SWC](#/codex/tooling-babel-vs-swc) for the transpiler layer that runs before ESLint sees the output.

## Sources

- [ESLint docs — Configuration](https://eslint.org/docs/latest/use/configure/)
- [ESLint docs — Flat config](https://eslint.org/docs/latest/use/configure/configuration-files)
- [typescript-eslint docs](https://typescript-eslint.io/getting-started)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
