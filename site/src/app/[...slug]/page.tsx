import { getPage, getAllMarkdownFiles, getSectionPages } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Link from "next/link";

const sections = [
  "modules",
  "references",
  "workflows",
  "templates",
  "checklists",
  "schemas",
  "artifacts",
  "routines",
];

export async function generateStaticParams() {
  const allFiles = getAllMarkdownFiles();
  const params: { slug: string[] }[] = [];

  // Root pages (e.g., /skill, /contributing)
  allFiles
    .filter((f) => f.section === "root" && f.slug !== "readme")
    .forEach((f) => params.push({ slug: [f.slug] }));

  // Section index pages (e.g., /modules, /references)
  sections.forEach((s) => params.push({ slug: [s] }));

  // Section detail pages (e.g., /modules/mod-01-deescalation-rewriter)
  allFiles
    .filter((f) => sections.includes(f.section))
    .forEach((f) => params.push({ slug: [f.section, f.slug] }));

  return params;
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  // Single segment: either a root page or a section index
  if (slug.length === 1) {
    const segment = slug[0];

    // Check if it's a section index
    if (sections.includes(segment)) {
      const pages = await getSectionPages(segment);
      return (
        <div>
          <h1 className="text-3xl font-bold mb-6 text-slate-900 capitalize">
            {segment}
          </h1>
          <div className="grid gap-3">
            {pages.map((page) => (
              <Link
                key={page.slug}
                href={`/${segment}/${page.slug}`}
                className="block p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <h2 className="text-lg font-medium text-slate-900">
                  {page.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      );
    }

    // Otherwise it's a root page
    const page = await getPage("root", segment);
    if (!page) return <div className="text-slate-500">Page not found</div>;
    return <MarkdownRenderer htmlContent={page.htmlContent} mermaidCharts={page.mermaidCharts} />;
  }

  // Two segments: section/slug detail page
  if (slug.length === 2) {
    const [section, pageSlug] = slug;
    const page = await getPage(section, pageSlug);
    if (!page) return <div className="text-slate-500">Page not found</div>;
    return <MarkdownRenderer htmlContent={page.htmlContent} mermaidCharts={page.mermaidCharts} />;
  }

  return <div className="text-slate-500">Page not found</div>;
}
