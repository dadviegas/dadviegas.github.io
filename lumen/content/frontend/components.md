# Generating Components

The single most common AI-native frontend task. Here's how to make it boring and reliable.

## The component prompt template

```
Read these reference files:
  - packages/ui/src/Button/Button.tsx
  - packages/ui/src/IconButton/IconButton.tsx

Generate a new component `<Name>` in packages/ui/src/<Name>/:
  - <Name>.tsx       — Emotion styled, default export
  - <Name>.test.tsx  — RTL test, happy path + 1 edge case
  - index.ts         — re-export

Props:
  <list of props with TypeScript types>

Constraints:
  - Theme tokens only (theme.colors.*, theme.spacing.*) — no hex, no raw px
  - Responsive at 375 / 768 / 1280
  - Keyboard accessible (focus ring, role, aria-*)
  - No comments unless WHY is non-obvious
  - Follow the file structure of the references exactly

Stop after creating the files.
```

This template works for buttons, inputs, dropdowns, sheets, modals, charts. Adjust the references and props.

## Vision-driven (mock → component)

If you have a screenshot:

```
[paste image]

Generate React + Emotion code that matches this mock.
Use these design tokens:
  --bg: #0d1117; --surface: #161b22; --text: #e6edf3; --accent: #58a6ff;

Hard rules: theme tokens only, no hex; responsive; accessible.
```

(See: `Claude API → Vision`.)

## A real example with output

**Prompt:**

```
Read packages/ui/src/Button/Button.tsx for style reference.

Generate a `Pill` component in packages/ui/src/Pill/:
- Pill.tsx, Pill.test.tsx, index.ts
- Props: { children: ReactNode; tone?: 'neutral' | 'success' | 'warning' | 'danger' }
- 11px mono uppercase, 0.16em tracking
- Tone drives a 12% alpha background of the matching theme color
- No interactive behaviour (it's a label, not a button)

Stop after files.
```

**What good output looks like:**

```tsx
// Pill.tsx
import styled from '@emotion/styled';
import { theme } from '@atlantis/shared';

type Tone = 'neutral' | 'success' | 'warning' | 'danger';

const TONE_COLORS: Record<Tone, string> = {
  neutral: theme.colors.mainTextMuted,
  success: '#7fb77e',
  warning: '#facc15',
  danger:  theme.colors.danger,
};

const Wrapper = styled.span<{ tone: Tone }>`
  display: inline-flex;
  align-items: center;
  height: 18px;
  padding: 0 ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.sm};
  font: 600 11px/1 ${theme.typography.fontFamilyMono};
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ tone }) => TONE_COLORS[tone]};
  background: ${({ tone }) => TONE_COLORS[tone] + '1f'};   /* 12% alpha */
`;

interface PillProps {
  children: React.ReactNode;
  tone?: Tone;
}

export function Pill({ children, tone = 'neutral' }: PillProps) {
  return <Wrapper tone={tone}>{children}</Wrapper>;
}
```

Notice: theme tokens, typed props, no comments fluff, matches the `Button` style.

## Editing existing components

```
Read packages/ui/src/Button/Button.tsx.

Add a `loading` prop. When true:
- Disable the button
- Replace the icon (if any) with a spinner
- Keep the same width to prevent layout shift

Update Button.test.tsx to cover the loading state. Don't change anything else.
```

The constraint *don't change anything else* prevents scope creep.

## Component vs screen

Don't ask for whole screens in one prompt. Ask for:

1. The data hook.
2. The hero / list / card.
3. The empty / loading / error states.
4. The page that composes them.

Four small prompts >> one giant one. Each diff is reviewable.

## Anti-patterns

- **"Make me a perfect button."** No spec, no reference → no win.
- **Forcing the model to invent style.** It'll invent something generic. Show it your style.
- **Putting all design tokens in the prompt.** Cache them in the system prompt instead.
- **Letting the model "improve" while implementing.** State scope explicitly.
- **Ignoring the test file.** "Don't worry about tests" → no tests forever. Default to writing them.

## Practice

Pick a small component you actually need. Use the template at the top. Post the answer to a teammate (or yourself in a few hours). Honest review: would you ship this?
