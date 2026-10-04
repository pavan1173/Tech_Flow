import React, { useState, useMemo } from 'react';
import { systemDesignData, SystemDesignQuestion } from '../data/systemDesignData';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { AuthGate } from '../components/AuthGate';
import {
  Layers,
  Search,
  Check,
  Youtube,
  Info,
  BookOpen
} from 'lucide-react';

interface SystemDesignSheetPageProps {
  navigate: (to: string) => void;
}

export const SystemDesignSheetPage: React.FC<SystemDesignSheetPageProps> = ({ navigate }) => {
  const { isSolved, toggleSolved } = useProgress();
  const { isAuthenticated } = useAuth();

  const [activeTab, setActiveTab] = useState<'All' | 'HLD' | 'LLD'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [readMore, setReadMore] = useState(false);

  const questions: SystemDesignQuestion[] = systemDesignData.questions || [];

  const totalCount = questions.length;
  const hldQuestions = useMemo(() => questions.filter((q) => q.type === 'HLD'), [questions]);
  const lldQuestions = useMemo(() => questions.filter((q) => q.type === 'LLD'), [questions]);

  const solvedCount = useMemo(() => {
    return questions.filter((q) => isSolved(`sysdesign-${q.id}`)).length;
  }, [questions, isSolved]);

  const progressPercentage = Math.round((solvedCount / totalCount) * 100);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (activeTab === 'HLD' && q.type !== 'HLD') return false;
      if (activeTab === 'LLD' && q.type !== 'LLD') return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = q.title.toLowerCase().includes(query);
        const matchesCompanies = q.companies?.some((c) => c.toLowerCase().includes(query));
        const matchesId = String(q.id).includes(query);
        return matchesTitle || matchesCompanies || matchesId;
      }

      return true;
    });
  }, [questions, activeTab, searchQuery]);

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
          <span className="text-zinc-800 dark:text-zinc-200 font-bold">System Design Sheet</span>
        </div>

        {/* Page Header */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Top 32 System Design Interview Questions
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-4xl leading-relaxed">
            Comprehensive collection of the most frequently asked System Design interview questions including HLD and LLD. Covers designing major systems like Rate Limiter, TinyURL, Twitter, YouTube, and more with article and video references.
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
                <span>Architectural Interview Playbook</span>
              </div>
              <p className="leading-relaxed">
                System design interviews evaluate your ability to architect scalable, resilient, and highly available architectures. Questions are split between <strong>High-Level Design (HLD)</strong> focused on microservices, caching, message queues, and database sharding; and <strong>Low-Level Design (LLD)</strong> focused on class hierarchies, design patterns, and thread safety.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/80">
                  <span className="text-blue-600 dark:text-blue-400 font-bold block mb-1">HLD (22 Systems)</span>
                  Rate Limiter, TinyURL, Twitter Timeline, YouTube Video Transcoding, Google Drive, Distributed Cache, Message Queues, Web Crawlers, and Hotel Booking.
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/80">
                  <span className="text-purple-600 dark:text-purple-400 font-bold block mb-1">LLD (10 Core Archetypes)</span>
                  Parking Lot, Snake &amp; Ladder, Splitwise, Elevator System, Chess Game, Tic-Tac-Toe, Logging Framework, and Collaborative Editors with OOP principles.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Progress & Filters Row */}
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
                  className="text-blue-500 transition-all duration-500"
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
              onClick={() => setActiveTab('HLD')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'HLD'
                  ? 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 shadow-xs border border-blue-500/30 dark:border-blue-500/40'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              HLD <span className="ml-1 text-[11px] font-mono opacity-80">{hldQuestions.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('LLD')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'LLD'
                  ? 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 shadow-xs border border-purple-500/30 dark:border-purple-500/40'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              LLD <span className="ml-1 text-[11px] font-mono opacity-80">{lldQuestions.length}</span>
            </button>
          </div>
        </div>

        {/* Search Bar & Stats info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by system or company (e.g. TinyURL, Uber, Netflix)..."
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

          <span className="text-xs text-zinc-500 font-mono self-end sm:self-auto">
            Showing {filteredQuestions.length} of {totalCount} systems
          </span>
        </div>

        {/* Table Container */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] shadow-xl overflow-hidden transition-colors">
          
          {/* Table Column Headers */}
          <div className="grid grid-cols-12 items-center px-4 py-3 bg-zinc-50 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800 text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <div className="col-span-1 text-center">STATUS</div>
            <div className="col-span-5 sm:col-span-5 pl-2">PROBLEM</div>
            <div className="col-span-3 sm:col-span-3">COMPANIES</div>
            <div className="col-span-1 text-center">ARTICLE</div>
            <div className="col-span-1 text-center">VIDEO</div>
            <div className="col-span-1 text-center">LEVEL</div>
          </div>

          {/* Table Body Rows */}
          {filteredQuestions.length > 0 ? (
            !isAuthenticated ? (
              <AuthGate totalCount={totalCount} featureName="system design problems" title="Sign in to access System Design Sheet">
                <div className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
                  {filteredQuestions.slice(0, 7).map((q) => (
                    <div key={`locked-sys-${q.id}`} className="grid grid-cols-12 items-center px-4 py-3 sm:py-3.5 gap-2">
                      <div className="col-span-1 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900" />
                      </div>
                      <div className="col-span-5 sm:col-span-5 pl-2 flex items-center gap-2">
                        <span className="font-mono text-xs text-zinc-400">{q.id}.</span>
                        <span className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 truncate">{q.title}</span>
                      </div>
                      <div className="col-span-3 sm:col-span-3 flex items-center gap-1.5 overflow-hidden">
                        {q.companies && q.companies.slice(0, 2).map((c) => (
                          <span key={c} className="px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-[10px] text-zinc-600 dark:text-zinc-400">
                            {c}
                          </span>
                        ))}
                      </div>
                      <div className="col-span-1 flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-zinc-400" />
                      </div>
                      <div className="col-span-1 flex items-center justify-center">
                        <Youtube className="w-4 h-4 text-red-400" />
                      </div>
                      <div className="col-span-1 flex items-center justify-center">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                          {q.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </AuthGate>
            ) : (
            <div className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
              {filteredQuestions.map((q) => {
                const probId = `sysdesign-${q.id}`;
                const solved = isSolved(probId);

                return (
                  <div
                    key={q.id}
                    className={`grid grid-cols-12 items-center px-4 py-3 sm:py-3.5 gap-2 transition-colors ${
                      solved
                        ? 'bg-zinc-50/60 dark:bg-zinc-900/30'
                        : 'hover:bg-zinc-50/80 dark:hover:bg-zinc-900/50'
                    }`}
                  >
                    {/* Status Checkbox */}
                    <div className="col-span-1 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => toggleSolved(probId)}
                        aria-label={`Mark question ${q.id} as ${solved ? 'unsolved' : 'solved'}`}
                        className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all cursor-pointer ${
                          solved
                            ? 'bg-blue-600 border-blue-600 text-white'
                            : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-500'
                        }`}
                      >
                        {solved && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </button>
                    </div>

                    {/* Problem Title */}
                    <div className="col-span-5 sm:col-span-5 pl-2 flex items-center gap-2">
                      <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 shrink-0">
                        {q.id}.
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-semibold truncate ${
                          solved
                            ? 'line-through text-zinc-400 dark:text-zinc-500'
                            : 'text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                      >
                        {q.title}
                      </span>
                    </div>

                    {/* Companies Pills */}
                    <div className="col-span-3 sm:col-span-3 flex items-center gap-1.5 overflow-hidden flex-wrap">
                      {q.companies && q.companies.slice(0, 3).map((comp) => (
                        <span
                          key={comp}
                          className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono truncate"
                          title={comp}
                        >
                          {comp}
                        </span>
                      ))}
                      {q.companies && q.companies.length > 3 && (
                        <span
                          className="text-[10px] text-zinc-500 font-mono px-1"
                          title={q.companies.slice(3).join(', ')}
                        >
                          +{q.companies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Article Link Icon */}
                    <div className="col-span-1 flex items-center justify-center">
                      {q.articleLink ? (
                        <a
                          href={q.articleLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Open Article"
                          className="p-1.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                          <BookOpen className="w-4 h-4" />
                        </a>
                      ) : (
                        <span className="text-zinc-400 dark:text-zinc-700 font-mono text-xs">-</span>
                      )}
                    </div>

                    {/* Video Link Icon */}
                    <div className="col-span-1 flex items-center justify-center">
                      {q.ytLink ? (
                        <a
                          href={q.ytLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Watch System Design Breakdown"
                          className="p-1.5 rounded-lg text-red-600 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                        >
                          <Youtube className="w-4 h-4" />
                        </a>
                      ) : (
                        <span className="text-zinc-400 dark:text-zinc-700 font-mono text-xs">-</span>
                      )}
                    </div>

                    {/* Level Badge (HLD / LLD) */}
                    <div className="col-span-1 flex items-center justify-center">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold font-mono tracking-wider ${
                          q.type === 'HLD'
                            ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                            : 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30'
                        }`}
                      >
                        {q.type}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )) : (
            <div className="p-12 text-center space-y-3">
              <Layers className="w-10 h-10 text-zinc-400 dark:text-zinc-600 mx-auto" />
              <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                No system design questions found matching your filter criteria.
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

        {/* Bottom Practice Suggestions */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs transition-colors">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Full Stack Preparation Suite</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Complement system design with our Top 110 SQL Sheet and 20 Essential DSA Patterns.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/preparation/sql-sheet')}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              110 SQL Sheet
            </button>
            <button
              onClick={() => navigate('/preparation/20-essential-dsa-patterns')}
              className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-transparent text-xs font-semibold transition-colors cursor-pointer"
            >
              20 DSA Patterns
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
