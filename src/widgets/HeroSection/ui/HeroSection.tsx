import { landingContent } from "@/shared/config/landingContentClean";
import styles from "./HeroSection.module.scss";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.background}
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/assets/Main.mp4" type="video/mp4" />
      </video>
      <div className={styles.videoSoftEdge} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.headline}>
          {landingContent.hero.headlineLines.map((line, index) => (
            <div key={line} className={styles.headlineLine}>
              <span className={styles.we}>We</span>
              <span className={index === 2 ? styles.accentWord : styles.word}>
                {line.replace("We ", "")}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.underline} aria-hidden="true" />
        <p className={styles.tagline}>{landingContent.hero.tagline}</p>
        <a href="#contact" className={styles.cta}>
          {landingContent.hero.cta}
        </a>
      </div>
    </section>
  );
}
