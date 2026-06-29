"use client";

import { motion } from "framer-motion";
import { ambientLine } from "@/shared/animations/ambient";
import { cardHover } from "@/shared/animations/hover";
import { fadeLeft, fadeRight, softReveal, viewportOnce } from "@/shared/animations/reveal";
import { staggerContainer } from "@/shared/animations/stagger";
import { landingAssets, LandingAssetKey } from "@/shared/assets/landingAssets";
import { landingContent } from "@/shared/config/landingContentClean";
import styles from "./WhoWeAreSection.module.scss";

export function WhoWeAreSection() {
  return (
    <section className={styles.section} id="who-we-are">
      <motion.div
        className={styles.glowLine}
        aria-hidden="true"
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.svg
          width="2024"
          height="485"
          viewBox="0 0 2024 484.5"
          preserveAspectRatio="none"
          animate={ambientLine}
        >
          <path
            d="M 0 432 C 37.398 435.06 74.797 438.107 112.197 441.141 C 309.019 457.106 505.867 472.703 702.744 487.932 L 703.591 487.89 C 781.126 474.596 858.652 461.244 936.168 447.835 L 935.658 447.889 C 997.179 445.458 1058.698 442.992 1120.216 440.489 C 1157.031 438.992 1193.846 437.481 1230.661 435.958 L 1232.077 435.902 L 1233.138 434.955 C 1307.759 368.236 1382.315 301.447 1456.809 234.586 L 1455.941 235.154 C 1506.215 212.023 1556.476 188.866 1606.726 165.683 L 1604.154 165.625 C 1663.097 195.577 1722.059 225.493 1781.041 255.371 L 1782.425 256.09 L 1783.521 254.952 C 1837.998 197.325 1892.431 139.656 1946.822 81.947 C 1972.557 54.64 1998.283 27.325 2024 0 C 1997.898 26.956 1971.805 53.922 1945.722 80.897 C 1890.598 137.906 1835.517 194.956 1780.479 252.048 L 1782.959 251.629 C 1724.274 221.174 1665.569 190.756 1606.846 160.375 L 1605.562 159.723 L 1604.274 160.317 C 1553.857 183.134 1503.452 205.977 1453.059 228.846 L 1452.191 229.414 C 1377.351 295.887 1302.575 362.43 1227.862 429.045 L 1230.339 428.042 C 1193.522 429.514 1156.706 430.998 1119.891 432.496 C 1058.373 434.998 996.857 437.537 935.342 440.111 L 934.832 440.165 C 857.348 453.756 779.874 467.404 702.409 481.11 L 703.256 481.068 C 506.302 466.886 309.32 453.071 112.31 439.625 C 74.875 437.07 37.438 434.528 0 432 Z"
            fill="var(--accent-color)"
          />
        </motion.svg>
      </motion.div>
      <motion.div
        className={styles.inner}
        variants={staggerContainer(0, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div className={styles.copy} variants={fadeLeft}>
          <p className={styles.eyebrow}>{landingContent.whoWeAre.eyebrow}</p>
          <p className={styles.description}>{landingContent.whoWeAre.description}</p>
        </motion.div>
        <motion.div className={styles.cards} aria-hidden="true" variants={fadeRight}>
          <motion.div className={styles.cardPersonal} whileHover={cardHover}>
            <span className={styles.cardTitle}>
              {landingContent.whoWeAre.cards[0].title}
            </span>
          </motion.div>
          <motion.div className={styles.cardStrategic} whileHover={cardHover}>
            <span className={styles.cardTitle}>
              {landingContent.whoWeAre.cards[1].title}
            </span>
          </motion.div>
          <motion.div className={styles.womanCard} variants={softReveal} whileHover={cardHover}>
            <div
              className={styles.womanImage}
              style={{ backgroundImage: `url(${landingAssets[LandingAssetKey.Woman]})` }}
            />
            <div className={styles.womanOverlay} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
