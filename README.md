# 🚀 Git Workflow & Docker Demo

Demo repository for Git best practices, Docker fundamentals, and modern development workflows.

---

## ✨ Current Features

### 🌿 Git Workflow and Good practices recommendation

#### Suggestions:

- **Branch Naming**: `personName/jiraIssue/branch-description`
  - Example: `john/PROJ-123/add-user-auth`
- **Commit Format all Dev agree to**: `[tag] description` (feat, fix, docs, refactor, test, chore)
- **YAGNI principle**: Do Not overcomplicate things with too many workflows, conventions and templates

##### Repositories with good practices

- ** https://github.com/facebook/react **
- ** https://github.com/Alliedium/awesome-github-actions **
- ** https://github.com/VGVentures/news_toolkit **

##### Repo contains:

- **PR Template**: Auto-loaded with Jira link, summary, and testing sections
- **Squash & Merge**: Clean history with auto-delete branches after merge
- - **Pre-commit Hooks**
- - **Github Actions**

### 🪝 Pre-commit Hooks (Husky + Lint-staged)

Automated checks before every commit:

- **TypeScript**: Type-checking with `tsc-files`
- **ESLint**: Auto-fixes code quality issues
- **Prettier**: Auto-formats code
- **Blocking**: Commit fails if unfixable errors exist

### ✅ PR Checks (GitHub Actions)

Automated checks run on every pull request:

- **TypeScript type-check**: Ensures no type errors
- **ESLint**: Code quality validation
- **Prettier check**: Formatting consistency
- **Tests**: Runs test suite (when added)

**Merge Protection**: PRs must pass all checks before squash & merge is allowed.

### 🐳 Docker

> Coming soon...

## 🎯 Best Practices and Ideas for workflows to add

### 🔒 **Security & Code Quality**

### 🚀 **CI/CD & Deployment - automated deployment**

### 🚀 **Test Docker build**

### 🚀 **API Documentation (Swagger/OpenAPI)**

### 🚀 **Branch Name Validation**

### 🔔 Notifications & Monitoring for failed builds

## 📚 Resources

### Current Setup

- [Husky](https://typicode.github.io/husky/)
- [Lint-staged](https://github.com/okonet/lint-staged)
- [GitHub Actions](https://docs.github.com/en/actions)

**Author**: [@yvmarkovska](https://github.com/yvmarkovska)

⭐ Star if this helps you build better workflows!
Built with ❤️ for better development workflows

---
