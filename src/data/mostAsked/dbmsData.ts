import { InterviewQuestion } from '../mostAskedQuestionsData';

export const dbmsQuestionsFull: InterviewQuestion[] = [
  {
    id: 1,
    question: 'What is a Database Management System (DBMS) and how does it differ from a traditional File System?',
    answer: `A DBMS is system software for creating, managing, querying, and securing structured databases.

Key Differences from File System:
1. Data Redundancy: File systems have high redundancy; DBMS minimizes redundancy via normalization.
2. Data Inconsistency: In file systems, updating one file may leave stale data in another; DBMS enforces ACID consistency.
3. Concurrency Control: File systems lock entire files or have race conditions; DBMS supports granular row/page level locking and multi-version concurrency control (MVCC).
4. Data Independence: DBMS separates physical storage from logical application queries (3-Schema Architecture).
5. Crash Recovery: DBMS uses Write-Ahead Logging (WAL) and checkpointing for automated recovery.`,
    level: 'Easy',
    category: 'Fundamentals',
    tags: ['DBMS vs File System', 'Architecture']
  },
  {
    id: 2,
    question: 'Explain ACID Properties in DBMS with real-world banking examples.',
    answer: `ACID ensures reliability in database transactions:

1. Atomicity: "All or Nothing".
• Example: Transferring $500 from Account A to Account B requires deducting from A and adding to B. If the server crashes after deducting from A, the entire transaction rolls back so money is not lost.

2. Consistency: Database moves from one valid state to another, satisfying all schema constraints.
• Example: Total money in the bank remains constant; negative account balance constraints are respected.

3. Isolation: Concurrent transactions execute independently without reading uncommitted dirty data.
• Example: Two users trying to book the last seat on a flight will not both get confirmed.

4. Durability: Once a transaction commits, its modifications are permanently recorded in non-volatile storage, surviving crashes.`,
    level: 'Easy',
    category: 'Transactions',
    tags: ['ACID', 'Transactions', 'Banking']
  },
  {
    id: 3,
    question: 'What are the different types of Database Keys (Candidate, Primary, Super, Foreign, Alternate)?',
    answer: `1. Super Key: Any set of attributes that uniquely identifies a tuple within a relation.
2. Candidate Key: A minimal Super Key (no redundant attributes). A table can have multiple candidate keys.
3. Primary Key: The single candidate key chosen by the database designer to uniquely identify tuples. Cannot contain NULL.
4. Alternate Key: Candidate keys that were not selected as the primary key.
5. Foreign Key: An attribute in a table that references the Primary Key of another table, establishing a parent-child relationship (enforces Referential Integrity).
6. Composite Key: A primary key composed of two or more attributes.`,
    level: 'Easy',
    category: 'Relational Model',
    tags: ['Keys', 'Primary Key', 'Foreign Key']
  },
  {
    id: 4,
    question: 'Explain Database Normalization: 1NF, 2NF, 3NF, BCNF, and 4NF.',
    answer: `Normalization is the systematic approach of organizing relational tables to minimize data redundancy and prevent Insertion, Update, and Deletion Anomalies.

Normal Forms:
• 1NF (First Normal Form):
  - Every column contains atomic (indivisible) values.
  - No repeating groups or arrays.

• 2NF (Second Normal Form):
  - Must be in 1NF.
  - No Partial Dependency: No non-prime attribute should depend on a proper subset of any candidate key.

• 3NF (Third Normal Form):
  - Must be in 2NF.
  - No Transitive Dependency: For any functional dependency X -> Y, either X is a super key or Y is a prime attribute.

• BCNF (Boyce-Codd Normal Form):
  - Stricter version of 3NF.
  - For every functional dependency X -> Y, X must strictly be a Super Key.

• 4NF (Fourth Normal Form):
  - Must be in BCNF and contain no non-trivial Multivalued Dependencies (MVD).`,
    level: 'Medium',
    category: 'Normalization',
    tags: ['Normalization', '1NF', '2NF', '3NF', 'BCNF']
  },
  {
    id: 5,
    question: 'What is the difference between Clustered Index and Non-Clustered Index?',
    answer: `1. Clustered Index:
• Dictates the actual physical storage order of rows in the table data file.
• A table can have ONLY ONE clustered index (usually created automatically on the Primary Key).
• Leaf nodes contain the actual data pages.
• Faster for range queries (e.g., 'WHERE age BETWEEN 20 AND 30').

2. Non-Clustered Index:
• Creates a separate index structure (B+ Tree) that contains index keys and row locators (pointers to physical data).
• A table can have multiple non-clustered indexes.
• Requires an extra lookup step (bookmark lookup / table scan) to fetch columns not present in the index leaf node.`,
    level: 'Medium',
    category: 'Indexing',
    tags: ['Clustered Index', 'Non-Clustered', 'B+ Tree']
  },
  {
    id: 6,
    question: 'How do B-Trees and B+ Trees work and why are B+ Trees preferred for database storage engines?',
    answer: `B+ Trees are self-balancing multi-way search tree data structures optimized for systems reading and writing large blocks of memory (disk pages).

Why B+ Trees are preferred over B-Trees:
1. High Fan-out & Low Height: Internal nodes store only search keys and child pointers (no data records), allowing hundreds of keys per disk block and keeping tree depth low (3-4 levels for billions of rows).
2. Linked Leaf Nodes: All leaf nodes are linked sequentially in a doubly linked list, making Range Queries (e.g., 'SELECT * WHERE id >= 100 AND id <= 500') extremely fast without tree traversal.
3. Predictable Lookup Latency: Every search travels from root to leaf, giving constant O(log N) depth.`,
    level: 'Hard',
    category: 'Storage & Indexing',
    tags: ['B+ Tree', 'B-Tree', 'Storage Engine']
  },
  {
    id: 7,
    question: 'What are SQL Joins (INNER, LEFT, RIGHT, FULL OUTER, CROSS, SELF)?',
    answer: `SQL Joins combine rows from two or more tables based on a related column:

1. INNER JOIN: Returns only rows that have matching values in both tables.
2. LEFT (OUTER) JOIN: Returns all rows from the left table and matched rows from the right table (NULL if no match).
3. RIGHT (OUTER) JOIN: Returns all rows from the right table and matched rows from the left table.
4. FULL (OUTER) JOIN: Returns all rows when there is a match in either left or right table.
5. CROSS JOIN (Cartesian Product): Returns the Cartesian product of rows (N * M rows).
6. SELF JOIN: A regular join in which a table is joined with itself (useful for hierarchical data like employee-manager relations).`,
    level: 'Easy',
    category: 'SQL Queries',
    tags: ['SQL', 'Joins', 'INNER JOIN']
  },
  {
    id: 8,
    question: 'Explain Transaction Isolation Levels and Concurrency Anomalies (Dirty Read, Non-Repeatable Read, Phantom Read).',
    answer: `Concurrency Anomalies:
• Dirty Read: Reading uncommitted data written by a concurrent transaction that later rolls back.
• Non-Repeatable Read: Reading the same row twice within a transaction yields different values because another transaction modified and committed it.
• Phantom Read: A query searching for a range of rows returns different rows because another transaction inserted/deleted rows in that range.

ANSI SQL Isolation Levels:
1. Read Uncommitted: Allows Dirty Reads, Non-Repeatable Reads, Phantom Reads.
2. Read Committed: Prevents Dirty Reads. (Default in PostgreSQL, Oracle, SQL Server).
3. Repeatable Read: Prevents Dirty Reads and Non-Repeatable Reads. (Default in MySQL InnoDB via MVCC).
4. Serializable: Prevents all anomalies by executing transactions as if they were serial.`,
    level: 'Hard',
    category: 'Transactions',
    tags: ['Isolation Levels', 'MVCC', 'Anomalies']
  },
  {
    id: 9,
    question: 'What is Two-Phase Locking (2PL), Strict 2PL, and Rigorous 2PL?',
    answer: `Two-Phase Locking (2PL) is a concurrency control protocol that guarantees serializability of schedules.

Phases:
1. Growing Phase: Transaction may acquire locks (Shared or Exclusive) but cannot release any lock.
2. Shrinking Phase: Transaction may release locks but cannot acquire new locks.
• Lock Point: The point in time when the transaction acquires its final lock.

Variants:
• Strict 2PL: All Exclusive (X) locks must be held until the transaction commits or aborts (prevents Cascading Aborts).
• Rigorous 2PL: ALL locks (both Shared and Exclusive) must be held until the transaction commits or aborts. Guarantees strict serializability.`,
    level: 'Hard',
    category: 'Concurrency Control',
    tags: ['2PL', 'Locking', 'Serializability']
  },
  {
    id: 10,
    question: 'What is Write-Ahead Logging (WAL) and Checkpointing?',
    answer: `• Write-Ahead Logging (WAL):
A durability technique where any modification to database pages in memory must be written and flushed to a non-volatile append-only log file on disk BEFORE the actual database page is written to disk.
- Guarantees Atomicity & Durability: On a sudden power outage, the DBMS replays committed logs (REDO) and rolls back uncommitted transactions (UNDO).

• Checkpointing:
Periodically, the DBMS flushes all modified dirty buffer pool pages to disk and records a checkpoint record in the log.
- Benefit: During crash recovery, the DBMS only needs to process log records after the checkpoint, drastically speeding up recovery time.`,
    level: 'Medium',
    category: 'Crash Recovery',
    tags: ['WAL', 'Checkpointing', 'ARIES']
  }
];
