import React from 'react';
import { Sparkles, ArrowRight, Heart, Users, Target, ShieldCheck } from 'lucide-react';

interface AboutPageProps {
  navigate: (to: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-12 font-lexend">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto pt-6 space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff]">
          <Sparkles className="w-3.5 h-3.5" />
          About TeachFlow
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white leading-tight">
          Democratizing Tech Placement Preparation for Everyone
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          TeachFlow was built by engineers, for engineers. We believe that talent is everywhere, but the right resources, clear direction, and interview roadmaps were previously scattered and hidden.
        </p>
      </div>

      {/* Founder Letter Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 p-1 shrink-0 shadow-lg">
            <img
              src="https://api.dicebear.com/8.x/bottts/svg?seed=TeachFlowEngineer&backgroundColor=6366f1"
              alt="TeachFlow Creator"
              className="w-full h-full object-cover rounded-[12px]"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              One Of You, Who Built This For You
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              Software Engineer &amp; Creator of TeachFlow
            </p>
          </div>
        </div>

        <blockquote className="border-l-4 border-[#6C47FF] pl-4 italic text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-medium">
          "Your first offer letter is my biggest achievement."
        </blockquote>

        <div className="space-y-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <p>
            Hey, I'm the creator behind TeachFlow. I began my journey with a Diploma in Computer Engineering, chose coding over the traditional path, and spent my college years building real products that real people use.
          </p>
          <p>
            As a software engineer by day, I love spending my evenings and weekends building TeachFlow — a completely free community platform born from my own frustration of not finding the right resources during placements.
          </p>
          <p>
            Remember: <strong className="text-zinc-900 dark:text-white">You don't need a tier-1 college to land your dream job.</strong> You just need the right direction, discipline, and the courage to keep going. Let's crack it together, one skill, one resource, one hint at a time.
          </p>
        </div>

        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div className="text-xs text-zinc-500">
            TeachFlow Community · 100k+ Engineers
          </div>
          <a
            href="/preparation"
            onClick={(e) => handleNav(e, '/preparation')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#6C47FF] text-white text-xs font-semibold hover:bg-[#5b37ea] transition-all"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-zinc-900 dark:text-white">
            100% Free Forever
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Essential interview prep materials, company sheets, and roadmaps must be freely accessible to every aspiring engineer.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-zinc-900 dark:text-white">
            Data-Backed Curation
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Every problem and query is compiled directly from candidate interview experiences and verified online assessments.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-zinc-900 dark:text-white">
            Active Community
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Over 100,000 students and early career engineers sharing daily hiring updates, referral leads, and peer support.
          </p>
        </div>
      </div>
    </div>
  );
};
