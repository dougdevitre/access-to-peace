'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavItem {
  slug: string;
  title: string;
}

interface SidebarProps {
  navigation: Record<string, NavItem[]>;
}

const sectionLabels: Record<string, string> = {
  root: 'Overview',
  modules: 'Modules',
  references: 'References',
  workflows: 'Workflows',
  templates: 'Templates',
  checklists: 'Checklists',
  schemas: 'Schemas',
  artifacts: 'Artifacts',
  routines: 'Routines',
};

const sectionOrder = ['root', 'modules', 'references', 'workflows', 'templates', 'checklists', 'schemas', 'artifacts', 'routines'];

function getHref(section: string, slug: string): string {
  if (section === 'root') {
    if (slug === 'readme') return '/';
    return `/${slug}`;
  }
  return `/${section}/${slug}`;
}

export default function Sidebar({ navigation }: SidebarProps) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    sectionOrder.forEach(s => { initial[s] = s === 'root' || s === 'modules'; });
    return initial;
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <nav className="w-64 flex-shrink-0 bg-slate-50 border-r border-slate-200 overflow-y-auto h-full">
      <div className="p-4">
        <Link href="/" className="flex items-center gap-2 mb-6">
          <span className="text-lg font-bold text-slate-900">Access To Peace</span>
        </Link>
        {sectionOrder.map(section => {
          const items = navigation[section];
          if (!items || items.length === 0) return null;
          return (
            <div key={section} className="mb-2">
              <button
                onClick={() => toggleSection(section)}
                className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider hover:text-slate-700"
              >
                {sectionLabels[section] || section}
                <span className="text-[10px]">{openSections[section] ? '\u25BC' : '\u25B6'}</span>
              </button>
              {openSections[section] && (
                <ul className="ml-1 space-y-0.5">
                  {items.map(item => {
                    const href = getHref(section, item.slug);
                    const isActive = pathname === href;
                    // Shorten long titles
                    let displayTitle = item.title;
                    if (displayTitle.length > 35) {
                      displayTitle = displayTitle.substring(0, 32) + '...';
                    }
                    // For modules, show MOD-XX prefix
                    const modMatch = item.slug.match(/^mod-(\d+)/);
                    if (modMatch) {
                      const modTitle = item.title.replace(/^MOD-\d+\s*[\u2014\u2013-]\s*/, '');
                      displayTitle = `${modMatch[1]}. ${modTitle}`;
                      if (displayTitle.length > 35) displayTitle = displayTitle.substring(0, 32) + '...';
                    }
                    return (
                      <li key={item.slug}>
                        <Link
                          href={href}
                          className={`block px-2 py-1 text-sm rounded transition-colors ${
                            isActive
                              ? 'bg-blue-100 text-blue-800 font-medium'
                              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                          }`}
                        >
                          {displayTitle}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
