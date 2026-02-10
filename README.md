# 🚀 Git Workflow & Docker Demo

Demo repository for Git best practices, Docker fundamentals, and development workflows.

---

## ✨ Features

### 🌿 Git Workflow
- **Branch Naming**: `personName/jiraIssue/branch-description`
  - Example: `mariya/PROJ-123/add-user-auth`
- **PR Template**: Auto-loaded with Jira link, summary, and testing sections
- **Squash & Merge**: Clean history with auto-delete branches after merge
- **Commit Format**: `Use key words at start` (feat, fix, docs, refactor, test, chore)

### 🪝 Pre-commit Hooks (Husky)
Automated checks before every commit:
- **Lint-staged**: Runs only on staged files
- **TypeScript**: Type-checking
- **Prettier**: Auto-formatting
- **ESLint**: Code quality validation

**How it works**: `git commit` → Husky runs checks → ✅ pass or ❌ block

### 🐳 Docker
> Coming soon...

---

## 🚀 Getting Started
```bash
# Clone and install
git clone https://github.com/yvmarkovska/git-docker-demo.git
cd git-docker-demo
npm install
```

---

## 📝 Git Conventions

### Branch Naming
```
yourname/PROJ-123/feature-description
```

### Commit Messages
```bash
Start with key word
Fixing login bug
Updating README
Adding login page
```

### PR Process
1. Create branch with convention
2. Make changes and commit
3. Push and open PR (template auto-loads)
4. Get approval and squash merge
5. Branch auto-deletes ✨

---

## 🪝 Husky Setup

Pre-commit checks run automatically on `npm install`.

**Manual commands:**
```bash
npm run format    # Prettier
npm run lint      # ESLint
npm run type-check # TypeScript
```

**Bypass (use carefully):**
```bash
git commit --no-verify -m "emergency fix"
```

---

## 🤝 Contributing

1. Fork the repo
2. Create branch: `yournam/ISSUE-123/description`
3. Commit: `feat: add feature`
4. Open PR using template

---

## 📚 Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Husky](https://typicode.github.io/husky/)
- [Docker Docs](https://docs.docker.com/)

---

**Author**: [@yvmarkovska](https://github.com/yvmarkovska)

⭐ Star if helpful!
