import type { Metadata } from "next";
import Link from "next/link";
import { NevadaMarketLayout } from "@/components/market/NevadaMarketLayout";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { nevadaMarketAreas, nevadaMarketFaqs } from "@/lib/nevada-market-data";
import { Check, Minus } from "lucide-react";
import { getHeroImageByKey } from "@/lib/hero-images";
import { MarketResearchContent } from "@/components/market/MarketResearchContent";

export const metadata: Metadata = buildPageMetadata({
  title: "Compare Las Vegas Communities | Henderson vs Summerlin vs NLV",
  description:
    "Compare Henderson, Summerlin, Las Vegas & North Las Vegas — median prices, lifestyle, schools, and who each community is best for. Nevada real estate guide by Dr. Jan Duffy.",
  path: "/compare-communities",
  keywords: [
    "Henderson vs Summerlin",
    "compare Las Vegas neighborhoods",
    "best place to live Las Vegas",
    "Nevada community comparison",
  ],
});

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Nevada Market", url: "/nevada-real-estate-market" },
  { name: "Compare Communities", url: "/compare-communities" },
];

type CompareRow = {
  factor: string;
  henderson: string;
  summerlin: string;
  lasVegas: string;
  northLV: string;
};

const comparisonRows: CompareRow[] = [
  {
    factor: "Median Price",
    henderson: "$492,000",
    summerlin: "$625,000",
    lasVegas: "$482,000",
    northLV: "$420,000",
  },
  {
    factor: "YoY Change",
    henderson: "+1.0%",
    summerlin: "+4.5%",
    lasVegas: "+3.2%",
    northLV: "+1.0%",
  },
  {
    factor: "Days on Market",
    henderson: "51",
    summerlin: "35",
    lasVegas: "38",
    northLV: "42",
  },
  {
    factor: "Schools",
    henderson: "Excellent",
    summerlin: "Top-rated",
    lasVegas: "Varies by zone",
    northLV: "Improving",
  },
  {
    factor: "Safety",
    henderson: "Very high",
    summerlin: "Very high",
    lasVegas: "Varies",
    northLV: "Moderate",
  },
  {
    factor: "Luxury Options",
    henderson: "Lake Las Vegas, Seven Hills",
    summerlin: "The Ridges, guard-gated",
    lasVegas: "Strip high-rises, golf",
    northLV: "Limited",
  },
  {
    factor: "New Construction",
    henderson: "Inspirada, Cadence",
    summerlin: "Skye Canyon edge",
    lasVegas: "Moderate",
    northLV: "High volume",
  },
  {
    factor: "Best For",
    henderson: "Families, CA relocators",
    summerlin: "Upscale families, outdoor",
    lasVegas: "Diversity, urban access",
    northLV: "First-time buyers, investors",
  },
];

function RatingIcon({ value }: { value: string }) {
  if (value === "Excellent" || value === "Top-rated" || value === "Very high" || value === "High volume") {
    return <Check className="h-4 w-4 text-green-600 inline mr-1" />;
  }
  if (value === "Varies" || value === "Moderate" || value === "Limited") {
    return <Minus className="h-4 w-4 text-amber-500 inline mr-1" />;
  }
  return null;
}

export default function CompareCommunitiesPage() {
  return (
    <NevadaMarketLayout
      path="/compare-communities"
      hero={getHeroImageByKey("compare-communities")}
      title="Compare Nevada Communities"
      metaTitle="Compare Las Vegas Valley Communities"
      metaDescription="Side-by-side comparison of Henderson, Summerlin, Las Vegas, and North Las Vegas housing markets."
      heroBadge="Community Comparison"
      heroSubtitle="Median prices, lifestyle, schools, and who each city fits best — so you can narrow your search before touring homes."
      breadcrumbs={breadcrumbs}
      faqs={nevadaMarketFaqs.compare}
    >
      <section className="mb-16 overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm border rounded-xl overflow-hidden">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="px-4 py-4 text-left font-semibold">Factor</th>
              <th className="px-4 py-4 text-left font-semibold">Henderson</th>
              <th className="px-4 py-4 text-left font-semibold">Summerlin</th>
              <th className="px-4 py-4 text-left font-semibold">Las Vegas</th>
              <th className="px-4 py-4 text-left font-semibold">North Las Vegas</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => (
              <tr
                key={row.factor}
                className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                <td className="px-4 py-3 font-medium text-slate-900 border-t">
                  {row.factor}
                </td>
                <td className="px-4 py-3 border-t text-slate-700">
                  <RatingIcon value={row.henderson} />
                  {row.henderson}
                </td>
                <td className="px-4 py-3 border-t text-slate-700">
                  <RatingIcon value={row.summerlin} />
                  {row.summerlin}
                </td>
                <td className="px-4 py-3 border-t text-slate-700">
                  <RatingIcon value={row.lasVegas} />
                  {row.lasVegas}
                </td>
                <td className="px-4 py-3 border-t text-slate-700">
                  <RatingIcon value={row.northLV} />
                  {row.northLV}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {nevadaMarketAreas.map((area) => (
          <div key={area.slug} className="rounded-xl border p-5">
            <h3 className="font-bold text-lg text-slate-900 mb-2">{area.name}</h3>
            <p className="text-2xl font-bold text-blue-600 mb-2">{area.medianPrice}</p>
            <p className="text-sm text-slate-600 mb-4">{area.summary}</p>
            <Link
              href={area.path}
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              Explore {area.name} →
            </Link>
          </div>
        ))}
      </section>

      <MarketResearchContent variant="compare" />

      <section className="rounded-xl bg-slate-50 p-8 text-center">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          Still deciding? Get a personalized shortlist.
        </h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Tell me your budget, commute, and must-haves — I&apos;ll recommend 2–3
          communities worth touring before you write offers.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition"
        >
          Free Community Consultation
        </Link>
      </section>
    </NevadaMarketLayout>
  );
}
