import React, { useState, useMemo } from 'react';
import { roleWiseData } from '../data/roleWiseData';
import { Users, Search, ChevronDown, Terminal, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

interface RoleWisePageProps {
  navigate: (to: string) => void;
}

export const RoleWisePage: React.FC<RoleWisePageProps> = () => {
  const categories = roleWiseData?.categories || [];

  // Flatten all roles across categories
  const allRoles = useMemo(() => {
    return categories.flatMap((cat: any) => cat.roles || []);
  }, [categories]);

  const [activeRoleSlug, setActiveRoleSlug] = useState<string>(allRoles[0]?.slug || 'frontend-developer');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentRole = allRoles.find((r: any) => r.slug === activeRoleSlug) || allRoles[0];
  const metadata = currentRole?.data?.metadata || {};
  const questions = currentRole?.data?.questions || [];

  const filteredQuestions = useMemo(() => {
    return questions.filter((q: any) => {
      const title = (q.question || q.title || '').toLowerCase();
      const ans = (q.answer || '').toLowerCase();
      const topic = (q.topic || '').toLowerCase();
      return title.includes(searchQuery.toLowerCase()) || ans.includes(searchQuery.toLowerCase()) || topic.includes(searchQuery.toLowerCase());
    });
  }, [questions, searchQuery]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 font-lexend">
      {/* Header */}
      <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff] mb-2">
          <Users className="w-3.5 h-3.5" />
          Targeted Interview Questions
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
          Role Wise Interview Questions (2026-27)
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          {metadata.description || 'Frontend, Backend, Fullstack, Mobile, DevOps — get dedicated interview questions and production-level answers tailored specifically to your target domain.'}
        </p>
      </div>

      {/* Role Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {allRoles.map((role: any) => (
          <button
            key={role.slug}
            onClick={() => {
              setActiveRoleSlug(role.slug);
              setOpenIndex(0);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeRoleSlug === role.slug
                ? 'bg-[#6C47FF] text-white shadow-md shadow-indigo-500/20'
                : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-700/80'
            }`}
          >
            {role.displayName || role.slug}
            {role.data?.questions?.length ? ` (${role.data.questions.length})` : ''}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder={`Search ${currentRole?.displayName || 'role'} questions, topics...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6C47FF]"
        />
      </div>

      {/* Questions Accordion */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="p-8 text-center text-xs text-zinc-400">
            No questions found matching your search.
          </div>
        ) : (
          filteredQuestions.map((q: any, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={q.question || q.title || idx}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left bg-zinc-50/50 dark:bg-zinc-800/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#6C47FF]/10 text-[#6C47FF] flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white">
                        {q.question || q.title}
                      </h3>
                      {q.topic && (
                        <span className="text-[11px] text-zinc-500 font-medium">
                          Topic: {q.topic}
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="p-5 border-t border-zinc-200 dark:border-zinc-800/80 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap">
                    {q.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
