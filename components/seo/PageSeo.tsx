import SchemaScript from "@/components/SchemaScript";
import {
  generatePageSchemaBundle,
  type BreadcrumbItem,
  type FAQItem,
} from "@/lib/schema";

type PageSeoProps = {
  name: string;
  description: string;
  path: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  speakable?: boolean;
  datePublished?: string;
  dateModified?: string;
  schemaId?: string;
};

/**
 * Injects page-level JSON-LD for SEO, AEO (FAQ/speakable), and GEO (entity-linked @graph).
 */
export function PageSeo({
  name,
  description,
  path,
  breadcrumbs,
  faqs,
  speakable = false,
  datePublished,
  dateModified,
  schemaId = "page-seo-schema",
}: PageSeoProps) {
  const schemas = generatePageSchemaBundle({
    name,
    description,
    path,
    breadcrumbs,
    faqs,
    speakable,
    datePublished,
    dateModified,
  });

  return <SchemaScript schemas={schemas} id={schemaId} />;
}
