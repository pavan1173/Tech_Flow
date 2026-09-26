import React, { useState, useMemo } from 'react';
import { mostAskedData } from '../data/roleWiseData';
import { HelpCircle, Search, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface MostAskedQuestionsPageProps {
  navigate: (to: string) => void;
}

export const MostAskedQuestionsPage: React.FC<MostAskedQuestionsPageProps> = ({ navigate }) => {
  const categories = mostAskedData?.categories || [];
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.title || 'Core Subjects');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategoryObj = categories.find((c: any) => c.title === activeCategory) || categories[0];
  const items = currentCategoryObj?.questions || [];

  const filteredItems = useMemo(() => {
    return items.filter((q: any) => {
      const title = (q.title || '').toLowerCase();
      const desc = (q.description || '').toLowerCase();
      return title.includes(searchQuery.toLowerCase()) || desc.includes(searchQuery.toLowerCase());
    });
  }, [items, searchQuery]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.includes('dbms')) {
      navigate('/preparation/dbms-playlists');
    } else if (href.includes('system-design')) {
      navigate('/preparation/system-design-sheet');
    } else {
      navigate('/preparation/role-wise');
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 font-lexend">
      {/* Header */}
      <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff] mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          High Frequency Interview Questions
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
          Most Asked Interview Questions (2026-27)
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          The highest-frequency conceptual, algorithmic, and core engineering questions asked repeatedly across tier-1 software engineering interviews.
        </p>
      </div>

      {/* Domain Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat: any) => (
          <button
            key={cat.title}
            onClick={() => setActiveCategory(cat.title)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeCategory === cat.title
                ? 'bg-[#6C47FF] text-white shadow-md shadow-indigo-500/20'
                : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-700/80'
            }`}
          >
            {cat.title} ({cat.questions?.length || 0})
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search question tracks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6C47FF]"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item: any, idx: number) => (
          <a
            key={item.title || idx}
            href={item.href || '#'}
            onClick={(e) => handleNav(e, item.href || '#')}
            className="group p-6 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 shadow-xs cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#6C47FF]">
                  {activeCategory}
                </span>
                {item.questionCount && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {item.questionCount} Questions
                  </span>
                )}
              </div>

              <h2 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-[#6C47FF] dark:group-hover:text-[#9f85ff] transition-colors mb-2">
                {item.title}
              </h2>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs font-semibold text-[#6C47FF] dark:text-[#9f85ff]">
              <span>Open Question Bank</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
