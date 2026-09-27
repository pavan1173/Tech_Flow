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
    slug: 'dbms-questions',
    title: 'DBMS Questions',
    fullTitle: 'Top 200+ Most Asked DBMS Interview Questions',
    shortDescription: 'A strategic collection of frequently asked DBMS interview questions covering everything from...',
    longDescription: 'A strategic collection of frequently asked DBMS interview questions covering everything from fundamentals and normalization to concurrency control and modern NoSQL architectures. Designed for technical interview mastery.',
    group: 'Core Subjects',
    iconType: 'dbms',
    totalQuestions: 210,
    easyCount: 57,
    mediumCount: 110,
    hardCount: 43,
    questions: [
      {
        id: 1,
        question: 'What is a Database?',
        answer: 'A database is an organized collection of structured information, or data, typically stored electronically in a computer system. Databases are designed to provide an efficient way to store, retrieve, and manage data, ensuring consistency and integrity throughout its lifecycle on physical storage media.',
        level: 'Easy',
        category: 'Fundamentals',
        tags: ['Database', 'Basics']
      },
      {
        id: 2,
        question: 'What is a Database Management System (DBMS)?',
        answer: 'A Database Management System (DBMS) is specialized system software that serves as an interface between the database, its end-users, and application programs. It allows users to define, create, maintain, and control access to the database while enforcing data security, concurrency, and integrity rules.',
        level: 'Easy',
        category: 'Fundamentals',
        tags: ['DBMS', 'Software']
      },
      {
        id: 3,
        question: 'What are the main advantages of using a DBMS over a traditional File System?',
        answer: 'Key advantages of a DBMS include:\n1. Reduction of Data Redundancy and Inconsistency through centralized storage.\n2. Data Independence: Separating physical storage from logical application code.\n3. Robust Concurrency Control allowing multiple users to read/write simultaneously.\n4. ACID Transaction Support guaranteeing atomic, isolated execution.\n5. Automated Backup, Crash Recovery, and Granular Security Access Controls.',
        level: 'Easy',
        category: 'Fundamentals',
        tags: ['Advantages', 'File System']
      },
      {
        id: 4,
        question: 'Why do we need DBMS?',
        answer: 'We need DBMS to eliminate data redundancy, prevent data inconsistencies, support complex multi-table queries efficiently, provide crash-resilient transactional guarantees, and enforce strict role-based authorization to protect sensitive organizational data.',
        level: 'Easy',
        category: 'Fundamentals',
        tags: ['Need for DBMS']
      },
      {
        id: 5,
        question: 'What is the difference between DBMS and File System?',
        answer: '1. Structure: File systems store raw unstructured files in directories; DBMS stores structured records with schema constraints.\n2. Redundancy: File systems contain duplicate data across files; DBMS minimizes redundancy via normalization.\n3. Concurrency: File systems lock entire files or provide basic multi-access; DBMS provides row-level and table-level locking.\n4. Integrity & ACID: File systems have no native transaction or constraint enforcement; DBMS strictly implements ACID properties and foreign keys.\n5. Query Capability: File systems require manual code parsing; DBMS provides expressive declarative SQL querying with cost-based optimizers.',
        level: 'Medium',
        category: 'Architecture',
        tags: ['DBMS vs File System']
      },
      {
        id: 6,
        question: 'What are the different types of DBMS architectures?',
        answer: 'The primary DBMS architectures include:\n1. Hierarchical DBMS: Data stored in a tree-like parent-child structure.\n2. Network DBMS: Graph-like structure where child records can have multiple parent records.\n3. Relational DBMS (RDBMS): Data organized in two-dimensional tables (relations) with rows and columns (e.g., PostgreSQL, MySQL).\n4. Object-Oriented DBMS (OODBMS): Stores data as objects conforming to OOP paradigms.\n5. NoSQL / Distributed DBMS: Key-Value, Document, Column-Family, and Graph databases optimized for horizontal scaling (e.g., MongoDB, Cassandra, Neo4j).',
        level: 'Easy',
        category: 'Architecture',
        tags: ['Types of DBMS']
      },
      {
        id: 7,
        question: 'What is a database instance and database schema?',
        answer: '1. Database Schema: The overall logical blueprint, structure, and design of the database (e.g., table definitions, data types, constraints). It remains relatively static over time.\n2. Database Instance: The collection of data stored in the database at a specific snapshot in time. It changes dynamically as records are inserted, updated, or deleted.',
        level: 'Medium',
        category: 'Architecture',
        tags: ['Schema', 'Instance']
      }
    ]
  },

  {
    slug: 'os-questions',
    title: 'OS Questions',
    fullTitle: 'Top 270+ Most Asked Operating Systems Interview Questions',
    shortDescription: 'Comprehensive collection of OS interview questions covering fundamentals, kernel architecture, hardware...',
    longDescription: 'Comprehensive collection of OS interview questions covering fundamentals, kernel architecture, hardware scheduling, process synchronization, semaphores, paging, and virtual memory.',
    group: 'Core Subjects',
    iconType: 'os',
    totalQuestions: 270,
    easyCount: 65,
    mediumCount: 135,
    hardCount: 70,
    questions: [
      {
        id: 1,
        question: 'What is an Operating System and what are its primary roles?',
        answer: 'An Operating System (OS) is core system software that acts as an intermediary between computer hardware and user applications. Its primary roles include Process Management, Memory Management, File System Management, Device/IO Management, Security/Access Control, and Hardware Abstraction.',
        level: 'Easy',
        category: 'OS Basics',
        tags: ['OS Basics', 'Kernel']
      },
      {
        id: 2,
        question: 'What is the difference between a Process and a Thread?',
        answer: '1. Process: An executing program with its own dedicated memory address space (text, data, heap, stack), file descriptors, and OS overhead.\n2. Thread: A lightweight unit of execution within a process that shares the parent process address space, heap, and open files, but has its own Program Counter (PC), registers, and stack.\n3. Overhead: Thread context switching is significantly faster and requires less memory overhead than process context switching.',
        level: 'Easy',
        category: 'Processes & Threads',
        tags: ['Process', 'Thread', 'Concurrency']
      }
    ]
  },

  {
    slug: 'oops-questions',
    title: 'OOPS Questions',
    fullTitle: 'Top 150+ Most Asked OOPS Interview Questions',
    shortDescription: 'A comprehensive collection of Object-Oriented Programming questions covering core principles,...',
    longDescription: 'A comprehensive collection of Object-Oriented Programming questions covering core principles, encapsulation, polymorphism, inheritance, dynamic binding, vtables, and SOLID design patterns.',
    group: 'Core Subjects',
    iconType: 'oops',
    totalQuestions: 150,
    easyCount: 45,
    mediumCount: 75,
    hardCount: 30,
    questions: [
      {
        id: 1,
        question: 'What are the 4 Pillars of Object-Oriented Programming (OOP)?',
        answer: 'The 4 fundamental pillars are:\n1. Encapsulation: Bundling data (state) and methods (behavior) together while restricting direct access to internal state using access modifiers (getters/setters).\n2. Abstraction: Hiding internal implementation complexities and exposing only essential interfaces to users.\n3. Inheritance: Reusing and extending existing class behaviors (parent/child hierarchies).\n4. Polymorphism: The ability for a message or method call to be processed in different forms (Compile-time via overloading, Runtime via overriding).',
        level: 'Easy',
        category: 'Core Concepts',
        tags: ['4 Pillars', 'Encapsulation', 'Polymorphism']
      }
    ]
  },

  {
    slug: 'computer-networks-questions',
    title: 'Computer Networks Questions',
    fullTitle: 'Top 100+ Most Asked Computer Networks Interview Questions',
    shortDescription: 'A comprehensive collection of Computer Networking interview questions covering basics, OSI layers,...',
    longDescription: 'A comprehensive collection of Computer Networking interview questions covering basics, OSI layers, TCP/UDP, 3-way handshake, DNS, HTTP/HTTPS, SSL/TLS, congestion control, and routing protocols.',
    group: 'Core Subjects',
    iconType: 'cn',
    totalQuestions: 100,
    easyCount: 30,
    mediumCount: 50,
    hardCount: 20,
    questions: [
      {
        id: 1,
        question: 'What is the 7-Layer OSI Model vs 4-Layer TCP/IP Model?',
        answer: 'The OSI Model is a conceptual 7-layer framework:\n1. Physical (bits, cables, NIC)\n2. Data Link (frames, MAC addresses, Ethernet switches)\n3. Network (packets, IP addresses, Routers)\n4. Transport (segments, TCP/UDP, ports, reliability)\n5. Session (session establishment & tokens)\n6. Presentation (encryption, compression, SSL/TLS, ASCII)\n7. Application (HTTP, DNS, FTP, SMTP)\n- TCP/IP combines Session, Presentation, and Application into a single Application Layer, and Physical/Data Link into Network Access.',
        level: 'Easy',
        category: 'Protocols & Models',
        tags: ['OSI Model', 'TCP/IP']
      }
    ]
  },

  // ===================== WEB DEVELOPMENT =====================
  {
    slug: 'javascript-questions',
    title: 'JavaScript Questions',
    fullTitle: 'Top 100+ Most Asked JavaScript Interview Questions',
    shortDescription: 'Comprehensive collection of the most frequently asked JavaScript interview questions covering fundamentals,...',
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
        question: 'What is Closure in JavaScript and what are its practical use cases?',
        answer: 'A Closure is a function bundled together with references to its surrounding lexical environment. A closure gives an inner function access to its outer function’s scope even after the outer function has finished executing.',
        level: 'Easy',
        category: 'Core JS',
        tags: ['Closure', 'Lexical Scope']
      }
    ]
  },

  {
    slug: 'typescript-questions',
    title: 'TypeScript Questions',
    fullTitle: 'Top 50+ Most Asked TypeScript Interview Questions',
    shortDescription: 'A focused collection of the most critical TypeScript interview questions covering type system internals,...',
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
        answer: '1. Declaration Merging: `interface` supports automatic merging if declared multiple times; `type` does not and throws an error.\n2. Primitives & Unions: `type` can define union types, tuple types, and mapped types; `interface` can only define object shapes.',
        level: 'Easy',
        category: 'Type System',
        tags: ['interface', 'type']
      }
    ]
  },

  {
    slug: 'react-questions',
    title: 'React.js Questions',
    fullTitle: 'Top 100+ Most Asked React.js Interview Questions',
    shortDescription: 'Comprehensive collection of the most frequently asked React JS interview questions covering fundamentals,...',
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
        answer: 'React Fiber is a complete rewrite of React’s reconciliation engine introduced to enable Incremental Rendering.',
        level: 'Hard',
        category: 'Architecture',
        tags: ['React Fiber', 'Virtual DOM']
      }
    ]
  },

  {
    slug: 'nodejs-questions',
    title: 'Node.js Questions',
    fullTitle: 'Top 100+ Most Asked Node.js Interview Questions',
    shortDescription: 'Comprehensive collection of the most frequently asked Node.js interview questions covering fundamentals,...',
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
        answer: 'Node.js utilizes the Google V8 engine for JavaScript execution and `libuv` (a C library) for the Event Loop and asynchronous I/O.',
        level: 'Hard',
        category: 'Runtime Internals',
        tags: ['libuv', 'Event Loop']
      }
    ]
  },

  {
    slug: 'nextjs-questions',
    title: 'Next.js Questions',
    fullTitle: 'Top 170+ Most Asked Next.js Interview Questions',
    shortDescription: 'Comprehensive collection of Next.js interview questions covering fundamentals, the App Router, rendering...',
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
        answer: 'React Server Components render exclusively on the server with zero client JavaScript payload.',
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
    shortDescription: 'Comprehensive guide to Version Control basics, core Git commands, branching strategies, and remote...',
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
        answer: '`git merge` creates a merge commit preserving historical branches; `git rebase` creates a clean linear history by replaying commits.',
        level: 'Medium',
        category: 'Branching & Merging',
        tags: ['git merge', 'git rebase']
      }
    ]
  },

  {
    slug: 'spring-boot-questions',
    title: 'Spring Boot Questions',
    fullTitle: 'Top 220+ Most Asked Spring Boot Interview Questions',
    shortDescription: 'Comprehensive Spring Boot guide covering Introduction, Architecture, Configuration, and IoC/DI....',
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
        answer: 'Inversion of Control transfers bean creation and lifecycle management to the Spring Container.',
        level: 'Easy',
        category: 'Core Spring',
        tags: ['IoC', 'Dependency Injection']
      }
    ]
  },

  {
    slug: 'angular-questions',
    title: 'Angular Questions',
    fullTitle: 'Top 300+ Most Asked Angular Interview Questions',
    shortDescription: 'Deep-dive into Angular fundamentals, TypeScript integration, MVVM architecture, and component-...',
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
        answer: 'Angular uses Zone.js to track events and compare data bindings across the component tree.',
        level: 'Hard',
        category: 'Architecture',
        tags: ['Change Detection', 'OnPush']
      }
    ]
  },

  // ===================== PROGRAMMING LANGUAGES =====================
  {
    slug: 'java-questions',
    title: 'Java Questions',
    fullTitle: 'Top 250+ Most Asked Java Interview Questions',
    shortDescription: 'Core Java fundamentals, JVM memory model, Garbage Collection, Multithreading, Streams, and Collections...',
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
        answer: '1. JVM (Java Virtual Machine): The runtime engine that executes compiled Java bytecode (.class files).\n2. JRE (Java Runtime Environment): JVM + Core Class Libraries required to run Java programs.\n3. JDK (Java Development Kit): JRE + Development tools (javac compiler, debugger, javadoc, jar tools).',
        level: 'Easy',
        category: 'Core Java',
        tags: ['JDK', 'JRE', 'JVM']
      },
      {
        id: 2,
        question: 'How does Java Garbage Collection work and what are the generations in the Heap?',
        answer: 'The Java Heap is divided into Young Generation (Eden space, Survivor spaces S0/S1) and Old (Tenured) Generation. Minor GC collects short-lived objects in Eden; objects that survive multiple GC cycles are promoted to Old Generation. Major/Full GC cleans Old Generation using algorithms like G1 GC or ZGC.',
        level: 'Hard',
        category: 'JVM Memory',
        tags: ['Garbage Collection', 'JVM Heap']
      },
      {
        id: 3,
        question: 'What is the difference between `HashMap` and `ConcurrentHashMap` in Java?',
        answer: '`HashMap` is non-synchronized and not thread-safe. `ConcurrentHashMap` provides high concurrency without locking the whole map by using fine-grained bucket-level synchronization (CAS and synchronized nodes in Java 8+) and concurrent lock-free reads.',
        level: 'Medium',
        category: 'Collections',
        tags: ['HashMap', 'ConcurrentHashMap', 'Multithreading']
      }
    ]
  },

  {
    slug: 'python-questions',
    title: 'Python Questions',
    fullTitle: 'Top 230+ Most Asked Python Interview Questions',
    shortDescription: 'Python fundamentals, GIL (Global Interpreter Lock), decorators, generators, list comprehensions, and memory...',
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
        question: 'What is the Global Interpreter Lock (GIL) in CPython and why does it exist?',
        answer: 'The GIL is a mutex that prevents multiple native threads from executing Python bytecodes simultaneously in CPython. It was designed to ensure thread safety for CPython’s reference-counting memory management without performance penalties for single-threaded programs.',
        level: 'Hard',
        category: 'Python Internals',
        tags: ['GIL', 'Concurrency', 'Threads']
      },
      {
        id: 2,
        question: 'What is the difference between Generators and Iterators in Python?',
        answer: 'An Iterator is an object implementing the `__iter__()` and `__next__()` protocols. A Generator is a special concise function that uses the `yield` keyword to return an iterator, pausing execution state and producing items lazily on demand with O(1) memory.',
        level: 'Medium',
        category: 'Iterators & Generators',
        tags: ['Generators', 'Iterators', 'yield']
      },
      {
        id: 3,
        question: 'What is a Decorator in Python and how do you write a custom one?',
        answer: 'A Decorator is a higher-order function that takes another function as an argument, extends or modifies its behavior without modifying its source code, and returns the decorated callable.',
        level: 'Easy',
        category: 'Functions & Closures',
        tags: ['Decorators', 'Higher-Order Functions']
      }
    ]
  },

  {
    slug: 'cpp-questions',
    title: 'C++ Questions',
    fullTitle: 'Top 180+ Most Asked C++ Interview Questions',
    shortDescription: 'Modern C++ (C++11/14/17/20), pointers, memory allocation, smart pointers, RAII, STL containers, and templates...',
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
        answer: 'Smart Pointers implement RAII (Resource Acquisition Is Initialization) to prevent memory leaks:\n1. `std::unique_ptr`: Exclusive ownership of dynamic resource; cannot be copied, only moved.\n2. `std::shared_ptr`: Shared reference-counted ownership.\n3. `std::weak_ptr`: Non-owning observer preventing circular reference memory leaks in `shared_ptr`.',
        level: 'Medium',
        category: 'Memory Management',
        tags: ['Smart Pointers', 'RAII', 'Memory']
      },
      {
        id: 2,
        question: 'What is Move Semantics and Rvalue References (`&&`) in C++11?',
        answer: 'Move semantics allows transferring ownership of expensive resources (like dynamic arrays in `std::vector` or `std::string`) from temporary objects (rvalues) directly to new objects without deep memory allocation and copying, via `std::move`.',
        level: 'Hard',
        category: 'Modern C++',
        tags: ['Move Semantics', 'Rvalue', 'std::move']
      }
    ]
  },

  {
    slug: 'c-questions',
    title: 'C Programming Questions',
    fullTitle: 'Top 120+ Most Asked C Programming Interview Questions',
    shortDescription: 'Pointers, pointer arithmetic, memory management (malloc, calloc, realloc, free), structs, and bitwise...',
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
        answer: '1. `malloc(size)`: Allocates uninitialized memory containing garbage values.\n2. `calloc(num, size)`: Allocates contiguous memory and initializes all bytes to zero.\n3. `realloc(ptr, new_size)`: Resizes previously allocated dynamic memory block.\n4. `free(ptr)`: Releases allocated heap memory back to the OS.',
        level: 'Easy',
        category: 'Memory Management',
        tags: ['malloc', 'calloc', 'free', 'Pointers']
      }
    ]
  },

  {
    slug: 'sql-query-questions',
    title: 'SQL & Database Queries',
    fullTitle: 'Top 190+ Most Asked SQL Interview Queries & Questions',
    shortDescription: 'Advanced SQL queries, window functions (ROW_NUMBER, DENSE_RANK), joins, CTEs, indexing, and query plans...',
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
        question: 'How do you find the Nth highest salary in SQL without and with Window Functions?',
        answer: 'Using DENSE_RANK():\n```sql\nWITH RankedSalary AS (\n  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank\n  FROM Employee\n)\nSELECT DISTINCT salary FROM RankedSalary WHERE rank = N;\n```\nUsing Subquery:\n```sql\nSELECT DISTINCT salary FROM Employee E1\nWHERE N-1 = (SELECT COUNT(DISTINCT salary) FROM Employee E2 WHERE E2.salary > E1.salary);\n```',
        level: 'Medium',
        category: 'SQL Queries',
        tags: ['Nth Highest Salary', 'Window Functions', 'DENSE_RANK']
      }
    ]
  },

  {
    slug: 'golang-questions',
    title: 'Go (Golang) Questions',
    fullTitle: 'Top 110+ Most Asked Go Interview Questions',
    shortDescription: 'Goroutines, channels, interfaces, pointers, memory allocation, garbage collector, and concurrency patterns in Go...',
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
        answer: 'Go implements Communicating Sequential Processes (CSP). Goroutines are lightweight green threads multiplexed onto OS threads by the Go runtime scheduler (costing ~2KB stack). Channels provide type-safe message passing between goroutines without shared-memory locks.',
        level: 'Medium',
        category: 'Concurrency',
        tags: ['Goroutines', 'Channels', 'Concurrency']
      }
    ]
  },

  // ===================== CLOUD & DEVOPS =====================
  {
    slug: 'docker-questions',
    title: 'Docker & Kubernetes Questions',
    fullTitle: 'Top 140+ Most Asked Docker & Kubernetes Interview Questions',
    shortDescription: 'Containers, Dockerfile multi-stage builds, networking, volumes, Kubernetes Pods, Deployments, and Services...',
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
        answer: '1. Virtual Machine (VM): Hypervisor virtualization where each VM runs a full guest OS with dedicated kernel, high memory overhead, and slow boot times.\n2. Container: OS-level virtualization sharing the host OS kernel using Linux namespaces (isolation) and cgroups (resource limits), resulting in lightweight, instant startup and minimal overhead.',
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
    shortDescription: 'EC2, S3, Lambda, VPC, IAM, RDS, DynamoDB, API Gateway, CloudFront, and Well-Architected Framework...',
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
        answer: 'Vertical Scaling (Scaling Up/Down): Adding more CPU, RAM, or Disk to an existing single instance (e.g., resizing EC2 instance). Limited by hardware ceiling.\nHorizontal Scaling (Scaling Out/In): Adding more instance nodes behind a Load Balancer to distribute traffic evenly across multiple machines with zero downtime.',
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
    shortDescription: 'Linux commands, file permissions, shell scripting, process monitoring (top, ps, kill), and system administration...',
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
        answer: 'An Inode is a data structure storing file metadata (permissions, owner, size, disk block pointers) excluding filename.\n- Hard Link: Points directly to the file’s inode number. Deleting the original filename does not delete data as long as hard link count > 0.\n- Soft Link (Symlink): A special file containing the path string to another file. If the target is moved/deleted, the symlink breaks.',
        level: 'Medium',
        category: 'Linux File System',
        tags: ['Inodes', 'Symlinks', 'Hard Links']
      }
    ]
  }
];
