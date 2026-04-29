# Prettier and Formatting Discipline

Prettier is an opinionated code formatter with minimal configuration. It parses code into an AST and re-prints it according to its own rules. The key property: when Prettier is configured, every developer's editor formats code identically. There are no discussions about whether to use single or double quotes — Prettier decides.

## The value proposition

Code style debates ("tabs vs spaces", "trailing commas", "single quotes") consume real engineering time and have zero impact on behavior. Prettier removes these debates by making the decision authoritative and automatic. Once configured, code style is enforced by a tool, not by code review.

## Configuration

Prettier's own defaults are good. The fewer options you change, the less configuration drift you accumulate:

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2
}
```

The only choices worth having opinions on:
- `singleQuote: true` — standard in the React ecosystem (JSX uses double quotes for attributes, so single quotes inside expressions reads cleanly).
- `trailingComma: "all"` — trailing commas in multi-line argument lists produce cleaner diffs (adding a new item doesn't dirty the preceding line).
- `printWidth: 100` — 80 is Prettier's default; 100 works better with modern widescreen editors and TypeScript's verbose generics.

## Editor integration

Prettier should run on save, not manually:

**VS Code:**
```json
// .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[typescript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[typescriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" }
}
```

Check this file into the repo. Every developer who opens the project in VS Code gets the correct formatter automatically.

## Pre-commit enforcement with lint-staged

Running Prettier manually is optional; running it at pre-commit is not. `lint-staged` runs formatters only on staged files:

```json
// package.json
{
  "lint-staged": {
    "*.{ts,tsx,js,json,css,md}": ["prettier --write"]
  }
}
```

```bash
# Install
pnpm add -D lint-staged husky
pnpm exec husky init
echo "pnpm exec lint-staged" > .husky/pre-commit
```

Now `git commit` runs Prettier on staged files before the commit completes. A developer who hasn't installed the VS Code extension still gets their code formatted.

## CI check

Pre-commit hooks can be bypassed. CI enforces the contract:

```yaml
# .github/workflows/ci.yml
- name: Check formatting
  run: pnpm prettier --check .
```

`--check` exits non-zero if any file would be reformatted. This catches commits that bypassed the pre-commit hook.

## ESLint integration

ESLint and Prettier can conflict when both try to enforce formatting. The rule: ESLint handles code quality, Prettier handles formatting. Use `eslint-config-prettier` to disable any ESLint formatting rules:

```js
// eslint.config.js
import prettier from 'eslint-config-prettier';

export default [
  ...appRules,
  prettier,  // must be last — overrides formatting rules with "off"
];
```

Do NOT use `eslint-plugin-prettier` (which runs Prettier as an ESLint rule). This slows lint by running Prettier twice and produces confusing error messages mixing lint and format issues. Separate the concerns: `prettier --check` in CI, `eslint` in CI, neither running the other.

## Prettier for other file types

Prettier formats more than TypeScript:

```json
// .prettierrc — applies to all supported file types
{
  "overrides": [
    {
      "files": "*.json",
      "options": { "trailingComma": "none" }  // JSON doesn't support trailing commas
    },
    {
      "files": "*.md",
      "options": { "printWidth": 80, "proseWrap": "always" }
    }
  ]
}
```

Consistent JSON formatting is especially useful in large config files that multiple developers touch — it prevents diff noise from whitespace changes.

## What Prettier doesn't cover

Prettier formats the *shape* of code, not its quality. It doesn't catch:
- Unused variables
- Wrong logic
- Type errors
- Accessibility violations

That's ESLint's job. Prettier + ESLint cover the full static analysis stack; neither replaces the other.

## Ignoring files

```
# .prettierignore
dist/
node_modules/
*.generated.ts
coverage/
```

Prettier will skip everything in `.prettierignore`. Don't ignore source files — they should be formatted.

## Related

- See also: [Tooling → ESLint: Modern Flat Config](#/codex/tooling-eslint-modern-config) for configuring ESLint alongside Prettier without conflicts.

## Sources

- [Prettier docs — Why Prettier?](https://prettier.io/docs/en/why-prettier.html)
- [Prettier docs — Options](https://prettier.io/docs/en/options.html)
- [Prettier docs — Integrating with linters](https://prettier.io/docs/en/integrating-with-linters.html)
