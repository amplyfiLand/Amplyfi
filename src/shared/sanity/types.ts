export type SanityLandingContent = {
  hero?: {
    headlineLines?: string[];
    tagline?: string;
    cta?: string;
  };
  stats?: Array<{ value: string; label: string }>;
  whoWeAre?: {
    eyebrow?: string;
    description?: string;
    cards?: Array<{ title: string }>;
  };
  whatWeDo?: {
    eyebrow?: string;
    title?: string;
    items?: Array<{ kind: string; title: string; description: string }>;
  };
  theySaid?: {
    eyebrow?: string;
    items?: Array<{ objection: string; response: string }>;
  };
  legacies?: {
    subtitle?: string;
    title?: string;
    lines?: string[];
  };
  howWeHelp?: {
    eyebrow?: string;
    cards?: Array<{ kind: string; title: string; description: string }>;
  };
  contact?: {
    title?: string;
    links?: Array<{ label: string; href: string }>;
    cta?: string;
  };
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: unknown;
  };
};

export type SanitySiteSettings = {
  logoText?: string;
  logoTagline?: string;
  navLinks?: Array<{ label: string; href: string }>;
  socialLinks?: Array<{ platform: string; url: string }>;
  legalLinks?: Array<{ label: string; href: string }>;
};
