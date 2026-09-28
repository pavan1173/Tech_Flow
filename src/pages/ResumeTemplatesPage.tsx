import React, { useState } from 'react';
import { resumeTemplatesList, ResumeTemplate } from '../data/resumeTemplatesData';
import {
  ChevronRight,
  Eye,
  Download,
  X,
  Copy,
  Check,
  ExternalLink,
  FileCode,
  FileText,
  Sparkles,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface ResumeTemplatesPageProps {
  navigate: (to: string) => void;
}

export const ResumeTemplatesPage: React.FC<ResumeTemplatesPageProps> = ({ navigate }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<ResumeTemplate | null>(null);
  const [copiedLatex, setCopiedLatex] = useState(false);
  const [activeTab, setActiveTab] = useState<'visual' | 'latex'>('visual');

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  const handleDownload = (template: ResumeTemplate) => {
    if (template.googleDocsUrl && template.type === 'Google Docs') {
      window.open(template.googleDocsUrl, '_blank');
      return;
    }

    // Trigger file download of LaTeX source
    const blob = new Blob([template.latexSource], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = template.downloadFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyLatexToClipboard = (source: string) => {
    navigator.clipboard.writeText(source);
    setCopiedLatex(true);
    setTimeout(() => setCopiedLatex(false), 2000);
  };

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
        <span className="text-white font-medium">Resume Templates</span>
      </div>

      {/* Header Section matching screenshot */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          Resume Templates
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 font-normal max-w-4xl leading-relaxed">
          Stand out from the crowd with these battle-tested, ATS-friendly resume templates. Preview and download the exact templates used to land offers at FAANG and top tech companies.
        </p>
      </div>

      {/* Resume Templates Grid (3 Columns matching screenshot) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {resumeTemplatesList.map((tpl) => (
          <div
            key={tpl.id}
            className="group rounded-2xl bg-[#0c1017] border border-[#1b2230] p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:border-zinc-600 hover:shadow-xl hover:shadow-black/40"
          >
            {/* White Paper Document Mockup */}
            <div
              onClick={() => {
                setSelectedTemplate(tpl);
                setActiveTab('visual');
              }}
              className="relative aspect-[1/1.25] sm:aspect-[1/1.2] w-full bg-white text-zinc-900 rounded-xl p-4 sm:p-5 overflow-hidden shadow-md cursor-pointer select-none border border-zinc-300 transform transition-transform group-hover:scale-[1.01]"
            >
              {/* Scaled resume visual */}
              <div className="h-full flex flex-col justify-between text-[7px] sm:text-[8px] leading-[1.3] font-serif">
                {/* Header */}
                <div className="text-center border-b border-zinc-800 pb-1.5 mb-1.5">
                  <div className="font-bold text-[11px] sm:text-[13px] tracking-wide text-zinc-950 uppercase">
                    {tpl.previewData.name}
                  </div>
                  <div className="text-[6.5px] sm:text-[7.5px] text-zinc-600 mt-0.5 font-sans truncate">
                    {tpl.previewData.contact.join(' • ')}
                  </div>
                </div>

                {/* Body Content */}
                <div className="space-y-1.5 flex-1 overflow-hidden">
                  {/* Education */}
                  {tpl.previewData.education?.length > 0 && (
                    <div>
                      <div className="font-bold text-[7.5px] sm:text-[8.5px] uppercase border-b border-zinc-300 pb-0.5 text-zinc-900">
                        Education
                      </div>
                      <div className="mt-0.5 flex justify-between font-bold text-zinc-800">
                        <span className="truncate pr-1">{tpl.previewData.education[0].school}</span>
                        <span className="text-zinc-500 shrink-0">{tpl.previewData.education[0].dates}</span>
                      </div>
                      <div className="text-zinc-600 text-[6.5px] sm:text-[7.5px] truncate">
                        {tpl.previewData.education[0].degree}
                      </div>
                    </div>
                  )}

                  {/* Experience */}
                  {tpl.previewData.experience?.length > 0 && (
                    <div>
                      <div className="font-bold text-[7.5px] sm:text-[8.5px] uppercase border-b border-zinc-300 pb-0.5 text-zinc-900">
                        Experience
                      </div>
                      {tpl.previewData.experience.slice(0, 2).map((exp, i) => (
                        <div key={i} className="mt-1">
                          <div className="flex justify-between font-bold text-zinc-800">
                            <span className="truncate pr-1">{exp.company} – {exp.title}</span>
                            <span className="text-zinc-500 shrink-0">{exp.dates}</span>
                          </div>
                          <ul className="list-disc list-inside text-zinc-600 text-[6px] sm:text-[7px] space-y-0.5 mt-0.5">
                            {exp.bullets.slice(0, 2).map((b, bi) => (
                              <li key={bi} className="line-clamp-1">
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skills */}
                  {tpl.previewData.skills?.length > 0 && (
                    <div>
                      <div className="font-bold text-[7.5px] sm:text-[8.5px] uppercase border-b border-zinc-300 pb-0.5 text-zinc-900">
                        Technical Skills
                      </div>
                      <div className="text-[6.5px] sm:text-[7.5px] text-zinc-700 mt-0.5 line-clamp-2">
                        <span className="font-bold">{tpl.previewData.skills[0].category}: </span>
                        {tpl.previewData.skills[0].items}
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-lg bg-zinc-950/90 text-white text-[11px] font-medium font-sans flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-white" />
                    <span>Click to Preview</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Template Title matching screenshot */}
            <div className="mt-4 mb-4">
              <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-zinc-200 transition-colors">
                {tpl.title}
              </h3>
            </div>

            {/* Action Buttons matching screenshot */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setSelectedTemplate(tpl);
                  setActiveTab('visual');
                }}
                className="w-full py-2 px-3 rounded-xl bg-[#121824] hover:bg-[#1a2334] border border-[#222c3d] text-zinc-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview</span>
              </button>

              <button
                type="button"
                onClick={() => handleDownload(tpl)}
                className="w-full py-2 px-3 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
              >
                <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Engineering Resume Best Practices Bar */}
      <div className="p-6 rounded-3xl bg-[#0c1017] border border-[#1b2230] grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>Why These Templates Pass ATS Filters</span>
          </div>
          <ul className="text-xs text-zinc-400 space-y-2 list-disc list-inside leading-relaxed">
            <li>Single-column semantic hierarchy easily parsed by Taleo, Workday, Greenhouse & Lever</li>
            <li>Zero unreadable icon fonts, progress meters, or nested SVG tables that confuse parsers</li>
            <li>Standard section headers ("Education", "Experience", "Skills", "Projects")</li>
            <li>Clean LaTeX typography and high printable DPI for hiring managers</li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Google X-Y-Z Action Formula</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Use the proven formula: <span className="text-white font-semibold">"Accomplished [X] as measured by [Y] by doing [Z]"</span>.
            Example: <em>"Engineered real-time telemetry pipeline (Z), decreasing API latency by 45% (Y), saving $120k annually in cloud compute (X)."</em>
          </p>
        </div>
      </div>

      {/* =========================================================================
          FULL-SCREEN HIGH RESOLUTION PREVIEW MODAL
         ========================================================================= */}
      {selectedTemplate && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#0d121c] border border-[#1f293d] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            {/* Modal Top Bar */}
            <div className="px-6 py-4 border-b border-[#1b2230] flex items-center justify-between bg-[#080b11]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs">
                  ATS
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    {selectedTemplate.title}
                  </h2>
                  <p className="text-xs text-zinc-400">
                    ATS Score: <span className="text-emerald-400 font-bold">{selectedTemplate.atsScore}%</span> • Format: {selectedTemplate.type}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {selectedTemplate.overleafUrl && (
                  <a
                    href={selectedTemplate.overleafUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#14231b] border border-[#1e442f] text-emerald-400 text-xs font-semibold hover:bg-[#1b3425] transition-colors"
                  >
                    <span>Open in Overleaf</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => handleDownload(selectedTemplate)}
                  className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Download</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTemplate(null)}
                  className="p-1.5 rounded-xl hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Tabs */}
            <div className="px-6 py-2 border-b border-[#1b2230] bg-[#0c1017] flex items-center gap-4 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('visual')}
                className={`py-2 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === 'visual'
                    ? 'border-orange-500 text-white'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Visual Preview</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('latex')}
                className={`py-2 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === 'latex'
                    ? 'border-orange-500 text-white'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>LaTeX Source Code</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-8 overflow-y-auto flex-1 bg-[#090d14]">
              {activeTab === 'visual' ? (
                /* High-Res Paper Document */
                <div className="max-w-2xl mx-auto bg-white text-zinc-900 rounded-xl p-8 sm:p-10 shadow-2xl font-serif text-[11px] sm:text-xs leading-relaxed border border-zinc-300 space-y-4">
                  {/* Top Header */}
                  <div className="text-center border-b border-zinc-900 pb-3">
                    <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-zinc-950">
                      {selectedTemplate.previewData.name}
                    </h1>
                    <div className="text-xs text-zinc-600 mt-1 font-sans flex flex-wrap justify-center gap-2">
                      {selectedTemplate.previewData.contact.map((c, i) => (
                        <span key={i}>
                          {c} {i < selectedTemplate.previewData.contact.length - 1 && '•'}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  {selectedTemplate.previewData.education?.length > 0 && (
                    <div className="space-y-1.5">
                      <h2 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-0.5">
                        Education
                      </h2>
                      {selectedTemplate.previewData.education.map((edu, i) => (
                        <div key={i} className="flex justify-between items-baseline">
                          <div>
                            <div className="font-bold text-zinc-900">{edu.school}</div>
                            <div className="text-zinc-600 italic text-[11px]">{edu.degree}</div>
                          </div>
                          <div className="text-zinc-600 font-medium text-[11px]">{edu.dates}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Experience */}
                  {selectedTemplate.previewData.experience?.length > 0 && (
                    <div className="space-y-2">
                      <h2 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-0.5">
                        Experience
                      </h2>
                      {selectedTemplate.previewData.experience.map((exp, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between items-baseline">
                            <div className="font-bold text-zinc-900">
                              {exp.title} <span className="font-normal text-zinc-600">| {exp.company}</span>
                            </div>
                            <div className="text-zinc-600 text-[11px]">{exp.dates}</div>
                          </div>
                          <ul className="list-disc list-inside text-zinc-700 space-y-1 text-[10.5px] sm:text-[11.5px]">
                            {exp.bullets.map((bullet, bi) => (
                              <li key={bi} className="leading-snug">
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technical Skills */}
                  {selectedTemplate.previewData.skills?.length > 0 && (
                    <div className="space-y-1">
                      <h2 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-0.5">
                        Technical Skills
                      </h2>
                      <div className="text-zinc-800 space-y-1 text-[11px]">
                        {selectedTemplate.previewData.skills.map((s, i) => (
                          <div key={i}>
                            <strong className="text-zinc-950">{s.category}: </strong>
                            <span>{s.items}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* LaTeX Code Viewer */
                <div className="relative max-w-3xl mx-auto rounded-2xl bg-[#07090e] border border-[#1b2230] p-4 sm:p-6 overflow-hidden">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1b2230]">
                    <span className="text-xs font-mono text-zinc-400">
                      {selectedTemplate.downloadFilename}
                    </span>
                    <button
                      type="button"
                      onClick={() => copyLatexToClipboard(selectedTemplate.latexSource)}
                      className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      {copiedLatex ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="text-xs font-mono text-zinc-300 overflow-x-auto whitespace-pre leading-relaxed max-h-[500px]">
                    {selectedTemplate.latexSource}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
