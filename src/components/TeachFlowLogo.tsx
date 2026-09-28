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
            className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/35 via-blue-600/35 to-indigo-600/30 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ transform: 'scale(1.18)' }}
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
            {/* Background Space Gradient */}
            <radialGradient id="tfBgDarkV3" cx="50%" cy="38%" r="65%">
              <stop offset="0%" stopColor="#0c1527" />
              <stop offset="45%" stopColor="#060b17" />
              <stop offset="80%" stopColor="#020409" />
              <stop offset="100%" stopColor="#000104" />
            </radialGradient>

            {/* Outer Squircle Neon Glow Gradient */}
            <linearGradient id="tfNeonBorderV3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d2ff" />
              <stop offset="30%" stopColor="#38bdf8" />
              <stop offset="60%" stopColor="#2563eb" />
              <stop offset="85%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#00d2ff" />
            </linearGradient>

            {/* Letter T Top Bar Gradients */}
            <linearGradient id="tBarFrontV3" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="40%" stopColor="#0284c7" />
              <stop offset="80%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>

            <linearGradient id="tBarTopHighlightV3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="35%" stopColor="#7dd3fc" />
              <stop offset="70%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            <linearGradient id="tBarUndersideV3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* Letter T Stem Gradients */}
            <linearGradient id="tStemFrontV3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="30%" stopColor="#0ea5e9" />
              <stop offset="65%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            <linearGradient id="tStemLeftBevelV3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </linearGradient>

            {/* Letter F Gradients */}
            <linearGradient id="fTopWingFrontV3" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#f8fafc" />
              <stop offset="75%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>

            <linearGradient id="fWingCrestHighlightV3" x1="0%" y1="0%" x2="100%" y2="20%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#ffffff" />
              <stop offset="90%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>

            <linearGradient id="fMiddleBarFrontV3" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f8fafc" />
              <stop offset="85%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>

            <linearGradient id="fMiddleBarUndersideV3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="60%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id="fStemFrontV3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#e2e8f0" />
              <stop offset="55%" stopColor="#93c5fd" />
              <stop offset="85%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* Filters for Neon Lighting */}
            <filter id="neonHaloV3" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="15" result="blur1" />
              <feGaussianBlur stdDeviation="6" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="emblemDropShadowV3" x="-25%" y="-25%" width="150%" height="150%">
              <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#000000" floodOpacity="0.9" />
            </filter>

            <filter id="specularGlowV3" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Ambient Outer Neon Glow */}
          <rect
            x="48"
            y="48"
            width="416"
            height="416"
            rx="100"
            fill="none"
            stroke="url(#tfNeonBorderV3)"
            strokeWidth="12"
            opacity="0.45"
            filter="url(#neonHaloV3)"
          />

          {/* 2. Dark Squircle Canvas */}
          <rect x="50" y="50" width="412" height="412" rx="98" fill="url(#tfBgDarkV3)" />

          {/* Glowing Bezel Borders */}
          <rect x="50" y="50" width="412" height="412" rx="98" fill="none" stroke="url(#tfNeonBorderV3)" strokeWidth="4" />
          <rect x="52" y="52" width="408" height="408" rx="96" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />

          {/* Subsurface Cyan Light Pool */}
          <circle cx="256" cy="250" r="140" fill="#0284c7" opacity="0.14" filter="url(#neonHaloV3)" />

          {/* 3. Monogram "TF" (Clean 3D Emblem without Swoosh) */}
          <g filter="url(#emblemDropShadowV3)">
            {/* Letter T - Top Bar 3D Base */}
            <path
              d="M 102 196 C 114 160 144 140 196 138 L 314 138 C 316 154 306 172 292 182 C 268 196 244 196 226 196 L 176 196 C 146 196 122 198 102 196 Z"
              fill="url(#tBarFrontV3)"
            />

            {/* T - Top Crest Specular Highlight Line */}
            <path
              d="M 108 190 C 122 154 150 140 198 139 L 312 139 C 298 152 284 166 256 166 L 176 166 C 138 166 120 176 108 190 Z"
              fill="url(#tBarTopHighlightV3)"
              opacity="0.95"
              filter="url(#specularGlowV3)"
            />

            {/* T - Top Left Flare Wingtip Catchlight */}
            <path
              d="M 104 194 C 116 164 138 144 180 140 C 152 144 130 162 118 194 Z"
              fill="#ffffff"
              opacity="0.8"
            />

            {/* T - Top Bar Underside 3D Shading */}
            <path
              d="M 226 182 C 248 182 272 180 292 172 C 302 176 308 182 308 186 C 290 198 262 198 226 196 Z"
              fill="url(#tBarUndersideV3)"
              opacity="0.6"
            />

            {/* T - Vertical Stem Front Face with Shield Point at Bottom */}
            <path
              d="M 176 196 L 226 196 L 226 398 C 226 404 220 404 216 400 L 176 348 C 176 340 176 210 176 196 Z"
              fill="url(#tStemFrontV3)"
            />

            {/* T - Left Bevel Light Reflection */}
            <path d="M 176 196 L 188 196 L 188 354 L 176 340 Z" fill="url(#tStemLeftBevelV3)" />

            {/* T - Crisp Specular Spine along Stem */}
            <path d="M 186 196 L 190 196 L 190 358 L 186 354 Z" fill="#ffffff" opacity="0.4" />

            {/* Letter F - Main Sweeping 3D Body with Clean Matching Tapered Point */}
            <path
              d="M 242 208 C 242 176 268 154 306 144 C 348 134 394 140 422 168 C 418 188 402 214 382 226 C 350 244 316 244 286 244 L 286 264 L 386 264 C 392 278 382 296 364 306 C 344 316 318 316 286 316 L 286 348 L 246 398 C 242 402 242 396 242 388 L 242 208 Z"
              fill="url(#fStemFrontV3)"
            />

            {/* F - Top Wing Aerodynamic Sweep (Pure White to Silver) */}
            <path
              d="M 242 208 C 242 176 268 154 306 144 C 348 134 394 140 422 168 C 418 188 402 214 382 226 C 350 244 316 244 286 244 C 286 222 284 192 300 176 C 314 162 338 156 372 154 C 330 162 292 180 286 216 L 286 244 Z"
              fill="url(#fTopWingFrontV3)"
            />

            {/* F - Top Wing Crest Brilliant White Specular Glint */}
            <path
              d="M 306 144 C 348 134 394 140 422 168 C 406 182 388 200 360 210 C 330 220 306 200 306 144 Z"
              fill="url(#fWingCrestHighlightV3)"
              filter="url(#specularGlowV3)"
            />

            {/* F - Top Feather Wingtip Edge Highlight */}
            <path
              d="M 352 140 C 382 144 412 152 422 168 C 414 176 400 186 384 192 C 398 174 402 164 394 156 C 382 148 368 144 352 140 Z"
              fill="#ffffff"
              opacity="0.9"
            />

            {/* F - Middle Arm 3D Body */}
            <path
              d="M 286 264 L 386 264 C 392 278 382 296 364 306 C 344 316 318 316 286 316 Z"
              fill="url(#fMiddleBarFrontV3)"
            />

            {/* F - Middle Arm Top Specular Highlight Edge */}
            <path
              d="M 286 264 L 384 264 C 388 270 384 278 376 282 L 286 282 Z"
              fill="#ffffff"
              opacity="0.85"
            />

            {/* F - Middle Arm Underside Sapphire Shadow */}
            <path
              d="M 286 286 L 372 286 C 362 298 344 308 318 312 L 286 312 Z"
              fill="url(#fMiddleBarUndersideV3)"
              opacity="0.7"
            />

            {/* F - Bottom Stem Light Catching Gradient Sheen */}
            <path d="M 242 300 L 286 300 L 286 348 L 246 398 C 242 402 242 396 242 388 Z" fill="url(#fStemFrontV3)" />

            {/* Central Symmetrical V-Point Accent at Bottom */}
            <path d="M 216 400 L 226 398 L 242 398 L 246 398 L 234 404 Z" fill="#0284c7" opacity="0.6" />
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
