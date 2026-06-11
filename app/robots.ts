import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
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
        allow: ["/", "/llms.txt"],
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url.replace(/^https?:\/\//, ""),
  };
}
