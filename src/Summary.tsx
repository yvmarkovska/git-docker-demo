import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Summary.module.css'

function Summary() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.container}>
      {/* Background orbs */}
      <div className={styles.bgOrbs}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>

      <div className={styles.noiseOverlay} />

      <div className={`${styles.content} ${mounted ? styles.visible : ''}`}>
        {/* Back link */}
        <Link to="/" className={styles.backLink}>
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Hero */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Git Workflow & <span className={styles.gradient}>Docker Demo</span>
          </h1>
          <p className={styles.heroDesc}>
            A hands-on guide to Git best practices, Docker fundamentals, and
            modern development workflows.
          </p>
        </section>

        {/* Divider */}
        <div className={styles.divider}>
          <span className={styles.dividerLeaf}>&#9753;</span>
        </div>

        {/* Git Workflow Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Git Workflow & Best Practices</h2>
          <div className={styles.cardGrid}>
            <div className={`${styles.card} ${styles.cardTerracotta}`}>
              <h3>Branch Naming</h3>
              <p className={styles.cardDesc}>
                Follow the convention:{' '}
                <code className={styles.code}>
                  personName/jiraIssue/branch-description
                </code>
              </p>
              <p className={styles.cardExample}>
                Example:{' '}
                <code className={styles.code}>john/PROJ-123/add-user-auth</code>
              </p>
            </div>

            <div className={`${styles.card} ${styles.cardSage}`}>
              <h3>Commit Format</h3>
              <p className={styles.cardDesc}>
                Use agreed-upon tags:{' '}
                <code className={styles.code}>[tag] description</code>
              </p>
              <div className={styles.tagList}>
                {['feat', 'fix', 'docs', 'refactor', 'test', 'chore'].map(
                  (tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className={`${styles.card} ${styles.cardSand}`}>
              <h3>YAGNI Principle</h3>
              <p className={styles.cardDesc}>
                Don't overcomplicate things with too many workflows,
                conventions, and templates. Keep it simple.
              </p>
            </div>
          </div>
        </section>

        {/* Repo Features Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What This Repo Contains</h2>
          <div className={styles.featureList}>
            {[
              {
                label: 'PR Template',
                desc: 'Auto-loaded with Jira link, summary, and testing sections',
              },
              {
                label: 'Squash & Merge',
                desc: 'Clean history with auto-delete branches after merge',
              },
              {
                label: 'Pre-commit Hooks',
                desc: 'Automated quality checks before every commit',
              },
              {
                label: 'GitHub Actions',
                desc: 'CI/CD pipeline for automated checks on every PR',
              },
            ].map((item) => (
              <div key={item.label} className={styles.featureItem}>
                <span className={styles.featureCheck}>&#10003;</span>
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pre-commit Hooks Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Pre-commit Hooks</h2>
          <p className={styles.sectionSubtitle}>
            Powered by Husky + Lint-staged
          </p>
          <div className={styles.hookGrid}>
            {[
              {
                name: 'TypeScript',
                desc: 'Type-checking with tsc-files',
                accent: 'terracotta',
              },
              {
                name: 'ESLint',
                desc: 'Auto-fixes code quality issues',
                accent: 'sage',
              },
              {
                name: 'Prettier',
                desc: 'Auto-formats code',
                accent: 'sand',
              },
              {
                name: 'Blocking',
                desc: 'Commit fails if unfixable errors exist',
                accent: 'terracotta',
              },
            ].map((hook) => (
              <div
                key={hook.name}
                className={`${styles.hookCard} ${styles[`hookCard_${hook.accent}`]}`}
              >
                <h4>{hook.name}</h4>
                <p>{hook.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PR Checks Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>PR Checks (GitHub Actions)</h2>
          <p className={styles.sectionSubtitle}>
            Automated checks run on every pull request
          </p>
          <div className={styles.checkList}>
            {[
              'TypeScript type-check — Ensures no type errors',
              'ESLint — Code quality validation',
              'Prettier check — Formatting consistency',
              'Tests — Runs test suite (when added)',
            ].map((check) => (
              <div key={check} className={styles.checkItem}>
                <span className={styles.checkIcon}>&#9679;</span>
                <span>{check}</span>
              </div>
            ))}
          </div>
          <div className={styles.mergeNote}>
            PRs must pass all checks before squash & merge is allowed.
          </div>
        </section>

        {/* Docker Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Docker</h2>
          <div className={styles.comingSoon}>
            <span className={styles.comingSoonIcon}>&#128307;</span>
            <p>Coming soon...</p>
          </div>
        </section>

        {/* Best Practices Roadmap */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Best Practices & Ideas to Explore
          </h2>
          <div className={styles.roadmap}>
            {[
              'Security & Code Quality',
              'CI/CD & Automated Deployment',
              'Test Docker Build',
              'API Documentation (Swagger/OpenAPI)',
              'Branch Name Validation',
              'Notifications & Monitoring for Failed Builds',
            ].map((item, i) => (
              <div key={item} className={styles.roadmapItem}>
                <span className={styles.roadmapNumber}>{i + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider}>
          <span className={styles.dividerLeaf}>&#9753;</span>
        </div>

        {/* Resources */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Resources</h2>
          <div className={styles.resourcePills}>
            {[
              { label: 'Husky', url: 'https://typicode.github.io/husky/' },
              {
                label: 'Lint-staged',
                url: 'https://github.com/okonet/lint-staged',
              },
              {
                label: 'GitHub Actions',
                url: 'https://docs.github.com/en/actions',
              },
            ].map((r) => (
              <a
                key={r.label}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pill}
              >
                {r.label}
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            ))}
          </div>

          <h3 className={styles.refTitle}>Repos with Good Practices</h3>
          <div className={styles.resourcePills}>
            {[
              {
                label: 'facebook/react',
                url: 'https://github.com/facebook/react',
              },
              {
                label: 'Alliedium/awesome-github-actions',
                url: 'https://github.com/Alliedium/awesome-github-actions',
              },
              {
                label: 'VGVentures/news_toolkit',
                url: 'https://github.com/VGVentures/news_toolkit',
              },
            ].map((r) => (
              <a
                key={r.label}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pill}
              >
                {r.label}
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* Author */}
        <footer className={styles.footer}>
          <p>
            Built by{' '}
            <a
              href="https://github.com/yvmarkovska"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.authorLink}
            >
              @yvmarkovska
            </a>
          </p>
          <p className={styles.footerSub}>
            Built with care for better development workflows
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Summary
