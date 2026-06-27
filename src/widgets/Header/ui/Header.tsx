"use client";

import { motion } from "framer-motion";
import { AmplifyLogo } from "@/shared/ui/AmplifyLogo/AmplifyLogo";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <motion.a
        href="#"
        aria-label="Amplify home"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ opacity: 0.82 }}
        whileTap={{ scale: 0.985 }}
      >
        <AmplifyLogo gradientId="logo-header" />
      </motion.a>
    </header>
  );
}
