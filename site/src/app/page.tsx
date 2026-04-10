import { getPage } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default async function HomePage() {
  const page = await getPage("root", "readme");
  if (!page) return <div>Content not found</div>;
  return <MarkdownRenderer htmlContent={page.htmlContent} />;
}
