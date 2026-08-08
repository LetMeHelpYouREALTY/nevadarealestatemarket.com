import type { ReactNode } from "react";
import Image from "next/image";
import type { HeroImage } from "@/lib/hero-images";
import { siteConfig } from "@/lib/site-config";

type PageHeroProps = {
  hero: HeroImage;
  badge?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  /** Dark overlay for text contrast (0–100) */
  overlay?: number;
  className?: string;
  /** Show site brand line above the H1 (GEO / brand recognition) */
  showBrand?: boolean;
  /** Taller homepage hero */
  size?: "default" | "home";
};

/**
 * Full-bleed hero with optimized background, brand signal, and subtle motion.
 * Respects prefers-reduced-motion.
 */
export function PageHero({
  hero,
  badge,
  title,
  subtitle,
  children,
  overlay = 58,
  className = "",
  showBrand = true,
  size = "default",
}: PageHeroProps) {
  const minH =
    size === "home"
      ? "min-h-[88vh] md:min-h-[92vh]"
      : "min-h-[340px] md:min-h-[440px]";

  return (
    <section
      className={`relative flex items-end md:items-center overflow-hidden ${minH} ${className}`.trim()}
    >
      <Image
        src={hero.src}
        alt={hero.alt}
        fill
        priority
        quality={size === "home" ? 70 : 75}
        sizes="100vw"
        className={
          hero.src.includes("/images/agent/")
            ? "object-cover object-top"
            : "object-cover object-center"
        }
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/35 md:bg-gradient-to-r md:from-slate-950/95 md:via-slate-900/70 md:to-slate-900/25"
        style={{ opacity: overlay / 100 }}
        aria-hidden
      />
      {/* Atmospheric brand wash — not a flat single-color field */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.28),_transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 w-full px-4 pb-16 pt-28 md:py-24">
        <div className="container mx-auto max-w-5xl">
          {showBrand && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 motion-safe:animate-fade-up">
              {siteConfig.name}
            </p>
          )}
          {badge && (
            <span className="mb-4 inline-block rounded-sm bg-blue-600/95 px-3 py-1 text-sm font-semibold text-white motion-safe:animate-fade-up">
              {badge}
            </span>
          )}
          <h1
            className="mb-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl speakable-summary motion-safe:animate-fade-up motion-safe:animation-delay-100"
            data-speakable
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="max-w-2xl text-lg text-white/88 md:text-xl speakable-summary motion-safe:animate-fade-up motion-safe:animation-delay-200"
              data-speakable
            >
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-8 motion-safe:animate-fade-up motion-safe:animation-delay-300">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
