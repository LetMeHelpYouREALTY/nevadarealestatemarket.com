import Link from "next/link";
import { getRecentGbpPosts } from "@/lib/gbp-posts";
import { siteConfig } from "@/lib/site-config";

type GbpPostsFeedProps = {
  limit?: number;
  heading?: string;
  className?: string;
};

/**
 * Surfaces GBP-style weekly posts on the website so Maps/GBP and the site
 * share the same freshness signal (titles, dates, CTAs, NAP phone).
 */
export function GbpPostsFeed({
  limit = 4,
  heading = "Latest Google Business updates",
  className = "",
}: GbpPostsFeedProps) {
  const posts = getRecentGbpPosts(limit);

  return (
    <section className={className} aria-labelledby="gbp-posts-heading">
      <h2
        id="gbp-posts-heading"
        className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 text-pretty"
      >
        {heading}
      </h2>
      <p className="text-slate-600 mb-8 max-w-2xl">
        The same market notes we post to Google Business Profile — so searchers
        who land here see current Henderson and Las Vegas Valley guidance.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 mb-2">
              {post.type} · {post.publishDate}
            </p>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              {post.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line line-clamp-6">
              {post.content}
            </p>
            {post.cta ? (
              <Link
                href={
                  post.cta.url.startsWith(siteConfig.url)
                    ? post.cta.url.slice(siteConfig.url.length) || "/"
                    : post.cta.url
                }
                className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:underline"
              >
                {post.cta.text} →
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
