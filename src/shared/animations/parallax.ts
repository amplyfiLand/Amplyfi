import { useScroll, useTransform } from "framer-motion";
import type { RefObject } from "react";

export function useSubtleParallax(target: RefObject<HTMLElement | null>, distance = 20) {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"]
  });

  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
}
