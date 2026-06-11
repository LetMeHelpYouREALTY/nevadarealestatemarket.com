import type { Metadata } from "next";
import Link from "next/link";
import { NevadaMarketLayout } from "@/components/market/NevadaMarketLayout";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { nevadaMarketFaqs } from "@/lib/nevada-market-data";
import { marketStats } from "@/lib/site-config";
import SchemaScript from "@/components/SchemaScript";
import { generateArticleSchema } from "@/lib/schema";
import { getHeroImageByKey } from "@/lib/hero-images";
import { CheckCircle, AlertCircle } from "lucide-react";
import { MarketResearchContent } from "@/components/market/MarketResearchContent";

export const metadata: Metadata = buildPageMetadata({
  title: "Nevada Housing Forecast 2026 | Las Vegas Market Outlook",
  description:
    "Nevada housing forecast for 2026 — Las Vegas appreciation outlook, migration trends, inventory projections, and buyer/seller strategies from Dr. Jan Duffy, BHHS Nevada.",
  path: "/nevada-housing-forecast",
  keywords: [
    "Nevada housing forecast 2026",
    "Las Vegas real estate forecast",
    "Nevada home price prediction",
    "Clark County housing outlook",
  ],
  type: "article",
  publishedTime: "2026-06-01",
  modifiedTime: "2026-06-01",
});

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Nevada Market", url: "/nevada-real-estate-market" },
  { name: "2026 Forecast", url: "/nevada-housing-forecast" },
];

const articleSchema = generateArticleSchema({
  headline: "Nevada Housing Forecast 2026 — Las Vegas Valley Outlook",
  description:
    "Expert forecast for Clark County and Nevada residential real estate in 2026 including appreciation, migration, and inventory trends.",
  url: "/nevada-housing-forecast",
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
});

const forecastPoints = {
  bullish: [
    "California migration continues — 37% of buyers still originate from CA",
    "Data center and tech expansion adds high-paying jobs",
    "~2.9 months inventory — balanced market with buyer leverage returning",
    "No state income tax amplifies purchasing power vs. coastal markets",
    "Luxury segment ($1M+) seeing strongest appreciation in Summerlin & Henderson",
  ],
  cautious: [
    "Interest rate sensitivity — buyers must budget for rate fluctuations",
    "New construction supply growing in North Las Vegas and Skye Canyon",
    "Overpriced listings still sit 60+ days regardless of market strength",
    "Insurance and HOA costs rising — factor into monthly payments",
    "Investor activity moderated compared to 2021–2022 peaks",
  ],
};

export default function NevadaHousingForecastPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} id="forecast-article-schema" />
      <NevadaMarketLayout
        path="/nevada-housing-forecast"
        hero={getHeroImageByKey("nevada-housing-forecast")}
        title="Nevada Housing Forecast 2026"
        metaTitle="Nevada Housing Forecast 2026"
        metaDescription="Las Vegas Valley housing outlook with appreciation trends, risks, and strategies for buyers and sellers."
        heroBadge="2026 Market Outlook"
        heroSubtitle="What to expect for home prices, inventory, and migration across Clark County this year."
        breadcrumbs={breadcrumbs}
        faqs={nevadaMarketFaqs.forecast}
      >
        <MarketResearchContent variant="forecast" />

        <section className="mb-16 grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Bullish Factors
            </h2>
            <ul className="space-y-3">
              {forecastPoints.bullish.map((point) => (
                <li key={point} className="text-slate-700 text-sm flex gap-2">
                  <span className="text-green-600 shrink-0">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
              <AlertCircle className="h-6 w-6 text-amber-600" />
              Watch Factors
            </h2>
            <ul className="space-y-3">
              {forecastPoints.cautious.map((point) => (
                <li key={point} className="text-slate-700 text-sm flex gap-2">
                  <span className="text-amber-600 shrink-0">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Segment Outlook
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border p-6">
              <h3 className="font-bold text-lg mb-2">Entry-Level</h3>
              <p className="text-sm text-slate-600">
                North Las Vegas and east valley — steady demand, more new supply.
                Expect 3–5% appreciation. Strong for first-time buyers with
                assistance programs.
              </p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-bold text-lg mb-2">Move-Up</h3>
              <p className="text-sm text-slate-600">
                Henderson, Green Valley, Inspirada — 4–6% appreciation. Low DOM
                for well-priced homes. Ideal for families relocating from
                California.
              </p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-bold text-lg mb-2">Luxury ($1M+)</h3>
              <p className="text-sm text-slate-600">
                Summerlin, The Ridges, Lake Las Vegas — 6–8%+ in premier
                corridors. Limited land supports long-term value. Discretion and
                local expertise essential.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl bg-blue-950 text-white p-8">
          <h2 className="text-xl font-bold mb-4">Buyer & Seller Strategy for 2026</h2>
          <div className="grid md:grid-cols-2 gap-6 text-blue-100 text-sm">
            <div>
              <h3 className="font-semibold text-white mb-2">Buyers</h3>
              <p>
                Get pre-approved early, target neighborhoods with appreciation
                tailwinds, and don&apos;t skip inspections on older stock. Use a
                buyer&apos;s agent — builder sales reps work for the builder.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Sellers</h3>
              <p>
                Price to market on day one, invest in professional media, and
                leverage BHHS global marketing. Henderson luxury listings average
                24 DOM when priced correctly.
              </p>
            </div>
          </div>
          <Link
            href="/market-report"
            className="inline-block mt-6 text-yellow-400 font-semibold hover:text-yellow-300"
          >
            Read the full January 2026 market report →
          </Link>
        </section>
      </NevadaMarketLayout>
    </>
  );
}
