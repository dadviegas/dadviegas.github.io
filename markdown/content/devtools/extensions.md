# Useful Extensions

Curated VS Code extensions for web development with React, TypeScript, and modern tooling.

---

## Essential

| Extension | ID | Purpose |
|-----------|-----|---------|
| **ESLint** | `dbaeumer.vscode-eslint` | Inline linting with auto-fix on save |
| **Prettier** | `esbenp.prettier-vscode` | Consistent code formatting |
| **Error Lens** | `usernamehw.errorlens` | Inline errors/warnings — no hovering needed |
| **GitLens** | `eamodio.gitlens` | Git blame, history, and branch visualization |
| **GitHub Copilot** | `github.copilot` | AI completions |
| **GitHub Copilot Chat** | `github.copilot-chat` | AI chat in the sidebar |

---

## TypeScript & React

| Extension | ID | Purpose |
|-----------|-----|---------|
| **TypeScript Importer** | `pmneo.tsimporter` | Auto-import on completion |
| **Pretty TypeScript Errors** | `yoavbls.pretty-ts-errors` | Human-readable TS error messages |
| **ES7+ React Snippets** | `dsznajder.es7-react-js-snippets` | `rfc`, `useS`, `useE` etc. |
| **Auto Rename Tag** | `formulahendry.auto-rename-tag` | Renames paired HTML/JSX tags |

---

## Styling

| Extension | ID | Purpose |
|-----------|-----|---------|
| **Tailwind CSS IntelliSense** | `bradlc.vscode-tailwindcss` | Autocomplete, docs, and linting for Tailwind |
| **CSS Variable Autocomplete** | `vunguyentuan.vscode-css-variables` | Autocomplete for CSS custom properties |
| **Color Highlight** | `naumovs.color-highlight` | Visualizes hex/rgb colors inline |

---

## Git & GitHub

| Extension | ID | Purpose |
|-----------|-----|---------|
| **GitHub Pull Requests** | `github.vscode-pull-request-github` | Review and manage PRs inside VS Code |
| **Git Graph** | `mhutchie.git-graph` | Visual branch/commit graph |
| **Conventional Commits** | `vivaxy.vscode-conventional-commits` | Guided conventional commit messages |

---

## Productivity

| Extension | ID | Purpose |
|-----------|-----|---------|
| **Path IntelliSense** | `christian-kohler.path-intellisense` | Autocomplete for file paths |
| **Turbo Console Log** | `chakravarti.vscode-turbo-console-log` | `Ctrl+Alt+L` adds a labeled `console.log` |
| **TODO Highlight** | `wayou.vscode-todo-highlight` | Highlights `TODO:` and `FIXME:` |
| **Bookmarks** | `alefragnani.bookmarks` | Mark and jump to lines across files |
| **Better Comments** | `aaron-bond.better-comments` | Color-coded comment types (`!`, `?`, `TODO`) |
| **Project Manager** | `alefragnani.project-manager` | Switch between repos instantly |

---

## Testing

| Extension | ID | Purpose |
|-----------|-----|---------|
| **Vitest** | `vitest.explorer` | Run/debug Vitest tests from the sidebar |
| **Jest** | `orta.vscode-jest` | Run/debug Jest tests inline |
| **Playwright Test** | `ms-playwright.playwright` | Run and record Playwright e2e tests |

---

## Utilities

| Extension | ID | Purpose |
|-----------|-----|---------|
| **DotENV** | `mikestead.dotenv` | Syntax highlighting for `.env` files |
| **YAML** | `redhat.vscode-yaml` | YAML validation with schema support (great for GitHub Actions) |
| **Markdown All in One** | `yzhang.markdown-all-in-one` | Preview, TOC, shortcuts for Markdown |
| **REST Client** | `humao.rest-client` | Send HTTP requests from `.http` files |
| **Thunder Client** | `rangav.vscode-thunder-client` | Lightweight Postman alternative in VS Code |

---

## Browser DevTools

These aren't VS Code extensions, but are essential for web debugging:

| Tool | Browser | Purpose |
|------|---------|---------|
| **React Developer Tools** | Chrome/Firefox | Inspect component tree, props, and state |
| **Redux DevTools** | Chrome/Firefox | Time-travel debugging for Redux/Zustand |
| **Lighthouse** | Chrome (built-in) | Performance, accessibility, SEO audit |
| **axe DevTools** | Chrome/Firefox | Accessibility testing |
| **Wappalyzer** | Chrome/Firefox | Identify tech stack of any site |
| **JSON Formatter** | Chrome | Pretty-print JSON responses |
| **ModHeader** | Chrome/Firefox | Modify request/response headers |

---

## Recommended VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "typescript.preferences.importModuleSpecifier": "non-relative",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",
  "errorLens.enabledDiagnosticLevels": ["error", "warning"]
}
```
