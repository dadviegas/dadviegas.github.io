# Dependency Supply Chain Security

Every `npm install` pulls in hundreds of transitive dependencies, each a potential attack surface. Supply chain attacks — compromising a package to deliver malicious code to downstream consumers — have hit `event-stream`, `ua-parser-js`, `node-ipc`, and others. Defence is layered.

## Understanding your attack surface

```bash
# Count direct + transitive deps
npm ls --all 2>/dev/null | wc -l

# Check for known vulnerabilities
npm audit
pnpm audit

# Generate a full dependency tree to JSON
npm ls --all --json > deps.json
```

A modern web app typically has 500–2000 transitive packages. You haven't audited most of them.

## Lock files and integrity hashes

`package-lock.json` / `pnpm-lock.yaml` pin every transitive package to an exact version **and** a SHA-512 integrity hash. npm verifies the hash on install — a tampered package will fail.

```bash
# ✅ Always commit lock files
git add pnpm-lock.yaml

# ✅ In CI — use ci/frozen-lockfile to prevent surprises
npm ci                   # fails if lock file doesn't match package.json
pnpm install --frozen-lockfile
```

```yaml
# pnpm-lock.yaml excerpt
packages:
  lodash@4.17.21:
    resolution: {integrity: sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZa2zcAc3CVRGs8uAAAQ==}
```

## npm audit and advisories

```bash
pnpm audit
# Output: 3 vulnerabilities (1 moderate, 2 high)
# Package: semver   Severity: high   Paths: jest > jest-circus > ...
# Fix: pnpm update semver --filter @your/app

# Auto-fix low-risk updates
npm audit fix

# Review what would change before applying
npm audit fix --dry-run
```

Set up automated audit in CI — fail the build on `high` or `critical`:

```yaml
# .github/workflows/audit.yml
- name: Security audit
  run: pnpm audit --audit-level=high
```

## Provenance and SLSA

npm's provenance attestations (supported since npm 9.5) link a published package to its source commit and build environment. Check provenance for critical packages:

```bash
npm publish --provenance    # publisher side
npm info lodash dist.integrity  # consumer: verify hash
```

GitHub Actions publishes provenance automatically when `permissions: id-token: write` is set.

## Typosquatting defences

Attackers register packages with names one character off from popular ones (`lod-ash`, `reactt`). Defences:

```bash
# Check a package name before installing
npm info <package-name>   # does it exist? who publishes it?

# Use organization scopes for internal packages
npm install @your-org/utils  # harder to typosquat

# Set up pnpm catalog — every version pinned centrally
# pnpm-workspace.yaml catalogs prevent ad-hoc installs
```

## Dependency minimalism

The best defence against a vulnerable dependency is not having it:

```ts
// ❌ Import an entire library for one utility
import _ from 'lodash';
const uniqueIds = _.uniq(ids);

// ✅ Use built-ins
const uniqueIds = [...new Set(ids)];

// ❌ moment.js for date formatting (300KB + complex dep tree)
import moment from 'moment';

// ✅ Intl API or date-fns (tree-shakeable)
new Intl.DateTimeFormat('pt-PT', { dateStyle: 'short' }).format(date);
```

## Related

- See also: [Security → CSRF and XSS Defences](#/codex/security-csrf-and-xss) for runtime attack vectors.
- See also: [Bundlers → Tree Shaking and Side Effects](#/codex/bundlers-tree-shaking-and-side-effects) for dependency footprint reduction.
- See also: [Architecture → Monorepos with pnpm Workspaces](#/codex/architecture-monorepos-with-pnpm-workspaces) for lockfile management at scale.

## Sources

- [npm docs — Audit](https://docs.npmjs.com/cli/v10/commands/npm-audit)
- [OWASP — Software Supply Chain Security](https://owasp.org/www-project-software-supply-chain-security/)
- [OpenSSF — SLSA framework](https://slsa.dev/)
- [Socket.dev — Supply chain security](https://socket.dev/)
