import { siteConfig } from "@/lib/site-config";

/** Canonical site URL for this deployment (nevadarealestatemarket.com). */
export const SITE_URL = siteConfig.url;

export function sitePath(path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

/** Allowed hostnames for lead capture referrers. */
export const SITE_HOSTNAMES = [
  "nevadarealestatemarket.com",
  "www.nevadarealestatemarket.com",
  "localhost",
  "127.0.0.1",
] as const;

export function isAllowedSiteHostname(hostname: string): boolean {
  const host = hostname.toLowerCase();
  return SITE_HOSTNAMES.some(
    (allowed) => host === allowed || host.endsWith(`.${allowed}`),
  );
}
