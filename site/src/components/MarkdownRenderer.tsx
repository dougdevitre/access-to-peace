'use client';

import { useEffect, useState } from 'react';
import MermaidDiagram from './MermaidDiagram';

export default function MarkdownRenderer({ htmlContent }: { htmlContent: string }) {
  const [parts, setParts] = useState<{ type: 'html' | 'mermaid'; content: string }[]>([]);

  useEffect(() => {
    // Split HTML content at mermaid placeholders
    const regex = /<div class="mermaid-diagram" data-chart="([^"]+)"><\/div>/g;
    const result: { type: 'html' | 'mermaid'; content: string }[] = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(htmlContent)) !== null) {
      if (match.index > lastIndex) {
        result.push({ type: 'html', content: htmlContent.slice(lastIndex, match.index) });
      }
      result.push({ type: 'mermaid', content: decodeURIComponent(match[1]) });
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < htmlContent.length) {
      result.push({ type: 'html', content: htmlContent.slice(lastIndex) });
    }

    setParts(result);
  }, [htmlContent]);

  return (
    <div className="prose prose-slate max-w-none prose-headings:scroll-mt-20 prose-table:text-sm prose-th:bg-slate-50 prose-td:border prose-th:border prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2">
      {parts.map((part, i) =>
        part.type === 'mermaid' ? (
          <MermaidDiagram key={i} chart={part.content} />
        ) : (
          <div key={i} dangerouslySetInnerHTML={{ __html: part.content }} />
        )
      )}
    </div>
  );
}
