import React, { useState, useMemo } from 'react';
import { hrData } from '../data/hrData';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { AuthGate } from '../components/AuthGate';
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
  const { isSolved, toggleSolved, isBookmarked, toggleBookmark } = useProgress();
  const { isAuthenticated } = useAuth();
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

  const toggleQuestionBookmark = (id: number, e: React.SyntheticEvent) => {
    e.stopPropagation();
    toggleBookmark(`hr_q_${id}`);
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

  // Filtered list
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchesSearch =
        !searchQuery ||
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilter =
        activeFilter === 'All' ||
        (activeFilter === 'Bookmarked' && isBookmarked(`hr_q_${q.id}`)) ||
        q.level === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [questions, searchQuery, activeFilter, isBookmarked]);

  const renderQuestions = (list: typeof filteredQuestions) => (
    list.map((q) => {
      const probId = `hr_q_${q.id}`;
      const isDone = isSolved(probId);
      const isItemBookmarked = isBookmarked(probId);
      const isOpen = !!expandedIndices[q.id];

      return (
        <div key={`hr-q-${q.id}`} className="transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/30">
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
                    : 'border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 bg-white dark:bg-zinc-900/60'
                }`}
              >
                {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </button>
            </div>

            {/* Question Title */}
            <div className="col-span-7 sm:col-span-8 flex items-center gap-2">
              <span className="font-bold text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-white transition-colors leading-snug">
                {q.id}. {q.question}
              </span>
            </div>

            {/* Revision Bookmark Star */}
            <div className="col-span-2 sm:col-span-2 flex items-center justify-center">
              <button
                type="button"
                onClick={(e) => toggleQuestionBookmark(q.id, e)}
                className="p-1 rounded-md transition-colors cursor-pointer"
              >
                <Star className={`w-4 h-4 ${isItemBookmarked ? 'fill-yellow-400 text-yellow-400' : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300'}`} />
              </button>
            </div>

            {/* Level Badge & Chevron */}
            <div className="col-span-2 sm:col-span-1 flex items-center justify-end gap-2">
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                  q.level === 'Easy'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                    : q.level === 'Hard'
                    ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                    : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                }`}
              >
                {q.level}
              </span>
              {isOpen ? (
                <ChevronUp className="w-4 h-4 text-zinc-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-zinc-400" />
              )}
            </div>
          </div>

          {/* Expandable Structured Answer */}
          {isOpen && (
            <div className="px-4 sm:px-6 pb-5 pt-1 space-y-2 bg-zinc-50 dark:bg-[#090d14]/60 border-t border-zinc-200 dark:border-[#131924]">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                <span>RECOMMENDED INTERVIEW ANSWER (STAR FORMAT)</span>
                <span className="text-zinc-500 font-mono">Category: {q.category}</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-[#07090e] border border-zinc-200 dark:border-[#1b2230] text-xs sm:text-sm text-zinc-800 dark:text-zinc-300 leading-relaxed font-normal whitespace-pre-line shadow-inner">
                {q.answer}
              </div>
            </div>
          )}
        </div>
      );
    })
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-7 max-w-7xl mx-auto transition-colors">
      {/* Breadcrumb matching screenshot */}
      <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
        <span className="text-zinc-900 dark:text-white font-medium">HR Questions</span>
      </div>

      {/* Header matching screenshot */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <BookOpen className="w-4 h-4" />
          Behavioral & Leadership Rounds
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          HR Interview Questions & Answers
        </h1>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal max-w-3xl">
          Ace behavioral, situational, and culture-fit rounds with structured STAR method responses.
        </p>
      </div>

      {/* Stats and Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230]">
        <div className="flex items-center gap-3">
          <div className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
            Progress: <span className="text-blue-600 dark:text-blue-400 font-bold">{solvedCount} / {counts.total}</span> ({progressPercent}%)
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white dark:bg-[#111622] border border-zinc-200 dark:border-[#1f293d] text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Question Table matching screenshot */}
      <div className="rounded-2xl border border-zinc-200 dark:border-[#1b2230] bg-white dark:bg-[#0c1017] overflow-hidden shadow-xs">
        {/* Header Row matching screenshot */}
        <div className="grid grid-cols-12 gap-2 px-4 sm:px-6 py-3.5 border-b border-zinc-200 dark:border-[#1b2230] text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-[#090d14]">
          <div className="col-span-1 text-left">STATUS</div>
          <div className="col-span-7 sm:col-span-8">PROBLEM</div>
          <div className="col-span-2 sm:col-span-2 text-center">REVISION</div>
          <div className="col-span-2 sm:col-span-1 text-right">LEVEL</div>
        </div>

        {/* Questions List */}
        <div className="divide-y divide-zinc-200 dark:divide-[#161c28]">
          {filteredQuestions.length === 0 ? (
            <div className="p-12 text-center text-xs text-zinc-500">
              No questions found matching your filter or search.
            </div>
          ) : !isAuthenticated ? (
            <AuthGate
              totalCount={counts.total}
              featureName="HR & behavioral interview questions"
              title="Sign in to access HR Questions"
            >
              {renderQuestions(filteredQuestions.slice(0, 7))}
            </AuthGate>
          ) : (
            renderQuestions(filteredQuestions)
          )}
        </div>
      </div>
    </div>
  );
};
