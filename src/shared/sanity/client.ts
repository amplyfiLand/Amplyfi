import { createClient, type SanityClient } from 'next-sanity';
import { sanityConfig, isSanityEnabled } from './config';

export const sanityClient = (
  isSanityEnabled
    ? createClient({ ...sanityConfig, useCdn: true, token: process.env.SANITY_API_READ_TOKEN })
    : null
) as SanityClient;
