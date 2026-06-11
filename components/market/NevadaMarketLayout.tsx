import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import { PageSeo } from "@/components/seo/PageSeo";
import {
  agentInfo,
  officeInfo,
  businessHours,
  marketStats,
} from "@/lib/site-config";
import type { FAQItem, BreadcrumbItem } from "@/lib/schema";
import type { HeroImage } from "@/lib/hero-images";
import { PageHero } from "@/components/sections/PageHero";
import { Phone, MapPin, Clock, TrendingUp } from "lucide-react";

type StatCard = {
  value: string;
  label: string;
  trend?: string;
};

type NevadaMarketLayoutProps = {
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: HeroImage;
  heroBadge?: string;
  heroSubtitle: string;
  breadcrumbs: BreadcrumbItem[];
  faqs: FAQItem[];
  stats?: StatCard[];
  children: ReactNode;
  speakable?: boolean;
};

export function NevadaMarketLayout({
  path,
  title,
  metaTitle,
  metaDescription,
  hero,
  heroBadge = "Nevada Market Intelligence",
  heroSubtitle,
  breadcrumbs,
  faqs,
  stats,
  children,
  speakable = true,
}: NevadaMarketLayoutProps) {
  const defaultStats: StatCard[] = [
    {
      value: marketStats.lasVegas.medianPriceFormatted,
      label: "Valley Median Price",
      trend: marketStats.lasVegas.yearOverYearChange + " YoY",
    },
    {
      value: String(marketStats.lasVegas.daysOnMarket),
      label: "Days on Market",
    },
    {
      value: String(marketStats.lasVegas.inventoryMonths),
      label: "Months Inventory",
    },
    {
      value: marketStats.lasVegas.activeListings.toLocaleString(),
      label: "Active Listings",
    },
  ];

  const displayStats = stats ?? defaultStats;

  return (
    <>
      <PageSeo
        name={metaTitle}
        description={metaDescription}
        path={path}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        speakable={speakable}
        dateModified="2026-06-11"
      />
      <Navbar />
      <PageHero
        hero={hero}
        badge={heroBadge}
        title={title}
        subtitle={heroSubtitle}
        className="pt-24"
      />
      <main className="pb-16">
        <div className="container mx-auto px-4">
          <nav className="max-w-6xl mx-auto mb-6 mt-8 text-sm text-slate-500">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.url}>
                {i > 0 && " / "}
                {i < breadcrumbs.length - 1 ? (
                  <Link href={crumb.url} className="hover:text-blue-600">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-slate-900">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>

          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-10 max-w-6xl mx-auto">
            <h2 className="text-xl font-bold mb-6 text-center">
              Market Snapshot | {marketStats.lastUpdated}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {displayStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                  {stat.trend && (
                    <div className="flex items-center justify-center mt-1 text-green-400 text-xs">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {stat.trend}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="max-w-6xl mx-auto">{children}</div>

          <section className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-lg border border-slate-200 bg-white p-5"
                >
                  <summary className="cursor-pointer font-semibold text-slate-900 list-none flex justify-between items-center">
                    {faq.question}
                    <span className="text-blue-600 group-open:rotate-45 transition-transform text-xl">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-slate-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="max-w-6xl mx-auto mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Get Nevada Market Guidance
                </h2>
                <p className="text-slate-600 mb-6">
                  Dr. Jan Duffy provides data-backed market analysis across Clark
                  County — free consultations, no obligation.
                </p>
                <div className="space-y-3 text-sm text-slate-700">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <a href={agentInfo.phoneTel} className="hover:text-blue-600 font-medium">
                      {agentInfo.phone}
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                    {officeInfo.address.full}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    {businessHours.display}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="text-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/home-valuation"
                  className="text-center rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition"
                >
                  Free Home Valuation
                </Link>
                <a
                  href={officeInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-white transition"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
