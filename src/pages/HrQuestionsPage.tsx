import React, { useState, useMemo } from 'react';
import { hrData } from '../data/hrData';
import { useProgress } from '../context/ProgressContext';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Check,
  Star,
  Search,
  BookOpen
} from 'lucide-react';

interface HrQuestionsPageProps {
  navigate?: (to: string) => void;
}

export const HrQuestionsPage: React.FC<HrQuestionsPageProps> = ({ navigate }) => {
  const { isSolved, toggleSolved } = useProgress();
  const rawQuestions = hrData?.questions || [];

  // Standardize difficulty levels to Easy / Medium / Hard
  const questions = useMemo(() => {
    return rawQuestions.map((q: any, idx: number) => {
      const origDiff = (q.difficulty || 'Easy').toLowerCase();
      let level: 'Easy' | 'Medium' | 'Hard' = 'Easy';
      if (origDiff.includes('adv') || origDiff.includes('hard')) {
        level = 'Hard';
      } else if (origDiff.includes('inter') || origDiff.includes('mid') || origDiff.includes('med')) {
        level = 'Medium';
      } else {
        level = 'Easy';
      }

      return {
        id: q.index || idx + 1,
        question: q.title || q.question,
        answer: q.answer,
        level,
        category: q.category || 'HR & Behavioral'
      };
    });
  }, [rawQuestions]);

  const [activeFilter, setActiveFilter] = useState<'All' | 'Easy' | 'Medium' | 'Hard' | 'Bookmarked'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIndices, setExpandedIndices] = useState<Record<number, boolean>>({});

  // Persistent bookmarks
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('bookmarks_hr_questions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (id: number, e: React.SyntheticEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      localStorage.setItem('bookmarks_hr_questions', JSON.stringify(next));
      return next;
    });
  };

  const toggleExpand = (id: number) => {
    setExpandedIndices((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (navigate) {
      e.preventDefault();
      navigate(href);
    }
  };

  // Metrics calculation
  const counts = useMemo(() => {
    let easy = 0;
    let medium = 0;
    let hard = 0;
    questions.forEach((q) => {
      if (q.level === 'Easy') easy++;
      else if (q.level === 'Medium') medium++;
      else if (q.level === 'Hard') hard++;
    });
    return { easy, medium, hard, total: questions.length };
  }, [questions]);

  // Solved metrics
  const solvedCount = useMemo(() => {
    return questions.filter((q) => isSolved(`hr_q_${q.id}`)).length;
  }, [questions, isSolved]);

  const progressPercent = Math.round((solvedCount / Math.max(counts.total, 1)) * 100);

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (activeFilter === 'Easy' && q.level !== 'Easy') return false;
      if (activeFilter === 'Medium' && q.level !== 'Medium') return false;
      if (activeFilter === 'Hard' && q.level !== 'Hard') return false;
      if (activeFilter === 'Bookmarked' && !bookmarkedIds.includes(q.id)) return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const titleMatch = q.question.toLowerCase().includes(query);
        const ansMatch = q.answer.toLowerCase().includes(query);
        const catMatch = q.category.toLowerCase().includes(query);
        if (!titleMatch && !ansMatch && !catMatch) return false;
      }

      return true;
    });
  }, [questions, activeFilter, bookmarkedIds, searchQuery]);

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-6 max-w-7xl mx-auto">
      {/* Breadcrumbs matching screenshot */}
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-white transition-colors"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
        <span className="text-white font-medium">HR Questions</span>
      </div>

      {/* Header matching screenshot */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          Top 100+ Most Asked HR Interview Questions
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 font-normal max-w-5xl leading-relaxed">
          Comprehensive collection of the most frequently asked HR interview questions covering personal background, behavioral scenarios, salary expectations, and professional ethics. Each answer is designed to be insightful, professional, and interview-ready.
        </p>
      </div>

      {/* Top Bar: Progress Widget & Filter Pills matching screenshot */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
        {/* Progress Widget matching screenshot */}
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
                className="stroke-blue-500 transition-all duration-300"
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

        {/* Filter Pills matching screenshot */}
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

          {/* Easy */}
          <button
            onClick={() => setActiveFilter('Easy')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
              activeFilter === 'Easy'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'text-zinc-400 hover:text-emerald-400'
            }`}
          >
            <span>Easy</span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-800 text-emerald-400">
              {counts.easy}
            </span>
          </button>

          {/* Medium */}
          <button
            onClick={() => setActiveFilter('Medium')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
              activeFilter === 'Medium'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                : 'text-zinc-400 hover:text-amber-400'
            }`}
          >
            <span>Medium</span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-800 text-amber-400">
              {counts.medium}
            </span>
          </button>

          {/* Hard */}
          <button
            onClick={() => setActiveFilter('Hard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
              activeFilter === 'Hard'
                ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                : 'text-zinc-400 hover:text-rose-400'
            }`}
          >
            <span>Hard</span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-800 text-rose-400">
              {counts.hard}
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
              {bookmarkedIds.length}
            </span>
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search HR questions (e.g., Conflict, Strength, Goals...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#0c1017] border border-[#1b2230] text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>

      {/* Question Table matching screenshot */}
      <div className="rounded-2xl border border-[#1b2230] bg-[#0c1017] overflow-hidden shadow-xs">
        {/* Header Row matching screenshot */}
        <div className="grid grid-cols-12 gap-2 px-4 sm:px-6 py-3.5 border-b border-[#1b2230] text-[11px] font-bold uppercase tracking-wider text-zinc-400 bg-[#090d14]">
          <div className="col-span-1 text-left">STATUS</div>
          <div className="col-span-7 sm:col-span-8">PROBLEM</div>
          <div className="col-span-2 sm:col-span-2 text-center">REVISION</div>
          <div className="col-span-2 sm:col-span-1 text-right">LEVEL</div>
        </div>

        {/* Questions List */}
        <div className="divide-y divide-[#161c28]">
          {filteredQuestions.length === 0 ? (
            <div className="p-12 text-center text-xs text-zinc-500">
              No questions found matching your filter or search.
            </div>
          ) : (
            filteredQuestions.map((q) => {
              const probId = `hr_q_${q.id}`;
              const isDone = isSolved(probId);
              const isBookmarked = bookmarkedIds.includes(q.id);
              const isOpen = !!expandedIndices[q.id];

              return (
                <div key={`hr-q-${q.id}`} className="transition-colors hover:bg-zinc-900/30">
                  <div
                    onClick={() => toggleExpand(q.id)}
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
                            ? 'bg-blue-600 border-blue-600 text-white'
                            : 'border-zinc-700 hover:border-zinc-500 bg-zinc-900/60'
                        }`}
                      >
                        {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </button>
                    </div>

                    {/* Question Title */}
                    <div className="col-span-7 sm:col-span-8 flex items-center gap-2">
                      <span className="font-bold text-xs sm:text-sm text-zinc-200 hover:text-white transition-colors leading-snug">
                        {q.id}. {q.question}
                      </span>
                    </div>

                    {/* Revision Bookmark Star */}
                    <div className="col-span-2 sm:col-span-2 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={(e) => toggleBookmark(q.id, e)}
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
                          q.level === 'Easy'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : q.level === 'Hard'
                            ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                        }`}
                      >
                        {q.level}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-zinc-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-zinc-500" />
                      )}
                    </div>
                  </div>

                  {/* Expandable Structured Answer */}
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5 pt-1 space-y-2 bg-[#090d14]/60 border-t border-[#131924]">
                      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                        <span>RECOMMENDED INTERVIEW ANSWER (STAR FORMAT)</span>
                        <span className="text-zinc-500 font-mono">Category: {q.category}</span>
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
};
