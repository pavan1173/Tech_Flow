import sharp from 'sharp';
import fs from 'fs';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Background Space Gradient -->
    <radialGradient id="bgGlow" cx="50%" cy="38%" r="65%">
      <stop offset="0%" stop-color="#0c162b"/>
      <stop offset="40%" stop-color="#060b17"/>
      <stop offset="75%" stop-color="#020409"/>
      <stop offset="100%" stop-color="#000103"/>
    </radialGradient>

    <!-- Outer Squircle Neon Glow Gradient -->
    <linearGradient id="neonStroke" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00d2ff"/>
      <stop offset="25%" stop-color="#38bdf8"/>
      <stop offset="60%" stop-color="#2563eb"/>
      <stop offset="85%" stop-color="#1d4ed8"/>
      <stop offset="100%" stop-color="#00d2ff"/>
    </linearGradient>

    <!-- T Top Bar Front Face Gradient -->
    <linearGradient id="tBarFront" x1="0%" y1="0%" x2="100%" y2="60%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="35%" stop-color="#0ea5e9"/>
      <stop offset="70%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#1e40af"/>
    </linearGradient>

    <!-- T Top Crest Highlight -->
    <linearGradient id="tTopHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e0f2fe"/>
      <stop offset="30%" stop-color="#7dd3fc"/>
      <stop offset="70%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>

    <!-- T Top Bar Right Bevel Wedge -->
    <linearGradient id="tRightBevel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0369a1"/>
      <stop offset="50%" stop-color="#1e3a8a"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>

    <!-- T Stem Front Gradient -->
    <linearGradient id="tStemFront" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="25%" stop-color="#0ea5e9"/>
      <stop offset="60%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>

    <!-- T Stem Left Shoulder & Bevel Reflection -->
    <linearGradient id="tLeftBevel" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#bae6fd" stop-opacity="0.95"/>
      <stop offset="40%" stop-color="#38bdf8" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
    </linearGradient>

    <!-- F Top Wing Main Gradient -->
    <linearGradient id="fWingFront" x1="0%" y1="0%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="40%" stop-color="#f8fafc"/>
      <stop offset="70%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>

    <!-- F Wing Crest High Gloss -->
    <linearGradient id="fWingCrest" x1="0%" y1="0%" x2="100%" y2="20%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#ffffff"/>
      <stop offset="85%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>

    <!-- F Middle Bar Front -->
    <linearGradient id="fMiddleBar" x1="0%" y1="0%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#f8fafc"/>
      <stop offset="85%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#93c5fd"/>
    </linearGradient>

    <!-- F Middle Bar Shadow Underside -->
    <linearGradient id="fMiddleShadow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1d4ed8"/>
      <stop offset="60%" stop-color="#1e3a8a"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>

    <!-- F Stem Front Gradient -->
    <linearGradient id="fStemFront" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="25%" stop-color="#e2e8f0"/>
      <stop offset="55%" stop-color="#93c5fd"/>
      <stop offset="80%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>

    <!-- Glow & Shadow Filters -->
    <filter id="neonHalo" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="16" result="blur1"/>
      <feGaussianBlur stdDeviation="6" result="blur2"/>
      <feMerge>
        <feMergeNode in="blur1"/>
        <feMergeNode in="blur2"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="monogramShadow" x="-25%" y="-25%" width="150%" height="150%">
      <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#000000" flood-opacity="0.95"/>
    </filter>
  </defs>

  <!-- Solid Canvas Background -->
  <rect width="512" height="512" fill="#000000"/>

  <!-- 1. Ambient Outer Neon Glow -->
  <rect x="46" y="46" width="420" height="420" rx="98" fill="none" stroke="url(#neonStroke)" stroke-width="12" opacity="0.5" filter="url(#neonHalo)"/>

  <!-- 2. Dark Squircle Body -->
  <rect x="48" y="48" width="416" height="416" rx="96" fill="url(#bgGlow)"/>

  <!-- Glowing Border Lines -->
  <rect x="48" y="48" width="416" height="416" rx="96" fill="none" stroke="url(#neonStroke)" stroke-width="4"/>
  <rect x="50" y="50" width="412" height="412" rx="94" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.6"/>

  <!-- Subsurface Cyan Light Spot -->
  <circle cx="256" cy="246" r="140" fill="#0284c7" opacity="0.15" filter="url(#neonHalo)"/>

  <!-- ========================================================= -->
  <!-- 3. MONOGRAM "TF" (ACCURATE INTERLOCKING 3D EMBLEM) -->
  <!-- ========================================================= -->
  <g filter="url(#monogramShadow)">

    <!-- ======================================================= -->
    <!-- LETTER "T" (LEFT EMBLEM) -->
    <!-- ======================================================= -->

    <!-- T - Top Bar Main Body -->
    <!-- Starts at left beak (100, 196), curves up to (150, 140), runs across to (236, 140), bevels down to stem (226, 180), curves to left shoulder (176, 180), and sweeps down-left to beak -->
    <path d="M 100 196 C 112 160 144 140 196 138 L 236 138 L 236 180 L 176 180 C 146 180 120 186 100 196 Z"
          fill="url(#tBarFront)"/>

    <!-- T - Top Crest Specular Highlight Line -->
    <path d="M 106 190 C 120 154 150 140 196 139 L 236 139 L 236 156 L 194 156 C 148 156 122 172 106 190 Z"
          fill="url(#tTopHighlight)"
          opacity="0.95"/>

    <!-- T - Left Beak Fin Highlight -->
    <path d="M 102 196 C 114 164 136 146 176 142 C 148 146 126 164 114 196 Z"
          fill="#ffffff"
          opacity="0.85"/>

    <!-- T - Top Right 3D Bevel Wedge (Connecting to Stem) -->
    <path d="M 218 138 L 236 138 L 236 180 L 226 180 Z"
          fill="url(#tRightBevel)"/>

    <!-- T - Vertical Stem Front Face (With Tapered Shield Point) -->
    <!-- Left edge: (176, 180) to (176, 350) to (226, 404). Right edge: (226, 404) to (226, 180) -->
    <path d="M 176 180 L 226 180 L 226 404 L 216 402 L 176 350 Z"
          fill="url(#tStemFront)"/>

    <!-- T - Left Bevel Edge Highlight on Stem -->
    <path d="M 176 180 L 188 180 L 188 356 L 176 342 Z"
          fill="url(#tLeftBevel)"/>

    <!-- T - Crisp Center Catchlight Stripe along Stem -->
    <path d="M 186 180 L 190 180 L 190 358 L 186 354 Z"
          fill="#ffffff"
          opacity="0.45"/>

    <!-- ======================================================= -->
    <!-- LETTER "F" (RIGHT EMBLEM) -->
    <!-- ======================================================= -->

    <!-- F - Main Sweeping Body with Symmetrical Tapered Shield Point -->
    <!-- Left edge: (242, 202) down to (242, 404). Bottom edge: (242, 404) up-right to (288, 368). -->
    <path d="M 242 202 C 242 172 268 152 306 142 C 348 132 396 140 424 168 C 418 188 402 214 382 226 C 350 244 316 244 288 244 L 288 268 L 388 268 C 392 280 382 296 364 306 C 344 316 318 316 288 316 L 288 348 L 242 404 Z"
          fill="url(#fStemFront)"/>

    <!-- F - Top Wing Aerodynamic Sweep (Pure White to Silver) -->
    <path d="M 242 202 C 242 172 268 152 306 142 C 348 132 396 140 424 168 C 418 188 402 214 382 226 C 350 244 316 244 288 244 C 288 222 284 192 300 176 C 314 162 338 156 372 154 C 330 162 292 180 288 216 L 288 244 Z"
          fill="url(#fWingFront)"/>

    <!-- F - Top Wing Crest Brilliant Specular Glint -->
    <path d="M 306 142 C 348 132 396 140 424 168 C 406 182 388 200 360 210 C 330 220 306 200 306 142 Z"
          fill="url(#fWingCrest)"/>

    <!-- F - Top Wingtip Edge Crisp Highlight -->
    <path d="M 352 138 C 382 142 414 152 424 168 C 416 176 400 186 384 192 C 398 174 402 164 394 156 C 382 148 368 144 352 138 Z"
          fill="#ffffff"
          opacity="0.95"/>

    <!-- F - Middle Arm 3D Face -->
    <path d="M 288 268 L 388 268 C 392 280 382 296 364 306 C 344 316 318 316 288 316 Z"
          fill="url(#fMiddleBar)"/>

    <!-- F - Middle Arm Top Specular Edge -->
    <path d="M 288 268 L 386 268 C 390 274 386 280 378 284 L 288 284 Z"
          fill="#ffffff"
          opacity="0.9"/>

    <!-- F - Middle Arm Underside Deep Sapphire Shadow -->
    <path d="M 288 286 L 374 286 C 362 298 344 308 318 312 L 288 312 Z"
          fill="url(#fMiddleShadow)"
          opacity="0.75"/>

    <!-- F - Bottom Stem Light Catching Gradient -->
    <path d="M 242 300 L 288 300 L 288 348 L 242 404 Z"
          fill="url(#fStemFront)"/>

    <!-- Central Symmetrical V-Point Accent at Bottom -->
    <path d="M 216 402 L 226 404 L 242 404 L 242 396 L 234 408 Z"
          fill="#0284c7"
          opacity="0.7"/>
  </g>
</svg>`;

async function render() {
  fs.writeFileSync('public/logo.svg', svgContent);
  await sharp(Buffer.from(svgContent))
    .resize(1024, 1024)
    .png()
    .toFile('public/logo.png');
  console.log('Successfully written public/logo.svg and public/logo.png (1024x1024)');
}

render().catch(console.error);
