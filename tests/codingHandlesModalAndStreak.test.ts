import { describe, it, expect, beforeEach } from 'vitest';

describe('Coding Handles Onboarding & Streak Verification Unit Tests', () => {
  let mockStorage: Record<string, string>;

  beforeEach(() => {
    mockStorage = {};
  });

  it('determines whether first-time coding handles prompt is needed', () => {
    const shouldPromptHandles = (
      user: {
        leetcodeUrl?: string;
        codechefUrl?: string;
        githubUrl?: string;
        codingProfiles?: {
          leetcode?: { username?: string };
          codechef?: { username?: string };
          github?: { username?: string };
        };
      } | null,
      uid: string
    ): boolean => {
      if (!user) return false;
      const skippedKey = `hp_handles_skipped_${uid}`;
      if (mockStorage[skippedKey]) return false;

      const hasAny = Boolean(
        (user.leetcodeUrl && user.leetcodeUrl.trim()) ||
        (user.codechefUrl && user.codechefUrl.trim()) ||
        (user.githubUrl && user.githubUrl.trim()) ||
        (user.codingProfiles?.leetcode?.username && user.codingProfiles.leetcode.username.trim()) ||
        (user.codingProfiles?.codechef?.username && user.codingProfiles.codechef.username.trim()) ||
        (user.codingProfiles?.github?.username && user.codingProfiles.github.username.trim())
      );
      return !hasAny;
    };

    // User without any handles and has not skipped -> prompt modal
    const newUser = {
      leetcodeUrl: '',
      codechefUrl: '',
      githubUrl: '',
    };
    expect(shouldPromptHandles(newUser, 'user_123')).toBe(true);

    // User skips -> store flag and do not prompt again
    mockStorage['hp_handles_skipped_user_123'] = 'true';
    expect(shouldPromptHandles(newUser, 'user_123')).toBe(false);

    // User with existing handle -> do not prompt modal
    const linkedUser = {
      leetcodeUrl: 'tourist',
    };
    expect(shouldPromptHandles(linkedUser, 'user_456')).toBe(false);
  });

  it('validates calendar date clicking logic and prevents future date spoofing', () => {
    const today = new Date(2026, 9, 8); // Oct 8, 2026
    today.setHours(0, 0, 0, 0);

    const isFutureDate = (year: number, month: number, day: number): boolean => {
      const d = new Date(year, month, day);
      d.setHours(0, 0, 0, 0);
      return d.getTime() > today.getTime();
    };

    const isCurrentToday = (year: number, month: number, day: number): boolean => {
      const d = new Date(year, month, day);
      d.setHours(0, 0, 0, 0);
      return d.getTime() === today.getTime();
    };

    // Past date: Oct 7, 2026
    expect(isFutureDate(2026, 9, 7)).toBe(false);
    expect(isCurrentToday(2026, 9, 7)).toBe(false);

    // Today: Oct 8, 2026
    expect(isFutureDate(2026, 9, 8)).toBe(false);
    expect(isCurrentToday(2026, 9, 8)).toBe(true);

    // Future date: Oct 9, 2026
    expect(isFutureDate(2026, 9, 9)).toBe(true);
    expect(isCurrentToday(2026, 9, 9)).toBe(false);
  });
});
