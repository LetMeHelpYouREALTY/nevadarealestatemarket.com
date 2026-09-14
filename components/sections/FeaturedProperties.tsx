"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { marketStats } from "@/lib/site-config";
import { siteImage } from "@/lib/images/src";

type CommunityCard = {
  name: string;
  location: string;
  href: string;
  image: string;
  median: string;
  blurb: string;
};

const communities: CommunityCard[] = [
  {
    name: "Summerlin",
    location: "Las Vegas, NV",
    href: "/summerlin",
    image: "/images/hero/summerlin-red-rock.jpg",
    median: marketStats.summerlin.medianPriceFormatted,
    blurb: "Red Rock Canyon views, 150+ parks, and master-planned villages.",
  },
  {
    name: "Henderson",
    location: "Henderson, NV",
    href: "/henderson",
    image: "/images/hero/henderson-neighborhood.jpg",
    median: marketStats.henderson.medianPriceFormatted,
    blurb: "Lake Las Vegas, Green Valley, Seven Hills, and Anthem corridors.",
  },
  {
    name: "Las Vegas Valley",
    location: "Clark County, NV",
    href: "/las-vegas",
    image: "/images/hero/las-vegas-skyline.jpg",
    median: marketStats.lasVegas.medianPriceFormatted,
    blurb: "Valley-wide listings, new construction, and luxury estates.",
  },
];

const CommunityCardView = ({ community }: { community: CommunityCard }) => (
  <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
    <div className="relative h-48 md:h-64">
      <Image
        src={siteImage(community.image)}
        alt={`${community.name} homes in ${community.location}`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
      />
      <div className="absolute top-4 right-4 rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
        Median {community.median}
      </div>
    </div>
    <div className="p-6">
      <h3 className="mb-1 text-xl font-bold text-slate-900">{community.name}</h3>
      <p className="mb-3 flex items-center gap-1 text-sm text-slate-600">
        <MapPin className="h-4 w-4 text-blue-600" aria-hidden />
        {community.location}
      </p>
      <p className="mb-4 text-slate-600">{community.blurb}</p>
      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
        <Link href={community.href}>
          Explore {community.name} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  </article>
);

export default function FeaturedProperties() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl text-pretty">
              Explore Valley Communities
            </h2>
            <p className="text-lg text-slate-600">
              Live MLS search sits under every hero. These area hubs pair current
              medians with neighborhood photography — not placeholder listings.
            </p>
          </div>
          <Button asChild variant="outline" className="mt-2 md:mt-0">
            <Link href="/compare-communities">Compare Communities</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {communities.map((community) => (
            <CommunityCardView key={community.href} community={community} />
          ))}
        </div>
      </div>
    </section>
  );
}
