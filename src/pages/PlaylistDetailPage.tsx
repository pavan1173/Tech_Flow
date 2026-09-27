import React, { useState, useMemo } from 'react';
import { coreSubjectsData, CoreSubjectPlaylist, VideoLecture } from '../data/coreSubjectsData';
import { useProgress } from '../context/ProgressContext';
import {
  ArrowLeft,
  Play,
  CheckCircle2,
  Clock,
  Youtube,
  BookOpen,
  FileText,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Share2,
  Download,
  Search,
  ChevronLeft,
  Maximize2,
  Check,
  ListVideo
} from 'lucide-react';

interface PlaylistDetailPageProps {
  slug: string;
  subjectType: 'dbms' | 'os' | 'oops';
  navigate: (to: string) => void;
}

export const PlaylistDetailPage: React.FC<PlaylistDetailPageProps> = ({
  slug,
  subjectType,
  navigate,
}) => {
  const { isSolved, toggleSolved } = useProgress();

  // Find playlist across all datasets
  const list = coreSubjectsData[subjectType] || [];
  const playlist: CoreSubjectPlaylist =
    list.find((p) => p.slug === slug) ||
    coreSubjectsData.dbms.find((p) => p.slug === slug) ||
    coreSubjectsData.os.find((p) => p.slug === slug) ||
    coreSubjectsData.oops.find((p) => p.slug === slug) ||
    coreSubjectsData.dbms[0];

  const lectures = playlist?.lectures || [];
  const [activeLectureIndex, setActiveLectureIndex] = useState(0);
  const [lectureSearch, setLectureSearch] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [mobileTab, setMobileTab] = useState<'player' | 'list'>('player');

  const currentLecture: VideoLecture | undefined = lectures[activeLectureIndex] || lectures[0];

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  const getParentHref = () => {
    if (playlist.subject === 'OS') return '/preparation/os-playlists';
    if (playlist.subject === 'OOPS') return '/preparation/oops-playlists';
    return '/preparation/dbms-playlists';
  };

  const getParentTitle = () => {
    if (playlist.subject === 'OS') return 'Operating Systems';
    if (playlist.subject === 'OOPS') return 'OOPS Playlists';
    return 'DBMS Playlists';
  };

  // Filter lectures by search
  const filteredLectures = useMemo(() => {
    if (!lectureSearch) return lectures;
    return lectures.filter((l) =>
      l.title.toLowerCase().includes(lectureSearch.toLowerCase()) ||
      (l.tags || []).some((t) => t.toLowerCase().includes(lectureSearch.toLowerCase()))
    );
  }, [lectures, lectureSearch]);

  // Calculate lecture progress
  const completedCount = useMemo(() => {
    return lectures.filter((l) => isSolved(`lecture-${playlist.slug}-${l.id}`)).length;
  }, [lectures, isSolved, playlist.slug]);

  const completionPercent =
    lectures.length > 0 ? Math.round((completedCount / lectures.length) * 100) : 0;

  const handlePrev = () => {
    if (activeLectureIndex > 0) {
      setActiveLectureIndex(activeLectureIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeLectureIndex < lectures.length - 1) {
      setActiveLectureIndex(activeLectureIndex + 1);
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 p-3 sm:p-6 lg:p-8 font-lexend space-y-5 max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-zinc-400 flex-wrap">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-white transition-colors"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
        <a
          href={getParentHref()}
          onClick={(e) => handleNav(e, getParentHref())}
          className="hover:text-white transition-colors"
        >
          {getParentTitle()}
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
        <span className="text-white font-medium truncate max-w-[200px] sm:max-w-xs">
          {playlist.instructor}
        </span>
      </div>

      {/* Playlist Top Header Banner */}
      <div className="rounded-2xl bg-[#0c1017] border border-[#1b2230] p-4 sm:p-6 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-2 flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
                {playlist.badge}
              </span>
              <span className="text-xs text-zinc-400 font-medium">
                {playlist.totalVideos} Lectures • {playlist.totalDuration}
              </span>
              <span className="text-xs font-bold text-amber-400">
                ★ {playlist.rating}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
              {playlist.title}
            </h1>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-4xl font-normal">
              {playlist.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
            {playlist.notesUrl && (
              <a
                href={playlist.notesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Notes</span>
              </a>
            )}

            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#141b28] hover:bg-[#1a2334] border border-[#1f293d] text-zinc-300 hover:text-white text-xs font-bold transition-all cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>

            <a
              href={playlist.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-md shadow-red-900/20"
            >
              <Youtube className="w-4 h-4 fill-current" />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* Progress Bar in Header */}
        <div className="pt-2 border-t border-[#18202d] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="w-32 sm:w-48 h-2 rounded-full bg-[#18202d] overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
            <span className="text-xs font-semibold text-zinc-300">
              {completedCount}/{lectures.length} Completed ({completionPercent}%)
            </span>
          </div>

          <div className="text-[11px] text-zinc-500 font-medium">
            Instructor: <span className="text-zinc-300 font-semibold">{playlist.instructor}</span> • Channel: <span className="text-zinc-300 font-semibold">{playlist.channel}</span>
          </div>
        </div>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="lg:hidden flex items-center bg-[#0c1017] p-1 rounded-xl border border-[#1b2230]">
        <button
          onClick={() => setMobileTab('player')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 ${
            mobileTab === 'player'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Play className="w-3.5 h-3.5" />
          <span>Video Player</span>
        </button>
        <button
          onClick={() => setMobileTab('list')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 ${
            mobileTab === 'list'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <ListVideo className="w-3.5 h-3.5" />
          <span>Lectures ({lectures.length})</span>
        </button>
      </div>

      {/* Main Player & Curriculum Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Video Player */}
        <div className={`lg:col-span-2 space-y-4 ${mobileTab === 'list' ? 'hidden lg:block' : 'block'}`}>
          {currentLecture ? (
            <div className="space-y-4">
              {/* Responsive Video Container */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black border border-[#1b2230] shadow-2xl relative">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${currentLecture.youtubeId}?autoplay=0&rel=0`}
                  title={currentLecture.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Player Bottom Control & Meta Bar */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0c1017] border border-[#1b2230] space-y-3.5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1 min-w-0 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 font-mono">
                      Lecture {activeLectureIndex + 1} of {lectures.length}
                    </span>
                    <h2 className="font-bold text-base sm:text-lg text-white leading-snug">
                      {currentLecture.title}
                    </h2>
                  </div>

                  <button
                    onClick={() => toggleSolved(`lecture-${playlist.slug}-${currentLecture.id}`)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer shadow-xs ${
                      isSolved(`lecture-${playlist.slug}-${currentLecture.id}`)
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      {isSolved(`lecture-${playlist.slug}-${currentLecture.id}`)
                        ? 'Completed'
                        : 'Mark as Completed'}
                    </span>
                  </button>
                </div>

                {/* Tags & Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-[#18202d]">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                      <Clock className="w-3.5 h-3.5" />
                      {currentLecture.duration}
                    </span>
                    {currentLecture.tags && (
                      <div className="flex items-center gap-1.5 ml-2 flex-wrap">
                        {currentLecture.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full bg-[#131a26] border border-[#1f293d] text-zinc-300 text-[10px] font-semibold"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Previous / Next Lecture Switcher */}
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      onClick={handlePrev}
                      disabled={activeLectureIndex === 0}
                      className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 disabled:pointer-events-none text-zinc-200 transition-colors cursor-pointer"
                      title="Previous Lecture"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono text-zinc-400 px-1">
                      {activeLectureIndex + 1} / {lectures.length}
                    </span>
                    <button
                      onClick={handleNext}
                      disabled={activeLectureIndex === lectures.length - 1}
                      className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 disabled:pointer-events-none text-zinc-200 transition-colors cursor-pointer"
                      title="Next Lecture"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-zinc-500 bg-[#0c1017] rounded-2xl border border-[#1b2230]">
              No lectures available for this playlist.
            </div>
          )}
        </div>

        {/* Right 1 Column: Complete Lecture Curriculum List */}
        <div
          className={`rounded-2xl bg-[#0c1017] border border-[#1b2230] overflow-hidden flex flex-col h-[650px] shadow-lg ${
            mobileTab === 'player' ? 'hidden lg:flex' : 'flex'
          }`}
        >
          {/* List Header & Search */}
          <div className="p-3.5 sm:p-4 border-b border-[#1b2230] bg-[#0e131d] space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <ListVideo className="w-4 h-4 text-blue-400" />
                <span>Course Lectures</span>
              </h3>
              <span className="text-[11px] font-mono font-semibold text-zinc-400">
                {completedCount}/{lectures.length} Done
              </span>
            </div>

            {/* Quick Filter Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search lectures or topics..."
                value={lectureSearch}
                onChange={(e) => setLectureSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[#07090e] border border-[#1e2433] text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Scrollable Lecture Items */}
          <div className="overflow-y-auto divide-y divide-[#151c2a] flex-1 p-2 space-y-1">
            {filteredLectures.length === 0 ? (
              <div className="p-8 text-center text-xs text-zinc-500">
                No matching lectures found.
              </div>
            ) : (
              filteredLectures.map((lec) => {
                const originalIndex = lectures.findIndex((l) => l.id === lec.id);
                const isCurrent = originalIndex === activeLectureIndex;
                const isDone = isSolved(`lecture-${playlist.slug}-${lec.id}`);

                return (
                  <button
                    key={lec.id}
                    onClick={() => {
                      setActiveLectureIndex(originalIndex);
                      if (window.innerWidth < 1024) {
                        setMobileTab('player');
                      }
                    }}
                    className={`w-full p-2.5 sm:p-3 text-left flex items-start gap-3 rounded-xl transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-blue-600/15 border border-blue-500/30 text-white shadow-xs'
                        : 'hover:bg-zinc-800/50 text-zinc-300'
                    }`}
                  >
                    {/* Index or Checkmark Indicator */}
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                        isDone
                          ? 'bg-emerald-500 text-white'
                          : isCurrent
                          ? 'bg-blue-600 text-white'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {isDone ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : originalIndex + 1}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-xs font-semibold leading-snug line-clamp-2 ${
                          isCurrent ? 'text-blue-300 font-bold' : 'text-zinc-200'
                        }`}
                      >
                        {lec.title}
                      </p>

                      <div className="flex items-center gap-2 mt-1.5 text-[10px] text-zinc-400">
                        <span className="flex items-center gap-1 font-mono">
                          <Clock className="w-3 h-3" />
                          {lec.duration}
                        </span>
                        {lec.tags && lec.tags[0] && (
                          <>
                            <span>•</span>
                            <span className="text-zinc-400 truncate">
                              #{lec.tags[0]}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
