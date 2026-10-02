import React from 'react';
import { Sparkles, ArrowRight, Heart, Users, Target, ShieldCheck, Compass, Code, Layers, Building2, Database, FileText, Mail, CheckCircle2, Award } from 'lucide-react';
import { DeveloperProfileCard } from '../components/DeveloperProfileCard';

interface AboutPageProps {
  navigate: (to: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  const appPillars = [
    {
      title: '95+ Developer Roadmaps',
      desc: 'Interactive step-by-step career blueprints for Frontend, Backend, AI Engineering, DevOps, Cloud, and mobile stacks.',
      icon: Compass,
      color: 'text-blue-500 bg-blue-500/10'
    },
    {
      title: 'Curated Creator DSA Sheets',
      desc: "Practice with sheets from Striver (SDE & A2Z), Love Babbar 450, Blind 75, NeetCode 150, Fraz, and Apna College in one unified interface.",
      icon: Code,
      color: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      title: '20 Essential DSA Patterns',
      desc: 'Master the core algorithmic building blocks: Sliding Window, Two Pointers, Monotonic Stack, Two Heaps, Tree BFS/DFS, and Dynamic Programming.',
      icon: Layers,
      color: 'text-amber-500 bg-amber-500/10'
    },
    {
      title: 'Company & Package-Wise Sets',
      desc: 'Targeted preparation for 45+ top tech MNCs (Google, Amazon, Microsoft, Meta) and salary tracks ranging from 3 LPA to 60+ LPA.',
      icon: Building2,
      color: 'text-purple-500 bg-purple-500/10'
    },
    {
      title: 'System Design & 110 SQL Queries',
      desc: 'High-yield HLD/LLD architectures (Rate Limiter, URL Shortener, Uber) and 110 real interview SQL queries with explanations.',
      icon: Database,
      color: 'text-cyan-500 bg-cyan-500/10'
    },
    {
      title: 'Interview & Career Accelerator',
      desc: 'Core CS notes (OS, DBMS, CN, OOPs), 100+ HR STAR questions, referral cold email templates, and 99% ATS-optimized resume templates.',
      icon: FileText,
      color: 'text-rose-500 bg-rose-500/10'
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-6xl mx-auto space-y-16 font-sans">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto pt-6 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6C47FF]/10 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff] border border-[#6C47FF]/20">
          <Sparkles className="w-3.5 h-3.5" />
          About HackPath
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white leading-tight tracking-tight">
          Democratizing Tech Placement Preparation for Everyone
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          HackPath is a free, modern developer ecosystem designed to take you from foundational coding to offer letters at top product companies and global tech giants.
        </p>
      </div>

      {/* Developer Profile Section */}
      <section className="space-y-6">
        <div className="text-center md:text-left space-y-1">
          <h2 className="text-xl font-bold text-zinc-950 dark:text-white flex items-center justify-center md:justify-start gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <span>Meet the Developer &amp; Creator</span>
          </h2>
          <p className="text-xs text-zinc-500">
            The visionary engineer and educator behind the HackPath platform
          </p>
        </div>

        <DeveloperProfileCard navigate={navigate} />
      </section>

      {/* What is HackPath? Detailed Application Overview */}
      <section className="p-8 sm:p-12 rounded-3xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
            APPLICATION ARCHITECTURE &amp; SCOPE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white">
            Everything You Need to Crack Any Tech Interview
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
            Instead of jumping between dozens of tabs, scattered spreadsheets, and paid courses, HackPath brings together all premier interview preparation assets into one fast, dark-mode native web application.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {appPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-xs"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${pillar.color}`}>
                <pillar.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-zinc-950 dark:text-white">
                {pillar.title}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Over 100,000+ active learners worldwide</span>
          </div>

          <a
            href="/preparation"
            onClick={(e) => handleNav(e, '/preparation')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            <span>Explore Preparation Hub</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Core Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-zinc-950 dark:text-white">
            100% Free Forever
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Essential interview prep materials, company sheets, and roadmaps are freely accessible to every aspiring engineer without paywalls.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-zinc-950 dark:text-white">
            Data-Backed Curation
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Every problem, SQL query, and design pattern is compiled directly from candidate interview experiences and verified online assessments.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-zinc-950 dark:text-white">
            Community Driven
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Led by developer Pavan Kumar (@tech_by.pavan) with thousands of engineers sharing real-time hiring updates and placement guidance.
          </p>
        </div>
      </section>
    </div>
  );
};

