export interface DiagramNode {
  id: string;
  label: string;
  badge?: 'recommended' | 'alternative' | 'optional';
  summary?: string;
  keyPoints?: string[];
  docUrl?: string;
  codeSnippet?: string;
  children?: DiagramNode[];
}

export interface DiagramBranch {
  title?: string;
  side: 'left' | 'right' | 'center';
  nodes: DiagramNode[];
  isGrouped?: boolean;
}

export interface DiagramMilestone {
  id: string;
  title: string;
  subtitle?: string;
  sideNote?: {
    side: 'left' | 'right';
    text: string;
    actionLabel?: string;
    actionType?: 'project' | 'dsa' | 'resource';
  };
  centerNodes?: string[];
  branches?: DiagramBranch[];
}

export interface RoleDiagramData {
  slug: string;
  title: string;
  subtitle: string;
  rootLabel: string;
  learnerCount: string;
  overviewDescription: string;
  beginnerNote: string;
  relatedRoadmaps: { title: string; slug: string }[];
  milestones: DiagramMilestone[];
}

export const ROLE_DIAGRAMS: Record<string, RoleDiagramData> = {
  // 1. FRONTEND DEVELOPER
  frontend: {
    slug: 'frontend',
    title: 'Frontend Developer',
    subtitle: 'Step by step guide to becoming a modern frontend developer in 2026',
    rootLabel: 'Front-end',
    learnerCount: '148,287+',
    overviewDescription: 'A Frontend Developer builds user interfaces and client-side applications using HTML, CSS, JavaScript, and modern frameworks like React and Next.js, optimizing for performance and accessibility.',
    beginnerNote: 'HTML, CSS and JavaScript are the backbone of web development. Make sure to practice by building lots of projects.',
    relatedRoadmaps: [
      { title: 'JavaScript Roadmap', slug: 'javascript' },
      { title: 'React Roadmap', slug: 'react' },
      { title: 'TypeScript Roadmap', slug: 'typescript' },
      { title: 'Node.js Roadmap', slug: 'nodejs' }
    ],
    milestones: [
      {
        id: 'fe-internet-m',
        title: 'Internet',
        subtitle: 'The foundational protocols powering the web',
        sideNote: {
          side: 'left',
          text: 'HTML, CSS and JavaScript are the backbone of web development. Make sure to practice by building lots of projects.',
          actionLabel: 'Beginner Project Ideas',
          actionType: 'project'
        },
        branches: [
          {
            side: 'right',
            nodes: [
              { id: 'fe-net-1', label: 'How does the Internet work?', badge: 'recommended', summary: 'Global network of computers exchanging IP packets through physical fiber, switches, and BGP routing.' },
              { id: 'fe-net-2', label: 'What is HTTP?', badge: 'recommended', summary: 'Hypertext Transfer Protocol defining client requests (GET, POST), response headers, and status codes.' },
              { id: 'fe-net-3', label: 'What is Domain Name?', badge: 'recommended', summary: 'Human-friendly web address (e.g. google.com) mapped to numeric server IP addresses.' },
              { id: 'fe-net-4', label: 'What is hosting?', badge: 'recommended', summary: 'Allocating compute and storage on remote servers to serve files to global users.' },
              { id: 'fe-net-5', label: 'DNS and how it works?', badge: 'recommended', summary: 'The phonebook of the Internet resolving domain names into IP addresses through recursive resolvers.' },
              { id: 'fe-net-6', label: 'Browsers and how they work?', badge: 'recommended', summary: 'Parsing HTML into DOM tree, CSS into CSSOM tree, executing layout, and rasterizing pixels.' }
            ]
          }
        ]
      },
      {
        id: 'fe-core-stack',
        title: 'HTML',
        centerNodes: ['HTML', 'CSS', 'JavaScript'],
        subtitle: 'The fundamental trio of frontend engineering',
        branches: []
      },
      {
        id: 'fe-version-control',
        title: 'Version Control',
        centerNodes: ['Version Control', 'VCS Hosting'],
        branches: [
          {
            side: 'left',
            nodes: [
              { id: 'fe-git-1', label: 'Git', badge: 'recommended', summary: 'Distributed version control system tracking commits, branching, merging, and stash.' },
              { id: 'fe-git-2', label: 'GitHub', badge: 'alternative', summary: 'Cloud repository hosting, PR reviews, CI/CD Actions, and open-source collaboration.' },
              { id: 'fe-git-3', label: 'GitLab', badge: 'alternative', summary: 'Enterprise self-hosted and cloud git hosting with integrated DevOps CI/CD.' }
            ]
          },
          {
            side: 'right',
            title: 'Package Managers',
            nodes: [
              { id: 'fe-pkg-1', label: 'npm', badge: 'recommended', summary: 'Default Node.js package manager holding the largest registry of web modules.' },
              { id: 'fe-pkg-2', label: 'pnpm', badge: 'alternative', summary: 'Hard-linked, disk-efficient package manager with fast installation times.' },
              { id: 'fe-pkg-3', label: 'yarn', badge: 'alternative', summary: 'Fast, reliable dependency management with offline caching and berry plugins.' },
              { id: 'fe-pkg-4', label: 'bun', badge: 'alternative', summary: 'All-in-one JavaScript runtime with blazing-fast native package manager.' }
            ]
          }
        ]
      },
      {
        id: 'fe-css-fw',
        title: 'CSS Frameworks',
        sideNote: {
          side: 'left',
          text: 'At this point, you should be able to build modern vanilla JS frontend applications.',
          actionLabel: 'Intermediate Project Ideas',
          actionType: 'project'
        },
        branches: [
          {
            side: 'right',
            nodes: [
              { id: 'fe-tw-1', label: 'Tailwind CSS', badge: 'recommended', summary: 'Utility-first CSS framework allowing rapid component styling directly in JSX.' },
              { id: 'fe-tw-2', label: 'Shadcn UI', badge: 'alternative', summary: 'Copy-paste accessible component architecture built on top of Radix primitives and Tailwind.' }
            ]
          }
        ]
      },
      {
        id: 'fe-learn-framework',
        title: 'Learn a Framework',
        subtitle: 'Component-driven reactive user interfaces',
        branches: [
          {
            side: 'left',
            title: 'Frontend Frameworks',
            nodes: [
              { id: 'fe-fw-react', label: 'React', badge: 'recommended', summary: 'The most popular UI library in modern tech. Component architecture, hooks, and virtual DOM.' },
              { id: 'fe-fw-vue', label: 'Vue.js', badge: 'alternative', summary: 'Approachable, performant, and versatile progressive framework with template syntax.' },
              { id: 'fe-fw-angular', label: 'Angular', badge: 'alternative', summary: 'Full-featured enterprise framework with TypeScript, RxJS, and dependency injection.' },
              { id: 'fe-fw-svelte', label: 'Svelte', badge: 'alternative', summary: 'Compiler that converts declarative components into tiny, vanilla JavaScript DOM updates.' },
              { id: 'fe-fw-solid', label: 'Solid JS', badge: 'alternative', summary: 'Fine-grained reactivity without a virtual DOM for ultra-high benchmark performance.' }
            ]
          },
          {
            side: 'right',
            title: 'AI in Development',
            nodes: [
              { id: 'fe-ai-1', label: 'How LLMs work', badge: 'recommended', summary: 'Next-token prediction, transformer self-attention, and reasoning dynamics.' },
              { id: 'fe-ai-2', label: 'AI vs Traditional Coding', badge: 'optional', summary: 'Leveraging AI for scaffolding and boilerplate while maintaining deep architectural oversight.' },
              { id: 'fe-ai-3', label: 'Code Reviews with AI', badge: 'recommended', summary: 'Automated vulnerability scanning, edge case detection, and accessibility linting.' }
            ]
          }
        ]
      },
      {
        id: 'fe-ai-assisted-coding',
        title: 'AI Assisted Coding',
        subtitle: 'Supercharging developer velocity with modern agentic IDEs',
        branches: [
          {
            side: 'left',
            nodes: [
              { id: 'fe-ai-claude', label: 'Claude Code', badge: 'recommended', summary: 'Anthropic terminal CLI agent for autonomous multi-file edits, test runs, and git commits.' },
              { id: 'fe-ai-cursor', label: 'Cursor', badge: 'alternative', summary: 'AI-first code editor with deep repository indexing and multi-cursor generation.' },
              { id: 'fe-ai-copilot', label: 'GitHub Copilot', badge: 'alternative', summary: 'Context-aware inline tab completions integrated directly into VS Code and JetBrains.' }
            ]
          },
          {
            side: 'center',
            nodes: [
              { id: 'fe-prompt-tech', label: 'Prompting Techniques', badge: 'recommended', summary: 'System prompts, context constraints, persona anchoring, and zero-shot instructions.' },
              { id: 'fe-agents-mcp', label: 'Agents & MCP (Model Context Protocol)', badge: 'recommended', summary: 'Standardized protocols connecting AI models to local filesystems, DBs, and tools.' }
            ]
          }
        ]
      },
      {
        id: 'fe-module-bundlers',
        title: 'Module Bundlers',
        branches: [
          {
            side: 'left',
            title: 'Auth Strategies',
            nodes: [
              { id: 'fe-auth-jwt', label: 'JWT & Cookies', badge: 'recommended', summary: 'HttpOnly Secure cookies preventing XSS token theft.' },
              { id: 'fe-auth-oauth', label: 'OAuth 2.0 / OIDC', badge: 'recommended', summary: 'Third-party single sign-on (Sign in with Google, GitHub, Apple).' }
            ]
          },
          {
            side: 'center',
            title: 'Bundler Tools',
            nodes: [
              { id: 'fe-bnd-vite', label: 'Vite', badge: 'recommended', summary: 'Ultra-fast ES modules dev server powered by esbuild and Rollup.' },
              { id: 'fe-bnd-swc', label: 'SWC / esbuild', badge: 'alternative', summary: 'Rust and Go transpilers executing orders of magnitude faster than Babel.' }
            ]
          },
          {
            side: 'right',
            title: 'Linters & Formatters',
            nodes: [
              { id: 'fe-fmt-prettier', label: 'Prettier', badge: 'recommended', summary: 'Opinionated code formatter enforcing consistent styling across team codebases.' },
              { id: 'fe-fmt-eslint', label: 'ESLint', badge: 'recommended', summary: 'Static code analysis detecting syntax traps, hook dependency bugs, and anti-patterns.' }
            ]
          }
        ]
      },
      {
        id: 'fe-testing-security',
        title: 'Testing & Web Security',
        sideNote: {
          side: 'left',
          text: 'At this point you should have the expertise of an intermediate level frontend developer. Keep practicing and sharpening your skills.',
          actionLabel: 'Advanced Project Ideas',
          actionType: 'project'
        },
        branches: [
          {
            side: 'left',
            title: 'Testing Tools',
            nodes: [
              { id: 'fe-tst-vitest', label: 'Vitest', badge: 'recommended', summary: 'Vite-native unit testing runner with instant HMR and Jest-compatible API.' },
              { id: 'fe-tst-playwright', label: 'Playwright', badge: 'recommended', summary: 'End-to-end browser automation testing across Chromium, Firefox, and WebKit.' },
              { id: 'fe-tst-cypress', label: 'Cypress', badge: 'alternative', summary: 'Developer-friendly browser testing runner with interactive time-travel debugging.' }
            ]
          },
          {
            side: 'right',
            title: 'Web Security',
            nodes: [
              { id: 'fe-sec-cors', label: 'CORS', badge: 'recommended', summary: 'Cross-Origin Resource Sharing HTTP headers restricting untrusted cross-domain fetches.' },
              { id: 'fe-sec-https', label: 'HTTPS & TLS', badge: 'recommended', summary: 'Encrypted channel communication ensuring confidentiality and data integrity in transit.' },
              { id: 'fe-sec-csp', label: 'CSP (Content Security Policy)', badge: 'recommended', summary: 'Defense-in-depth header blocking inline script injection and unauthorized scripts.' }
            ]
          }
        ]
      },
      {
        id: 'fe-web-apis-ssr',
        title: 'Web APIs & SSR/SSG',
        centerNodes: ['Web APIs', 'SSR', 'SSG'],
        branches: [
          {
            side: 'left',
            title: 'Modern Meta-Frameworks',
            nodes: [
              { id: 'fe-meta-next', label: 'Next.js (React)', badge: 'recommended', summary: 'React Server Components, App Router, incremental static regeneration, and server actions.' },
              { id: 'fe-meta-nuxt', label: 'Nuxt.js (Vue)', badge: 'alternative', summary: 'Vue meta-framework providing zero-config SSR, auto-imports, and Nitro engine.' },
              { id: 'fe-meta-astro', label: 'Astro', badge: 'alternative', summary: 'Islands architecture shipping zero JavaScript by default for content sites.' }
            ]
          },
          {
            side: 'right',
            title: 'Web APIs to Master',
            nodes: [
              { id: 'fe-api-fetch', label: 'Fetch & AbortController', badge: 'recommended', summary: 'Standard promises for HTTP networking with cancellable network requests.' },
              { id: 'fe-api-observer', label: 'Intersection Observer', badge: 'recommended', summary: 'Performant asynchronous viewport intersection detection for lazy loading.' }
            ]
          }
        ]
      },
      {
        id: 'fe-deployment',
        title: 'Deployment',
        branches: [
          {
            side: 'left',
            title: 'Cloud Edge Hosting',
            nodes: [
              { id: 'fe-dep-vercel', label: 'Vercel', badge: 'recommended', summary: 'Zero-config Next.js cloud deployment with automatic preview URLs and edge middleware.' },
              { id: 'fe-dep-cf', label: 'Cloudflare Pages / Workers', badge: 'recommended', summary: 'Sub-millisecond global edge delivery with KV stores and zero cold starts.' },
              { id: 'fe-dep-gh', label: 'GitHub Pages', badge: 'alternative', summary: 'Free, automated static hosting directly from your repository branch.' }
            ]
          }
        ]
      }
    ]
  },

  // 2. BACKEND DEVELOPER
  backend: {
    slug: 'backend',
    title: 'Backend Developer',
    subtitle: 'Step by step guide to becoming an enterprise backend developer in 2026',
    rootLabel: 'Back-end',
    learnerCount: '162,940+',
    overviewDescription: 'A Backend Developer designs and maintains server architectures, API endpoints, relational & document databases, distributed caching, and microservices.',
    beginnerNote: 'Start by choosing one core language (Node.js, Go, or Python) and mastering relational database design.',
    relatedRoadmaps: [
      { title: 'Node.js Roadmap', slug: 'nodejs' },
      { title: 'Python Roadmap', slug: 'python' },
      { title: 'SQL Roadmap', slug: 'sql' },
      { title: 'System Design', slug: 'system-design' }
    ],
    milestones: [
      {
        id: 'be-lang-choice',
        title: 'Pick a Language',
        sideNote: {
          side: 'left',
          text: 'Master language concurrency primitives and memory models before jumping into frameworks.',
          actionLabel: 'Backend Projects',
          actionType: 'project'
        },
        branches: [
          {
            side: 'right',
            title: 'Core Backend Languages',
            nodes: [
              { id: 'be-lang-node', label: 'Node.js / TypeScript', badge: 'recommended', summary: 'Non-blocking event loop I/O, massive ecosystem, shared types across frontend and backend.' },
              { id: 'be-lang-go', label: 'Go (Golang)', badge: 'recommended', summary: 'Lightweight goroutines, extreme concurrency performance, and small binary footprints.' },
              { id: 'be-lang-python', label: 'Python (FastAPI)', badge: 'alternative', summary: 'Clean syntax, async/await, first-class AI and machine learning ecosystem integration.' },
              { id: 'be-lang-java', label: 'Java / Spring Boot', badge: 'alternative', summary: 'Enterprise standard, strict typing, multithreading, and mature ecosystem.' }
            ]
          }
        ]
      },
      {
        id: 'be-relational-db',
        title: 'Relational Databases',
        subtitle: 'ACID transactions, schemas, and query optimization',
        branches: [
          {
            side: 'left',
            title: 'RDBMS Technologies',
            nodes: [
              { id: 'be-db-postgres', label: 'PostgreSQL', badge: 'recommended', summary: 'The most powerful open-source SQL database with support for JSONB, pgvector, and extensions.' },
              { id: 'be-db-mysql', label: 'MySQL', badge: 'alternative', summary: 'Classic reliable relational database powering billions of web transactions.' }
            ]
          },
          {
            side: 'right',
            title: 'Key Concepts to Master',
            nodes: [
              { id: 'be-sql-idx', label: 'Indexes (B-Trees / Hash / GIN)', badge: 'recommended', summary: 'Index structures, reducing sequential table scans, and index maintenance trade-offs.' },
              { id: 'be-sql-trans', label: 'Transactions & ACID', badge: 'recommended', summary: 'Atomicity, Consistency, Isolation levels (Read Committed, Repeatable Read), and Durability.' },
              { id: 'be-sql-explain', label: 'EXPLAIN ANALYZE', badge: 'recommended', summary: 'Reading query execution plans to identify bottlenecks, cost estimates, and temp table spillage.' }
            ]
          }
        ]
      },
      {
        id: 'be-api-design',
        title: 'API Architecture & Protocols',
        centerNodes: ['REST APIs', 'gRPC', 'GraphQL'],
        branches: [
          {
            side: 'left',
            nodes: [
              { id: 'be-api-rest', label: 'RESTful Principles', badge: 'recommended', summary: 'Stateless endpoints, standard HTTP verbs, status code precision, and idempotency.' },
              { id: 'be-api-grpc', label: 'gRPC & Protocol Buffers', badge: 'recommended', summary: 'Binary serialization over HTTP/2 for ultra-fast internal microservice communication.' },
              { id: 'be-api-gql', label: 'GraphQL', badge: 'alternative', summary: 'Client-specified queries, eliminating over-fetching, and federated subgraphs.' }
            ]
          }
        ]
      },
      {
        id: 'be-caching-queues',
        title: 'Caching & Message Queues',
        subtitle: 'Sub-millisecond reads and asynchronous background pipelines',
        branches: [
          {
            side: 'left',
            title: 'In-Memory Caching',
            nodes: [
              { id: 'be-cache-redis', label: 'Redis', badge: 'recommended', summary: 'In-memory key-value data structure store used as a database, cache, and message broker.' },
              { id: 'be-cache-pat', label: 'Cache-Aside & Invalidation', badge: 'recommended', summary: 'TTLs, Write-Through patterns, cache stampede prevention, and Redlock distributed locks.' }
            ]
          },
          {
            side: 'right',
            title: 'Asynchronous Messaging',
            nodes: [
              { id: 'be-msg-kafka', label: 'Apache Kafka', badge: 'recommended', summary: 'Distributed append-only event streaming log capable of processing trillions of events per day.' },
              { id: 'be-msg-rabbit', label: 'RabbitMQ', badge: 'alternative', summary: 'Flexible message broker supporting topic exchanges, fanouts, and dead-letter queues.' }
            ]
          }
        ]
      },
      {
        id: 'be-scale-cloud',
        title: 'Distributed Systems & Scaling',
        subtitle: 'Handling millions of concurrent requests reliably',
        branches: [
          {
            side: 'left',
            nodes: [
              { id: 'be-scale-lb', label: 'Load Balancers (Nginx / Envoy)', badge: 'recommended', summary: 'Reverse proxying, health checks, rate limiting, and SSL termination.' },
              { id: 'be-scale-shard', label: 'Database Sharding & Replication', badge: 'recommended', summary: 'Horizontal database partitioning, consistent hashing, and read-replica replication lag.' }
            ]
          },
          {
            side: 'right',
            nodes: [
              { id: 'be-scale-docker', label: 'Docker & Kubernetes', badge: 'recommended', summary: 'Packaging services into immutable containers and orchestrating automated rollout pods.' },
              { id: 'be-scale-obs', label: 'Prometheus & OpenTelemetry', badge: 'recommended', summary: 'Distributed request tracing, structured logging, and real-time SLA metrics.' }
            ]
          }
        ]
      }
    ]
  },

  // 3. FULL STACK DEVELOPER
  'full-stack': {
    slug: 'full-stack',
    title: 'Full Stack Developer',
    subtitle: 'Master both client and server development, database modeling, and deployment in 2026',
    rootLabel: 'Full-stack',
    learnerCount: '178,500+',
    overviewDescription: 'A Full Stack Developer creates end-to-end applications, designing reactive frontends, robust REST/gRPC backend APIs, scalable databases, and automated cloud deployments.',
    beginnerNote: 'Start with frontend foundations (HTML/CSS/JS/React) and progress into backend node services and PostgreSQL databases.',
    relatedRoadmaps: [
      { title: 'Frontend Roadmap', slug: 'frontend' },
      { title: 'Backend Roadmap', slug: 'backend' },
      { title: 'PostgreSQL Roadmap', slug: 'postgresql' },
      { title: 'DevOps Roadmap', slug: 'devops' }
    ],
    milestones: [
      {
        id: 'fs-frontend-core',
        title: 'Frontend Mastery',
        centerNodes: ['HTML & Modern CSS', 'TypeScript', 'React 19'],
        sideNote: {
          side: 'left',
          text: 'Master client-side component architecture before bridging to fullstack server actions.',
          actionLabel: 'Full Stack Projects',
          actionType: 'project'
        },
        branches: [
          {
            side: 'right',
            nodes: [
              { id: 'fs-fe-1', label: 'React Hooks & State', badge: 'recommended', summary: 'Predictable state management, custom hooks, and memoization.' },
              { id: 'fs-fe-2', label: 'Tailwind CSS & Shadcn', badge: 'recommended', summary: 'Modern design system primitives and responsive layouts.' }
            ]
          }
        ]
      },
      {
        id: 'fs-meta-frameworks',
        title: 'Fullstack Meta-Frameworks',
        centerNodes: ['Next.js App Router', 'Server Actions', 'SSR & ISR'],
        branches: [
          {
            side: 'left',
            nodes: [
              { id: 'fs-next-rsc', label: 'React Server Components', badge: 'recommended', summary: 'Zero bundle size server execution with streamed client hydration.' },
              { id: 'fs-next-act', label: 'Server Actions & Mutations', badge: 'recommended', summary: 'Direct backend mutations without boilerplate REST endpoint creation.' }
            ]
          }
        ]
      },
      {
        id: 'fs-database-layer',
        title: 'Databases & ORMs',
        centerNodes: ['PostgreSQL', 'Prisma / Drizzle ORM', 'Redis'],
        branches: [
          {
            side: 'right',
            nodes: [
              { id: 'fs-db-pg', label: 'PostgreSQL Relational Schema', badge: 'recommended', summary: 'ACID transactions, foreign keys, and performant indexes.' },
              { id: 'fs-db-orm', label: 'Drizzle / Prisma ORM', badge: 'recommended', summary: 'Type-safe SQL query authoring with automated schema migrations.' }
            ]
          }
        ]
      },
      {
        id: 'fs-cloud-deploy',
        title: 'Auth & Cloud Production',
        centerNodes: ['NextAuth / OAuth 2.0', 'Docker Containerization', 'Vercel / Cloudflare'],
        branches: [
          {
            side: 'left',
            nodes: [
              { id: 'fs-dep-dock', label: 'Docker Compose Local Stacks', badge: 'recommended', summary: 'Spins up DB, Redis, and API containers with one command.' },
              { id: 'fs-dep-ci', label: 'GitHub Actions CI/CD', badge: 'recommended', summary: 'Automated linting, testing, and continuous deployment.' }
            ]
          }
        ]
      }
    ]
  },

  // 4. AI ENGINEER
  'ai-engineer': {
    slug: 'ai-engineer',
    title: 'AI Engineer',
    subtitle: 'Step by step guide to building production GenAI applications & Agentic Systems in 2026',
    rootLabel: 'AI Engineer',
    learnerCount: '94,120+',
    overviewDescription: 'An AI Engineer bridges foundation ML models (LLMs, multimodal) with enterprise software, developing RAG systems, autonomous agentic loops, and scalable inference architectures.',
    beginnerNote: 'Start by understanding token mechanics, prompt structure, and vector embeddings before orchestrating multi-agent systems.',
    relatedRoadmaps: [
      { title: 'Python Roadmap', slug: 'python' },
      { title: 'Machine Learning', slug: 'machine-learning' },
      { title: 'Prompt Engineering', slug: 'vibe-coding' },
      { title: 'System Design', slug: 'system-design' }
    ],
    milestones: [
      {
        id: 'ai-llm-foundations',
        title: 'Foundation Models & Tokens',
        sideNote: {
          side: 'left',
          text: 'Understand token economics and temperature determinism before writing production logic.',
          actionLabel: 'RAG Projects',
          actionType: 'project'
        },
        branches: [
          {
            side: 'right',
            nodes: [
              { id: 'ai-tok-1', label: 'Transformer Attention & Tokens', badge: 'recommended', summary: 'Self-attention mechanism, context window limits, and tokenization (BPE).' },
              { id: 'ai-tok-2', label: 'Decoding Strategies', badge: 'recommended', summary: 'Greedy search, temperature, top-k, top-p (nucleus sampling), and seed determinism.' },
              { id: 'ai-tok-3', label: 'Function Calling / Tools', badge: 'recommended', summary: 'Teaching models to invoke external APIs and SQL databases deterministically via JSON schema.' }
            ]
          }
        ]
      },
      {
        id: 'ai-rag-stack',
        title: 'Retrieval-Augmented Generation (RAG)',
        subtitle: 'Connecting private data stores to foundation models with citation precision',
        branches: [
          {
            side: 'left',
            title: 'Embeddings & Vectors',
            nodes: [
              { id: 'ai-vec-1', label: 'Embedding Models', badge: 'recommended', summary: 'High-dimensional semantic vector spaces capturing conceptual similarity.' },
              { id: 'ai-vec-2', label: 'pgvector / Qdrant / Pinecone', badge: 'recommended', summary: 'Vector indexing (HNSW, IVFFlat) executing cosine and Euclidean nearest-neighbor searches.' }
            ]
          },
          {
            side: 'right',
            title: 'Advanced RAG Techniques',
            nodes: [
              { id: 'ai-rag-chunk', label: 'Semantic Chunking & Parsing', badge: 'recommended', summary: 'Recursive chunking, preserving markdown tables, and document metadata tagging.' },
              { id: 'ai-rag-rerank', label: 'Cross-Encoder Reranking', badge: 'recommended', summary: 'Passing top 50 retrieved chunks through a cross-encoder to elevate top 5 relevant passages.' },
              { id: 'ai-rag-hybrid', label: 'Hybrid Search (BM25 + Vectors)', badge: 'recommended', summary: 'Combining sparse keyword search with dense semantic embeddings for robust recall.' }
            ]
          }
        ]
      },
      {
        id: 'ai-agentic-stack',
        title: 'Autonomous Agents & Multi-Agent Loops',
        centerNodes: ['ReAct Loops', 'LangGraph', 'MCP Protocol'],
        branches: [
          {
            side: 'left',
            nodes: [
              { id: 'ai-ag-react', label: 'Reason + Act (ReAct)', badge: 'recommended', summary: 'Cyclic planning, tool invocation, environment observation, and self-correction loops.' },
              { id: 'ai-ag-graph', label: 'Stateful Graphs (LangGraph / AutoGen)', badge: 'recommended', summary: 'State machines with conditional branching, persistence checkpointers, and human approvals.' }
            ]
          },
          {
            side: 'right',
            nodes: [
              { id: 'ai-eval-triad', label: 'RAG Triad & Evals (Ragas)', badge: 'recommended', summary: 'Automated evaluation: Context Relevance, Groundedness (Hallucination check), and Answer Relevance.' },
              { id: 'ai-sec-jailbreak', label: 'Prompt Injection Defense', badge: 'recommended', summary: 'Securing against direct and indirect prompt injection, data exfiltration, and SSRF via tools.' }
            ]
          }
        ]
      }
    ]
  },

  // 5. DEVOPS ENGINEER
  devops: {
    slug: 'devops',
    title: 'DevOps Engineer',
    subtitle: 'Step by step guide to mastering Cloud Infrastructure, CI/CD, and Kubernetes in 2026',
    rootLabel: 'DevOps',
    learnerCount: '131,810+',
    overviewDescription: 'A DevOps Engineer specializes in bridging software development and IT operations through automated CI/CD pipelines, Infrastructure as Code, container orchestration, and telemetry.',
    beginnerNote: 'Master Linux administration and bash scripting before touching cloud orchestrators.',
    relatedRoadmaps: [
      { title: 'Linux Roadmap', slug: 'linux' },
      { title: 'Docker Roadmap', slug: 'docker' },
      { title: 'Kubernetes Roadmap', slug: 'kubernetes' },
      { title: 'Cyber Security', slug: 'cyber-security' }
    ],
    milestones: [
      {
        id: 'do-linux-m',
        title: 'Linux & Terminal Automation',
        sideNote: {
          side: 'left',
          text: 'Everything in the cloud runs on Linux. Master file descriptors, permissions, and systemd.',
          actionLabel: 'DevOps Pipelines',
          actionType: 'project'
        },
        branches: [
          {
            side: 'right',
            nodes: [
              { id: 'do-lx-1', label: 'Bash Scripting & Core Utilities', badge: 'recommended', summary: 'Grep, sed, awk, curl, jq, xargs, and pipe streams for automated system administration.' },
              { id: 'do-lx-2', label: 'systemd & Process Management', badge: 'recommended', summary: 'Daemon service units, journalctl logging, and graceful process signals (SIGTERM).' },
              { id: 'do-lx-3', label: 'SSH & Key Management', badge: 'recommended', summary: 'Ed25519 cryptographic keys, bastion host jumping, and ssh-agent tunneling.' }
            ]
          }
        ]
      },
      {
        id: 'do-containers-m',
        title: 'Containers & Docker',
        subtitle: 'Immutable artifacts running identically everywhere',
        branches: [
          {
            side: 'left',
            nodes: [
              { id: 'do-dk-1', label: 'Multi-Stage Dockerfiles', badge: 'recommended', summary: 'Separating build dependencies from runtime environments to produce lean <30MB images.' },
              { id: 'do-dk-2', label: 'Container Security (Non-root)', badge: 'recommended', summary: 'Running containers without root privileges, read-only root filesystems, and CVE scanning.' }
            ]
          }
        ]
      },
      {
        id: 'do-k8s-m',
        title: 'Kubernetes Orchestration',
        centerNodes: ['Pods & Services', 'Deployments & Ingress', 'Helm Charts'],
        branches: [
          {
            side: 'right',
            nodes: [
              { id: 'do-k8-arch', label: 'Cluster Architecture', badge: 'recommended', summary: 'Kube-apiserver, etcd consensus, kube-scheduler, kubelet, and CRI runtimes.' },
              { id: 'do-k8-roll', label: 'Rolling Updates & Canary Releases', badge: 'recommended', summary: 'Zero-downtime application updates with readiness probes and automated rollback.' }
            ]
          }
        ]
      },
      {
        id: 'do-iac-m',
        title: 'Infrastructure as Code (Terraform)',
        branches: [
          {
            side: 'left',
            nodes: [
              { id: 'do-tf-state', label: 'Terraform State & Locking', badge: 'recommended', summary: 'Remote S3/GCS state storage with DynamoDB state locking preventing conflicting applies.' },
              { id: 'do-tf-mod', label: 'Modular Infrastructure', badge: 'recommended', summary: 'Reusable cloud architecture modules for VPCs, managed databases, and DNS records.' }
            ]
          },
          {
            side: 'right',
            title: 'CI/CD Pipelines',
            nodes: [
              { id: 'do-ci-act', label: 'GitHub Actions / GitLab CI', badge: 'recommended', summary: 'Automated pull-request matrix tests, image publishing, and ephemeral previews.' },
              { id: 'do-ci-oidc', label: 'OIDC Cloud Authentication', badge: 'recommended', summary: 'Keyless AWS/GCP authentication via short-lived JWT tokens without static secrets.' }
            ]
          }
        ]
      }
    ]
  },

  // 6. ANDROID DEVELOPER
  android: {
    slug: 'android',
    title: 'Android Developer',
    subtitle: 'Step by step guide to native Android app development with Kotlin & Jetpack Compose in 2026',
    rootLabel: 'Android',
    learnerCount: '87,300+',
    overviewDescription: 'An Android Developer builds high-performance, native mobile applications for billions of Android devices using Kotlin, modern declarative Jetpack Compose, and clean architecture.',
    beginnerNote: 'Master Kotlin syntax, coroutines, and Android lifecycles before building complex apps.',
    relatedRoadmaps: [
      { title: 'Kotlin Roadmap', slug: 'languages' },
      { title: 'Java Roadmap', slug: 'languages' },
      { title: 'Mobile Development', slug: 'mobile' }
    ],
    milestones: [
      {
        id: 'android-kotlin',
        title: 'Kotlin Fundamentals',
        centerNodes: ['Kotlin Language', 'Coroutines & Flow', 'OOP & Functional Idioms'],
        branches: [
          {
            side: 'right',
            nodes: [
              { id: 'and-kt-1', label: 'Null Safety & Extensions', badge: 'recommended', summary: 'Safe calls, elvis operator, extension functions, and sealed classes.' },
              { id: 'and-kt-2', label: 'Coroutines & Asynchronous Dispatch', badge: 'recommended', summary: 'Structured concurrency, dispatchers (IO, Main), and reactive StateFlow.' }
            ]
          }
        ]
      },
      {
        id: 'android-compose',
        title: 'Jetpack Compose UI',
        centerNodes: ['Declarative UI', 'Material 3', 'State Hoisting'],
        branches: [
          {
            side: 'left',
            nodes: [
              { id: 'and-cmp-1', label: 'Composable Functions', badge: 'recommended', summary: 'Building reactive UI trees that re-render upon state changes.' },
              { id: 'and-cmp-2', label: 'Navigation Compose', badge: 'recommended', summary: 'Type-safe deep links, backstack management, and transitions.' }
            ]
          }
        ]
      },
      {
        id: 'android-arch',
        title: 'Architecture & Persistence',
        centerNodes: ['MVVM / MVI', 'Room Database', 'Hilt / Koin DI'],
        branches: [
          {
            side: 'right',
            nodes: [
              { id: 'and-arc-1', label: 'Room SQLite Database', badge: 'recommended', summary: 'Local offline-first caching with compile-time SQL verification.' },
              { id: 'and-arc-2', label: 'Retrofit & OkHttp', badge: 'recommended', summary: 'Consuming REST APIs, network interceptors, and Moshi/Kotlinx Serialization.' }
            ]
          }
        ]
      }
    ]
  },

  // 7. DATA ANALYST
  'data-analyst': {
    slug: 'data-analyst',
    title: 'Data Analyst',
    subtitle: 'Step by step guide to business intelligence, SQL querying, and data storytelling in 2026',
    rootLabel: 'Data Analyst',
    learnerCount: '115,200+',
    overviewDescription: 'A Data Analyst transforms messy business data into actionable dashboards, KPIs, and predictive metrics using SQL, Python, Excel, and BI tools like Power BI and Tableau.',
    beginnerNote: 'Master SQL joins, aggregations, and window functions before jumping into machine learning.',
    relatedRoadmaps: [
      { title: 'SQL Roadmap', slug: 'sql' },
      { title: 'Python for Data Analysis', slug: 'python-for-data-analysis' },
      { title: 'PostgreSQL Roadmap', slug: 'postgresql' }
    ],
    milestones: [
      {
        id: 'da-sql-core',
        title: 'Advanced SQL Querying',
        centerNodes: ['SELECT & Aggregate', 'Window Functions', 'CTEs & Subqueries'],
        branches: [
          {
            side: 'right',
            nodes: [
              { id: 'da-sql-1', label: 'Window Functions (RANK, DENSE_RANK, LEAD)', badge: 'recommended', summary: 'Running calculations across data partitions without collapsing rows.' },
              { id: 'da-sql-2', label: 'Complex JOINs & Self-Joins', badge: 'recommended', summary: 'Inner, Left, Cross joins, and handling null co-occurrence.' }
            ]
          }
        ]
      },
      {
        id: 'da-python-pandas',
        title: 'Python for Data Wrangling',
        centerNodes: ['Pandas & NumPy', 'Data Cleaning', 'Exploratory Data Analysis'],
        branches: [
          {
            side: 'left',
            nodes: [
              { id: 'da-py-1', label: 'Pandas DataFrames', badge: 'recommended', summary: 'Vectorized data manipulations, grouping, pivoting, and merging.' },
              { id: 'da-py-2', label: 'Handling Missing Values', badge: 'recommended', summary: 'Imputation strategies, outlier detection, and data type coercion.' }
            ]
          }
        ]
      },
      {
        id: 'da-bi-dashboards',
        title: 'BI Dashboards & Storytelling',
        centerNodes: ['Power BI / Tableau', 'DAX Calculations', 'Executive Presentation'],
        branches: [
          {
            side: 'right',
            nodes: [
              { id: 'da-bi-1', label: 'Interactive Dashboards', badge: 'recommended', summary: 'Cross-filtering, KPI scorecards, drill-down hierarchy, and scheduled refreshes.' },
              { id: 'da-bi-2', label: 'A/B Testing & Hypothesis Testing', badge: 'recommended', summary: 'P-values, confidence intervals, sample sizing, and statistical significance.' }
            ]
          }
        ]
      }
    ]
  },

  // 8. DATA ENGINEER
  'data-engineer': {
    slug: 'data-engineer',
    title: 'Data Engineer',
    subtitle: 'Step by step guide to distributed streaming, ETL pipelines, and cloud data warehouses in 2026',
    rootLabel: 'Data Engineer',
    learnerCount: '89,400+',
    overviewDescription: 'A Data Engineer builds resilient, high-volume batch and real-time streaming data pipelines using tools like Apache Spark, Kafka, Airflow, and Snowflake.',
    beginnerNote: 'Start with SQL and Python, then learn distributed compute models like Spark.',
    relatedRoadmaps: [
      { title: 'Python Roadmap', slug: 'python' },
      { title: 'SQL Roadmap', slug: 'sql' },
      { title: 'DevOps Roadmap', slug: 'devops' }
    ],
    milestones: [
      {
        id: 'de-distributed-compute',
        title: 'Distributed Compute',
        centerNodes: ['Apache Spark / PySpark', 'Data Partitioning', 'Lakehouse (Delta / Iceberg)'],
        branches: [
          {
            side: 'right',
            nodes: [
              { id: 'de-spk-1', label: 'Spark Core & RDDs', badge: 'recommended', summary: 'Lazy evaluation, DAG execution plans, and shuffle partitions.' },
              { id: 'de-spk-2', label: 'Delta Lake & Apache Iceberg', badge: 'recommended', summary: 'ACID transactions, time travel, and schema enforcement on object storage.' }
            ]
          }
        ]
      },
      {
        id: 'de-streaming-orchestration',
        title: 'Streaming & Workflow Orchestration',
        centerNodes: ['Apache Kafka', 'Apache Airflow', 'dbt (Data Build Tool)'],
        branches: [
          {
            side: 'left',
            nodes: [
              { id: 'de-kfk-1', label: 'Kafka Event Streaming', badge: 'recommended', summary: 'Topic partitions, consumer offsets, and exactly-once semantics.' },
              { id: 'de-air-1', label: 'Airflow DAG Orchestration', badge: 'recommended', summary: 'Task dependencies, backfilling, retries, and SLA alerts.' }
            ]
          }
        ]
      }
    ]
  },

  // 9. SOFTWARE ARCHITECT
  'software-architect': {
    slug: 'software-architect',
    title: 'Software Architect',
    subtitle: 'Step by step guide to distributed systems design, domain-driven design, and cloud scalability in 2026',
    rootLabel: 'Architect',
    learnerCount: '98,200+',
    overviewDescription: 'A Software Architect defines high-level system structures, makes critical technology and infrastructure trade-offs, and ensures non-functional requirements (scalability, availability, security) are met.',
    beginnerNote: 'Deepen your knowledge of trade-offs (CAP theorem, PACELC, consistency models) rather than searching for perfect solutions.',
    relatedRoadmaps: [
      { title: 'System Design', slug: 'system-design' },
      { title: 'Backend Roadmap', slug: 'backend' },
      { title: 'DevOps Roadmap', slug: 'devops' }
    ],
    milestones: [
      {
        id: 'sa-distributed-principles',
        title: 'Distributed Architecture',
        centerNodes: ['CAP & PACELC Theorems', 'Event-Driven Systems', 'CQRS & Event Sourcing'],
        branches: [
          {
            side: 'right',
            nodes: [
              { id: 'sa-cap-1', label: 'Consistency vs Availability Trade-offs', badge: 'recommended', summary: 'Linearizable strong consistency vs eventual consistency in partitioned networks.' },
              { id: 'sa-cqrs-1', label: 'CQRS & Event Sourcing', badge: 'recommended', summary: 'Segregating command writes from analytical reads with immutable append-only logs.' }
            ]
          }
        ]
      },
      {
        id: 'sa-domain-design',
        title: 'Domain-Driven Design (DDD)',
        centerNodes: ['Bounded Contexts', 'Ubiquitous Language', 'Aggregates & Entities'],
        branches: [
          {
            side: 'left',
            nodes: [
              { id: 'sa-ddd-1', label: 'Strategic vs Tactical DDD', badge: 'recommended', summary: 'Decomposing complex enterprise domains into clear bounded context boundaries.' },
              { id: 'sa-res-1', label: 'Resilience Engineering (Circuit Breaker)', badge: 'recommended', summary: 'Graceful degradation, exponential backoff with jitter, and bulkhead isolation.' }
            ]
          }
        ]
      }
    ]
  },

  // 10. CYBER SECURITY
  'cyber-security': {
    slug: 'cyber-security',
    title: 'Cyber Security Engineer',
    subtitle: 'Step by step guide to offensive security, defensive engineering, cryptography, and cloud hardening in 2026',
    rootLabel: 'Security',
    learnerCount: '78,400+',
    overviewDescription: 'A Cyber Security Engineer protects computer systems, networks, and cloud workloads from unauthorized access, cyber attacks, data theft, and exploits.',
    beginnerNote: 'Master TCP/IP networking, Linux administration, and cryptography fundamentals.',
    relatedRoadmaps: [
      { title: 'Linux Roadmap', slug: 'linux' },
      { title: 'DevSecOps Roadmap', slug: 'devsecops' },
      { title: 'Computer Science', slug: 'computer-science' }
    ],
    milestones: [
      {
        id: 'sec-net-foundations',
        title: 'Networking & Threat Landscape',
        centerNodes: ['TCP/IP & OSI Model', 'Wireshark Packet Analysis', 'Firewalls & VPNs'],
        branches: [
          {
            side: 'right',
            nodes: [
              { id: 'sec-net-1', label: 'Packet Inspection & Sniffing', badge: 'recommended', summary: 'Capturing and analyzing raw network packets for anomaly detection.' },
              { id: 'sec-net-2', label: 'Port Scanning (Nmap)', badge: 'recommended', summary: 'Network host discovery, open port enumeration, and service version detection.' }
            ]
          }
        ]
      },
      {
        id: 'sec-app-sec',
        title: 'Application Security (AppSec)',
        centerNodes: ['OWASP Top 10', 'Penetration Testing (Burp Suite)', 'SAST & DAST Scanning'],
        branches: [
          {
            side: 'left',
            nodes: [
              { id: 'sec-app-1', label: 'XSS, SQLi, and CSRF Exploit Defense', badge: 'recommended', summary: 'Sanitizing input parameters and enforcing parameterized queries.' },
              { id: 'sec-app-2', label: 'Zero Trust Architecture', badge: 'recommended', summary: 'Never trust, always verify: least-privilege microsegmentation and identity verification.' }
            ]
          }
        ]
      }
    ]
  }
};
