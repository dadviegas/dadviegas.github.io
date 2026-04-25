# Widget manifests

A **manifest** is the contract between a widget and the rest of Atlantis.
The widget's React component renders a card; the manifest tells the
shell everything *about* that card — how to lazy-load it, what data it
depends on, what sizes it supports, which notification rules it owns,
and how to clean up after itself when the user removes it.

One folder per widget; one `manifest.ts` per folder. The shell never
imports a widget file directly — it imports manifests, and uses
`manifest.load()` (a dynamic `import()`) to fetch the component on
demand.

## The shape

```ts
import type { WidgetManifest } from '../types';

const manifest: WidgetManifest = {
  id: 'demo-pulse',
  load: () => import('./DemoPulseWidget').then((m) => ({ default: m.DemoPulseWidget })),

  labels:       { en: 'Demo Pulse',          pt: 'Pulso Demo' },
  descriptions: { en: 'Heartbeat from a fake service.', pt: 'Batimento de um serviço fictício.' },
  icon: '🟢',
  accentColor: '#7fb77e',

  defaultSize: 'sm',
  availableSizes: ['sm', 'md'],
  defaultCols: 1,
  maxCols: 1,
  minHeight: 160,
  suite: 'tools',

  sources: [],
};

export default manifest;
```

That's all the shell needs. The component itself is loaded the first
time the widget is rendered.

## Why a manifest at all

Three reasons one wouldn't get from "just import the component":

1. **Lazy loading.** The shell ships a tiny manifest list at boot and
   only downloads the actual widget code when it appears on the
   dashboard. Adding 50 widgets doesn't bloat the home screen.
2. **Surfaces beyond the dashboard.** The picker, the settings page,
   the notification bell, and the teardown logic all need to know
   *about* a widget without rendering it. The manifest is the data
   they read.
3. **Lifecycle hooks.** Adding a widget can register notification
   producers; removing one can clear cached data. The manifest is
   where those edges hang.

## Fields, in order of how often you'll touch them

### `id` and `load`

`id` is the stable key used in storage (`shell:dashboard-widgets`),
settings, and telemetry. **Never rename** an existing id — users have
it persisted.

`load` is the lazy loader. The slightly awkward shape
(`.then((m) => ({ default: m.X }))`) is what `React.lazy` wants when
the component is exported as a named export instead of a default.

### `labels`, `descriptions`, `icon`, `accentColor`

User-facing copy lives here. `labels` and `descriptions` are bilingual;
`icon` is an emoji shown in the picker; `accentColor` paints the 2px
left bar on the card and tints the picker tile.

These are the only place "what is this widget called" lives. The
component doesn't need to know its own name.

### `defaultSize`, `availableSizes`, `minHeight`

Three discrete sizes — `sm` (1×1), `md` (2×1), `lg` (2×2). Mobile
collapses everything to 1 column and keeps the row-span, so `lg`
remains tall.

`availableSizes` is a subset the user can pick. A clock that only
makes sense as a square stays at `['sm']`. `defaultCols` and `maxCols`
are legacy fields kept in sync — older code reads them.

### `suite`

Filter tab in the picker. Pick whichever group the widget belongs to:
`lab`, `vida`, `learn`, `games`, `ent`, `tools`. This isn't visual
chrome — it's just how the user finds the widget.

### `defaultOnDashboard`

`true` means the widget appears on a new user's dashboard out of the
box. Reserve it for genuinely useful, low-noise widgets — every default
is real estate that pushes the others down.

## What a manifest unlocks

These fields turn the manifest from "metadata file" into the spine of
the whole widget system.

### `sources` — declarative data dependencies

```ts
sources: [
  {
    id: 'fake-pulse',
    kind: 'cache-key',
    cacheKey: 'demo-pulse',
    labelKey: 'demoPulse.source.fakePulse',
    notifiable: true,
  },
],
```

Each entry says "this widget reads from this place." Three things
consume it:

- The **settings page** lists sources by `labelKey` so users can see
  what data a widget pulls.
- **Teardown** clears `widget-cache:<cacheKey>` when the widget is
  removed (no orphaned state).
- **Telemetry** can attribute fetch volume back to the widget.

A `sources: []` manifest is fine for widgets that store nothing.

### `notifications` — bell rules

```ts
notifications: [
  {
    id: 'demo-pulse-down',
    category: 'demo.pulse',
    labelKey: 'notifications.source.demoPulse',
    badgeColor: '#f85149',
    cacheKey: 'demo-pulse',
    parse: (payload) => {
      const data = payload as { down?: { id: string; ts: number; reason: string }[] };
      return (data.down ?? []).map((d) => ({
        id: `pulse:${d.id}`,
        ts: d.ts,
        title: `Pulse down — ${d.reason}`,
      }));
    },
  },
],
```

Notification rules **register when the widget is added** and
**unregister when it's removed**. Producers don't run when the user
doesn't have the widget — no wasted polling, no surprise events from
features the user doesn't use.

The `parse` function is the contract: take the cached payload and
return `ParsedEntry[]`. The bell handles dedupe, sorting, age cutoff,
and rendering.

### `persistedKeys` and `cleanup`

```ts
persistedKeys: ['widget-cache:demo-pulse', 'demoPulse:lastSeen'],
cleanup: async () => {
  await stopBackgroundJob();
},
```

Removal flow:
1. `cleanup()` runs first (cancel timers, close sockets, stop workers).
2. Every key in `persistedKeys` is deleted from storage.
3. Notification rules are unregistered.

Set both fields and the widget leaves no trace when the user removes
it. Skip them and stale state piles up forever.

## A complete generic example

A made-up "fan speed" widget that reads a hypothetical
`/api/sensors/fan` endpoint, alerts when the fan is over 80%, and
caches results for five minutes:

```ts
// packages/widgets/src/fan-speed/manifest.ts
import type { WidgetManifest } from '../types';
import { fanSpeedRules } from './notifications';

const manifest: WidgetManifest = {
  id: 'fan-speed',
  load: () => import('./FanSpeedWidget').then((m) => ({ default: m.FanSpeedWidget })),

  labels:       { en: 'Fan Speed',                pt: 'Velocidade Ventoinha' },
  descriptions: { en: 'Live RPM from the case fan.', pt: 'RPM em tempo real da ventoinha.' },
  icon: '🌀',
  accentColor: '#58a6ff',

  defaultSize: 'sm',
  availableSizes: ['sm'],
  defaultCols: 1,
  maxCols: 1,
  minHeight: 140,
  suite: 'tools',

  sources: [
    {
      id: 'sensors',
      kind: 'dal-client',
      cacheKey: 'fan-speed',
      labelKey: 'fanSpeed.source.sensors',
      notifiable: true,
    },
  ],

  notifications: fanSpeedRules,
  persistedKeys: ['widget-cache:fan-speed', 'fanSpeed:thresholdAck'],
};

export default manifest;
```

The companion files would be:

- `FanSpeedWidget.tsx` — the React component, rendered through
  `manifest.load()`.
- `notifications.ts` — exports `fanSpeedRules: RegisteredRule[]`,
  shaped via the `makeRule` helper.
- `sources.ts` — optional, if the source list grows beyond a couple of
  entries.
- A BLL hook (`packages/bll/src/sensors/react.ts` or similar) — the
  component never calls `fetch` or `cachedFetch` directly; it consumes
  a hook that wraps a DAL client.

That's the whole pattern. Same shape whether the widget shows a
heartbeat, a stock ticker, or a static quote of the day.

## What a widget can do, summarised

- **Render anything** — a chart, a row list, a hero number, a
  scoreboard. The manifest doesn't constrain visuals.
- **Stay tiny by default** — lazy-loaded, no boot cost.
- **Pull from caches** — declare `sources`; the kernel cache + IDB
  layer handle TTLs.
- **Push to the bell** — declare `notifications` and the rule kicks
  in only while the widget is on the dashboard.
- **Be cleaned up** — `persistedKeys` and `cleanup` mean removal is
  reversible and complete.

## What a widget shouldn't do

- **Reach into shell internals.** The widget consumes `WidgetProps`
  (just `locale` for most cases). It doesn't know about routing,
  auth, or other widgets.
- **Import DAL directly.** Always go through a BLL hook so policy
  (caching, retries, dedupe) is centralised.
- **Mutate global state.** Side effects belong in `cleanup` or in BLL
  facades.
- **Render its own loading spinner.** Use `<WidgetState>` from
  `@atlantis/widgets/_shared/` so every widget's loading / empty /
  error state looks identical.

## When you add a new widget

1. Create the folder under `packages/widgets/src/<id>/`.
2. Write the component, sources file, optional notifications file.
3. Author `manifest.ts`.
4. Register it in `packages/widgets/src/registry.ts` (one import +
   one entry in `WIDGET_REGISTRY`, alphabetical).
5. Add translation keys to `packages/widgets/src/translations.ts`.

After that, the picker shows it, the dashboard can host it, the bell
respects its rules, and removal cleans up. None of those wiring points
needed editing — the manifest is the glue.
