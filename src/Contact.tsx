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

          <div className={styles.placeholder}>
            <span className={styles.placeholderIcon}>&#9993;</span>
            <p>Coming soon...</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
