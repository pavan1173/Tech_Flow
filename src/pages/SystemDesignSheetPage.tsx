import React, { useState, useMemo } from 'react';
import { systemDesignData } from '../data/systemDesignData';
import { useProgress } from '../context/ProgressContext';
import { Layers, Search, CheckCircle2, ChevronDown, Network, Server, Database } from 'lucide-react';

interface SystemDesignSheetPageProps {
  navigate: (to: string) => void;
}

export const SystemDesignSheetPage: React.FC<SystemDesignSheetPageProps> = () => {
  const { isSolved, toggleSolved } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = systemDesignData?.questions || [];

  const filteredQuestions = useMemo(() => {
    return questions.filter((q: any) => {
      const title = (q.title || q.name || '').toLowerCase();
      const desc = (q.description || q.explanation || '').toLowerCase();
      return title.includes(searchQuery.toLowerCase()) || desc.includes(searchQuery.toLowerCase());
    });
  }, [questions, searchQuery]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 font-lexend">
      {/* Header */}
      <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff] mb-2">
          <Layers className="w-3.5 h-3.5" />
          High-Level &amp; Low-Level Design
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
          System Design Sheet (2026-27)
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          Master the architectural principles, trade-offs, and blueprints behind large-scale distributed systems. Built for SDE-2, SDE-3, and Senior Engineering interviews.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search system design problems (e.g. Rate Limiter, Cache)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6C47FF]"
        />
      </div>

      {/* Questions / Architectures */}
      <div className="space-y-4">
        {filteredQuestions.map((q: any, idx: number) => {
          const probId = `sysdesign-${q.title || idx}`;
          const solved = isSolved(probId);
          const isOpen = openIndex === idx;

          return (
            <div
              key={`${q.id || ''}-${q.index || ''}-${idx}`}
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
                      {q.index ? `${q.index}. ` : ''}{q.title || q.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-xs text-zinc-500">
                      <span>{q.type || 'Distributed Architecture'}</span>
                      {q.difficulty && (
                        <>
                          <span>·</span>
                          <span className="text-[#6C47FF] font-semibold">{q.difficulty}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-white"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {isOpen && (
                <div className="p-5 border-t border-zinc-200 dark:border-zinc-800/80 space-y-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {q.description && (
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white text-xs uppercase tracking-wider mb-1">
                        Problem Overview
                      </h4>
                      <p>{q.description}</p>
                    </div>
                  )}

                  {q.keyComponents && q.keyComponents.length > 0 && (
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white text-xs uppercase tracking-wider mb-2">
                        Core Architecture Components
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.keyComponents.map((c: string) => (
                          <div key={c} className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs flex items-center gap-2">
                            <Server className="w-3.5 h-3.5 text-[#6C47FF] shrink-0" />
                            <span>{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {q.tradeOffs && (
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs">
                      <strong>Design Trade-offs:</strong> {q.tradeOffs}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
