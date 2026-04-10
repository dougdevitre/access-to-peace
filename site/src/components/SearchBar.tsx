'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface SearchItem {
  slug: string;
  section: string;
  title: string;
  excerpt: string;
}

export default function SearchBar({ searchData }: { searchData: SearchItem[] }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    const lower = query.toLowerCase();
    const filtered = searchData.filter(
      item =>
        item.title.toLowerCase().includes(lower) ||
        item.excerpt.toLowerCase().includes(lower)
    ).slice(0, 10);
    setResults(filtered);
  }, [query, searchData]);

  const getHref = (item: SearchItem) => {
    if (item.section === 'root') {
      if (item.slug === 'readme') return '/';
      return `/${item.slug}`;
    }
    return `/${item.section}/${item.slug}`;
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search documentation..."
        value={query}
        onChange={e => { setQuery(e.target.value); setIsOpen(true); }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="w-64 px-3 py-1.5 text-sm border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-1 w-96 bg-white border border-slate-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {results.map((item, i) => (
            <button
              key={i}
              className="w-full text-left px-3 py-2 hover:bg-slate-50 border-b border-slate-100 last:border-0"
              onMouseDown={() => { router.push(getHref(item)); setQuery(''); setIsOpen(false); }}
            >
              <div className="text-sm font-medium text-slate-900">{item.title}</div>
              <div className="text-xs text-slate-500 capitalize">{item.section}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
