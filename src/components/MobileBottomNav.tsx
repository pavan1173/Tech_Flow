import React from 'react';
import {
  LayoutDashboard,
  FileCode,
  Building2,
  Sparkles,
  Menu
} from 'lucide-react';

interface MobileBottomNavProps {
  currentPath: string;
  navigate: (to: string) => void;
  onOpenSidebar: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPath,
  navigate,
  onOpenSidebar,
}) => {
  const isDashboard = currentPath === '/preparation';
  const isDsaSheets = currentPath.startsWith('/preparation/dsa-sheets');
  const isCompanyWise = currentPath.startsWith('/preparation/company-wise');
  const isPatterns = currentPath === '/preparation/20-essential-dsa-patterns';

  const navItems = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      active: isDashboard,
      onClick: () => navigate('/preparation'),
    },
    {
      label: 'DSA Sheets',
      icon: FileCode,
      active: isDsaSheets,
      onClick: () => navigate('/preparation/dsa-sheets'),
    },
    {
      label: 'Companies',
      icon: Building2,
      active: isCompanyWise,
      onClick: () => navigate('/preparation/company-wise-dsa-sheet'),
    },
    {
      label: 'Patterns',
      icon: Sparkles,
      active: isPatterns,
      onClick: () => navigate('/preparation/20-essential-dsa-patterns'),
    },
    {
      label: 'Directory',
      icon: Menu,
      active: false,
      onClick: onOpenSidebar,
    },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090d14]/95 dark:bg-[#07090e]/95 backdrop-blur-lg border-t border-[#1b2230] shadow-2xl transition-all duration-200"
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 6px)' }}
    >
      <div className="grid grid-cols-5 items-center h-14 max-w-md mx-auto px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={item.onClick}
              aria-label={item.label}
              className={`flex flex-col items-center justify-center h-full min-h-[44px] transition-colors relative group cursor-pointer ${
                item.active
                  ? 'text-blue-400 font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform duration-150 ${
                    item.active ? 'scale-110 stroke-[2.5]' : 'group-hover:scale-105'
                  }`}
                />
                {item.active && (
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                )}
              </div>
              <span
                className={`text-[10px] tracking-tight mt-1 truncate max-w-[64px] ${
                  item.active ? 'font-bold text-white' : 'font-medium'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
