"use client";

import { motion } from "framer-motion";
import { ambientLine } from "@/shared/animations/ambient";
import { cardHover } from "@/shared/animations/hover";
import { fadeUp, viewportOnce } from "@/shared/animations/reveal";
import { staggerContainer } from "@/shared/animations/stagger";
import { landingContent } from "@/shared/config/landingContentClean";
import styles from "./HowWeHelpSection.module.scss";

export function HowWeHelpSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        variants={staggerContainer(0, 0.09)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.p className={styles.eyebrow} variants={fadeUp}>
          {landingContent.howWeHelp.eyebrow}
        </motion.p>
        <motion.div
          className={styles.glowChart}
          aria-hidden="true"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.svg
            width="2110"
            height="432"
            viewBox="0 0 2024 432"
            preserveAspectRatio="none"
            animate={ambientLine}
          >
            <path
              d="M 0 432 C 37.567 420.204 75.131 408.399 112.692 396.584 C 172.272 377.842 231.846 359.076 291.411 340.287 L 290.489 340.251 C 366.205 371.536 441.938 402.782 517.688 433.987 L 518.371 434.269 L 519.093 434.063 C 605.494 409.464 691.88 384.814 778.252 360.115 L 777.65 360.216 C 889.493 354.223 1001.331 348.149 1113.165 341.994 L 1114.364 341.928 L 1115.187 341.052 C 1120.766 335.107 1126.345 329.162 1131.923 323.216 C 1164.345 288.662 1196.756 254.097 1229.156 219.523 L 1227.191 220.45 C 1312.354 214.898 1397.514 209.299 1482.671 203.654 L 1483.138 203.581 C 1545.779 187.974 1608.412 172.341 1671.039 156.681 L 1669.114 156.268 C 1730.235 203.946 1791.381 251.594 1852.551 299.211 L 1854.438 300.701 L 1854.998 298.352 C 1867.802 242.973 1880.585 187.588 1893.349 132.199 L 1893.118 132.615 C 1909.093 116.442 1925.065 100.266 1941.036 84.087 C 1968.698 56.065 1996.352 28.036 2024 0 C 1996.069 27.754 1968.145 55.515 1940.228 83.283 C 1924.111 99.314 1907.995 115.348 1891.882 131.385 L 1891.706 131.563 L 1891.651 131.801 C 1878.415 187.078 1865.198 242.361 1852.002 297.648 L 1854.449 296.789 C 1793.619 248.74 1732.765 200.72 1671.886 152.732 L 1671.018 152.054 L 1669.961 152.319 C 1607.254 167.659 1544.555 183.026 1481.862 198.419 L 1482.329 198.346 C 1397.153 203.701 1311.979 209.102 1226.809 214.55 L 1225.642 214.626 L 1224.844 215.477 C 1192.401 250.012 1159.969 284.556 1127.547 319.111 C 1121.969 325.056 1116.391 331.002 1110.813 336.948 L 1112.835 336.006 C 1001.002 342.184 889.174 348.443 777.35 354.784 L 776.748 354.885 C 690.453 379.853 604.173 404.87 517.907 429.937 L 519.312 430.013 C 443.395 399.218 367.461 368.464 291.511 337.749 L 291.051 337.563 L 290.589 337.713 C 231.166 356.951 171.752 376.212 112.344 395.498 C 74.893 407.656 37.445 419.823 0 432 Z"
              fill="var(--accent-color)"
            />
          </motion.svg>
        </motion.div>
        <motion.div className={styles.cards} variants={staggerContainer(0.06, 0.08)}>
          {landingContent.howWeHelp.cards.map((card, index) => (
            <motion.article
              key={card.kind}
              className={styles.card}
              data-index={index}
              variants={fadeUp}
              whileHover={cardHover}
            >
              <span className={styles.cardTitle}>{card.title}</span>
              <p className={styles.cardDescription}>{card.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
