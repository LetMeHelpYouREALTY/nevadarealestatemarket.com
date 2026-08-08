/**
 * Google Search Console helpers for nevadarealestatemarket.com
 * (URL-prefix property: https://www.nevadarealestatemarket.com/)
 */

import { siteConfig } from "@/lib/site-config";

export const searchConsoleConfig = {
  /** Preferred property type in GSC */
  preferredProperty: "url-prefix" as const,
  /** Canonical site URL submitted to GSC */
  propertyUrl: `${siteConfig.url}/`,
  /** Apex domain for Domain property (DNS TXT) if used instead */
  domainProperty: "nevadarealestatemarket.com",
  /** Sitemap to submit after verification */
  sitemapUrl: `${siteConfig.url}/sitemap.xml`,
  robotsUrl: `${siteConfig.url}/robots.txt`,
  /** Key URLs to request indexing first */
  priorityUrls: [
    `${siteConfig.url}/`,
    `${siteConfig.url}/nevada-real-estate-market`,
    `${siteConfig.url}/clark-county-housing-market`,
    `${siteConfig.url}/about`,
    `${siteConfig.url}/contact`,
    `${siteConfig.url}/henderson`,
    `${siteConfig.url}/summerlin`,
    `${siteConfig.url}/las-vegas`,
    `${siteConfig.url}/google-business`,
  ],
} as const;

export function isGoogleVerificationConfigured(): boolean {
  return Boolean(process.env.GOOGLE_SITE_VERIFICATION?.trim());
}
