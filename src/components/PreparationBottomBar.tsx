import React from 'react';
import {
  LayoutDashboard,
  FileCode,
  Youtube,
  HelpCircle,
  Menu
} from 'lucide-react';

interface PreparationBottomBarProps {
  currentPath: string;
  navigate: (to: string) => void;
  openMobileSidebar: () => void;
}

export const PreparationBottomBar: React.FC<PreparationBottomBarProps> = ({
  currentPath,
  navigate,
  openMobileSidebar,
}) => {
  const isDashboardActive = currentPath === '/preparation';
  const isSheetsActive =
    currentPath.startsWith('/preparation/dsa-sheets') ||
    currentPath.startsWith('/preparation/blind-75') ||
    currentPath.startsWith('/preparation/company-wise-dsa-sheet') ||
    currentPath.startsWith('/preparation/package-wise-dsa-sheet') ||
    currentPath.startsWith('/preparation/20-essential-dsa-patterns') ||
    currentPath.startsWith('/preparation/sql-sheet') ||
    currentPath.startsWith('/preparation/system-design-sheet');

  const isPlaylistsActive =
    currentPath.includes('-playlists') ||
    currentPath === '/preparation/dsa-playlists';

  const isQuestionsActive =
    currentPath.startsWith('/preparation/most-asked-questions') ||
    currentPath.startsWith('/preparation/role-wise') ||
    currentPath.startsWith('/preparation/hr-questions');

  const navItems = [
    {
      id: 'dashboard',
      label: 'Home',
      icon: LayoutDashboard,
      active: isDashboardActive,
      onClick: () => navigate('/preparation'),
    },
    {
      id: 'sheets',
      label: 'Sheets',
      icon: FileCode,
      active: isSheetsActive,
      onClick: () => navigate('/preparation/dsa-sheets'),
    },
    {
      id: 'playlists',
      label: 'Playlists',
      icon: Youtube,
      active: isPlaylistsActive,
      onClick: () => navigate('/preparation/dsa-playlists'),
    },
    {
      id: 'questions',
      label: 'Questions',
      icon: HelpCircle,
      active: isQuestionsActive,
      onClick: () => navigate('/preparation/most-asked-questions'),
    },
    {
      id: 'menu',
      label: 'More',
      icon: Menu,
      active: false,
      onClick: openMobileSidebar,
    },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080b12]/95 backdrop-blur-xl border-t border-[#181f2c] px-2 py-1.5 flex items-center justify-around shadow-2xl transition-all"
      style={{ paddingBottom: 'max(0.375rem, env(safe-area-inset-bottom))' }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={item.onClick}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer relative ${
              item.active
                ? 'text-blue-400 font-bold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {item.active && (
              <span className="absolute -top-1 w-6 h-0.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50" />
            )}
            <Icon className={`w-5 h-5 ${item.active ? 'text-blue-400 scale-105 stroke-[2.2]' : 'text-zinc-400'}`} />
            <span className="text-[10px] tracking-tight mt-0.5 font-medium">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
