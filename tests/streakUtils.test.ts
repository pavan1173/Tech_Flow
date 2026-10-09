import { describe, it, expect } from 'vitest';
import {
  formatDateYMD,
  getDefaultActivityDates,
  isValidPracticeDate,
  calculateStreakMetrics,
} from '../src/utils/streakUtils';

describe('Streak Calculation & Activity Tracking Unit Tests', () => {
  const mockRefDate = new Date(2026, 9, 8); // Oct 8, 2026

  it('formats dates consistently as YYYY-MM-DD', () => {
    expect(formatDateYMD(new Date(2026, 0, 5))).toBe('2026-01-05');
    expect(formatDateYMD(new Date(2026, 9, 8))).toBe('2026-10-08');
  });

  it('initializes clean empty activity dates for brand new users', () => {
    const baseline = getDefaultActivityDates(mockRefDate);
    expect(baseline).toHaveLength(0);
    expect(baseline).toEqual([]);
  });

  it('validates practice dates and prevents future dates', () => {
    expect(isValidPracticeDate('2026-10-07', mockRefDate)).toBe(true);
    expect(isValidPracticeDate('2026-10-08', mockRefDate)).toBe(true);
    expect(isValidPracticeDate('2026-10-09', mockRefDate)).toBe(false);
    expect(isValidPracticeDate('invalid', mockRefDate)).toBe(false);
  });

  it('calculates current streak when active today', () => {
    const dates = ['2026-10-06', '2026-10-07', '2026-10-08'];
    const metrics = calculateStreakMetrics(dates, mockRefDate);

    expect(metrics.isActiveToday).toBe(true);
    expect(metrics.currentStreak).toBe(3);
    expect(metrics.longestStreak).toBe(3);
    expect(metrics.totalActiveDays).toBe(3);
  });

  it('preserves current streak when active yesterday but not yet today', () => {
    const dates = ['2026-10-05', '2026-10-06', '2026-10-07']; // yesterday was 2026-10-07
    const metrics = calculateStreakMetrics(dates, mockRefDate);

    expect(metrics.isActiveToday).toBe(false);
    expect(metrics.currentStreak).toBe(3); // Streak is still alive today!
    expect(metrics.longestStreak).toBe(3);
  });

  it('resets current streak to 0 when inactive for multiple days', () => {
    const dates = ['2026-10-01', '2026-10-02', '2026-10-03'];
    const metrics = calculateStreakMetrics(dates, mockRefDate);

    expect(metrics.isActiveToday).toBe(false);
    expect(metrics.currentStreak).toBe(0);
    expect(metrics.longestStreak).toBe(3);
  });

  it('identifies longest streak across discontinuous active periods', () => {
    const dates = [
      '2026-08-01', '2026-08-02', '2026-08-03', '2026-08-04', '2026-08-05', // 5-day streak
      '2026-09-10', '2026-09-11', // 2-day streak
      '2026-10-07', '2026-10-08', // 2-day streak (current)
    ];
    const metrics = calculateStreakMetrics(dates, mockRefDate);

    expect(metrics.currentStreak).toBe(2);
    expect(metrics.longestStreak).toBe(5);
    expect(metrics.totalActiveDays).toBe(9);
  });

  it('handles empty or invalid date arrays gracefully', () => {
    const emptyMetrics = calculateStreakMetrics([], mockRefDate);
    expect(emptyMetrics).toEqual({
      currentStreak: 0,
      longestStreak: 0,
      isActiveToday: false,
      totalActiveDays: 0,
    });

    const invalidMetrics = calculateStreakMetrics(['invalid-date', ''], mockRefDate);
    expect(invalidMetrics.currentStreak).toBe(0);
  });
});
