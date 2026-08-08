import { SeoArticlePage } from "@/components/sections/SeoArticlePage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getHeroImageByKey } from "@/lib/hero-images";
import { agentInfo } from "@/lib/site-config";

const path = "/discover-your-dream-home-at-silverstone-ranch";

export const metadata = buildPageMetadata({
  title: "Silverstone Ranch Las Vegas Homes for Sale | Dr. Jan Duffy",
  description:
    "Silverstone Ranch in Northwest Las Vegas (near Centennial Hills / 89131): golf-course community homes, market tips, and MLS search help from Dr. Jan Duffy. Call (702) 500-1955.",
  path,
  keywords: [
    "Silverstone Ranch Las Vegas",
    "Silverstone Ranch homes for sale",
    "89131 real estate",
    "Centennial Hills golf community",
    "Northwest Las Vegas homes",
  ],
});

const faqs = [
  {
    question: "Where is Silverstone Ranch in Las Vegas?",
    answer:
      "Silverstone Ranch sits in Northwest Las Vegas near the Centennial Hills area, commonly associated with the 89131 zip code and golf-course / mountain-view surroundings toward the Spring Mountains corridor.",
  },
  {
    question: "What do Silverstone Ranch homes typically cost?",
    answer:
      "Listing medians move with inventory. Recent public listing portals have shown community medians in the mid-to-upper $600,000s for available stock — confirm live comps before you offer. Dr. Jan pulls fresh solds from the MLS.",
  },
  {
    question: "How do I tour Silverstone Ranch homes?",
    answer:
      `Call or text Dr. Jan Duffy at ${agentInfo.phone}. She sets private showings, reviews HOA docs, and compares nearby Centennial Hills alternatives.`,
  },
];

export default function SilverstoneRanchPage() {
  return (
    <SeoArticlePage
      path={path}
      title={metadata.title as string}
      description={metadata.description as string}
      hero={getHeroImageByKey("las-vegas")}
      heroBadge="Northwest Las Vegas"
      heroTitle="Discover Your Dream Home at Silverstone Ranch"
      heroSubtitle="Golf-course community living in Northwest Las Vegas — guided MLS search with Dr. Jan Duffy."
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Las Vegas", url: "/las-vegas" },
        { name: "Silverstone Ranch", url: path },
      ]}
      faqs={faqs}
      intro={[
        "Silverstone Ranch is a Northwest Las Vegas community known for single-family homes, golf amenities, and proximity to the Centennial Hills retail corridor. Buyers comparing 89131 options often shortlist Silverstone Ranch alongside nearby master plans.",
        "Dr. Jan Duffy helps you evaluate lot location (fairway vs interior), roof/HVAC age, and HOA obligations before you compete for a listing.",
      ]}
      sections={[
        {
          heading: "Why buyers look at Silverstone Ranch",
          body: [
            "The community blends golf-course surroundings with access to the CC-215 beltway and Northwest employment centers. Inventory is limited compared with brand-new far-north subdivisions, so timing matters.",
          ],
          bullets: [
            "Single-family product with varied square footage",
            "Golf and recreation amenities (confirm current HOA access rules)",
            "Mountain views on select lots",
            "Established landscaping vs raw new-build streets",
          ],
        },
        {
          heading: "Buying tips for 2026",
          body: [
            "Pull three recent solds on the same street type (fairway vs non-fairway). Budget for older systems on early phases. If you need RV parking, verify CC&Rs before you fall in love with a lot — many golf communities restrict recreational vehicle storage.",
          ],
        },
        {
          heading: "Search Silverstone Ranch with a local agent",
          body: [
            `Dr. Jan Duffy (License ${agentInfo.license}) represents buyers and sellers in Northwest Las Vegas with Berkshire Hathaway HomeServices Nevada Properties. Call ${agentInfo.phone} for a current Silverstone Ranch CMA or private tour.`,
          ],
        },
      ]}
      relatedLinks={[
        { href: "/las-vegas/centennial-hills", label: "Centennial Hills guide" },
        { href: "/las-vegas", label: "Las Vegas homes" },
        { href: "/luxury-homes", label: "Luxury homes valley-wide" },
        { href: "/home-valuation", label: "Free home valuation" },
      ]}
    />
  );
}
