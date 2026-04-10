'use client';

import { useEffect, useRef, useState } from 'react';

export default function MermaidDiagram({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    const renderDiagram = async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: 'default',
          securityLevel: 'loose',
          flowchart: { useMaxWidth: true, htmlLabels: true },
        });
        const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        setSvg(renderedSvg);
      } catch (e) {
        console.error('Mermaid render error:', e);
        setSvg(`<pre class="text-red-500 text-sm">Diagram render error</pre>`);
      }
    };
    renderDiagram();
  }, [chart]);

  return (
    <div
      ref={containerRef}
      className="my-6 overflow-x-auto flex justify-center bg-white rounded-lg border border-gray-200 p-4"
      dangerouslySetInnerHTML={{
        __html: svg || '<div class="text-gray-400 text-sm p-4">Loading diagram...</div>',
      }}
    />
  );
}
