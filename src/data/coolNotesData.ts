export interface NoteItem {
  id: string;
  title: string;
  category: string;
  date: string;
  pages: number;
  author?: string;
  tagColor?: string;
  previewHeader?: string;
  previewPoints?: string[];
  previewSubtext?: string;
  diagramType?: 'sql' | 'backend' | 'system-design' | 'nodejs' | 'react' | 'ml' | 'cn' | 'aws' | 'k8s' | 'docker' | 'os' | 'dbms' | 'java' | 'python' | 'cpp' | 'git' | 'nextjs' | 'security' | 'generic';
  contentPages: {
    pageNumber: number;
    title: string;
    sections: {
      heading?: string;
      body: string;
      codeOrDiagram?: string;
      bulletPoints?: string[];
    }[];
  }[];
}

export const coolNotesList: NoteItem[] = [
  {
    id: 'sql-mastery-notes',
    title: 'SQL - Mastery Notes',
    category: 'SQL',
    date: 'Jul 22, 2026',
    pages: 18,
    author: 'TeachFlow Engineering',
    diagramType: 'sql',
    previewHeader: 'SQL MASTER NOTES',
    previewPoints: [
      '1. SQL = Structured Query Language. Used to communicate with databases: Create, read, update and delete data.',
      '2. Database = Organized collection of data.',
      '3. DBMS = Software used to manage databases (MySQL, Oracle, PostgreSQL...)'
    ],
    previewSubtext: 'SQL is the language, MySQL is the software.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'SQL Fundamentals & RDBMS Core Concepts',
        sections: [
          {
            heading: '1. What is SQL & Relational Databases?',
            body: 'SQL (Structured Query Language) is the standard language for relational database management systems. RDBMS stores structured data in tables with rows and columns, enforcing ACID properties and relationships via Foreign Keys.'
          },
          {
            heading: '2. Types of SQL Commands',
            body: 'SQL commands are categorized into five sub-languages:',
            bulletPoints: [
              'DDL (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE, RENAME',
              'DML (Data Manipulation Language): INSERT, UPDATE, DELETE',
              'DQL (Data Query Language): SELECT',
              'DCL (Data Control Language): GRANT, REVOKE',
              'TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT'
            ]
          },
          {
            heading: '3. Essential Query Clauses',
            body: 'Standard execution order in SQL: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT/OFFSET.'
          }
        ]
      },
      {
        pageNumber: 2,
        title: 'Advanced Joins & Analytical Window Functions',
        sections: [
          {
            heading: 'Window Functions (DENSE_RANK, ROW_NUMBER, LAG/LEAD)',
            body: 'Window functions perform calculations across a set of table rows that are related to the current row without collapsing them into a single aggregate row.',
            codeOrDiagram: `SELECT employee_id, department, salary,\n       DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dept_salary_rank,\n       LAG(salary, 1) OVER (PARTITION BY department ORDER BY salary DESC) as prev_salary\nFROM employees;`
          }
        ]
      }
    ]
  },

  {
    id: 'top-50-backend-interview-questions',
    title: 'Top 50 Backend Interview Questions.',
    category: 'Backend',
    date: 'Jul 22, 2026',
    pages: 24,
    author: '@codewithz',
    diagramType: 'backend',
    previewHeader: 'TOP 50 BACKEND INTERVIEW QUESTIONS',
    previewPoints: [
      'Page 1 - Backend Fundamentals (Q1 - Q10)',
      '1. What is a REST API? REST is an architectural style using HTTP methods for CRUD operations.',
      'CRUD with REST: GET -> Read, POST -> Create, PUT -> Update, DELETE -> Delete'
    ],
    previewSubtext: 'REST vs SOAP: REST uses JSON/XML, lightweight, stateless over HTTP/HTTPS.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Backend Fundamentals & REST Architecture',
        sections: [
          {
            heading: '1. What is a RESTful API?',
            body: 'REST (Representational State Transfer) is an architectural style characterized by statelessness, cacheability, client-server decoupling, and a uniform interface using standard HTTP status codes and verbs (GET, POST, PUT, PATCH, DELETE).'
          },
          {
            heading: '2. Idempotency in HTTP Methods',
            body: 'An HTTP method is idempotent if executing it multiple times produces the exact same server state as executing it once.',
            bulletPoints: [
              'GET: Idempotent & Safe (read-only)',
              'PUT: Idempotent (replaces entire resource)',
              'DELETE: Idempotent (deleting already deleted returns 404/204 without side effects)',
              'POST: Non-idempotent (creates new record on each invocation)',
              'PATCH: Non-idempotent in general (applies partial diffs)'
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'top-50-system-design-interview-questions',
    title: 'Top 50 System Design Interview Questions.',
    category: 'System Design (HLD)',
    date: 'Jul 22, 2026',
    pages: 32,
    author: 'Tech System Architects',
    diagramType: 'system-design',
    previewHeader: 'Top 50 System Design Interview Questions.',
    previewPoints: [
      'Page 1 (Questions 1 - 5)',
      '1. What is Distributed System? A collection of independent computers appearing as a single system.',
      '2. Difference between Vertical (Scale Up) and Horizontal (Scale Out) Scaling.',
      '3. Load Balancing algorithms: Round Robin, Least Connections, Consistent Hashing.'
    ],
    previewSubtext: 'Examples: Google, Amazon, WhatsApp distributed architectures.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Distributed Systems & Scalability Pillars',
        sections: [
          {
            heading: '1. Vertical vs Horizontal Scaling',
            body: 'Vertical scaling upgrades CPU/RAM on a single server (hard ceiling, single point of failure). Horizontal scaling provisions multiple commodity nodes behind a load balancer with auto-scaling capabilities.'
          },
          {
            heading: '2. Consistent Hashing in Distributed Caching',
            body: 'Consistent hashing maps both servers and data keys onto a circular hash ring (0 to 2^32 - 1), ensuring that adding or removing a cache node only relocates k/N keys rather than invalidating the entire cluster.'
          }
        ]
      }
    ]
  },

  {
    id: 'nodejs-guide',
    title: 'Nodejs Guide',
    category: 'Node.js',
    date: 'Jul 22, 2026',
    pages: 16,
    author: 'Node Core Team',
    diagramType: 'nodejs',
    previewHeader: 'Node.js Handwritten Notes',
    previewPoints: [
      '1. What is Node.js? Open-source, cross-platform JS runtime outside the browser.',
      '2. Why Node.js was Created? Non-blocking I/O event-driven model handling thousands of concurrent connections on a single thread.',
      '3. Features: V8 engine, libuv event loop, streams, buffers.'
    ],
    previewSubtext: 'Where Node.js is used: Web servers, APIs, Microservices, Real-time apps (Chat, Gaming).',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Node.js Internals & Event Loop',
        sections: [
          {
            heading: 'Event Loop Phases in libuv',
            body: 'The Node.js event loop executes in 6 distinct sequential phases on every tick: Timers -> Pending Callbacks -> Idle/Prepare -> Poll (I/O) -> Check (setImmediate) -> Close Callbacks. Microtasks (process.nextTick & Promise) run between every phase.'
          }
        ]
      }
    ]
  },

  {
    id: 'reactjs-guide',
    title: 'Reactjs Guide',
    category: 'React',
    date: 'Jul 22, 2026',
    pages: 20,
    author: 'Frontend Mastery',
    diagramType: 'react',
    previewHeader: 'REACT.JS HANDBOOK',
    previewPoints: [
      '1. React Fundamentals & Project Setup',
      '1.1 What is React? Declarative component-based UI library maintained by Meta.',
      '1.2 Folder Structure (Vite): my-app/ public/ src/ components/ hooks/'
    ],
    previewSubtext: 'Virtual DOM diffing, Fiber tree, unidirectional data flow, React Hooks.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'React Architecture & Hook Rules',
        sections: [
          {
            heading: 'Fiber Architecture & Reconciliation',
            body: 'React Fiber breaks rendering into incremental work chunks, allowing high-priority user interactions to interrupt background work to maintain 60 FPS.'
          }
        ]
      }
    ]
  },

  {
    id: 'machine-learning-notes',
    title: 'Machine Learning Notes',
    category: 'Machine Learning',
    date: 'Jul 22, 2026',
    pages: 28,
    author: 'AI Research Labs',
    diagramType: 'ml',
    previewHeader: 'What is Machine Learning?',
    previewPoints: [
      'Machine Learning (ML) is a branch of AI that allows computers to learn from data and make decisions or predictions without explicit programming.',
      'Types: Supervised Learning, Unsupervised Learning, Reinforcement Learning.',
      'Linear Regression, Decision Trees, Gradient Boosting, Neural Networks.'
    ],
    previewSubtext: 'Data Preprocessing -> Feature Engineering -> Model Training -> Evaluation Metrics (Precision, Recall, F1).',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Machine Learning Foundations',
        sections: [
          {
            heading: 'Supervised vs Unsupervised Learning',
            body: 'Supervised learning trains on labeled input-output pairs (Regression & Classification). Unsupervised learning discovers latent patterns and clusters in unlabeled data (K-Means, PCA, Autoencoders).'
          }
        ]
      }
    ]
  },

  {
    id: 'computer-networks-notes',
    title: 'Computer Networks Notes',
    category: 'Computer Networks',
    date: 'Jul 22, 2026',
    pages: 22,
    author: 'Networking Specialists',
    diagramType: 'cn',
    previewHeader: 'COMPUTER NETWORKS - Page 1',
    previewPoints: [
      '1. What is Computer Network? Interconnected devices sharing resources & data.',
      '2. OSI 7-Layer Model: Physical, Data Link, Network, Transport, Session, Presentation, Application.',
      '3. TCP vs UDP: Connection-oriented reliable vs Connectionless fast datagrams.'
    ],
    previewSubtext: '3-Way Handshake: SYN -> SYN-ACK -> ACK. Subnetting, CIDR, DNS, HTTP/3 QUIC.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'OSI Model & Transport Protocols',
        sections: [
          {
            heading: 'TCP 3-Way Handshake',
            body: 'Client sends SYN; Server responds with SYN-ACK; Client acknowledges with ACK. Ensures both parties have verified transmission and reception capabilities.'
          }
        ]
      }
    ]
  },

  {
    id: 'aws-mastery-notes',
    title: 'AWS Notes',
    category: 'AWS',
    date: 'Jul 22, 2026',
    pages: 26,
    author: 'Cloud Architects',
    diagramType: 'aws',
    previewHeader: 'AWS Amazon Web Services',
    previewPoints: [
      'World\'s most popular cloud platform by Amazon.',
      'Core Services: EC2 (Compute), S3 (Object Storage), Lambda (Serverless), RDS (Managed Databases), VPC (Virtual Private Cloud).',
      'IAM (Identity & Access Management), Route 53 DNS, CloudFront CDN.'
    ],
    previewSubtext: 'High Availability, Auto-Scaling Groups, Multi-AZ & Multi-Region resilience.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'AWS Cloud Architecture',
        sections: [
          {
            heading: 'VPC & Networking Security',
            body: 'VPC provides private isolated cloud networks. Public subnets route traffic via Internet Gateway (IGW); Private subnets route outbound traffic via NAT Gateways while blocking inbound traffic.'
          }
        ]
      }
    ]
  },

  {
    id: 'kubernetes-notes',
    title: 'Kubernetes Notes',
    category: 'Kubernetes',
    date: 'Jul 22, 2026',
    pages: 20,
    author: 'DevOps Guild',
    diagramType: 'k8s',
    previewHeader: '1. Kubernetes Architecture',
    previewPoints: [
      'What is Kubernetes? Production-grade container orchestration tool.',
      'Control Plane: API Server, etcd, Kube-Scheduler, Kube-Controller-Manager.',
      'Worker Nodes: Kubelet, Kube-Proxy, Container Runtime (containerd).'
    ],
    previewSubtext: 'Pods, Deployments, Services (ClusterIP, NodePort, LoadBalancer), Ingress, HPA.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Kubernetes Cluster Architecture',
        sections: [
          {
            heading: 'Pod Lifecycle & Deployments',
            body: 'Pods are the smallest deployable compute units in Kubernetes containing one or more tightly coupled containers sharing network namespaces and storage volumes.'
          }
        ]
      }
    ]
  },

  {
    id: 'docker-notes',
    title: 'Docker & Containers Handbook',
    category: 'Docker',
    date: 'Jul 22, 2026',
    pages: 18,
    author: 'Container Specialists',
    diagramType: 'docker',
    previewHeader: 'Docker Mastery Guide',
    previewPoints: [
      'Images, Containers, Dockerfile multi-stage builds.',
      'Namespaces for isolation, Cgroups for resource allocation.',
      'Docker Compose for multi-container orchestration.'
    ],
    previewSubtext: 'Docker vs VMs: Light footprint, shared OS kernel, millisecond startup.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Docker Fundamentals & Optimization',
        sections: [
          {
            heading: 'Multi-Stage Docker Builds',
            body: 'Multi-stage builds allow compiling code in a heavy build stage (with SDKs) and copying only the compiled artifacts into a lightweight distroless/alpine runtime image, drastically reducing CVEs and image size.'
          }
        ]
      }
    ]
  },

  {
    id: 'operating-systems-notes',
    title: 'Operating Systems - Core Handwritten Notes',
    category: 'Operating Systems',
    date: 'Jul 22, 2026',
    pages: 30,
    author: 'CS Faculty',
    diagramType: 'os',
    previewHeader: 'Operating Systems Notes',
    previewPoints: [
      'Process vs Thread, Context Switching, CPU Scheduling algorithms.',
      'Deadlocks: 4 Coffman conditions, Banker\'s Algorithm.',
      'Virtual Memory, Paging, TLB, Page Faults, Thrashing.'
    ],
    previewSubtext: 'Semaphores, Mutex, Critical Section Problem, Inter-Process Communication (IPC).',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Memory Management & Process Scheduling',
        sections: [
          {
            heading: 'Paging & Address Translation',
            body: 'The MMU converts virtual addresses to physical frames using page tables and caches recent translations in the TLB (Translation Lookaside Buffer).'
          }
        ]
      }
    ]
  },

  {
    id: 'dbms-notes',
    title: 'DBMS - Complete Interview Notes',
    category: 'DBMS',
    date: 'Jul 22, 2026',
    pages: 25,
    author: 'Database Architects',
    diagramType: 'dbms',
    previewHeader: 'DBMS Complete Notes',
    previewPoints: [
      'ER Modeling, Relational Algebra, Normalization (1NF, 2NF, 3NF, BCNF).',
      'ACID properties, Transactions, Strict 2-Phase Locking (2PL).',
      'B+ Tree Indexing, Clustered vs Non-Clustered Indexes, WAL logging.'
    ],
    previewSubtext: 'Concurrency anomalies: Dirty Read, Non-repeatable Read, Phantom Read.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Relational Model & Normalization',
        sections: [
          {
            heading: 'Normalization Rules',
            body: '1NF: Atomic columns; 2NF: No partial dependency on candidate keys; 3NF: No transitive dependency; BCNF: Every determinant is a superkey.'
          }
        ]
      }
    ]
  },

  {
    id: 'javascript-deep-dive',
    title: 'JavaScript - Deep Dive Notes',
    category: 'JavaScript',
    date: 'Jul 22, 2026',
    pages: 22,
    author: 'JS Foundation',
    diagramType: 'generic',
    previewHeader: 'JavaScript Advanced Notes',
    previewPoints: [
      'Closures, Prototypal Inheritance, `this` binding rules.',
      'Event Loop, Call Stack, Microtask queue vs Macrotask queue.',
      'Promises, async/await, Generators, ESNext features.'
    ],
    previewSubtext: 'Debouncing vs Throttling, Memory Leaks, Garbage Collection in V8.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Execution Context & Scopes',
        sections: [
          {
            heading: 'Call Stack & Execution Context',
            body: 'Every JS code runs in an execution context containing Variable Environment, Lexical Environment, and `this` binding.'
          }
        ]
      }
    ]
  },

  {
    id: 'typescript-guide',
    title: 'TypeScript - Zero to Hero Guide',
    category: 'TypeScript',
    date: 'Jul 22, 2026',
    pages: 18,
    author: 'Type Enthusiasts',
    diagramType: 'generic',
    previewHeader: 'TypeScript Handbook',
    previewPoints: [
      'Generics, Interfaces vs Type aliases, Utility Types.',
      'Conditional Types, `infer` keyword, Template Literal types.',
      'Type Narrowing, Discriminated Unions, Unknown vs Any.'
    ],
    previewSubtext: 'Structural typing, declaration merging, TS compiler internals.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Type System Internals',
        sections: [
          {
            heading: 'Discriminated Unions & Generics',
            body: 'Discriminated unions provide type safety when handling polymorphic state payloads in React and Redux.'
          }
        ]
      }
    ]
  },

  {
    id: 'java-placement-guide',
    title: 'Java - Complete Placement Guide',
    category: 'Java',
    date: 'Jul 22, 2026',
    pages: 35,
    author: 'Java User Group',
    diagramType: 'java',
    previewHeader: 'Java Placement Notes',
    previewPoints: [
      'JVM Architecture (Heap, Stack, Metaspace), ClassLoaders.',
      'Garbage Collection (G1, ZGC), Multithreading, Thread Pools.',
      'Collections Framework, ConcurrentHashMap, Streams API.'
    ],
    previewSubtext: 'Java 8 to Java 21 features: Records, Pattern Matching, Virtual Threads.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'JVM Memory Model & Concurrency',
        sections: [
          {
            heading: 'Virtual Threads (Project Loom)',
            body: 'Virtual threads provide lightweight concurrency managed by JVM, allowing millions of concurrent tasks with minimal memory overhead.'
          }
        ]
      }
    ]
  },

  {
    id: 'python-revision-notes',
    title: 'Python - Interview Revision Notes',
    category: 'Python',
    date: 'Jul 22, 2026',
    pages: 20,
    author: 'Python Gurus',
    diagramType: 'python',
    previewHeader: 'Python Revision Guide',
    previewPoints: [
      'GIL, Memory Management (Reference Counting & Cyclical GC).',
      'Decorators, Generators (`yield`), List/Dict Comprehensions.',
      'OOP, Metaclasses, Asyncio event loop, Magic dunder methods.'
    ],
    previewSubtext: 'Python data structures complexity, Lambda, Map, Filter, Reduce.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Python Core Mechanics',
        sections: [
          {
            heading: 'Decorators & Closures',
            body: 'A decorator is a callable that takes another function, extends its behavior without modifying it, and returns the modified wrapper.'
          }
        ]
      }
    ]
  },

  {
    id: 'cpp-stl-notes',
    title: 'C++ & STL - Fast Revision Notes',
    category: 'C++',
    date: 'Jul 22, 2026',
    pages: 24,
    author: 'Competitive Programmers',
    diagramType: 'cpp',
    previewHeader: 'C++ STL Notes',
    previewPoints: [
      'Pointers, References, Dynamic Memory Allocation (new/delete).',
      'Smart Pointers (`unique_ptr`, `shared_ptr`, `weak_ptr`), RAII.',
      'STL Containers: vector, map (Red-Black tree), unordered_map (Hash table).'
    ],
    previewSubtext: 'Move Semantics, Rvalue references (`&&`), Lambda expressions in C++11.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'STL Complexity & Memory Layout',
        sections: [
          {
            heading: 'Smart Pointers & RAII',
            body: 'RAII binds resource lifetime to object lifetime, ensuring automatic cleanup when leaving scope.'
          }
        ]
      }
    ]
  },

  {
    id: 'git-github-notes',
    title: 'Git & GitHub - Workflow Notes',
    category: 'Git',
    date: 'Jul 22, 2026',
    pages: 14,
    author: 'DevOps Engineers',
    diagramType: 'git',
    previewHeader: 'Git Mastery Matrix',
    previewPoints: [
      'Git merge vs rebase, detached HEAD state, cherry-pick.',
      'Git reflog, interactive rebase, stash, reset vs revert.',
      'Branching workflows (Git Flow, GitHub Flow, Trunk-based development).'
    ],
    previewSubtext: 'CI/CD GitHub Actions, Merge Conflicts resolution guide.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Git Version Control Mastery',
        sections: [
          {
            heading: 'Merge vs Rebase',
            body: 'Merge preserves branch history with a merge commit; rebase creates a linear history by replaying commits on top of base branch.'
          }
        ]
      }
    ]
  },

  {
    id: 'nextjs-app-router-notes',
    title: 'Next.js - App Router & RSC Notes',
    category: 'Next.js',
    date: 'Jul 22, 2026',
    pages: 18,
    author: 'Vercel Community',
    diagramType: 'nextjs',
    previewHeader: 'Next.js 14 Handbook',
    previewPoints: [
      'React Server Components (RSC) vs Client Components ("use client").',
      'SSR, SSG, ISR, Server Actions, Middleware, Parallel routes.',
      'Next.js 4-tier caching architecture (Request memoization, Data Cache, Full Route Cache, Router Cache).'
    ],
    previewSubtext: 'Route Handlers, Image & Font optimization, SEO metadata API.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Next.js Architecture',
        sections: [
          {
            heading: 'Server Actions & Mutations',
            body: 'Server Actions allow asynchronous mutations directly from UI components without setting up REST endpoints manually.'
          }
        ]
      }
    ]
  },

  {
    id: 'spring-boot-microservices-notes',
    title: 'Spring Boot - Backend Architecture Notes',
    category: 'Spring Boot',
    date: 'Jul 22, 2026',
    pages: 26,
    author: 'Enterprise Architects',
    diagramType: 'generic',
    previewHeader: 'Spring Boot Guide',
    previewPoints: [
      'IoC Container, Dependency Injection, Spring Bean Lifecycle.',
      '@SpringBootApplication, Auto-configuration, Spring Data JPA.',
      'Microservices: Eureka Service Discovery, API Gateway, Resilience4j Circuit Breaker.'
    ],
    previewSubtext: 'Spring Security with JWT, Spring Boot Actuator health checks.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Spring Architecture & JPA',
        sections: [
          {
            heading: 'Inversion of Control & Beans',
            body: 'IoC transfers object creation and lifecycle management to the ApplicationContext container.'
          }
        ]
      }
    ]
  },

  {
    id: 'linux-command-mastery',
    title: 'Linux - Command Line Mastery Notes',
    category: 'Linux',
    date: 'Jul 22, 2026',
    pages: 16,
    author: 'SysAdmin Team',
    diagramType: 'generic',
    previewHeader: 'Linux CLI Notes',
    previewPoints: [
      'File permissions (chmod, chown), Inodes, Hard vs Soft links.',
      'Process management: top, htop, ps aux, kill -9, nice.',
      'Text processing: grep, awk, sed, find, xargs, pipes & redirection.'
    ],
    previewSubtext: 'Shell scripting automation, systemd services, networking commands (netstat, ss, curl).',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Linux System Administration',
        sections: [
          {
            heading: 'File Permissions & Inodes',
            body: 'Linux permissions follow read(4), write(2), execute(1) for User, Group, and Others.'
          }
        ]
      }
    ]
  },

  {
    id: 'cybersecurity-owasp-notes',
    title: 'Cybersecurity - OWASP Top 10 Notes',
    category: 'Security',
    date: 'Jul 22, 2026',
    pages: 20,
    author: 'AppSec Engineers',
    diagramType: 'security',
    previewHeader: 'OWASP Security Guide',
    previewPoints: [
      'SQL Injection, Cross-Site Scripting (XSS), CSRF, SSRF.',
      'Broken Access Control, Cryptographic Failures, Security Misconfiguration.',
      'HTTPS, TLS 1.3, JWT Security (signing vs encryption), Content Security Policy (CSP).'
    ],
    previewSubtext: 'Penetration testing fundamentals, rate limiting, authentication hardening.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Application Security Pillars',
        sections: [
          {
            heading: 'Cross-Site Scripting (XSS) Prevention',
            body: 'Prevent Stored and Reflected XSS by using context-aware output encoding, strict CSP headers, and sanitized HTML.'
          }
        ]
      }
    ]
  },

  {
    id: 'dsa-patterns-cheatsheet',
    title: '20 DSA Patterns - Cheat Sheet',
    category: 'DSA',
    date: 'Jul 22, 2026',
    pages: 30,
    author: 'Competitive Programmers',
    diagramType: 'generic',
    previewHeader: 'DSA Pattern Matrix',
    previewPoints: [
      'Two Pointers, Sliding Window, Fast & Slow Pointers.',
      'Binary Search, Tree BFS/DFS, Monotonic Stack, Backtracking.',
      'Dynamic Programming (0/1 Knapsack, LCS, LIS), Topological Sort.'
    ],
    previewSubtext: 'Time & Space complexity tables, common edge cases, pattern recognition guide.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Sliding Window & Two Pointers',
        sections: [
          {
            heading: 'Sliding Window Technique',
            body: 'Used to find sub-arrays or sub-strings satisfying constraints in O(N) rather than O(N^2).'
          }
        ]
      }
    ]
  },

  {
    id: 'genai-llm-system-guide',
    title: 'Generative AI & LLMs - System Guide',
    category: 'GenAI',
    date: 'Jul 22, 2026',
    pages: 24,
    author: 'AI Engineers',
    diagramType: 'generic',
    previewHeader: 'GenAI & LLM Architecture',
    previewPoints: [
      'Transformers architecture (Self-Attention, Multi-Head Attention).',
      'RAG (Retrieval-Augmented Generation), Vector Databases (Milvus, Pinecone).',
      'Prompt Engineering, Fine-Tuning (LoRA, QLoRA), Evaluation metrics.'
    ],
    previewSubtext: 'Embedding models, Semantic chunking, Hybrid search (Dense + Sparse BM25).',
    contentPages: [
      {
        pageNumber: 1,
        title: 'RAG Pipeline Architecture',
        sections: [
          {
            heading: 'Chunking & Vector Embeddings',
            body: 'Documents are chunked, embedded into high-dimensional vectors, stored in vector DBs, and retrieved via cosine similarity.'
          }
        ]
      }
    ]
  },

  {
    id: 'low-level-design-solid-notes',
    title: 'Low Level Design - SOLID & GOF Patterns',
    category: 'LLD',
    date: 'Jul 22, 2026',
    pages: 28,
    author: 'System Architects',
    diagramType: 'generic',
    previewHeader: 'LLD Design Patterns',
    previewPoints: [
      'SOLID Principles with real-world code examples.',
      'Creational: Singleton, Factory, Builder, Prototype.',
      'Structural: Adapter, Decorator, Facade, Composite.',
      'Behavioral: Observer, Strategy, Command, State.'
    ],
    previewSubtext: 'Class diagrams, UML notation, Schema design for Uber, Parking Lot, Splitwise.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'SOLID Principles & Design Patterns',
        sections: [
          {
            heading: 'Strategy Pattern Implementation',
            body: 'Defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime.'
          }
        ]
      }
    ]
  },

  {
    id: 'hr-behavioral-guide',
    title: 'HR Interview - STAR Framework Guide',
    category: 'HR Round',
    date: 'Jul 22, 2026',
    pages: 18,
    author: 'Tech Recruiters',
    diagramType: 'generic',
    previewHeader: 'HR Round Master Guide',
    previewPoints: [
      'STAR Method: Situation, Task, Action, Result.',
      'Top 25 Behavioral Questions: Conflict resolution, leadership, failure.',
      'Salary negotiation templates and questions to ask the interviewer.'
    ],
    previewSubtext: 'Amazon 16 Leadership Principles, Culture Fit criteria, Offer evaluation.',
    contentPages: [
      {
        pageNumber: 1,
        title: 'Behavioral Mastery with STAR',
        sections: [
          {
            heading: 'The STAR Framework',
            body: 'Structure behavioral answers clearly: Set the context (Situation), describe your responsibility (Task), explain the concrete steps you took (Action), and quantify the impact (Result).'
          }
        ]
      }
    ]
  }
];
