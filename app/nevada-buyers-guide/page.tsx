import type { Metadata } from "next";
import Link from "next/link";
import { NevadaMarketLayout } from "@/components/market/NevadaMarketLayout";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { marketResourceLinks } from "@/lib/nevada-market-data";
import { ArrowRight, ClipboardCheck, Search, FileText, Key } from "lucide-react";
import { getHeroImageByKey } from "@/lib/hero-images";

export const metadata: Metadata = buildPageMetadata({
  title: "Nevada Home Buyers Guide 2026 | Step-by-Step Las Vegas Valley",
  description:
    "Complete guide to buying a home in Nevada — pre-approval, neighborhoods, offers, inspections, and closing. Expert guidance from Dr. Jan Duffy, BHHS Nevada. (702) 500-1955.",
  path: "/nevada-buyers-guide",
  keywords: [
    "how to buy a home in Nevada",
    "Nevada home buying process",
    "Las Vegas first time buyer guide",
    "Nevada real estate steps",
  ],
});

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Nevada Market", url: "/nevada-real-estate-market" },
  { name: "Buyers Guide", url: "/nevada-buyers-guide" },
];

const faqs = [
  {
    question: "What are the steps to buy a home in Nevada?",
    answer:
      "1) Get pre-approved 2) Define your search criteria 3) Tour homes with your agent 4) Make an offer 5) Complete inspections 6) Close escrow. Typical timeline is 30–45 days from accepted offer.",
  },
  {
    question: "Do I need a realtor to buy in Nevada?",
    answer:
      "While not legally required, a buyer's agent protects your interests — especially on new construction where builder sales reps work for the builder. Dr. Jan Duffy's buyer representation is free to you; the seller pays commission.",
  },
  {
    question: "What down payment do I need in Nevada?",
    answer:
      "FHA loans require 3.5% down; conventional loans often 5–20%; VA loans offer 0% down for eligible veterans. Nevada Housing Division programs may provide additional assistance for first-time buyers.",
  },
];

const steps = [
  {
    icon: ClipboardCheck,
    step: "1",
    title: "Get Pre-Approved",
    text: "Know your budget before touring. A pre-approval letter strengthens your offers in competitive Nevada markets.",
  },
  {
    icon: Search,
    step: "2",
    title: "Choose Your Community",
    text: "Compare Henderson, Summerlin, Las Vegas, and North Las Vegas by schools, commute, and lifestyle.",
  },
  {
    icon: FileText,
    step: "3",
    title: "Make a Strong Offer",
    text: "Price, contingencies, and timing matter. Local expertise prevents overpaying or losing to stronger offers.",
  },
  {
    icon: Key,
    step: "4",
    title: "Close & Move In",
    text: "Inspections, appraisal, title, and final walkthrough — typically 30–45 days to keys.",
  },
];

export default function NevadaBuyersGuidePage() {
  return (
    <NevadaMarketLayout
      path="/nevada-buyers-guide"
      hero={getHeroImageByKey("nevada-buyers-guide")}
      title="Nevada Home Buyers Guide"
      metaTitle="Nevada Home Buyers Guide 2026"
      metaDescription="Step-by-step guide to purchasing a home in the Las Vegas Valley."
      heroBadge="Buyer's Guide"
      heroSubtitle="Everything you need to know before writing your first offer in Nevada."
      breadcrumbs={breadcrumbs}
      faqs={faqs}
    >
      <section className="mb-16 grid md:grid-cols-2 gap-8">
        {steps.map(({ icon: Icon, step, title, text }) => (
          <div key={step} className="flex gap-4 rounded-xl border p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
              {step}
            </div>
            <div>
              <Icon className="h-5 w-5 text-blue-600 mb-2" />
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm text-slate-600">{text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-16 grid md:grid-cols-3 gap-6">
        <Link
          href="/buyers/first-time-buyers"
          className="rounded-xl border p-6 hover:border-blue-300 hover:shadow-md transition group"
        >
          <h3 className="font-bold mb-2 group-hover:text-blue-600">First-Time Buyers</h3>
          <p className="text-sm text-slate-600 mb-3">
            Down payment assistance, FHA/VA programs, and builder incentives.
          </p>
          <span className="text-blue-600 text-sm font-medium flex items-center">
            Learn more <ArrowRight className="h-4 w-4 ml-1" />
          </span>
        </Link>
        <Link
          href="/no-state-income-tax"
          className="rounded-xl border p-6 hover:border-blue-300 hover:shadow-md transition group"
        >
          <h3 className="font-bold mb-2 group-hover:text-blue-600">Tax Advantages</h3>
          <p className="text-sm text-slate-600 mb-3">
            Why Nevada&apos;s zero state income tax attracts relocators.
          </p>
          <span className="text-blue-600 text-sm font-medium flex items-center">
            Learn more <ArrowRight className="h-4 w-4 ml-1" />
          </span>
        </Link>
        <Link
          href="/compare-communities"
          className="rounded-xl border p-6 hover:border-blue-300 hover:shadow-md transition group"
        >
          <h3 className="font-bold mb-2 group-hover:text-blue-600">Compare Communities</h3>
          <p className="text-sm text-slate-600 mb-3">
            Henderson vs Summerlin vs Las Vegas side-by-side.
          </p>
          <span className="text-blue-600 text-sm font-medium flex items-center">
            Learn more <ArrowRight className="h-4 w-4 ml-1" />
          </span>
        </Link>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-4">More Market Resources</h2>
        <div className="grid sm:grid-cols-2 gap-3">
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
  );
}
