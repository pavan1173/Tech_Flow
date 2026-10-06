import React from 'react';
import { dsaSheetsList } from '../data/common';
import { AlignLeft, Code2, Sparkles, Layers, ArrowRight, CheckCircle2, Bookmark, Flame } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { AuthGate } from '../components/AuthGate';

interface DsaSheetsPageProps {
  navigate: (to: string) => void;
}

export const DsaSheetsPage: React.FC<DsaSheetsPageProps> = ({ navigate }) => {
  const { isAuthenticated } = useAuth();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (isExternal) return;
    e.preventDefault();
    navigate(href);
  };

  const getCardTheme = (slug: string) => {
    switch (slug) {
      case 'blind-75-dsa-sheet':
        return {
          gradient: 'from-amber-500/15 via-orange-500/10 to-amber-600/5',
          accent: 'text-amber-500',
          border: 'group-hover:border-amber-500/40',
          badge: 'High Yield 75',
          iconBg: 'bg-amber-500/10 text-amber-500 dark:text-amber-400'
        };
      case 'striver-a2z-dsa-sheet':
        return {
          gradient: 'from-blue-600/15 via-indigo-600/10 to-cyan-500/5',
          accent: 'text-blue-500',
          border: 'group-hover:border-blue-500/40',
          badge: 'A to Z Roadmap',
          iconBg: 'bg-blue-500/10 text-blue-500 dark:text-blue-400'
        };
      case 'love-babbar-dsa-sheet':
        return {
          gradient: 'from-rose-500/15 via-orange-500/10 to-amber-500/5',
          accent: 'text-rose-500',
          border: 'group-hover:border-rose-500/40',
          badge: 'Complete 450',
          iconBg: 'bg-rose-500/10 text-rose-500 dark:text-rose-400'
        };
      case 'shradha-khapra-dsa-sheet':
        return {
          gradient: 'from-purple-500/15 via-pink-500/10 to-rose-500/5',
          accent: 'text-purple-500',
          border: 'group-hover:border-purple-500/40',
          badge: 'Placement Prep',
          iconBg: 'bg-purple-500/10 text-purple-500 dark:text-purple-400'
        };
      case 'rohit-negi-dsa-sheet':
        return {
          gradient: 'from-emerald-500/15 via-teal-500/10 to-cyan-500/5',
          accent: 'text-emerald-500',
          border: 'group-hover:border-emerald-500/40',
          badge: 'Algorithmic Core',
          iconBg: 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400'
        };
      case 'arsh-goyal-dsa-sheet':
        return {
          gradient: 'from-violet-500/15 via-indigo-500/10 to-blue-500/5',
          accent: 'text-violet-500',
          border: 'group-hover:border-violet-500/40',
          badge: '30-Day Challenge',
          iconBg: 'bg-violet-500/10 text-violet-500 dark:text-violet-400'
        };
      case 'fraz-dsa-sheet':
        return {
          gradient: 'from-cyan-500/15 via-blue-500/10 to-indigo-500/5',
          accent: 'text-cyan-500',
          border: 'group-hover:border-cyan-500/40',
          badge: 'Pattern Based',
          iconBg: 'bg-cyan-500/10 text-cyan-500 dark:text-cyan-400'
        };
      case 'neetcode-dsa-sheet':
        return {
          gradient: 'from-emerald-600/15 via-green-500/10 to-teal-500/5',
          accent: 'text-emerald-500',
          border: 'group-hover:border-emerald-500/40',
          badge: 'Essential 150',
          iconBg: 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400'
        };
      default:
        return {
          gradient: 'from-blue-500/15 via-indigo-500/10 to-purple-500/5',
          accent: 'text-blue-500',
          border: 'group-hover:border-blue-500/40',
          badge: 'Problem Sheet',
          iconBg: 'bg-blue-500/10 text-blue-500 dark:text-blue-400'
        };
    }
  };

  const renderSheetCards = (list: typeof dsaSheetsList) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {list.map((sheet: any) => {
        const theme = getCardTheme(sheet.slug);

        return (
          <a
            key={sheet.slug}
            href={sheet.href}
            onClick={(e) => handleNav(e, sheet.href, sheet.isExternal)}
            className={`group rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230] ${theme.border} overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col cursor-pointer select-none`}
          >
            {/* Tech Banner - Clean, modern algorithmic graphic without personal photos */}
            <div className={`relative h-36 w-full overflow-hidden bg-gradient-to-br ${theme.gradient} border-b border-zinc-100 dark:border-[#161c28] p-5 flex flex-col justify-between`}>
              {/* Background ambient pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
              
              <div className="flex items-center justify-between relative z-10">
                <div className={`w-10 h-10 rounded-xl ${theme.iconBg} flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110`}>
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xs border border-zinc-200/80 dark:border-zinc-700/80 text-[10px] font-bold text-zinc-700 dark:text-zinc-300 shadow-xs">
                  {theme.badge}
                </span>
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Curated Sheet</span>
                </span>
                <span className={`text-xs font-bold font-mono ${theme.accent} flex items-center gap-1`}>
                  <Flame className="w-3.5 h-3.5" />
                  <span>{sheet.problems} Qs</span>
                </span>
              </div>
            </div>

            {/* Content info */}
            <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
              <div className="space-y-2">
                <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                  {sheet.title}
                </h2>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                  {sheet.desc || 'Comprehensive problem collection covering foundational algorithms, data structures, and company interview patterns.'}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-[#161c28] flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-1.5 font-medium">
                  <AlignLeft className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{sheet.problems} Problems</span>
                </div>
                <span className="font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Solve</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fcfcfb] dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 p-4 sm:p-6 lg:p-10 max-w-[1440px] mx-auto space-y-8 font-lexend transition-colors duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Verified Placement Roadmaps</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          DSA Sheets
        </h1>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Structured problem sheets categorized by topic, frequency, and difficulty to prepare you for technical coding interviews.
        </p>
      </div>

      {/* Sheets Grid */}
      {!isAuthenticated ? (
        <AuthGate
          totalCount="all 8"
          featureName="curated DSA sheets"
          title="Sign in to access all DSA Sheets"
        >
          {renderSheetCards(dsaSheetsList.slice(0, 4))}
        </AuthGate>
      ) : (
        renderSheetCards(dsaSheetsList)
      )}
    </div>
  );
};
