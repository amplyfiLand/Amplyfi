"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { submitContact } from "@/features/contactForm/api/submitContact";
import type { ContactFormData } from "@/features/contactForm/model/schema";
import { TurnstileWidget } from "@/features/contactForm/ui/TurnstileWidget";
import styles from "./ContactModal.module.scss";

const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

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

  const selected = ROLE_OPTIONS.find((o) => o.value === value);

  return (
    <div ref={ref} className={styles.customSelect}>
      <button
        type="button"
        className={`${styles.selectTrigger} ${open ? styles.selectTriggerOpen : ""}`}
        onClick={() => setOpen((v) => !v)}
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
            {ROLE_OPTIONS.map((opt) => (
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

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
  gdprConsent: boolean;
};

const EMPTY: FormState = { name: "", email: "", company: "", role: "", message: "", gdprConsent: false };

export function ContactModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const submitted = useRef(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setForm(EMPTY);
      setTurnstileToken("");
      setStatus("idle");
      setErrorMsg("");
      submitted.current = false;
    }
  }, [isOpen]);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  const handleTurnstileVerify = useCallback((token: string) => setTurnstileToken(token), []);
  const handleTurnstileExpire = useCallback(() => setTurnstileToken(""), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitted.current || status === "loading") return;
    if (!form.gdprConsent) { setErrorMsg("Please accept the Privacy Policy to continue."); return; }
    if (!turnstileToken && TURNSTILE_KEY) { setErrorMsg("Please complete the CAPTCHA."); return; }

    submitted.current = true;
    setStatus("loading");
    setErrorMsg("");

    const payload: ContactFormData = {
      name: form.name,
      email: form.email,
      company: form.company || undefined,
      role: form.role || undefined,
      message: form.message,
      gdprConsent: true,
      turnstileToken: turnstileToken || "dev-skip",
    };

    const result = await submitContact(payload);
    if (result.ok) {
      setStatus("success");
    } else {
      submitted.current = false;
      setStatus("error");
      setErrorMsg(result.message);
    }
  };

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
            {status === "success" ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h2 className={styles.title}>Message sent!</h2>
                <p className={styles.successText}>We&apos;ll get back to you as soon as possible.</p>
                <button className={styles.submit} onClick={onClose}>Close</button>
              </div>
            ) : (
              <>
                <h2 className={styles.title}>Contact Us</h2>
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.field}>
                    <label className={styles.label}>Name</label>
                    <input className={styles.input} type="text" placeholder="Your name" value={form.name} onChange={handleChange("name")} required minLength={2} maxLength={100} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Email</label>
                    <input className={styles.input} type="email" placeholder="your@email.com" value={form.email} onChange={handleChange("email")} required />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Company <span className={styles.labelOptional}>(optional)</span></label>
                    <input className={styles.input} type="text" placeholder="Your company" value={form.company} onChange={handleChange("company")} maxLength={100} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>I&apos;m Applying as...</label>
                    <CustomSelect value={form.role} onChange={(v) => setForm((p) => ({ ...p, role: v }))} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Your message</label>
                    <textarea className={styles.textarea} placeholder="Tell us about yourself..." rows={4} value={form.message} onChange={handleChange("message")} required minLength={10} maxLength={2000} />
                    <span className={styles.fieldHint}>
                      {form.message.length < 10
                        ? `${form.message.length}/10 minimum characters`
                        : `${form.message.length}/2000`}
                    </span>
                  </div>
                  {TURNSTILE_KEY && (
                    <div className={styles.turnstile}>
                      {turnstileToken ? (
                        <div className={styles.captchaDone}>
                          <span className={styles.captchaDoneIcon}>✓</span>
                          <span className={styles.captchaDoneText}>Verified</span>
                        </div>
                      ) : (
                        <TurnstileWidget siteKey={TURNSTILE_KEY} onVerify={handleTurnstileVerify} onExpire={handleTurnstileExpire} />
                      )}
                    </div>
                  )}
                  <label className={styles.gdpr}>
                    <span className={styles.gdprCheckboxWrap}>
                      <input type="checkbox" className={styles.gdprCheckbox} checked={form.gdprConsent} onChange={handleChange("gdprConsent")} required />
                      <span className={styles.gdprCheckboxCustom} aria-hidden="true" />
                    </span>
                    <span className={styles.gdprText}>
                      I agree to the{" "}
                      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className={styles.gdprLink} onClick={(e) => e.stopPropagation()}>
                        Privacy Policy
                      </a>{" "}
                      and consent to the processing of my personal data.
                    </span>
                  </label>
                  {errorMsg && <p className={styles.errorMsg}>{errorMsg}</p>}
                  <button type="submit" className={styles.submit} disabled={status === "loading"}>
                    {status === "loading" ? "Sending…" : "Send"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
