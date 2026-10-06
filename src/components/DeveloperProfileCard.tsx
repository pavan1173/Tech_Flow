import React, { useState } from 'react';
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
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-amber-500/5 via-white to-zinc-50 dark:from-amber-500/10 dark:via-[#0c1017] dark:to-[#080b10] p-6 sm:p-10 shadow-xl transition-all font-sans ${compact ? 'max-w-2xl mx-auto' : 'w-full'}`}>
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        {/* Creator Portrait Avatar */}
        <div className="relative shrink-0 group">
          {/* Vibrant Yellow Circle matching uploaded image */}
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#fde047] dark:bg-[#eab308] p-1.5 shadow-2xl flex items-center justify-center relative overflow-hidden border-4 border-black/80 dark:border-white/90">
            {!imgError ? (
              <img
                src="/pavan_img_.png"
                alt="Pavan Kumar (@tech_by.pavan)"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes('pavan_img_.png')) {
                    target.src = '/pavan_img.png';
                  } else {
                    setImgError(true);
                  }
                }}
                className="w-full h-full rounded-full object-cover object-center relative z-10"
                loading="eager"
              />
            ) : (
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full rounded-full object-cover"
              >
                {/* Background Yellow Circle */}
                <circle cx="100" cy="100" r="98" fill="#FACC15" />
                
                {/* Person Silhouette & Features */}
                {/* Hoodie / Body */}
                <path
                  d="M 35 200 L 45 145 C 50 130 65 120 85 118 L 100 128 L 115 118 C 135 120 150 130 155 145 L 165 200 Z"
                  fill="#18181B"
                />
                <path
                  d="M 85 118 L 100 135 L 115 118 L 100 110 Z"
                  fill="#27272A"
                />

                {/* Neck */}
                <rect x="88" y="90" width="24" height="24" rx="4" fill="#D97706" opacity="0.4" />
                <rect x="89" y="88" width="22" height="22" rx="4" fill="#FBBF24" />

                {/* Head / Face */}
                <ellipse cx="100" cy="72" rx="30" ry="34" fill="#FBBF24" />
                
                {/* Hair */}
                <path
                  d="M 68 62 C 68 38 82 28 100 28 C 118 28 132 38 132 62 C 132 68 128 72 125 72 C 122 60 115 48 100 48 C 85 48 78 60 75 72 C 72 72 68 68 68 62 Z"
                  fill="#09090B"
                />
                <path
                  d="M 72 45 C 80 32 110 30 128 42 C 122 36 112 30 100 30 C 88 30 78 36 72 45 Z"
                  fill="#18181B"
                />

                {/* Tilak / Forehead mark */}
                <rect x="96" y="47" width="8" height="3" rx="1.5" fill="#FFFFFF" />
                <circle cx="100" cy="53" r="1.5" fill="#DC2626" />

                {/* Eyebrows */}
                <path d="M 78 56 Q 86 52 94 56" stroke="#09090B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M 106 56 Q 114 52 122 56" stroke="#09090B" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                {/* Glasses (Transparent stylish frames) */}
                <rect x="74" y="58" width="22" height="16" rx="4" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
                <rect x="104" y="58" width="22" height="16" rx="4" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
                <line x1="96" y1="64" x2="104" y2="64" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />

                {/* Eyes */}
                <circle cx="85" cy="66" r="3" fill="#18181B" />
                <circle cx="115" cy="66" r="3" fill="#18181B" />
                <circle cx="86" cy="65" r="1" fill="#FFFFFF" />
                <circle cx="116" cy="65" r="1" fill="#FFFFFF" />

                {/* Nose */}
                <path d="M 100 66 L 98 76 L 102 76" stroke="#B45309" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                {/* Smile / Teeth */}
                <path d="M 86 82 Q 100 94 114 82 Z" fill="#FFFFFF" stroke="#B45309" strokeWidth="1" />
                <path d="M 86 82 Q 100 94 114 82" stroke="#B45309" strokeWidth="1.5" fill="none" />
                <path d="M 89 82 Q 100 86 111 82" fill="#DC2626" opacity="0.6" />

                {/* Laptop at bottom */}
                <path d="M 40 200 L 55 160 L 145 160 L 160 200 Z" fill="#52525B" />
                <rect x="58" y="162" width="84" height="36" rx="2" fill="#27272A" />
                {/* Apple Logo placeholder */}
                <circle cx="100" cy="180" r="3" fill="#FFFFFF" opacity="0.8" />
              </svg>
            )}

            {/* Verified Pro Badge */}
            <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1.5 rounded-full shadow-lg border-2 border-white dark:border-zinc-900" title="Verified Creator & Software Engineer">
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              HackPath Engineering Team
            </h2>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs sm:text-sm font-mono">
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                @hackpath.dev
              </span>
              <span className="text-zinc-400 hidden sm:inline">•</span>
              <span className="text-zinc-600 dark:text-zinc-300">
                Open Source Placement Ecosystem
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl">
            Built with the sole mission to empower aspiring software engineers to crack top tech MNCs & startups with 100% free, curated DSA sheets, 20 coding patterns, and interactive roadmaps.
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

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            {navigate && (
              <button
                onClick={() => navigate('/preparation')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
              >
                <span>Start Preparation</span>
                <ExternalLink className="w-3 h-3 opacity-90" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
