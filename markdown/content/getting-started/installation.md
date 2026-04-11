# Installation

## Prerequisites

- **Node.js** 18+
- **pnpm** 8+

Install pnpm globally if you haven't already:

```bash
npm install -g pnpm
```

## Setup

Clone the repo and install dependencies from the root:

```bash
pnpm install
```

pnpm workspaces will link all packages automatically — `@atlantis/shared` will be available to all apps without publishing.

## Development

Start both the shell and the markdown app in parallel:

```bash
pnpm run dev
```

| App | URL |
|---|---|
| Shell (host) | http://localhost:3000 |
| Markdown (remote) | http://localhost:3001 |

The shell lazy-loads the markdown remote. Both servers must be running.

## Adding a new page

1. Add a `.md` file under `apps/markdown/public/content/`
2. Add an entry to `apps/markdown/src/navigation.json`

```json
{
  "id": "my-page",
  "name": "My Page",
  "file": "my-page.md"
}
```

That's it — no code changes needed.
