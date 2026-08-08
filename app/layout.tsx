import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { generateSiteGraphSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { DeferredWidgetBe } from "@/components/analytics/DeferredWidgetBe";

/**
 * Static root metadata (no headers()) so marketing pages can be CDN-cached.
 * Per-page generateMetadata / metadata overrides title/description/canonical.
 */
export const metadata: Metadata = buildPageMetadata({
  title: siteConfig.brandLine,
  description: siteConfig.description,
  keywords: [
    "Nevada real estate market",
    "Las Vegas Valley home prices",
    "Henderson real estate",
    "Dr Jan Duffy",
  ],
  images: [`${siteConfig.url}/images/og-home.jpg`],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteGraphSchema = generateSiteGraphSchema();

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistSans.className}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraphSchema) }}
        />
      </head>
      <body>
        {children}
        {/* RealScout: load once globally, deferred for LCP (user rule + PageSpeed) */}
        <Script
          src="https://em.realscout.com/widgets/v1/web.js"
          strategy="lazyOnload"
        />
        {/* Analytics after idle — avoid competing with LCP */}
        <Analytics />
        {/* Lead widget: idle + delay / first interaction — keeps WidgetBe off critical path */}
        <DeferredWidgetBe />
      </body>
    </html>
  );
}
