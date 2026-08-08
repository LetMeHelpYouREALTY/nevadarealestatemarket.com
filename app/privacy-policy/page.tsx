import { SeoArticlePage } from "@/components/sections/SeoArticlePage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getHeroImageByKey } from "@/lib/hero-images";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

const path = "/privacy-policy";

export const metadata = buildPageMetadata({
  title: "Privacy Policy | Nevada Real Estate Market | Dr. Jan Duffy",
  description:
    "Privacy policy for nevadarealestatemarket.com — how Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties handle contact and website data.",
  path,
  keywords: ["privacy policy", "nevadarealestatemarket.com privacy", "Dr Jan Duffy privacy"],
});

const faqs = [
  {
    question: "What information do you collect?",
    answer:
      "Contact details you submit (name, email, phone, message), technical logs needed to operate the site, and analytics events if enabled. We do not sell your personal information.",
  },
  {
    question: "Who do I contact about privacy?",
    answer:
      `Email ${agentInfo.email} or call ${agentInfo.phone}. Office: ${officeInfo.address.full}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SeoArticlePage
      path={path}
      title={metadata.title as string}
      description={metadata.description as string}
      hero={getHeroImageByKey("home")}
      heroBadge="Legal"
      heroTitle="Privacy Policy"
      heroSubtitle={`How ${siteConfig.name} handles information you share with Dr. Jan Duffy.`}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Privacy Policy", url: path },
      ]}
      faqs={faqs}
      intro={[
        `This Privacy Policy describes how ${siteConfig.name} (${siteConfig.url}) collects and uses information when you browse the site, submit forms, or contact Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada Properties.`,
        "By using this website, you agree to this policy. We may update it as laws or tools change; the date of the latest substantive update will be reflected in site deployments.",
      ]}
      sections={[
        {
          heading: "Information we collect",
          body: [
            "You may provide your name, email, phone number, property preferences, and message content when you use contact forms, scheduling tools, or chat widgets. Our servers and vendors may collect IP address, browser type, and pages visited for security and performance.",
          ],
        },
        {
          heading: "How we use information",
          body: [
            "We use your information to respond to inquiries, schedule showings, send requested market updates, improve the website, and comply with real estate record-keeping obligations. Lead information may be stored in our CRM (such as Follow Up Boss) to serve you.",
          ],
        },
        {
          heading: "Sharing",
          body: [
            "We share data with service providers who host the site, process forms, schedule appointments (e.g., Calendly), or provide MLS/IDX search widgets (e.g., RealScout) — only as needed to deliver those services. We do not sell personal information.",
          ],
        },
        {
          heading: "Cookies and analytics",
          body: [
            "We may use cookies or similar technologies, including Vercel Analytics or Google tools if configured, to understand traffic and improve pages. You can control cookies through your browser settings.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            `To access, correct, or delete personal information we hold about you, contact ${agentInfo.email} or call ${agentInfo.phone}. You may also opt out of non-transactional marketing emails using unsubscribe links.`,
          ],
        },
        {
          heading: "Contact",
          body: [
            `${agentInfo.name} · ${agentInfo.brokerage}`,
            `${officeInfo.address.full}`,
            `Phone: ${agentInfo.phone}`,
            `Email: ${agentInfo.email}`,
          ],
        },
      ]}
      relatedLinks={[
        { href: "/contact", label: "Contact us" },
        { href: "/security-policy", label: "Security policy" },
        { href: "/about", label: "About Dr. Jan Duffy" },
      ]}
    />
  );
}
