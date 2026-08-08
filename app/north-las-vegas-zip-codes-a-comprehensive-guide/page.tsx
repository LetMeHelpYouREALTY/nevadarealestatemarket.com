import { SeoArticlePage } from "@/components/sections/SeoArticlePage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getHeroImageByKey } from "@/lib/hero-images";
import { agentInfo } from "@/lib/site-config";

const path = "/north-las-vegas-zip-codes-a-comprehensive-guide";

export const metadata = buildPageMetadata({
  title: "North Las Vegas Zip Codes Guide | Homes by ZIP | Dr. Jan Duffy",
  description:
    "North Las Vegas zip code guide for buyers: 89030, 89031, 89032, 89081, 89084, 89085, 89086 and more. Compare housing types and call (702) 500-1955 for MLS matches.",
  path,
  keywords: [
    "North Las Vegas zip codes",
    "89031 homes for sale",
    "89084 Aliante zip code",
    "89032 North Las Vegas real estate",
    "NLV zip code map",
  ],
});

const faqs = [
  {
    question: "What zip codes are in North Las Vegas?",
    answer:
      "Common North Las Vegas residential zips include 89030, 89031, 89032, 89081, 89084, 89085, and 89086 (plus PO Box zips such as 89033/89036). Boundaries shift at the edges — always confirm the property’s mailing zip on the listing.",
  },
  {
    question: "Which NLV zip is best for new construction?",
    answer:
      "Newer master-planned product often appears in 89084 (Aliante area), 89085, and parts of 89031/89081. Availability rotates with builder releases. Dr. Jan tracks incentives and lot premiums weekly.",
  },
  {
    question: "Can I search the MLS by zip code?",
    answer:
      `Yes. Tell Dr. Jan which zips matter and any must-haves (garage count, RV parking, single story). Call ${agentInfo.phone}.`,
  },
];

export default function NorthLasVegasZipCodesPage() {
  return (
    <SeoArticlePage
      path={path}
      title={metadata.title as string}
      description={metadata.description as string}
      hero={getHeroImageByKey("north-las-vegas")}
      heroBadge="North Las Vegas"
      heroTitle="North Las Vegas Zip Codes: A Comprehensive Guide"
      heroSubtitle="Match housing stock, commute patterns, and price bands by ZIP — then tour with a local MLS search."
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "North Las Vegas", url: "/north-las-vegas" },
        { name: "Zip Codes Guide", url: path },
      ]}
      faqs={faqs}
      intro={[
        "North Las Vegas spans multiple postal codes with different housing eras and price points. Buyers who shop by zip — not just city name — write cleaner offers and avoid commuting surprises.",
        "Use this guide as a starting map, then verify amenities, HOA dues, and current medians on specific listings.",
      ]}
      sections={[
        {
          heading: "Primary residential zip codes",
          body: [
            "These zips cover most owner-occupied searches inside North Las Vegas city limits and adjacent master plans:",
          ],
          bullets: [
            "89030 — established central NLV housing stock",
            "89031 — large residential footprint with mixed ages of homes",
            "89032 — mid-city neighborhoods with ownership and rental mix",
            "89081 — growth corridors and newer subdivisions",
            "89084 — Aliante / north master-planned areas",
            "89085 & 89086 — newer residential edges and infill",
          ],
        },
        {
          heading: "How to choose a zip for your search",
          body: [
            "Start with commute (I-15, US-95, CC-215), home age, lot size, and HOA appetite. Then layer financing — HIP or FHA buyers may need to stay inside a purchase-price band that fits certain zips better than others.",
          ],
        },
        {
          heading: "Tour North Las Vegas with Dr. Jan",
          body: [
            `Dr. Jan Duffy builds a zip-by-zip shortlist, schedules same-day tours, and compares recent solds so you do not overpay for the wrong side of a zip boundary. Call or text ${agentInfo.phone}.`,
          ],
        },
      ]}
      relatedLinks={[
        { href: "/north-las-vegas", label: "North Las Vegas homes for sale" },
        { href: "/north-las-vegas/aliante", label: "Aliante community guide" },
        { href: "/las-vegas-homes-with-rv-parking", label: "Homes with RV parking" },
        { href: "/compare-communities", label: "Compare valley communities" },
      ]}
    />
  );
}
