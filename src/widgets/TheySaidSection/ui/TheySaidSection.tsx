"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp, viewportOnce } from "@/shared/animations/reveal";
import { staggerContainer } from "@/shared/animations/stagger";
import { landingContent } from "@/shared/config/landingContentClean";
import styles from "./TheySaidSection.module.scss";

export function TheySaidSection() {
  return (
    <section className={styles.section} id="they-said">
      <motion.div
        className={styles.inner}
        variants={staggerContainer(0, 0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.p className={styles.eyebrow} variants={fadeUp}>
          {landingContent.theySaid.eyebrow}
        </motion.p>
        <motion.div className={styles.list} variants={staggerContainer(0.05, 0.1)}>
          {landingContent.theySaid.items.map((item, index) => (
            <motion.div
              key={item.objection}
              className={styles.item}
              variants={index % 2 === 0 ? fadeLeft : fadeRight}
            >
              <motion.div className={styles.objectionBox} whileHover={{ y: -4 }}>
                <span className={styles.objectionText}>{item.objection}</span>
              </motion.div>
              <p className={styles.responseText}>{item.response}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
