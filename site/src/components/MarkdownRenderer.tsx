'use client';

import MermaidDiagram from './MermaidDiagram';

interface MarkdownRendererProps {
  htmlContent: string;
  mermaidCharts?: string[];
}

export default function MarkdownRenderer({ htmlContent, mermaidCharts = [] }: MarkdownRendererProps) {
  // Split HTML at MERMAID_CHART_N markers (remark wraps them in <p> tags)
  const parts: { type: 'html' | 'mermaid'; content: string; chartIndex?: number }[] = [];
  const regex = /<p>MERMAID_CHART_(\d+)<\/p>/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(htmlContent)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'html', content: htmlContent.slice(lastIndex, match.index) });
    }
    parts.push({ type: 'mermaid', content: '', chartIndex: parseInt(match[1], 10) });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < htmlContent.length) {
    parts.push({ type: 'html', content: htmlContent.slice(lastIndex) });
  }

  return (
    <div className="prose prose-slate max-w-none prose-headings:scroll-mt-20 prose-table:text-sm prose-th:bg-slate-50 prose-td:border prose-th:border prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2">
      {parts.map((part, i) =>
        part.type === 'mermaid' && part.chartIndex !== undefined && mermaidCharts[part.chartIndex] ? (
          <MermaidDiagram key={i} chart={mermaidCharts[part.chartIndex]} />
        ) : part.type === 'html' ? (
          <div key={i} dangerouslySetInnerHTML={{ __html: part.content }} />
        ) : null
      )}
    </div>
  );
}
