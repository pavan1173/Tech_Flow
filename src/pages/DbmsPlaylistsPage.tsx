import React from 'react';
import { hyntsPlaylists } from '../data/hyntsPlaylistsData';
import { coreSubjectsData } from '../data/coreSubjectsData';
import { PlaylistThumbnail } from '../components/PlaylistThumbnail';
import { useAuth } from '../context/AuthContext';
import { AuthGate } from '../components/AuthGate';
import { ChevronRight, Play, Clock } from 'lucide-react';

interface DbmsPlaylistsPageProps {
  navigate: (to: string) => void;
}

export const DbmsPlaylistsPage: React.FC<DbmsPlaylistsPageProps> = ({ navigate }) => {
  const { isAuthenticated } = useAuth();
  const hyntsDbms = hyntsPlaylists.filter((p) => p.category === 'dbms');
  const dbmsList = hyntsDbms.length > 0 ? hyntsDbms : coreSubjectsData.dbms;

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  const renderCards = (list: typeof dbmsList) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
      {list.map((playlist) => {
        const detailUrl = `/preparation/dbms-playlists/${playlist.slug}`;

        return (
          <a
            key={playlist.slug}
            href={detailUrl}
            onClick={(e) => handleNav(e, detailUrl)}
            className="group flex flex-col bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230] hover:border-blue-500/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1 cursor-pointer select-none"
          >
            {/* Thumbnail Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-zinc-200 dark:border-[#1b2230]">
              <PlaylistThumbnail type={playlist.thumbnailType} subject="DBMS" />
              
              {/* Duration pill */}
              <div className="absolute top-3 right-3 z-10">
                <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-zinc-300 text-[11px] font-mono font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-zinc-400" />
                  {playlist.totalDuration}
                </span>
              </div>

              {/* Play Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-all duration-300">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>
            </div>

            {/* Title & Info */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{playlist.instructor}</span>
                  <span className="text-amber-500 font-bold">★ {playlist.rating}</span>
                </div>

                <h2 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors leading-snug line-clamp-2">
                  {playlist.title}
                </h2>
                
                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                  {playlist.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-[#18202d] flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                <span className="font-mono font-semibold">
                  {playlist.totalVideos} Lectures
                </span>

                <span className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform font-bold inline-flex items-center gap-1 text-xs">
                  Watch Playlist →
                </span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-6 max-w-7xl mx-auto pb-24 transition-colors">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
        <span className="text-zinc-900 dark:text-white font-medium">DBMS Playlists</span>
      </div>

      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          DBMS Playlists
        </h1>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal">
          Master database management systems, normalization, indexing, transactions, and SQL queries with comprehensive video tutorials
        </p>
      </div>

      {/* Playlists Grid */}
      {!isAuthenticated ? (
        <AuthGate
          totalCount={dbmsList.length}
          featureName="DBMS video playlists"
          title="Sign in to access DBMS Playlists"
        >
          {renderCards(dbmsList.slice(0, 2))}
        </AuthGate>
      ) : (
        renderCards(dbmsList)
      )}
    </div>
  );
};
