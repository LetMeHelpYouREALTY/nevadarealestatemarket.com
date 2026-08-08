import Link from "next/link";
import { SitePage } from "@/components/layouts/SitePage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getSitemapGroups } from "@/lib/seo/sitemap-entries";
import { getHeroImageByKey } from "@/lib/hero-images";
import { agentInfo, officeInfo } from "@/lib/site-config";

const path = "/site-map";

export const metadata = buildPageMetadata({
  title: "Site Map | Nevada Real Estate Market | Dr. Jan Duffy",
  description:
    "HTML site map of Nevada Real Estate Market pages — Henderson, Summerlin, Las Vegas, buyers, sellers, 55+ communities, and market guides. Dr. Jan Duffy · " +
    agentInfo.phone +
    ".",
  path,
  keywords: [
    "Nevada real estate site map",
    "Las Vegas homes site map",
    "Dr Jan Duffy pages",
  ],
});

/**
 * Crawlable HTML sitemap — helps Google move URLs from
 * “Discovered – currently not indexed” into the crawl queue via internal links.
 */
export default function HtmlSiteMapPage() {
  const groups = getSitemapGroups();

  return (
    <SitePage
      path={path}
      seoTitle="Site Map | Nevada Real Estate Market"
      seoDescription="Browse all major Nevada Real Estate Market pages in one place."
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Site Map", url: path },
      ]}
      faqs={[
        {
          question: "How do I find Henderson or Summerlin community pages?",
          answer:
            "Use the Market areas & communities section below, or start at /henderson and /summerlin. Call " +
            agentInfo.phone +
            " for a guided tour.",
        },
      ]}
      hero={getHeroImageByKey("home")}
      heroTitle="Site Map"
      heroSubtitle="Every major page on Nevada Real Estate Market — linked for buyers, sellers, and search engines."
      heroBadge="Navigation"
      showListings={false}
    >
      <main className="container mx-auto px-4 max-w-4xl py-12 space-y-12">
        <p className="text-slate-700 leading-relaxed">
          Prefer the XML feed for Search Console? Use{" "}
          <a
            href="/sitemap.xml"
            className="text-blue-700 underline underline-offset-2"
          >
            /sitemap.xml
          </a>
          . Office: {officeInfo.address.street}, {officeInfo.address.city},{" "}
          {officeInfo.address.state} {officeInfo.address.zip}. Call{" "}
          <a href={agentInfo.phoneTel} className="text-blue-700 font-medium">
            {agentInfo.phone}
          </a>
          .
        </p>

        {groups.map((group) => (
          <section key={group.title} aria-labelledby={group.title}>
            <h2
              id={group.title}
              className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2"
            >
              {group.title}
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {group.entries.map((entry) => (
                <li key={entry.path}>
                  <Link
                    href={entry.path}
                    className="text-blue-800 hover:text-blue-600 text-sm underline-offset-2 hover:underline"
                  >
                    {entry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </SitePage>
  );
}
