import React, { useState, useMemo } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { CodingPlatformsCard } from '../components/CodingPlatformsCard';
import {
  Flame,
  ChevronLeft,
  ChevronRight,
  User,
  Github,
  Linkedin,
  Globe,
  Mail,
  Edit3,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Bookmark,
  Zap,
  ArrowRight,
  ExternalLink,
  Code2,
  Layers,
  Award,
  Activity,
  Star,
  Database
} from 'lucide-react';

interface PrepDashboardProps {
  navigate: (to: string) => void;
}

export const PreparationDashboardPage: React.FC<PrepDashboardProps> = ({ navigate }) => {
  const { solvedMap, streakDays, bookmarksMap, activityDates } = useProgress();
  const { user, isAuthenticated, openAuthModal, openProfileModal } = useAuth();

  const [timeRange, setTimeRange] = useState<'6m' | '3m' | '30d' | '7d'>('30d');
  const [calendarMonth, setCalendarMonth] = useState<number>(9); // 0-indexed: 9 = October
  const [calendarYear, setCalendarYear] = useState<number>(2026);
  const [hoveredDataPoint, setHoveredDataPoint] = useState<{ date: string; value: number; x: number; y: number } | null>(null);
  const [mapMode, setMapMode] = useState<'all' | 'platforms' | 'domains'>('all');

  const leetcodeStats = user?.codingProfiles?.leetcode;
  const codechefStats = user?.codingProfiles?.codechef;
  const githubStats = user?.codingProfiles?.github;

  // Dynamic category calculations based on actual solved questions in Firestore + coding profiles
  const categoryCounts = useMemo(() => {
    let sql = 0;
    let dsa = 0;
    let systemDesign = 0;
    let coreSubjects = 0;
    let interviewQs = 0;
    let hr = 0;

    Object.entries(solvedMap).forEach(([key, isDone]) => {
      if (!isDone) return;
      const k = key.toLowerCase();
      if (k.startsWith('sql-') || k.includes('sql')) {
        sql++;
      } else if (k.startsWith('pattern-') || k.startsWith('dsa-') || k.includes('blind75') || k.includes('striver') || k.includes('neetcode')) {
        dsa++;
      } else if (k.startsWith('sys-') || k.includes('system-design') || k.includes('hld') || k.includes('lld')) {
        systemDesign++;
      } else if (k.startsWith('lec-') || k.includes('dbms') || k.includes('os-') || k.includes('oops') || k.includes('cn')) {
        coreSubjects++;
      } else if (k.startsWith('role_') || k.startsWith('role-wise') || k.includes('company-dsa') || k.includes('most-asked')) {
        interviewQs++;
      } else if (k.startsWith('hr-') || k.includes('behavioral')) {
        hr++;
      } else {
        dsa++;
      }
    });

    const leetcodeTotal = leetcodeStats?.totalSolved || 0;
    const codechefTotal = codechefStats?.fullySolved || 0;
    const githubRepos = githubStats?.publicRepos || 0;

    return {
      sql,
      dsa,
      systemDesign,
      coreSubjects,
      interviewQs,
      hr,
      leetcode: leetcodeTotal,
      codechef: codechefTotal,
      github: githubRepos,
    };
  }, [solvedMap, leetcodeStats, codechefStats, githubStats]);

  const totalHackPathSolved = Object.values(solvedMap).filter(Boolean).length;
  const totalCombinedSolved =
    totalHackPathSolved +
    (leetcodeStats?.totalSolved || 0) +
    (codechefStats?.fullySolved || 0);

  const totalBookmarksCount = Object.values(bookmarksMap).filter(Boolean).length;

  // Activity Timeline Data Generator
  const activityData = useMemo(() => {
    const totalToday = totalHackPathSolved;
    if (timeRange === '7d') {
      const dates = ['Sep 26', 'Sep 27', 'Sep 28', 'Sep 29', 'Sep 30', 'Oct 1', 'Oct 2'];
      const values = [0, 0, 0, 0, 0, 1, Math.max(totalToday, 1)];
      return dates.map((d, i) => ({ date: d, count: values[i] }));
    }

    if (timeRange === '3m') {
      const dates = ['Jul 15', 'Jul 30', 'Aug 15', 'Aug 30', 'Sep 15', 'Sep 29', 'Oct 2'];
      const values = [0, 0, 0, 0, 0, 1, Math.max(totalToday, 1)];
      return dates.map((d, i) => ({ date: d, count: values[i] }));
    }

    if (timeRange === '6m') {
      const dates = ['May 1', 'Jun 1', 'Jul 1', 'Aug 1', 'Sep 1', 'Oct 1', 'Oct 2'];
      const values = [0, 0, 0, 0, 0, 1, Math.max(totalToday, 1)];
      return dates.map((d, i) => ({ date: d, count: values[i] }));
    }

    // Default: 30 Days
    const dates = [
      'Sep 5',
      'Sep 8',
      'Sep 11',
      'Sep 14',
      'Sep 17',
      'Sep 20',
      'Sep 23',
      'Sep 26',
      'Sep 29',
      'Oct 2'
    ];
    const values = [0, 0, 0, 0, 0, 0, 0, 0, 0.4, Math.max(totalToday, 1)];
    return dates.map((d, i) => ({ date: d, count: values[i] }));
  }, [timeRange, totalHackPathSolved]);

  // SVG Area Chart Coordinates
  const chartWidth = 720;
  const chartHeight = 220;
  const paddingX = 30;
  const paddingY = 20;

  const chartPoints = useMemo(() => {
    const maxVal = Math.max(...activityData.map((d) => d.count), 2.5);
    const stepX = (chartWidth - paddingX * 2) / Math.max(activityData.length - 1, 1);

    return activityData.map((d, i) => {
      const x = paddingX + i * stepX;
      const normY = d.count / maxVal;
      const y = chartHeight - paddingY - normY * (chartHeight - paddingY * 2);
      return { x, y, date: d.date, value: d.count };
    });
  }, [activityData, chartWidth, chartHeight, paddingX, paddingY]);

  // Smooth Bezier Curve Path
  const { pathD, areaD } = useMemo(() => {
    if (chartPoints.length === 0) return { pathD: '', areaD: '' };

    let d = `M ${chartPoints[0].x} ${chartPoints[0].y}`;
    for (let i = 0; i < chartPoints.length - 1; i++) {
      const p0 = chartPoints[i];
      const p1 = chartPoints[i + 1];
      const cx = (p0.x + p1.x) / 2;
      d += ` C ${cx} ${p0.y}, ${cx} ${p1.y}, ${p1.x} ${p1.y}`;
    }

    const last = chartPoints[chartPoints.length - 1];
    const first = chartPoints[0];
    const aD = `${d} L ${last.x} ${chartHeight - paddingY} L ${first.x} ${chartHeight - paddingY} Z`;

    return { pathD: d, areaD: aD };
  }, [chartPoints, chartHeight, paddingY]);

  // Calendar calculations for October 2026
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const calendarDays = useMemo(() => {
    const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
    const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();

    const blanks = Array.from({ length: firstDay }, () => null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return [...blanks, ...days];
  }, [calendarYear, calendarMonth]);

  const handlePrevMonth = () => {
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear((y) => y - 1);
    } else {
      setCalendarMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear((y) => y + 1);
    } else {
      setCalendarMonth((m) => m + 1);
    }
  };

  // Skill Analysis Radar Chart Calculations (8 Vertices including LeetCode, CodeChef, and GitHub)
  const radarCategories = useMemo(() => {
    if (mapMode === 'platforms') {
      return [
        { label: 'LeetCode', key: 'leetcode', angle: -90, color: '#f59e0b' },
        { label: 'CodeChef', key: 'codechef', angle: 0, color: '#b45309' },
        { label: 'GitHub Repos', key: 'github', angle: 90, color: '#3b82f6' },
        { label: 'HackPath Sheets', key: 'dsa', angle: 180, color: '#10b981' },
      ];
    }

    if (mapMode === 'domains') {
      return [
        { label: 'DSA Patterns', key: 'dsa', angle: -90 },
        { label: 'System Design', key: 'systemDesign', angle: -30 },
        { label: 'Core Subjects', key: 'coreSubjects', angle: 30 },
        { label: 'HR / Behavioral', key: 'hr', angle: 90 },
        { label: 'SQL & DB', key: 'sql', angle: 150 },
        { label: 'Interview Qs', key: 'interviewQs', angle: 210 },
      ];
    }

    // All-In-One Unified Map (8 Vertices)
    return [
      { label: 'DSA Patterns', key: 'dsa', angle: -90 },
      { label: 'LeetCode', key: 'leetcode', angle: -45 },
      { label: 'CodeChef', key: 'codechef', angle: 0 },
      { label: 'Core Subjects', key: 'coreSubjects', angle: 45 },
      { label: 'HR / Behavior', key: 'hr', angle: 90 },
      { label: 'SQL & Database', key: 'sql', angle: 135 },
      { label: 'System Design', key: 'systemDesign', angle: 180 },
      { label: 'GitHub Work', key: 'github', angle: 225 },
    ];
  }, [mapMode]);

  const radarRadius = 110;
  const radarCenter = { x: 175, y: 155 };

  const getPolygonPoint = (angleDeg: number, radius: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: radarCenter.x + radius * Math.cos(rad),
      y: radarCenter.y + radius * Math.sin(rad),
    };
  };

  const gridRings = [0.25, 0.5, 0.75, 1.0];

  const userRadarPoints = useMemo(() => {
    return radarCategories.map((cat) => {
      const val = (categoryCounts as any)[cat.key] || 0;
      let fraction = 0.12;

      if (cat.key === 'leetcode') {
        fraction = Math.min(Math.max(val / 300, 0.15), 0.95);
      } else if (cat.key === 'codechef') {
        fraction = Math.min(Math.max(val / 150, 0.15), 0.95);
      } else if (cat.key === 'github') {
        fraction = Math.min(Math.max(val / 30, 0.15), 0.95);
      } else {
        fraction = Math.min(Math.max(val / 15, 0.12), 0.95);
      }

      const r = radarRadius * fraction;
      return getPolygonPoint(cat.angle, r);
    });
  }, [categoryCounts, radarCategories]);

  const radarPolygonD = useMemo(() => {
    return userRadarPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
  }, [userRadarPoints]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 p-4 sm:p-6 lg:p-10 font-lexend space-y-8 max-w-7xl mx-auto transition-colors">
      
      {/* ── PERSONALIZED USER BANNER / DB STATUS ── */}
      {isAuthenticated && user ? (
        <div className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 via-white to-blue-50/20 dark:from-[#0c1017] dark:via-[#090d13] dark:to-[#070b10] p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {/* Avatar circle */}
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 p-1 shadow-xl ring-4 ring-white dark:ring-[#0c1017] overflow-hidden flex items-center justify-center">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                      className="w-full h-full rounded-full object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-blue-600 flex items-center justify-center text-3xl font-extrabold text-white">
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 right-1 w-5 h-5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#0c1017] flex items-center justify-center" title="Active Account">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* User Metadata */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
                    {user.name}
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30 font-mono text-xs font-bold">
                    {user.role || 'Developer'}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{user.handle || `@${user.email?.split('@')[0]}`}</span>
                  <span>•</span>
                  <span>{user.email}</span>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-300 max-w-xl pt-0.5 line-clamp-2">
                  {user.bio || 'Tracking your individual preparation progress across roadmaps, DSA sheets, and interview topics.'}
                </p>
              </div>
            </div>

            {/* User Actions & Social Shortcuts */}
            <div className="flex flex-wrap items-center gap-2.5 self-stretch md:self-auto justify-start md:justify-end">
              {user.githubUrl && (
                <a
                  href={user.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {user.leetcodeUrl && (
                <a
                  href={user.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 transition-colors font-bold text-xs font-mono"
                  title="LeetCode Profile"
                >
                  LC
                </a>
              )}
              {user.codechefUrl && (
                <a
                  href={user.codechefUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-amber-700/10 hover:bg-amber-700/20 text-amber-600 transition-colors font-bold text-xs font-mono"
                  title="CodeChef Profile"
                >
                  CC
                </a>
              )}
              {user.linkedinUrl && (
                <a
                  href={user.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-blue-600 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}

              <button
                onClick={() => navigate('/preparation/profile')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Profile &amp; Handles</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl font-bold">Sign In to Save Your Personal Dashboard &amp; Coding Stats</h2>
            <p className="text-xs text-blue-100">
              Link your LeetCode, CodeChef, and GitHub handles to store all your metrics directly in Firebase Firestore.
            </p>
          </div>
          <button
            onClick={openAuthModal}
            className="px-5 py-2.5 rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 font-bold text-xs shadow-md transition-all cursor-pointer shrink-0"
          >
            Sign In / Add Handles
          </button>
        </div>
      )}

      {/* ── COMPETITIVE CODING PLATFORMS COMPONENT (LeetCode + CodeChef + GitHub) ── */}
      <CodingPlatformsCard navigate={navigate} />

      {/* ── TOP STATS ROW ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] shadow-xs">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-mono uppercase mb-2">
            <span>Combined Solved</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            {totalCombinedSolved}
          </div>
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1 block">
            HackPath ({totalHackPathSolved}) + LC ({leetcodeStats?.totalSolved || 0}) + CC ({codechefStats?.fullySolved || 0})
          </span>
        </div>

        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] shadow-xs">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-mono uppercase mb-2">
            <span>LeetCode Solved</span>
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
          <div className="text-3xl font-extrabold text-amber-500">
            {leetcodeStats?.totalSolved || 0}
          </div>
          <span className="text-[11px] text-zinc-400 font-medium mt-1 block font-mono">
            {leetcodeStats?.easySolved || 0}E • {leetcodeStats?.mediumSolved || 0}M • {leetcodeStats?.hardSolved || 0}H
          </span>
        </div>

        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] shadow-xs">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-mono uppercase mb-2">
            <span>CodeChef Rating</span>
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          </div>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            {codechefStats?.rating ? (
              <>
                {codechefStats.rating} <span className="text-base text-amber-500">{codechefStats.stars}</span>
              </>
            ) : (
              <span className="text-xl text-zinc-400 font-normal">Not Linked</span>
            )}
          </div>
          <span className="text-[11px] text-zinc-400 font-medium mt-1 block font-mono">
            {codechefStats?.fullySolved ? `${codechefStats.fullySolved} fully solved` : 'Link handle in settings'}
          </span>
        </div>

        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] shadow-xs">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-mono uppercase mb-2">
            <span>GitHub Repos &amp; Stars</span>
            <Zap className="w-4 h-4 text-blue-500 fill-blue-500" />
          </div>
          <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
            {githubStats?.publicRepos || 0} <span className="text-base text-zinc-400 font-normal">repos</span>
          </div>
          <span className="text-[11px] text-blue-500 font-medium mt-1 block font-mono">
            ★ {githubStats?.totalStars || 0} stars • {githubStats?.followers || 0} followers
          </span>
        </div>
      </div>

      {/* ── ACTIVITY CHART & STREAK CALENDAR ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Activity Chart Card (Col 8) */}
        <div className="lg:col-span-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                Activity &amp; Consistency
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {timeRange === '7d'
                  ? 'Total of last 7 days'
                  : timeRange === '3m'
                  ? 'Total of last 3 months'
                  : timeRange === '6m'
                  ? 'Total of last 6 months'
                  : 'Total of last 30 days'}
              </p>
            </div>

            {/* Timeframe Filter Pills */}
            <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 p-1 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-semibold self-start sm:self-auto">
              {[
                { id: '6m', label: '6 Months' },
                { id: '3m', label: '3 Months' },
                { id: '30d', label: '30 Days' },
                { id: '7d', label: '7 Days' }
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setTimeRange(pill.id as any)}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    timeRange === pill.id
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs font-bold'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Line & Area Chart Container */}
          <div className="relative w-full overflow-x-auto pt-2">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="w-full h-48 sm:h-56 select-none overflow-visible"
            >
              <defs>
                <linearGradient id="activityGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              <line
                x1={paddingX}
                y1={paddingY}
                x2={chartWidth - paddingX}
                y2={paddingY}
                className="stroke-zinc-200 dark:stroke-zinc-800/80"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
              <line
                x1={paddingX}
                y1={chartHeight / 2}
                x2={chartWidth - paddingX}
                y2={chartHeight / 2}
                className="stroke-zinc-200 dark:stroke-zinc-800/80"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
              <line
                x1={paddingX}
                y1={chartHeight - paddingY}
                x2={chartWidth - paddingX}
                y2={chartHeight - paddingY}
                className="stroke-zinc-300 dark:stroke-zinc-800"
                strokeWidth="1.5"
              />

              {areaD && <path d={areaD} fill="url(#activityGradient)" />}

              {pathD && (
                <path
                  d={pathD}
                  fill="none"
                  className="stroke-blue-600 dark:stroke-blue-400"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {chartPoints.map((pt, idx) => (
                <g key={idx}>
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r="4"
                    className="fill-blue-600 dark:fill-blue-400 stroke-2 stroke-white dark:stroke-zinc-900 transition-all cursor-pointer hover:r-6"
                    onMouseEnter={() => setHoveredDataPoint(pt)}
                    onMouseLeave={() => setHoveredDataPoint(null)}
                  />
                </g>
              ))}

              {chartPoints.map((pt, idx) => (
                <text
                  key={`label-${idx}`}
                  x={pt.x}
                  y={chartHeight - 4}
                  textAnchor="middle"
                  className="text-[10px] font-mono fill-zinc-400 dark:fill-zinc-500 font-semibold"
                >
                  {pt.date}
                </text>
              ))}
            </svg>

            {hoveredDataPoint && (
              <div
                className="absolute pointer-events-none -translate-x-1/2 -translate-y-full px-2.5 py-1 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-mono font-bold shadow-lg"
                style={{
                  left: `${(hoveredDataPoint.x / chartWidth) * 100}%`,
                  top: `${(hoveredDataPoint.y / chartHeight) * 100 - 8}%`,
                }}
              >
                {hoveredDataPoint.value} solved
              </div>
            )}
          </div>
        </div>

        {/* Right: Streak & Monthly Calendar Card (Col 4) */}
        <div className="lg:col-span-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-1.5 pb-3">
            <div className="flex items-center justify-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#f97316]">
              <Flame className="w-3.5 h-3.5 fill-[#f97316] text-[#f97316]" />
              <span>STREAK</span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                onClick={handlePrevMonth}
                className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white">
                {monthNames[calendarMonth]} {calendarYear}
              </span>
              <button
                onClick={handleNextMonth}
                className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 text-center text-xs font-semibold text-zinc-400 dark:text-zinc-500 pb-2">
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
          </div>

          <div className="grid grid-cols-7 gap-1 sm:gap-1.5 text-center text-xs">
            {calendarDays.map((day, idx) => {
              if (!day) {
                return <div key={`empty-${idx}`} className="h-8 sm:h-9" />;
              }

              const isToday = day === 2 && calendarMonth === 9 && calendarYear === 2026;

              return (
                <div
                  key={`day-${day}`}
                  className={`relative h-8 sm:h-9 flex items-center justify-center rounded-xl text-xs transition-colors ${
                    isToday
                      ? 'border-2 border-[#f97316] bg-orange-50/80 dark:bg-orange-950/30 text-[#f97316] font-bold shadow-xs'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                  }`}
                >
                  <span>{day}</span>
                  {isToday && (
                    <div className="absolute -top-1.5 -right-1 text-[#f97316]">
                      <Flame className="w-3 h-3 fill-[#f97316]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── SKILL & PLATFORMS RADAR MAP & BREAKDOWN ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Radar Map (Col 6) */}
        <div className="lg:col-span-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <span>Problem Solving Skill Map</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-bold">
                  Multi-Platform
                </span>
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Radar distribution mapping LeetCode, CodeChef, GitHub, and HackPath modules
              </p>
            </div>

            {/* Map Mode Filter */}
            <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 p-1 rounded-xl border border-zinc-200 dark:border-zinc-800 text-[11px] font-semibold">
              <button
                onClick={() => setMapMode('all')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  mapMode === 'all'
                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs font-bold'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                All Map
              </button>
              <button
                onClick={() => setMapMode('platforms')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  mapMode === 'platforms'
                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs font-bold'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                Platforms
              </button>
              <button
                onClick={() => setMapMode('domains')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  mapMode === 'domains'
                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs font-bold'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                Domains
              </button>
            </div>
          </div>

          <div className="relative w-full flex items-center justify-center py-4">
            <svg viewBox="0 0 350 310" className="w-full max-w-[360px] h-72 select-none">
              {/* Concentric Hexagon/Octagon Grid Rings */}
              {gridRings.map((scale, ringIdx) => {
                const ringPoints = radarCategories
                  .map((cat) => {
                    const pt = getPolygonPoint(cat.angle, radarRadius * scale);
                    return `${pt.x},${pt.y}`;
                  })
                  .join(' ');

                return (
                  <polygon
                    key={`ring-${ringIdx}`}
                    points={ringPoints}
                    fill="none"
                    className="stroke-zinc-200 dark:stroke-zinc-800"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Axis Spoke Lines */}
              {radarCategories.map((cat, idx) => {
                const endPt = getPolygonPoint(cat.angle, radarRadius);
                return (
                  <line
                    key={`spoke-${idx}`}
                    x1={radarCenter.x}
                    y1={radarCenter.y}
                    x2={endPt.x}
                    y2={endPt.y}
                    className="stroke-zinc-200 dark:stroke-zinc-800"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Filled Polygon */}
              <path
                d={radarPolygonD}
                className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400"
                strokeWidth="2.5"
              />

              {/* Data points */}
              {userRadarPoints.map((pt, idx) => (
                <circle
                  key={`pt-${idx}`}
                  cx={pt.x}
                  cy={pt.y}
                  r="4"
                  className="fill-blue-600 dark:fill-blue-400 stroke-2 stroke-white dark:stroke-zinc-900"
                />
              ))}

              {/* Category Labels */}
              {radarCategories.map((cat, idx) => {
                const labelRadius = radarRadius + 24;
                const pt = getPolygonPoint(cat.angle, labelRadius);
                return (
                  <text
                    key={`label-${idx}`}
                    x={pt.x}
                    y={pt.y + 4}
                    textAnchor="middle"
                    className="text-[10px] font-mono font-bold fill-zinc-700 dark:fill-zinc-300"
                  >
                    {cat.label}
                  </text>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Detailed Category & Platform Progress Bars (Col 6) */}
        <div className="lg:col-span-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c1017] p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
              Platform &amp; Sheet Breakdown
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Problems done per coding platform and curated sheet
            </p>
          </div>

          <div className="space-y-3.5">
            {[
              { label: 'DSA Sheets & Core Topics', count: categoryCounts.dsa, total: 450, link: '/preparation/dsa-sheets', badge: 'Sheets' },
              { label: '20 Essential DSA Patterns', count: categoryCounts.dsa, total: 180, link: '/preparation/20-essential-dsa-patterns', badge: 'Patterns' },
              { label: 'SQL & Database Queries', count: categoryCounts.sql, total: 110, link: '/preparation/sql-sheet', badge: 'SQL' },
              { label: 'System Design (HLD & LLD)', count: categoryCounts.systemDesign, total: 60, link: '/preparation/system-design-sheet', badge: 'Architecture' },
              { label: 'Company-Wise DSA Sets', count: categoryCounts.interviewQs, total: 200, link: '/preparation/company-wise-dsa-sheet', badge: 'Companies' },
              { label: 'Role-Wise Interview Questions', count: categoryCounts.interviewQs, total: 250, link: '/preparation/role-wise', badge: 'Roles' },
            ].map((cat, idx) => {
              const pct = cat.total > 0 ? Math.min(100, Math.round((cat.count / cat.total) * 100)) : 0;
              return (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 font-bold">
                        {cat.badge}
                      </span>
                      <a
                        href={cat.link}
                        onClick={(e) => { e.preventDefault(); navigate(cat.link); }}
                        className="font-semibold text-zinc-800 dark:text-zinc-200 hover:text-blue-500 transition-colors cursor-pointer"
                      >
                        {cat.label}
                      </a>
                    </div>
                    <span className="font-mono text-[11px] text-zinc-500 font-bold">
                      {cat.count} / {cat.total} ({pct}%)
                    </span>
                  </div>
                  <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all duration-300"
                      style={{ width: `${Math.max(pct, cat.count > 0 ? 4 : 0)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
            <span className="text-xs text-zinc-500 font-mono flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Progress Synchronized</span>
            </span>
            <button
              onClick={() => navigate('/preparation/20-essential-dsa-patterns')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
            >
              <span>Practice DSA Patterns</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
