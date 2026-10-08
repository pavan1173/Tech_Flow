import React from 'react';
import { dsaSheetsList } from '../data/common';
import { AlignLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { AuthGate } from '../components/AuthGate';

interface DsaSheetsPageProps {
  navigate: (to: string) => void;
}

export const DsaSheetsPage: React.FC<DsaSheetsPageProps> = ({ navigate }) => {
  const { isAuthenticated } = useAuth();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (isExternal) return;
    e.preventDefault();
    navigate(href);
  };

  const renderSheetCards = (list: typeof dsaSheetsList) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {list.map((sheet: any) => (
        <a
          key={sheet.slug}
          href={sheet.href}
          onClick={(e) => handleNav(e, sheet.href, sheet.isExternal)}
          className="group rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1a2333] hover:border-zinc-300 dark:hover:border-zinc-700/80 overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl flex flex-col cursor-pointer select-none"
        >
          {/* Real Educator Thumbnail matching screenshot */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950">
            <img
              src={sheet.imageUrl}
              alt={sheet.title}
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
              loading="eager"
            />
          </div>

          {/* Content matching screenshot */}
          <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
              {sheet.title}
            </h2>

            <div className="mt-3.5 pt-3 border-t border-zinc-100 dark:border-[#1a2333] flex items-center text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              <div className="flex items-center gap-2">
                <AlignLeft className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>{sheet.problems} Problems</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fcfcfb] dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 p-4 sm:p-6 lg:p-10 max-w-[1440px] mx-auto space-y-6 font-lexend transition-colors duration-200">
      {/* Header matching screenshot */}
      <div className="space-y-1.5">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          DSA Sheets
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Curated problem sheets from top educators to help you master DSA
        </p>
      </div>

      {/* Sheets Grid */}
      {!isAuthenticated ? (
        <AuthGate
          totalCount="all 8"
          featureName="curated DSA sheets"
          title="Sign in to access all DSA Sheets"
        >
          {renderSheetCards(dsaSheetsList.slice(0, 4))}
        </AuthGate>
      ) : (
        renderSheetCards(dsaSheetsList)
      )}
    </div>
  );
};
