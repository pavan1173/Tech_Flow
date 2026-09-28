import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { Sun, Moon, PanelLeft, ChevronRight, LogOut, Sparkles } from 'lucide-react';

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
  const { user, isAuthenticated, openAuthModal, logout } = useAuth();

  const getBreadcrumbs = () => {
    if (currentPath === '/preparation') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'Dashboard' }];
    }
    if (currentPath === '/preparation/dsa-sheets') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'DSA Sheets' }];
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
    if (currentPath === '/preparation/dbms-playlists') {
      return [{ label: 'Preparation', href: '/preparation' }, { label: 'Core Subjects' }];
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
    <header className="sticky top-0 z-30 w-full h-14 bg-black/90 dark:bg-black/90 backdrop-blur-md border-b border-zinc-800/80 px-4 sm:px-6 flex items-center justify-between text-zinc-300 font-lexend">
      {/* Left: Sidebar toggle icon + Breadcrumbs */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors cursor-pointer"
        >
          <PanelLeft className="w-5 h-5" />
        </button>

        <nav className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />}
                {crumb.href && !isLast ? (
                  <button
                    onClick={() => navigate(crumb.href!)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {crumb.label}
                  </button>
                ) : (
                  <span className={isLast ? 'text-white font-semibold' : ''}>
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      {/* Right: Dark mode toggle & Google Sign In button */}
      <div className="flex items-center gap-3">
        {/* Dark Mode Switch Pill */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="relative w-12 h-6 rounded-full bg-zinc-800 p-0.5 transition-colors flex items-center cursor-pointer"
        >
          <div
            className={`w-5 h-5 rounded-full bg-zinc-950 flex items-center justify-center transition-transform ${
              theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
            }`}
          >
            {theme === 'dark' ? (
              <Moon className="w-3 h-3 text-zinc-200" />
            ) : (
              <Sun className="w-3 h-3 text-amber-400" />
            )}
          </div>
        </button>

        {/* Google Sign In Button */}
        {isAuthenticated && user ? (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center text-xs font-bold shadow-xs">
              {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <span className="hidden sm:inline text-xs font-semibold text-white">
              {user.name || user.email}
            </span>
            <button
              onClick={logout}
              title="Sign out"
              className="p-1 rounded-lg text-zinc-400 hover:text-red-400 hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={openAuthModal}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-zinc-900 hover:bg-zinc-100 transition-all font-semibold text-xs shadow-xs cursor-pointer hover:scale-[1.02]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
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
      </div>
    </header>
  );
};
