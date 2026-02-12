import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Team.module.css'

function Team() {
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

        <h1 className={styles.pageTitle}>
          The <span className={styles.gradient}>Team</span>
        </h1>

        <div className={styles.divider}>
          <span className={styles.dividerLeaf}>&#9753;</span>
        </div>

        {/* Avatar card */}
        <div className={styles.memberCard}>
          {/* Custom SVG avatar */}
          <div className={styles.avatarWrap}>
            <svg
              viewBox="0 0 200 200"
              width="160"
              height="160"
              className={styles.avatar}
            >
              {/* Background circle */}
              <circle
                cx="100"
                cy="100"
                r="98"
                fill="#f5efe6"
                stroke="#d4b896"
                strokeWidth="2"
              />

              {/* Neck */}
              <rect
                x="85"
                y="130"
                width="30"
                height="20"
                rx="4"
                fill="#f0cba8"
              />

              {/* Shoulders / top of shirt */}
              <path
                d="M60 160 Q65 140 85 145 L115 145 Q135 140 140 160 L140 200 L60 200 Z"
                fill="#c67c5b"
              />
              {/* Shirt neckline */}
              <path
                d="M88 145 Q100 155 112 145"
                fill="none"
                stroke="#a0522d"
                strokeWidth="1.5"
              />

              {/* Face */}
              <ellipse cx="100" cy="105" rx="38" ry="42" fill="#f5d5b8" />

              {/* Cheeks - rosy */}
              <ellipse
                cx="72"
                cy="112"
                rx="8"
                ry="5"
                fill="#f0b8a8"
                opacity="0.5"
              />
              <ellipse
                cx="128"
                cy="112"
                rx="8"
                ry="5"
                fill="#f0b8a8"
                opacity="0.5"
              />

              {/* Eyes */}
              <ellipse cx="84" cy="102" rx="4.5" ry="5" fill="#5a4232" />
              <ellipse cx="116" cy="102" rx="4.5" ry="5" fill="#5a4232" />
              {/* Eye shine */}
              <circle cx="86" cy="100" r="1.5" fill="white" />
              <circle cx="118" cy="100" r="1.5" fill="white" />

              {/* Eyebrows */}
              <path
                d="M75 93 Q84 88 93 92"
                fill="none"
                stroke="#9a7b5b"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M107 92 Q116 88 125 93"
                fill="none"
                stroke="#9a7b5b"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Smile */}
              <path
                d="M88 118 Q100 128 112 118"
                fill="none"
                stroke="#a0522d"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Nose */}
              <path
                d="M98 108 Q100 114 102 108"
                fill="none"
                stroke="#d4a888"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Computer-shaped glasses */}
              {/* Left lens - monitor shape */}
              <rect
                x="68"
                y="93"
                width="24"
                height="18"
                rx="3"
                fill="none"
                stroke="#5a4232"
                strokeWidth="2.5"
              />
              {/* Right lens - monitor shape */}
              <rect
                x="108"
                y="93"
                width="24"
                height="18"
                rx="3"
                fill="none"
                stroke="#5a4232"
                strokeWidth="2.5"
              />
              {/* Bridge */}
              <path
                d="M92 101 Q100 97 108 101"
                fill="none"
                stroke="#5a4232"
                strokeWidth="2.5"
              />
              {/* Temples (arms) */}
              <path
                d="M68 97 L58 94"
                stroke="#5a4232"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M132 97 L142 94"
                stroke="#5a4232"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Little screen glare on lenses */}
              <rect
                x="72"
                y="96"
                width="6"
                height="3"
                rx="1"
                fill="white"
                opacity="0.3"
              />
              <rect
                x="112"
                y="96"
                width="6"
                height="3"
                rx="1"
                fill="white"
                opacity="0.3"
              />
              {/* Tiny power button on left lens */}
              <circle
                cx="88"
                cy="107"
                r="1.5"
                fill="none"
                stroke="#8a9a7b"
                strokeWidth="0.8"
              />

              {/* Dark blonde curly hair */}
              {/* Main hair volume */}
              <ellipse cx="100" cy="72" rx="50" ry="35" fill="#c4a46c" />
              {/* Curls - top */}
              <circle cx="65" cy="68" r="14" fill="#c4a46c" />
              <circle cx="80" cy="55" r="15" fill="#c4a46c" />
              <circle cx="100" cy="50" r="16" fill="#c4a46c" />
              <circle cx="120" cy="55" r="15" fill="#c4a46c" />
              <circle cx="135" cy="68" r="14" fill="#c4a46c" />
              {/* Curls - sides */}
              <circle cx="55" cy="82" r="12" fill="#c4a46c" />
              <circle cx="145" cy="82" r="12" fill="#c4a46c" />
              <circle cx="52" cy="98" r="11" fill="#c4a46c" />
              <circle cx="148" cy="98" r="11" fill="#c4a46c" />
              <circle cx="54" cy="113" r="10" fill="#c4a46c" />
              <circle cx="146" cy="113" r="10" fill="#c4a46c" />
              {/* Hair highlights */}
              <circle cx="75" cy="55" r="8" fill="#d4b87c" opacity="0.6" />
              <circle cx="110" cy="50" r="9" fill="#d4b87c" opacity="0.5" />
              <circle cx="130" cy="60" r="7" fill="#d4b87c" opacity="0.5" />
              {/* Extra curl strands near face */}
              <path
                d="M58 75 Q52 85 56 95"
                fill="none"
                stroke="#b89a5c"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M142 75 Q148 85 144 95"
                fill="none"
                stroke="#b89a5c"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Fringe curls */}
              <circle cx="72" cy="72" r="8" fill="#d4b87c" opacity="0.4" />
              <circle cx="128" cy="72" r="8" fill="#d4b87c" opacity="0.4" />
            </svg>
          </div>

          <h2 className={styles.memberName}>Yoana</h2>
          <p className={styles.memberRole}>Software Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Team
