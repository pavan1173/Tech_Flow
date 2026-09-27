import React from 'react';

interface TechIconProps {
  type: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ type, className = 'w-10 h-10' }) => {
  switch (type) {
    case 'dbms':
      return (
        <div className={`rounded-xl bg-[#141b2b] border border-[#223049] flex items-center justify-center p-2 text-cyan-400 shadow-sm ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
        </div>
      );

    case 'os':
      return (
        <div className={`rounded-xl bg-[#1a1c23] border border-[#2d323f] flex items-center justify-center p-2 text-zinc-200 shadow-sm ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3" />
            <path d="M15 1v3" />
            <path d="M9 20v3" />
            <path d="M15 20v3" />
            <path d="M20 9h3" />
            <path d="M20 14h3" />
            <path d="M1 9h3" />
            <path d="M1 14h3" />
          </svg>
        </div>
      );

    case 'oops':
      return (
        <div className={`rounded-xl bg-[#0e271f] border border-[#1b4332] flex items-center justify-center p-1.5 shadow-sm text-emerald-400 font-mono font-bold text-xs ${className}`}>
          <div className="border border-emerald-500/50 rounded-md p-1 flex flex-col items-center justify-center w-full h-full">
            <span className="text-[10px] tracking-tight leading-none text-emerald-300">&lt;OOP&gt;</span>
          </div>
        </div>
      );

    case 'cn':
      return (
        <div className={`rounded-xl bg-[#111e38] border border-[#1e345e] flex items-center justify-center p-2 text-sky-400 shadow-sm ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <circle cx="12" cy="12" r="3" />
            <circle cx="5" cy="6" r="2" />
            <circle cx="19" cy="6" r="2" />
            <circle cx="5" cy="18" r="2" />
            <circle cx="19" cy="18" r="2" />
            <line x1="7" y1="7" x2="10" y2="10" />
            <line x1="17" y1="7" x2="14" y2="10" />
            <line x1="7" y1="17" x2="10" y2="14" />
            <line x1="17" y1="17" x2="14" y2="14" />
          </svg>
        </div>
      );

    case 'javascript':
      return (
        <div className={`rounded-xl bg-[#eab308] flex items-center justify-center p-1.5 shadow-sm text-black font-extrabold ${className}`}>
          <span className="text-sm tracking-tighter">JS</span>
        </div>
      );

    case 'typescript':
      return (
        <div className={`rounded-xl bg-[#0284c7] flex items-center justify-center p-1.5 shadow-sm text-white font-extrabold ${className}`}>
          <span className="text-sm tracking-tighter">TS</span>
        </div>
      );

    case 'react':
      return (
        <div className={`rounded-xl bg-[#082f49] border border-[#0369a1] flex items-center justify-center p-2 text-cyan-400 shadow-sm ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full animate-spin-slow">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>
      );

    case 'nodejs':
      return (
        <div className={`rounded-xl bg-[#142918] border border-[#22542a] flex items-center justify-center p-2 text-green-400 shadow-sm ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
            <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </svg>
        </div>
      );

    case 'nextjs':
      return (
        <div className={`rounded-xl bg-black border border-zinc-700 flex items-center justify-center p-1.5 shadow-sm text-white font-black ${className}`}>
          <span className="text-base tracking-tight font-sans">N</span>
        </div>
      );

    case 'git':
      return (
        <div className={`rounded-xl bg-[#ea580c] flex items-center justify-center p-2 text-white shadow-sm ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="9" r="3" />
            <path d="M6 9v6" />
            <path d="M18 12a9 9 0 0 1-9 9" />
          </svg>
        </div>
      );

    case 'springboot':
      return (
        <div className={`rounded-xl bg-[#14532d] border border-[#16a34a] flex items-center justify-center p-2 text-emerald-300 shadow-sm ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1.9 9.2A7 7 0 0 1 11 20z" />
            <path d="m2 21 9-9" />
          </svg>
        </div>
      );

    case 'angular':
      return (
        <div className={`rounded-xl bg-[#dc2626] flex items-center justify-center p-1.5 shadow-sm text-white font-extrabold ${className}`}>
          <span className="text-sm font-sans">A</span>
        </div>
      );

    case 'java':
      return (
        <div className={`rounded-xl bg-[#7c2d12] border border-[#c2410c] flex items-center justify-center p-1.5 shadow-sm text-amber-300 font-extrabold ${className}`}>
          <span className="text-xs font-mono">JAVA</span>
        </div>
      );

    case 'python':
      return (
        <div className={`rounded-xl bg-[#1e293b] border border-[#3b82f6] flex items-center justify-center p-1.5 shadow-sm text-yellow-300 font-extrabold ${className}`}>
          <span className="text-xs font-mono text-sky-400">Py</span>
        </div>
      );

    case 'cpp':
      return (
        <div className={`rounded-xl bg-[#1e3a8a] border border-[#2563eb] flex items-center justify-center p-1.5 shadow-sm text-white font-extrabold ${className}`}>
          <span className="text-xs font-mono">C++</span>
        </div>
      );

    case 'c':
      return (
        <div className={`rounded-xl bg-[#312e81] border border-[#4338ca] flex items-center justify-center p-1.5 shadow-sm text-indigo-200 font-black ${className}`}>
          <span className="text-sm font-mono">C</span>
        </div>
      );

    case 'sql':
      return (
        <div className={`rounded-xl bg-[#064e3b] border border-[#059669] flex items-center justify-center p-1.5 shadow-sm text-emerald-300 font-extrabold ${className}`}>
          <span className="text-xs font-mono">SQL</span>
        </div>
      );

    case 'golang':
      return (
        <div className={`rounded-xl bg-[#0e7490] border border-[#06b6d4] flex items-center justify-center p-1.5 shadow-sm text-white font-black ${className}`}>
          <span className="text-xs font-mono">GO</span>
        </div>
      );

    case 'docker':
      return (
        <div className={`rounded-xl bg-[#0369a1] border border-[#38bdf8] flex items-center justify-center p-2 text-white shadow-sm ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
            <rect x="2" y="10" width="4" height="4" />
            <rect x="7" y="10" width="4" height="4" />
            <rect x="12" y="10" width="4" height="4" />
            <rect x="7" y="5" width="4" height="4" />
            <path d="M2 14c2 4 8 6 15 4 3-1 5-4 5-4" />
          </svg>
        </div>
      );

    case 'aws':
      return (
        <div className={`rounded-xl bg-[#451a03] border border-[#f59e0b] flex items-center justify-center p-1.5 shadow-sm text-amber-400 font-extrabold ${className}`}>
          <span className="text-xs font-mono">AWS</span>
        </div>
      );

    case 'linux':
      return (
        <div className={`rounded-xl bg-[#27272a] border border-[#52525b] flex items-center justify-center p-1.5 shadow-sm text-amber-200 font-extrabold ${className}`}>
          <span className="text-xs font-mono">LINUX</span>
        </div>
      );

    default:
      return (
        <div className={`rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center p-2 text-zinc-300 ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>
      );
  }
};
