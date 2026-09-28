export interface ResumeTemplate {
  id: string;
  name: string;
  image: string;
  cdnImage: string;
  link: string;
  previewUrl: string;
  description: string;
  category?: string;
  recommendedFor?: string;
}

function getDrivePreviewUrl(url: string) {
  const m = url.match(/drive\.google\.com\/file\/d\/([^\/\?]+)/);
  return m && m[1] ? `https://drive.google.com/file/d/${m[1]}/preview` : url;
}

export const resumeTemplatesList: ResumeTemplate[] = [
  {
    id: 'sumit',
    name: 'Sumit Resume Template',
    image: '/resume-templates/sumit.jpg',
    cdnImage: 'https://hynts.in/_astro/Sumit_resume_template.BjLvWvqD.jpg',
    link: 'https://drive.google.com/file/d/15q1IynZHQV1rZbtLAXontQe3ABlg2Z6D/view?usp=drive_link',
    previewUrl: getDrivePreviewUrl('https://drive.google.com/file/d/15q1IynZHQV1rZbtLAXontQe3ABlg2Z6D/view?usp=drive_link'),
    description: 'Battle-tested single column ATS format engineered for Software Engineers, Full-Stack Developers, and Tech Graduates.',
    category: 'Engineering',
    recommendedFor: 'Fullstack, Backend & SDE Roles'
  },
  {
    id: 'harshibar',
    name: 'Harshibar Resume Template',
    image: '/resume-templates/harshibar.jpeg',
    cdnImage: 'https://hynts.in/_astro/harshibar_resume_template.CeF7vncD.jpeg',
    link: 'https://drive.google.com/file/d/1sIdI8DvlWykAUueGnluiY5QnBaZ6bmpn/view?usp=drive_link',
    previewUrl: getDrivePreviewUrl('https://drive.google.com/file/d/1sIdI8DvlWykAUueGnluiY5QnBaZ6bmpn/view?usp=drive_link'),
    description: 'Renowned Harshibar tech resume template optimized for Silicon Valley product companies, Google, Meta, and high-growth startups.',
    category: 'Product & Tech',
    recommendedFor: 'FAANG, Startups & Tech Giants'
  },
  {
    id: 'jake',
    name: 'Jake Ryan Resume Template',
    image: '/resume-templates/jake.jpeg',
    cdnImage: 'https://hynts.in/_astro/jake_ryan_resume_template.CB4h0ZiI.jpeg',
    link: 'https://drive.google.com/file/d/17Kx1PIjKPQwkkbvLHYeww--XRrLc_Ugy/view?usp=drive_link',
    previewUrl: getDrivePreviewUrl('https://drive.google.com/file/d/17Kx1PIjKPQwkkbvLHYeww--XRrLc_Ugy/view?usp=drive_link'),
    description: 'The world-famous Overleaf / LaTeX Jake\'s Resume — the benchmark ATS standard with 99% ATS parsing rate across Fortune 500 portals.',
    category: 'Benchmark ATS',
    recommendedFor: 'Software Engineering & CS Students'
  },
  {
    id: 'omar',
    name: 'Omar Macias Resume Template',
    image: '/resume-templates/omar.jpeg',
    cdnImage: 'https://hynts.in/_astro/omar_macias_resume_template.DX9LIHTs.jpeg',
    link: 'https://drive.google.com/file/d/1rOqt4Om-Lyq5XPz7bN7rzNqt__FYLKN-/view?usp=drive_link',
    previewUrl: getDrivePreviewUrl('https://drive.google.com/file/d/1rOqt4Om-Lyq5XPz7bN7rzNqt__FYLKN-/view?usp=drive_link'),
    description: 'Clean modern layout highlighting impact metrics, MLH Fellowships, open-source projects, and systems engineering experience.',
    category: 'Systems & Open Source',
    recommendedFor: 'DevOps, SRE, AI & Cloud Roles'
  },
  {
    id: 'harvard',
    name: 'Harvard Resume Template',
    image: '/resume-templates/harvard.jpeg',
    cdnImage: 'https://hynts.in/_astro/harvard_resume_template.Ce7c2X_r.jpeg',
    link: 'https://drive.google.com/file/d/1JCuPOEaCXMJlWdJ6xfkhCOleb-7x-Apc/view?usp=drive_link',
    previewUrl: getDrivePreviewUrl('https://drive.google.com/file/d/1JCuPOEaCXMJlWdJ6xfkhCOleb-7x-Apc/view?usp=drive_link'),
    description: 'Official Harvard Office of Career Services layout. Time-honored, impeccably readable font metrics, and preferred by top consulting & tech recruiters.',
    category: 'Ivy League Standard',
    recommendedFor: 'Tech, Finance, Consulting & Leadership'
  },
  {
    id: 'deedy',
    name: 'Deedy Resume Template',
    image: '/resume-templates/deedy.jpeg',
    cdnImage: 'https://hynts.in/_astro/Deedy_resume_template.BZA120eu.jpeg',
    link: 'https://drive.google.com/file/d/11ygl9Lgl-goCUmNC6U8yUFwtMoFO5Gn1/view?usp=drive_link',
    previewUrl: getDrivePreviewUrl('https://drive.google.com/file/d/11ygl9Lgl-goCUmNC6U8yUFwtMoFO5Gn1/view?usp=drive_link'),
    description: 'Classic Deedy two-column resume design created by Debarghya Das. Ideal for candidates with numerous projects, skills, and publications.',
    category: 'Two-Column Technical',
    recommendedFor: 'Competitive Programmers & Researchers'
  }
];
