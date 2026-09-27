import React, { useState, useMemo } from 'react';
import { hrData } from '../data/hrData';
import { useProgress } from '../context/ProgressContext';
import { MessageSquareQuote, Search, ChevronDown, CheckCircle2, Award } from 'lucide-react';

interface HrQuestionsPageProps {
  navigate: (to: string) => void;
}

export const HrQuestionsPage: React.FC<HrQuestionsPageProps> = () => {
  const { isSolved, toggleSolved } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = hrData?.questions || [];

  const filteredQuestions = useMemo(() => {
    return questions.filter((q: any) => {
      const questionText = (q.question || q.title || '').toLowerCase();
      const answerText = (q.answer || '').toLowerCase();
      return questionText.includes(searchQuery.toLowerCase()) || answerText.includes(searchQuery.toLowerCase());
    });
  }, [questions, searchQuery]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 font-lexend">
      {/* Header */}
      <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff] mb-2">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          Behavioral &amp; Culture Fit Round
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
          Top 100+ Most Asked HR Interview Questions (2026-27)
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          Master the behavioral, leadership, and situational questions that determine offer decisions. Formatted with real STAR method responses, key talking points, and red flags to avoid.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search HR questions (e.g. Tell me about yourself, Conflict, Strength)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6C47FF]"
        />
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((q: any, idx: number) => {
          const probId = `hr-${q.question || idx}`;
          const solved = isSolved(probId);
          const isOpen = openIndex === idx;

          return (
            <div
              key={`${q.id || ''}-${idx}`}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-xs"
            >
              <div className="px-5 py-4 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-800/40">
                <div className="flex items-center gap-3.5 flex-1 min-w-0">
                  <input
                    type="checkbox"
                    checked={solved}
                    onChange={() => toggleSolved(probId)}
                    className="w-4 h-4 rounded text-[#6C47FF] focus:ring-[#6C47FF] border-zinc-300 dark:border-zinc-700 cursor-pointer shrink-0"
                  />
                  <div className="min-w-0 cursor-pointer" onClick={() => setOpenIndex(isOpen ? null : idx)}>
                    <h3 className={`text-sm sm:text-base font-bold ${solved ? 'line-through text-zinc-400 dark:text-zinc-500' : 'text-zinc-900 dark:text-white'}`}>
                      {idx + 1}. {q.question}
                    </h3>
                    {q.category && (
                      <span className="text-[11px] text-zinc-500 mt-0.5 inline-block">
                        Focus: {q.category}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-white shrink-0"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {isOpen && (
                <div className="p-5 border-t border-zinc-200 dark:border-zinc-800/80 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wider text-[#6C47FF] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    Recommended STAR Strategy &amp; Answer
                  </div>
                  {q.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
