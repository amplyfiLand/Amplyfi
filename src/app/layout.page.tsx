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
    icons: { icon: "/assets/favicon.svg" },
    openGraph: { title, description, type: "website" },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

type RootLayoutProperties = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProperties) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
