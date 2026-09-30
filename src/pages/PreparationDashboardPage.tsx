import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import {
  Code,
  Flame,
  CheckCircle2,
  TrendingUp,
  Building2,
  Sparkles,
  Database,
  Layers,
  ArrowRight,
  Youtube,
  FileText,
  Mail,
  Scroll,
  HelpCircle,
  MessageSquareQuote,
  Target,
  BarChart3,
  Calendar,
  ExternalLink,
  ChevronRight,
  Compass
} from 'lucide-react';

interface PrepDashboardProps {
  navigate: (to: string) => void;
}

export const PreparationDashboardPage: React.FC<PrepDashboardProps> = ({ navigate }) => {
  const { totalSolved, streakDays } = useProgress();
  const [activeTimeframe, setActiveTimeframe] = useState<'7' | '30' | '90' | '180'>('30');
  const [selectedDay, setSelectedDay] = useState<number | null>(26);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  // Calendar dates matrix for September 2026 (Sept 1 is Tuesday -> 2 empty offsets)
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
  const currentDay = 26; // 2026-09-26

  // Active streak days matching Design Variation 2
  const activeStreakDays = [24, 25, 26];

  // Dynamic readiness calculation
  const readinessPct = Math.min(96, Math.max(28, Math.floor(totalSolved * 1.5) + 36));

  const skillCategories = [
    {
      name: 'Arrays & Pointers',
      total: 65,
      solved: Math.min(65, 8 + Math.floor(totalSolved * 0.25)),
      pct: 12
    },
    {
      name: 'Dynamic Programming',
      total: 50,
      solved: Math.min(50, 3 + Math.floor(totalSolved * 0.15)),
      pct: 6
    },
    {
      name: 'SQL Queries',
      total: 110,
      solved: Math.min(110, 12 + Math.floor(totalSolved * 0.2)),
      pct: 11
    },
    {
      name: 'System Design',
      total: 32,
      solved: Math.min(32, 2 + Math.floor(totalSolved * 0.1)),
      pct: 6
    },
  ];

  // The 4 prominent primary resource cards matching Design Variation 2
  const primaryResourceCards = [
    {
      id: '#01',
      title: '20 DSA Patterns',
      meta: 'High-Yield Tool',
      href: '/preparation/20-essential-dsa-patterns',
      desc: 'Master the top coding patterns to recognize problem archetypes instantly.'
    },
    {
      id: '#02',
      title: 'Company Wise DSA',
      meta: '45+ Companies',
      href: '/preparation/company-wise-dsa-sheet',
      desc: 'Real questions asked at Google, Amazon, Microsoft, and top tech MNCs.'
    },
    {
      id: '#03',
      title: 'SQL Interview Qs',
      meta: '110 Top Queries',
      href: '/preparation/sql-sheet',
      desc: 'Window functions, joins, aggregations, and high-frequency database questions.'
    },
    {
      id: '#04',
      title: 'Resume Templates',
      meta: 'ATS Optimized',
      href: '/preparation/resume-templates',
      desc: 'Single-column and LaTeX tech resumes with 99% ATS parsing rate.'
    },
  ];

  // All additional tools available in the preparation ecosystem
  const allCuratedTools = [
    { title: 'Developer Roadmaps', meta: '95+ Role & Skill Paths', href: '/preparation/roadmaps', icon: Compass, color: 'text-blue-500' },
    { title: 'Curated DSA Sheets', meta: '7+ Creator Sheets', href: '/preparation/dsa-sheets', icon: Code, color: 'text-blue-500' },
    { title: 'Package Wise DSA', meta: '3 LPA to 60+ LPA', href: '/preparation/package-wise-dsa-sheet', icon: Target, color: 'text-emerald-500' },
    { title: 'System Design Sheet', meta: '32 HLD & LLD Topics', href: '/preparation/system-design-sheet', icon: Layers, color: 'text-rose-500' },
    { title: 'Role-Wise Sheets', meta: 'Frontend, Backend, SDE', href: '/preparation/role-wise', icon: Sparkles, color: 'text-cyan-500' },
    { title: 'Core CS Notes', meta: 'OS, DBMS, CN & OOPs', href: '/preparation/notes', icon: FileText, color: 'text-amber-500' },
    { title: 'HR & STAR Prep', meta: '100 Behavioral Qs', href: '/preparation/hr-questions', icon: MessageSquareQuote, color: 'text-purple-500' },
    { title: 'Cold Outreach Templates', meta: 'Referral & Recruiter Emails', href: '/preparation/cold-email-templets', icon: Mail, color: 'text-indigo-500' },
    { title: 'DSA Video Courses', meta: 'Striver & Free Playlists', href: '/preparation/dsa-playlists', icon: Youtube, color: 'text-red-500' },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfb] dark:bg-[#07090e] text-[#1a1a1a] dark:text-[#fdfdfd] p-4 sm:p-6 lg:p-10 font-inter transition-colors duration-200">
      <div className="max-w-[1300px] mx-auto space-y-10">

        {/* 1. Page Intro matching Variation 2 */}
        <section className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="space-y-2">
            <h1 className="font-serif-garamond text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950 dark:text-white leading-[1.05]">
              Preparation Dashboard
            </h1>
            <p className="text-sm sm:text-base text-[#6b7280] dark:text-zinc-400 font-normal max-w-2xl">
              Track your daily consistency, solved coding problems, and placement readiness.
            </p>
          </div>

          {/* Timeframe pill selector */}
          <div className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-black/[0.06] dark:border-white/[0.08] self-start sm:self-auto">
            {[
              { id: '7', label: '7D' },
              { id: '30', label: '30D' },
              { id: '90', label: '3M' },
              { id: '180', label: '6M' }
            ].map((tf) => (
              <button
                key={tf.id}
                onClick={() => setActiveTimeframe(tf.id as any)}
                className={`px-3 py-1 rounded-md text-xs font-mono-space transition-all cursor-pointer ${
                  activeTimeframe === tf.id
                    ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs font-bold'
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                {tf.label}
              </button>
            ))}
          </div>
        </section>

        {/* 2. Stats Grid (4 columns) matching Variation 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Stat 1: Total Solved */}
          <div className="p-6 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0c1017] shadow-xs flex flex-col justify-between">
            <span className="font-mono-space text-[11px] uppercase tracking-[0.12em] text-[#6b7280] dark:text-zinc-400">
              Total Solved
            </span>
            <div className="font-serif-garamond text-3xl sm:text-4xl font-bold text-zinc-950 dark:text-white my-2">
              {totalSolved > 0 ? totalSolved : 1}
            </div>
            <p className="text-xs text-[#16a34a] font-semibold flex items-center gap-1">
              <span>+3 this week</span>
            </p>
          </div>

          {/* Stat 2: Current Streak */}
          <div className="p-6 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0c1017] shadow-xs flex flex-col justify-between">
            <span className="font-mono-space text-[11px] uppercase tracking-[0.12em] text-[#6b7280] dark:text-zinc-400">
              Current Streak
            </span>
            <div className="font-serif-garamond text-3xl sm:text-4xl font-bold text-zinc-950 dark:text-white my-2">
              {streakDays > 0 ? streakDays : 7} Days
            </div>
            <p className="text-xs text-[#6b7280] dark:text-zinc-400">
              Active streak
            </p>
          </div>

          {/* Stat 3: Problems */}
          <div className="p-6 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0c1017] shadow-xs flex flex-col justify-between">
            <span className="font-mono-space text-[11px] uppercase tracking-[0.12em] text-[#6b7280] dark:text-zinc-400">
              Problems
            </span>
            <div className="font-serif-garamond text-3xl sm:text-4xl font-bold text-zinc-950 dark:text-white my-2">
              2,500+
            </div>
            <p className="text-xs text-[#6b7280] dark:text-zinc-400">
              Across 45 companies
            </p>
          </div>

          {/* Stat 4: Readiness (Signature Purple Card) */}
          <div className="p-6 rounded-xl border border-[#ddd6fe] dark:border-[#7c3aed]/30 bg-[#f5f3ff] dark:bg-[#7c3aed]/10 shadow-xs flex flex-col justify-between">
            <span className="font-mono-space text-[11px] uppercase tracking-[0.12em] text-[#6d28d9] dark:text-[#a78bfa]">
              Readiness
            </span>
            <div className="font-serif-garamond text-3xl sm:text-4xl font-bold text-[#7c3aed] dark:text-[#c4b5fd] my-2">
              {readinessPct}%
            </div>
            <p className="text-xs text-[#7c3aed] dark:text-[#a78bfa] font-semibold">
              Placement ready
            </p>
          </div>
        </div>

        {/* 3. Data Grid: Consistency Calendar & Skill Analysis matching Variation 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">

          {/* Left Panel: Consistency Calendar */}
          <div className="p-6 sm:p-8 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0c1017] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-baseline justify-between mb-6 pb-2 border-b border-black/[0.04] dark:border-white/[0.05]">
                <h3 className="font-serif-garamond text-xl sm:text-2xl font-semibold text-zinc-950 dark:text-white">
                  Consistency Calendar
                </h3>
                <span className="font-mono-space text-xs text-[#6b7280] dark:text-zinc-400 uppercase tracking-widest">
                  September 2026
                </span>
              </div>

              {/* 7-column Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((dayHeader, idx) => (
                  <div
                    key={`${dayHeader}-${idx}`}
                    className="font-mono-space text-[11px] font-bold uppercase tracking-wider text-[#6b7280] dark:text-zinc-500 text-center py-1"
                  >
                    {dayHeader}
                  </div>
                ))}

                {/* September 2026 starts on Tuesday (2 offset empty cells: Sun, Mon) */}
                <div className="aspect-square rounded-md bg-transparent" />
                <div className="aspect-square rounded-md bg-transparent" />

                {/* Days 1 through 30 */}
                {daysInMonth.map((day) => {
                  const isActive = activeStreakDays.includes(day);
                  const isSelected = selectedDay === day;

                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`aspect-square rounded-md flex items-center justify-center text-xs transition-all cursor-pointer select-none ${
                        isActive
                          ? 'bg-[#dcfce7] dark:bg-emerald-950/60 text-[#166534] dark:text-emerald-300 font-bold border border-[#bbf7d0] dark:border-emerald-700/60 shadow-xs'
                          : day === currentDay
                          ? 'bg-zinc-200/80 dark:bg-zinc-800 text-zinc-950 dark:text-white font-semibold'
                          : day < currentDay
                          ? 'bg-[#f7f7f7] dark:bg-zinc-900/60 text-[#6b7280] dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800'
                          : 'bg-[#fafafa] dark:bg-zinc-900/30 text-zinc-400/80 dark:text-zinc-600'
                      } ${isSelected ? 'ring-2 ring-blue-500/50' : ''}`}
                      title={isActive ? `Day ${day}: Coding session completed!` : `Day ${day}`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Target reminder note */}
            <div className="mt-6 pt-4 border-t border-black/[0.04] dark:border-white/[0.05] flex items-center justify-between text-xs text-[#6b7280] dark:text-zinc-400 font-mono-space">
              <span>Target: 2 problems / day</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Streak on track
              </span>
            </div>
          </div>

          {/* Right Panel: Skill Analysis */}
          <div className="p-6 sm:p-8 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0c1017] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-baseline justify-between mb-6 pb-2 border-b border-black/[0.04] dark:border-white/[0.05]">
                <h3 className="font-serif-garamond text-xl sm:text-2xl font-semibold text-zinc-950 dark:text-white">
                  Skill Analysis
                </h3>
                <span className="font-mono-space text-xs text-[#6b7280] dark:text-zinc-400">
                  Target 4
                </span>
              </div>

              {/* Skill Bars matching Variation 2 */}
              <div className="space-y-5">
                {skillCategories.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-zinc-900 dark:text-zinc-200">
                        {skill.name}
                      </span>
                      <span className="font-mono-space text-zinc-500 dark:text-zinc-400">
                        {skill.solved}/{skill.total}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-[#f0f0f0] dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#2563eb] dark:bg-[#38bdf8] rounded-full transition-all duration-500"
                        style={{ width: `${Math.max(skill.pct, Math.round((skill.solved / skill.total) * 100))}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/preparation/dsa-sheets"
              onClick={(e) => handleNav(e, '/preparation/dsa-sheets')}
              className="mt-6 pt-4 border-t border-black/[0.04] dark:border-white/[0.05] flex items-center justify-between text-xs font-semibold text-[#2563eb] dark:text-blue-400 hover:underline cursor-pointer group"
            >
              <span>Solve more problems to level up</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 4. Primary Resource Grid (#01 - #04) matching Variation 2 */}
        <div className="space-y-4">
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif-garamond text-2xl font-semibold text-zinc-950 dark:text-white">
              Essential Tools
            </h2>
            <span className="font-mono-space text-xs text-[#6b7280] dark:text-zinc-400 uppercase tracking-wider">
              High-Yield
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {primaryResourceCards.map((res) => (
              <a
                key={res.id}
                href={res.href}
                onClick={(e) => handleNav(e, res.href)}
                className="group p-6 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0c1017] text-inherit no-underline transition-all duration-300 hover:border-[#2563eb] dark:hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono-space text-xs font-bold text-[#2563eb] dark:text-[#38bdf8] opacity-80 mb-3">
                    {res.id}
                  </div>
                  <h3 className="font-inter font-semibold text-base text-zinc-950 dark:text-white mb-1 group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] transition-colors">
                    {res.title}
                  </h3>
                  <p className="font-mono-space text-xs text-[#6b7280] dark:text-zinc-400 mb-2">
                    {res.meta}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                    {res.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between text-xs font-semibold text-[#2563eb] dark:text-blue-400 opacity-90 group-hover:opacity-100">
                  <span>Open Resource</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 5. Complete Curated Resource Library */}
        <div className="space-y-4 pt-2">
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif-garamond text-xl sm:text-2xl font-semibold text-zinc-950 dark:text-white">
              Preparation Library
            </h2>
            <span className="font-mono-space text-xs text-[#6b7280] dark:text-zinc-400">
              8 More Curated Tracks
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allCuratedTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <a
                  key={tool.title}
                  href={tool.href}
                  onClick={(e) => handleNav(e, tool.href)}
                  className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white/70 dark:bg-[#0c1017]/70 hover:border-black/[0.15] dark:hover:border-white/[0.15] transition-all flex items-center gap-3.5 group cursor-pointer"
                >
                  <div className={`w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center ${tool.color} shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-[#2563eb] dark:group-hover:text-blue-400 transition-colors truncate">
                      {tool.title}
                    </h4>
                    <p className="text-[11px] text-[#6b7280] dark:text-zinc-400 font-mono-space truncate">
                      {tool.meta}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
