import Link from "next/link";
import type { MarketCommunity } from "@/lib/market-communities/types";
import { agentInfo } from "@/lib/site-config";

type MarketAreaIndexProps = {
  title: string;
  subtitle: string;
  sectionTitle: string;
  sectionDescription: string;
  areaPath: string;
  communities: MarketCommunity[];
  ctaTitle: string;
  ctaDescription: string;
};

export function MarketAreaIndex({
  title,
  subtitle,
  sectionTitle,
  sectionDescription,
  areaPath,
  communities,
  ctaTitle,
  ctaDescription,
}: MarketAreaIndexProps) {
  return (
    <main>
      <section className="bg-blue-950 px-4 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">{title}</h1>
          <p className="mb-6 text-xl text-blue-200">{subtitle}</p>
          <a
            href={agentInfo.phoneTel}
            className="inline-block rounded-lg bg-yellow-400 px-6 py-3 font-bold text-blue-950 transition hover:bg-yellow-300"
          >
            Call {agentInfo.name} · {agentInfo.phoneFormatted}
          </a>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-center text-2xl font-bold text-blue-950">{sectionTitle}</h2>
          <p className="mb-10 text-center text-gray-600">{sectionDescription}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communities.map((community) => (
              <Link
                key={community.slug}
                href={`${areaPath}/${community.slug}`}
                className="group rounded-xl border p-6 transition hover:border-blue-300 hover:shadow-lg"
              >
                <h3 className="mb-1 text-xl font-bold text-blue-950 group-hover:text-blue-700">
                  {community.name}
                </h3>
                <p className="mb-3 text-sm text-gray-600">{community.tagline}</p>
                <p className="mb-3 font-semibold text-blue-800">{community.priceRange}</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  {community.highlights.slice(0, 4).map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="text-yellow-500">✦</span> {highlight}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 px-4 py-12 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold">{ctaTitle}</h2>
          <p className="mb-6 text-blue-200">{ctaDescription}</p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-yellow-400 px-8 py-3 font-bold text-blue-950 transition hover:bg-yellow-300"
          >
            Get a Free Community Comparison
          </Link>
        </div>
      </section>
    </main>
  );
}
