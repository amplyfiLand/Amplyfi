import { sanityClient } from './client';
import { isSanityEnabled } from './config';
import type { SanityLandingContent, SanitySiteSettings } from './types';
import { landingPageQuery } from './queries/landingPage';
import { siteSettingsQuery } from './queries/siteSettings';

export async function fetchLandingPage(): Promise<SanityLandingContent | null> {
  if (!isSanityEnabled) return null;
  try {
    return await sanityClient.fetch(
      landingPageQuery,
      {},
      { next: { revalidate: 60 } }
    );
  } catch {
    return null;
  }
}

export async function fetchSiteSettings(): Promise<SanitySiteSettings | null> {
  if (!isSanityEnabled) return null;
  try {
    return await sanityClient.fetch(
      siteSettingsQuery,
      {},
      { next: { revalidate: 60 } }
    );
  } catch {
    return null;
  }
}
