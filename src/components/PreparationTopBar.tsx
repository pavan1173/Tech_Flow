import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { TeachFlowLogo } from './TeachFlowLogo';
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
    <header className="sticky top-0 z-30 w-full h-14 bg-black/90 dark:bg-black/90 backdrop-blur-md border-b border-zinc-800/80 px-4 sm:px-6 flex items-center justify-between text-zinc-300 font-lexend">
      {/* Left: Sidebar toggle icon + Breadcrumbs */}
      <div className="flex items-center gap-2.5 min-w-0 flex-1 mr-2">
        <button
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors cursor-pointer shrink-0"
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
        <span className="sm:hidden text-xs font-semibold text-white truncate max-w-[120px] xs:max-w-[180px]">
          {breadcrumbs[breadcrumbs.length - 1]?.label}
        </span>

        {/* Desktop full breadcrumbs */}
        <nav className="hidden sm:flex items-center gap-2 text-xs sm:text-sm text-zinc-400 min-w-0 truncate">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />}
                {crumb.href && !isLast ? (
                  <button
                    onClick={() => navigate(crumb.href!)}
                    className="hover:text-white transition-colors cursor-pointer truncate"
                  >
                    {crumb.label}
                  </button>
                ) : (
                  <span className={`truncate ${isLast ? 'text-white font-semibold' : ''}`}>
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      {/* Right: Dark mode toggle & Google Sign In button */}
      <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
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

        {/* User Profile Badge matching Variation 2 */}
        {isAuthenticated && user ? (
          <div className="flex items-center gap-2.5">
            <div className="text-right hidden sm:block leading-tight">
              <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">{user.name || 'Pavan Kumar'}</p>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono-space tracking-wider">PRO MEMBER</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xs font-bold font-mono-space shadow-xs">
              {user.name ? user.name.charAt(0).toUpperCase() : 'P'}
            </div>
            <button
              onClick={logout}
              title="Sign out"
              className="p-1 rounded-lg text-zinc-400 hover:text-red-400 hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2.5">
            <div className="text-right hidden sm:block leading-tight">
              <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Pavan Kumar</p>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono-space tracking-wider">PRO MEMBER</p>
            </div>
            <button
              onClick={openAuthModal}
              className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:ring-2 hover:ring-blue-500/50 text-zinc-800 dark:text-zinc-200 flex items-center justify-center text-xs font-bold font-mono-space transition-all cursor-pointer"
              title="Pavan Kumar (Pro Member) - Click to Manage Account"
            >
              P
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
