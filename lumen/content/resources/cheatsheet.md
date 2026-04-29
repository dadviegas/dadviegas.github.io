# Cheat Sheet

Single page. Print it.

## Prompt recipe

```
[ROLE] You are X.
[TASK] Do Y.
[CONTEXT] Here is what you need: ...
[OUTPUT] Reply in shape Z.
```

## Models (defaults — pick the latest)

| Tier | ID | Use |
|---|---|---|
| Strong | `claude-opus-4-7` | Hard reasoning, agents, long context |
| Balanced | `claude-sonnet-4-6` | Production default |
| Fast | `claude-haiku-4-5-20251001` | High volume, classification |

## Temperature

| Goal | T |
|---|---|
| Extraction / classification | 0 |
| Code | 0.2 — 0.4 |
| Brainstorm | 0.7 — 1.0 |

## Cache breakpoints

```ts
{ type: "text", text: BIG_PROMPT, cache_control: { type: "ephemeral" } }
```

Cache: system prompts, tool definitions, big docs, examples. *Not* the user question.

## Tool-use loop (in 6 lines)

```
loop:
  res = call(messages, tools)
  if res.stop_reason != tool_use: return res.text
  for tu in res.tool_use_blocks: results.append(execute(tu))
  messages.append(assistant=res, user=tool_results)
```

## Claude Code shortcuts

| Action | Command |
|---|---|
| New session | `claude` |
| One-shot | `claude "do X"` |
| Resume | `claude --resume` / `/resume` |
| Generate `CLAUDE.md` | `/init` |
| Toggle permissions | `/permissions` |
| Fast mode | `/fast` |
| Recurring task | `/loop 5m /foo` |

## Custom slash commands

```
.claude/commands/<name>.md

---
description: When to fire
allowed-tools: Read, Edit, Bash
---
[the prompt body, with $1, $2 args]
```

## Custom skills

```
.claude/skills/<name>/SKILL.md

---
name: <name>
description: When + when not to fire
allowed-tools: Read, Bash
---
[the body]
```

## Hooks (settings.json)

```json
{
  "hooks": {
    "PreToolUse":  [{ "matcher": "Edit", "hooks": [{ "type": "command", "command": "..." }] }],
    "PostToolUse": [{ "matcher": "Edit", "hooks": [{ "type": "command", "command": "..." }] }],
    "Stop":        [{               "hooks": [{ "type": "command", "command": "..." }] }]
  }
}
```

## Permissions (settings.json)

```json
{ "permissions": {
  "allow": ["Bash(pnpm test*)", "Read(**)"],
  "deny":  ["Bash(rm -rf*)", "Bash(git push --force*)"]
}}
```

## XML tags worth knowing

`<task>` `<context>` `<rules>` `<examples>` `<example>` `<input>` `<output_format>` `<thinking>` `<answer>`

## Anti-patterns to kill

- "please" / "thank you" — useless tokens
- "make it better" — vague
- ignoring permission prompts
- skipping the diff review
- not caching stable prefixes
- vibes-only evals
- snapshot tests as your safety net
- one giant mega-prompt instead of small loops

## The five rules

1. **Smart, fresh colleague** — brief like one.
2. **Spec before prompt** — 3 lines saves an hour.
3. **Verify, don't trust** — read the diff.
4. **Tight loops** — small steps; cheap rollback.
5. **Evals over vibes** — measure, don't feel.
