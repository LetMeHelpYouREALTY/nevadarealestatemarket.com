/**
 * Cloudflare Images delivery with git (`/public/images`) as the backup source.
 *
 * Per Cloudflare Images docs (custom ID + imagedelivery.net, Apr 2026):
 * https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
 *
 * Runtime source:
 * - When NEXT_PUBLIC_CF_IMAGES_HASH is set, serve from Cloudflare Images.
 * - Otherwise serve the git-backed file under /public.
 *
 * Do not orange-cloud the Vercel apex; Images CDN is a separate hostname.
 */

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

/**
 * Resolve the URL Next.js `<Image>` should load.
 * Agent portraits stay local so we never swap a real likeness for a CDN miss.
 */
export function siteImage(src: string): string {
  if (!src) return src;
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }
  if (src.includes("/images/agent/") || src.endsWith("/images/dr-jan-duffy.jpg")) {
    return src;
  }
  if (!isCloudflareImagesEnabled()) {
    return src;
  }
  const id = localPathToImageId(src);
  return `https://imagedelivery.net/${CF_IMAGES_HASH}/${id}/${CF_IMAGES_VARIANT}`;
}
