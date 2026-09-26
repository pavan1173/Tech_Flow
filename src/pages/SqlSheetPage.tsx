import React, { useState, useMemo } from 'react';
import { sqlData } from '../data/sqlData';
import { useProgress } from '../context/ProgressContext';
import { Database, Search, Copy, Check, Terminal, Sparkles } from 'lucide-react';

interface SqlSheetPageProps {
  navigate: (to: string) => void;
}

export const SqlSheetPage: React.FC<SqlSheetPageProps> = () => {
  const { isSolved, toggleSolved } = useProgress();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const questions = sqlData?.questions || [];

  const categories = useMemo(() => {
    const set = new Set<string>();
    questions.forEach((q: any) => {
      if (q.category) set.add(q.category);
    });
    return ['All', ...Array.from(set)];
  }, [questions]);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q: any) => {
      const matchesCat = selectedCategory === 'All' || q.category === selectedCategory;
      const matchesSearch =
        (q.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (q.answer || '').toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [questions, selectedCategory, searchQuery]);

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 font-lexend">
      {/* Header */}
      <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff] mb-2">
          <Database className="w-3.5 h-3.5" />
          Relational Database Interview Bank
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
          Top 110 Most Asked SQL Interview Queries (2026-27)
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          Comprehensive collection of the most frequently asked SQL query interview questions. Covers SELECT operations, JOINs, subqueries, aggregations, window functions, and complex real-world analytical scenarios.
        </p>
      </div>

      {/* Filter Bar & Search */}
      <div className="space-y-3">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search queries (e.g. Nth highest salary, JOIN, RANK)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6C47FF]"
          />
        </div>

        {/* Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#6C47FF] text-white shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Queries List */}
      <div className="space-y-4">
        {filteredQuestions.map((q: any) => {
          const probId = `sql-${q.index}`;
          const solved = isSolved(probId);

          return (
            <div
              key={q.index}
              className="p-5 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={solved}
                    onChange={() => toggleSolved(probId)}
                    className="w-4 h-4 mt-0.5 rounded text-[#6C47FF] focus:ring-[#6C47FF] border-zinc-300 dark:border-zinc-700 cursor-pointer shrink-0"
                  />
                  <div>
                    <h3 className={`text-sm sm:text-base font-bold ${solved ? 'line-through text-zinc-400 dark:text-zinc-500' : 'text-zinc-900 dark:text-white'}`}>
                      {q.index}. {q.title}
                    </h3>
                    {q.category && (
                      <span className="text-[11px] text-zinc-500 font-medium mt-0.5 inline-block">
                        Category: {q.category} · Difficulty: {q.difficulty || 'Intermediate'}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(q.index, q.answer)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors shrink-0"
                >
                  {copiedId === q.index ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Query</span>
                    </>
                  )}
                </button>
              </div>

              {/* SQL Code Block */}
              <div className="relative rounded-xl bg-zinc-900 dark:bg-black/90 p-4 font-mono text-xs text-zinc-100 overflow-x-auto border border-zinc-800">
                <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] mb-2 uppercase font-sans font-bold">
                  <Terminal className="w-3 h-3 text-[#6C47FF]" />
                  SQL Query
                </div>
                <pre className="text-emerald-400 font-mono text-xs whitespace-pre-wrap">
                  {q.answer}
                </pre>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
