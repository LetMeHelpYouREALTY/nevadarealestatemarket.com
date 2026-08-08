import type { ReactNode } from "react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHero } from "@/components/sections/PageHero";
import { getHeroImage, type HeroImage } from "@/lib/hero-images";
import type { BreadcrumbItem, FAQItem } from "@/lib/schema";

type SitePageProps = {
  path: string;
  seoTitle: string;
  seoDescription: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  speakable?: boolean;
  /**
   * When there is no SitePage hero, optionally render RealScout after nav.
   * When a hero is present, PageHero already mounts RealScout below it.
   */
  showListings?: boolean;
  /** When set, renders a global PageHero above children (+ RealScout under it) */
  heroTitle?: string;
  heroSubtitle?: string;
  heroBadge?: string;
  hero?: HeroImage;
  children: ReactNode;
};

/**
 * Standard page shell: JSON-LD, nav, optional hero + RealScout, content, footer.
 */
export function SitePage({
  path,
  seoTitle,
  seoDescription,
  breadcrumbs,
  faqs,
  speakable = true,
  showListings = true,
  heroTitle,
  heroSubtitle,
  heroBadge,
  hero,
  children,
}: SitePageProps) {
  const resolvedHero = heroTitle ? hero ?? getHeroImage(path) : undefined;

  return (
    <>
      <PageSeo
        name={seoTitle}
        description={seoDescription}
        path={path}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        speakable={speakable}
      />
      <Navbar />
      {resolvedHero && heroTitle && (
        <PageHero
          hero={resolvedHero}
          badge={heroBadge}
          title={heroTitle}
          subtitle={heroSubtitle}
          showBrand
        />
      )}
      {/* No SitePage hero → still show RealScout near top when requested */}
      {!resolvedHero && showListings && <RealScoutListings />}
      {children}
      <Footer />
    </>
  );
}
