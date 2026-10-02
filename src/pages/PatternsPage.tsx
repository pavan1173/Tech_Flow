import React, { useState, useMemo } from 'react';
import { patternsData } from '../data/patternsData';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import {
  Search,
  ChevronDown,
  ArrowLeft,
  Star,
  FileText,
  Youtube,
  Code2,
  Check,
  X,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface PatternsPageProps {
  navigate: (to: string) => void;
}

interface ProblemItem {
  _id?: string;
  id?: string;
  problem_name?: string;
  title?: string;
  question_name?: string;
  difficulty?: string;
  platform?: string;
  platform_name?: string;
  platform_link?: string;
  problemUrl?: string;
  link?: string;
  video_link?: string;
  tags?: string[];
}

interface GroupedSubTopic {
  subTopicName: string;
  problems: ProblemItem[];
}

interface GroupedTopic {
  topicName: string;
  subTopics: GroupedSubTopic[];
  totalProblems: number;
}

export const PatternsPage: React.FC<PatternsPageProps> = ({ navigate }) => {
  const { isSolved, toggleSolved, isBookmarked, toggleBookmark, saveNote, getNote } = useProgress();
  const { isAuthenticated, openAuthModal } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [onlyBookmarks, setOnlyBookmarks] = useState<boolean>(false);
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({ '0': true });
  const [expandedSubTopics, setExpandedSubTopics] = useState<Record<string, boolean>>({ '0-0': true });
  const [showFullDesc, setShowFullDesc] = useState<boolean>(false);
  const [activeNoteProblem, setActiveNoteProblem] = useState<{ id: string; title: string } | null>(null);
  const [noteContent, setNoteContent] = useState<string>('');

  // Group sections by unique topic so multiple sub-sections (e.g. Trees, DP, Sliding Window) group under their primary pattern
  const groupedData: GroupedTopic[] = useMemo(() => {
    if (!patternsData?.sections) return [];

    const topicMap: Map<string, Map<string, ProblemItem[]>> = new Map();

    for (const sec of patternsData.sections) {
      const topic = sec.topic || 'General Patterns';
      const subTopic = sec.subTopic || 'General';
      const probs: ProblemItem[] = sec.problems || [];

      if (!topicMap.has(topic)) {
        topicMap.set(topic, new Map());
      }
      const subMap = topicMap.get(topic)!;
      if (!subMap.has(subTopic)) {
        subMap.set(subTopic, []);
      }
      subMap.get(subTopic)!.push(...probs);
    }

    const result: GroupedTopic[] = [];
    topicMap.forEach((subMap, topicName) => {
      const subTopics: GroupedSubTopic[] = [];
      let totalProbs = 0;
      subMap.forEach((problems, subTopicName) => {
        subTopics.push({ subTopicName, problems });
        totalProbs += problems.length;
      });
      result.push({ topicName, subTopics, totalProblems: totalProbs });
    });

    return result;
  }, []);

  // All problems flat list
  const allProblems: ProblemItem[] = useMemo(() => {
    return groupedData.flatMap(t => t.subTopics.flatMap(st => st.problems));
  }, [groupedData]);

  // Solved count
  const solvedCount = useMemo(() => {
    return allProblems.filter(p => {
      const probTitle = p.problem_name || p.title || p.question_name || '';
      const probId = `pattern-${probTitle}`;
      return isSolved(probId);
    }).length;
  }, [allProblems, isSolved]);

  const totalCount = allProblems.length || patternsData.totalProblems || 180;
  const progressPercent = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  const toggleTopicAccordion = (tIdx: number) => {
    setExpandedTopics(prev => ({ ...prev, [tIdx]: !prev[tIdx] }));
  };

  const toggleSubTopicAccordion = (key: string) => {
    setExpandedSubTopics(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const expandAll = () => {
    const nextTopics: Record<string, boolean> = {};
    const nextSubTopics: Record<string, boolean> = {};
    groupedData.forEach((t, tIdx) => {
      nextTopics[tIdx] = true;
      t.subTopics.forEach((_, stIdx) => {
        nextSubTopics[`${tIdx}-${stIdx}`] = true;
      });
    });
    setExpandedTopics(nextTopics);
    setExpandedSubTopics(nextSubTopics);
  };

  const collapseAll = () => {
    setExpandedTopics({});
    setExpandedSubTopics({});
  };

  const openNoteModal = (probId: string, probTitle: string) => {
    if (!isAuthenticated) {
      openAuthModal();
      return;
    }
    setActiveNoteProblem({ id: probId, title: probTitle });
    setNoteContent(getNote(probId));
  };

  const handleSaveNote = () => {
    if (activeNoteProblem) {
      saveNote(activeNoteProblem.id, noteContent);
      setActiveNoteProblem(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-6 max-w-6xl mx-auto">
      {/* Header Section matching reference image */}
      <div className="space-y-3.5">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          20 Essential DSA Patterns
        </h1>

        <div className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed max-w-4xl font-normal">
          <p className={showFullDesc ? '' : 'line-clamp-2'}>
            {patternsData.description ||
              'Master Data Structures & Algorithms (DSA) with the ultimate interview preparation sheet. Designed by experienced Software Engineers from top MAANG companies, this roadmap covers 20 essential coding patterns to improve problem-solving, strengthen coding skills, and help you crack software engineering interviews.'}
          </p>
          <button
            onClick={() => setShowFullDesc(!showFullDesc)}
            className="text-blue-400 hover:text-blue-300 font-semibold text-xs mt-1 inline-block cursor-pointer"
          >
            {showFullDesc ? 'Read Less' : 'Read More'}
          </button>
        </div>

        {/* Creator Attribution */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
          <span>By HackPath platform</span>
          <span>•</span>
          <span>{totalCount} Problems</span>
        </div>

        {/* Overall Progress Widget - Exact replica of screenshot */}
        <div className="inline-flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-[#0e121a] border border-[#1e2433] shadow-xs">
          {/* Radial progress circle */}
          <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
            <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-zinc-800"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-blue-500 transition-all duration-500 ease-out"
                strokeDasharray={`${progressPercent}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute font-bold text-[10px] text-white">
              {progressPercent}%
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-zinc-400">
              Overall Progress
            </span>
            <span className="text-xs font-bold text-white tracking-wide">
              {solvedCount}/{totalCount}
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search patterns, problems, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#0e121a] border border-[#1e2433] text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Difficulty pills */}
          <div className="flex items-center gap-1 bg-[#0e121a] p-1 rounded-xl border border-[#1e2433]">
            {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedDifficulty === diff
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>

          {/* Bookmarked filter */}
          <button
            onClick={() => setOnlyBookmarks(!onlyBookmarks)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-colors cursor-pointer ${
              onlyBookmarks
                ? 'bg-amber-500/10 border-amber-500/40 text-amber-400'
                : 'bg-[#0e121a] border-[#1e2433] text-zinc-400 hover:text-white'
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${onlyBookmarks ? 'fill-amber-400 text-amber-400' : 'text-zinc-400'}`} />
            <span>Starred</span>
          </button>

          {/* Expand / Collapse All */}
          <div className="flex items-center gap-1.5 ml-1">
            <button
              onClick={expandAll}
              className="px-2 py-1 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <span className="text-zinc-600 text-xs">/</span>
            <button
              onClick={collapseAll}
              className="px-2 py-1 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* Two-Tier Nested Accordion List matching screenshot */}
      <div className="space-y-2.5 pt-1">
        {groupedData.map((topicGroup, tIdx) => {
          const filteredSubTopics = topicGroup.subTopics.map((stGroup) => {
            const filteredProbs = stGroup.problems.filter((prob) => {
              const probTitle = prob.problem_name || prob.title || prob.question_name || '';
              const probId = `pattern-${probTitle}`;
              const tags = (prob.tags || []).join(' ');

              const matchesSearch =
                !searchQuery ||
                probTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                topicGroup.topicName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tags.toLowerCase().includes(searchQuery.toLowerCase());

              const diff = (prob.difficulty || 'Medium').toLowerCase();
              const matchesDiff =
                selectedDifficulty === 'All' ||
                diff === selectedDifficulty.toLowerCase() ||
                (selectedDifficulty === 'Easy' && diff === 'basic');

              const matchesBookmark = !onlyBookmarks || isBookmarked(probId);

              return matchesSearch && matchesDiff && matchesBookmark;
            });

            return {
              ...stGroup,
              problems: filteredProbs,
            };
          }).filter(st => st.problems.length > 0 || !searchQuery);

          const totalFilteredProbs = filteredSubTopics.reduce((acc, st) => acc + st.problems.length, 0);

          if ((searchQuery || onlyBookmarks || selectedDifficulty !== 'All') && totalFilteredProbs === 0) {
            return null;
          }

          // Topic solved count
          const allTopicProbs = topicGroup.subTopics.flatMap(st => st.problems);
          const topicSolvedCount = allTopicProbs.filter(p => {
            const pTitle = p.problem_name || p.title || p.question_name || '';
            return isSolved(`pattern-${pTitle}`);
          }).length;
          const topicPercent = allTopicProbs.length > 0 ? Math.round((topicSolvedCount / allTopicProbs.length) * 100) : 0;

          const isTopicOpen = expandedTopics[tIdx] ?? (tIdx === 0);

          return (
            <div
              key={topicGroup.topicName || tIdx}
              className="rounded-xl border border-[#1b2230] bg-[#0c1017] overflow-hidden shadow-xs transition-all duration-200"
            >
              {/* Level 1: Pattern Header */}
              <button
                onClick={() => toggleTopicAccordion(tIdx)}
                className="w-full px-4 sm:px-5 py-3.5 flex items-center justify-between bg-[#0e131d] hover:bg-[#121824] transition-colors text-left select-none cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <span className="font-bold text-sm sm:text-[14px] text-zinc-100 truncate">
                    {topicGroup.topicName}
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0 ml-3">
                  <span className="text-xs font-semibold text-zinc-400 font-mono">
                    {topicSolvedCount}/{allTopicProbs.length}
                  </span>

                  {/* Progress bar line matching screenshot */}
                  <div className="w-24 sm:w-32 h-1.5 rounded-full bg-[#1b2332] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${topicPercent}%` }}
                    />
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                      isTopicOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Level 1 Content */}
              {isTopicOpen && (
                <div className="p-2 sm:p-3 space-y-2 bg-[#090d14] border-t border-[#18202d]">
                  {filteredSubTopics.length === 0 ? (
                    <div className="p-4 text-center text-xs text-zinc-500">
                      No matching problems in this pattern.
                    </div>
                  ) : (
                    filteredSubTopics.map((subGroup, stIdx) => {
                      const subKey = `${tIdx}-${stIdx}`;
                      const isSubOpen = expandedSubTopics[subKey] ?? (tIdx === 0 && stIdx === 0);

                      const subSolvedCount = subGroup.problems.filter(p => {
                        const pTitle = p.problem_name || p.title || p.question_name || '';
                        return isSolved(`pattern-${pTitle}`);
                      }).length;

                      const isSingleGeneric =
                        topicGroup.subTopics.length === 1 &&
                        (subGroup.subTopicName.toLowerCase() === 'general' ||
                          subGroup.subTopicName.toLowerCase() === topicGroup.topicName.toLowerCase());

                      return (
                        <div
                          key={subGroup.subTopicName || stIdx}
                          className="rounded-lg border border-[#19212e] bg-[#0d1119] overflow-hidden"
                        >
                          {/* Level 2: SubTopic Header (e.g. General or specific category) */}
                          <button
                            onClick={() => toggleSubTopicAccordion(subKey)}
                            className="w-full px-3.5 py-2.5 flex items-center justify-between bg-[#101622] hover:bg-[#141b2a] transition-colors text-left select-none cursor-pointer"
                          >
                            <span className="font-semibold text-xs sm:text-[13px] text-zinc-200 truncate">
                              {subGroup.subTopicName}
                            </span>

                            <div className="flex items-center gap-2.5 shrink-0 ml-2">
                              <span className="text-[11px] text-zinc-400 font-mono">
                                {subSolvedCount}/{subGroup.problems.length}
                              </span>
                              <ChevronDown
                                className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${
                                  isSubOpen ? 'rotate-180 text-blue-400' : ''
                                }`}
                              />
                            </div>
                          </button>

                          {/* Level 3: Problem Items */}
                          {isSubOpen && (
                            <div className="divide-y divide-[#171f2d] bg-[#0a0e16]">
                              {subGroup.problems.map((prob, pIdx) => {
                                const probTitle = prob.problem_name || prob.title || prob.question_name || 'Untitled Problem';
                                const probId = `pattern-${probTitle}`;
                                const solved = isSolved(probId);
                                const bookmarked = isBookmarked(probId);
                                const hasNote = !!getNote(probId);

                                const diff = prob.difficulty || 'Medium';
                                const diffLower = diff.toLowerCase();
                                const diffBadgeStyle =
                                  diffLower === 'basic' || diffLower === 'easy'
                                    ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-800/40'
                                    : diffLower === 'hard'
                                    ? 'text-rose-400 bg-rose-950/40 border border-rose-800/40'
                                    : 'text-amber-400 bg-amber-950/40 border border-amber-800/40';

                                const practiceLink = prob.problemUrl || prob.platform_link || prob.link || `https://leetcode.com/problemset/all/?search=${encodeURIComponent(probTitle)}`;
                                const videoLink = prob.video_link || '';

                                return (
                                  <div
                                    key={probId || pIdx}
                                    className="px-3.5 py-2.5 sm:py-3 flex items-center justify-between gap-3 hover:bg-[#111724] transition-colors group"
                                  >
                                    {/* Left: Checkbox + Title */}
                                    <div className="flex items-center gap-3 min-w-0 flex-1">
                                      <button
                                        onClick={() => toggleSolved(probId)}
                                        className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all shrink-0 cursor-pointer ${
                                          solved
                                            ? 'bg-blue-600 border-blue-600 text-white'
                                            : 'border-zinc-600 bg-transparent hover:border-zinc-400'
                                        }`}
                                        title={solved ? 'Mark as Unsolved' : 'Mark as Solved'}
                                      >
                                        {solved && <Check className="w-3 h-3 stroke-[3]" />}
                                      </button>

                                      <div className="min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                          <a
                                            href={practiceLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-xs sm:text-[13px] font-medium transition-colors ${
                                              solved
                                                ? 'line-through text-zinc-500 hover:text-zinc-300'
                                                : 'text-zinc-200 hover:text-blue-400'
                                            }`}
                                          >
                                            {probTitle}
                                          </a>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Right: Actions & Badges */}
                                    <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                                      {/* Practice link icon */}
                                      <a
                                        href={practiceLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                                        title="Practice Problem on LeetCode"
                                      >
                                        <Code2 className="w-4 h-4" />
                                      </a>

                                      {/* Difficulty Pill Badge */}
                                      <span
                                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${diffBadgeStyle}`}
                                      >
                                        {diff}
                                      </span>

                                      {/* Video Solution if available */}
                                      {videoLink ? (
                                        <a
                                          href={videoLink}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="p-1 rounded-md text-red-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                                          title="Watch Video Solution"
                                        >
                                          <Youtube className="w-4 h-4 fill-red-500/20" />
                                        </a>
                                      ) : null}

                                      {/* Bookmark / Star Button */}
                                      <button
                                        onClick={() => toggleBookmark(probId)}
                                        className="p-1 rounded-md transition-colors hover:bg-zinc-800 cursor-pointer"
                                        title={bookmarked ? 'Remove Bookmark' : 'Bookmark Problem'}
                                      >
                                        <Star
                                          className={`w-3.5 h-3.5 ${
                                            bookmarked
                                              ? 'fill-amber-400 text-amber-400'
                                              : 'text-zinc-500 hover:text-zinc-300'
                                          }`}
                                        />
                                      </button>

                                      {/* Notes Button */}
                                      <button
                                        onClick={() => openNoteModal(probId, probTitle)}
                                        className={`p-1 rounded-md transition-colors cursor-pointer ${
                                          hasNote
                                            ? 'text-blue-400 bg-blue-500/10'
                                            : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800'
                                        }`}
                                        title={hasNote ? 'Edit Notes' : 'Add Note'}
                                      >
                                        <FileText className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Notes Modal */}
      {activeNoteProblem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#0e121a] border border-[#1e2433] rounded-2xl max-w-lg w-full p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Notes for Problem</span>
              </h3>
              <button
                onClick={() => setActiveNoteProblem(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-zinc-400 font-medium">
              {activeNoteProblem.title}
            </p>

            <textarea
              rows={6}
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Write your pattern template, recurrence relation, time/space complexities..."
              className="w-full p-3 rounded-xl bg-[#090d14] border border-[#1e2433] text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none font-mono"
            />

            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                onClick={() => setActiveNoteProblem(null)}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-zinc-400 hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNote}
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                Save Notes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
