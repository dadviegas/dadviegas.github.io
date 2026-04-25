# Atlantis — Visão Geral / Overview

**Atlantis** é uma plataforma pessoal de dashboards, ferramentas e entretenimento — construída como um monorepo de micro-frontends.

Atlantis is a personal platform for dashboards, tools, and entertainment — built as a micro-frontend monorepo. Think of it as a personal operating system for the browser.

---

## O que é o Atlantis? / What is Atlantis?

Atlantis is a collection of independent apps that share a common shell, design language, and data layer. Every app lives at its own dev-server port but appears to the user as one seamless product.

The shell at `#/home` is the starting point. From there you can:
- Browse the **app catalog** (all apps organised by category and suite)
- Open the **Cmd+K command palette** to jump anywhere instantly
- Manage your **dashboard widgets** (drag, resize, add, remove)
- Set your **interests and age mode** (cog icon → Profile)
- Configure **API keys** (cog icon → Settings)

---

## O sistema de suítes / The Suite System

Apps are grouped into thematic suites. Each suite has a color accent used on widget cards and nav items.

| Suite | Color | Apps included |
|---|---|---|
| **Life Dashboard** | Teal | Finance, Daily Manager, Weather, TechScope, CityPulse, StockPulse |
| **Learning Hub** | Blue | Blog / Docs, School, Earth Globe, Cosmos |
| **AI Lab** | Purple | Ask, Prompt Lab, Image Gen |
| **Game Room** | Pink/Red | Games bundle (15+ games) |
| **Entertainment** | Red | Movies & Series |
| **Developer Toolkit** | Yellow/Blue | Playground, JSON Explorer, Regex Lab, Code Diff, API Explorer, CSV Explorer, Chart Builder, Pad, JWT Inspector, Color Lab, Cron Builder |

---

## Signed-out vs Signed-in / Sem sessão vs Com sessão

Atlantis works without an account, but signing in unlocks persistence across devices.

| Feature | Signed out | Signed in |
|---|---|---|
| All apps | ✓ | ✓ |
| Dashboard layout | Saved locally (browser) | Synced to cloud |
| API keys | Saved locally | Synced to cloud |
| Saved documents (Pad, Diff…) | Saved locally | Synced to cloud |
| Finance data | Saved locally | Synced to cloud |
| Daily habits / progress | Saved locally | Synced to cloud |
| Profile / interests | Saved locally | Synced to cloud |

### Auth-required apps

Some apps require sign-in (marked `🔒` in the catalog). This restriction exists to protect API keys stored in cloud settings from being accessed anonymously. If you're signed out, the app shows a sign-in prompt.

---

## Onde ficam os dados? / Where does data live?

**When signed out:** Everything is stored in **IndexedDB** in your browser (database `atlantis-tools`, stores `documents` + `settings`). Clearing browser data removes everything.

**When signed in:** The shell connects to **Supabase**. Writes go to Supabase first; reads fall back to local IDB if offline. The same storage API is used by all apps — they never know whether the backend is local or cloud.

**Cache:** Feed data (weather, news, market prices, movies) is cached in `putLocalSetting()` — device-local only, never synced. This avoids syncing gigabytes of 5-minute RSS caches to the cloud.

---

## Perfil e interesses / Profile & Interests

The **Profile** modal (cog icon → Profile) lets you pick:

- **Interests:** `tech`, `movies`, `learning`, `games`, `news`, `space` — apps and home feed rows that don't match your selected interests are hidden. Leave all unselected to see everything.
- **Age mode:** `kid`, `teen`, `adult` — controls content inside apps (e.g. Movies filters out adult content in kid/teen mode). Apps themselves are never hidden by age mode — only their content adjusts.

Saving your profile clears all feed caches and reloads the page so every widget re-fetches with the new settings.

---

## Navegação / Navigation

- **Hash-based routing** — every app lives at a URL hash like `#/movies` or `#/daily`
- **Cmd+K** (or Ctrl+K on Windows/Linux) opens the command palette — search any app or action by name
- **Sidebar** — collapsible; hidden on mobile. Collapse state is saved to localStorage
- **Back navigation** in sub-views uses the Layout top bar (← button), not in-content back buttons

---

## Widgets do dashboard / Dashboard Widgets

The home dashboard (`#/home`) is a grid of widgets you choose. Widgets:
- Are **lazy-loaded** — they only download code when they appear on your dashboard
- Can be **added** via the "+" picker, **removed** individually, and **reordered** by drag
- Have three sizes: `sm` (1×1), `md` (2×1), `lg` (2×2). Some widgets offer all three; others are fixed
- Declare their data sources — removing a widget also clears its cached data
- Can push **notifications** to the bell in the top bar (e.g. seismic events, overdue habits, budget warnings)

The default dashboard for new users includes: Weather, Streak, Habits, Finance, World News, PT News, Movies, TechScope, and a few others.

---

## Localização / Localization

Atlantis ships in **Portuguese (PT) and English (EN)**. The locale toggle (PT | EN) is in the top-right of every screen. Your choice is persisted to `localStorage('atlantis:locale')` and propagates to all mounted apps in real time via a browser custom event.

All user-visible strings in the product go through the `@atlantis/i18n` translation system — no hardcoded language strings in the UI code.
