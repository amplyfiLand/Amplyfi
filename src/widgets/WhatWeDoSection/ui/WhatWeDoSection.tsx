"use client";

import { motion } from "framer-motion";
import { ambientIcon, drawPath } from "@/shared/animations/ambient";
import { cardHover } from "@/shared/animations/hover";
import { fadeLeft, fadeUp, viewportOnce } from "@/shared/animations/reveal";
import { staggerContainer } from "@/shared/animations/stagger";
import { landingAssets, LandingAssetKey } from "@/shared/assets/landingAssets";
import { landingContent, WhatWeDoKind } from "@/shared/config/landingContentClean";
import styles from "./WhatWeDoSection.module.scss";

function DiscoverIcon() {
  return (
    <motion.svg
      width="84"
      height="84"
      viewBox="0 0 93 93"
      aria-hidden="true"
      animate={ambientIcon}
    >
      <motion.path
        d="M 44.644 4.622 C 45.316 2.949 47.684 2.949 48.356 4.622 L 58.058 28.782 C 58.344 29.495 59.013 29.981 59.779 30.032 L 85.755 31.794 C 87.554 31.916 88.286 34.168 86.902 35.324 L 66.922 52.017 C 66.333 52.51 66.078 53.296 66.265 54.04 L 72.617 79.289 C 73.057 81.038 71.141 82.43 69.614 81.471 L 47.563 67.628 C 46.913 67.219 46.087 67.219 45.437 67.628 L 23.386 81.471 C 21.859 82.43 19.943 81.038 20.383 79.289 L 26.735 54.04 C 26.922 53.296 26.667 52.51 26.078 52.017 L 6.098 35.324 C 4.714 34.168 5.446 31.916 7.245 31.794 L 33.221 30.032 C 33.987 29.981 34.656 29.495 34.942 28.782 Z"
        fill="none"
        stroke="var(--accent-color)"
        strokeWidth="5"
        variants={drawPath}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      />
    </motion.svg>
  );
}

function DevelopIcon() {
  return (
    <motion.svg
      width="92"
      height="92"
      viewBox="0 0 100 100"
      aria-hidden="true"
      animate={ambientIcon}
    >
      <motion.path
        d="M30 72 L70 32 M44 30 H72 V58"
        stroke="var(--accent-color)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={drawPath}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      />
    </motion.svg>
  );
}

function AmplifyIcon() {
  return (
    <div
      className={styles.amplifyIcon}
      style={{
        WebkitMask: `url(${landingAssets[LandingAssetKey.IconPulse]}) center / contain no-repeat`,
        mask: `url(${landingAssets[LandingAssetKey.IconPulse]}) center / contain no-repeat`
      }}
      aria-hidden="true"
    />
  );
}

const iconMap: Record<WhatWeDoKind, React.ReactNode> = {
  [WhatWeDoKind.Discover]: <DiscoverIcon />,
  [WhatWeDoKind.Develop]: <DevelopIcon />,
  [WhatWeDoKind.Amplify]: <AmplifyIcon />
};

const cardBgMap: Record<WhatWeDoKind, string> = {
  [WhatWeDoKind.Discover]:
    "radial-gradient(440px 300px at 22% 24%, rgba(255,45,135,0.28), rgba(3,3,7,0) 65%), linear-gradient(15deg, rgba(3,3,7,0.4), rgba(30,30,30,0.4))",
  [WhatWeDoKind.Develop]:
    "radial-gradient(390px 390px at 26% 20%, rgba(255,45,135,0.26), rgba(3,3,7,0) 65%), linear-gradient(15deg, rgba(3,3,7,0.4), rgba(30,30,30,0.4))",
  [WhatWeDoKind.Amplify]:
    "radial-gradient(440px 294px at 22% 24%, rgba(255,45,135,0.3), rgba(3,3,7,0) 65%), linear-gradient(15deg, rgba(3,3,7,0.4), rgba(30,30,30,0.4))"
};

export function WhatWeDoSection() {
  return (
    <section className={styles.section} id="what-we-do">
      <motion.div
        className={styles.inner}
        variants={staggerContainer(0, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div className={styles.copy} variants={fadeLeft}>
          <span className={styles.eyebrow}>{landingContent.whatWeDo.eyebrow}</span>
          <h2 className={styles.title}>{landingContent.whatWeDo.title}</h2>
        </motion.div>
        <motion.div className={styles.cards} variants={staggerContainer(0.08, 0.08)}>
          {landingContent.whatWeDo.items.map((item) => (
            <motion.article
              key={item.kind}
              className={styles.card}
              style={{ background: cardBgMap[item.kind] }}
              variants={fadeUp}
              whileHover={cardHover}
            >
              <motion.div className={styles.cardIcon} variants={fadeUp}>
                {iconMap[item.kind]}
              </motion.div>
              <div className={styles.cardBody}>
                <span className={styles.cardTitle}>{item.title}</span>
                <span className={styles.cardDescription}>{item.description}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
