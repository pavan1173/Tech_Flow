import React, { useState, useMemo } from 'react';
import { mostAskedQuestionsTopics, TechnologyTopic, InterviewQuestion } from '../data/mostAskedQuestionsData';
import { useProgress } from '../context/ProgressContext';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Star,
  Check,
  Search,
  BookOpen,
  Sparkles,
  ArrowLeft,
  Share2
} from 'lucide-react';

interface MostAskedDetailPageProps {
  slug: string;
  navigate: (to: string) => void;
}

export const MostAskedDetailPage: React.FC<MostAskedDetailPageProps> = ({ slug, navigate }) => {
  const { isSolved, toggleSolved } = useProgress();

  // Find topic by slug
  const topic: TechnologyTopic =
    mostAskedQuestionsTopics.find((t) => t.slug === slug) ||
    mostAskedQuestionsTopics[0];

  // Local state
  const [activeFilter, setActiveFilter] = useState<'All' | 'Easy' | 'Medium' | 'Hard' | 'Bookmarked'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<number, boolean>>({
    1: true, // Default open the first question as shown in design
  });

  // Bookmarked / Revision questions storage in localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(`bookmarks_${topic.slug}`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (id: number, e?: React.SyntheticEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem(`bookmarks_${topic.slug}`, JSON.stringify(next));
      return next;
    });
  };

  const toggleExpand = (id: number) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return topic.questions.filter((q) => {
      // Filter by Level or Bookmark
      if (activeFilter === 'Easy' && q.level !== 'Easy') return false;
      if (activeFilter === 'Medium' && q.level !== 'Medium') return false;
      if (activeFilter === 'Hard' && q.level !== 'Hard') return false;
      if (activeFilter === 'Bookmarked' && !bookmarkedIds.includes(q.id)) return false;

      // Filter by Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesQuestion = q.question.toLowerCase().includes(query);
        const matchesAnswer = q.answer.toLowerCase().includes(query);
        const matchesTag = (q.tags || []).some((t) => t.toLowerCase().includes(query));
        if (!matchesQuestion && !matchesAnswer && !matchesTag) return false;
      }

      return true;
    });
  }, [topic.questions, activeFilter, bookmarkedIds, searchQuery]);

  // Calculate counts dynamically from available questions or fallback
  const counts = useMemo(() => {
    let easy = 0;
    let medium = 0;
    let hard = 0;
    topic.questions.forEach((q) => {
      if (q.level === 'Easy') easy++;
      else if (q.level === 'Medium') medium++;
      else if (q.level === 'Hard') hard++;
    });
    return {
      easy: Math.max(easy, topic.easyCount),
      medium: Math.max(medium, topic.mediumCount),
      hard: Math.max(hard, topic.hardCount),
      total: Math.max(topic.questions.length, topic.totalQuestions)
    };
  }, [topic]);

  // Overall progress
  const totalInTopic = counts.total;
  const solvedCount = useMemo(() => {
    return topic.questions.filter((q) => isSolved(`most_asked_${topic.slug}_${q.id}`)).length;
  }, [topic, isSolved]);

  const progressPercentage = Math.round((solvedCount / Math.max(topic.questions.length, 1)) * 100);

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-6 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-400">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" aria-hidden="true" />
        <a
          href="/preparation/most-asked-questions"
          onClick={(e) => handleNav(e, '/preparation/most-asked-questions')}
          className="hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
        >
          Most Asked Questions
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" aria-hidden="true" />
        <span className="text-white font-medium">{topic.title}</span>
      </nav>

      {/* Header Title Section */}
      <header className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          {topic.fullTitle}
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 font-normal max-w-5xl leading-relaxed">
          {topic.longDescription}
        </p>
      </header>

      {/* Progress Metric & Filter Tabs Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
        {/* Left: Overall Progress Widget (Data Visibility principle) */}
        <div className="flex items-center gap-4 bg-[#0c1017] border border-[#1b2230] px-4 py-2.5 rounded-2xl w-fit shadow-xs">
          <div className="relative w-11 h-11 flex items-center justify-center">
            {/* SVG Circle Progress */}
            <svg className="w-11 h-11 -rotate-90" viewBox="0 0 36 36" aria-hidden="true">
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
                strokeDashoffset={88 - (88 * progressPercentage) / 100}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-[10px] font-bold text-white font-mono">
              {progressPercentage}%
            </span>
          </div>

          <div>
            <div className="text-xs font-bold text-white">Overall Progress</div>
            <div className="text-[11px] text-zinc-400 font-mono">
              {solvedCount}/{totalInTopic}
            </div>
          </div>
        </div>

        {/* Right: Filter Tab Pills */}
        <div
          role="tablist"
          aria-label="Filter by difficulty"
          className="flex items-center gap-1.5 bg-[#0c1017] border border-[#1b2230] p-1.5 rounded-2xl overflow-x-auto"
        >
          {/* All */}
          <button
            role="tab"
            aria-selected={activeFilter === 'All'}
            onClick={() => setActiveFilter('All')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
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
            role="tab"
            aria-selected={activeFilter === 'Easy'}
            onClick={() => setActiveFilter('Easy')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
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
            role="tab"
            aria-selected={activeFilter === 'Medium'}
            onClick={() => setActiveFilter('Medium')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
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
            role="tab"
            aria-selected={activeFilter === 'Hard'}
            onClick={() => setActiveFilter('Hard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
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
            role="tab"
            aria-selected={activeFilter === 'Bookmarked'}
            onClick={() => setActiveFilter('Bookmarked')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 ${
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
        <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
        <input
          type="text"
          placeholder={`Search ${topic.title}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label={`Search questions in ${topic.title}`}
          className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#0c1017] border border-[#1b2230] text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150"
        />
      </div>

      {/* Question Table */}
      <section aria-label="Questions list" className="rounded-2xl border border-[#1b2230] bg-[#0c1017] overflow-hidden">
        {/* Table Header Row */}
        <div className="grid grid-cols-12 gap-2 px-4 sm:px-6 py-3 border-b border-[#1b2230] text-[11px] font-bold uppercase tracking-wider text-zinc-400 bg-[#090d14]">
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
              const isDone = isSolved(`most_asked_${topic.slug}_${q.id}`);
              const isBookmarked = bookmarkedIds.includes(q.id);
              const isOpen = !!expandedQuestions[q.id];

              return (
                <article key={q.id} className="transition-colors duration-150 hover:bg-zinc-900/30">
                  {/* Row */}
                  <div
                    tabIndex={0}
                    role="button"
                    aria-expanded={isOpen}
                    aria-controls={`answer-${q.id}`}
                    onClick={() => toggleExpand(q.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleExpand(q.id);
                      }
                    }}
                    className="grid grid-cols-12 gap-2 px-4 sm:px-6 py-4 items-center cursor-pointer select-none focus-visible:outline-none focus-visible:bg-zinc-900/60 focus-visible:ring-1 focus-visible:ring-blue-500"
                  >
                    {/* Status Checkbox */}
                    <div className="col-span-1 flex items-center">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={isDone}
                        aria-label={`Mark question ${q.id} as completed`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSolved(`most_asked_${topic.slug}_${q.id}`);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.stopPropagation();
                            e.preventDefault();
                            toggleSolved(`most_asked_${topic.slug}_${q.id}`);
                          }
                        }}
                        className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                          isDone
                            ? 'bg-blue-600 border-blue-500 text-white'
                            : 'border-zinc-700 hover:border-zinc-500 bg-zinc-900/60'
                        }`}
                      >
                        {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </button>
                    </div>

                    {/* Question Title & Number */}
                    <div className="col-span-7 sm:col-span-8 flex items-center gap-2">
                      <span className="font-bold text-xs sm:text-sm text-zinc-200 hover:text-white transition-colors duration-150">
                        {q.id}. {q.question}
                      </span>
                    </div>

                    {/* Bookmark Star */}
                    <div className="col-span-2 sm:col-span-2 flex items-center justify-center">
                      <button
                        type="button"
                        aria-label={isBookmarked ? `Remove question ${q.id} from revision` : `Bookmark question ${q.id} for revision`}
                        onClick={(e) => toggleBookmark(q.id, e)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.stopPropagation();
                            e.preventDefault();
                            toggleBookmark(q.id, e);
                          }
                        }}
                        className={`p-1 rounded-md transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 ${
                          isBookmarked
                            ? 'text-yellow-400 hover:text-yellow-300'
                            : 'text-zinc-600 hover:text-zinc-400'
                        }`}
                        title={isBookmarked ? 'Remove from revision' : 'Bookmark for revision'}
                      >
                        <Star
                          className={`w-4 h-4 ${isBookmarked ? 'fill-yellow-400' : ''}`}
                        />
                      </button>
                    </div>

                    {/* Level Badge & Expand Chevron */}
                    <div className="col-span-2 sm:col-span-1 flex items-center justify-end gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          q.level === 'Easy'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : q.level === 'Medium'
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                            : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                        }`}
                      >
                        {q.level}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-zinc-500" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-zinc-500" aria-hidden="true" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Accordion Answer (Progressive Disclosure principle) */}
                  {isOpen && (
                    <div
                      id={`answer-${q.id}`}
                      role="region"
                      aria-label={`Answer for question ${q.id}`}
                      className="px-4 sm:px-6 pb-5 pt-1 space-y-2 bg-[#090d14]/60 border-t border-[#131924]"
                    >
                      <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                        ANSWER
                      </div>
                      <div className="p-4 rounded-xl bg-[#07090e] border border-[#1b2230] text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal whitespace-pre-line shadow-inner">
                        {q.answer}
                      </div>
                    </div>
                  )}
                </article>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
};
