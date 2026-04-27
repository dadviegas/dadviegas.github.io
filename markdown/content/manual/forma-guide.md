# Forma — Guia Completo / Complete Guide

The Forma app (`#/forma`) is your fasting and diet companion. Track fasting sessions, log meals against weekly templates, weigh in, log walks, and run a 30-day prescribed program with daily check-ins and an adaptive coach. Data syncs across devices when signed in.

---

## What Forma tracks

| Domain | Captured | Surfaced as |
|---|---|---|
| Fasting | Start/end times, target hours, protocol | Live `FastTimer`, streak, day×hour heatmap |
| Meals | Lunch / snack / dinner with protein + kcal | Daily protein bar, meal-time heatmap, kcal-by-hour |
| Weight | Daily weigh-ins | EMA-7 trend chart, forecast to goal |
| Walks | Minutes per day | Walk consistency, weekly totals |
| Check-ins | Hunger 1–5, energy 1–5, adherence yes/no, optional note | Coach inputs |

All of this is persisted locally to `forma:data` (IndexedDB → Supabase when signed in).

---

## Tabs

The app has five tabs (top of the screen):

- **Today** — hero: current fast / weight, mini cards, quick-log bar
- **Activities** — meals, walks, fasting sessions list
- **Weight** — weigh-in history, trend chart, forecast
- **Coach** — daily check-in, coach output, 30-day program controls, AskComments
- **Settings** — goal, templates, protocol, ageMode-aware preferences

---

## Quick-log bar

The bar at the top of the Today tab parses free-text input. Press **Enter** to submit.

| You type | Forma logs |
|---|---|
| `jantar ovos` | Dinner with eggs (matched against today's template) |
| `peso 84.2` | Weight entry: 84.2 kg |
| `caminhei 30` | Walk: 30 minutes |
| `comecei jejum 16` | Start a 16h fasting session now |
| `acabei jejum` | End the active fasting session |

Portuguese keywords: `jantar`, `almoço`, `lanche`, `peso`, `caminhei`, `andei`, `comecei jejum`, `acabei jejum`. English equivalents work too.

---

## Fasting

### Start a fast

Tap the **Start fast** button on the hero, or use `comecei jejum 16` (or `18`, `20`). The `FastTimer` shows hours elapsed, percent of target, and remaining time. The active session also pulses in the home dashboard's `forma-now` widget.

### Protocols

Pick from **16:8 / 18:6 / 20:4 / custom** in Settings or per-session. The active protocol is the default `targetHours` when starting via the quick bar.

### Streak

A streak day = a fasting session that hit its target. The streak counter on Today and Coach tabs reflects consecutive days. Breaking a fast early breaks the streak; an active fast that hasn't ended yet does not.

### Day × hour heatmap

The Activities tab shows when in the week you actually fast (rows = weekday, columns = hour-of-day). Helps spot patterns like "I always break my Friday fast at 18:00".

---

## Meals & weekly templates

Forma ships a **weekly meal plan** (Mon–Sun, lunch + dinner each) seeded from the user's profile. Each entry has a name, protein grams, kcal, and an icon.

| Day | Default lunch | Default dinner |
|---|---|---|
| Mon | Eggs | Tuna + salad |
| Tue | Beef | Tuna + salad |
| Wed | Eggs + whites | Salmon + veg |
| Thu | Chicken | Tuna + salad |
| Fri | Omelette | Tuna + salad |
| Sat | Meat or fish | Free choice |
| Sun | Free choice | Free choice |

When you log a meal via quick-bar (`jantar ovos`), Forma matches against today's template and pre-fills protein/kcal. You can override with `jantar 35g 420kcal`.

The **meal-time heatmap** and **kcal-by-hour** chart on Activities tab show your real eating windows — useful for tightening adherence to your protocol.

---

## Weight

Log via quick-bar (`peso 84.2`) or Weight tab. The chart shows:

- Raw weigh-ins as dots
- 7-day EMA as a smoothed line
- Δ vs 7 days ago
- **Forecast** projecting EMA forward at the current weekly loss rate until it hits `goal.weightKg`

If your EMA hasn't moved down for ≥5 consecutive days, the Coach calls it "stalled" and may suggest a refeed or protocol tweak.

---

## Walks

Log via quick-bar (`caminhei 30`) or Activities tab. The walk consistency metric on the Coach tab shows the fraction of the last N days you hit your `goal.walkMin` target.

---

## Daily check-in

Tap **Check in** on the Coach tab (or anywhere prompting it). The sheet asks:

- **Hunger** (1 low — 5 high)
- **Energy** (1 low — 5 high)
- **Adherence** (did you follow today's plan? Yes/No)
- **Optional note**

One check-in per day; tapping again **updates** today's entry. Check-ins feed the Coach's rule engine.

---

## The Coach

The Coach is a rule-based engine that runs against the last 7 check-ins and your weight history. Tap **Refresh** on the Coach card to regenerate.

### Rules (priority order — first match wins)

1. **High hunger** — today ≥4 or 2-day avg ≥4 → suggest adding eggs
2. **Low energy** — today ≤2 or 2-day avg ≤2 → suggest adding banana
3. **Weight stalled** — EMA flat for ≥5 days → suggest reducing oats and adding a 10-minute walk
4. **Low adherence** — ≥2 missed days in last 7 → suggest simplifying meals
5. **Slow progress** — losing <0.5 kg/week over 7 days → suggest reducing oats
6. **Working** — weight trending down → positive reinforcement
7. **Default** — `Excellent consistency` fallback

The Coach card colour-codes urgency (red for hunger/adherence, amber for stall/lowEnergy, green for working/consistent). Adjustments appear as chips below the message.

### Notification producer

Once per day at first refresh, Forma pushes a `forma.coach` event to the bell with the day's message. Bell badge colour: `#7fb77e`.

### Ask Comments

The Coach tab lets you ask Forma free-form questions ("why am I stalled?"). Forma sends the question + a context blob (recent check-ins, weight trend, goal) to Groq and persists the answer. Capped at 50 entries. Requires a free Groq API key (see [API Keys](./api-keys.md)).

---

## 30-day Program

Optional structured plan accessed from the Coach tab. Once started, each day prescribes:

- Breakfast oats (g) and whether to add a banana
- Tuna-based dinner (or refeed dinner on scheduled days)
- Walk minutes
- Fasting protocol

Refeed days raise the kcal target and use a different dinner (e.g. `forma.dinner.tunaSaladRefeedLight`). The program tracks days completed; clearing it wipes the day log.

The `ProgramOverview` component shows your progress across the full 30-day grid; today's prescription appears prominently on the Today and Coach tabs.

---

## Insights

Beyond the Coach's daily message, Forma's `generateFormaInsights` engine surfaces longer-horizon observations:

- Best weekday for adherence
- Hours of day most likely to break a fast
- Average protein delta vs goal over last 14 days
- Walk consistency trend

These are designed for the dashboard's Insights surface; they do not currently push notifications.

---

## Goals

Configurable in Settings:

- `targetHours` — default fasting window (default 16)
- `weeklyFasts` — target completed fasts per week (default 5)
- `weightKg` — goal weight; drives the forecast end-line
- `proteinG` — daily protein target (used by the Insights engine)
- `kcal` — daily kcal target
- `walkMin` — daily walk-minutes target

Empty goals don't break anything — derived metrics fall back gracefully when a target is absent.

---

## Home dashboard widgets

| Widget | Shows |
|---|---|
| `forma-now` | Live: current fast progress + today's protein + last weight |

Add it from the home dashboard's **Add widget** drawer. The widget reuses the same `forma:data` setting — no extra config.

---

## Data, sync, & deletion

- Storage key: `forma:data` via the shared storage layer
- **Signed out** — IndexedDB only; clearing browser data deletes everything
- **Signed in** — synced to Supabase, available across devices
- All entries are timestamped (`createdAt` epoch ms) so out-of-order edits resolve cleanly
- Coach log capped at 60 entries; Ask comments at 50

To reset: Settings → Clear program (program only) or sign out + clear browser data (all of Forma).

---

## Atalhos / Shortcuts

| Action | Shortcut |
|---|---|
| Focus quick-log bar | `/` |
| Submit | `Enter` |
| Switch tabs | Click only (no hotkeys yet) |
