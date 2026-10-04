import React, { useState, useMemo, useEffect } from 'react';
import { coolNotesList, NoteItem } from '../data/coolNotesData';
import { useAuth } from '../context/AuthContext';
import { AuthGate } from '../components/AuthGate';
import {
  FileText,
  Search,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Calendar,
  ExternalLink,
  Download,
  X,
  Tag,
  Loader2,
  Sparkles,
  BookOpen,
  Share2,
  Check
} from 'lucide-react';

interface NotesPageProps {
  navigate: (to: string) => void;
}

const ITEMS_PER_PAGE = 12;

export const NotesPage: React.FC<NotesPageProps> = ({ navigate }) => {
  const { isAuthenticated, openAuthModal } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeNote, setActiveNote] = useState<NoteItem | null>(null);
  const [pdfLoading, setPdfLoading] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to top of list on page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  // Distinct categories sorted with common first
  const allCategories = useMemo(() => {
    const set = new Set<string>();
    coolNotesList.forEach((n) => set.add(n.category));
    return ['All', ...Array.from(set)];
  }, []);

  // Filter notes based on category and search query
  const filteredNotes = useMemo(() => {
    return coolNotesList.filter((note) => {
      // Category filter
      if (selectedCategory !== 'All' && note.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const titleMatch = note.title.toLowerCase().includes(query);
        const catMatch = note.category.toLowerCase().includes(query);
        const descMatch = (note.description || '').toLowerCase().includes(query);
        if (!titleMatch && !catMatch && !descMatch) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  // Reset page to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredNotes.length / ITEMS_PER_PAGE) || 1;
  const paginatedNotes = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredNotes.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredNotes, currentPage]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  const openNoteModal = (note: NoteItem) => {
    setActiveNote(note);
    setPdfLoading(true);
  };

  const closeNoteModal = () => {
    setActiveNote(null);
    setPdfLoading(false);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeNote) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeNote]);

  const copyShareLink = (note: NoteItem) => {
    navigator.clipboard.writeText(note.file_url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-6 max-w-7xl mx-auto">
      {/* 1. Breadcrumbs matching hynts.in */}
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

      {/* 2. Header Section matching hynts.in */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300">
            <FileText className="w-4 h-4" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Notes
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 font-normal">
          Curated PDF study notes — click any card to open the PDF in-page.
        </p>
      </div>

      {/* 3. Controls & Filter Bar matching hynts.in */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Category Dropdown Select */}
          <div className="relative inline-flex items-center group">
            <FileText className="w-4 h-4 absolute left-3 text-zinc-400 pointer-events-none z-10" />
            <select
              id="notes-category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none pl-9 pr-10 py-2.5 text-xs sm:text-sm font-lexend font-medium bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 hover:border-zinc-700 transition-all cursor-pointer min-w-[200px]"
              aria-label="Filter notes by category"
            >
              <option value="All">All Categories</option>
              {allCategories
                .filter((c) => c !== 'All')
                .map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-3 text-zinc-400 pointer-events-none" />
          </div>

          {/* Notes count indicator */}
          <p className="text-xs text-zinc-400 font-lexend">
            <span className="font-semibold text-white">{filteredNotes.length}</span> note
            {filteredNotes.length === 1 ? '' : 's'} found
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search notes by keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230] text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 4. Grid of Notes Cards (matching hynts.in exactly) */}
      {paginatedNotes.length === 0 ? (
        <div className="rounded-2xl border border-zinc-200 dark:border-[#1b2230] bg-white dark:bg-[#0c1017] p-12 text-center space-y-3">
          <FileText className="w-10 h-10 text-zinc-600 mx-auto" />
          <h3 className="text-base font-bold text-white">No notes found</h3>
          <p className="text-xs text-zinc-400 max-w-sm mx-auto">
            Try adjusting your search query or selecting &quot;All Categories&quot; to see all 26 available notes.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1.5"
          >
            Reset Filters
          </button>
        </div>
      ) : !isAuthenticated ? (
        <AuthGate
          totalCount={coolNotesList.length}
          featureName="handwritten CS notes"
          title="Sign in to access CS Revision Notes"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 pt-1">
            {paginatedNotes.slice(0, 6).map((note) => (
              <div
                key={note.id}
                className="group relative w-full text-left rounded-xl overflow-hidden border border-zinc-200 dark:border-[#1b2230] h-[286px] bg-white dark:bg-[#0c1017]"
              >
                <img
                  src={note.thumbnail_url}
                  alt={note.title}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 z-10 h-[65%] bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 z-20 p-4 flex flex-col gap-1.5">
                  <h3 className="font-semibold font-lexend text-sm text-white leading-snug line-clamp-2">
                    {note.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </AuthGate>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 pt-1">
          {paginatedNotes.map((note) => (
            <button
              key={note.id}
              onClick={() => openNoteModal(note)}
              className="group relative w-full text-left rounded-xl overflow-hidden border border-zinc-200 dark:border-[#1b2230] hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer h-[286px] bg-white dark:bg-[#0c1017]"
              aria-label={`Open note: ${note.title}`}
            >
              {/* Thumbnail Image Cover */}
              <img
                src={note.thumbnail_url}
                alt={`Preview of ${note.title}`}
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                onError={(e) => {
                  // Fallback to CDN thumbnail if local path is unavailable
                  if (e.currentTarget.src !== note.cdn_thumbnail_url) {
                    e.currentTarget.src = note.cdn_thumbnail_url;
                  }
                }}
              />

              {/* Category Pill Tag */}
              <div className="absolute top-3 right-3 z-20">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold font-lexend bg-black/60 backdrop-blur-md text-white border border-white/20 truncate max-w-[150px]">
                  <Tag className="w-2.5 h-2.5 text-zinc-300 shrink-0" />
                  <span className="truncate">{note.category}</span>
                </span>
              </div>

              {/* Bottom Gradient Fade */}
              <div className="absolute inset-x-0 bottom-0 z-10 h-[65%] bg-gradient-to-t from-black/95 via-black/70 to-transparent" />

              {/* Card Bottom Details */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-4 flex flex-col gap-1.5">
                <h3 className="font-semibold font-lexend text-sm text-white leading-snug line-clamp-2 group-hover:text-blue-400 transition-colors duration-200">
                  {note.title}
                </h3>
                <div className="flex items-center gap-1.5 pt-1.5 border-t border-white/10 mt-0.5">
                  <Calendar className="w-3 h-3 text-white/50" />
                  <span className="text-[10px] text-white/50 font-lexend">{note.date}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* 5. Pagination Bar (matching hynts.in screenshot: < Previous 1 2 3 Next >) */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1 pt-6 pb-4">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold font-lexend transition-all cursor-pointer ${
              currentPage === 1
                ? 'opacity-40 cursor-not-allowed text-zinc-500'
                : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          {/* Page Number Buttons */}
          {Array.from({ length: totalPages }).map((_, idx) => {
            const pageNum = idx + 1;
            const isActive = pageNum === currentPage;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-8 h-8 rounded-lg text-xs font-bold font-lexend transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/80'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold font-lexend transition-all cursor-pointer ${
              currentPage === totalPages
                ? 'opacity-40 cursor-not-allowed text-zinc-500'
                : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 6. In-Page PDF Viewer Modal matching hynts.in */}
      {activeNote && (
        <div
          className="fixed inset-0 z-50 flex flex-col animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing: ${activeNote.title}`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={closeNoteModal}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="relative z-10 flex flex-col w-full h-full max-w-6xl mx-auto my-2 sm:my-4 px-2 sm:px-6">
            {/* Modal Header Bar */}
            <div className="flex items-center gap-3 bg-zinc-100 dark:bg-[#0d121c] border border-zinc-200 dark:border-[#1b2230] rounded-t-xl px-4 py-3 shrink-0 shadow-lg">
              {/* PDF Icon Badge */}
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <FileText className="w-4 h-4 text-red-400" />
              </div>

              {/* Title & Category Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold font-lexend text-white truncate">
                  {activeNote.title}
                </p>
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-lexend truncate">
                  <span className="text-blue-400 font-medium">{activeNote.category}</span>
                  <span>•</span>
                  <span>{activeNote.date}</span>
                  {activeNote.description && (
                    <>
                      <span>•</span>
                      <span className="text-zinc-400 truncate max-w-xs">{activeNote.description}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Share Link */}
                <button
                  onClick={() => copyShareLink(activeNote)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-lexend bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer"
                  title="Copy Google Drive Link"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share'}</span>
                </button>

                {/* Open in New Tab */}
                <a
                  href={activeNote.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-lexend bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer"
                  aria-label="Open in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">New Tab</span>
                </a>

                {/* Download PDF */}
                <a
                  href={activeNote.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-lexend bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer"
                  title="Download / View PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>

                {/* Close Modal Button */}
                <button
                  onClick={closeNoteModal}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF Viewport */}
            <div className="relative flex-1 bg-zinc-950 border-x border-b border-zinc-200 dark:border-[#1b2230] rounded-b-xl overflow-hidden shadow-2xl">
              {/* Spinner while loading */}
              {pdfLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 bg-zinc-950">
                  <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                  <p className="text-xs sm:text-sm text-zinc-400 font-lexend">
                    Loading PDF document...
                  </p>
                </div>
              )}

              {/* In-Page Google Drive PDF viewer */}
              <iframe
                src={`${activeNote.preview_url}#toolbar=1&navpanes=1&scrollbar=1`}
                title={activeNote.title}
                className={`w-full h-full border-0 transition-opacity duration-300 ${
                  pdfLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => setPdfLoading(false)}
                allow="fullscreen"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
