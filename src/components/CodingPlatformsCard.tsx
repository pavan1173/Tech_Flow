import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getCodeChefStarClass } from '../services/codingProfilesService';
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
  ShieldCheck,
  Edit3
} from 'lucide-react';

interface CodingPlatformsCardProps {
  navigate?: (to: string) => void;
  showEditToggle?: boolean;
}

export const CodingPlatformsCard: React.FC<CodingPlatformsCardProps> = ({
  navigate,
  showEditToggle = false,
}) => {
  const { user, syncCodingPlatforms, isAuthenticated, openAuthModal, openCodingHandlesModal } = useAuth();
  
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);
  const [inlineCodechefInput, setInlineCodechefInput] = useState('');
  const [isLinkingCodechef, setIsLinkingCodechef] = useState(false);

  const leetcodeStats = user?.codingProfiles?.leetcode;
  const codechefStats = user?.codingProfiles?.codechef;
  const githubStats = user?.codingProfiles?.github;

  const isCodeChefLinked = Boolean(
    (codechefStats?.username && codechefStats.username.trim() !== '') ||
    (user?.codechefUrl && user.codechefUrl.trim() !== '')
  );

  const isLeetCodeLinked = Boolean(
    (leetcodeStats?.username && leetcodeStats.username.trim() !== '') ||
    (user?.leetcodeUrl && user.leetcodeUrl.trim() !== '')
  );

  const isGitHubLinked = Boolean(
    (githubStats?.username && githubStats.username.trim() !== '') ||
    (user?.githubUrl && user.githubUrl.trim() !== '')
  );

  const handleLinkCodeChef = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const handle = inlineCodechefInput.trim();
    if (!handle) return;
    setIsLinkingCodechef(true);
    setSyncSuccess(false);
    setSyncError(null);

    try {
      await syncCodingPlatforms({
        codechef: handle,
      });
      setInlineCodechefInput('');
      setSyncSuccess(true);
      setTimeout(() => setSyncSuccess(false), 3500);
    } catch (err: any) {
      console.error('Failed to link CodeChef handle:', err);
      setSyncError(err?.message || 'Failed to link CodeChef handle');
    } finally {
      setIsLinkingCodechef(false);
    }
  };

  const handleSync = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSyncError(null);
    setSyncSuccess(false);

    if (!isAuthenticated || !user) {
      setSyncError('Please sign in to save and sync competitive coding profiles to your personal account.');
      openAuthModal();
      return;
    }

    // Strictly sync the authenticated user's handles
    const userLeetCode = user.leetcodeUrl || user.codingProfiles?.leetcode?.username || '';
    const userCodeChef = user.codechefUrl || user.codingProfiles?.codechef?.username || '';
    const userGitHub = user.githubUrl || user.codingProfiles?.github?.username || '';

    if (!userLeetCode && !userCodeChef && !userGitHub) {
      setSyncError('No coding profiles linked yet. Click "Connect Handles" to link your LeetCode, CodeChef, or GitHub accounts.');
      openCodingHandlesModal();
      return;
    }

    setIsSyncing(true);

    try {
      await syncCodingPlatforms({
        leetcode: userLeetCode,
        codechef: userCodeChef,
        github: userGitHub,
      });
      setSyncSuccess(true);
      setTimeout(() => setSyncSuccess(false), 4500);
    } catch (err: any) {
      console.error('Failed to sync coding stats:', err);
      setSyncError(err?.message || 'Failed to sync live statistics. Please verify that your handles exist.');
      setTimeout(() => setSyncError(null), 5000);
    } finally {
      setIsSyncing(false);
    }
  };

  const totalPlatformProblems =
    (isLeetCodeLinked ? (leetcodeStats?.totalSolved || 0) : 0) +
    (isCodeChefLinked ? (codechefStats?.fullySolved || 0) : 0) +
    (isGitHubLinked ? (githubStats?.publicRepos || 0) : 0);

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
                  Live Stats
                </span>
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Live problem counts, stars, and ratings across LeetCode, CodeChef, and GitHub.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-stretch sm:self-auto justify-end flex-wrap">
          <button
            type="button"
            onClick={openCodingHandlesModal}
            className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/25 text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shadow-2xs hover:shadow-xs"
            title="Connect or update LeetCode, CodeChef, and GitHub handles"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Connect Handles</span>
          </button>

          <button
            type="button"
            onClick={() => handleSync()}
            disabled={isSyncing}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
            title="Fetch live scores, ratings, and problem counts for your profile"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
            <span>{isSyncing ? 'Syncing Profile...' : 'Sync Live Stats'}</span>
          </button>
        </div>
      </div>

      {/* Sync Success Toast */}
      {syncSuccess && (
        <div className="p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center justify-between gap-2.5 animate-in fade-in">
          <div className="flex items-center gap-2.5 min-w-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span className="truncate">
              Successfully synced live statistics for <strong>{user?.name || user?.email?.split('@')[0] || 'your profile'}</strong>!
            </span>
          </div>
          <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 shrink-0">
            {totalPlatformProblems} Solved / Repos
          </span>
        </div>
      )}

      {/* Sync Error Toast */}
      {syncError && (
        <div className="p-3.5 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-800 dark:text-rose-300 text-xs font-semibold flex items-center justify-between gap-2.5 animate-in fade-in">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0" />
            <span>{syncError}</span>
          </div>
          <button
            type="button"
            onClick={() => setSyncError(null)}
            className="text-xs text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
          >
            Dismiss
          </button>
        </div>
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
                  {isLeetCodeLinked ? (leetcodeStats?.totalSolved || 0) : '--'}
                </span>
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">
                  Problems Solved
                </span>
              </div>

              {!isLeetCodeLinked ? (
                <div className="p-3.5 rounded-xl bg-amber-500/5 dark:bg-amber-950/20 border border-dashed border-amber-500/30 text-center space-y-2">
                  <div className="flex items-center justify-center gap-1.5 text-amber-700 dark:text-amber-400 font-bold text-xs">
                    <Code2 className="w-3.5 h-3.5 text-amber-500" />
                    <span>No Account Linked</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">
                    Connect your LeetCode handle to track live solved problems &amp; difficulty breakdown.
                  </p>
                  <button
                    type="button"
                    onClick={openCodingHandlesModal}
                    className="w-full py-1.5 px-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                  >
                    Connect LeetCode
                  </button>
                </div>
              ) : (
                /* Easy / Med / Hard breakdown bars */
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
              )}
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Global Rank:</span>
            <span className="font-bold text-zinc-800 dark:text-zinc-200">
              {leetcodeStats?.ranking ? `#${leetcodeStats.ranking.toLocaleString()}` : 'Unavailable'}
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
                    {codechefStats?.username
                      ? `@${codechefStats.username}`
                      : user?.codechefUrl
                      ? `@${user.codechefUrl.replace(/https?:\/\/(www\.)?codechef\.com\/users\//, '')}`
                      : 'Not linked'}
                  </p>
                </div>
              </div>

              {isCodeChefLinked ? (
                <div className="flex items-center gap-1.5">
                  <a
                    href={
                      codechefStats?.username
                        ? (codechefStats.username.startsWith('http')
                            ? codechefStats.username
                            : `https://www.codechef.com/users/${codechefStats.username}`)
                        : (user?.codechefUrl?.startsWith('http')
                            ? user.codechefUrl
                            : `https://www.codechef.com/users/${user?.codechefUrl}`)
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-zinc-200/80 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-amber-600 transition-colors"
                    title="Open CodeChef Profile"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : null}
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-extrabold text-zinc-900 dark:text-white">
                  {isCodeChefLinked ? (codechefStats?.fullySolved || 0) : '--'}
                </span>
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">
                  Solved Questions
                </span>
              </div>

              {/* Star Rating Badge (Only after CodeChef account is linked) or Quick Link Form */}
              {!isCodeChefLinked ? (
                <div className="p-3.5 rounded-xl bg-amber-500/5 dark:bg-amber-950/20 border border-dashed border-amber-500/30 text-center space-y-2">
                  <div className="flex items-center justify-center gap-1.5 text-amber-700 dark:text-amber-400 font-bold text-xs">
                    <Star className="w-3.5 h-3.5 text-amber-500" />
                    <span>No Account Linked</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">
                    Enter your CodeChef handle to display live star rating, points &amp; questions solved.
                  </p>
                  <form onSubmit={handleLinkCodeChef} className="flex items-center gap-1.5 pt-0.5">
                    <input
                      type="text"
                      placeholder="e.g. tourist or handle"
                      value={inlineCodechefInput}
                      onChange={(e) => setInlineCodechefInput(e.target.value)}
                      className="flex-1 min-w-0 px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-700 text-xs font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                    <button
                      type="submit"
                      disabled={isLinkingCodechef || !inlineCodechefInput.trim()}
                      className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-white text-xs font-bold transition-all cursor-pointer shrink-0 shadow-xs"
                    >
                      {isLinkingCodechef ? 'Linking...' : 'Link'}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Star className={`w-4 h-4 ${getCodeChefStarClass(codechefStats?.stars)}`} />
                    <span className="font-bold text-sm text-zinc-900 dark:text-white">
                      {codechefStats?.stars || '1★'} Star Coder
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold">
                    {codechefStats?.rating ? `${codechefStats.rating} pts` : 'Active'}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 font-mono">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-center">
                  <span className="text-zinc-400 block text-[9px] uppercase">Fully Solved</span>
                  <span className={`font-bold ${isCodeChefLinked ? 'text-zinc-900 dark:text-white' : 'text-zinc-400 dark:text-zinc-600'}`}>
                    {isCodeChefLinked ? (codechefStats?.fullySolved || 0) : '--'}
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-center">
                  <span className="text-zinc-400 block text-[9px] uppercase">Partially</span>
                  <span className={`font-bold ${isCodeChefLinked ? 'text-zinc-900 dark:text-white' : 'text-zinc-400 dark:text-zinc-600'}`}>
                    {isCodeChefLinked ? (codechefStats?.partiallySolved || 0) : '--'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Division Rank:</span>
            <span className="font-bold text-zinc-800 dark:text-zinc-200">
              {!isCodeChefLinked
                ? 'Not linked'
                : codechefStats?.globalRank
                ? `#${codechefStats.globalRank.toLocaleString()}`
                : codechefStats?.rating
                ? (codechefStats.rating >= 2000 ? 'Div 1' : codechefStats.rating >= 1600 ? 'Div 2' : codechefStats.rating >= 1400 ? 'Div 3' : 'Div 4')
                : 'Unrated'}
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
                  {isGitHubLinked ? (githubStats?.publicRepos || 0) : '--'}
                </span>
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">
                  Repositories
                </span>
              </div>

              {!isGitHubLinked ? (
                <div className="p-3.5 rounded-xl bg-zinc-500/5 dark:bg-zinc-800/40 border border-dashed border-zinc-400/30 text-center space-y-2">
                  <div className="flex items-center justify-center gap-1.5 text-zinc-700 dark:text-zinc-300 font-bold text-xs">
                    <Github className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" />
                    <span>No Account Linked</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">
                    Connect your GitHub handle to track public repos, total stars &amp; contribution stats.
                  </p>
                  <button
                    type="button"
                    onClick={openCodingHandlesModal}
                    className="w-full py-1.5 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-900 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                  >
                    Connect GitHub
                  </button>
                </div>
              ) : (
                <>
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
                    <span className="text-zinc-500">Contributions:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">Not provided by this API</span>
                  </div>
                </>
              )}
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
