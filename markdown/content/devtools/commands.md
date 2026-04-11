# Useful Commands

Terminal commands for everyday web development — git, pnpm, Node, and more.

---

## Git

### Daily workflow

```bash
git status                          # what's changed
git diff                            # unstaged changes
git diff --staged                   # staged changes
git log --oneline -20               # recent commits
git log --oneline --graph --all     # visual branch graph

git stash                           # stash changes
git stash pop                       # restore stashed changes
git stash list                      # show stash stack
```

### Branches

```bash
git switch -c feature/my-thing      # create + switch branch
git switch main                     # switch branch
git branch -d feature/done          # delete local branch
git push origin --delete feature/done  # delete remote branch

git fetch --prune                   # sync and clean up deleted remote branches
git pull --rebase origin main       # rebase instead of merge
```

### Fixing mistakes

```bash
git commit --amend --no-edit        # add to last commit without changing message
git restore file.ts                 # discard unstaged changes to a file
git restore --staged file.ts        # unstage a file
git revert HEAD                     # create a new commit that undoes last commit
git reset HEAD~1 --soft             # undo last commit, keep changes staged
```

### Useful inspection

```bash
git blame -L 40,60 src/App.tsx      # who changed lines 40-60
git log --follow src/App.tsx        # full history of a file (through renames)
git show abc1234                    # show a specific commit
git bisect start                    # binary search for the commit that broke something
```

---

## pnpm

```bash
pnpm install                        # install all deps
pnpm install --frozen-lockfile      # CI: fail if lockfile would change
pnpm add lodash                     # add dependency
pnpm add -D typescript              # add devDependency
pnpm add -w concurrently            # add to workspace root
pnpm remove lodash                  # remove package

pnpm update                         # update all deps (respects ranges)
pnpm update lodash --latest         # update to latest, ignoring range

pnpm list                           # list installed packages
pnpm why lodash                     # why is this package installed?

# Workspace
pnpm --filter @atlantis/markdown dev     # run script in one workspace
pnpm --filter './apps/**' test           # run in all apps
pnpm -r build                            # run recursively in all packages
```

---

## Node.js

```bash
node --version                      # check Node version
nvm list                            # list installed Node versions
nvm use 20                          # switch Node version
nvm install 20 --lts                # install LTS version

node -e "console.log(process.version)"   # quick Node one-liner
node --inspect src/index.js         # start with debugger (attach Chrome DevTools)
```

---

## Webpack

```bash
# Build with stats
pnpm webpack --json > stats.json

# Analyze bundle (install first: pnpm add -D webpack-bundle-analyzer)
npx webpack-bundle-analyzer stats.json

# Check what's inside a bundle
npx source-map-explorer dist/main.*.js
```

---

## TypeScript

```bash
tsc --noEmit                        # type-check only (no output)
tsc --noEmit --watch                # watch mode
tsc --showConfig                    # show resolved tsconfig
tsc --traceResolution 2>&1 | grep lodash   # debug module resolution
```

---

## HTTP & APIs

```bash
# curl
curl -s https://api.example.com/data | jq '.'          # pretty-print JSON
curl -X POST https://api.example.com/users \
  -H 'Content-Type: application/json' \
  -d '{"name": "Alice"}'

# Check if a port is in use
lsof -i :3000
lsof -i :3001

# Kill process on a port
kill -9 $(lsof -t -i:3000)
```

---

## Process & System

```bash
# Find and kill
ps aux | grep webpack
kill -9 <pid>

# Watch file changes (macOS)
fswatch -0 src/ | xargs -0 -n1 echo

# Disk usage
du -sh node_modules                 # size of node_modules
du -sh dist/                        # size of build output

# Environment
env | grep NODE                     # print env vars matching NODE
printenv PATH                       # print PATH
```

---

## File & Search

```bash
# Search file contents (ripgrep — much faster than grep)
rg "useEffect" src/                 # find in directory
rg "TODO" --type ts                 # only TypeScript files
rg -l "console.log" apps/          # list files that contain matches

# Find files
fd "*.tsx" apps/                    # find by name pattern (faster than find)
fd --type d node_modules            # find directories

# Quick file view
bat src/App.tsx                     # cat with syntax highlighting (install: brew install bat)
```

---

## SSH & Remote

```bash
ssh-keygen -t ed25519 -C "you@example.com"   # generate SSH key
cat ~/.ssh/id_ed25519.pub                      # copy to GitHub/server

ssh -L 5432:localhost:5432 user@remote-host   # tunnel remote DB to local port
```

---

## One-liners Worth Remembering

```bash
# Count lines of TypeScript in the project
find . -name "*.ts" -o -name "*.tsx" | grep -v node_modules | xargs wc -l | tail -1

# Remove all node_modules recursively
find . -name node_modules -type d -prune -exec rm -rf {} +

# List the 10 largest files in a directory
find dist/ -type f | xargs du -sh | sort -rh | head -10

# Watch and re-run a command on file change
ls src/**/*.ts | entr -c pnpm test

# Copy file path to clipboard (macOS)
echo "$(pwd)/src/App.tsx" | pbcopy
```
