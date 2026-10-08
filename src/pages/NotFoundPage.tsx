import React, { useState } from 'react';
import {
  Compass,
  Home,
  BookOpen,
  Search,
  ArrowRight,
  Code2,
  Building2,
  FileCode2,
  Layers
} from 'lucide-react';
import { GlobalSearchModal } from '../components/GlobalSearchModal';

interface NotFoundPageProps {
  navigate: (to: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ navigate }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchOpen(true);
  };

  const popularLinks = [
    {
      title: 'Preparation Hub',
      desc: 'All-in-one dashboard with streaks & progress',
      path: '/preparation',
      icon: BookOpen,
      color: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
    },
    {
      title: 'DSA Sheets',
      desc: 'Blind 75, Striver A2Z, Neetcode & more',
      path: '/preparation/dsa-sheets',
      icon: Code2,
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      title: 'Developer Roadmaps',
      desc: 'Frontend, Backend, DevOps, AI & System Design',
      path: '/roadmaps',
      icon: Compass,
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      title: 'Company Interview Sheets',
      desc: 'Google, Amazon, Meta, Microsoft problem sets',
      path: '/preparation/company-wise-dsa-sheet',
      icon: Building2,
      color: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
    }
  ];

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 py-16 sm:py-24 font-lexend text-center">
      <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-300">
        {/* Badge & Big 404 */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold border border-blue-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>404 • Page Not Found</span>
          </div>
          <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-zinc-900 dark:text-white">
            4<span className="text-blue-600 dark:text-blue-500">0</span>4
          </h1>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-800 dark:text-zinc-100">
            Lost in the algorithmic maze?
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed">
            The page you are looking for might have been moved, renamed, or doesn't exist. Let's get you back on track to cracking your dream tech interview.
          </p>
        </div>

        {/* Quick Search Bar & Trigger Button */}
        <div className="max-w-md mx-auto">
          <form
            onSubmit={handleQuickSearch}
            className="flex items-center gap-2 p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs"
          >
            <div className="relative flex-1 flex items-center pl-3">
              <Search className="w-4 h-4 text-zinc-400 shrink-0" />
              <input
                type="text"
                placeholder="Search DSA, roadmaps, patterns..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onClick={() => setIsSearchOpen(true)}
                className="w-full bg-transparent px-2.5 py-1.5 text-xs text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 shadow-xs"
            >
              <span>Search</span>
            </button>
          </form>
        </div>

        {/* Primary Action Buttons: Preparation & Home */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => navigate('/preparation')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Go to Preparation Hub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-bold text-xs sm:text-sm transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={() => setIsSearchOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>Quick Finder (⌘K)</span>
          </button>
        </div>

        {/* Popular Destination Shortcuts */}
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800/80 text-left">
          <p className="text-[11px] font-mono uppercase text-zinc-400 font-bold tracking-wider text-center mb-4">
            Popular Learning Paths
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            {popularLinks.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="flex items-start gap-3 p-3 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 hover:border-blue-500/40 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all text-left cursor-pointer group"
                >
                  <div className={`p-2 rounded-xl border ${item.color} shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-xs text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowRight className="w-3 h-3 text-zinc-400 group-hover:translate-x-0.5 transition-transform opacity-0 group-hover:opacity-100" />
                    </div>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        navigate={navigate}
      />
    </div>
  );
};
