import React, { useState } from 'react';
import { playlistsData } from '../data/common';
import { Youtube, ExternalLink, Play, Sparkles, BookOpen, Layers } from 'lucide-react';

interface PlaylistsPageProps {
  initialTab?: 'dsa' | 'dbms' | 'systemDesign';
  navigate: (to: string) => void;
}

export const PlaylistsPage: React.FC<PlaylistsPageProps> = ({ initialTab = 'dsa' }) => {
  const [activeTab, setActiveTab] = useState<'dsa' | 'dbms' | 'systemDesign'>(initialTab);

  const tabs = [
    { id: 'dsa', label: 'DSA Playlists', icon: Sparkles, count: playlistsData?.dsa?.length || 4 },
    { id: 'dbms', label: 'Core Subjects (DBMS, OS, CN)', icon: BookOpen, count: playlistsData?.dbms?.length || 3 },
    { id: 'systemDesign', label: 'System Design (HLD/LLD)', icon: Layers, count: playlistsData?.systemDesign?.length || 5 },
  ];

  const currentList = playlistsData?.[activeTab] || [];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8 font-lexend">
      {/* Header */}
      <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff] mb-2">
          <Youtube className="w-3.5 h-3.5" />
          Curated Video Courses
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
          Best Video Playlists for Tech Interview Prep (2026-27)
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          Comprehensive, handpicked video tutorials and courses from the top engineering educators worldwide. Never get stuck wondering which course to follow.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-[#6C47FF] text-white shadow-md shadow-indigo-500/20'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500'}`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Playlists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentList.map((item: any) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-indigo-500/5 cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#6C47FF] dark:text-[#9f85ff]">
                  {item.badge}
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  {item.videos}
                </span>
              </div>

              <h2 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-[#6C47FF] dark:group-hover:text-[#9f85ff] transition-colors mb-1">
                {item.title}
              </h2>
              <p className="text-xs text-zinc-500 mb-3">
                Channel: {item.channel}
              </p>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {item.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs font-semibold text-red-500 dark:text-red-400">
              <span className="flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 fill-current" />
                Watch on YouTube
              </span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
