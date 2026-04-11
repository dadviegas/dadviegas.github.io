# Diagrams with Mermaid

Mermaid diagrams are rendered automatically from fenced code blocks with the `mermaid` language tag.

## Flowchart

```mermaid
flowchart TD
    A[Shell :3000] -->|lazy import| B[Markdown Remote :3001]
    A -->|future| C[Dashboard Remote :3002]
    B --> D["@atlantis/shared"]
    C --> D
```

## Sequence Diagram

```mermaid
sequenceDiagram
    participant Browser
    participant Shell
    participant Markdown

    Browser->>Shell: Navigate to /#/docs/intro
    Shell->>Markdown: Dynamic import markdown/App
    Markdown-->>Shell: Returns React component
    Shell->>Browser: Render layout + markdown app
    Browser->>Markdown: fetch /content/getting-started/intro.md
    Markdown-->>Browser: Markdown text
```

## Entity Relationship

```mermaid
erDiagram
    NavigationConfig ||--o{ NavEntry : contains
    NavEntry ||--o{ NavEntry : children
    NavEntry {
        string id
        string name
        string file
    }
```

## Tips

- Mermaid is **lazy-loaded** — the library is only fetched when a diagram is first rendered.
- The diagram theme follows the dark color palette from `@atlantis/shared`.
- Invalid diagrams show an error message instead of crashing the page.
