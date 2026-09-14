import type { ReactNode } from "react";
import Image from "next/image";
import { siteImage } from "@/lib/images/src";
import { getSectionImage } from "@/lib/images/section-images";

type SectionImageProps = {
  heading: string;
  src?: string;
  alt?: string;
  /** Optional body copy shown beside the image */
  children?: ReactNode;
  reverse?: boolean;
  className?: string;
  sizes?: string;
  /** Image-only (no split layout) */
  bleed?: boolean;
};

/**
 * H2/H3 photography matched to the heading. Git file is the backup;
 * Cloudflare Images is used when NEXT_PUBLIC_CF_IMAGES_HASH is set.
 */
export function SectionImage({
  heading,
  src,
  alt,
  children,
  reverse = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 560px",
  bleed = false,
}: SectionImageProps) {
  const matched = getSectionImage(heading);
  const imageSrc = siteImage(src ?? matched.src);
  const imageAlt = alt ?? matched.alt;

  if (bleed) {
    return (
      <figure className={`relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-200 ${className}`.trim()}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </figure>
    );
  }

  return (
    <div
      className={`grid items-center gap-8 md:grid-cols-2 ${reverse ? "md:[&>figure]:order-2" : ""} ${className}`.trim()}
    >
      <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </figure>
      {children ? <div>{children}</div> : null}
    </div>
  );
}

type HeadingPhotoProps = {
  heading: string;
  src?: string;
  alt?: string;
  className?: string;
};

/** Compact 16:9 figure placed directly under an H2/H3. */
export function HeadingPhoto({
  heading,
  src,
  alt,
  className = "",
}: HeadingPhotoProps) {
  const matched = getSectionImage(heading);
  return (
    <figure
      className={`relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-200 ${className}`.trim()}
    >
      <Image
        src={siteImage(src ?? matched.src)}
        alt={alt ?? matched.alt}
        fill
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-cover"
      />
    </figure>
  );
}
