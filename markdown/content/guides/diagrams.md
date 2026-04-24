# Diagrams with Mermaid

Fenced code blocks tagged `mermaid` render as diagrams. The library is
lazy-loaded and the container matches the Atlantis finance-card look —
surface background, 2px green left accent, tabular-nums inside labels.

Every example below uses the **Family Finance** app as a running
domain, so the diagrams double as reference for how that app is wired.

## Flowchart — expense flow

Income lands, gets classified, rolls up into the weekly status
indicator.

```mermaid
flowchart LR
    I[Income] --> B[Budget]
    B --> C1[Groceries]
    B --> C2[Transport]
    B --> C3[Leisure]
    C1 --> S[Weekly status]
    C2 --> S
    C3 --> S
    S --> G[good - under 80 percent]
    S --> W[warning - 80 to 100 percent]
    S --> D[danger - over 100 percent]
```

## Pie — spending by category

Month-to-date split. The palette maps to the Atlantis accent ring.

```mermaid
pie showData
    title April 2026 spend
    "Groceries" : 420
    "Transport" : 180
    "Leisure" : 140
    "Utilities" : 90
    "Eating out" : 110
    "Other" : 60
```

## Sequence — adding an expense

Happy path for the quick-add input: parse, auto-classify, persist,
emit a BLL event so every mounted finance surface refreshes.

```mermaid
sequenceDiagram
    autonumber
    actor U as User
    participant UI as Finance App
    participant BLL as useFinance
    participant DB as Shared storage
    participant BUS as Event bus

    U->>UI: types "12.50 continente"
    UI->>UI: parseQuickInput
    UI->>UI: guessCategory to groceries
    UI->>BLL: save(next)
    BLL->>DB: putSetting finance:data
    BLL-->>BUS: finance:change
    BUS-->>UI: re-render
    BUS-->>UI: FinanceWidget refresh
```

## State — weekly budget status

The status badge transitions as the week's running total crosses each
threshold.

```mermaid
stateDiagram-v2
    [*] --> good
    good --> warning: crosses 80 percent
    warning --> danger: crosses 100 percent
    warning --> good: drops below 80
    danger --> warning: drops below 100
    danger --> good: drops below 80
    good --> [*]: new week
    warning --> [*]: new week
    danger --> [*]: new week
```

## Entity Relationship — finance model

The persisted shape of `finance:data`.

```mermaid
erDiagram
    FinanceData ||--o{ Expense : contains
    FinanceData ||--o{ Income : contains
    FinanceData ||--o{ FamilyMember : contains
    FinanceData ||--|| FinanceBudget : has
    Expense }o--|| FinanceCategory : tagged
    Expense }o--o| FamilyMember : attributedTo

    Expense {
        string id
        number amount
        string date
        string categoryId
        string description
        string type
    }
    FinanceCategory {
        string id
        string label
        string color
    }
    FamilyMember {
        string id
        string name
    }
    FinanceBudget {
        number weekly
        number monthly
    }
```

## Gantt — a finance sprint

```mermaid
gantt
    title Finance v2 rollout
    dateFormat  YYYY-MM-DD
    axisFormat  %d %b

    section DAL
    Cache kernel tweaks      :done,    d1, 2026-04-10, 3d
    section BLL
    Insights engine          :active,  b1, 2026-04-15, 5d
    Budget thresholds        :         b2, after b1, 3d
    section UI
    Hero and category ring   :done,    u1, 2026-04-12, 4d
    Quick-add parser         :         u2, after b2, 2d
```

## Class — BLL shape

```mermaid
classDiagram
    class useFinance {
      +data
      +loaded
      +save(next)
    }
    class financeStore {
      -snapshot
      +load()
      +save(next)
      +subscribe(listener)
    }
    class computeWeeklyStatus {
      +budget
      +spent
      +status
    }
    useFinance --> financeStore : reads and writes
    useFinance --> computeWeeklyStatus : derives
```

## Tips

- Mermaid is **lazy-loaded** — the library only ships once a diagram
  is rendered on the page.
- The palette follows the Atlantis dark theme: surface background,
  finance-green left accent on the card, muted edges, tabular-nums
  inside labels.
- Invalid or empty diagrams fall back to the raw source instead of
  leaving a ghost box behind.
- Avoid `<` / `>` / `&lt;` inside labels — Mermaid treats them as
  syntax. Write "under" / "over" or use words instead.
