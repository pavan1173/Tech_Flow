import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { TeachFlowLogo } from './TeachFlowLogo';
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  BookOpen,
  User,
  LogOut,
  Settings
} from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  navigate: (to: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const { theme, toggleTheme } = useTheme();
  const { totalSolved } = useProgress();
  const { user, isAuthenticated, openAuthModal, openProfileModal, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCommunityModal, setShowCommunityModal] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Preparation', href: '/preparation' },
    { label: 'Roadmaps', href: '/roadmaps' },
    { label: 'Community', href: '#community', isAction: true },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isAction?: boolean) => {
    e.preventDefault();
    if (isAction) {
      setShowCommunityModal(true);
      setMobileMenuOpen(false);
      return;
    }
    navigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center group cursor-pointer shrink-0"
        >
          <TeachFlowLogo size={36} showText={true} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.isAction)}
                className={`text-sm font-medium transition-colors font-lexend ${
                  isActive
                    ? 'text-[#6C47FF] dark:text-[#8b6eff] font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Solved Problems Counter */}
          {totalSolved > 0 && (
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{totalSolved} Solved</span>
            </div>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
            className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Authenticated User Profile Menu OR Sign In button */}
          {isAuthenticated && user ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2 p-1 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer group"
                aria-label="User Profile"
              >
                <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 p-0.5 overflow-hidden ring-2 ring-[#6C47FF]/40 group-hover:ring-[#6C47FF] transition-all shrink-0 flex items-center justify-center">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-xs font-bold text-zinc-900 leading-none">
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </span>
                  )}
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-950" />
                </div>
                <span className="hidden lg:inline text-xs font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-[#6C47FF] transition-colors truncate max-w-[100px]">
                  {user.name.split(' ')[0]}
                </span>
              </button>

              {/* Profile Dropdown */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150 text-xs font-sans">
                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-2">
                    <p className="font-bold text-zinc-900 dark:text-white truncate">{user.name}</p>
                    <p className="text-[10px] text-zinc-500 font-mono truncate">{user.email}</p>
                    <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold font-mono">
                      Active Member
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        navigate('/profile');
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-left cursor-pointer"
                    >
                      <User className="w-4 h-4 text-blue-500" />
                      <span>View Profile &amp; Stats</span>
                    </button>

                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        openProfileModal();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-left cursor-pointer"
                    >
                      <Settings className="w-4 h-4 text-amber-500" />
                      <span>Quick Edit Profile</span>
                    </button>

                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        navigate('/preparation');
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-left cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-[#6C47FF]" />
                      <span>Preparation Hub</span>
                    </button>
                  </div>

                  <div className="mt-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        logout();
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-red-500 hover:bg-red-500/10 transition-colors text-left cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={openAuthModal}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold transition-all cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Sign In</span>
            </button>
          )}

          {/* Primary CTA */}
          <a
            href="/preparation"
            onClick={(e) => handleLinkClick(e, '/preparation')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#6C47FF] hover:bg-[#5a36ea] text-white text-xs md:text-sm font-semibold transition-all shadow-md shadow-indigo-500/20 hover:scale-[1.02]"
          >
            <BookOpen className="w-4 h-4" />
            <span>Preparation Hub</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open mobile menu"
            className="md:hidden p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          {isAuthenticated && user && (
            <div
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/profile');
              }}
              className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fde047] p-0.5 overflow-hidden shrink-0">
                  <img src="/pavan_img_.png" alt={user.name} className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-sm text-zinc-900 dark:text-white">{user.name}</p>
                  <p className="text-xs text-zinc-500 font-mono truncate max-w-[170px]">{user.email}</p>
                </div>
              </div>
              <span className="text-xs text-blue-500 font-semibold">View</span>
            </div>
          )}

          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.isAction)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium font-lexend transition-colors ${
                    isActive
                      ? 'bg-zinc-100 dark:bg-zinc-800 text-[#6C47FF] dark:text-[#8b6eff] font-semibold'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
            <a
              href="/preparation"
              onClick={(e) => handleLinkClick(e, '/preparation')}
              className="w-full py-2.5 px-4 rounded-xl bg-[#6C47FF] text-white text-center font-semibold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>Explore Preparation Hub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* Community Modal */}
      {showCommunityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative text-zinc-900 dark:text-white">
            <button
              onClick={() => setShowCommunityModal(false)}
              className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-indigo-500 font-semibold text-xs tracking-wider uppercase mb-2">
              <MessageSquare className="w-4 h-4 text-[#6C47FF]" />
              Official HackPath Community
            </div>
            <h3 className="text-2xl font-bold font-lexend tracking-tight mb-2">
              Connect With 100k+ Engineers
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Join active discussion groups, discuss daily LeetCode problems, get instant referral leads, and share real interview experiences.
            </p>

            <div className="grid gap-3 mb-6">
              <a
                href="https://www.instagram.com/channel/E1ynCd7tzuRxPBIm/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center font-bold text-lg">
                    IG
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-zinc-900 dark:text-white group-hover:text-purple-500 transition-colors">
                      HackPath Community Channel
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Real-time hiring alerts, prep tips &amp; discussions
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-purple-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://x.com/TeachFlow_in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center font-bold text-lg">
                    𝕏
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-zinc-900 dark:text-white">
                      HackPath on X (Twitter)
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Engineering insights, daily tips, and updates
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60 text-xs text-zinc-500 dark:text-zinc-400 text-center">
              🛡️ Zero spam policy. Moderated technical channels only.
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
