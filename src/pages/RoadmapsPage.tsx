import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  ROADMAPS,
  RoadmapItem,
  RoadmapStage,
  RoadmapNode,
  RoadmapResource
} from '../data/roadmapsData';
import {
  Globe,
  Server,
  Cpu,
  Layers,
  Terminal,
  Sparkles,
  CheckCircle2,
  Circle,
  Clock,
  ExternalLink,
  Search,
  Filter,
  ZoomIn,
  ZoomOut,
  Maximize2,
  RotateCcw,
  BookOpen,
  ArrowRight,
  GitFork,
  Workflow,
  ListTodo,
  Share2,
  ChevronRight,
  X,
  PlayCircle,
  FileCode,
  ShieldCheck,
  Check,
  Flame,
  BarChart2
} from 'lucide-react';

interface RoadmapsPageProps {
  navigate: (to: string) => void;
  initialRoadmapSlug?: string;
}

type ViewMode = 'flowchart' | 'mindmap' | 'checklist';
type NodeStatus = 'todo' | 'in_progress' | 'done';

export const RoadmapsPage: React.FC<RoadmapsPageProps> = ({
  navigate,
  initialRoadmapSlug = 'frontend'
}) => {
  // Current active roadmap
  const [activeSlug, setActiveSlug] = useState<string>(initialRoadmapSlug || 'frontend');
  const [viewMode, setViewMode] = useState<ViewMode>('flowchart');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'done' | 'in_progress' | 'todo'>('all');

  // Selected topic for drawer modal
  const [selectedNode, setSelectedNode] = useState<{
    stage: RoadmapStage;
    node: RoadmapNode;
  } | null>(null);

  // User progress persisted in localStorage
  const [progress, setProgress] = useState<Record<string, NodeStatus>>(() => {
    try {
      const saved = localStorage.getItem('teachflow_roadmap_progress');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Zoom and pan state for mindmap canvas
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [startPan, setStartPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Update initial roadmap if prop changes
  useEffect(() => {
    if (initialRoadmapSlug && initialRoadmapSlug !== activeSlug) {
      setActiveSlug(initialRoadmapSlug);
    }
  }, [initialRoadmapSlug]);

  // Persist progress
  useEffect(() => {
    try {
      localStorage.setItem('teachflow_roadmap_progress', JSON.stringify(progress));
    } catch (e) {
      console.error(e);
    }
  }, [progress]);

  const activeRoadmap = useMemo(() => {
    return ROADMAPS.find((r) => r.slug === activeSlug) || ROADMAPS[0];
  }, [activeSlug]);

  // Calculate statistics for active roadmap
  const allNodesInActiveRoadmap = useMemo(() => {
    const nodes: { stage: RoadmapStage; node: RoadmapNode }[] = [];
    activeRoadmap.stages.forEach((stage) => {
      stage.nodes.forEach((node) => {
        nodes.push({ stage, node });
      });
    });
    return nodes;
  }, [activeRoadmap]);

  const completedCount = useMemo(() => {
    return allNodesInActiveRoadmap.filter(
      (item) => progress[item.node.id] === 'done'
    ).length;
  }, [allNodesInActiveRoadmap, progress]);

  const inProgressCount = useMemo(() => {
    return allNodesInActiveRoadmap.filter(
      (item) => progress[item.node.id] === 'in_progress'
    ).length;
  }, [allNodesInActiveRoadmap, progress]);

  const progressPercentage = allNodesInActiveRoadmap.length
    ? Math.round((completedCount / allNodesInActiveRoadmap.length) * 100)
    : 0;

  const toggleNodeStatus = (nodeId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setProgress((prev) => {
      const current = prev[nodeId] || 'todo';
      const next: NodeStatus =
        current === 'todo'
          ? 'in_progress'
          : current === 'in_progress'
          ? 'done'
          : 'todo';
      return { ...prev, [nodeId]: next };
    });
  };

  const setExplicitStatus = (nodeId: string, status: NodeStatus) => {
    setProgress((prev) => ({ ...prev, [nodeId]: status }));
  };

  const getStatus = (nodeId: string): NodeStatus => {
    return progress[nodeId] || 'todo';
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-500" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-500" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-cyan-500" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-pink-500" />;
      default:
        return <GitFork className="w-5 h-5 text-indigo-500" />;
    }
  };

  const getBadgeStyle = (badge?: string) => {
    switch (badge) {
      case 'recommended':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20';
      case 'essential':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20';
      case 'alternative':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20';
      case 'optional':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20';
      default:
        return 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400';
    }
  };

  // Filtered nodes
  const filteredStages = useMemo(() => {
    if (!searchQuery.trim() && statusFilter === 'all') {
      return activeRoadmap.stages;
    }
    const query = searchQuery.toLowerCase().trim();

    return activeRoadmap.stages
      .map((stage) => {
        const matchingNodes = stage.nodes.filter((node) => {
          const matchesQuery =
            !query ||
            node.title.toLowerCase().includes(query) ||
            node.summary.toLowerCase().includes(query) ||
            node.keyPoints.some((kp) => kp.toLowerCase().includes(query)) ||
            (node.children &&
              node.children.some((c) => c.title.toLowerCase().includes(query)));

          const status = getStatus(node.id);
          const matchesStatus =
            statusFilter === 'all' || status === statusFilter;

          return matchesQuery && matchesStatus;
        });

        return { ...stage, nodes: matchingNodes };
      })
      .filter((stage) => stage.nodes.length > 0);
  }, [activeRoadmap, searchQuery, statusFilter, progress]);

  // Mindmap pan event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (viewMode !== 'mindmap') return;
    setIsPanning(true);
    setStartPan({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPanning || viewMode !== 'mindmap') return;
    setPanOffset({
      x: e.clientX - startPan.x,
      y: e.clientY - startPan.y
    });
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  const resetCanvas = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen bg-[#fdfdfb] dark:bg-[#07090e] text-[#1a1a1a] dark:text-[#fdfdfd] p-4 sm:p-6 lg:p-8 font-inter transition-colors duration-200">
      <div className="max-w-[1400px] mx-auto space-y-6">

        {/* 1. Header & Roadmap Navigation Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-mono-space text-xs font-bold uppercase tracking-widest text-[#2563eb] dark:text-[#38bdf8] flex items-center gap-1.5">
                <Workflow className="w-3.5 h-3.5" />
                Community Roadmaps &amp; Mindmaps
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                roadmap.sh aligned
              </span>
            </div>

            <h1 className="font-serif-garamond text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950 dark:text-white flex items-center gap-3">
              {activeRoadmap.title}
              <span className="text-sm sm:text-base font-inter font-normal text-zinc-400">
                ({activeRoadmap.level})
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-[#6b7280] dark:text-zinc-400 max-w-3xl">
              {activeRoadmap.shortDesc}
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-4 bg-white dark:bg-[#0c1017] p-3 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] shadow-xs self-start lg:self-auto shrink-0">
            <div className="text-right">
              <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5 justify-end">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>{completedCount} / {allNodesInActiveRoadmap.length} Completed</span>
              </div>
              <p className="text-[11px] text-zinc-500 font-mono-space">
                {inProgressCount} in progress • {progressPercentage}% ready
              </p>
            </div>

            {/* Circular or Bar Progress */}
            <div className="w-12 h-12 rounded-full border-4 border-zinc-200 dark:border-zinc-800 flex items-center justify-center font-mono-space text-xs font-bold text-blue-600 dark:text-blue-400 relative">
              <span>{progressPercentage}%</span>
            </div>
          </div>
        </div>

        {/* 2. Roadmap Tabs Selector (Frontend, Backend, DSA, System Design, DevOps, AI/ML) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {ROADMAPS.map((item) => {
            const isActive = item.slug === activeSlug;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSlug(item.slug);
                  resetCanvas();
                }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#2563eb] text-white shadow-md shadow-blue-500/20'
                    : 'bg-white dark:bg-[#0c1017] border border-black/[0.08] dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300 hover:border-blue-500/40 hover:bg-blue-50/50 dark:hover:bg-blue-950/20'
                }`}
              >
                {getIcon(item.iconName)}
                <span>{item.title}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-mono-space ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* 3. Controls & View Mode Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-white dark:bg-[#0c1017] rounded-2xl border border-black/[0.08] dark:border-white/[0.08] shadow-xs">
          
          {/* Left: View Mode Toggles */}
          <div className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-black/[0.05] dark:border-white/[0.05] self-start sm:self-auto">
            <button
              onClick={() => setViewMode('flowchart')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'flowchart'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs font-bold'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              <Workflow className="w-3.5 h-3.5 text-blue-500" />
              <span>Flowchart</span>
            </button>

            <button
              onClick={() => setViewMode('mindmap')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'mindmap'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs font-bold'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              <GitFork className="w-3.5 h-3.5 text-purple-500" />
              <span>Mindmap Tree</span>
            </button>

            <button
              onClick={() => setViewMode('checklist')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'checklist'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs font-bold'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              <ListTodo className="w-3.5 h-3.5 text-emerald-500" />
              <span>Checklist</span>
            </button>
          </div>

          {/* Right: Search & Filter */}
          <div className="flex items-center gap-2.5 flex-1 sm:justify-end">
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topics (e.g. React, Hooks, DNS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-900/80 border border-black/[0.08] dark:border-white/[0.08] text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-2.5 py-1.5 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-900/80 border border-black/[0.08] dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300 focus:outline-none"
            >
              <option value="all">All Topics</option>
              <option value="done">Completed Only</option>
              <option value="in_progress">In Progress</option>
              <option value="todo">Pending</option>
            </select>

            {/* Mindmap Zoom Controls (only shown in mindmap mode) */}
            {viewMode === 'mindmap' && (
              <div className="hidden sm:flex items-center gap-1 pl-2 border-l border-black/[0.08] dark:border-white/[0.08]">
                <button
                  onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.15))}
                  className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono-space text-[10px] text-zinc-400 w-8 text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={() => setZoomLevel((z) => Math.min(1.8, z + 0.15))}
                  className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={resetCanvas}
                  className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  title="Reset Canvas"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 4. MAIN VIEWPORT */}

        {/* 4A. FLOWCHART VIEW (Structured Timeline with Connector Lines like roadmap.sh) */}
        {viewMode === 'flowchart' && (
          <div className="space-y-10 relative">
            {filteredStages.map((stage, stageIdx) => (
              <div key={stage.id} className="relative">
                {/* Stage Header Milestone */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-mono-space font-bold text-xs flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
                    {stageIdx + 1}
                  </div>
                  <div>
                    <h3 className="font-serif-garamond text-xl sm:text-2xl font-semibold text-zinc-950 dark:text-white">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Nodes Grid / Branching Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4 sm:pl-8 border-l-2 border-dashed border-blue-500/30 dark:border-blue-500/20 ml-4 mb-8">
                  {stage.nodes.map((node) => {
                    const status = getStatus(node.id);
                    const isDone = status === 'done';
                    const isInProgress = status === 'in_progress';

                    return (
                      <div
                        key={node.id}
                        onClick={() => setSelectedNode({ stage, node })}
                        className={`group p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between relative ${
                          isDone
                            ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-500/40 shadow-xs'
                            : isInProgress
                            ? 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-500/50 shadow-xs ring-1 ring-blue-500/30'
                            : 'bg-white dark:bg-[#0c1017] border-black/[0.08] dark:border-white/[0.08] hover:border-blue-500/50 hover:shadow-lg hover:-translate-y-0.5'
                        }`}
                      >
                        <div>
                          {/* Top Row: Badge & Status Button */}
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            {node.badge && (
                              <span
                                className={`text-[10px] font-mono-space font-bold uppercase px-2 py-0.5 rounded-full ${getBadgeStyle(
                                  node.badge
                                )}`}
                              >
                                {node.badge}
                              </span>
                            )}

                            <button
                              type="button"
                              onClick={(e) => toggleNodeStatus(node.id, e)}
                              className={`flex items-center gap-1 text-[11px] font-mono-space font-semibold px-2 py-0.5 rounded-md transition-all ${
                                isDone
                                  ? 'bg-emerald-500 text-white'
                                  : isInProgress
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                              }`}
                              title="Click to toggle status (Todo -> In Progress -> Done)"
                            >
                              {isDone ? (
                                <>
                                  <Check className="w-3 h-3" />
                                  <span>Done</span>
                                </>
                              ) : isInProgress ? (
                                <>
                                  <Clock className="w-3 h-3" />
                                  <span>In Progress</span>
                                </>
                              ) : (
                                <>
                                  <Circle className="w-3 h-3" />
                                  <span>Todo</span>
                                </>
                              )}
                            </button>
                          </div>

                          {/* Node Title */}
                          <h4 className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                            {node.title}
                          </h4>

                          {/* Summary */}
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                            {node.summary}
                          </p>

                          {/* Sub-branches / Children badges */}
                          {node.children && node.children.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {node.children.map((child) => (
                                <span
                                  key={child.id}
                                  className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 font-mono-space"
                                >
                                  {child.title}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Bottom Row: View Details Link */}
                        <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.05] flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            <span>Guide &amp; Resources ({node.resources.length})</span>
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4B. MINDMAP TREE VIEW (Interactive Pan/Zoom Canvas with Bezier Connectors) */}
        {viewMode === 'mindmap' && (
          <div
            className="w-full h-[650px] rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-[#fbfbfa] dark:bg-[#090d14] relative overflow-hidden select-none cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Ambient Background Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle, currentColor 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />

            {/* Mindmap Canvas Content */}
            <div
              className="absolute inset-0 flex items-center justify-center transition-transform duration-75"
              style={{
                transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
                transformOrigin: 'center center'
              }}
            >
              {/* Central Root Hub Node */}
              <div className="flex items-center gap-16 relative">
                
                {/* Central Root Node */}
                <div className="p-6 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/20 text-center min-w-[200px] border border-white/20 z-20">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-2">
                    {getIcon(activeRoadmap.iconName)}
                  </div>
                  <h3 className="font-bold text-base leading-tight">
                    {activeRoadmap.title}
                  </h3>
                  <p className="text-[11px] opacity-80 font-mono-space mt-1">
                    {allNodesInActiveRoadmap.length} Core Topics
                  </p>
                </div>

                {/* Branches Container */}
                <div className="flex flex-col gap-6 z-10">
                  {filteredStages.map((stage, idx) => (
                    <div
                      key={stage.id}
                      className="p-4 rounded-xl bg-white dark:bg-[#0e1420] border border-black/[0.08] dark:border-white/[0.1] shadow-md min-w-[320px] max-w-[420px] relative hover:border-blue-500/50 transition-colors"
                    >
                      {/* Stage Title */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono-space text-[10px] font-bold uppercase text-blue-500">
                          Phase 0{idx + 1}
                        </span>
                        <span className="text-[10px] font-mono-space text-zinc-400">
                          {stage.nodes.length} topics
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-2">
                        {stage.title}
                      </h4>

                      {/* Stage Node Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {stage.nodes.map((node) => {
                          const status = getStatus(node.id);
                          const isDone = status === 'done';

                          return (
                            <button
                              key={node.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedNode({ stage, node });
                              }}
                              className={`text-xs px-2.5 py-1 rounded-lg border font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                                isDone
                                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-300'
                                  : 'bg-zinc-100 dark:bg-zinc-800/80 border-transparent text-zinc-700 dark:text-zinc-300 hover:border-blue-500/40'
                              }`}
                            >
                              {isDone ? (
                                <Check className="w-3 h-3 text-emerald-500" />
                              ) : (
                                <Circle className="w-2.5 h-2.5 text-zinc-400" />
                              )}
                              <span>{node.title}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Mindmap Helper Badge */}
            <div className="absolute bottom-4 left-4 p-2 rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-black/[0.08] dark:border-white/[0.08] text-[11px] text-zinc-500 dark:text-zinc-400 font-mono-space shadow-xs pointer-events-none">
              Drag to pan • Click any node to open guides
            </div>
          </div>
        )}

        {/* 4C. CHECKLIST TABLE VIEW */}
        {viewMode === 'checklist' && (
          <div className="bg-white dark:bg-[#0c1017] rounded-2xl border border-black/[0.08] dark:border-white/[0.08] overflow-hidden shadow-xs">
            <div className="p-4 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                  Topic Checklist &amp; Learning Logs
                </h3>
                <p className="text-xs text-zinc-500">
                  Click the checkbox to mark topics as Completed or In Progress.
                </p>
              </div>
              <span className="font-mono-space text-xs font-semibold text-blue-600 dark:text-blue-400">
                {completedCount} of {allNodesInActiveRoadmap.length} Finished
              </span>
            </div>

            <div className="divide-y divide-black/[0.04] dark:divide-white/[0.04]">
              {filteredStages.map((stage) => (
                <div key={stage.id} className="p-4">
                  <div className="font-mono-space text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                    {stage.title}
                  </div>

                  <div className="space-y-2">
                    {stage.nodes.map((node) => {
                      const status = getStatus(node.id);
                      const isDone = status === 'done';
                      const isInProgress = status === 'in_progress';

                      return (
                        <div
                          key={node.id}
                          onClick={() => setSelectedNode({ stage, node })}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={(e) => toggleNodeStatus(node.id, e)}
                              className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                                isDone
                                  ? 'bg-emerald-500 border-emerald-500 text-white'
                                  : isInProgress
                                  ? 'bg-blue-500 border-blue-500 text-white'
                                  : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800'
                              }`}
                            >
                              {isDone && <Check className="w-3.5 h-3.5" />}
                              {isInProgress && <Clock className="w-3.5 h-3.5" />}
                            </button>

                            <div>
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-sm font-medium ${
                                    isDone
                                      ? 'line-through text-zinc-400 dark:text-zinc-500'
                                      : 'text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                                  }`}
                                >
                                  {node.title}
                                </span>
                                {node.badge && (
                                  <span
                                    className={`text-[9px] font-mono-space uppercase px-1.5 py-0.2 rounded ${getBadgeStyle(
                                      node.badge
                                    )}`}
                                  >
                                    {node.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-zinc-500 line-clamp-1">
                                {node.summary}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-xs text-zinc-400 hidden sm:inline font-mono-space">
                              {node.resources.length} resources
                            </span>
                            <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 transition-colors" />
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

      </div>

      {/* ========================================================= */}
      {/* 5. TOPIC DETAIL SLIDE-OVER DRAWER MODAL */}
      {/* ========================================================= */}
      {selectedNode && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setSelectedNode(null)}
          />

          {/* Slide-over Drawer */}
          <div className="relative w-full max-w-xl bg-white dark:bg-[#0c1017] border-l border-black/[0.08] dark:border-white/[0.08] h-full shadow-2xl overflow-y-auto p-6 sm:p-8 flex flex-col justify-between z-10 font-inter">
            <div className="space-y-6">
              
              {/* Header with Stage & Close Button */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-black/[0.06] dark:border-white/[0.06]">
                <div>
                  <span className="font-mono-space text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {selectedNode.stage.title}
                  </span>
                  <h2 className="font-serif-garamond text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white mt-1">
                    {selectedNode.node.title}
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedNode(null)}
                  className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Switcher Bar */}
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-black/[0.05] dark:border-white/[0.05] flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 font-mono-space">
                  Topic Status:
                </span>

                <div className="flex items-center gap-1.5">
                  {(['todo', 'in_progress', 'done'] as NodeStatus[]).map((st) => {
                    const isSelected = getStatus(selectedNode.node.id) === st;
                    return (
                      <button
                        key={st}
                        onClick={() => setExplicitStatus(selectedNode.node.id, st)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold font-mono-space transition-all cursor-pointer ${
                          isSelected
                            ? st === 'done'
                              ? 'bg-emerald-500 text-white font-bold'
                              : st === 'in_progress'
                              ? 'bg-blue-600 text-white font-bold'
                              : 'bg-zinc-800 text-white font-bold'
                            : 'bg-white dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white border border-black/[0.05] dark:border-white/[0.05]'
                        }`}
                      >
                        {st === 'done' ? 'Completed' : st === 'in_progress' ? 'Learning' : 'Todo'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Overview & Summary */}
              <div>
                <h4 className="font-mono-space text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                  Topic Overview
                </h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {selectedNode.node.summary}
                </p>
              </div>

              {/* Key Concepts to Master */}
              <div>
                <h4 className="font-mono-space text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                  Key Concepts to Master
                </h4>
                <ul className="space-y-2.5">
                  {selectedNode.node.keyPoints.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Subtopics */}
              {selectedNode.node.children && selectedNode.node.children.length > 0 && (
                <div>
                  <h4 className="font-mono-space text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2.5">
                    Recommended Sub-branches
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedNode.node.children.map((child) => (
                      <div
                        key={child.id}
                        className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.06] text-xs font-mono-space text-zinc-800 dark:text-zinc-200"
                      >
                        {child.title}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Curated Resources (Documentation, Videos, Guides) */}
              <div>
                <h4 className="font-mono-space text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                  Curated Learning Resources ({selectedNode.node.resources.length})
                </h4>
                <div className="space-y-2">
                  {selectedNode.node.resources.map((res, idx) => (
                    <a
                      key={idx}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-zinc-50/60 dark:bg-zinc-900/40 hover:border-blue-500/50 hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        {res.type === 'video' ? (
                          <PlayCircle className="w-4 h-4 text-red-500 shrink-0" />
                        ) : res.type === 'practice' ? (
                          <Cpu className="w-4 h-4 text-purple-500 shrink-0" />
                        ) : (
                          <BookOpen className="w-4 h-4 text-blue-500 shrink-0" />
                        )}
                        <div>
                          <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            {res.title}
                          </p>
                          <span className="text-[10px] text-zinc-500 font-mono-space uppercase">
                            {res.type}
                          </span>
                        </div>
                      </div>

                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  toggleNodeStatus(selectedNode.node.id);
                  setSelectedNode(null);
                }}
                className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-500/25 transition-all text-center cursor-pointer"
              >
                {getStatus(selectedNode.node.id) === 'done'
                  ? 'Mark as Needs Review'
                  : 'Mark as Completed & Continue'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
