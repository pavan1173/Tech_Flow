import React, { useState } from 'react';
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
  Download
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

  // Find the playlist
  const list = coreSubjectsData[subjectType] || [];
  const playlist: CoreSubjectPlaylist | undefined =
    list.find((p) => p.slug === slug) ||
    coreSubjectsData.dbms.find((p) => p.slug === slug) ||
    coreSubjectsData.os.find((p) => p.slug === slug) ||
    coreSubjectsData.oops.find((p) => p.slug === slug) ||
    coreSubjectsData.dbms[0];

  const lectures = playlist?.lectures || [];
  const [activeLectureIndex, setActiveLectureIndex] = useState(0);
  const currentLecture: VideoLecture | undefined = lectures[activeLectureIndex] || lectures[0];

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  const getParentHref = () => {
    if (subjectType === 'os') return '/preparation/os-playlists';
    if (subjectType === 'oops') return '/preparation/oops-playlists';
    return '/preparation/dbms-playlists';
  };

  const getParentTitle = () => {
    if (subjectType === 'os') return 'Operating Systems';
    if (subjectType === 'oops') return 'OOPS Playlists';
    return 'DBMS Playlists';
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-6 max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-white transition-colors"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
        <a
          href={getParentHref()}
          onClick={(e) => handleNav(e, getParentHref())}
          className="hover:text-white transition-colors"
        >
          {getParentTitle()}
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
        <span className="text-white font-medium truncate max-w-xs">{playlist.instructor}</span>
      </div>

      {/* Playlist Header Banner */}
      <div className="rounded-2xl bg-[#0c1017] border border-[#1b2230] p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>{playlist.badge}</span>
              <span>•</span>
              <span>{playlist.totalVideos} Lectures</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
              {playlist.title}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-3xl leading-relaxed">
              {playlist.description}
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
            {playlist.notesUrl && (
              <a
                href={playlist.notesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Notes</span>
              </a>
            )}

            <a
              href={playlist.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-xs"
            >
              <Youtube className="w-4 h-4 fill-current" />
              <span>Open on YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Video & Lecture Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Embedded Player or Video Info */}
        <div className="lg:col-span-2 space-y-4">
          {currentLecture ? (
            <div className="space-y-4">
              {/* Responsive Video Container */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black border border-[#1b2230] shadow-2xl relative">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${currentLecture.youtubeId}?autoplay=0&rel=0`}
                  title={currentLecture.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Lecture Title & Quick Meta */}
              <div className="p-4 rounded-xl bg-[#0c1017] border border-[#1b2230] space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-bold text-base sm:text-lg text-white">
                    {currentLecture.title}
                  </h2>
                  <button
                    onClick={() => toggleSolved(`lecture-${playlist.slug}-${currentLecture.id}`)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shrink-0 cursor-pointer ${
                      isSolved(`lecture-${playlist.slug}-${currentLecture.id}`)
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>
                      {isSolved(`lecture-${playlist.slug}-${currentLecture.id}`)
                        ? 'Completed'
                        : 'Mark Done'}
                    </span>
                  </button>
                </div>

                <div className="flex items-center gap-2 flex-wrap text-xs text-zinc-400 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {currentLecture.duration}
                  </span>
                  <span>•</span>
                  <span>Instructor: {playlist.instructor}</span>
                  {currentLecture.tags && (
                    <div className="flex items-center gap-1.5 ml-2 flex-wrap">
                      {currentLecture.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 text-[10px] font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-zinc-500">
              No lecture selected.
            </div>
          )}
        </div>

        {/* Right 1 Col: Lecture List Breakdown */}
        <div className="rounded-2xl bg-[#0c1017] border border-[#1b2230] overflow-hidden flex flex-col h-[620px]">
          <div className="p-4 border-b border-[#1b2230] bg-[#0e131d] flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-white">Course Lectures</h3>
              <span className="text-[11px] text-zinc-400">
                {lectures.length} video lectures
              </span>
            </div>
          </div>

          <div className="overflow-y-auto divide-y divide-[#171f2d] flex-1 p-1">
            {lectures.map((lec, idx) => {
              const isCurrent = idx === activeLectureIndex;
              const isDone = isSolved(`lecture-${playlist.slug}-${lec.id}`);

              return (
                <button
                  key={lec.id}
                  onClick={() => setActiveLectureIndex(idx)}
                  className={`w-full p-3 text-left flex items-start gap-3 rounded-xl transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-blue-600/15 border border-blue-500/30 text-white'
                      : 'hover:bg-zinc-800/40 text-zinc-300'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                      isDone
                        ? 'bg-emerald-500 text-white'
                        : isCurrent
                        ? 'bg-blue-600 text-white'
                        : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {isDone ? <CheckCircle2 className="w-3.5 h-3.5" /> : idx + 1}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-xs font-semibold line-clamp-2 ${
                        isCurrent ? 'text-blue-300' : 'text-zinc-200'
                      }`}
                    >
                      {lec.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-[10px] text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {lec.duration}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
