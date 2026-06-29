import { groq } from 'next-sanity';

export const landingPageQuery = groq`*[_type == "landingPage"][0]{
  hero,
  stats,
  whoWeAre,
  whatWeDo,
  theySaid,
  legacies,
  howWeHelp,
  contact,
  seo
}`;
