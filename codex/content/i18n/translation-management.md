# Translation Management

Externalizing strings is the foundation of i18n — all user-visible text lives in locale files, not in components. Translation management covers how those files are structured, how strings are loaded at runtime, and how to keep translations in sync as the product evolves.

## Key structure — flat vs namespaced

```ts
// Flat keys — simple but hard to maintain at scale
{
  "title": "Dashboard",
  "saveButton": "Save",
  "deleteButton": "Delete"
}

// Namespaced keys — scoped by feature, easier to locate
{
  "dashboard.title": "Dashboard",
  "dashboard.save": "Save",
  "dashboard.delete": "Delete",
  "profile.save": "Save profile",
  "profile.delete": "Delete account"
}

// Nested (common in i18next) — maps to namespace.key.subkey
{
  "dashboard": {
    "title": "Dashboard",
    "actions": { "save": "Save", "delete": "Delete" }
  }
}
```

## ICU Message Format

ICU syntax handles plurals, selects, and interpolation in a single format string:

```ts
// Simple variable
"greeting": "Hello, {name}!"

// Plural
"itemCount": "{count, plural, one {# item} other {# items}}"

// Select (gender, roles, etc.)
"userRole": "{role, select, admin {Administrator} editor {Editor} other {Viewer}}"

// Nested plural + select
"notification": "{count, plural, one {{count} new message from {sender}} other {{count} new messages from {sender}}}"
```

```ts
import { IntlMessageFormat } from 'intl-messageformat';

const msg = new IntlMessageFormat('{count, plural, one {# item} other {# items}}', 'en');
msg.format({ count: 1 });  // "1 item"
msg.format({ count: 5 });  // "5 items"
```

## Missing translation detection

Never silently fall through to a raw key — make missing translations obvious in dev:

```ts
function createT(locale: 'en' | 'pt', keys: Record<string, { en: string; pt: string }>) {
  return function t(key: string, vars?: Record<string, string | number>): string {
    const translations = keys[key];
    if (!translations) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[i18n] Missing translation key: "${key}"`);
      }
      return key; // fallback to key
    }
    let text = translations[locale] ?? translations.en;
    if (vars) {
      text = text.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
    }
    return text;
  };
}
```

## Translation file conventions

```
src/
  translations/
    en.yml      # English (canonical — all keys must exist here)
    pt.yml      # Portuguese (secondary — missing keys fall back to en)

# Or per-namespace files:
  translations/
    en/
      common.json
      dashboard.json
      profile.json
    pt/
      common.json
      dashboard.json
```

## Keeping translations in sync (CI)

```bash
# Script: check pt.yml has all keys from en.yml
node scripts/check-translations.mjs

# Output:
# Missing in pt.yml:
#   dashboard.newFeature
#   profile.deleteAccount
# ❌ Translation check failed
```

```ts
// scripts/check-translations.mjs
import en from '../src/translations/en.yml' assert { type: 'json' };
import pt from '../src/translations/pt.yml' assert { type: 'json' };

const missing = Object.keys(en).filter((k) => !(k in pt));
if (missing.length > 0) {
  console.error('Missing in pt.yml:\n', missing.map((k) => `  ${k}`).join('\n'));
  process.exit(1);
}
```

## Translation extraction from source

For large projects, use i18n extraction tools to find all `t('key')` calls and auto-generate key lists:

```bash
# i18next-scanner — extracts keys from source files
npx i18next-scanner 'src/**/*.{ts,tsx}' --output 'src/translations/{{lng}}/{{ns}}.json'

# TypeScript-safe approach: generate types from translation files
# packages/i18n/src/types.ts — auto-generated from en.yml at build time
```

## Related

- See also: [i18n → Pluralization and Formatting](#/codex/i18n-pluralization-and-formatting) for Intl API formatting.
- See also: [CSS → Logical Properties and i18n](#/codex/css-logical-properties-and-i18n) for RTL layout.
- See also: [Accessibility → WCAG Essentials](#/codex/accessibility-wcag-essentials) for language attribute requirements.

## Sources

- [Unicode — ICU Message Format](https://unicode-org.github.io/icu/userguide/format_parse/messages/)
- [i18next docs — Introduction](https://www.i18next.com/overview/introduction)
- [intl-messageformat](https://formatjs.io/docs/intl-messageformat)
- [Format.js — Internationalization](https://formatjs.io/)
