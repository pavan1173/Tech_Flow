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
  centerNodes?: string[]; // Multiple items in the central vertical stack
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
  frontend: {
    slug: 'frontend',
    title: 'Frontend Developer',
    subtitle: 'Step by step guide to becoming a modern frontend developer in 2026',
    rootLabel: 'Front-end',
    learnerCount: '148,287+',
    overviewDescription: 'A Frontend Developer is responsible for building the user interface and user experience of web applications using HTML, CSS, JavaScript, and modern frameworks like React and Next.js.',
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
              { id: 'fe-net-1', label: 'How does the Internet work?', badge: 'recommended', summary: 'Computers interconnected through physical fiber, switches, and routers exchanging packets via IP addresses.' },
              { id: 'fe-net-2', label: 'What is HTTP?', badge: 'recommended', summary: 'Hypertext Transfer Protocol powering client-server requests, verbs (GET, POST), and status codes.' },
              { id: 'fe-net-3', label: 'What is Domain Name?', badge: 'recommended', summary: 'Human-friendly web address (e.g. google.com) mapped to numeric server IP addresses.' },
              { id: 'fe-net-4', label: 'What is hosting?', badge: 'recommended', summary: 'Allocating server hardware space and compute to serve your website files to the public.' },
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
              { id: 'fe-ai-3', label: 'Code Reviews with AI', badge: 'recommended', summary: 'Automated vulnerability scanning, edge case detection, and accessibility linting.' },
              { id: 'fe-ai-4', label: 'Refactoring & Docs', badge: 'optional', summary: 'Instant markdown documentation, JSDoc comment generation, and TypeScript conversion.' }
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
              { id: 'fe-ai-copilot', label: 'GitHub Copilot', badge: 'alternative', summary: 'Context-aware inline tab completions integrated directly into VS Code and JetBrains.' },
              { id: 'fe-ai-prompt', label: 'Prompt Engineering', badge: 'recommended', summary: 'Chain-of-Thought, few-shot examples, and strict JSON schemas for predictable outputs.' }
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
        id: 'fe-implementing-ai',
        title: 'Implementing AI',
        subtitle: 'Connecting modern frontend applications to AI APIs',
        branches: [
          {
            side: 'left',
            title: 'AI Providers & SDKs',
            nodes: [
              { id: 'fe-ai-gemini', label: 'Google Gemini SDK', badge: 'recommended', summary: 'High context windows, multimodal processing, and low-latency structured JSON calls.' },
              { id: 'fe-ai-openai', label: 'OpenAI API', badge: 'alternative', summary: 'GPT-4o, function calling, streaming tokens, and Whisper speech models.' },
              { id: 'fe-ai-anthropic', label: 'Anthropic Claude', badge: 'alternative', summary: 'Sonnet models with extended thinking and benchmark-leading coding abilities.' }
            ]
          },
          {
            side: 'right',
            title: 'Advanced Frontend',
            nodes: [
              { id: 'fe-adv-state', label: 'State Management (Zustand / TanStack)', badge: 'recommended', summary: 'Decoupled store architecture and server state caching with automatic revalidation.' },
              { id: 'fe-adv-perf', label: 'Web Vitals & Performance', badge: 'recommended', summary: 'LCP, INP, and CLS metric optimization, bundle splitting, and dynamic imports.' }
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
              { id: 'fe-bnd-swc', label: 'SWC / esbuild', badge: 'alternative', summary: 'Rust and Go transpilers executing orders of magnitude faster than Babel.' },
              { id: 'fe-bnd-rollup', label: 'Rollup / Rolldown', badge: 'alternative', summary: 'ES module tree-shaking bundler with C++ Rust rewrite (Rolldown).' }
            ]
          },
          {
            side: 'right',
            title: 'Linters & Formatters',
            nodes: [
              { id: 'fe-fmt-prettier', label: 'Prettier', badge: 'recommended', summary: 'Opinionated code formatter enforcing consistent styling across team codebases.' },
              { id: 'fe-fmt-eslint', label: 'ESLint', badge: 'recommended', summary: 'Static code analysis detecting syntax traps, hook dependency bugs, and anti-patterns.' },
              { id: 'fe-fmt-biome', label: 'Biome', badge: 'alternative', summary: 'Single Rust toolchain combining fast linting and formatting without Node runtime overhead.' }
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
            title: 'Testing',
            nodes: [
              { id: 'fe-tst-vitest', label: 'Vitest', badge: 'recommended', summary: 'Vite-native unit testing runner with instant HMR and Jest-compatible API.' },
              { id: 'fe-tst-playwright', label: 'Playwright', badge: 'recommended', summary: 'End-to-end browser automation testing across Chromium, Firefox, and WebKit.' },
              { id: 'fe-tst-cypress', label: 'Cypress', badge: 'alternative', summary: 'Developer-friendly browser testing runner with interactive time-travel debugging.' },
              { id: 'fe-tst-jest', label: 'Jest', badge: 'alternative', summary: 'Classic battle-tested JavaScript testing framework with built-in mocking.' }
            ]
          },
          {
            side: 'right',
            title: 'Web Security',
            nodes: [
              { id: 'fe-sec-cors', label: 'CORS', badge: 'recommended', summary: 'Cross-Origin Resource Sharing HTTP headers restricting untrusted cross-domain fetches.' },
              { id: 'fe-sec-https', label: 'HTTPS & TLS', badge: 'recommended', summary: 'Encrypted channel communication ensuring confidentiality and data integrity in transit.' },
              { id: 'fe-sec-csp', label: 'CSP (Content Security Policy)', badge: 'recommended', summary: 'Defense-in-depth header blocking inline script injection and unauthorized scripts.' },
              { id: 'fe-sec-owasp', label: 'OWASP Top 10 Risks', badge: 'recommended', summary: 'Defending against XSS, clickjacking, insecure deserialization, and CSRF.' }
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
              { id: 'fe-meta-astro', label: 'Astro', badge: 'alternative', summary: 'Islands architecture shipping zero JavaScript by default for content sites.' },
              { id: 'fe-meta-sveltekit', label: 'SvelteKit', badge: 'alternative', summary: 'Full-stack framework for Svelte with filesystem routing and server endpoints.' }
            ]
          },
          {
            side: 'right',
            title: 'Web APIs to Master',
            nodes: [
              { id: 'fe-api-fetch', label: 'Fetch & AbortController', badge: 'recommended', summary: 'Standard promises for HTTP networking with cancellable network requests.' },
              { id: 'fe-api-observer', label: 'Intersection Observer', badge: 'recommended', summary: 'Performant asynchronous viewport intersection detection for lazy loading.' },
              { id: 'fe-api-storage', label: 'IndexedDB & Storage', badge: 'recommended', summary: 'Client-side relational/key-value storage for offline-first web apps.' }
            ]
          }
        ]
      },
      {
        id: 'fe-deployment',
        title: 'Deployment',
        subtitle: 'Ship your frontend to global edge networks',
        branches: [
          {
            side: 'left',
            title: 'Edge & Static Cloud Hosting',
            nodes: [
              { id: 'fe-dep-vercel', label: 'Vercel', badge: 'recommended', summary: 'Zero-config Next.js cloud deployment with automatic preview URLs and edge middleware.' },
              { id: 'fe-dep-cf', label: 'Cloudflare Pages / Workers', badge: 'recommended', summary: 'Sub-millisecond global edge delivery with KV stores and zero cold starts.' },
              { id: 'fe-dep-gh', label: 'GitHub Pages', badge: 'alternative', summary: 'Free, automated static hosting directly from your repository branch.' },
              { id: 'fe-dep-netlify', label: 'Netlify', badge: 'alternative', summary: 'Serverless web hosting with branch previews and form handling.' },
              { id: 'fe-dep-railway', label: 'Railway / Render', badge: 'alternative', summary: 'Containerized deployment for fullstack Node.js and full-service apps.' }
            ]
          }
        ]
      }
    ]
  },

  backend: {
    slug: 'backend',
    title: 'Backend Developer',
    subtitle: 'Step by step guide to becoming an enterprise backend developer in 2026',
    rootLabel: 'Back-end',
    learnerCount: '162,940+',
    overviewDescription: 'A Backend Developer is responsible for designing, building, and maintaining the server-side architecture, APIs, database systems, caching layers, and cloud infrastructure.',
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

  'ai-engineer': {
    slug: 'ai-engineer',
    title: 'AI Engineer',
    subtitle: 'Step by step guide to building production GenAI applications & Agentic Systems in 2026',
    rootLabel: 'AI Engineer',
    learnerCount: '94,120+',
    overviewDescription: 'An AI Engineer bridges the gap between foundation machine learning models (LLMs, Diffusion, Multimodal) and enterprise software systems, building RAG architectures, agentic loops, and scalable inference APIs.',
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
  }
};
