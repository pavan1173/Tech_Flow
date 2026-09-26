import React, { useState, useMemo, useRef, useEffect } from 'react';
import { packageWiseData } from '../data/packageWiseData';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import {
  Search,
  ChevronDown,
  Star,
  Check,
  Code2,
  ExternalLink,
  Unlock,
  CheckCircle2,
  Sparkles,
  Layers,
  Lock
} from 'lucide-react';

interface PackageWisePageProps {
  navigate: (to: string) => void;
}

export const PackageWisePage: React.FC<PackageWisePageProps> = ({ navigate }) => {
  const { isSolved, toggleSolved, isBookmarked, toggleBookmark } = useProgress();
  const { isAuthenticated, user, loginWithGoogle, openAuthModal, logout } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedPackage, setSelectedPackage] = useState<string>('All');
  const [onlyBookmarks, setOnlyBookmarks] = useState<boolean>(false);
  const [showFullDesc, setShowFullDesc] = useState<boolean>(false);

  // Dropdown open states
  const [isDiffOpen, setIsDiffOpen] = useState(false);
  const [isPkgOpen, setIsPkgOpen] = useState(false);

  const diffRef = useRef<HTMLDivElement>(null);
  const pkgRef = useRef<HTMLDivElement>(null);

  const handleActionRequiringAuth = (action: () => void) => {
    if (!isAuthenticated) {
      openAuthModal();
      return;
    }
    action();
  };

  const handleUnlockWithGoogle = () => {
    loginWithGoogle('mpavankumar110405@gmail.com', 'Pavan Kumar');
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (diffRef.current && !diffRef.current.contains(event.target as Node)) {
        setIsDiffOpen(false);
      }
      if (pkgRef.current && !pkgRef.current.contains(event.target as Node)) {
        setIsPkgOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const allQuestions = packageWiseData?.questions || [];

  // Normalize package tier display
  const getPackageDisplay = (pkgStr: string) => {
    if (!pkgStr) return '3 – 5 LPA';
    if (pkgStr === '3-5') return '3 – 5 LPA';
    if (pkgStr === '5-10') return '6 – 10 LPA';
    if (pkgStr === '10-20') return '11 – 20 LPA';
    if (pkgStr === '20-40') return '21 – 35 LPA';
    if (pkgStr === '40-60') return '36 – 50 LPA';
    if (pkgStr === '60+' || pkgStr === '50+') return '60+ LPA';
    return pkgStr;
  };

  // Solved count
  const solvedCount = useMemo(() => {
    return allQuestions.filter((q: any) => {
      const probId = `pkg-q-${q.id}-${q.title}`;
      return isSolved(probId);
    }).length;
  }, [allQuestions, isSolved]);

  const totalCount = allQuestions.length || 200;
  const progressPercent = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q: any) => {
      const title = (q.title || '').toLowerCase();
      const topic = (q.topic || '').toLowerCase();
      const pkgDisplay = getPackageDisplay(q.package).toLowerCase();
      const probId = `pkg-q-${q.id}-${q.title}`;

      const matchesSearch =
        !searchQuery ||
        title.includes(searchQuery.toLowerCase()) ||
        topic.includes(searchQuery.toLowerCase());

      const matchesDiff =
        selectedDifficulty === 'All' ||
        (q.difficulty || '').toLowerCase() === selectedDifficulty.toLowerCase();

      const matchesPkg =
        selectedPackage === 'All' ||
        q.package === selectedPackage ||
        pkgDisplay.includes(selectedPackage.toLowerCase());

      const matchesBookmark = !onlyBookmarks || isBookmarked(probId);

      return matchesSearch && matchesDiff && matchesPkg && matchesBookmark;
    });
  }, [allQuestions, searchQuery, selectedDifficulty, selectedPackage, onlyBookmarks, isBookmarked]);

  const packageOptions = [
    { label: 'All Packages', value: 'All' },
    { label: '3 – 5 LPA', value: '3-5' },
    { label: '6 – 10 LPA', value: '5-10' },
    { label: '11 – 20 LPA', value: '10-20' },
    { label: '21 – 35 LPA', value: '20-40' },
    { label: '36 – 50 LPA', value: '40-60' },
    { label: '60+ LPA', value: '60+' },
  ];

  const difficultyOptions = ['All', 'Easy', 'Medium', 'Hard'];

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 p-4 sm:p-6 lg:p-8 font-lexend space-y-6 max-w-7xl mx-auto">
      {/* Header Section matching screenshot */}
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Package Wise DSA Sheet
        </h1>

        <div className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed max-w-4xl font-normal">
          <p className={showFullDesc ? '' : 'line-clamp-2'}>
            Master data structures and algorithms curated specifically by target compensation packages. Practice targeted problem sets ranging from 3 LPA mass recruiter essentials to 60+ LPA FAANG and top-tier quant interview patterns.
          </p>
          <button
            onClick={() => setShowFullDesc(!showFullDesc)}
            className="text-blue-400 hover:text-blue-300 font-semibold text-xs mt-1 inline-block cursor-pointer"
          >
            {showFullDesc ? 'Read Less' : 'Read More'}
          </button>
        </div>

        {/* Metadata subline */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
          <span className="font-bold text-zinc-200">200 Problems</span>
          <span>•</span>
          <span>6 Package Tiers (3 LPA – 60+ LPA)</span>
        </div>
      </div>

      {/* Progress Widget & Filter Bar */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pt-1">
        {/* Left: Overall Progress Widget */}
        <div className="inline-flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-[#0e121a] border border-[#1e2433] shadow-xs">
          <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
            <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-zinc-800"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-blue-500 transition-all duration-500 ease-out"
                strokeDasharray={`${progressPercent}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute font-bold text-[10px] text-white">
              {progressPercent}%
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-zinc-400">
              Overall Progress
            </span>
            <span className="text-xs font-bold text-white tracking-wide">
              {solvedCount}/{totalCount}
            </span>
          </div>
        </div>

        {/* Right: Controls (All, Difficulty, Package, Bookmarked) */}
        <div className="flex items-center gap-2 flex-wrap bg-[#0c1017] p-1.5 rounded-2xl border border-[#1b2230]">
          {/* All Button */}
          <button
            onClick={() => {
              setSelectedDifficulty('All');
              setSelectedPackage('All');
              setOnlyBookmarks(false);
              setSearchQuery('');
            }}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedDifficulty === 'All' && selectedPackage === 'All' && !onlyBookmarks
                ? 'bg-zinc-800 text-white shadow-xs'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            All
          </button>

          {/* Difficulty Dropdown */}
          <div className="relative" ref={diffRef}>
            <button
              onClick={() => {
                setIsDiffOpen(!isDiffOpen);
                setIsPkgOpen(false);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer border ${
                selectedDifficulty !== 'All'
                  ? 'border-blue-500/50 text-blue-400 bg-blue-500/10'
                  : 'border-transparent text-zinc-300 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <span>{selectedDifficulty === 'All' ? 'Difficulty' : selectedDifficulty}</span>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
            </button>

            {isDiffOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-xl bg-[#0e121a] border border-[#1e2433] shadow-xl py-1.5 z-30 divide-y divide-zinc-800/40">
                {difficultyOptions.map((diff) => (
                  <button
                    key={diff}
                    onClick={() => {
                      setSelectedDifficulty(diff);
                      setIsDiffOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer flex items-center justify-between ${
                      selectedDifficulty === diff
                        ? 'text-blue-400 bg-blue-500/10'
                        : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
                    }`}
                  >
                    <span>{diff}</span>
                    {selectedDifficulty === diff && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Package Dropdown */}
          <div className="relative" ref={pkgRef}>
            <button
              onClick={() => {
                setIsPkgOpen(!isPkgOpen);
                setIsDiffOpen(false);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer border ${
                selectedPackage !== 'All'
                  ? 'border-purple-500/50 text-purple-400 bg-purple-500/10'
                  : 'border-transparent text-zinc-300 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <span>
                {selectedPackage === 'All'
                  ? 'Package'
                  : packageOptions.find((p) => p.value === selectedPackage)?.label || selectedPackage}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
            </button>

            {isPkgOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-xl bg-[#0e121a] border border-[#1e2433] shadow-xl py-1.5 z-30 divide-y divide-zinc-800/40">
                {packageOptions.map((pkg) => (
                  <button
                    key={pkg.value}
                    onClick={() => {
                      setSelectedPackage(pkg.value);
                      setIsPkgOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer flex items-center justify-between ${
                      selectedPackage === pkg.value
                        ? 'text-purple-400 bg-purple-500/10'
                        : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
                    }`}
                  >
                    <span>{pkg.label}</span>
                    {selectedPackage === pkg.value && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="w-[1px] h-4 bg-zinc-700 mx-1" />

          {/* Bookmarked Filter */}
          <button
            onClick={() => setOnlyBookmarks(!onlyBookmarks)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
              onlyBookmarks
                ? 'text-amber-400 bg-amber-500/10'
                : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <Star
              className={`w-3.5 h-3.5 ${
                onlyBookmarks ? 'fill-amber-400 text-amber-400' : 'text-zinc-400'
              }`}
            />
            <span>Bookmarked</span>
          </button>
        </div>
      </div>

      {/* Main Table Container matching screenshot */}
      <div className="relative rounded-2xl border border-[#1b2230] bg-[#0c1017] overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1b2230] bg-[#0a0e16] text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                <th className="py-3.5 pl-5 pr-3 w-14">STATUS</th>
                <th className="py-3.5 px-4 min-w-[200px]">PROBLEM</th>
                <th className="py-3.5 px-4 text-center w-28">TOPIC</th>
                <th className="py-3.5 px-4 text-center w-28">PRACTICE</th>
                <th className="py-3.5 px-4 text-center w-32">PACKAGE</th>
                <th className="py-3.5 px-4 text-center w-28">DIFFICULTY</th>
                <th className="py-3.5 pr-5 pl-3 text-center w-16">SAVE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#171f2d] text-xs">
              {filteredQuestions.map((q: any, idx: number) => {
                const probId = `pkg-q-${q.id}-${q.title}`;
                const solved = isSolved(probId);
                const bookmarked = isBookmarked(probId);
                const isItemLocked = !isAuthenticated && idx >= 3;

                const diff = q.difficulty || 'Easy';
                const diffBadgeStyle =
                  diff.toLowerCase() === 'easy'
                    ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-800/40'
                    : diff.toLowerCase() === 'hard'
                    ? 'text-rose-400 bg-rose-950/40 border border-rose-800/40'
                    : 'text-amber-400 bg-amber-950/40 border border-amber-800/40';

                const pkgBadge = getPackageDisplay(q.package);

                return (
                  <tr
                    key={q.id || idx}
                    onClick={() => {
                      if (isItemLocked) {
                        openAuthModal();
                      }
                    }}
                    className={`transition-colors group ${
                      isItemLocked
                        ? 'opacity-20 blur-[2px] select-none cursor-pointer'
                        : 'hover:bg-[#111724]'
                    }`}
                  >
                    {/* Status Checkbox */}
                    <td className="py-3.5 pl-5 pr-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleActionRequiringAuth(() => toggleSolved(probId));
                        }}
                        className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all cursor-pointer ${
                          solved
                            ? 'bg-blue-600 border-blue-600 text-white'
                            : 'border-zinc-600 bg-transparent hover:border-zinc-400'
                        }`}
                        title={solved ? 'Mark as Unsolved' : 'Mark as Solved'}
                      >
                        {solved && <Check className="w-3 h-3 stroke-[3]" />}
                      </button>
                    </td>

                    {/* Problem Index & Title */}
                    <td className="py-3.5 px-4 font-semibold text-zinc-100">
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-500 font-mono text-xs w-6 shrink-0">
                          {q.id}.
                        </span>
                        <a
                          href={q.leetcode || q.gfg || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            if (isItemLocked) {
                              e.preventDefault();
                              openAuthModal();
                            }
                          }}
                          className={`hover:text-blue-400 transition-colors ${
                            solved ? 'line-through text-zinc-500' : 'text-zinc-100'
                          }`}
                        >
                          {q.title}
                        </a>
                      </div>
                    </td>

                    {/* Topic Badge */}
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#131a26] text-zinc-300 border border-zinc-700/60">
                        {q.topic || 'DSA'}
                      </span>
                    </td>

                    {/* Practice Icons (LeetCode & GfG) */}
                    <td className="py-3.5 px-4 text-center">
                      <div className="inline-flex items-center justify-center gap-2">
                        {/* LeetCode link icon */}
                        {q.leetcode && (
                          <a
                            href={q.leetcode}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              if (isItemLocked) {
                                e.preventDefault();
                                openAuthModal();
                              }
                            }}
                            className="p-1 rounded-md text-amber-500 hover:text-amber-400 hover:bg-zinc-800 transition-colors"
                            title="Practice on LeetCode"
                          >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.607 2.645 2.645 0 0 1 .564-.472l4.8-5.143 5.405-5.786c.54-.54.54-1.414.004-1.955a1.378 1.378 0 0 0-.965-.438z" />
                              <path d="M18.887 11.233H9.414c-.76 0-1.378.618-1.378 1.378 0 .76.618 1.378 1.378 1.378h9.473c.76 0 1.378-.618 1.378-1.378 0-.76-.618-1.378-1.378-1.378z" />
                            </svg>
                          </a>
                        )}

                        {/* GeeksforGeeks green circle link */}
                        {q.gfg ? (
                          <a
                            href={q.gfg}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              if (isItemLocked) {
                                e.preventDefault();
                                openAuthModal();
                              }
                            }}
                            className="w-3.5 h-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 transition-colors inline-block"
                            title="Practice on GeeksforGeeks"
                          />
                        ) : (
                          <span className="w-3.5 h-3.5 rounded-full bg-zinc-700 inline-block opacity-40" />
                        )}
                      </div>
                    </td>

                    {/* Package Tier Badge */}
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-[#241738] text-[#c084fc] border border-[#4c1d95]/50">
                        {pkgBadge}
                      </span>
                    </td>

                    {/* Difficulty Badge */}
                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold ${diffBadgeStyle}`}>
                        {diff}
                      </span>
                    </td>

                    {/* Bookmark Save Star */}
                    <td className="py-3.5 pr-5 pl-3 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleActionRequiringAuth(() => toggleBookmark(probId));
                        }}
                        className="p-1 rounded-md transition-colors hover:bg-zinc-800 cursor-pointer"
                        title={bookmarked ? 'Remove Bookmark' : 'Bookmark Problem'}
                      >
                        <Star
                          className={`w-3.5 h-3.5 ${
                            bookmarked
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-zinc-500 hover:text-zinc-300'
                          }`}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Exact Google Sign-in Unlock Overlay matching screenshot */}
        {!isAuthenticated && (
          <div className="absolute inset-x-0 bottom-0 top-[170px] bg-gradient-to-t from-[#07090e] via-[#07090e]/95 to-transparent backdrop-blur-xs flex items-center justify-center p-6 z-20">
            <div className="max-w-lg w-full text-center space-y-5 py-4">
              <div className="space-y-1.5">
                <h3 className="font-extrabold text-base sm:text-lg text-white tracking-tight leading-snug">
                  Sign up to access this sheet
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-normal max-w-md mx-auto">
                  Sign in with Google to unlock all 200 package-wise DSA interview questions and track your progress.
                </p>
              </div>

              {/* Exact Google Sign-in Pill Button matching screenshot */}
              <div className="flex items-center justify-center">
                <button
                  onClick={handleUnlockWithGoogle}
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 font-semibold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  {/* Google Multicolor Logo */}
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Unlocked banner if logged in */}
      {isAuthenticated && (
        <div className="flex items-center justify-between text-xs text-zinc-400 p-3 rounded-xl bg-[#0c1017] border border-[#1b2230]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>
              Signed in as <span className="font-semibold text-white">{user?.name || user?.email}</span> — all 200 questions unlocked!
            </span>
          </div>
          <button
            onClick={logout}
            className="text-zinc-500 hover:text-zinc-300 underline cursor-pointer"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};
