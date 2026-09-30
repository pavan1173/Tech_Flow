import React, { useState, useMemo } from 'react';
import {
  CheckCircle2,
  Circle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ExternalLink,
  BookOpen,
  Share2,
  ZoomIn,
  ZoomOut,
  Maximize2,
  RotateCcw,
  Search,
  Sliders,
  Send,
  Code,
  Check,
  X
} from 'lucide-react';
import {
  ROLE_DIAGRAMS,
  RoleDiagramData,
  DiagramNode,
  DiagramMilestone
} from '../data/roadmapDiagramsData';

interface RoadmapVisualCanvasProps {
  roleSlug: string;
  navigate: (to: string) => void;
  onSelectProjectTab?: () => void;
  completedNodeIds?: string[];
  onToggleNodeCompleted?: (nodeId: string) => void;
}

export const RoadmapVisualCanvas: React.FC<RoadmapVisualCanvasProps> = ({
  roleSlug,
  navigate,
  onSelectProjectTab,
  completedNodeIds = [],
  onToggleNodeCompleted
}) => {
  // Zoom level state
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [diagramSearch, setDiagramSearch] = useState<string>('');
  const [showFaq, setShowFaq] = useState<boolean>(false);
  const [activeNodeModal, setActiveNodeModal] = useState<DiagramNode | null>(null);

  // AI Tutor Quick Question state
  const [aiTutorOpen, setAiTutorOpen] = useState<boolean>(false);
  const [aiTutorQuery, setAiTutorQuery] = useState<string>('');
  const [aiTutorAnswer, setAiTutorAnswer] = useState<string | null>(null);
  const [aiTutorLoading, setAiTutorLoading] = useState<boolean>(false);

  // Retrieve role diagram data or create clean structured fallback for any role
  const diagram: RoleDiagramData = useMemo(() => {
    if (ROLE_DIAGRAMS[roleSlug]) {
      return ROLE_DIAGRAMS[roleSlug];
    }

    // Default template for any role
    const cleanName = roleSlug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    return {
      slug: roleSlug,
      title: `${cleanName} Developer`,
      subtitle: `Step by step guide to becoming a modern ${cleanName.toLowerCase()} in 2026`,
      rootLabel: cleanName,
      learnerCount: '112,400+',
      overviewDescription: `A ${cleanName} builds resilient, scalable software systems, mastering core languages, architectural paradigms, testing, and deployment automation.`,
      beginnerNote: 'Start with programming language foundations and version control before moving to distributed architectures.',
      relatedRoadmaps: [
        { title: 'Frontend Roadmap', slug: 'frontend' },
        { title: 'Backend Roadmap', slug: 'backend' },
        { title: 'DevOps Roadmap', slug: 'devops' },
        { title: 'AI Engineer', slug: 'ai-engineer' }
      ],
      milestones: [
        {
          id: `${roleSlug}-foundations`,
          title: 'Foundations & Tooling',
          centerNodes: ['Language Fundamentals', 'Version Control (Git)'],
          sideNote: {
            side: 'left',
            text: 'Core principles and syntax form the bedrock of your engineering capability. Build practical CLI and script projects.',
            actionLabel: 'Beginner Project Ideas',
            actionType: 'project'
          },
          branches: [
            {
              side: 'right',
              title: 'Core Topics',
              nodes: [
                { id: `${roleSlug}-f1`, label: 'Language Syntax & Paradigms', badge: 'recommended', summary: 'Core syntax, typing rules, memory allocations, and functional/OOP idioms.' },
                { id: `${roleSlug}-f2`, label: 'Git & Remote Repositories', badge: 'recommended', summary: 'Branching strategies, interactive rebase, pull requests, and code reviews.' },
                { id: `${roleSlug}-f3`, label: 'Terminal & CLI Workflows', badge: 'recommended', summary: 'Mastering shell scripting, environment variables, and process telemetry.' }
              ]
            }
          ]
        },
        {
          id: `${roleSlug}-deep-dive`,
          title: 'Frameworks & Architecture',
          centerNodes: ['Core Frameworks', 'Data Stores & Caching'],
          sideNote: {
            side: 'left',
            text: 'At this point you should be able to build end-to-end full-stack applications with database persistence.',
            actionLabel: 'Intermediate Project Ideas',
            actionType: 'project'
          },
          branches: [
            {
              side: 'left',
              title: 'Primary Frameworks',
              nodes: [
                { id: `${roleSlug}-fw1`, label: 'Industry Standard Framework', badge: 'recommended', summary: 'Component state, routing, and server-side request lifecycles.' },
                { id: `${roleSlug}-fw2`, label: 'Alternative Frameworks', badge: 'alternative', summary: 'Exploring micro-frameworks and alternative paradigms for specific speed or size trade-offs.' }
              ]
            },
            {
              side: 'right',
              title: 'Data & State',
              nodes: [
                { id: `${roleSlug}-db1`, label: 'Relational & Document DBs', badge: 'recommended', summary: 'Schema design, indexing strategies, transactions, and migration management.' },
                { id: `${roleSlug}-db2`, label: 'In-Memory Cache (Redis)', badge: 'recommended', summary: 'TTL caching, rate limiting, and pub-sub messaging.' }
              ]
            }
          ]
        },
        {
          id: `${roleSlug}-prod-scale`,
          title: 'Production, Testing & Cloud',
          centerNodes: ['Automated Testing', 'CI/CD & Cloud Deployment'],
          sideNote: {
            side: 'left',
            text: 'At this point you have intermediate-to-advanced mastery. Focus on distributed scale and system design interview readiness.',
            actionLabel: 'Advanced Project Ideas',
            actionType: 'project'
          },
          branches: [
            {
              side: 'left',
              title: 'Quality & Security',
              nodes: [
                { id: `${roleSlug}-tst1`, label: 'Unit & Integration Testing', badge: 'recommended', summary: 'Automated test runners, mocks, fixtures, and regression safety.' },
                { id: `${roleSlug}-sec1`, label: 'Security & Auth (OWASP)', badge: 'recommended', summary: 'Token security, encryption at rest and in transit, and defensive coding.' }
              ]
            },
            {
              side: 'right',
              title: 'Cloud Orchestration',
              nodes: [
                { id: `${roleSlug}-cld1`, label: 'Docker Containers', badge: 'recommended', summary: 'Packaging reproducible environments for zero-divergence cloud deployments.' },
                { id: `${roleSlug}-cld2`, label: 'Cloud Hosting & Telemetry', badge: 'recommended', summary: 'Automated pipelines, metrics dashboards, and distributed tracing.' }
              ]
            }
          ]
        }
      ]
    };
  }, [roleSlug]);

  // Handle AI Tutor Ask
  const handleAskAiTutor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiTutorQuery.trim()) return;
    setAiTutorLoading(true);
    setAiTutorAnswer(null);

    setTimeout(() => {
      setAiTutorLoading(false);
      setAiTutorAnswer(
        `In ${diagram.title}, "${aiTutorQuery}" is a key milestone. Focus on building hands-on projects, understanding the underlying protocol/runtime mechanics rather than just memorizing syntax, and reviewing the related interview questions in TeachFlow.`
      );
    }, 800);
  };

  const handleNodeClick = (node: DiagramNode) => {
    setActiveNodeModal(node);
  };

  const isMatchedBySearch = (text: string) => {
    if (!diagramSearch.trim()) return false;
    return text.toLowerCase().includes(diagramSearch.toLowerCase().trim());
  };

  return (
    <div className="relative w-full bg-[#f8fafc] dark:bg-[#07090e] border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-xs">

      {/* TOP SUB-HEADER: Title, Subtitle, Learner Bar, FAQ Toggle (Exact Roadmap.sh Style) */}
      <div className="p-6 sm:p-8 bg-white dark:bg-[#0a0d14] border-b border-zinc-200 dark:border-zinc-800 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-inter">
              {diagram.title}
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {diagram.subtitle}
            </p>
          </div>

          {/* Quick controls: Zoom & In-Diagram Search */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Find in diagram..."
                value={diagramSearch}
                onChange={(e) => setDiagramSearch(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500 w-36 sm:w-48"
              />
              {diagramSearch && (
                <button
                  onClick={() => setDiagramSearch('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-0.5 text-xs">
              <button
                onClick={() => setZoomLevel((z) => Math.max(70, z - 10))}
                className="p-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="px-2 font-mono font-semibold text-zinc-700 dark:text-zinc-300 select-none">
                {zoomLevel}%
              </span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(130, z + 10))}
                className="p-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoomLevel(100)}
                className="p-1.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer border-l border-zinc-200 dark:border-zinc-800"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Learner Count Notification Bar */}
        <div className="flex items-center justify-between p-2.5 sm:px-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 text-amber-900 dark:text-amber-200 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              Join <strong>{diagram.learnerCount}</strong> developers tracking their progress on this roadmap.
            </span>
          </div>
          <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-300 hidden sm:inline">
            Updated for 2026 Standards
          </span>
        </div>

        {/* Collapsible "What is a [Role]?" Accordion */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/30">
          <button
            onClick={() => setShowFaq(!showFaq)}
            className="w-full flex items-center justify-between p-3 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="w-3.5 h-3.5 text-blue-500" />
              <span>What is a {diagram.title}?</span>
            </div>
            {showFaq ? (
              <ChevronUp className="w-4 h-4 text-zinc-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-zinc-400" />
            )}
          </button>
          {showFaq && (
            <div className="p-4 pt-1 text-xs text-zinc-600 dark:text-zinc-400 border-t border-zinc-200/60 dark:border-zinc-800/60 leading-relaxed bg-white dark:bg-zinc-900/80">
              {diagram.overviewDescription}
            </div>
          )}
        </div>
      </div>

      {/* CANVAS DIAGRAM WORKSPACE */}
      <div className="p-4 sm:p-8 lg:p-12 overflow-x-auto min-h-[900px] flex justify-center">
        <div
          className="w-full max-w-[1100px] transition-transform duration-200 origin-top"
          style={{ transform: `scale(${zoomLevel / 100})` }}
        >
          {/* Top Meta Area: Legend Box (Left) & External Detail Link (Right) */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-12">

            {/* Left: Legend Box + Beginner Version Button + Related Roadmaps (Exact Screenshot) */}
            <div className="w-full sm:w-72 space-y-3.5">
              {/* Legend Box */}
              <div className="p-3.5 rounded-xl border-2 border-zinc-800 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#374151] space-y-2 text-xs font-medium">
                <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <span className="w-4 h-4 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center">
                    ✓
                  </span>
                  <span>Personal Recommendation</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">
                    ✓
                  </span>
                  <span>Alternative Option</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <span className="w-4 h-4 rounded-full bg-zinc-400 text-white text-[10px] font-bold flex items-center justify-center">
                    ✓
                  </span>
                  <span>Order not strict on roadmap</span>
                </div>
              </div>

              {/* Visit Beginner Friendly Version button */}
              <button
                onClick={() => onSelectProjectTab && onSelectProjectTab()}
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-bold text-xs shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#374151] hover:translate-x-0.5 hover:translate-y-0.5 transition-transform cursor-pointer text-center"
              >
                Visit Beginner Friendly Version
              </button>

              {/* Related Roadmaps Box */}
              <div className="p-3.5 rounded-xl border-2 border-zinc-800 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#374151] space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 font-mono">
                  Related Roadmaps
                </span>
                <div className="space-y-1.5">
                  {diagram.relatedRoadmaps.map((rm) => (
                    <button
                      key={rm.slug}
                      onClick={() => navigate(`/preparation/roadmaps/${rm.slug}`)}
                      className="w-full flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left cursor-pointer"
                    >
                      <span className="w-3.5 h-3.5 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center">
                        ✓
                      </span>
                      <span>{rm.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Detailed Version Link Banner (from screenshot) */}
            <div className="w-full sm:w-64 p-4 rounded-xl border-2 border-zinc-300 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-900/60 text-center space-y-2">
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                Find the detailed version of this roadmap along with other similar roadmaps
              </p>
              <div className="inline-block px-4 py-1.5 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-xs font-bold text-zinc-800 dark:text-zinc-200">
                roadmap.sh
              </div>
            </div>

          </div>

          {/* ============================================================== */}
          {/* THE CENTRAL BLUE SPINE WITH DOTTED CONNECTORS AND YELLOW NODES */}
          {/* ============================================================== */}
          <div className="relative flex flex-col items-center">

            {/* Central Vertical Blue Connecting Line */}
            <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-blue-500 z-0 pointer-events-none" />

            {/* Root Node: e.g. "Front-end" / "Back-end" */}
            <div className="relative z-10 mb-8">
              <span className="text-lg sm:text-xl font-bold font-mono tracking-tight text-zinc-950 dark:text-white px-4 py-1.5 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xs">
                {diagram.rootLabel}
              </span>
            </div>

            {/* Milestones Flow down the spine */}
            <div className="w-full space-y-12 sm:space-y-16">
              {diagram.milestones.map((milestone) => (
                <div key={milestone.id} className="relative w-full">

                  {/* 3-Column Grid: [Left Branches / Notes] | [Center Spine Node] | [Right Branches] */}
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_200px_1fr] items-center gap-4 sm:gap-6">

                    {/* Left Column: Left Branches or Milestone Side Note */}
                    <div className="flex flex-col items-end gap-3 order-2 md:order-1">
                      {/* Left branches if any */}
                      {milestone.branches
                        ?.filter((b) => b.side === 'left')
                        .map((branch, bIdx) => (
                          <div key={bIdx} className="w-full sm:max-w-xs space-y-2">
                            {branch.title && (
                              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500 text-right">
                                {branch.title}
                              </div>
                            )}
                            <div className="space-y-2">
                              {branch.nodes.map((node) => {
                                const isCompleted = completedNodeIds.includes(node.id);
                                const isSearched = isMatchedBySearch(node.label);
                                return (
                                  <div
                                    key={node.id}
                                    onClick={() => handleNodeClick(node)}
                                    className={`relative flex items-center justify-between p-2.5 sm:px-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                                      isSearched
                                        ? 'ring-4 ring-amber-400 border-amber-500 animate-pulse'
                                        : ''
                                    } ${
                                      isCompleted
                                        ? 'bg-emerald-100/70 dark:bg-emerald-950/40 border-emerald-500'
                                        : 'bg-[#fff9db] dark:bg-[#151922] border-zinc-800 dark:border-zinc-700 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#374151] hover:-translate-y-0.5'
                                    }`}
                                  >
                                    <span className="text-xs sm:text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                                      {node.label}
                                    </span>
                                    {node.badge === 'recommended' && (
                                      <span
                                        className="w-4 h-4 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 ml-2"
                                        title="Personal Recommendation"
                                      >
                                        ✓
                                      </span>
                                    )}
                                    {node.badge === 'alternative' && (
                                      <span
                                        className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 ml-2"
                                        title="Alternative Option"
                                      >
                                        ✓
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}

                      {/* Side Note (e.g. "HTML, CSS and JavaScript are the backbone...", "At this point you can build vanilla JS...") */}
                      {milestone.sideNote && milestone.sideNote.side === 'left' && (
                        <div className="w-full sm:max-w-xs p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 text-left space-y-2.5 shadow-xs">
                          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                            {milestone.sideNote.text}
                          </p>
                          {milestone.sideNote.actionLabel && (
                            <button
                              onClick={() => onSelectProjectTab && onSelectProjectTab()}
                              className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 text-zinc-900 dark:text-zinc-100 text-xs font-bold transition-colors cursor-pointer w-full text-center"
                            >
                              {milestone.sideNote.actionLabel}
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Center Column: The iconic Yellow Major Milestone Box */}
                    <div className="flex flex-col items-center justify-center order-1 md:order-2 z-10 space-y-2">
                      {milestone.centerNodes ? (
                        milestone.centerNodes.map((cNode, cIdx) => (
                          <div
                            key={cIdx}
                            className={`w-full py-2.5 px-4 rounded-xl text-center font-bold text-xs sm:text-sm tracking-tight border-2 transition-all cursor-pointer ${
                              isMatchedBySearch(cNode)
                                ? 'ring-4 ring-amber-400 animate-pulse'
                                : ''
                            } bg-[#ffea79] dark:bg-[#eab308] border-black text-black shadow-[3px_3px_0px_#000] hover:scale-102`}
                          >
                            {cNode}
                          </div>
                        ))
                      ) : (
                        <div
                          className={`w-full py-2.5 px-4 rounded-xl text-center font-bold text-xs sm:text-sm tracking-tight border-2 transition-all cursor-pointer ${
                            isMatchedBySearch(milestone.title)
                              ? 'ring-4 ring-amber-400 animate-pulse'
                              : ''
                          } bg-[#ffea79] dark:bg-[#eab308] border-black text-black shadow-[3px_3px_0px_#000] hover:scale-102`}
                        >
                          {milestone.title}
                        </div>
                      )}
                    </div>

                    {/* Right Column: Right Branches */}
                    <div className="flex flex-col items-start gap-3 order-3">
                      {milestone.branches
                        ?.filter((b) => b.side === 'right')
                        .map((branch, bIdx) => (
                          <div key={bIdx} className="w-full sm:max-w-xs space-y-2">
                            {branch.title && (
                              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                                {branch.title}
                              </div>
                            )}
                            <div className="space-y-2">
                              {branch.nodes.map((node) => {
                                const isCompleted = completedNodeIds.includes(node.id);
                                const isSearched = isMatchedBySearch(node.label);
                                return (
                                  <div
                                    key={node.id}
                                    onClick={() => handleNodeClick(node)}
                                    className={`relative flex items-center justify-between p-2.5 sm:px-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                                      isSearched
                                        ? 'ring-4 ring-amber-400 border-amber-500 animate-pulse'
                                        : ''
                                    } ${
                                      isCompleted
                                        ? 'bg-emerald-100/70 dark:bg-emerald-950/40 border-emerald-500'
                                        : 'bg-[#fff9db] dark:bg-[#151922] border-zinc-800 dark:border-zinc-700 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#374151] hover:-translate-y-0.5'
                                    }`}
                                  >
                                    <span className="text-xs sm:text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                                      {node.label}
                                    </span>
                                    {node.badge === 'recommended' && (
                                      <span
                                        className="w-4 h-4 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 ml-2"
                                        title="Personal Recommendation"
                                      >
                                        ✓
                                      </span>
                                    )}
                                    {node.badge === 'alternative' && (
                                      <span
                                        className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 ml-2"
                                        title="Alternative Option"
                                      >
                                        ✓
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                    </div>

                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* FLOATING STICKY AI TUTOR BOTTOM BAR (EXACT SCREENSHOT MATCH) */}
      <div className="sticky bottom-4 z-40 max-w-xl mx-auto px-4">
        <form
          onSubmit={handleAskAiTutor}
          className="flex items-center gap-2 p-1.5 pl-4 rounded-full bg-zinc-900/95 dark:bg-zinc-900/95 text-white border border-zinc-700 shadow-2xl backdrop-blur-md"
        >
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-amber-400 font-bold text-xs flex items-center gap-1 font-mono">
              <Sparkles className="w-3.5 h-3.5" /> AI Tutor
            </span>
            <span className="text-zinc-500 hidden sm:inline">•</span>
          </div>
          <input
            type="text"
            placeholder="Have a question? Type here..."
            value={aiTutorQuery}
            onChange={(e) => setAiTutorQuery(e.target.value)}
            className="flex-1 bg-transparent text-xs text-white placeholder-zinc-400 focus:outline-none min-w-0"
          />
          <button
            type="submit"
            disabled={!aiTutorQuery.trim() || aiTutorLoading}
            className="px-3 py-1.5 rounded-full bg-amber-500 text-black font-bold text-xs hover:bg-amber-400 transition-colors disabled:opacity-40 cursor-pointer shrink-0"
          >
            {aiTutorLoading ? '...' : 'Ask'}
          </button>
        </form>

        {/* AI Tutor Response Popup */}
        {aiTutorAnswer && (
          <div className="mt-2 p-4 rounded-2xl bg-zinc-950/95 border border-zinc-800 text-white shadow-2xl text-xs space-y-2 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between text-amber-400 font-bold font-mono">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Roadmap Tutor Answer
              </span>
              <button
                onClick={() => setAiTutorAnswer(null)}
                className="text-zinc-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <p className="text-zinc-300 leading-relaxed font-sans">
              {aiTutorAnswer}
            </p>
          </div>
        )}
      </div>

      {/* TOPIC NODE INSPECTOR MODAL */}
      {activeNodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between gap-4 pb-3 border-b border-zinc-200 dark:border-zinc-800">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400">
                  {activeNodeModal.badge ? `${activeNodeModal.badge} topic` : 'Core Milestone'}
                </span>
                <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                  {activeNodeModal.label}
                </h3>
              </div>
              <button
                onClick={() => setActiveNodeModal(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                Overview & Practical Importance
              </h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {activeNodeModal.summary || `Mastering ${activeNodeModal.label} is critical for production software engineering and interview screening.`}
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3">
              {onToggleNodeCompleted && (
                <button
                  onClick={() => {
                    onToggleNodeCompleted(activeNodeModal.id);
                    setActiveNodeModal(null);
                  }}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    completedNodeIds.includes(activeNodeModal.id)
                      ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {completedNodeIds.includes(activeNodeModal.id)
                      ? 'Mark as Incomplete'
                      : 'Mark as Completed'}
                  </span>
                </button>
              )}
              <button
                onClick={() => setActiveNodeModal(null)}
                className="px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
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
