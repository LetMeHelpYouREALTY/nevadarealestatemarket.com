/**
 * Cloudflare Images delivery with git (`/public/images`) as the backup source.
 *
 * Hosted Images (Cloudflare docs, 2026): upload once, deliver from
 * https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
 * Custom IDs keep git paths (no extension), e.g. images/hero/modern-nevada-home.
 *
 * Runtime source:
 * - When NEXT_PUBLIC_CF_IMAGES_HASH is set, serve from Cloudflare Images.
 * - Otherwise serve the git-backed file under /public.
 *
 * Do not set the hash until `pnpm images:upload` has succeeded — a CDN 404
 * would break heroes. Do not orange-cloud the Vercel apex; Images CDN is a
 * separate hostname.
 */

/** Cloudflare account ID for the Images API. Not a delivery secret. */
export const CF_IMAGES_ACCOUNT_ID = "2cc579c1ec9e426ed585e933ebf4753b";

/**
 * Public Images delivery hash for this account.
 * Example: https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<id>/public
 */
export const CF_IMAGES_ACCOUNT_HASH = "byE6BTe9lNqo21V57n4aPQ";

export const CF_IMAGES_HASH =
  process.env.NEXT_PUBLIC_CF_IMAGES_HASH?.trim() || "";

export const CF_IMAGES_VARIANT =
  process.env.NEXT_PUBLIC_CF_IMAGES_VARIANT?.trim() || "public";

/** Map a local public path to a Cloudflare Images custom ID (no extension). */
export function localPathToImageId(src: string): string {
  return src.replace(/^\//, "").replace(/\.(jpe?g|png|webp|avif|gif)$/i, "");
}

export function isCloudflareImagesEnabled(): boolean {
  return CF_IMAGES_HASH.length > 0;
}

export function isAgentPortraitSrc(src: string): boolean {
  return (
    src.includes("/images/agent/") || src.endsWith("/images/dr-jan-duffy.jpg")
  );
}

/**
 * Resolve the URL Next.js `<Image>` should load.
 * Agent portraits stay local so we never swap a real likeness for a CDN miss.
 */
export function siteImage(src: string): string {
  if (!src) return src;
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:")
  ) {
    return src;
  }
  if (isAgentPortraitSrc(src)) {
    return src;
  }
  if (!isCloudflareImagesEnabled()) {
    return src;
  }
  const id = localPathToImageId(src);
  return `https://imagedelivery.net/${CF_IMAGES_HASH}/${id}/${CF_IMAGES_VARIANT}`;
}
