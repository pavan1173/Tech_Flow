export interface ColdEmailTemplate {
  slug: string;
  title: string;
  role: string;
  category: 'Tech Stack Specific' | 'Cloud & DevOps' | 'Data & AI/ML' | 'General & Networking';
  shortDescription: string;
  subjectLines: string[];
  defaultValues: {
    yourName: string;
    recipientName: string;
    companyName: string;
    jobId: string;
    yearsExp: string;
    keySkills: string;
    project1: string;
    project2: string;
    portfolioUrl: string;
    githubUrl: string;
    linkedinUrl: string;
  };
  bodyTemplate: (v: any) => string;
  followUpTemplate: (v: any) => string;
  proTips: string[];
}

export const coldEmailTemplatesCatalog: ColdEmailTemplate[] = [
  // ==================== TECH STACK SPECIFIC ====================
  {
    slug: 'mern-stack-referral',
    title: 'MERN Stack Developer - Job Referral Request',
    role: 'MERN Stack Developer',
    category: 'Tech Stack Specific',
    shortDescription: 'Professional cold email template designed for MERN Stack Developer outreach, referrals, and networking.',
    subjectLines: [
      'Referral Request: MERN Stack Developer - [Your Name]',
      'Application for [Job ID] / MERN Stack Engineer - [Your Name]',
      'Passionate Fullstack (React/Node/MongoDB) Engineer interested in [Company Name]'
    ],
    defaultValues: {
      yourName: '[Your Name]',
      recipientName: '[Recipient Name]',
      companyName: '[Company Name]',
      jobId: '[Job ID / Req #]',
      yearsExp: '2+ years',
      keySkills: 'MongoDB, Express.js, React.js, Node.js, TypeScript, REST & GraphQL APIs',
      project1: 'High-concurrency E-commerce microservice with Redis caching (Live Demo: https://demo.dev)',
      project2: 'Collaborative real-time workspace with WebSockets & React (GitHub: https://github.com/project)',
      portfolioUrl: 'https://yourportfolio.dev',
      githubUrl: 'https://github.com/yourhandle',
      linkedinUrl: 'https://linkedin.com/in/yourhandle'
    },
    bodyTemplate: (v) => `Hi ${v.recipientName},

I hope this email finds you well.

My name is ${v.yourName}, and I am a ${v.yearsExp ? `${v.yearsExp} ` : ''}Full Stack Developer specializing in the MERN stack (${v.keySkills}). I've been closely following ${v.companyName}'s recent product updates and engineering blog, and I am deeply impressed by your team's focus on scalable architecture.

I noticed an opening for the MERN Stack / Full Stack Developer position at ${v.companyName}${v.jobId ? ` (Job ID: ${v.jobId})` : ''} and believe my technical background aligns strongly with what your team builds.

A quick snapshot of what I bring to the table:
• Production MERN Architecture: Built performant web applications using React, Node.js, Express, and MongoDB with secure JWT auth and optimized indexing.
• Key Work / Project: ${v.project1}
• Secondary Project: ${v.project2}
• Code & Portfolio: ${v.portfolioUrl} | ${v.githubUrl}

If my profile looks like a good match for the role, would you be open to providing a referral or connecting me with the hiring manager?

I have attached my resume for your convenience: [Attach Resume Link / PDF]

Thank you so much for your time and consideration!

Best regards,

${v.yourName}
${v.linkedinUrl}
${v.githubUrl}`,
    followUpTemplate: (v) => `Hi ${v.recipientName},

I hope you're having a great week!

I wanted to follow up briefly on my previous message regarding the MERN Stack Developer role at ${v.companyName}.

I understand you are likely busy, so no worries if you haven't had a chance to look. I remain very eager to contribute to the engineering team at ${v.companyName}.

Thank you again for your time!

Best regards,
${v.yourName}`,
    proTips: [
      'Send between Tuesday and Thursday from 8:30 AM to 10:30 AM in the recipient’s time zone.',
      'Always customize the specific project links and attach a Google Drive link with "Anyone with the link can view" permissions.',
      'Mention a recent engineering blog post or product feature of the target company to stand out immediately.'
    ]
  },

  {
    slug: 'react-developer-referral',
    title: 'React Developer - Job Referral Request',
    role: 'React Developer',
    category: 'Tech Stack Specific',
    shortDescription: 'Professional cold email template designed for React Developer outreach, referrals, and networking.',
    subjectLines: [
      'Referral Request: Frontend / React.js Developer - [Your Name]',
      'Application for [Job ID] / Frontend Engineer - [Your Name]',
      'React & TypeScript Engineer admiring [Company Name]\'s UI engineering'
    ],
    defaultValues: {
      yourName: '[Your Name]',
      recipientName: '[Recipient Name]',
      companyName: '[Company Name]',
      jobId: '[Job ID / Req #]',
      yearsExp: 'Frontend',
      keySkills: 'React 19, Next.js (App Router), TypeScript, Tailwind CSS, Redux Toolkit, Web Performance',
      project1: 'Interactive SaaS dashboard with sub-second LCP and 99+ Lighthouse performance (Live: https://demo.dev)',
      project2: 'Open-source React component design system with Storybook (GitHub: https://github.com/project)',
      portfolioUrl: 'https://yourportfolio.dev',
      githubUrl: 'https://github.com/yourhandle',
      linkedinUrl: 'https://linkedin.com/in/yourhandle'
    },
    bodyTemplate: (v) => `Hi ${v.recipientName},

I hope you are doing well.

I am reaching out because I came across the React / Frontend Developer opening at ${v.companyName}${v.jobId ? ` (Job ID: ${v.jobId})` : ''}. As a developer specializing in ${v.keySkills}, I have huge admiration for ${v.companyName}'s design standards and frontend engineering.

A brief overview of my experience:
• Core Expertise: Building responsive, accessible, and high-performance user interfaces using React, TypeScript, and modern state architectures.
• Featured Work: ${v.project1}
• Design System / Code: ${v.project2}
• Portfolio: ${v.portfolioUrl} | GitHub: ${v.githubUrl}

If you feel my skillset aligns with what the team is looking for, I would be extremely grateful for an internal referral.

Thank you very much for your time and guidance!

Warm regards,

${v.yourName}
${v.linkedinUrl}`,
    followUpTemplate: (v) => `Hi ${v.recipientName},

Hope you are having a productive week.

Just checking in regarding the React Developer position at ${v.companyName}. I'd love to connect if you have a moment, or feel free to forward my info to the hiring team.

Thanks again for your time!

Best,
${v.yourName}`,
    proTips: [
      'Highlight Lighthouse scores (90+) and responsive design when reaching out for frontend roles.',
      'Include a direct link to a live deployed project rather than just raw code.'
    ]
  },

  {
    slug: 'nodejs-backend-referral',
    title: 'Node.js Backend Developer - Job Referral Request',
    role: 'Node.js Backend Developer',
    category: 'Tech Stack Specific',
    shortDescription: 'Professional cold email template designed for Node.js Backend Developer outreach, referrals, and networking.',
    subjectLines: [
      'Referral Request: Node.js / Backend Engineer - [Your Name]',
      'Backend Engineer (Node.js/PostgreSQL/Redis) applying for [Job ID] - [Your Name]',
      'Inquiry: Node.js Backend Engineering at [Company Name]'
    ],
    defaultValues: {
      yourName: '[Your Name]',
      recipientName: '[Recipient Name]',
      companyName: '[Company Name]',
      jobId: '[Job ID / Req #]',
      yearsExp: 'Backend',
      keySkills: 'Node.js, Express, NestJS, TypeScript, PostgreSQL, Redis, Docker, Kafka, Microservices',
      project1: 'High-throughput payment orchestration API with distributed locking & idempotency (GitHub: https://github.com/project)',
      project2: 'Event-driven pub/sub data ingestion pipeline processing 10k events/sec',
      portfolioUrl: 'https://yourportfolio.dev',
      githubUrl: 'https://github.com/yourhandle',
      linkedinUrl: 'https://linkedin.com/in/yourhandle'
    },
    bodyTemplate: (v) => `Hi ${v.recipientName},

I hope this email finds you well.

My name is ${v.yourName}, and I am a Backend Engineer specializing in ${v.keySkills}. I am reaching out to express my strong interest in the Backend Developer position at ${v.companyName}${v.jobId ? ` (Job ID: ${v.jobId})` : ''}.

A quick summary of my technical background:
• API Design & Scalability: Engineered resilient microservices and REST/GraphQL APIs with database indexing, caching (Redis), and connection pooling.
• Key Project: ${v.project1}
• Secondary Architecture: ${v.project2}
• GitHub Profile: ${v.githubUrl}

If you believe my background could be an asset to the backend team at ${v.companyName}, I would be truly grateful for a referral.

Thank you for your consideration!

Best regards,

${v.yourName}
${v.linkedinUrl}`,
    followUpTemplate: (v) => `Hi ${v.recipientName},

I hope you're having a good week.

I wanted to quickly follow up on my note regarding the Backend Developer role at ${v.companyName}. Looking forward to any advice you might have!

Best,
${v.yourName}`,
    proTips: [
      'Emphasize database optimization, caching, latency reduction, and concurrency handling.',
      'Quantify throughput (e.g., "handled 5,000 requests per second with <50ms latency").'
    ]
  },

  {
    slug: 'fullstack-developer-referral',
    title: 'Full Stack Developer - Job Referral Request',
    role: 'Full Stack Developer',
    category: 'Tech Stack Specific',
    shortDescription: 'Professional cold email template designed for Full Stack Developer outreach, referrals, and networking.',
    subjectLines: [
      'Referral Request: Full Stack Software Engineer - [Your Name]',
      'Application for Full Stack Developer [Job ID] - [Your Name]',
      'Full Stack Engineer eager to contribute to [Company Name]'
    ],
    defaultValues: {
      yourName: '[Your Name]',
      recipientName: '[Recipient Name]',
      companyName: '[Company Name]',
      jobId: '[Job ID / Req #]',
      yearsExp: 'Full Stack',
      keySkills: 'React, Next.js, Node.js, TypeScript, PostgreSQL, Docker, AWS S3, CI/CD',
      project1: 'Full-stack collaborative canvas app with optimistic UI updates and PostgreSQL DB',
      project2: 'Scalable SaaS application with Stripe billing and RBAC authentication',
      portfolioUrl: 'https://yourportfolio.dev',
      githubUrl: 'https://github.com/yourhandle',
      linkedinUrl: 'https://linkedin.com/in/yourhandle'
    },
    bodyTemplate: (v) => `Hi ${v.recipientName},

I hope you're having a wonderful day.

I am writing to express my strong enthusiasm for the Full Stack Developer role at ${v.companyName}${v.jobId ? ` (Job ID: ${v.jobId})` : ''}. Having worked across the full lifecycle of software products using ${v.keySkills}, I have deep respect for what your team is building.

Key highlights of my background:
• End-to-End Ownership: Proven capability to architect backend services, design robust relational schemas, and craft snappy, responsive frontends.
• Project 1: ${v.project1}
• Project 2: ${v.project2}
• Portfolio & Code: ${v.portfolioUrl} | ${v.githubUrl}

If you feel my experience fits what ${v.companyName} is searching for, I would be honored to be referred for this position.

Thank you very much for your time!

Warm regards,

${v.yourName}
${v.linkedinUrl}`,
    followUpTemplate: (v) => `Hi ${v.recipientName},

Just following up on my previous email regarding the Full Stack opening at ${v.companyName}. I'd appreciate any quick feedback or referral when your schedule allows.

Thank you!
${v.yourName}`,
    proTips: [
      'Demonstrate that you can own features end-to-end from database migrations to UI polish.',
      'Showcase code quality and testing practices.'
    ]
  },

  {
    slug: 'vue-developer-referral',
    title: 'Vue.js Developer - Job Referral Request',
    role: 'Vue.js Developer',
    category: 'Tech Stack Specific',
    shortDescription: 'Professional cold email template designed for Vue.js Developer outreach, referrals, and networking.',
    subjectLines: [
      'Referral Request: Vue.js / Nuxt Developer - [Your Name]',
      'Application for Frontend Developer (Vue.js) [Job ID] - [Your Name]'
    ],
    defaultValues: {
      yourName: '[Your Name]',
      recipientName: '[Recipient Name]',
      companyName: '[Company Name]',
      jobId: '[Job ID / Req #]',
      yearsExp: 'Frontend',
      keySkills: 'Vue 3, Nuxt 3, TypeScript, Pinia, Tailwind CSS, Vite',
      project1: 'Nuxt 3 SSR web platform with dynamic routing and optimized SEO',
      project2: 'Vue 3 component library built with TypeScript and Vitest',
      portfolioUrl: 'https://yourportfolio.dev',
      githubUrl: 'https://github.com/yourhandle',
      linkedinUrl: 'https://linkedin.com/in/yourhandle'
    },
    bodyTemplate: (v) => `Hi ${v.recipientName},

I hope you are doing well.

I noticed the Vue.js / Frontend Developer opening at ${v.companyName}${v.jobId ? ` (Job ID: ${v.jobId})` : ''} and wanted to reach out. As a frontend engineer with deep proficiency in ${v.keySkills}, I have been impressed by your company's digital products.

Key highlights of my qualifications:
• Strong grasp of the Vue 3 Composition API, Nuxt 3 SSR/SSG, state management with Pinia, and reactive UI architecture.
• Projects: ${v.project1} | ${v.project2}
• Code Portfolio: ${v.portfolioUrl} | ${v.githubUrl}

Would you be open to passing along my resume as an internal referral?

Thank you for your time!

Best,
${v.yourName}`,
    followUpTemplate: (v) => `Hi ${v.recipientName},\n\nQuick follow-up on my note regarding the Vue.js role at ${v.companyName}. Thank you again for your time!\n\nBest,\n${v.yourName}`,
    proTips: ['Mention Vue 3 Composition API and Nuxt 3 ecosystem capabilities explicitly.']
  },

  {
    slug: 'angular-developer-referral',
    title: 'Angular Developer - Job Referral Request',
    role: 'Angular Developer',
    category: 'Tech Stack Specific',
    shortDescription: 'Professional cold email template designed for Angular Developer outreach, referrals, and networking.',
    subjectLines: [
      'Referral Request: Angular / TypeScript Developer - [Your Name]',
      'Application for Angular Engineer [Job ID] - [Your Name]'
    ],
    defaultValues: {
      yourName: '[Your Name]',
      recipientName: '[Recipient Name]',
      companyName: '[Company Name]',
      jobId: '[Job ID / Req #]',
      yearsExp: 'Enterprise Frontend',
      keySkills: 'Angular 17+, TypeScript, RxJS, NgRx, Signals, Standalone Components, Material UI',
      project1: 'Enterprise financial management portal with reactive state and RxJS pipelines',
      project2: 'Micro-frontend architecture using Module Federation and Angular standalone components',
      portfolioUrl: 'https://yourportfolio.dev',
      githubUrl: 'https://github.com/yourhandle',
      linkedinUrl: 'https://linkedin.com/in/yourhandle'
    },
    bodyTemplate: (v) => `Hi ${v.recipientName},

I hope this message finds you well.

I am writing to inquire about the Angular Developer position at ${v.companyName}${v.jobId ? ` (Job ID: ${v.jobId})` : ''}. Having built scalable enterprise applications utilizing ${v.keySkills}, I am very interested in joining your engineering group.

Summary of my experience:
• Expertise with Angular Signals, RxJS event streams, state management with NgRx, and lazy-loaded modular architecture.
• Projects: ${v.project1}
• GitHub & Portfolio: ${v.portfolioUrl} | ${v.githubUrl}

If you feel my skillset matches your team's criteria, I would appreciate the opportunity for a referral.

Thank you!

Best regards,
${v.yourName}`,
    followUpTemplate: (v) => `Hi ${v.recipientName},\n\nHope your week is going well. Briefly following up on the Angular Developer opening at ${v.companyName}.\n\nThank you,\n${v.yourName}`,
    proTips: ['Highlight RxJS, Angular Signals, and enterprise design patterns.']
  },

  {
    slug: 'python-django-developer-referral',
    title: 'Python/Django Developer - Job Referral Request',
    role: 'Python/Django Developer',
    category: 'Tech Stack Specific',
    shortDescription: 'Professional cold email template designed for Python/Django Developer outreach, referrals, and networking.',
    subjectLines: [
      'Referral Request: Python / Django Backend Engineer - [Your Name]',
      'Application for Python Engineer [Job ID] - [Your Name]'
    ],
    defaultValues: {
      yourName: '[Your Name]',
      recipientName: '[Recipient Name]',
      companyName: '[Company Name]',
      jobId: '[Job ID / Req #]',
      yearsExp: 'Backend',
      keySkills: 'Python 3, Django, Django REST Framework (DRF), Celery, Redis, PostgreSQL, Docker',
      project1: 'Asynchronous task processing backend with Celery & Redis handling background jobs',
      project2: 'RESTful API with OAuth2, automated test coverage (PyTest), and PostgreSQL optimization',
      portfolioUrl: 'https://yourportfolio.dev',
      githubUrl: 'https://github.com/yourhandle',
      linkedinUrl: 'https://linkedin.com/in/yourhandle'
    },
    bodyTemplate: (v) => `Hi ${v.recipientName},

I hope you're having a good week.

I am writing to express my strong interest in the Python / Django Developer role at ${v.companyName}${v.jobId ? ` (Job ID: ${v.jobId})` : ''}. With a solid foundation in ${v.keySkills}, I have engineered clean, maintainable backend services.

Summary of key accomplishments:
• Production Django Development: Built scalable REST APIs, optimized ORM queries (reducing N+1 queries by 70%), and integrated asynchronous workers with Celery.
• Featured Project: ${v.project1}
• GitHub Repository: ${v.githubUrl}

If my background matches what ${v.companyName} needs, I would be grateful for a referral.

Thank you for your time!

Sincerely,
${v.yourName}`,
    followUpTemplate: (v) => `Hi ${v.recipientName},\n\nFollowing up on my note regarding the Python/Django opening at ${v.companyName}.\n\nBest regards,\n${v.yourName}`,
    proTips: ['Mention query optimization (avoiding N+1 queries) and asynchronous workers (Celery).']
  },

  // ==================== CLOUD & DEVOPS ====================
  {
    slug: 'devops-engineer-referral',
    title: 'DevOps Engineer - Job Referral Request',
    role: 'DevOps Engineer',
    category: 'Cloud & DevOps',
    shortDescription: 'Professional cold email template designed for DevOps Engineer outreach, referrals, and networking.',
    subjectLines: [
      'Referral Request: DevOps / Cloud Infrastructure Engineer - [Your Name]',
      'Application for DevOps Engineer [Job ID] - [Your Name]',
      'CI/CD & Kubernetes Engineer interested in [Company Name]'
    ],
    defaultValues: {
      yourName: '[Your Name]',
      recipientName: '[Recipient Name]',
      companyName: '[Company Name]',
      jobId: '[Job ID / Req #]',
      yearsExp: 'DevOps',
      keySkills: 'Docker, Kubernetes, Terraform (IaC), AWS, GitHub Actions, Prometheus, Grafana, Linux',
      project1: 'Production Kubernetes cluster setup with automated Terraform provisioning and Helm charts',
      project2: 'Zero-downtime CI/CD deployment pipeline with automated rollback on failed health checks',
      portfolioUrl: 'https://yourportfolio.dev',
      githubUrl: 'https://github.com/yourhandle',
      linkedinUrl: 'https://linkedin.com/in/yourhandle'
    },
    bodyTemplate: (v) => `Hi ${v.recipientName},

I hope you are doing well.

I am reaching out regarding the DevOps / Infrastructure Engineer opening at ${v.companyName}${v.jobId ? ` (Job ID: ${v.jobId})` : ''}. Having automated cloud infrastructure and CI/CD pipelines using ${v.keySkills}, I am very interested in ${v.companyName}'s reliability and deployment scale.

Key technical proficiencies:
• Infrastructure as Code (IaC): Automated multi-environment AWS cloud setups with Terraform and Ansible.
• Container Orchestration: Managed Kubernetes clusters, Helm releases, and ingress controllers.
• Projects & Repositories: ${v.project1} | ${v.githubUrl}

If you feel my background is a strong fit for your infrastructure team, I would be grateful for a referral.

Thank you very much for your time!

Best regards,
${v.yourName}`,
    followUpTemplate: (v) => `Hi ${v.recipientName},\n\nJust a brief follow-up regarding the DevOps Engineer role at ${v.companyName}. Appreciate your help!\n\nBest,\n${v.yourName}`,
    proTips: ['Highlight automated CI/CD metrics, MTTR (Mean Time to Resolution), and cost savings.']
  },

  {
    slug: 'aws-cloud-engineer-referral',
    title: 'AWS Cloud Engineer - Job Referral Request',
    role: 'AWS Cloud Engineer',
    category: 'Cloud & DevOps',
    shortDescription: 'Professional cold email template designed for AWS Cloud Engineer outreach, referrals, and networking.',
    subjectLines: [
      'Referral Request: AWS Cloud Solutions Engineer - [Your Name]',
      'Application for Cloud Engineer (AWS Certified) [Job ID] - [Your Name]'
    ],
    defaultValues: {
      yourName: '[Your Name]',
      recipientName: '[Recipient Name]',
      companyName: '[Company Name]',
      jobId: '[Job ID / Req #]',
      yearsExp: 'Cloud',
      keySkills: 'AWS (EC2, S3, Lambda, VPC, RDS, IAM, CloudFront), Terraform, Python, Docker',
      project1: 'Serverless event-driven architecture using AWS Lambda, API Gateway, and DynamoDB',
      project2: 'Secure Multi-VPC network design with Transit Gateway and automated IAM policies',
      portfolioUrl: 'https://yourportfolio.dev',
      githubUrl: 'https://github.com/yourhandle',
      linkedinUrl: 'https://linkedin.com/in/yourhandle'
    },
    bodyTemplate: (v) => `Hi ${v.recipientName},

I hope this email finds you well.

I am writing to express my enthusiasm for the AWS Cloud Engineer position at ${v.companyName}${v.jobId ? ` (Job ID: ${v.jobId})` : ''}. With expertise in ${v.keySkills} and AWS best practices (Well-Architected Framework), I would love to contribute to your cloud operations.

Key highlights:
• Architecture & Security: Built highly available, fault-tolerant AWS topologies with automated Terraform deployment.
• Sample Project: ${v.project1}
• GitHub Profile: ${v.githubUrl}

Would you be open to providing an internal referral for this opening?

Thank you for your consideration!

Warm regards,
${v.yourName}`,
    followUpTemplate: (v) => `Hi ${v.recipientName},\n\nFollowing up on my note regarding the AWS Cloud Engineer role at ${v.companyName}.\n\nThank you,\n${v.yourName}`,
    proTips: ['Mention AWS certifications (Solutions Architect, Developer Associate) and security practices.']
  },

  // ==================== DATA & AI/ML ====================
  {
    slug: 'data-analyst-referral',
    title: 'Data Analyst - Job Referral Request',
    role: 'Data Analyst',
    category: 'Data & AI/ML',
    shortDescription: 'Professional cold email template designed for Data Analyst outreach, referrals, and networking.',
    subjectLines: [
      'Referral Request: Data Analyst - [Your Name]',
      'Application for Data Analyst [Job ID] - [Your Name]',
      'Data Analyst (SQL/Tableau/Python) interested in [Company Name]'
    ],
    defaultValues: {
      yourName: '[Your Name]',
      recipientName: '[Recipient Name]',
      companyName: '[Company Name]',
      jobId: '[Job ID / Req #]',
      yearsExp: 'Analytics',
      keySkills: 'Advanced SQL (Window Functions, CTEs), Python (Pandas, NumPy), Tableau, Power BI, Statistics',
      project1: 'Customer churn predictive analysis and executive Tableau dashboard identifying $250k retention opportunity',
      project2: 'Automated ETL pipeline transforming transactional data for business reporting',
      portfolioUrl: 'https://yourportfolio.dev',
      githubUrl: 'https://github.com/yourhandle',
      linkedinUrl: 'https://linkedin.com/in/yourhandle'
    },
    bodyTemplate: (v) => `Hi ${v.recipientName},

I hope you are doing well.

I came across the Data Analyst position at ${v.companyName}${v.jobId ? ` (Job ID: ${v.jobId})` : ''} and wanted to reach out. With strong proficiency in ${v.keySkills}, I have a passion for uncovering actionable insights from complex datasets.

A brief summary of my background:
• Analytical Skills: Wrote complex SQL queries, automated ETL pipelines, and built interactive dashboards delivering executive decision support.
• Impact Project: ${v.project1}
• Data Portfolio: ${v.portfolioUrl} | ${v.githubUrl}

If you feel my experience aligns with the data team's goals, I would be grateful for a referral.

Thank you very much!

Best regards,
${v.yourName}`,
    followUpTemplate: (v) => `Hi ${v.recipientName},\n\nJust checking in regarding the Data Analyst opening at ${v.companyName}. Looking forward to connecting!\n\nBest,\n${v.yourName}`,
    proTips: ['Quantify business impact (revenue saved, churn reduced, automation hours gained).']
  },

  {
    slug: 'data-scientist-referral',
    title: 'Data Scientist - Job Referral Request',
    role: 'Data Scientist',
    category: 'Data & AI/ML',
    shortDescription: 'Professional cold email template designed for Data Scientist outreach, referrals, and networking.',
    subjectLines: [
      'Referral Request: Data Scientist / ML Engineer - [Your Name]',
      'Application for Data Scientist [Job ID] - [Your Name]'
    ],
    defaultValues: {
      yourName: '[Your Name]',
      recipientName: '[Recipient Name]',
      companyName: '[Company Name]',
      jobId: '[Job ID / Req #]',
      yearsExp: 'Data Science',
      keySkills: 'Python, Scikit-Learn, PyTorch, SQL, Feature Engineering, A/B Testing, Predictive Modeling',
      project1: 'End-to-end recommendation engine achieving 18% improvement in CTR over baseline',
      project2: 'Customer lifetime value (CLV) regression model deployed via FastAPI',
      portfolioUrl: 'https://yourportfolio.dev',
      githubUrl: 'https://github.com/yourhandle',
      linkedinUrl: 'https://linkedin.com/in/yourhandle'
    },
    bodyTemplate: (v) => `Hi ${v.recipientName},

I hope you're having a great week.

I am writing to express my strong enthusiasm for the Data Scientist role at ${v.companyName}${v.jobId ? ` (Job ID: ${v.jobId})` : ''}. Having developed machine learning models and statistical analyses using ${v.keySkills}, I am eager to contribute to ${v.companyName}'s data initiatives.

Key projects:
• ${v.project1}
• ${v.project2}
• Code & Research: ${v.portfolioUrl} | ${v.githubUrl}

Would you be open to submitting an internal referral on my behalf?

Thank you for your time!

Sincerely,
${v.yourName}`,
    followUpTemplate: (v) => `Hi ${v.recipientName},\n\nFollowing up on my message regarding the Data Scientist position at ${v.companyName}.\n\nBest regards,\n${v.yourName}`,
    proTips: ['Highlight A/B testing methodology, hypothesis validation, and ML model deployment in production.']
  },

  {
    slug: 'ai-ml-engineer-referral',
    title: 'AI/ML & GenAI Engineer - Job Referral Request',
    role: 'AI/ML Engineer',
    category: 'Data & AI/ML',
    shortDescription: 'Professional cold email template designed for AI/ML and LLM/GenAI outreach, referrals, and networking.',
    subjectLines: [
      'Referral Request: AI / Generative AI Engineer - [Your Name]',
      'Application for ML / GenAI Engineer [Job ID] - [Your Name]'
    ],
    defaultValues: {
      yourName: '[Your Name]',
      recipientName: '[Recipient Name]',
      companyName: '[Company Name]',
      jobId: '[Job ID / Req #]',
      yearsExp: 'AI/ML',
      keySkills: 'PyTorch, Hugging Face, LangChain, RAG Systems, Vector Databases (Pinecone/Chroma), Python, Docker',
      project1: 'Production Enterprise RAG system indexing 50k documents with hybrid search & reranking',
      project2: 'Fine-tuned open-source LLM (Llama 3) for domain-specific code analysis',
      portfolioUrl: 'https://yourportfolio.dev',
      githubUrl: 'https://github.com/yourhandle',
      linkedinUrl: 'https://linkedin.com/in/yourhandle'
    },
    bodyTemplate: (v) => `Hi ${v.recipientName},

I hope this note finds you well.

I am reaching out regarding the AI / Machine Learning Engineer position at ${v.companyName}${v.jobId ? ` (Job ID: ${v.jobId})` : ''}. With practical experience implementing ${v.keySkills}, I would love to bring my skills to your AI initiatives.

Highlights of my work:
• Generative AI & RAG: ${v.project1}
• Model Fine-Tuning: ${v.project2}
• GitHub & Demos: ${v.portfolioUrl} | ${v.githubUrl}

If you feel my experience aligns with the team's roadmap, I would be grateful for an internal referral.

Thank you very much!

Best regards,
${v.yourName}`,
    followUpTemplate: (v) => `Hi ${v.recipientName},\n\nQuick follow-up regarding the AI/ML Engineer role at ${v.companyName}. Appreciate your help!\n\nBest,\n${v.yourName}`,
    proTips: ['Demonstrate real deployed RAG pipelines, evaluations, and vector database benchmarks.']
  }
];
