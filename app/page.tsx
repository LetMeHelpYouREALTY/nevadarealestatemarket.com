import Navbar from "@/components/layouts/Navbar";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import {
  Phone,
  Home as HomeIcon,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import { getDomainConfig } from "@/lib/domain-config";
import { PageSeo } from "@/components/seo/PageSeo";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  commonFAQs,
  siteConfig,
  agentInfo,
  marketStats,
  officeInfo,
} from "@/lib/site-config";
import { speakableSummaries } from "@/lib/nevada-market-research";
import { getHeroImageByKey } from "@/lib/hero-images";
import { PageHero } from "@/components/sections/PageHero";

/** Static domain config — no headers() so `/` can be edge-cached (PageSpeed TTFB). */
const config = getDomainConfig("nevadarealestatemarket.com");

export const revalidate = 3600;

export const metadata: Metadata = buildPageMetadata({
  title: `${config.heroHeadline} | Dr. Jan Duffy, REALTOR® | BHHS Nevada`,
  description: config.description,
  keywords: config.keywords,
  path: "/",
});

export default function Home() {

  const homepageFaqs = [
    ...commonFAQs.general.slice(0, 3),
    {
      question: `What is the ${config.neighborhood} real estate market like in 2026?`,
      answer: `Dr. Jan Duffy publishes Nevada market data at ${siteConfig.url}/nevada-real-estate-market — including median prices, inventory, and neighborhood comparisons across the Las Vegas Valley. Call ${agentInfo.phone} for a personalized analysis.`,
    },
  ];

  return (
    <>
      <PageSeo
        name={config.neighborhood}
        description={config.description}
        path="/"
        faqs={homepageFaqs}
        speakable
        schemaId="homepage-schema"
      />
      <Navbar />
      <main>
        <PageHero
          hero={getHeroImageByKey("home")}
          badge={config.ctaBadge}
          title={config.heroHeadline}
          subtitle={config.heroSubheadline}
          size="home"
          showBrand
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href="tel:+17025001955"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3.5 text-base font-bold text-white no-underline hover:bg-blue-500 hover:no-underline transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call {agentInfo.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 px-6 py-3.5 text-base font-semibold text-white no-underline backdrop-blur-sm hover:bg-white/20 hover:no-underline transition-colors"
            >
              Get market guidance
            </Link>
          </div>
          <div className="mt-8 w-full max-w-xl min-h-[56px]">
            <div
              dangerouslySetInnerHTML={{
                __html: `<realscout-simple-search agent-encoded-id="${config.realscoutAgentId}"></realscout-simple-search>`,
              }}
            />
          </div>
        </PageHero>

        {/* Value Proposition — below first viewport */}
        <section className="section-shell bg-white/80">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 mb-3">
                Dr. Jan Duffy · BHHS Nevada
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Local market expertise. National brand strength.
              </h2>
              <p className="text-lg text-slate-600">
                Berkshire Hathaway HomeServices Nevada Properties — data-led
                guidance for buyers and sellers across the Las Vegas Valley.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
              {[
                {
                  icon: Shield,
                  title: "Trusted Brand",
                  desc: "Backed by Berkshire Hathaway HomeServices — integrity in every transaction",
                },
                {
                  icon: Users,
                  title: "500+ Families",
                  desc: "Hands-on representation for relocators, downsizers, and luxury buyers",
                },
                {
                  icon: TrendingUp,
                  title: "$127M+ Sold",
                  desc: "Proven results across Henderson, Summerlin, and Las Vegas since 2013",
                },
                {
                  icon: HomeIcon,
                  title: "Full Service",
                  desc: "Buying, selling, 55+, luxury, and investment — one expert, one plan",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="border-t border-blue-100 pt-6">
                  <Icon className="h-7 w-7 text-blue-600 mb-3" aria-hidden />
                  <h3 className="font-bold text-lg mb-2 text-slate-900">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Stats — GEO / AEO speakable facts below the hero */}
        <section className="section-shell bg-slate-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-bold mb-3 tracking-tight">
                {config.neighborhood} snapshot
              </h2>
              <p
                className="speakable-summary text-slate-300 text-sm md:text-base leading-relaxed"
                data-speakable
              >
                {speakableSummaries.hub}
              </p>
              <p className="text-slate-500 text-sm mt-3">
                Data as of {marketStats.lastUpdated}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl">
              {[
                {
                  value: marketStats.lasVegas.medianPriceFormatted,
                  label: "Valley Median Price",
                  sub: marketStats.lasVegas.yearOverYearChange + " YoY",
                },
                {
                  value: String(marketStats.lasVegas.daysOnMarket),
                  label: "Avg Days on Market",
                  sub: "",
                },
                {
                  value: marketStats.lasVegas.activeListings.toLocaleString(),
                  label: "Active Listings",
                  sub: "",
                },
                {
                  value: String(marketStats.lasVegas.inventoryMonths),
                  label: "Months Inventory",
                  sub: "",
                },
              ].map(({ value, label, sub }) => (
                <div key={label} className="border-t border-white/15 pt-4">
                  <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-1">
                    {value}
                  </div>
                  <div className="text-slate-300 text-sm">{label}</div>
                  {sub && (
                    <div className="text-sky-300 text-xs mt-1">{sub}</div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/nevada-real-estate-market"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md font-semibold no-underline hover:no-underline transition-colors"
              >
                Nevada Market Hub
              </Link>
              <Link
                href="/compare-communities"
                className="inline-block border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-md font-semibold no-underline hover:no-underline transition-colors"
              >
                Compare Communities
              </Link>
              <Link
                href="/market-report"
                className="inline-block border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-md font-semibold no-underline hover:no-underline transition-colors"
              >
                Full Market Report
              </Link>
            </div>
          </div>
        </section>

        <RealScoutListings />
        <WhyChooseUs />
        <ReviewsSection />
        <FAQSection />

        <section className="relative overflow-hidden section-shell text-white">
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-slate-900"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.12),_transparent_50%)]"
            aria-hidden
          />
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100 mb-3">
                {siteConfig.name}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                {config.ctaHeadline}
              </h2>
              <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                {config.ctaSubheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+17025001955"
                  className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-md font-bold text-lg no-underline hover:bg-blue-50 hover:no-underline transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call {agentInfo.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/40 bg-white/10 text-white px-8 py-4 rounded-md font-bold text-lg no-underline hover:bg-white/20 hover:no-underline transition-colors"
                >
                  Send a Message
                </Link>
              </div>
              <p className="mt-6 text-blue-100/90 text-sm">
                Dr. Jan Duffy | License {agentInfo.license} |{" "}
                {agentInfo.brokerage} · {officeInfo.address.street},{" "}
                {officeInfo.address.city}, {officeInfo.address.state}{" "}
                {officeInfo.address.zip}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
