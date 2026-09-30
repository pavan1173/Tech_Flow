import React, { useState, useMemo } from 'react';
import { roleWiseData } from '../data/roleWiseData';
import { RoleIcon } from '../components/RoleIcon';
import { useProgress } from '../context/ProgressContext';
import {
  Search,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  AlignLeft,
  Check,
  Star,
  ArrowLeft,
  Compass,
  ArrowRight
} from 'lucide-react';

interface RoleWisePageProps {
  roleSlug?: string;
  navigate: (to: string) => void;
}

export const RoleWisePage: React.FC<RoleWisePageProps> = ({ roleSlug, navigate }) => {
  const { isSolved, toggleSolved } = useProgress();
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
  const [activeFilter, setActiveFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Bookmarked'>('All');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<number, boolean>>({
    0: true, // Default first question open
  });

  // Bookmarks for current role
  const [bookmarkedIndices, setBookmarkedIndices] = useState<number[]>(() => {
    if (!selectedRole) return [];
    try {
      const saved = localStorage.getItem(`bookmarks_role_${selectedRole.slug}`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (idx: number, e: React.SyntheticEvent) => {
    e.stopPropagation();
    if (!selectedRole) return;
    setBookmarkedIndices((prev) => {
      const next = prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx];
      localStorage.setItem(`bookmarks_role_${selectedRole.slug}`, JSON.stringify(next));
      return next;
    });
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
    return roleQuestions.filter((q: any, idx: number) => {
      const diff = (q.difficulty || 'Intermediate').toLowerCase();

      if (activeFilter === 'Beginner' && !diff.includes('beginner') && !diff.includes('easy')) return false;
      if (activeFilter === 'Intermediate' && !diff.includes('intermediate') && !diff.includes('medium')) return false;
      if (activeFilter === 'Advanced' && !diff.includes('advanced') && !diff.includes('hard')) return false;
      if (activeFilter === 'Bookmarked' && !bookmarkedIndices.includes(idx)) return false;

      if (detailSearchQuery.trim()) {
        const query = detailSearchQuery.toLowerCase();
        const titleMatch = (q.title || q.question || '').toLowerCase().includes(query);
        const ansMatch = (q.answer || '').toLowerCase().includes(query);
        const topicMatch = (q.category || q.topic || '').toLowerCase().includes(query);
        if (!titleMatch && !ansMatch && !topicMatch) return false;
      }

      return true;
    });
  }, [roleQuestions, activeFilter, bookmarkedIndices, detailSearchQuery]);

  // Difficulty counts for detail view
  const counts = useMemo(() => {
    let beg = 0;
    let mid = 0;
    let adv = 0;
    roleQuestions.forEach((q: any) => {
      const diff = (q.difficulty || 'Intermediate').toLowerCase();
      if (diff.includes('beginner') || diff.includes('easy')) beg++;
      else if (diff.includes('advanced') || diff.includes('hard')) adv++;
      else mid++;
    });
    return { beg, mid, adv, total: roleQuestions.length };
  }, [roleQuestions]);

  // Progress metrics
  const solvedCount = useMemo(() => {
    if (!selectedRole) return 0;
    return roleQuestions.filter((q: any, idx: number) =>
      isSolved(`role_${selectedRole.slug}_${q.index || idx}`)
    ).length;
  }, [selectedRole, roleQuestions, isSolved]);

  const progressPercent = Math.round((solvedCount / Math.max(counts.total, 1)) * 100);

  // =========================================================================
  // VIEW 1: DETAIL VIEW FOR SELECTED ROLE
  // =========================================================================
  if (selectedRole) {
    const meta = selectedRole.data?.metadata || {};

    return (
      <div className="min-h-screen bg-[#07090e] text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-6 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-400">
          <a
            href="/preparation"
            onClick={(e) => handleNav(e, '/preparation')}
            className="hover:text-white transition-colors"
          >
            Preparation
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
          <a
            href="/preparation/role-wise"
            onClick={(e) => handleNav(e, '/preparation/role-wise')}
            className="hover:text-white transition-colors"
          >
            Role-Wise Questions
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
          <span className="text-white font-medium">{selectedRole.displayName}</span>
        </nav>

        {/* Header Title */}
        <header className="space-y-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            {meta.list_name || `Top ${counts.total}+ Most Asked ${selectedRole.displayName} Interview Questions`}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal max-w-5xl leading-relaxed">
            {meta.description || `Comprehensive interview questions and answers tailored specifically for ${selectedRole.displayName} technical interviews.`}
          </p>
        </header>

        {/* Progress & Difficulty Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
          {/* Progress Widget */}
          <div className="flex items-center gap-4 bg-[#0c1017] border border-[#1b2230] px-4 py-2.5 rounded-2xl w-fit shadow-xs">
            <div className="relative w-11 h-11 flex items-center justify-center">
              <svg className="w-11 h-11 -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  className="stroke-[#1b2230]"
                  strokeWidth="3.5"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  className="stroke-[#f97316] transition-all duration-300"
                  strokeWidth="3.5"
                  strokeDasharray={88}
                  strokeDashoffset={88 - (88 * progressPercent) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute text-[10px] font-bold text-white font-mono">
                {progressPercent}%
              </span>
            </div>

            <div>
              <div className="text-xs font-bold text-white">Overall Progress</div>
              <div className="text-[11px] text-zinc-400 font-mono">
                {solvedCount}/{counts.total}
              </div>
            </div>
          </div>

          {/* Interactive Role Roadmap Discovery Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-gradient-to-r from-blue-900/30 to-indigo-900/20 border border-blue-500/30 text-blue-200">
            <div className="flex items-center gap-2.5">
              <Compass className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="text-xs sm:text-sm font-medium">
                Want a complete, step-by-step learning path for <strong>{selectedRole.displayName}</strong>?
              </span>
            </div>
            <button
              onClick={() => {
                const targetSlug = selectedRole.slug
                  .replace('-developer', '')
                  .replace('-engineer', '')
                  .replace('-specialist', '');
                navigate(`/preparation/roadmaps/${targetSlug}`);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors cursor-pointer self-start sm:self-auto shrink-0 shadow-2xs"
            >
              <span>Explore Interactive Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Difficulty Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-[#0c1017] border border-[#1b2230] p-1.5 rounded-2xl overflow-x-auto">
            {/* All */}
            <button
              onClick={() => setActiveFilter('All')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                activeFilter === 'All'
                  ? 'bg-zinc-800 text-white shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>All</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-700/60 text-zinc-300">
                {counts.total}
              </span>
            </button>

            {/* Beginner */}
            <button
              onClick={() => setActiveFilter('Beginner')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                activeFilter === 'Beginner'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'text-zinc-400 hover:text-emerald-400'
              }`}
            >
              <span>Beginner</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-800 text-emerald-400">
                {counts.beg}
              </span>
            </button>

            {/* Intermediate */}
            <button
              onClick={() => setActiveFilter('Intermediate')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                activeFilter === 'Intermediate'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  : 'text-zinc-400 hover:text-amber-400'
              }`}
            >
              <span>Intermediate</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-800 text-amber-400">
                {counts.mid}
              </span>
            </button>

            {/* Advanced */}
            <button
              onClick={() => setActiveFilter('Advanced')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                activeFilter === 'Advanced'
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                  : 'text-zinc-400 hover:text-rose-400'
              }`}
            >
              <span>Advanced</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-800 text-rose-400">
                {counts.adv}
              </span>
            </button>

            {/* Bookmarked */}
            <button
              onClick={() => setActiveFilter('Bookmarked')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                activeFilter === 'Bookmarked'
                  ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  : 'text-zinc-400 hover:text-yellow-400'
              }`}
            >
              <span>Bookmarked</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-800 text-yellow-400">
                {bookmarkedIndices.length}
              </span>
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={`Search ${selectedRole.displayName} questions...`}
            value={detailSearchQuery}
            onChange={(e) => setDetailSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#0c1017] border border-[#1b2230] text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          />
        </div>

        {/* Question Table */}
        <div className="rounded-2xl border border-[#1b2230] bg-[#0c1017] overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-12 gap-2 px-4 sm:px-6 py-3 border-b border-[#1b2230] text-[11px] font-bold uppercase tracking-wider text-zinc-400 bg-[#090d14]">
            <div className="col-span-1 text-left">STATUS</div>
            <div className="col-span-7 sm:col-span-8">PROBLEM</div>
            <div className="col-span-2 sm:col-span-2 text-center">REVISION</div>
            <div className="col-span-2 sm:col-span-1 text-right">LEVEL</div>
          </div>

          {/* Questions Rows */}
          <div className="divide-y divide-[#161c28]">
            {filteredQuestions.length === 0 ? (
              <div className="p-12 text-center text-xs text-zinc-500">
                No questions found matching your filter or search.
              </div>
            ) : (
              filteredQuestions.map((q: any, idx: number) => {
                const qNum = q.index || idx + 1;
                const probId = `role_${selectedRole.slug}_${qNum}`;
                const isDone = isSolved(probId);
                const isBookmarked = bookmarkedIndices.includes(idx);
                const isOpen = !!expandedQuestions[idx];
                const diff = q.difficulty || 'Intermediate';

                return (
                  <div key={`${selectedRole.slug}-${qNum}-${idx}`} className="transition-colors hover:bg-zinc-900/30">
                    <div
                      onClick={() => toggleExpand(idx)}
                      className="grid grid-cols-12 gap-2 px-4 sm:px-6 py-4 items-center cursor-pointer select-none"
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
                              ? 'bg-[#f97316] border-[#f97316] text-white'
                              : 'border-zinc-700 hover:border-zinc-500 bg-zinc-900/60'
                          }`}
                        >
                          {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </button>
                      </div>

                      {/* Question Title */}
                      <div className="col-span-7 sm:col-span-8 flex items-center gap-2">
                        <span className="font-bold text-xs sm:text-sm text-zinc-200 hover:text-white transition-colors">
                          {qNum}. {q.title || q.question}
                        </span>
                      </div>

                      {/* Revision Star */}
                      <div className="col-span-2 sm:col-span-2 flex items-center justify-center">
                        <button
                          type="button"
                          onClick={(e) => toggleBookmark(idx, e)}
                          className={`p-1 rounded-md transition-colors cursor-pointer ${
                            isBookmarked
                              ? 'text-yellow-400 hover:text-yellow-300'
                              : 'text-zinc-600 hover:text-zinc-400'
                          }`}
                        >
                          <Star className={`w-4 h-4 ${isBookmarked ? 'fill-yellow-400' : ''}`} />
                        </button>
                      </div>

                      {/* Level Badge & Chevron */}
                      <div className="col-span-2 sm:col-span-1 flex items-center justify-end gap-2">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            diff.toLowerCase().includes('beginner') || diff.toLowerCase().includes('easy')
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                              : diff.toLowerCase().includes('advanced') || diff.toLowerCase().includes('hard')
                              ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                              : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          }`}
                        >
                          {diff}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-zinc-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-zinc-500" />
                        )}
                      </div>
                    </div>

                    {/* Answer Accordion */}
                    {isOpen && (
                      <div className="px-4 sm:px-6 pb-5 pt-1 space-y-2 bg-[#090d14]/60 border-t border-[#131924]">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                          ANSWER
                        </div>
                        <div className="p-4 rounded-xl bg-[#07090e] border border-[#1b2230] text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal whitespace-pre-line shadow-inner">
                          {q.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: MAIN HUB VIEW (MATCHING USER SCREENSHOT EXACTLY)
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-8 max-w-7xl mx-auto">
      {/* Breadcrumb matching screenshot */}
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-white transition-colors"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
        <span className="text-white font-medium">Role-Wise Questions</span>
      </div>

      {/* Header matching screenshot */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          Role-Wise Interview Questions
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 font-normal">
          Comprehensive interview questions organized by tech roles - from Frontend to AI/ML, DevOps to Security
        </p>
      </div>

      {/* Search Bar matching screenshot */}
      <div className="relative max-w-lg">
        <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search roles (e.g., Frontend, Data Scientist, DevOps...)"
          value={hubSearchQuery}
          onChange={(e) => setHubSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-2.5 sm:py-3 rounded-2xl bg-[#0c1017] border border-[#1b2230] text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
        />
      </div>

      {/* Categorized Role Sections matching screenshot */}
      {filteredRolesByCategory.length === 0 ? (
        <div className="p-12 text-center text-xs text-zinc-500">
          No roles found matching "{hubSearchQuery}".
        </div>
      ) : (
        filteredRolesByCategory.map((category: any) => (
          <div key={category.title} className="space-y-4 pt-2">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
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
                    className="group relative rounded-2xl bg-[#0c1017] border border-[#1b2230] hover:border-orange-500/50 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-0.5 cursor-pointer select-none"
                  >
                    <div className="space-y-3.5">
                      {/* Icon & Title Row matching screenshot */}
                      <div className="flex items-center gap-3.5">
                        <RoleIcon type={role.slug} className="w-10 h-10 shrink-0" />
                        <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-orange-400 transition-colors">
                          {role.displayName}
                        </h3>
                      </div>

                      {/* Description matching screenshot */}
                      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 font-normal">
                        {desc}
                      </p>
                    </div>

                    {/* Bottom Question Count matching screenshot */}
                    <div className="pt-4 mt-4 border-t border-[#171e2c] flex items-center gap-2 text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      <AlignLeft className="w-3.5 h-3.5 text-zinc-500 group-hover:text-orange-400 transition-colors" />
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
