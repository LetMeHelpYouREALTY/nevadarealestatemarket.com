import Link from "next/link";
import type { MarketCommunity } from "@/lib/market-communities/types";
import { agentInfo } from "@/lib/site-config";
import type { HeroImage } from "@/lib/hero-images";
import { PageHero } from "@/components/sections/PageHero";
import { SitePage } from "@/components/layouts/SitePage";
import SchemaScript from "@/components/SchemaScript";
import {
  generateItemListSchema,
  type BreadcrumbItem,
  type FAQItem,
} from "@/lib/schema";
import Image from "next/image";
import { getCommunityHeroImage } from "@/lib/images/community-images";
import { siteImage } from "@/lib/images/src";
import { HeadingPhoto } from "@/components/sections/SectionImage";

type MarketAreaIndexProps = {
  path: string;
  seoTitle: string;
  seoDescription: string;
  breadcrumbs: BreadcrumbItem[];
  faqs?: FAQItem[];
  hero: HeroImage;
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
  path,
  seoTitle,
  seoDescription,
  breadcrumbs,
  faqs,
  hero,
  title,
  subtitle,
  sectionTitle,
  sectionDescription,
  areaPath,
  communities,
  ctaTitle,
  ctaDescription,
}: MarketAreaIndexProps) {
  const listSchema = generateItemListSchema({
    name: `${title} — Communities`,
    items: communities.map((c) => ({
      name: c.name,
      url: `${areaPath}/${c.slug}`,
      description: c.tagline,
    })),
  });

  return (
    <SitePage
      path={path}
      seoTitle={seoTitle}
      seoDescription={seoDescription}
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      showListings={false}
    >
      <SchemaScript schema={listSchema} id="community-list-schema" />
      <main>
        <PageHero
          hero={hero}
          title={title}
          subtitle={subtitle}
          className="pt-24"
        >
          <a
            href={agentInfo.phoneTel}
            className="inline-block mt-6 rounded-lg bg-yellow-400 px-6 py-3 font-bold text-blue-950 transition hover:bg-yellow-300"
          >
            Call {agentInfo.name} · {agentInfo.phoneFormatted}
          </a>
        </PageHero>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-2 text-center text-2xl font-bold text-pretty text-blue-950">
              {sectionTitle}
            </h2>
            <p className="mb-6 text-center text-gray-600">
              {sectionDescription}
            </p>
            <HeadingPhoto
              heading={sectionTitle}
              className="mx-auto mb-10 max-w-4xl"
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {communities.map((community) => {
                const photo = getCommunityHeroImage(community.slug) ?? hero;
                return (
                  <Link
                    key={community.slug}
                    href={`${areaPath}/${community.slug}`}
                    className="group overflow-hidden rounded-xl border transition hover:border-blue-300 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/9] w-full bg-slate-200">
                      <Image
                        src={siteImage(photo.src)}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-1 text-xl font-bold text-blue-950 group-hover:text-blue-700">
                        {community.name}
                      </h3>
                      <p className="mb-3 text-sm text-gray-600">
                        {community.tagline}
                      </p>
                      <p className="mb-3 font-semibold text-blue-800">
                        {community.priceRange}
                      </p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {community.highlights.slice(0, 4).map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-center gap-2"
                          >
                            <span className="text-yellow-500" aria-hidden>
                              ✦
                            </span>{" "}
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-blue-950 px-4 py-12 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-3 text-2xl font-bold">{ctaTitle}</h2>
            <p className="mb-6 text-blue-200">{ctaDescription}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-yellow-400 px-8 py-3 font-bold text-blue-950 transition hover:bg-yellow-300"
              >
                Get a Free Community Comparison
              </Link>
              <Link
                href={`/maps${areaPath}`}
                className="inline-block rounded-lg border border-yellow-400/60 px-8 py-3 font-bold text-yellow-400 transition hover:bg-yellow-400/10"
              >
                View Area Map
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SitePage>
  );
}
