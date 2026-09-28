import React from 'react';

interface PlaylistThumbnailProps {
  type:
    | 'love-babbar'
    | 'riti-kumari'
    | 'vivek-gupta'
    | 'neso-academy'
    | 'codewithharry'
    | 'rohit-negi'
    | 'kunal-kushwaha'
    | 'jennys'
    | 'shradha-khapra'
    | 'gaurav-sen'
    | 'exponent'
    | 'hello-interview'
    | 'code-aryan'
    | 'coder-army'
    | 'engineering-digest'
    | string;
  subject?: 'DBMS' | 'OS' | 'OOPS' | 'CN' | 'System Design' | 'DSA' | string;
  className?: string;
}

export const PlaylistThumbnail: React.FC<PlaylistThumbnailProps> = ({
  type,
  subject = 'System Design',
  className = '',
}) => {
  // Shared tech badges for System Design thumbnails matching screenshot
  const renderSystemDesignTechBadges = () => (
    <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 z-20">
      {/* RabbitMQ / Kafka / Message Queue Badge */}
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-500/90 border border-white/40 flex items-center justify-center p-1 shadow-md">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
        </svg>
      </div>

      {/* Kafka / DB Connectors Badge */}
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-600/90 border border-white/40 flex items-center justify-center p-1 shadow-md">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      </div>

      {/* Redis / Database Badge */}
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-600/90 border border-white/40 flex items-center justify-center p-1 shadow-md">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
          <path d="M12 3L4 9v6l8 6 8-6V9l-8-6zm0 2.2l5.5 4.1L12 13.5 6.5 9.3 12 5.2z" />
        </svg>
      </div>

      {/* AWS Cloud Badge */}
      <div className="px-2 py-0.5 rounded-full bg-amber-500/95 border border-white/40 text-black font-extrabold text-[9px] sm:text-[10px] tracking-tight shadow-md flex items-center justify-center">
        aws
      </div>

      {/* Nginx / Node Badge */}
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-600/90 border border-white/40 flex items-center justify-center text-white font-black text-xs shadow-md">
        N
      </div>
    </div>
  );

  // 1. GAURAV SEN SYSTEM DESIGN
  if (type === 'gaurav-sen') {
    return (
      <div className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-r from-[#031738] via-[#09295e] to-[#123e83] select-none ${className}`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
        
        {/* Banner Texts matching screenshot */}
        <div className="absolute top-2.5 left-3 sm:top-3.5 sm:left-4 z-10">
          <div className="text-white font-black text-xs sm:text-sm tracking-wider uppercase drop-shadow-md">
            GAURAV SEN
          </div>
          <div className="text-[#FFE600] font-black text-sm sm:text-lg lg:text-xl tracking-tight leading-none drop-shadow-md">
            SYSTEM DESIGN
          </div>
        </div>

        {/* Tech Badges */}
        {renderSystemDesignTechBadges()}

        {/* Avatar Right */}
        <div className="absolute right-1 sm:right-3 bottom-0 w-2/5 h-full flex items-end justify-center">
          <div className="relative w-28 sm:w-36 h-full flex items-end justify-center">
            <div className="w-14 sm:w-18 h-16 sm:h-20 rounded-full bg-[#f6d7b0] border-2 border-[#c68953] relative overflow-hidden flex flex-col items-center shadow-2xl">
              <div className="w-full h-8 bg-[#1e1b18] rounded-t-full" />
              <div className="w-4 h-1.5 bg-[#422006] rounded-full mt-4" />
            </div>
            <div className="absolute bottom-0 w-24 sm:w-32 h-14 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-t-3xl border-t border-blue-300" />
          </div>
        </div>
      </div>
    );
  }

  // 2. EXPONENT SYSTEM DESIGN
  if (type === 'exponent') {
    return (
      <div className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-r from-[#210936] via-[#3b1259] to-[#581c87] select-none ${className}`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
        
        <div className="absolute top-2.5 left-3 sm:top-3.5 sm:left-4 z-10">
          <div className="text-white font-black text-xs sm:text-sm tracking-wider uppercase drop-shadow-md">
            EXPONENT
          </div>
          <div className="text-[#FFE600] font-black text-sm sm:text-lg lg:text-xl tracking-tight leading-none drop-shadow-md">
            SYSTEM DESIGN
          </div>
        </div>

        {renderSystemDesignTechBadges()}

        <div className="absolute right-1 sm:right-3 bottom-0 w-2/5 h-full flex items-end justify-center">
          <div className="relative w-28 sm:w-36 h-full flex items-end justify-center">
            <div className="w-14 sm:w-18 h-16 sm:h-20 rounded-full bg-[#eec89e] border-2 border-[#b07b46] relative overflow-hidden flex flex-col items-center shadow-2xl">
              <div className="w-full h-7 bg-[#1c1917] rounded-t-full" />
              {/* Glasses */}
              <div className="w-10 h-3 border-2 border-black rounded mt-3" />
            </div>
            <div className="absolute bottom-0 w-24 sm:w-32 h-14 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-t-3xl border-t border-zinc-500" />
          </div>
        </div>
      </div>
    );
  }

  // 3. HELLO INTERVIEW SYSTEM DESIGN
  if (type === 'hello-interview') {
    return (
      <div className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-r from-[#78350f] via-[#b45309] to-[#d97706] select-none ${className}`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
        
        <div className="absolute top-2.5 left-3 sm:top-3.5 sm:left-4 z-10">
          <div className="text-white font-black text-xs sm:text-sm tracking-wider uppercase drop-shadow-md">
            HELLO INTERVIEW
          </div>
          <div className="text-[#FFE600] font-black text-sm sm:text-lg lg:text-xl tracking-tight leading-none drop-shadow-md">
            SYSTEM DESIGN
          </div>
        </div>

        {renderSystemDesignTechBadges()}

        <div className="absolute right-1 sm:right-3 bottom-0 w-2/5 h-full flex items-end justify-center">
          <div className="relative w-28 sm:w-36 h-full flex items-end justify-center">
            <div className="w-14 sm:w-18 h-16 sm:h-20 rounded-full bg-[#fde047] border-2 border-[#ca8a04] relative overflow-hidden flex flex-col items-center shadow-2xl">
              <div className="w-full h-6 bg-[#78350f] rounded-t-full" />
              <div className="w-10 h-3 border-2 border-zinc-900 rounded mt-3" />
            </div>
            <div className="absolute bottom-0 w-24 sm:w-32 h-14 bg-gradient-to-r from-zinc-900 to-black rounded-t-3xl border-t border-zinc-700" />
          </div>
        </div>
      </div>
    );
  }

  // 4. CODE ARYAN SYSTEM DESIGN
  if (type === 'code-aryan') {
    return (
      <div className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-r from-[#7f1d1d] via-[#991b1b] to-[#b91c1c] select-none ${className}`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
        
        <div className="absolute top-2.5 left-3 sm:top-3.5 sm:left-4 z-10">
          <div className="text-white font-black text-xs sm:text-sm tracking-wider uppercase drop-shadow-md">
            CODE ARYAN
          </div>
          <div className="text-[#FFE600] font-black text-sm sm:text-lg lg:text-xl tracking-tight leading-none drop-shadow-md">
            SYSTEM DESIGN
          </div>
        </div>

        {renderSystemDesignTechBadges()}

        <div className="absolute right-1 sm:right-3 bottom-0 w-2/5 h-full flex items-end justify-center">
          <div className="relative w-28 sm:w-36 h-full flex items-end justify-center">
            <div className="w-14 sm:w-18 h-16 sm:h-20 rounded-full bg-[#fcd34d] border-2 border-[#d97706] relative overflow-hidden flex flex-col items-center shadow-2xl">
              <div className="w-full h-6 bg-[#18181b] rounded-t-full" />
              <div className="w-9 h-3 border-2 border-zinc-900 rounded mt-3" />
            </div>
            <div className="absolute bottom-0 w-24 sm:w-32 h-14 bg-gradient-to-r from-red-800 to-rose-900 rounded-t-3xl border-t border-red-400" />
          </div>
        </div>
      </div>
    );
  }

  // 5. CODER ARMY SYSTEM DESIGN
  if (type === 'coder-army') {
    return (
      <div className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#059669] select-none ${className}`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
        
        <div className="absolute top-2.5 left-3 sm:top-3.5 sm:left-4 z-10">
          <div className="text-white font-black text-xs sm:text-sm tracking-wider uppercase drop-shadow-md">
            CODER ARMY
          </div>
          <div className="text-[#FFE600] font-black text-sm sm:text-lg lg:text-xl tracking-tight leading-none drop-shadow-md">
            SYSTEM DESIGN
          </div>
        </div>

        {renderSystemDesignTechBadges()}

        <div className="absolute right-1 sm:right-3 bottom-0 w-2/5 h-full flex items-end justify-center">
          <div className="relative w-28 sm:w-36 h-full flex items-end justify-center">
            <div className="w-14 sm:w-18 h-16 sm:h-20 rounded-full bg-[#fde68a] border-2 border-[#b45309] relative overflow-hidden flex flex-col items-center shadow-2xl">
              <div className="w-full h-6 bg-[#18181b] rounded-t-full" />
            </div>
            <div className="absolute bottom-0 w-24 sm:w-32 h-14 bg-gradient-to-r from-blue-700 to-sky-800 rounded-t-3xl border-t border-sky-400" />
          </div>
        </div>
      </div>
    );
  }

  // 6. ENGINEERING DIGEST SYSTEM DESIGN
  if (type === 'engineering-digest') {
    return (
      <div className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-r from-[#854d0e] via-[#a16207] to-[#ca8a04] select-none ${className}`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
        
        <div className="absolute top-2.5 left-3 sm:top-3.5 sm:left-4 z-10">
          <div className="text-white font-black text-xs sm:text-sm tracking-wider uppercase drop-shadow-md">
            ENGINEERING DIGEST
          </div>
          <div className="text-[#FFE600] font-black text-sm sm:text-lg lg:text-xl tracking-tight leading-none drop-shadow-md">
            SYSTEM DESIGN
          </div>
        </div>

        {renderSystemDesignTechBadges()}

        <div className="absolute right-1 sm:right-3 bottom-0 w-2/5 h-full flex items-end justify-center">
          <div className="relative w-28 sm:w-36 h-full flex items-end justify-center">
            <div className="w-14 sm:w-18 h-16 sm:h-20 rounded-full bg-[#fde68a] border-2 border-[#ca8a04] relative overflow-hidden flex flex-col items-center shadow-2xl">
              <div className="w-full h-7 bg-[#1c1917] rounded-t-full" />
              <div className="w-10 h-3 border-2 border-black rounded mt-3" />
            </div>
            <div className="absolute bottom-0 w-24 sm:w-32 h-14 bg-gradient-to-r from-zinc-900 to-black rounded-t-3xl border-t border-zinc-700" />
          </div>
        </div>
      </div>
    );
  }

  // DEFAULT / LOVE BABBAR FALLBACK
  return (
    <div className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-r from-[#031d3d] via-[#053b70] to-[#0a5296] select-none ${className}`}>
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />

      <div className="absolute inset-y-0 left-0 w-3/5 p-3.5 sm:p-5 flex flex-col justify-center z-10">
        <div className="text-white font-extrabold text-xs sm:text-sm lg:text-base tracking-wider drop-shadow-md uppercase">
          {type.replace('-', ' ').toUpperCase()}
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
          <div className="w-12 sm:w-16 h-14 sm:h-18 rounded-full bg-[#e0ac69] border-2 border-[#b07b46] relative overflow-hidden flex flex-col items-center shadow-lg">
            <div className="w-full h-6 bg-[#1c1917] rounded-t-full" />
          </div>
          <div className="absolute bottom-0 w-20 sm:w-30 h-12 sm:h-16 bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800 rounded-t-3xl border-t-2 border-sky-400" />
        </div>
      </div>
    </div>
  );
};
