# Finance — Guia Completo / Complete Guide

The Finance app (`#/finance`) is a family budget tracker. It works without sign-in (data saved locally) and syncs across devices when you're signed in.

---

## Quick-add / Adicionar despesas rapidamente

The quick-add bar at the top is the fastest way to log expenses. Type naturally and press **Enter** or tap **+**.

### Syntax

```
12.50 continente
```
Logs €12.50 with description "continente". Category is auto-guessed from the description using keyword matching.

```
@ines 30 farmácia
```
Logs €30 attributed to the family member **Inês**.

```
@shared 45 luz
```
Logs €45 as a shared household expense.

### Auto-category

Atlantis matches common keywords to categories automatically:
- `continente`, `pingo doce`, `aldi`, `mercado` → Alimentação / Food
- `farmácia`, `médico`, `saúde` → Saúde / Health
- `gasolina`, `uber`, `transporte` → Transportes
- `netflix`, `spotify`, `streaming` → Subscrições / Subscriptions
- `restaurante`, `café`, `jantar` → Restauração / Dining

You can override the category after adding, or edit the `categoryHints` in Settings to teach the system new keywords.

---

## Membros da família / Family Members

Assign expenses to household members to track individual spending.

- Add members in the **Members** section of the app
- Each member can have a role: `adult` or `child`
- Use `@nome` in quick-add to attribute an expense
- The member rail (desktop sidebar) or chip row (tablet) shows each person's spend for the selected period
- Unattributed expenses show as `🏠 Shared`

### Member attribution in expense rows

Every expense row shows the member avatar as a prefix. Untagged rows show a faint `—` so the column stays visible and scannable.

---

## Categorias e orçamento / Categories & Budget

Go to **Budget** in the sidebar to:
- Set a **weekly budget** (shows as a progress bar + "good / warning / danger" status)
- Set per-category limits (optional — shown as per-row progress indicators)

The **Finance widget** on the home dashboard shows:
- Your weekly budget status pill (green / amber / red)
- Current week's spending vs budget
- A mini sparkline of the last 4 weeks

---

## Tipos de despesa / Expense Types

| Type | When to use |
|---|---|
| `daily` | One-off purchase (default) |
| `monthly` | One-time but large (e.g. rent — log manually each month) |
| `recurring` | Automatic (engine coming soon — see below) |

### Reimbursables / Reembolsáveis

Toggle **Reimbursable** when logging an expense paid on behalf of someone else. Once repaid, mark it **Reimbursed**. The Insights section shows your pending reimbursable total.

---

## Desfazer / Undo

Every write (add, edit, delete, mark reimbursed) can be undone. An **Undo** toast appears at the bottom of the screen for ~5 seconds after each action. The undo buffer holds the last 20 actions (in-memory — resets on page reload).

---

## Insights

The Insights tab shows AI-generated observations about your spending patterns:
- Unusual spikes in a category vs your 3-month average
- Categories trending up or down
- Member-attributed insights when one person drives >70% of a category
- Reimbursable pending summary

---

## Exportar / Export

*(Coming soon)* A monthly PDF report will be available — budget summary, category donut chart, member small multiples, top 10 expenses, and reimbursable ledger.

---

## Recurring Expenses *(Engine coming soon)*

The `recurring` expense type exists in the data model but the auto-creation engine is not yet implemented. When it ships, you'll be able to define rules like "€9.99 Netflix every month on the 15th" and the app will auto-log them on the due date.

---

## Dados e sincronização / Data & Sync

- Data is stored under the key `finance:data` via the shared storage layer
- **Signed out:** saved to IndexedDB in your browser — clearing browser data removes it
- **Signed in:** synced to Supabase — accessible from any device
- Data includes: expenses, income entries, family members, budget settings, category hints, and recent descriptions (for autocomplete)

---

## Atalhos de teclado / Keyboard shortcuts

| Action | Shortcut |
|---|---|
| Focus quick-add bar | `/` |
| Submit quick-add | `Enter` |
| Undo last action | Toast button (no keyboard shortcut yet) |
