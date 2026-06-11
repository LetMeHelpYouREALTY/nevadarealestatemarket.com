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
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { PageSeo } from "@/components/seo/PageSeo";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { commonFAQs, siteConfig, agentInfo, marketStats } from "@/lib/site-config";
import { speakableSummaries } from "@/lib/nevada-market-research";
import { getHeroImageByKey } from "@/lib/hero-images";
import { PageHero } from "@/components/sections/PageHero";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getPageDomainConfig();
  return buildPageMetadata({
    title: `${config.heroHeadline} | Dr. Jan Duffy, REALTOR® | BHHS Nevada`,
    description: config.description,
    keywords: config.keywords,
    path: "/",
  });
}

export default async function Home() {
  const config = await getPageDomainConfig();

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
          className="pt-24"
        >
          <div className="mb-8 flex justify-center">
            <div
              dangerouslySetInnerHTML={{
                __html: `<realscout-simple-search agent-encoded-id="${config.realscoutAgentId}"></realscout-simple-search>`,
              }}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">500+</span>
                <span>Families Helped</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">30+ Years</span>
                <span>Las Vegas Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">4.9★</span>
                <span>Client Rating</span>
              </div>
          </div>
        </PageHero>

        {/* Value Proposition */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Work With Dr. Jan Duffy?
              </h2>
              <p className="text-lg text-slate-600">
                Berkshire Hathaway HomeServices Nevada Properties — the most
                trusted name in Las Vegas real estate.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Trusted Brand",
                  desc: "Backed by Warren Buffett's Berkshire Hathaway — unmatched integrity",
                },
                {
                  icon: Users,
                  title: "50K+ Network",
                  desc: "Global referral network for seamless moves to or from any market",
                },
                {
                  icon: TrendingUp,
                  title: "$127M+ Sold",
                  desc: "Proven results across every Las Vegas neighborhood since 2008",
                },
                {
                  icon: HomeIcon,
                  title: "Full Service",
                  desc: "Buying, selling, 55+, luxury, investment — one expert handles it all",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center p-6">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Stats */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">
                {config.neighborhood} Real Estate Market
              </h2>
              <p className="speakable-summary text-slate-300 max-w-3xl mx-auto text-sm md:text-base" data-speakable>
                {speakableSummaries.hub}
              </p>
              <p className="text-slate-500 text-sm mt-3">Data as of {marketStats.lastUpdated}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
                <div key={label} className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-1">
                    {value}
                  </div>
                  <div className="text-slate-300 text-sm">{label}</div>
                  {sub && (
                    <div className="text-green-400 text-xs mt-1">{sub}</div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/nevada-real-estate-market"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Nevada Market Hub
              </Link>
              <Link
                href="/compare-communities"
                className="inline-block border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Compare Communities
              </Link>
              <Link
                href="/market-report"
                className="inline-block border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-md font-semibold transition-colors"
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

        {/* Domain-Specific CTA */}
        <section className="py-16 md:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {config.ctaHeadline}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {config.ctaSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025001955"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-1955
              </a>
              <Link
                href="/contact"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Send a Message
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Dr. Jan Duffy | License S.0197614.LLC | Berkshire Hathaway
              HomeServices Nevada Properties
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
