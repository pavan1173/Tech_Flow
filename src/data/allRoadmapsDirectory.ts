export interface DirectoryCategory {
  id: string;
  name: string;
  count: number;
}

export interface RoadmapCard {
  id: string;
  title: string;
  slug: string;
  category: string;
  isNew?: boolean;
  isRoleBased?: boolean;
  isSkillBased?: boolean;
  desc?: string;
}

export const DIRECTORY_CATEGORIES: DirectoryCategory[] = [
  { id: 'all', name: 'All Roadmaps', count: 95 },
  { id: 'beginners', name: 'Absolute Beginners', count: 34 },
  { id: 'web', name: 'Web Development', count: 70 },
  { id: 'frameworks', name: 'Frameworks', count: 9 },
  { id: 'languages', name: 'Languages / Platforms', count: 23 },
  { id: 'ai', name: 'AI & Machine Learning', count: 25 },
  { id: 'devops', name: 'DevOps', count: 49 },
  { id: 'mobile', name: 'Mobile Development', count: 9 },
  { id: 'databases', name: 'Databases', count: 26 },
  { id: 'cs', name: 'Computer Science', count: 31 },
  { id: 'management', name: 'Management', count: 10 },
  { id: 'game', name: 'Game Development', count: 7 },
  { id: 'design', name: 'Design', count: 4 },
  { id: 'blockchain', name: 'Blockchain', count: 4 },
  { id: 'security', name: 'Cyber Security', count: 11 },
  { id: 'best-practices', name: 'Best Practices', count: 5 },
];

export const NEW_ROADMAPS: RoadmapCard[] = [
  { id: 'r-programming', title: 'R Programming', slug: 'r-programming', category: 'languages', isNew: true },
  { id: 'seo-new', title: 'SEO', slug: 'seo', category: 'web', isNew: true },
];

export const ROLE_BASED_ROADMAPS: RoadmapCard[] = [
  { id: 'frontend', title: 'Frontend', slug: 'frontend', category: 'web', isRoleBased: true },
  { id: 'backend', title: 'Backend', slug: 'backend', category: 'web', isRoleBased: true },
  { id: 'full-stack', title: 'Full Stack', slug: 'full-stack', category: 'web', isRoleBased: true },
  { id: 'android', title: 'Android', slug: 'android', category: 'mobile', isRoleBased: true },
  { id: 'devops', title: 'DevOps', slug: 'devops', category: 'devops', isRoleBased: true },
  { id: 'devsecops', title: 'DevSecOps', slug: 'devsecops', category: 'security', isRoleBased: true },
  { id: 'data-analyst', title: 'Data Analyst', slug: 'data-analyst', category: 'ai', isRoleBased: true },
  { id: 'seo', title: 'SEO', slug: 'seo', category: 'web', isRoleBased: true },
  { id: 'ai-engineer', title: 'AI Engineer', slug: 'ai-engineer', category: 'ai', isRoleBased: true },
  { id: 'ai-data-scientist', title: 'AI and Data Scientist', slug: 'ai-data-scientist', category: 'ai', isRoleBased: true },
  { id: 'data-engineer', title: 'Data Engineer', slug: 'data-engineer', category: 'databases', isRoleBased: true },
  { id: 'machine-learning', title: 'Machine Learning', slug: 'machine-learning', category: 'ai', isRoleBased: true },
  { id: 'postgresql', title: 'PostgreSQL', slug: 'postgresql', category: 'databases', isRoleBased: true },
  { id: 'ios', title: 'iOS', slug: 'ios', category: 'mobile', isRoleBased: true },
  { id: 'blockchain', title: 'Blockchain', slug: 'blockchain', category: 'blockchain', isRoleBased: true },
  { id: 'qa', title: 'QA', slug: 'qa', category: 'web', isRoleBased: true },
  { id: 'software-architect', title: 'Software Architect', slug: 'software-architect', category: 'cs', isRoleBased: true },
  { id: 'api-design', title: 'API Design', slug: 'api-design', category: 'best-practices', isRoleBased: true },
  { id: 'cyber-security', title: 'Cyber Security', slug: 'cyber-security', category: 'security', isRoleBased: true },
  { id: 'ux-design', title: 'UX Design', slug: 'ux-design', category: 'design', isRoleBased: true },
  { id: 'technical-writer', title: 'Technical Writer', slug: 'technical-writer', category: 'management', isRoleBased: true },
  { id: 'game-developer', title: 'Game Developer', slug: 'game-developer', category: 'game', isRoleBased: true },
  { id: 'server-side-game-developer', title: 'Server Side Game Developer', slug: 'server-side-game-developer', category: 'game', isRoleBased: true },
  { id: 'mlops', title: 'MLOps', slug: 'mlops', category: 'devops', isRoleBased: true },
  { id: 'product-manager', title: 'Product Manager', slug: 'product-manager', category: 'management', isRoleBased: true },
  { id: 'engineering-manager', title: 'Engineering Manager', slug: 'engineering-manager', category: 'management', isRoleBased: true },
  { id: 'developer-relations', title: 'Developer Relations', slug: 'developer-relations', category: 'management', isRoleBased: true },
  { id: 'bi-analyst', title: 'BI Analyst', slug: 'bi-analyst', category: 'ai', isRoleBased: true },
  { id: 'ai-red-teaming', title: 'AI Red Teaming', slug: 'ai-red-teaming', category: 'security', isRoleBased: true },
  { id: 'network-engineer', title: 'Network Engineer', slug: 'network-engineer', category: 'devops', isRoleBased: true },
  { id: 'forward-deployed-engineer', title: 'Forward Deployed Engineer', slug: 'forward-deployed-engineer', category: 'web', isRoleBased: true },
];

export const SKILL_BASED_ROADMAPS: RoadmapCard[] = [
  { id: 'react', title: 'React', slug: 'react', category: 'frameworks', isSkillBased: true },
  { id: 'vue', title: 'Vue.js', slug: 'vue', category: 'frameworks', isSkillBased: true },
  { id: 'angular', title: 'Angular', slug: 'angular', category: 'frameworks', isSkillBased: true },
  { id: 'nodejs', title: 'Node.js', slug: 'nodejs', category: 'languages', isSkillBased: true },
  { id: 'typescript', title: 'TypeScript', slug: 'typescript', category: 'languages', isSkillBased: true },
  { id: 'python', title: 'Python', slug: 'python', category: 'languages', isSkillBased: true },
  { id: 'docker', title: 'Docker', slug: 'docker', category: 'devops', isSkillBased: true },
  { id: 'kubernetes', title: 'Kubernetes', slug: 'kubernetes', category: 'devops', isSkillBased: true },
  { id: 'git', title: 'Git & GitHub', slug: 'git', category: 'best-practices', isSkillBased: true },
  { id: 'sql', title: 'SQL & Database Design', slug: 'sql', category: 'databases', isSkillBased: true },
  { id: 'system-design', title: 'System Design', slug: 'system-design', category: 'cs', isSkillBased: true },
  { id: 'dsa', title: 'Data Structures & Algorithms', slug: 'dsa', category: 'cs', isSkillBased: true },
];
