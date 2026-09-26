import React from 'react';
import { dsaSheetsList } from '../data/common';
import { AlignLeft, ArrowRight } from 'lucide-react';

interface DsaSheetsPageProps {
  navigate: (to: string) => void;
}

export const DsaSheetsPage: React.FC<DsaSheetsPageProps> = ({ navigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (isExternal) return;
    e.preventDefault();
    navigate(href);
  };

  return (
    <div className="p-6 sm:p-8 lg:p-10 max-w-[1440px] mx-auto space-y-8 font-lexend">
      {/* Header */}
      <div className="space-y-1.5">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          DSA Sheets
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400">
          Curated problem sheets from top educators to help you master DSA
        </p>
      </div>

      {/* Sheets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dsaSheetsList.map((sheet: any) => (
          <a
            key={sheet.slug}
            href={sheet.href}
            onClick={(e) => handleNav(e, sheet.href, sheet.isExternal)}
            className="group rounded-2xl bg-[#121212] border border-zinc-800/80 hover:border-zinc-700 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-black/70 flex flex-col cursor-pointer"
          >
            {/* Educator Graphic Banner Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950">
              <img
                src={sheet.imageUrl}
                alt={sheet.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  // Fallback if ever needed
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            {/* Content info */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {sheet.title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-zinc-400 mt-2 font-medium">
                  <AlignLeft className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{sheet.problems} Problems</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
