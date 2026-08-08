import { SeoArticlePage } from "@/components/sections/SeoArticlePage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getHeroImageByKey } from "@/lib/hero-images";
import { agentInfo } from "@/lib/site-config";

const path = "/north-las-vegas/del-webb-north-ranch";

export const metadata = buildPageMetadata({
  title: "Del Webb at North Ranch Homes | North Las Vegas 55+ | Dr. Jan Duffy",
  description:
    "Del Webb at North Ranch (Del Webb North Ranch) — new 55+ homes near Centennial Pkwy & Losee Rd in North Las Vegas. Single-story plans, resort amenities, pickleball. Dr. Jan Duffy · " +
    agentInfo.phone +
    ".",
  path,
  keywords: [
    "Del Webb North Ranch",
    "Del Webb at North Ranch",
    "North Las Vegas 55+ homes",
    "Del Webb North Las Vegas",
    "active adult homes North Las Vegas",
    "55+ communities North Las Vegas",
  ],
});

export default function DelWebbNorthRanchPage() {
  return (
    <SeoArticlePage
      path={path}
      title="Del Webb at North Ranch Homes for Sale | North Las Vegas"
      description="New Del Webb 55+ community in North Las Vegas with single-story homes and resort amenities."
      hero={getHeroImageByKey("55-plus-communities")}
      heroBadge="55+ · North Las Vegas"
      heroTitle="Del Webb at North Ranch"
      heroSubtitle="New active-adult homes near Centennial Parkway and Losee Road — distinct from Sun City Aliante."
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "North Las Vegas", url: "/north-las-vegas" },
        { name: "Del Webb at North Ranch", url: path },
      ]}
      faqs={[
        {
          question: "Is Del Webb North Ranch the same as Sun City Aliante?",
          answer:
            "No. Del Webb at North Ranch is a newer 55+ community (homes from about 2020 onward) near Centennial Parkway and Losee Road. Sun City Aliante is an earlier Del Webb community (built roughly 2003–2008) inside the Aliante master plan with about 2,000 resale homes. Different location, inventory, and price band.",
        },
        {
          question: "What do homes cost at Del Webb at North Ranch?",
          answer:
            "Recent buyer guides place many Del Webb at North Ranch homes roughly in the high $400Ks to high $500Ks, with earlier phases marketed from the low $300Ks. Call " +
            agentInfo.phone +
            " for current MLS pricing and incentives.",
        },
        {
          question: "What amenities does Del Webb at North Ranch offer?",
          answer:
            "Plans and resident marketing highlight a clubhouse, fitness center, resort-style pool and patio, plus pickleball and bocce. Single-story floor plans are the focus for active-adult buyers.",
        },
        {
          question: "Who should I call to tour Del Webb North Ranch?",
          answer:
            "Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, helps buyers compare Del Webb at North Ranch with Sun City Aliante, Heritage at Stonebridge, and other valley 55+ options. Call " +
            agentInfo.phone +
            ".",
        },
      ]}
      intro={[
        "Del Webb at North Ranch — also searched as Del Webb North Ranch — is a purpose-built 55+ community in North Las Vegas, not a rename of Sun City Aliante.",
        "It sits near the northwest corner of Centennial Parkway and Losee Road, with modern single-story plans and Del Webb lifestyle programming aimed at value-focused active adults.",
      ]}
      sections={[
        {
          heading: "How North Ranch differs from Sun City Aliante",
          body: [
            "Sun City Aliante is a sold-out Del Webb community of roughly 2,000 homes built in the mid-2000s inside Aliante, with mostly resale inventory and an 18-hole golf course woven through the neighborhood.",
            "Del Webb at North Ranch is a later Del Webb project (construction from about 2020) with a smaller planned footprint — industry guides cite a few hundred homes — and a newer amenity package focused on clubhouse, pool, fitness, pickleball, and bocce.",
          ],
          bullets: [
            "North Ranch: newer build cycle, Centennial/Losee corridor",
            "Sun City Aliante: 2003–2008 inventory, Aliante master plan",
            "Both are 55+ Del Webb brands — different streets and buyer mix",
          ],
        },
        {
          heading: "Homes and floor plans",
          body: [
            "Marketing for Del Webb at North Ranch has featured flexible open-concept single-story plans, commonly in the roughly 1,285–2,010+ sq ft range with two to three bedrooms and attached garages.",
            "Buyers comparing new Del Webb product to Summerlin or Henderson 55+ options often land here for a lower entry point while keeping single-story living and structured social programming.",
          ],
        },
        {
          heading: "Location and daily convenience",
          body: [
            "The Centennial Parkway and Losee Road location puts residents near Craig Ranch Regional Park, shopping along the North Las Vegas growth corridor, and a shorter drive to the I-215 Beltway than many northwest valley pockets.",
            "Aliante Casino, golf, and dining remain a short drive — useful if you want North Ranch pricing without living inside the older Sun City Aliante sections.",
          ],
        },
        {
          heading: "Work with a local 55+ specialist",
          body: [
            "Dr. Jan Duffy helps you compare HOA dues, remaining new-construction phases, resale alternatives, and trade-offs versus Sun City Aliante, Sun City Summerlin, and Heritage at Stonebridge.",
            "Office: Berkshire Hathaway HomeServices Nevada Properties, 3185 St Rose Pkwy, Suite 101, Henderson, NV 89052. Call " +
              agentInfo.phone +
              ".",
          ],
        },
      ]}
      relatedLinks={[
        { href: "/55-plus-communities/sun-city-aliante", label: "Sun City Aliante guide" },
        { href: "/55-plus-communities", label: "All Las Vegas 55+ communities" },
        { href: "/north-las-vegas", label: "North Las Vegas market overview" },
        { href: "/sellers/downsizing", label: "Downsizing & 55+ move guide" },
        { href: "/contact", label: "Schedule a North Ranch tour" },
      ]}
    />
  );
}
