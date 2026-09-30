export interface RoadmapTopic {
  id: string;
  title: string;
  status?: 'not_started' | 'in_progress' | 'completed';
  type: 'mandatory' | 'recommended' | 'alternative' | 'optional';
  summary: string;
  keyPoints: string[];
  resources?: { title: string; url: string; type: 'doc' | 'video' | 'practice' }[];
  codeSnippet?: string;
  interviewTip?: string;
}

export interface RoadmapPhase {
  id: string;
  title: string;
  duration?: string;
  description: string;
  topics: RoadmapTopic[];
}

export interface RoadmapProject {
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Capstone';
  description: string;
  deliverables: string[];
}

export interface RoadmapDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  type: 'role' | 'skill' | 'new';
  isNew?: boolean;
  isPopular?: boolean;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels' | 'Beginner to Advanced' | 'Intermediate to Advanced' | string;
  summary: string;
  targetRoles: string[];
  relatedRoleSheetSlug?: string;
  relatedDsaSlug?: string;
  phases: RoadmapPhase[];
  projects: RoadmapProject[];
}

export interface RoadmapSummaryItem {
  slug: string;
  title: string;
  category: string; // e.g. "Web Development", "AI & Machine Learning", etc.
  type: 'role' | 'skill' | 'new';
  isNew?: boolean;
  isPopular?: boolean;
  tags: string[];
  description: string;
  nodeCount: number;
}

export const ROADMAP_CATEGORIES = [
  { id: 'all', name: 'All Roadmaps', count: 95 },
  { id: 'beginners', name: 'Absolute Beginners', count: 34 },
  { id: 'web', name: 'Web Development', count: 70 },
  { id: 'frameworks', name: 'Frameworks', count: 9 },
  { id: 'languages', name: 'Languages / Platforms', count: 23 },
  { id: 'ai', name: 'AI & Machine Learning', count: 25 },
  { id: 'devops', name: 'DevOps', count: 49 },
  { id: 'mobile', name: 'Mobile Development', count: 9 },
  { id: 'databases', name: 'Databases', count: 26 },
  { id: 'cs', name: 'Computer Science', count: 31 },
  { id: 'management', name: 'Management', count: 10 },
  { id: 'games', name: 'Game Development', count: 7 },
  { id: 'design', name: 'Design', count: 4 },
  { id: 'blockchain', name: 'Blockchain', count: 4 },
  { id: 'cybersecurity', name: 'Cyber Security', count: 11 },
  { id: 'bestpractices', name: 'Best Practices', count: 5 },
] as const;

export const ALL_ROADMAPS_SUMMARY: RoadmapSummaryItem[] = [
  // NEW ROADMAPS
  { slug: 'r-programming', title: 'R Programming', category: 'Languages / Platforms', type: 'new', isNew: true, tags: ['Data Science', 'Statistics', 'R'], description: 'Learn statistical computing, exploratory data analysis, ggplot2, and R Shiny.', nodeCount: 32 },
  { slug: 'seo', title: 'SEO', category: 'Best Practices', type: 'new', isNew: true, tags: ['Technical SEO', 'Core Web Vitals', 'Indexing'], description: 'Technical SEO, schema markup, site speed, crawl budgets, and content strategy.', nodeCount: 28 },

  // ROLE BASED ROADMAPS
  { slug: 'frontend', title: 'Frontend', category: 'Web Development', type: 'role', isPopular: true, tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'], description: 'Comprehensive roadmap to becoming a modern Frontend Engineer in 2026.', nodeCount: 48 },
  { slug: 'backend', title: 'Backend', category: 'Web Development', type: 'role', isPopular: true, tags: ['Node.js', 'Python', 'Go', 'Databases', 'APIs'], description: 'Learn server architecture, relational & NoSQL databases, caching, and microservices.', nodeCount: 52 },
  { slug: 'full-stack', title: 'Full Stack', category: 'Web Development', type: 'role', isPopular: true, tags: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Cloud'], description: 'Master both client and server development, database modeling, and deployment.', nodeCount: 58 },
  { slug: 'android', title: 'Android', category: 'Mobile Development', type: 'role', tags: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Architecture'], description: 'Native Android engineering with Kotlin, Modern Android Architecture, and Gradle.', nodeCount: 38 },
  { slug: 'devops', title: 'DevOps', category: 'DevOps', type: 'role', isPopular: true, tags: ['Linux', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'], description: 'Infrastructure as Code, container orchestration, telemetry, and cloud reliability.', nodeCount: 46 },
  { slug: 'devsecops', title: 'DevSecOps', category: 'Cyber Security', type: 'role', tags: ['Security', 'CI/CD', 'SAST/DAST', 'Compliance'], description: 'Embed security into CI/CD pipelines, container scanning, and secret management.', nodeCount: 34 },
  { slug: 'data-analyst', title: 'Data Analyst', category: 'Databases', type: 'role', tags: ['SQL', 'Python', 'Tableau', 'PowerBI', 'Statistics'], description: 'Transform raw business data into actionable dashboards and predictive metrics.', nodeCount: 36 },
  { slug: 'ai-engineer', title: 'AI Engineer', category: 'AI & Machine Learning', type: 'role', isPopular: true, tags: ['LLMs', 'RAG', 'Prompt Eng', 'LangChain', 'Vector DBs'], description: 'Build enterprise GenAI apps, agentic workflows, embeddings, and fine-tuning.', nodeCount: 44 },
  { slug: 'ai-and-data-scientist', title: 'AI and Data Scientist', category: 'AI & Machine Learning', type: 'role', tags: ['Deep Learning', 'PyTorch', 'Math', 'NLP'], description: 'Statistical modeling, deep learning architectures, feature engineering, and MLOps.', nodeCount: 50 },
  { slug: 'data-engineer', title: 'Data Engineer', category: 'Databases', type: 'role', tags: ['Spark', 'Kafka', 'ETL', 'Snowflake', 'Airflow'], description: 'Design scalable batch & real-time streaming data pipelines and data warehouses.', nodeCount: 42 },
  { slug: 'machine-learning', title: 'Machine Learning', category: 'AI & Machine Learning', type: 'role', tags: ['Supervised', 'Unsupervised', 'Scikit-learn', 'PyTorch'], description: 'Foundations of mathematical modeling, classification, regression, and neural networks.', nodeCount: 40 },
  { slug: 'postgresql', title: 'PostgreSQL', category: 'Databases', type: 'role', tags: ['Indexing', 'Query Optimization', 'Transactions', 'ACID'], description: 'Deep dive into PostgreSQL internals, EXPLAIN ANALYZE, WAL, and partitioning.', nodeCount: 30 },
  { slug: 'ios', title: 'iOS', category: 'Mobile Development', type: 'role', tags: ['Swift', 'SwiftUI', 'Combine', 'CoreData'], description: 'Native Apple ecosystem development with modern Swift, SwiftUI, and App Store guidelines.', nodeCount: 36 },
  { slug: 'blockchain', title: 'Blockchain', category: 'Blockchain', type: 'role', tags: ['Solidity', 'Smart Contracts', 'EVM', 'Web3.js'], description: 'Decentralized applications, cryptographic proofs, consensus, and security auditing.', nodeCount: 32 },
  { slug: 'qa', title: 'QA', category: 'Best Practices', type: 'role', tags: ['Cypress', 'Playwright', 'Selenium', 'Unit Testing'], description: 'Automated end-to-end testing, test suites, regression, and load testing.', nodeCount: 28 },
  { slug: 'software-architect', title: 'Software Architect', category: 'Computer Science', type: 'role', isPopular: true, tags: ['Distributed Systems', 'DDD', 'Event-Driven', 'Scale'], description: 'High-level system decomposition, fault tolerance, scalability, and design trade-offs.', nodeCount: 44 },
  { slug: 'api-design', title: 'API Design', category: 'Web Development', type: 'role', tags: ['REST', 'GraphQL', 'gRPC', 'OpenAPI', 'Idempotency'], description: 'Designing robust, versioned, backward-compatible, and high-performance APIs.', nodeCount: 26 },
  { slug: 'cyber-security', title: 'Cyber Security', category: 'Cyber Security', type: 'role', tags: ['Penetration Testing', 'Network', 'OWASP', 'Cryptography'], description: 'Offensive and defensive security, vulnerability assessments, and SOC workflows.', nodeCount: 40 },
  { slug: 'ux-design', title: 'UX Design', category: 'Design', type: 'role', tags: ['Figma', 'Wireframing', 'User Research', 'Usability'], description: 'Information architecture, user testing, interaction design, and design systems.', nodeCount: 28 },
  { slug: 'technical-writer', title: 'Technical Writer', category: 'Management', type: 'role', tags: ['Docs', 'API Docs', 'Markdown', 'Information Architecture'], description: 'Authoring developer portals, SDK guides, and architectural whitepapers.', nodeCount: 22 },
  { slug: 'game-developer', title: 'Game Developer', category: 'Game Development', type: 'role', tags: ['Unity', 'Unreal', 'C#', 'C++', 'Shaders'], description: 'Physics engines, game loops, rendering pipelines, and asset pipelines.', nodeCount: 38 },
  { slug: 'server-side-game-developer', title: 'Server Side Game Developer', category: 'Game Development', type: 'role', tags: ['UDP', 'WebSockets', 'Tick Rates', 'Spatial Hashing'], description: 'Multiplayer game networking, state synchronization, and lag compensation.', nodeCount: 30 },
  { slug: 'mlops', title: 'MLOps', category: 'AI & Machine Learning', type: 'role', tags: ['Model Registry', 'MLflow', 'Kubeflow', 'Drift Monitoring'], description: 'Operationalizing machine learning models into high-availability production APIs.', nodeCount: 34 },
  { slug: 'product-manager', title: 'Product Manager', category: 'Management', type: 'role', tags: ['Agile', 'Roadmapping', 'User Feedback', 'Metrics'], description: 'Product discovery, prioritization matrices, PRDs, and cross-functional alignment.', nodeCount: 30 },
  { slug: 'engineering-manager', title: 'Engineering Manager', category: 'Management', type: 'role', tags: ['1-on-1s', 'Hiring', 'Sprint Planning', 'Org Design'], description: 'Leading engineering teams, 1:1 mentorship, delivery cadence, and technical strategy.', nodeCount: 28 },
  { slug: 'developer-relations', title: 'Developer Relations', category: 'Management', type: 'role', tags: ['Community', 'Speaking', 'Open Source', 'Hackathons'], description: 'Developer advocacy, content creation, community health, and developer feedback loops.', nodeCount: 24 },
  { slug: 'bi-analyst', title: 'BI Analyst', category: 'Databases', type: 'role', tags: ['Data Warehousing', 'DAX', 'Looker', 'ETL'], description: 'Enterprise business intelligence, KPI governance, and executive analytics.', nodeCount: 28 },
  { slug: 'ai-red-teaming', title: 'AI Red Teaming', category: 'Cyber Security', type: 'role', tags: ['Jailbreaks', 'Prompt Injection', 'Safety Auditing', 'OWASP LLM'], description: 'Testing LLM vulnerability against prompt injection, data leakage, and alignment evasion.', nodeCount: 26 },
  { slug: 'network-engineer', title: 'Network Engineer', category: 'Computer Science', type: 'role', tags: ['TCP/IP', 'BGP', 'OSPF', 'Subnetting', 'Wireshark'], description: 'Routing protocols, switching, firewalls, VPNs, and software-defined networking.', nodeCount: 34 },
  { slug: 'forward-deployed-engineer', title: 'Forward Deployed Engineer', category: 'Web Development', type: 'role', tags: ['Customer Tech', 'Integration', 'Full Stack', 'Enterprise'], description: 'Integrating enterprise platforms, client custom extensions, and bespoke deployments.', nodeCount: 32 },

  // SKILL BASED ROADMAPS
  { slug: 'claude-code', title: 'Claude Code', category: 'AI & Machine Learning', type: 'skill', tags: ['Agentic Coding', 'Terminal CLI', 'Anthropic', 'Workflows'], description: 'Supercharge daily terminal workflows using Claude Code agentic coding.', nodeCount: 18 },
  { slug: 'vibe-coding', title: 'Vibe Coding', category: 'AI & Machine Learning', type: 'skill', tags: ['AI Prompting', 'Cursor', 'Copilot', 'Fast Prototyping'], description: 'Modern flow state development leveraging AI generation, Cursor, and instant iteration.', nodeCount: 16 },
  { slug: 'python', title: 'Python', category: 'Languages / Platforms', type: 'skill', isPopular: true, tags: ['OOP', 'Asyncio', 'Typing', 'Package Mgmt'], description: 'Core syntax, generators, decorators, virtual environments, and concurrency.', nodeCount: 36 },
  { slug: 'python-for-data-analysis', title: 'Python for Data Analysis', category: 'Databases', type: 'skill', tags: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'], description: 'Data wrangling, cleaning, pivot tables, and statistical visualizations in Jupyter.', nodeCount: 28 },
  { slug: 'computer-science', title: 'Computer Science', category: 'Computer Science', type: 'skill', isPopular: true, tags: ['DSA', 'OS', 'Networking', 'Compilers'], description: 'Foundations of computing, algorithmic analysis, memory layouts, and discrete math.', nodeCount: 45 },
  { slug: 'javascript', title: 'JavaScript', category: 'Languages / Platforms', type: 'skill', isPopular: true, tags: ['ES6+', 'Event Loop', 'Promises', 'Prototypes'], description: 'Core runtime mechanics, DOM, asynchronous JavaScript, and modern modules.', nodeCount: 40 },
  { slug: 'typescript', title: 'TypeScript', category: 'Languages / Platforms', type: 'skill', isPopular: true, tags: ['Generics', 'Utility Types', 'Strict Null', 'Decorators'], description: 'Type safety, mapped types, declaration merging, and enterprise architecture.', nodeCount: 32 },
  { slug: 'react', title: 'React', category: 'Frameworks', type: 'skill', isPopular: true, tags: ['Hooks', 'Fiber', 'Server Components', 'State'], description: 'Modern React 19, custom hooks, context, state machines, and performance.', nodeCount: 36 },
  { slug: 'nodejs', title: 'Node.js', category: 'Languages / Platforms', type: 'skill', tags: ['Streams', 'Cluster', 'Event Loop', 'Buffers'], description: 'Event-driven I/O, native addons, Express/Fastify, and microservices.', nodeCount: 34 },
  { slug: 'docker', title: 'Docker', category: 'DevOps', type: 'skill', isPopular: true, tags: ['Containers', 'Images', 'Volumes', 'Compose'], description: 'Container fundamentals, multi-stage builds, networking, and security.', nodeCount: 24 },
  { slug: 'kubernetes', title: 'Kubernetes', category: 'DevOps', type: 'skill', tags: ['Pods', 'Deployments', 'Ingress', 'Helm'], description: 'Container orchestration, autoscaling, service meshes, and stateful sets.', nodeCount: 32 },
  { slug: 'git-github', title: 'Git & GitHub', category: 'Best Practices', type: 'skill', isPopular: true, tags: ['Rebase', 'Bisect', 'Actions', 'Merge Conflicts'], description: 'Version control workflows, interactive rebase, cherry-pick, and CI automation.', nodeCount: 22 },
  { slug: 'sql', title: 'SQL', category: 'Databases', type: 'skill', isPopular: true, tags: ['Joins', 'CTEs', 'Window Functions', 'Indexes'], description: 'Advanced query authoring, analytical functions, query plans, and transactions.', nodeCount: 28 },
  { slug: 'system-design', title: 'System Design', category: 'Computer Science', type: 'skill', isPopular: true, tags: ['Caching', 'Load Balancing', 'Sharding', 'CAP Theorem'], description: 'Architecting large scale systems for 10M+ users with low latency and high availability.', nodeCount: 42 },
  { slug: 'graphql', title: 'GraphQL', category: 'Web Development', type: 'skill', tags: ['Schema', 'Resolvers', 'Apollo', 'Federation'], description: 'Type-safe querying, n+1 problem mitigation, subscriptions, and federated graphs.', nodeCount: 24 },
  { slug: 'rust', title: 'Rust', category: 'Languages / Platforms', type: 'skill', tags: ['Borrow Checker', 'Lifetimes', 'Concurrency', 'Cargo'], description: 'Memory safety without garbage collection, traits, smart pointers, and async Rust.', nodeCount: 34 },
  { slug: 'golang', title: 'Go / Golang', category: 'Languages / Platforms', type: 'skill', tags: ['Goroutines', 'Channels', 'Interfaces', 'Microservices'], description: 'Concurrency patterns, standard library mastery, benchmarking, and high-concurrency servers.', nodeCount: 30 },
  { slug: 'linux', title: 'Linux', category: 'DevOps', type: 'skill', tags: ['Bash', 'Permissions', 'systemd', 'Process Mgmt'], description: 'Command line mastery, IPC, file system hierarchies, shell scripting, and monitoring.', nodeCount: 28 },
];

export const ROADMAP_DETAILS: Record<string, RoadmapDetail> = {
  frontend: {
    slug: 'frontend',
    title: 'Frontend Developer Roadmap',
    subtitle: 'Step by step guide to becoming a modern Frontend Engineer in 2026',
    category: 'Web Development',
    type: 'role',
    isPopular: true,
    duration: '6 - 9 Months',
    difficulty: 'Beginner to Advanced',
    summary: 'Master the building blocks of the web, modern JavaScript & TypeScript, component-driven development with React & Next.js, web performance, accessibility, and interview coding challenges.',
    targetRoles: ['Frontend Engineer', 'UI Developer', 'Full Stack Engineer', 'Web Developer'],
    relatedRoleSheetSlug: 'frontend-developer',
    relatedDsaSlug: 'blind-75-dsa-sheet',
    phases: [
      {
        id: 'phase-1',
        title: 'Phase 1: Internet & Web Fundamentals',
        duration: 'Weeks 1-3',
        description: 'Understand how the web works from browser DNS lookup to rendering HTML pixels on screen.',
        topics: [
          {
            id: 'fe-internet',
            title: 'How the Internet Works',
            type: 'mandatory',
            summary: 'Understanding DNS resolution, IP routing, HTTP/HTTPS protocols, TCP/IP handshakes, and SSL/TLS certificates.',
            keyPoints: [
              'Browser requests resolve IP via recursive DNS lookup',
              'TCP 3-way handshake (SYN, SYN-ACK, ACK) and TLS negotiation',
              'HTTP/1.1 vs HTTP/2 multiplexing vs HTTP/3 (QUIC)'
            ],
            interviewTip: 'Be prepared to answer: "What happens when you type google.com into your browser address bar and press Enter?"'
          },
          {
            id: 'fe-html',
            title: 'Semantic HTML5 & Accessibility (a11y)',
            type: 'mandatory',
            summary: 'Writing accessible, semantic markup that screen readers and search engines understand effortlessly.',
            keyPoints: [
              'Use semantic tags: header, main, nav, article, section, footer',
              'ARIA attributes (aria-label, role, aria-expanded)',
              'Forms with accessible labels, input validation, and focus management'
            ],
            codeSnippet: `<button aria-expanded="false" aria-controls="mobile-menu">\n  <span class="sr-only">Toggle Navigation</span>\n  <svg aria-hidden="true">...</svg>\n</button>`
          },
          {
            id: 'fe-css-core',
            title: 'Modern CSS & Layout Systems',
            type: 'mandatory',
            summary: 'Box model, Flexbox, CSS Grid, Custom Properties (CSS variables), and media queries.',
            keyPoints: [
              'Box model sizing (border-box vs content-box)',
              'Flexbox 1D alignment vs CSS Grid 2D layout control',
              'Mobile-first responsive design and fluid clamp() typography'
            ]
          }
        ]
      },
      {
        id: 'phase-2',
        title: 'Phase 2: JavaScript Mastery (ES6+)',
        duration: 'Weeks 4-9',
        description: 'The heartbeat of frontend engineering. Master language mechanics, memory models, and async execution.',
        topics: [
          {
            id: 'fe-js-basics',
            title: 'Language Core & Execution Context',
            type: 'mandatory',
            summary: 'Scoping, closures, hoisting, Temporal Dead Zone, and primitive vs reference memory allocation.',
            keyPoints: [
              'Call Stack vs Memory Heap mechanics',
              'Lexical scoping and closure persistence in memory',
              'Arrow functions vs regular function this binding'
            ],
            interviewTip: 'Closures and "this" binding are in the top 3 most frequently tested frontend screening questions.'
          },
          {
            id: 'fe-event-loop',
            title: 'The Event Loop & Asynchronous JavaScript',
            type: 'mandatory',
            summary: 'Single-threaded non-blocking concurrency, Call Stack, Web APIs, Microtask Queue vs Macrotask Queue.',
            keyPoints: [
              'Microtasks (Promise.then, MutationObserver, queueMicrotask) run before Macrotasks (setTimeout, setInterval, setImmediate)',
              'Async/await desugars to native Promises under the hood',
              'Error handling with try/catch and unhandledrejection events'
            ]
          },
          {
            id: 'fe-dom-events',
            title: 'DOM Manipulation & Event Propagation',
            type: 'mandatory',
            summary: 'Capturing, targeting, bubbling, and event delegation for scalable interactive UIs.',
            keyPoints: [
              'Event delegation attaches one listener to a common ancestor',
              'event.stopPropagation() vs event.preventDefault()',
              'Custom events and dispatchEvent()'
            ]
          }
        ]
      },
      {
        id: 'phase-3',
        title: 'Phase 3: React & Modern UI Architecture',
        duration: 'Weeks 10-16',
        description: 'Component lifecycles, hook internals, reconciliation, and modern state modeling.',
        topics: [
          {
            id: 'fe-react-core',
            title: 'React Fundamentals & JSX',
            type: 'mandatory',
            summary: 'Virtual DOM, JSX compilation, unidirectional data flow, and pure rendering principles.',
            keyPoints: [
              'Props vs State: immutability principles',
              'Component lifecycles via useEffect dependencies',
              'Why keys matter in list rendering (reconciliation diffing)'
            ]
          },
          {
            id: 'fe-react-hooks',
            title: 'Advanced React Hooks',
            type: 'mandatory',
            summary: 'useMemo, useCallback, useRef, useTransition, useDeferredValue, and custom hooks.',
            keyPoints: [
              'Memoization trade-offs: don’t prematurely optimize without measuring',
              'useRef for mutable values that don’t trigger re-renders',
              'React 18/19 concurrent rendering transitions'
            ]
          },
          {
            id: 'fe-state-mgmt',
            title: 'State Management Strategies',
            type: 'recommended',
            summary: 'Choosing between local state, URL state, Zustand, Jotai, TanStack Query, and Redux Toolkit.',
            keyPoints: [
              'Server state (caching, deduplication) belongs in TanStack Query/SWR',
              'Client UI state is best served by Zustand or Context',
              'URL state (query params) provides deep-linkable shareability'
            ]
          }
        ]
      },
      {
        id: 'phase-4',
        title: 'Phase 4: Next.js & Fullstack Frontend',
        duration: 'Weeks 17-21',
        description: 'Server Components, SSR/SSG/ISR, streaming hydration, and backend edge functions.',
        topics: [
          {
            id: 'fe-nextjs',
            title: 'Next.js App Router & Server Components',
            type: 'mandatory',
            summary: 'React Server Components (RSC) vs Client Components, nested layouts, and server actions.',
            keyPoints: [
              'Zero-bundle-size React Server Components executed on server',
              'Client boundaries marked with "use client"',
              'Server actions for form mutations without separate REST routes'
            ]
          },
          {
            id: 'fe-typescript',
            title: 'TypeScript for Production',
            type: 'mandatory',
            summary: 'Generics, union types, discriminated unions, utility types, and strict mode typing.',
            keyPoints: [
              'Type narrowing using type guards and in operator',
              'Discriminated unions for clean state machine modeling',
              'Component Props typing with React.ComponentPropsWithoutRef'
            ]
          }
        ]
      },
      {
        id: 'phase-5',
        title: 'Phase 5: Performance, Security & Placement Prep',
        duration: 'Weeks 22-26',
        description: 'Core Web Vitals, bundle optimization, security hygiene, and coding interviews.',
        topics: [
          {
            id: 'fe-performance',
            title: 'Core Web Vitals & Web Performance',
            type: 'mandatory',
            summary: 'LCP (Largest Contentful Paint), INP (Interaction to Next Paint), CLS (Cumulative Layout Shift).',
            keyPoints: [
              'Image optimization with modern formats (AVIF/WebP) and srcset',
              'Code splitting and lazy loading dynamic imports',
              'Critical CSS inlining and font display: swap'
            ]
          },
          {
            id: 'fe-security',
            title: 'Web Security (OWASP Top 10)',
            type: 'mandatory',
            summary: 'Cross-Site Scripting (XSS), CSRF tokens, Content Security Policy (CSP), CORS, and secure cookies.',
            keyPoints: [
              'Sanitize user inputs to prevent stored and reflected XSS',
              'SameSite=Lax/Strict and httpOnly flags on auth cookies',
              'Strict Content-Security-Policy headers'
            ]
          }
        ]
      }
    ],
    projects: [
      {
        title: 'Minimalist Markdown Note Editor',
        level: 'Beginner',
        description: 'Build a browser-based split-pane markdown note-taking app with live preview and local storage autosave.',
        deliverables: ['Real-time markdown parser', 'Keyboard shortcuts (Cmd+S, Cmd+B)', 'Tag-based search and filtering']
      },
      {
        title: 'Real-Time Collaborative Kanban Board',
        level: 'Intermediate',
        description: 'Trello-style drag-and-drop task board with optimistic UI updates and live multi-tab synchronization.',
        deliverables: ['Custom drag-and-drop reordering', 'Optimistic UI rollback on error', 'Filter by assignee and status']
      },
      {
        title: 'High-Scale E-Commerce Storefront with Next.js',
        level: 'Capstone',
        description: 'Production-ready e-commerce store with server components, search filtering, cart state, and Lighthouse 95+ score.',
        deliverables: ['Next.js App Router with ISR', 'Stripe checkout flow', 'Sub-second LCP and zero layout shift']
      }
    ]
  },

  backend: {
    slug: 'backend',
    title: 'Backend Developer Roadmap',
    subtitle: 'Step by step guide to becoming an enterprise Backend Engineer in 2026',
    category: 'Web Development',
    type: 'role',
    isPopular: true,
    duration: '6 - 9 Months',
    difficulty: 'Intermediate to Advanced',
    summary: 'Master server runtimes, REST & gRPC API design, relational and document databases, caching, asynchronous message queues, distributed systems, and cloud deployment.',
    targetRoles: ['Backend Engineer', 'API Developer', 'System Engineer', 'Platform Engineer'],
    relatedRoleSheetSlug: 'backend-developer',
    relatedDsaSlug: 'blind-75-dsa-sheet',
    phases: [
      {
        id: 'be-phase-1',
        title: 'Phase 1: Programming Language & Runtime',
        duration: 'Weeks 1-4',
        description: 'Choose a primary backend language (Node.js, Go, or Python) and master its concurrency model.',
        topics: [
          {
            id: 'be-lang-choice',
            title: 'Backend Language Mastery (Go / Node.js / Python)',
            type: 'mandatory',
            summary: 'Deep understanding of memory management, standard libraries, I/O primitives, and concurrency.',
            keyPoints: ['Node.js Event Loop vs Go Goroutines vs Python Asyncio', 'Package managers and dependency isolation', 'Graceful server shutdown signal handling (SIGTERM)']
          },
          {
            id: 'be-http-api',
            title: 'RESTful API Architecture & HTTP Standards',
            type: 'mandatory',
            summary: 'Stateless endpoints, standard HTTP verbs, status codes, payload validation, and content negotiation.',
            keyPoints: ['Idempotency of GET, PUT, DELETE vs POST', 'Pagination strategies (Cursor-based vs Offset-based)', 'Rate limiting and header conventions (Retry-After, RateLimit-Limit)']
          }
        ]
      },
      {
        id: 'be-phase-2',
        title: 'Phase 2: Relational & NoSQL Databases',
        duration: 'Weeks 5-10',
        description: 'Master data modeling, ACID transactions, index structures, and query execution plans.',
        topics: [
          {
            id: 'be-postgres',
            title: 'PostgreSQL & Relational Modeling',
            type: 'mandatory',
            summary: 'Foreign keys, normalization (1NF to 3NF), transactions, isolation levels, and EXPLAIN ANALYZE.',
            keyPoints: ['B-Tree indexes vs Hash indexes vs GIN indexes', 'Transaction isolation: Read Committed vs Repeatable Read vs Serializable', 'Mitigating N+1 queries using JOINs or batching']
          },
          {
            id: 'be-redis',
            title: 'Redis Caching & In-Memory Data Structures',
            type: 'mandatory',
            summary: 'Cache-Aside, Write-Through patterns, cache invalidation, TTLs, and distributed locks.',
            keyPoints: ['Mitigating Cache Stampede, Cache Avalanche, and Cache Penetration', 'Redis strings, hashes, sorted sets, and pub/sub', 'Redlock distributed locking considerations']
          }
        ]
      },
      {
        id: 'be-phase-3',
        title: 'Phase 3: Asynchronous Queues & Microservices',
        duration: 'Weeks 11-18',
        description: 'Decouple heavy tasks, event-driven architectures, and messaging systems.',
        topics: [
          {
            id: 'be-queues',
            title: 'Message Brokers (RabbitMQ / Apache Kafka)',
            type: 'mandatory',
            summary: 'Publish-subscribe, consumer groups, partitions, dead-letter queues, and at-least-once delivery.',
            keyPoints: ['RabbitMQ queue exchanges vs Kafka distributed log streams', 'Idempotent consumer processing', 'Backpressure management and consumer scaling']
          },
          {
            id: 'be-auth',
            title: 'Authentication & Authorization Security',
            type: 'mandatory',
            summary: 'JWT tokens, OAuth 2.0, OpenID Connect, RBAC (Role-Based Access Control), and password hashing.',
            keyPoints: ['Argon2id and bcrypt for secure password hashing', 'Access token short TTL + refresh token rotation', 'Secure token transmission (httpOnly cookies)']
          }
        ]
      },
      {
        id: 'be-phase-4',
        title: 'Phase 4: Distributed Systems & Scalability',
        duration: 'Weeks 19-26',
        description: 'Scale systems to millions of users, load balancing, sharding, and resilience.',
        topics: [
          {
            id: 'be-dist-scale',
            title: 'Load Balancing & Database Sharding',
            type: 'mandatory',
            summary: 'Horizontal scaling, consistent hashing, database read-replicas, and connection pooling.',
            keyPoints: ['Round Robin vs Least Connections load balancing', 'Read replicas for query scaling + PgBouncer connection pooling', 'Consistent hashing for partition distribution']
          },
          {
            id: 'be-observability',
            title: 'Logging, Metrics & Distributed Tracing',
            type: 'mandatory',
            summary: 'Prometheus, Grafana, OpenTelemetry, structured JSON logs, and APM tracing.',
            keyPoints: ['RED Method: Rate, Errors, Duration', 'Distributed trace context propagation across microservices', 'Health checks (/healthz, /readyz) for orchestrators']
          }
        ]
      }
    ],
    projects: [
      {
        title: 'High-Throughput URL Shortener (Bitly Clone)',
        level: 'Beginner',
        description: 'Build a distributed URL shortener with Base62 encoding, Redis caching, and real-time click analytics.',
        deliverables: ['Sub-10ms redirect latency using Redis cache', 'PostgreSQL persistent store with unique indexes', 'Rate-limiting per IP address']
      },
      {
        title: 'Asynchronous Video Transcoding Service',
        level: 'Intermediate',
        description: 'Background worker service that receives video uploads, splits jobs via RabbitMQ/Kafka, and uploads HLS chunks to S3.',
        deliverables: ['Worker pool with concurrency limits', 'Dead-letter queue for failed encoding jobs', 'Webhook notification upon task completion']
      },
      {
        title: 'Fintech Wallet & Ledger System',
        level: 'Capstone',
        description: 'Double-entry bookkeeping financial ledger guaranteeing zero double-spending and strict ACID transactions.',
        deliverables: ['Idempotency keys on all transaction APIs', 'PostgreSQL Serializable transactions with advisory locks', 'Complete audit trail log for every balance movement']
      }
    ]
  },

  'ai-engineer': {
    slug: 'ai-engineer',
    title: 'AI Engineer Roadmap',
    subtitle: 'Step by step guide to building production GenAI applications & Agentic Systems in 2026',
    category: 'AI & Machine Learning',
    type: 'role',
    isPopular: true,
    duration: '5 - 8 Months',
    difficulty: 'Intermediate to Advanced',
    summary: 'Master foundation LLMs, prompt engineering, Retrieval-Augmented Generation (RAG), vector databases, autonomous agentic workflows, fine-tuning, and LLM evaluation & safety.',
    targetRoles: ['AI Engineer', 'GenAI Developer', 'LLM Architect', 'Applied AI Specialist'],
    relatedRoleSheetSlug: 'machine-learning-engineer',
    relatedDsaSlug: 'blind-75-dsa-sheet',
    phases: [
      {
        id: 'ai-phase-1',
        title: 'Phase 1: Foundation Models & Prompt Engineering',
        duration: 'Weeks 1-4',
        description: 'Understand transformers, tokenization, context windows, and advanced structured prompting.',
        topics: [
          {
            id: 'ai-foundations',
            title: 'Transformers & LLM Fundamentals',
            type: 'mandatory',
            summary: 'Self-attention mechanism, autoregressive generation, temperature, top-p, and context windows.',
            keyPoints: ['Token economics: input tokens vs output generation costs', 'Temperature controls determinism vs creative exploration', 'Context window limits and needle-in-a-haystack recall']
          },
          {
            id: 'ai-prompt-eng',
            title: 'Structured Prompting & Function Calling',
            type: 'mandatory',
            summary: 'Few-shot prompting, Chain-of-Thought (CoT), JSON schema enforcement, and tool definitions.',
            keyPoints: ['System instructions vs user prompts vs tool outputs', 'Function calling / tool use for deterministic external action', 'Constrained decoding for 100% reliable JSON schema responses']
          }
        ]
      },
      {
        id: 'ai-phase-2',
        title: 'Phase 2: Retrieval-Augmented Generation (RAG)',
        duration: 'Weeks 5-10',
        description: 'Connect private company data to foundation models with high retrieval precision.',
        topics: [
          {
            id: 'ai-embeddings-vectors',
            title: 'Embeddings & Vector Databases',
            type: 'mandatory',
            summary: 'Dense vector representations, cosine similarity, HNSW indexing, pgvector, and Pinecone/Qdrant.',
            keyPoints: ['Chunking strategies: semantic, recursive, and windowed', 'HNSW (Hierarchical Navigable Small World) index trade-offs', 'Hybrid search: combining BM25 keyword search with dense vectors']
          },
          {
            id: 'ai-advanced-rag',
            title: 'Advanced RAG & Reranking',
            type: 'mandatory',
            summary: 'Cross-encoder reranking, hypothetical document embeddings (HyDE), and context compression.',
            keyPoints: ['Cohere/BGE cross-encoders for precision reranking', 'Parent-document retrieval to preserve surrounding context', 'Query expansion and multi-query generation']
          }
        ]
      },
      {
        id: 'ai-phase-3',
        title: 'Phase 3: Agentic Workflows & Multi-Agent Systems',
        duration: 'Weeks 11-16',
        description: 'Build autonomous agents that plan, iterate, self-correct, and invoke tools.',
        topics: [
          {
            id: 'ai-agents',
            title: 'Agent Architectures (ReAct, LangGraph, AutoGen)',
            type: 'mandatory',
            summary: 'Reasoning + Acting loops, state machines, cyclic graphs, and human-in-the-loop approvals.',
            keyPoints: ['ReAct (Reason + Act + Observe) paradigm', 'LangGraph cyclic state graph execution', 'Memory: short-term conversation buffers vs long-term vector recall']
          },
          {
            id: 'ai-evals-security',
            title: 'LLM Evaluation & AI Red Teaming',
            type: 'mandatory',
            summary: 'RAG Triad (Context Relevance, Groundedness, Answer Relevance), prompt injection defenses.',
            keyPoints: ['Ragas & TruLens automated evaluation frameworks', 'Guarding against indirect prompt injection in external data', 'Latency budgeting, streaming outputs, and fallbacks']
          }
        ]
      }
    ],
    projects: [
      {
        title: 'Enterprise Knowledge RAG Engine',
        level: 'Intermediate',
        description: 'Upload PDF/Doc files, parse semantic tables, index in pgvector, and provide cited answers.',
        deliverables: ['Recursive chunking with source citations', 'Hybrid search (pgvector + full text search)', 'Hallucination checker before response output']
      },
      {
        title: 'Autonomous Research & Synthesis Agent',
        level: 'Capstone',
        description: 'An AI research agent that searches the web, verifies sources across 5 URLs, synthesizes findings into an executive report.',
        deliverables: ['Cyclic ReAct execution loop with error recovery', 'Dynamic tool calling (Web Search, Calculator, Markdown Formatter)', 'Streaming token output to frontend']
      }
    ]
  },

  devops: {
    slug: 'devops',
    title: 'DevOps & Cloud Engineer Roadmap',
    subtitle: 'Step by step guide to mastering Infrastructure as Code, CI/CD, and Kubernetes in 2026',
    category: 'DevOps',
    type: 'role',
    isPopular: true,
    duration: '6 - 9 Months',
    difficulty: 'Intermediate to Advanced',
    summary: 'Master Linux systems, containerization with Docker, orchestration with Kubernetes, CI/CD pipelines, Infrastructure as Code with Terraform, and cloud observability.',
    targetRoles: ['DevOps Engineer', 'Site Reliability Engineer (SRE)', 'Cloud Engineer', 'Platform Engineer'],
    relatedRoleSheetSlug: 'devops-engineer',
    relatedDsaSlug: 'blind-75-dsa-sheet',
    phases: [
      {
        id: 'devops-phase-1',
        title: 'Phase 1: Linux & Networking Fundamentals',
        duration: 'Weeks 1-4',
        description: 'The foundation of all server infrastructure.',
        topics: [
          {
            id: 'do-linux',
            title: 'Linux Systems & Shell Scripting',
            type: 'mandatory',
            summary: 'File permissions, process management, systemd services, SSH keys, and Bash automation.',
            keyPoints: ['systemctl service creation and journalctl debugging', 'File descriptors, pipes, grep, sed, and awk', 'Process signals (SIGTERM, SIGKILL, SIGHUP)']
          },
          {
            id: 'do-networking',
            title: 'Networking & Protocols for Cloud',
            type: 'mandatory',
            summary: 'DNS, TCP/UDP, CIDR subnetting, load balancers, reverse proxies, and TLS termination.',
            keyPoints: ['IP subnetting and VPC network design', 'Reverse proxy configuration (Nginx / Caddy / Envoy)', 'TLS certificate renewal with Let’s Encrypt certbot']
          }
        ]
      },
      {
        id: 'devops-phase-2',
        title: 'Phase 2: Containers & Orchestration',
        duration: 'Weeks 5-12',
        description: 'Container packaging, minimal attack surfaces, and production Kubernetes clusters.',
        topics: [
          {
            id: 'do-docker',
            title: 'Docker & Container Security',
            type: 'mandatory',
            summary: 'Multi-stage builds, non-root users, volume mounts, and container registries.',
            keyPoints: ['Multi-stage Dockerfiles for minimal production images (<50MB)', 'Linux namespaces and cgroups under the hood', 'Vulnerability scanning with Trivy']
          },
          {
            id: 'do-k8s',
            title: 'Kubernetes Architecture & Manifests',
            type: 'mandatory',
            summary: 'Control plane, worker nodes, Pods, Deployments, Services, Ingress, and Helm charts.',
            keyPoints: ['Cluster architecture: kube-apiserver, etcd, kube-scheduler, kubelet', 'Rolling updates, rollback strategies, and readiness probes', 'ConfigMaps and Secrets separation']
          }
        ]
      },
      {
        id: 'devops-phase-3',
        title: 'Phase 3: CI/CD & Infrastructure as Code (IaC)',
        duration: 'Weeks 13-20',
        description: 'Automate build, test, scan, and deploy pipelines with declarative Terraform code.',
        topics: [
          {
            id: 'do-terraform',
            title: 'Terraform & Declarative Cloud Provisioning',
            type: 'mandatory',
            summary: 'HCL syntax, state files, remote backends with S3/GCS locks, and reusable modules.',
            keyPoints: ['State management and DynamoDB state locking', 'Resource dependencies and terraform plan safety', 'Drift detection and immutable infrastructure']
          },
          {
            id: 'do-cicd',
            title: 'CI/CD Pipelines (GitHub Actions / GitLab CI)',
            type: 'mandatory',
            summary: 'Automated test runners, matrix builds, artifact promotion, and blue/green deployments.',
            keyPoints: ['Secret masking and OIDC cloud authentication (no long-lived AWS keys)', 'Caching node_modules/docker layers for fast pipelines', 'Canary and Blue-Green release patterns']
          }
        ]
      }
    ],
    projects: [
      {
        title: 'Zero-Downtime CI/CD Pipeline for Microservices',
        level: 'Intermediate',
        description: 'Build a complete GitHub Actions pipeline that lints, builds multi-stage Docker containers, scans for CVEs, and deploys to Kubernetes.',
        deliverables: ['Automated PR testing and preview environments', 'Trivy security vulnerability scan', 'Rolling deployment with health check probes']
      },
      {
        title: 'Production Multi-Region Cloud Infrastructure with Terraform',
        level: 'Capstone',
        description: 'Write modular Terraform infrastructure provisioning a secure VPC, managed Kubernetes cluster, RDS database, and Cloudflare CDN.',
        deliverables: ['Remote S3 state backend with state locking', 'Bastion host with strict security group access', 'Grafana/Prometheus monitoring stack dashboard']
      }
    ]
  }
};
