import { InterviewQuestion } from '../mostAskedQuestionsData';

export const oopsQuestionsFull: InterviewQuestion[] = [
  {
    id: 1,
    question: 'What are the 4 Pillars of Object-Oriented Programming (OOP)?',
    answer: `1. Encapsulation: Bundling data (state) and methods (behavior) within a single class unit and restricting direct access to internal components using access specifiers (private, protected, public).
2. Abstraction: Hiding implementation details and exposing only necessary clean interfaces to the outside world (e.g., using Abstract Classes and Interfaces).
3. Inheritance: Mechanism where a child class acquires the properties and methods of a parent class (IS-A relationship), promoting code reuse and extensibility.
4. Polymorphism: Ability of an entity (method, object) to take multiple forms (Compile-time overloading and Runtime overriding).`,
    level: 'Easy',
    category: 'Core OOPS',
    tags: ['4 Pillars', 'OOP Fundamentals']
  },
  {
    id: 2,
    question: 'What is the difference between Compile-Time Polymorphism and Run-Time Polymorphism?',
    answer: `1. Compile-Time Polymorphism (Static Binding / Early Binding):
• Resolved during compilation.
• Achieved via Method Overloading (same method name, different parameter signature) and Operator Overloading.
• Performance: Faster execution since binding occurs at compile time.

2. Run-Time Polymorphism (Dynamic Binding / Late Binding):
• Resolved at runtime based on the actual object instance type.
• Achieved via Method Overriding (subclass provides specific implementation of a parent class method).
• Mechanism: Implemented in C++/Java using Virtual Method Tables (vtable) and virtual pointers (vptr).`,
    level: 'Medium',
    category: 'Polymorphism',
    tags: ['Overloading', 'Overriding', 'vtable']
  },
  {
    id: 3,
    question: 'What is the difference between an Abstract Class and an Interface?',
    answer: `1. Abstract Class:
• Represents an abstract template for related classes (IS-A relationship).
• Can have state (instance variables) and constructors.
• Can contain both concrete (implemented) and abstract (unimplemented) methods.
• A class can inherit from only ONE abstract class (Single Inheritance).

2. Interface:
• Defines a behavioral contract that implementing classes must fulfill (CAN-DO relationship).
• Cannot have instance state (fields are typically 'public static final').
• A class can implement MULTIPLE interfaces (Multiple Inheritance of type).`,
    level: 'Easy',
    category: 'Abstraction',
    tags: ['Abstract Class', 'Interface']
  },
  {
    id: 4,
    question: 'What are SOLID Principles in Object-Oriented Software Design?',
    answer: `SOLID Principles:
• S - Single Responsibility Principle (SRP): A class should have only ONE reason to change.
• O - Open/Closed Principle (OCP): Software artifacts should be OPEN for extension, but CLOSED for modification.
• L - Liskov Substitution Principle (LSP): Objects of a superclass should be replaceable with objects of its subclasses without breaking program correctness.
• I - Interface Segregation Principle (ISP): Many client-specific interfaces are better than one general-purpose fat interface.
• D - Dependency Inversion Principle (DIP): High-level modules should depend on abstractions (interfaces), not on concrete low-level implementations.`,
    level: 'Medium',
    category: 'Design Principles',
    tags: ['SOLID', 'Design Patterns']
  },
  {
    id: 5,
    question: 'What is the Diamond Problem in Multiple Inheritance and how is it resolved?',
    answer: `The Diamond Problem arises in multiple inheritance when a class D inherits from two classes B and C, both of which inherit from a common base class A. If A has a method 'foo()' that B and C override, D faces ambiguity on which version of 'foo()' to invoke.

Resolution:
• C++: Uses Virtual Inheritance ('class B : virtual public A').
• Java / C#: Disallows multiple inheritance of classes, allowing multiple inheritance only through Interfaces (with default method conflict resolution rules).`,
    level: 'Hard',
    category: 'Inheritance',
    tags: ['Diamond Problem', 'Multiple Inheritance']
  }
];

export const cnQuestionsFull: InterviewQuestion[] = [
  {
    id: 1,
    question: 'Explain the 7 Layers of the OSI Model and their functions.',
    answer: `1. Physical Layer: Transmission of raw bit stream over electrical/optical media (Hubs, Cables).
2. Data Link Layer: Framing, physical MAC addressing, error detection/flow control (Switches, Ethernet, ARP).
3. Network Layer: Logical IP addressing, packet routing across networks (Routers, IPv4/IPv6, ICMP).
4. Transport Layer: End-to-end reliable transmission, segmentation, flow/congestion control (TCP, UDP).
5. Session Layer: Establishing, managing, and terminating communication sessions.
6. Presentation Layer: Data formatting, encryption/decryption, compression (SSL/TLS, JSON, ASCII).
7. Application Layer: High-level protocols directly interacting with user applications (HTTP, DNS, SMTP, SSH).`,
    level: 'Easy',
    category: 'OSI Model',
    tags: ['OSI Model', 'Layers']
  },
  {
    id: 2,
    question: 'What is the difference between TCP and UDP?',
    answer: `1. TCP (Transmission Control Protocol):
• Connection-Oriented: Establishes a 3-way handshake before transmitting data.
• Reliability: Guarantees delivery via sequence numbers and ACKs; retransmits lost packets.
• Flow & Congestion Control: Implements Sliding Window and AIMD congestion control.
• Use Cases: Web traffic (HTTP/HTTPS), email (SMTP), file transfer (FTP), SSH.

2. UDP (User Datagram Protocol):
• Connectionless: Sends datagrams without handshake.
• Unreliable: No delivery guarantee, no packet ordering, no ACKs.
• Speed: Minimal header overhead (8 bytes vs 20-60 bytes for TCP) and low latency.
• Use Cases: Real-time gaming, DNS lookups, video streaming, VoIP.`,
    level: 'Easy',
    category: 'Transport Layer',
    tags: ['TCP', 'UDP', 'Protocols']
  },
  {
    id: 3,
    question: 'What happens step-by-step when you type a URL into a browser and press Enter?',
    answer: `Detailed steps:
1. URL Parsing: Browser extracts protocol (HTTPS), domain name (example.com), port (443), and path.
2. DNS Resolution:
   • Checks Browser Cache -> OS Hosts Cache -> Router Cache -> Local DNS Resolver.
   • If miss, resolver queries Root Nameserver -> TLD Nameserver (.com) -> Authoritative Nameserver to get IP.
3. TCP Handshake: Browser initiates a 3-way TCP handshake (SYN -> SYN-ACK -> ACK) with server IP.
4. TLS/SSL Handshake: Browser and server negotiate TLS version, exchange certificates, verify authority, and agree on symmetric encryption session keys.
5. HTTP Request: Browser sends 'GET /' HTTP request with headers.
6. Server Processing: Web server/load balancer routes request to backend app, queries database, generates HTML/JSON response.
7. Browser Rendering: Browser parses HTML into DOM tree, CSS into CSSOM tree, executes JavaScript, computes layout, and paints pixels onto the screen.`,
    level: 'Hard',
    category: 'Application Layer',
    tags: ['DNS', 'HTTP', 'URL Lifecycle']
  }
];
