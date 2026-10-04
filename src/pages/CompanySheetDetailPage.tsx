import React, { useState, useMemo } from 'react';
import { companiesSheets } from '../data/companiesSheets';
import { companiesList } from '../data/common';
import { CompanyLogo } from '../components/CompanyLogo';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { AuthGate } from '../components/AuthGate';
import {
  ArrowLeft,
  Search,
  ExternalLink,
  Flame,
  CheckCircle2,
  Building2
} from 'lucide-react';

interface CompanySheetDetailPageProps {
  slug: string;
  navigate: (to: string) => void;
}

export const CompanySheetDetailPage: React.FC<CompanySheetDetailPageProps> = ({ slug, navigate }) => {
  const companyData = companiesSheets[slug];
  const companyMeta = companiesList.find((c: any) => c.href.endsWith(slug));
  const { isSolved, toggleSolved } = useProgress();
  const { isAuthenticated } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const questions = useMemo(() => {
    return companyData?.questions || [];
  }, [companyData]);

  const solvedCount = useMemo(() => {
    return questions.filter((q: any) => {
      const id = `${slug}-${q.question_name || q.title || q.index}`;
      return isSolved(id);
    }).length;
  }, [questions, isSolved, slug]);

  const progressPercent = questions.length > 0 ? Math.round((solvedCount / questions.length) * 100) : 0;

  const filteredQuestions = useMemo(() => {
    return questions.filter((q: any) => {
      const name = (q.question_name || q.title || '').toLowerCase();
      const tags = (q.tags || []).join(' ').toLowerCase();
      const matchesSearch = name.includes(searchQuery.toLowerCase()) || tags.includes(searchQuery.toLowerCase());
      const matchesDiff = selectedDifficulty === 'All' || (q.difficulty || '').toLowerCase() === selectedDifficulty.toLowerCase();
      return matchesSearch && matchesDiff;
    });
  }, [questions, searchQuery, selectedDifficulty]);

  const companyName = companyData?.companyName || companyMeta?.name || 'Company';

  const renderQuestionRows = (list: typeof filteredQuestions) => (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-xs divide-y divide-zinc-200 dark:divide-zinc-800/80">
      {list.map((q: any, idx: number) => {
        const probId = `${slug}-${q.question_name || q.title || idx}`;
        const solved = isSolved(probId);
        const diff = q.difficulty || 'Medium';

        const diffColor =
          diff.toLowerCase() === 'easy'
            ? 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
            : diff.toLowerCase() === 'hard'
            ? 'text-rose-500 bg-rose-500/10 border-rose-500/20'
            : 'text-amber-500 bg-amber-500/10 border-amber-500/20';

        return (
          <div
            key={probId}
            className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors"
          >
            <div className="flex items-center gap-3.5 flex-1 min-w-0">
              <input
                type="checkbox"
                checked={solved}
                onChange={() => toggleSolved(probId)}
                className="w-4 h-4 rounded text-[#6C47FF] focus:ring-[#6C47FF] border-zinc-300 dark:border-zinc-700 cursor-pointer shrink-0"
              />

              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs sm:text-sm font-medium ${solved ? 'line-through text-zinc-400 dark:text-zinc-500' : 'text-zinc-900 dark:text-white'}`}>
                    {q.index ? `${q.index}. ` : ''}{q.question_name || q.title}
                  </span>

                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${diffColor}`}>
                    {diff}
                  </span>

                  {q.question_popularity && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      {q.question_popularity}
                    </span>
                  )}
                </div>

                {q.tags && q.tags.length > 0 && (
                  <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                    {q.tags.map((t: string) => (
                      <span key={t} className="text-[10px] text-zinc-500">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="shrink-0 self-end sm:self-auto">
              {q.platform_link && (
                <a
                  href={q.platform_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors"
                >
                  <span>{q.platform_name || 'Solve on LeetCode'}</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 font-lexend">
      {/* Back Link */}
      <button
        onClick={() => navigate('/preparation/company-wise-dsa-sheet')}
        className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Companies</span>
      </button>

      {/* Header Banner */}
      <div className="p-6 rounded-3xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9f85ff] mb-1">
              <Building2 className="w-4 h-4" />
              Verified Interview Questions
            </div>
            <div className="flex items-center gap-3">
              <CompanyLogo name={companyName} size={36} className="shrink-0" />
              <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
                {companyName} DSA Interview Sheet (2026-27)
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-3xl leading-relaxed">
              {companyData?.description || companyMeta?.description || `Master the ${companyName} technical interview round with this curated set of recurring questions.`}
            </p>
          </div>

          <div className="shrink-0 p-4 rounded-2xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 min-w-[200px]">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-semibold text-zinc-600 dark:text-zinc-300">Progress</span>
              <span className="font-bold text-[#6C47FF]">{solvedCount} / {questions.length}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-zinc-100 dark:bg-zinc-700 overflow-hidden">
              <div
                className="h-full rounded-full bg-[#6C47FF] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-[11px] text-zinc-400 mt-1.5 text-right font-medium">
              {progressPercent}% Completed
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search ${companyName} problems...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#6C47FF]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto">
            {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedDifficulty === diff
                    ? 'bg-[#6C47FF] text-white shadow-xs'
                    : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Problems Table / List */}
      {filteredQuestions.length === 0 ? (
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-8 text-center text-xs text-zinc-500">
          No problems found matching your filters.
        </div>
      ) : !isAuthenticated ? (
        <AuthGate
          totalCount={questions.length}
          featureName={`${companyName} interview questions`}
          title={`Sign in to access ${companyName} questions`}
        >
          {renderQuestionRows(filteredQuestions.slice(0, 6))}
        </AuthGate>
      ) : (
        renderQuestionRows(filteredQuestions)
      )}
    </div>
  );
};
