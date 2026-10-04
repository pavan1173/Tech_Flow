import React, { useState, useMemo } from 'react';
import { dsaSheetsDetail } from '../data/dsaSheetsDetail';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { AuthGate } from '../components/AuthGate';
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
  CheckCircle2,
  Clock,
  Sparkles,
  Link2,
  Bookmark,
  MoreVertical,
  CheckCheck
} from 'lucide-react';

interface DsaSheetDetailPageProps {
  slug: string;
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
  tufUrl?: string;
  docUrl?: string;
  link?: string;
  video_link?: string;
  tag?: 'Basic' | 'Core';
  tags?: string[];
  status?: string;
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

export const DsaSheetDetailPage: React.FC<DsaSheetDetailPageProps> = ({ slug, navigate }) => {
  const sheetData = dsaSheetsDetail[slug] || dsaSheetsDetail['blind-75-dsa-sheet'];
  const { isSolved, toggleSolved, isBookmarked, toggleBookmark, saveNote, getNote } = useProgress();
  const { isAuthenticated, openAuthModal } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [onlyBookmarks, setOnlyBookmarks] = useState<boolean>(false);
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});
  const [expandedSubTopics, setExpandedSubTopics] = useState<Record<string, boolean>>({});
  const [showFullDesc, setShowFullDesc] = useState<boolean>(false);
  const [activeNoteProblem, setActiveNoteProblem] = useState<{ id: string; title: string } | null>(null);
  const [noteContent, setNoteContent] = useState<string>('');
  const [copiedProbId, setCopiedProbId] = useState<string | null>(null);
  const [activeMenuProbId, setActiveMenuProbId] = useState<string | null>(null);

  // Group sections by topic and subtopic
  const groupedData: GroupedTopic[] = useMemo(() => {
    if (!sheetData?.sections) return [];

    const topicMap: Map<string, Map<string, ProblemItem[]>> = new Map();

    for (const sec of sheetData.sections) {
      const topic = sec.topic || sec.section_title || 'General Topics';
      const subTopic = sec.subTopic || sec.sub_topic || sec.topic || 'Problems';
      const probs: ProblemItem[] = sec.problems || sec.questions || [];

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
  }, [sheetData]);

  // All problems flat list
  const allProblems: ProblemItem[] = useMemo(() => {
    return groupedData.flatMap(t => t.subTopics.flatMap(st => st.problems));
  }, [groupedData]);

  // Solved count
  const solvedCount = useMemo(() => {
    return allProblems.filter(p => {
      const probTitle = p.problem_name || p.title || p.question_name || '';
      const probId = `${slug}-${probTitle}`;
      return isSolved(probId);
    }).length;
  }, [allProblems, isSolved, slug]);

  const totalCount = allProblems.length || sheetData?.totalProblems || 0;
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

  const handleCopyLink = (prob: ProblemItem, probId: string) => {
    const url = prob.problemUrl || prob.tufUrl || prob.platform_link || window.location.href;
    navigator.clipboard?.writeText(url);
    setCopiedProbId(probId);
    setTimeout(() => setCopiedProbId(null), 2000);
    setActiveMenuProbId(null);
  };

  if (!sheetData) {
    return (
      <div className="p-8 text-center max-w-lg mx-auto font-lexend space-y-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Sheet Not Found</h2>
        <p className="text-sm text-zinc-500">The requested DSA sheet could not be located.</p>
        <button
          onClick={() => navigate('/preparation/dsa-sheets')}
          className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
        >
          Back to DSA Sheets
        </button>
      </div>
    );
  }

  const cleanTopicName = (name: string) => {
    return name.replace(/^Step\s*\d+\s*:\s*/i, '').trim();
  };

  const cleanSubTopicName = (name: string) => {
    return name.replace(/^Lec\s*\d+\s*:\s*/i, '').trim();
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 p-3 sm:p-6 lg:p-8 font-lexend space-y-5 max-w-7xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => navigate('/preparation/dsa-sheets')}
        className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All DSA Sheets</span>
      </button>

      {/* Header Section matching reference image */}
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          {sheetData.title}
        </h1>

        <div className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed max-w-4xl font-normal">
          {sheetData.description ? (
            <div>
              <p className={showFullDesc ? '' : 'line-clamp-2'}>
                {sheetData.description}
              </p>
              {sheetData.description.length > 140 && (
                <button
                  onClick={() => setShowFullDesc(!showFullDesc)}
                  className="text-blue-400 hover:text-blue-300 font-semibold text-xs mt-1 inline-block cursor-pointer"
                >
                  {showFullDesc ? 'Read Less' : 'Read More'}
                </button>
              )}
            </div>
          ) : null}
        </div>

        {/* Creator Attribution */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
          <span>By {sheetData.creatorName || 'Raj Vikramaditya (Striver)'}</span>
          <span>•</span>
          <span>{totalCount} Problems</span>
        </div>

        {/* Overall Progress Widget */}
        <div className="inline-flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230] shadow-xs">
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
                className="text-emerald-500 transition-all duration-500 ease-out"
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
              {solvedCount}/{totalCount} Completed
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-2">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search problems, topics, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230] text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap overflow-x-auto no-scrollbar py-1">
          {/* Difficulty pills */}
          <div className="flex items-center gap-1 bg-white dark:bg-[#0c1017] p-1 rounded-xl border border-zinc-200 dark:border-[#1b2230] shrink-0">
            {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
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
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-colors cursor-pointer shrink-0 ${
              onlyBookmarks
                ? 'bg-amber-500/10 border-amber-500/40 text-amber-400'
                : 'bg-white dark:bg-[#0c1017] border-zinc-200 dark:border-[#1b2230] text-zinc-400 hover:text-white'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarks ? 'fill-amber-400 text-amber-400' : 'text-zinc-400'}`} />
            <span>Saved</span>
          </button>

          {/* Expand / Collapse All */}
          <div className="flex items-center gap-1.5 ml-1 shrink-0 text-xs">
            <button
              onClick={expandAll}
              className="px-2 py-1 rounded-lg font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors cursor-pointer"
            >
              Expand
            </button>
            <span className="text-zinc-600">/</span>
            <button
              onClick={collapseAll}
              className="px-2 py-1 rounded-lg font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors cursor-pointer"
            >
              Collapse
            </button>
          </div>
        </div>
      </div>

      {/* Accordion List Matching Exact Screenshot {1871A41C-AFA6-437D-9300-26A1A9E96577}.png */}
      {!isAuthenticated ? (
        <AuthGate
          totalCount={sheetData?.totalProblems || 'all'}
          featureName={`${sheetData?.title || 'DSA Sheet'} problems`}
          title={`Sign in to access ${sheetData?.title || 'DSA Sheet'}`}
        >
          <div className="space-y-2 pt-1">
            {groupedData.slice(0, 6).map((topicGroup, tIdx) => {
              const allTopicProbs = topicGroup.subTopics.flatMap(st => st.problems);
              return (
                <div
                  key={`locked-dsa-${tIdx}`}
                  className="rounded-xl border border-zinc-200 dark:border-[#181d28] bg-white dark:bg-[#0c1017] p-4 flex items-center justify-between"
                >
                  <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                    {cleanTopicName(topicGroup.topicName)}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500 font-mono">
                      {allTopicProbs.length} problems
                    </span>
                    <ChevronDown className="w-4 h-4 text-zinc-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </AuthGate>
      ) : (
        <div className="space-y-2 pt-1">
          {groupedData.map((topicGroup, tIdx) => {
          const isSingleTopic =
            topicGroup.subTopics.length === 1 &&
            (topicGroup.subTopics[0].subTopicName === topicGroup.topicName ||
              topicGroup.subTopics[0].subTopicName === 'General' ||
              topicGroup.subTopics[0].subTopicName === 'Problems' ||
              topicGroup.subTopics[0].subTopicName === topicGroup.topicName);

          // Filter problems
          const filteredSubTopics = topicGroup.subTopics.map((stGroup) => {
            const filteredProbs = stGroup.problems.filter((prob) => {
              const probTitle = prob.problem_name || prob.title || prob.question_name || '';
              const probId = `${slug}-${probTitle}`;
              const tags = (prob.tags || []).join(' ');

              const matchesSearch =
                !searchQuery ||
                probTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
            return isSolved(`${slug}-${pTitle}`);
          }).length;
          const topicPercent = allTopicProbs.length > 0 ? Math.round((topicSolvedCount / allTopicProbs.length) * 100) : 0;

          const isTopicOpen = expandedTopics[tIdx] ?? false;
          const displayName = cleanTopicName(topicGroup.topicName);

          return (
            <div
              key={topicGroup.topicName || tIdx}
              className="rounded-xl border border-[#181d28] bg-white dark:bg-[#0c1017] overflow-hidden shadow-xs transition-all duration-200"
            >
              {/* Step / Topic Header matching screenshot */}
              <button
                onClick={() => toggleTopicAccordion(tIdx)}
                className="w-full px-4 sm:px-5 py-3.5 flex items-center justify-between bg-zinc-50 dark:bg-[#0e131d] hover:bg-[#121824] transition-colors text-left select-none cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0 ${
                      isTopicOpen ? 'rotate-0 text-blue-400' : '-rotate-90'
                    }`}
                  />
                  <span className="font-bold text-sm sm:text-[14px] text-zinc-100 truncate">
                    {displayName}
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0 ml-3">
                  <span className="text-xs font-semibold text-zinc-400 font-mono">
                    {topicSolvedCount}/{allTopicProbs.length}
                  </span>

                  {/* Progress bar line matching screenshot */}
                  <div className="w-20 sm:w-28 h-1.5 rounded-full bg-[#1b2332] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${topicPercent}%` }}
                    />
                  </div>
                </div>
              </button>

              {/* Topic Content */}
              {isTopicOpen && (
                <div className="border-t border-zinc-200 dark:border-[#18202d] bg-zinc-100 dark:bg-[#090d14]">
                  {/* If single subtopic, render problems directly matching screenshot */}
                  {isSingleTopic ? (
                    <div className="divide-y divide-[#151c2a]">
                      {filteredSubTopics[0]?.problems.map((prob, pIdx) => {
                        const probTitle = prob.problem_name || prob.title || prob.question_name || 'Untitled Problem';
                        const probId = `${slug}-${probTitle}`;
                        const solved = isSolved(probId);
                        const bookmarked = isBookmarked(probId);
                        const hasNote = !!getNote(probId);

                        const tag = prob.tag || ((prob.tags || []).includes('Core') ? 'Core' : (prob.tags || []).includes('Basic') ? 'Basic' : undefined);

                        const tufLink = prob.tufUrl || prob.problemUrl || `https://takeuforward.org/data-structure/${encodeURIComponent(probTitle.toLowerCase().replace(/\s+/g, '-'))}`;
                        const leetcodeLink = prob.problemUrl || `https://leetcode.com/problems/${encodeURIComponent(probTitle.toLowerCase().replace(/\s+/g, '-'))}`;
                        const docLink = prob.docUrl || prob.tufUrl || tufLink;
                        const videoLink = prob.video_link || `https://www.youtube.com/results?search_query=${encodeURIComponent('Striver ' + probTitle)}`;

                        return (
                          <div
                            key={probId || pIdx}
                            className={`px-3.5 sm:px-5 py-3 flex items-center justify-between gap-3 transition-colors group ${
                              solved ? 'bg-[#0b1019]/40 hover:bg-[#0e1420]' : 'hover:bg-[#111724]'
                            }`}
                          >
                            {/* Left: Checkbox + Title + Tag */}
                            <div className="flex items-center gap-3 min-w-0 flex-1">
                              <button
                                onClick={() => toggleSolved(probId)}
                                className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-all shrink-0 cursor-pointer ${
                                  solved
                                    ? 'bg-blue-600 border-blue-600 text-white'
                                    : 'border-zinc-700 bg-transparent hover:border-zinc-500'
                                }`}
                                title={solved ? 'Mark as Unsolved' : 'Mark as Solved'}
                              >
                                {solved && <Check className="w-3 h-3 stroke-[3]" />}
                              </button>

                              <div className="flex items-center gap-2.5 min-w-0 flex-wrap">
                                <a
                                  href={leetcodeLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`text-xs sm:text-[13.5px] font-semibold transition-colors truncate ${
                                    solved
                                      ? 'line-through text-zinc-500 hover:text-zinc-300'
                                      : 'text-zinc-200 hover:text-white'
                                  }`}
                                >
                                  {probTitle}
                                </a>

                                {/* Tag Badge matching screenshot (Basic in green / Core in amber) */}
                                {tag === 'Basic' && (
                                  <span className="px-1.5 py-0.5 rounded-[4px] text-[10px] font-bold bg-[#0d2a1c] text-[#34d399] border border-[#134e2c]">
                                    Basic
                                  </span>
                                )}
                                {tag === 'Core' && (
                                  <span className="px-1.5 py-0.5 rounded-[4px] text-[10px] font-bold bg-[#2e1d0c] text-[#fbbf24] border border-[#593710]">
                                    Core
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Right Action Icons matching screenshot */}
                            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 text-zinc-400">
                              {/* 1. TUF / Article Icon (Stylized F' / FileText) */}
                              {prob.tufUrl && (
                                <a
                                  href={tufLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hidden sm:inline-flex text-cyan-400 hover:text-cyan-300 p-1 rounded hover:bg-cyan-500/10 transition-colors font-mono font-black text-xs"
                                  title="TakeUForward Article Solution"
                                >
                                  F'
                                </a>
                              )}

                              {/* 2. Doc / Notes Icon */}
                              <button
                                onClick={() => openNoteModal(probId, probTitle)}
                                className={`hidden sm:inline-flex p-1 rounded transition-colors hover:text-white hover:bg-zinc-800 cursor-pointer ${
                                  hasNote ? 'text-blue-400 bg-blue-500/10' : 'text-zinc-400 hover:text-zinc-200'
                                }`}
                                title={hasNote ? 'Edit Notes' : 'Editorial Notes'}
                              >
                                <FileText className="w-3.5 h-3.5" />
                              </button>

                              {/* 3. YouTube Red Video Icon */}
                              <a
                                href={videoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-500 hover:text-red-400 p-1 rounded hover:bg-red-500/10 transition-colors"
                                title="YouTube Video Solution"
                              >
                                <Youtube className="w-4 h-4 fill-red-500/20" />
                              </a>

                              {/* 4. LeetCode / Coding Platform Icon (Amber/Gold code icon) */}
                              <a
                                href={leetcodeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-500 hover:text-amber-400 p-1 rounded hover:bg-amber-500/10 transition-colors"
                                title="Solve on LeetCode"
                              >
                                <Code2 className="w-4 h-4 stroke-[2.5]" />
                              </a>

                              {/* 5. Direct Link / Copy Icon */}
                              <button
                                onClick={() => handleCopyLink(prob, probId)}
                                className="hidden sm:inline-flex text-zinc-400 hover:text-zinc-200 p-1 rounded hover:bg-zinc-800 transition-colors cursor-pointer"
                                title="Copy Problem Link"
                              >
                                {copiedProbId === probId ? (
                                  <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                                ) : (
                                  <Link2 className="w-3.5 h-3.5" />
                                )}
                              </button>

                              {/* 6. Bookmark / Save Icon */}
                              <button
                                onClick={() => toggleBookmark(probId)}
                                className={`p-1 rounded transition-colors hover:bg-zinc-800 cursor-pointer ${
                                  bookmarked ? 'text-amber-400' : 'text-zinc-400 hover:text-zinc-200'
                                }`}
                                title={bookmarked ? 'Saved' : 'Save Bookmark'}
                              >
                                <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-amber-400' : ''}`} />
                              </button>

                              {/* 7. More Options 3-Dots Menu */}
                              <div className="relative">
                                <button
                                  onClick={() => setActiveMenuProbId(activeMenuProbId === probId ? null : probId)}
                                  className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-zinc-800 transition-colors cursor-pointer"
                                  title="More Options"
                                >
                                  <MoreVertical className="w-3.5 h-3.5" />
                                </button>

                                {activeMenuProbId === probId && (
                                  <div className="absolute right-0 top-full mt-1 w-48 rounded-xl bg-[#141b28] border border-[#222c3f] shadow-2xl py-1 z-30 text-xs font-medium space-y-0.5">
                                    <button
                                      onClick={() => {
                                        toggleSolved(probId);
                                        setActiveMenuProbId(null);
                                      }}
                                      className="w-full px-3 py-1.5 text-left text-zinc-300 hover:text-white hover:bg-zinc-800/80 flex items-center gap-2 cursor-pointer"
                                    >
                                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                                      <span>{solved ? 'Mark as Unsolved' : 'Mark as Solved'}</span>
                                    </button>
                                    <button
                                      onClick={() => {
                                        openNoteModal(probId, probTitle);
                                        setActiveMenuProbId(null);
                                      }}
                                      className="w-full px-3 py-1.5 text-left text-zinc-300 hover:text-white hover:bg-zinc-800/80 flex items-center gap-2 cursor-pointer"
                                    >
                                      <FileText className="w-3.5 h-3.5 text-blue-400" />
                                      <span>Custom Notes</span>
                                    </button>
                                    <button
                                      onClick={() => handleCopyLink(prob, probId)}
                                      className="w-full px-3 py-1.5 text-left text-zinc-300 hover:text-white hover:bg-zinc-800/80 flex items-center gap-2 cursor-pointer"
                                    >
                                      <Link2 className="w-3.5 h-3.5 text-purple-400" />
                                      <span>Copy Problem Link</span>
                                    </button>
                                    {prob.tufUrl && (
                                      <a
                                        href={tufLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setActiveMenuProbId(null)}
                                        className="w-full px-3 py-1.5 text-left text-zinc-300 hover:text-white hover:bg-zinc-800/80 flex items-center gap-2 sm:hidden cursor-pointer"
                                      >
                                        <span className="text-cyan-400 font-mono font-black text-xs">F'</span>
                                        <span>Article Solution</span>
                                      </a>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* Multi-subtopic (e.g. Striver A2Z) */
                    <div className="p-2 sm:p-3 space-y-2">
                      {filteredSubTopics.map((subGroup, stIdx) => {
                        const subKey = `${tIdx}-${stIdx}`;
                        const isSubOpen = expandedSubTopics[subKey] ?? false;

                        const subSolvedCount = subGroup.problems.filter(p => {
                          const pTitle = p.problem_name || p.title || p.question_name || '';
                          return isSolved(`${slug}-${pTitle}`);
                        }).length;

                        const displaySubName = cleanSubTopicName(subGroup.subTopicName);

                        return (
                          <div
                            key={subGroup.subTopicName || stIdx}
                            className="rounded-lg border border-zinc-200 dark:border-[#19212e] bg-white dark:bg-[#0d1119] overflow-hidden"
                          >
                            <button
                              onClick={() => toggleSubTopicAccordion(subKey)}
                              className="w-full px-3.5 py-2.5 flex items-center justify-between bg-[#101622] hover:bg-[#141b2a] transition-colors text-left select-none cursor-pointer"
                            >
                              <span className="font-semibold text-xs sm:text-[13px] text-zinc-200 truncate">
                                {displaySubName}
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

                            {isSubOpen && (
                              <div className="divide-y divide-zinc-200 dark:divide-[#171f2d] bg-zinc-50 dark:bg-[#0a0e16]">
                                {subGroup.problems.map((prob, pIdx) => {
                                  const probTitle = prob.problem_name || prob.title || prob.question_name || 'Untitled Problem';
                                  const probId = `${slug}-${probTitle}`;
                                  const solved = isSolved(probId);
                                  const bookmarked = isBookmarked(probId);
                                  const hasNote = !!getNote(probId);
                                  const tag = prob.tag || ((prob.tags || []).includes('Core') ? 'Core' : (prob.tags || []).includes('Basic') ? 'Basic' : undefined);

                                  const tufLink = prob.tufUrl || prob.problemUrl || `https://takeuforward.org/data-structure/${encodeURIComponent(probTitle.toLowerCase().replace(/\s+/g, '-'))}`;
                                  const leetcodeLink = prob.problemUrl || `https://leetcode.com/problems/${encodeURIComponent(probTitle.toLowerCase().replace(/\s+/g, '-'))}`;
                                  const videoLink = prob.video_link || `https://www.youtube.com/results?search_query=${encodeURIComponent('Striver ' + probTitle)}`;

                                  return (
                                    <div
                                      key={probId || pIdx}
                                      className="px-3.5 py-2.5 sm:py-3 flex items-center justify-between gap-3 hover:bg-[#111724] transition-colors group"
                                    >
                                      <div className="flex items-center gap-3 min-w-0 flex-1">
                                        <button
                                          onClick={() => toggleSolved(probId)}
                                          className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all shrink-0 cursor-pointer ${
                                            solved
                                              ? 'bg-blue-600 border-blue-600 text-white'
                                              : 'border-zinc-600 bg-transparent hover:border-zinc-400'
                                          }`}
                                        >
                                          {solved && <Check className="w-3 h-3 stroke-[3]" />}
                                        </button>

                                        <div className="flex items-center gap-2 min-w-0 flex-wrap">
                                          <a
                                            href={leetcodeLink}
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

                                          {tag === 'Basic' && (
                                            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#0d2a1c] text-[#34d399] border border-[#134e2c]">
                                              Basic
                                            </span>
                                          )}
                                          {tag === 'Core' && (
                                            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#2e1d0c] text-[#fbbf24] border border-[#593710]">
                                              Core
                                            </span>
                                          )}
                                        </div>
                                      </div>

                                      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 text-zinc-400">
                                        {prob.tufUrl && (
                                          <a
                                            href={tufLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hidden sm:inline-flex text-cyan-400 p-1 font-mono font-black text-xs hover:bg-cyan-500/10 rounded"
                                            title="TakeUForward Article Solution"
                                          >
                                            F'
                                          </a>
                                        )}
                                        <button
                                          onClick={() => openNoteModal(probId, probTitle)}
                                          className={`hidden sm:inline-flex p-1 rounded hover:bg-zinc-800 transition-colors cursor-pointer ${hasNote ? 'text-blue-400' : 'text-zinc-400'}`}
                                          title="Notes"
                                        >
                                          <FileText className="w-3.5 h-3.5" />
                                        </button>
                                        <a href={videoLink} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 p-1 rounded hover:bg-red-500/10 transition-colors" title="YouTube Video Solution">
                                          <Youtube className="w-4 h-4 fill-red-500/20" />
                                        </a>
                                        <a href={leetcodeLink} target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400 p-1 rounded hover:bg-amber-500/10 transition-colors" title="Solve on LeetCode">
                                          <Code2 className="w-4 h-4" />
                                        </a>
                                        <button onClick={() => toggleBookmark(probId)} className="p-1 rounded hover:bg-zinc-800 cursor-pointer" title="Save Bookmark">
                                          <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-amber-400 text-amber-400' : 'text-zinc-400'}`} />
                                        </button>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
        </div>
      )}

      {/* Notes Modal */}
      {activeNoteProblem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0e121a] border border-zinc-200 dark:border-[#1e2433] rounded-2xl max-w-lg w-full p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Notes for Problem</span>
              </h3>
              <button
                onClick={() => setActiveNoteProblem(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs text-zinc-400 font-medium">
              {activeNoteProblem.title}
            </div>

            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Write your approach, edge cases, time/space complexity notes..."
              rows={6}
              className="w-full p-3 rounded-xl bg-[#07090e] border border-zinc-200 dark:border-[#1e2433] text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none font-mono"
            />

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setActiveNoteProblem(null)}
                className="px-3 py-1.5 rounded-lg text-xs text-zinc-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNote}
                className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
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
