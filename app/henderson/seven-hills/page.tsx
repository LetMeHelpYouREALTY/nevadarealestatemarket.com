import { SeoArticlePage } from "@/components/sections/SeoArticlePage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getHeroImageByKey } from "@/lib/hero-images";
import { agentInfo } from "@/lib/site-config";

const path = "/henderson/seven-hills";

/**
 * Dedicated Seven Hills page — unique copy + www self-canonical so Google
 * stops clustering the apex URL under a different canonical
 * (GSC: “Duplicate, Google chose different canonical than user”).
 */
export const metadata = buildPageMetadata({
  title: "Seven Hills Henderson Homes for Sale | Rio Secco | Dr. Jan Duffy",
  description:
    "Seven Hills Henderson NV — ~1,300-acre guard-gated community around Rio Secco Golf Club (Rees Jones). Strip and mountain views, enclaves from resale to Terracina estates. Dr. Jan Duffy · " +
    agentInfo.phone +
    ".",
  path,
  keywords: [
    "Seven Hills Henderson",
    "Seven Hills homes for sale",
    "Rio Secco Golf Club homes",
    "Terracina Henderson",
    "guard gated Henderson real estate",
    "89052 luxury homes",
  ],
});

export default function SevenHillsPage() {
  return (
    <SeoArticlePage
      path={path}
      title="Seven Hills Homes for Sale | Henderson NV"
      description="Guard-gated Seven Hills Henderson with Rio Secco Golf Club, elevated views, and enclaves from resale to custom estates."
      hero={getHeroImageByKey("henderson")}
      heroBadge="Henderson · 89052"
      heroTitle="Seven Hills"
      heroSubtitle="Guard-gated hillside living around Rio Secco — distinct from Anthem and MacDonald Highlands."
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Henderson", url: "/henderson" },
        { name: "Seven Hills", url: path },
      ]}
      faqs={[
        {
          question: "Where is Seven Hills in Henderson?",
          answer:
            "Seven Hills sits on the south Henderson hillside near St. Rose Parkway, between the Green Valley corridor and Anthem. ZIP 89052. The master plan is built around Rio Secco Golf Club.",
        },
        {
          question: "What is the price range in Seven Hills?",
          answer:
            "Inventory spans a wide band — established resale homes often from about the mid-$500Ks, with golf-adjacent and custom product into the multi-million range, including Terracina estates. Call " +
            agentInfo.phone +
            " for current MLS pricing.",
        },
        {
          question: "How does Seven Hills differ from Anthem or MacDonald Highlands?",
          answer:
            "Seven Hills is a fully built-out ~1,300-acre guard-gated plan centered on public-access Rio Secco (Rees Jones) and the Butch Harmon School of Golf. Anthem mixes Country Club, Highlands, and Sun City Anthem 55+. MacDonald Highlands sits higher with DragonRidge and a steeper luxury price band.",
        },
        {
          question: "Who should I call to tour Seven Hills?",
          answer:
            "Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, specializes in Henderson communities including Seven Hills, MacDonald Ranch, Lake Las Vegas, and Anthem. Call " +
            agentInfo.phone +
            ".",
        },
      ]}
      intro={[
        "Seven Hills is Henderson’s hillside guard-gated master plan — roughly 1,300 acres and about 1,950 homes at build-out — wrapped around Rio Secco Golf Club.",
        "Buyers come for elevation, Strip and mountain panoramas, and a broader price ladder than ultra-custom MacDonald Highlands while staying in ZIP 89052.",
      ]}
      sections={[
        {
          heading: "Rio Secco and the golf lifestyle",
          body: [
            "Rio Secco is a Rees Jones–designed championship course at the center of Seven Hills. It plays as a public-access club and is known as home to the Butch Harmon School of Golf.",
            "Golf-adjacent homes and clubhouse proximity typically command a premium versus non-golf streets inside the same gates.",
          ],
          bullets: [
            "Rees Jones layout with desert elevation changes",
            "Butch Harmon School of Golf on site",
            "Public tee access — not a private-membership-only club",
          ],
        },
        {
          heading: "Enclaves and home types",
          body: [
            "Seven Hills is fully built out, so most inventory is resale. Named pockets range from more approachable townhome/condo entries to double guard-gated Terracina custom estates at the top of the hill.",
            "Expect a two-tier HOA structure: master association dues plus neighborhood-specific fees in some enclaves — confirm amounts on any listing you tour.",
          ],
        },
        {
          heading: "Location and daily convenience",
          body: [
            "St. Rose Parkway retail and dining are a short drive. Henderson Executive Airport is nearby for private aviation. The Strip is roughly a 20-minute drive depending on traffic — close enough for evenings out without living on the tourist corridor.",
            "Office for showings: Berkshire Hathaway HomeServices Nevada Properties, 3185 St Rose Pkwy, Suite 101, Henderson, NV 89052.",
          ],
        },
        {
          heading: "Work with a Henderson specialist",
          body: [
            "Dr. Jan Duffy helps you compare Seven Hills street-by-street against Anthem Country Club, MacDonald Highlands, Lake Las Vegas, and Green Valley Ranch — views, HOA, lot size, and resale depth.",
            "Call " +
              agentInfo.phone +
              " to pull current Seven Hills actives and schedule a private tour.",
          ],
        },
      ]}
      relatedLinks={[
        { href: "/henderson", label: "Henderson market overview" },
        { href: "/henderson/anthem", label: "Anthem community guide" },
        { href: "/henderson/macdonald-ranch", label: "MacDonald Ranch guide" },
        { href: "/henderson/lake-las-vegas", label: "Lake Las Vegas guide" },
        {
          href: "/your-trusted-henderson-luxury-real-estate-expert",
          label: "Henderson luxury expert",
        },
        { href: "/luxury-homes", label: "Luxury homes valley-wide" },
        { href: "/contact", label: "Schedule a Seven Hills tour" },
      ]}
    />
  );
}
