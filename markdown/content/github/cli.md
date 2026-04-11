# GitHub CLI (`gh`)

The GitHub CLI brings GitHub workflows into your terminal — PRs, issues, releases, and more without leaving the shell.

## Installation

```bash
# macOS
brew install gh

# Windows
winget install --id GitHub.cli

# Linux (Debian/Ubuntu)
sudo apt install gh
```

Authenticate once:

```bash
gh auth login
```

---

## Authentication

```bash
gh auth login          # interactive login (browser or token)
gh auth status         # check current auth state
gh auth logout         # sign out
gh auth token          # print current token
```

---

## Repositories

```bash
gh repo clone owner/repo          # clone a repo
gh repo create my-app             # create new repo (interactive)
gh repo create my-app --public    # create public repo
gh repo view                      # view current repo in terminal
gh repo view --web                # open in browser
gh repo fork owner/repo           # fork a repo
gh repo list                      # list your repos
```

---

## Pull Requests

```bash
# Create
gh pr create                            # interactive
gh pr create --title "feat: ..." --body "..." --base main

# View
gh pr list                              # list open PRs
gh pr view 123                          # view PR #123
gh pr view --web                        # open current branch PR in browser
gh pr diff                              # show diff for current PR

# Review
gh pr review 123 --approve
gh pr review 123 --request-changes --body "Please fix..."
gh pr review 123 --comment --body "LGTM except..."

# Manage
gh pr merge 123 --squash --delete-branch
gh pr checkout 123                      # checkout a PR branch locally
gh pr close 123
gh pr reopen 123
gh pr ready 123                         # mark draft PR as ready

# Watch CI
gh pr checks 123                        # list check runs
gh pr checks --watch                    # live-watch checks for current PR
```

---

## Issues

```bash
gh issue list                           # list open issues
gh issue list --assignee @me
gh issue list --label "bug"
gh issue create                         # interactive
gh issue create --title "Bug: ..." --body "..." --label bug
gh issue view 42
gh issue close 42
gh issue comment 42 --body "Fixed in #123"
```

---

## Workflows & CI

```bash
gh run list                             # list recent workflow runs
gh run view 123456                      # view a run
gh run watch                            # live-watch the latest run
gh run download 123456                  # download artifacts
gh workflow list                        # list workflows
gh workflow run deploy.yml              # trigger a workflow manually
gh workflow run deploy.yml --ref main --field env=prod
```

---

## Releases

```bash
gh release list
gh release create v1.2.0 --title "v1.2.0" --notes "Changelog..."
gh release create v1.2.0 dist/*.tar.gz  # attach assets
gh release view v1.2.0
gh release delete v1.2.0
```

---

## Gists

```bash
gh gist create file.ts                  # create gist from file
gh gist create file.ts --public
gh gist list
gh gist view <id> --web
```

---

## Useful Aliases

```bash
# Add your own aliases
gh alias set prc 'pr create --fill'
gh alias set prw 'pr checks --watch'

gh alias list
```

---

## Tips

| Tip | Command |
|-----|---------|
| Open any resource in browser | add `--web` to most commands |
| Fill PR from commits | `gh pr create --fill` |
| Watch CI without leaving terminal | `gh pr checks --watch` |
| Clone then `cd` in one line | `gh repo clone owner/repo && cd repo` |
| Quick issue from clipboard | `gh issue create --body "$(pbpaste)"` |
