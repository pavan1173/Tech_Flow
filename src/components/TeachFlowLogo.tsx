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
  size = 32,
  showText = false,
  textClassName = '',
  glow = true,
}) => {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* 3D Glowing Neon App Logo Icon */}
      <div
        className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: dimension, height: dimension }}
      >
        {/* Ambient Neon Bloom Behind Icon */}
        {glow && (
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/30 via-blue-600/30 to-purple-600/30 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ transform: 'scale(1.15)' }}
          />
        )}

        {/* SVG Logo Graphic */}
        <svg
          viewBox="0 0 512 512"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-full h-full drop-shadow-[0_4px_16px_rgba(56,189,248,0.25)]"
        >
          <defs>
            {/* Background Gradient */}
            <radialGradient id="tfBgGlowFinal" cx="50%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="40%" stopColor="#070d1d" />
              <stop offset="80%" stopColor="#02040a" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>

            {/* Outer Squircle Border Glow Gradient */}
            <linearGradient id="tfBorderFinal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="30%" stopColor="#3b82f6" />
              <stop offset="60%" stopColor="#6366f1" />
              <stop offset="85%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            {/* T Gradients */}
            <linearGradient id="tfTTopBarFinal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="35%" stopColor="#38bdf8" />
              <stop offset="75%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>

            <linearGradient id="tfTTopHighlightFinal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="40%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            <linearGradient id="tfTStemFrontFinal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d2ff" />
              <stop offset="35%" stopColor="#0284c7" />
              <stop offset="70%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#075985" />
            </linearGradient>

            <linearGradient id="tfTStemBevelFinal" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.9" />
              <stop offset="45%" stopColor="#0284c7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#082f49" stopOpacity="0" />
            </linearGradient>

            {/* F Gradients */}
            <linearGradient id="tfFFrontFinal" x1="0%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#f8fafc" />
              <stop offset="60%" stopColor="#e2e8f0" />
              <stop offset="85%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            <linearGradient id="tfFTopFlareFinal" x1="0%" y1="0%" x2="100%" y2="40%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f8fafc" />
              <stop offset="85%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#c7d2fe" />
            </linearGradient>

            <linearGradient id="tfFMiddleBarFinal" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>

            <linearGradient id="tfFPurpleShadeFinal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>

            {/* Orbital Swoosh Gradient */}
            <linearGradient id="tfSwooshGradFinal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f5ff" />
              <stop offset="30%" stopColor="#38bdf8" />
              <stop offset="55%" stopColor="#60a5fa" />
              <stop offset="75%" stopColor="#a855f7" />
              <stop offset="90%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>

            {/* Glow & Shadow Filters */}
            <filter id="tfNeonGlowFinal" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="14" result="blur1" />
              <feGaussianBlur stdDeviation="6" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="tfSwooshGlowFinal" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="9" result="blur1" />
              <feGaussianBlur stdDeviation="3.5" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="tfSoftShadowFinal" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.85" />
            </filter>
          </defs>

          {/* 1. Neon Aura Background Edge */}
          <rect
            x="52"
            y="52"
            width="408"
            height="408"
            rx="100"
            fill="none"
            stroke="url(#tfBorderFinal)"
            strokeWidth="12"
            opacity="0.45"
            filter="url(#tfNeonGlowFinal)"
          />

          {/* 2. Squircle Body */}
          <rect x="54" y="54" width="404" height="404" rx="98" fill="url(#tfBgGlowFinal)" />
          <rect x="54" y="54" width="404" height="404" rx="98" fill="none" stroke="url(#tfBorderFinal)" strokeWidth="4.5" />
          <rect x="56" y="56" width="400" height="400" rx="96" fill="none" stroke="#38bdf8" strokeWidth="1.2" opacity="0.6" />

          {/* 3. Subtle Inner Glows */}
          <circle cx="230" cy="245" r="140" fill="#0284c7" opacity="0.16" filter="url(#tfNeonGlowFinal)" />
          <circle cx="340" cy="275" r="110" fill="#a855f7" opacity="0.14" filter="url(#tfNeonGlowFinal)" />

          {/* 4. Monogram Elements (TF) - Clean Final Version */}
          <g filter="url(#tfSoftShadowFinal)">
            {/* Back portion of the swoosh loop */}
            <path
              d="M 124 316 C 96 280 96 230 134 212 C 160 200 178 206 186 218"
              stroke="url(#tfSwooshGradFinal)"
              strokeWidth="14"
              strokeLinecap="round"
              opacity="0.9"
              filter="url(#tfSwooshGlowFinal)"
            />

            {/* Letter "T" Top Bar */}
            <path
              d="M 104 194 C 112 162 136 148 184 146 L 278 146 C 284 156 276 172 264 182 C 248 194 234 196 218 196 L 172 196 C 142 196 120 198 104 194 Z"
              fill="url(#tfTTopBarFinal)"
            />

            {/* T Top Bevel Highlight Edge */}
            <path
              d="M 110 188 C 120 158 144 148 186 147 L 274 147 C 262 158 248 168 224 168 L 172 168 C 136 168 120 176 110 188 Z"
              fill="url(#tfTTopHighlightFinal)"
              opacity="0.45"
            />

            {/* T Vertical Stem */}
            <path
              d="M 170 196 L 218 196 L 218 360 C 218 376 198 392 178 386 C 172 384 170 374 170 364 L 170 196 Z"
              fill="url(#tfTStemFrontFinal)"
            />

            {/* T Left Accent Bevel */}
            <path
              d="M 170 196 L 182 196 L 182 372 C 174 366 170 358 170 348 Z"
              fill="#67e8f9"
              opacity="0.75"
            />

            {/* T Front Gradient Sheen */}
            <path
              d="M 170 196 L 218 196 L 218 360 C 218 376 198 392 178 386 C 172 384 170 374 170 364 L 170 196 Z"
              fill="url(#tfTStemBevelFinal)"
            />

            {/* Letter "F" Body - Clean Aerodynamic Wing */}
            <path
              d="M 238 214 C 238 184 260 166 294 158 C 334 148 378 152 414 134 C 418 152 402 186 384 202 C 354 226 314 228 286 230 L 286 256 L 374 256 C 390 256 392 274 378 286 C 362 298 338 298 316 298 L 286 298 L 286 364 C 286 384 266 400 248 394 C 240 390 238 380 238 368 L 238 214 Z"
              fill="url(#tfFFrontFinal)"
            />

            {/* F Top Flare Wing */}
            <path
              d="M 294 158 C 334 148 378 152 414 134 C 408 154 394 178 376 194 C 346 218 308 220 286 220 C 280 196 284 172 294 158 Z"
              fill="url(#tfFTopFlareFinal)"
            />
            <path
              d="M 296 160 C 336 150 380 154 412 137 C 396 160 372 180 344 192 C 314 204 298 198 296 160 Z"
              fill="#ffffff"
              opacity="0.6"
            />

            {/* F Middle Bar Accent */}
            <path
              d="M 286 256 L 374 256 C 390 256 392 274 378 286 C 362 298 338 298 316 298 L 286 298 Z"
              fill="url(#tfFMiddleBarFinal)"
            />
            <path
              d="M 286 258 L 370 258 C 382 260 384 270 374 278 L 286 278 Z"
              fill="#ffffff"
              opacity="0.35"
            />

            {/* F Bottom Stem Ambient Shading */}
            <path
              d="M 238 298 L 286 298 L 286 364 C 286 384 266 400 248 394 C 240 390 238 380 238 368 Z"
              fill="url(#tfFPurpleShadeFinal)"
            />

            {/* Front Orbital Swoosh Crossing Over Monogram */}
            <path
              d="M 104 274 C 120 220 180 236 244 286 C 298 326 348 358 376 344 C 392 334 394 308 372 284"
              stroke="url(#tfSwooshGradFinal)"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
              filter="url(#tfSwooshGlowFinal)"
            />

            {/* Swoosh Inner Hot Core Line */}
            <path
              d="M 108 270 C 124 224 178 238 244 286 C 298 326 348 358 374 344 C 388 336 390 314 372 290"
              stroke="#ffffff"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />
          </g>
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className={`flex flex-col ${textClassName}`}>
          <span className="font-lexend font-black text-xl tracking-tight text-zinc-900 dark:text-white flex items-center gap-1.5 leading-none">
            TeachFlow
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-ping shadow-[0_0_8px_#38bdf8]" />
          </span>
        </div>
      )}
    </div>
  );
};
