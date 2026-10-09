import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  cleanUsername,
  computeCodeChefStars,
  fetchCodeChefStats,
  fetchGitHubStats,
  fetchLeetCodeStats,
} from './codingProfilesService';

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('cleanUsername', () => {
  it.each([
    ['plain username', 'pavan1173', 'pavan1173'],
    ['profile URL', 'https://github.com/pavan1173/', 'pavan1173'],
    ['leading at-sign', '@pavan1173', 'pavan1173'],
    ['surrounding whitespace', '  pavan1173  ', 'pavan1173'],
    ['empty value', '', ''],
  ])('cleans %s', (_label, input, expected) => {
    expect(cleanUsername(input)).toBe(expected);
  });
});

describe('computeCodeChefStars', () => {
  it.each([
    [2500, '7★'],
    [2200, '6★'],
    [2000, '5★'],
    [1800, '4★'],
    [1600, '3★'],
    [1400, '2★'],
    [1, '1★'],
    [0, 'Unrated'],
  ])('maps rating %s to stars', (rating, stars) => {
    expect(computeCodeChefStars(rating)).toBe(stars);
  });
});

describe('coding profile provider error handling', () => {
  it('rejects empty usernames without making a network request', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    await expect(fetchLeetCodeStats(' ')).rejects.toThrow(/valid LeetCode username/i);
    await expect(fetchCodeChefStats('')).rejects.toThrow(/valid CodeChef username/i);
    await expect(fetchGitHubStats('')).rejects.toThrow(/valid GitHub username/i);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('does not produce fake values when providers fail', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('down', { status: 503 })));
    await expect(fetchCodeChefStats('candidate')).rejects.toThrow(/Unable to fetch live CodeChef/i);
    await expect(fetchGitHubStats('candidate')).rejects.toThrow(/Unable to fetch live GitHub/i);
    await expect(fetchLeetCodeStats('candidate')).rejects.toThrow(/Unable to fetch live LeetCode/i);
  });

  it('rejects malformed provider payloads', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(JSON.stringify({ currentRating: 'NaN' }), { status: 200 })));
    await expect(fetchCodeChefStats('candidate')).rejects.toThrow(/Unable to fetch live CodeChef/i);
  });

  it('encodes profile usernames in provider URLs', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({
      currentRating: 0,
      fullySolved: 0,
      partiallySolved: 0,
    }), { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);
    await fetchCodeChefStats('person+tag');
    expect(fetchMock.mock.calls[0][0]).toContain('person%2Btag');
  });
});
