"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./ContactModal.module.scss";

const ROLE_OPTIONS = [
  { value: "creator", label: "Creator" },
  { value: "brand", label: "Brand" },
  { value: "partner", label: "Partner" },
  { value: "other", label: "Other" },
];

interface SelectProps {
  value: string;
  onChange: (v: string) => void;
}

function CustomSelect({ value, onChange }: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = ROLE_OPTIONS.find(o => o.value === value);

  return (
    <div ref={ref} className={styles.customSelect}>
      <button
        type="button"
        className={`${styles.selectTrigger} ${open ? styles.selectTriggerOpen : ""}`}
        onClick={() => setOpen(v => !v)}
      >
        <span className={selected ? "" : styles.selectPlaceholder}>
          {selected?.label ?? "Select a role"}
        </span>
        <motion.span
          className={styles.selectArrow}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▾
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            className={styles.selectDropdown}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {ROLE_OPTIONS.map(opt => (
              <li
                key={opt.value}
                className={`${styles.selectOption} ${value === opt.value ? styles.selectOptionActive : ""}`}
                onClick={() => { onChange(opt.value); setOpen(false); }}
              >
                {opt.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: Props) {
  const [role, setRole] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={styles.title}>Contact Us</h2>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.field}>
                <label className={styles.label}>Name</label>
                <input className={styles.input} type="text" placeholder="Your name" />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type="email" placeholder="your@email.com" />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>I&apos;m Applying as...</label>
                <CustomSelect value={role} onChange={setRole} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Your message</label>
                <textarea className={styles.textarea} placeholder="Tell us about yourself..." rows={4} />
              </div>
              <button type="submit" className={styles.submit}>Send</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
