import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Amplify Talent Agency",
  description: "A landing page for artists ready to amplify their story."
};

type RootLayoutProperties = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProperties) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
