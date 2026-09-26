import React from 'react';
import { resumeTemplatesData } from '../data/common';
import { Scroll, ExternalLink, CheckCircle, AlertTriangle, Download, Sparkles } from 'lucide-react';

interface ResumeTemplatesPageProps {
  navigate: (to: string) => void;
}

export const ResumeTemplatesPage: React.FC<ResumeTemplatesPageProps> = () => {
  const templates = resumeTemplatesData?.templates || resumeTemplatesData || [];

  const defaultTemplates = [
    {
      title: 'Jake\x27s Resume (Overleaf / LaTeX)',
      desc: 'The single most popular software engineering resume template on GitHub and Overleaf. Clean single-column layout with 99+ ATS score.',
      atsScore: 99,
      type: 'LaTeX / Overleaf',
      link: 'https://www.overleaf.com/latex/templates/jakes-resume/syzsqbzwffcs'
    },
    {
      title: 'FAANG Clean SDE Template (Google Docs)',
      desc: 'Minimalist Google Doc format designed for quick customization. Optimized font metrics, clear bullet hierarchy, and bulletproof PDF export.',
      atsScore: 97,
      type: 'Google Docs',
      link: 'https://docs.google.com/document/d/14J8V9r-N839kM2bS8kZ_0W2G9_6Wf_5R1Gq5aF7_L3s/copy'
    },
    {
      title: 'Deedy Resume (Two-Column LaTeX)',
      desc: 'High-density two-column template perfect for engineers with multiple projects, publications, and competitive programming achievements.',
      atsScore: 92,
      type: 'LaTeX',
      link: 'https://www.overleaf.com/latex/templates/deedy-cv/bjryvfsjdyxz'
    },
    {
      title: 'Modern Minimal Tech Resume (Figma)',
      desc: 'Sleek design system layout for Frontend & Product-minded engineers who want a modern aesthetic while remaining 100% parseable by ATS bots.',
      atsScore: 94,
      type: 'Figma Community',
      link: 'https://www.figma.com/community'
    }
  ];

  const displayTemplates = templates.length > 0 ? templates : defaultTemplates;

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8 font-lexend">
      {/* Header */}
      <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff] mb-2">
          <Scroll className="w-3.5 h-3.5" />
          ATS-Compliant Resume Formats
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
          Free Resume Templates for Tech Interviews (2026-27)
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          Battle-tested ATS-friendly resume templates used by engineers to land interviews at Google, Meta, Amazon, Microsoft, and high-growth unicorn startups.
        </p>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayTemplates.map((t: any, idx: number) => (
          <div
            key={t.title || idx}
            className="p-6 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#6C47FF]/10 text-[#6C47FF] dark:text-[#9f85ff]">
                  {t.type || 'LaTeX / Docs'}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  ATS Score {t.atsScore || 98}%
                </span>
              </div>

              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                {t.title}
              </h2>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {t.desc || t.description || 'Engineered with clean ATS hierarchy, metric-focused bullet points, and single-page layout standards.'}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between">
              <span className="text-xs text-zinc-500">Free Open Source</span>
              <a
                href={t.link || 'https://www.overleaf.com/latex/templates/jakes-resume/syzsqbzwffcs'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#6C47FF] hover:bg-[#5b37ea] text-white text-xs font-semibold transition-colors"
              >
                <span>Use Template</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Engineering Resume Guidelines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
            <CheckCircle className="w-4 h-4" />
            <span>Resume Dos (What Recruiters Want)</span>
          </div>
          <ul className="text-xs text-zinc-600 dark:text-zinc-300 space-y-2 list-disc list-inside leading-relaxed">
            <li>Quantify results using Google's X-Y-Z formula: "Accomplished [X] as measured by [Y] by doing [Z]"</li>
            <li>Highlight live deployed links and GitHub repositories for all personal projects</li>
            <li>Include exact tech stack keywords (React, TypeScript, Docker, Redis, Postgres)</li>
            <li>Keep length strictly to 1 page for engineers under 5 years of experience</li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-rose-500 font-bold text-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>Resume Don'ts (Avoid Automatic Rejection)</span>
          </div>
          <ul className="text-xs text-zinc-600 dark:text-zinc-300 space-y-2 list-disc list-inside leading-relaxed">
            <li>Never use rating bars or skill progress meters (e.g. "Python 4/5 stars")</li>
            <li>Do not include your photo, address, or marital status for US/global tech roles</li>
            <li>Avoid complex graphic icons, multi-column tables, or un-parseable canvas graphics</li>
            <li>Don't use generic verbs like "worked on" or "helped with"; use strong action verbs like "Architected", "Engineered", "Reduced", "Optimized"</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
