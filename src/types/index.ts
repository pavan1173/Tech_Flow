export interface Question {
  index?: number;
  question_name?: string;
  title?: string;
  name?: string;
  tags?: string[];
  platform_name?: string;
  platform_link?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard' | 'Beginner' | 'Intermediate' | 'Advanced' | string;
  question_popularity?: string;
  topic?: string;
  category?: string;
  answer?: string;
  explanation?: string;
  companies?: string[];
  solved?: boolean;
}

export interface Section {
  section_title: string;
  description?: string;
  problems?: Question[];
  questions?: Question[];
}

export interface Company {
  name: string;
  description: string;
  questionCount: number;
  logoSrc?: string;
  href: string;
}

export interface PackageTier {
  id: string;
  label: string;
  description: string;
}

export interface DsaSheetMeta {
  title: string;
  creator: string;
  problems: number;
  slug: string;
  href: string;
  isExternal: boolean;
  desc: string;
  badge: string;
  color: string;
  imageUrl?: string;
}

export interface PlaylistItem {
  title: string;
  channel: string;
  videos: string;
  href: string;
  badge: string;
  desc: string;
}

export interface NoteItem {
  title: string;
  category: string;
  description?: string;
  downloadUrl?: string;
  pages?: number;
  readTime?: string;
  keyTopics?: string[];
}

export interface ResumeTemplate {
  title: string;
  description: string;
  atsScore?: number;
  type?: string;
  link?: string;
  previewUrl?: string;
  features?: string[];
}

export interface ColdEmailTemplate {
  role?: string;
  title?: string;
  subject: string;
  body: string;
  target?: string;
}

export interface FaqQuestion {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  questions: FaqQuestion[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
}
