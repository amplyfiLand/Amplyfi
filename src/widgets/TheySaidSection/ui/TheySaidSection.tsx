"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp, viewportOnce } from "@/shared/animations/reveal";
import { staggerContainer } from "@/shared/animations/stagger";
import { landingAssets, LandingAssetKey } from "@/shared/assets/landingAssets";
import { landingContent } from "@/shared/config/landingContentClean";
import styles from "./TheySaidSection.module.scss";

function splitAtFirstSentence(text: string): [string, string] {
  const i = text.indexOf(".");
  if (i === -1) return [text, ""];
  return [text.slice(0, i + 1), text.slice(i + 1)];
}

const ease = [0.22, 1, 0.36, 1] as const;
const ITEMS = landingContent.theySaid.items;
const AUTO_INTERVAL = 3500;
const RESUME_DELAY = 5000;

export function TheySaidSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % ITEMS.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    return () => { if (resumeTimer.current) clearTimeout(resumeTimer.current); };
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_DELAY);
  };

  return (
    <section className={styles.section} id="they-said">
      <img
        className={styles.waveform}
        src={landingAssets[LandingAssetKey.Waveform]}
        alt=""
        aria-hidden="true"
      />
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
          {ITEMS.map((item, index) => {
            const isActive = activeIndex === index;
            const [first, rest] = splitAtFirstSentence(item.response);
            return (
              <motion.div
                key={item.objection}
                className={styles.item}
                variants={index % 2 === 0 ? fadeLeft : fadeRight}
              >
                <motion.div
                  className={`${styles.objectionBox} ${isActive ? styles.objectionBoxActive : ""}`}
                  whileHover={{ y: -4 }}
                  onClick={() => handleClick(index)}
                >
                  <span className={styles.objectionText}>{item.objection}</span>
                </motion.div>
                <div className={styles.responseWrapper}>
                  <p className={`${styles.responseText} ${isActive ? styles.responseTextActive : ""}`}>
                    <motion.span
                      animate={{ color: isActive ? "#FF2D87" : "rgba(245,245,247,0.6)" }}
                      transition={{ duration: 0.45, ease }}
                    >
                      {first}
                    </motion.span>
                    {rest && (
                      <motion.span
                        animate={{ color: isActive ? "rgba(245,245,247,0.9)" : "rgba(245,245,247,0.6)" }}
                        transition={{ duration: 0.45, ease }}
                      >
                        {rest}
                      </motion.span>
                    )}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
