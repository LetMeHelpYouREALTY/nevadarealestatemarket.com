import type { MetadataRoute } from "next";
import {
  getAllSitemapEntries,
  toAbsoluteSitemapUrl,
} from "@/lib/seo/sitemap-entries";

/**
 * Omit <lastmod>. Google uses it only when it matches a real content change
 * (Search Central, updated 2026-07-08). A single build-time stamp on every
 * URL is the pattern Gary Illyes said (2026-07-16) is better left out.
 * Dated lastmods belong in a later slice that shares one date with on-page
 * schema, bumped in the same change as the content.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return getAllSitemapEntries().map((entry) => ({
    url: toAbsoluteSitemapUrl(entry.path),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
