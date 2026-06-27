import type { Variants } from "framer-motion";

export const staggerContainer = (delayChildren = 0, staggerChildren = 0.09): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren,
      staggerChildren
    }
  }
});

export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.105
    }
  }
};
