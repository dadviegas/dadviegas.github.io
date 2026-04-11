# Introduction

Welcome to **Atlantis** — a federated React monorepo built with Webpack Module Federation, Emotion CSS-in-JS, and TypeScript.

## What is Atlantis?

Atlantis is a platform for building and hosting multiple independent web apps under a single shell. Each app is a **Module Federation remote** that is lazy-loaded by the shell on demand.

## Key Concepts

| Concept | Description |
|---|---|
| **Shell** | Host app at `localhost:3000`. Routes between remotes. |
| **Remote** | An independent app exposed via `remoteEntry.js`. |
| **Shared** | `@atlantis/shared` — common theme, layout, and nav components. |

## How navigation works

The sidebar is driven by `navigation.json`. Each entry either:
- Has `children` — renders as a collapsible group
- Has `file` — renders as a page link (loads the `.md` file on click)

---

> Navigate to **Installation** to get started.
