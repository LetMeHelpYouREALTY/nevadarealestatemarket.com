import Link from "next/link";
import { Phone } from "lucide-react";
import { SitePage } from "@/components/layouts/SitePage";
import { agentInfo, officeInfo, businessHours } from "@/lib/site-config";
import type { BreadcrumbItem, FAQItem } from "@/lib/schema";
import type { HeroImage } from "@/lib/hero-images";

export type SeoArticleSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

type SeoArticlePageProps = {
  path: string;
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBadge?: string;
  hero?: HeroImage;
  breadcrumbs: BreadcrumbItem[];
  faqs: FAQItem[];
  intro: string[];
  sections: SeoArticleSection[];
  relatedLinks?: { href: string; label: string }[];
};

/**
 * Reusable long-form SEO/GEO/AEO landing page with FAQ + NAP CTA.
 */
export function SeoArticlePage({
  path,
  title,
  description,
  heroTitle,
  heroSubtitle,
  heroBadge,
  hero,
  breadcrumbs,
  faqs,
  intro,
  sections,
  relatedLinks = [],
}: SeoArticlePageProps) {
  return (
    <SitePage
      path={path}
      seoTitle={title}
      seoDescription={description}
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      speakable
      heroTitle={heroTitle}
      heroSubtitle={heroSubtitle}
      heroBadge={heroBadge}
      hero={hero}
    >
      <main className="pb-16">
        <article className="container mx-auto px-4 max-w-3xl pt-10">
          {intro.map((p) => (
            <p key={p.slice(0, 48)} className="text-lg text-slate-700 mb-4 leading-relaxed">
              {p}
            </p>
          ))}

          {sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {section.heading}
              </h2>
              {section.body.map((p) => (
                <p key={p.slice(0, 48)} className="text-slate-700 mb-3 leading-relaxed">
                  {p}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {faqs.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="border-b border-slate-200 pb-4">
                    <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {relatedLinks.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Related guides</h2>
              <ul className="space-y-2">
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-blue-700 hover:underline font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <aside className="mt-12 rounded-lg bg-slate-50 p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Work with Dr. Jan Duffy
            </h2>
            <p className="text-slate-700 mb-4">
              Berkshire Hathaway HomeServices Nevada Properties · License{" "}
              {agentInfo.license}. Office: {officeInfo.address.full}. Hours:{" "}
              {businessHours.display}.
            </p>
            <a
              href={agentInfo.phoneTel}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
            >
              <Phone className="h-5 w-5" />
              Call or text {agentInfo.phone}
            </a>
          </aside>
        </article>
      </main>
    </SitePage>
  );
}
