"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeLeft, fadeRight, fadeUp, viewportOnce } from "@/shared/animations/reveal";
import { staggerContainer } from "@/shared/animations/stagger";
import { useLandingContent } from "@/shared/contexts/LandingContent";
import { useAutoplayVideo } from "@/shared/hooks/useAutoplayVideo";
import styles from "./TheySaidSection.module.scss";

function splitAtFirstSentence(text: string): [string, string] {
  const i = text.indexOf(".");
  if (i === -1) return [text, ""];
  return [text.slice(0, i + 1), text.slice(i + 1)];
}

const ease = [0.22, 1, 0.36, 1] as const;
const AUTO_INTERVAL = 3500;
const RESUME_DELAY = 5000;

export function TheySaidSection() {
  const landingContent = useLandingContent();
  const ITEMS = landingContent.theySaid.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const videoRef = useAutoplayVideo<HTMLVideoElement>();

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

  // Scroll active slide to center horizontally — never touches page scroll
  useEffect(() => {
    const slider = sliderRef.current;
    const el = slideRefs.current[activeIndex];
    if (!slider || !el) return;
    const sliderRect = slider.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const targetScroll = slider.scrollLeft + elRect.left - sliderRect.left - (sliderRect.width - elRect.width) / 2;
    slider.scrollTo({ left: targetScroll, behavior: "smooth" });
  }, [activeIndex]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_DELAY);
  };

  const [first, rest] = splitAtFirstSentence(ITEMS[activeIndex].response);

  return (
    <section className={styles.section} id="they-said">
      <video
        ref={videoRef}
        className={styles.waveform}
        src="/assets/Lines_Loop_Vignette.mp4"
        autoPlay
        loop
        muted
        playsInline
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

        {/* Desktop layout: vertical list with inline responses */}
        <motion.div className={styles.list} variants={staggerContainer(0.05, 0.1)}>
          {ITEMS.map((item, index) => {
            const isActive = activeIndex === index;
            const [f, r] = splitAtFirstSentence(item.response);
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
                      {f}
                    </motion.span>
                    {r && (
                      <motion.span
                        animate={{ color: isActive ? "rgba(245,245,247,0.9)" : "rgba(245,245,247,0.6)" }}
                        transition={{ duration: 0.45, ease }}
                      >
                        {r}
                      </motion.span>
                    )}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile layout: horizontal scroll slider */}
        <div className={styles.slider} ref={sliderRef} aria-hidden="false">
          {ITEMS.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={item.objection + "-slide"}
                ref={el => { slideRefs.current[index] = el; }}
                className={`${styles.slide} ${isActive ? styles.slideActive : ""}`}
                onClick={() => handleClick(index)}
              >
                {item.objection}
              </button>
            );
          })}
        </div>

        {/* Mobile active response */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeIndex}
            className={styles.mobileResponse}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.32, ease }}
          >
            <span className={styles.mobileResponsePink}>{first}</span>
            {rest && <span className={styles.mobileResponseWhite}>{rest}</span>}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
