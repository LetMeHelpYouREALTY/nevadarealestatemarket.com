import { SeoArticlePage } from "@/components/sections/SeoArticlePage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getHeroImageByKey } from "@/lib/hero-images";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

const path = "/your-trusted-henderson-luxury-real-estate-expert";

export const metadata = buildPageMetadata({
  title: "Henderson Luxury Real Estate Expert | Dr. Jan Duffy, REALTOR®",
  description:
    "Dr. Jan Duffy — Henderson luxury real estate expert with Berkshire Hathaway HomeServices Nevada Properties. MacDonald Highlands, Lake Las Vegas, Anthem & more. Call (702) 500-1955.",
  path,
  keywords: [
    "Henderson luxury real estate expert",
    "Dr Jan Duffy Henderson",
    "MacDonald Highlands realtor",
    "Lake Las Vegas luxury homes",
    "BHHS Nevada luxury agent",
  ],
  images: [`${siteConfig.url}/images/agent/dr-jan-duffy.jpg`],
});

const faqs = [
  {
    question: "Who is Dr. Jan Duffy?",
    answer:
      `Dr. Jan Duffy is a REALTOR® (License ${agentInfo.license}) with Berkshire Hathaway HomeServices Nevada Properties, based at ${officeInfo.address.full}. She specializes in Henderson and Las Vegas Valley luxury, relocation, and new construction.`,
  },
  {
    question: "Which Henderson luxury areas does she cover?",
    answer:
      "MacDonald Highlands, Lake Las Vegas, Anthem, Seven Hills, Green Valley Ranch, Inspirada, and surrounding custom-estate pockets — plus Summerlin luxury when clients cross the valley.",
  },
  {
    question: "How do I book a private showing?",
    answer:
      `Call or text ${agentInfo.phone}, or schedule via the contact page. Office hours are daily 6:00 AM – 9:00 PM.`,
  },
];

export default function HendersonLuxuryExpertPage() {
  return (
    <SeoArticlePage
      path={path}
      title={metadata.title as string}
      description={metadata.description as string}
      hero={getHeroImageByKey("about")}
      heroBadge="Henderson Luxury"
      heroTitle="Your Trusted Henderson Luxury Real Estate Expert"
      heroSubtitle="Dr. Jan Duffy — discreet representation for estates, custom builds, and golf-course communities."
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Henderson Luxury Expert", url: path },
      ]}
      faqs={faqs}
      intro={[
        "Looking for a Henderson luxury specialist who answers the phone? Dr. Jan Duffy pairs Berkshire Hathaway HomeServices resources with hyperlocal pricing on MacDonald Highlands, Lake Las Vegas, and Anthem.",
        "This page replaces an older marketing URL so Google can keep indexing your search for a trusted Henderson luxury expert — with current NAP, credentials, and clear next steps.",
      ]}
      sections={[
        {
          heading: "Luxury service, practical process",
          body: [
            "Private showings, off-market inquiry, and negotiation strategy built around your timeline — not a generic CRM drip. You get direct access to Dr. Jan, not a call center.",
          ],
          bullets: [
            `License ${agentInfo.license}`,
            `Office: ${officeInfo.address.full}`,
            `Phone: ${agentInfo.phone}`,
            "Brokerage: Berkshire Hathaway HomeServices Nevada Properties",
          ],
        },
        {
          heading: "Henderson communities we know street-by-street",
          body: [
            "From guard-gated custom lots to resort-style Lake Las Vegas condominiums, strategy changes with each HOA and view premium. Ask for a micro-CMA before you list or offer.",
          ],
        },
      ]}
      relatedLinks={[
        { href: "/about", label: "Full about page" },
        { href: "/henderson", label: "Henderson homes for sale" },
        { href: "/luxury-homes", label: "Luxury homes" },
        { href: "/google-business", label: "Google Business Profile" },
        { href: "/contact", label: "Contact & scheduling" },
      ]}
    />
  );
}
