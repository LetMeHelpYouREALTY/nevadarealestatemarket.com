import Link from "next/link";
import type { MarketCommunity } from "@/lib/market-communities/types";
import { agentInfo, officeInfo } from "@/lib/site-config";
import { getHeroImage } from "@/lib/hero-images";
import { PageHero } from "@/components/sections/PageHero";
import { SitePage } from "@/components/layouts/SitePage";
import SchemaScript from "@/components/SchemaScript";
import {
  generateNeighborhoodSchema,
  generateWebPageSchema,
  combineSchemas,
  type BreadcrumbItem,
} from "@/lib/schema";
import { sitePath } from "@/lib/seo/site-url";

type MarketCommunityDetailProps = {
  community: MarketCommunity;
  areaLabel: string;
  areaPath: string;
  cityName?: string;
};

export function MarketCommunityDetail({
  community,
  areaLabel,
  areaPath,
  cityName = "Las Vegas Valley",
}: MarketCommunityDetailProps) {
  const pagePath = `${areaPath}/${community.slug}`;
  const pageUrl = sitePath(pagePath);

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Nevada Market", url: "/nevada-real-estate-market" },
    { name: areaLabel.replace(" Communities", ""), url: areaPath },
    { name: community.name, url: pagePath },
  ];

  const placeSchema = {
    ...generateNeighborhoodSchema({
      name: community.name,
      slug: community.slug,
      description: community.description,
      containedIn: cityName,
    }),
    "@id": `${pageUrl}#place`,
    url: pageUrl,
  };

  const pageSchema = generateWebPageSchema({
    name: `${community.name} Homes For Sale`,
    description: community.description,
    url: pagePath,
  });

  const communitySchema = combineSchemas(placeSchema, pageSchema);

  const faqs = [
    {
      question: `What is the price range for homes in ${community.name}?`,
      answer: `Homes in ${community.name} typically range ${community.priceRange}. ${community.description} Contact Dr. Jan Duffy at ${agentInfo.phone} for current listings and a private tour.`,
    },
    {
      question: `Who is the best realtor for ${community.name}?`,
      answer: `Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, specializes in ${community.name} and surrounding communities. Call ${agentInfo.phone} for expert buyer or seller representation.`,
    },
  ];

  return (
    <SitePage
      path={pagePath}
      seoTitle={`${community.name} Homes For Sale | Nevada Real Estate`}
      seoDescription={`${community.name} — ${community.tagline}. Homes ${community.priceRange}. Dr. Jan Duffy, BHHS Nevada · ${agentInfo.phone}.`}
      breadcrumbs={breadcrumbs}
      faqs={faqs}
    >
      <SchemaScript schema={communitySchema} id="community-schema" />
      <main>
        <PageHero
          hero={getHeroImage(pagePath)}
          badge={areaLabel}
          title={community.name}
          subtitle={`${community.tagline} · ${community.priceRange}`}
          className="pt-24"
        />

        <section className="px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <p className="mb-8 text-lg text-gray-700 leading-relaxed" data-speakable>
              {community.description}
            </p>

            <div className="mb-10 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-xl font-bold text-blue-950">Highlights</h2>
                <ul className="space-y-2">
                  {community.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-gray-700">
                      <span className="text-yellow-500">✦</span> {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-xl font-bold text-blue-950">Best For</h2>
                <ul className="space-y-2">
                  {community.bestFor.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-600">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-blue-50 p-8">
              <h2 className="mb-3 text-xl font-bold text-blue-950">
                Ready to explore {community.name}?
              </h2>
              <p className="mb-6 text-gray-700">
                Get current listings, pricing trends, and a personalized tour from Dr. Jan
                Duffy — Nevada&apos;s Top 1% REALTOR®.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={agentInfo.phoneTel}
                  className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 transition"
                >
                  Call {agentInfo.phone}
                </a>
                <Link
                  href="/contact"
                  className="rounded-lg border border-blue-600 px-6 py-3 font-bold text-blue-600 hover:bg-white transition"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href={areaPath}
                  className="rounded-lg border border-gray-300 px-6 py-3 font-bold text-gray-700 hover:bg-white transition"
                >
                  ← Back to {areaLabel}
                </Link>
              </div>
            </div>

            <p className="mt-8 text-xs text-gray-500">
              Office: {officeInfo.address.full} ·{" "}
              <a href={pageUrl} className="underline">
                {pageUrl}
              </a>
            </p>
          </div>
        </section>
      </main>
    </SitePage>
  );
}
