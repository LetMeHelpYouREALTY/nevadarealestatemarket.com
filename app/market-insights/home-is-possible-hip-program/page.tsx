import { SeoArticlePage } from "@/components/sections/SeoArticlePage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getHeroImageByKey } from "@/lib/hero-images";
import { agentInfo } from "@/lib/site-config";

const path = "/market-insights/home-is-possible-hip-program";

export const metadata = buildPageMetadata({
  title: "Nevada Home Is Possible (HIP) Program Guide | Dr. Jan Duffy",
  description:
    "How Nevada’s Home Is Possible (HIP) down payment assistance works for Las Vegas and Henderson buyers. Lender steps, eligibility overview, and next actions. Call (702) 500-1955.",
  path,
  keywords: [
    "Home Is Possible Nevada",
    "HIP program Las Vegas",
    "Nevada down payment assistance",
    "first time home buyer Nevada HIP",
    "HomeIsPossibleNV.org",
  ],
});

const faqs = [
  {
    question: "What is Nevada’s Home Is Possible program?",
    answer:
      "Home Is Possible (HIP) is a Nevada Housing Division homebuyer program that pairs a fixed-rate 30-year mortgage with down payment or closing-cost assistance for qualifying buyers. Details and approved lenders are published at HomeIsPossibleNV.org.",
  },
  {
    question: "Who should consider HIP in Las Vegas?",
    answer:
      "First-time and repeat buyers who meet current income and purchase-price guidelines, and who will occupy the home as a primary residence. Always confirm the latest limits with an approved HIP lender — published caps change.",
  },
  {
    question: "Can Dr. Jan Duffy help with a HIP purchase?",
    answer:
      `Yes. Dr. Jan Duffy coordinates with HIP-approved lenders, finds homes that fit program price bands, and manages timelines so financing contingencies stay on track. Call ${agentInfo.phone}.`,
  },
];

export default function HipProgramPage() {
  return (
    <SeoArticlePage
      path={path}
      title={metadata.title as string}
      description={metadata.description as string}
      hero={getHeroImageByKey("buyers-first-time-buyers")}
      heroBadge="Down Payment Assistance"
      heroTitle="Nevada Home Is Possible (HIP) Program"
      heroSubtitle="Statewide assistance for qualified buyers — how it fits a Las Vegas Valley purchase."
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Market Insights", url: "/market-insights" },
        { name: "Home Is Possible (HIP)", url: path },
      ]}
      faqs={faqs}
      intro={[
        "Nevada’s Home Is Possible program (often called HIP) is run through the Nevada Housing Division and marketed at HomeIsPossibleNV.org. It is designed to put more buyers into primary residences with a fixed-rate loan plus assistance funds.",
        "Published program brochures have listed income and purchase-price ceilings (for example, income and home-price caps in prior NHD materials). Treat any number you see online as provisional — your lender must confirm current 2026 guidelines before you write an offer.",
      ]}
      sections={[
        {
          heading: "How HIP typically works",
          body: [
            "Buyers apply through a HIP-approved lender. If you qualify, the first mortgage is a 30-year fixed loan; assistance may apply toward down payment and/or closing costs depending on the product selected that year.",
          ],
          bullets: [
            "Primary residence requirement",
            "Income and purchase-price limits set by NHD (verify current)",
            "Use an approved lender listed at HomeIsPossibleNV.org",
            "Home inspection and standard underwriting still apply",
          ],
        },
        {
          heading: "Las Vegas Valley shopping tips on HIP",
          body: [
            "Price bands matter. Many HIP buyers focus on North Las Vegas, select Henderson corridors, and entry-level resale or new-construction inventory that clears the program’s maximum purchase price. Dr. Jan filters MLS results to homes that fit both your budget and financing path.",
          ],
        },
        {
          heading: "Next steps with Dr. Jan Duffy",
          body: [
            `Call or text ${agentInfo.phone} for a same-day plan: lender introduction, pre-approval target, and a zip-code shortlist that matches HIP constraints. Berkshire Hathaway HomeServices Nevada Properties provides full buyer representation at no additional HIP fee from the agent side.`,
          ],
        },
      ]}
      relatedLinks={[
        { href: "/buyers/first-time-buyers", label: "First-time buyer guide" },
        { href: "/nevada-buyers-guide", label: "Nevada buyers guide" },
        { href: "/north-las-vegas", label: "North Las Vegas homes" },
        { href: "/market-insights", label: "Market insights hub" },
      ]}
    />
  );
}
