import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { fetchLandingPage } from "@/shared/sanity/fetch";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-inter"
});

const FALLBACK_META = {
  title: "Amplify Talent Agency",
  description: "A European talent agency that works with ambitious creators.",
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchLandingPage();
  const seo = data?.seo;
  const title = seo?.title ?? FALLBACK_META.title;
  const description = seo?.description ?? FALLBACK_META.description;

  return {
    title,
    description,
    keywords: seo?.keywords,
    openGraph: {
      title,
      description,
      type: "website",
      ...(seo?.ogImage ? { images: [{ url: seo.ogImage as string }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

type RootLayoutProperties = Readonly<{
  children: React.ReactNode;
}>;

// Runs before first paint so the `ios` class is present on <html> by the
// time liquid-glass panels render — CSS @supports can't tell iOS Safari
// apart from browsers that parse the same backdrop-filter value but
// actually render it, so detection has to happen in JS instead.
const IOS_DETECT_SCRIPT = `
(function () {
  var ua = navigator.userAgent;
  var isIOS = /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (isIOS) document.documentElement.classList.add("ios");
})();
`;

export default function RootLayout({ children }: RootLayoutProperties) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: IOS_DETECT_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
