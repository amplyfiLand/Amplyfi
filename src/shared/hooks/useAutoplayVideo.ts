"use client";

import { useEffect, useRef } from "react";

/**
 * iOS Safari sometimes ignores the declarative `autoplay` attribute (the
 * video sits paused on its first frame with the native play button) even
 * when `muted`/`playsInline` are set. Nudging playback imperatively, and
 * retrying once metadata loads or the tab regains focus, works around it.
 */
export function useAutoplayVideo<T extends HTMLVideoElement>() {
  const videoRef = useRef<T | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    tryPlay();
    video.addEventListener("loadedmetadata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);

    return () => {
      video.removeEventListener("loadedmetadata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
    };
  }, []);

  return videoRef;
}
