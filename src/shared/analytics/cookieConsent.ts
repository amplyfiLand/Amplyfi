import type { CookieConsent } from './types';

const STORAGE_KEY = 'amplify_cookie_consent';

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CookieConsent) : null;
  } catch {
    return null;
  }
}

export function setConsent(
  consent: Omit<CookieConsent, 'necessary' | 'updatedAt'>
): void {
  const full: CookieConsent = {
    ...consent,
    necessary: true,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(full));
}

export function hasConsent(): boolean {
  return getStoredConsent() !== null;
}
