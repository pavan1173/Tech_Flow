import { InterviewQuestion } from '../mostAskedQuestionsData';

export const osQuestionsFull: InterviewQuestion[] = [
  {
    id: 1,
    question: 'What is an Operating System and what are its primary objectives?',
    answer: `An Operating System (OS) is system software that acts as an intermediary between computer hardware and user applications.

Primary Objectives:
1. Convenience: Make the computer system convenient and user-friendly to operate.
2. Efficiency: Manage hardware resources (CPU, Memory, I/O devices) efficiently.
3. Ability to Evolve: Allow effective development, testing, and introduction of new system functions without interfering with existing services.

Core Components:
• Process Management (Process creation, scheduling, termination)
• Memory Management (Allocation, deallocation, virtual memory)
• Storage/File Management (File systems, directory structures)
• I/O Subsystem Management (Buffering, caching, spooling, device drivers)
• Protection and Security (Access control, user authentication)`,
    level: 'Easy',
    category: 'OS Fundamentals',
    tags: ['OS Basics', 'Objectives']
  },
  {
    id: 2,
    question: 'What is the difference between a Process and a Program?',
    answer: `• Program: A passive entity stored on secondary storage (like an executable file on disk, e.g., 'main.exe'). It is just a set of instructions written by a developer.
• Process: An active entity representing a program in execution. It includes the program counter, stack, data segment, and heap allocated in main memory (RAM).

Key Differences:
1. Nature: Program is passive; Process is active.
2. Memory: Program resides on disk; Process is loaded into RAM.
3. Lifetime: Program exists indefinitely until deleted; Process terminates after execution completes.
4. Resources: Program requires only storage space; Process consumes CPU time, RAM, and I/O handles.`,
    level: 'Easy',
    category: 'Process Management',
    tags: ['Process', 'Program']
  },
  {
    id: 3,
    question: 'What is a Process Control Block (PCB) and what information does it contain?',
    answer: `A Process Control Block (PCB) is a kernel data structure that maintains all necessary information about a specific active process.

Information contained in a PCB:
1. Process ID (PID): Unique integer identifier for the process.
2. Process State: Current state (New, Ready, Running, Waiting, Terminated).
3. Program Counter (PC): Address of the next machine instruction to execute.
4. CPU Registers: Accumulators, index registers, stack pointers, and condition codes.
5. CPU Scheduling Info: Process priority, scheduling queue pointers.
6. Memory Management Info: Page tables, segment tables, base and limit registers.
7. Accounting Info: Amount of CPU time used, time limits, process account numbers.
8. I/O Status Info: List of allocated I/O devices and open file descriptors.`,
    level: 'Easy',
    category: 'Process Management',
    tags: ['PCB', 'Process State']
  },
  {
    id: 4,
    question: 'What is Context Switching and why is it considered computational overhead?',
    answer: `Context Switching is the mechanism of saving the current state (context) of a running process/thread into its PCB and restoring the state of another process to resume execution on the CPU.

Why it is pure overhead:
• During context switching, no productive user work is performed by the CPU.
• It involves saving/restoring CPU registers, updating page table pointers in the MMU, and invalidating hardware caches (Translation Lookaside Buffer - TLB cache flushes).
• Typical context switch latency ranges from 1 to 10 microseconds depending on memory architecture.`,
    level: 'Medium',
    category: 'Process Management',
    tags: ['Context Switch', 'TLB', 'Overhead']
  },
  {
    id: 5,
    question: 'Explain the 5-State Process Transition Model.',
    answer: `A process undergoes transitions across 5 fundamental states:
1. New: The process is newly created and being loaded into memory.
2. Ready: The process is in RAM waiting to be allocated a CPU core by the Short-Term Scheduler.
3. Running: The process instructions are actively executing on the CPU core.
4. Waiting (Blocked): The process is paused, waiting for an I/O event or signal.
5. Terminated: The process has finished execution and OS resources are released.

Transitions:
• New -> Ready: Admitted by Long-Term Scheduler.
• Ready -> Running: Dispatched by Short-Term Scheduler.
• Running -> Ready: Time quantum expiration or interrupt (Preemption).
• Running -> Waiting: I/O or event request.
• Waiting -> Ready: I/O completion or signal.
• Running -> Terminated: Exit call.`,
    level: 'Easy',
    category: 'Process Management',
    tags: ['Process Lifecycle', 'States']
  },
  {
    id: 6,
    question: 'What is the difference between User-Level Threads (ULT) and Kernel-Level Threads (KLT)?',
    answer: `1. User-Level Threads (ULT):
• Managed entirely by user-space runtime thread libraries (e.g., POSIX pthreads, green threads).
• Thread creation, destruction, and context switching occur without kernel intervention (fast).
• Drawback: If one ULT performs a blocking system call, the entire process is blocked by the kernel.

2. Kernel-Level Threads (KLT):
• Directly recognized and managed by the operating system kernel.
• Creation and context switching require a system call to the kernel (higher overhead).
• Advantage: If one KLT blocks, the kernel can schedule another thread from the same process on another CPU core.`,
    level: 'Medium',
    category: 'Threads',
    tags: ['ULT', 'KLT', 'Threads']
  },
  {
    id: 7,
    question: 'What are CPU Scheduling Criteria (Throughput, Turnaround, Waiting, Response Time)?',
    answer: `CPU Scheduling algorithms are evaluated based on 5 primary metrics:
1. CPU Utilization: Percentage of time the CPU is actively busy (target: 40% to 90%).
2. Throughput: Number of processes completed per unit of time (target: Maximize).
3. Turnaround Time (TAT): Total time from process arrival to its completion (TAT = Completion Time - Arrival Time). (target: Minimize).
4. Waiting Time (WT): Total time spent waiting in the Ready Queue (WT = Turnaround Time - Burst Time). (target: Minimize).
5. Response Time (RT): Time elapsed from process submission to the generation of its FIRST response (target: Minimize, critical for interactive/UI systems).`,
    level: 'Easy',
    category: 'CPU Scheduling',
    tags: ['Scheduling Metrics', 'Turnaround Time']
  },
  {
    id: 8,
    question: 'Explain Shortest Job First (SJF) vs Shortest Remaining Time First (SRTF).',
    answer: `• SJF (Non-Preemptive):
Selects the process with the shortest CPU burst time among ready processes. Once allocated, the process runs to completion.
- Optimal for minimizing average waiting time.
- Problem: Requires predicting future CPU burst lengths (often estimated via exponential smoothing).

• SRTF (Preemptive SJF):
If a newly arrived process has a remaining burst time shorter than the currently running process, the current process is preempted and returned to the ready queue.
- Yields lower average waiting time than SJF.
- Problem: Higher context-switching overhead and potential starvation for long processes.`,
    level: 'Medium',
    category: 'CPU Scheduling',
    tags: ['SJF', 'SRTF', 'Preemption']
  },
  {
    id: 9,
    question: 'Explain Round Robin (RR) Scheduling and the impact of Time Quantum size.',
    answer: `Round Robin is a preemptive scheduling algorithm designed for time-sharing systems.
• Each process in the ready queue is given a small slice of CPU time called a Time Quantum (typically 10 to 100 milliseconds).
• If the process does not finish within its quantum, it is preempted and appended to the tail of the Ready Queue.

Impact of Time Quantum (q):
• If q is extremely large: Round Robin degenerates into First-Come, First-Served (FCFS).
• If q is extremely small: Excessive context switches occur, drastically reducing CPU throughput.
• Rule of Thumb: 80% of CPU bursts should be shorter than the chosen time quantum.`,
    level: 'Easy',
    category: 'CPU Scheduling',
    tags: ['Round Robin', 'Time Quantum']
  },
  {
    id: 10,
    question: 'What is the Convoy Effect in FCFS scheduling?',
    answer: `The Convoy Effect is a phenomenon in First-Come, First-Served (FCFS) scheduling where a long CPU-burst process holds the CPU while numerous short I/O-bound processes wait behind it in the ready queue.

Consequences:
• Lower overall device utilization (I/O devices sit idle while the long process runs).
• Abnormally high average waiting time and turnaround time for all processes.
• Solution: Use preemptive scheduling like Round Robin or SRTF.`,
    level: 'Easy',
    category: 'CPU Scheduling',
    tags: ['Convoy Effect', 'FCFS']
  },
  {
    id: 11,
    question: 'What is a Critical Section and what are the 3 conditions for a valid solution?',
    answer: `A Critical Section is a segment of code in a concurrent program that accesses shared resources (variables, files, shared memory). Concurrent execution without synchronization causes race conditions.

3 Mandatory Conditions for a Valid Solution:
1. Mutual Exclusion: Only one process can execute in its critical section at any given time.
2. Progress: If no process is in the critical section and some wish to enter, only processes not in their remainder section can participate in deciding who enters next, and this decision cannot be delayed indefinitely.
3. Bounded Waiting: There must be a limit on the number of times other processes are allowed to enter their critical sections after a process has made a request, preventing starvation.`,
    level: 'Medium',
    category: 'Process Synchronization',
    tags: ['Critical Section', 'Mutual Exclusion', 'Race Condition']
  },
  {
    id: 12,
    question: 'What is a Semaphore and how do wait() (P) and signal() (V) operations work?',
    answer: `A Semaphore is an integer variable accessed only through two atomic, indivisible operations: wait() and signal() (historically P and V).

Operations:
• wait(S) or P(S):
  while (S <= 0); // busy wait or block
  S--;

• signal(S) or V(S):
  S++;

Types:
1. Binary Semaphore (Mutex-like): Value is 0 or 1. Used for mutual exclusion.
2. Counting Semaphore: Value can be any non-negative integer. Used to manage access to a resource pool with N identical instances.`,
    level: 'Medium',
    category: 'Process Synchronization',
    tags: ['Semaphore', 'wait', 'signal']
  },
  {
    id: 13,
    question: 'Explain the Producer-Consumer Problem and its Semaphore solution.',
    answer: `The Producer-Consumer (Bounded Buffer) problem involves two processes:
• Producer: Creates data items and places them into a shared buffer of size N.
• Consumer: Removes data items from the shared buffer to process them.

Synchronization Challenges:
• Producer must wait if the buffer is full.
• Consumer must wait if the buffer is empty.
• Mutex is required to prevent simultaneous buffer read/write corruption.

Semaphore Solution:
• mutex = 1 (Binary Semaphore for critical section)
• empty = N (Counting Semaphore tracking empty slots)
• full = 0 (Counting Semaphore tracking filled slots)

Producer:
wait(empty); wait(mutex); [insert item]; signal(mutex); signal(full);

Consumer:
wait(full); wait(mutex); [remove item]; signal(mutex); signal(empty);`,
    level: 'Hard',
    category: 'Process Synchronization',
    tags: ['Producer Consumer', 'Bounded Buffer']
  },
  {
    id: 14,
    question: 'What is a Deadlock and what are the 4 Coffman conditions?',
    answer: `A Deadlock is an operating system state where a set of processes are permanently blocked because each is holding a resource and waiting for a resource held by another process in the same set.

The 4 Coffman Conditions:
1. Mutual Exclusion: At least one resource must be non-shareable.
2. Hold and Wait: A process holds at least one resource while waiting for another.
3. No Preemption: Resources cannot be forcibly revoked from a process.
4. Circular Wait: A closed loop of processes exists where P0 waits for P1, P1 for P2, ..., and Pn for P0.`,
    level: 'Easy',
    category: 'Deadlocks',
    tags: ['Deadlock', 'Coffman Conditions']
  },
  {
    id: 15,
    question: 'How does Banker\'s Algorithm work for Deadlock Avoidance?',
    answer: `Banker's Algorithm (by Edsger Dijkstra) is a deadlock avoidance algorithm for systems with multiple instances of each resource type.

How it works:
• When a process requests resources, the OS simulates the allocation and checks if the system will remain in a "Safe State".
• Safe State: A state in which there exists at least one Safe Sequence <P1, P2, ..., Pn> such that for each Pi, its remaining needs can be satisfied by current available resources plus resources held by all prior Pj (j < i).
• If the resulting state is Safe, resources are allocated; otherwise, the request is denied or deferred.

Data Structures:
1. Available[m]: Available instances of each resource.
2. Max[n][m]: Maximum demand of each process.
3. Allocation[n][m]: Currently allocated resources.
4. Need[n][m] = Max[n][m] - Allocation[n][m].`,
    level: 'Hard',
    category: 'Deadlocks',
    tags: ['Bankers Algorithm', 'Safe State']
  },
  {
    id: 16,
    question: 'What is the difference between Internal and External Fragmentation?',
    answer: `1. Internal Fragmentation:
• Occurs when memory is allocated in fixed-size blocks (e.g., paging).
• If a process requests 10KB and is allocated a 16KB block, the leftover 6KB within the block remains unused and wasted.
• Location: Inside allocated memory partitions.

2. External Fragmentation:
• Occurs in dynamic/variable partitioning schemes when free memory is broken into many small, non-contiguous holes.
• Total free memory is large enough to satisfy a request, but cannot be used because it is not contiguous.
• Solution: Compaction or Paging.`,
    level: 'Easy',
    category: 'Memory Management',
    tags: ['Fragmentation', 'Paging']
  },
  {
    id: 17,
    question: 'How does Paging work and what is a Translation Lookaside Buffer (TLB)?',
    answer: `Paging divides logical memory into fixed blocks called Pages, and physical memory into same-sized blocks called Frames.

Address Translation:
• Logical address = (Page Number p, Offset d).
• The Page Table maps Page Number p to Frame Number f.
• Physical address = (Frame Number f * Frame Size) + Offset d.

Translation Lookaside Buffer (TLB):
• A high-speed hardware associative cache located inside the CPU / MMU.
• Stores recent (Page -> Frame) mappings.
• TLB Hit: Frame number retrieved in 1 clock cycle.
• TLB Miss: Hardware searches the page table in RAM, loads the entry into TLB, requiring additional memory access.`,
    level: 'Medium',
    category: 'Memory Management',
    tags: ['Paging', 'TLB', 'MMU']
  },
  {
    id: 18,
    question: 'What is Virtual Memory and Demand Paging?',
    answer: `Virtual Memory is a memory management technique that separates the logical address space from physical RAM, giving processes the illusion of having a continuous address space larger than physical memory.

Demand Paging:
• Pages are loaded into RAM only when they are referenced during execution (lazy loading).
• If a process references a page not in RAM (valid bit = 0), the MMU triggers a Page Fault.
• The OS handles the fault by allocating a frame, reading the page from the swap file on disk, updating the page table, and restarting the instruction.`,
    level: 'Medium',
    category: 'Virtual Memory',
    tags: ['Virtual Memory', 'Demand Paging']
  },
  {
    id: 19,
    question: 'What is Belady\'s Anomaly in Page Replacement?',
    answer: `Belady's Anomaly is a counterintuitive phenomenon in FIFO (First-In, First-Out) page replacement where increasing the number of physical memory frames results in MORE page faults for certain page reference strings.

Why it happens:
• FIFO does not satisfy the "Stack Property" (the set of pages in memory for n frames is not necessarily a subset of pages for n+1 frames).
• Stack-based algorithms like LRU (Least Recently Used) and Optimal are mathematically immune to Belady\'s Anomaly.`,
    level: 'Medium',
    category: 'Virtual Memory',
    tags: ['Beladys Anomaly', 'FIFO', 'LRU']
  },
  {
    id: 20,
    question: 'What is Thrashing and how does the Working Set Model prevent it?',
    answer: `Thrashing occurs when the operating system spends more time swapping pages in and out of disk than executing instructions.

Cause:
• The sum of the working sets (active pages) of all running processes exceeds the total physical memory available.

Working Set Model:
• Defines the working set W(p, Δ) as the set of unique pages referenced by process p in the last Δ time units.
• If Total Demand D = Σ |W(p, Δ)| > Total Memory Frames: Thrashing is imminent.
• Prevention: The OS suspends (swaps out) one or more entire processes to free memory for the remaining ones.`,
    level: 'Hard',
    category: 'Virtual Memory',
    tags: ['Thrashing', 'Working Set']
  }
];
