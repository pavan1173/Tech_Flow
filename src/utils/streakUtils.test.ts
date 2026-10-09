import { describe, expect, it } from 'vitest';
import {
  calculateStreakMetrics,
  formatDateYMD,
  getDefaultActivityDates,
  isValidPracticeDate,
} from './streakUtils';

describe('formatDateYMD', () => {
  it('pads single-digit months and days', () => {
    expect(formatDateYMD(new Date(2026, 0, 5))).toBe('2026-01-05');
  });

  it('formats leap-day dates consistently', () => {
    expect(formatDateYMD(new Date(2024, 1, 29))).toBe('2024-02-29');
  });
});

describe('getDefaultActivityDates', () => {
  it('does not fabricate activity for a new account', () => {
    expect(getDefaultActivityDates(new Date(2026, 9, 9))).toEqual([]);
  });
});

describe('isValidPracticeDate', () => {
  const today = new Date(2026, 9, 9, 12);

  it.each([
    ['valid today', '2026-10-09', true],
    ['valid past date', '2026-10-08', true],
    ['future date', '2026-10-10', false],
    ['invalid month', '2026-13-01', false],
    ['invalid day', '2026-02-30', false],
    ['non-padded date', '2026-2-9', false],
    ['empty value', '', false],
    ['junk value', 'tomorrow', false],
  ])('validates %s', (_label, date, expected) => {
    expect(isValidPracticeDate(date, today)).toBe(expected);
  });
});

describe('calculateStreakMetrics', () => {
  const today = new Date(2026, 9, 9, 12);

  it('returns an honest zero baseline for no activity', () => {
    expect(calculateStreakMetrics([], today)).toEqual({
      currentStreak: 0,
      longestStreak: 0,
      isActiveToday: false,
      totalActiveDays: 0,
    });
  });

  it('deduplicates valid activity dates', () => {
    expect(calculateStreakMetrics(['2026-10-09', '2026-10-09'], today).totalActiveDays).toBe(1);
  });

  it('counts a streak active today', () => {
    const metrics = calculateStreakMetrics(['2026-10-07', '2026-10-08', '2026-10-09'], today);
    expect(metrics.currentStreak).toBe(3);
    expect(metrics.longestStreak).toBe(3);
    expect(metrics.isActiveToday).toBe(true);
  });

  it('keeps yesterday streak alive for today', () => {
    const metrics = calculateStreakMetrics(['2026-10-08', '2026-10-09'], new Date(2026, 9, 10, 12));
    expect(metrics.currentStreak).toBe(2);
    expect(metrics.isActiveToday).toBe(false);
  });

  it('breaks the current streak after a gap but preserves longest history', () => {
    const metrics = calculateStreakMetrics(
      ['2026-10-01', '2026-10-02', '2026-10-05'],
      today
    );
    expect(metrics.currentStreak).toBe(0);
    expect(metrics.longestStreak).toBe(2);
  });

  it('ignores impossible calendar dates and future dates', () => {
    const metrics = calculateStreakMetrics(['2026-02-30', '2026-10-10', 'invalid'], today);
    expect(metrics.totalActiveDays).toBe(0);
    expect(metrics.currentStreak).toBe(0);
  });
});
