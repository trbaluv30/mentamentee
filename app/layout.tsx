import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

// One bold display face for big headlines, self-hosted by Next.js (no request to Google at runtime).
// Body text stays on system fonts to keep pages light on slow mobile networks.
const display = Archivo({ subsets: ["latin"], weight: ["800", "900"], display: "swap", variable: "--font-archivo" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mentamentee.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ment-a-Mentee | Your dream career in health starts with a mentor",
    template: "%s | Ment-a-Mentee",
  },
  description:
    "Verified mentors for future doctors, nurses and physiotherapists. Plan your next 5–6 years to study, practise or train in the US, Australia or New Zealand.",
  openGraph: { siteName: "Ment-a-Mentee", type: "website", locale: "en" },
  // Pre-launch: keep the site out of search results until the founder flips this.
  robots: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true" ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f766e",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={display.variable}>
      <body className="min-h-dvh bg-white font-sans text-slate-800 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
