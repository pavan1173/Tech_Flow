import React, { useState, useMemo } from 'react';
import { mostAskedQuestionsTopics, TechnologyTopic } from '../data/mostAskedQuestionsData';
import { TechIcon } from '../components/TechIcon';
import {
  ChevronRight,
  Search,
  BookMarked,
  AlignLeft,
  Sparkles
} from 'lucide-react';

interface MostAskedQuestionsPageProps {
  navigate: (to: string) => void;
}

export const MostAskedQuestionsPage: React.FC<MostAskedQuestionsPageProps> = ({ navigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  // Filter topics by search
  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return mostAskedQuestionsTopics;
    const query = searchQuery.toLowerCase();
    return mostAskedQuestionsTopics.filter(
      (t) =>
        t.title.toLowerCase().includes(query) ||
        t.shortDescription.toLowerCase().includes(query) ||
        t.group.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Group topics
  const coreSubjects = filteredTopics.filter((t) => t.group === 'Core Subjects');
  const webDevSubjects = filteredTopics.filter((t) => t.group === 'Web Development');
  const progLangSubjects = filteredTopics.filter((t) => t.group === 'Programming Languages');
  const devopsSubjects = filteredTopics.filter((t) => t.group === 'Cloud & DevOps');

  const renderTopicCard = (topic: TechnologyTopic) => {
    const detailUrl = `/preparation/most-asked-questions/${topic.slug}`;

    return (
      <a
        key={topic.slug}
        href={detailUrl}
        onClick={(e) => handleNav(e, detailUrl)}
        className="group relative rounded-2xl bg-[#0c1017] border border-[#1b2230] hover:border-blue-500/50 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-0.5 cursor-pointer select-none"
      >
        <div className="space-y-3.5">
          {/* Top Row: Icon and Title */}
          <div className="flex items-center gap-3.5">
            <TechIcon type={topic.iconType} className="w-10 h-10 shrink-0" />
            <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-blue-400 transition-colors">
              {topic.title}
            </h3>
          </div>

          {/* Short Description */}
          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 font-normal">
            {topic.shortDescription}
          </p>
        </div>

        {/* Bottom Question Count */}
        <div className="pt-4 mt-4 border-t border-[#171e2c] flex items-center gap-2 text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
          <AlignLeft className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
          <span>{topic.totalQuestions} Questions</span>
        </div>
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-8 max-w-7xl mx-auto">
      {/* Breadcrumb matching screenshot */}
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-white transition-colors"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
        <span className="text-white font-medium">Most Asked Questions</span>
      </div>

      {/* Header Section matching screenshot */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          Most Asked Interview Questions
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 font-normal">
          Frequently asked technical interview questions across various technologies
        </p>
      </div>

      {/* Search Bar matching screenshot */}
      <div className="relative max-w-lg">
        <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search technologies (e.g., JavaScript, React, Python...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-2.5 sm:py-3 rounded-2xl bg-[#0c1017] border border-[#1b2230] text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
        />
      </div>

      {/* Core Subjects Section matching screenshot */}
      {coreSubjects.length > 0 && (
        <div className="space-y-4 pt-2">
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Core Subjects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {coreSubjects.map(renderTopicCard)}
          </div>
        </div>
      )}

      {/* Web Development Section matching screenshot */}
      {webDevSubjects.length > 0 && (
        <div className="space-y-4 pt-4">
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Web Development
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {webDevSubjects.map(renderTopicCard)}
          </div>
        </div>
      )}

      {/* Programming Languages Section matching screenshot */}
      {progLangSubjects.length > 0 && (
        <div className="space-y-4 pt-4">
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Programming Languages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {progLangSubjects.map(renderTopicCard)}
          </div>
        </div>
      )}

      {/* Cloud & DevOps Section */}
      {devopsSubjects.length > 0 && (
        <div className="space-y-4 pt-4">
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Cloud & DevOps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {devopsSubjects.map(renderTopicCard)}
          </div>
        </div>
      )}
    </div>
  );
};
