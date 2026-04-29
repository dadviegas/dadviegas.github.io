# Clarity & Specificity

The single highest-leverage habit in prompting: **say exactly what you mean.** Most "the model didn't get it" is the prompt being vaguer than the prompter realised.

## Three failure modes

### 1. Ambiguous nouns

| Vague | Specific |
|---|---|
| "Fix the bug" | "Fix the off-by-one in `parseRange()` line 42" |
| "Improve the function" | "Make `parse()` handle `null` and empty strings without throwing" |
| "Clean it up" | "Inline `tempVar`, drop unused imports, run prettier" |

### 2. Ambiguous scope

> "Refactor this file."

Does that include renaming exports? Splitting into multiple files? Updating call sites? **Say it.**

> "Refactor `Foo.tsx` for readability. Same exports, same file. Don't touch call sites."

### 3. Ambiguous "good"

> "Write a good error message."

The model and you might disagree on "good." Ship a spec:

> "Write an error message: ≤80 chars, actionable (tell the user what to do), no jargon, no exclamation marks."

## The constraint stack

Layer constraints from most to least important. Models attend to the top of the prompt more.

```
1. Critical constraints  ("Must compile. Must not change exports.")
2. Style / convention    ("Match existing code in the file.")
3. Output shape          ("One unified diff. No commentary.")
4. Nice-to-haves         ("Prefer readable over clever.")
```

## Use absolute references

```
BAD:  "the function above"
GOOD: "the parseRange() function in src/utils/range.ts:42"
```

When Claude has tools, it can verify absolute references. "The thing above" is brittle.

## Numbers, not adjectives

| Adjective | Better |
|---|---|
| "fast" | "under 100ms p95" |
| "short" | "≤80 characters" |
| "small" | "<10kb gzipped" |
| "thorough" | "covers happy path + 3 edge cases listed below" |

## Negation: "do not" vs "instead, do"

LLMs are sometimes weak at pure negation. Pair the don't with a do:

**Weak:** "Don't add comments."
**Strong:** "Strip all comments. Code only — no explanatory prose."

## Positive examples beat negative ones

Telling the model what *not* to write trains the model to think about that thing. Show what good looks like instead.

```
SUBOPTIMAL: "Don't write 'the function does X' style comments."
BETTER:     "Comment only when the WHY is non-obvious. Example:
             // Workaround for Safari bug — see issue #123"
```

## A diagnostic — read your prompt as a contract

Print your prompt. For every sentence ask:

- *Is this an instruction or a wish?*
- *Could a careful intern follow this exactly?*
- *Are there words I haven't defined?*

Sentences that fail any of those need rewriting.

## Practice

Take the worst prompt you sent this week. Rewrite it with these rules. Run both. Diff the answers. The gap is what clarity costs you.
