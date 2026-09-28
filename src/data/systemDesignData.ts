import { VideoLecture } from './coreSubjectsData';

export interface SystemDesignPlaylist {
  slug: string;
  title: string;
  instructor: string;
  channel: string;
  type: 'HLD' | 'LLD';
  subjectTitle: string;
  totalVideos: number;
  totalDuration: string;
  rating: number;
  badge: string;
  description: string;
  playlistUrl: string;
  notesUrl?: string;
  thumbnailType: 'gaurav-sen' | 'exponent' | 'hello-interview' | 'code-aryan' | 'coder-army' | 'engineering-digest';
  lectures: VideoLecture[];
}

export const systemDesignPlaylistsList: SystemDesignPlaylist[] = [
  {
    slug: 'gaurav-sen-hld',
    title: 'Gaurav Sen HLD System Design Interview Preparation',
    instructor: 'Gaurav Sen',
    channel: 'Gaurav Sen',
    type: 'HLD',
    subjectTitle: 'High Level Design (HLD)',
    totalVideos: 32,
    totalDuration: '18 hrs 45 mins',
    rating: 4.9,
    badge: 'Industry Standard',
    description: 'Master High-Level System Design (HLD) concepts from Gaurav Sen. Covers Microservices, Distributed Caching (Redis/Memcached), Message Queues (Kafka/RabbitMQ), Load Balancing, Database Sharding, Consistent Hashing, and real-world architectures (Netflix, WhatsApp, Uber).',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLMC9HnM-UAKMh_Fh_pGg9pL1_aO397_F7',
    notesUrl: 'https://drive.google.com',
    thumbnailType: 'gaurav-sen',
    lectures: [
      {
        id: 1,
        title: 'System Design Basics: Horizontal vs Vertical Scaling & Load Balancing',
        duration: '22:15',
        youtubeId: 'K0Ta65OqQkY',
        videoUrl: 'https://www.youtube.com/watch?v=K0Ta65OqQkY',
        tags: ['Scalability', 'Load Balancer', 'Reverse Proxy']
      },
      {
        id: 2,
        title: 'Consistent Hashing Explained with Distributed Cache Implementation',
        duration: '28:40',
        youtubeId: 'zaRkONvyGr8',
        videoUrl: 'https://www.youtube.com/watch?v=zaRkONvyGr8',
        tags: ['Consistent Hashing', 'Distributed Systems']
      },
      {
        id: 3,
        title: 'Message Queues Explained: Kafka vs RabbitMQ in Microservices',
        duration: '34:10',
        youtubeId: 'oUJbuFMyBDk',
        videoUrl: 'https://www.youtube.com/watch?v=oUJbuFMyBDk',
        tags: ['Message Queues', 'Kafka', 'RabbitMQ']
      },
      {
        id: 4,
        title: 'Database Sharding & Replication Architecture',
        duration: '29:50',
        youtubeId: '5faOjSkAmP8',
        videoUrl: 'https://www.youtube.com/watch?v=5faOjSkAmP8',
        tags: ['Sharding', 'Replication', 'Database']
      },
      {
        id: 5,
        title: 'Designing WhatsApp / Real-time Messaging System',
        duration: '45:30',
        youtubeId: 'vvhC64hQZMk',
        videoUrl: 'https://www.youtube.com/watch?v=vvhC64hQZMk',
        tags: ['WhatsApp Design', 'WebSockets', 'XMPP']
      }
    ]
  },
  {
    slug: 'exponent-hld',
    title: 'Exponent HLD System Design Interview Preparation',
    instructor: 'Exponent',
    channel: 'Exponent',
    type: 'HLD',
    subjectTitle: 'High Level Design (HLD)',
    totalVideos: 28,
    totalDuration: '16 hrs 20 mins',
    rating: 4.9,
    badge: 'FAANG Favorite',
    description: 'Real mock interview walkthroughs by Exponent featuring ex-FAANG engineers breaking down complex distributed systems problems: Twitter Feed, Uber Dispatch, TinyURL, and Global CDN architectures.',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLrtCHHead3Ho7rT0gVv_41k0Wn2p5HlSg',
    thumbnailType: 'exponent',
    lectures: [
      {
        id: 1,
        title: 'System Design Mock Interview: Design Twitter / X Newsfeed Architecture',
        duration: '42:10',
        youtubeId: 'KmAyPUv9pn8',
        videoUrl: 'https://www.youtube.com/watch?v=KmAyPUv9pn8',
        tags: ['Twitter Design', 'Fanout on Write', 'Redis']
      },
      {
        id: 2,
        title: 'System Design Mock Interview: Design Uber / Ride Sharing System',
        duration: '46:25',
        youtubeId: 'lsKU38RKQSo',
        videoUrl: 'https://www.youtube.com/watch?v=lsKU38RKQSo',
        tags: ['Uber Design', 'Geo Hashing', 'QuadTrees']
      },
      {
        id: 3,
        title: 'System Design Interview: Design TinyURL / Bitly URL Shortener',
        duration: '35:15',
        youtubeId: 'fMZMm_0ZhK4',
        videoUrl: 'https://www.youtube.com/watch?v=fMZMm_0ZhK4',
        tags: ['TinyURL', 'Base62', 'KGS']
      }
    ]
  },
  {
    slug: 'hello-interview-hld',
    title: 'System Design Walkthroughs & Deep Dives HLD System Design Interview Preparation',
    instructor: 'Hello Interview',
    channel: 'Hello Interview',
    type: 'HLD',
    subjectTitle: 'High Level Design (HLD)',
    totalVideos: 24,
    totalDuration: '15 hrs 10 mins',
    rating: 4.9,
    badge: 'Comprehensive',
    description: 'Deep dives into modern system design frameworks, trade-off evaluations (CAP theorem, latency vs throughput), rate limiters, web crawlers, and payment systems.',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLkQdcYnN8q7Q4s4N9c6j2y9x9b9a9c9e',
    thumbnailType: 'hello-interview',
    lectures: [
      {
        id: 1,
        title: 'How to Ace the System Design Interview: Step-by-Step 45-Min Framework',
        duration: '38:45',
        youtubeId: 'i7twT3x5yv8',
        videoUrl: 'https://www.youtube.com/watch?v=i7twT3x5yv8',
        tags: ['Framework', 'Interview Strategy']
      },
      {
        id: 2,
        title: 'Design an API Rate Limiter (Token Bucket vs Leaky Bucket vs Sliding Window)',
        duration: '40:15',
        youtubeId: 'FU4Wisl4544',
        videoUrl: 'https://www.youtube.com/watch?v=FU4Wisl4544',
        tags: ['Rate Limiter', 'Redis', 'Sliding Window']
      }
    ]
  },
  {
    slug: 'code-with-aryan-lld',
    title: 'Code With Aryan - Low Level Design + Multithreading',
    instructor: 'Aryan Mittal',
    channel: 'Code With Aryan',
    type: 'LLD',
    subjectTitle: 'Low Level Design (LLD)',
    totalVideos: 35,
    totalDuration: '22 hrs 30 mins',
    rating: 4.8,
    badge: 'Practical Coding',
    description: 'End-to-end Low-Level Design (LLD), Object-Oriented Design Patterns, and Java Concurrency/Multithreading with complete clean-code implementations (Parking Lot, Tic-Tac-Toe, Snake and Ladder, Splitwise).',
    playlistUrl: 'https://www.youtube.com/playlist?list=PL6W8uoQQ2c61X_9e6Net0Wd496454Ucxj',
    thumbnailType: 'code-aryan',
    lectures: [
      {
        id: 1,
        title: 'Low Level Design: Design Parking Lot System in Java (OOP + Design Patterns)',
        duration: '55:20',
        youtubeId: 'tVRyb4HaHgw',
        videoUrl: 'https://www.youtube.com/watch?v=tVRyb4HaHgw',
        tags: ['Parking Lot', 'Strategy Pattern', 'Factory']
      },
      {
        id: 2,
        title: 'Low Level Design: Design Tic-Tac-Toe Game with Clean Architecture',
        duration: '45:10',
        youtubeId: 'gKGAT_XbYgY',
        videoUrl: 'https://www.youtube.com/watch?v=gKGAT_XbYgY',
        tags: ['Tic Tac Toe', 'Game Design', 'OOP']
      },
      {
        id: 3,
        title: 'Java Concurrency & Multithreading Masterclass (Locks, Mutex, Deadlocks)',
        duration: '65:30',
        youtubeId: 'L93qF3wS123',
        videoUrl: 'https://www.youtube.com/watch?v=L93qF3wS123',
        tags: ['Multithreading', 'Concurrency', 'Locks']
      }
    ]
  },
  {
    slug: 'coder-army-lld',
    title: 'Code Army LLD System Design Interview Preparation',
    instructor: 'Rohit Negi',
    channel: 'Coder Army',
    type: 'LLD',
    subjectTitle: 'Low Level Design (LLD)',
    totalVideos: 30,
    totalDuration: '19 hrs 15 mins',
    rating: 4.9,
    badge: 'Beginner to Pro',
    description: 'Comprehensive Low-Level System Design course from Rohit Negi (Ex-Uber) covering SOLID principles, Creational, Structural, Behavioral Design Patterns, UML Diagrams, and live schema designs.',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLQEaRBV9gAFu0s_1q5W48Vn6Tf6R7qP_A',
    thumbnailType: 'coder-army',
    lectures: [
      {
        id: 1,
        title: 'LLD Lecture 1: SOLID Principles Explained with Real Code Examples',
        duration: '50:40',
        youtubeId: 'v-xV3UvH_64',
        videoUrl: 'https://www.youtube.com/watch?v=v-xV3UvH_64',
        tags: ['SOLID Principles', 'Clean Architecture']
      },
      {
        id: 2,
        title: 'LLD Lecture 2: Factory & Abstract Factory Design Pattern in Depth',
        duration: '42:15',
        youtubeId: 'E_n9B5_y5q8',
        videoUrl: 'https://www.youtube.com/watch?v=E_n9B5_y5q8',
        tags: ['Factory Pattern', 'Creational']
      },
      {
        id: 3,
        title: 'LLD Lecture 3: Observer & Strategy Pattern with Live Coding',
        duration: '48:30',
        youtubeId: 'r48nQ_y2w98',
        videoUrl: 'https://www.youtube.com/watch?v=r48nQ_y2w98',
        tags: ['Observer Pattern', 'Strategy Pattern']
      }
    ]
  },
  {
    slug: 'engineering-digest-hld',
    title: 'Engineering Digest HLD System Design Interview Preparation',
    instructor: 'Akhil Sharma',
    channel: 'Engineering Digest',
    type: 'HLD',
    subjectTitle: 'High Level Design (HLD)',
    totalVideos: 26,
    totalDuration: '14 hrs 50 mins',
    rating: 4.8,
    badge: 'Popular',
    description: 'Practical High Level Design tutorials by Akhil Sharma covering distributed systems architecture, microservices orchestration, API Gateways, gRPC, and cloud database sharding.',
    playlistUrl: 'https://www.youtube.com/playlist?list=PL3NrzZBjk6m-r2kGv5Qk6w6a9q9s_9e4',
    thumbnailType: 'engineering-digest',
    lectures: [
      {
        id: 1,
        title: 'System Design: Monolith vs Microservices Architecture & API Gateway',
        duration: '32:10',
        youtubeId: 'qYhRvH9B55w',
        videoUrl: 'https://www.youtube.com/watch?v=qYhRvH9B55w',
        tags: ['Microservices', 'API Gateway']
      },
      {
        id: 2,
        title: 'System Design: Database Caching Strategies (Cache-Aside, Write-Through, Write-Back)',
        duration: '29:45',
        youtubeId: 'd6R9_1q4z90',
        videoUrl: 'https://www.youtube.com/watch?v=d6R9_1q4z90',
        tags: ['Caching', 'Redis', 'Write-Through']
      }
    ]
  }
];

export const systemDesignData = {
  questions: [
    {
      id: 'sd-1',
      title: 'Design a URL Shortener (e.g. TinyURL / Bitly)',
      description: 'Architect a highly available and scalable URL shortening service handling 100M new URLs/day with low latency (<50ms) redirection.',
      category: 'High Level Design',
      difficulty: 'Medium',
      tags: ['Base62 Encoding', 'Key Generation Service', 'Redis Caching', 'Database Sharding']
    },
    {
      id: 'sd-2',
      title: 'Design a Real-Time Messaging System (e.g. WhatsApp / Discord)',
      description: 'Support 1B+ daily active users with end-to-end encryption, one-on-one and group chats, online presence, and offline delivery queues.',
      category: 'High Level Design',
      difficulty: 'Hard',
      tags: ['WebSockets', 'XMPP', 'Cassandra', 'Redis Pub/Sub']
    },
    {
      id: 'sd-3',
      title: 'Design an E-Commerce Rate Limiter',
      description: 'Protect microservices from DDoS attacks and abusive traffic using token bucket, leaky bucket, and distributed Redis sliding window counters.',
      category: 'System Component',
      difficulty: 'Medium',
      tags: ['Token Bucket', 'Sliding Window', 'Redis Lua Scripts']
    },
    {
      id: 'sd-4',
      title: 'Design a Distributed Web Crawler (e.g. Googlebot)',
      description: 'Crawl billions of web pages with duplicate detection, robots.txt compliance, URL frontier priority queues, and high throughput.',
      category: 'Distributed Systems',
      difficulty: 'Hard',
      tags: ['URL Frontier', 'Bloom Filters', 'S3 Storage', 'Kafka']
    },
    {
      id: 'sd-5',
      title: 'Design a Parking Lot Management System (Low Level Design)',
      description: 'Object-oriented clean architecture design in Java/C++ supporting multi-floor parking, spot types, payment strategies, and concurrency locks.',
      category: 'Low Level Design',
      difficulty: 'Easy',
      tags: ['Strategy Pattern', 'Factory Pattern', 'Concurrency']
    }
  ]
};

