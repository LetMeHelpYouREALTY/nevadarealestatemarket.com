/**
 * Cloudflare Image Loader for Next.js (Cloudflare Pages / next.config.cloudflare.js).
 *
 * Delivery format per Cloudflare Images docs (Apr 2026):
 *   https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
 * Flexible variants (optional):
 *   https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/w=1200,q=85
 *
 * Git copies under /public/images remain the backup when the hash is unset.
 */

import { localPathToImageId } from "./images/src";

export default function cloudflareImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const accountHash = process.env.NEXT_PUBLIC_CF_IMAGES_HASH;
  const useFlexible = process.env.NEXT_PUBLIC_CF_IMAGES_FLEXIBLE === "true";

  if (
    accountHash &&
    !src.startsWith("http://") &&
    !src.startsWith("https://")
  ) {
    const imageId = localPathToImageId(src);
    if (useFlexible) {
      return `https://imagedelivery.net/${accountHash}/${imageId}/w=${width},q=${quality || 85}`;
    }
    return `https://imagedelivery.net/${accountHash}/${imageId}/public`;
  }

  if (src.startsWith("https://imagedelivery.net/")) {
    return src;
  }

  const params = new URLSearchParams({
    w: width.toString(),
    q: (quality || 85).toString(),
    f: "auto",
  });

  return `${src}?${params.toString()}`;
}
