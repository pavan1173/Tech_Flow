import React, { useState, useMemo } from 'react';
import { mostAskedQuestionsTopics, TechnologyTopic } from '../data/mostAskedQuestionsData';
import { TechIcon } from '../components/TechIcon';
import { useAuth } from '../context/AuthContext';
import { AuthGate } from '../components/AuthGate';
import {
  ChevronRight,
  Search,
  AlignLeft,
} from 'lucide-react';

interface MostAskedQuestionsPageProps {
  navigate: (to: string) => void;
}

export const MostAskedQuestionsPage: React.FC<MostAskedQuestionsPageProps> = ({ navigate }) => {
  const { isAuthenticated } = useAuth();
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
        className="group relative rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230] hover:border-blue-500/50 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-0.5 cursor-pointer select-none"
      >
        <div className="space-y-3.5">
          {/* Top Row: Icon and Title */}
          <div className="flex items-center gap-3.5">
            <TechIcon type={topic.iconType} className="w-10 h-10 shrink-0" />
            <h3 className="text-base sm:text-lg font-extrabold text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors">
              {topic.title}
            </h3>
          </div>

          {/* Short Description */}
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2 font-normal">
            {topic.shortDescription}
          </p>
        </div>

        {/* Bottom Question Count */}
        <div className="pt-4 mt-4 border-t border-zinc-200 dark:border-[#171e2c] flex items-center gap-2 text-xs font-medium text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
          <AlignLeft className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
          <span>{topic.totalQuestions} Questions</span>
        </div>
      </a>
    );
  };

  const renderSections = () => (
    <div className="space-y-8">
      {coreSubjects.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Core Computer Science
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreSubjects.map(renderTopicCard)}
          </div>
        </div>
      )}

      {webDevSubjects.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Web Development
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {webDevSubjects.map(renderTopicCard)}
          </div>
        </div>
      )}

      {progLangSubjects.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Programming Languages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {progLangSubjects.map(renderTopicCard)}
          </div>
        </div>
      )}

      {devopsSubjects.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Cloud & DevOps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {devopsSubjects.map(renderTopicCard)}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-8 max-w-7xl mx-auto transition-colors">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
        >
          Preparation
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
        <span className="text-zinc-900 dark:text-white font-medium">Most Asked Questions</span>
      </div>

      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Most Asked Interview Questions
        </h1>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal">
          Frequently asked technical interview questions across various technologies
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-xl">
        <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search technologies (e.g., DBMS, Operating System, React, Docker...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-[#0d121c] border border-zinc-200 dark:border-[#1b2333] text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
        />
      </div>

      {/* Topic Content */}
      {filteredTopics.length === 0 ? (
        <div className="text-center py-12 text-zinc-500 text-sm">
          No technologies found matching "{searchQuery}".
        </div>
      ) : !isAuthenticated ? (
        <AuthGate
          totalCount="all 1000+"
          featureName="most asked interview questions"
          title="Sign in to access Most Asked Questions"
        >
          {renderSections()}
        </AuthGate>
      ) : (
        renderSections()
      )}
    </div>
  );
};
