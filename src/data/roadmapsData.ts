export interface RoadmapResource {
  title: string;
  url: string;
  type: 'doc' | 'video' | 'practice' | 'guide';
}

export interface RoadmapNode {
  id: string;
  title: string;
  badge?: 'recommended' | 'essential' | 'optional' | 'alternative';
  summary: string;
  keyPoints: string[];
  resources: RoadmapResource[];
  children?: {
    id: string;
    title: string;
    badge?: 'recommended' | 'essential' | 'optional' | 'alternative';
    summary?: string;
  }[];
}

export interface RoadmapStage {
  id: string;
  title: string;
  description: string;
  color?: string;
  nodes: RoadmapNode[];
}

export interface RoadmapItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  description: string;
  iconName: string;
  badge: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  estimatedHours: string;
  stages: RoadmapStage[];
}

export const ROADMAPS: RoadmapItem[] = [
  // ==========================================
  // 1. FRONTEND DEVELOPER ROADMAP (inspired by roadmap.sh/frontend)
  // ==========================================
  {
    id: 'frontend',
    slug: 'frontend',
    title: 'Frontend Developer',
    shortDesc: 'Step by step guide to becoming a modern frontend developer in 2026',
    description: 'Community-driven roadmap for modern frontend web development. Follow this structured learning path from internet foundations to modern React frameworks, CSS architectures, performance tuning, and progressive web apps.',
    iconName: 'Globe',
    badge: 'Most Popular',
    level: 'All Levels',
    estimatedHours: '120-160 Hours',
    stages: [
      {
        id: 'internet-basics',
        title: '1. Internet Fundamentals',
        description: 'Understand how the web works before writing a single line of frontend code.',
        nodes: [
          {
            id: 'how-internet-works',
            title: 'How does the Internet work?',
            badge: 'essential',
            summary: 'Understanding packets, routers, TCP/IP, client-server models, and global network infrastructure.',
            keyPoints: [
              'Packets, IP addressing (IPv4 vs IPv6)',
              'Routers, switches, and internet service providers (ISPs)',
              'Client-Server architecture and request-response cycles',
              'Latency, bandwidth, and ping'
            ],
            resources: [
              { title: 'MDN: How does the Internet work?', url: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work', type: 'doc' },
              { title: 'CrashCourse: How the Internet Works (YouTube)', url: 'https://www.youtube.com/watch?v=Dxcc6ycZ73M', type: 'video' }
            ],
            children: [
              { id: 'tcp-ip', title: 'TCP / IP Protocol', badge: 'essential' },
              { id: 'isp-routing', title: 'ISP & Routing', badge: 'recommended' }
            ]
          },
          {
            id: 'http-https',
            title: 'What is HTTP & HTTPS?',
            badge: 'essential',
            summary: 'The application layer protocol that powers all web communications, headers, status codes, and TLS encryption.',
            keyPoints: [
              'HTTP Verbs: GET, POST, PUT, PATCH, DELETE, OPTIONS',
              'Status Codes: 2xx (Success), 3xx (Redirect), 4xx (Client Error), 5xx (Server Error)',
              'HTTP Headers: Content-Type, Authorization, Cache-Control, CORS',
              'HTTPS: SSL/TLS handshake, symmetric vs asymmetric encryption, certificates',
              'HTTP/2 multiplexing and modern HTTP/3 over QUIC'
            ],
            resources: [
              { title: 'MDN: An overview of HTTP', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview', type: 'doc' },
              { title: 'Fireship: HTTP in 100 Seconds', url: 'https://www.youtube.com/watch?v=iYM2zFP3Zn0', type: 'video' }
            ],
            children: [
              { id: 'http-status-codes', title: 'Status Codes (200, 404, 500)', badge: 'essential' },
              { id: 'http-headers', title: 'Request & Response Headers', badge: 'recommended' },
              { id: 'ssl-tls', title: 'TLS / SSL Handshake', badge: 'essential' }
            ]
          },
          {
            id: 'browsers-dns',
            title: 'DNS & How Browsers Work',
            badge: 'essential',
            summary: 'How domain names resolve to IP addresses, and how browser rendering engines parse HTML/CSS into pixels on screen.',
            keyPoints: [
              'DNS lookup: Root servers, TLD servers, Authoritative nameservers, DNS caching',
              'Browser Critical Rendering Path: DOM -> CSSOM -> Render Tree -> Layout (Reflow) -> Paint (Repaint) -> Composite',
              'V8 engine, SpiderMonkey, WebKit JavaScript runtimes',
              'Event Loop and Call Stack overview'
            ],
            resources: [
              { title: 'MDN: Populating the page: how browsers work', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work', type: 'doc' },
              { title: 'Cloudflare: What is DNS?', url: 'https://www.cloudflare.com/learning/dns/what-is-dns/', type: 'doc' }
            ],
            children: [
              { id: 'dns-records', title: 'DNS Records (A, CNAME, MX, TXT)', badge: 'recommended' },
              { id: 'render-tree', title: 'DOM & CSSOM Render Tree', badge: 'essential' },
              { id: 'reflow-repaint', title: 'Reflow vs Repaint', badge: 'recommended' }
            ]
          }
        ]
      },
      {
        id: 'html-css',
        title: '2. HTML & CSS Foundations',
        description: 'The semantic skeleton and visual styling layers of every web application.',
        nodes: [
          {
            id: 'html5',
            title: 'HTML5 & Semantic Web',
            badge: 'essential',
            summary: 'Structuring pages semantically for search engines, screen readers, and human accessibility.',
            keyPoints: [
              'Semantic elements: <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>',
              'Forms: inputs, labels, validation attributes (required, pattern, type)',
              'Web Accessibility (a11y): ARIA roles, tabindex, alt text, screen reader friendly markup',
              'SEO Fundamentals: Title tags, meta descriptions, OpenGraph, Canonical URLs'
            ],
            resources: [
              { title: 'MDN: HTML Developer Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML', type: 'doc' },
              { title: 'Web.dev: Learn Accessibility', url: 'https://web.dev/learn/accessibility/', type: 'guide' }
            ],
            children: [
              { id: 'html-forms', title: 'Forms & Validation', badge: 'essential' },
              { id: 'html-a11y', title: 'Accessibility (ARIA)', badge: 'recommended' },
              { id: 'html-seo', title: 'SEO & Meta Tags', badge: 'recommended' }
            ]
          },
          {
            id: 'css-basics',
            title: 'CSS3, Box Model & Responsive Layouts',
            badge: 'essential',
            summary: 'Mastering styling, cascading rules, specificity, Flexbox, and CSS Grid.',
            keyPoints: [
              'Box Model: Margin, Border, Padding, Content (box-sizing: border-box)',
              'Specificity calculation: Inline > IDs > Classes/Attributes > Elements',
              'Flexbox: flex-direction, justify-content, align-items, flex-wrap, gap',
              'CSS Grid: grid-template-columns, fr units, minmax(), auto-fit, auto-fill',
              'Responsive design: Mobile-first media queries, clamp(), rem/em vs px'
            ],
            resources: [
              { title: 'CSS-Tricks: A Complete Guide to Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', type: 'guide' },
              { title: 'CSS-Tricks: A Complete Guide to Grid', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/', type: 'guide' }
            ],
            children: [
              { id: 'box-model', title: 'Box Model & Sizing', badge: 'essential' },
              { id: 'flexbox', title: 'Flexbox Architecture', badge: 'essential' },
              { id: 'css-grid', title: 'CSS Grid Layouts', badge: 'essential' },
              { id: 'media-queries', title: 'Responsive Media Queries', badge: 'essential' }
            ]
          }
        ]
      },
      {
        id: 'javascript-deep',
        title: '3. JavaScript (ECMAScript 6+)',
        description: 'The programming language of the web. Essential for dynamic interactions and state.',
        nodes: [
          {
            id: 'js-core',
            title: 'JavaScript Core & DOM Manipulation',
            badge: 'essential',
            summary: 'Variables, data types, DOM APIs, event delegation, and browser interactions.',
            keyPoints: [
              'Primitives vs Reference Types (Stack vs Heap)',
              'Scoping: let vs const vs var, function scope vs block scope',
              'DOM: querySelector, createElement, appendChild, classList',
              'Event Handling: addEventListener, Event Bubbling, Event Capturing, Event Delegation',
              'Local Storage, Session Storage, Cookies, IndexedDB'
            ],
            resources: [
              { title: 'javascript.info: Modern JS Tutorial', url: 'https://javascript.info/', type: 'doc' },
              { title: 'Wes Bos: JavaScript30', url: 'https://javascript30.com/', type: 'practice' }
            ],
            children: [
              { id: 'dom-api', title: 'DOM Query & Manipulation', badge: 'essential' },
              { id: 'event-delegation', title: 'Event Bubbling & Delegation', badge: 'recommended' },
              { id: 'storage-apis', title: 'Storage (LocalStorage, Cookies)', badge: 'recommended' }
            ]
          },
          {
            id: 'js-es6-async',
            title: 'ES6+ Features & Asynchronous JS',
            badge: 'essential',
            summary: 'Modern JavaScript syntax, arrow functions, destructuring, and asynchronous workflows.',
            keyPoints: [
              'ES6+: Arrow functions, destructuring, spread/rest operators, optional chaining, nullish coalescing',
              'The Event Loop: Call Stack, Web APIs, Microtask Queue (Promises), Macrotask Queue (setTimeout)',
              'Promises: resolve, reject, .then(), .catch(), .finally()',
              'Async/Await: clean async code handling and try/catch error traps',
              'Fetch API and handling JSON responses with error boundaries'
            ],
            resources: [
              { title: 'Lydia Hallie: JavaScript Event Loop Visualized', url: 'https://www.youtube.com/watch?v=eiC58R16hb8', type: 'video' },
              { title: 'MDN: How to use Promises', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises', type: 'doc' }
            ],
            children: [
              { id: 'async-await', title: 'Async / Await & Promises', badge: 'essential' },
              { id: 'event-loop', title: 'Event Loop & Microtasks', badge: 'recommended' },
              { id: 'es6-modules', title: 'ES Modules (import / export)', badge: 'essential' }
            ]
          }
        ]
      },
      {
        id: 'tools-version-control',
        title: '4. Version Control & Tooling',
        description: 'Collaborating in professional teams with Git, GitHub, and package managers.',
        nodes: [
          {
            id: 'git-github',
            title: 'Git & GitHub Workflow',
            badge: 'essential',
            summary: 'Version control commands, branching strategies, Pull Requests, merge conflicts, and GitHub Actions.',
            keyPoints: [
              'Git basics: init, status, add, commit, push, pull, log',
              'Branching: checkout -b, branch, switch, merge vs rebase',
              'Resolving merge conflicts calmly and methodically',
              'Pull Requests, code reviews, and Git flow / trunk-based development'
            ],
            resources: [
              { title: 'Git Official Documentation', url: 'https://git-scm.com/doc', type: 'doc' },
              { title: 'Learn Git Branching (Interactive Sandbox)', url: 'https://learngitbranching.js.org/', type: 'practice' }
            ],
            children: [
              { id: 'git-cli', title: 'Git CLI Essentials', badge: 'essential' },
              { id: 'git-rebase', title: 'Rebase vs Merge', badge: 'recommended' },
              { id: 'pr-workflow', title: 'Pull Requests & Code Review', badge: 'recommended' }
            ]
          },
          {
            id: 'package-managers',
            title: 'Package Managers: npm / pnpm / yarn',
            badge: 'essential',
            summary: 'Managing dependencies, package.json scripts, lockfiles, and semantic versioning.',
            keyPoints: [
              'Understanding package.json and package-lock.json',
              'dependencies vs devDependencies vs peerDependencies',
              'Semantic Versioning: Major.Minor.Patch (^ vs ~)',
              'pnpm hard-linking efficiency vs npm vs bun'
            ],
            resources: [
              { title: 'npm Docs: package.json guide', url: 'https://docs.npmjs.com/cli/v10/configuring-npm/package-json', type: 'doc' }
            ],
            children: [
              { id: 'npm-scripts', title: 'npm / pnpm Scripts', badge: 'essential' },
              { id: 'semver', title: 'Semantic Versioning (^ vs ~)', badge: 'recommended' }
            ]
          }
        ]
      },
      {
        id: 'modern-frameworks',
        title: '5. Pick a Frontend Framework',
        description: 'Component-driven architectures, reactive state, and declarative UI development.',
        nodes: [
          {
            id: 'react-ecosystem',
            title: 'React.js (Recommended)',
            badge: 'recommended',
            summary: 'The industry-standard UI library: JSX, Components, Hooks, State Management, and routing.',
            keyPoints: [
              'JSX & Component Lifecycle (render phases, Virtual DOM diffing)',
              'Core Hooks: useState, useEffect, useRef, useMemo, useCallback, useContext',
              'Custom Hooks for reusable logic abstraction',
              'Client-side Routing: React Router v6 / TanStack Router',
              'Global State: Zustand (Recommended), Redux Toolkit, Context API',
              'Server State & Caching: TanStack Query (React Query)'
            ],
            resources: [
              { title: 'React Official Documentation (react.dev)', url: 'https://react.dev/', type: 'doc' },
              { title: 'TanStack Query Docs', url: 'https://tanstack.com/query/latest', type: 'doc' },
              { title: 'Zustand GitHub Documentation', url: 'https://github.com/pmndrs/zustand', type: 'doc' }
            ],
            children: [
              { id: 'react-hooks', title: 'React Hooks (State, Effects, Refs)', badge: 'essential' },
              { id: 'react-router', title: 'Client Routing (React Router)', badge: 'essential' },
              { id: 'zustand-state', title: 'Zustand / Redux Toolkit', badge: 'recommended' },
              { id: 'tanstack-query', title: 'TanStack Query (Server State)', badge: 'recommended' }
            ]
          },
          {
            id: 'vue-angular',
            title: 'Alternative Frameworks: Vue.js / Angular',
            badge: 'alternative',
            summary: 'Popular enterprise alternatives with powerful composition and dependency injection features.',
            keyPoints: [
              'Vue 3: Composition API, Single File Components (.vue), Pinia state, Vue Router',
              'Angular: TypeScript-first, Signals, RxJS Observables, Dependency Injection'
            ],
            resources: [
              { title: 'Vue.js Documentation', url: 'https://vuejs.org/', type: 'doc' },
              { title: 'Angular Documentation', url: 'https://angular.dev/', type: 'doc' }
            ],
            children: [
              { id: 'vue-composition', title: 'Vue 3 Composition API', badge: 'alternative' },
              { id: 'angular-signals', title: 'Angular Signals & RxJS', badge: 'alternative' }
            ]
          }
        ]
      },
      {
        id: 'modern-styling-builds',
        title: '6. Modern Styling & Build Tools',
        description: 'Utility-first styling, bundle bundlers, and developer ergonomics.',
        nodes: [
          {
            id: 'tailwind-css',
            title: 'Tailwind CSS (Utility-First)',
            badge: 'recommended',
            summary: 'Utility-first CSS framework for rapid, responsive UI development without leaving your JSX.',
            keyPoints: [
              'Utility classes for typography, flex/grid layouts, borders, and spacing',
              'Pseudo-class modifiers: hover:, focus:, active:, dark:, group-hover:',
              'Responsive design modifiers: sm:, md:, lg:, xl:, 2xl:',
              'Arbitrary values, theme customization, Tailwind v4 @import syntax'
            ],
            resources: [
              { title: 'Tailwind CSS Official Documentation', url: 'https://tailwindcss.com/docs', type: 'doc' }
            ],
            children: [
              { id: 'tailwind-responsive', title: 'Responsive & Dark Mode', badge: 'essential' },
              { id: 'tailwind-v4', title: 'Tailwind v4 Engine', badge: 'recommended' }
            ]
          },
          {
            id: 'vite-build-tools',
            title: 'Vite & Modern Bundlers',
            badge: 'essential',
            summary: 'Lightning fast development server using native ES Modules and Rollup production builds.',
            keyPoints: [
              'Native ESM based dev server with instant Hot Module Replacement (HMR)',
              'Rollup-based optimized production tree-shaking and asset hashing',
              'Environment variables: import.meta.env.VITE_*',
              'TypeScript compilation & Babel / SWC / esbuild transpilation'
            ],
            resources: [
              { title: 'Vite Official Guide', url: 'https://vite.dev/guide/', type: 'doc' }
            ],
            children: [
              { id: 'vite-config', title: 'vite.config.ts & Plugins', badge: 'essential' },
              { id: 'ts-setup', title: 'TypeScript Integration (tsconfig)', badge: 'essential' }
            ]
          }
        ]
      },
      {
        id: 'ssr-nextjs',
        title: '7. SSR & Full-Stack Meta-Frameworks',
        description: 'Server-Side Rendering, Static Site Generation, and Edge Computing with Next.js.',
        nodes: [
          {
            id: 'nextjs',
            title: 'Next.js (App Router)',
            badge: 'recommended',
            summary: 'The leading React framework: React Server Components (RSC), App Router, dynamic routing, and API routes.',
            keyPoints: [
              'React Server Components (RSC) vs Client Components ("use client")',
              'File-system based App Router: layout.tsx, page.tsx, loading.tsx, error.tsx',
              'Data fetching: Server actions, fetch caching, revalidatePath, ISR',
              'Metadata API and SEO generation (OpenGraph, Twitter cards)',
              'Edge Runtime and middleware authentication'
            ],
            resources: [
              { title: 'Next.js App Router Documentation', url: 'https://nextjs.org/docs', type: 'doc' },
              { title: 'Learn Next.js (Official Interactive Course)', url: 'https://nextjs.org/learn', type: 'practice' }
            ],
            children: [
              { id: 'rsc', title: 'Server Components vs Client Components', badge: 'essential' },
              { id: 'server-actions', title: 'Server Actions & Mutations', badge: 'recommended' },
              { id: 'isr-caching', title: 'Incremental Static Regeneration (ISR)', badge: 'recommended' }
            ]
          }
        ]
      },
      {
        id: 'testing-security-perf',
        title: '8. Testing, Security & Web Performance',
        description: 'Delivering bulletproof, blazing-fast, and secure web applications.',
        nodes: [
          {
            id: 'frontend-testing',
            title: 'Frontend Testing (Vitest & Playwright)',
            badge: 'essential',
            summary: 'Unit testing, integration testing, and end-to-end browser automation.',
            keyPoints: [
              'Unit testing with Vitest / Jest: test suites, expect assertions, mocking',
              'React Testing Library: testing user behavior instead of implementation details',
              'End-to-End (E2E) testing with Playwright or Cypress across browsers',
              'Accessibility automated testing with axe-core'
            ],
            resources: [
              { title: 'Vitest Official Guide', url: 'https://vitest.dev/guide/', type: 'doc' },
              { title: 'Testing Library Docs', url: 'https://testing-library.com/docs/react-testing-library/intro/', type: 'doc' }
            ],
            children: [
              { id: 'vitest-unit', title: 'Vitest & React Testing Library', badge: 'essential' },
              { id: 'playwright-e2e', title: 'Playwright E2E Automation', badge: 'recommended' }
            ]
          },
          {
            id: 'web-performance-vitals',
            title: 'Core Web Vitals & Optimization',
            badge: 'essential',
            summary: 'LCP, FID/INP, CLS, lazy loading, image optimization, and bundle splitting.',
            keyPoints: [
              'LCP (Largest Contentful Paint), INP (Interaction to Next Paint), CLS (Cumulative Layout Shift)',
              'Image optimization: modern formats (WebP, AVIF), responsive srcset, lazy loading',
              'Dynamic imports (React.lazy) and route-level code splitting',
              'Minimizing JavaScript execution time and bundle size'
            ],
            resources: [
              { title: 'web.dev: Core Web Vitals', url: 'https://web.dev/vitals/', type: 'guide' },
              { title: 'Lighthouse Performance Auditing', url: 'https://developer.chrome.com/docs/lighthouse/overview/', type: 'doc' }
            ],
            children: [
              { id: 'cwv-metrics', title: 'Core Web Vitals (LCP, INP, CLS)', badge: 'essential' },
              { id: 'code-splitting', title: 'Code Splitting & Lazy Loading', badge: 'recommended' }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // 2. BACKEND DEVELOPER ROADMAP
  // ==========================================
  {
    id: 'backend',
    slug: 'backend',
    title: 'Backend Developer',
    shortDesc: 'Step by step guide to server architecture, databases, APIs, and cloud deployments',
    description: 'Learn modern backend engineering: language mastery (Node.js/Go/Python), relational and NoSQL databases, RESTful and GraphQL APIs, caching, authentication, Docker, and distributed systems.',
    iconName: 'Server',
    badge: 'High Demand',
    level: 'Intermediate',
    estimatedHours: '150-180 Hours',
    stages: [
      {
        id: 'backend-language',
        title: '1. Pick a Backend Language',
        description: 'Choose a primary programming language and master its concurrency and runtime model.',
        nodes: [
          {
            id: 'nodejs-typescript',
            title: 'Node.js & TypeScript (Recommended)',
            badge: 'recommended',
            summary: 'Asynchronous event-driven JavaScript/TypeScript backend runtime powered by Chrome V8.',
            keyPoints: [
              'Event-driven, non-blocking I/O model and libuv thread pool',
              'TypeScript typing: interfaces, generics, type narrowing, strict mode',
              'Frameworks: Express.js (classic), Fastify (high-performance), NestJS (enterprise architecture)'
            ],
            resources: [
              { title: 'Node.js Official Documentation', url: 'https://nodejs.org/docs/latest/api/', type: 'doc' },
              { title: 'TypeScript Official Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', type: 'doc' }
            ],
            children: [
              { id: 'express-fastify', title: 'Express.js & Fastify', badge: 'essential' },
              { id: 'nestjs', title: 'NestJS Architecture', badge: 'recommended' }
            ]
          },
          {
            id: 'python-go',
            title: 'Python / Go / Java',
            badge: 'alternative',
            summary: 'High performance or AI-friendly backend languages widely used in cloud microservices.',
            keyPoints: [
              'Python: FastAPI, Django, AsyncIO, Pydantic data validation',
              'Go (Golang): Goroutines, Channels, Gin framework, microsecond latency',
              'Java: Spring Boot, JVM garbage collection, enterprise reliability'
            ],
            resources: [
              { title: 'FastAPI Documentation', url: 'https://fastapi.tiangolo.com/', type: 'doc' },
              { title: 'Tour of Go', url: 'https://go.dev/tour/', type: 'practice' }
            ],
            children: [
              { id: 'fastapi-python', title: 'FastAPI & AsyncIO', badge: 'alternative' },
              { id: 'golang-goroutines', title: 'Go & Goroutines', badge: 'alternative' }
            ]
          }
        ]
      },
      {
        id: 'databases',
        title: '2. Relational & NoSQL Databases',
        description: 'Storing, indexing, modeling, and querying persistent data at scale.',
        nodes: [
          {
            id: 'postgresql-sql',
            title: 'PostgreSQL & Relational Data (ACID)',
            badge: 'recommended',
            summary: 'The world\'s most advanced open-source relational database: transactions, schemas, and complex joins.',
            keyPoints: [
              'ACID Properties: Atomicity, Consistency, Isolation, Durability',
              'SQL Schema design: 1-to-1, 1-to-Many, Many-to-Many relationships and Foreign Keys',
              'Indexing: B-Tree indexes, Composite indexes, EXPLAIN ANALYZE query planning',
              'ORMs: Drizzle ORM (lightweight, typesafe), Prisma, TypeORM'
            ],
            resources: [
              { title: 'PostgreSQL Official Documentation', url: 'https://www.postgresql.org/docs/', type: 'doc' },
              { title: 'Use The Index, Luke (SQL Indexing Guide)', url: 'https://use-the-index-luke.com/', type: 'guide' }
            ],
            children: [
              { id: 'sql-queries-joins', title: 'Complex JOINs & Aggregations', badge: 'essential' },
              { id: 'indexing-explain', title: 'B-Tree Indexing & Query Tuning', badge: 'essential' },
              { id: 'drizzle-prisma', title: 'Drizzle ORM & Prisma', badge: 'recommended' }
            ]
          },
          {
            id: 'nosql-caching',
            title: 'Redis & NoSQL (Document / Key-Value)',
            badge: 'essential',
            summary: 'In-memory caching and non-relational document databases for high write throughput.',
            keyPoints: [
              'Redis: In-memory key-value data store, TTL expiration, Rate limiting, Pub/Sub',
              'Cache strategies: Cache-Aside, Write-Through, Write-Behind, Cache Invalidation',
              'MongoDB: Document database, BSON, horizontal sharding'
            ],
            resources: [
              { title: 'Redis University & Documentation', url: 'https://redis.io/docs/', type: 'doc' }
            ],
            children: [
              { id: 'redis-cache-aside', title: 'Redis Caching & Invalidation', badge: 'essential' },
              { id: 'redis-rate-limit', title: 'Rate Limiting (Sliding Window)', badge: 'recommended' }
            ]
          }
        ]
      },
      {
        id: 'apis-auth',
        title: '3. API Design & Authentication',
        description: 'Building secure, well-documented endpoints for mobile and web clients.',
        nodes: [
          {
            id: 'rest-graphql',
            title: 'RESTful API & GraphQL Design',
            badge: 'essential',
            summary: 'Resource-oriented design, HTTP methods, pagination, and query flexibility.',
            keyPoints: [
              'REST principles: Statelessness, idempotent methods, standard status codes',
              'Pagination: Offset-based vs Cursor-based pagination (best for large feeds)',
              'GraphQL: Schema Definition Language (SDL), Queries, Mutations, Resolvers, N+1 query problem & DataLoader'
            ],
            resources: [
              { title: 'RESTful API Design Best Practices', url: 'https://restfulapi.net/', type: 'guide' }
            ],
            children: [
              { id: 'cursor-pagination', title: 'Cursor-based Pagination', badge: 'recommended' },
              { id: 'graphql-dataloader', title: 'GraphQL & DataLoader', badge: 'alternative' }
            ]
          },
          {
            id: 'auth-security',
            title: 'Authentication & Authorization',
            badge: 'essential',
            summary: 'Securing APIs using JWTs, OAuth 2.0, Role-Based Access Control, and hashing.',
            keyPoints: [
              'Passwords: bcrypt / Argon2 password hashing with salt',
              'JWT (JSON Web Tokens): Access tokens vs Refresh tokens, token rotation',
              'OAuth 2.0 & OpenID Connect: Authorization Code Flow with PKCE',
              'RBAC (Role-Based Access Control) & ABAC (Attribute-Based Access Control)'
            ],
            resources: [
              { title: 'Auth0: OAuth 2.0 and OpenID Connect Overview', url: 'https://auth0.com/intro-to-iam/what-is-oauth-2', type: 'guide' }
            ],
            children: [
              { id: 'jwt-refresh', title: 'JWT Access + Refresh Tokens', badge: 'essential' },
              { id: 'oauth-pkce', title: 'OAuth 2.0 + PKCE', badge: 'recommended' },
              { id: 'rbac-security', title: 'Role-Based Access Control', badge: 'essential' }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // 3. DATA STRUCTURES & ALGORITHMS (DSA ROADMAP)
  // ==========================================
  {
    id: 'dsa',
    slug: 'dsa',
    title: 'Data Structures & Algorithms',
    shortDesc: 'A comprehensive coding roadmap from Big O to Dynamic Programming and Graphs',
    description: 'Master technical interview coding questions. Follow this structured roadmap from asymptotic analysis to Arrays, Binary Search, Trees, Graphs, and Advanced Dynamic Programming.',
    iconName: 'Cpu',
    badge: 'Interviews',
    level: 'All Levels',
    estimatedHours: '100-140 Hours',
    stages: [
      {
        id: 'complexity-arrays',
        title: '1. Foundations & Linear Structures',
        description: 'Big-O notation, memory representation, and fundamental pointer manipulation.',
        nodes: [
          {
            id: 'big-o-analysis',
            title: 'Big-O Asymptotic Analysis',
            badge: 'essential',
            summary: 'Analyze time and space complexity: O(1), O(log N), O(N), O(N log N), O(N²), O(2^N).',
            keyPoints: [
              'Worst case (Big-O), Best case (Omega), Average case (Theta)',
              'Space complexity: Auxiliary space vs input space, recursion stack space',
              'Constant factors and amortized analysis (e.g., dynamic array resizing)'
            ],
            resources: [
              { title: 'Big-O Cheat Sheet', url: 'https://www.bigocheatsheet.com/', type: 'guide' }
            ]
          },
          {
            id: 'two-pointers-sliding',
            title: 'Arrays, Two Pointers & Sliding Window',
            badge: 'essential',
            summary: 'High-frequency coding patterns for continuous subarrays and sorted pairs.',
            keyPoints: [
              'Two pointers: converging pointers (left & right), fast and slow runner (Tortoise & Hare)',
              'Fixed size sliding window vs dynamic shrinkable sliding window',
              'Prefix sums for instant O(1) range queries'
            ],
            resources: [
              { title: 'LeetCode Pattern: Two Pointers', url: 'https://leetcode.com/tag/two-pointers/', type: 'practice' }
            ],
            children: [
              { id: 'prefix-sum', title: 'Prefix Sums & Running Totals', badge: 'essential' },
              { id: 'sliding-window-dyn', title: 'Dynamic Sliding Window', badge: 'essential' }
            ]
          }
        ]
      },
      {
        id: 'linked-lists-stacks',
        title: '2. Linked Lists, Stacks & Queues',
        description: 'Node based data structures and LIFO/FIFO processing logic.',
        nodes: [
          {
            id: 'linked-lists',
            title: 'Singly & Doubly Linked Lists',
            badge: 'essential',
            summary: 'Pointer manipulation, reversal, cycle detection, and merging.',
            keyPoints: [
              'In-place list reversal (iterative and recursive)',
              'Floyd’s Cycle Finding Algorithm (detecting loops)',
              'Dummy head node technique for edge-case simplification'
            ],
            resources: [
              { title: 'NeetCode Linked List Playlist', url: 'https://www.youtube.com/playlist?list=PLot-Xpze53leU0T69tM_hO759yG-T4Q6O', type: 'video' }
            ]
          },
          {
            id: 'monotonic-stack',
            title: 'Monotonic Stacks & Queues',
            badge: 'recommended',
            summary: 'Finding the Next Greater Element, Daily Temperatures, and Largest Rectangle in Histogram in linear O(N) time.',
            keyPoints: [
              'Monotonic increasing vs monotonic decreasing stack invariant',
              'Deque for sliding window maximum in O(N)',
              'Stack evaluation for postfix, prefix, and calculator expressions'
            ],
            resources: [
              { title: 'Next Greater Element Pattern Guide', url: 'https://leetcode.com/problems/next-greater-element-i/', type: 'practice' }
            ]
          }
        ]
      },
      {
        id: 'trees-bst-heaps',
        title: '3. Trees, BSTs & Priority Queues',
        description: 'Hierarchical data structures, recursion, binary search trees, and heaps.',
        nodes: [
          {
            id: 'binary-trees',
            title: 'Binary Tree Traversals (DFS & BFS)',
            badge: 'essential',
            summary: 'Preorder, Inorder, Postorder, and Level-Order traversals.',
            keyPoints: [
              'Depth First Search (DFS): recursive stack and iterative with explicit stack',
              'Breadth First Search (BFS): Level order traversal using a Queue',
              'Tree properties: maximum depth, diameter of binary tree, lowest common ancestor (LCA)'
            ],
            resources: [
              { title: 'Binary Tree Algorithms Visualizer', url: 'https://visualgo.net/en/bst', type: 'practice' }
            ]
          },
          {
            id: 'heaps-priority-queues',
            title: 'Heaps & Priority Queues',
            badge: 'essential',
            summary: 'Min-heaps, max-heaps, finding Top K Frequent Elements, and median in a data stream.',
            keyPoints: [
              'Binary heap array representation (parent = (i-1)//2, left = 2i+1, right = 2i+2)',
              'Heapify operation in O(N) time vs N insertions in O(N log N)',
              'Top K elements pattern using bounded size heap'
            ],
            resources: [
              { title: 'Heap Data Structure Explained', url: 'https://en.wikipedia.org/wiki/Binary_heap', type: 'doc' }
            ]
          }
        ]
      },
      {
        id: 'graphs-dp',
        title: '4. Graphs & Dynamic Programming',
        description: 'The highest yield and most challenging algorithmic domains.',
        nodes: [
          {
            id: 'graph-algorithms',
            title: 'Graph Traversals (BFS, DFS, Dijkstra)',
            badge: 'essential',
            summary: 'Adjacency list representations, cycle detection, topological sort, and shortest paths.',
            keyPoints: [
              'Adjacency List vs Adjacency Matrix',
              'Connected components and Number of Islands (Grid DFS/BFS)',
              'Topological Sort (Kahn\'s BFS algorithm & DFS with post-order reversal)',
              'Dijkstra’s Algorithm with Min-Heap for single-source shortest path'
            ],
            resources: [
              { title: 'WilliamFiset Graph Theory Playlist', url: 'https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P', type: 'video' }
            ],
            children: [
              { id: 'topological-sort', title: 'Topological Sort (Course Schedule)', badge: 'essential' },
              { id: 'dijkstra', title: 'Dijkstra\'s Shortest Path', badge: 'essential' },
              { id: 'disjoint-set', title: 'Disjoint Set Union (Union-Find)', badge: 'recommended' }
            ]
          },
          {
            id: 'dynamic-programming',
            title: 'Dynamic Programming (1D & 2D)',
            badge: 'essential',
            summary: 'Overlapping subproblems, optimal substructure, memoization, and tabulation.',
            keyPoints: [
              'Top-down Memoization (Recursion + Cache) vs Bottom-up Tabulation',
              '1D DP: Climbing Stairs, Coin Change, House Robber, Longest Increasing Subsequence',
              '2D DP: Unique Paths, Edit Distance, Longest Common Subsequence (LCS), 0/1 Knapsack',
              'Space optimization: rolling array technique from O(N*M) to O(M)'
            ],
            resources: [
              { title: 'Striver\'s DP Playlist (Take U Forward)', url: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/', type: 'video' }
            ],
            children: [
              { id: '1d-dp', title: '1D DP (Coin Change, LIS)', badge: 'essential' },
              { id: '2d-dp-grid', title: '2D DP Grid & Strings (Edit Distance)', badge: 'essential' },
              { id: 'knapsack-pattern', title: '0/1 Knapsack Patterns', badge: 'recommended' }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // 4. SYSTEM DESIGN ROADMAP
  // ==========================================
  {
    id: 'system-design',
    slug: 'system-design',
    title: 'System Design',
    shortDesc: 'Architecting scalable, fault-tolerant, and high-availability distributed systems',
    description: 'Master high-level architecture: horizontal scaling, load balancers, caching tiers, database sharding, message queues, microservices, and design interview problems (URL shortener, Twitter, Uber).',
    iconName: 'Layers',
    badge: 'Senior & Staff',
    level: 'Advanced',
    estimatedHours: '80-120 Hours',
    stages: [
      {
        id: 'system-design-basics',
        title: '1. Fundamentals & Core Metrics',
        description: 'Scalability, latency, throughput, and the CAP theorem.',
        nodes: [
          {
            id: 'scalability-concepts',
            title: 'Horizontal vs Vertical Scaling & Availability',
            badge: 'essential',
            summary: 'Scaling out with distributed instances versus scaling up single machines.',
            keyPoints: [
              'Vertical scaling (Scale-up) limits and Single Point of Failure (SPOF)',
              'Horizontal scaling (Scale-out) with stateless services and load balancers',
              'Availability numbers: 99.9% (Three Nines) vs 99.999% (Five Nines)',
              'Latency (p50, p95, p99) vs Throughput (QPS / TPS)'
            ],
            resources: [
              { title: 'System Design Primer (GitHub)', url: 'https://github.com/donnemartin/system-design-primer', type: 'guide' }
            ]
          },
          {
            id: 'cap-theorem',
            title: 'CAP Theorem & PACELC Theorem',
            badge: 'essential',
            summary: 'Trade-offs between Consistency, Availability, and Partition Tolerance.',
            keyPoints: [
              'Consistency: Every read receives the most recent write',
              'Availability: Every non-failing node returns a response',
              'Partition Tolerance: The system continues to operate despite network drops',
              'PACELC: If Partition -> Availability or Consistency; Else -> Latency or Consistency'
            ],
            resources: [
              { title: 'Martin Kleppmann: Designing Data-Intensive Applications', url: 'https://dataintensive.net/', type: 'doc' }
            ]
          }
        ]
      },
      {
        id: 'load-balancing-caching',
        title: '2. Load Balancing, CDNs & Caching',
        description: 'Distributing incoming traffic and serving hot data at sub-millisecond speeds.',
        nodes: [
          {
            id: 'load-balancers',
            title: 'Load Balancers & Reverse Proxies',
            badge: 'essential',
            summary: 'Layer 4 (Transport) vs Layer 7 (Application) routing, health checks, and algorithms.',
            keyPoints: [
              'Algorithms: Round Robin, Weighted Round Robin, Least Connections, Consistent Hashing',
              'Layer 4 (TCP/UDP IP routing) vs Layer 7 (HTTP header, path, cookie routing)',
              'Nginx, HAProxy, AWS ALB, Cloudflare Reverse Proxy'
            ],
            resources: [
              { title: 'Nginx Reverse Proxy Documentation', url: 'https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/', type: 'doc' }
            ]
          },
          {
            id: 'caching-layers',
            title: 'Distributed Caching (Redis / Memcached)',
            badge: 'essential',
            summary: 'Cache invalidation, eviction policies, and preventing stampedes.',
            keyPoints: [
              'Eviction policies: LRU (Least Recently Used), LFU, FIFO',
              'Cache Penetration, Cache Breakdown, and Cache Avalanche solutions',
              'Bloom Filters for fast existence checks before hitting the database'
            ],
            resources: [
              { title: 'Redis Architecture Deep Dive', url: 'https://redis.io/topics/architecture', type: 'doc' }
            ]
          }
        ]
      },
      {
        id: 'messaging-distributed',
        title: '3. Asynchronous Messaging & Microservices',
        description: 'Decoupling services with message queues, event streaming, and saga patterns.',
        nodes: [
          {
            id: 'message-queues-kafka',
            title: 'Apache Kafka & RabbitMQ',
            badge: 'essential',
            summary: 'Pub/Sub event streaming versus point-to-point message queuing.',
            keyPoints: [
              'Kafka: Distributed commit log, topics, partitions, consumer groups, offsets',
              'RabbitMQ: AMQP protocol, exchanges (direct, fanout, topic), ACK acknowledgments',
              'Dead Letter Queues (DLQ) for poison pill message handling'
            ],
            resources: [
              { title: 'Confluent: Kafka 101 Course', url: 'https://developer.confluent.io/courses/apache-kafka/overview/', type: 'video' }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // 5. DEVOPS & CLOUD ENGINEER ROADMAP
  // ==========================================
  {
    id: 'devops',
    slug: 'devops',
    title: 'DevOps & Cloud Engineer',
    shortDesc: 'Docker containers, Kubernetes, CI/CD pipelines, Terraform, and cloud infrastructure',
    description: 'Bridging development and IT operations: Linux shell mastery, Docker containerization, Kubernetes orchestration, Infrastructure as Code with Terraform, and Prometheus observability.',
    iconName: 'Terminal',
    badge: 'High Salary',
    level: 'Intermediate',
    estimatedHours: '130-160 Hours',
    stages: [
      {
        id: 'linux-containers',
        title: '1. Linux & Containerization (Docker)',
        description: 'Packaging applications into reproducible, isolated container environments.',
        nodes: [
          {
            id: 'docker-fundamentals',
            title: 'Docker & Container Basics',
            badge: 'essential',
            summary: 'Dockerfiles, multi-stage builds, container images, volumes, and Docker Compose.',
            keyPoints: [
              'Containers vs Virtual Machines (cgroups, namespaces, shared kernel)',
              'Writing efficient multi-stage Dockerfiles for minimal image footprint',
              'Docker Compose for multi-container local microservice orchestration'
            ],
            resources: [
              { title: 'Docker Official Get Started Tutorial', url: 'https://docs.docker.com/get-started/', type: 'doc' }
            ]
          }
        ]
      },
      {
        id: 'kubernetes-k8s',
        title: '2. Container Orchestration (Kubernetes)',
        description: 'Automating deployment, scaling, and management of containerized applications.',
        nodes: [
          {
            id: 'k8s-core',
            title: 'Kubernetes Architecture & Core Primitives',
            badge: 'essential',
            summary: 'Pods, Deployments, Services, ConfigMaps, Secrets, and Ingress controllers.',
            keyPoints: [
              'Control plane (API Server, etcd, Scheduler, Controller Manager) vs Worker Nodes (kubelet, kube-proxy)',
              'Deployments, ReplicaSets, Rolling updates, and Rollbacks',
              'ClusterIP, NodePort, and LoadBalancer service types'
            ],
            resources: [
              { title: 'Kubernetes Official Documentation', url: 'https://kubernetes.io/docs/home/', type: 'doc' }
            ]
          }
        ]
      },
      {
        id: 'cicd-iac',
        title: '3. CI/CD & Infrastructure as Code (Terraform)',
        description: 'Automating software releases and declarative cloud provisioning.',
        nodes: [
          {
            id: 'github-actions',
            title: 'CI/CD with GitHub Actions',
            badge: 'essential',
            summary: 'Automating test runs, linting, building Docker images, and deploying to staging/production.',
            keyPoints: [
              'Workflows, triggers (push, pull_request), jobs, and steps',
              'Matrix builds for multi-version testing',
              'Secure secret management in pipelines'
            ],
            resources: [
              { title: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions', type: 'doc' }
            ]
          },
          {
            id: 'terraform',
            title: 'Terraform (IaC)',
            badge: 'recommended',
            summary: 'Declarative cloud provisioning on AWS, GCP, or Azure using HCL (HashiCorp Configuration Language).',
            keyPoints: [
              'State file management (remote state in S3 with DynamoDB locking)',
              'terraform init, plan, apply, destroy lifecycle',
              'Modular infrastructure components'
            ],
            resources: [
              { title: 'HashiCorp Terraform Tutorials', url: 'https://developer.hashicorp.com/terraform/tutorials', type: 'practice' }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // 6. AI & MACHINE LEARNING ROADMAP
  // ==========================================
  {
    id: 'ai-ml',
    slug: 'ai-ml',
    title: 'AI & Machine Learning',
    shortDesc: 'From Python and Linear Algebra to PyTorch, LLMs, RAG, and Vector Databases',
    description: 'Learn applied Artificial Intelligence and Machine Learning: Python data tools (NumPy, Pandas), Scikit-Learn algorithms, Deep Learning with PyTorch, Transformer models, and building modern LLM/RAG pipelines.',
    iconName: 'Sparkles',
    badge: 'Trending',
    level: 'Advanced',
    estimatedHours: '160-200 Hours',
    stages: [
      {
        id: 'math-python-data',
        title: '1. Mathematics & Data Engineering',
        description: 'Linear Algebra, Probability, Statistics, NumPy, and Pandas.',
        nodes: [
          {
            id: 'python-data-stack',
            title: 'Python, NumPy & Pandas',
            badge: 'essential',
            summary: 'Vectorized array computations, DataFrame filtering, aggregations, and data preprocessing.',
            keyPoints: [
              'NumPy ndarrays, broadcasting, vectorization (eliminating slow for-loops)',
              'Pandas DataFrames: groupby, pivot tables, handling missing values',
              'Exploratory Data Analysis (EDA) with Matplotlib & Seaborn'
            ],
            resources: [
              { title: 'Python Data Science Handbook', url: 'https://jakevdp.github.io/PythonDataScienceHandbook/', type: 'doc' }
            ]
          }
        ]
      },
      {
        id: 'deep-learning-llms',
        title: '2. Deep Learning & Large Language Models (LLMs)',
        description: 'Neural networks, PyTorch, Transformers, Prompt Engineering, and RAG architectures.',
        nodes: [
          {
            id: 'pytorch-neural-nets',
            title: 'PyTorch & Neural Networks',
            badge: 'essential',
            summary: 'Tensors, Autograd automatic differentiation, backpropagation, and training loops.',
            keyPoints: [
              'Loss functions: CrossEntropyLoss, MSELoss; Optimizers: Adam, SGD',
              'Preventing overfitting: Dropout, Batch Normalization, Weight Decay'
            ],
            resources: [
              { title: 'PyTorch Deep Learning with PyTorch (Free Course)', url: 'https://pytorch.org/tutorials/', type: 'doc' }
            ]
          },
          {
            id: 'llm-rag-vector',
            title: 'LLMs, Transformers & RAG Architecture',
            badge: 'essential',
            summary: 'Attention mechanism, HuggingFace, embeddings, Vector Databases (Pinecone, ChromaDB), and LangChain / LlamaIndex.',
            keyPoints: [
              'Self-Attention and the Transformer architecture (Encoder vs Decoder models)',
              'Text embeddings and semantic similarity (Cosine similarity)',
              'Retrieval-Augmented Generation (RAG): chunking, vector indexing, retrieval, augmented prompting',
              'Function calling, tool use, and evaluation benchmarks'
            ],
            resources: [
              { title: 'Jay Alammar: The Illustrated Transformer', url: 'https://jalammar.github.io/illustrated-transformer/', type: 'guide' },
              { title: 'DeepLearning.AI: LangChain for LLM Application Development', url: 'https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/', type: 'video' }
            ]
          }
        ]
      }
    ]
  }
];
