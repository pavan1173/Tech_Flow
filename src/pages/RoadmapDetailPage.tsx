import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Clock,
  Award,
  BookOpen,
  Code,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Share2,
  Bookmark,
  Sparkles,
  FileCode,
  Layers,
  Terminal,
  Compass,
  Check,
  RotateCcw,
  ListTodo,
  Workflow
} from 'lucide-react';
import {
  ROADMAP_DETAILS,
  ALL_ROADMAPS_SUMMARY,
  RoadmapDetail,
  RoadmapTopic
} from '../data/roadmapsData';
import { RoadmapVisualCanvas } from '../components/RoadmapVisualCanvas';

interface RoadmapDetailPageProps {
  slug: string;
  navigate: (to: string) => void;
}

export const RoadmapDetailPage: React.FC<RoadmapDetailPageProps> = ({ slug, navigate }) => {
  // Find detailed roadmap or generate structured dynamic fallback
  const roadmapData: RoadmapDetail = React.useMemo(() => {
    if (ROADMAP_DETAILS[slug]) {
      return ROADMAP_DETAILS[slug];
    }

    const summary = ALL_ROADMAPS_SUMMARY.find((r) => r.slug === slug);
    const title = summary ? `${summary.title} Roadmap` : `${slug.replace(/-/g, ' ')} Roadmap`;
    const category = summary?.category || 'Software Engineering';

    // Rich fallback roadmap for all other roles and skills
    return {
      slug,
      title,
      subtitle: summary?.description || `Step by step curriculum to master ${slug.replace(/-/g, ' ')} in 2026.`,
      category,
      type: summary?.type || 'role',
      duration: '4 - 6 Months',
      difficulty: 'Beginner to Advanced',
      summary: summary?.description || `Comprehensive, industry-aligned path for ${title}.`,
      targetRoles: [summary?.title || slug, 'Software Engineer', 'Specialist'],
      relatedRoleSheetSlug: 'frontend-developer',
      relatedDsaSlug: 'blind-75-dsa-sheet',
      phases: [
        {
          id: `${slug}-phase-1`,
          title: 'Phase 1: Foundations & Architecture',
          duration: 'Weeks 1-4',
          description: `Core primitives, environment setup, and baseline mental models for ${summary?.title || slug}.`,
          topics: [
            {
              id: `${slug}-top-1`,
              title: `Core Principles of ${summary?.title || slug}`,
              type: 'mandatory',
              summary: `Fundamental syntax, data structures, and lifecycle mechanics required for daily engineering.`,
              keyPoints: [
                'Syntax rules, runtime behavior, and memory considerations',
                'Package ecosystems, dependency isolation, and toolchains',
                'Design patterns and idioms standard in the industry'
              ],
              interviewTip: 'Interviewers frequently test fundamentals before moving to architectural trade-offs.'
            },
            {
              id: `${slug}-top-2`,
              title: 'Tooling, Linters & Development Workflow',
              type: 'mandatory',
              summary: 'Modern workspace setup, debugging tools, linters, formatter configs, and version control.',
              keyPoints: [
                'Local sandbox environment configuration',
                'Strict linting, type-checking, and CI automation',
                'Profiling memory leaks and execution bottlenecks'
              ]
            }
          ]
        },
        {
          id: `${slug}-phase-2`,
          title: 'Phase 2: Deep Dive, Frameworks & Best Practices',
          duration: 'Weeks 5-12',
          description: 'Production-grade implementations, state management, testing, and security principles.',
          topics: [
            {
              id: `${slug}-top-3`,
              title: 'Advanced Idioms & Concurrency Patterns',
              type: 'mandatory',
              summary: 'Asynchronous flows, error recovery, transactional safety, and high-performance algorithms.',
              keyPoints: [
                'Event-driven architectures and thread/process management',
                'Unit and integration test suites with mock assertions',
                'Defensive coding practices against edge-case failures'
              ]
            },
            {
              id: `${slug}-top-4`,
              title: 'Integration, Networking & Persistent Stores',
              type: 'recommended',
              summary: 'Interfacing with APIs, caching tiers, databases, and third-party webhooks.',
              keyPoints: [
                'Optimistic data synchronization and cache invalidation',
                'Graceful retry backoffs and circuit breakers',
                'Security hardening against common vulnerability vectors'
              ]
            }
          ]
        },
        {
          id: `${slug}-phase-3`,
          title: 'Phase 3: Production Deployment, Scale & Placement Prep',
          duration: 'Weeks 13-20',
          description: 'Cloud deployment, observability telemetry, system design interview questions, and capstone.',
          topics: [
            {
              id: `${slug}-top-5`,
              title: 'Cloud Orchestration & CI/CD Delivery',
              type: 'mandatory',
              summary: 'Docker packaging, cloud hosting, automated deployment pipelines, and zero downtime updates.',
              keyPoints: [
                'Containerization and minimal production images',
                'Automated health checks, rollback plans, and telemetry',
                'Observability: logging, metrics dashboards, and tracing'
              ]
            },
            {
              id: `${slug}-top-6`,
              title: 'Interview Challenges & Portfolio Showcase',
              type: 'mandatory',
              summary: 'Solving real-world system interview questions, DSA alignment, and building portfolio capstones.',
              keyPoints: [
                'Architectural trade-off justification in system design rounds',
                'Behavioral STAR storytelling regarding engineering decisions',
                'Publishing open-source codebases with comprehensive READMEs'
              ]
            }
          ]
        }
      ],
      projects: [
        {
          title: `Production ${summary?.title || slug} Micro-Service`,
          level: 'Intermediate',
          description: `Build and deploy an enterprise-grade service with automated testing and container deployment.`,
          deliverables: ['End-to-end automated test coverage', 'Dockerized deployment with health endpoints', 'Comprehensive documentation']
        },
        {
          title: `Full-Scale Capstone Platform`,
          level: 'Capstone',
          description: `A complete, end-to-end application showcasing performance optimization, database modeling, and real-time mechanics.`,
          deliverables: ['Sub-second latency benchmarks', 'Authentication and role-based permissions', 'Live production deployment URL']
        }
      ]
    };
  }, [slug]);

  // View Mode: 'tree' (visual flowchart) | 'checklist' | 'projects'
  const [viewMode, setViewMode] = useState<'tree' | 'checklist' | 'projects'>('tree');

  // Selected topic for the inspector drawer/modal
  const [activeTopic, setActiveTopic] = useState<RoadmapTopic | null>(null);

  // Completed topics tracking in localStorage
  const storageKey = `teachflow_roadmap_completed_${slug}`;
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.filter((item): item is string => typeof item === 'string');
        }
      }
      return [];
    } catch {
      return [];
    }
  });

  const safeCompletedIds = React.useMemo(() => {
    return Array.isArray(completedTopicIds) ? completedTopicIds : [];
  }, [completedTopicIds]);

  const isTopicCompleted = (topicId: string) => {
    return safeCompletedIds.includes(topicId);
  };

  // Calculate total topics
  const allTopics = React.useMemo(() => {
    return roadmapData.phases.flatMap((p) => p.topics);
  }, [roadmapData]);

  const totalTopicsCount = allTopics.length;
  const completedCount = safeCompletedIds.length;
  const progressPercent = totalTopicsCount > 0 ? Math.round((completedCount / totalTopicsCount) * 100) : 0;

  const toggleTopicCompletion = (topicId: string) => {
    setCompletedTopicIds((prev) => {
      const currentList = Array.isArray(prev) ? prev : [];
      const updated = currentList.includes(topicId)
        ? currentList.filter((id) => id !== topicId)
        : [...currentList, topicId];
      try {
        localStorage.setItem(storageKey, JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
  };

  const markAllComplete = () => {
    const allIds = allTopics.map((t) => t.id);
    setCompletedTopicIds(allIds);
    localStorage.setItem(storageKey, JSON.stringify(allIds));
  };

  const resetProgress = () => {
    setCompletedTopicIds([]);
    localStorage.removeItem(storageKey);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 transition-colors">
      {/* Top sticky banner with back button & quick stats */}
      <div className="sticky top-0 z-30 bg-white/80 dark:bg-[#07090e]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <button
            onClick={() => navigate('/preparation/roadmaps')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Roadmaps</span>
          </button>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle Pill */}
            <div className="flex items-center p-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-lg border border-zinc-200 dark:border-zinc-700/60">
              <button
                onClick={() => setViewMode('tree')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  viewMode === 'tree'
                    ? 'bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 font-semibold shadow-2xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                <Workflow className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Visual Path</span>
              </button>
              <button
                onClick={() => setViewMode('checklist')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  viewMode === 'checklist'
                    ? 'bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 font-semibold shadow-2xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                <ListTodo className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Checklist</span>
              </button>
              <button
                onClick={() => setViewMode('projects')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  viewMode === 'projects'
                    ? 'bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 font-semibold shadow-2xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Projects</span>
              </button>
            </div>

            {/* Quick Practice Link to Role Sheet */}
            <button
              onClick={() => navigate(`/preparation/role-wise`)}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50 text-xs font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors cursor-pointer"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Interview Questions</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Hero Header Section */}
        <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-blue-600 dark:text-blue-400">
                  {roadmapData.category}
                </span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className="text-xs text-zinc-500 font-mono">
                  {roadmapData.difficulty}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
                {roadmapData.title}
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {roadmapData.subtitle}
              </p>
            </div>

            {/* Progress Card */}
            <div className="w-full md:w-72 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-3 shrink-0">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                  Learning Progress
                </span>
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                  {progressPercent}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>{completedCount} of {totalTopicsCount} topics</span>
                <button
                  onClick={resetProgress}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                  title="Reset completed topics"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Metadata badges row */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 text-xs">
            <span className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              Est. Duration: <strong className="text-zinc-900 dark:text-zinc-200">{roadmapData.duration}</strong>
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
              <Award className="w-3.5 h-3.5 text-zinc-400" />
              Milestones: <strong className="text-zinc-900 dark:text-zinc-200">{roadmapData.phases.length} Phases ({totalTopicsCount} Nodes)</strong>
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Status: <strong className="text-zinc-900 dark:text-zinc-200">{progressPercent === 100 ? 'Completed' : progressPercent > 0 ? 'In Progress' : 'Not Started'}</strong>
            </span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* VIEW MODE 1: VISUAL FLOWCHART PATH (ROADMAP.SH STYLE) */}
        {/* ============================================================== */}
        {viewMode === 'tree' && (
          <div className="space-y-12">
            {/* The Full Roadmap.sh Interactive Visual Canvas Diagram */}
            <RoadmapVisualCanvas
              roleSlug={slug}
              navigate={navigate}
              onSelectProjectTab={() => setViewMode('projects')}
              completedNodeIds={safeCompletedIds}
              onToggleNodeCompleted={toggleTopicCompletion}
            />

            {/* Modular Phase Curriculum Breakdown */}
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
                    Step-by-Step Curriculum Breakdown
                  </h2>
                  <p className="text-xs text-zinc-500 mt-1">
                    Detailed learning milestones with key concepts, code snippets, and interview tips
                  </p>
                </div>
                <button
                  onClick={() => setViewMode('checklist')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                >
                  <ListTodo className="w-3.5 h-3.5" />
                  <span>View as Checklist</span>
                </button>
              </div>

              {roadmapData.phases.map((phase, pIdx) => (
                <div key={phase.id} className="relative">
                  {/* Phase Marker & Connector Line */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs shrink-0">
                      {pIdx + 1}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-zinc-950 dark:text-white">
                        {phase.title}
                      </h2>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {phase.description} {phase.duration && `• ${phase.duration}`}
                      </p>
                    </div>
                  </div>

                  {/* Nodes Grid for this Phase */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4 sm:pl-11">
                    {phase.topics.map((topic) => {
                      const isCompleted = isTopicCompleted(topic.id);
                      return (
                        <div
                          key={topic.id}
                          onClick={() => setActiveTopic(topic)}
                          className={`group relative p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isCompleted
                              ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/60'
                              : 'bg-white dark:bg-[#0c1017] border-zinc-200 dark:border-zinc-800 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md'
                          }`}
                        >
                          <div className="space-y-2">
                            <div className="flex items-start justify-between gap-2">
                              <span
                                className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${
                                  topic.type === 'mandatory'
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'text-zinc-500'
                                }`}
                              >
                                {topic.type}
                              </span>

                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleTopicCompletion(topic.id);
                                }}
                                className="text-zinc-400 hover:text-emerald-500 transition-colors p-0.5"
                                title={isCompleted ? 'Mark incomplete' : 'Mark completed'}
                              >
                                {isCompleted ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500/20" />
                                ) : (
                                  <Circle className="w-4 h-4 text-zinc-300 dark:text-zinc-600 hover:text-emerald-400" />
                                )}
                              </button>
                            </div>

                            <h3 className="font-semibold text-sm sm:text-base text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {topic.title}
                            </h3>

                            <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                              {topic.summary}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-blue-600 dark:text-blue-400 font-medium">
                            <span>Inspect Details</span>
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW MODE 2: STEP-BY-STEP CHECKLIST VIEW */}
        {/* ============================================================== */}
        {viewMode === 'checklist' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                Full Curriculum Checklist
              </span>
              <button
                onClick={markAllComplete}
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                Mark All Done
              </button>
            </div>

            {roadmapData.phases.map((phase) => (
              <div
                key={phase.id}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] p-5 space-y-4"
              >
                <div>
                  <h3 className="font-bold text-base text-zinc-950 dark:text-white">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {phase.description}
                  </p>
                </div>

                <div className="divide-y divide-zinc-100 dark:divide-zinc-800/80">
                  {phase.topics.map((topic) => {
                    const isCompleted = isTopicCompleted(topic.id);
                    return (
                      <div
                        key={topic.id}
                        className="py-3 flex items-start justify-between gap-3 group cursor-pointer"
                        onClick={() => setActiveTopic(topic)}
                      >
                        <div className="flex items-start gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleTopicCompletion(topic.id);
                            }}
                            className="mt-0.5"
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500/20" />
                            ) : (
                              <Circle className="w-4 h-4 text-zinc-300 dark:text-zinc-600 group-hover:text-emerald-400" />
                            )}
                          </button>
                          <div>
                            <span
                              className={`text-sm font-semibold transition-colors ${
                                isCompleted
                                  ? 'line-through text-zinc-400 dark:text-zinc-500'
                                  : 'text-zinc-900 dark:text-white group-hover:text-blue-600'
                              }`}
                            >
                              {topic.title}
                            </span>
                            <p className="text-xs text-zinc-500 mt-0.5">
                              {topic.summary}
                            </p>
                          </div>
                        </div>

                        <span className="text-[11px] font-mono text-zinc-400 shrink-0">
                          {topic.type}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW MODE 3: PROJECTS & PORTFOLIO BUILDER */}
        {/* ============================================================== */}
        {viewMode === 'projects' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
                Portfolio Projects for {roadmapData.title}
              </h2>
              <p className="text-sm text-zinc-500 mt-1">
                Real-world projects to solidify your knowledge and stand out in resume screening.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roadmapData.projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        proj.level === 'Capstone'
                          ? 'bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300'
                          : proj.level === 'Intermediate'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300'
                          : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
                      }`}
                    >
                      {proj.level}
                    </span>

                    <h3 className="font-bold text-base text-zinc-950 dark:text-white">
                      {proj.title}
                    </h3>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wide">
                      Core Deliverables:
                    </span>
                    <ul className="space-y-1">
                      {proj.deliverables.map((del, didx) => (
                        <li key={didx} className="text-xs text-zinc-600 dark:text-zinc-300 flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* TOPIC INSPECTOR SLIDE-OVER DRAWER / MODAL */}
      {activeTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400">
                  {activeTopic.type} Topic
                </span>
                <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                  {activeTopic.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveTopic(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                ✕
              </button>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                Overview & Architecture
              </h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {activeTopic.summary}
              </p>
            </div>

            {/* Key Concepts */}
            {activeTopic.keyPoints.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Key Concepts to Master
                </h4>
                <ul className="space-y-1.5">
                  {activeTopic.keyPoints.map((point, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Code Snippet if available */}
            {activeTopic.codeSnippet && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Code Example
                </h4>
                <pre className="p-3.5 rounded-lg bg-zinc-950 text-zinc-200 text-xs font-mono overflow-x-auto border border-zinc-800">
                  <code>{activeTopic.codeSnippet}</code>
                </pre>
              </div>
            )}

            {/* Interview Tip */}
            {activeTopic.interviewTip && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                <strong>💡 Interview Pro-Tip:</strong> {activeTopic.interviewTip}
              </div>
            )}

            {/* Actions */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  toggleTopicCompletion(activeTopic.id);
                  setActiveTopic(null);
                }}
                className={`flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isTopicCompleted(activeTopic.id)
                    ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {isTopicCompleted(activeTopic.id)
                    ? 'Mark as Incomplete'
                    : 'Mark Topic as Completed'}
                </span>
              </button>

              <button
                onClick={() => setActiveTopic(null)}
                className="px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
