import React from 'react';

interface PlaylistThumbnailProps {
  type: 'love-babbar' | 'riti-kumari' | 'vivek-gupta' | 'neso-academy' | 'codewithharry' | 'rohit-negi' | 'kunal-kushwaha' | 'jennys' | string;
  subject?: string;
  className?: string;
}

export const PlaylistThumbnail: React.FC<PlaylistThumbnailProps> = ({
  type,
  subject = 'DBMS',
  className = '',
}) => {
  if (type === 'love-babbar') {
    return (
      <div className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-r from-[#031d3d] via-[#053b70] to-[#0a5296] select-none ${className}`}>
        {/* Subtle dot matrix grid */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />

        {/* Database Cylinders in Background */}
        <div className="absolute top-2 left-24 opacity-60 flex gap-2">
          {/* Cylinder 1 */}
          <svg className="w-10 h-14" viewBox="0 0 40 50" fill="none">
            <ellipse cx="20" cy="10" rx="16" ry="6" fill="#c084fc" />
            <path d="M4 10v10c0 3.3 7.2 6 16 6s16-2.7 16-6V10" fill="#9333ea" />
            <ellipse cx="20" cy="20" rx="16" ry="6" fill="#a855f7" />
            <path d="M4 20v10c0 3.3 7.2 6 16 6s16-2.7 16-6V20" fill="#7e22ce" />
            <ellipse cx="20" cy="30" rx="16" ry="6" fill="#9333ea" />
            <path d="M4 30v10c0 3.3 7.2 6 16 6s16-2.7 16-6V30" fill="#6b21a8" />
            <ellipse cx="20" cy="40" rx="16" ry="6" fill="#a855f7" />
          </svg>
          {/* Cylinder 2 */}
          <svg className="w-10 h-14 -mt-1" viewBox="0 0 40 50" fill="none">
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
        <div className="absolute inset-y-0 left-0 w-3/5 p-4 sm:p-5 flex flex-col justify-center z-10">
          <div className="text-white font-extrabold text-sm sm:text-base lg:text-lg tracking-wider drop-shadow-md uppercase">
            LOVE BABBAR
          </div>
          <div className="text-[#FFE600] font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-none italic drop-shadow-md">
            {subject}
          </div>
          <div className="text-[#FFE600] font-black text-lg sm:text-xl lg:text-2xl tracking-wider leading-tight drop-shadow-md">
            PLAYLIST
          </div>
        </div>

        {/* Right side portrait silhouette / avatar */}
        <div className="absolute right-2 bottom-0 w-2/5 h-full flex items-end justify-center">
          <div className="relative w-28 sm:w-36 h-full flex items-end justify-center">
            {/* Ambient glow */}
            <div className="absolute bottom-4 w-24 h-24 rounded-full bg-blue-400/30 blur-xl" />
            
            {/* Realistic stylized avatar */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Head */}
              <div className="w-14 h-16 sm:w-18 sm:h-20 rounded-full bg-[#e0ac69] border-2 border-[#b07b46] relative overflow-hidden flex flex-col items-center shadow-lg">
                {/* Hair */}
                <div className="w-full h-7 bg-[#1c1917] rounded-t-full" />
                {/* Beard */}
                <div className="absolute bottom-0 w-full h-8 bg-[#1c1917] rounded-b-full flex flex-col items-center justify-end pb-1">
                  <div className="w-4 h-1 bg-[#e0ac69] rounded-full mb-1" />
                </div>
                {/* Eyes */}
                <div className="absolute top-7 flex gap-3 z-10">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                </div>
              </div>

              {/* Shirt */}
              <div className="w-24 sm:w-32 h-14 sm:h-16 bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800 rounded-t-3xl border-t-2 border-sky-400 flex items-center justify-center shadow-lg -mt-2">
                <div className="w-6 h-6 border-b-2 border-white/40 transform rotate-45 -mt-3" />
              </div>
            </div>
          </div>
        </div>

        {/* YouTube Play Pill Overlay */}
        <div className="absolute bottom-2.5 right-2.5 z-20 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-[10px] font-bold text-white flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>HD</span>
        </div>
      </div>
    );
  }

  if (type === 'riti-kumari') {
    return (
      <div className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-r from-[#9a3412] via-[#c2410c] to-[#ea580c] select-none ${className}`}>
        {/* Subtle dot matrix grid */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />

        {/* Database Cylinders in Background */}
        <div className="absolute top-2 left-24 opacity-60 flex gap-2">
          {/* Cylinder 1 */}
          <svg className="w-10 h-14" viewBox="0 0 40 50" fill="none">
            <ellipse cx="20" cy="10" rx="16" ry="6" fill="#fde047" />
            <path d="M4 10v10c0 3.3 7.2 6 16 6s16-2.7 16-6V10" fill="#eab308" />
            <ellipse cx="20" cy="20" rx="16" ry="6" fill="#facc15" />
            <path d="M4 20v10c0 3.3 7.2 6 16 6s16-2.7 16-6V20" fill="#ca8a04" />
            <ellipse cx="20" cy="30" rx="16" ry="6" fill="#eab308" />
            <path d="M4 30v10c0 3.3 7.2 6 16 6s16-2.7 16-6V30" fill="#a16207" />
            <ellipse cx="20" cy="40" rx="16" ry="6" fill="#facc15" />
          </svg>
          {/* Cylinder 2 */}
          <svg className="w-10 h-14 -mt-1" viewBox="0 0 40 50" fill="none">
            <ellipse cx="20" cy="10" rx="16" ry="6" fill="#fde047" />
            <path d="M4 10v10c0 3.3 7.2 6 16 6s16-2.7 16-6V10" fill="#eab308" />
            <ellipse cx="20" cy="20" rx="16" ry="6" fill="#facc15" />
            <path d="M4 20v10c0 3.3 7.2 6 16 6s16-2.7 16-6V20" fill="#ca8a04" />
            <ellipse cx="20" cy="30" rx="16" ry="6" fill="#eab308" />
            <path d="M4 30v10c0 3.3 7.2 6 16 6s16-2.7 16-6V30" fill="#a16207" />
            <ellipse cx="20" cy="40" rx="16" ry="6" fill="#facc15" />
          </svg>
        </div>

        {/* Text Content */}
        <div className="absolute inset-y-0 left-0 w-3/5 p-4 sm:p-5 flex flex-col justify-center z-10">
          <div className="text-white font-extrabold text-sm sm:text-base lg:text-lg tracking-wider drop-shadow-md uppercase">
            RITI KUMARI
          </div>
          <div className="text-[#FFE600] font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-none italic drop-shadow-md">
            {subject}
          </div>
          <div className="text-[#FFE600] font-black text-lg sm:text-xl lg:text-2xl tracking-wider leading-tight drop-shadow-md">
            PLAYLIST
          </div>
        </div>

        {/* Right side portrait silhouette / avatar */}
        <div className="absolute right-2 bottom-0 w-2/5 h-full flex items-end justify-center">
          <div className="relative w-28 sm:w-36 h-full flex items-end justify-center">
            {/* Ambient glow */}
            <div className="absolute bottom-4 w-24 h-24 rounded-full bg-yellow-400/30 blur-xl" />
            
            {/* Realistic stylized avatar */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Long Hair framing */}
              <div className="absolute -inset-x-2 -top-1 bottom-4 bg-[#171412] rounded-t-full rounded-b-2xl -z-10" />

              {/* Head */}
              <div className="w-13 h-16 sm:w-16 sm:h-18 rounded-full bg-[#fcd34d] border border-[#d97706] relative overflow-hidden flex flex-col items-center shadow-lg">
                {/* Hair bang */}
                <div className="w-full h-5 bg-[#171412] rounded-t-full" />
                {/* Eyes */}
                <div className="absolute top-6 flex gap-3 z-10">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                </div>
                {/* Smile */}
                <div className="absolute bottom-3 w-4 h-1.5 border-b-2 border-[#b45309] rounded-full" />
              </div>

              {/* Black Turtle Neck Dress */}
              <div className="w-24 sm:w-32 h-14 sm:h-16 bg-[#18181b] rounded-t-3xl border-t border-zinc-700 flex items-center justify-center shadow-lg -mt-2">
                <div className="w-6 h-4 bg-[#27272a] rounded-t-md -mt-4" />
              </div>
            </div>
          </div>
        </div>

        {/* YouTube Play Pill Overlay */}
        <div className="absolute bottom-2.5 right-2.5 z-20 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-[10px] font-bold text-white flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>HD</span>
        </div>
      </div>
    );
  }

  // Generic clean thumbnail for other instructors
  const colors: Record<string, string> = {
    'codewithharry': 'from-[#1e1b4b] via-[#3730a3] to-[#4f46e5]',
    'rohit-negi': 'from-[#701a75] via-[#86198f] to-[#a21caf]',
    'kunal-kushwaha': 'from-[#14532d] via-[#15803d] to-[#16a34a]',
    'jennys': 'from-[#831843] via-[#9f1239] to-[#be123c]',
    'vivek-gupta': 'from-[#064e3b] via-[#047857] to-[#059669]',
    'neso-academy': 'from-[#0f172a] via-[#1e293b] to-[#334155]',
  };

  const bgGrad = colors[type] || 'from-zinc-900 via-zinc-800 to-zinc-900';

  return (
    <div className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-r ${bgGrad} select-none p-4 flex flex-col justify-between ${className}`}>
      <div className="flex items-center justify-between z-10">
        <span className="text-[11px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-white/20 text-white backdrop-blur-xs">
          {subject} PLAYLIST
        </span>
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
      </div>

      <div className="z-10">
        <h3 className="text-white font-black text-lg sm:text-xl capitalize drop-shadow-md">
          {type.replace(/-/g, ' ')}
        </h3>
        <p className="text-zinc-200 text-xs font-semibold mt-0.5 drop-shadow-xs">
          Comprehensive Interview Masterclass
        </p>
      </div>

      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
    </div>
  );
};
