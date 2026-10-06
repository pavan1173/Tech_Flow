import React, { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  Instagram,
  Mail,
  Code2,
  CheckCircle2,
  Terminal,
  Heart,
  ArrowRight
} from 'lucide-react';

interface DeveloperProfileCardProps {
  navigate?: (to: string) => void;
  compact?: boolean;
}

export const DeveloperProfileCard: React.FC<DeveloperProfileCardProps> = ({
  navigate,
  compact = false,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-amber-500/10 via-white to-zinc-50 dark:from-amber-500/10 dark:via-[#0c1017] dark:to-[#080b10] p-6 sm:p-10 shadow-2xl transition-all font-lexend ${
        compact ? 'max-w-3xl mx-auto' : 'w-full'
      }`}
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/15 dark:bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        {/* Creator Portrait Avatar */}
        <div className="relative shrink-0 group">
          {/* Glowing Ring Frame */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-black ring-4 ring-white dark:ring-[#0c1017] flex items-center justify-center">
              {!imgError ? (
                <img
                  src="/pavan_img.png"
                  alt="Pavan Kumar - Developer of HackPath (@tech_by.pavan)"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('pavan_img.png')) {
                      target.src = '/pavan_img_.png';
                    } else {
                      setImgError(true);
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center text-4xl font-extrabold text-white">
                  PK
                </div>
              )}
            </div>

            {/* Verified Developer Badge */}
            <div
              className="absolute bottom-1 right-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 rounded-full shadow-lg border-2 border-white dark:border-zinc-900 flex items-center justify-center"
              title="Verified Developer & Platform Creator"
            >
              <CheckCircle2 className="w-4 h-4 fill-white text-blue-600" />
            </div>
          </div>
        </div>

        {/* Creator Details */}
        <div className="space-y-4 text-center md:text-left flex-1">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                LEAD DEVELOPER &amp; CREATOR
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-semibold">
                <Instagram className="w-3 h-3" />
                @tech_by.pavan
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
              Pavan Kumar
            </h2>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs sm:text-sm font-mono">
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Full-Stack Engineer &amp; Tech Mentor
              </span>
              <span className="text-zinc-400 hidden sm:inline">•</span>
              <span className="text-zinc-600 dark:text-zinc-300">
                Architect of HackPath
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl">
            Hey! I&apos;m <strong>Pavan Kumar</strong>, the developer behind HackPath. I engineered this platform to give every developer and student equal access to high-yield DSA sheets, coding patterns, SQL queries, and system design roadmaps with 100% free access and zero paywalls.
          </p>

          {/* Highlights & Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-left">
            <div className="p-3 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold">Role</span>
              <p className="text-xs font-extrabold text-zinc-900 dark:text-white">Lead Architect</p>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold">Tech Stack</span>
              <p className="text-xs font-extrabold text-zinc-900 dark:text-white">React • TS • Firebase</p>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 col-span-2 sm:col-span-1">
              <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold">Community</span>
              <p className="text-xs font-extrabold text-rose-500">@tech_by.pavan</p>
            </div>
          </div>

          {/* Action Links & Social Connect */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <a
              href="https://www.instagram.com/tech_by.pavan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:from-amber-600 hover:via-rose-600 hover:to-purple-700 text-white text-xs font-bold shadow-md shadow-rose-500/20 transition-all hover:scale-105 cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>Connect on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href="mailto:mpavankumar110405@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white text-xs font-semibold border border-zinc-200 dark:border-zinc-700 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              <span>Email Developer</span>
            </a>

            {navigate && (
              <button
                onClick={() => navigate('/preparation')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
              >
                <span>Explore Prep Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
