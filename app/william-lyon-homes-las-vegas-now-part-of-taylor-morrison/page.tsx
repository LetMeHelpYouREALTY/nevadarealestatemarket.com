import { SeoArticlePage } from "@/components/sections/SeoArticlePage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getHeroImageByKey } from "@/lib/hero-images";
import { agentInfo } from "@/lib/site-config";

const path = "/william-lyon-homes-las-vegas-now-part-of-taylor-morrison";

export const metadata = buildPageMetadata({
  title: "William Lyon Homes & Taylor Morrison in Las Vegas | Dr. Jan Duffy",
  description:
    "William Lyon Homes is part of Taylor Morrison. What that means for Las Vegas new-construction buyers, warranties, and community choices. Call (702) 500-1955.",
  path,
  keywords: [
    "William Lyon Homes Las Vegas",
    "Taylor Morrison Las Vegas",
    "William Lyon Taylor Morrison merger",
    "new construction Las Vegas builders",
    "Taylor Morrison Nevada communities",
  ],
});

const faqs = [
  {
    question: "Did Taylor Morrison acquire William Lyon Homes?",
    answer:
      "Yes. Taylor Morrison announced the acquisition of William Lyon Homes in 2019 (widely reported at about $2.4B). In Southern Nevada, shoppers may still see Lyon-era community names while purchasing through Taylor Morrison’s current sales process.",
  },
  {
    question: "Does the acquisition change my warranty?",
    answer:
      "Warranty administration follows the builder’s current policies for the community and purchase contract. Review the warranty booklet in your new-home documents and ask the sales office plus your agent to confirm what transfers.",
  },
  {
    question: "Should I use a buyer’s agent for Taylor Morrison?",
    answer:
      `Yes — register with Dr. Jan Duffy before your first builder visit so representation is recognized. Call ${agentInfo.phone}. Buyer-agent registration protects your interests on upgrades, incentives, and contract review.`,
  },
];

export default function WilliamLyonTaylorMorrisonPage() {
  return (
    <SeoArticlePage
      path={path}
      title={metadata.title as string}
      description={metadata.description as string}
      hero={getHeroImageByKey("new-construction")}
      heroBadge="New Construction"
      heroTitle="William Lyon Homes Las Vegas — Now Part of Taylor Morrison"
      heroSubtitle="What the builder transition means for incentives, communities, and buyer representation."
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "New Construction", url: "/new-construction" },
        { name: "William Lyon / Taylor Morrison", url: path },
      ]}
      faqs={faqs}
      intro={[
        "Taylor Morrison’s acquisition of William Lyon Homes consolidated two major Western U.S. builders. Las Vegas buyers still encounter Lyon community names in conversation and older marketing, but contracts, incentives, and design studios now run through Taylor Morrison’s operating platform.",
        "Dr. Jan Duffy helps you compare Taylor Morrison releases against other valley builders (Toll Brothers, Lennar, Century, and more) so you choose the right lot — not just the familiar brand name.",
      ]}
      sections={[
        {
          heading: "Why this still matters in 2026",
          body: [
            "Search traffic still uses “William Lyon Homes Las Vegas.” If you landed here from an old bookmark or Google result, you are in the right place for current new-construction guidance under the Taylor Morrison umbrella.",
          ],
          bullets: [
            "Confirm which legal entity issues your purchase agreement",
            "Compare rate buydowns and closing credits across builders",
            "Register your buyer’s agent before touring model homes",
            "Review HOA budgets on former Lyon master plans carefully",
          ],
        },
        {
          heading: "Buyer representation on new construction",
          body: [
            "Builder contracts favor the seller. An independent agent negotiates upgrades, option deadlines, and punch-list leverage. Berkshire Hathaway HomeServices Nevada Properties representation typically costs you nothing extra when the builder cooperates with buyer brokers — ask Dr. Jan to confirm the community’s co-op policy.",
          ],
        },
        {
          heading: "Talk through your builder shortlist",
          body: [
            `Call or text ${agentInfo.phone} for a same-day builder map across Las Vegas, Henderson, Summerlin, and North Las Vegas.`,
          ],
        },
      ]}
      relatedLinks={[
        { href: "/new-construction", label: "New construction guide" },
        { href: "/buyers", label: "Buyer representation" },
        { href: "/north-las-vegas", label: "North Las Vegas communities" },
        { href: "/henderson", label: "Henderson communities" },
      ]}
    />
  );
}
