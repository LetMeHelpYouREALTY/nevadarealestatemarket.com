import { SeoArticlePage } from "@/components/sections/SeoArticlePage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getHeroImageByKey } from "@/lib/hero-images";

const path = "/news";

export const metadata = buildPageMetadata({
  title: "Nevada Real Estate News & Updates | Dr. Jan Duffy",
  description:
    "Las Vegas and Henderson real estate news, builder updates, and market notes from Dr. Jan Duffy. HIP programs, community spotlights, and valley trends. Call (702) 500-1955.",
  path,
  keywords: [
    "Las Vegas real estate news",
    "Henderson housing news",
    "Nevada market updates",
    "Dr Jan Duffy blog",
  ],
});

const articles = [
  {
    href: "/market-insights/home-is-possible-hip-program",
    title: "Nevada Home Is Possible (HIP) Program Guide",
    blurb: "Down payment assistance overview for valley buyers.",
  },
  {
    href: "/william-lyon-homes-las-vegas-now-part-of-taylor-morrison",
    title: "William Lyon Homes & Taylor Morrison in Las Vegas",
    blurb: "What the builder transition means for new-construction shoppers.",
  },
  {
    href: "/nevada-real-estate-market",
    title: "Nevada Real Estate Market Hub",
    blurb: "Live-style data pages for prices, inventory, and forecasts.",
  },
  {
    href: "/market-update",
    title: "Market Update",
    blurb: "Current Las Vegas Valley housing trends.",
  },
  {
    href: "/market-insights",
    title: "Market Insights",
    blurb: "Longer-form analysis and economic drivers.",
  },
  {
    href: "/discover-your-dream-home-at-silverstone-ranch",
    title: "Silverstone Ranch Community Spotlight",
    blurb: "Northwest Las Vegas golf-course community guide.",
  },
];

const faqs = [
  {
    question: "Is this the news blog for nevadarealestatemarket.com?",
    answer:
      "Yes. /news is the current news and updates hub. Older WordPress URLs like /news-blog/ redirect here so Google can consolidate indexing.",
  },
  {
    question: "How often is content updated?",
    answer:
      "Market hubs refresh with new valley data; community and program guides are updated when rules or inventory patterns change. Call Dr. Jan for same-week comps.",
  },
];

export default function NewsPage() {
  return (
    <SeoArticlePage
      path={path}
      title={metadata.title as string}
      description={metadata.description as string}
      hero={getHeroImageByKey("market-update")}
      heroBadge="News & Updates"
      heroTitle="Nevada Real Estate News"
      heroSubtitle="Builder notes, assistance programs, and valley market reading from Dr. Jan Duffy."
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "News", url: path },
      ]}
      faqs={faqs}
      intro={[
        "Stay current on Southern Nevada housing without digging through outdated WordPress archives. Start with the featured updates below, then open the full market hubs for data.",
      ]}
      sections={[
        {
          heading: "Featured updates",
          body: ["Jump into the guides Google readers ask for most:"],
        },
      ]}
      relatedLinks={articles.map((a) => ({ href: a.href, label: a.title }))}
    />
  );
}
