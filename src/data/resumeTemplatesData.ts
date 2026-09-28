export interface ResumeTemplate {
  id: string;
  name: string;
  title: string;
  description: string;
  atsScore: number;
  type: 'LaTeX / Overleaf' | 'Google Docs' | 'Markdown' | 'Word / PDF';
  overleafUrl?: string;
  googleDocsUrl?: string;
  downloadFilename: string;
  latexSource: string;
  previewData: {
    name: string;
    contact: string[];
    education: { school: string; degree: string; gpa?: string; dates: string }[];
    experience: { title: string; company: string; dates: string; location?: string; bullets: string[] }[];
    skills: { category: string; items: string }[];
    projects?: { name: string; tech: string; dates?: string; bullets: string[] }[];
  };
}

export const resumeTemplatesList: ResumeTemplate[] = [
  {
    id: 'sumit-resume',
    name: 'Sumit Resume Template',
    title: 'Sumit Resume Template',
    description: 'Clean single-column ATS resume tailored for Fullstack & Java/React developers with strong project hierarchy.',
    atsScore: 98,
    type: 'LaTeX / Overleaf',
    overleafUrl: 'https://www.overleaf.com/latex/templates/jakes-resume/syzsqbzwffcs',
    downloadFilename: 'Sumit_Resume_Template.tex',
    latexSource: `%-------------------------
% Sumit Resume Template - Clean ATS
%-------------------------
\\documentclass[letterpaper,11pt]{article}
\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}

\\pagestyle{fancy}
\\fancyhf{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}
\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

\\begin{document}
\\begin{center}
    \\textbf{\\Huge \\scshape Sumit Sonawane} \\\\ \\vspace{1pt}
    \\small +91 8788705720 $|$ \\href{mailto:sumitsonawane86@gmail.com}{sumitsonawane86@gmail.com} $|$ 
    \\href{https://linkedin.com}{linkedin.com/in/sumit} $|$
    \\href{https://github.com}{github.com/sumit} $|$ \\href{https://sumit.dev}{Portfolio}
\\end{center}

\\section{Education}
  \\textbf{Dr. D.Y. Patil Institute of Technology, Pimpri} \\hfill 2023 -- 2026\\\\
  B.E. in Computer Engineering $|$ CGPA: 8.67 $|$ Pune, Maharashtra\\\\
  \\vspace{2pt}
  \\textbf{Guru Gobind Singh Polytechnic, Nashik} \\hfill 2020 -- 2023\\\\
  Diploma in Computer Engineering $|$ 89.94\\% $|$ Nashik, Maharashtra

\\section{Experience}
  \\textbf{Trainee Engineer} $|$ Capgemini \\hfill Jan 2026 -- Apr 2026\\\\
  \\textit{Java, Spring Boot, Spring MVC/REST, Spring Data JPA, Spring Security, Hibernate, JDBC, PostgreSQL, MySQL}\\\\
  \\begin{itemize}[leftmargin=0.15in, label={$\\bullet$}]
    \\item Completed hands-on Java Full Stack training covering Spring Boot, Spring Security, Hibernate ORM, and JDBC with PostgreSQL/MySQL for schema design and query optimization.
    \\item Applied QA practices using JUnit, Mockito, and SonarQube, and used Docker to build a full-stack Business Management System capstone project end-to-end.
  \\end{itemize}

\\section{Technical Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     \\textbf{Languages}{: JavaScript (ES6+), TypeScript, Java, PHP, C/C++} \\\\
     \\textbf{Frameworks}{: React.js, Next.js, Spring Boot, Express.js, Tailwind CSS} \\\\
     \\textbf{Databases & Cloud}{: PostgreSQL, MySQL, MongoDB, Docker, Git, AWS S3}
    }}
 \\end{itemize}
\\end{document}`,
    previewData: {
      name: 'Sumit Sonawane',
      contact: ['+91 8788705720', 'sumitsonawane86@gmail.com', 'LinkedIn', 'GitHub', 'Portfolio'],
      education: [
        {
          school: 'Dr. D.Y. Patil Institute of Technology, Pimpri',
          degree: 'B.E. in Computer Engineering | CGPA: 8.67 | Pune, Maharashtra',
          dates: '2023 – 2026'
        },
        {
          school: 'Guru Gobind Singh Polytechnic, Nashik',
          degree: 'Diploma in Computer Engineering | 89.94% | Nashik, Maharashtra',
          dates: '2020 – 2023'
        }
      ],
      experience: [
        {
          title: 'Trainee Engineer',
          company: 'Capgemini',
          dates: 'Jan 2026 – Apr 2026',
          bullets: [
            'Completed hands-on Java Full Stack training covering Spring Boot, Spring Security, Hibernate ORM, and JDBC with PostgreSQL/MySQL for schema design and query optimization.',
            'Applied QA practices using JUnit, Mockito, and SonarQube, and used Docker to build a full-stack Business Management System capstone project end-to-end.'
          ]
        }
      ],
      skills: [
        { category: 'Languages', items: 'JavaScript (ES6+), TypeScript, Java, PHP, C/C++' },
        { category: 'Frameworks & Tools', items: 'React, Next.js, Spring Boot, Docker, Git, PostgreSQL' }
      ]
    }
  },

  {
    id: 'harshibar-resume',
    name: 'Harshibar Resume Template',
    title: 'Harshibar Resume Template',
    description: 'Renowned minimal one-column LaTeX resume by Harshibar, highlighting high-impact product engineering achievements.',
    atsScore: 99,
    type: 'LaTeX / Overleaf',
    overleafUrl: 'https://www.overleaf.com/latex/templates/harshibars-resume/syzsqbzwffcs',
    downloadFilename: 'Harshibar_Resume_Template.tex',
    latexSource: `%-------------------------
% Harshibar Resume Template
%-------------------------
\\documentclass[letterpaper,10pt]{article}
\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage{tabularx}

\\begin{document}
\\begin{center}
    \\textbf{\\Huge \\scshape Harshibar} \\\\ \\vspace{2pt}
    \\small 555.555.5555 $|$ hello@email.com $|$ \\href{https://youtube.com/harshibar}{harshibar} $|$ U.S. Citizen
\\end{center}

\\section{EXPERIENCE}
  \\textbf{YouTube} \\hfill Aug. 2019 -- Present\\\\
  \\textit{Creator (@harshibar)} \\hfill San Francisco, CA\\\\
  \\begin{itemize}[leftmargin=0.15in, label={$\\bullet$}]
    \\item Grew channel to \\textbf{60k subscribers in 1.5 years}; created 60+ videos on tech and productivity
    \\item Conducted A/B testing on titles and thumbnails; \\textbf{increased video impressions by 2.5M} in 3 months
    \\item Designed a Notion workflow to streamline video production and roadmapping; boosted productivity by 20\\%
  \\end{itemize}

  \\textbf{Google Verily} \\hfill Aug. 2018 -- Sept. 2019\\\\
  \\textit{Software Engineer} \\hfill San Francisco, CA\\\\
  \\begin{itemize}[leftmargin=0.15in, label={$\\bullet$}]
    \\item Led front-end development of a dashboard to process 50k blood samples and detect early-stage cancer
    \\item Rebuilt a Quality Control product with input from 20 cross-functional stakeholders, \\textbf{saving \\$1M annually}
  \\end{itemize}

\\section{EDUCATION}
  \\textbf{University of California, Berkeley} \\hfill 2014 -- 2018\\\\
  B.S. in Electrical Engineering and Computer Sciences
\\end{document}`,
    previewData: {
      name: 'Harshibar',
      contact: ['555.555.5555', 'hello@email.com', 'harshibar', 'U.S. Citizen'],
      experience: [
        {
          title: 'Creator (@harshibar)',
          company: 'YouTube',
          dates: 'Aug. 2019 – Present',
          location: 'San Francisco, CA',
          bullets: [
            'Grew channel to 60k subscribers in 1.5 years; created 60+ videos on tech and productivity',
            'Conducted A/B testing on titles and thumbnails; increased video impressions by 2.5M in 3 months',
            'Designed a Notion workflow to streamline video production and roadmapping; boosted productivity by 20%'
          ]
        },
        {
          title: 'Software Engineer',
          company: 'Google Verily',
          dates: 'Aug. 2018 – Sept. 2019',
          location: 'San Francisco, CA',
          bullets: [
            'Led front-end development of a dashboard to process 50k blood samples and detect early-stage cancer',
            'Rebuilt a Quality Control product with input from 20 cross-functional stakeholders, saving $1M annually'
          ]
        }
      ],
      education: [
        {
          school: 'University of California, Berkeley',
          degree: 'B.S. in Electrical Engineering & Computer Science',
          dates: '2014 – 2018'
        }
      ],
      skills: [
        { category: 'Frontend', items: 'React, TypeScript, Next.js, Redux, Webpack' },
        { category: 'Backend', items: 'Python, Flask, Google Cloud Platform (GCP)' }
      ]
    }
  },

  {
    id: 'jake-ryan-resume',
    name: 'Jake Ryan Resume Template',
    title: 'Jake Ryan Resume Template',
    description: 'The #1 gold-standard software engineering resume on Overleaf & Reddit r/cscareerquestions. 100% ATS score.',
    atsScore: 100,
    type: 'LaTeX / Overleaf',
    overleafUrl: 'https://www.overleaf.com/latex/templates/jakes-resume/syzsqbzwffcs',
    downloadFilename: 'Jake_Ryan_Resume_Template.tex',
    latexSource: `%-------------------------
% Jake's Resume
% Author : Jake Gutierrez
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------
\\documentclass[letterpaper,11pt]{article}
\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}

\\pagestyle{fancy}
\\fancyhf{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}
\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

\\begin{document}
\\begin{center}
    \\textbf{\\Huge \\scshape Jake Ryan} \\\\ \\vspace{1pt}
    \\small 123-456-7890 $|$ \\href{mailto:jake@tsu.edu}{jake@tsu.edu} $|$ 
    \\href{https://linkedin.com/in/jake}{linkedin.com/in/jake} $|$
    \\href{https://github.com/jake}{github.com/jake}
\\end{center}

\\section{Education}
  \\textbf{Southwestern University} \\hfill Georgetown, TX\\\\
  \\textit{Bachelor of Arts in Computer Science, Minor in Business} \\hfill Aug. 2018 -- May 2021\\\\
  \\vspace{2pt}
  \\textbf{Blinn College} \\hfill Bryan, TX\\\\
  \\textit{Associate's in Liberal Arts} \\hfill Aug. 2014 -- May 2018

\\section{Experience}
  \\textbf{Undergraduate Research Assistant} \\hfill June 2020 -- Present\\\\
  \\textit{Texas A\\&M University} \\hfill College Station, TX\\\\
  \\begin{itemize}[leftmargin=0.15in, label={$\\bullet$}]
    \\item Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems.
    \\item Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data.
    \\item Explored ways to visualize GitHub collaboration in a classroom setting.
  \\end{itemize}

  \\textbf{Information Technology Support Specialist} \\hfill Sep. 2018 -- Present\\\\
  \\textit{Southwestern University} \\hfill Georgetown, TX\\\\
  \\begin{itemize}[leftmargin=0.15in, label={$\\bullet$}]
    \\item Communicate with managers to set up campus computers used on campus.
    \\item Assess and troubleshoot computer problems brought by students, faculty and staff.
  \\end{itemize}

\\section{Technical Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     \\textbf{Languages}{: Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS} \\\\
     \\textbf{Frameworks}{: React, Node.js, Flask, FastAPI, JUnit, WordPress} \\\\
     \\textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code}
    }}
 \\end{itemize}
\\end{document}`,
    previewData: {
      name: 'Jake Ryan',
      contact: ['123-456-7890', 'jake@tsu.edu', 'linkedin.com/in/jake', 'github.com/jake'],
      education: [
        {
          school: 'Southwestern University',
          degree: 'Bachelor of Arts in Computer Science, Minor in Business',
          dates: 'Aug. 2018 – May 2021'
        },
        {
          school: 'Blinn College',
          degree: "Associate's in Liberal Arts",
          dates: 'Aug. 2014 – May 2018'
        }
      ],
      experience: [
        {
          title: 'Undergraduate Research Assistant',
          company: 'Texas A&M University',
          dates: 'June 2020 – Present',
          location: 'College Station, TX',
          bullets: [
            'Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems',
            'Developed a full-stack web app using Flask, React, PostgreSQL and Docker to analyze GitHub data',
            'Explored ways to visualize GitHub collaboration in a classroom setting'
          ]
        },
        {
          title: 'Information Technology Support Specialist',
          company: 'Southwestern University',
          dates: 'Sep. 2018 – Present',
          location: 'Georgetown, TX',
          bullets: [
            'Communicate with managers to set up campus computers used on campus',
            'Assess and troubleshoot computer problems brought by students, faculty and staff'
          ]
        }
      ],
      skills: [
        { category: 'Languages', items: 'Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS' },
        { category: 'Frameworks', items: 'React, Node.js, Flask, FastAPI, Docker, GCP, Git' }
      ]
    }
  },

  {
    id: 'omar-macias-resume',
    name: 'Omar Macias Resume Template',
    title: 'Omar Macias Resume Template',
    description: 'Specialized for AI/ML, Fellowships (MLH, Meta), and Site Reliability Engineering with clear metrics.',
    atsScore: 98,
    type: 'LaTeX / Overleaf',
    overleafUrl: 'https://www.overleaf.com/latex/templates/omars-resume/syzsqbzwffcs',
    downloadFilename: 'Omar_Macias_Resume_Template.tex',
    latexSource: `%-------------------------
% Omar Macias Resume Template
%-------------------------
\\documentclass[letterpaper,10pt]{article}
\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}

\\begin{document}
\\begin{center}
    \\textbf{\\Huge \\scshape Omar Macias} \\\\ \\vspace{2pt}
    \\small your@email.com $|$ +52 (00) 1234-5678 $|$ \\href{https://github.com/yours}{github.com/yours} $|$ \\href{https://linkedin.com/in/yours}{linkedin.com/in/yours}
\\end{center}

\\section{Education}
  \\textbf{Tecnol\\'ogico de Monterrey (ITESM)} \\hfill Expected graduation date: Jun. 2025\\\\
  \\textit{B.S. in Computer Science and Technology} \\hfill GPA: X/100\\\\
  Relevant Courses: Web Software Construction, Maths and Data Science, OOP, Security in Software Systems

\\section{Experience}
  \\textbf{Meta \\& Major League Hacking} \\hfill Oct. 2023 -- Present\\\\
  \\textit{Software Engineer Fellow} \\hfill Python, Flask, Git, GitHub\\\\
  \\begin{itemize}[leftmargin=0.15in, label={$\\bullet$}]
    \\item Contributing to Meta's AudioCraft, a Generative AI project focused on processing, generation, and autocompletion.
    \\item Creating a Python command-line interface extension with text and audio input validation for audio models.
  \\end{itemize}

  \\textbf{Meta \\& Major League Hacking} \\hfill Jun. 2023 -- Sep. 2023\\\\
  \\textit{Site Reliability Engineer Fellow} \\hfill Python, Bash, MySQL, Flask, Docker\\\\
  \\begin{itemize}[leftmargin=0.15in, label={$\\bullet$}]
    \\item Developed a website on Flask with Jinja, MySQL and a professional Git/GitHub workflow.
  \\end{itemize}
\\end{document}`,
    previewData: {
      name: 'Omar Macias',
      contact: ['your@email.com', '+52 (00) 1234-5678', 'github.com/yours', 'linkedin.com/in/yours'],
      education: [
        {
          school: 'Tecnológico de Monterrey (ITESM)',
          degree: 'B.S. in Computer Science and Technology | GPA: X/100',
          dates: 'Expected: Jun. 2025'
        }
      ],
      experience: [
        {
          title: 'Software Engineer Fellow',
          company: 'Meta & Major League Hacking',
          dates: 'Oct. 2023 – Present',
          bullets: [
            "Contributing to Meta's AudioCraft, a Generative AI project focused on processing, generation, and autocompletion",
            'Creating a Python command-line interface extension with text and audio input validation to facilitate high-fidelity audio generation'
          ]
        },
        {
          title: 'Site Reliability Engineer Fellow',
          company: 'Meta & Major League Hacking',
          dates: 'Jun. 2023 – Sep. 2023',
          bullets: [
            'Developed a website on Flask with Jinja, MySQL and a professional Git/GitHub workflow'
          ]
        }
      ],
      skills: [
        { category: 'AI & Data', items: 'Python, PyTorch, Generative AI, AudioCraft, Flask' },
        { category: 'DevOps & Systems', items: 'Bash, MySQL, Docker, Linux, CI/CD, Git' }
      ]
    }
  },

  {
    id: 'harvard-resume',
    name: 'Harvard Resume Template',
    title: 'Harvard Resume Template',
    description: 'Official standard Harvard Career Services format. Universally respected by hiring managers across Tech, Finance, and Consulting.',
    atsScore: 99,
    type: 'Google Docs',
    googleDocsUrl: 'https://docs.google.com/document/d/14J8V9r-N839kM2bS8kZ_0W2G9_6Wf_5R1Gq5aF7_L3s/copy',
    downloadFilename: 'Harvard_Resume_Template.docx',
    latexSource: `%-------------------------
% Harvard University Standard ATS Template
%-------------------------
\\documentclass[letterpaper,11pt]{article}
\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}

\\begin{document}
\\begin{center}
    \\textbf{\\Huge Firstname Lastname} \\\\ \\vspace{2pt}
    \\small Home or Campus Street Address $\\bullet$ City, State Zip $\\bullet$ youremail@college.harvard.edu $\\bullet$ phone number
\\end{center}

\\section*{Education}
  \\textbf{Harvard University} \\hfill Cambridge, MA\\\\
  Degree, Concentration. GPA [Note: GPA is Optional] \\hfill Graduation Date\\\\
  Thesis [Note: Optional]\\\\
  Relevant Coursework: [Note: Optional. Awards and honors can also be listed here.]\\\\
  \\vspace{2pt}
  \\textbf{Study Abroad [Note: If Applicable]} \\hfill City, Country\\\\
  Study abroad coursework in . \\hfill Month Year -- Month Year

\\section*{Experience}
  \\textbf{Organization Name} \\hfill City, State\\\\
  \\textit{Role Title} \\hfill Month Year -- Month Year\\\\
  \\begin{itemize}[leftmargin=0.15in, label={$\\bullet$}]
    \\item Accomplished [X] as measured by [Y] by doing [Z] with clear quantitative impact.
    \\item Spearheaded strategic initiatives coordinating cross-functional teams to deliver key results.
  \\end{itemize}
\\end{document}`,
    previewData: {
      name: 'Firstname Lastname',
      contact: ['Campus Street Address', 'City, State Zip', 'youremail@college.harvard.edu', 'phone number'],
      education: [
        {
          school: 'Harvard University',
          degree: 'Degree, Concentration. GPA [Optional] | Cambridge, MA',
          dates: 'Graduation Date'
        },
        {
          school: 'Study Abroad [If Applicable]',
          degree: 'Study abroad coursework in Economics & CS',
          dates: 'City, Country'
        }
      ],
      experience: [
        {
          title: 'Analyst / Software Engineer',
          company: 'Leading Technology / Finance Firm',
          dates: 'Month Year – Month Year',
          location: 'New York, NY',
          bullets: [
            'Accomplished [X] as measured by [Y] by doing [Z] with quantifiable commercial results',
            'Spearheaded key automation projects reducing manual latency and improving operational accuracy'
          ]
        }
      ],
      skills: [
        { category: 'Technical Skills', items: 'Python, SQL, R, Advanced Excel, Financial Modeling, Git' },
        { category: 'Certifications & Languages', items: 'Chartered Financial Analyst (CFA Level 1), English, French' }
      ]
    }
  },

  {
    id: 'deedy-resume',
    name: 'Deedy Resume Template',
    title: 'Deedy Resume Template',
    description: 'High-density 2-column LaTeX template created by Debarghya Das, popular for software engineers with deep project and publication portfolios.',
    atsScore: 94,
    type: 'LaTeX / Overleaf',
    overleafUrl: 'https://www.overleaf.com/latex/templates/deedy-cv/bjryvfsjdyxz',
    downloadFilename: 'Deedy_Resume_Template.tex',
    latexSource: `%-------------------------
% Deedy CV / Resume
% Author: Debarghya Das
%-------------------------
\\documentclass[]{deedy-resume-openfont}
\\usepackage{fancyhdr}
\\pagestyle{fancy}
\\fancyhf{}
\\begin{document}
\\namesection{John}{Doe}{ \\urlstyle{same}\\href{http://johndoe.com}{johndoe.com} | john.doe@example.com | 111.111.1111}

\\begin{minipage}[t]{0.33\\textwidth}
\\section{Education} 
\\subsection{My University}
\\descript{BS in Computer Science}
\\location{Expected Dec 2019 | Somewhere, XX}
Cum. GPA: 4.0 / 4.0

\\section{Skills}
\\subsection{Programming}
\\location{Over 5000 lines:}
Java \\textbullet{} Python \\textbullet{} C++ \\\\
\\location{Over 1000 lines:}
JavaScript \\textbullet{} SQL \\textbullet{} React
\\end{minipage}
\\hfill
\\begin{minipage}[t]{0.66\\textwidth}
\\section{Experience}
\\runsubsection{Company A}
\\descript{| Advanced Development Intern }
\\location{May 2018 -- Aug 2018 | Somewhere, XX}
\\begin{tightemize}
\\item Developed a cloud-based solution to automate network telemetry on AWS with Python.
\\item Collaborated with senior engineers to deploy production microservices.
\\end{tightemize}
\\end{minipage}
\\end{document}`,
    previewData: {
      name: 'John Doe',
      contact: ['john.doe@example.com', '111.111.1111', 'johndoe.com'],
      education: [
        {
          school: 'My University',
          degree: 'Bachelor of Science in Computer Science & Statistics',
          dates: 'Expected Dec 2019'
        }
      ],
      experience: [
        {
          title: 'Advanced Development Intern',
          company: 'COMPANY A',
          dates: 'May 2018 – Aug 2018',
          bullets: [
            'Developed a cloud-based solution to automate and enhance engineering telemetry using AWS and Python',
            'Worked with distributed teams to collect and visualize metrics in real time with low latency'
          ]
        },
        {
          title: 'Software Engineer Intern',
          company: 'COMPANY B',
          dates: 'Feb 2017 – Nov 2017',
          bullets: [
            'Coordinated with multiple departments to lead product evaluation resulting in key performance improvements'
          ]
        }
      ],
      skills: [
        { category: 'Languages', items: 'Python, C/C++, Java, JavaScript, PHP, SQL' },
        { category: 'Tools', items: 'AWS, Docker, Git, Linux, Kubernetes, React' }
      ]
    }
  }
];
