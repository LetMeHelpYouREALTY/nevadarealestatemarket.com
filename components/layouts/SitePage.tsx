import type { ReactNode } from "react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import { PageSeo } from "@/components/seo/PageSeo";
import type { BreadcrumbItem, FAQItem } from "@/lib/schema";

type SitePageProps = {
  path: string;
  seoTitle: string;
  seoDescription: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  speakable?: boolean;
  showListings?: boolean;
  children: ReactNode;
};

/**
 * Standard page shell: JSON-LD, nav, content, optional listings strip, footer.
 */
export function SitePage({
  path,
  seoTitle,
  seoDescription,
  breadcrumbs,
  faqs,
  speakable = true,
  showListings = true,
  children,
}: SitePageProps) {
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
      {children}
      {showListings && <RealScoutListings />}
      <Footer />
    </>
  );
}
