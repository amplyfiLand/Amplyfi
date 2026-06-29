"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { buttonHover, buttonTap } from "@/shared/animations/hover";
import { AmplifyLogo } from "@/shared/ui/AmplifyLogo/AmplifyLogo";
import styles from "./Header.module.scss";

const navigationItems = [
  { href: "#who-we-are", label: "Who we are" },
  { href: "#what-we-do", label: "What we do" },
  { href: "#how-we-help", label: "How we help" },
  { href: "#contact", label: "Contact" }
] as const;

const ease = [0.22, 1, 0.36, 1] as const;
const tx = { duration: 0.38, ease };

export function Header() {
  const prefersReducedMotion = useReducedMotion();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const update = () => setIsSticky(window.scrollY > 56);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const reduced = !!prefersReducedMotion;

  return (
    <>
      {/* SVG filter used by backdrop-filter: url(#app-header-liquid-glass) */}
      <svg className={styles.filterDefs} aria-hidden="true" focusable="false">
        <defs>
          <filter id="app-header-liquid-glass" colorInterpolationFilters="sRGB">
            <feImage
              x="0" y="0" width="100%" height="100%"
              preserveAspectRatio="none" result="map"
              href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cdefs%3E%3CradialGradient id='a' cx='18%25' cy='0%25' r='78%25'%3E%3Cstop offset='0%25' stop-color='rgb(255,128,128)'/%3E%3Cstop offset='52%25' stop-color='rgb(128,128,128)'/%3E%3Cstop offset='100%25' stop-color='rgb(44,128,220)'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='88%25' cy='100%25' r='82%25'%3E%3Cstop offset='0%25' stop-color='rgb(36,128,255)'/%3E%3Cstop offset='58%25' stop-color='rgb(128,128,128)'/%3E%3Cstop offset='100%25' stop-color='rgb(230,128,62)'/%3E%3C/radialGradient%3E%3ClinearGradient id='c' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='rgb(210,128,70)'/%3E%3Cstop offset='50%25' stop-color='rgb(128,128,128)'/%3E%3Cstop offset='100%25' stop-color='rgb(60,128,215)'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='rgb(128,128,128)'/%3E%3Crect width='100' height='100' fill='url(%23c)' opacity='.42'/%3E%3Crect width='100' height='100' fill='url(%23a)' opacity='.58'/%3E%3Crect width='100' height='100' fill='url(%23b)' opacity='.46'/%3E%3C/svg%3E"
            />
            <feDisplacementMap in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="B" scale="-180" result="dispRed" />
            <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="red" />
            <feDisplacementMap in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="B" scale="-170" result="dispGreen" />
            <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="green" />
            <feDisplacementMap in="SourceGraphic" in2="map" scale="-160" xChannelSelector="R" yChannelSelector="B" result="dispBlue" />
            <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="blue" />
            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur in="output" stdDeviation="0.7" />
          </filter>
        </defs>
      </svg>

      {/* Logo — stays at its own absolute position, just fades out */}
      <div className={styles.logoWrapper}>
        <div className={styles.logoInner}>
          <motion.a
            href="#top"
            aria-label="Amplify home"
            className={styles.compact}
            animate={reduced ? { opacity: isSticky ? 0 : 1 } : { opacity: isSticky ? 0 : 1, y: isSticky ? -6 : 0 }}
            transition={tx}
            style={{ pointerEvents: isSticky ? "none" : "auto" }}
            whileHover={{ opacity: 0.86 }}
            whileTap={{ scale: 0.985 }}
          >
            <AmplifyLogo gradientId="logo-header" />
          </motion.a>
        </div>
      </div>

      {/* Nav — stays fixed at its own position, just fades in */}
      <div className={styles.navWrapper}>
        <motion.nav
          className={styles.nav}
          aria-label="Primary"
          animate={reduced ? { opacity: isSticky ? 1 : 0 } : { opacity: isSticky ? 1 : 0, y: isSticky ? 0 : -10 }}
          transition={tx}
          style={{ pointerEvents: isSticky ? "auto" : "none" }}
        >
          <motion.a
            href="#top"
            aria-label="Amplify home"
            className={styles.brand}
            whileHover={{ opacity: 0.86 }}
            whileTap={{ scale: 0.985 }}
          >
            <AmplifyLogo gradientId="logo-header-nav" />
          </motion.a>

          <div className={styles.links}>
            {navigationItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={styles.link}
                whileHover={{ opacity: 0.72, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            className={styles.cta}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            Let&apos;s grow together
          </motion.a>
        </motion.nav>
      </div>
    </>
  );
}
