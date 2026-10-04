import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { TeachFlowLogo } from './TeachFlowLogo';
import { Sun, Moon, PanelLeft, ChevronRight, LogOut, Sparkles, Search, Command, User as UserIcon, CheckCircle2, Bookmark, Settings, ExternalLink } from 'lucide-react';
import { GlobalSearchModal } from './GlobalSearchModal';

interface PreparationTopBarProps {
  currentPath: string;
  navigate: (to: string) => void;
  toggleSidebar?: () => void;
}

export const PreparationTopBar: React.FC<PreparationTopBarProps> = ({
  currentPath,
  navigate,
  toggleSidebar,
}) => {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, openAuthModal, openProfileModal, logout } = useAuth();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Global Keyboard Shortcut: Cmd/Ctrl + K or '/'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd + K (Mac) or Ctrl + K (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
      // Single slash '/' when not typing in an input
      if (
        e.key === '/' &&
        !['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)
      ) {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getBreadcrumbs = () => {
    if (currentPath === '/preparation') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'Dashboard' }];
    }
    if (currentPath === '/preparation/dsa-sheets') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'DSA Sheets' }];
    }
    if (currentPath.startsWith('/preparation/roadmaps/')) {
      const slug = currentPath.replace('/preparation/roadmaps/', '');
      const rmName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return [
        { label: 'Preparation', href: '/preparation' },
        { label: 'Developer Roadmaps', href: '/preparation/roadmaps' },
        { label: `${rmName} Roadmap` },
      ];
    }
    if (currentPath === '/preparation/roadmaps') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'Developer Roadmaps' }];
    }

    if (currentPath.startsWith('/preparation/dsa-sheets/')) {
      const slug = currentPath.replace('/preparation/dsa-sheets/', '');
      const sheetName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return [
        { label: 'Preparation', href: '/preparation' },
        { label: 'DSA Sheets', href: '/preparation/dsa-sheets' },
        { label: sheetName },
      ];
    }
    if (currentPath === '/preparation/company-wise-dsa-sheet') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'Company Wise DSA' }];
    }
    if (currentPath.startsWith('/preparation/company-wise-dsa-sheet/')) {
      const slug = currentPath.replace('/preparation/company-wise-dsa-sheet/', '');
      const compName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return [
        { label: 'Preparation', href: '/preparation' },
        { label: 'Company Wise DSA', href: '/preparation/company-wise-dsa-sheet' },
        { label: compName },
      ];
    }
    if (currentPath === '/preparation/20-essential-dsa-patterns') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: '20 DSA Patterns' }];
    }
    if (currentPath === '/preparation/package-wise-dsa-sheet') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'Package Wise DSA' }];
    }
    if (currentPath === '/preparation/sql-sheet') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'SQL Sheet' }];
    }
    if (currentPath === '/preparation/system-design-sheet') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'System Design Sheet' }];
    }
    if (currentPath.startsWith('/preparation/dsa-playlists/')) {
      const slug = currentPath.replace('/preparation/dsa-playlists/', '');
      const plName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return [
        { label: 'Preparation', href: '/preparation' },
        { label: 'DSA Playlists', href: '/preparation/dsa-playlists' },
        { label: plName },
      ];
    }
    if (currentPath === '/preparation/dsa-playlists') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'DSA Playlists' }];
    }
    if (currentPath.startsWith('/preparation/dbms-playlists/')) {
      const slug = currentPath.replace('/preparation/dbms-playlists/', '');
      const plName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return [
        { label: 'Preparation', href: '/preparation' },
        { label: 'DBMS Playlists', href: '/preparation/dbms-playlists' },
        { label: plName },
      ];
    }
    if (currentPath === '/preparation/dbms-playlists') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'DBMS Playlists' }];
    }
    if (currentPath.startsWith('/preparation/os-playlists/')) {
      const slug = currentPath.replace('/preparation/os-playlists/', '');
      const plName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return [
        { label: 'Preparation', href: '/preparation' },
        { label: 'OS Playlists', href: '/preparation/os-playlists' },
        { label: plName },
      ];
    }
    if (currentPath === '/preparation/os-playlists') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'Operating Systems' }];
    }
    if (currentPath.startsWith('/preparation/oops-playlists/')) {
      const slug = currentPath.replace('/preparation/oops-playlists/', '');
      const plName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return [
        { label: 'Preparation', href: '/preparation' },
        { label: 'OOPS Playlists', href: '/preparation/oops-playlists' },
        { label: plName },
      ];
    }
    if (currentPath === '/preparation/oops-playlists') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'OOPS Playlists' }];
    }
    if (currentPath === '/preparation/playlists') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'Video Playlists' }];
    }
    if (currentPath.startsWith('/preparation/system-design-playlists/')) {
      const slug = currentPath.replace('/preparation/system-design-playlists/', '');
      const plName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return [
        { label: 'Preparation', href: '/preparation' },
        { label: 'System Design Playlists', href: '/preparation/system-design-playlists' },
        { label: plName },
      ];
    }
    if (currentPath === '/preparation/system-design-playlists') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'System Design Playlists' }];
    }
    if (currentPath === '/preparation/role-wise') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'Role Wise Questions' }];
    }
    if (currentPath.startsWith('/preparation/role-wise/')) {
      const slug = currentPath.replace('/preparation/role-wise/', '');
      const roleName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return [
        { label: 'Preparation', href: '/preparation' },
        { label: 'Role Wise Questions', href: '/preparation/role-wise' },
        { label: roleName },
      ];
    }
    if (currentPath === '/preparation/most-asked-questions') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'Most Asked Questions' }];
    }
    if (currentPath.startsWith('/preparation/most-asked-questions/')) {
      const slug = currentPath.replace('/preparation/most-asked-questions/', '');
      const topicName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return [
        { label: 'Preparation', href: '/preparation' },
        { label: 'Most Asked Questions', href: '/preparation/most-asked-questions' },
        { label: topicName },
      ];
    }
    if (currentPath === '/preparation/hr-questions') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'HR Questions' }];
    }
    if (currentPath.startsWith('/preparation/cold-email-templets/') || currentPath.startsWith('/preparation/cold-email-templates/')) {
      const slug = currentPath.split('/').pop() || '';
      const templateName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return [
        { label: 'Preparation', href: '/preparation' },
        { label: 'Cold Email Templates', href: '/preparation/cold-email-templets' },
        { label: templateName },
      ];
    }
    if (currentPath.includes('cold-email')) {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'Cold Email Templates' }];
    }
    if (currentPath === '/preparation/notes') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'Cool Notes' }];
    }
    if (currentPath === '/preparation/resume-templates') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'Resume Templates' }];
    }
    return [{ label: 'Preparation', href: '/preparation' }];
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <header className="sticky top-0 z-30 w-full h-14 bg-white/95 dark:bg-black/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/80 px-4 sm:px-6 flex items-center justify-between text-zinc-800 dark:text-zinc-300 font-lexend transition-colors duration-200">
      {/* Left: Sidebar toggle icon + Breadcrumbs */}
      <div className="flex items-center gap-2.5 min-w-0 flex-1 mr-2">
        <button
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer shrink-0"
        >
          <PanelLeft className="w-5 h-5" />
        </button>

        {/* Mobile brand logo */}
        <button
          onClick={() => navigate('/')}
          className="sm:hidden flex items-center shrink-0 cursor-pointer"
          aria-label="Go to Home"
        >
          <TeachFlowLogo size={24} />
        </button>

        {/* Mobile active page indicator */}
        <span className="sm:hidden text-xs font-semibold text-zinc-900 dark:text-white truncate max-w-[120px] xs:max-w-[180px]">
          {breadcrumbs[breadcrumbs.length - 1]?.label}
        </span>

        {/* Desktop full breadcrumbs */}
        <nav className="hidden sm:flex items-center gap-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 min-w-0 truncate">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 shrink-0" />}
                {crumb.href && !isLast ? (
                  <button
                    onClick={() => navigate(crumb.href!)}
                    className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer truncate"
                  >
                    {crumb.label}
                  </button>
                ) : (
                  <span className={`truncate ${isLast ? 'text-zinc-900 dark:text-white font-semibold' : ''}`}>
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      {/* Center: Global Search Bar Trigger with Cmd/Ctrl + K shortcut */}
      <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md mx-1 sm:mx-4">
        <button
          onClick={() => setSearchModalOpen(true)}
          className="w-full flex items-center justify-between gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-zinc-100/90 hover:bg-zinc-200/80 dark:bg-zinc-900/90 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800/90 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-all cursor-pointer shadow-2xs group"
          title="Search DSA sheets, roadmaps, patterns (Cmd/Ctrl + K)"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Search className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors shrink-0" />
            <span className="text-xs truncate text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 font-sans">
              <span className="hidden md:inline">Search DSA sheets, roadmaps, patterns...</span>
              <span className="md:hidden">Search...</span>
            </span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700/80 text-[10px] font-mono font-medium text-zinc-500 dark:text-zinc-400 shadow-2xs">
              <span className="text-[11px]">⌘</span>K
            </kbd>
          </div>
        </button>
      </div>

      {/* Right: Dark mode toggle & Google Sign In button */}
      <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
        {/* Dark / Light Mode Switch Pill */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className={`relative w-12 h-6 rounded-full p-0.5 transition-all duration-300 flex items-center cursor-pointer shadow-inner ${
            theme === 'dark'
              ? 'bg-zinc-800 border border-zinc-700/80'
              : 'bg-amber-100 border border-amber-300/90'
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 shadow-sm ${
              theme === 'dark'
                ? 'translate-x-6 bg-zinc-950 text-indigo-200'
                : 'translate-x-0 bg-white text-amber-500'
            }`}
          >
            {theme === 'dark' ? (
              <Moon className="w-3 h-3" />
            ) : (
              <Sun className="w-3.5 h-3.5 fill-amber-400" />
            )}
          </div>
        </button>

        {/* Interactive User Profile with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          {isAuthenticated && user ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setProfileDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-zinc-800/60 transition-colors text-left cursor-pointer group"
                aria-label="User Profile Menu"
              >
                <div className="text-right hidden sm:block leading-tight">
                  <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {user.name || (user.email ? user.email.split('@')[0] : 'Developer')}
                  </p>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono-space tracking-wider">
                    PRO MEMBER
                  </p>
                </div>

                <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 p-0.5 shadow-sm ring-1 ring-zinc-700/60 group-hover:ring-blue-500/80 transition-all shrink-0 flex items-center justify-center">
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
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-zinc-950" />
                </div>
              </button>
            </div>
          ) : (
            <button
              onClick={openAuthModal}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <UserIcon className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </button>
          )}

          {/* Profile Dropdown Menu */}
          {profileDropdownOpen && isAuthenticated && user && (
            <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150 text-xs font-sans">
              {/* User Identity Header */}
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800/80 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 p-0.5 shrink-0 overflow-hidden shadow-xs flex items-center justify-center">
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
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-zinc-900 dark:text-white truncate text-xs">{user.name}</p>
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400 truncate font-mono">{user.email}</p>
                  </div>
                </div>
              </div>

              {/* Menu Links */}
              <div className="space-y-0.5">
                <button
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    navigate('/preparation/profile');
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-left cursor-pointer"
                >
                  <UserIcon className="w-4 h-4 text-blue-500" />
                  <span>View Full Profile</span>
                </button>

                <button
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    openProfileModal();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-left cursor-pointer"
                >
                  <Settings className="w-4 h-4 text-amber-500" />
                  <span>Quick Edit Profile</span>
                </button>

                <button
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    navigate('/preparation');
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-left cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Preparation Dashboard</span>
                </button>
              </div>

              {/* Sign Out */}
              <div className="mt-2 pt-2 border-t border-zinc-200 dark:border-zinc-800/80">
                <button
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    logout();
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors text-left cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Global Command Palette / Search Modal */}
      <GlobalSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        navigate={navigate}
      />
    </header>
  );
};
