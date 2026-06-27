import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Amplify Talent Agency",
  description: "A European talent agency that works with ambitious creators."
};

type RootLayoutProperties = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProperties) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
