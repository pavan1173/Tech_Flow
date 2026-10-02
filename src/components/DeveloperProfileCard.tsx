import React from 'react';
import {
  Sparkles,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Award,
  Code2,
  Heart,
  CheckCircle2,
  Terminal,
  Laptop
} from 'lucide-react';

interface DeveloperProfileCardProps {
  navigate?: (to: string) => void;
  compact?: boolean;
}

export const DeveloperProfileCard: React.FC<DeveloperProfileCardProps> = ({
  navigate,
  compact = false,
}) => {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-amber-500/5 via-white to-zinc-50 dark:from-amber-500/10 dark:via-[#0c1017] dark:to-[#080b10] p-6 sm:p-10 shadow-xl transition-all font-sans ${compact ? 'max-w-2xl mx-auto' : 'w-full'}`}>
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        {/* Creator Portrait Avatar */}
        <div className="relative shrink-0 group">
          {/* Vibrant Yellow Circle Border framing the photo */}
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#fde047] dark:bg-[#eab308] p-1.5 shadow-2xl flex items-center justify-center relative overflow-hidden border-4 border-black/80 dark:border-white/90">
            <img
              src="/pavan_img.png"
              alt="Pavan Kumar (@tech_by.pavan)"
              className="w-full h-full rounded-full object-cover object-center relative z-10 select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
              loading="eager"
              decoding="async"
            />

            {/* Verified Pro Badge */}
            <div className="absolute bottom-1 right-1 z-20 bg-blue-600 text-white p-1.5 rounded-full shadow-lg border-2 border-white dark:border-zinc-900" title="Verified Creator & Software Engineer">
              <CheckCircle2 className="w-4 h-4 fill-white text-blue-600" />
            </div>
          </div>
        </div>

        {/* Creator Details */}
        <div className="space-y-4 text-center md:text-left flex-1">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              FOUNDER & LEAD ARCHITECT
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Pavan Kumar
            </h2>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs sm:text-sm font-mono">
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                @tech_by.pavan
              </span>
              <span className="text-zinc-400 hidden sm:inline">•</span>
              <a
                href="mailto:mpavankumar110405@gmail.com"
                className="text-zinc-600 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>mpavankumar110405@gmail.com</span>
              </a>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl">
            Software Engineer, Educator, and Creator of <strong>HackPath</strong>. Built with the sole mission to empower aspiring developers to crack top tech MNCs & startups with 100% free, curated DSA sheets, 20 coding patterns, and interactive roadmaps.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-left">
            <div className="p-2.5 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-400 uppercase">Mission</span>
              <p className="text-xs font-bold text-zinc-900 dark:text-white">Democratize Tech</p>
            </div>
            <div className="p-2.5 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-400 uppercase">Platform</span>
              <p className="text-xs font-bold text-zinc-900 dark:text-white">100k+ Students</p>
            </div>
            <div className="p-2.5 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 col-span-2 sm:col-span-1">
              <span className="text-[10px] font-mono text-zinc-400 uppercase">Cost</span>
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">100% Free Forever</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <a
              href="https://www.instagram.com/tech_by.pavan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
            >
              <Instagram className="w-4 h-4" />
              <span>@tech_by.pavan</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>

            <a
              href="mailto:mpavankumar110405@gmail.com"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-semibold transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-500" />
              <span>mpavankumar110405@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
