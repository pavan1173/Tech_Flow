import React, { useState, useMemo } from 'react';
import { coldEmailTemplatesCatalog, ColdEmailTemplate } from '../data/coldEmailTemplatesData';
import {
  ChevronRight,
  Search,
  Mail,
  Copy,
  Check,
  Sparkles,
  Send,
  UserCheck,
  CheckCircle2,
  Clock,
  ArrowLeft,
  SlidersHorizontal,
  FileText
} from 'lucide-react';

interface ColdEmailPageProps {
  templateSlug?: string;
  navigate: (to: string) => void;
}

export const ColdEmailPage: React.FC<ColdEmailPageProps> = ({ templateSlug, navigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedSubjectIdx, setCopiedSubjectIdx] = useState<number | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedFollowup, setCopiedFollowup] = useState(false);

  // Selected template for detail view
  const selectedTemplate = useMemo(() => {
    if (!templateSlug) return null;
    return coldEmailTemplatesCatalog.find((t) => t.slug === templateSlug) || null;
  }, [templateSlug]);

  // Form customizer state for detail view
  const [customForm, setCustomForm] = useState<any>(() => {
    return selectedTemplate ? { ...selectedTemplate.defaultValues } : {};
  });

  // Keep form in sync when template changes
  React.useEffect(() => {
    if (selectedTemplate) {
      setCustomForm({ ...selectedTemplate.defaultValues });
    }
  }, [selectedTemplate]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  const handleCopy = (text: string, type: 'subject' | 'email' | 'followup', idx?: number) => {
    navigator.clipboard.writeText(text);
    if (type === 'subject') {
      setCopiedSubjectIdx(idx ?? 0);
      setTimeout(() => setCopiedSubjectIdx(null), 2000);
    } else if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'followup') {
      setCopiedFollowup(true);
      setTimeout(() => setCopiedFollowup(false), 2000);
    }
  };

  // Filter templates in catalog
  const filteredTemplates = useMemo(() => {
    if (!searchQuery.trim()) return coldEmailTemplatesCatalog;
    const q = searchQuery.toLowerCase();
    return coldEmailTemplatesCatalog.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.role.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.shortDescription.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Group by category
  const techStackTemplates = filteredTemplates.filter((t) => t.category === 'Tech Stack Specific');
  const devopsTemplates = filteredTemplates.filter((t) => t.category === 'Cloud & DevOps');
  const dataAiTemplates = filteredTemplates.filter((t) => t.category === 'Data & AI/ML');

  const renderCard = (template: ColdEmailTemplate) => {
    const detailUrl = `/preparation/cold-email-templets/${template.slug}`;

    return (
      <a
        key={template.slug}
        href={detailUrl}
        onClick={(e) => handleNav(e, detailUrl)}
        className="group relative rounded-2xl bg-[#0c1017] border border-[#1b2230] hover:border-orange-500/50 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-0.5 cursor-pointer select-none"
      >
        <div className="space-y-3.5">
          {/* Top Row: Orange Mail Icon and Title matching screenshot */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#1a130e] border border-[#43230f] flex items-center justify-center p-2 text-[#f97316] shadow-sm shrink-0">
              <Mail className="w-5 h-5 stroke-[2]" />
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-orange-400 transition-colors leading-snug">
              {template.title}
            </h3>
          </div>

          {/* Short Description */}
          <p className="text-xs text-zinc-400 leading-relaxed font-normal">
            {template.shortDescription}
          </p>
        </div>

        {/* Bottom Tag matching screenshot */}
        <div className="pt-4 mt-4 border-t border-[#171e2c]">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20">
            {template.category}
          </span>
        </div>
      </a>
    );
  };

  // =========================================================================
  // VIEW 1: DETAIL VIEW (e.g. /preparation/cold-email-templets/mern-stack-referral)
  // =========================================================================
  if (selectedTemplate) {
    const liveBody = selectedTemplate.bodyTemplate(customForm);
    const liveFollowUp = selectedTemplate.followUpTemplate(customForm);

    return (
      <div className="min-h-screen bg-[#07090e] text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-6 max-w-7xl mx-auto">
        {/* Breadcrumb navigation */}
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <a
            href="/preparation"
            onClick={(e) => handleNav(e, '/preparation')}
            className="hover:text-white transition-colors"
          >
            Preparation
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
          <a
            href="/preparation/cold-email-templets"
            onClick={(e) => handleNav(e, '/preparation/cold-email-templets')}
            className="hover:text-white transition-colors"
          >
            Cold Email Templates
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
          <span className="text-white font-medium truncate">{selectedTemplate.title}</span>
        </div>

        {/* Header Title & Tag */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20">
              {selectedTemplate.category}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            {selectedTemplate.title}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal max-w-4xl leading-relaxed">
            {selectedTemplate.shortDescription} Customize your details below to generate a tailored, high-converting outreach message in real time.
          </p>
        </div>

        {/* Subject Lines Section */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0c1017] border border-[#1b2230] space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-400" />
              <span>Recommended Subject Lines (Pick One)</span>
            </h2>
            <span className="text-xs text-zinc-500 font-medium">1-Click Copy</span>
          </div>

          <div className="space-y-2.5">
            {selectedTemplate.subjectLines.map((subj, idx) => {
              const formattedSubj = subj
                .replace('[Your Name]', customForm.yourName || '[Your Name]')
                .replace('[Company Name]', customForm.companyName || '[Company Name]')
                .replace('[Job ID]', customForm.jobId || '[Job ID]');

              const isCopied = copiedSubjectIdx === idx;

              return (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#07090e] border border-[#1f293d] hover:border-zinc-600 transition-colors"
                >
                  <div className="font-mono text-xs sm:text-sm text-zinc-200 truncate">
                    <span className="text-orange-400 font-bold mr-2">Option {idx + 1}:</span>
                    {formattedSubj}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(formattedSubj, 'subject', idx)}
                    className="shrink-0 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Form Customizer (Left) and Live Email Preview (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Form Customizer (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0c1017] border border-[#1b2230] space-y-4 shadow-sm">
              <div className="flex items-center gap-2 pb-3 border-b border-[#1b2230]">
                <SlidersHorizontal className="w-4 h-4 text-orange-400" />
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                  Personalize Email
                </h2>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-zinc-400 font-medium mb-1">Your Full Name</label>
                  <input
                    type="text"
                    value={customForm.yourName || ''}
                    onChange={(e) => setCustomForm({ ...customForm, yourName: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3 py-2 rounded-xl bg-[#07090e] border border-[#1b2230] text-white text-xs focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-medium mb-1">Recipient Name / Title</label>
                  <input
                    type="text"
                    value={customForm.recipientName || ''}
                    onChange={(e) => setCustomForm({ ...customForm, recipientName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins or Engineering Lead"
                    className="w-full px-3 py-2 rounded-xl bg-[#07090e] border border-[#1b2230] text-white text-xs focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-medium mb-1">Target Company Name</label>
                  <input
                    type="text"
                    value={customForm.companyName || ''}
                    onChange={(e) => setCustomForm({ ...customForm, companyName: e.target.value })}
                    placeholder="e.g. Stripe, Meta, Razorpay"
                    className="w-full px-3 py-2 rounded-xl bg-[#07090e] border border-[#1b2230] text-white text-xs focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-medium mb-1">Job ID / Requisition # (Optional)</label>
                  <input
                    type="text"
                    value={customForm.jobId || ''}
                    onChange={(e) => setCustomForm({ ...customForm, jobId: e.target.value })}
                    placeholder="e.g. REQ-98214"
                    className="w-full px-3 py-2 rounded-xl bg-[#07090e] border border-[#1b2230] text-white text-xs focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-medium mb-1">Primary Project Highlight</label>
                  <input
                    type="text"
                    value={customForm.project1 || ''}
                    onChange={(e) => setCustomForm({ ...customForm, project1: e.target.value })}
                    placeholder="Project with metrics & demo link"
                    className="w-full px-3 py-2 rounded-xl bg-[#07090e] border border-[#1b2230] text-white text-xs focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-medium mb-1">Portfolio & GitHub Links</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={customForm.portfolioUrl || ''}
                      onChange={(e) => setCustomForm({ ...customForm, portfolioUrl: e.target.value })}
                      placeholder="Portfolio URL"
                      className="w-full px-3 py-2 rounded-xl bg-[#07090e] border border-[#1b2230] text-white text-xs focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                    <input
                      type="text"
                      value={customForm.githubUrl || ''}
                      onChange={(e) => setCustomForm({ ...customForm, githubUrl: e.target.value })}
                      placeholder="GitHub URL"
                      className="w-full px-3 py-2 rounded-xl bg-[#07090e] border border-[#1b2230] text-white text-xs focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tips Card */}
            <div className="p-5 rounded-2xl bg-[#0c1017] border border-[#1b2230] space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Cold Outreach Best Practices</span>
              </div>
              <ul className="text-xs text-zinc-400 space-y-2 list-disc list-inside leading-relaxed">
                {selectedTemplate.proTips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Live Email Preview (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0c1017] border border-[#1b2230] flex flex-col justify-between space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#1b2230]">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-orange-400" />
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                    Generated Cold Email
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(liveBody, 'email')}
                  className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                      <span className="text-emerald-700">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Copy Full Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Email Content Box */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#07090e] border border-[#1b2230] text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans whitespace-pre-wrap shadow-inner selection:bg-orange-500/30">
                {liveBody}
              </div>
            </div>

            {/* Strategic Follow-Up Sequence */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0c1017] border border-[#1b2230] space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#1b2230]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                    Follow-Up Sequence (Send after 3-4 days)
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(liveFollowUp, 'followup')}
                  className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedFollowup ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Follow-Up</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#07090e] border border-[#1b2230] text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans whitespace-pre-wrap">
                {liveFollowUp}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: MAIN CATALOG VIEW (MATCHING USER SCREENSHOT EXACTLY)
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-8 max-w-7xl mx-auto">
      {/* Breadcrumb matching screenshot */}
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-white transition-colors"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
        <span className="text-white font-medium">Cold Email Templates</span>
      </div>

      {/* Header Section matching screenshot */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          Cold Email Templates
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 font-normal">
          Professional email templates for job referrals, networking, and career opportunities
        </p>
      </div>

      {/* Search Bar matching screenshot */}
      <div className="relative max-w-lg">
        <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search templates (e.g., MERN Stack, Referral, Startup...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-2.5 sm:py-3 rounded-2xl bg-[#0c1017] border border-[#1b2230] text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
        />
      </div>

      {/* Tech Stack Specific Section matching screenshot */}
      {techStackTemplates.length > 0 && (
        <div className="space-y-4 pt-2">
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Tech Stack Specific
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {techStackTemplates.map(renderCard)}
          </div>
        </div>
      )}

      {/* Cloud & DevOps Section matching screenshot */}
      {devopsTemplates.length > 0 && (
        <div className="space-y-4 pt-4">
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Cloud & DevOps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {devopsTemplates.map(renderCard)}
          </div>
        </div>
      )}

      {/* Data & AI/ML Section matching screenshot */}
      {dataAiTemplates.length > 0 && (
        <div className="space-y-4 pt-4">
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Data & AI/ML
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {dataAiTemplates.map(renderCard)}
          </div>
        </div>
      )}
    </div>
  );
};
