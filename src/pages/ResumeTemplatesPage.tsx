import React, { useState, useEffect } from 'react';
import { resumeTemplatesList, ResumeTemplate } from '../data/resumeTemplatesData';
import { useAuth } from '../context/AuthContext';
import { AuthGate } from '../components/AuthGate';
import {
  ChevronRight,
  Eye,
  Download,
  X,
  ExternalLink,
  Share2,
  Check,
  Sparkles,
  FileText
} from 'lucide-react';

interface ResumeTemplatesPageProps {
  navigate: (to: string) => void;
}

export const ResumeTemplatesPage: React.FC<ResumeTemplatesPageProps> = ({ navigate }) => {
  const { isAuthenticated } = useAuth();
  const [previewTemplate, setPreviewTemplate] = useState<ResumeTemplate | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Lock body scroll when preview modal is active
  useEffect(() => {
    if (previewTemplate) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setPreviewTemplate(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [previewTemplate]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  const handleDownload = (tpl: ResumeTemplate) => {
    window.open(tpl.link, '_blank', 'noopener,noreferrer');
  };

  const copyShareLink = (tpl: ResumeTemplate) => {
    navigator.clipboard.writeText(tpl.link);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfb] dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-8 max-w-7xl mx-auto transition-colors duration-200">
      {/* 1. Breadcrumbs matching hynts.in */}
      <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 shrink-0" />
        <span className="text-zinc-900 dark:text-white font-medium">Resume Templates</span>
      </div>

      {/* 2. Header Section matching hynts.in */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Resume Templates
        </h1>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal max-w-4xl leading-relaxed">
          Stand out from the crowd with these battle-tested, ATS-friendly resume templates. Preview and download the exact templates used to land offers at FAANG and top tech companies.
        </p>
      </div>

      {/* 3. Resume Templates Grid (matching hynts.in screenshot) */}
      {!isAuthenticated ? (
        <AuthGate
          totalCount="all"
          featureName="ATS-friendly resume templates"
          title="Sign in to access Resume Templates"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {resumeTemplatesList.slice(0, 3).map((tpl) => (
              <div
                key={tpl.id}
                className="group relative flex flex-col bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-xs"
              >
                <div className="relative w-full h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-900 select-none">
                  <img
                    src={tpl.image}
                    alt={tpl.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="font-lexend font-semibold text-base text-zinc-900 dark:text-zinc-100 line-clamp-1">
                    {tpl.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </AuthGate>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {resumeTemplatesList.map((tpl) => (
            <div
              key={tpl.id}
              className="group relative flex flex-col bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-xl hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300"
            >
              {/* Template Preview Image with hover effect */}
              <div className="relative w-full h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-900 select-none">
                <img
                  src={tpl.image}
                  alt={tpl.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    if (e.currentTarget.src !== tpl.cdnImage) {
                      e.currentTarget.src = tpl.cdnImage;
                    }
                  }}
                />

                {/* Hover Overlay with Eye Button (matching hynts.in) */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setPreviewTemplate(tpl)}
                    className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/40 transition-colors cursor-pointer shadow-lg"
                    aria-label={`Preview ${tpl.name}`}
                  >
                    <Eye className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Template Card Content */}
              <div className="p-4 flex flex-col gap-4">
                <h3 className="font-lexend font-semibold text-base text-zinc-900 dark:text-zinc-100 line-clamp-1">
                  {tpl.name}
                </h3>

                {/* Action Buttons: Preview & Download (matching hynts.in) */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPreviewTemplate(tpl)}
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Preview</span>
                  </button>

                  <button
                    onClick={() => handleDownload(tpl)}
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-zinc-900 hover:bg-black dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-sm font-semibold transition-colors shadow-md cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. Full Document Image Preview Modal (matching hynts.in) */}
      {previewTemplate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${previewTemplate.name}`}
          onClick={() => setPreviewTemplate(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-900 dark:text-zinc-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="px-5 py-3.5 bg-zinc-100 dark:bg-[#090d14] border-b border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-sm sm:text-base font-extrabold text-zinc-900 dark:text-white truncate">
                    {previewTemplate.name}
                  </h2>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    {previewTemplate.recommendedFor || 'ATS-Optimized Tech Template'}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Share Link */}
                <button
                  onClick={() => copyShareLink(previewTemplate)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-transparent transition-colors cursor-pointer"
                  title="Copy Google Drive Link"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share'}</span>
                </button>

                {/* Open in Google Drive */}
                <a
                  href={previewTemplate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-transparent transition-colors cursor-pointer"
                  aria-label="Open in Google Drive"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Drive</span>
                </a>

                {/* Download Template */}
                <button
                  onClick={() => handleDownload(previewTemplate)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-sm cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setPreviewTemplate(null)}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer ml-1"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: High Resolution Full Image Preview */}
            <div className="relative flex-1 p-3 sm:p-5 overflow-y-auto bg-black/60 flex items-center justify-center">
              <img
                src={previewTemplate.image}
                alt={previewTemplate.name}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-zinc-800 bg-white"
                onError={(e) => {
                  if (e.currentTarget.src !== previewTemplate.cdnImage) {
                    e.currentTarget.src = previewTemplate.cdnImage;
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
