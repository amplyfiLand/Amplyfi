"use client";

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id: string) => void;
    };
  }
}

interface Props {
  siteKey: string;
  onVerify: (token: string) => void;
  onExpire: () => void;
}

export function TurnstileWidget({ siteKey, onVerify, onExpire }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    let mounted = true;

    function render() {
      if (!mounted || !ref.current || !window.turnstile) return;
      widgetId.current = window.turnstile.render(ref.current, {
        sitekey: siteKey,
        callback: onVerify,
        'expired-callback': onExpire,
        theme: 'dark',
      });
    }

    if (window.turnstile) {
      render();
    } else {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.onload = render;
      document.head.appendChild(script);
    }

    return () => {
      mounted = false;
    };
  }, [siteKey, onVerify, onExpire]);

  return <div ref={ref} />;
}
