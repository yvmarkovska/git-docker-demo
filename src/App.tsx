import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './App.module.css'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={styles.container}>
      {/* Animated background elements */}
      <div className={styles.bgOrbs}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>

      <div className={styles.gridOverlay} />

      <main className={`${styles.main} ${mounted ? styles.visible : ''}`}>
        {/* Icon row */}
        <div className={styles.icons}>
          <a
            className={styles.iconBadge}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <span className={styles.iconDivider}>&#10043;</span>
          <a
            className={styles.iconBadge}
            href="https://www.docker.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.186.186 0 0 0-.187.186v1.887c0 .102.084.185.187.185m-2.954-5.43h2.118a.186.186 0 0 0 .187-.185V3.574a.186.186 0 0 0-.187-.185h-2.118a.185.185 0 0 0-.186.185v1.888c0 .102.083.185.186.185m0 2.716h2.118a.187.187 0 0 0 .187-.186V6.29a.186.186 0 0 0-.187-.185h-2.118a.185.185 0 0 0-.186.185v1.887c0 .102.083.186.186.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.887c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.687 11.687 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.228 12.228 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
            </svg>
          </a>
        </div>

        {/* Greeting */}
        <p className={styles.greeting}>
          <span className={styles.greetingText}>{getGreeting()}</span> — welcome
          in.
        </p>

        {/* Hero text */}
        <h1 className={styles.title}>
          A space for learning
          <span className={styles.gradient}> GitHub Workflows </span>&
          <span className={styles.gradient}> Docker </span>
        </h1>

        <p className={styles.subtitle}>
          A hands-on playground for learning CI/CD pipelines, container
          orchestration, and modern deployment workflows.
        </p>

        {/* Botanical divider */}
        <div className={styles.divider}>
          <span className={styles.dividerLeaf}>&#9753;</span>
        </div>

        {/* Feature cards */}
        <div className={styles.cards}>
          {[
            {
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              ),
              title: 'GitHub Actions',
              desc: 'Automate builds, tests, and deployments with powerful CI/CD workflows.',
              accent: 'terracotta' as const,
            },
            {
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <path d="M12 12h.01" />
                  <path d="M17 12h.01" />
                  <path d="M7 12h.01" />
                </svg>
              ),
              title: 'Containerization',
              desc: 'Package applications into portable Docker containers for any environment.',
              accent: 'sage' as const,
            },
            {
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              ),
              title: 'Deploy Anywhere',
              desc: 'Ship with confidence using reproducible builds and automated pipelines.',
              accent: 'sand' as const,
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className={`${styles.card} ${mounted ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${0.3 + i * 0.15}s` }}
            >
              <div
                className={`${styles.cardIcon} ${styles[`cardIcon_${card.accent}`]}`}
              >
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Status pill */}
        <div className={styles.statusBar}>
          <span className={styles.statusDot} />
          <span>React + Vite + TypeScript</span>
          <span className={styles.statusSep} />
          <span>Explore the repo for more</span>
        </div>

        {/* CTA button */}
        <Link to="/summary" className={styles.ctaButton}>
          Explore the Guide
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
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>

        {/* Repo link */}
        <a
          className={styles.repoLink}
          href="https://github.com/yvmarkovska/git-docker-demo"
          target="_blank"
          rel="noopener noreferrer"
        >
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
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          <span className={styles.repoLinkText}>
            yvmarkovska/git-docker-demo
          </span>
        </a>
      </main>
    </div>
  )
}

export default App
