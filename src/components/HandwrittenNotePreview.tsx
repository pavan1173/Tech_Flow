import React from 'react';
import { NoteItem } from '../data/coolNotesData';

interface HandwrittenNotePreviewProps {
  note: NoteItem;
}

export const HandwrittenNotePreview: React.FC<HandwrittenNotePreviewProps> = ({ note }) => {
  const isSpiral = ['top-50-backend-interview-questions', 'top-50-system-design-interview-questions', 'aws-mastery-notes', 'kubernetes-notes', 'docker-notes', 'operating-systems-notes', 'dbms-notes', 'java-placement-guide', 'python-revision-notes', 'cpp-stl-notes', 'git-github-notes', 'nextjs-app-router-notes', 'spring-boot-microservices-notes', 'linux-command-mastery', 'cybersecurity-owasp-notes', 'dsa-patterns-cheatsheet', 'genai-llm-system-guide', 'low-level-design-solid-notes', 'hr-behavioral-guide'].includes(note.id);
  const isPunched = ['reactjs-guide', 'nodejs-guide'].includes(note.id);

  return (
    <div className="relative w-full h-[220px] sm:h-[235px] bg-[#fcf9f2] text-zinc-900 select-none overflow-hidden rounded-t-2xl border-b border-zinc-300 shadow-inner flex flex-col justify-between">
      {/* Notebook Ruled Lines Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage: 'linear-gradient(#9ca3af 1px, transparent 1px)',
          backgroundSize: '100% 20px',
          backgroundPosition: '0 16px',
        }}
      />

      {/* Red Left Margin Line */}
      <div className={`absolute top-0 bottom-0 w-[1.5px] bg-rose-400/70 pointer-events-none z-10 ${isSpiral ? 'left-10' : 'left-7'}`} />

      {/* Spiral Binding Rings on Left (matching screenshot) */}
      {isSpiral && (
        <div className="absolute top-0 bottom-0 left-0 w-8 flex flex-col justify-between py-2.5 items-center z-20 pointer-events-none">
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="w-5 h-2.5 rounded-full border-2 border-zinc-800 bg-zinc-900 shadow-xs" />
              <div className="w-2.5 h-1.5 rounded-r-full bg-zinc-400/80 -ml-1 border-r border-zinc-600" />
            </div>
          ))}
        </div>
      )}

      {/* Binder Punched Hole (for React and Node notes matching screenshot) */}
      {isPunched && (
        <div className="absolute top-8 left-2 w-3.5 h-3.5 rounded-full bg-zinc-800 border border-zinc-900 shadow-inner z-20" />
      )}

      {/* Top Right Category Pill on Paper */}
      <div className="absolute top-3 right-3 z-30">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-tight bg-zinc-800/85 text-white backdrop-blur-xs shadow-xs border border-zinc-700/50">
          {note.category}
        </span>
      </div>

      {/* ========================================================================= */}
      {/* 1. SQL MASTER NOTES (MATCHING SCREENSHOT EXACTLY) */}
      {/* ========================================================================= */}
      {note.id === 'sql-mastery-notes' && (
        <div className="relative z-10 pl-9 pr-3 pt-2 font-sans space-y-1">
          <div className="text-center pt-0.5">
            <h3 className="text-sm font-black text-blue-900 tracking-wider inline-flex items-center gap-1">
              <span>✨</span> SQL MASTER NOTES <span>✨</span>
            </h3>
            <div className="text-[10px] font-semibold text-blue-700 -mt-0.5">~ What is SQL? ~</div>
          </div>

          <div className="text-[9.5px] leading-tight text-zinc-800 font-medium space-y-0.5">
            <div className="font-bold text-blue-950">① SQL = Structured Query Language.</div>
            <div className="pl-3">• Used to communicate with databases.</div>
            <div className="pl-3">• Create, read, update and delete data.</div>
            <div className="font-bold text-blue-950">② Database = organized collection of data.</div>
            <div className="font-bold text-blue-950">③ DBMS = software used to manage databases.</div>
          </div>

          <div className="pt-1 flex items-end justify-between text-[8px] text-zinc-700">
            <div className="leading-tight">
              <span className="font-bold text-blue-900">Examples of DBMS:</span>
              <div>• MySQL · Oracle · PostgreSQL</div>
            </div>
            {/* Database Cylinder Graphic */}
            <div className="w-16 h-11 border border-zinc-700 rounded-lg bg-white/90 p-1 flex flex-col items-center justify-center text-[7.5px] font-bold text-center leading-none shadow-xs text-blue-950">
              <div className="w-10 h-2 border-b border-zinc-600 rounded-full mb-0.5" />
              <span>DATABASE</span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. TOP 50 BACKEND INTERVIEW QUESTIONS (MATCHING SCREENSHOT EXACTLY) */}
      {/* ========================================================================= */}
      {note.id === 'top-50-backend-interview-questions' && (
        <div className="relative z-10 pl-12 pr-3 pt-2 font-sans space-y-1">
          <div className="flex justify-between items-start text-[9px] text-zinc-500 font-mono">
            <span>@ codewithZ</span>
            <span className="underline font-bold text-zinc-700">Page 1</span>
          </div>

          <div className="text-center pt-0.5">
            <h3 className="text-xs font-black text-emerald-900 tracking-tight leading-tight">
              ✨ TOP 50 BACKEND INTERVIEW QUESTIONS ✨
            </h3>
            <div className="text-[9px] font-bold text-emerald-800">
              ☆ Page 1 - Backend Fundamentals (Q1 - Q10) ☆
            </div>
          </div>

          <div className="text-[9px] leading-tight text-zinc-800 space-y-0.5">
            <div className="font-bold text-emerald-950">1. What is a REST API?</div>
            <p className="text-[8.5px] text-zinc-700 pl-1 leading-tight line-clamp-2">
              Ans: REST (Representational State Transfer) is an architectural style using HTTP methods for CRUD operations.
            </p>
          </div>

          <div className="pt-1 grid grid-cols-2 gap-1 text-[7.5px]">
            <div className="bg-white/85 p-1 rounded border border-zinc-300 font-mono leading-tight">
              <span className="font-bold text-emerald-900 block">CRUD with REST</span>
              <div>GET → Read | POST → Create</div>
              <div>PUT → Update | DEL → Delete</div>
            </div>
            <div className="bg-white/85 p-1 rounded border border-zinc-300 font-mono leading-tight">
              <span className="font-bold text-emerald-900 block">REST vs SOAP</span>
              <div>HTTP / JSON vs XML</div>
              <div>Fast &amp; Stateless</div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. TOP 50 SYSTEM DESIGN INTERVIEW QUESTIONS (MATCHING SCREENSHOT EXACTLY) */}
      {/* ========================================================================= */}
      {note.id === 'top-50-system-design-interview-questions' && (
        <div className="relative z-10 pl-12 pr-3 pt-2 font-sans space-y-1">
          <div className="flex justify-between items-start text-[9px] text-zinc-500 font-mono">
            <span className="text-rose-900 font-bold">☆ Top 50 System Design ☆</span>
            <span className="bg-zinc-200 px-1 rounded text-[8px]">Page 1 (Q 1 - 5)</span>
          </div>

          <div className="text-[9px] leading-tight text-zinc-800 space-y-0.5">
            <div className="font-bold text-blue-950">1. What is Distributed System?</div>
            <div className="text-[8px] pl-1 text-zinc-700 line-clamp-2 leading-tight">
              • A collection of independent computers appearing as a single system. Improves scalability, availability &amp; fault tolerance.
            </div>
            <div className="font-bold text-blue-950 pt-0.5">2. Vertical vs Horizontal Scaling</div>
          </div>

          <div className="bg-white/90 p-1 rounded border border-zinc-300 text-[7.5px] font-mono grid grid-cols-2 gap-1 leading-tight">
            <div>
              <span className="font-bold text-blue-900">Vertical (Scale Up)</span>
              <div>• Add CPU/RAM to 1 server</div>
              <div>• Limited max capacity</div>
            </div>
            <div>
              <span className="font-bold text-blue-900">Horizontal (Scale Out)</span>
              <div>• Add more server nodes</div>
              <div>• Unlimited scalability</div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. NODEJS GUIDE (MATCHING SCREENSHOT EXACTLY) */}
      {/* ========================================================================= */}
      {note.id === 'nodejs-guide' && (
        <div className="relative z-10 pl-9 pr-3 pt-2 font-sans space-y-1">
          <div className="text-center">
            <h3 className="text-base font-black text-blue-800 tracking-tight">Node.js</h3>
            <div className="text-[9px] font-semibold text-zinc-600 -mt-1">Handwritten Notes</div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[8.5px] text-zinc-800 leading-tight">
            <div>
              <div className="font-bold text-rose-900">1. What is Node.js?</div>
              <div className="text-[7.5px] text-zinc-700 leading-tight">
                • Cross-platform JS runtime outside browser built on Chrome V8 engine.
              </div>
              <div className="font-bold text-rose-900 pt-0.5">3. Features:</div>
              <div className="text-[7.5px] text-zinc-700">✓ Event-driven ✓ Non-blocking I/O</div>
            </div>
            <div>
              <div className="font-bold text-rose-900">2. Why Node.js?</div>
              <div className="text-[7.5px] text-zinc-700 leading-tight">
                • Handles multiple requests on single thread with Event Loop without thread overhead.
              </div>
              <div className="font-bold text-rose-900 pt-0.5">5. Where Used?</div>
              <div className="text-[7.5px] text-zinc-700">• APIs, Real-time Chat</div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. REACTJS GUIDE (MATCHING SCREENSHOT EXACTLY) */}
      {/* ========================================================================= */}
      {note.id === 'reactjs-guide' && (
        <div className="relative z-10 pl-9 pr-3 pt-2 font-sans space-y-1">
          <div className="text-center">
            <h3 className="text-sm font-black text-red-600 tracking-wider">REACT.JS HANDBOOK</h3>
            <div className="text-[9px] font-bold text-red-800 -mt-0.5">1. React Fundamentals &amp; Project Setup</div>
          </div>

          <div className="grid grid-cols-12 gap-1.5 text-[8.5px] text-zinc-800">
            <div className="col-span-7 space-y-0.5">
              <div className="font-bold text-blue-950">1.1 What is React?</div>
              <p className="text-[7.5px] text-zinc-700 leading-tight">
                • JS library for building component-based UIs maintained by Meta.
              </p>
              <div className="font-bold text-blue-950">1.2 Why React?</div>
              <p className="text-[7.5px] text-zinc-700 leading-tight">
                • Virtual DOM diffing, Reusable UI, Unidirectional data flow.
              </p>
            </div>
            <div className="col-span-5 bg-white/90 p-1 rounded border border-zinc-300 font-mono text-[7px] leading-tight">
              <span className="font-bold text-zinc-900 block">my-app/</span>
              <div>├── public/</div>
              <div>├── src/</div>
              <div>│   ├── components/</div>
              <div>│   └── App.jsx</div>
              <div>└── package.json</div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. MACHINE LEARNING NOTES (MATCHING SCREENSHOT EXACTLY) */}
      {/* ========================================================================= */}
      {note.id === 'machine-learning-notes' && (
        <div className="relative z-10 pl-9 pr-3 pt-3 font-sans space-y-2">
          <div className="text-center">
            <div className="inline-block border-b-2 border-blue-600 pb-0.5">
              <h3 className="text-sm font-extrabold text-blue-900">What is Machine Learning ?</h3>
            </div>
          </div>

          <div className="text-[9px] sm:text-[9.5px] text-zinc-800 leading-snug space-y-1">
            <p>
              <span className="font-bold text-rose-800">Machine Learning (ML)</span> is a branch of Artificial Intelligence (AI) that allows computers to learn from data and make <span className="underline">decisions or predictions</span> without being explicitly programmed.
            </p>
            <p className="text-[8px] text-zinc-600 italic">
              Instead of writing step-by-step rules, we give the computer data &amp; examples to find latent patterns.
            </p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. COMPUTER NETWORKS (MATCHING SCREENSHOT EXACTLY) */}
      {/* ========================================================================= */}
      {note.id === 'computer-networks-notes' && (
        <div className="relative z-10 pl-9 pr-3 pt-2 font-sans space-y-1">
          <div className="text-center">
            <h3 className="text-sm font-black text-red-600 tracking-wider">COMPUTER NETWORKS</h3>
            <div className="text-[9px] font-semibold text-zinc-600 -mt-0.5">— Page 1 —</div>
          </div>

          <div className="text-[9px] text-zinc-800 space-y-0.5">
            <div className="font-bold text-blue-950">1. What is Computer Network?</div>
            <p className="text-[8px] text-zinc-700 leading-tight">
              A computer network is a collection of interconnected devices that can share resources &amp; communicate.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-center gap-3 text-[8.5px] font-mono">
            <div className="border border-zinc-700 px-2 py-1 rounded bg-white font-bold shadow-xs">Laptop</div>
            <span className="text-blue-600 font-bold">───[TCP/IP]───</span>
            <div className="border border-zinc-700 px-2 py-1 rounded bg-white font-bold shadow-xs">Mobile</div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 8. AWS AMAZON WEB SERVICES (MATCHING SCREENSHOT EXACTLY) */}
      {/* ========================================================================= */}
      {note.id === 'aws-mastery-notes' && (
        <div className="relative z-10 pl-12 pr-3 pt-2 font-sans space-y-1">
          <div className="flex justify-between items-start">
            <span className="text-[9px] font-bold text-amber-800">Amazon Web Services</span>
            <span className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center text-[8px] font-bold">1</span>
          </div>

          <div className="text-center pt-1">
            <h3 className="text-lg font-black text-amber-950 tracking-wider">AWS</h3>
            <div className="text-[9px] font-bold text-amber-900 -mt-1">Amazon Web Services</div>
          </div>

          <p className="text-[8.5px] text-zinc-700 text-center leading-tight pt-1">
            World's most popular cloud platform by Amazon providing scalable on-demand compute, storage &amp; databases.
          </p>

          <div className="flex justify-center pt-1">
            <span className="px-2 py-0.5 rounded bg-amber-200/80 border border-amber-400 text-amber-950 font-mono text-[8px] font-bold">
              EC2 · S3 · Lambda · RDS
            </span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 9. KUBERNETES (MATCHING SCREENSHOT EXACTLY) */}
      {/* ========================================================================= */}
      {note.id === 'kubernetes-notes' && (
        <div className="relative z-10 pl-12 pr-3 pt-2 font-sans space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-sky-950 underline">1. Kubernetes</h3>
            <div className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px] font-black">
              ☸
            </div>
          </div>

          <div className="text-[9px] text-zinc-800 space-y-1 pt-1">
            <div className="font-bold text-sky-900">* What is Kubernetes?</div>
            <p className="text-[8px] text-zinc-700 leading-tight">
              Open-source container orchestration engine for automating deployment, scaling, and management of containerized apps.
            </p>
          </div>

          <div className="bg-white/90 p-1.5 rounded border border-sky-300 text-[7.5px] font-mono grid grid-cols-2 gap-1 mt-1">
            <div>
              <span className="font-bold text-sky-900">Control Plane</span>
              <div>API Server, etcd</div>
            </div>
            <div>
              <span className="font-bold text-sky-900">Worker Node</span>
              <div>Kubelet, Pods, Kube-Proxy</div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ALL OTHER NOTE CARDS (BEAUTIFUL CONSISTENT HANDWRITTEN STYLING) */}
      {/* ========================================================================= */}
      {![
        'sql-mastery-notes',
        'top-50-backend-interview-questions',
        'top-50-system-design-interview-questions',
        'nodejs-guide',
        'reactjs-guide',
        'machine-learning-notes',
        'computer-networks-notes',
        'aws-mastery-notes',
        'kubernetes-notes'
      ].includes(note.id) && (
        <div className={`relative z-10 pr-3 pt-2 font-sans space-y-1.5 ${isSpiral ? 'pl-12' : 'pl-9'}`}>
          <div className="text-center pt-0.5">
            <h3 className="text-xs sm:text-sm font-black text-zinc-900 tracking-tight border-b border-dashed border-zinc-400 pb-0.5 inline-block">
              {note.previewHeader || note.title}
            </h3>
          </div>

          <div className="text-[9px] text-zinc-800 leading-snug space-y-1">
            {(note.previewPoints || []).slice(0, 3).map((pt, i) => (
              <p key={i} className="line-clamp-2">
                {pt}
              </p>
            ))}
          </div>

          {note.previewSubtext && (
            <div className="pt-1 text-[8px] text-zinc-600 font-mono italic border-t border-zinc-300 line-clamp-1">
              {note.previewSubtext}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
