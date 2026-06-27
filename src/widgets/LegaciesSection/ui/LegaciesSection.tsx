import { landingContent } from "@/shared/config/landingContentClean";
import styles from "./LegaciesSection.module.scss";

export function LegaciesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.quoteRow}>
          <div className={styles.accentLine} aria-hidden="true" />
          <div className={styles.quoteBlock}>
            <p className={styles.quoteSubtitle}>{landingContent.legacies.subtitle}</p>
            <h2 className={styles.quoteTitle}>{landingContent.legacies.title}</h2>
            {landingContent.legacies.lines.map((line) => (
              <p key={line} className={styles.quoteLine}>{line}</p>
            ))}
          </div>
          <div className={`${styles.accentLine} ${styles.accentLineRight}`} aria-hidden="true" />
        </div>
        <div className={styles.showcase}>
          <video
            className={styles.legacyVideo}
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/assets/High bitrate_Place at the top.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
