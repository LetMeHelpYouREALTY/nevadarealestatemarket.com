import type { ReactNode } from "react";
import Image from "next/image";
import type { HeroImage } from "@/lib/hero-images";

type PageHeroProps = {
  hero: HeroImage;
  badge?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  /** Dark overlay for text contrast (0–100) */
  overlay?: number;
  className?: string;
};

/**
 * Full-width hero with optimized background image (16:9, priority load).
 */
export function PageHero({
  hero,
  badge,
  title,
  subtitle,
  children,
  overlay = 55,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`relative min-h-[320px] md:min-h-[420px] flex items-center overflow-hidden ${className}`.trim()}
    >
      <Image
        src={hero.src}
        alt={hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/50"
        style={{ opacity: overlay / 100 }}
        aria-hidden
      />
      <div className="relative z-10 w-full px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-5xl">
          {badge && (
            <span className="inline-block bg-blue-600/90 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              {badge}
            </span>
          )}
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight speakable-summary max-w-4xl"
            data-speakable
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-lg md:text-xl text-white/85 max-w-3xl speakable-summary"
              data-speakable
            >
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
