import React, { useState } from 'react';
import {
  Check,
  CheckCircle2,
  Clock,
  Circle,
  ExternalLink,
  BookOpen,
  X,
  Sparkles,
  ArrowRight,
  Code,
  FolderGit2,
  Cpu,
  Layers,
  ShieldAlert,
  Server,
  Terminal,
  FileCode,
  ChevronDown,
  PlayCircle
} from 'lucide-react';

interface FrontendFlowchartProps {
  onSelectNode: (node: {
    id: string;
    title: string;
    summary: string;
    keyPoints: string[];
    resources: { title: string; url: string; type: string }[];
  }) => void;
  completedNodes: Record<string, string>;
  toggleNodeStatus: (id: string, e?: React.MouseEvent) => void;
}

export const FrontendFlowchartDiagram: React.FC<FrontendFlowchartProps> = ({
  onSelectNode,
  completedNodes,
  toggleNodeStatus
}) => {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'projects' | 'ai-tutor'>('roadmap');
  const [showAccordion, setShowAccordion] = useState(false);
  const [projectModalCategory, setProjectModalCategory] = useState<'beginner' | 'intermediate' | 'advanced' | null>(null);

  const getStatus = (id: string) => completedNodes[id] || 'todo';

  // Helper to open node
  const handleNodeClick = (
    id: string,
    title: string,
    summary: string,
    keyPoints: string[],
    resources: { title: string; url: string; type: string }[] = []
  ) => {
    onSelectNode({ id, title, summary, keyPoints, resources });
  };

  const projectIdeas = {
    beginner: [
      { title: 'Personal Portfolio & Resume Page', desc: 'Semantic HTML5, CSS Grid/Flexbox, light/dark mode with CSS variables.', tech: 'HTML, CSS, JS' },
      { title: 'Interactive Quiz Application', desc: 'Questions bank, timer, dynamic DOM score calculations, and restart state.', tech: 'Vanilla JS' },
      { title: 'Weather Dashboard with OpenWeatherMap', desc: 'Fetch API, async/await, geolocation, search bar, and 5-day forecast UI.', tech: 'Fetch API, DOM' },
      { title: 'Markdown Note Taking App', desc: 'LocalStorage persistence, live preview parsing, and tags filter.', tech: 'LocalStorage, JS' },
    ],
    intermediate: [
      { title: 'E-Commerce Product Catalog with Filter & Cart', desc: 'Multi-attribute filtering (category, price range, rating), persistent cart, checkout modal.', tech: 'React, Tailwind, Zustand' },
      { title: 'Kanban Task Board (Trello Clone)', desc: 'Drag-and-drop columns, task editing, priority badges, and board export/import.', tech: 'React, HTML5 DnD / dnd-kit' },
      { title: 'GitHub Repository Explorer & Analyzer', desc: 'GitHub REST API, stargazers chart, pagination, search debounce, rate limit handling.', tech: 'React, TanStack Query, Recharts' },
      { title: 'Social Media Feed with Infinite Scroll', desc: 'IntersectionObserver API, virtualization, optimistic likes, comment threads.', tech: 'React, Tailwind' },
    ],
    advanced: [
      { title: 'Full-Stack Next.js 15 SaaS with AI Assistant', desc: 'App Router, React Server Components, Stripe payments, Auth, and Vercel AI SDK integration.', tech: 'Next.js, TypeScript, Tailwind' },
      { title: 'Real-Time Collaborative Whiteboard (Excalidraw Clone)', desc: 'HTML5 Canvas API / SVG, WebSockets, undo/redo state history, multiplayer cursors.', tech: 'Canvas, WebSockets, React' },
      { title: 'Offline-First PWA Music Streaming Player', desc: 'Service Workers, IndexedDB audio cache, MediaSession API, background playback.', tech: 'PWA, Workbox, React' },
      { title: 'Custom Component Library with Storybook & NPM Package', desc: 'Accessible headless components (Radix), Tailwind CSS, automated Vitest/Playwright tests, npm release.', tech: 'TypeScript, Rollup, Storybook' },
    ]
  };

  return (
    <div className="w-full max-w-[1100px] mx-auto space-y-8 select-none font-sans text-zinc-900 dark:text-zinc-100">
      
      {/* 1. Header matching Image 2 */}
      <div className="text-center space-y-3 pb-4">
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-zinc-900 dark:text-white">
          Frontend Developer
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Step by step guide to becoming a modern frontend developer in 2026
        </p>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-center gap-4 pt-3">
          <div className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-black/[0.08] dark:border-white/[0.08]">
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'roadmap'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400'
              }`}
            >
              Roadmap
            </button>
            <button
              onClick={() => {
                setActiveTab('projects');
                setProjectModalCategory('beginner');
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'projects'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('ai-tutor')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'ai-tutor'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400'
              }`}
            >
              AI Tutor
            </button>
          </div>
        </div>

        {/* Progress Alert Pill */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 mx-auto">
          <span>Join 168,287+ developers tracking their learning progress on this roadmap</span>
          <span className="font-bold underline cursor-pointer">Track Progress</span>
        </div>

        {/* Accordion: What is a Frontend Developer? */}
        <div className="max-w-xl mx-auto border border-black/[0.08] dark:border-white/[0.08] rounded-xl bg-white dark:bg-[#0c1017] overflow-hidden text-left">
          <button
            onClick={() => setShowAccordion(!showAccordion)}
            className="w-full px-4 py-3 flex items-center justify-between text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 cursor-pointer"
          >
            <span>What is a Frontend Developer?</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showAccordion ? 'rotate-180' : ''}`} />
          </button>
          {showAccordion && (
            <div className="px-4 pb-4 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-black/[0.04] dark:border-white/[0.05] pt-3">
              A frontend developer creates websites and applications using web technologies like HTML, CSS, JavaScript, and modern frameworks (React, Next.js). They build everything users see, touch, and experience on their screens.
            </div>
          )}
        </div>
      </div>

      {/* 2. Top Legend & Related Roadmaps (Matching Top Left in Image 2) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start pb-4">
        {/* Legend */}
        <div className="p-4 rounded-xl border border-black/[0.1] dark:border-white/[0.1] bg-white dark:bg-[#0c1017] shadow-xs space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[9px] font-bold">✓</span>
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Personal Recommendation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-purple-500 flex items-center justify-center text-white text-[9px] font-bold">◆</span>
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Alternative Option</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-zinc-300 dark:bg-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-400 text-[9px]">○</span>
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Order not strict on roadmap</span>
          </div>
        </div>

        {/* Beginner button */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setProjectModalCategory('beginner')}
            className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold text-xs shadow-xs hover:opacity-90 transition-opacity cursor-pointer text-center"
          >
            Visit Beginner Friendly Version
          </button>
          
          <div className="p-3 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0c1017] text-xs">
            <span className="font-bold text-[11px] uppercase tracking-wider text-zinc-500 block mb-1.5">
              Related Roadmaps
            </span>
            <div className="space-y-1 text-blue-600 dark:text-blue-400 font-medium">
              <div className="cursor-pointer hover:underline">• JavaScript Roadmap</div>
              <div className="cursor-pointer hover:underline">• React Roadmap</div>
              <div className="cursor-pointer hover:underline">• TypeScript Roadmap</div>
              <div className="cursor-pointer hover:underline">• Node.js Roadmap</div>
            </div>
          </div>
        </div>

        {/* Credit notice */}
        <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-zinc-50 dark:bg-zinc-900/60 text-xs text-zinc-500 space-y-1">
          <span className="font-semibold text-zinc-800 dark:text-zinc-200 block">
            Community Standard
          </span>
          <p>
            Interactive visual curriculum inspired by roadmap.sh. Click any yellow milestone or branch node to view topic details and resources.
          </p>
        </div>
      </div>

      {/* 3. THE ICONIC FLOWCHART CANVAS MATCHING IMAGE 2 */}
      <div className="relative pt-6 pb-20 overflow-x-auto">
        <div className="min-w-[760px] max-w-[900px] mx-auto flex flex-col items-center">

          {/* Central Title Tag */}
          <div className="font-serif-garamond text-2xl font-bold tracking-wider text-zinc-800 dark:text-zinc-200 mb-4">
            Front-end
          </div>

          {/* Dotted Connector line */}
          <div className="w-0.5 h-8 border-l-2 border-dashed border-zinc-400 dark:border-zinc-600" />

          {/* ========================================================================= */}
          {/* SECTION 1: INTERNET */}
          {/* ========================================================================= */}
          <div className="relative flex items-center justify-center w-full my-2">
            {/* Main Central Yellow Node: Internet */}
            <button
              onClick={() => handleNodeClick(
                'internet',
                'Internet Fundamentals',
                'How the internet works, packets, routers, DNS, HTTP/HTTPS, and browser rendering engines.',
                ['TCP/IP model and packet transmission', 'HTTP vs HTTPS and SSL/TLS encryption', 'DNS resolution process (Root, TLD, Authoritative)', 'Browser Critical Rendering Path (DOM -> CSSOM -> Layout -> Paint)'],
                [
                  { title: 'MDN: How the Web Works', url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works', type: 'doc' },
                  { title: 'Cloudflare: What is DNS?', url: 'https://www.cloudflare.com/learning/dns/what-is-dns/', type: 'doc' }
                ]
              )}
              className="z-10 px-8 py-3 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-extrabold text-sm sm:text-base border-2 border-zinc-900 shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
              Internet
            </button>

            {/* Dotted horizontal connector to the right */}
            <div className="absolute left-1/2 ml-16 w-16 h-0.5 border-t-2 border-dashed border-zinc-400 dark:border-zinc-600" />

            {/* Right Branch Sub-nodes */}
            <div className="absolute left-1/2 ml-32 flex flex-col gap-1.5 z-10">
              {[
                { id: 'how-internet-works', title: 'How does the internet work?' },
                { id: 'what-is-http', title: 'What is HTTP?' },
                { id: 'what-is-domain', title: 'What is Domain Name?' },
                { id: 'what-is-hosting', title: 'What is hosting?' },
                { id: 'dns-how-works', title: 'DNS and how it works?' },
                { id: 'browsers-how-work', title: 'Browsers and how they work?' }
              ].map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => handleNodeClick(
                    sub.id,
                    sub.title,
                    `Core internet concept: ${sub.title}. Essential for understanding latency, protocols, and deployment.`,
                    ['DNS caching, routing hops, status codes', 'Application layer protocols and security handshakes']
                  )}
                  className="px-3 py-1 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-xs font-semibold border border-zinc-800 flex items-center justify-between gap-3 hover:bg-[#ffe66d] transition-colors cursor-pointer shadow-xs min-w-[210px]"
                >
                  <span>{sub.title}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Dotted Connector line */}
          <div className="w-0.5 h-16 border-l-2 border-dashed border-zinc-400 dark:border-zinc-600" />

          {/* ========================================================================= */}
          {/* SECTION 2: HTML, CSS, JAVASCRIPT */}
          {/* ========================================================================= */}
          <div className="relative flex flex-col items-center gap-2 w-full my-1">
            
            {/* HTML */}
            <button
              onClick={() => handleNodeClick(
                'html-core',
                'HTML5 & Semantic Web',
                'Semantic markup, accessibility (ARIA), forms, validation, and SEO best practices.',
                ['Semantic tags (<article>, <main>, <header>, <section>)', 'Form validation attributes (pattern, required, type)', 'ARIA attributes and accessibility', 'SEO meta tags and OpenGraph cards']
              )}
              className="z-10 px-8 py-2.5 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-extrabold text-sm border-2 border-zinc-900 shadow-md hover:scale-105 transition-transform cursor-pointer w-48 text-center"
            >
              HTML
            </button>

            {/* Dotted Connector line */}
            <div className="w-0.5 h-4 border-l-2 border-dashed border-zinc-400 dark:border-zinc-600" />

            {/* CSS */}
            <button
              onClick={() => handleNodeClick(
                'css-core',
                'CSS3 & Modern Layouts',
                'Box model, Flexbox, CSS Grid, responsive design, media queries, and animations.',
                ['Box model (border-box, padding, margin, border)', 'Flexbox layout (justify-content, align-items, flex-direction)', 'CSS Grid (grid-template-columns, minmax, auto-fit)', 'Responsive media queries and mobile-first design']
              )}
              className="z-10 px-8 py-2.5 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-extrabold text-sm border-2 border-zinc-900 shadow-md hover:scale-105 transition-transform cursor-pointer w-48 text-center"
            >
              CSS
            </button>

            {/* Dotted Connector line */}
            <div className="w-0.5 h-4 border-l-2 border-dashed border-zinc-400 dark:border-zinc-600" />

            {/* JavaScript */}
            <button
              onClick={() => handleNodeClick(
                'javascript-core',
                'JavaScript (ES6+)',
                'Syntax, DOM manipulation, Fetch API, Event Loop, Promises, and Async/Await.',
                ['DOM querySelector, createElement, addEventListener', 'Event Bubbling and Delegation', 'ES6+: arrow functions, destructuring, modules', 'Asynchronous JS: Promises, async/await, try/catch']
              )}
              className="z-10 px-8 py-2.5 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-extrabold text-sm border-2 border-zinc-900 shadow-md hover:scale-105 transition-transform cursor-pointer w-48 text-center"
            >
              JavaScript
            </button>

            {/* Left Note: HTML, CSS and JavaScript are the backbone */}
            <div className="absolute right-1/2 mr-32 top-6 max-w-[210px] p-3 rounded-xl border border-black/[0.1] dark:border-white/[0.1] bg-white dark:bg-[#0c1017] shadow-sm text-xs space-y-2 text-left z-10">
              <p className="text-zinc-600 dark:text-zinc-300 text-[11px] leading-relaxed">
                HTML, CSS and JavaScript are the backbone of web development. Make sure to practice by building lots of projects.
              </p>
              <button
                onClick={() => setProjectModalCategory('beginner')}
                className="w-full py-1.5 px-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 font-bold text-[11px] text-zinc-900 dark:text-white transition-colors cursor-pointer text-center"
              >
                Beginner Project Ideas
              </button>
            </div>
          </div>

          {/* Dotted Connector line */}
          <div className="w-0.5 h-16 border-l-2 border-dashed border-zinc-400 dark:border-zinc-600" />

          {/* ========================================================================= */}
          {/* SECTION 3: VERSION CONTROL & PACKAGE MANAGERS */}
          {/* ========================================================================= */}
          <div className="relative flex items-center justify-between w-full max-w-[650px] my-2">
            
            {/* Version Control Column (Left) */}
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => handleNodeClick(
                  'version-control',
                  'Version Control (Git)',
                  'Track source code history, collaborate in teams, and manage releases.',
                  ['git init, add, commit, status, log', 'Branching: checkout -b, merge vs rebase', 'Resolving merge conflicts']
                )}
                className="z-10 px-6 py-2.5 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-extrabold text-xs sm:text-sm border-2 border-zinc-900 shadow-sm cursor-pointer w-44 text-center"
              >
                Version Control
              </button>
              
              <div className="w-0.5 h-3 border-l-2 border-dashed border-zinc-400" />

              <button
                onClick={() => handleNodeClick(
                  'vcs-hosting',
                  'VCS Hosting (GitHub & GitLab)',
                  'Remote repositories, Pull Requests, Code Reviews, and GitHub Actions.',
                  ['Pull Request lifecycle', 'Protecting main branches with status checks']
                )}
                className="z-10 px-6 py-2 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-bold text-xs border-2 border-zinc-900 shadow-sm cursor-pointer w-44 text-center"
              >
                VCS Hosting
              </button>

              {/* Sub-branches for Git / GitHub */}
              <div className="flex gap-2 mt-1">
                <span className="px-2.5 py-1 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-[11px] font-bold border border-zinc-800">
                  Git
                </span>
                <span className="px-2.5 py-1 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-[11px] font-bold border border-zinc-800 flex items-center gap-1">
                  <span>GitHub</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </span>
                <span className="px-2.5 py-1 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-[11px] font-bold border border-zinc-800">
                  GitLab
                </span>
              </div>
            </div>

            {/* Dotted horizontal bridge */}
            <div className="flex-1 h-0.5 border-t-2 border-dashed border-zinc-400 mx-4" />

            {/* Package Managers Column (Right) */}
            <div className="flex flex-col items-center gap-2">
              <div className="grid grid-cols-2 gap-1.5 mb-1">
                {[
                  { name: 'npm', icon: 'green' },
                  { name: 'yarn', icon: 'green' },
                  { name: 'pnpm', icon: 'green' },
                  { name: 'Bun', icon: 'green' }
                ].map((pkg) => (
                  <div
                    key={pkg.name}
                    className="px-3 py-1 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-[11px] font-bold border border-zinc-800 flex items-center justify-between gap-2 shadow-xs"
                  >
                    <span>{pkg.name}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleNodeClick(
                  'package-managers',
                  'Package Managers (npm / pnpm / Bun)',
                  'Managing dependencies, scripts, lockfiles, and semantic versioning.',
                  ['dependencies vs devDependencies', 'Semantic versioning (^ vs ~)', 'package-lock.json integrity']
                )}
                className="z-10 px-6 py-2.5 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-extrabold text-xs sm:text-sm border-2 border-zinc-900 shadow-sm cursor-pointer w-44 text-center"
              >
                Package Managers
              </button>
            </div>
          </div>

          {/* Dotted Connector line */}
          <div className="w-0.5 h-16 border-l-2 border-dashed border-zinc-400 dark:border-zinc-600" />

          {/* ========================================================================= */}
          {/* SECTION 4: CSS FRAMEWORKS & TAILWIND */}
          {/* ========================================================================= */}
          <div className="relative flex flex-col items-center gap-2 w-full my-1">
            <button
              onClick={() => handleNodeClick(
                'css-frameworks',
                'CSS Frameworks & Architecture',
                'Modern utility-first and component frameworks to accelerate responsive UI development.',
                ['Tailwind CSS v4 engine', 'Responsive breakpoints and pseudo-classes', 'Dark mode theming']
              )}
              className="z-10 px-8 py-2.5 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-extrabold text-sm border-2 border-zinc-900 shadow-md hover:scale-105 transition-transform cursor-pointer w-52 text-center"
            >
              CSS Frameworks
            </button>

            <div className="flex gap-2">
              <span className="px-4 py-1 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-xs font-bold border border-zinc-800 flex items-center gap-1.5 shadow-xs">
                <span>Tailwind</span>
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              </span>
            </div>

            {/* Milestone Note: Vanilla JS readiness */}
            <div className="max-w-md mx-auto p-3.5 my-3 rounded-xl border border-black/[0.1] dark:border-white/[0.1] bg-white dark:bg-[#0c1017] shadow-sm text-center space-y-2 z-10">
              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                At this point, you should be able to build modern vanilla JS frontend applications.
              </p>
              <button
                onClick={() => setProjectModalCategory('intermediate')}
                className="py-1.5 px-4 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 font-bold text-xs text-zinc-900 dark:text-white transition-colors cursor-pointer"
              >
                Intermediate Project Ideas
              </button>
            </div>
          </div>

          {/* Dotted Connector line */}
          <div className="w-0.5 h-16 border-l-2 border-dashed border-zinc-400 dark:border-zinc-600" />

          {/* ========================================================================= */}
          {/* SECTION 5: LEARN A FRAMEWORK (REACT, VUE, ANGULAR, SVELTE) */}
          {/* ========================================================================= */}
          <div className="relative flex items-center justify-center w-full my-2">
            
            {/* Left Branch: Frameworks */}
            <div className="absolute right-1/2 mr-32 flex flex-col gap-1.5 z-10">
              {[
                { name: 'React', badge: 'green' },
                { name: 'Vue.js', badge: 'green' },
                { name: 'Angular', badge: 'green' },
                { name: 'Svelte', badge: 'green' },
                { name: 'Solid JS', badge: 'purple' }
              ].map((fw) => (
                <button
                  key={fw.name}
                  onClick={() => handleNodeClick(
                    `framework-${fw.name.toLowerCase()}`,
                    fw.name,
                    `Master ${fw.name}: components, state management, props, lifecycle, and ecosystem.`,
                    ['Component architecture and reactivity', 'State stores and routing solutions']
                  )}
                  className="px-4 py-1 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-xs font-bold border border-zinc-800 flex items-center justify-between gap-4 hover:bg-[#ffe66d] transition-colors cursor-pointer shadow-xs min-w-[140px]"
                >
                  <span>{fw.name}</span>
                  <span className={`w-2.5 h-2.5 rounded-full ${fw.badge === 'green' ? 'bg-emerald-500' : 'bg-purple-500'}`} />
                </button>
              ))}
            </div>

            {/* Dotted line left */}
            <div className="absolute right-1/2 mr-16 w-16 h-0.5 border-t-2 border-dashed border-zinc-400" />

            {/* Central Node: Learn a Framework */}
            <button
              onClick={() => handleNodeClick(
                'learn-a-framework',
                'Learn a Modern Framework',
                'Component-driven architecture: JSX, reactivity, custom hooks, Virtual DOM diffing, and ecosystem.',
                ['React components and hooks (useState, useEffect, useMemo)', 'Component state vs global state', 'Client-side routing with React Router']
              )}
              className="z-10 px-8 py-3 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-extrabold text-sm sm:text-base border-2 border-zinc-900 shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
              Learn a Framework
            </button>

            {/* Dotted line right */}
            <div className="absolute left-1/2 ml-16 w-16 h-0.5 border-t-2 border-dashed border-zinc-400" />

            {/* Right Branch: AI in Development */}
            <div className="absolute left-1/2 ml-32 flex flex-col gap-1.5 z-10">
              <span className="font-bold text-[11px] uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-0.5">
                AI in Development
              </span>
              {[
                'Learn the Basics',
                'How LLMs work',
                'AI vs Traditional Coding',
                'Applications',
                'Code Reviews, Refactoring, Docs generation'
              ].map((sub) => (
                <div
                  key={sub}
                  className="px-3 py-1 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-xs font-semibold border border-zinc-800 shadow-xs max-w-[240px] truncate"
                >
                  {sub}
                </div>
              ))}
            </div>
          </div>

          {/* Dotted Connector line */}
          <div className="w-0.5 h-20 border-l-2 border-dashed border-zinc-400 dark:border-zinc-600" />

          {/* ========================================================================= */}
          {/* SECTION 6: AI ASSISTED CODING & PROMPT TECHNIQUES */}
          {/* ========================================================================= */}
          <div className="relative flex items-center justify-center w-full my-2">
            
            {/* Left AI Tools */}
            <div className="absolute right-1/2 mr-32 flex flex-col gap-1.5 z-10">
              {[
                { name: 'Claude Code', badge: 'purple' },
                { name: 'Cursor', badge: 'green' },
                { name: 'Copilot', badge: 'green' },
                { name: 'Antigravity', badge: 'green' }
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="px-3 py-1 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-xs font-bold border border-zinc-800 flex items-center justify-between gap-3 min-w-[130px]"
                >
                  <span>{tool.name}</span>
                  <span className={`w-2.5 h-2.5 rounded-full ${tool.badge === 'green' ? 'bg-emerald-500' : 'bg-purple-500'}`} />
                </div>
              ))}

              <div className="flex flex-col gap-1 mt-1">
                <button className="px-2.5 py-1 rounded bg-blue-600 text-white font-bold text-[11px] shadow-xs text-center">
                  Prompt Engineering
                </button>
                <button className="px-2.5 py-1 rounded bg-blue-600 text-white font-bold text-[11px] shadow-xs text-center">
                  AI Agents Roadmap
                </button>
              </div>
            </div>

            {/* Dotted line left */}
            <div className="absolute right-1/2 mr-16 w-16 h-0.5 border-t-2 border-dashed border-zinc-400" />

            {/* Central Node: AI Assisted Coding */}
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => handleNodeClick(
                  'ai-assisted-coding',
                  'AI Assisted Coding & Workflows',
                  'Leveraging LLMs, pair programmers (Cursor, Copilot), and agentic workflows to multiply developer throughput.',
                  ['Cursor AI editor integration & composer', 'Context files (.cursorrules, AGENTS.md)', 'AI code review and test suite generation']
                )}
                className="z-10 px-8 py-2.5 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-extrabold text-sm border-2 border-zinc-900 shadow-md hover:scale-105 transition-transform cursor-pointer w-52 text-center"
              >
                AI Assisted Coding
              </button>

              <div className="w-0.5 h-3 border-l-2 border-dashed border-zinc-400" />

              <button
                onClick={() => handleNodeClick(
                  'prompting-techniques',
                  'Prompting Techniques (Agents, MCP, Skills)',
                  'Model Context Protocol (MCP), structured schemas, system instructions, and tool calling.',
                  ['Zero-shot vs Few-shot chain of thought prompting', 'Model Context Protocol (MCP) servers', 'Building resilient AI agent loops']
                )}
                className="z-10 px-8 py-2.5 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-extrabold text-sm border-2 border-zinc-900 shadow-md hover:scale-105 transition-transform cursor-pointer w-52 text-center"
              >
                Prompting Techniques
              </button>

              <div className="flex gap-2">
                <span className="px-3 py-1 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-xs font-bold border border-zinc-800">Agents</span>
                <span className="px-3 py-1 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-xs font-bold border border-zinc-800">MCP</span>
                <span className="px-3 py-1 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-xs font-bold border border-zinc-800">Skills</span>
              </div>

              <div className="w-0.5 h-3 border-l-2 border-dashed border-zinc-400" />

              <button
                onClick={() => handleNodeClick(
                  'implementing-ai',
                  'Implementing AI (Gemini, OpenAI, Anthropic)',
                  'Integrating client and server AI SDKs, streaming completion, and function calling.',
                  ['@google/genai TypeScript SDK', 'Streaming responses with ReadableStreams', 'Function calling & schema extraction']
                )}
                className="z-10 px-8 py-2.5 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-extrabold text-sm border-2 border-zinc-900 shadow-md hover:scale-105 transition-transform cursor-pointer w-52 text-center"
              >
                Implementing AI
              </button>

              <div className="flex gap-2">
                <span className="px-3 py-1 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-xs font-bold border border-zinc-800">Gemini</span>
                <span className="px-3 py-1 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-xs font-bold border border-zinc-800">OpenAI</span>
                <span className="px-3 py-1 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-xs font-bold border border-zinc-800">Anthropic</span>
              </div>
            </div>
          </div>

          {/* Dotted Connector line */}
          <div className="w-0.5 h-16 border-l-2 border-dashed border-zinc-400 dark:border-zinc-600" />

          {/* ========================================================================= */}
          {/* SECTION 7: MODULE BUNDLERS, LINTERS, AUTH STRATEGIES */}
          {/* ========================================================================= */}
          <div className="relative flex items-center justify-between w-full max-w-[700px] my-2">
            
            {/* Auth Strategies (Left) */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => handleNodeClick(
                  'auth-strategies',
                  'Auth Strategies',
                  'JWT, OAuth 2.0, HTTP cookies, Session auth, and Third-party IAM providers.',
                  ['Access Tokens vs Refresh Tokens', 'SameSite, Secure, HttpOnly cookie flags', 'OAuth 2.0 PKCE flow for single-page applications']
                )}
                className="z-10 px-6 py-2.5 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-bold text-xs sm:text-sm border-2 border-zinc-900 shadow-sm w-36 text-center cursor-pointer"
              >
                Auth Strategies
              </button>
            </div>

            {/* Dotted line */}
            <div className="flex-1 h-0.5 border-t-2 border-dashed border-zinc-400 mx-2" />

            {/* Module Bundlers (Center) */}
            <div className="flex flex-col items-center gap-1.5">
              <button
                onClick={() => handleNodeClick(
                  'module-bundlers',
                  'Module Bundlers (Vite, Rollup, SWC)',
                  'Tree shaking, asset bundling, HMR, and modern compilers.',
                  ['Vite native ES modules engine', 'Rollup production chunking', 'esbuild and SWC fast transpilation']
                )}
                className="z-10 px-6 py-2.5 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-extrabold text-xs sm:text-sm border-2 border-zinc-900 shadow-sm w-44 text-center cursor-pointer"
              >
                Module Bundlers
              </button>

              <div className="flex flex-col gap-1 w-full">
                <div className="px-2 py-0.5 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-[11px] font-bold border border-zinc-800 flex justify-between items-center">
                  <span>Vite</span>
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="px-1.5 py-0.5 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-[10px] font-bold border border-zinc-800 flex justify-between items-center">
                    <span>SWC</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="px-1.5 py-0.5 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-[10px] font-bold border border-zinc-800 flex justify-between items-center">
                    <span>esbuild</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="px-1.5 py-0.5 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-[10px] font-bold border border-zinc-800 text-center">Rollup</div>
                  <div className="px-1.5 py-0.5 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-[10px] font-bold border border-zinc-800 text-center">Rolldown</div>
                </div>
              </div>
            </div>

            {/* Dotted line */}
            <div className="flex-1 h-0.5 border-t-2 border-dashed border-zinc-400 mx-2" />

            {/* Linters & Formatters (Right) */}
            <div className="flex flex-col items-center gap-1.5">
              <button
                onClick={() => handleNodeClick(
                  'linters-formatters',
                  'Linters & Formatters',
                  'Automated code quality, static analysis, and style enforcement.',
                  ['ESLint configuration (flat config)', 'Prettier opinionated formatting', 'Biome all-in-one rust linter']
                )}
                className="z-10 px-6 py-2.5 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-bold text-xs sm:text-sm border-2 border-zinc-900 shadow-sm w-44 text-center cursor-pointer"
              >
                Linters &amp; Formatters
              </button>

              <div className="flex flex-col gap-1 w-full">
                {[
                  { name: 'Biome', badge: 'green' },
                  { name: 'Prettier', badge: 'purple' },
                  { name: 'ESLint', badge: 'purple' }
                ].map((item) => (
                  <div
                    key={item.name}
                    className="px-2.5 py-0.5 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-[11px] font-bold border border-zinc-800 flex justify-between items-center"
                  >
                    <span>{item.name}</span>
                    <span className={`w-2 h-2 rounded-full ${item.badge === 'green' ? 'bg-emerald-500' : 'bg-purple-500'}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dotted Connector line */}
          <div className="w-0.5 h-16 border-l-2 border-dashed border-zinc-400 dark:border-zinc-600" />

          {/* ========================================================================= */}
          {/* SECTION 8: TESTING & WEB APIS & SECURITY */}
          {/* ========================================================================= */}
          <div className="relative flex items-center justify-between w-full max-w-[700px] my-2">
            
            {/* Testing (Left) */}
            <div className="flex flex-col items-center gap-1.5">
              <button
                onClick={() => handleNodeClick(
                  'testing',
                  'Testing (Vitest & Playwright)',
                  'Unit testing, integration testing with React Testing Library, and E2E browser automation.',
                  ['Vitest fast ESM test runner', 'Testing user interactions with RTL', 'Playwright cross-browser automation']
                )}
                className="z-10 px-6 py-2.5 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-extrabold text-xs sm:text-sm border-2 border-zinc-900 shadow-sm w-36 text-center cursor-pointer"
              >
                Testing
              </button>

              <div className="flex flex-col gap-1 w-full">
                {[
                  { name: 'Vitest', badge: 'purple' },
                  { name: 'Playwright', badge: 'green' },
                  { name: 'Cypress', badge: 'green' },
                  { name: 'Jest', badge: 'neutral' }
                ].map((t) => (
                  <div
                    key={t.name}
                    className="px-2.5 py-0.5 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-[11px] font-bold border border-zinc-800 flex justify-between items-center"
                  >
                    <span>{t.name}</span>
                    {t.badge === 'purple' && <span className="w-2 h-2 rounded-full bg-purple-500" />}
                    {t.badge === 'green' && <span className="w-2 h-2 rounded-full bg-emerald-500" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Dotted line */}
            <div className="flex-1 h-0.5 border-t-2 border-dashed border-zinc-400 mx-2" />

            {/* Web APIs (Center) */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => handleNodeClick(
                  'web-apis',
                  'Web APIs & Browser Capabilities',
                  'Storage, Geolocation, Canvas, Web Workers, WebSockets, and Service Workers.',
                  ['LocalStorage, IndexedDB, and Cache API', 'WebSockets for two-way real-time communication', 'IntersectionObserver for lazy loading']
                )}
                className="z-10 px-6 py-2.5 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-bold text-xs sm:text-sm border-2 border-zinc-900 shadow-sm w-36 text-center cursor-pointer"
              >
                Web APIs
              </button>
            </div>

            {/* Dotted line */}
            <div className="flex-1 h-0.5 border-t-2 border-dashed border-zinc-400 mx-2" />

            {/* Web Security (Right) */}
            <div className="flex flex-col items-center gap-1.5">
              <button
                onClick={() => handleNodeClick(
                  'web-security',
                  'Web Security & OWASP Top 10',
                  'CORS headers, Content Security Policy (CSP), XSS, CSRF, and HTTPS protection.',
                  ['Cross-Origin Resource Sharing (CORS)', 'Content Security Policy (CSP) headers', 'Preventing Cross-Site Scripting (XSS) and SQL Injection']
                )}
                className="z-10 px-6 py-2.5 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-bold text-xs sm:text-sm border-2 border-zinc-900 shadow-sm w-36 text-center cursor-pointer"
              >
                Web Security
              </button>

              <div className="flex flex-col gap-1 w-full">
                {['CORS', 'HTTPS', 'CSP', 'OWASP Risks'].map((sec) => (
                  <div
                    key={sec}
                    className="px-2.5 py-0.5 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-[11px] font-bold border border-zinc-800 flex justify-between items-center"
                  >
                    <span>{sec}</span>
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dotted Connector line */}
          <div className="w-0.5 h-16 border-l-2 border-dashed border-zinc-400 dark:border-zinc-600" />

          {/* ========================================================================= */}
          {/* SECTION 9: SSR & FRAMEWORK ECOSYSTEM */}
          {/* ========================================================================= */}
          <div className="relative flex flex-col items-center gap-3 w-full my-1">
            
            <button
              onClick={() => handleNodeClick(
                'ssr-fullstack',
                'SSR & Full-Stack React (Next.js)',
                'Server-Side Rendering, React Server Components (RSC), App Router, Static Site Generation (SSG).',
                ['React Server Components vs Client Components', 'App Router layout.tsx and page.tsx hierarchy', 'Incremental Static Regeneration (ISR)']
              )}
              className="z-10 px-8 py-2.5 rounded-lg bg-[#ffe66d] dark:bg-[#facc15] text-zinc-950 font-extrabold text-sm border-2 border-zinc-900 shadow-md hover:scale-105 transition-transform cursor-pointer w-44 text-center"
            >
              SSR
            </button>

            {/* Framework stacks breakdown */}
            <div className="grid grid-cols-2 gap-3 max-w-md w-full">
              {/* React Ecosystem */}
              <div className="p-2.5 rounded-xl border border-zinc-800 bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-950 text-xs space-y-1">
                <span className="font-bold text-[11px] block border-b border-zinc-800/40 pb-1">
                  React
                </span>
                <div className="flex justify-between items-center font-semibold">
                  <span>Next.js</span>
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span>TanStack Start</span>
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span>Astro</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="font-semibold text-zinc-700">react-router</div>
              </div>

              {/* Vue / Svelte Ecosystem */}
              <div className="p-2.5 rounded-xl border border-zinc-800 bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-950 text-xs space-y-1">
                <span className="font-bold text-[11px] block border-b border-zinc-800/40 pb-1">
                  Vue / Svelte / Angular
                </span>
                <div className="font-semibold">Nuxt.js (Vue)</div>
                <div className="font-semibold">SvelteKit (Svelte)</div>
                <div className="font-semibold">Angular SSR</div>
              </div>
            </div>

            {/* Deployment Hostings at bottom */}
            <div className="mt-4 pt-4 border-t border-dashed border-zinc-400 w-full flex flex-wrap justify-center gap-2">
              {['GitHub Pages', 'Vercel', 'Netlify', 'Cloudflare', 'Railway', 'Render'].map((host) => (
                <span
                  key={host}
                  className="px-3 py-1 rounded bg-[#fff3b0] dark:bg-[#fef08a] text-zinc-900 text-xs font-bold border border-zinc-800 flex items-center gap-1.5 shadow-xs"
                >
                  <span>{host}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </span>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. PROJECT IDEAS MODAL */}
      {/* ========================================================================= */}
      {projectModalCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setProjectModalCategory(null)}
          />

          <div className="relative w-full max-w-2xl bg-white dark:bg-[#0c1017] border border-black/[0.1] dark:border-white/[0.1] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div>
                <span className="font-mono-space text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {projectModalCategory} Level Projects
                </span>
                <h3 className="font-serif-garamond text-2xl font-bold text-zinc-950 dark:text-white mt-1">
                  Curated Project Challenges
                </h3>
              </div>

              <button
                onClick={() => setProjectModalCategory(null)}
                className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Building projects is the absolute best way to solidify your knowledge and stand out in tech interviews.
            </p>

            <div className="space-y-3">
              {projectIdeas[projectModalCategory].map((proj, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-zinc-50 dark:bg-zinc-900/60 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                      {proj.title}
                    </h4>
                    <span className="text-[10px] font-mono-space px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">
                      {proj.tech}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {proj.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex justify-end">
              <button
                onClick={() => setProjectModalCategory(null)}
                className="px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold text-xs shadow-md shadow-blue-500/20 cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
