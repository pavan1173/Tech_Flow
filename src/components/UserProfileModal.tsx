import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import {
  X,
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
  Camera,
  Github,
  Linkedin,
  Globe,
  Instagram,
  ArrowRight,
  Code2,
  Star
} from 'lucide-react';

interface UserProfileModalProps {
  navigate?: (to: string) => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({ navigate }) => {
  const { user, isProfileModalOpen, closeProfileModal, updateProfile, syncCodingPlatforms, logout } = useAuth();
  const { totalSolved, streakDays, bookmarksMap } = useProgress();

  const [isEditing, setIsEditing] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [imgLoadError, setImgLoadError] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    avatar: user?.avatar || '',
    handle: user?.handle || '',
    role: user?.role || 'Software Engineer',
    bio: user?.bio || '',
    targetCompany: user?.targetCompany || 'Google / Meta',
    targetPackage: user?.targetPackage || '35+ LPA',
    college: user?.college || 'Computer Science & Engineering',
    graduationYear: user?.graduationYear || '2026',
    githubUrl: user?.githubUrl || '',
    leetcodeUrl: user?.leetcodeUrl || '',
    codechefUrl: user?.codechefUrl || '',
    linkedinUrl: user?.linkedinUrl || '',
    portfolioUrl: user?.portfolioUrl || '',
    instagramUrl: user?.instagramUrl || '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        avatar: user.avatar || '',
        handle: user.handle || `@${user.email?.split('@')[0] || 'developer'}`,
        role: user.role || 'Software Engineer',
        bio: user.bio || '',
        targetCompany: user.targetCompany || 'Google / Meta',
        targetPackage: user.targetPackage || '35+ LPA',
        college: user.college || 'Computer Science & Engineering',
        graduationYear: user.graduationYear || '2026',
        githubUrl: user.githubUrl || `https://github.com/${user.email?.split('@')[0] || ''}`,
        leetcodeUrl: user.leetcodeUrl || '',
        codechefUrl: user.codechefUrl || '',
        linkedinUrl: user.linkedinUrl || 'https://linkedin.com',
        portfolioUrl: user.portfolioUrl || '',
        instagramUrl: user.instagramUrl || '',
      });
      setImgLoadError(false);
    }
  }, [user]);

  if (!isProfileModalOpen || !user) return null;

  const leetcodeStats = user?.codingProfiles?.leetcode;
  const codechefStats = user?.codingProfiles?.codechef;
  const githubStats = user?.codingProfiles?.github;

  const totalBookmarksCount = Object.values(bookmarksMap).filter(Boolean).length;
  const totalCombinedSolved =
    totalSolved +
    (leetcodeStats?.totalSolved || 0) +
    (codechefStats?.fullySolved || 0);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile(formData);
    
    // Also trigger background sync for handles if updated
    if (formData.leetcodeUrl || formData.codechefUrl || formData.githubUrl) {
      syncCodingPlatforms({
        leetcode: formData.leetcodeUrl,
        codechef: formData.codechefUrl,
        github: formData.githubUrl,
      }).catch(() => {});
    }

    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleNavigate = (path: string) => {
    closeProfileModal();
    if (navigate) {
      navigate(path);
    } else {
      window.location.href = path;
    }
  };

  const hasAvatar = user.avatar && !imgLoadError;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[90vh] bg-[#0c1017] border border-zinc-800 rounded-3xl shadow-2xl overflow-y-auto overscroll-contain text-zinc-100 font-lexend custom-scrollbar animate-in zoom-in-95 duration-200">
        
        {/* Banner with Accent Gradient */}
        <div className="relative h-28 bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-800 p-6 flex items-start justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-xs font-semibold text-white">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Developer Account</span>
          </div>

          <button
            onClick={closeProfileModal}
            className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
            aria-label="Close Profile"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Header Details */}
        <div className="px-6 pb-6 relative z-10 -mt-12 space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
            
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 p-1 shadow-2xl ring-4 ring-[#0c1017] overflow-hidden flex items-center justify-center">
                {hasAvatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    onError={() => setImgLoadError(true)}
                    className="w-full h-full rounded-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 right-1 w-5 h-5 rounded-full bg-emerald-500 ring-2 ring-[#0c1017] shadow-sm" title="Active now" />
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isEditing
                    ? 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditing ? 'Cancel Edit' : 'Edit Profile & Handles'}</span>
              </button>

              <button
                onClick={() => handleNavigate('/preparation/profile')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-zinc-700 transition-colors cursor-pointer"
              >
                <span>Full Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* User Identifiers */}
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                {user.name}
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30 font-mono font-bold">
                {user.role || 'Developer'}
              </span>
            </div>
            <p className="text-xs text-blue-400 font-mono">{user.handle || `@${user.email?.split('@')[0] || 'developer'}`}</p>
            <p className="text-xs text-zinc-400 font-mono flex items-center justify-center sm:justify-start gap-1 pt-0.5">
              <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{user.email}</span>
            </p>
          </div>

          {/* Toast on save */}
          {saveSuccess && (
            <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Profile updated successfully!</span>
            </div>
          )}

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-center">
              <div className="flex items-center justify-center gap-1 text-emerald-400 mb-0.5">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-lg font-black">{totalCombinedSolved}</span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">Total Solved</span>
            </div>

            <div className="p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-center">
              <div className="flex items-center justify-center gap-1 text-amber-400 mb-0.5">
                <Code2 className="w-4 h-4" />
                <span className="text-lg font-black">{leetcodeStats?.totalSolved || 0}</span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">LeetCode</span>
            </div>

            <div className="p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-center">
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-0.5">
                <Star className="w-4 h-4 fill-amber-500" />
                <span className="text-lg font-black">{codechefStats?.rating || 1640}</span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">CodeChef</span>
            </div>
          </div>

          {/* Edit Form OR View Details */}
          {isEditing ? (
            <form onSubmit={handleSave} className="space-y-4 pt-2 animate-in fade-in">
              <div>
                <label className="block text-zinc-400 uppercase font-mono text-[10px] mb-1 font-bold">Avatar Image URL (Optional)</label>
                <input
                  type="url"
                  placeholder="https://example.com/photo.jpg (leave blank for initial badge)"
                  value={formData.avatar}
                  onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Competitive Coding Handles */}
              <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-700/80 space-y-2.5">
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold block">
                  Coding Platforms (LeetCode, CodeChef, GitHub)
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div>
                    <label className="block text-zinc-400 text-[10px] mb-1">LeetCode Username</label>
                    <input
                      type="text"
                      placeholder="e.g. tourist"
                      value={formData.leetcodeUrl}
                      onChange={(e) => setFormData({ ...formData, leetcodeUrl: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded-xl bg-zinc-800 border border-zinc-600 text-white font-mono text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 text-[10px] mb-1">CodeChef Handle</label>
                    <input
                      type="text"
                      placeholder="e.g. handle"
                      value={formData.codechefUrl}
                      onChange={(e) => setFormData({ ...formData, codechefUrl: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded-xl bg-zinc-800 border border-zinc-600 text-white font-mono text-xs focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 text-[10px] mb-1">GitHub Username</label>
                    <input
                      type="text"
                      placeholder="e.g. username"
                      value={formData.githubUrl}
                      onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded-xl bg-zinc-800 border border-zinc-600 text-white font-mono text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-zinc-400 uppercase font-mono text-[10px] mb-1 font-bold">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 uppercase font-mono text-[10px] mb-1 font-bold">Role / Headline</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 uppercase font-mono text-[10px] mb-1 font-bold">LinkedIn URL</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedinUrl}
                    onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 uppercase font-mono text-[10px] mb-1 font-bold">Target Company</label>
                  <input
                    type="text"
                    value={formData.targetCompany}
                    onChange={(e) => setFormData({ ...formData, targetCompany: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 uppercase font-mono text-[10px] mb-1 font-bold">Bio / Career Goal</label>
                <textarea
                  rows={2}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save to Database</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4 pt-1">
              {/* Bio block */}
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 leading-relaxed">
                <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">About Me</span>
                <p>{user.bio || 'Dedicated developer preparing for top tech product company interviews.'}</p>
              </div>

              {/* Competitive Coding Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/15 text-amber-500 flex items-center justify-center font-bold text-xs font-mono">
                      LC
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase block">LeetCode Solved</span>
                      <span className="font-bold text-white text-sm">{leetcodeStats?.totalSolved || 0} Problems</span>
                    </div>
                  </div>
                  {user.leetcodeUrl && (
                    <a
                      href={user.leetcodeUrl.startsWith('http') ? user.leetcodeUrl : `https://leetcode.com/u/${user.leetcodeUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-md bg-zinc-800 text-zinc-400 hover:text-white"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <div className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-700/15 text-amber-500 flex items-center justify-center font-bold text-xs font-mono">
                      CC
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase block">CodeChef Rating</span>
                      <span className="font-bold text-white text-sm">{codechefStats?.rating || 1640} ({codechefStats?.stars || '3★'})</span>
                    </div>
                  </div>
                  {user.codechefUrl && (
                    <a
                      href={user.codechefUrl.startsWith('http') ? user.codechefUrl : `https://www.codechef.com/users/${user.codechefUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-md bg-zinc-800 text-zinc-400 hover:text-white"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {user.githubUrl && (
                  <a
                    href={user.githubUrl.startsWith('http') ? user.githubUrl : `https://github.com/${user.githubUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-500 text-xs transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-zinc-400" />
                    <span>GitHub ({githubStats?.publicRepos || 0} repos)</span>
                  </a>
                )}

                {user.linkedinUrl && (
                  <a
                    href={user.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-blue-400 hover:border-blue-500/50 text-xs transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                )}

                <a
                  href={`mailto:${user.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-blue-500/50 text-xs transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>{user.email}</span>
                </a>
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
            <button
              onClick={logout}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>

            <button
              onClick={() => handleNavigate('/preparation')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <span>Back to Preparation Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
