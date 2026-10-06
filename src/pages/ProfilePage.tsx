import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { CodingPlatformsCard } from '../components/CodingPlatformsCard';
import {
  User,
  Mail,
  Building2,
  DollarSign,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Flame,
  Bookmark,
  ExternalLink,
  Edit3,
  Save,
  LogOut,
  Calendar,
  Layers,
  ArrowRight,
  Code2,
  Compass,
  Instagram,
  Github,
  Linkedin,
  Globe,
  Share2,
  Award,
  Zap,
  ShieldCheck,
  Star
} from 'lucide-react';

interface ProfilePageProps {
  navigate: (to: string) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ navigate }) => {
  const { user, updateProfile, logout, openAuthModal, isAuthenticated } = useAuth();
  const { totalSolved, streakDays, bookmarksMap, notesMap } = useProgress();

  const [activeTab, setActiveTab] = useState<'overview' | 'platforms' | 'edit' | 'bookmarks'>('overview');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [imgLoadError, setImgLoadError] = useState(false);

  // Form State initialized from current user
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    avatar: user?.avatar || '',
    handle: user?.handle || '',
    role: user?.role || 'Software Engineer',
    bio: user?.bio || '',
    targetCompany: user?.targetCompany || 'Google / Amazon / Microsoft',
    targetPackage: user?.targetPackage || '35+ LPA',
    college: user?.college || 'Computer Science & Engineering',
    graduationYear: user?.graduationYear || '2026',
    githubUrl: user?.githubUrl || '',
    linkedinUrl: user?.linkedinUrl || '',
    leetcodeUrl: user?.leetcodeUrl || '',
    codechefUrl: user?.codechefUrl || '',
    portfolioUrl: user?.portfolioUrl || '',
    instagramUrl: user?.instagramUrl || '',
    phone: user?.phone || '',
  });

  // Keep form in sync with user state
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        avatar: user.avatar || '',
        handle: user.handle || `@${user.email?.split('@')[0] || 'developer'}`,
        role: user.role || 'Software Engineer',
        bio: user.bio || '',
        targetCompany: user.targetCompany || 'Google / Amazon / Microsoft',
        targetPackage: user.targetPackage || '35+ LPA',
        college: user.college || 'Computer Science & Engineering',
        graduationYear: user.graduationYear || '2026',
        githubUrl: user.githubUrl || `https://github.com/${user.email?.split('@')[0] || ''}`,
        linkedinUrl: user.linkedinUrl || 'https://linkedin.com',
        leetcodeUrl: user.leetcodeUrl || '',
        codechefUrl: user.codechefUrl || '',
        portfolioUrl: user.portfolioUrl || '',
        instagramUrl: user.instagramUrl || '',
        phone: user.phone || '',
      });
      setImgLoadError(false);
    }
  }, [user]);

  const leetcodeStats = user?.codingProfiles?.leetcode;
  const codechefStats = user?.codingProfiles?.codechef;
  const githubStats = user?.codingProfiles?.github;

  const totalBookmarksCount = Object.values(bookmarksMap).filter(Boolean).length;
  const totalNotesCount = Object.values(notesMap).filter(Boolean).length;
  
  const totalCombinedSolved =
    totalSolved +
    (leetcodeStats?.totalSolved || 0) +
    (codechefStats?.fullySolved || 0);

  const readinessPct = Math.min(98, Math.max(35, Math.floor(totalCombinedSolved * 0.4) + 45));

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile(formData);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setActiveTab('overview');
    }, 1500);
  };

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto space-y-5">
        <div className="w-16 h-16 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
          <User className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Sign In to View Your Profile</h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Track your personalized solved questions, consistency streak, target packages, and custom LeetCode/CodeChef/GitHub profile.
          </p>
        </div>
        <button
          onClick={openAuthModal}
          className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
        >
          Sign In / Create Account
        </button>
      </div>
    );
  }

  const hasAvatar = user.avatar && !imgLoadError;

  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-6xl mx-auto space-y-8 font-lexend">
      
      {/* Top Breadcrumb & Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DEVELOPER PROFILE</span>
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
            {user.name}'s Profile
          </h1>
        </div>

        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
          <button
            onClick={() => navigate('/preparation/dashboard')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
          >
            <span>My Personal Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Profile Header Card */}
      <div className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] shadow-xl">
        
        {/* Banner with Accent Gradient */}
        <div className="h-36 sm:h-44 bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-800 relative p-6 flex items-start justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-xs font-bold text-white">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Active Member</span>
          </div>

          <div className="flex items-center gap-2">
            {user.githubUrl && (
              <a
                href={user.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white transition-colors"
                title={`GitHub: ${user.githubUrl}`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {user.leetcodeUrl && (
              <a
                href={user.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-xl bg-black/30 hover:bg-black/50 backdrop-blur-sm text-amber-400 font-mono font-bold text-xs transition-colors"
                title={`LeetCode: ${user.leetcodeUrl}`}
              >
                LC
              </a>
            )}
            {user.codechefUrl && (
              <a
                href={user.codechefUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-xl bg-black/30 hover:bg-black/50 backdrop-blur-sm text-amber-500 font-mono font-bold text-xs transition-colors"
                title={`CodeChef: ${user.codechefUrl}`}
              >
                CC
              </a>
            )}
            {user.linkedinUrl && (
              <a
                href={user.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white transition-colors"
                title={`LinkedIn: ${user.linkedinUrl}`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            <a
              href={`mailto:${user.email}`}
              className="p-2 rounded-xl bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white transition-colors"
              title={`Email: ${user.email}`}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Profile Card Body */}
        <div className="px-6 pb-8 pt-0 relative z-10 -mt-16 sm:-mt-20">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6">
            
            {/* Avatar Circle */}
            <div className="relative">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 p-1.5 shadow-2xl ring-4 ring-white dark:ring-[#0c1017] overflow-hidden flex items-center justify-center">
                {hasAvatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    onError={() => setImgLoadError(true)}
                    className="w-full h-full rounded-full object-cover object-center"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-4xl font-extrabold text-white">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                )}
              </div>
              <div className="absolute bottom-1 right-2 w-6 h-6 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-[#0c1017] shadow-sm flex items-center justify-center" title="Active & Synced">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              </div>
            </div>

            {/* Profile Actions */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setActiveTab(activeTab === 'edit' ? 'overview' : 'edit')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer ${
                  activeTab === 'edit'
                    ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200'
                    : 'bg-blue-600 hover:bg-blue-500 text-white'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{activeTab === 'edit' ? 'Close Editor' : 'Edit Profile & Handles'}</span>
              </button>

              <button
                onClick={logout}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-red-500/10 text-zinc-600 hover:text-red-500 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-red-400 text-xs font-semibold border border-zinc-200 dark:border-zinc-800 transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>

          {/* Name & Handle */}
          <div className="mt-4 space-y-1.5 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
                {user.name}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30 font-mono text-xs font-bold">
                {user.role || 'Software Engineer'}
              </span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm font-mono">
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {user.handle || `@${user.email?.split('@')[0] || 'developer'}`}
              </span>
              <span className="text-zinc-400">•</span>
              <a
                href={`mailto:${user.email}`}
                className="text-zinc-600 dark:text-zinc-300 hover:text-blue-500 flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span>{user.email}</span>
              </a>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-2xl pt-1 leading-relaxed">
              {user.bio || 'Dedicated developer mastering DSA patterns, system design, and placement prep.'}
            </p>
          </div>
        </div>
      </div>

      {/* Save Success Alert */}
      {saveSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-semibold flex items-center gap-3 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
          <span>Profile, LeetCode, CodeChef, and GitHub handles updated successfully in Firestore database!</span>
        </div>
      )}

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stat 1: Total Solved */}
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] shadow-xs">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-mono uppercase mb-2">
            <span>Combined Solved</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            {totalCombinedSolved}
          </div>
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1 block">
            HackPath + LeetCode + CodeChef
          </span>
        </div>

        {/* Stat 2: Daily Streak */}
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] shadow-xs">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-mono uppercase mb-2">
            <span>Daily Streak</span>
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            {streakDays} <span className="text-base font-normal text-zinc-400">days</span>
          </div>
          <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium mt-1 block">
            Active streak tracker
          </span>
        </div>

        {/* Stat 3: LeetCode & CodeChef */}
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] shadow-xs">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-mono uppercase mb-2">
            <span>LeetCode Solved</span>
            <Code2 className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-3xl font-extrabold text-amber-500">
            {leetcodeStats?.totalSolved || 0}
          </div>
          <span className="text-[11px] text-zinc-400 font-medium mt-1 block font-mono">
            {leetcodeStats?.easySolved || 0}E • {leetcodeStats?.mediumSolved || 0}M • {leetcodeStats?.hardSolved || 0}H
          </span>
        </div>

        {/* Stat 4: Readiness Score */}
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] shadow-xs">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-mono uppercase mb-2">
            <span>Placement Score</span>
            <Zap className="w-4 h-4 text-blue-500 fill-blue-500" />
          </div>
          <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
            {readinessPct}%
          </div>
          <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full" style={{ width: `${readinessPct}%` }} />
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-2">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'overview'
              ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm'
              : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
          }`}
        >
          Overview &amp; Coding Stats
        </button>

        <button
          onClick={() => setActiveTab('edit')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'edit'
              ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm'
              : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
          }`}
        >
          Edit Profile &amp; Handles
        </button>

        <button
          onClick={() => setActiveTab('bookmarks')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'bookmarks'
              ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm'
              : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
          }`}
        >
          Bookmarks &amp; Notes ({totalBookmarksCount})
        </button>
      </div>

      {/* TAB CONTENT 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          {/* Coding Platforms Live Metrics */}
          <CodingPlatformsCard navigate={navigate} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column: Target Career Blueprint */}
            <div className="md:col-span-2 space-y-6">
              <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-zinc-900 dark:text-white flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-blue-500" />
                    <span>Target Companies &amp; Compensation</span>
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                    {user.targetPackage || '35+ LPA'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">Target Companies</span>
                    <p className="font-bold text-sm text-zinc-900 dark:text-white mt-0.5">{user.targetCompany || 'Google / Meta / Microsoft'}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">Target Compensation</span>
                    <p className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mt-0.5">{user.targetPackage || '35+ LPA'}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">Degree &amp; College</span>
                    <p className="font-bold text-sm text-zinc-900 dark:text-white mt-0.5">{user.college || 'Computer Science & Engineering'}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">Graduation Year</span>
                    <p className="font-bold text-sm text-zinc-900 dark:text-white mt-0.5">{user.graduationYear || '2026'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact & Handles */}
            <div className="space-y-6">
              <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] space-y-4">
                <h3 className="font-bold text-sm text-zinc-900 dark:text-white uppercase tracking-wider font-mono">
                  Your Connected Handles
                </h3>

                <div className="space-y-3 pt-1">
                  {user.leetcodeUrl ? (
                    <a
                      href={user.leetcodeUrl.startsWith('http') ? user.leetcodeUrl : `https://leetcode.com/u/${user.leetcodeUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                        <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-[10px] font-mono">LC</span>
                        <span>LeetCode</span>
                      </div>
                      <span className="text-[11px] text-zinc-400 group-hover:text-amber-500 font-mono truncate max-w-[120px]">
                        {leetcodeStats?.totalSolved || 0} solved
                      </span>
                    </a>
                  ) : null}

                  {user.codechefUrl ? (
                    <a
                      href={user.codechefUrl.startsWith('http') ? user.codechefUrl : `https://www.codechef.com/users/${user.codechefUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-amber-700/50 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                        <span className="w-5 h-5 rounded-md bg-amber-700/10 text-amber-600 flex items-center justify-center font-bold text-[10px] font-mono">CC</span>
                        <span>CodeChef</span>
                      </div>
                      <span className="text-[11px] text-zinc-400 group-hover:text-amber-600 font-mono truncate max-w-[120px]">
                        {codechefStats?.rating || 1640} pts ({codechefStats?.stars || '3★'})
                      </span>
                    </a>
                  ) : null}

                  {user.githubUrl ? (
                    <a
                      href={user.githubUrl.startsWith('http') ? user.githubUrl : `https://github.com/${user.githubUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-500 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                        <Github className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                        <span>GitHub</span>
                      </div>
                      <span className="text-[11px] text-zinc-400 group-hover:text-blue-400 truncate max-w-[130px]">
                        {githubStats?.publicRepos || 0} repos
                      </span>
                    </a>
                  ) : null}

                  {user.linkedinUrl ? (
                    <a
                      href={user.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-600/50 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                        <Linkedin className="w-4 h-4 text-blue-600" />
                        <span>LinkedIn</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  ) : null}

                  <a
                    href={`mailto:${user.email}`}
                    className="flex items-center justify-between p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                      <Mail className="w-4 h-4 text-blue-500" />
                      <span>Email</span>
                    </div>
                    <span className="text-[11px] text-zinc-400 group-hover:text-blue-500 truncate max-w-[140px]">{user.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: EDIT PROFILE */}
      {activeTab === 'edit' && (
        <div className="p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] shadow-xl animate-in fade-in duration-150">
          <div className="mb-6 space-y-1">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Edit Your Profile &amp; Competitive Handles</h3>
            <p className="text-xs text-zinc-500">All information and coding statistics are persisted in Firebase Firestore.</p>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            {/* Avatar URL & Preview */}
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-3">
              <label className="block text-zinc-600 dark:text-zinc-400 uppercase font-mono text-[11px] font-bold">
                Profile Avatar Image (Optional)
              </label>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 p-0.5 shrink-0 overflow-hidden flex items-center justify-center shadow-md">
                  {formData.avatar ? (
                    <img
                      src={formData.avatar}
                      alt="Avatar Preview"
                      onError={() => {}}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold text-white">
                      {formData.name ? formData.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                  )}
                </div>
                <div className="flex-1 w-full space-y-2">
                  <input
                    type="url"
                    placeholder="https://example.com/your-avatar.png (leave blank for initial badge)"
                    value={formData.avatar}
                    onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, avatar: '/pavan_img_.png' })}
                      className="px-2.5 py-1 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                    >
                      Sample Avatar
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, avatar: '' })}
                      className="px-2.5 py-1 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                    >
                      Use Initials
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Competitive Handles Section */}
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-3">
              <label className="block text-zinc-600 dark:text-zinc-400 uppercase font-mono text-[11px] font-bold flex items-center gap-2">
                <Code2 className="w-4 h-4 text-amber-500" />
                <span>Competitive Coding Handles (LeetCode, CodeChef, GitHub)</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="block text-zinc-500 font-bold mb-1">LeetCode Handle / URL</label>
                  <input
                    type="text"
                    placeholder="e.g. tourist or leetcode.com/u/user"
                    value={formData.leetcodeUrl}
                    onChange={(e) => setFormData({ ...formData, leetcodeUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-zinc-500 font-bold mb-1">CodeChef Handle / URL</label>
                  <input
                    type="text"
                    placeholder="e.g. codechef.com/users/handle"
                    value={formData.codechefUrl}
                    onChange={(e) => setFormData({ ...formData, codechefUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-zinc-500 font-bold mb-1">GitHub Username / URL</label>
                  <input
                    type="text"
                    placeholder="e.g. github.com/username"
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-mono"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <label className="block text-zinc-500 uppercase font-mono text-[11px] mb-1.5 font-bold">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-zinc-500 uppercase font-mono text-[11px] mb-1.5 font-bold">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-zinc-500 uppercase font-mono text-[11px] mb-1.5 font-bold">Handle / Username</label>
                <input
                  type="text"
                  value={formData.handle}
                  onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-zinc-500 uppercase font-mono text-[11px] mb-1.5 font-bold">Role / Title</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-zinc-500 uppercase font-mono text-[11px] mb-1.5 font-bold">LinkedIn Profile URL</label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/your-profile"
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-zinc-500 uppercase font-mono text-[11px] mb-1.5 font-bold">Target Companies</label>
                <input
                  type="text"
                  value={formData.targetCompany}
                  onChange={(e) => setFormData({ ...formData, targetCompany: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-zinc-500 uppercase font-mono text-[11px] mb-1.5 font-bold">Target Compensation (LPA)</label>
                <input
                  type="text"
                  value={formData.targetPackage}
                  onChange={(e) => setFormData({ ...formData, targetPackage: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-zinc-500 uppercase font-mono text-[11px] mb-1.5 font-bold">College / University</label>
                <input
                  type="text"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-zinc-500 uppercase font-mono text-[11px] mb-1.5 font-bold">Bio &amp; Objectives</label>
              <textarea
                rows={3}
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TAB CONTENT 3: BOOKMARKS */}
      {activeTab === 'bookmarks' && (
        <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] shadow-xl space-y-4 animate-in fade-in duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <h3 className="font-bold text-base text-zinc-900 dark:text-white">Starred Questions for Revision</h3>
              <p className="text-xs text-zinc-500">Access and practice your saved questions anytime.</p>
            </div>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500">
              {totalBookmarksCount} Questions Saved
            </span>
          </div>

          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto">
              <Bookmark className="w-6 h-6 fill-indigo-500" />
            </div>
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              Bookmark questions during your practice sessions to quickly review them here.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => navigate('/preparation/20-essential-dsa-patterns')}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                Open 20 DSA Patterns Sheet
              </button>
              <button
                onClick={() => navigate('/preparation/company-wise-dsa-sheet')}
                className="px-4 py-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                Browse Company Sets
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
