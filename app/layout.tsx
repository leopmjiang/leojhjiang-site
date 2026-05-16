import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leo Jiang | Senior Product Manager",
  description: "Senior Product Manager for enterprise SaaS, platform products, AI-enabled workflows, simulation systems, and complex operational products.",
  metadataBase: new URL("https://leojhjiang.com"),
  openGraph: {
    title: "Leo Jiang | Senior Product Manager",
    description: "Senior Product Manager for enterprise SaaS, platform products, AI-enabled workflows, simulation systems, and complex operational products.",
    type: "website",
    url: "https://leojhjiang.com",
    images: [{ url: "/images/leo-headshot.jpeg", width: 1200, height: 630, alt: "Leo Jiang headshot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo Jiang | Senior Product Manager",
    description: "Senior Product Manager for enterprise SaaS, platform products, AI-enabled workflows, simulation systems, and complex operational products.",
    images: ["/images/leo-headshot.jpeg"],
  },
  icons: { icon: "/images/leo-logo.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
