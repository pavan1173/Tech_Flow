import React, { useState, useMemo, useRef, useEffect } from 'react';
import { coolNotesList, NoteItem } from '../data/coolNotesData';
import { HandwrittenNotePreview } from '../components/HandwrittenNotePreview';
import {
  FileText,
  Search,
  ChevronRight,
  ChevronDown,
  Calendar,
  Download,
  X,
  BookOpen,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Printer,
  ChevronLeft,
  Share2,
  Sparkles,
  Check
} from 'lucide-react';

interface NotesPageProps {
  navigate: (to: string) => void;
}

export const NotesPage: React.FC<NotesPageProps> = ({ navigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNote, setActiveNote] = useState<NoteItem | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  // Distinct categories
  const allCategories = useMemo(() => {
    const set = new Set<string>();
    coolNotesList.forEach((n) => set.add(n.category));
    return ['All Categories', ...Array.from(set)];
  }, []);

  // Filter notes
  const filteredNotes = useMemo(() => {
    return coolNotesList.filter((note) => {
      // Category match
      if (selectedCategory !== 'All Categories' && note.category !== selectedCategory) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const titleMatch = note.title.toLowerCase().includes(query);
        const catMatch = note.category.toLowerCase().includes(query);
        const subMatch = (note.previewSubtext || '').toLowerCase().includes(query);
        if (!titleMatch && !catMatch && !subMatch) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const openNoteModal = (note: NoteItem) => {
    setActiveNote(note);
    setCurrentPage(1);
    setZoomLevel(100);
  };

  const closeNoteModal = () => {
    setActiveNote(null);
  };

  const handleDownload = (note: NoteItem) => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
    // Trigger download of text content as sample PDF / MD
    const element = document.createElement('a');
    const file = new Blob(
      [
        `# ${note.title}\nCategory: ${note.category}\nDate: ${note.date}\nAuthor: ${note.author || 'TeachFlow'}\n\n` +
          (note.contentPages || [])
            .map(
              (p) =>
                `## Page ${p.pageNumber}: ${p.title}\n` +
                p.sections.map((s) => `### ${s.heading || ''}\n${s.body}\n${s.bulletPoints ? s.bulletPoints.join('\n- ') : ''}`).join('\n\n')
            )
            .join('\n\n---\n\n')
      ],
      { type: 'text/markdown' }
    );
    element.href = URL.createObjectURL(file);
    element.download = `${note.id}-study-notes.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-6 max-w-7xl mx-auto">
      {/* Breadcrumb matching screenshot */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-400">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-white transition-colors"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
        <span className="text-white font-medium">Cool Notes</span>
      </nav>

      {/* Header Section matching screenshot */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300">
            <FileText className="w-4 h-4" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Notes
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 font-normal">
          Curated PDF study notes — click any card to open the PDF in-page.
        </p>
      </div>

      {/* Filter & Counter Bar matching screenshot */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div className="flex items-center gap-4">
          {/* Category Dropdown Button matching screenshot */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0c1017] border border-[#1b2230] text-xs font-semibold text-white hover:border-zinc-700 transition-all cursor-pointer shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>{selectedCategory}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-1.5 w-60 max-h-72 overflow-y-auto bg-[#0c1017] border border-[#1b2230] rounded-xl shadow-2xl p-1.5 z-50 divide-y divide-[#171e2c]">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                      selectedCategory === cat
                        ? 'bg-blue-600/20 text-blue-400 font-bold'
                        : 'text-zinc-300 hover:bg-zinc-800/80 hover:text-white'
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && <Check className="w-3 h-3 text-blue-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Note count matching screenshot */}
          <div className="text-xs text-zinc-400 font-medium">
            <span className="text-white font-bold">{filteredNotes.length}</span> notes found
          </div>
        </div>

        {/* Quick Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search notes by keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#0c1017] border border-[#1b2230] text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Grid of Notes matching screenshot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-2">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            onClick={() => openNoteModal(note)}
            className="group rounded-2xl bg-[#0c1017] border border-[#1b2230] hover:border-zinc-700/80 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 cursor-pointer select-none"
          >
            {/* Top Ruled Paper Handwritten Preview */}
            <HandwrittenNotePreview note={note} />

            {/* Bottom Details Footer */}
            <div className="p-4 sm:p-5 space-y-2">
              <h3 className="font-extrabold text-sm sm:text-base text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                {note.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                <span>{note.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* IN-PAGE PDF READER MODAL */}
      {/* ========================================================================= */}
      {activeNote && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={closeNoteModal}
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] bg-[#0c1017] border border-[#1b2230] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="px-5 py-3.5 bg-[#090d14] border-b border-[#1b2230] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-sm sm:text-base font-extrabold text-white truncate">
                    {activeNote.title}
                  </h2>
                  <p className="text-[11px] text-zinc-400">
                    Category: {activeNote.category} · {activeNote.pages} Total Pages · {activeNote.date}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Download Button */}
                <button
                  onClick={() => handleDownload(activeNote)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">
                    {downloadSuccess ? 'Downloaded!' : 'Download Note'}
                  </span>
                </button>

                {/* Close Button */}
                <button
                  onClick={closeNoteModal}
                  className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Body Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#07090e] flex justify-center">
              <div
                className="w-full max-w-3xl bg-white text-zinc-900 rounded-xl shadow-2xl p-6 sm:p-10 space-y-6 transition-all font-sans"
                style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
              >
                {/* Note Document Header */}
                <div className="border-b-2 border-zinc-900 pb-4 flex items-start justify-between">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-zinc-900 text-white mb-2 inline-block">
                      {activeNote.category}
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-black text-zinc-900">
                      {activeNote.title}
                    </h1>
                    <p className="text-xs text-zinc-600 font-mono mt-1">
                      Author: {activeNote.author || 'TeachFlow Engineering'} · Published: {activeNote.date}
                    </p>
                  </div>
                </div>

                {/* Note Content Pages */}
                {activeNote.contentPages?.map((page) => (
                  <div key={page.pageNumber} className="space-y-4 pt-2">
                    <div className="flex items-center justify-between border-b border-zinc-300 pb-1">
                      <h3 className="font-bold text-sm text-blue-900 uppercase tracking-wide">
                        {page.title}
                      </h3>
                      <span className="text-[10px] text-zinc-500 font-mono">
                        Page {page.pageNumber} of {activeNote.contentPages.length}
                      </span>
                    </div>

                    <div className="space-y-4 text-xs sm:text-sm text-zinc-800 leading-relaxed">
                      {page.sections.map((section, sIdx) => (
                        <div key={sIdx} className="space-y-2">
                          {section.heading && (
                            <h4 className="font-extrabold text-sm text-zinc-900">
                              {section.heading}
                            </h4>
                          )}
                          <p className="text-zinc-700 whitespace-pre-line">{section.body}</p>

                          {section.bulletPoints && (
                            <ul className="list-disc list-inside space-y-1 pl-2 text-zinc-700">
                              {section.bulletPoints.map((bp, bIdx) => (
                                <li key={bIdx}>{bp}</li>
                              ))}
                            </ul>
                          )}

                          {section.codeOrDiagram && (
                            <pre className="p-3.5 rounded-lg bg-zinc-950 text-emerald-400 font-mono text-xs overflow-x-auto border border-zinc-800">
                              <code>{section.codeOrDiagram}</code>
                            </pre>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Footer on Document */}
                <div className="pt-6 border-t border-zinc-200 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>TeachFlow Curated Placement Notes</span>
                  <span>www.teachflow.in</span>
                </div>
              </div>
            </div>

            {/* Bottom Reader Navigation Controls */}
            <div className="px-5 py-3 bg-[#090d14] border-t border-[#1b2230] flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel((prev) => Math.max(prev - 10, 70))}
                  className="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono text-zinc-300 font-bold">{zoomLevel}%</span>
                <button
                  onClick={() => setZoomLevel((prev) => Math.min(prev + 10, 150))}
                  className="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-[11px] text-zinc-400 font-medium">
                Showing full high-yield study sheet
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
