import React from 'react';

interface TeachFlowLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  textClassName?: string;
  glow?: boolean;
}

export const TeachFlowLogo: React.FC<TeachFlowLogoProps> = ({
  className = '',
  size = 36,
  showText = false,
  textClassName = '',
  glow = true,
}) => {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Centered Logo Icon Container with Ambient Glow */}
      <div
        className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: dimension, height: dimension }}
      >
        {/* Ambient Neon Bloom Behind Icon */}
        {glow && (
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/30 via-blue-600/30 to-indigo-600/25 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ transform: 'scale(1.15)' }}
          />
        )}

        {/* Crisp Centralized Logo Image Asset */}
        <img
          src="/logo.png"
          alt="HackPath Logo"
          className="relative z-10 w-full h-full object-contain rounded-xl drop-shadow-[0_2px_12px_rgba(56,189,248,0.25)] select-none pointer-events-none"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Brand Text */}
      {showText && (
        <div className={`flex flex-col justify-center ${textClassName}`}>
          <span
            className={`font-lexend font-black text-xl tracking-tight flex items-center gap-1.5 leading-none transition-colors ${
              textClassName.includes('text-') ? '' : 'text-zinc-900 dark:text-white'
            }`}
          >
            HackPath
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block shadow-[0_0_8px_#38bdf8]" />
          </span>
        </div>
      )}
    </div>
  );
};
