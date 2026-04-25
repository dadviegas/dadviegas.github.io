# Catálogo de Apps / Apps Catalog

All apps available in Atlantis, organised by suite. Use **Cmd+K** to jump to any app by name.

---

## Life Dashboard

Apps for daily life management and live data.

### Finance (`#/finance`)
Family finance tracker. Log expenses with a one-line quick-add bar (`12.50 continente` or `@ines 30 farmácia`), assign them to family members, track weekly budget, view spending by category, and get AI-powered insights. Supports undo for every write. Data syncs across devices when signed in.

### Daily Manager (`#/daily`)
Habit and mission tracker. Mark daily habits done, earn points, build streaks (a day counts when ≥3 missions complete). Create custom missions with icons, colors, and optional scheduled reminder times. Includes a week-view history grid. The home dashboard's Streak and Habits widgets read from the same data.

### Weather (`#/weather`)
Global weather map built on Open-Meteo and IPMA. Shows current conditions, a 7-day forecast, wind, humidity, UV index, and active weather warnings for Portugal. Integrates with the Earth globe (clicking a city on the map shows its weather panel).

### TechScope (`#/techscope`)
Live tech intelligence feed. 9 live sources: GitHub trending repos, Hacker News front page, Dev.to weekly top posts, AI/ML news, security bulletins, and more. Each source updates every 10–30 minutes and feeds the notification bell.

### CityPulse (`#/citypulse`)
Urban live data — news, events, and metrics from cities around the world. Categorised by topic (Politics, Economy, Science, Culture). Useful for tracking what's happening globally without social-media noise.

### StockPulse (`#/stockpulse`)
Real-time stock quotes powered by Finnhub. Search any ticker, track a watchlist, view intraday charts. Requires a free Finnhub API key (see [API Keys guide](../guides/api-keys.md)).

---

## Learning Hub

Apps for discovery, exploration, and education.

### Blog / Docs (`#/blog`)
You are here. A markdown blog and documentation reader. Content lives in `apps/markdown/public/content/` — add `.md` files and wire them into `navigation.json` to publish. Supports Mermaid diagrams, syntax highlighting, and tables.

### School (`#/school`)
Primary school learning games in Portuguese. Subjects: Matemática (arithmetic, times tables), Português (reading, orthography), Estudo do Meio (science/geography), Inglês (vocabulary). Games are designed for ages 6–12 and adapt to the selected language.

### Earth Globe (`#/earth`)
3D interactive globe built on Leaflet. Switch between layers: satellite, terrain, street maps, night lights, wind, temperature. Click any city to see its weather. Receives deep-links from the Weather widget and Seismic widget (e.g. clicking an earthquake row zooms to its coordinates).

### Cosmos (`#/cosmos`)
Space exploration companion. Browse planets, moons, missions, and astronomical events. Data from NASA and public space APIs. The Astro widget on the dashboard shows today's sunrise/sunset, moon phase, and night-sky visibility from your location.

---

## AI Lab

Experimental AI tools. Most require a free API key (Groq or Gemini).

### Ask (`#/ask`)
Conversational AI powered by Groq (Llama 3.3 70B). Supports multi-turn conversations, Markdown rendering, Mermaid diagrams in answers, and code blocks. Sessions are saved locally and appear in the "Ask Sessions" dashboard widget. Requires a free Groq key.

### Prompt Lab (`#/promptlab`)
Side-by-side prompt testing across multiple AI providers (Groq, Gemini, Hugging Face). Compare model outputs, tweak system prompts, and see latency differences. Requires at least one provider key. Requires sign-in.

### Image Gen (`#/imagegen`)
AI image generation using Google's Gemini API. Optionally uses Groq to enhance your prompt before sending to Gemini. Requires sign-in and a Gemini key (Groq key optional but recommended).

---

## Game Room

15+ games, all playable in-browser. No downloads, no accounts needed.

### Games (`#/games`)
The games hub. Includes:
- **Jogo do Galo** (Tic-Tac-Toe) — 2-player or vs AI
- **Jogo da Memória** (Memory / Pairs)
- **Quiz da Família** (Family Quiz)
- **Pixel Board** — collaborative pixel art
- **Stop!** — word game
- **Caçador de Sons** (Sound Hunter) — identify sounds
- **Encontra o Par** (Spot It) — visual matching
- **Tap It** — reaction game
- **BombBrawl** — multiplayer bomb game
- **Jump Party** — side-scrolling platformer
- **Animal Arena / Sumo Zoo** — arena brawler
- **Draw & Guess** — pictionary-style
- **Mini Party, Hide & Seek, Button Mayhem** — party games
- **Ler a Brincar / Le Bem** — early reading game (PT)
- **Leitor** — learn to read

All games support touch controls on iPad and mobile.

---

## Entertainment

### Movies & Series (`#/movies`)
Trending movies and TV shows powered by TMDB. Browse by category (Action, Comedy, Drama…), search, view trailers, save to your favorites or "seen" list. Content adapts to your age mode (kid/teen/adult). Requires a free TMDB API key and sign-in.

---

## Developer Toolkit

Tools for developers. All require sign-in.

### Playground (`#/playground`)
HTML, CSS, and JavaScript REPL in the browser. Write code in split panes and see the result in a live preview. Useful for quick experiments and sharing snippets.

### JSON Explorer (`#/jsonexplorer`)
Paste JSON and explore it as an interactive tree. Collapse/expand nodes, search by key or value, copy paths.

### Regex Lab (`#/regexlab`)
Write and test regular expressions with live highlighting. Flags panel, match details, capture group breakdown.

### Code Diff (`#/codediff`)
Side-by-side code diff viewer. Paste two versions and see additions, removals, and unchanged lines highlighted.

### API Explorer (`#/apiexplorer`)
HTTP client for testing REST APIs. Set headers, body, auth tokens, and see the formatted response. Saves request history.

### CSV Explorer (`#/csvexplorer`)
Upload or paste CSV data and explore it as a searchable, sortable table. Column stats, filtering, and export.

### Chart Builder (`#/chartbuilder`)
Build bar, line, and pie charts from data you provide. Export as PNG. No sign-in required.

### Pad (`#/mdpad`)
Markdown + Mermaid editor with save/load. Write notes, technical docs, or diagrams and save them to your account.

### JWT Inspector (`#/jwtinspector`)
Paste a JWT token and inspect its header, payload, and signature. No key required — decoding only.

### Color Lab (`#/colorlab`)
Color picker and converter. HEX ↔ RGB ↔ HSL ↔ OKLCH. Generate palettes, check contrast ratios (WCAG AA/AAA).

### Cron Builder (`#/cronbuilder`)
Visual cron expression builder. Select schedule parts visually and see the resulting cron string with a human-readable explanation and next-run times.

---

## Content

### Blog / Docs (`#/blog`)
Already listed above under Learning Hub. The blog/docs app also hosts this manual.
