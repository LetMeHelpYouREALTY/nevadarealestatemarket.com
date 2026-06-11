import type { Metadata } from "next";
import Link from "next/link";
import { NevadaMarketLayout } from "@/components/market/NevadaMarketLayout";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { agentInfo } from "@/lib/site-config";
import { nevadaMarketFaqs } from "@/lib/nevada-market-data";
import { MarketResearchContent } from "@/components/market/MarketResearchContent";
import { DollarSign, Sun, Home, TrendingUp } from "lucide-react";
import { getHeroImageByKey } from "@/lib/hero-images";

export const metadata: Metadata = buildPageMetadata({
  title: "No State Income Tax Nevada | Why Buyers Relocate to Las Vegas",
  description:
    "Nevada has zero state income tax — a major reason California and high-tax state relocators choose Las Vegas. Savings calculator, housing comparison, and expert guidance from Dr. Jan Duffy.",
  path: "/no-state-income-tax",
  keywords: [
    "Nevada no state income tax",
    "Las Vegas tax benefits",
    "California to Nevada relocation",
    "Nevada tax advantages real estate",
  ],
});

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Nevada Market", url: "/nevada-real-estate-market" },
  { name: "No State Income Tax", url: "/no-state-income-tax" },
];

const savingsExamples = [
  { income: "$150,000", caTax: "~$9,500/yr", nvTax: "$0", savings: "~$9,500" },
  { income: "$250,000", caTax: "~$18,000/yr", nvTax: "$0", savings: "~$18,000" },
  { income: "$500,000", caTax: "~$45,000/yr", nvTax: "$0", savings: "~$45,000" },
];

export default function NoStateIncomeTaxPage() {
  return (
    <NevadaMarketLayout
      path="/no-state-income-tax"
      hero={getHeroImageByKey("no-state-income-tax")}
      title="Nevada: No State Income Tax"
      metaTitle="Nevada No State Income Tax — Relocation Benefits"
      metaDescription="Why zero state income tax makes Nevada real estate attractive for relocators from high-tax states."
      heroBadge="Tax Advantage"
      heroSubtitle="Keep more of what you earn — and stretch your home equity further in the Las Vegas Valley."
      breadcrumbs={breadcrumbs}
      faqs={nevadaMarketFaqs.tax}
      stats={[
        { value: "0%", label: "State Income Tax" },
        { value: "40-60%", label: "vs. CA Home Prices" },
        { value: "37%", label: "LV Buyers from CA" },
        { value: "$485K", label: "Henderson Median" },
      ]}
    >
      <MarketResearchContent variant="tax" />

      <section className="mb-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: DollarSign,
            title: "Zero State Income Tax",
            text: "No tax on wages, salaries, or ordinary investment income at the state level.",
          },
          {
            icon: Home,
            title: "Lower Home Prices",
            text: "A $1.2M California home often buys luxury in Summerlin or The Ridges.",
          },
          {
            icon: Sun,
            title: "Same Lifestyle",
            text: "300+ sunny days, world-class dining, golf, and outdoor recreation.",
          },
          {
            icon: TrendingUp,
            title: "Appreciation",
            text: "Clark County continues 4–6% annual appreciation in premium communities.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-xl border p-6">
            <Icon className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-bold mb-2">{title}</h3>
            <p className="text-sm text-slate-600">{text}</p>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Estimated Annual State Income Tax Savings (CA → NV)
        </h2>
        <p className="text-sm text-slate-500 mb-4">
          Illustrative estimates only — consult a tax professional for your situation.
        </p>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Household Income</th>
                <th className="px-6 py-3 text-left font-semibold">Est. CA State Tax</th>
                <th className="px-6 py-3 text-left font-semibold">NV State Tax</th>
                <th className="px-6 py-3 text-left font-semibold">Annual Savings</th>
              </tr>
            </thead>
            <tbody>
              {savingsExamples.map((row) => (
                <tr key={row.income} className="border-b last:border-0">
                  <td className="px-6 py-3 font-medium">{row.income}</td>
                  <td className="px-6 py-3 text-red-600">{row.caTax}</td>
                  <td className="px-6 py-3 text-green-600">{row.nvTax}</td>
                  <td className="px-6 py-3 text-blue-600 font-semibold">{row.savings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl bg-blue-950 text-white p-8 text-center">
        <h2 className="text-xl font-bold mb-3">Ready to make the move?</h2>
        <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
          Dr. Jan Duffy specializes in California-to-Nevada relocations — equity
          analysis, neighborhood matching, and seamless closings.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/buyers/california-relocator"
            className="rounded-lg bg-yellow-400 px-6 py-3 font-bold text-blue-950 hover:bg-yellow-300 transition"
          >
            California Relocator Guide
          </Link>
          <a
            href={agentInfo.phoneTel}
            className="rounded-lg border border-white/30 px-6 py-3 font-bold hover:bg-white/10 transition"
          >
            Call {agentInfo.phone}
          </a>
        </div>
      </section>
    </NevadaMarketLayout>
  );
}
