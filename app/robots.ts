import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Google Search Console–ready robots.txt
 * - Allows Googlebot full crawl (except API/admin)
 * - Declares www sitemap + host
 * - Keeps AI crawlers allowed for GEO/AEO citations
 */
export default function robots(): MetadataRoute.Robots {
  const host = siteConfig.url.replace(/^https?:\/\//, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/monitoring/",
          // Dead WordPress paths (site is Next.js) — stop GSC 403 crawls
          "/wp-admin/",
          "/wp-content/",
          "/wp-includes/",
          "/wp-login.php",
          "/xmlrpc.php",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/monitoring/",
          "/wp-admin/",
          "/wp-content/",
          "/wp-includes/",
          "/wp-login.php",
          "/xmlrpc.php",
        ],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/images/", "/_next/image"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Claude-Web",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "anthropic-ai",
          "Bytespider",
        ],
        allow: ["/", "/llms.txt", "/images/"],
        disallow: ["/api/", "/admin/", "/monitoring/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host,
  };
}
