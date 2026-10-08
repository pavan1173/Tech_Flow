import React from 'react';
import { hyntsPlaylists } from '../data/hyntsPlaylistsData';
import { systemDesignPlaylistsList, SystemDesignPlaylist } from '../data/systemDesignData';
import { PlaylistThumbnail } from '../components/PlaylistThumbnail';
import { ChevronRight, Play, Clock, Award } from 'lucide-react';

interface SystemDesignPlaylistsPageProps {
  navigate: (to: string) => void;
}

export const SystemDesignPlaylistsPage: React.FC<SystemDesignPlaylistsPageProps> = ({ navigate }) => {
  const desiredOrder = [
    'gaurav-sen-system-design-playlist',
    'exponent-system-design-playlist',
    'hello-interview-system-design-playlist',
    'code-with-aryan-system-design-playlist',
    'coder-army-system-design-playlist',
    'engineering-digest-system-design-playlist',
  ];

  const hyntsSd = hyntsPlaylists.filter((p) => p.category === 'system-design');
  const rawList = hyntsSd.length > 0 ? hyntsSd : systemDesignPlaylistsList;
  const sdList = [...rawList].sort((a, b) => {
    const idxA = desiredOrder.indexOf(a.slug);
    const idxB = desiredOrder.indexOf(b.slug);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return 0;
  });

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfb] dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-6 max-w-7xl mx-auto pb-24 transition-colors duration-200">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600" />
        <span className="text-zinc-900 dark:text-white font-medium">System Design</span>
      </div>

      {/* Header Section matching screenshot */}
      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          System Design Playlists
        </h1>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal max-w-3xl">
          Master system design concepts with comprehensive video tutorials covering HLD and LLD
        </p>
      </div>

      {/* Playlists Grid matching screenshot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
        {sdList.map((playlist: any) => {
          const detailUrl = `/preparation/system-design-playlists/${playlist.slug}`;

          return (
            <a
              key={playlist.slug}
              href={detailUrl}
              onClick={(e) => handleNav(e, detailUrl)}
              className="group flex flex-col bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1a2333] hover:border-zinc-300 dark:hover:border-zinc-700/80 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl cursor-pointer select-none"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950">
                <PlaylistThumbnail
                  type={playlist.thumbnailType || 'system-design'}
                  subject="SYSTEM DESIGN"
                  slug={playlist.slug}
                  alt={playlist.title}
                />
              </div>

              {/* Title Info matching screenshot */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <h2 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                  {playlist.title}
                </h2>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
