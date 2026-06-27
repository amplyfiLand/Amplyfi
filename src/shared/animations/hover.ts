export const cardHover = {
  y: -6,
  boxShadow:
    "0 24px 72px rgba(0, 0, 0, 0.48), 0 0 48px rgba(255, 45, 135, 0.095)",
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
} as const;

export const buttonHover = {
  y: -2,
  boxShadow: "0 14px 42px rgba(255, 45, 135, 0.3)",
  transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
} as const;

export const buttonTap = {
  y: 0,
  scale: 0.985,
  transition: { duration: 0.12, ease: "easeOut" }
} as const;
