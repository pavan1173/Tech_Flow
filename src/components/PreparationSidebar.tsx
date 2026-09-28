import React, { useState } from 'react';
import { TeachFlowLogo } from './TeachFlowLogo';
import {
  LayoutDashboard,
  FileCode,
  Building2,
  Sparkles,
  CircleDollarSign,
  Database,
  Layers,
  Youtube,
  BookMarked,
  Network,
  Users,
  HelpCircle,
  MessageSquareQuote,
  Mail,
  FileText,
  Scroll,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Tv
} from 'lucide-react';

interface SidebarProps {
  currentPath: string;
  navigate: (to: string) => void;
  collapsed?: boolean;
  mobileOpen?: boolean;
  setMobileOpen?: (open: boolean) => void;
}

export const PreparationSidebar: React.FC<SidebarProps> = ({
  currentPath,
  navigate,
  collapsed = false,
  mobileOpen = false,
  setMobileOpen,
}) => {
  // Local fallback if not passed
  const [internalMobileOpen, setInternalMobileOpen] = useState(false);
  const isDrawerOpen = setMobileOpen ? mobileOpen : internalMobileOpen;
  const closeDrawer = () => {
    if (setMobileOpen) setMobileOpen(false);
    else setInternalMobileOpen(false);
  };

  // Accordion state for DSA Sheets
  const [dsaSheetsExpanded, setDsaSheetsExpanded] = useState<boolean>(() => {
    return currentPath.includes('/preparation/dsa-sheets');
  });

  // Accordion state for Core Subjects matching screenshot
  const [coreSubjectsExpanded, setCoreSubjectsExpanded] = useState<boolean>(() => {
    return (
      currentPath.includes('/preparation/dbms-playlists') ||
      currentPath.includes('/preparation/os-playlists') ||
      currentPath.includes('/preparation/oops-playlists') ||
      true // Default expanded as in screenshot
    );
  });

  // Accordion state for DSA Playlists matching screenshot
  const [dsaPlaylistsExpanded, setDsaPlaylistsExpanded] = useState<boolean>(() => {
    return currentPath.includes('/preparation/dsa-playlists') || true;
  });

  // Accordion state for System Design Playlists matching screenshot
  const [systemDesignExpanded, setSystemDesignExpanded] = useState<boolean>(() => {
    return currentPath.includes('/preparation/system-design-playlists') || true;
  });

  const dsaSubSheets = [
    { label: 'Blind 75 DSA Sheet', href: '/preparation/dsa-sheets/blind-75-dsa-sheet' },
    { label: "Striver's A2Z DSA Sheet", href: '/preparation/dsa-sheets/striver-a2z-dsa-sheet' },
    { label: 'Love Babbar DSA Sheet', href: '/preparation/dsa-sheets/love-babbar-dsa-sheet' },
    { label: 'Shradha Didi DSA Sheet', href: '/preparation/dsa-sheets/shradha-khapra-dsa-sheet' },
    { label: 'Rohit Negi DSA Sheet', href: '/preparation/dsa-sheets/rohit-negi-dsa-sheet' },
    { label: 'Arsh Goyal DSA Sheet', href: '/preparation/dsa-sheets/arsh-goyal-dsa-sheet' },
    { label: 'Fraz DSA Sheet', href: '/preparation/dsa-sheets/fraz-dsa-sheet' },
    { label: 'Neetcode 150 DSA Sheet', href: '/preparation/dsa-sheets/neetcode-dsa-sheet' },
  ];

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
    closeDrawer();
  };

  const navContent = (
    <div className="flex flex-col gap-5 py-4 px-3 text-zinc-300 font-lexend">
      {/* Brand Header */}
      <div className="px-3 py-2 flex items-center justify-between border-b border-zinc-900 pb-3">
        <a
          href="/"
          onClick={(e) => handleNav(e, '/')}
          className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl bg-[#141416] border border-zinc-800/80 hover:border-zinc-700 transition-all cursor-pointer group"
        >
          <TeachFlowLogo size={30} showText={true} />
        </a>
      </div>

      {/* Main Group: Dashboard */}
      <div>
        <div className="px-3 pb-2 text-[10px] font-bold uppercase font-mono-space tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
          MAIN
        </div>
        <a
          href="/preparation"
          onClick={(e) => handleNav(e, '/preparation')}
          className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            currentPath === '/preparation'
              ? 'bg-zinc-800/80 text-white font-semibold'
              : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <LayoutDashboard className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>Dashboard</span>
        </a>
      </div>

      {/* Sheets Group */}
      <div>
        <div className="px-3 pb-2 text-[10px] font-bold uppercase font-mono-space tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
          SHEETS
        </div>
        <div className="space-y-1">
          {/* DSA Sheets (Expandable) */}
          <div>
            <div
              className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                currentPath.startsWith('/preparation/dsa-sheets')
                  ? 'bg-zinc-800/60 text-white font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
              onClick={() => setDsaSheetsExpanded(!dsaSheetsExpanded)}
            >
              <a
                href="/preparation/dsa-sheets"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNav(e, '/preparation/dsa-sheets');
                }}
                className="flex items-center gap-2.5 flex-1"
              >
                <FileCode className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>DSA Sheets</span>
              </a>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setDsaSheetsExpanded(!dsaSheetsExpanded);
                }}
                className="p-0.5 text-zinc-400 hover:text-white"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    dsaSheetsExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {/* Sub items */}
            {dsaSheetsExpanded && (
              <div className="pl-8 pr-2 py-1 space-y-1">
                {dsaSubSheets.map((sub) => {
                  const isSubActive = currentPath === sub.href;
                  return (
                    <a
                      key={sub.href}
                      href={sub.href}
                      onClick={(e) => handleNav(e, sub.href)}
                      className={`block py-1.5 px-2 rounded-lg text-xs truncate transition-colors ${
                        isSubActive
                          ? 'text-white font-bold bg-zinc-800/80'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                      }`}
                    >
                      {sub.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <a
            href="/preparation/company-wise-dsa-sheet"
            onClick={(e) => handleNav(e, '/preparation/company-wise-dsa-sheet')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              currentPath.startsWith('/preparation/company-wise-dsa-sheet')
                ? 'bg-zinc-800/80 text-white font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Building2 className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>Company Wise DSA</span>
          </a>

          <a
            href="/preparation/20-essential-dsa-patterns"
            onClick={(e) => handleNav(e, '/preparation/20-essential-dsa-patterns')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              currentPath === '/preparation/20-essential-dsa-patterns'
                ? 'bg-zinc-800/80 text-white font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>20 DSA Patterns</span>
          </a>

          <a
            href="/preparation/package-wise-dsa-sheet"
            onClick={(e) => handleNav(e, '/preparation/package-wise-dsa-sheet')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              currentPath === '/preparation/package-wise-dsa-sheet'
                ? 'bg-zinc-800/80 text-white font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <CircleDollarSign className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>Package Wise DSA</span>
          </a>

          <a
            href="/preparation/sql-sheet"
            onClick={(e) => handleNav(e, '/preparation/sql-sheet')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              currentPath === '/preparation/sql-sheet'
                ? 'bg-zinc-800/80 text-white font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Database className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>SQL Sheet</span>
          </a>

          <a
            href="/preparation/system-design-sheet"
            onClick={(e) => handleNav(e, '/preparation/system-design-sheet')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              currentPath === '/preparation/system-design-sheet'
                ? 'bg-zinc-800/80 text-white font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Layers className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>System Design Sheet</span>
          </a>
        </div>
      </div>

      {/* Playlists Group */}
      <div>
        <div className="px-3 pb-2 text-[10px] font-bold uppercase font-mono-space tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
          PLAYLISTS
        </div>
        <div className="space-y-1">
          {/* 1. DSA Playlists Expandable */}
          <div>
            <div
              className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                currentPath.includes('/preparation/dsa-playlists')
                  ? 'bg-zinc-800/60 text-white font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
              onClick={() => setDsaPlaylistsExpanded(!dsaPlaylistsExpanded)}
            >
              <a
                href="/preparation/dsa-playlists"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNav(e, '/preparation/dsa-playlists');
                }}
                className="flex items-center gap-2.5 flex-1"
              >
                <Tv className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>DSA Playlists</span>
              </a>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setDsaPlaylistsExpanded(!dsaPlaylistsExpanded);
                }}
                className="p-0.5 text-zinc-400 hover:text-white"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    dsaPlaylistsExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {dsaPlaylistsExpanded && (
              <div className="pl-8 pr-2 py-1 space-y-0.5">
                <a
                  href="/preparation/dsa-playlists/love-babbar-dsa"
                  onClick={(e) => handleNav(e, '/preparation/dsa-playlists/love-babbar-dsa')}
                  className={`block py-1.5 px-2 rounded-lg text-xs truncate transition-colors ${
                    currentPath === '/preparation/dsa-playlists/love-babbar-dsa'
                      ? 'text-white font-bold bg-zinc-800/80'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  Love Babbar DSA
                </a>
                <a
                  href="/preparation/dsa-playlists/shradha-khapra-dsa"
                  onClick={(e) => handleNav(e, '/preparation/dsa-playlists/shradha-khapra-dsa')}
                  className={`block py-1.5 px-2 rounded-lg text-xs truncate transition-colors ${
                    currentPath === '/preparation/dsa-playlists/shradha-khapra-dsa'
                      ? 'text-white font-bold bg-zinc-800/80'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  Shradha Khapra DSA
                </a>
                <a
                  href="/preparation/dsa-playlists/rohit-negi-dsa"
                  onClick={(e) => handleNav(e, '/preparation/dsa-playlists/rohit-negi-dsa')}
                  className={`block py-1.5 px-2 rounded-lg text-xs truncate transition-colors ${
                    currentPath === '/preparation/dsa-playlists/rohit-negi-dsa'
                      ? 'text-white font-bold bg-zinc-800/80'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  Rohit Negi DSA
                </a>
              </div>
            )}
          </div>

          {/* 2. Core Subjects Expandable matching screenshot */}
          <div>
            <div
              className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                currentPath.includes('/dbms-playlists') ||
                currentPath.includes('/os-playlists') ||
                currentPath.includes('/oops-playlists')
                  ? 'bg-zinc-800/60 text-white font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
              onClick={() => setCoreSubjectsExpanded(!coreSubjectsExpanded)}
            >
              <a
                href="/preparation/dbms-playlists"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNav(e, '/preparation/dbms-playlists');
                }}
                className="flex items-center gap-2.5 flex-1"
              >
                <BookMarked className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>Core Subjects</span>
              </a>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCoreSubjectsExpanded(!coreSubjectsExpanded);
                }}
                className="p-0.5 text-zinc-400 hover:text-white"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    coreSubjectsExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {/* Core Subjects Sub Hierarchy matching screenshot */}
            {coreSubjectsExpanded && (
              <div className="pl-6 pr-2 py-1 space-y-3 mt-1">
                {/* DBMS Playlists */}
                <div>
                  <a
                    href="/preparation/dbms-playlists"
                    onClick={(e) => handleNav(e, '/preparation/dbms-playlists')}
                    className="block text-[11px] font-bold text-zinc-400 hover:text-white px-2 py-1 uppercase tracking-wider"
                  >
                    DBMS Playlists
                  </a>
                  <div className="space-y-0.5 pl-2">
                    <a
                      href="/preparation/dbms-playlists/love-babbar-dbms"
                      onClick={(e) => handleNav(e, '/preparation/dbms-playlists/love-babbar-dbms')}
                      className={`block py-1 px-2 rounded-lg text-xs truncate transition-colors ${
                        currentPath === '/preparation/dbms-playlists/love-babbar-dbms'
                          ? 'text-white font-bold bg-zinc-800/80'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                      }`}
                    >
                      Love Babbar DBMS
                    </a>
                    <a
                      href="/preparation/dbms-playlists/riti-kumari-dbms"
                      onClick={(e) => handleNav(e, '/preparation/dbms-playlists/riti-kumari-dbms')}
                      className={`block py-1 px-2 rounded-lg text-xs truncate transition-colors ${
                        currentPath === '/preparation/dbms-playlists/riti-kumari-dbms'
                          ? 'text-white font-bold bg-zinc-800/80'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                      }`}
                    >
                      Riti Kumari DBMS
                    </a>
                  </div>
                </div>

                {/* Operating Systems */}
                <div>
                  <a
                    href="/preparation/os-playlists"
                    onClick={(e) => handleNav(e, '/preparation/os-playlists')}
                    className="block text-[11px] font-bold text-zinc-400 hover:text-white px-2 py-1 uppercase tracking-wider"
                  >
                    Operating Systems
                  </a>
                  <div className="space-y-0.5 pl-2">
                    <a
                      href="/preparation/os-playlists/love-babbar-os"
                      onClick={(e) => handleNav(e, '/preparation/os-playlists/love-babbar-os')}
                      className={`block py-1 px-2 rounded-lg text-xs truncate transition-colors ${
                        currentPath === '/preparation/os-playlists/love-babbar-os'
                          ? 'text-white font-bold bg-zinc-800/80'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                      }`}
                    >
                      Love Babbar OS
                    </a>
                    <a
                      href="/preparation/os-playlists/riti-kumari-os"
                      onClick={(e) => handleNav(e, '/preparation/os-playlists/riti-kumari-os')}
                      className={`block py-1 px-2 rounded-lg text-xs truncate transition-colors ${
                        currentPath === '/preparation/os-playlists/riti-kumari-os'
                          ? 'text-white font-bold bg-zinc-800/80'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                      }`}
                    >
                      Riti Kumari OS
                    </a>
                    <a
                      href="/preparation/os-playlists/vivek-gupta-os"
                      onClick={(e) => handleNav(e, '/preparation/os-playlists/vivek-gupta-os')}
                      className={`block py-1 px-2 rounded-lg text-xs truncate transition-colors ${
                        currentPath === '/preparation/os-playlists/vivek-gupta-os'
                          ? 'text-white font-bold bg-zinc-800/80'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                      }`}
                    >
                      Vivek Gupta OS
                    </a>
                    <a
                      href="/preparation/os-playlists/neso-academy-os"
                      onClick={(e) => handleNav(e, '/preparation/os-playlists/neso-academy-os')}
                      className={`block py-1 px-2 rounded-lg text-xs truncate transition-colors ${
                        currentPath === '/preparation/os-playlists/neso-academy-os'
                          ? 'text-white font-bold bg-zinc-800/80'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                      }`}
                    >
                      Neso Academy OS
                    </a>
                  </div>
                </div>

                {/* OOPS Playlists */}
                <div>
                  <a
                    href="/preparation/oops-playlists"
                    onClick={(e) => handleNav(e, '/preparation/oops-playlists')}
                    className="block text-[11px] font-bold text-zinc-400 hover:text-white px-2 py-1 uppercase tracking-wider"
                  >
                    OOPS Playlists
                  </a>
                  <div className="space-y-0.5 pl-2">
                    <a
                      href="/preparation/oops-playlists/code-with-harry-oop"
                      onClick={(e) => handleNav(e, '/preparation/oops-playlists/code-with-harry-oop')}
                      className={`block py-1 px-2 rounded-lg text-xs truncate transition-colors ${
                        currentPath === '/preparation/oops-playlists/code-with-harry-oop'
                          ? 'text-white font-bold bg-zinc-800/80'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                      }`}
                    >
                      Code With Harry OOP
                    </a>
                    <a
                      href="/preparation/oops-playlists/rohit-negi-oop"
                      onClick={(e) => handleNav(e, '/preparation/oops-playlists/rohit-negi-oop')}
                      className={`block py-1 px-2 rounded-lg text-xs truncate transition-colors ${
                        currentPath === '/preparation/oops-playlists/rohit-negi-oop'
                          ? 'text-white font-bold bg-zinc-800/80'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                      }`}
                    >
                      Rohit Negi OOP
                    </a>
                    <a
                      href="/preparation/oops-playlists/kunal-kushwaha-oop"
                      onClick={(e) => handleNav(e, '/preparation/oops-playlists/kunal-kushwaha-oop')}
                      className={`block py-1 px-2 rounded-lg text-xs truncate transition-colors ${
                        currentPath === '/preparation/oops-playlists/kunal-kushwaha-oop'
                          ? 'text-white font-bold bg-zinc-800/80'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                      }`}
                    >
                      Kunal Kushwaha OOP
                    </a>
                    <a
                      href="/preparation/oops-playlists/jennys-oop"
                      onClick={(e) => handleNav(e, '/preparation/oops-playlists/jennys-oop')}
                      className={`block py-1 px-2 rounded-lg text-xs truncate transition-colors ${
                        currentPath === '/preparation/oops-playlists/jennys-oop'
                          ? 'text-white font-bold bg-zinc-800/80'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                      }`}
                    >
                      Jenny's OOP
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. System Design Playlists Expandable matching screenshot */}
          <div>
            <div
              className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                currentPath.includes('/preparation/system-design-playlists')
                  ? 'bg-zinc-800/60 text-white font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
              onClick={() => setSystemDesignExpanded(!systemDesignExpanded)}
            >
              <a
                href="/preparation/system-design-playlists"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNav(e, '/preparation/system-design-playlists');
                }}
                className="flex items-center gap-2.5 flex-1"
              >
                <Layers className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>System Design Playlists</span>
              </a>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSystemDesignExpanded(!systemDesignExpanded);
                }}
                className="p-0.5 text-zinc-400 hover:text-white"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    systemDesignExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {systemDesignExpanded && (
              <div className="pl-8 pr-2 py-1 space-y-0.5">
                <a
                  href="/preparation/system-design-playlists/gaurav-sen-hld"
                  onClick={(e) => handleNav(e, '/preparation/system-design-playlists/gaurav-sen-hld')}
                  className={`block py-1.5 px-2 rounded-lg text-xs truncate transition-colors ${
                    currentPath === '/preparation/system-design-playlists/gaurav-sen-hld'
                      ? 'text-white font-bold bg-zinc-800/80'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  Gaurav Sen HLD
                </a>
                <a
                  href="/preparation/system-design-playlists/exponent-hld"
                  onClick={(e) => handleNav(e, '/preparation/system-design-playlists/exponent-hld')}
                  className={`block py-1.5 px-2 rounded-lg text-xs truncate transition-colors ${
                    currentPath === '/preparation/system-design-playlists/exponent-hld'
                      ? 'text-white font-bold bg-zinc-800/80'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  Exponent HLD
                </a>
                <a
                  href="/preparation/system-design-playlists/hello-interview-hld"
                  onClick={(e) => handleNav(e, '/preparation/system-design-playlists/hello-interview-hld')}
                  className={`block py-1.5 px-2 rounded-lg text-xs truncate transition-colors ${
                    currentPath === '/preparation/system-design-playlists/hello-interview-hld'
                      ? 'text-white font-bold bg-zinc-800/80'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  Hello Interview HLD
                </a>
                <a
                  href="/preparation/system-design-playlists/code-with-aryan-lld"
                  onClick={(e) => handleNav(e, '/preparation/system-design-playlists/code-with-aryan-lld')}
                  className={`block py-1.5 px-2 rounded-lg text-xs truncate transition-colors ${
                    currentPath === '/preparation/system-design-playlists/code-with-aryan-lld'
                      ? 'text-white font-bold bg-zinc-800/80'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  Code With Aryan LLD
                </a>
                <a
                  href="/preparation/system-design-playlists/coder-army-lld"
                  onClick={(e) => handleNav(e, '/preparation/system-design-playlists/coder-army-lld')}
                  className={`block py-1.5 px-2 rounded-lg text-xs truncate transition-colors ${
                    currentPath === '/preparation/system-design-playlists/coder-army-lld'
                      ? 'text-white font-bold bg-zinc-800/80'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  Coder Army LLD
                </a>
                <a
                  href="/preparation/system-design-playlists/engineering-digest-hld"
                  onClick={(e) => handleNav(e, '/preparation/system-design-playlists/engineering-digest-hld')}
                  className={`block py-1.5 px-2 rounded-lg text-xs truncate transition-colors ${
                    currentPath === '/preparation/system-design-playlists/engineering-digest-hld'
                      ? 'text-white font-bold bg-zinc-800/80'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  Engineering Digest HLD
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Resources Group */}
      <div>
        <div className="px-3 pb-2 text-[10px] font-bold uppercase font-mono-space tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
          RESOURCES
        </div>
        <div className="space-y-1">
          <a
            href="/preparation/role-wise"
            onClick={(e) => handleNav(e, '/preparation/role-wise')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              currentPath.startsWith('/preparation/role-wise')
                ? 'bg-zinc-800/80 text-white font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Users className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>Role Wise Questions</span>
          </a>

          <a
            href="/preparation/most-asked-questions"
            onClick={(e) => handleNav(e, '/preparation/most-asked-questions')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              currentPath.startsWith('/preparation/most-asked-questions')
                ? 'bg-zinc-800/80 text-white font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>Most Asked Questions</span>
          </a>

          <a
            href="/preparation/hr-questions"
            onClick={(e) => handleNav(e, '/preparation/hr-questions')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              currentPath === '/preparation/hr-questions'
                ? 'bg-zinc-800/80 text-white font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <MessageSquareQuote className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>HR Interview Questions</span>
          </a>

          <a
            href="/preparation/cold-email-templets"
            onClick={(e) => handleNav(e, '/preparation/cold-email-templets')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              currentPath.includes('cold-email')
                ? 'bg-zinc-800/80 text-white font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>Cold Email Templates</span>
          </a>

          <a
            href="/preparation/resume-templates"
            onClick={(e) => handleNav(e, '/preparation/resume-templates')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              currentPath === '/preparation/resume-templates'
                ? 'bg-zinc-800/80 text-white font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <FileText className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>Resume Templates</span>
          </a>

          <a
            href="/preparation/notes"
            onClick={(e) => handleNav(e, '/preparation/notes')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              currentPath === '/preparation/notes'
                ? 'bg-zinc-800/80 text-white font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Scroll className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>Cool Notes</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex animate-in fade-in duration-200">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
            onClick={closeDrawer}
            aria-label="Close sidebar overlay"
          />
          <div className="relative w-72 sm:w-80 max-w-[85vw] bg-[#07090e] border-r border-zinc-900 h-full overflow-y-auto overscroll-contain custom-scrollbar z-50 flex flex-col shadow-2xl animate-in slide-in-from-left duration-300 ease-out">
            {/* Mobile Drawer Header with Close Button */}
            <div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between shrink-0">
              <a
                href="/"
                onClick={(e) => handleNav(e, '/')}
                className="flex items-center group cursor-pointer"
              >
                <TeachFlowLogo size={28} showText={true} />
              </a>

              <button
                onClick={closeDrawer}
                aria-label="Close navigation"
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pb-10">
              {navContent}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Persistent Sidebar */}
      <aside
        className={`hidden lg:block shrink-0 h-screen sticky top-0 overflow-y-auto custom-scrollbar border-r border-[#161c28] bg-[#07090e] transition-all ${
          collapsed ? 'w-16' : 'w-64'
        }`}
      >
        {navContent}
      </aside>
    </>
  );
};
