import React, { useState, useMemo } from 'react';
import {
  Search,
  Bookmark,
  Sparkles,
  ArrowRight,
  Compass,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Filter,
  X,
  Share2,
  Flame,
  Zap,
  Code
} from 'lucide-react';
import {
  ALL_ROADMAPS_SUMMARY,
  ROADMAP_CATEGORIES,
  RoadmapSummaryItem
} from '../data/roadmapsData';

interface RoadmapsPageProps {
  navigate: (to: string) => void;
}

export const RoadmapsPage: React.FC<RoadmapsPageProps> = ({ navigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [bookmarkedSlugs, setBookmarkedSlugs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('teachflow_bookmarked_roadmaps');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.filter((item): item is string => typeof item === 'string');
        }
      }
      return ['frontend', 'backend', 'ai-engineer'];
    } catch {
      return ['frontend', 'backend', 'ai-engineer'];
    }
  });

  // Safe bookmarks array guarantee
  const safeBookmarks = useMemo(() => {
    return Array.isArray(bookmarkedSlugs) ? bookmarkedSlugs : [];
  }, [bookmarkedSlugs]);

  const isBookmarked = (slug: string) => {
    return safeBookmarks.includes(slug);
  };

  // AI Roadmap Modal state
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiRoleInput, setAiRoleInput] = useState('');
  const [aiLevelInput, setAiLevelInput] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Beginner');
  const [aiGeneratedRoadmap, setAiGeneratedRoadmap] = useState<any | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Toggle bookmark handler
  const toggleBookmark = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation();
    e.preventDefault();
    setBookmarkedSlugs((prev) => {
      const currentList = Array.isArray(prev) ? prev : [];
      const updated = currentList.includes(slug)
        ? currentList.filter((s) => s !== slug)
        : [...currentList, slug];
      try {
        localStorage.setItem('teachflow_bookmarked_roadmaps', JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
  };

  // Filter roadmaps
  const filteredRoadmaps = useMemo(() => {
    return ALL_ROADMAPS_SUMMARY.filter((item) => {
      // Category match
      if (selectedCategory !== 'all') {
        const catObj = ROADMAP_CATEGORIES.find((c) => c.id === selectedCategory);
        if (catObj && catObj.name !== 'All Roadmaps') {
          if (catObj.name === 'Absolute Beginners') {
            // Include roles that have beginner levels
            if (!['frontend', 'r-programming', 'seo', 'python', 'javascript', 'git-github', 'computer-science'].includes(item.slug)) {
              return false;
            }
          } else if (item.category !== catObj.name) {
            return false;
          }
        }
      }

      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  // Split into groups
  const newRoadmaps = filteredRoadmaps.filter((r) => r.type === 'new');
  const roleRoadmaps = filteredRoadmaps.filter((r) => r.type === 'role');
  const skillRoadmaps = filteredRoadmaps.filter((r) => r.type === 'skill');

  // Navigate to detail
  const handleOpenRoadmap = (slug: string) => {
    navigate(`/preparation/roadmaps/${slug}`);
  };

  // AI generator handler
  const handleGenerateCustom = () => {
    if (!aiRoleInput.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setAiGeneratedRoadmap({
        title: aiRoleInput.trim(),
        level: aiLevelInput,
        slug: aiRoleInput.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        phases: [
          {
            title: 'Phase 1: Foundational Principles & Syntax',
            topics: ['Core Architecture & Memory Models', 'Environment Setup & Tooling', 'Essential Language Paradigms']
          },
          {
            title: 'Phase 2: Deep Dive & Real-World Frameworks',
            topics: ['Design Patterns & Scalable Structures', 'Data Persistence & Caching', 'API Design & Concurrency']
          },
          {
            title: 'Phase 3: Production, Testing & System Scale',
            topics: ['Automated CI/CD & Cloud Orchestration', 'Security Hardening & Telemetry', 'Portfolio Projects & Interview Ready']
          }
        ]
      });
    }, 1100);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

        {/* Outer Layout: Left Category Sidebar + Main Content Grid (Exact screenshot presentui) */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 xl:gap-12">

          {/* Left Column: Title, Subtitle, Search, Category Filter Panel */}
          <aside className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
                Developer Roadmaps
              </h1>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Community driven, up-to-date paths to learn any tool or technology.
              </p>
            </div>

            {/* Search Input Box */}
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search roadmaps"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Vertical List */}
            <nav className="space-y-0.5">
              {ROADMAP_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2 rounded-lg text-sm transition-colors text-left cursor-pointer ${
                      isSelected
                        ? 'bg-zinc-200/80 dark:bg-zinc-800 font-semibold text-zinc-950 dark:text-white'
                        : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/60 hover:text-zinc-950 dark:hover:text-zinc-200'
                    }`}
                  >
                    <span className="truncate">{cat.name}</span>
                    <span
                      className={`text-xs font-mono ml-2 shrink-0 ${
                        isSelected
                          ? 'text-zinc-700 dark:text-zinc-300 font-medium'
                          : 'text-zinc-400 dark:text-zinc-500'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Bookmarked Filter Pill */}
            {safeBookmarks.length > 0 && (
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Bookmark className="w-3.5 h-3.5 text-blue-500 fill-blue-500" />
                    Bookmarked ({safeBookmarks.length})
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {safeBookmarks.map((slug) => {
                    const found = ALL_ROADMAPS_SUMMARY.find((r) => r.slug === slug);
                    return (
                      <button
                        key={slug}
                        onClick={() => handleOpenRoadmap(slug)}
                        className="px-2.5 py-1 rounded-md text-xs bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 transition-colors border border-zinc-200 dark:border-zinc-800 cursor-pointer"
                      >
                        {found?.title || slug}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>

          {/* Right Main Column: Roadmap Grids matching screenshot */}
          <main className="space-y-10 min-w-0">

            {/* 1. NEW ROADMAPS SECTION */}
            {newRoadmaps.length > 0 && (
              <section className="space-y-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
                  NEW ROADMAPS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {newRoadmaps.map((roadmap) => {
                    const bookmarked = isBookmarked(roadmap.slug);
                    return (
                      <div
                        key={roadmap.slug}
                        onClick={() => handleOpenRoadmap(roadmap.slug)}
                        className="group flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#0c1017] hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xs transition-all cursor-pointer"
                      >
                        <span className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {roadmap.title}
                        </span>
                        <button
                          onClick={(e) => toggleBookmark(e, roadmap.slug)}
                          className="p-1 text-zinc-400 hover:text-blue-500 transition-colors"
                          title={bookmarked ? 'Remove bookmark' : 'Bookmark roadmap'}
                        >
                          <Bookmark
                            className={`w-4 h-4 ${
                              bookmarked
                                ? 'text-blue-500 fill-blue-500'
                                : 'text-zinc-400'
                            }`}
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* 2. ROLE BASED ROADMAPS SECTION */}
            {roleRoadmaps.length > 0 && (
              <section className="space-y-3.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-mono">
                  ROLE BASED ROADMAPS
                </div>

                {/* 2-column Grid of Role Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* First batch of role cards (e.g. first 10 matching screenshot) */}
                  {roleRoadmaps.slice(0, 10).map((roadmap) => {
                    const bookmarked = isBookmarked(roadmap.slug);
                    return (
                      <div
                        key={roadmap.slug}
                        onClick={() => handleOpenRoadmap(roadmap.slug)}
                        className="group flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#0c1017] hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xs transition-all cursor-pointer"
                      >
                        <span className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {roadmap.title}
                        </span>
                        <button
                          onClick={(e) => toggleBookmark(e, roadmap.slug)}
                          className="p-1 text-zinc-400 hover:text-blue-500 transition-colors"
                          title={bookmarked ? 'Remove bookmark' : 'Bookmark roadmap'}
                        >
                          <Bookmark
                            className={`w-4 h-4 ${
                              bookmarked
                                ? 'text-blue-500 fill-blue-500'
                                : 'text-zinc-400'
                            }`}
                          />
                        </button>
                      </div>
                    );
                  })}

                  {/* AI Generator Banner (spanning full 2 columns inside the grid, exactly as in screenshot!) */}
                  <div
                    onClick={() => setAiModalOpen(true)}
                    className="sm:col-span-2 flex items-center justify-between px-5 py-3.5 rounded-xl bg-[#fef9c3] dark:bg-amber-950/25 border border-[#fde047] dark:border-amber-700/40 text-amber-950 dark:text-amber-200 hover:bg-[#fef08a] dark:hover:bg-amber-950/40 transition-all cursor-pointer group shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span className="text-sm font-semibold">
                        Not seeing what you need?{' '}
                        <span className="font-normal opacity-90">Create one using AI</span>
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-amber-700 dark:text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Remaining Role Cards */}
                  {roleRoadmaps.slice(10).map((roadmap) => {
                    const bookmarked = isBookmarked(roadmap.slug);
                    return (
                      <div
                        key={roadmap.slug}
                        onClick={() => handleOpenRoadmap(roadmap.slug)}
                        className="group flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#0c1017] hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xs transition-all cursor-pointer"
                      >
                        <span className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {roadmap.title}
                        </span>
                        <button
                          onClick={(e) => toggleBookmark(e, roadmap.slug)}
                          className="p-1 text-zinc-400 hover:text-blue-500 transition-colors"
                          title={bookmarked ? 'Remove bookmark' : 'Bookmark roadmap'}
                        >
                          <Bookmark
                            className={`w-4 h-4 ${
                              bookmarked
                                ? 'text-blue-500 fill-blue-500'
                                : 'text-zinc-400'
                            }`}
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* 3. SKILL BASED ROADMAPS SECTION */}
            {skillRoadmaps.length > 0 && (
              <section className="space-y-3.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-mono">
                  SKILL BASED ROADMAPS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {skillRoadmaps.map((roadmap) => {
                    const bookmarked = isBookmarked(roadmap.slug);
                    return (
                      <div
                        key={roadmap.slug}
                        onClick={() => handleOpenRoadmap(roadmap.slug)}
                        className="group flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#0c1017] hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xs transition-all cursor-pointer"
                      >
                        <span className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {roadmap.title}
                        </span>
                        <button
                          onClick={(e) => toggleBookmark(e, roadmap.slug)}
                          className="p-1 text-zinc-400 hover:text-blue-500 transition-colors"
                          title={bookmarked ? 'Remove bookmark' : 'Bookmark roadmap'}
                        >
                          <Bookmark
                            className={`w-4 h-4 ${
                              bookmarked
                                ? 'text-blue-500 fill-blue-500'
                                : 'text-zinc-400'
                            }`}
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Zero Results state */}
            {filteredRoadmaps.length === 0 && (
              <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800">
                <Compass className="w-10 h-10 text-zinc-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  No roadmaps match "{searchQuery}"
                </h3>
                <p className="text-sm text-zinc-500 mt-1 max-w-md mx-auto">
                  Try searching for keywords like "React", "Python", "DevOps", or generate a tailored roadmap using AI.
                </p>
                <button
                  onClick={() => {
                    setAiRoleInput(searchQuery);
                    setAiModalOpen(true);
                  }}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium text-xs hover:bg-blue-700 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Generate "{searchQuery}" Roadmap with AI
                </button>
              </div>
            )}

          </main>
        </div>
      </div>

      {/* AI Custom Roadmap Generator Modal */}
      {aiModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-zinc-950 dark:text-white">
                    Create Custom Roadmap with AI
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Generate structured milestones for any niche tech role or stack
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setAiModalOpen(false);
                  setAiGeneratedRoadmap(null);
                }}
                className="p-1 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {!aiGeneratedRoadmap ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    What role or technology do you want to learn?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Web3 Smart Contract Auditor, Rust Systems Engineer, FinTech Architect..."
                    value={aiRoleInput}
                    onChange={(e) => setAiRoleInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Target Experience Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => setAiLevelInput(lvl)}
                        className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                          aiLevelInput === lvl
                            ? 'bg-amber-500/10 border-amber-500 text-amber-700 dark:text-amber-300 font-bold'
                            : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleGenerateCustom}
                    disabled={!aiRoleInput.trim() || isGenerating}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-sm shadow-md hover:from-amber-600 hover:to-amber-700 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Generating Roadmap...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Generate AI Roadmap
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wide">
                    Generated Blueprint
                  </span>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white mt-0.5">
                    {aiGeneratedRoadmap.title} ({aiGeneratedRoadmap.level})
                  </h4>
                </div>

                <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                  {aiGeneratedRoadmap.phases.map((ph: any, idx: number) => (
                    <div key={idx} className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/40">
                      <div className="text-xs font-bold text-zinc-900 dark:text-white mb-1.5">
                        {ph.title}
                      </div>
                      <ul className="space-y-1">
                        {ph.topics.map((top: string, tidx: number) => (
                          <li key={tidx} className="text-xs text-zinc-600 dark:text-zinc-300 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                            {top}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => {
                      setAiGeneratedRoadmap(null);
                    }}
                    className="flex-1 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Generate Another
                  </button>
                  <button
                    onClick={() => {
                      setAiModalOpen(false);
                      handleOpenRoadmap('frontend');
                    }}
                    className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Explore in Viewer
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
