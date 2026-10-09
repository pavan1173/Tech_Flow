/**
 * Utility functions for coding streak calculation and activity tracking
 */

export const formatDateYMD = (d: Date): string => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getDefaultActivityDates = (refDate = new Date()): string[] => {
  // Brand new users start with an honest 0-day baseline until they log or practice
  return [];
};

/**
 * Validates whether a practice date string is valid and not in the future
 */
export const isValidPracticeDate = (dateStr: string, refDate = new Date()): boolean => {
  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  const [y, m, d] = dateStr.split('-').map(Number);
  const target = new Date(y, m - 1, d);

  // Date constructors normalize invalid dates (for example, Feb 30 -> Mar 2).
  // Round-trip the components so impossible calendar dates are rejected.
  if (
    target.getFullYear() !== y ||
    target.getMonth() !== m - 1 ||
    target.getDate() !== d
  ) {
    return false;
  }

  const today = new Date(refDate.getFullYear(), refDate.getMonth(), refDate.getDate());
  // Date must not be in the future.
  return target.getTime() <= today.getTime();
};

export interface StreakMetrics {
  currentStreak: number;
  longestStreak: number;
  isActiveToday: boolean;
  totalActiveDays: number;
}

export const calculateStreakMetrics = (
  activityDates: string[],
  refDate = new Date()
): StreakMetrics => {
  if (!activityDates || activityDates.length === 0) {
    return { currentStreak: 0, longestStreak: 0, isActiveToday: false, totalActiveDays: 0 };
  }

  // Deduplicate and filter valid YYYY-MM-DD dates, sorted ascending
  const validDates = Array.from(new Set(activityDates))
    .filter((date) => isValidPracticeDate(date, refDate))
    .sort();

  if (validDates.length === 0) {
    return { currentStreak: 0, longestStreak: 0, isActiveToday: false, totalActiveDays: 0 };
  }

  const dateSet = new Set(validDates);
  const todayStr = formatDateYMD(refDate);

  const yesterday = new Date(refDate);
  yesterday.setDate(refDate.getDate() - 1);
  const yesterdayStr = formatDateYMD(yesterday);

  const isActiveToday = dateSet.has(todayStr);

  // Current Streak Calculation:
  // If active today: count consecutive days backwards starting from today
  // If not active today, but active yesterday: count consecutive days backwards from yesterday (streak is alive today!)
  // Otherwise: 0
  let currentStreak = 0;
  if (isActiveToday) {
    let curr = new Date(refDate);
    while (dateSet.has(formatDateYMD(curr))) {
      currentStreak++;
      curr.setDate(curr.getDate() - 1);
    }
  } else if (dateSet.has(yesterdayStr)) {
    let curr = new Date(yesterday);
    while (dateSet.has(formatDateYMD(curr))) {
      currentStreak++;
      curr.setDate(curr.getDate() - 1);
    }
  }

  // Longest consecutive streak in history
  let longestStreak = 0;
  let running = 0;
  let prevDate: Date | null = null;

  for (const dateStr of validDates) {
    const [y, m, d] = dateStr.split('-').map(Number);
    const curr = new Date(y, m - 1, d);

    if (!prevDate) {
      running = 1;
    } else {
      const diffMs = curr.getTime() - prevDate.getTime();
      const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        running++;
      } else if (diffDays > 1) {
        running = 1;
      }
    }
    if (running > longestStreak) {
      longestStreak = running;
    }
    prevDate = curr;
  }

  return {
    currentStreak,
    longestStreak: Math.max(longestStreak, currentStreak),
    isActiveToday,
    totalActiveDays: validDates.length,
  };
};
