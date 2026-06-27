import type { TargetAndTransition, Variants } from "framer-motion";

export const ambientSvg = {
  opacity: [1, 0.82, 1],
  transition: {
    duration: 7.5,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror"
  }
} satisfies TargetAndTransition;

export const ambientLine = {
  x: [0, 10, 0],
  opacity: [0.95, 0.72, 0.95],
  transition: {
    duration: 10,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror"
  }
} satisfies TargetAndTransition;

export const ambientIcon = {
  y: [0, -4, 0],
  rotate: [0, 3, 0],
  opacity: [1, 0.82, 1],
  transition: {
    duration: 6.5,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror"
  }
} satisfies TargetAndTransition;

export const drawPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] }
  }
};
