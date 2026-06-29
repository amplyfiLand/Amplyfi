export type CookieCategory = 'necessary' | 'analytics' | 'marketing';

export interface CookieConsent {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
}

export interface AnalyticsProvider {
  name: string;
  initialize: (consent: CookieConsent) => void;
}
