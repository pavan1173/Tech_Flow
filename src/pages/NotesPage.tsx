import React, { useState, useMemo } from 'react';
import { notesData } from '../data/common';
import { FileText, Search, Download, BookOpen, ExternalLink, X, Eye } from 'lucide-react';

interface NotesPageProps {
  navigate: (to: string) => void;
}

export const NotesPage: React.FC<NotesPageProps> = () => {
  const allNotes = notesData?.allNotes || notesData || [];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState<any | null>(null);

  const filteredNotes = useMemo(() => {
    return allNotes.filter((note: any) => {
      const title = (note.title || note.name || '').toLowerCase();
      const cat = (note.category || '').toLowerCase();
      const desc = (note.description || '').toLowerCase();
      return title.includes(searchQuery.toLowerCase()) || cat.includes(searchQuery.toLowerCase()) || desc.includes(searchQuery.toLowerCase());
    });
  }, [allNotes, searchQuery]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 font-lexend">
      {/* Header */}
      <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff] mb-2">
          <FileText className="w-3.5 h-3.5" />
          Last-Minute Interview Revision
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
          Free Study Notes &amp; PDF Resources (2026-27)
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          Concise, high-yield computer science notes covering Computer Networks, DBMS, Operating Systems, OOPs, System Design, and language cheat sheets — read directly on TeachFlow.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search 26+ CS notes (e.g. Operating Systems, CN, Java)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6C47FF]"
        />
      </div>

      {/* Grid of Notes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.map((note: any, idx: number) => (
          <div
            key={note.title || idx}
            className="p-6 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#6C47FF] dark:text-[#9f85ff]">
                  {note.category || 'Core CS'}
                </span>
                {note.pages && (
                  <span className="text-xs text-zinc-500 font-medium">
                    {note.pages} Pages
                  </span>
                )}
              </div>

              <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                {note.title || note.name}
              </h2>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {note.description || 'High-yield placement notes with architecture diagrams, formulas, and frequently asked interview definitions.'}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between">
              <button
                onClick={() => setSelectedNote(note)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#6C47FF] hover:bg-[#5b37ea] text-white text-xs font-semibold transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Read Note</span>
              </button>

              {note.pdfUrl && (
                <a
                  href={note.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white font-medium"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Note Reader Modal */}
      {selectedNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl relative text-zinc-900 dark:text-white max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedNote(null)}
              className="absolute right-5 top-5 text-zinc-400 hover:text-zinc-600 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#6C47FF]">
              {selectedNote.category || 'TeachFlow Study Note'}
            </span>
            <h3 className="text-2xl font-bold font-lexend mt-1 mb-4">
              {selectedNote.title || selectedNote.name}
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-200 dark:border-zinc-800 pt-4">
              <p>
                {selectedNote.description || 'Comprehensive revision sheet containing summary points, definitions, interview questions, and key takeaways.'}
              </p>

              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 space-y-2">
                <h4 className="font-bold text-xs uppercase text-zinc-800 dark:text-zinc-200">
                  Key Topics Covered in This Note:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                  <li>Fundamental architecture, OSI / TCP-IP models, and protocol handshakes</li>
                  <li>ACID properties, transactions, normalization and database indexing</li>
                  <li>Process synchronization, threads, virtual memory, and deadlocks</li>
                  <li>Common interview trick questions and quick revision tables</li>
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="text-xs text-emerald-500 font-semibold">
                  ✓ Verified by TeachFlow Technical Mentors
                </span>
                <button
                  onClick={() => setSelectedNote(null)}
                  className="px-4 py-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-xs font-semibold"
                >
                  Close Reader
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
