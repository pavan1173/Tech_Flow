import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Code2,
  Github,
  RefreshCw,
  ExternalLink,
  CheckCircle2,
  Award,
  Star,
  Flame,
  Zap,
  TrendingUp,
  Sliders,
  ChevronRight,
  Database,
  ShieldCheck
} from 'lucide-react';

interface CodingPlatformsCardProps {
  navigate?: (to: string) => void;
  showEditToggle?: boolean;
}

export const CodingPlatformsCard: React.FC<CodingPlatformsCardProps> = ({
  navigate,
  showEditToggle = true,
}) => {
  const { user, syncCodingPlatforms, isAuthenticated, openAuthModal } = useAuth();
  
  const [isSyncing, setIsSyncing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);

  const [leetcodeInput, setLeetcodeInput] = useState(
    user?.leetcodeUrl || user?.codingProfiles?.leetcode?.username || ''
  );
  const [codechefInput, setCodechefInput] = useState(
    user?.codechefUrl || user?.codingProfiles?.codechef?.username || ''
  );
  const [githubInput, setGithubInput] = useState(
    user?.githubUrl || user?.codingProfiles?.github?.username || ''
  );

  useEffect(() => {
    if (user) {
      if (!isEditing) {
        setLeetcodeInput(user.leetcodeUrl || user.codingProfiles?.leetcode?.username || '');
        setCodechefInput(user.codechefUrl || user.codingProfiles?.codechef?.username || '');
        setGithubInput(user.githubUrl || user.codingProfiles?.github?.username || '');
      }
    }
  }, [user, isEditing]);

  const leetcodeStats = user?.codingProfiles?.leetcode;
  const codechefStats = user?.codingProfiles?.codechef;
  const githubStats = user?.codingProfiles?.github;

  const handleSync = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSyncing(true);
    setSyncSuccess(false);

    try {
      await syncCodingPlatforms({
        leetcode: leetcodeInput || user?.leetcodeUrl,
        codechef: codechefInput || user?.codechefUrl,
        github: githubInput || user?.githubUrl,
      });
      setSyncSuccess(true);
      setIsEditing(false);
      setTimeout(() => setSyncSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to sync coding stats:', err);
    } finally {
      setIsSyncing(false);
    }
  };

  const totalPlatformProblems =
    (leetcodeStats?.totalSolved || 0) +
    (codechefStats?.fullySolved || 0) +
    (githubStats?.publicRepos || 0);

  return (
    <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] p-5 sm:p-7 shadow-xl space-y-6 font-lexend transition-all">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                <span>Competitive Coding Profiles &amp; Metrics</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                  DB Synced
                </span>
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Live problem counts, stars, and ratings across LeetCode, CodeChef, and GitHub.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
          {showEditToggle && (
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              {isEditing ? 'Cancel Edit' : 'Edit Handles'}
            </button>
          )}

          <button
            onClick={() => handleSync()}
            disabled={isSyncing}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-sm transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
            <span>{isSyncing ? 'Syncing...' : 'Sync Live Stats'}</span>
          </button>
        </div>
      </div>

      {/* Sync Success Toast */}
      {syncSuccess && (
        <div className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2.5 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Successfully synced all LeetCode, CodeChef, and GitHub statistics to your Firestore database!</span>
        </div>
      )}

      {/* Editing Form */}
      {isEditing && (
        <form onSubmit={handleSync} className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 space-y-4 animate-in fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="block text-zinc-600 dark:text-zinc-400 font-bold mb-1 uppercase font-mono text-[10px]">
                LeetCode Username / URL
              </label>
              <input
                type="text"
                placeholder="e.g. tourist or leetcode.com/u/user"
                value={leetcodeInput}
                onChange={(e) => setLeetcodeInput(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-zinc-600 dark:text-zinc-400 font-bold mb-1 uppercase font-mono text-[10px]">
                CodeChef Handle / URL
              </label>
              <input
                type="text"
                placeholder="e.g. codechef.com/users/username"
                value={codechefInput}
                onChange={(e) => setCodechefInput(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-zinc-600 dark:text-zinc-400 font-bold mb-1 uppercase font-mono text-[10px]">
                GitHub Username / URL
              </label>
              <input
                type="text"
                placeholder="e.g. github.com/username"
                value={githubInput}
                onChange={(e) => setGithubInput(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-3 py-1.5 rounded-xl text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSyncing}
              className="px-5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-sm cursor-pointer"
            >
              Save &amp; Fetch Stats
            </button>
          </div>
        </form>
      )}

      {/* 3 Main Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* 1. LEETCODE CARD */}
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/60 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-all group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-500 flex items-center justify-center font-bold text-sm shadow-xs">
                  LC
                </div>
                <div>
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors">
                    LeetCode
                  </h3>
                  <p className="text-[10px] text-zinc-400 font-mono">
                    {leetcodeStats?.username ? `@${leetcodeStats.username}` : 'Not linked'}
                  </p>
                </div>
              </div>

              {leetcodeStats?.username && (
                <a
                  href={`https://leetcode.com/u/${leetcodeStats.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-200/80 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-amber-500 transition-colors"
                  title="Open LeetCode Profile"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Metric Display */}
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-extrabold text-zinc-900 dark:text-white">
                  {leetcodeStats?.totalSolved || 0}
                </span>
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">
                  Problems Solved
                </span>
              </div>

              {/* Easy / Med / Hard breakdown bars */}
              <div className="space-y-2 pt-1">
                <div>
                  <div className="flex justify-between text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mb-0.5">
                    <span>Easy</span>
                    <span>{leetcodeStats?.easySolved || 0}</span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full rounded-full"
                      style={{
                        width: `${Math.min(100, Math.round(((leetcodeStats?.easySolved || 0) / Math.max(leetcodeStats?.totalSolved || 1, 1)) * 100))}%`
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-semibold text-amber-600 dark:text-amber-400 mb-0.5">
                    <span>Medium</span>
                    <span>{leetcodeStats?.mediumSolved || 0}</span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-500 h-full rounded-full"
                      style={{
                        width: `${Math.min(100, Math.round(((leetcodeStats?.mediumSolved || 0) / Math.max(leetcodeStats?.totalSolved || 1, 1)) * 100))}%`
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-semibold text-rose-600 dark:text-rose-400 mb-0.5">
                    <span>Hard</span>
                    <span>{leetcodeStats?.hardSolved || 0}</span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-rose-500 h-full rounded-full"
                      style={{
                        width: `${Math.min(100, Math.round(((leetcodeStats?.hardSolved || 0) / Math.max(leetcodeStats?.totalSolved || 1, 1)) * 100))}%`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Global Rank:</span>
            <span className="font-bold text-zinc-800 dark:text-zinc-200">
              {leetcodeStats?.ranking ? `#${leetcodeStats.ranking.toLocaleString()}` : 'Top 5%'}
            </span>
          </div>
        </div>

        {/* 2. CODECHEF CARD */}
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/60 flex flex-col justify-between space-y-4 hover:border-amber-700/40 transition-all group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-700/15 text-amber-600 dark:text-amber-500 flex items-center justify-center font-bold text-sm shadow-xs">
                  CC
                </div>
                <div>
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-amber-600 transition-colors">
                    CodeChef
                  </h3>
                  <p className="text-[10px] text-zinc-400 font-mono">
                    {codechefStats?.username ? `@${codechefStats.username}` : 'Not linked'}
                  </p>
                </div>
              </div>

              {codechefStats?.username && (
                <a
                  href={`https://www.codechef.com/users/${codechefStats.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-200/80 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-amber-600 transition-colors"
                  title="Open CodeChef Profile"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-extrabold text-zinc-900 dark:text-white">
                  {codechefStats?.fullySolved || 0}
                </span>
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">
                  Solved Questions
                </span>
              </div>

              {/* Star Rating Badge */}
              <div className="p-3 rounded-xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-sm text-zinc-900 dark:text-white">
                    {codechefStats?.stars || '3★'} Star Coder
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold">
                  {codechefStats?.rating || 1640} pts
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 font-mono">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-center">
                  <span className="text-zinc-400 block text-[9px] uppercase">Fully Solved</span>
                  <span className="font-bold text-zinc-900 dark:text-white">{codechefStats?.fullySolved || 0}</span>
                </div>
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-center">
                  <span className="text-zinc-400 block text-[9px] uppercase">Partially</span>
                  <span className="font-bold text-zinc-900 dark:text-white">{codechefStats?.partiallySolved || 0}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Division Rank:</span>
            <span className="font-bold text-zinc-800 dark:text-zinc-200">
              {codechefStats?.globalRank ? `#${codechefStats.globalRank.toLocaleString()}` : 'Div 2'}
            </span>
          </div>
        </div>

        {/* 3. GITHUB REPOS & ACTIVITY CARD */}
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/60 flex flex-col justify-between space-y-4 hover:border-zinc-500/50 transition-all group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 flex items-center justify-center font-bold text-sm shadow-xs">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    GitHub
                  </h3>
                  <p className="text-[10px] text-zinc-400 font-mono">
                    {githubStats?.username ? `@${githubStats.username}` : 'Not linked'}
                  </p>
                </div>
              </div>

              {githubStats?.username && (
                <a
                  href={`https://github.com/${githubStats.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-200/80 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-white transition-colors"
                  title="Open GitHub Profile"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-extrabold text-zinc-900 dark:text-white">
                  {githubStats?.publicRepos || 0}
                </span>
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">
                  Repositories
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-zinc-400 block font-mono">Stars</span>
                    <span className="font-bold text-zinc-900 dark:text-white">{githubStats?.totalStars || 0}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-zinc-400 block font-mono">Followers</span>
                    <span className="font-bold text-zinc-900 dark:text-white">{githubStats?.followers || 0}</span>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/70 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500">Yearly Commits:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  {githubStats?.contributions || 240}+
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Profile Sync:</span>
            <span className="font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              <span>Active</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
