import { describe, it, expect } from 'vitest';
import {
  cleanUsername,
  computeCodeChefStars,
  getCodeChefStarClass,
  fetchCodeChefStats,
} from '../src/services/codingProfilesService';

describe('codingProfilesService Unit Tests', () => {
  describe('cleanUsername', () => {
    it('strips leading and trailing spaces', () => {
      expect(cleanUsername('  tourist  ')).toBe('tourist');
    });

    it('removes @ prefix', () => {
      expect(cleanUsername('@pavan_coder')).toBe('pavan_coder');
    });

    it('extracts username from CodeChef full profile URL', () => {
      expect(cleanUsername('https://www.codechef.com/users/tourist')).toBe('tourist');
      expect(cleanUsername('http://codechef.com/users/coder123/')).toBe('coder123');
    });

    it('extracts username from LeetCode full profile URL', () => {
      expect(cleanUsername('https://leetcode.com/u/neal_wu/')).toBe('neal_wu');
      expect(cleanUsername('https://leetcode.com/tourist')).toBe('tourist');
    });

    it('extracts username from GitHub full profile URL', () => {
      expect(cleanUsername('https://github.com/torvalds')).toBe('torvalds');
      expect(cleanUsername('https://github.com/pavan/')).toBe('pavan');
    });

    it('returns empty string for empty or null inputs', () => {
      expect(cleanUsername('')).toBe('');
    });
  });

  describe('computeCodeChefStars', () => {
    it('accurately maps ratings to official CodeChef stars', () => {
      expect(computeCodeChefStars(2600)).toBe('7★');
      expect(computeCodeChefStars(2500)).toBe('7★');
      expect(computeCodeChefStars(2350)).toBe('6★');
      expect(computeCodeChefStars(2200)).toBe('6★');
      expect(computeCodeChefStars(2050)).toBe('5★');
      expect(computeCodeChefStars(2000)).toBe('5★');
      expect(computeCodeChefStars(1850)).toBe('4★');
      expect(computeCodeChefStars(1800)).toBe('4★');
      expect(computeCodeChefStars(1650)).toBe('3★');
      expect(computeCodeChefStars(1600)).toBe('3★');
      expect(computeCodeChefStars(1450)).toBe('2★');
      expect(computeCodeChefStars(1400)).toBe('2★');
      expect(computeCodeChefStars(1200)).toBe('1★');
      expect(computeCodeChefStars(100)).toBe('1★');
      expect(computeCodeChefStars(0)).toBe('Unrated');
    });
  });

  describe('getCodeChefStarClass', () => {
    it('returns correct color classes for each star tier', () => {
      expect(getCodeChefStarClass('7★')).toContain('text-red-500');
      expect(getCodeChefStarClass('6★')).toContain('text-red-500');
      expect(getCodeChefStarClass('5★')).toContain('text-yellow-400');
      expect(getCodeChefStarClass('4★')).toContain('text-amber-500');
      expect(getCodeChefStarClass('3★')).toContain('text-amber-500');
      expect(getCodeChefStarClass('2★')).toContain('text-zinc-400');
      expect(getCodeChefStarClass('1★')).toContain('text-amber-700');
      expect(getCodeChefStarClass()).toContain('text-amber-500');
    });
  });

  describe('fetchCodeChefStats', () => {
    it('throws error when input username is invalid or empty', async () => {
      await expect(fetchCodeChefStats('')).rejects.toThrow('Please enter a valid CodeChef username or URL.');
      await expect(fetchCodeChefStats('   ')).rejects.toThrow('Please enter a valid CodeChef username or URL.');
    });

    it('returns deterministic stats with stars and rating for any valid username', async () => {
      const stats = await fetchCodeChefStats('testcoder');
      expect(stats.username).toBe('testcoder');
      expect(stats.rating).toBeGreaterThan(0);
      expect(stats.stars).toMatch(/^[1-7]★$/);
      expect(typeof stats.fullySolved).toBe('number');
      expect(typeof stats.partiallySolved).toBe('number');
    });
  });
});
