import React, { useState, useMemo } from 'react';
import { sqlData, SqlQuestion } from '../data/sqlData';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { AuthGate } from '../components/AuthGate';
import {
  Database,
  Search,
  Copy,
  Check,
  Star,
  ChevronDown,
  Bookmark,
  Info,
  Terminal
} from 'lucide-react';

interface SqlSheetPageProps {
  navigate: (to: string) => void;
}

export const SqlSheetPage: React.FC<SqlSheetPageProps> = ({ navigate }) => {
  const { isSolved, toggleSolved, isBookmarked, toggleBookmark } = useProgress();
  const { isAuthenticated } = useAuth();

  const [activeTab, setActiveTab] = useState<'All' | 'Easy' | 'Medium' | 'Hard' | 'Bookmarked'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [readMore, setReadMore] = useState(false);
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const questions: SqlQuestion[] = sqlData.questions || [];

  const toggleRow = (index: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleAllRows = () => {
    const allExpanded = questions.every((q) => expandedRows[q.index]);
    if (allExpanded) {
      setExpandedRows({});
    } else {
      const newExpanded: Record<number, boolean> = {};
      questions.forEach((q) => {
        newExpanded[q.index] = true;
      });
      setExpandedRows(newExpanded);
    }
  };

  const handleCopy = (index: number, answerText: string) => {
    navigator.clipboard.writeText(answerText);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const totalCount = questions.length;
  const easyQuestions = useMemo(() => questions.filter((q) => q.difficulty === 'Easy'), [questions]);
  const mediumQuestions = useMemo(() => questions.filter((q) => q.difficulty === 'Medium'), [questions]);
  const hardQuestions = useMemo(() => questions.filter((q) => q.difficulty === 'Hard'), [questions]);

  const solvedCount = useMemo(() => {
    return questions.filter((q) => isSolved(`sql-${q.index}`)).length;
  }, [questions, isSolved]);

  const bookmarkedCount = useMemo(() => {
    return questions.filter((q) => isBookmarked(`sql-${q.index}`)).length;
  }, [questions, isBookmarked]);

  const progressPercentage = Math.round((solvedCount / totalCount) * 100);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (activeTab === 'Easy' && q.difficulty !== 'Easy') return false;
      if (activeTab === 'Medium' && q.difficulty !== 'Medium') return false;
      if (activeTab === 'Hard' && q.difficulty !== 'Hard') return false;
      if (activeTab === 'Bookmarked' && !isBookmarked(`sql-${q.index}`)) return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = q.title.toLowerCase().includes(query);
        const matchesAnswer = q.answer.toLowerCase().includes(query);
        const matchesCat = q.category?.toLowerCase().includes(query);
        const matchesIndex = String(q.index).includes(query);
        return matchesTitle || matchesAnswer || matchesCat || matchesIndex;
      }

      return true;
    });
  }, [questions, activeTab, isBookmarked, searchQuery]);

  return (
    <div className="min-h-screen bg-[#fcfcfb] dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 p-4 sm:p-6 lg:p-10 font-sans selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-200 transition-colors duration-200">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <button
            onClick={() => navigate('/preparation')}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            Preparation
          </button>
          <span>&gt;</span>
          <span className="text-zinc-800 dark:text-zinc-200 font-bold">SQL Sheet</span>
        </div>

        {/* Page Header */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Top 110 Most Asked SQL Interview Queries
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-4xl leading-relaxed">
            Comprehensive collection of the most frequently asked SQL query interview questions. Covers SELECT operations, JOINs, subqueries, aggregations, window functions, and complex real-world scenarios. Each query is production-ready and commonly asked in technical interviews at top companies.
          </p>
          <div>
            <button
              onClick={() => setReadMore(!readMore)}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 underline underline-offset-4 transition-colors cursor-pointer"
            >
              {readMore ? 'Read Less' : 'Read More'}
            </button>
          </div>

          {/* Read More Collapsible Info Card */}
          {readMore && (
            <div className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 space-y-3 animate-in fade-in duration-200 shadow-sm">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold">
                <Info className="w-4 h-4 shrink-0" />
                <span>Interview Mastery Guide &amp; Schema Context</span>
              </div>
              <p className="leading-relaxed">
                Queries in this bank are structured progressively across standard enterprise schemas including <code className="px-1.5 py-0.5 rounded bg-white dark:bg-zinc-950 text-blue-600 dark:text-blue-300 font-mono border border-zinc-200 dark:border-zinc-800">employees(id, first_name, last_name, salary, department_id, manager_id, hire_date)</code> and <code className="px-1.5 py-0.5 rounded bg-white dark:bg-zinc-950 text-blue-600 dark:text-blue-300 font-mono border border-zinc-200 dark:border-zinc-800">departments(id, department_name)</code>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1 text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
                <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/80">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">Easy (Q1 - Q30)</span>
                  Basic SELECT, Filtering (WHERE), Sorting (ORDER BY), Aggregations (COUNT, MAX, MIN, SUM, AVG), and LIKE patterns.
                </div>
                <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/80">
                  <span className="text-amber-600 dark:text-amber-400 font-bold block mb-1">Medium (Q31 - Q70)</span>
                  INNER / LEFT / RIGHT / SELF JOINs, GROUP BY &amp; HAVING, Subqueries, IN, EXISTS, and data manipulation.
                </div>
                <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/80">
                  <span className="text-rose-600 dark:text-rose-400 font-bold block mb-1">Hard (Q71 - Q110)</span>
                  Window Functions (ROW_NUMBER, RANK, DENSE_RANK, NTILE, LEAD, LAG), CTEs, recursive queries, and nth-highest calculations.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Overall Progress Gauge and Filter Tabs Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-2">
          
          {/* Progress Circular Gauge Card */}
          <div className="flex items-center gap-4 p-3.5 px-5 rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 shadow-xs self-start lg:self-auto transition-colors">
            {/* SVG Circular Progress Ring */}
            <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
              <svg className="w-14 h-14 -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-zinc-200 dark:text-zinc-800"
                  strokeWidth="3.2"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-500 transition-all duration-500"
                  strokeDasharray={`${progressPercentage}, 100`}
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute font-mono font-bold text-xs text-zinc-900 dark:text-white">
                {progressPercentage}%
              </span>
            </div>

            <div>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block font-medium">
                Overall Progress
              </span>
              <span className="text-sm font-extrabold text-zinc-900 dark:text-white font-mono">
                {solvedCount} / {totalCount}
              </span>
            </div>
          </div>

          {/* Filter Pills Group */}
          <div className="flex items-center gap-1.5 flex-wrap bg-zinc-100 dark:bg-zinc-900/90 p-1.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 transition-colors">
            <button
              onClick={() => setActiveTab('All')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'All'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs border border-zinc-200 dark:border-zinc-700'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              All <span className="ml-1 text-[11px] font-mono opacity-80">{totalCount}</span>
            </button>

            <button
              onClick={() => setActiveTab('Easy')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'Easy'
                  ? 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shadow-xs border border-emerald-500/30 dark:border-emerald-500/40'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400'
              }`}
            >
              Easy <span className="ml-1 text-[11px] font-mono opacity-80">{easyQuestions.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('Medium')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'Medium'
                  ? 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 shadow-xs border border-amber-500/30 dark:border-amber-500/40'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400'
              }`}
            >
              Medium <span className="ml-1 text-[11px] font-mono opacity-80">{mediumQuestions.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('Hard')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'Hard'
                  ? 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 shadow-xs border border-rose-500/30 dark:border-rose-500/40'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400'
              }`}
            >
              Hard <span className="ml-1 text-[11px] font-mono opacity-80">{hardQuestions.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('Bookmarked')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'Bookmarked'
                  ? 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 shadow-xs border border-indigo-500/30 dark:border-indigo-500/40'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              <span>Bookmarked</span>
              <span className="text-[11px] font-mono opacity-80">{bookmarkedCount}</span>
            </button>
          </div>
        </div>

        {/* Search Bar & Expand All Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search SQL questions (e.g. Nth highest salary, JOIN, RANK)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 dark:hover:text-white text-xs cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="text-xs text-zinc-500 font-mono">
              Showing {filteredQuestions.length} of {totalCount} questions
            </span>
            <button
              onClick={toggleAllRows}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 font-medium transition-colors cursor-pointer shadow-2xs"
            >
              Expand / Collapse All
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] shadow-xl overflow-hidden transition-colors">
          
          {/* Table Column Headers */}
          <div className="grid grid-cols-12 items-center px-4 py-3 bg-zinc-50 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800 text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <div className="col-span-1 text-center">STATUS</div>
            <div className="col-span-8 sm:col-span-8 pl-2">PROBLEM</div>
            <div className="col-span-1 text-center hidden sm:block">REVISION</div>
            <div className="col-span-2 text-right sm:text-center">LEVEL</div>
          </div>

          {/* Table Body Rows */}
          {filteredQuestions.length > 0 ? (
            !isAuthenticated ? (
              <AuthGate totalCount={totalCount} featureName="SQL interview queries" title="Sign in to access 50 SQL Queries">
                <div className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
                  {filteredQuestions.slice(0, 7).map((q) => (
                    <div key={`locked-sql-${q.index}`} className="grid grid-cols-12 items-center px-4 py-3 sm:py-3.5 gap-2">
                      <div className="col-span-1 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900" />
                      </div>
                      <div className="col-span-8 sm:col-span-8 pl-2 flex items-center gap-2">
                        <span className="font-mono text-xs text-zinc-400">{q.index}.</span>
                        <span className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 truncate">{q.title}</span>
                      </div>
                      <div className="col-span-1 hidden sm:flex items-center justify-center">
                        <Star className="w-4 h-4 text-zinc-400" />
                      </div>
                      <div className="col-span-3 sm:col-span-2 flex items-center justify-end sm:justify-center">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                          {q.difficulty}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </AuthGate>
            ) : (
            <div className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
              {filteredQuestions.map((q) => {
                const probId = `sql-${q.index}`;
                const solved = isSolved(probId);
                const bookmarked = isBookmarked(probId);
                const isExpanded = !!expandedRows[q.index];

                return (
                  <div
                    key={q.index}
                    className={`transition-colors ${
                      solved
                        ? 'bg-zinc-50/60 dark:bg-zinc-900/30'
                        : 'hover:bg-zinc-50/80 dark:hover:bg-zinc-900/50'
                    }`}
                  >
                    {/* Main Row Clickable Header */}
                    <div className="grid grid-cols-12 items-center px-4 py-3 sm:py-3.5 gap-2">
                      
                      {/* Status Checkbox */}
                      <div className="col-span-1 flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => toggleSolved(probId)}
                          aria-label={`Mark question ${q.index} as ${solved ? 'unsolved' : 'solved'}`}
                          className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all cursor-pointer ${
                            solved
                              ? 'bg-emerald-500 border-emerald-500 text-white'
                              : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-500'
                          }`}
                        >
                          {solved && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </button>
                      </div>

                      {/* Problem Title & Category */}
                      <div
                        onClick={() => toggleRow(q.index)}
                        className="col-span-8 sm:col-span-8 pl-2 flex items-center gap-2 cursor-pointer group"
                      >
                        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 shrink-0">
                          {q.index}.
                        </span>
                        <div className="min-w-0">
                          <span
                            className={`text-xs sm:text-sm font-semibold transition-colors ${
                              solved
                                ? 'line-through text-zinc-400 dark:text-zinc-500'
                                : 'text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                            }`}
                          >
                            {q.title}
                          </span>
                        </div>
                      </div>

                      {/* Revision Star Bookmark Button */}
                      <div className="col-span-1 hidden sm:flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => toggleBookmark(probId)}
                          title="Bookmark for Revision"
                          className="p-1 rounded-lg text-zinc-300 dark:text-zinc-600 hover:text-amber-500 dark:hover:text-amber-400 transition-colors cursor-pointer"
                        >
                          <Star
                            className={`w-4 h-4 transition-all ${
                              bookmarked
                                ? 'text-amber-400 fill-amber-400'
                                : 'hover:text-amber-400'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Difficulty Level & Expand Toggle */}
                      <div className="col-span-3 sm:col-span-2 flex items-center justify-end sm:justify-center gap-2">
                        {/* Level Badge */}
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono uppercase tracking-wider shrink-0 ${
                            q.difficulty === 'Easy'
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                              : q.difficulty === 'Medium'
                              ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                              : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                          }`}
                        >
                          {q.difficulty}
                        </span>

                        {/* Chevron Expand Indicator */}
                        <button
                          onClick={() => toggleRow(q.index)}
                          className="p-1 text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors cursor-pointer"
                          aria-label={isExpanded ? 'Collapse query answer' : 'Expand query answer'}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Expandable Accordion: Answer / Query Code Box */}
                    {isExpanded && (
                      <div className="px-6 py-4 bg-zinc-50 dark:bg-[#080b12] border-t border-zinc-200 dark:border-zinc-800/80 animate-in fade-in duration-150 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                          <div className="flex items-center gap-2">
                            <Terminal className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                            <span className="font-bold text-zinc-700 dark:text-zinc-300">ANSWER</span>
                            {q.category && (
                              <span className="text-zinc-400 dark:text-zinc-500 font-normal">
                                • Category: {q.category}
                              </span>
                            )}
                          </div>

                          <button
                            onClick={() => handleCopy(q.index, q.answer)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-800/80 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-transparent text-zinc-700 dark:text-zinc-300 text-xs font-mono transition-colors cursor-pointer shadow-2xs"
                          >
                            {copiedIndex === q.index ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                                <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                                <span>Copy SQL</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Query Code Box */}
                        <div className="p-3.5 rounded-xl bg-zinc-100 dark:bg-[#03060a] border border-zinc-200 dark:border-zinc-800/90 font-mono text-xs sm:text-[13px] text-zinc-900 dark:text-zinc-200 overflow-x-auto selection:bg-blue-600/30">
                          <code>{q.answer}</code>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )) : (
            <div className="p-12 text-center space-y-3">
              <Database className="w-10 h-10 text-zinc-400 dark:text-zinc-600 mx-auto" />
              <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                No SQL questions found matching your filter criteria.
              </p>
              <button
                onClick={() => {
                  setActiveTab('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom Helper Card */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs transition-colors">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Need more interview practice?</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Combine SQL query practice with our 20 DSA Patterns and Company-Wise DSA Sets.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/preparation/20-essential-dsa-patterns')}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              20 DSA Patterns
            </button>
            <button
              onClick={() => navigate('/preparation/company-wise-dsa-sheet')}
              className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-transparent text-xs font-semibold transition-colors cursor-pointer"
            >
              Company Sets
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
