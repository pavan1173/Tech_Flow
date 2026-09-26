import React, { useState } from 'react';
import { coldEmailTemplatesData } from '../data/common';
import { Mail, Copy, Check, Sparkles, Send, UserCheck, ChevronDown, CheckCircle2 } from 'lucide-react';

interface ColdEmailPageProps {
  navigate: (to: string) => void;
}

export const ColdEmailPage: React.FC<ColdEmailPageProps> = () => {
  const categories = coldEmailTemplatesData?.categories || [];
  const [activeCategoryTitle, setActiveCategoryTitle] = useState<string>(categories[0]?.title || 'Tech Stack Specific');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<any | null>(null);

  const currentCatObj = categories.find((c: any) => c.title === activeCategoryTitle) || categories[0];
  const templates = currentCatObj?.templates || [];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getTemplateBody = (tmpl: any) => {
    const roleName = tmpl.role || tmpl.title.split('-')[0].trim();
    return {
      subject: `[Role: ${roleName}] Referral Request for [Company Name] - [Your Name]`,
      whenToSend: 'Tuesday - Thursday, 9:00 AM - 11:30 AM',
      body: `Hi [Name],

I hope this message finds you well! I'm [Your Name], a passionate ${roleName} with hands-on experience building scalable applications.

I came across the ${roleName} opening at [Company Name] (Job ID: [Job ID if available]) and was very excited about your engineering team's recent work on [specific product feature or technology].

A quick summary of my core background:
• Strong foundations in modern architectures, state management, and optimized APIs
• Proven track record with clean code, testing, and production deployment
• Key Projects: [Project 1: Live Demo Link] | [Project 2: GitHub Repository]

I have attached my resume for your review: [Google Drive Resume Link]

If my background aligns with what the team is looking for, I would be immensely grateful for a referral. I'd also love to learn about your journey at [Company Name] if you have 10 minutes for a brief chat.

Thank you very much for your time and consideration!

Best regards,
[Your Name]
[LinkedIn Profile Link] · [Portfolio Link] · [GitHub Profile]`,
      followUp: `Hi [Name],

I hope you're having a productive week! I wanted to briefly follow up on my previous message regarding the ${roleName} role at [Company Name].

I completely understand you might be occupied, so no worries if you missed it. I remain very enthusiastic about contributing to the team.

Thank you once again for your time!

Best regards,
[Your Name]`
    };
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 font-lexend">
      {/* Header */}
      <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff] mb-2">
          <Mail className="w-3.5 h-3.5" />
          High-Conversion Cold Outreach
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
          Cold Email &amp; Referral Templates (2026-27)
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          High-response outreach templates engineered for software engineers, interns, and freshers. Reach recruiters, engineering managers, and alumni on LinkedIn and email with proven high-conversion structures.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat: any) => (
          <button
            key={cat.title}
            onClick={() => setActiveCategoryTitle(cat.title)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeCategoryTitle === cat.title
                ? 'bg-[#6C47FF] text-white shadow-md shadow-indigo-500/20'
                : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-700/80'
            }`}
          >
            {cat.title} ({cat.templates?.length || 0})
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((tmpl: any, idx: number) => {
          const cardId = tmpl.id || `${activeCategoryTitle}-${idx}`;
          const isCopied = copiedId === cardId;
          const templateContent = getTemplateBody(tmpl);
          const fullCopyText = `Subject: ${templateContent.subject}\n\n${templateContent.body}`;

          return (
            <div
              key={cardId}
              className="p-6 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#6C47FF]/10 text-[#6C47FF] dark:text-[#9f85ff]">
                      {tmpl.role || 'Software Engineer'}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(cardId, fullCopyText)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                  {tmpl.title}
                </h3>

                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60">
                  <span className="text-zinc-400 font-sans font-bold select-none">Subject: </span>
                  {templateContent.subject}
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-zinc-950/80 border border-zinc-200/80 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans whitespace-pre-wrap">
                  {templateContent.body}
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800/80 text-[11px] text-zinc-400 flex items-center justify-between">
                <span>Best time: {templateContent.whenToSend}</span>
                <span className="text-emerald-500 font-semibold">15-25% Response Rate</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
