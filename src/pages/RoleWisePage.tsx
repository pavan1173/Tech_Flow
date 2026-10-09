import React, { useState, useMemo } from 'react';
import { roleWiseData } from '../data/roleWiseData';
import { RoleIcon } from '../components/RoleIcon';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { GoogleLogoIcon } from '../components/AuthGate';
import {
  Search,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  AlignLeft,
  Check,
  Star,
  Compass,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface RoleWisePageProps {
  roleSlug?: string;
  navigate: (to: string) => void;
}

export const RoleWisePage: React.FC<RoleWisePageProps> = ({ roleSlug, navigate }) => {
  const { isSolved, toggleSolved, isBookmarked, toggleBookmark: toggleGlobalBookmark } = useProgress();
  const { isAuthenticated, loginWithGoogle, openAuthModal, authReady } = useAuth();
  const categories = roleWiseData?.categories || [];

  // Flatten all roles across categories
  const allRoles = useMemo(() => {
    return categories.flatMap((cat: any) =>
      (cat.roles || []).map((r: any) => ({
        ...r,
        categoryTitle: cat.title
      }))
    );
  }, [categories]);

  // Selected role state
  const selectedRole = useMemo(() => {
    if (!roleSlug) return null;
    return allRoles.find((r: any) => r.slug === roleSlug) || null;
  }, [roleSlug, allRoles]);

  // Search state for hub view
  const [hubSearchQuery, setHubSearchQuery] = useState('');

  // Detail view states
  const [detailSearchQuery, setDetailSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Easy' | 'Medium' | 'Hard' | 'Bookmarked'>('All');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<number, boolean>>({});

  const toggleBookmark = (probId: string, e: React.SyntheticEvent) => {
    e.stopPropagation();
    toggleGlobalBookmark(probId);
  };

  const toggleExpand = (idx: number) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  const handleSignInWithGoogle = async () => {
    try {
      await loginWithGoogle();
    } catch {
      openAuthModal();
    }
  };

  // Filtered roles in hub
  const filteredRolesByCategory = useMemo(() => {
    const query = hubSearchQuery.toLowerCase().trim();
    return categories.map((cat: any) => {
      const matchingRoles = (cat.roles || []).filter((r: any) => {
        if (!query) return true;
        const nameMatch = (r.displayName || r.slug || '').toLowerCase().includes(query);
        const descMatch = (r.data?.metadata?.description || '').toLowerCase().includes(query);
        const catMatch = (cat.title || '').toLowerCase().includes(query);
        return nameMatch || descMatch || catMatch;
      });
      return {
        ...cat,
        roles: matchingRoles
      };
    }).filter((cat: any) => cat.roles.length > 0);
  }, [categories, hubSearchQuery]);

  // Questions inside selected role
  const roleQuestions = useMemo(() => {
    if (!selectedRole) return [];
    return selectedRole.data?.questions || [];
  }, [selectedRole]);

  // Filtered questions in detail view
  const filteredQuestions = useMemo(() => {
    if (!selectedRole) return [];
    return roleQuestions.filter((q: any, idx: number) => {
      const qNum = q.index || idx + 1;
      const probId = `role_${selectedRole.slug}_${qNum}`;
      const diff = (q.difficulty || 'Intermediate').toLowerCase();

      if (activeFilter === 'Easy' && !diff.includes('beginner') && !diff.includes('easy')) return false;
      if (activeFilter === 'Medium' && !diff.includes('intermediate') && !diff.includes('medium')) return false;
      if (activeFilter === 'Hard' && !diff.includes('advanced') && !diff.includes('hard')) return false;
      if (activeFilter === 'Bookmarked' && !isBookmarked(probId)) return false;

      if (detailSearchQuery.trim()) {
        const query = detailSearchQuery.toLowerCase();
        const titleMatch = (q.title || q.question || '').toLowerCase().includes(query);
        const ansMatch = (q.answer || '').toLowerCase().includes(query);
        const topicMatch = (q.category || q.topic || '').toLowerCase().includes(query);
        if (!titleMatch && !ansMatch && !topicMatch) return false;
      }

      return true;
    });
  }, [selectedRole, roleQuestions, activeFilter, isBookmarked, detailSearchQuery]);

  // Bookmarked count
  const bookmarkedCount = useMemo(() => {
    if (!selectedRole) return 0;
    return roleQuestions.filter((q: any, idx: number) => {
      const qNum = q.index || idx + 1;
      return isBookmarked(`role_${selectedRole.slug}_${qNum}`);
    }).length;
  }, [selectedRole, roleQuestions, isBookmarked]);

  // Difficulty counts for detail view
  const counts = useMemo(() => {
    let easy = 0;
    let medium = 0;
    let hard = 0;
    roleQuestions.forEach((q: any) => {
      const diff = (q.difficulty || 'Intermediate').toLowerCase();
      if (diff.includes('beginner') || diff.includes('easy')) easy++;
      else if (diff.includes('advanced') || diff.includes('hard')) hard++;
      else medium++;
    });
    return { easy, medium, hard, total: roleQuestions.length };
  }, [roleQuestions]);

  // Progress metrics
  const solvedCount = useMemo(() => {
    if (!selectedRole) return 0;
    return roleQuestions.filter((q: any, idx: number) =>
      isSolved(`role_${selectedRole.slug}_${q.index || idx + 1}`)
    ).length;
  }, [selectedRole, roleQuestions, isSolved]);

  const progressPercent = Math.round((solvedCount / Math.max(counts.total, 1)) * 100);

  // =========================================================================
  // VIEW 1: DETAIL VIEW FOR SELECTED ROLE (EXACT MATCH TO USER SCREENSHOT)
  // =========================================================================
  if (selectedRole) {
    const meta = selectedRole.data?.metadata || {};
    const titleText = `${selectedRole.displayName} Interview Questions`;
    const descriptionText = meta.description || `Comprehensive guide covering core fundamentals, advanced concepts, architecture, and real-world system design for ${selectedRole.displayName}.`;

    return (
      <div className="min-h-screen bg-zinc-50/50 dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-6 max-w-7xl mx-auto transition-colors">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <a
            href="/preparation"
            onClick={(e) => handleNav(e, '/preparation')}
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Preparation
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 shrink-0" />
          <a
            href="/preparation/role-wise"
            onClick={(e) => handleNav(e, '/preparation/role-wise')}
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Role-Wise Questions
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 shrink-0" />
          <span className="text-zinc-900 dark:text-white font-medium">{selectedRole.displayName}</span>
        </nav>

        {/* Header Title & Subtitle Matching Screenshot */}
        <header className="space-y-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {titleText}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal max-w-5xl leading-relaxed">
            {descriptionText}
          </p>

          {/* Metadata Row matching screenshot */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-600 dark:text-zinc-400 pt-1">
            <div className="flex items-center gap-1.5">
              <span>Total Questions:</span>
              <span className="font-bold text-zinc-900 dark:text-white font-mono">{counts.total}</span>
            </div>

            <div className="flex items-center gap-2">
              <span>Difficulty Levels:</span>
              <div className="flex items-center gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                  Easy
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400">
                  Medium
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400">
                  Hard
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Progress Card & Filter Bar Matching Screenshot */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
          {/* Progress Widget matching screenshot */}
          <div className="flex items-center gap-3.5 bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 px-4 py-2.5 rounded-2xl w-fit shadow-xs">
            <div className="w-10 h-10 rounded-full border-2 border-zinc-200 dark:border-zinc-700 flex items-center justify-center">
              <span className="text-[11px] font-bold text-zinc-900 dark:text-white font-mono">
                {progressPercent}%
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-bold text-zinc-900 dark:text-white">Overall Progress</span>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                {solvedCount}/{counts.total}
              </span>
            </div>
          </div>

          {/* Filter Pills Matching Screenshot */}
          <div className="flex items-center gap-1.5 bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 p-1 rounded-2xl overflow-x-auto shadow-xs">
            {/* All */}
            <button
              onClick={() => setActiveFilter('All')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'All'
                  ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-2xs font-bold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <span>All</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200">
                {counts.total}
              </span>
            </button>

            {/* Easy */}
            <button
              onClick={() => setActiveFilter('Easy')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'Easy'
                  ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-bold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400'
              }`}
            >
              <span>Easy</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                {counts.easy}
              </span>
            </button>

            {/* Medium */}
            <button
              onClick={() => setActiveFilter('Medium')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'Medium'
                  ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 font-bold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400'
              }`}
            >
              <span>Medium</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                {counts.medium}
              </span>
            </button>

            {/* Hard */}
            <button
              onClick={() => setActiveFilter('Hard')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'Hard'
                  ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 font-bold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400'
              }`}
            >
              <span>Hard</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                {counts.hard}
              </span>
            </button>

            {/* Bookmarked */}
            <button
              onClick={() => setActiveFilter('Bookmarked')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'Bookmarked'
                  ? 'bg-yellow-100 dark:bg-yellow-950/60 text-yellow-700 dark:text-yellow-400 font-bold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-yellow-600 dark:hover:text-yellow-400'
              }`}
            >
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              <span>Saved</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                {bookmarkedCount}
              </span>
            </button>
          </div>
        </div>

        {/* Optional Search Bar */}
        <div className="relative max-w-md">
          <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={`Search ${selectedRole.displayName} questions...`}
            value={detailSearchQuery}
            onChange={(e) => setDetailSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
          />
        </div>

        {/* Question Table Matching Exact User Screenshot */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] shadow-sm overflow-hidden transition-colors">
          {/* Table Header Row */}
          <div className="grid grid-cols-12 items-center px-4 sm:px-6 py-3 border-b border-zinc-200 dark:border-zinc-800 text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 bg-white dark:bg-[#0c1017]">
            <div className="col-span-1 text-left">STATUS</div>
            <div className="col-span-10">PROBLEM</div>
            <div className="col-span-1 text-right">REVISION</div>
          </div>

          {/* Table Body Content */}
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
            {filteredQuestions.length === 0 ? (
              <div className="p-12 text-center text-xs text-zinc-500">
                No questions found matching your filter or search.
              </div>
            ) : !authReady ? (
              <div className="p-8 space-y-4 animate-pulse">
                <div className="h-12 bg-zinc-100 dark:bg-zinc-800/40 rounded-xl" />
                <div className="h-12 bg-zinc-100 dark:bg-zinc-800/40 rounded-xl" />
                <div className="h-12 bg-zinc-100 dark:bg-zinc-800/40 rounded-xl" />
              </div>
            ) : !isAuthenticated ? (
              <>
                {/* 1. First 3 Questions - Crystal Clear & Interactive as shown in screenshot */}
                {filteredQuestions.slice(0, 3).map((q: any, idx: number) => {
                  const qNum = q.index || idx + 1;
                  const probId = `role_${selectedRole.slug}_${qNum}`;
                  const isDone = isSolved(probId);
                  const isItemBookmarked = isBookmarked(probId);
                  const isOpen = !!expandedQuestions[idx];

                  return (
                    <div key={`preview-${idx}`} className="transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-900/30">
                      <div
                        onClick={() => toggleExpand(idx)}
                        className="grid grid-cols-12 items-center px-4 sm:px-6 py-3.5 sm:py-4 gap-2 cursor-pointer select-none"
                      >
                        {/* Status Checkbox */}
                        <div className="col-span-1 flex items-center">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleSolved(probId);
                            }}
                            className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all cursor-pointer ${
                              isDone
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : 'border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 bg-white dark:bg-zinc-900/60'
                            }`}
                          >
                            {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </button>
                        </div>

                        {/* Question Title */}
                        <div className="col-span-10 flex items-center gap-2">
                          <span className="font-semibold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            {qNum}. {q.title || q.question}
                          </span>
                        </div>

                        {/* Revision Star */}
                        <div className="col-span-1 flex items-center justify-end">
                          <button
                            type="button"
                            onClick={(e) => toggleBookmark(probId, e)}
                            className="p-1 rounded-md text-zinc-400 hover:text-amber-500 transition-colors cursor-pointer"
                          >
                            <Star className={`w-4 h-4 ${isItemBookmarked ? 'fill-amber-400 text-amber-400' : 'text-zinc-400'}`} />
                          </button>
                        </div>
                      </div>

                      {/* Expandable Answer */}
                      {isOpen && (
                        <div className="px-4 sm:px-6 pb-4 pt-1 bg-zinc-50/70 dark:bg-[#090d14]/60 border-t border-zinc-200 dark:border-zinc-800">
                          <div className="p-4 rounded-xl bg-white dark:bg-[#07090e] border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal whitespace-pre-line shadow-xs">
                            {q.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* 2. Gated Preview Container with Blurred Rows and Centered Continue with Google Overlay */}
                <div className="relative overflow-hidden min-h-[360px]">
                  {/* Blurred Background Questions */}
                  <div className="filter blur-[4.5px] opacity-35 select-none pointer-events-none divide-y divide-zinc-200 dark:divide-zinc-800">
                    {filteredQuestions.slice(3, 11).map((q: any, idx: number) => {
                      const qNum = q.index || idx + 4;
                      return (
                        <div key={`locked-row-${idx}`} className="grid grid-cols-12 items-center px-4 sm:px-6 py-3.5 sm:py-4 gap-2">
                          <div className="col-span-1 flex items-center">
                            <div className="w-5 h-5 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/60" />
                          </div>
                          <div className="col-span-10 flex items-center gap-2">
                            <span className="font-semibold text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                              {qNum}. {q.title || q.question}
                            </span>
                          </div>
                          <div className="col-span-1 flex items-center justify-end">
                            <Star className="w-4 h-4 text-zinc-400" />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Gradient Fog */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/75 to-white/95 dark:from-[#0c1017]/20 dark:via-[#0c1017]/75 dark:to-[#0c1017]/95 pointer-events-none" />

                  {/* Centered Sign in with Google Callout Box matching Screenshot */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-20 pointer-events-auto">
                    <div className="flex flex-col items-center gap-4 max-w-lg">
                      <p className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white leading-snug">
                        Sign in with Google to unlock all {counts.total} role-wise interview questions and track your progress.
                      </p>

                      <button
                        type="button"
                        onClick={handleSignInWithGoogle}
                        className="inline-flex items-center justify-center gap-3 px-6 py-2.5 sm:py-3 rounded-full bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 font-semibold text-xs sm:text-sm transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer border border-zinc-900 dark:border-white"
                      >
                        <GoogleLogoIcon className="w-4 h-4" />
                        <span>Continue with Google</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Full Unlocked Questions Table */}
                {filteredQuestions.map((q: any, idx: number) => {
                  const qNum = q.index || idx + 1;
                  const probId = `role_${selectedRole.slug}_${qNum}`;
                  const isDone = isSolved(probId);
                  const isItemBookmarked = isBookmarked(probId);
                  const isOpen = !!expandedQuestions[idx];
                  const diff = q.difficulty || 'Intermediate';

                  return (
                    <div key={`${selectedRole.slug}-${qNum}-${idx}`} className="transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-900/30">
                      <div
                        onClick={() => toggleExpand(idx)}
                        className="grid grid-cols-12 items-center px-4 sm:px-6 py-3.5 sm:py-4 gap-2 cursor-pointer select-none"
                      >
                        {/* Status Checkbox */}
                        <div className="col-span-1 flex items-center">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleSolved(probId);
                            }}
                            className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all cursor-pointer ${
                              isDone
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : 'border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 bg-white dark:bg-zinc-900/60'
                            }`}
                          >
                            {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </button>
                        </div>

                        {/* Question Title */}
                        <div className="col-span-10 flex items-center gap-2">
                          <span className="font-semibold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            {qNum}. {q.title || q.question}
                          </span>
                        </div>

                        {/* Revision Star */}
                        <div className="col-span-1 flex items-center justify-end">
                          <button
                            type="button"
                            onClick={(e) => toggleBookmark(probId, e)}
                            className="p-1 rounded-md text-zinc-400 hover:text-amber-500 transition-colors cursor-pointer"
                          >
                            <Star className={`w-4 h-4 ${isItemBookmarked ? 'fill-amber-400 text-amber-400' : 'text-zinc-400'}`} />
                          </button>
                        </div>
                      </div>

                      {/* Expandable Answer */}
                      {isOpen && (
                        <div className="px-4 sm:px-6 pb-4 pt-1 bg-zinc-50/70 dark:bg-[#090d14]/60 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                              ANSWER & EXPLANATION
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              diff.toLowerCase().includes('beginner') || diff.toLowerCase().includes('easy')
                                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400'
                                : diff.toLowerCase().includes('advanced') || diff.toLowerCase().includes('hard')
                                ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400'
                                : 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400'
                            }`}>
                              {diff}
                            </span>
                          </div>
                          <div className="p-4 rounded-xl bg-white dark:bg-[#07090e] border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal whitespace-pre-line shadow-xs">
                            {q.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>

        {/* Interactive Role Roadmap Discovery Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 border border-blue-200 dark:border-blue-900/50 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600 text-white shadow-xs">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-zinc-900 dark:text-white">
                Want a complete, step-by-step learning path for {selectedRole.displayName}?
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Explore structured stages, curated topic playlists, and code milestones.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const targetSlug = selectedRole.slug
                .replace('-developer', '')
                .replace('-engineer', '')
                .replace('-specialist', '');
              navigate(`/preparation/roadmaps/${targetSlug}`);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors cursor-pointer self-start sm:self-auto shrink-0 shadow-xs"
          >
            <span>Explore Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: MAIN HUB VIEW
  // =========================================================================
  return (
    <div className="min-h-screen bg-zinc-50/50 dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-8 max-w-7xl mx-auto transition-colors">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 shrink-0" />
        <span className="text-zinc-900 dark:text-white font-medium">Role-Wise Questions</span>
      </div>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Role-Wise Interview Questions
        </h1>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal">
          Comprehensive interview questions organized by tech roles - from Frontend to AI/ML, DevOps to Security
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-lg">
        <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search roles (e.g., Frontend, Data Scientist, DevOps, Data Engineer...)"
          value={hubSearchQuery}
          onChange={(e) => setHubSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-2.5 sm:py-3 rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs transition-all"
        />
      </div>

      {/* Categorized Role Sections */}
      {filteredRolesByCategory.length === 0 ? (
        <div className="p-12 text-center text-xs text-zinc-500">
          No roles found matching "{hubSearchQuery}".
        </div>
      ) : (
        filteredRolesByCategory.map((category: any) => (
          <div key={category.title} className="space-y-4 pt-2">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
              {category.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {category.roles.map((role: any) => {
                const totalQ = role.data?.metadata?.total_questions || role.data?.questions?.length || 200;
                const desc = role.data?.metadata?.description || 'Master key interview topics and production architectural principles.';
                const detailUrl = `/preparation/role-wise/${role.slug}`;

                return (
                  <a
                    key={role.slug}
                    href={detailUrl}
                    onClick={(e) => handleNav(e, detailUrl)}
                    className="group relative rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer select-none"
                  >
                    <div className="space-y-3.5">
                      {/* Icon & Title Row */}
                      <div className="flex items-center gap-3.5">
                        <RoleIcon type={role.slug} className="w-10 h-10 shrink-0" />
                        <h3 className="text-base sm:text-lg font-extrabold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {role.displayName}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2 font-normal">
                        {desc}
                      </p>
                    </div>

                    {/* Bottom Question Count */}
                    <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs font-medium text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors">
                      <AlignLeft className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                      <span>{totalQ} Questions</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
