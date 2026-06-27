"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useSubtleParallax } from "@/shared/animations/parallax";
import { fadeLeft, fadeRight, fadeUp, softReveal, viewportOnce } from "@/shared/animations/reveal";
import { staggerContainer } from "@/shared/animations/stagger";
import { landingContent } from "@/shared/config/landingContentClean";
import styles from "./LegaciesSection.module.scss";

export function LegaciesSection() {
  const sectionReference = useRef<HTMLElement>(null);
  const videoY = useSubtleParallax(sectionReference, 14);

  return (
    <section className={styles.section} ref={sectionReference} id="legacies">
      <motion.div
        className={styles.inner}
        variants={staggerContainer(0, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className={styles.quoteRow}>
          <motion.div className={styles.accentLine} aria-hidden="true" variants={fadeLeft} />
          <motion.div className={styles.quoteBlock} variants={staggerContainer(0.03, 0.08)}>
            <motion.p className={styles.quoteSubtitle} variants={fadeUp}>
              {landingContent.legacies.subtitle}
            </motion.p>
            <motion.h2 className={styles.quoteTitle} variants={fadeUp}>
              {landingContent.legacies.title}
            </motion.h2>
            {landingContent.legacies.lines.map((line) => (
              <motion.p key={line} className={styles.quoteLine} variants={fadeUp}>
                {line}
              </motion.p>
            ))}
          </motion.div>
          <motion.div
            className={`${styles.accentLine} ${styles.accentLineRight}`}
            aria-hidden="true"
            variants={fadeRight}
          />
        </div>
        <motion.div className={styles.showcase} variants={softReveal}>
          <motion.video
            className={styles.legacyVideo}
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ y: videoY }}
          >
            <source src="/assets/High bitrate_Place at the top.mp4" type="video/mp4" />
          </motion.video>
          <div className={styles.videoOverlay} aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
