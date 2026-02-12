import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Contact.module.css'

function Contact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.bgOrbs}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>

      <div className={styles.noiseOverlay} />

      <div className={`${styles.content} ${mounted ? styles.visible : ''}`}>
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

        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            <span className={styles.gradient}>Contact</span>
          </h1>

          <div className={styles.divider}>
            <span className={styles.dividerLeaf}>&#9753;</span>
          </div>

          <p className={styles.subtitle}>
            Feel free to reach out through any of the channels below.
          </p>

          <div className={styles.contactCards}>
            <div className={styles.contactCard}>
              <div className={`${styles.contactIcon} ${styles.iconTerracotta}`}>
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4l-10 8L2 4" />
                </svg>
              </div>
              <h3>Email</h3>
              <a
                href="mailto:hello@yoana-dev.com"
                className={styles.contactLink}
              >
                hello@yoana-dev.com
              </a>
            </div>

            <div className={styles.contactCard}>
              <div className={`${styles.contactIcon} ${styles.iconSage}`}>
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Website</h3>
              <a
                href="https://www.yoana-dev.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                www.yoana-dev.com
              </a>
            </div>

            <div className={styles.contactCard}>
              <div className={`${styles.contactIcon} ${styles.iconSand}`}>
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3>Phone</h3>
              <a href="tel:+359888123456" className={styles.contactLink}>
                +359 888 123 456
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
