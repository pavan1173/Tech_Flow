import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Search,
  Compass,
  Code,
  Layers,
  Building2,
  Target,
  Database,
  FileText,
  MessageSquareQuote,
  Sparkles,
  ArrowRight,
  Command,
  CornerDownLeft,
  X
} from 'lucide-react';
import { GLOBAL_SEARCH_ITEMS, SearchResultItem } from '../data/globalSearchIndex';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (to: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  navigate,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Categories list
  const categories = ['All', 'Roadmaps', 'DSA Sheets', 'Coding Patterns', 'Company Sheets', 'System Design & SQL', 'Core CS', 'Career & HR'];

  // Filter items
  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GLOBAL_SEARCH_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      if (!q) return true;

      // Text search
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSubtitle = item.subtitle.toLowerCase().includes(q);
      const matchCategory = item.category.toLowerCase().includes(q);
      const matchTags = item.tags?.some((t) => t.toLowerCase().includes(q));

      return matchTitle || matchSubtitle || matchCategory || matchTags;
    });
  }, [query, selectedCategory]);

  // Reset index when query or category changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, selectedCategory]);

  // Keyboard navigation inside modal
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : Math.max(0, filteredResults.length - 1)));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredResults[selectedIndex]) {
        handleSelect(filteredResults[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  const handleSelect = (item: SearchResultItem) => {
    navigate(item.url);
    onClose();
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Roadmaps':
        return <Compass className="w-4 h-4 text-blue-400" />;
      case 'DSA Sheets':
        return <Code className="w-4 h-4 text-emerald-400" />;
      case 'Coding Patterns':
        return <Layers className="w-4 h-4 text-amber-400" />;
      case 'Company Sheets':
        return <Building2 className="w-4 h-4 text-purple-400" />;
      case 'Package Sheets':
        return <Target className="w-4 h-4 text-rose-400" />;
      case 'System Design & SQL':
        return <Database className="w-4 h-4 text-cyan-400" />;
      case 'Core CS':
        return <FileText className="w-4 h-4 text-indigo-400" />;
      default:
        return <MessageSquareQuote className="w-4 h-4 text-zinc-400" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 md:p-10 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl mt-4 sm:mt-12 bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-150 font-sans"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Header */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40">
          <Search className="w-5 h-5 text-zinc-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search DSA sheets, roadmaps, patterns, company sheets..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors mr-2 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Quick Filter Categories Strip */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-zinc-100 dark:border-zinc-800/60 overflow-x-auto scrollbar-none bg-white dark:bg-[#0a0d14]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-500/15 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/30'
                  : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div ref={listRef} className="flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-zinc-100 dark:divide-zinc-800/40">
          {filteredResults.length > 0 ? (
            filteredResults.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-start justify-between gap-3 p-3 rounded-xl transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60'
                      : 'hover:bg-zinc-50 dark:hover:bg-zinc-900/50 border border-transparent'
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="mt-0.5 p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 shrink-0">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-sm font-semibold truncate ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-900 dark:text-white'}`}>
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-mono font-medium px-1.5 py-0.2 rounded bg-zinc-200/70 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-300/40 dark:border-zinc-700/40 shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-center">
                    <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 hidden sm:inline">
                      {item.category}
                    </span>
                    <CornerDownLeft className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-blue-500 translate-x-0.5' : 'text-zinc-300 dark:text-zinc-600'}`} />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 px-4 space-y-2">
              <Search className="w-8 h-8 text-zinc-400 mx-auto opacity-60" />
              <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                No results found for "{query}"
              </p>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                Try searching for keywords like "Frontend", "Sliding Window", "Google", "Striver", or "System Design".
              </p>
            </div>
          )}
        </div>

        {/* Footer with Keyboard Shortcuts helper */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900/80 border-t border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700">↓</kbd>
              <span className="hidden sm:inline">navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700">↵</kbd>
              <span className="hidden sm:inline">select</span>
            </span>
          </div>

          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700">ESC</kbd>
            <span>close</span>
          </div>
        </div>
      </div>
    </div>
  );
};
