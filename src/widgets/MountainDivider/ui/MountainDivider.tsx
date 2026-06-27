"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useSubtleParallax } from "@/shared/animations/parallax";
import { softReveal, viewportOnce } from "@/shared/animations/reveal";
import { landingAssets, LandingAssetKey } from "@/shared/assets/landingAssets";
import styles from "./MountainDivider.module.scss";

export function MountainDivider() {
  const wrapperReference = useRef<HTMLDivElement>(null);
  const backgroundY = useSubtleParallax(wrapperReference, 16);

  return (
    <div className={styles.wrapper} ref={wrapperReference}>
      <motion.div
        className={styles.inner}
        variants={softReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div
          className={styles.background}
          aria-hidden="true"
          style={{
            backgroundImage: `url(${landingAssets[LandingAssetKey.MountainDivider]})`,
            y: backgroundY
          }}
        />
        <div className={styles.logoMark} aria-hidden="true">
          <motion.svg
            width="391"
            height="171"
            viewBox="0 0 391 171"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <defs>
              <linearGradient id="lg-divider" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0.26" stopColor="#FF2D87" />
                <stop offset="0.32" stopColor="#FD4A97" />
                <stop offset="0.44" stopColor="#F997C2" />
                <stop offset="0.56" stopColor="#F5F5F7" />
              </linearGradient>
            </defs>
            <path
              d="M 391 171 L 369.484 171 L 276.038 76.534 L 244.853 106.956 L 162.593 21.917 L 21.277 171 L 0 171 L 162.436 0 L 244.689 85.045 L 275.874 54.623 L 391 171 Z"
              fill="url(#lg-divider)"
              className={styles.logoPath}
            />
          </motion.svg>
        </div>
      </motion.div>
    </div>
  );
}
