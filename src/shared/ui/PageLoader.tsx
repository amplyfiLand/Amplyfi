"use client";

import { useEffect, useRef, useState } from "react";

const MIN_DISPLAY_MS = 800;

export function PageLoader() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);
  const startTime = useRef(Date.now());

  useEffect(() => {
    let cancelled = false;

    function hide() {
      if (cancelled) return;
      const elapsed = Date.now() - startTime.current;
      const delay = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(() => {
        if (cancelled) return;
        setFading(true);
        setTimeout(() => { if (!cancelled) setGone(true); }, 550);
      }, delay);
    }

    function waitForVideos() {
      const videos = Array.from(document.querySelectorAll<HTMLVideoElement>("video"));
      if (videos.length === 0) { hide(); return; }

      let pending = videos.filter(v => v.readyState < 3).length;
      if (pending === 0) { hide(); return; }

      function onReady() {
        pending--;
        if (pending <= 0) hide();
      }

      videos.forEach(v => {
        if (v.readyState >= 3) return;
        v.addEventListener("canplay", onReady, { once: true });
      });
    }

    // Fallback — never block longer than 6s
    const fallback = setTimeout(hide, 6000);

    if (document.readyState === "complete") {
      waitForVideos();
    } else {
      window.addEventListener("load", waitForVideos, { once: true });
    }

    return () => {
      cancelled = true;
      clearTimeout(fallback);
    };
  }, []);

  if (gone) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "#03030f",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "28px",
      zIndex: 9999,
      transition: "opacity 0.55s ease",
      opacity: fading ? 0 : 1,
      pointerEvents: fading ? "none" : "all",
    }}>
      <style>{`
        @keyframes amp-pulse {
          0%, 100% { opacity: 0.25; transform: scale(0.97); }
          50%       { opacity: 1;    transform: scale(1);    }
        }
        @keyframes amp-line {
          0%   { transform: scaleX(0);   opacity: 0; }
          30%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: scaleX(1);   opacity: 0; }
        }
        .amp-wordmark {
          font-family: var(--font-inter, sans-serif);
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 600;
          letter-spacing: 0.25em;
          color: #f5f5f7;
          margin: 0;
          animation: amp-pulse 1.8s ease-in-out infinite;
        }
        .amp-tagline {
          font-family: var(--font-inter, sans-serif);
          font-size: clamp(9px, 1.2vw, 12px);
          font-weight: 400;
          letter-spacing: 0.35em;
          color: rgba(245,245,247,0.35);
          margin: -20px 0 0;
        }
        .amp-bar-wrap {
          width: clamp(80px, 14vw, 140px);
          height: 1px;
          background: rgba(255,45,135,0.15);
          overflow: hidden;
          border-radius: 1px;
        }
        .amp-bar {
          height: 100%;
          width: 100%;
          background: #FF2D87;
          transform-origin: left center;
          animation: amp-line 1.8s ease-in-out infinite;
        }
      `}</style>

      <p className="amp-wordmark">AMPLIFY</p>
      <p className="amp-tagline">TALENT AGENCY</p>
      <div className="amp-bar-wrap">
        <div className="amp-bar" />
      </div>
    </div>
  );
}
