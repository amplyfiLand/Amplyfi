"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from "framer-motion";
import { fadeUp, viewportOnce } from "@/shared/animations/reveal";
import { staggerContainer } from "@/shared/animations/stagger";
import { landingContent } from "@/shared/config/landingContentClean";
import styles from "./StatsBar.module.scss";

type AnimatedValueProperties = {
  value: string;
  active: boolean;
};

function AnimatedValue({ value, active }: AnimatedValueProperties) {
  const numericMatch = useMemo(() => value.match(/^(\d+)(.*)$/), [value]);
  const prefersReducedMotion = useReducedMotion();
  const rawValue = useMotionValue(0);
  const springValue = useSpring(rawValue, { stiffness: 70, damping: 22, mass: 0.75 });
  const displayedValue = useTransform(springValue, (latest) => {
    if (!numericMatch) {
      return value;
    }

    return `${Math.round(latest)}${numericMatch[2]}`;
  });

  useEffect(() => {
    if (!active) {
      return;
    }

    if (!numericMatch || prefersReducedMotion) {
      rawValue.set(Number(numericMatch?.[1] ?? 0));
      return;
    }

    rawValue.set(Number(numericMatch[1]));
  }, [active, numericMatch, prefersReducedMotion, rawValue]);

  if (!numericMatch) {
    return <span className={styles.value}>{value}</span>;
  }

  return <motion.span className={styles.value}>{displayedValue}</motion.span>;
}

export function StatsBar() {
  const barReference = useRef<HTMLDivElement>(null);
  const isInView = useInView(barReference, viewportOnce);

  return (
    <div className={styles.wrapper}>
      <motion.div
        ref={barReference}
        className={styles.bar}
        variants={staggerContainer(0.04, 0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {landingContent.stats.map((stat, index) => (
          <motion.div key={stat.value} className={styles.item} variants={fadeUp}>
            <AnimatedValue value={stat.value} active={isInView} />
            <span className={styles.label}>{stat.label}</span>
            {index < landingContent.stats.length - 1 && (
              <div className={styles.divider} aria-hidden="true" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
