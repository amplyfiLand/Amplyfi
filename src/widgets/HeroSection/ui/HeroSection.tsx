"use client";

import { motion } from "framer-motion";
import { buttonHover, buttonTap } from "@/shared/animations/hover";
import { fadeUp, softReveal } from "@/shared/animations/reveal";
import { heroStagger } from "@/shared/animations/stagger";
import { landingContent } from "@/shared/config/landingContentClean";
import styles from "./HeroSection.module.scss";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <motion.video
        className={styles.background}
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        initial={{ opacity: 0, scale: 1.015 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <source src="/assets/Main.mp4" type="video/mp4" />
      </motion.video>
      <div className={styles.videoSoftEdge} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />
      <motion.div
        className={styles.content}
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.headline} variants={heroStagger}>
          {landingContent.hero.headlineLines.map((line, index) => (
            <motion.div key={line} className={styles.headlineLine} variants={fadeUp}>
              <span className={styles.we}>We</span>
              <span className={index === 2 ? styles.accentWord : styles.word}>
                {line.replace("We ", "")}
              </span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className={styles.underline} aria-hidden="true" variants={softReveal} />
        <motion.p className={styles.tagline} variants={fadeUp}>
          {landingContent.hero.tagline}
        </motion.p>
        <motion.a
          href="#contact"
          className={styles.cta}
          variants={fadeUp}
          whileHover={buttonHover}
          whileTap={buttonTap}
        >
          {landingContent.hero.cta}
        </motion.a>
      </motion.div>
    </section>
  );
}
