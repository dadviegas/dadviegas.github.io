# Daily Manager — Guia / Guide

The Daily Manager (`#/daily`) is a habit and mission tracker. It works without sign-in (data saved locally) and syncs across devices when you're signed in.

---

## Missões / Missions

A **mission** is a daily habit you want to track. The app ships with a set of seeded missions (Brush teeth, Read, Exercise, Sleep on time…) that you can keep, edit, or delete. You can also create your own.

### Missions shipped by default

| Icon | Mission | Points |
|---|---|---|
| 🪥 Toothbrush | Brush teeth | 10 |
| 📚 Book | Read | 15 |
| 🌿 Leaf | Exercise / Move | 20 |
| 🛏 Bed | Sleep on time | 15 |
| 🎒 Backpack | Prepare for next day | 10 |
| 🍽 Utensils | Eat well | 10 |
| 🧹 Broom | Tidy up | 10 |
| 👕 Shirt | Lay out clothes | 5 |

### Creating a custom mission

1. Tap **Edit missions** (pencil icon) in the app
2. Tap **+ New mission**
3. Pick an icon (from the Atlantis icon gallery), a color, a name, and a point value
4. Optionally set a **scheduled time** (HH:MM) — the notification bell will remind you when it's past due

### Editing and deleting

Long-press or tap the edit button on any mission row to rename, change its icon/color, adjust points, or delete it.

---

## Streak / Sequência

A **streak day** counts when you complete **at least 3 missions** in a calendar day. The streak counter shows how many consecutive days you've hit that threshold.

- The home dashboard **Streak widget** shows your current streak + a sparkline of the last 7 days
- Streak days are stored as a list of `YYYY-MM-DD` strings and are recomputed from your full mission history
- If you forget to open the app one day, the streak resets — but your history is preserved so you can see past performance

---

## Pontos / Points

Every completed mission earns its configured point value. Points are cumulative (totalled across all time). There's no reset or "spend" mechanic currently — points are a motivational indicator, not a currency.

---

## Histórico semanal / Weekly History Grid

The **History** tab shows a 7-day grid of which missions you completed on each day. Days with ≥3 missions completed are highlighted (streak days). Tap any day cell to see the mission list for that day.

---

## Lembretes / Reminders

If a mission has a **scheduled time** set and that time has passed today without the mission being completed, the notification bell shows an overdue reminder:

- A grouped "Daily overdue" notification lists all missions that are past-due
- Clicking the bell row navigates to `#/daily`
- The reminder clears automatically on the next calendar day (even if the missions weren't done)

To set a reminder: edit the mission → set a time (HH:MM, 24h format).

---

## Widgets no dashboard / Dashboard Widgets

Two widgets connect to your Daily data:

### Streak Widget (`sm`, 1×1)
Shows: current streak count, a 7-day bar chart of completed missions per day, and today's completion status.

### Habits Widget (`sm`, 1×1)
Shows: today's mission list with checkboxes. Checking a mission here marks it done in the app (same data, same storage key). Useful as a quick morning checklist without opening the full app.

Both widgets subscribe to the same BLL store — checking off a mission in either widget or the full app updates all three views instantly.

---

## Dados e sincronização / Data & Sync

- Data is stored under the key `daily:progress` via the shared storage layer
- **Signed out:** saved to IndexedDB — clearing browser data removes it
- **Signed in:** synced to Supabase — accessible from any device, progress carries across phone + laptop
- The data includes: mission definitions, completion history (per-day record), streak days, total points

---

## Atalhos / Shortcuts

| Action | How |
|---|---|
| Mark mission done | Tap the mission circle / checkbox |
| Add to dashboard | Home → + widget → search "Habits" or "Streak" |
| Open from notification | Tap overdue bell row |
