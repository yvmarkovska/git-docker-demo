This REPO servces as a DEMO for Git WF, best practices and also Docker learning Demo.

It contains: 

Good practices for
Branch naming convention: personsName/jiraissues/branchname
Squash and merge Prs with auto delete after set up in Seetings > Pr > auto delete

Precommit actions - 
Husky - When you run git commit, Husky automatically triggers the pre-commit hook, which runs lint-staged on only the files you've staged. Lint-staged then type-checks your          
  TypeScript files and auto-formats everything with Prettier — if anything fails, the commit is blocked. To add linting, we'd need to install ESLint and add it to the
  lint-staged config so it also catches code quality issues before each commit.    
