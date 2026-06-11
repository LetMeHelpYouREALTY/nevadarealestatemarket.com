import type { Metadata } from "next";
import Link from "next/link";
import { NevadaMarketLayout } from "@/components/market/NevadaMarketLayout";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  nevadaMarketAreas,
  nevadaMarketFaqs,
  marketResourceLinks,
} from "@/lib/nevada-market-data";
import { generateDatasetSchema, generateItemListSchema } from "@/lib/schema";
import { getValleyMarketDataset } from "@/lib/nevada-market-research";
import { MarketResearchContent } from "@/components/market/MarketResearchContent";
import { getHeroImageByKey } from "@/lib/hero-images";
import SchemaScript from "@/components/SchemaScript";
import { ArrowRight, BarChart3, Home, MapPin } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Nevada Real Estate Market 2026 | Data, Trends & Expert Analysis",
  description:
    "Nevada real estate market statistics for Las Vegas, Henderson, Summerlin & Clark County. Median prices, inventory, forecasts & neighborhood guides from Dr. Jan Duffy, BHHS Nevada. Call (702) 500-1955.",
  path: "/nevada-real-estate-market",
  keywords: [
    "Nevada real estate market",
    "Nevada housing market 2026",
    "Las Vegas home prices",
    "Clark County real estate",
    "Nevada market trends",
  ],
});

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Nevada Real Estate Market", url: "/nevada-real-estate-market" },
];

const datasetSchema = generateDatasetSchema({
  ...getValleyMarketDataset(),
  url: "/nevada-real-estate-market",
});

const areaListSchema = generateItemListSchema({
  name: "Nevada Real Estate Markets by City",
  description: "Major Las Vegas Valley housing markets with median prices and trends",
  items: nevadaMarketAreas.map((area) => ({
    name: `${area.name} Real Estate`,
    url: area.path,
    description: area.summary,
  })),
});

export default function NevadaRealEstateMarketPage() {
  return (
    <>
      <SchemaScript schema={datasetSchema} id="market-dataset-schema" />
      <SchemaScript schema={areaListSchema} id="area-list-schema" />
      <NevadaMarketLayout
        path="/nevada-real-estate-market"
        hero={getHeroImageByKey("nevada-real-estate-market")}
        title="Nevada Real Estate Market"
        metaTitle="Nevada Real Estate Market 2026"
        metaDescription="Comprehensive Nevada and Clark County real estate market data, trends, and expert analysis."
        heroSubtitle="Live market data, neighborhood guides, and expert representation across the Las Vegas Valley — updated for 2026."
        breadcrumbs={breadcrumbs}
        faqs={nevadaMarketFaqs.hub}
      >
        <MarketResearchContent variant="hub" />

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Major Nevada Housing Markets
          </h2>
          <p className="text-slate-600 mb-8 max-w-3xl">
            Clark County drives Nevada&apos;s residential market. Each city offers
            different price points, schools, and lifestyle — compare medians and
            drill into community-level guides.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {nevadaMarketAreas.map((area) => (
              <Link
                key={area.slug}
                href={area.path}
                className="group rounded-xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-md transition"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600">
                    {area.name}
                  </h3>
                  <span className="text-green-600 text-sm font-semibold">
                    {area.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-2">
                  {area.medianPrice}
                  <span className="text-sm font-normal text-slate-500 ml-2">
                    median
                  </span>
                </p>
                <p className="text-slate-600 text-sm mb-3">{area.summary}</p>
                <p className="text-xs text-slate-500">
                  Best for: {area.bestFor}
                </p>
                <span className="inline-flex items-center mt-4 text-blue-600 text-sm font-medium">
                  View {area.name} guide
                  <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16 grid md:grid-cols-3 gap-6">
          <Link
            href="/clark-county-housing-market"
            className="rounded-xl bg-white border p-6 hover:shadow-md transition"
          >
            <MapPin className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Clark County Housing</h3>
            <p className="text-slate-600 text-sm">
              County-wide population, economics, and how cities compare.
            </p>
          </Link>
          <Link
            href="/nevada-housing-forecast"
            className="rounded-xl bg-white border p-6 hover:shadow-md transition"
          >
            <BarChart3 className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">2026 Forecast</h3>
            <p className="text-slate-600 text-sm">
              Appreciation outlook, migration trends, and buyer/seller strategy.
            </p>
          </Link>
          <Link
            href="/compare-communities"
            className="rounded-xl bg-white border p-6 hover:shadow-md transition"
          >
            <Home className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Compare Communities</h3>
            <p className="text-slate-600 text-sm">
              Side-by-side Henderson, Summerlin, Las Vegas & North Las Vegas.
            </p>
          </Link>
        </section>

        <section className="mb-16 grid md:grid-cols-2 gap-6">
          <Link
            href="/no-state-income-tax"
            className="rounded-xl border border-green-200 bg-green-50 p-6 hover:shadow-md transition"
          >
            <h3 className="font-bold text-lg mb-2 text-slate-900">No State Income Tax</h3>
            <p className="text-slate-600 text-sm">
              Why Nevada&apos;s tax advantage drives California relocators — and how much you could save.
            </p>
          </Link>
          <Link
            href="/nevada-buyers-guide"
            className="rounded-xl border border-blue-200 bg-blue-50 p-6 hover:shadow-md transition"
          >
            <h3 className="font-bold text-lg mb-2 text-slate-900">Nevada Buyers Guide</h3>
            <p className="text-slate-600 text-sm">
              Step-by-step process from pre-approval to closing in the Las Vegas Valley.
            </p>
          </Link>
        </section>

        <MarketResearchContent variant="sources" />

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Market Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {marketResourceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-lg border px-4 py-3 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-600 transition"
              >
                {link.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </section>
      </NevadaMarketLayout>
    </>
  );
}
