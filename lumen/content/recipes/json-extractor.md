# Recipe — Reliable JSON extraction

The single most common LLM task in production: messy text → clean structured data. Get this 100% right.

## What you'll build

```bash
$ extract receipts/lunch.txt
{
  "merchant": "Tasca do Manel",
  "date": "2026-04-29",
  "total_eur": 18.50,
  "items": [
    { "name": "Bacalhau à Brás", "price_eur": 12.00 },
    { "name": "Vinho da Casa",   "price_eur":  4.50 },
    { "name": "Café",            "price_eur":  2.00 }
  ]
}
```

100% valid JSON, every time, even when the input is a typo'd Portuguese receipt.

## The trick — force tool-call

The most reliable JSON-output trick: **define a tool whose schema *is* your output, then force the model to call it.** No prose, no fences, no "here's the JSON you wanted" preamble — just structured args.

## Code

`scripts/extract.ts`:

```ts
import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "fs";
import { z } from "zod";

const client = new Anthropic();

// 1. Define the schema as your contract
const ReceiptSchema = z.object({
  merchant: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  total_eur: z.number().positive(),
  items: z.array(z.object({
    name: z.string(),
    price_eur: z.number().nonnegative(),
  })),
});

type Receipt = z.infer<typeof ReceiptSchema>;

// 2. Mirror the schema as a tool
const recordReceipt: Anthropic.Tool = {
  name: "record_receipt",
  description: "Record a parsed receipt. Always call this exactly once.",
  input_schema: {
    type: "object",
    properties: {
      merchant:  { type: "string", description: "Merchant name as on receipt" },
      date:      { type: "string", description: "ISO date YYYY-MM-DD" },
      total_eur: { type: "number", description: "Total in EUR" },
      items: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name:      { type: "string" },
            price_eur: { type: "number" },
          },
          required: ["name", "price_eur"],
        },
      },
    },
    required: ["merchant", "date", "total_eur", "items"],
  },
};

async function extract(text: string): Promise<Receipt> {
  const res = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1500,
    temperature: 0,                                // determinism on extraction
    system: "You parse receipts. Call record_receipt with what you find. " +
            "If a field is unknown, infer or use a sensible default. Currency is EUR.",
    tools: [recordReceipt],
    tool_choice: { type: "tool", name: "record_receipt" },  // ← force the call
    messages: [{ role: "user", content: text }],
  });

  const call = res.content.find(b => b.type === "tool_use");
  if (call?.type !== "tool_use") throw new Error("model did not call the tool");

  return ReceiptSchema.parse(call.input);          // validate + type
}

const text = readFileSync(process.argv[2], "utf-8");
extract(text).then(r => console.log(JSON.stringify(r, null, 2)));
```

## Why this beats "ask for JSON"

| Approach | Failure modes |
|---|---|
| "Output JSON" | `'json\n{...}'` fences, prose preamble, trailing commas, missing fields |
| `<output_format>` tag | Better, still occasional drift |
| **Forced tool call** | Schema-validated args. Trailing commas? Impossible. Wrong types? Impossible. |

The tool definition is your contract. The API enforces it.

## Patterns this generalises to

- **Ticket triage:** `record_classification(category, severity, customerImpact)`
- **Email parsing:** `record_email(sender, intent, urgency, action)`
- **Document tagging:** `record_tags(topics[], sentiment, language)`
- **Form extraction:** any structured form, any language

## Cost optimisation

Extraction is cache-friendly. Add cache markers to the system prompt + tool schema:

```ts
system: [{ type: "text", text: SYS, cache_control: { type: "ephemeral" } }],
tools: [{ ...recordReceipt, cache_control: { type: "ephemeral" } }],
```

For batch jobs (10k receipts), submit via the **Batch API** at 50% off.

## Practice

Pick a real messy-text → structured-data task you have. Define the Zod schema. Mirror as tool. Force the call. Run on 20 inputs. Log failures. Note: most failures will be edge cases the schema didn't anticipate, not model errors. That's the point — the schema teaches you about your data.
