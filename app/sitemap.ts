import { MetadataRoute } from "next";
import {
  getAllSitemapEntries,
  toAbsoluteSitemapUrl,
} from "@/lib/seo/sitemap-entries";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return getAllSitemapEntries().map((entry) => ({
    url: toAbsoluteSitemapUrl(entry.path),
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
