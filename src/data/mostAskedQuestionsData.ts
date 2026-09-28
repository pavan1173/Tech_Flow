import { osQuestionsFull } from './mostAsked/osData';
import { dbmsQuestionsFull } from './mostAsked/dbmsData';
import { oopsQuestionsFull, cnQuestionsFull } from './mostAsked/oopsData';

export interface InterviewQuestion {
  id: number;
  question: string;
  answer: string;
  level: 'Easy' | 'Medium' | 'Hard';
  category?: string;
  tags?: string[];
}

export interface TechnologyTopic {
  slug: string;
  title: string;
  fullTitle: string;
  shortDescription: string;
  longDescription: string;
  group: 'Core Subjects' | 'Web Development' | 'Programming Languages' | 'Cloud & DevOps';
  iconType: string;
  totalQuestions: number;
  easyCount: number;
  mediumCount: number;
  hardCount: number;
  questions: InterviewQuestion[];
}

export const mostAskedQuestionsTopics: TechnologyTopic[] = [
  // ===================== CORE SUBJECTS =====================
  {
    slug: 'os-questions',
    title: 'OS Questions',
    fullTitle: 'Top 270+ Most Asked Operating Systems Interview Questions',
    shortDescription: 'Comprehensive collection of OS interview questions covering fundamentals, kernel architecture, hardware scheduling, process synchronization, semaphores, paging, and virtual memory.',
    longDescription: 'Comprehensive collection of OS interview questions covering fundamentals, kernel architecture, hardware scheduling, process synchronization, semaphores, paging, and virtual memory. Designed for technical interviews at FAANG and Tier-1 product companies.',
    group: 'Core Subjects',
    iconType: 'os',
    totalQuestions: 270,
    easyCount: 65,
    mediumCount: 135,
    hardCount: 70,
    questions: osQuestionsFull
  },
  {
    slug: 'dbms-questions',
    title: 'DBMS Questions',
    fullTitle: 'Top 210+ Most Asked DBMS Interview Questions',
    shortDescription: 'A strategic collection of frequently asked DBMS interview questions covering normalization, ACID properties, indexing, SQL queries, and distributed architectures.',
    longDescription: 'A strategic collection of frequently asked DBMS interview questions covering everything from fundamentals and normalization to concurrency control, 2PL, B+ Tree indexing, and modern NoSQL architectures.',
    group: 'Core Subjects',
    iconType: 'dbms',
    totalQuestions: 210,
    easyCount: 57,
    mediumCount: 110,
    hardCount: 43,
    questions: dbmsQuestionsFull
  },
  {
    slug: 'oops-questions',
    title: 'OOPS Questions',
    fullTitle: 'Top 150+ Most Asked OOPS Interview Questions',
    shortDescription: 'Core OOP principles, encapsulation, polymorphism, inheritance, dynamic binding, vtables, and SOLID design patterns.',
    longDescription: 'A comprehensive collection of Object-Oriented Programming questions covering core principles, encapsulation, polymorphism, inheritance, dynamic binding, vtables, and SOLID design patterns.',
    group: 'Core Subjects',
    iconType: 'oops',
    totalQuestions: 150,
    easyCount: 45,
    mediumCount: 75,
    hardCount: 30,
    questions: oopsQuestionsFull
  },
  {
    slug: 'computer-networks-questions',
    title: 'Computer Networks Questions',
    fullTitle: 'Top 100+ Most Asked Computer Networks Interview Questions',
    shortDescription: 'OSI layers, TCP/UDP, 3-way handshake, DNS, HTTP/HTTPS, SSL/TLS, congestion control, and routing protocols.',
    longDescription: 'A comprehensive collection of Computer Networking interview questions covering basics, OSI layers, TCP/UDP, 3-way handshake, DNS, HTTP/HTTPS, SSL/TLS, congestion control, and routing protocols.',
    group: 'Core Subjects',
    iconType: 'cn',
    totalQuestions: 100,
    easyCount: 30,
    mediumCount: 50,
    hardCount: 20,
    questions: cnQuestionsFull
  },

  // ===================== WEB DEVELOPMENT =====================
  {
    slug: 'javascript-questions',
    title: 'JavaScript Questions',
    fullTitle: 'Top 108+ Most Asked JavaScript Interview Questions',
    shortDescription: 'Closures, event loop, promises, prototypes, hoisting, async/await, and ES6+ modern features.',
    longDescription: 'Comprehensive collection of the most frequently asked JavaScript interview questions covering fundamentals, closures, event loop, promises, prototypes, hoisting, and ES6+ features.',
    group: 'Web Development',
    iconType: 'javascript',
    totalQuestions: 108,
    easyCount: 30,
    mediumCount: 55,
    hardCount: 23,
    questions: [
      {
        id: 1,
        question: 'What is a Closure in JavaScript and what are its practical use cases?',
        answer: 'A Closure is a function bundled together with references to its surrounding lexical scope. Even after the outer function has finished executing, inner functions retain access to outer variables. Practical use cases include data encapsulation / private variables, memoization, currying, and maintaining state in asynchronous callbacks.',
        level: 'Easy',
        category: 'Core JS',
        tags: ['Closure', 'Lexical Scope']
      },
      {
        id: 2,
        question: 'Explain the JavaScript Event Loop, Call Stack, Microtask Queue, and Macrotask Queue.',
        answer: 'JavaScript is single-threaded. Synchronous code executes on the Call Stack. Asynchronous callbacks enter queues:\n1. Microtasks (Promise callbacks, queueMicrotask, MutationObserver) have higher priority and drain completely after the current task finishes before any UI repaint.\n2. Macrotasks (setTimeout, setInterval, I/O) execute one per event loop cycle.',
        level: 'Hard',
        category: 'Async JS',
        tags: ['Event Loop', 'Microtasks', 'Promises']
      },
      {
        id: 3,
        question: 'What is the difference between `var`, `let`, and `const`?',
        answer: '• `var`: Function-scoped, can be redeclared, hoisted with initial value `undefined`.\n• `let`: Block-scoped, cannot be redeclared in same scope, hoisted into Temporal Dead Zone (TDZ).\n• `const`: Block-scoped, must be initialized at declaration, identifier cannot be reassigned.',
        level: 'Easy',
        category: 'Core JS',
        tags: ['var', 'let', 'const', 'Scope']
      },
      {
        id: 4,
        question: 'How does Prototypal Inheritance work in JavaScript vs Classical Inheritance?',
        answer: 'In JavaScript, objects have an internal `[[Prototype]]` link to another object. When accessing a property, if not found on the object itself, JS traverses up the prototype chain until it reaches `null`. ES6 classes are syntactic sugar over this prototypal mechanism.',
        level: 'Medium',
        category: 'Prototypes',
        tags: ['Prototypes', 'Inheritance']
      },
      {
        id: 5,
        question: 'Explain the `this` keyword binding rules in JavaScript.',
        answer: '`this` value is determined by how a function is called:\n1. Default Binding: Global object (window) or `undefined` in strict mode.\n2. Implicit Binding: Object left of the dot at call time (`obj.method()`).\n3. Explicit Binding: Using `call()`, `apply()`, or `bind()`.\n4. `new` Binding: Refers to the newly constructed instance.\n5. Arrow Functions: Lexical binding (inherits `this` from enclosing non-arrow scope).',
        level: 'Medium',
        category: 'Core JS',
        tags: ['this', 'Scope', 'Arrow Functions']
      }
    ]
  },
  {
    slug: 'typescript-questions',
    title: 'TypeScript Questions',
    fullTitle: 'Top 50+ Most Asked TypeScript Interview Questions',
    shortDescription: 'Type system internals, generics, conditional types, utility types, and structural typing.',
    longDescription: 'A focused collection of the most critical TypeScript interview questions covering type system internals, generics, conditional types, utility types, and structural typing.',
    group: 'Web Development',
    iconType: 'typescript',
    totalQuestions: 50,
    easyCount: 15,
    mediumCount: 25,
    hardCount: 10,
    questions: [
      {
        id: 1,
        question: 'What is the difference between `interface` and `type` alias in TypeScript?',
        answer: '1. Declaration Merging: `interface` automatically merges duplicate declarations; `type` throws an error.\n2. Unions & Primitives: `type` can define primitive aliases, unions, and tuples (`type ID = string | number`); `interface` is restricted to object and class shapes.',
        level: 'Easy',
        category: 'Type System',
        tags: ['interface', 'type']
      },
      {
        id: 2,
        question: 'What are Generic Types and Generics Constraints (`extends`) in TypeScript?',
        answer: 'Generics allow creating reusable components that work over a variety of types rather than a single one. Constraints (`<T extends Record<string, any>>`) ensure that the type parameter satisfies specific properties.',
        level: 'Medium',
        category: 'Generics',
        tags: ['Generics', 'Type Safety']
      }
    ]
  },
  {
    slug: 'react-questions',
    title: 'React.js Questions',
    fullTitle: 'Top 100+ Most Asked React.js Interview Questions',
    shortDescription: 'Hooks, state management, reconciliation, Fiber architecture, server components, and SSR.',
    longDescription: 'Comprehensive collection of the most frequently asked React JS interview questions covering fundamentals, hooks, state management, reconciliation, Fiber architecture, and SSR.',
    group: 'Web Development',
    iconType: 'react',
    totalQuestions: 100,
    easyCount: 28,
    mediumCount: 52,
    hardCount: 20,
    questions: [
      {
        id: 1,
        question: 'How does React Fiber architecture and the Virtual DOM Reconciliation work?',
        answer: 'React Fiber breaks rendering work into incremental units (fibers) with priority levels, allowing rendering to be paused, aborted, or resumed to ensure responsive user interactions (Concurrent React).',
        level: 'Hard',
        category: 'Architecture',
        tags: ['Fiber', 'Virtual DOM', 'Reconciliation']
      },
      {
        id: 2,
        question: 'Explain the difference between `useEffect`, `useLayoutEffect`, and `useMemo`.',
        answer: '• `useEffect`: Runs asynchronously AFTER browser paint (non-blocking, suitable for data fetching and subscriptions).\n• `useLayoutEffect`: Runs synchronously immediately after DOM mutations BEFORE browser paint (for reading layout and synchronous DOM measurements).\n• `useMemo`: Caches computation results across re-renders.',
        level: 'Medium',
        category: 'Hooks',
        tags: ['Hooks', 'useEffect', 'useMemo']
      }
    ]
  },
  {
    slug: 'nodejs-questions',
    title: 'Node.js Questions',
    fullTitle: 'Top 106+ Most Asked Node.js Interview Questions',
    shortDescription: 'Event-driven architecture, libuv, streams, buffer, clustering, and worker threads.',
    longDescription: 'Comprehensive collection of the most frequently asked Node.js interview questions covering fundamentals, event driven architecture, libuv, streams, buffer, clustering, and worker threads.',
    group: 'Web Development',
    iconType: 'nodejs',
    totalQuestions: 106,
    easyCount: 28,
    mediumCount: 54,
    hardCount: 24,
    questions: [
      {
        id: 1,
        question: 'What is libuv and how does Node.js handle asynchronous non-blocking I/O?',
        answer: 'Node.js pairs Google V8 with `libuv`, a multi-platform C library providing an event loop and a thread pool (default 4 threads) to handle asynchronous disk and network operations without blocking the main JavaScript thread.',
        level: 'Hard',
        category: 'Runtime Internals',
        tags: ['libuv', 'Event Loop', 'Async']
      }
    ]
  },
  {
    slug: 'nextjs-questions',
    title: 'Next.js Questions',
    fullTitle: 'Top 175+ Most Asked Next.js Interview Questions',
    shortDescription: 'App Router (RSC), SSR, SSG, ISR, Server Actions, Middleware, and caching architecture.',
    longDescription: 'Comprehensive collection of Next.js interview questions covering fundamentals, App Router (RSC), SSR, SSG, ISR, Server Actions, Middleware, and caching architecture.',
    group: 'Web Development',
    iconType: 'nextjs',
    totalQuestions: 175,
    easyCount: 45,
    mediumCount: 88,
    hardCount: 42,
    questions: [
      {
        id: 1,
        question: 'What are React Server Components (RSC) in Next.js App Router vs Client Components?',
        answer: 'React Server Components execute strictly on the server and send zero JavaScript to the browser. Client Components (\'use client\') hydrate on the client and enable state, effects, and browser event listeners.',
        level: 'Medium',
        category: 'App Router',
        tags: ['RSC', 'Server Components']
      }
    ]
  },
  {
    slug: 'git-questions',
    title: 'Git & GitHub Questions',
    fullTitle: 'Top 200+ Most Asked Git & GitHub Interview Questions',
    shortDescription: 'Version Control basics, branching strategies, git rebase vs merge, cherry-pick, and CI/CD collaboration.',
    longDescription: 'Comprehensive guide to Version Control basics, core Git commands, branching strategies, git rebase vs merge, cherry-pick, detached HEAD, and CI/CD collaboration.',
    group: 'Web Development',
    iconType: 'git',
    totalQuestions: 200,
    easyCount: 60,
    mediumCount: 100,
    hardCount: 40,
    questions: [
      {
        id: 1,
        question: 'What is the difference between `git merge` and `git rebase`?',
        answer: '`git merge` combines branches with a dedicated merge commit, preserving historical chronology. `git rebase` rewrites commit history by replaying current branch commits onto the tip of the target branch for a linear log.',
        level: 'Medium',
        category: 'Branching & Merging',
        tags: ['git merge', 'git rebase']
      }
    ]
  },
  {
    slug: 'spring-boot-questions',
    title: 'Spring Boot Questions',
    fullTitle: 'Top 225+ Most Asked Spring Boot Interview Questions',
    shortDescription: 'IoC/DI, Spring Data JPA, Microservices, Security, and Actuator configuration.',
    longDescription: 'Comprehensive Spring Boot guide covering Introduction, Architecture, Configuration, IoC/DI, Spring Data JPA, Microservices, Security, and Actuator.',
    group: 'Web Development',
    iconType: 'springboot',
    totalQuestions: 225,
    easyCount: 55,
    mediumCount: 115,
    hardCount: 55,
    questions: [
      {
        id: 1,
        question: 'What is Inversion of Control (IoC) and Dependency Injection (DI) in Spring?',
        answer: 'IoC transfers object creation and lifecycle control to the Spring IoC Container. Dependency Injection is the mechanism where the container injects dependencies into beans via Constructor, Setter, or Field injection.',
        level: 'Easy',
        category: 'Core Spring',
        tags: ['IoC', 'Dependency Injection']
      }
    ]
  },
  {
    slug: 'angular-questions',
    title: 'Angular Questions',
    fullTitle: 'Top 310+ Most Asked Angular Interview Questions',
    shortDescription: 'TypeScript integration, component lifecycle, RxJS observables, Change Detection, and standalone components.',
    longDescription: 'Deep-dive into Angular fundamentals, TypeScript integration, MVVM architecture, component lifecycle hooks, RxJS observables, Change Detection, and standalone components.',
    group: 'Web Development',
    iconType: 'angular',
    totalQuestions: 310,
    easyCount: 75,
    mediumCount: 155,
    hardCount: 80,
    questions: [
      {
        id: 1,
        question: 'How does Angular Change Detection work (Default vs OnPush)?',
        answer: 'Angular uses Zone.js to detect async events and re-evaluates bindings down the component tree. ChangeDetectionStrategy.OnPush optimizes this by checking a component only when its @Input() reference changes or an event originated inside it.',
        level: 'Hard',
        category: 'Architecture',
        tags: ['Change Detection', 'OnPush', 'Zone.js']
      }
    ]
  },

  // ===================== PROGRAMMING LANGUAGES =====================
  {
    slug: 'java-questions',
    title: 'Java Questions',
    fullTitle: 'Top 250+ Most Asked Java Interview Questions',
    shortDescription: 'JVM memory model, Garbage Collection, Multithreading, ConcurrentHashMap, Streams, and Collections.',
    longDescription: 'Core Java fundamentals, JVM internals (Heap, Stack, Metaspace), Garbage Collection algorithms (G1, ZGC), Multithreading, ConcurrentHashMap, Java Streams API, and modern Java features.',
    group: 'Programming Languages',
    iconType: 'java',
    totalQuestions: 250,
    easyCount: 65,
    mediumCount: 125,
    hardCount: 60,
    questions: [
      {
        id: 1,
        question: 'What is the difference between JDK, JRE, and JVM?',
        answer: '1. JVM (Java Virtual Machine): Executes Java bytecode.\n2. JRE (Java Runtime Environment): JVM + Core libraries to run Java apps.\n3. JDK (Java Development Kit): JRE + development tools (compiler javac, debugger).',
        level: 'Easy',
        category: 'Core Java',
        tags: ['JDK', 'JRE', 'JVM']
      }
    ]
  },
  {
    slug: 'python-questions',
    title: 'Python Questions',
    fullTitle: 'Top 230+ Most Asked Python Interview Questions',
    shortDescription: 'GIL, memory management, decorators, generators, asynchronous asyncio, and data structures.',
    longDescription: 'Comprehensive Python interview questions covering data structures, GIL, memory management, decorators, generators, asynchronous asyncio, OOP, and metaclasses.',
    group: 'Programming Languages',
    iconType: 'python',
    totalQuestions: 230,
    easyCount: 60,
    mediumCount: 115,
    hardCount: 55,
    questions: [
      {
        id: 1,
        question: 'What is the Global Interpreter Lock (GIL) in Python and why does it exist?',
        answer: 'The GIL is a mutex in CPython that prevents multiple native threads from executing Python bytecodes at the same time, maintaining thread safety for CPython\'s reference-counting garbage collector.',
        level: 'Hard',
        category: 'Python Internals',
        tags: ['GIL', 'Concurrency']
      }
    ]
  },
  {
    slug: 'cpp-questions',
    title: 'C++ Questions',
    fullTitle: 'Top 180+ Most Asked C++ Interview Questions',
    shortDescription: 'RAII, smart pointers, move semantics, virtual functions, and STL containers.',
    longDescription: 'Modern C++ interview questions covering RAII, move semantics, rvalue references, smart pointers (unique_ptr, shared_ptr), virtual functions, memory layouts, and STL complexity.',
    group: 'Programming Languages',
    iconType: 'cpp',
    totalQuestions: 180,
    easyCount: 45,
    mediumCount: 90,
    hardCount: 45,
    questions: [
      {
        id: 1,
        question: 'What are Smart Pointers in C++ (`unique_ptr`, `shared_ptr`, `weak_ptr`) and RAII?',
        answer: 'Smart Pointers manage dynamic memory using RAII:\n1. `std::unique_ptr`: Exclusive ownership.\n2. `std::shared_ptr`: Reference-counted shared ownership.\n3. `std::weak_ptr`: Non-owning observer that prevents circular references.',
        level: 'Medium',
        category: 'Memory Management',
        tags: ['Smart Pointers', 'RAII']
      }
    ]
  },
  {
    slug: 'c-questions',
    title: 'C Programming Questions',
    fullTitle: 'Top 120+ Most Asked C Programming Interview Questions',
    shortDescription: 'Pointers, memory layout, malloc/calloc/free, structs, and bitwise manipulation.',
    longDescription: 'C programming interview questions covering raw pointers, memory layout (stack, heap, data, bss, text), dynamic allocation, preprocessors, header guards, and low-level bit manipulation.',
    group: 'Programming Languages',
    iconType: 'c',
    totalQuestions: 120,
    easyCount: 35,
    mediumCount: 60,
    hardCount: 25,
    questions: [
      {
        id: 1,
        question: 'What is the difference between `malloc()`, `calloc()`, `realloc()`, and `free()` in C?',
        answer: '1. `malloc(size)`: Allocates uninitialized memory containing garbage values.\n2. `calloc(n, size)`: Allocates zero-initialized memory.\n3. `realloc(ptr, new_size)`: Resizes existing allocated block.\n4. `free(ptr)`: Deallocates heap memory.',
        level: 'Easy',
        category: 'Memory Management',
        tags: ['malloc', 'free', 'Pointers']
      }
    ]
  },
  {
    slug: 'sql-query-questions',
    title: 'SQL & Database Queries',
    fullTitle: 'Top 190+ Most Asked SQL Interview Queries & Questions',
    shortDescription: 'Advanced SQL queries, window functions (ROW_NUMBER, DENSE_RANK), joins, CTEs, and query plans.',
    longDescription: 'Curated SQL interview questions and query patterns asked by MAANG & Tier-1 tech firms covering analytical window functions, self joins, subqueries, group by aggregations, query execution plans, and performance tuning.',
    group: 'Programming Languages',
    iconType: 'sql',
    totalQuestions: 190,
    easyCount: 50,
    mediumCount: 95,
    hardCount: 45,
    questions: [
      {
        id: 1,
        question: 'How do you find the Nth highest salary in SQL using Window Functions?',
        answer: '```sql\nWITH RankedSalary AS (\n  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank\n  FROM Employee\n)\nSELECT DISTINCT salary FROM RankedSalary WHERE rank = N;\n```',
        level: 'Medium',
        category: 'SQL Queries',
        tags: ['Nth Highest Salary', 'Window Functions']
      }
    ]
  },
  {
    slug: 'golang-questions',
    title: 'Go (Golang) Questions',
    fullTitle: 'Top 110+ Most Asked Go Interview Questions',
    shortDescription: 'Goroutines, channels, interfaces, pointers, memory allocation, and concurrency patterns in Go.',
    longDescription: 'Go programming interview questions covering CSP concurrency model, goroutines, buffered vs unbuffered channels, select statements, interfaces, defer, panic, recover, and runtime scheduler.',
    group: 'Programming Languages',
    iconType: 'golang',
    totalQuestions: 110,
    easyCount: 30,
    mediumCount: 55,
    hardCount: 25,
    questions: [
      {
        id: 1,
        question: 'How do Goroutines and Channels work in Go concurrency (CSP model)?',
        answer: 'Go implements Communicating Sequential Processes (CSP). Goroutines are lightweight green threads (~2KB stack) managed by the Go runtime M:N scheduler. Channels enable type-safe lock-free communication between goroutines.',
        level: 'Medium',
        category: 'Concurrency',
        tags: ['Goroutines', 'Channels', 'CSP']
      }
    ]
  },

  // ===================== CLOUD & DEVOPS =====================
  {
    slug: 'docker-questions',
    title: 'Docker & Kubernetes Questions',
    fullTitle: 'Top 140+ Most Asked Docker & Kubernetes Interview Questions',
    shortDescription: 'Containers, Dockerfile multi-stage builds, networking, volumes, Kubernetes Pods, and Deployments.',
    longDescription: 'Complete Docker & Kubernetes interview questions covering containerization, cgroups, namespaces, image layers, multi-stage builds, Pod lifecycle, ReplicaSets, Ingress, and Helm charts.',
    group: 'Cloud & DevOps',
    iconType: 'docker',
    totalQuestions: 140,
    easyCount: 38,
    mediumCount: 72,
    hardCount: 30,
    questions: [
      {
        id: 1,
        question: 'What is the difference between a Container and a Virtual Machine (VM)?',
        answer: '1. Virtual Machine (VM): Hypervisor-based virtualization where each VM runs a full guest OS with separate kernel, high memory overhead, and slow boot times.\n2. Container: OS-level virtualization sharing the host OS kernel using Linux namespaces and cgroups for near-instant boot and minimal overhead.',
        level: 'Easy',
        category: 'Containers',
        tags: ['Docker', 'VM vs Container']
      }
    ]
  },
  {
    slug: 'aws-questions',
    title: 'AWS & Cloud Questions',
    fullTitle: 'Top 165+ Most Asked AWS Cloud Interview Questions',
    shortDescription: 'EC2, S3, Lambda, VPC, IAM, RDS, DynamoDB, API Gateway, and Well-Architected Framework.',
    longDescription: 'Comprehensive AWS and cloud architecture questions covering serverless, scalable VPC networking, IAM security policies, S3 storage tiers, auto-scaling groups, and multi-region high availability.',
    group: 'Cloud & DevOps',
    iconType: 'aws',
    totalQuestions: 165,
    easyCount: 45,
    mediumCount: 85,
    hardCount: 35,
    questions: [
      {
        id: 1,
        question: 'What is the difference between Horizontal Scaling and Vertical Scaling in Cloud?',
        answer: 'Vertical Scaling (Scale Up/Down): Adding more CPU/RAM/Disk to a single instance. Limited by hardware ceiling.\nHorizontal Scaling (Scale Out/In): Adding more instance nodes behind a Load Balancer to distribute traffic evenly with high availability.',
        level: 'Easy',
        category: 'Cloud Architecture',
        tags: ['Scaling', 'EC2', 'Load Balancer']
      }
    ]
  },
  {
    slug: 'linux-questions',
    title: 'Linux & Shell Scripting',
    fullTitle: 'Top 150+ Most Asked Linux Interview Questions',
    shortDescription: 'Linux commands, file permissions, shell scripting, process monitoring (top, ps, kill), and system administration.',
    longDescription: 'Linux system administration interview questions covering inode structure, file permissions (chmod/chown), redirection, pipes, sed/awk, systemd services, signals, and networking utilities.',
    group: 'Cloud & DevOps',
    iconType: 'linux',
    totalQuestions: 150,
    easyCount: 40,
    mediumCount: 75,
    hardCount: 35,
    questions: [
      {
        id: 1,
        question: 'What are Inodes and Hard Links vs Soft (Symbolic) Links in Linux?',
        answer: 'An Inode stores file metadata (permissions, owner, size, data block pointers). Hard Links point directly to the inode; deleting the original filename keeps data intact as long as link count > 0. Soft Links (Symlinks) store the path string to the target file.',
        level: 'Medium',
        category: 'File System',
        tags: ['Inodes', 'Hard Links', 'Symlinks']
      }
    ]
  }
];
