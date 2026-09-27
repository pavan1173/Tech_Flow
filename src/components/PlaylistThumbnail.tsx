import React from 'react';

interface PlaylistThumbnailProps {
  type: 'love-babbar' | 'riti-kumari' | 'vivek-gupta' | 'neso-academy' | 'codewithharry' | 'rohit-negi' | 'kunal-kushwaha' | 'jennys' | string;
  subject?: 'DBMS' | 'OS' | 'OOPS' | 'CN' | string;
  className?: string;
}

export const PlaylistThumbnail: React.FC<PlaylistThumbnailProps> = ({
  type,
  subject = 'DBMS',
  className = '',
}) => {
  // Theme styling based on instructor and subject
  if (type === 'love-babbar') {
    return (
      <div className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-r from-[#031d3d] via-[#053b70] to-[#0a5296] select-none ${className}`}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />

        {/* Database Cylinders / Tech graphics in Background */}
        <div className="absolute top-2 left-20 sm:left-24 opacity-60 flex gap-2">
          <svg className="w-8 sm:w-10 h-12 sm:h-14" viewBox="0 0 40 50" fill="none">
            <ellipse cx="20" cy="10" rx="16" ry="6" fill="#c084fc" />
            <path d="M4 10v10c0 3.3 7.2 6 16 6s16-2.7 16-6V10" fill="#9333ea" />
            <ellipse cx="20" cy="20" rx="16" ry="6" fill="#a855f7" />
            <path d="M4 20v10c0 3.3 7.2 6 16 6s16-2.7 16-6V20" fill="#7e22ce" />
            <ellipse cx="20" cy="30" rx="16" ry="6" fill="#9333ea" />
            <path d="M4 30v10c0 3.3 7.2 6 16 6s16-2.7 16-6V30" fill="#6b21a8" />
            <ellipse cx="20" cy="40" rx="16" ry="6" fill="#a855f7" />
          </svg>
          <svg className="w-8 sm:w-10 h-12 sm:h-14 -mt-1" viewBox="0 0 40 50" fill="none">
            <ellipse cx="20" cy="10" rx="16" ry="6" fill="#c084fc" />
            <path d="M4 10v10c0 3.3 7.2 6 16 6s16-2.7 16-6V10" fill="#9333ea" />
            <ellipse cx="20" cy="20" rx="16" ry="6" fill="#a855f7" />
            <path d="M4 20v10c0 3.3 7.2 6 16 6s16-2.7 16-6V20" fill="#7e22ce" />
            <ellipse cx="20" cy="30" rx="16" ry="6" fill="#9333ea" />
            <path d="M4 30v10c0 3.3 7.2 6 16 6s16-2.7 16-6V30" fill="#6b21a8" />
            <ellipse cx="20" cy="40" rx="16" ry="6" fill="#a855f7" />
          </svg>
        </div>

        {/* Text Content */}
        <div className="absolute inset-y-0 left-0 w-3/5 p-3.5 sm:p-5 flex flex-col justify-center z-10">
          <div className="text-white font-extrabold text-xs sm:text-sm lg:text-base tracking-wider drop-shadow-md uppercase">
            LOVE BABBAR
          </div>
          <div className="text-[#FFE600] font-black text-xl sm:text-3xl lg:text-4xl tracking-tight leading-none italic drop-shadow-md">
            {subject}
          </div>
          <div className="text-[#FFE600] font-black text-base sm:text-xl lg:text-2xl tracking-wider leading-tight drop-shadow-md">
            PLAYLIST
          </div>
        </div>

        {/* Right side portrait avatar */}
        <div className="absolute right-2 bottom-0 w-2/5 h-full flex items-end justify-center">
          <div className="relative w-24 sm:w-36 h-full flex items-end justify-center">
            <div className="absolute bottom-4 w-20 sm:w-28 h-20 sm:h-28 rounded-full bg-blue-400/30 blur-xl" />
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Head */}
              <div className="w-12 sm:w-16 h-14 sm:h-18 rounded-full bg-[#e0ac69] border-2 border-[#b07b46] relative overflow-hidden flex flex-col items-center shadow-lg">
                <div className="w-full h-6 sm:h-7 bg-[#1c1917] rounded-t-full" />
                <div className="absolute bottom-0 w-full h-6 sm:h-8 bg-[#1c1917] rounded-b-full flex flex-col items-center justify-end pb-1">
                  <div className="w-3 sm:w-4 h-1 bg-[#e0ac69] rounded-full mb-0.5 sm:mb-1" />
                </div>
                <div className="absolute top-6 sm:top-7 flex gap-2 sm:gap-3 z-10">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                </div>
              </div>

              {/* Shirt */}
              <div className="w-20 sm:w-30 h-12 sm:h-16 bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800 rounded-t-3xl border-t-2 border-sky-400 flex items-center justify-center shadow-lg -mt-2">
                <div className="w-5 h-5 border-b-2 border-white/40 transform rotate-45 -mt-3" />
              </div>
            </div>
          </div>
        </div>

        {/* HD Quality Tag */}
        <div className="absolute bottom-2 right-2 z-20 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[9px] font-bold text-white flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>HD</span>
        </div>
      </div>
    );
  }

  if (type === 'riti-kumari') {
    return (
      <div className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-r from-[#9a3412] via-[#c2410c] to-[#ea580c] select-none ${className}`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />

        <div className="absolute top-2 left-20 sm:left-24 opacity-60 flex gap-2">
          <svg className="w-8 sm:w-10 h-12 sm:h-14" viewBox="0 0 40 50" fill="none">
            <ellipse cx="20" cy="10" rx="16" ry="6" fill="#fde047" />
            <path d="M4 10v10c0 3.3 7.2 6 16 6s16-2.7 16-6V10" fill="#eab308" />
            <ellipse cx="20" cy="20" rx="16" ry="6" fill="#facc15" />
            <path d="M4 20v10c0 3.3 7.2 6 16 6s16-2.7 16-6V20" fill="#ca8a04" />
            <ellipse cx="20" cy="30" rx="16" ry="6" fill="#eab308" />
            <path d="M4 30v10c0 3.3 7.2 6 16 6s16-2.7 16-6V30" fill="#a16207" />
            <ellipse cx="20" cy="40" rx="16" ry="6" fill="#facc15" />
          </svg>
          <svg className="w-8 sm:w-10 h-12 sm:h-14 -mt-1" viewBox="0 0 40 50" fill="none">
            <ellipse cx="20" cy="10" rx="16" ry="6" fill="#fde047" />
            <path d="M4 10v10c0 3.3 7.2 6 16 6s16-2.7 16-6V10" fill="#eab308" />
            <ellipse cx="20" cy="20" rx="16" ry="6" fill="#facc15" />
            <path d="M4 20v10c0 3.3 7.2 6 16 6s16-2.7 16-6V20" fill="#ca8a04" />
            <ellipse cx="20" cy="30" rx="16" ry="6" fill="#eab308" />
            <path d="M4 30v10c0 3.3 7.2 6 16 6s16-2.7 16-6V30" fill="#a16207" />
            <ellipse cx="20" cy="40" rx="16" ry="6" fill="#facc15" />
          </svg>
        </div>

        <div className="absolute inset-y-0 left-0 w-3/5 p-3.5 sm:p-5 flex flex-col justify-center z-10">
          <div className="text-white font-extrabold text-xs sm:text-sm lg:text-base tracking-wider drop-shadow-md uppercase">
            RITI KUMARI
          </div>
          <div className="text-[#FFE600] font-black text-xl sm:text-3xl lg:text-4xl tracking-tight leading-none italic drop-shadow-md">
            {subject}
          </div>
          <div className="text-[#FFE600] font-black text-base sm:text-xl lg:text-2xl tracking-wider leading-tight drop-shadow-md">
            PLAYLIST
          </div>
        </div>

        <div className="absolute right-2 bottom-0 w-2/5 h-full flex items-end justify-center">
          <div className="relative w-24 sm:w-36 h-full flex items-end justify-center">
            <div className="absolute bottom-4 w-20 sm:w-28 h-20 sm:h-28 rounded-full bg-yellow-400/30 blur-xl" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="absolute -inset-x-2 -top-1 bottom-3 bg-[#171412] rounded-t-full rounded-b-2xl -z-10" />

              <div className="w-11 sm:w-15 h-13 sm:h-17 rounded-full bg-[#fcd34d] border border-[#d97706] relative overflow-hidden flex flex-col items-center shadow-lg">
                <div className="w-full h-4 sm:h-5 bg-[#171412] rounded-t-full" />
                <div className="absolute top-5 sm:top-6 flex gap-2 sm:gap-3 z-10">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                </div>
                <div className="absolute bottom-2.5 w-3.5 h-1 border-b-2 border-[#b45309] rounded-full" />
              </div>

              <div className="w-20 sm:w-30 h-12 sm:h-16 bg-[#18181b] rounded-t-3xl border-t border-zinc-700 flex items-center justify-center shadow-lg -mt-2">
                <div className="w-5 h-3 bg-[#27272a] rounded-t-md -mt-3" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 right-2 z-20 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[9px] font-bold text-white flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>HD</span>
        </div>
      </div>
    );
  }

  // Instructor specific styles
  const instructorProfiles: Record<string, { gradient: string; label: string; accentColor: string; role: string }> = {
    'codewithharry': {
      gradient: 'from-[#1e1b4b] via-[#3730a3] to-[#4f46e5]',
      label: 'CODE WITH HARRY',
      accentColor: '#818cf8',
      role: 'OOP Complete Masterclass',
    },
    'rohit-negi': {
      gradient: 'from-[#701a75] via-[#86198f] to-[#a21caf]',
      label: 'ROHIT NEGI',
      accentColor: '#f472b6',
      role: 'Coder Army Placements',
    },
    'kunal-kushwaha': {
      gradient: 'from-[#064e3b] via-[#047857] to-[#059669]',
      label: 'KUNAL KUSHWAHA',
      accentColor: '#4ade80',
      role: 'Java OOP Enterprise',
    },
    'jennys': {
      gradient: 'from-[#831843] via-[#9f1239] to-[#be123c]',
      label: "JENNY'S LECTURES",
      accentColor: '#fb7185',
      role: 'Foundational CS Series',
    },
    'vivek-gupta': {
      gradient: 'from-[#064e3b] via-[#047857] to-[#0f766e]',
      label: 'VIVEK GUPTA',
      accentColor: '#34d399',
      role: 'Deep Systems & Concurrency',
    },
    'neso-academy': {
      gradient: 'from-[#0f172a] via-[#1e293b] to-[#334155]',
      label: 'NESO ACADEMY',
      accentColor: '#38bdf8',
      role: 'Complete Academic Course',
    },
  };

  const profile = instructorProfiles[type] || {
    gradient: 'from-zinc-900 via-zinc-800 to-zinc-900',
    label: type.replace(/-/g, ' ').toUpperCase(),
    accentColor: '#60a5fa',
    role: `${subject} Comprehensive Masterclass`,
  };

  return (
    <div className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-r ${profile.gradient} select-none p-4 sm:p-5 flex flex-col justify-between ${className}`}>
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />

      {/* Top Banner */}
      <div className="flex items-center justify-between z-10">
        <span className="text-[10px] sm:text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-xs tracking-wider border border-white/20">
          {subject} PLAYLIST
        </span>
        <div className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[9px] font-bold text-white flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>HD</span>
        </div>
      </div>

      {/* Middle/Bottom Typography */}
      <div className="z-10 space-y-0.5">
        <div className="text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase drop-shadow-md">
          {profile.label}
        </div>
        <div className="text-[#FFE600] font-black text-xl sm:text-2xl lg:text-3xl tracking-tight leading-none italic drop-shadow-md">
          {subject} COURSE
        </div>
        <p className="text-zinc-200 text-[11px] sm:text-xs font-semibold drop-shadow-xs pt-1">
          {profile.role}
        </p>
      </div>
    </div>
  );
};
