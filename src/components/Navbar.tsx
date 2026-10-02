import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { TeachFlowLogo } from './TeachFlowLogo';
import { Sun, Moon, Menu, X, ArrowUpRight, MessageSquare, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  navigate: (to: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const { theme, toggleTheme } = useTheme();
  const { totalSolved } = useProgress();
  const { isAuthenticated, openAuthModal } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCommunityModal, setShowCommunityModal] = useState(false);

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
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 dark:border-zinc-800/80 bg-white/90 dark:bg-black/90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center group cursor-pointer select-none"
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

          {/* Google Sign In (when not logged in) */}
          {!isAuthenticated && (
            <button
              onClick={openAuthModal}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold transition-all cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
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
                href="https://chat.whatsapp.com/KBIk0COfdZSDenWJN9xWmN?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-lg">
                    WA
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                      HackPath Placement Alerts WhatsApp
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Real-time off-campus hiring alerts & OA questions
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
