import { SeoArticlePage } from "@/components/sections/SeoArticlePage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getHeroImageByKey } from "@/lib/hero-images";
import { agentInfo } from "@/lib/site-config";

const path = "/las-vegas-homes-with-rv-parking";

export const metadata = buildPageMetadata({
  title: "Las Vegas Homes with RV Parking | Dr. Jan Duffy, REALTOR®",
  description:
    "Find Las Vegas and Henderson homes with RV, boat, or trailer parking. Side yards, oversized garages, and communities that allow recreational vehicles. Call (702) 500-1955.",
  path,
  keywords: [
    "Las Vegas homes with RV parking",
    "RV parking homes Henderson NV",
    "boat parking Las Vegas real estate",
    "oversized lot homes Las Vegas",
    "RV friendly communities Clark County",
  ],
});

const faqs = [
  {
    question: "Where can I find homes with RV parking in Las Vegas?",
    answer:
      "Look in Northwest Las Vegas, North Las Vegas, parts of Henderson, and larger-lot pockets in Centennial Hills, Skye Canyon, and Aliante. Inventory changes daily — Dr. Jan Duffy can filter the MLS for side-yard parking, RV gates, and HOA rules that allow recreational vehicles.",
  },
  {
    question: "Do HOAs in Las Vegas allow RV parking?",
    answer:
      "Rules vary widely. Some communities ban street or driveway RV storage; others allow side-yard parking or require screened storage. Always review CC&Rs before you write an offer. Dr. Jan pulls HOA documents early so you know the rules.",
  },
  {
    question: "What lot features matter for RV owners?",
    answer:
      "Priority features include a side-yard gate wide enough for your rig, concrete pad or gravel strip, power hookups, and enough setback to meet city and HOA rules. Oversized three-car garages help for smaller trailers.",
  },
];

export default function LasVegasHomesWithRvParkingPage() {
  return (
    <SeoArticlePage
      path={path}
      title={metadata.title as string}
      description={metadata.description as string}
      hero={getHeroImageByKey("north-las-vegas")}
      heroBadge="RV & Boat Parking"
      heroTitle="Las Vegas Homes with RV Parking"
      heroSubtitle="Side-yard parking, oversized lots, and HOA-aware searches across the Las Vegas Valley."
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Las Vegas Homes with RV Parking", url: path },
      ]}
      faqs={faqs}
      intro={[
        `Southern Nevada buyers often need more than a garage — they need room for an RV, boat, or toy hauler. Dr. Jan Duffy (${agentInfo.phone}) searches Clark County MLS listings for properties with side-yard access, RV gates, and community rules that support recreational vehicles.`,
        "This guide covers where RV-friendly homes cluster, what to verify in HOA documents, and how to compete when the right lot hits the market.",
      ]}
      sections={[
        {
          heading: "Where RV-friendly homes cluster in the valley",
          body: [
            "Larger lots and newer master plans in North Las Vegas and Northwest Las Vegas often offer the best RV parking options. Henderson has select neighborhoods with side-yard capacity; Summerlin and guard-gated luxury enclaves are usually more restrictive.",
          ],
          bullets: [
            "North Las Vegas & Aliante — newer construction, wider lots",
            "Centennial Hills / Skye Canyon corridor — side-yard gates common on some plans",
            "Henderson outskirts — verify each HOA; not all Anthem or Green Valley streets allow RVs",
            "Unincorporated Clark County pockets — more flexible parking rules in some areas",
          ],
        },
        {
          heading: "What to check before you buy",
          body: [
            "Never assume a wide side yard means you can park overnight. Confirm CC&Rs, city code, and whether neighbors have successfully parked similar vehicles. Measure gate width, pad length, and turning radius for your specific RV.",
          ],
          bullets: [
            "HOA parking, screening, and length limits",
            "City/county street parking restrictions",
            "Utility access (30/50 amp) if you need shore power",
            "Resale demand for RV-capable lots in that ZIP",
          ],
        },
        {
          heading: "How Dr. Jan runs an RV parking search",
          body: [
            "We set MLS alerts for keywords and lot features, tour properties with a tape measure, and escalate document review so you do not discover a ban after appraisal. Same-day showings are available when a rare RV lot appears.",
          ],
        },
      ]}
      relatedLinks={[
        { href: "/north-las-vegas", label: "North Las Vegas homes" },
        { href: "/las-vegas", label: "Las Vegas market area" },
        { href: "/buyers", label: "Buyer representation guide" },
        { href: "/contact", label: "Contact Dr. Jan Duffy" },
      ]}
    />
  );
}
