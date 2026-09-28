import React from 'react';
import { systemDesignPlaylistsList, SystemDesignPlaylist } from '../data/systemDesignData';
import { PlaylistThumbnail } from '../components/PlaylistThumbnail';
import { ChevronRight, Play } from 'lucide-react';

interface SystemDesignPlaylistsPageProps {
  navigate: (to: string) => void;
}

export const SystemDesignPlaylistsPage: React.FC<SystemDesignPlaylistsPageProps> = ({ navigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-6 max-w-7xl mx-auto">
      {/* Breadcrumb matching screenshot */}
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-white transition-colors"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
        <span className="text-white font-medium">System Design Playlists</span>
      </div>

      {/* Header Section matching screenshot */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white hidden">
          System Design Playlists
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 font-normal">
          Master system design concepts with comprehensive video tutorials covering HLD and LLD
        </p>
      </div>

      {/* Playlists Grid matching screenshot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 pt-2">
        {systemDesignPlaylistsList.map((playlist: SystemDesignPlaylist) => {
          const detailUrl = `/preparation/system-design-playlists/${playlist.slug}`;

          return (
            <a
              key={playlist.slug}
              href={detailUrl}
              onClick={(e) => handleNav(e, detailUrl)}
              className="group flex flex-col space-y-3 cursor-pointer select-none"
            >
              {/* Thumbnail Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#1e2636] group-hover:border-zinc-500 transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.01]">
                <PlaylistThumbnail
                  type={playlist.thumbnailType}
                  subject="SYSTEM DESIGN"
                />

                {/* Play Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Title under thumbnail matching screenshot */}
              <div className="space-y-1">
                <h2 className="font-bold text-xs sm:text-sm text-white group-hover:text-zinc-200 transition-colors leading-snug line-clamp-2">
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
