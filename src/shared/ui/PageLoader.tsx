"use client";

import { useEffect, useRef, useState } from "react";

// Extra buffer after window.load — gives videos time to start buffering
const POST_LOAD_BUFFER_MS = 2000;
const MAX_WAIT_MS = 10000;

export function PageLoader() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);
  const startRef = useRef(Date.now());

  useEffect(() => {
    let cancelled = false;

    function hide() {
      if (cancelled) return;
      setFading(true);
      setTimeout(() => { if (!cancelled) setGone(true); }, 600);
    }

    function afterLoad() {
      if (cancelled) return;
      // Wait extra buffer time after window.load for videos to buffer
      const elapsed = Date.now() - startRef.current;
      const remaining = Math.max(0, POST_LOAD_BUFFER_MS - elapsed);
      setTimeout(hide, remaining);
    }

    const maxTimer = setTimeout(hide, MAX_WAIT_MS);

    if (document.readyState === "complete") {
      afterLoad();
    } else {
      window.addEventListener("load", afterLoad, { once: true });
    }

    return () => {
      cancelled = true;
      clearTimeout(maxTimer);
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
      transition: "opacity 0.6s ease",
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
