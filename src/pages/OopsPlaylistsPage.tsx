import React from 'react';
import { coreSubjectsData } from '../data/coreSubjectsData';
import { PlaylistThumbnail } from '../components/PlaylistThumbnail';
import { ChevronRight, Play } from 'lucide-react';

interface OopsPlaylistsPageProps {
  navigate: (to: string) => void;
}

export const OopsPlaylistsPage: React.FC<OopsPlaylistsPageProps> = ({ navigate }) => {
  const oopsList = coreSubjectsData.oops;

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-6 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-white transition-colors"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
        <span className="text-white font-medium">OOPS Playlists</span>
      </div>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
          OOPS Playlists
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 font-normal">
          Master object-oriented programming, design patterns, encapsulation, polymorphism, and inheritance with top courses
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-2">
        {oopsList.map((playlist) => {
          const detailUrl = `/preparation/oops-playlists/${playlist.slug}`;

          return (
            <a
              key={playlist.slug}
              href={detailUrl}
              onClick={(e) => handleNav(e, detailUrl)}
              className="group flex flex-col space-y-3 cursor-pointer select-none"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#1e2636] group-hover:border-purple-500/60 transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.01]">
                <PlaylistThumbnail type={playlist.thumbnailType} subject="OOPS" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-xl">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-bold text-sm sm:text-base text-zinc-100 group-hover:text-purple-400 transition-colors line-clamp-2">
                  {playlist.title}
                </h2>
                <div className="flex items-center gap-3 mt-1.5 text-xs text-zinc-500 font-medium">
                  <span>{playlist.channel}</span>
                  <span>•</span>
                  <span>{playlist.totalVideos} Videos</span>
                  <span>•</span>
                  <span className="text-amber-400">★ {playlist.rating}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
