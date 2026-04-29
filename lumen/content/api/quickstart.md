# Claude API — Quickstart

Five minutes from "I have a key" to "I'm calling the model from code."

## 1. Get a key

`https://console.anthropic.com/` → Settings → API Keys → Create. Save it as `ANTHROPIC_API_KEY` in your shell.

```bash
export ANTHROPIC_API_KEY=sk-ant-...
```

## 2. Install the SDK

```bash
# Python
pip install anthropic

# TypeScript / Node
npm install @anthropic-ai/sdk
```

## 3. Hello, Claude

**Python:**

```python
from anthropic import Anthropic

client = Anthropic()  # reads ANTHROPIC_API_KEY from env

response = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "In one sentence, what is an LLM?"}
    ],
)

print(response.content[0].text)
```

**TypeScript:**

```ts
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const response = await client.messages.create({
  model: "claude-opus-4-7",
  max_tokens: 1024,
  messages: [{ role: "user", content: "In one sentence, what is an LLM?" }],
});

console.log(response.content[0].type === "text" ? response.content[0].text : "");
```

## 4. Pick a model

| Model ID | Strengths | When |
|---|---|---|
| `claude-opus-4-7` | Strongest reasoning, largest context (1M) | Hard problems, agents, long context |
| `claude-sonnet-4-6` | Balanced | Default for production |
| `claude-haiku-4-5-20251001` | Fast, cheap | High-volume, classification, simple tasks |

Always default to the **latest** in each tier. The IDs above are current; swap for whatever Anthropic ships next.

## 5. Anatomy of a call

```ts
client.messages.create({
  model:       "claude-opus-4-7",     // which model
  max_tokens:  1024,                   // upper bound on output
  system:      "You are concise.",     // system prompt (string or array)
  temperature: 0.2,                    // 0=deterministic, 1=creative
  messages: [
    { role: "user",      content: "Hi" },
    { role: "assistant", content: "Hello!" },
    { role: "user",      content: "Tell me a fact." },
  ],
});
```

`messages` is a multi-turn conversation; alternate `user` and `assistant`. The API doesn't have memory — *you* track history between calls.

## 6. Streaming (so the user sees output as it generates)

```ts
const stream = await client.messages.stream({ ... });
for await (const event of stream) {
  if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
    process.stdout.write(event.delta.text);
  }
}
```

(See the `Streaming` page for details.)

## 7. Cost & quota basics

- You're billed for **input tokens + output tokens**, separately, per model. Output is more expensive than input.
- Prompt caching reduces input cost by up to 90% on cache hits — turn it on whenever your prompt has a stable prefix.
- The console shows usage in real time; rate limits are tier-based.

## 8. Errors you'll hit on day one

| Code | Meaning | Fix |
|---|---|---|
| 401 | Missing/wrong key | Re-export `ANTHROPIC_API_KEY` |
| 429 | Rate limited | Back off; retry with jitter |
| 400: `invalid_request_error` | Bad model id, malformed messages | Read the message string |
| `prompt_too_long` | You blew the context window | Trim or summarise history |

The SDK retries 5xx and 429 with exponential backoff out of the box. Don't reinvent.

## 9. Use prompt caching from day one

Even your first script benefits:

```ts
client.messages.create({
  model: "claude-opus-4-7",
  max_tokens: 1024,
  system: [
    { type: "text", text: BIG_SYSTEM_PROMPT, cache_control: { type: "ephemeral" } },
  ],
  messages: [...],
});
```

If you call this with the same `BIG_SYSTEM_PROMPT` again within 5 minutes, you pay ~10% for the cached portion. Always do this.

## Practice

Write a 30-line script that takes a CLI argument, calls Claude, prints the answer. Add streaming. Add prompt caching for the system prompt. That's now your starter for everything API-related.
