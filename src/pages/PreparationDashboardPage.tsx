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
  Calendar
} from 'lucide-react';

interface PrepDashboardProps {
  navigate: (to: string) => void;
}

export const PreparationDashboardPage: React.FC<PrepDashboardProps> = ({ navigate }) => {
  const { totalSolved, streakDays, activityDates } = useProgress();
  const [activeTimeframe, setActiveTimeframe] = useState<'7' | '30' | '90' | '180'>('30');

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  // Calendar dates matrix for September 2026
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
  const currentDay = 26; // 2026-09-26

  const categories = [
    { name: 'Arrays & Two Pointers', total: 65, solved: Math.min(65, Math.floor(totalSolved * 0.3) + 8) },
    { name: 'Dynamic Programming', total: 50, solved: Math.min(50, Math.floor(totalSolved * 0.2) + 3) },
    { name: 'Trees & Graphs', total: 45, solved: Math.min(45, Math.floor(totalSolved * 0.15) + 4) },
    { name: 'SQL & Database Queries', total: 110, solved: Math.min(110, Math.floor(totalSolved * 0.2) + 12) },
    { name: 'System Design (HLD/LLD)', total: 32, solved: Math.min(32, Math.floor(totalSolved * 0.1) + 2) },
    { name: 'HR & Behavioral', total: 100, solved: Math.min(100, Math.floor(totalSolved * 0.15) + 6) },
  ];

  const quickLinks = [
    { title: '20 Essential DSA Patterns', tag: 'High-Yield', count: '34 Sections', href: '/preparation/20-essential-dsa-patterns', icon: Sparkles, color: 'text-amber-500' },
    { title: 'Company Wise DSA Sheet', tag: 'FAANG & MNCs', count: '45+ Companies', href: '/preparation/company-wise-dsa-sheet', icon: Building2, color: 'text-violet-500' },
    { title: 'Top 110 SQL Interview Queries', tag: 'Cheat Sheet', count: '110 Queries', href: '/preparation/sql-sheet', icon: Database, color: 'text-blue-500' },
    { title: 'Package Wise DSA Sheet', tag: '3 LPA to 60+ LPA', count: '200 Problems', href: '/preparation/package-wise-dsa-sheet', icon: Target, color: 'text-emerald-500' },
    { title: 'System Design Sheet', tag: 'HLD & LLD', count: '32 Topics', href: '/preparation/system-design-sheet', icon: Layers, color: 'text-rose-500' },
    { title: 'Role-Wise Interview Questions', tag: 'Role Focused', count: '4 Profiles', href: '/preparation/role-wise', icon: Code, color: 'text-cyan-500' },
    { title: 'HR & Behavioral Questions', tag: 'STAR Method', count: '100 Questions', href: '/preparation/hr-questions', icon: MessageSquareQuote, color: 'text-purple-500' },
    { title: 'Cold Email & Outreach Templates', tag: 'Job Referral', count: '11 Categories', href: '/preparation/cold-email-templets', icon: Mail, color: 'text-amber-500' },
    { title: 'Computer Science Notes', tag: 'Core CS PDFs', count: '26 Notes', href: '/preparation/notes', icon: FileText, color: 'text-emerald-500' },
    { title: 'ATS Resume Templates', tag: 'LaTeX & Docs', count: '6 Templates', href: '/preparation/resume-templates', icon: Scroll, color: 'text-indigo-500' },
    { title: 'Curated Video Playlists', tag: 'YouTube Courses', count: '3 Streams', href: '/preparation/dsa-playlists', icon: Youtube, color: 'text-red-500' },
    { title: 'Most Asked Technical Questions', tag: 'High Recurrence', count: '6 Domains', href: '/preparation/most-asked-questions', icon: HelpCircle, color: 'text-teal-500' },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8 font-lexend">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
            Preparation Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Track your daily consistency, solved coding problems, and placement readiness.
          </p>
        </div>

        {/* Timeframe pill selector */}
        <div className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-xl border border-zinc-200 dark:border-zinc-700/60 self-start sm:self-auto">
          {[
            { id: '7', label: '7 Days' },
            { id: '30', label: '30 Days' },
            { id: '90', label: '3 Months' },
            { id: '180', label: '6 Months' }
          ].map((tf) => (
            <button
              key={tf.id}
              onClick={() => setActiveTimeframe(tf.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTimeframe === tf.id
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              {tf.label}
            </button>
          ))}
        </div>
      </div>

      {/* Top 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-5 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Total Solved</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            {totalSolved}
          </div>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1">
            <span className="text-emerald-500 font-semibold">+3 this week</span> · Keep it up
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Current Streak</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            {streakDays} <span className="text-base font-normal text-zinc-400">Days</span>
          </div>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
            Active streak recorded on TeachFlow
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Total Practice Problems</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
              <Code className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            2,500+
          </div>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
            Across 45 companies &amp; 7 top sheets
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Interview Readiness</span>
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-500 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-[#6C47FF] dark:text-[#9f85ff]">
            {Math.min(95, Math.max(12, Math.floor(totalSolved * 1.5) + 35))}%
          </div>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
            Based on pattern &amp; company coverage
          </p>
        </div>
      </div>

      {/* Middle Row: Streak Heatmap & Category Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Streak Heatmap Calendar */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#6C47FF]" />
                <h3 className="font-bold text-sm text-zinc-900 dark:text-white">
                  Consistency Calendar (September 2026)
                </h3>
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {streakDays} Days Active
              </span>
            </div>

            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
              Green tiles indicate daily coding activity and problem solving logs.
            </p>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-2 text-center text-xs">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                <div key={d} className="font-semibold text-zinc-400 pb-1">
                  {d}
                </div>
              ))}
              {/* Empty offset for Tuesday start */}
              <div />
              <div />
              {daysInMonth.map((day) => {
                const isActive = day === currentDay || day === currentDay - 1 || day === currentDay - 2;
                return (
                  <div
                    key={day}
                    className={`h-9 rounded-lg flex items-center justify-center font-medium text-xs transition-all ${
                      isActive
                        ? 'bg-emerald-500 text-white font-bold shadow-xs'
                        : day < currentDay
                        ? 'bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                        : 'bg-zinc-100 dark:bg-zinc-900/40 text-zinc-400'
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
            <span>Daily target: Solve at least 2 problems/day</span>
            <span className="text-emerald-500 font-semibold">Streak on track</span>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="p-6 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-4 h-4 text-[#6C47FF]" />
              <h3 className="font-bold text-sm text-zinc-900 dark:text-white">
                Skill Analysis Breakdown
              </h3>
            </div>

            <div className="space-y-4">
              {categories.map((cat) => {
                const pct = Math.round((cat.solved / cat.total) * 100);
                return (
                  <div key={cat.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-zinc-700 dark:text-zinc-300">{cat.name}</span>
                      <span className="text-zinc-500">{cat.solved} / {cat.total}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#6C47FF] transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <a
            href="/preparation/dsa-sheets"
            onClick={(e) => handleNav(e, '/preparation/dsa-sheets')}
            className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-[#6C47FF] dark:text-[#9f85ff] hover:underline"
          >
            <span>Solve more problems to level up</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Quick Launchpad to all 12 Prep Tools */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
            Preparation Library &amp; Tools
          </h2>
          <span className="text-xs text-zinc-500">12 Curated Resources</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="group p-5 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-0.5 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                      {item.count}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-[#6C47FF] dark:group-hover:text-[#9f85ff] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {item.tag}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs text-[#6C47FF] dark:text-[#9f85ff] font-semibold">
                  <span>Open Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
