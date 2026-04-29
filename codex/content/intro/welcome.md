# Welcome to Codex

Codex is a study guide written for engineers who have already shipped production frontend code and want to go deeper. Every entry assumes you've written the thing — you've called `useEffect`, you've bundled a webpack project, you've shipped a TypeScript component. The question Codex tries to answer is *why* it works the way it does, and what the senior-level mental model looks like.

## Who this is for

Mid-to-senior frontend engineers who want to close gaps. You may be strong in React but fuzzy on the browser rendering pipeline. You may have shipped webpack configs by copy-pasting without knowing why `sideEffects: false` matters. You may have used TypeScript for two years but never reached for a conditional type. Codex assumes competence and skips the introductions.

Staff+ engineers who want a quick-reference resource during a code review or an architecture discussion. Each entry is written to be read in under ten minutes and to leave you with something concrete to say or do.

## How to use it

Pick a topic from the sidebar — everything is standalone. Entries are grouped by domain, not by difficulty. Start wherever your gaps are. The mindset section is worth reading regardless of experience level.

## What Codex is not

- It is not "What is JavaScript." If you need to know what a variable is, MDN is the better resource.
- It is not a tutorial. There are no step-by-step exercises. Entries explain the mechanism, the trade-offs, and the failure modes.
- It is not exhaustive. The goal is depth on high-leverage topics, not surface coverage on everything.

## Design decisions

Every code example uses realistic identifiers. No `foo`, no `bar`, no `console.log("hello")`. The wrong way appears before the right way so you can recognise the mistake in a real codebase.

Every entry answers three questions: what is the mechanism, when does it break, and what is the senior-level move.

---

When you find something wrong or missing, the source of truth is the `apps/codex/public/content/` directory in the Atlantis monorepo. Corrections welcome.

## Related

- See also: [Foundations → Event Loop](#/codex/foundations-event-loop) — start here for core JS concepts.
- See also: [React → Hooks Rules and Mental Model](#/codex/react-hooks-rules-and-mental-model)
- See also: [Performance → Core Web Vitals](#/codex/performance-core-web-vitals)

## Sources

- [MDN — Web Docs](https://developer.mozilla.org/en-US/)
- [web.dev — Learn](https://web.dev/learn)
- [React docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
