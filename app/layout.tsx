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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-blue-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <div id="main-content">{children}</div>
        {/* RealScout: load once globally, deferred for LCP (user rule + PageSpeed) */}
        <Script
          id="realscout-web-components"
          type="module"
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="lazyOnload"
        />
        {/* Google Tag */}
        {process.env.NEXT_PUBLIC_GOOGLE_TAG_ID && (
          <>
            <Script
              id="google-tag"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-tag-config" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}');
              `}
            </Script>
          </>
        )}
        {/* Facebook Pixel */}
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
        {/* Analytics after idle — avoid competing with LCP */}
        <Analytics />
        {/* Lead widget: idle + delay / first interaction — keeps WidgetBe off critical path */}
        <DeferredWidgetBe />
      </body>
    </html>
  );
}
