import { useMemo, useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import sectionIdsData from '../data/navigationSectionIds.json';

const sectionIds = sectionIdsData as Record<string, string[]>;

export interface SectionStat {
  solved: number;
  total: number;
  percentage: number;
}

export interface NavigationProgressStats {
  roadmaps: SectionStat;
  dsaSheetsOverall: SectionStat;
  dsaSheets: Record<string, SectionStat>;
  companyWise: SectionStat;
  patterns: SectionStat;
  packageWise: SectionStat;
  sql: SectionStat;
  systemDesign: SectionStat;
  roleWiseOverall: SectionStat;
  roles: Record<string, SectionStat>;
  mostAsked: SectionStat;
  hr: SectionStat;
  dsaPlaylists: SectionStat;
}

export function useNavigationProgress(): NavigationProgressStats {
  const { solvedMap, customDataMap } = useProgress();
  const [roadmapStorageVersion, setRoadmapStorageVersion] = useState(0);

  // Listen to window storage and custom events for roadmap progress
  useEffect(() => {
    const handleStorage = () => {
      setRoadmapStorageVersion((v) => v + 1);
    };
    window.addEventListener('storage', handleStorage);
    window.addEventListener('teachflow_roadmap_updated', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('teachflow_roadmap_updated', handleStorage);
    };
  }, []);

  return useMemo(() => {
    const getStat = (idsKey: string, fallbackTotal = 0): SectionStat => {
      const ids = sectionIds[idsKey] || [];
      const total = ids.length || fallbackTotal;
      if (total === 0) return { solved: 0, total: 0, percentage: 0 };
      let solved = 0;
      for (const id of ids) {
        if (solvedMap[id]) solved++;
      }
      const percentage = Math.round((solved / total) * 100);
      return { solved, total, percentage };
    };

    // 1. DSA Sub-sheets
    const dsaSlugs = [
      'blind-75-dsa-sheet',
      'striver-a2z-dsa-sheet',
      'love-babbar-dsa-sheet',
      'shradha-khapra-dsa-sheet',
      'rohit-negi-dsa-sheet',
      'arsh-goyal-dsa-sheet',
      'fraz-dsa-sheet',
      'neetcode-dsa-sheet',
    ];

    const dsaSheets: Record<string, SectionStat> = {};
    for (const slug of dsaSlugs) {
      dsaSheets[slug] = getStat(slug);
    }
    const dsaSheetsOverall = getStat('dsa-sheets-all', 2400);

    // 2. Individual Major Sheets
    const companyWise = getStat('company-wise-all', 2500);
    const patterns = getStat('patterns', 180);
    const packageWise = getStat('package-wise', 200);
    const sql = getStat('sql-sheet', 110);
    const systemDesign = getStat('system-design-sheet', 32);
    const hr = getStat('hr-questions', 100);
    const mostAsked = getStat('most-asked-questions', 61);

    // 3. Roles
    const roleSlugs = [
      'data-engineer',
      'frontend-developer',
      'backend-developer',
      'full-stack-developer',
      'data-scientist',
      'devops-engineer',
    ];
    const roles: Record<string, SectionStat> = {};
    for (const rSlug of roleSlugs) {
      roles[rSlug] = getStat(`role-${rSlug}`);
    }
    const roleWiseOverall = getStat('role-wise-all', 1500);

    // 4. Developer Roadmaps Progress
    let totalCompletedRoadmapTopics = 0;
    let completedRoadmapsCount = 0;
    const totalRoadmaps = 95;
    const countedRoadmapKeys = new Set<string>();

    // First check customDataMap (Firestore DB synced)
    if (customDataMap) {
      Object.keys(customDataMap).forEach((key) => {
        if (key.startsWith('teachflow_roadmap_completed_')) {
          const arr = customDataMap[key];
          if (Array.isArray(arr) && arr.length > 0) {
            totalCompletedRoadmapTopics += arr.length;
            completedRoadmapsCount++;
            countedRoadmapKeys.add(key);
          }
        }
      });
    }

    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('teachflow_roadmap_completed_') && !countedRoadmapKeys.has(key)) {
          const raw = localStorage.getItem(key);
          if (raw) {
            const arr = JSON.parse(raw);
            if (Array.isArray(arr) && arr.length > 0) {
              totalCompletedRoadmapTopics += arr.length;
              completedRoadmapsCount++;
              countedRoadmapKeys.add(key);
            }
          }
        }
      }
    } catch {
      // Ignore localStorage access restrictions
    }

    // Also check solvedMap for roadmap keys
    if (totalCompletedRoadmapTopics === 0) {
      let rSolved = 0;
      Object.keys(solvedMap).forEach((k) => {
        if (k.startsWith('roadmap_') && solvedMap[k]) rSolved++;
      });
      if (rSolved > 0) totalCompletedRoadmapTopics = rSolved;
    }

    const roadmaps: SectionStat = {
      solved: completedRoadmapsCount,
      total: totalRoadmaps,
      percentage: totalRoadmaps > 0 ? Math.round((completedRoadmapsCount / totalRoadmaps) * 100) : 0,
    };

    // 5. DSA Playlists
    let dsaPlaylistsSolved = 0;
    Object.keys(solvedMap).forEach((k) => {
      if (k.startsWith('lec-') && solvedMap[k]) dsaPlaylistsSolved++;
    });
    const dsaPlaylists: SectionStat = {
      solved: dsaPlaylistsSolved,
      total: 350,
      percentage: Math.round((dsaPlaylistsSolved / 350) * 100),
    };

    return {
      roadmaps,
      dsaSheetsOverall,
      dsaSheets,
      companyWise,
      patterns,
      packageWise,
      sql,
      systemDesign,
      roleWiseOverall,
      roles,
      mostAsked,
      hr,
      dsaPlaylists,
    };
  }, [solvedMap, customDataMap, roadmapStorageVersion]);
}
