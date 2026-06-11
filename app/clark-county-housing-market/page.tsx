import type { Metadata } from "next";
import Link from "next/link";
import { NevadaMarketLayout } from "@/components/market/NevadaMarketLayout";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  clarkCountyHighlights,
  nevadaMarketAreas,
  nevadaMarketFaqs,
} from "@/lib/nevada-market-data";
import { marketStats } from "@/lib/site-config";
import { getHeroImageByKey } from "@/lib/hero-images";
import { Building2, Users, TrendingUp } from "lucide-react";
import { MarketResearchContent } from "@/components/market/MarketResearchContent";
import { generateDatasetSchema } from "@/lib/schema";
import { getValleyMarketDataset } from "@/lib/nevada-market-research";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = buildPageMetadata({
  title: "Clark County Housing Market 2026 | Nevada Home Prices & Trends",
  description:
    "Clark County Nevada housing market data — Las Vegas, Henderson, North Las Vegas median prices, inventory, and economic drivers. Expert analysis from Dr. Jan Duffy. (702) 500-1955.",
  path: "/clark-county-housing-market",
  keywords: [
    "Clark County housing market",
    "Clark County Nevada real estate",
    "Las Vegas Valley home prices",
    "Nevada county housing data",
  ],
});

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Nevada Market", url: "/nevada-real-estate-market" },
  { name: "Clark County", url: "/clark-county-housing-market" },
];

const datasetSchema = generateDatasetSchema({
  ...getValleyMarketDataset(),
  url: "/clark-county-housing-market",
});

export default function ClarkCountyHousingMarketPage() {
  return (
    <>
      <SchemaScript schema={datasetSchema} id="clark-dataset-schema" />
    <NevadaMarketLayout
      path="/clark-county-housing-market"
      hero={getHeroImageByKey("clark-county-housing-market")}
      title="Clark County Housing Market"
      metaTitle="Clark County Nevada Housing Market 2026"
      metaDescription="Clark County housing statistics, city comparisons, and economic drivers for Nevada home buyers and sellers."
      heroBadge="Clark County Market Data"
      heroSubtitle="Population, economics, and city-by-city home prices across Nevada's largest county."
      breadcrumbs={breadcrumbs}
      faqs={nevadaMarketFaqs.clarkCounty}
      stats={[
        {
          value: marketStats.lasVegas.medianPriceFormatted,
          label: "County Median (Valley)",
          trend: marketStats.lasVegas.yearOverYearChange + " YoY",
        },
        {
          value: clarkCountyHighlights.population,
          label: "Population",
        },
        {
          value: String(marketStats.lasVegas.activeListings),
          label: "Active Listings",
        },
        {
          value: `${marketStats.lasVegas.inventoryMonths} mo`,
          label: "Inventory",
        },
      ]}
    >
      <MarketResearchContent variant="clarkCounty" />

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          About Clark County, Nevada
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="rounded-xl border p-6">
            <Users className="h-7 w-7 text-blue-600 mb-3" />
            <h3 className="font-bold mb-2">Population</h3>
            <p className="text-2xl font-bold text-slate-900">
              {clarkCountyHighlights.population}
            </p>
            <p className="text-sm text-slate-500 mt-1">County seat: Las Vegas</p>
          </div>
          <div className="rounded-xl border p-6">
            <Building2 className="h-7 w-7 text-blue-600 mb-3" />
            <h3 className="font-bold mb-2">Major Cities</h3>
            <ul className="text-slate-600 text-sm space-y-1">
              {clarkCountyHighlights.majorCities.map((city) => (
                <li key={city}>• {city}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border p-6">
            <TrendingUp className="h-7 w-7 text-blue-600 mb-3" />
            <h3 className="font-bold mb-2">Growth Drivers</h3>
            <ul className="text-slate-600 text-sm space-y-1">
              {clarkCountyHighlights.economicDrivers.slice(0, 4).map((d) => (
                <li key={d}>• {d}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed max-w-3xl">
          Clark County accounts for the vast majority of Nevada&apos;s residential
          sales. No state income tax, corporate relocations, and California equity
          migration continue to fuel demand — while limited land in premium
          master-planned communities keeps luxury inventory tight.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          City-by-City Median Prices
        </h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-900">City</th>
                <th className="px-6 py-4 font-semibold text-slate-900">Median</th>
                <th className="px-6 py-4 font-semibold text-slate-900">YoY</th>
                <th className="px-6 py-4 font-semibold text-slate-900">DOM</th>
                <th className="px-6 py-4 font-semibold text-slate-900">Guide</th>
              </tr>
            </thead>
            <tbody>
              {nevadaMarketAreas.map((area) => (
                <tr key={area.slug} className="border-b last:border-0">
                  <td className="px-6 py-4 font-medium">{area.name}</td>
                  <td className="px-6 py-4 text-blue-600 font-semibold">
                    {area.medianPrice}
                  </td>
                  <td className="px-6 py-4 text-green-600">{area.change}</td>
                  <td className="px-6 py-4 text-slate-600">
                    {area.daysOnMarket ?? "—"} days
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={area.path}
                      className="text-blue-600 hover:underline"
                    >
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl bg-slate-50 p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          Why Clark County Matters for Nevada Buyers
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-slate-600">
          <li className="flex gap-2">
            <span className="text-blue-600 font-bold">✓</span>
            Zero state income tax — major draw for California relocators
          </li>
          <li className="flex gap-2">
            <span className="text-blue-600 font-bold">✓</span>
            Diverse inventory from $350K starter homes to $5M+ estates
          </li>
          <li className="flex gap-2">
            <span className="text-blue-600 font-bold">✓</span>
            Strong rental demand supports investment purchases
          </li>
          <li className="flex gap-2">
            <span className="text-blue-600 font-bold">✓</span>
            World-class amenities without coastal price tags
          </li>
        </ul>
      </section>
    </NevadaMarketLayout>
    </>
  );
}
