# Monorepos with pnpm Workspaces

A monorepo is a single repository containing multiple packages. In a frontend monorepo, this typically means an application, its shared libraries, and a design system — all version-controlled together, all built and tested together.

## Why monorepo

The alternative is a multi-repo setup where each package lives in its own repository. Multi-repo creates:
- **Cross-package changes require multiple PRs** — changing a shared component and using it in an app is two repos, two PRs, two CI runs, coordinated merges.
- **Version drift** — `app-a` depends on `ui-library@1.2.0` while `app-b` still uses `1.0.0`. You're maintaining two APIs.
- **Local iteration is painful** — `npm link` is unreliable; publishing to npm just to test a change is slow.

A monorepo solves all of this: one PR, one CI run, and packages always reference each other by source.

## pnpm workspaces

pnpm is the standard monorepo package manager for JavaScript in 2024. Its strict hoisting rules and disk-efficient symlink approach address the phantom dependency problem that npm and yarn suffer from.

**Workspace declaration:**

```yaml
# pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

Any `package.json` inside `apps/` or `packages/` is a workspace package. pnpm links them together automatically.

**Referencing a local package:**

```json
// apps/finance/package.json
{
  "dependencies": {
    "@atlantis/shared": "workspace:*",
    "@atlantis/bll": "workspace:*"
  }
}
```

`workspace:*` means "use the local version, whatever its current version is." pnpm resolves this to a symlink in `node_modules`. When you change `@atlantis/shared`, `apps/finance` sees the change immediately — no publish, no link.

## Catalogs — centralized version pinning

Declaring the same version in 25 `package.json` files creates drift. pnpm catalogs centralize versions:

```yaml
# pnpm-workspace.yaml
catalogs:
  react-ecosystem:
    react: ^18.3.1
    react-dom: ^18.3.1
    '@emotion/react': ^11.13.5
    '@emotion/styled': ^11.13.5
```

Reference the catalog in package.json:

```json
{
  "dependencies": {
    "react": "catalog:react-ecosystem",
    "react-dom": "catalog:react-ecosystem"
  }
}
```

Now all apps and packages use the same version. Updating React is one edit in `pnpm-workspace.yaml`, not 25 edits in 25 package files.

## TypeScript path aliases in monorepos

TypeScript doesn't follow pnpm's symlinks by default for type resolution. You need path aliases in each package's `tsconfig.json`:

```json
// apps/finance/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "paths": {
      "@atlantis/shared": ["../../packages/shared/src/index.ts"],
      "@atlantis/bll": ["../../packages/bll/src/index.ts"],
      "@atlantis/ui": ["../../packages/ui/src/index.ts"]
    }
  }
}
```

The path alias points to the source file, not the compiled output. TypeScript follows source imports through the monorepo and checks types as if it were one large project — without a build step.

## Filtering commands to one package

```bash
# Run the typecheck script in only the finance app
pnpm --filter @atlantis/finance typecheck

# Run dev in only the shell
pnpm --filter @atlantis/shell dev

# Run a command in all apps
pnpm --filter './apps/*' build

# Run a command everywhere
pnpm -r typecheck
```

`--filter` accepts package names, globs, and paths. In CI, filter to only the packages touched by the PR when possible — no need to rebuild the entire monorepo for a change to one widget.

## Module Federation vs. monorepo

Module Federation and monorepo solve adjacent but different problems:

| Problem | Solved by |
|---------|-----------|
| Sharing source code and types at build time | Monorepo |
| Sharing code at runtime across deployed apps | Module Federation |
| Independent deployment of micro-frontends | Module Federation |
| Consistent dependency versions | Monorepo + pnpm catalogs |

In the Atlantis repo, both coexist: shared packages live in `packages/` and are imported as workspace dependencies at build time. Remote apps are built separately and federated at runtime via Module Federation.

## Workspace scripts

The root `package.json` defines scripts that run across all workspaces:

```json
{
  "scripts": {
    "dev": "pnpm --filter './apps/*' --parallel dev",
    "build": "pnpm --filter './apps/*' --parallel build",
    "typecheck": "pnpm -r typecheck"
  }
}
```

`--parallel` runs all matching scripts concurrently. Individual app scripts like `pnpm dev:finance` filter to a single app — useful during development when you only need one remote running.

## Phantom dependencies — why pnpm's strict mode matters

npm and yarn hoist all packages to the root `node_modules`. This means a package can `require('lodash')` even if `lodash` isn't in its own `package.json` — it happens to be installed because something else depends on it.

pnpm creates a virtual store and only symlinks explicitly declared dependencies into each package's `node_modules`. A missing dependency that works locally because of hoisting fails in CI or when the indirect dependency updates.

```ts
// ❌ This works in npm/yarn but fails in pnpm if 'lodash' isn't in package.json
import cloneDeep from 'lodash';

// ✅ In pnpm monorepos, every imported package must be declared
// apps/finance/package.json: "lodash": "catalog:default"
import cloneDeep from 'lodash';
```

This strictness surfaces real bugs — if you're missing a declaration, add it rather than fighting pnpm.

## Related

- See also: [Module Federation → Fundamentals](#/codex/module-federation-fundamentals) for runtime code sharing that complements the monorepo's build-time sharing.
- See also: [Architecture → Feature Flags and Progressive Rollout](#/codex/architecture-feature-flags-and-progressive-rollout) for shipping to monorepo apps selectively.

## Sources

- [pnpm docs — Workspaces](https://pnpm.io/workspaces)
- [pnpm docs — Catalogs](https://pnpm.io/catalogs)
- [Nx docs — Introduction to monorepos](https://nx.dev/getting-started/intro)
- [Turborepo docs — What is a Monorepo?](https://turbo.build/repo/docs/handbook/what-is-a-monorepo)
