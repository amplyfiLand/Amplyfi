import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { fetchLandingPage } from "@/shared/sanity/fetch";
import { PageLoader } from "@/shared/ui/PageLoader";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-inter"
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amplyfi-beta.vercel.app";

const FALLBACK_META = {
  title: "Amplify Talent Agency | We Find, Develop & Amplify Creators",
  description:
    "Amplify is a European talent agency for ambitious content creators. We find unique talent, build their personal brand and grow their audience to millions worldwide.",
  keywords:
    "talent agency, content creators, YouTube talent agency, TikTok creators, influencer management, creator management, European talent agency, brand deals, creator monetization",
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchLandingPage();
  const seo = data?.seo;
  const title = seo?.title ?? FALLBACK_META.title;
  const description = seo?.description ?? FALLBACK_META.description;
  const keywords = seo?.keywords ?? FALLBACK_META.keywords;
  const ogImage = seo?.ogImage
    ? [{ url: seo.ogImage as string, width: 1200, height: 630, alt: title }]
    : [{ url: `${SITE_URL}/assets/hero.png`, width: 1200, height: 630, alt: title }];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: "%s | Amplify Talent Agency",
    },
    description,
    keywords,
    icons: { icon: "/assets/favicon.svg" },
    alternates: { canonical: "/" },
    openGraph: {
      title,
      description,
      type: "website",
      url: "/",
      siteName: "Amplify Talent Agency",
      locale: "en_US",
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage.map((i) => i.url),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Amplify Talent Agency",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/favicon.svg`,
  description:
    "European talent agency for ambitious content creators. We find, develop and amplify creators to reach millions worldwide.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "amplify.mail@amplify.com",
    contactType: "customer service",
  },
  sameAs: [],
};

type RootLayoutProperties = Readonly<{ children: React.ReactNode }>;

// Runs before first paint so the `ios` class is present on <html> by the
// time liquid-glass panels render — CSS @supports can't tell iOS Safari
// apart from browsers that parse the same backdrop-filter value but
// actually render it, so detection has to happen in JS instead.
// `?liquidGlass=ios` / `=off` force the class on/off in any browser, so the
// fallback styling can be previewed on desktop without a real device.
const IOS_DETECT_SCRIPT = `
(function () {
  var forced = new URLSearchParams(location.search).get("liquidGlass");
  if (forced === "ios") { document.documentElement.classList.add("ios"); return; }
  if (forced === "off") { return; }
  var ua = navigator.userAgent;
  var isIOS = /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (isIOS) document.documentElement.classList.add("ios");
})();
`;

export default function RootLayout({ children }: RootLayoutProperties) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: IOS_DETECT_SCRIPT }} />
      </head>
      <body>
        <PageLoader />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
