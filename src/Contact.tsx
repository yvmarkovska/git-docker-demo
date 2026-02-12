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

          {/* Location card */}
          <div className={styles.locationCard}>
            <div className={styles.locationHeader}>
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3>Our Office</h3>
                <p className={styles.locationAddress}>
                  42 Vitosha Blvd, Floor 3<br />
                  Sofia 1000, Bulgaria
                </p>
              </div>
            </div>

            {/* Decorative map placeholder */}
            <div className={styles.mapPlaceholder}>
              <svg
                viewBox="0 0 480 200"
                className={styles.mapSvg}
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Background */}
                <rect width="480" height="200" fill="#ece5d8" />

                {/* Grid lines - streets */}
                <line
                  x1="0"
                  y1="60"
                  x2="480"
                  y2="60"
                  stroke="#d4c4a8"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="100"
                  x2="480"
                  y2="100"
                  stroke="#d4c4a8"
                  strokeWidth="1.5"
                />
                <line
                  x1="0"
                  y1="140"
                  x2="480"
                  y2="140"
                  stroke="#d4c4a8"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="0"
                  x2="80"
                  y2="200"
                  stroke="#d4c4a8"
                  strokeWidth="1"
                />
                <line
                  x1="160"
                  y1="0"
                  x2="160"
                  y2="200"
                  stroke="#d4c4a8"
                  strokeWidth="1"
                />
                <line
                  x1="240"
                  y1="0"
                  x2="240"
                  y2="200"
                  stroke="#d4c4a8"
                  strokeWidth="1.5"
                />
                <line
                  x1="320"
                  y1="0"
                  x2="320"
                  y2="200"
                  stroke="#d4c4a8"
                  strokeWidth="1"
                />
                <line
                  x1="400"
                  y1="0"
                  x2="400"
                  y2="200"
                  stroke="#d4c4a8"
                  strokeWidth="1"
                />

                {/* Park / green blocks */}
                <rect
                  x="90"
                  y="25"
                  width="55"
                  height="25"
                  rx="4"
                  fill="#c5d4b8"
                  opacity="0.5"
                />
                <rect
                  x="330"
                  y="110"
                  width="60"
                  height="20"
                  rx="4"
                  fill="#c5d4b8"
                  opacity="0.5"
                />
                <rect
                  x="170"
                  y="145"
                  width="40"
                  height="18"
                  rx="3"
                  fill="#c5d4b8"
                  opacity="0.4"
                />

                {/* Building blocks */}
                <rect
                  x="95"
                  y="70"
                  width="50"
                  height="20"
                  rx="3"
                  fill="#ddd2c0"
                />
                <rect
                  x="170"
                  y="65"
                  width="55"
                  height="25"
                  rx="3"
                  fill="#ddd2c0"
                />
                <rect
                  x="250"
                  y="30"
                  width="45"
                  height="20"
                  rx="3"
                  fill="#ddd2c0"
                />
                <rect
                  x="330"
                  y="65"
                  width="55"
                  height="25"
                  rx="3"
                  fill="#ddd2c0"
                />
                <rect
                  x="95"
                  y="110"
                  width="50"
                  height="22"
                  rx="3"
                  fill="#ddd2c0"
                />
                <rect
                  x="250"
                  y="110"
                  width="55"
                  height="22"
                  rx="3"
                  fill="#ddd2c0"
                />
                <rect
                  x="410"
                  y="40"
                  width="40"
                  height="18"
                  rx="3"
                  fill="#ddd2c0"
                />
                <rect
                  x="25"
                  y="110"
                  width="40"
                  height="18"
                  rx="3"
                  fill="#ddd2c0"
                />

                {/* Main road highlight */}
                <rect
                  x="0"
                  y="96"
                  width="480"
                  height="8"
                  fill="#c9b68e"
                  opacity="0.4"
                  rx="2"
                />
                <rect
                  x="236"
                  y="0"
                  width="8"
                  height="200"
                  fill="#c9b68e"
                  opacity="0.4"
                  rx="2"
                />

                {/* Pin marker */}
                <g transform="translate(240, 75)">
                  <ellipse
                    cx="0"
                    cy="18"
                    rx="8"
                    ry="3"
                    fill="rgba(198,124,91,0.2)"
                  />
                  <path
                    d="M0 -18 C-10 -18 -16 -10 -16 -2 C-16 10 0 20 0 20 C0 20 16 10 16 -2 C16 -10 10 -18 0 -18Z"
                    fill="#c67c5b"
                  />
                  <circle cx="0" cy="-4" r="5" fill="white" />
                </g>

                {/* Street labels */}
                <text
                  x="345"
                  y="95"
                  fill="#b09a7a"
                  fontSize="7"
                  fontFamily="DM Sans, sans-serif"
                  fontWeight="500"
                >
                  Vitosha Blvd
                </text>
              </svg>

              <div className={styles.mapLabel}>
                <span className={styles.mapDot} />
                42 Vitosha Blvd, Sofia
              </div>
            </div>
          </div>
        </section>

        {/* Social links */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Find Me Online</h2>
          <div className={styles.socialGrid}>
            <a
              href="https://github.com/yvmarkovska"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >
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
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yoana-markovska"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >
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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/yoana_dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >
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
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span>Twitter</span>
            </a>
            <a
              href="https://dev.to/yoana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >
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
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                <polyline points="10 2 10 10 13 7 16 10 16 2" />
              </svg>
              <span>Blog</span>
            </a>
          </div>
        </section>

        {/* Office hours */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Office Hours</h2>
          <div className={styles.hoursCard}>
            <div className={styles.hoursRow}>
              <span className={styles.hoursDay}>Monday - Friday</span>
              <span className={styles.hoursTime}>9:00 AM - 6:00 PM</span>
            </div>
            <div className={styles.hoursSep} />
            <div className={styles.hoursRow}>
              <span className={styles.hoursDay}>Saturday</span>
              <span className={styles.hoursTime}>10:00 AM - 2:00 PM</span>
            </div>
            <div className={styles.hoursSep} />
            <div className={`${styles.hoursRow} ${styles.hoursRowClosed}`}>
              <span className={styles.hoursDay}>Sunday</span>
              <span className={styles.hoursClosed}>Closed</span>
            </div>
            <div className={styles.hoursNote}>
              <span className={styles.hoursNoteDot} />
              All times in EET (Sofia, Bulgaria)
            </div>
          </div>
        </section>

        {/* Contact form placeholder */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Send a Message</h2>
          <div className={styles.formCard}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Name</label>
                <div className={styles.formInput}>
                  <span className={styles.formPlaceholder}>Your name</span>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email</label>
                <div className={styles.formInput}>
                  <span className={styles.formPlaceholder}>your@email.com</span>
                </div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Subject</label>
              <div className={styles.formInput}>
                <span className={styles.formPlaceholder}>
                  What is this about?
                </span>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Message</label>
              <div className={styles.formTextarea}>
                <span className={styles.formPlaceholder}>
                  Write your message here...
                </span>
              </div>
            </div>
            <div className={styles.formButton}>
              Send Message
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
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
