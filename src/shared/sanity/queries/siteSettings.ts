import { groq } from 'next-sanity';

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  logoText,
  logoTagline,
  navLinks,
  socialLinks,
  legalLinks
}`;
