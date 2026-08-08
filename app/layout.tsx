import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { generateSiteGraphSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

/**
 * Static root metadata (no headers()) so marketing pages can be CDN-cached.
 * Per-page generateMetadata / metadata overrides title/description/canonical.
 */
export const metadata: Metadata = buildPageMetadata({
  title: siteConfig.fullName,
  description: siteConfig.description,
  keywords: [
    "Nevada real estate market",
    "Las Vegas homes for sale",
    "Henderson real estate",
    "Dr Jan Duffy",
  ],
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
        {/* Optional lead widget — defer until browser idle */}
        <Script id="widget-tracker" strategy="lazyOnload">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create","WT-XQHVYQWW");
          window.widgetTracker("send","pageview");
        `}</Script>
      </body>
    </html>
  );
}
