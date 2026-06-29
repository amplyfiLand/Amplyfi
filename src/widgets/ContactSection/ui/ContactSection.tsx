"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { buttonHover, buttonTap } from "@/shared/animations/hover";
import { useSubtleParallax } from "@/shared/animations/parallax";
import { fadeUp, viewportOnce } from "@/shared/animations/reveal";
import { staggerContainer } from "@/shared/animations/stagger";
import { landingAssets, LandingAssetKey } from "@/shared/assets/landingAssets";
import { useLandingContent } from "@/shared/contexts/LandingContent";
import { AmplifyLogo } from "@/shared/ui/AmplifyLogo/AmplifyLogo";
import { ContactModal } from "./ContactModal";
import styles from "./ContactSection.module.scss";

export function ContactSection() {
  const landingContent = useLandingContent();
  const wrapperReference = useRef<HTMLDivElement>(null);
  const backgroundY = useSubtleParallax(wrapperReference, 18);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={styles.wrapper} id="contact" ref={wrapperReference}>
        <motion.div
          className={styles.inner}
          variants={staggerContainer(0, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div
            className={styles.background}
            aria-hidden="true"
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={viewportOnce}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{
              backgroundImage: `url(${landingAssets[LandingAssetKey.ContactMountain]})`,
              y: backgroundY
            }}
          />
          <div className={styles.overlay} aria-hidden="true" />
          <div className={styles.logoRow}>
            <motion.div variants={fadeUp}>
              <AmplifyLogo gradientId="logo-contact" />
            </motion.div>
          </div>
          <motion.h2 className={styles.title} variants={fadeUp}>
            {landingContent.contact.title}
          </motion.h2>
          <motion.div className={styles.details} variants={staggerContainer(0.04, 0.06)}>
            <motion.a
              href={`tel:${landingContent.contact.phone}`}
              className={styles.contactLine}
              variants={fadeUp}
              whileHover={{ opacity: 0.72, x: 3 }}
            >
              {landingContent.contact.phone}
            </motion.a>
            <motion.a
              href={`mailto:${landingContent.contact.email}`}
              className={styles.contactLine}
              variants={fadeUp}
              whileHover={{ opacity: 0.72, x: 3 }}
            >
              {landingContent.contact.email}
            </motion.a>
          </motion.div>
          <motion.button
            className={styles.cta}
            variants={fadeUp}
            whileHover={buttonHover}
            whileTap={buttonTap}
            onClick={() => setModalOpen(true)}
          >
            {landingContent.contact.cta}
          </motion.button>
        </motion.div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
