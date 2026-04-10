import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const CONTENT_DIR = path.join(/*turbopackIgnore: true*/ process.cwd(), '..');

// Interface for a content page
export interface ContentPage {
  slug: string;
  section: string;
  title: string;
  content: string; // raw markdown
  htmlContent: string; // rendered HTML
  mermaidCharts: string[]; // extracted mermaid diagram code
}

// Get all markdown files recursively, excluding site/ and node_modules
export function getAllMarkdownFiles(): { filepath: string; section: string; slug: string }[] {
  const sections = [
    { dir: '.', section: 'root', files: ['README.md', 'SKILL.md', 'CONTRIBUTING.md', 'CODE_OF_CONDUCT.md', 'CHANGELOG.md'] },
    { dir: 'modules', section: 'modules' },
    { dir: 'references', section: 'references' },
    { dir: 'workflows', section: 'workflows' },
    { dir: 'templates', section: 'templates' },
    { dir: 'checklists', section: 'checklists' },
    { dir: 'schemas', section: 'schemas' },
    { dir: 'artifacts', section: 'artifacts' },
    { dir: 'routines', section: 'routines' },
  ];

  const results: { filepath: string; section: string; slug: string }[] = [];

  for (const sec of sections) {
    if (sec.files) {
      // Root files - specific list
      for (const file of sec.files) {
        const fp = path.join(CONTENT_DIR, file);
        if (fs.existsSync(fp)) {
          results.push({
            filepath: fp,
            section: sec.section,
            slug: file.replace('.md', '').toLowerCase(),
          });
        }
      }
    } else {
      // Directory - all .md files
      const dirPath = path.join(CONTENT_DIR, sec.dir);
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
        for (const file of files) {
          results.push({
            filepath: path.join(dirPath, file),
            section: sec.section,
            slug: file.replace('.md', '').toLowerCase(),
          });
        }
      }
    }
  }

  return results;
}

// Parse a markdown file into ContentPage
export async function parseMarkdownFile(filepath: string, section: string, slug: string): Promise<ContentPage> {
  const fileContent = fs.readFileSync(filepath, 'utf-8');
  const { content } = matter(fileContent);

  // Extract title from first H1
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ');

  // Extract mermaid blocks into a separate array, replace with indexed markers
  const mermaidCharts: string[] = [];
  const processedContent = content.replace(/```mermaid\n([\s\S]*?)```/g, (_, code) => {
    const index = mermaidCharts.length;
    mermaidCharts.push(code.trim());
    return `\n\nMERMAID_CHART_${index}\n\n`;
  });

  const result = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(processedContent);

  return {
    slug,
    section,
    title,
    content,
    htmlContent: result.toString(),
    mermaidCharts,
  };
}

// Get a single page by section and slug
export async function getPage(section: string, slug: string): Promise<ContentPage | null> {
  const allFiles = getAllMarkdownFiles();
  const file = allFiles.find(f => f.section === section && f.slug === slug);
  if (!file) return null;
  return parseMarkdownFile(file.filepath, file.section, file.slug);
}

// Get all pages for a section
export async function getSectionPages(section: string): Promise<ContentPage[]> {
  const allFiles = getAllMarkdownFiles().filter(f => f.section === section);
  const pages = await Promise.all(allFiles.map(f => parseMarkdownFile(f.filepath, f.section, f.slug)));
  return pages;
}

// Build navigation structure
export function getNavigation() {
  const allFiles = getAllMarkdownFiles();
  const nav: Record<string, { slug: string; title: string }[]> = {};

  for (const file of allFiles) {
    if (!nav[file.section]) nav[file.section] = [];
    const content = fs.readFileSync(file.filepath, 'utf-8');
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : file.slug.replace(/-/g, ' ');
    nav[file.section].push({ slug: file.slug, title });
  }

  return nav;
}

// Build search index data
export function getSearchData(): { slug: string; section: string; title: string; excerpt: string }[] {
  const allFiles = getAllMarkdownFiles();
  return allFiles.map(file => {
    const content = fs.readFileSync(file.filepath, 'utf-8');
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : file.slug;
    // Get first 300 chars of content after the title as excerpt
    const cleaned = content.replace(/^#.+$/m, '').replace(/```[\s\S]*?```/g, '').replace(/[#*_\-|>]/g, '').trim();
    const excerpt = cleaned.substring(0, 300);
    return { slug: file.slug, section: file.section, title, excerpt };
  });
}
