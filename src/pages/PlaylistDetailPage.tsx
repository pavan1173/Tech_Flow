import React, { useState, useMemo, useEffect, useRef } from 'react';
import { hyntsPlaylists, findHyntsPlaylist, PlaylistVideo, PlaylistSection } from '../data/hyntsPlaylistsData';
import { coreSubjectsData, VideoLecture } from '../data/coreSubjectsData';
import { systemDesignPlaylistsList } from '../data/systemDesignData';
import { dsaPlaylistsList } from '../data/dsaPlaylistsData';
import { useProgress } from '../context/ProgressContext';
import {
  Play,
  Pause,
  CheckCircle2,
  Circle,
  Clock,
  Youtube,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Share2,
  Search,
  ChevronLeft,
  Maximize2,
  Minimize2,
  Check,
  ListVideo,
  LayoutGrid,
  RotateCcw,
  BookOpen,
  Sparkles,
  X,
  StickyNote,
  Code2,
  Award,
  Download,
  Copy,
  AlertCircle,
  Tv,
  FastForward,
  Settings2,
  ShieldCheck,
  Volume2,
  Sliders,
  GripHorizontal,
  MoveVertical,
  Ratio,
  Monitor
} from 'lucide-react';

interface PlaylistDetailPageProps {
  slug: string;
  subjectType?: 'dbms' | 'os' | 'oops' | 'systemDesign' | 'dsa';
  navigate: (to: string) => void;
}

export const PlaylistDetailPage: React.FC<PlaylistDetailPageProps> = ({
  slug,
  subjectType = 'dsa',
  navigate,
}) => {
  const { isSolved, toggleSolved } = useProgress();

  // 1. Try finding in authentic scraped hynts dataset
  const hyntsPlaylist = useMemo(() => findHyntsPlaylist(slug), [slug]);

  // 2. Fallback to legacy datasets if not matched
  const fallbackPlaylist: any = useMemo(() => {
    if (hyntsPlaylist) return null;
    return (
      (coreSubjectsData as any)[subjectType]?.find((p: any) => p.slug === slug) ||
      systemDesignPlaylistsList.find((p: any) => p.slug === slug) ||
      dsaPlaylistsList.find((p: any) => p.slug === slug) ||
      coreSubjectsData.dbms.find((p) => p.slug === slug) ||
      coreSubjectsData.os.find((p) => p.slug === slug) ||
      coreSubjectsData.oops.find((p) => p.slug === slug) ||
      dsaPlaylistsList[0]
    );
  }, [hyntsPlaylist, slug, subjectType]);

  // Unified playlist metadata
  const playlist = useMemo(() => {
    if (hyntsPlaylist) {
      return {
        slug: hyntsPlaylist.slug,
        title: hyntsPlaylist.title,
        instructor: hyntsPlaylist.instructor,
        channel: hyntsPlaylist.channel,
        category: hyntsPlaylist.category,
        totalVideos: hyntsPlaylist.totalVideos,
        totalDuration: hyntsPlaylist.totalDuration,
        rating: hyntsPlaylist.rating,
        badge: hyntsPlaylist.badge,
        description: hyntsPlaylist.description,
        playlistUrl: hyntsPlaylist.playlistUrl,
        notesUrl: hyntsPlaylist.notesUrl,
        sections: hyntsPlaylist.sections,
        lectures: hyntsPlaylist.lectures,
      };
    }
    // Convert fallback playlist to standardized structure
    const fallbackLectures: PlaylistVideo[] = (fallbackPlaylist?.lectures || []).map(
      (lec: VideoLecture, idx: number) => ({
        id: lec.id || idx + 1,
        index: idx + 1,
        title: lec.title,
        duration: lec.duration || '35-50 min',
        youtubeId: lec.youtubeId,
        videoUrl: lec.videoUrl || `https://www.youtube.com/watch?v=${lec.youtubeId}`,
        sectionTitle: 'Course Curriculum',
        tags: lec.tags || ['DSA'],
        problemUrl: undefined,
        notesUrl: lec.notesUrl,
      })
    );

    const fallbackSections: PlaylistSection[] = [
      {
        title: 'Full Curriculum',
        videosCount: fallbackLectures.length,
        videos: fallbackLectures,
      },
    ];

    return {
      slug: fallbackPlaylist?.slug || slug,
      title: fallbackPlaylist?.title || 'Video Course Playlist',
      instructor: fallbackPlaylist?.instructor || 'Instructor',
      channel: fallbackPlaylist?.channel || 'YouTube',
      category: subjectType,
      totalVideos: fallbackLectures.length,
      totalDuration: fallbackPlaylist?.totalDuration || '40+ hrs',
      rating: fallbackPlaylist?.rating || 4.9,
      badge: fallbackPlaylist?.badge || 'Placement Course',
      description:
        fallbackPlaylist?.description ||
        'Complete course playlist for software engineering interview preparation.',
      playlistUrl: fallbackPlaylist?.playlistUrl || 'https://www.youtube.com',
      notesUrl: fallbackPlaylist?.notesUrl,
      sections: fallbackSections,
      lectures: fallbackLectures,
    };
  }, [hyntsPlaylist, fallbackPlaylist, slug, subjectType]);

  const lectures = playlist.lectures || [];

  // Active state
  const [activeLectureIndex, setActiveLectureIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState<'accordion' | 'studio'>('accordion');
  const [theaterMode, setTheaterMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'incomplete' | 'completed'>('all');
  const [copiedLink, setCopiedLink] = useState(false);
  const [notesCopied, setNotesCopied] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [notesText, setNotesText] = useState('');
  const [activeTab, setActiveTab] = useState<'info' | 'notes'>('info');
  const [autoplayNext, setAutoplayNext] = useState(true);
  const [embedHost, setEmbedHost] = useState<'youtube' | 'nocookie'>('youtube');
  const [videoTimestamp, setVideoTimestamp] = useState<number | null>(null);
  const [showResetModal, setShowResetModal] = useState(false);
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const [dismissMiniPlayer, setDismissMiniPlayer] = useState(false);

  // Dynamic Video Resizing Engine
  type VideoSizeMode = 'compact' | 'standard' | 'wide' | 'theater' | 'custom';
  type AspectRatioPreset = '16:9' | '4:3' | '16:10' | '21:9' | 'custom';

  const [videoSizeMode, setVideoSizeMode] = useState<VideoSizeMode>(() => {
    try {
      return (localStorage.getItem('techflow_video_size_mode') as VideoSizeMode) || 'standard';
    } catch {
      return 'standard';
    }
  });

  const [customVideoHeight, setCustomVideoHeight] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('techflow_video_custom_height');
      return saved ? parseInt(saved, 10) : 480;
    } catch {
      return 480;
    }
  });

  const [aspectRatio, setAspectRatio] = useState<AspectRatioPreset>(() => {
    try {
      return (localStorage.getItem('techflow_video_aspect_ratio') as AspectRatioPreset) || '16:9';
    } catch {
      return '16:9';
    }
  });

  const [showSizeControls, setShowSizeControls] = useState(false);
  const [isDraggingResize, setIsDraggingResize] = useState(false);
  const dragStartYRef = useRef<number>(0);
  const dragStartHeightRef = useRef<number>(480);

  const applyPresetSize = (mode: VideoSizeMode) => {
    setVideoSizeMode(mode);
    try {
      localStorage.setItem('techflow_video_size_mode', mode);
    } catch {}

    if (mode === 'compact') {
      setCustomVideoHeight(340);
      setAspectRatio('16:9');
    } else if (mode === 'standard') {
      setCustomVideoHeight(480);
      setAspectRatio('16:9');
    } else if (mode === 'wide') {
      setCustomVideoHeight(580);
      setAspectRatio('16:9');
    } else if (mode === 'theater') {
      setCustomVideoHeight(640);
      setAspectRatio('21:9');
    }
  };

  const handleStartResizeDrag = (clientY: number) => {
    setIsDraggingResize(true);
    dragStartYRef.current = clientY;
    dragStartHeightRef.current = customVideoHeight;

    const onMouseMove = (e: MouseEvent) => {
      const deltaY = e.clientY - dragStartYRef.current;
      const newHeight = Math.min(Math.max(dragStartHeightRef.current + deltaY, 260), 850);
      setCustomVideoHeight(newHeight);
      setVideoSizeMode('custom');
      try {
        localStorage.setItem('techflow_video_custom_height', String(newHeight));
        localStorage.setItem('techflow_video_size_mode', 'custom');
      } catch {}
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const deltaY = e.touches[0].clientY - dragStartYRef.current;
        const newHeight = Math.min(Math.max(dragStartHeightRef.current + deltaY, 260), 850);
        setCustomVideoHeight(newHeight);
        setVideoSizeMode('custom');
        try {
          localStorage.setItem('techflow_video_custom_height', String(newHeight));
          localStorage.setItem('techflow_video_size_mode', 'custom');
        } catch {}
      }
    };

    const onEnd = () => {
      setIsDraggingResize(false);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onEnd);
  };

  // References
  const playerRef = useRef<HTMLDivElement>(null);
  const miniPlayerDismissRef = useRef(false);

  // Initialize expanded sections on load - closed by default
  useEffect(() => {
    const initial: Record<string, boolean> = {};
    playlist.sections.forEach((sec) => {
      initial[sec.title] = false; // All sections closed by default
    });
    setExpandedSections(initial);
  }, [playlist.slug]);

  // Observer to show floating mini-player when main video player is scrolled out of view
  useEffect(() => {
    if (!playerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isPlaying && !miniPlayerDismissRef.current) {
          setShowMiniPlayer(true);
        } else {
          setShowMiniPlayer(false);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(playerRef.current);
    return () => observer.disconnect();
  }, [isPlaying]);

  // Current active lecture
  const currentLecture: PlaylistVideo | undefined = lectures[activeLectureIndex] || lectures[0];

  // Load saved note for the current lecture
  useEffect(() => {
    if (currentLecture) {
      const savedNote = localStorage.getItem(`lecture-note-${playlist.slug}-${currentLecture.id}`);
      setNotesText(savedNote || '');
    }
  }, [currentLecture?.id, playlist.slug]);

  const handleSaveNote = (text: string) => {
    setNotesText(text);
    if (currentLecture) {
      localStorage.setItem(`lecture-note-${playlist.slug}-${currentLecture.id}`, text);
    }
  };

  const handleInsertNoteSnippet = (snippet: string) => {
    const newText = notesText ? `${notesText}\n${snippet}` : snippet;
    handleSaveNote(newText);
  };

  const handleDownloadNotes = () => {
    if (!currentLecture || !notesText.trim()) return;
    const element = document.createElement('a');
    const file = new Blob(
      [
        `# ${currentLecture.title}\nCourse: ${playlist.title}\nInstructor: ${playlist.instructor}\nDate: ${new Date().toLocaleDateString()}\n\n---\n\n${notesText}`
      ],
      { type: 'text/markdown' }
    );
    element.href = URL.createObjectURL(file);
    element.download = `notes-lec-${currentLecture.index}-${currentLecture.title.replace(/[^a-zA-Z0-9]/g, '_')}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const expandAllSections = () => {
    const next: Record<string, boolean> = {};
    playlist.sections.forEach((sec) => {
      next[sec.title] = true;
    });
    setExpandedSections(next);
  };

  const collapseAllSections = () => {
    const next: Record<string, boolean> = {};
    playlist.sections.forEach((sec) => {
      next[sec.title] = false;
    });
    setExpandedSections(next);
  };

  // Lecture completion calculations
  const isLectureCompleted = (lecId: number) => isSolved(`lec-${playlist.slug}-${lecId}`);

  const completedCount = useMemo(() => {
    return lectures.filter((l) => isLectureCompleted(l.id)).length;
  }, [lectures, isSolved, playlist.slug]);

  const completionPercent =
    lectures.length > 0 ? Math.round((completedCount / lectures.length) * 100) : 0;

  // Filter lectures
  const filteredSections = useMemo(() => {
    return playlist.sections
      .map((sec) => {
        const matchingVideos = sec.videos.filter((v) => {
          const matchesQuery =
            !searchQuery ||
            v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            v.sectionTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            v.index.toString() === searchQuery.trim();

          const completed = isLectureCompleted(v.id);
          const matchesStatus =
            filterStatus === 'all' ||
            (filterStatus === 'completed' && completed) ||
            (filterStatus === 'incomplete' && !completed);

          return matchesQuery && matchesStatus;
        });

        return {
          ...sec,
          videos: matchingVideos,
        };
      })
      .filter((sec) => sec.videos.length > 0);
  }, [playlist.sections, searchQuery, filterStatus, isSolved, playlist.slug]);

  const totalFilteredCount = useMemo(() => {
    return filteredSections.reduce((acc, sec) => acc + sec.videos.length, 0);
  }, [filteredSections]);

  // Navigation handlers
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  const handleSelectVideo = (video: PlaylistVideo, autoScroll = true) => {
    const targetIdx = lectures.findIndex((l) => l.id === video.id);
    if (targetIdx !== -1) {
      setActiveLectureIndex(targetIdx);
      setIsPlaying(true);
      setVideoTimestamp(null);
      miniPlayerDismissRef.current = false;
      setDismissMiniPlayer(false);
      if (autoScroll && playerRef.current) {
        playerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handlePrev = () => {
    if (activeLectureIndex > 0) {
      setActiveLectureIndex(activeLectureIndex - 1);
      setIsPlaying(true);
      setVideoTimestamp(null);
    }
  };

  const handleNext = () => {
    if (activeLectureIndex < lectures.length - 1) {
      setActiveLectureIndex(activeLectureIndex + 1);
      setIsPlaying(true);
      setVideoTimestamp(null);
    }
  };

  const handleJumpToTimestamp = (seconds: number) => {
    setVideoTimestamp(seconds);
    setIsPlaying(true);
    if (playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyNotes = () => {
    if (!notesText.trim()) return;
    navigator.clipboard?.writeText(notesText);
    setNotesCopied(true);
    setTimeout(() => setNotesCopied(false), 2000);
  };

  const handleResetCourseProgress = () => {
    lectures.forEach((lec) => {
      const key = `lec-${playlist.slug}-${lec.id}`;
      if (isSolved(key)) {
        toggleSolved(key);
      }
    });
    setShowResetModal(false);
  };

  const getParentHref = () => {
    if (playlist.category === 'system-design' || playlist.category === 'systemDesign') {
      return '/preparation/system-design-playlists';
    }
    if (playlist.category === 'dsa') return '/preparation/dsa-playlists';
    if (playlist.category === 'dbms') return '/preparation/dbms-playlists';
    if (playlist.category === 'os') return '/preparation/os-playlists';
    if (playlist.category === 'oops') return '/preparation/oops-playlists';
    return '/preparation/dsa-playlists';
  };

  const getParentTitle = () => {
    if (playlist.category === 'system-design' || playlist.category === 'systemDesign') {
      return 'System Design Playlists';
    }
    if (playlist.category === 'dsa') return 'DSA Playlists';
    if (playlist.category === 'dbms') return 'DBMS Playlists';
    if (playlist.category === 'os') return 'Operating Systems';
    if (playlist.category === 'oops') return 'OOPS Playlists';
    return 'DSA Playlists';
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      if (e.key === 'n' || e.key === 'N') {
        handleNext();
      } else if (e.key === 'p' || e.key === 'P') {
        handlePrev();
      } else if (e.key === 'c' || e.key === 'C') {
        if (currentLecture) {
          toggleSolved(`lec-${playlist.slug}-${currentLecture.id}`);
        }
      } else if (e.key === 't' || e.key === 'T') {
        setTheaterMode((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLectureIndex, currentLecture, playlist.slug]);

  // Construct iframe embed source
  const embedBase =
    embedHost === 'youtube'
      ? 'https://www.youtube.com/embed/'
      : 'https://www.youtube-nocookie.com/embed/';

  const embedSrc = useMemo(() => {
    if (!currentLecture?.youtubeId) return '';
    const autoplayParam = isPlaying ? '1' : '0';
    const startParam = videoTimestamp ? `&start=${videoTimestamp}` : '';
    const originParam = typeof window !== 'undefined' ? `&origin=${encodeURIComponent(window.location.origin)}` : '';
    return `${embedBase}${currentLecture.youtubeId}?autoplay=${autoplayParam}&rel=0&enablejsapi=1&modestbranding=1${startParam}${originParam}`;
  }, [embedBase, currentLecture?.youtubeId, isPlaying, videoTimestamp]);

  // Milestone timestamp quick jumps
  const studyMilestones = [
    { label: 'Overview', time: '00:00', seconds: 0 },
    { label: 'Core Intuition', time: '05:00', seconds: 300 },
    { label: 'Algorithm', time: '12:30', seconds: 750 },
    { label: 'Code & Walkthrough', time: '20:00', seconds: 1200 },
    { label: 'Edge Cases & Complexity', time: '30:00', seconds: 1800 },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 p-3 sm:p-6 lg:p-8 font-lexend space-y-6 max-w-7xl mx-auto pb-28">
      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-400 flex-wrap">
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
        <span className="text-white font-medium truncate max-w-[220px] sm:max-w-md">
          {playlist.title}
        </span>
      </nav>

      {/* 2. Hero Header Card matching hynts.in */}
      <header className="rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230] p-4 sm:p-6 lg:p-7 space-y-5 shadow-xl relative overflow-hidden">
        {/* Accent glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5 relative z-10">
          <div className="space-y-3 flex-1 min-w-0">
            {/* Badges row */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/25 text-xs font-bold tracking-wide">
                {playlist.badge}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 text-xs font-medium">
                {playlist.totalVideos} Videos
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 text-xs font-medium">
                {playlist.totalDuration}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold">
                ★ {playlist.rating}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
              {playlist.title}
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-4xl font-normal">
              {playlist.description}
            </p>

            {/* Instructor and Channel info */}
            <div className="flex items-center gap-3 text-xs text-zinc-400 pt-1">
              <div className="flex items-center gap-1.5">
                <span className="text-zinc-500">Instructor:</span>
                <span className="font-semibold text-zinc-200">{playlist.instructor}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-zinc-500">Channel:</span>
                <span className="font-semibold text-zinc-200">{playlist.channel}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 shrink-0 flex-wrap lg:self-center">
            {/* Start / Resume Watching */}
            <button
              onClick={() => {
                setIsPlaying(true);
                playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/30 cursor-pointer active:scale-95"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{isPlaying ? 'Resume Video' : 'Start Course'}</span>
            </button>

            {/* View Mode Switcher */}
            <div className="hidden sm:flex items-center bg-[#141b28] border border-[#1f293d] rounded-xl p-1">
              <button
                onClick={() => setViewMode('accordion')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'accordion'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Topic Accordion View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Topics</span>
              </button>
              <button
                onClick={() => setViewMode('studio')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'studio'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Studio Player View"
              >
                <ListVideo className="w-3.5 h-3.5" />
                <span>Studio</span>
              </button>
            </div>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#141b28] hover:bg-[#1a2334] border border-[#1f293d] text-zinc-300 hover:text-white text-xs font-bold transition-all cursor-pointer"
              title="Share course"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>

            {/* YouTube Direct Link */}
            <a
              href={playlist.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-md shadow-red-900/30"
              title="Open full playlist on YouTube"
            >
              <Youtube className="w-4 h-4 fill-white" />
              <span className="hidden sm:inline">YouTube</span>
            </a>
          </div>
        </div>

        {/* Course Progress Section matching hynts.in */}
        <div className="pt-4 border-t border-zinc-200 dark:border-[#18202d] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3.5 flex-1 max-w-xl">
            <div className="flex-1 h-2.5 rounded-full bg-[#161c28] overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold text-white font-mono">
                {completedCount} / {lectures.length} Completed
              </span>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                {completionPercent}%
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            {completedCount > 0 && (
              <button
                onClick={() => setShowResetModal(true)}
                className="text-zinc-500 hover:text-zinc-300 text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
                title="Reset completion checkboxes for this playlist"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Progress</span>
              </button>
            )}
            <div className="text-[11px] text-zinc-500 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-blue-400" />
              <span>Full curriculum • Video player • Notes • Practice</span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. High-Performance Video Player Container */}
      <section
        ref={playerRef}
        aria-label="Video Player Section"
        className={`rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230] overflow-hidden transition-all shadow-2xl ${
          theaterMode ? 'w-full ring-2 ring-blue-500/30' : ''
        }`}
      >
        {/* Player Header bar */}
        <div className="p-3 sm:p-4 bg-zinc-50 dark:bg-[#0e131d] border-b border-zinc-200 dark:border-[#1b2230] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono shrink-0">
              Lecture {activeLectureIndex + 1} of {lectures.length}
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-xs text-zinc-300 font-semibold truncate hidden sm:inline max-w-md">
              {currentLecture?.title}
            </span>
          </div>

          {/* Quick controls: Autoplay Next, Embed Server Switcher, Theater Mode, Complete Check */}
          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            {/* Dynamic Video Resizer Toggle & Popover */}
            <div className="relative">
              <button
                onClick={() => setShowSizeControls(!showSizeControls)}
                className={`p-1.5 px-2.5 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
                  showSizeControls || videoSizeMode !== 'standard'
                    ? 'bg-blue-600/20 text-blue-300 border-blue-500/40'
                    : 'bg-[#141b28] hover:bg-[#1a2334] text-zinc-300 hover:text-white border-[#1f293d]'
                }`}
                title="Dynamic Video Resizing options"
              >
                <Sliders className="w-3.5 h-3.5 text-blue-400" />
                <span className="capitalize">{videoSizeMode} ({customVideoHeight}px)</span>
              </button>

              {/* Dynamic Size Control Popover */}
              {showSizeControls && (
                <div className="absolute right-0 top-full mt-2 w-72 p-4 bg-[#0c1017] border border-[#1f293d] rounded-2xl shadow-2xl z-50 space-y-3.5 animate-in fade-in zoom-in-95">
                  <div className="flex items-center justify-between border-b border-[#1b2230] pb-2">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-blue-400" />
                      Dynamic Video Resize
                    </span>
                    <button
                      onClick={() => setShowSizeControls(false)}
                      className="text-zinc-400 hover:text-white text-xs"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Size Presets */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      Presets
                    </label>
                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        onClick={() => applyPresetSize('compact')}
                        className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold text-left transition-colors ${
                          videoSizeMode === 'compact'
                            ? 'bg-blue-600 text-white'
                            : 'bg-[#141b28] text-zinc-300 hover:bg-[#1e2738]'
                        }`}
                      >
                        Compact (340px)
                      </button>
                      <button
                        onClick={() => applyPresetSize('standard')}
                        className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold text-left transition-colors ${
                          videoSizeMode === 'standard'
                            ? 'bg-blue-600 text-white'
                            : 'bg-[#141b28] text-zinc-300 hover:bg-[#1e2738]'
                        }`}
                      >
                        Standard (480px)
                      </button>
                      <button
                        onClick={() => applyPresetSize('wide')}
                        className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold text-left transition-colors ${
                          videoSizeMode === 'wide'
                            ? 'bg-blue-600 text-white'
                            : 'bg-[#141b28] text-zinc-300 hover:bg-[#1e2738]'
                        }`}
                      >
                        Wide (580px)
                      </button>
                      <button
                        onClick={() => applyPresetSize('theater')}
                        className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold text-left transition-colors ${
                          videoSizeMode === 'theater'
                            ? 'bg-blue-600 text-white'
                            : 'bg-[#141b28] text-zinc-300 hover:bg-[#1e2738]'
                        }`}
                      >
                        Cinema 21:9
                      </button>
                    </div>
                  </div>

                  {/* Height Slider */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-zinc-400">Custom Height</span>
                      <span className="font-mono text-blue-400 font-bold">{customVideoHeight}px</span>
                    </div>
                    <input
                      type="range"
                      min={260}
                      max={850}
                      step={10}
                      value={customVideoHeight}
                      onChange={(e) => {
                        const h = parseInt(e.target.value, 10);
                        setCustomVideoHeight(h);
                        setVideoSizeMode('custom');
                        try {
                          localStorage.setItem('techflow_video_custom_height', String(h));
                          localStorage.setItem('techflow_video_size_mode', 'custom');
                        } catch {}
                      }}
                      className="w-full accent-blue-500 cursor-pointer"
                    />
                  </div>

                  {/* Aspect Ratio Switcher */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      Aspect Ratio
                    </label>
                    <div className="grid grid-cols-4 gap-1">
                      {(['16:9', '4:3', '16:10', '21:9'] as AspectRatioPreset[]).map((ar) => (
                        <button
                          key={ar}
                          onClick={() => {
                            setAspectRatio(ar);
                            try {
                              localStorage.setItem('techflow_video_aspect_ratio', ar);
                            } catch {}
                          }}
                          className={`py-1 rounded-lg text-[10px] font-bold font-mono transition-colors ${
                            aspectRatio === ar
                              ? 'bg-blue-600 text-white'
                              : 'bg-[#141b28] text-zinc-400 hover:text-white'
                          }`}
                        >
                          {ar}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#1b2230] flex items-center justify-between">
                    <button
                      onClick={() => applyPresetSize('standard')}
                      className="text-[11px] text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset Default</span>
                    </button>
                    <span className="text-[10px] text-zinc-500">Drag bar below to adjust</span>
                  </div>
                </div>
              )}
            </div>

            {/* Embed Switcher (YouTube vs No-Cookie) */}
            <button
              onClick={() => setEmbedHost(embedHost === 'youtube' ? 'nocookie' : 'youtube')}
              className="px-2 py-1 rounded-lg bg-[#141b28] hover:bg-[#1a2334] text-zinc-400 hover:text-zinc-200 text-[11px] flex items-center gap-1 border border-[#1f293d] cursor-pointer"
              title="Switch embed server if video doesn't load on restricted networks"
            >
              <ShieldCheck className="w-3 h-3 text-blue-400" />
              <span>{embedHost === 'youtube' ? 'YouTube' : 'No-Cookie'}</span>
            </button>

            {/* Autoplay Next Toggle */}
            <button
              onClick={() => setAutoplayNext(!autoplayNext)}
              className={`px-2 py-1 rounded-lg text-[11px] font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                autoplayNext
                  ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                  : 'bg-[#141b28] text-zinc-400 border border-[#1f293d]'
              }`}
              title="Auto advance to next video"
            >
              <FastForward className="w-3 h-3" />
              <span>Autoplay Next</span>
            </button>

            {/* Theater Mode Toggle */}
            <button
              onClick={() => setTheaterMode(!theaterMode)}
              className="p-1.5 px-2.5 rounded-lg bg-[#141b28] hover:bg-[#1a2334] text-zinc-300 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1.5 border border-[#1f293d]"
              title="Toggle Theater Mode (T)"
            >
              {theaterMode ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span className="hidden md:inline text-[11px]">Normal</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden md:inline text-[11px]">Theater</span>
                </>
              )}
            </button>

            {/* Mark Done button */}
            <button
              onClick={() => {
                if (currentLecture) {
                  toggleSolved(`lec-${playlist.slug}-${currentLecture.id}`);
                }
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                currentLecture && isLectureCompleted(currentLecture.id)
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>
                {currentLecture && isLectureCompleted(currentLecture.id) ? 'Completed' : 'Mark Done'}
              </span>
            </button>
          </div>
        </div>

        {/* Video Player Display Container */}
        {currentLecture ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* The YouTube iframe container */}
            <div
              className={`${
                activeTab === 'notes' ? 'lg:col-span-8' : 'lg:col-span-12'
              } bg-black transition-all`}
            >
              <div
                style={{
                  height: theaterMode ? undefined : `${customVideoHeight}px`,
                  maxHeight: '88vh',
                }}
                className={`w-full bg-black relative flex items-center justify-center transition-all ${
                  videoSizeMode === 'compact' ? 'max-w-4xl mx-auto' : ''
                } ${
                  theaterMode
                    ? 'aspect-[21/9] min-h-[380px] lg:min-h-[540px]'
                    : aspectRatio === '4:3'
                    ? 'aspect-[4/3]'
                    : aspectRatio === '16:10'
                    ? 'aspect-[16/10]'
                    : aspectRatio === '21:9'
                    ? 'aspect-[21/9]'
                    : ''
                }`}
              >
                {currentLecture.youtubeId ? (
                  <>
                    <iframe
                      key={`${currentLecture.youtubeId}-${videoTimestamp || '0'}-${embedHost}`}
                      className="w-full h-full border-0"
                      src={embedSrc}
                      title={currentLecture.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    {/* Transparent overlay during drag to prevent mouse capture by iframe */}
                    {isDraggingResize && (
                      <div className="absolute inset-0 bg-transparent z-30 cursor-row-resize" />
                    )}
                  </>
                ) : (
                  <div className="text-center p-8 text-zinc-400 space-y-3">
                    <Youtube className="w-12 h-12 text-red-500 mx-auto" />
                    <p className="text-sm font-semibold">Video stream available via direct link</p>
                    <a
                      href={currentLecture.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Watch on YouTube</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Dynamic Drag-to-Resize Handle Bar */}
              <div
                onMouseDown={(e) => handleStartResizeDrag(e.clientY)}
                onTouchStart={(e) => handleStartResizeDrag(e.touches[0].clientY)}
                className={`w-full py-1.5 px-4 bg-zinc-100 dark:bg-[#090d14] border-t border-b border-zinc-200 dark:border-[#18202d] flex items-center justify-between gap-3 cursor-row-resize select-none transition-colors group ${
                  isDraggingResize
                    ? 'bg-blue-600/15 border-blue-500/50 dark:bg-blue-900/30'
                    : 'hover:bg-zinc-200 dark:hover:bg-[#121824]'
                }`}
                title="Click and drag up/down to continuously resize the video player"
              >
                <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
                  <GripHorizontal
                    className={`w-4 h-4 transition-colors ${
                      isDraggingResize ? 'text-blue-400' : 'text-zinc-400 group-hover:text-blue-400'
                    }`}
                  />
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                    {customVideoHeight}px
                  </span>
                  <span className="text-zinc-400">•</span>
                  <span className="text-zinc-400 uppercase font-mono">{aspectRatio}</span>
                  <span className="hidden sm:inline text-zinc-500">(Drag to resize)</span>
                </div>

                <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => applyPresetSize('compact')}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition-colors cursor-pointer ${
                      videoSizeMode === 'compact'
                        ? 'bg-blue-600 text-white shadow-2xs'
                        : 'bg-zinc-200 dark:bg-[#141b28] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    Compact
                  </button>
                  <button
                    onClick={() => applyPresetSize('standard')}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition-colors cursor-pointer ${
                      videoSizeMode === 'standard'
                        ? 'bg-blue-600 text-white shadow-2xs'
                        : 'bg-zinc-200 dark:bg-[#141b28] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    Standard
                  </button>
                  <button
                    onClick={() => applyPresetSize('wide')}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition-colors cursor-pointer ${
                      videoSizeMode === 'wide'
                        ? 'bg-blue-600 text-white shadow-2xs'
                        : 'bg-zinc-200 dark:bg-[#141b28] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    Wide
                  </button>
                  <button
                    onClick={() => applyPresetSize('theater')}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition-colors cursor-pointer ${
                      videoSizeMode === 'theater'
                        ? 'bg-blue-600 text-white shadow-2xs'
                        : 'bg-zinc-200 dark:bg-[#141b28] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    Cinema 21:9
                  </button>
                </div>
              </div>

              {/* Study milestones / quick timestamp jumps */}
              <div className="px-4 py-2 bg-zinc-100 dark:bg-[#090d14] border-t border-zinc-200 dark:border-[#18202d] flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
                <span className="text-[11px] text-zinc-500 font-semibold uppercase tracking-wider shrink-0 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-blue-400" />
                  Jump to:
                </span>
                {studyMilestones.map((m) => (
                  <button
                    key={m.time}
                    onClick={() => handleJumpToTimestamp(m.seconds)}
                    className="px-2.5 py-1 rounded-lg bg-[#121824] hover:bg-blue-600 hover:text-white text-zinc-300 text-[11px] font-mono transition-colors whitespace-nowrap cursor-pointer shrink-0 border border-[#1b2436]"
                  >
                    <span className="text-blue-400 font-bold mr-1">{m.time}</span>
                    <span>{m.label}</span>
                  </button>
                ))}
              </div>

              {/* Video metadata and interactive actions */}
              <div className="p-4 sm:p-5 bg-white dark:bg-[#0c1017] border-t border-zinc-200 dark:border-[#1b2230] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 font-mono">
                      {currentLecture.sectionTitle}
                    </span>
                    <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {currentLecture.title}
                    </h2>
                  </div>

                  {/* Previous / Next buttons */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handlePrev}
                      disabled={activeLectureIndex === 0}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#141b28] hover:bg-[#1a2334] disabled:opacity-30 disabled:pointer-events-none text-zinc-200 text-xs font-bold transition-colors cursor-pointer border border-[#1f293d]"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Prev</span>
                    </button>
                    <span className="text-xs font-mono text-zinc-400 px-2 font-semibold">
                      {activeLectureIndex + 1} / {lectures.length}
                    </span>
                    <button
                      onClick={handleNext}
                      disabled={activeLectureIndex === lectures.length - 1}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#141b28] hover:bg-[#1a2334] disabled:opacity-30 disabled:pointer-events-none text-zinc-200 text-xs font-bold transition-colors cursor-pointer border border-[#1f293d]"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Sub row with practice link, youtube link, notes toggle */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-zinc-200 dark:border-[#18202d] text-xs">
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Practice Problem Link */}
                    {currentLecture.problemUrl && (
                      <a
                        href={currentLecture.problemUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border border-amber-500/25 font-semibold transition-colors"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Solve Practice Problem</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    )}

                    {/* Direct YouTube link */}
                    <a
                      href={currentLecture.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/10 text-red-400 hover:bg-red-600/20 border border-red-500/20 font-semibold transition-colors"
                    >
                      <Youtube className="w-3.5 h-3.5 fill-current" />
                      <span>Open on YouTube</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>

                    {/* Notes drawer toggle */}
                    <button
                      onClick={() => setActiveTab(activeTab === 'notes' ? 'info' : 'notes')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-semibold transition-colors cursor-pointer ${
                        activeTab === 'notes'
                          ? 'bg-blue-600 text-white border-blue-500'
                          : 'bg-[#141b28] text-zinc-300 hover:text-white border-[#1f293d]'
                      }`}
                    >
                      <StickyNote className="w-3.5 h-3.5" />
                      <span>{activeTab === 'notes' ? 'Hide Notes' : 'Study Notes'}</span>
                      {notesText.trim() && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                      )}
                    </button>
                  </div>

                  <div className="text-[11px] text-zinc-500 font-mono hidden sm:flex items-center gap-2">
                    <span>Keys:</span>
                    <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">N</kbd> Next
                    <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">P</kbd> Prev
                    <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">C</kbd> Done
                    <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">T</kbd> Theater
                  </div>
                </div>
              </div>
            </div>

            {/* Side Notes Drawer when activeTab === 'notes' */}
            {activeTab === 'notes' && (
              <div className="lg:col-span-4 bg-zinc-50 dark:bg-[#0a0e16] border-t lg:border-t-0 lg:border-l border-zinc-200 dark:border-[#1b2230] p-4 flex flex-col h-full min-h-[360px]">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-[#1b2230] mb-3">
                  <div className="flex items-center gap-2">
                    <StickyNote className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold text-white">Lecture Notes</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Autosaved</span>
                  </div>
                </div>

                {/* Quick note helpers */}
                <div className="flex items-center gap-1.5 mb-2 overflow-x-auto pb-1 scrollbar-none">
                  <button
                    onClick={() => handleInsertNoteSnippet('• Key insight: ')}
                    className="px-2 py-0.5 rounded bg-[#141b28] hover:bg-zinc-800 text-zinc-400 hover:text-white text-[10px] whitespace-nowrap border border-[#1f293d]"
                  >
                    + Bullet
                  </button>
                  <button
                    onClick={() => handleInsertNoteSnippet('```cpp\n// Solution code\n\n```')}
                    className="px-2 py-0.5 rounded bg-[#141b28] hover:bg-zinc-800 text-zinc-400 hover:text-white text-[10px] whitespace-nowrap border border-[#1f293d]"
                  >
                    + Code
                  </button>
                  <button
                    onClick={() => handleInsertNoteSnippet('Time Complexity: O(N)\nSpace Complexity: O(1)')}
                    className="px-2 py-0.5 rounded bg-[#141b28] hover:bg-zinc-800 text-zinc-400 hover:text-white text-[10px] whitespace-nowrap border border-[#1f293d]"
                  >
                    + Complexity
                  </button>
                </div>

                <textarea
                  value={notesText}
                  onChange={(e) => handleSaveNote(e.target.value)}
                  placeholder={`Take notes for Lecture #${currentLecture.index}: ${currentLecture.title}... Insights, edge cases, time complexities.`}
                  className="w-full flex-1 min-h-[220px] p-3 rounded-xl bg-[#06080d] border border-[#1a2233] text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-blue-500 resize-none font-sans leading-relaxed"
                />

                <div className="flex items-center justify-between pt-3 text-[11px] text-zinc-500">
                  <span>{notesText.length} characters</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyNotes}
                      disabled={!notesText.trim()}
                      className="text-blue-400 hover:text-blue-300 disabled:opacity-40 font-semibold cursor-pointer flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{notesCopied ? 'Copied!' : 'Copy'}</span>
                    </button>
                    <button
                      onClick={handleDownloadNotes}
                      disabled={!notesText.trim()}
                      className="text-emerald-400 hover:text-emerald-300 disabled:opacity-40 font-semibold cursor-pointer flex items-center gap-1"
                    >
                      <Download className="w-3 h-3" />
                      <span>Export .md</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="p-12 text-center text-zinc-500">
            Select a video below to start watching.
          </div>
        )}
      </section>

      {/* 4. Controls & Filters Bar */}
      <div className="p-3 sm:p-4 rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3.5">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search all ${lectures.length} lectures by title, topic (e.g., binary search, recursion, trees, DP)...`}
            className="w-full pl-10 pr-9 py-2 rounded-xl bg-[#07090e] border border-[#1e2638] text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              filterStatus === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-[#141b28] text-zinc-400 hover:text-white border border-[#1f293d]'
            }`}
          >
            All ({lectures.length})
          </button>
          <button
            onClick={() => setFilterStatus('incomplete')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              filterStatus === 'incomplete'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-[#141b28] text-zinc-400 hover:text-white border border-[#1f293d]'
            }`}
          >
            To Watch ({lectures.length - completedCount})
          </button>
          <button
            onClick={() => setFilterStatus('completed')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              filterStatus === 'completed'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-[#141b28] text-zinc-400 hover:text-white border border-[#1f293d]'
            }`}
          >
            Done ({completedCount})
          </button>

          {/* Expand / Collapse All (in Accordion mode) */}
          {viewMode === 'accordion' && (
            <div className="flex items-center gap-1 ml-2">
              <button
                onClick={expandAllSections}
                className="px-2.5 py-1.5 rounded-xl bg-[#141b28] hover:bg-[#1a2334] border border-[#1f293d] text-zinc-300 hover:text-white text-xs font-semibold cursor-pointer whitespace-nowrap"
                title="Expand all sections"
              >
                Expand All
              </button>
              <button
                onClick={collapseAllSections}
                className="px-2.5 py-1.5 rounded-xl bg-[#141b28] hover:bg-[#1a2334] border border-[#1f293d] text-zinc-300 hover:text-white text-xs font-semibold cursor-pointer whitespace-nowrap"
                title="Collapse all sections"
              >
                Collapse All
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 5. Main Curriculum Layout (Accordion or Studio) */}
      {viewMode === 'accordion' ? (
        /* ACCORDION TOPIC VIEW (hynts.in structure) */
        <div className="space-y-4">
          {filteredSections.length === 0 ? (
            <div className="p-12 text-center text-zinc-500 bg-white dark:bg-[#0c1017] rounded-2xl border border-zinc-200 dark:border-[#1b2230]">
              <Search className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
              <p className="text-sm font-semibold">No lectures matched "{searchQuery}"</p>
              <p className="text-xs text-zinc-500 mt-1">
                Try searching for another topic or clear the search filter.
              </p>
            </div>
          ) : (
            filteredSections.map((section, sIdx) => {
              const isExpanded = expandedSections[section.title] ?? false;
              const sectionDoneCount = section.videos.filter((v) => isLectureCompleted(v.id)).length;
              const sectionTotal = section.videos.length;
              const sectionPercent =
                sectionTotal > 0 ? Math.round((sectionDoneCount / sectionTotal) * 100) : 0;

              return (
                <div
                  key={section.title || sIdx}
                  className="rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230] overflow-hidden transition-all shadow-md"
                >
                  {/* Section Accordion Trigger */}
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full px-4 sm:px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-[#101622] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-7 h-7 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                        {sIdx + 1}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                          {section.title}
                        </h3>
                        <p className="text-[11px] text-zinc-400 font-medium">
                          {sectionTotal} lectures in this module
                        </p>
                      </div>
                    </div>

                    {/* Progress indicator & toggle */}
                    <div className="flex items-center gap-3.5 shrink-0">
                      <div className="hidden sm:flex items-center gap-2">
                        <div className="w-24 h-2 bg-[#161c28] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 transition-all duration-300"
                            style={{ width: `${sectionPercent}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono font-semibold text-zinc-400">
                          {sectionDoneCount}/{sectionTotal}
                        </span>
                      </div>

                      <div className="w-6 h-6 rounded-md bg-[#141b28] border border-[#1f293d] flex items-center justify-center text-zinc-400">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Section Video Items */}
                  {isExpanded && (
                    <div className="border-t border-zinc-200 dark:border-[#18202d] divide-y divide-[#151c2a]">
                      {section.videos.map((video) => {
                        const isDone = isLectureCompleted(video.id);
                        const isCurrent = lectures[activeLectureIndex]?.id === video.id;

                        return (
                          <div
                            key={video.id}
                            className={`p-3.5 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all ${
                              isCurrent
                                ? 'bg-blue-600/10 border-l-4 border-l-blue-500'
                                : 'hover:bg-[#101520]'
                            }`}
                          >
                            {/* Left: Checkbox + Lecture number + Title */}
                            <div className="flex items-start gap-3 min-w-0 flex-1">
                              {/* Completion Checkbox */}
                              <button
                                onClick={() => toggleSolved(`lec-${playlist.slug}-${video.id}`)}
                                className="mt-0.5 p-0.5 rounded text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0"
                                title={isDone ? 'Mark as incomplete' : 'Mark as completed'}
                              >
                                {isDone ? (
                                  <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                                ) : (
                                  <Circle className="w-5 h-5 text-zinc-500 hover:text-zinc-300" />
                                )}
                              </button>

                              <div className="min-w-0 flex-1 space-y-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-[11px] font-mono font-bold text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded">
                                    #{video.index}
                                  </span>
                                  {isCurrent && (
                                    <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping inline-block" />
                                      Now Playing
                                    </span>
                                  )}
                                  {video.duration && (
                                    <span className="text-[11px] text-zinc-500 font-mono flex items-center gap-1">
                                      <Clock className="w-3 h-3" />
                                      {video.duration}
                                    </span>
                                  )}
                                </div>

                                <h4
                                  onClick={() => handleSelectVideo(video)}
                                  className={`text-xs sm:text-sm font-semibold leading-snug cursor-pointer transition-colors ${
                                    isDone
                                      ? 'text-zinc-400 line-through'
                                      : isCurrent
                                      ? 'text-blue-300 font-bold'
                                      : 'text-zinc-200 hover:text-white'
                                  }`}
                                >
                                  {video.title}
                                </h4>
                              </div>
                            </div>

                            {/* Right Actions: Play Video Button + Practice Problem Link + YouTube Link */}
                            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center pl-8 sm:pl-0">
                              {video.problemUrl && (
                                <a
                                  href={video.problemUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141b28] hover:bg-[#1a2334] border border-[#1f293d] text-amber-400 text-xs font-semibold transition-colors"
                                  title="Solve on LeetCode / Practice"
                                >
                                  <Code2 className="w-3.5 h-3.5" />
                                  <span className="hidden md:inline">Practice</span>
                                </a>
                              )}

                              <a
                                href={video.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-xl bg-[#141b28] hover:bg-[#1a2334] border border-[#1f293d] text-zinc-400 hover:text-red-400 transition-colors"
                                title="Open in YouTube"
                              >
                                <Youtube className="w-3.5 h-3.5" />
                              </a>

                              {/* Instant Play Button */}
                              <button
                                onClick={() => handleSelectVideo(video)}
                                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs ${
                                  isCurrent
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-zinc-800 hover:bg-blue-600 text-zinc-200 hover:text-white'
                                }`}
                              >
                                <Play className="w-3.5 h-3.5 fill-current" />
                                <span>{isCurrent ? 'Playing' : 'Play Video'}</span>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      ) : (
        /* STUDIO SPLIT VIEW (Two-column layout for continuous study) */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230] space-y-3">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Lecture Details</span>
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Lecture #{currentLecture?.index}: <span className="text-white font-semibold">{currentLecture?.title}</span>.
                Part of the <span className="text-blue-400 font-semibold">{currentLecture?.sectionTitle}</span> module.
              </p>
              {currentLecture?.problemUrl && (
                <div className="pt-2 border-t border-zinc-200 dark:border-[#18202d] flex items-center gap-2">
                  <span className="text-xs text-zinc-400">Associated Practice Problem:</span>
                  <a
                    href={currentLecture.problemUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold hover:bg-amber-500/20"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Solve on LeetCode</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right curriculum column */}
          <div className="rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230] overflow-hidden flex flex-col h-[600px]">
            <div className="p-3.5 border-b border-zinc-200 dark:border-[#1b2230] bg-zinc-50 dark:bg-[#0e131d] flex items-center justify-between">
              <span className="text-xs font-bold text-white">Course Curriculum</span>
              <span className="text-[11px] font-mono text-zinc-400">
                {completedCount}/{lectures.length} Done
              </span>
            </div>

            <div className="overflow-y-auto divide-y divide-[#151c2a] flex-1 p-2 space-y-1">
              {lectures.map((lec, idx) => {
                const isDone = isLectureCompleted(lec.id);
                const isCurrent = idx === activeLectureIndex;

                return (
                  <button
                    key={lec.id}
                    onClick={() => handleSelectVideo(lec, false)}
                    className={`w-full p-2.5 text-left flex items-start gap-2.5 rounded-xl transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-blue-600/15 border border-blue-500/30 text-white'
                        : 'hover:bg-zinc-800/50 text-zinc-300'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                        isDone
                          ? 'bg-emerald-500 text-white'
                          : isCurrent
                          ? 'bg-blue-600 text-white'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {isDone ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : idx + 1}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-xs font-semibold leading-snug line-clamp-2 ${
                          isCurrent ? 'text-blue-300 font-bold' : 'text-zinc-200'
                        }`}
                      >
                        {lec.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1 text-[10px] text-zinc-500">
                        <span className="font-mono">{lec.duration}</span>
                        <span>•</span>
                        <span className="truncate">{lec.sectionTitle}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 6. Floating Picture-in-Picture Mini-Player when scrolled down */}
      {showMiniPlayer && !dismissMiniPlayer && currentLecture && (
        <aside
          aria-label="Floating video player"
          className="fixed bottom-5 right-5 z-50 w-72 sm:w-80 rounded-2xl bg-white dark:bg-[#0c1017]/95 backdrop-blur-xl border border-blue-500/40 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5"
        >
          <div className="relative aspect-video bg-black">
            {currentLecture.youtubeId && (
              <iframe
                className="w-full h-full border-0 pointer-events-auto"
                src={embedSrc}
                title={`Mini ${currentLecture.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            {/* Top controls over mini player */}
            <div className="absolute top-2 right-2 flex items-center gap-1 z-10">
              <button
                onClick={() => {
                  playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="p-1 rounded bg-black/70 hover:bg-blue-600 text-white text-xs cursor-pointer"
                title="Expand to main player"
              >
                <Maximize2 className="w-3 h-3" />
              </button>
              <button
                onClick={() => {
                  setDismissMiniPlayer(true);
                  miniPlayerDismissRef.current = true;
                }}
                className="p-1 rounded bg-black/70 hover:bg-red-600 text-white text-xs cursor-pointer"
                title="Dismiss mini player"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="p-3 space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-bold text-blue-400 font-mono truncate">
                Lec #{currentLecture.index}
              </span>
              <span className="text-zinc-500 truncate max-w-[140px]">
                {currentLecture.sectionTitle}
              </span>
            </div>
            <p className="text-xs font-semibold text-white truncate">{currentLecture.title}</p>
            <div className="flex items-center justify-between pt-1 border-t border-zinc-200 dark:border-[#1b2230]">
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  disabled={activeLectureIndex === 0}
                  className="p-1 rounded bg-[#141b28] hover:bg-zinc-800 disabled:opacity-30 text-white"
                  title="Previous"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={activeLectureIndex === lectures.length - 1}
                  className="p-1 rounded bg-[#141b28] hover:bg-zinc-800 disabled:opacity-30 text-white"
                  title="Next"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={() => toggleSolved(`lec-${playlist.slug}-${currentLecture.id}`)}
                className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
              >
                <CheckCircle2 className="w-3 h-3" />
                <span>{isLectureCompleted(currentLecture.id) ? 'Done' : 'Mark Done'}</span>
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 7. Reset Progress Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white dark:bg-[#0c1017] border border-[#1f293d] rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Reset Course Progress?</h3>
                <p className="text-xs text-zinc-400">This will uncheck all completed lectures for this playlist.</p>
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              Are you sure you want to reset your progress for <span className="text-white font-semibold">{playlist.title}</span>? Your personal notes will be kept safe.
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2 rounded-xl bg-[#141b28] hover:bg-[#1a2334] text-zinc-300 text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleResetCourseProgress}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold cursor-pointer"
              >
                Yes, Reset Progress
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
