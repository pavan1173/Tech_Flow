import React, { useState, useMemo } from 'react';
import { hyntsPlaylists, HyntsPlaylist } from '../data/hyntsPlaylistsData';
import { PlaylistThumbnail } from '../components/PlaylistThumbnail';
import {
  Youtube,
  Play,
  Sparkles,
  BookOpen,
  Layers,
  ChevronRight,
  Clock,
  Award,
  Search,
  CheckCircle2,
  Tv
} from 'lucide-react';

interface PlaylistsPageProps {
  initialCategory?: string;
  navigate: (to: string) => void;
}

export const PlaylistsPage: React.FC<PlaylistsPageProps> = ({
  initialCategory = 'all',
  navigate,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Playlists', icon: Tv, count: hyntsPlaylists.length },
    { id: 'dsa', label: 'DSA Playlists', icon: Sparkles, count: hyntsPlaylists.filter(p => p.category === 'dsa').length },
    { id: 'dbms', label: 'DBMS', icon: BookOpen, count: hyntsPlaylists.filter(p => p.category === 'dbms').length },
    { id: 'os', label: 'Operating Systems', icon: Award, count: hyntsPlaylists.filter(p => p.category === 'os').length },
    { id: 'oops', label: 'OOPS', icon: BookOpen, count: hyntsPlaylists.filter(p => p.category === 'oops').length },
    { id: 'system-design', label: 'System Design', icon: Layers, count: hyntsPlaylists.filter(p => p.category === 'system-design').length },
  ];

  const filteredPlaylists = useMemo(() => {
    return hyntsPlaylists.filter((p) => {
      const matchesCategory =
        activeCategory === 'all' || p.category === activeCategory;
      const matchesQuery =
        !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.channel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  const getPlaylistDetailRoute = (playlist: HyntsPlaylist) => {
    if (playlist.category === 'dsa') return `/preparation/dsa-playlists/${playlist.slug}`;
    if (playlist.category === 'dbms') return `/preparation/dbms-playlists/${playlist.slug}`;
    if (playlist.category === 'os') return `/preparation/os-playlists/${playlist.slug}`;
    if (playlist.category === 'oops') return `/preparation/oops-playlists/${playlist.slug}`;
    if (playlist.category === 'system-design') return `/preparation/system-design-playlists/${playlist.slug}`;
    return `/preparation/dsa-playlists/${playlist.slug}`;
  };

  return (
    <div className="min-h-screen bg-[#fcfcfb] dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-6 max-w-7xl mx-auto pb-24 transition-colors duration-200">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 shrink-0" />
        <span className="text-zinc-900 dark:text-white font-medium">Video Playlists</span>
      </nav>

      {/* Header */}
      <div className="space-y-3 pb-2 border-b border-zinc-200 dark:border-[#18202d]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold">
          <Youtube className="w-3.5 h-3.5 text-red-500" />
          <span>Complete Video Learning Hub</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          All Courses & Video Playlists
        </h1>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
          Follow authentic, comprehensive playlists across Data Structures & Algorithms, DBMS, Operating Systems, OOPs, and System Design. Every course features an embedded video player, lecture tracking, practice problem links, and autosaved notes.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-white dark:bg-[#0c1017] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-[#1b2230]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative min-w-[240px] md:w-72">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search playlists, topics, channels..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230] text-xs text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Playlists Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {filteredPlaylists.map((playlist) => {
          const detailUrl = getPlaylistDetailRoute(playlist);

          return (
            <div
              key={playlist.slug}
              className="group flex flex-col bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230] hover:border-blue-500/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Thumbnail Container */}
              <div
                onClick={() => navigate(detailUrl)}
                className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-zinc-200 dark:border-[#1b2230] cursor-pointer"
              >
                <PlaylistThumbnail type={playlist.thumbnailType} subject={playlist.category.toUpperCase()} />

                {/* Badge top-left */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold">
                    {playlist.badge}
                  </span>
                </div>

                {/* Duration top-right */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-zinc-300 text-[11px] font-mono font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-zinc-400" />
                    {playlist.totalDuration}
                  </span>
                </div>

                {/* Hover Play Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Content info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{playlist.instructor}</span>
                    <span className="text-amber-500 dark:text-amber-400 font-bold">★ {playlist.rating}</span>
                  </div>

                  <h2
                    onClick={() => navigate(detailUrl)}
                    className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors leading-snug line-clamp-2 cursor-pointer"
                  >
                    {playlist.title}
                  </h2>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                    {playlist.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-200 dark:border-[#18202d] flex items-center justify-between text-xs">
                  <span className="font-mono text-zinc-500 dark:text-zinc-400 font-semibold">
                    {playlist.totalVideos} Lectures
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={playlist.playlistUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-[#141b28] dark:hover:bg-[#1a2334] text-zinc-500 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                      title="Open in YouTube"
                    >
                      <Youtube className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => navigate(detailUrl)}
                      className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-blue-600/20"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Start Course</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
