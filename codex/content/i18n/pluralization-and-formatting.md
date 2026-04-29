# Pluralization and Formatting

Pluralization rules vary wildly across languages: English has two forms (1 item / 2 items), Polish has four, Arabic has six. Number, date, and list formatting also differs by locale. The `Intl` API handles this without a library.

## Plural rules via `Intl.PluralRules`

```ts
// English: 'one' | 'other'
// Portuguese: 'one' | 'other'
// Polish: 'one' | 'few' | 'many' | 'other'
// Arabic: 'zero' | 'one' | 'two' | 'few' | 'many' | 'other'

function pluralize(n: number, locale: string, forms: Partial<Record<Intl.LDMLPluralRule, string>>) {
  const rule = new Intl.PluralRules(locale).select(n);
  return (forms[rule] ?? forms.other ?? '').replace('{n}', String(n));
}

// English
pluralize(1, 'en', { one: '{n} item', other: '{n} items' }); // "1 item"
pluralize(5, 'en', { one: '{n} item', other: '{n} items' }); // "5 items"

// Portuguese
pluralize(0, 'pt', { one: '{n} resultado', other: '{n} resultados' }); // "0 resultados"
pluralize(1, 'pt', { one: '{n} resultado', other: '{n} resultados' }); // "1 resultado"
```

## Number formatting — never use toFixed() for display

```ts
// ❌ toFixed returns a string — no locale-aware formatting
const price = (1234.5).toFixed(2); // "1234.50" — always period, no grouping

// ✅ Intl.NumberFormat — locale-aware
const fmt = new Intl.NumberFormat('pt-PT', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
});
fmt.format(1234.5); // "1 234,50 €" (Portuguese style)

// Number with grouping only
new Intl.NumberFormat('pt-PT').format(1234567); // "1 234 567"
new Intl.NumberFormat('en-US').format(1234567); // "1,234,567"

// Compact notation
new Intl.NumberFormat('en', { notation: 'compact' }).format(12345); // "12K"
new Intl.NumberFormat('pt', { notation: 'compact' }).format(12345); // "12 mil"

// Percentage
new Intl.NumberFormat('en', { style: 'percent', maximumFractionDigits: 1 }).format(0.756); // "75.6%"
```

## Date and time formatting

```ts
const date = new Date('2026-04-29T14:00:00');

// Full dates
new Intl.DateTimeFormat('pt-PT', { dateStyle: 'full' }).format(date);
// "terça-feira, 29 de abril de 2026"

new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date);
// "Tuesday, April 29, 2026"

// Relative time
const rtf = new Intl.RelativeTimeFormat('pt', { numeric: 'auto' });
rtf.format(-1, 'day');   // "ontem"
rtf.format(-3, 'hour');  // "há 3 horas"
rtf.format(2, 'week');   // "em 2 semanas"

// Smart relative time helper
function relativeTime(date: Date, locale: string): string {
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  const seconds = (date.getTime() - Date.now()) / 1000;
  if (Math.abs(seconds) < 60) return rtf.format(Math.round(seconds), 'second');
  if (Math.abs(seconds) < 3600) return rtf.format(Math.round(seconds / 60), 'minute');
  if (Math.abs(seconds) < 86400) return rtf.format(Math.round(seconds / 3600), 'hour');
  return rtf.format(Math.round(seconds / 86400), 'day');
}
```

## List formatting

```ts
const items = ['apples', 'oranges', 'bananas'];

new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(items);
// "apples, oranges, and bananas"

new Intl.ListFormat('pt', { style: 'long', type: 'conjunction' }).format(['maçãs', 'laranjas', 'bananas']);
// "maçãs, laranjas e bananas"

new Intl.ListFormat('en', { style: 'short', type: 'disjunction' }).format(items);
// "apples, oranges, or bananas"
```

## Caching formatters

`Intl` object construction is expensive — cache instances:

```ts
const formatters = new Map<string, Intl.NumberFormat>();

function getFormatter(locale: string, options: Intl.NumberFormatOptions) {
  const key = `${locale}:${JSON.stringify(options)}`;
  if (!formatters.has(key)) {
    formatters.set(key, new Intl.NumberFormat(locale, options));
  }
  return formatters.get(key)!;
}
```

## Related

- See also: [i18n → Translation Management](#/codex/i18n-translation-management) for string externalization.
- See also: [CSS → Logical Properties and i18n](#/codex/css-logical-properties-and-i18n) for RTL layout.

## Sources

- [MDN — Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [MDN — Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules)
- [MDN — Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat)
- [Unicode CLDR — Plural rules](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html)
