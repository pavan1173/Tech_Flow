import React, { useState } from 'react';
import { companiesList } from '../data/common';
import { CompanyLogo } from '../components/CompanyLogo';
import { Search, AlignLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { AuthGate } from '../components/AuthGate';

interface CompanyWiseDsaPageProps {
  navigate: (to: string) => void;
}

export const CompanyWiseDsaPage: React.FC<CompanyWiseDsaPageProps> = ({ navigate }) => {
  const { isAuthenticated } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCompanies = companiesList.filter((c: any) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (c.description && c.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  const renderCompanyCards = (list: typeof filteredCompanies) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5">
      {list.map((company: any) => {
        return (
          <a
            key={company.name}
            href={company.href}
            onClick={(e) => handleNav(e, company.href)}
            className="group rounded-2xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-[#1b2230] p-4 sm:p-5 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-[#2d384e] hover:bg-zinc-50 dark:hover:bg-[#0f141d] transition-all duration-200 cursor-pointer shadow-xs"
          >
            <div>
              {/* Top: Logo + Name */}
              <div className="flex items-center gap-3 mb-3">
                <CompanyLogo name={company.name} size={28} className="shrink-0" />
                <span className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors truncate">
                  {company.name}
                </span>
              </div>

              {/* Description: 2-line clamp */}
              <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed font-normal mb-4">
                {company.description}
              </p>
            </div>

            {/* Bottom: Questions Count with List Icon */}
            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium pt-2 border-t border-zinc-200 dark:border-[#161c28]">
              <AlignLeft className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
              <span>{company.questionCount} Questions</span>
            </div>
          </a>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-7 max-w-7xl mx-auto transition-colors">
      {/* Header matching screenshot */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          Company Wise DSA Sheet
        </h1>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal">
          Practice real DSA interview questions asked by 43+ top tech companies worldwide
        </p>
      </div>

      {/* Search Input matching screenshot */}
      <div className="relative max-w-xl">
        <Search className="w-4 h-4 text-zinc-400 dark:text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search companies (e.g., Google, Amazon, Flipkart...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-[#0d121c] border border-zinc-200 dark:border-[#1b2333] text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
        />
      </div>

      {/* Company Grid */}
      {filteredCompanies.length === 0 ? (
        <div className="text-center py-12 text-zinc-500 text-sm">
          No companies found matching "{searchQuery}".
        </div>
      ) : !isAuthenticated ? (
        <AuthGate
          totalCount="43+"
          featureName="company-wise DSA sheets"
          title="Sign in to access Company Wise DSA Sheets"
        >
          {renderCompanyCards(filteredCompanies.slice(0, 8))}
        </AuthGate>
      ) : (
        renderCompanyCards(filteredCompanies)
      )}
    </div>
  );
};
