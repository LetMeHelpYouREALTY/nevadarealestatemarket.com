import Link from "next/link";
import type { MarketCommunity } from "@/lib/market-communities/types";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

type MarketCommunityDetailProps = {
  community: MarketCommunity;
  areaLabel: string;
  areaPath: string;
};

export function MarketCommunityDetail({
  community,
  areaLabel,
  areaPath,
}: MarketCommunityDetailProps) {
  const pageUrl = `${siteConfig.url}${areaPath}/${community.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: agentInfo.name,
    url: pageUrl,
    telephone: agentInfo.phoneFormatted.replace(/\D/g, "").replace(/^1/, "+1-"),
    address: {
      "@type": "PostalAddress",
      streetAddress: officeInfo.address.street,
      addressLocality: officeInfo.address.city,
      addressRegion: officeInfo.address.state,
      postalCode: officeInfo.address.zip,
      addressCountry: "US",
    },
    areaServed: community.name,
    description: community.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <section className="bg-blue-950 px-4 py-16 text-white">
          <div className="mx-auto max-w-5xl">
            <p className="mb-2 text-sm font-semibold text-yellow-400">{areaLabel}</p>
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">{community.name}</h1>
            <p className="mb-2 text-xl text-blue-200">{community.tagline}</p>
            <p className="text-2xl font-bold text-yellow-400">{community.priceRange}</p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
            <div className="prose md:col-span-2">
              <h2>About {community.name}</h2>
              <p>{community.description}</p>

              <h2>Community Highlights</h2>
              <ul>
                {community.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <h2>Best For</h2>
              <ul>
                {community.bestFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <aside>
              <div className="sticky top-24 rounded-xl bg-blue-950 p-6 text-white">
                <h3 className="mb-4 text-lg font-bold text-yellow-400">
                  Thinking About {community.name}?
                </h3>
                <p className="mb-6 text-sm text-blue-200">
                  I track every sale in this community. Let me pull fresh comps and tell you
                  exactly what&apos;s available right now.
                </p>
                <a
                  href={agentInfo.phoneTel}
                  className="mb-3 block w-full rounded-lg bg-yellow-400 py-3 text-center font-bold text-blue-950 transition hover:bg-yellow-300"
                >
                  Call {agentInfo.phoneFormatted}
                </a>
                <Link
                  href="/contact"
                  className="block w-full rounded-lg border border-yellow-400 py-3 text-center font-semibold text-yellow-400 transition hover:bg-blue-800"
                >
                  Request Market Report
                </Link>
                <p className="mt-4 text-center text-xs text-blue-300">
                  {agentInfo.name} · {agentInfo.brokerage}
                  <br />
                  NV License #{agentInfo.license}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t px-4 py-8">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <Link href={areaPath} className="font-medium text-blue-700 hover:underline">
              ← All {areaLabel}
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-blue-950 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Get Free Market Analysis
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
