/**
 * Fetch public coding-profile statistics without inventing fallback values.
 */

export interface LeetCodeStats {
  username: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking?: number;
  acceptanceRate?: number;
  lastSynced?: string;
}

export interface CodeChefStats {
  username: string;
  rating: number;
  stars: string;
  globalRank?: number;
  countryRank?: number;
  fullySolved: number;
  partiallySolved: number;
  lastSynced?: string;
}

export interface GitHubStats {
  username: string;
  publicRepos: number;
  totalStars: number;
  followers: number;
  lastSynced?: string;
}

export interface CodingProfiles {
  leetcode?: LeetCodeStats;
  codechef?: CodeChefStats;
  github?: GitHubStats;
}

export const cleanUsername = (input: string): string => {
  if (!input) return '';
  let cleaned = input.trim();
  cleaned = cleaned.replace(/https?:\/\/(www\.)?(leetcode\.com|codechef\.com|github\.com)\/(u\/|users\/)?/i, '');
  cleaned = cleaned.replace(/\/+$/, '');
  cleaned = cleaned.replace(/^@/, '');
  return cleaned;
};

const fetchJson = async (url: string): Promise<any> => {
  const response = await fetch(url, { signal: AbortSignal.timeout(8000) });
  if (!response.ok) {
    throw new Error(`Statistics provider returned HTTP ${response.status}.`);
  }
  return response.json();
};

const asNonNegativeNumber = (value: unknown, field: string): number => {
  const number = Number(value);
  if (value === null || value === undefined || value === '' || !Number.isFinite(number) || number < 0) {
    throw new Error(`Statistics provider returned invalid ${field} data.`);
  }
  return number;
};

export async function fetchLeetCodeStats(rawInput: string): Promise<LeetCodeStats> {
  const username = cleanUsername(rawInput);
  if (!username) throw new Error('Please enter a valid LeetCode username or URL.');

  const endpoints = [
    `https://alfa-leetcode-api.onrender.com/userProfile/${encodeURIComponent(username)}`,
    `https://leetcode-stats-api.herokuapp.com/${encodeURIComponent(username)}`,
  ];
  let lastError: unknown;

  for (const endpoint of endpoints) {
    try {
      const data = await fetchJson(endpoint);
      if (!data || data.totalSolved === undefined) {
        throw new Error('Statistics provider returned an unexpected LeetCode response.');
      }
      return {
        username,
        totalSolved: asNonNegativeNumber(data.totalSolved, 'total solved'),
        easySolved: asNonNegativeNumber(data.easySolved, 'easy solved'),
        mediumSolved: asNonNegativeNumber(data.mediumSolved, 'medium solved'),
        hardSolved: asNonNegativeNumber(data.hardSolved, 'hard solved'),
        ranking: data.ranking == null ? undefined : asNonNegativeNumber(data.ranking, 'ranking'),
        acceptanceRate: data.acceptanceRate == null ? undefined : asNonNegativeNumber(data.acceptanceRate, 'acceptance rate'),
        lastSynced: new Date().toISOString(),
      };
    } catch (error) {
      lastError = error;
    }
  }

  throw new Error(`Unable to fetch live LeetCode statistics for "${username}". Please verify the username and try again.`, {
    cause: lastError,
  });
}

export const computeCodeChefStars = (rating: number): string => {
  if (rating >= 2500) return '7★';
  if (rating >= 2200) return '6★';
  if (rating >= 2000) return '5★';
  if (rating >= 1800) return '4★';
  if (rating >= 1600) return '3★';
  if (rating >= 1400) return '2★';
  if (rating > 0) return '1★';
  return 'Unrated';
};

export const getCodeChefStarClass = (stars?: string): string => {
  if (!stars) return 'text-amber-500 fill-amber-500';
  if (stars.includes('7') || stars.includes('6')) return 'text-red-500 fill-red-500';
  if (stars.includes('5')) return 'text-yellow-400 fill-yellow-400';
  if (stars.includes('4') || stars.includes('3')) return 'text-amber-500 fill-amber-500';
  if (stars.includes('2')) return 'text-zinc-400 fill-zinc-400';
  return 'text-amber-700 fill-amber-700';
};

export async function fetchCodeChefStats(rawInput: string): Promise<CodeChefStats> {
  const username = cleanUsername(rawInput);
  if (!username) throw new Error('Please enter a valid CodeChef username or URL.');

  try {
    const data = await fetchJson(`https://codechef-api.vercel.app/handle/${encodeURIComponent(username)}`);
    if (!data || (data.currentRating == null && data.rating == null)) {
      throw new Error('Statistics provider returned an unexpected CodeChef response.');
    }

    const rating = asNonNegativeNumber(data.currentRating ?? data.rating, 'rating');
    const solvedValue = data.fullySolved ?? data.totalProblemsSolved;
    return {
      username,
      rating,
      stars: typeof data.stars === 'string' && data.stars ? data.stars : computeCodeChefStars(rating),
      globalRank: data.globalRank == null ? undefined : asNonNegativeNumber(data.globalRank, 'global rank'),
      countryRank: data.countryRank == null ? undefined : asNonNegativeNumber(data.countryRank, 'country rank'),
      fullySolved: solvedValue == null ? 0 : asNonNegativeNumber(solvedValue, 'fully solved'),
      partiallySolved: data.partiallySolved == null ? 0 : asNonNegativeNumber(data.partiallySolved, 'partially solved'),
      lastSynced: new Date().toISOString(),
    };
  } catch (error) {
    throw new Error(`Unable to fetch live CodeChef statistics for "${username}". Please verify the handle and try again.`, {
      cause: error,
    });
  }
}

export async function fetchGitHubStats(rawInput: string): Promise<GitHubStats> {
  const username = cleanUsername(rawInput);
  if (!username) throw new Error('Please enter a valid GitHub username or URL.');

  try {
    const encodedUsername = encodeURIComponent(username);
    const [userData, reposData] = await Promise.all([
      fetchJson(`https://api.github.com/users/${encodedUsername}`),
      fetchJson(`https://api.github.com/users/${encodedUsername}/repos?per_page=100&sort=updated`),
    ]);

    if (!Array.isArray(reposData)) {
      throw new Error('GitHub returned an unexpected repository response.');
    }

    const totalStars = reposData.reduce((total: number, repo: { stargazers_count?: number }) => {
      return total + asNonNegativeNumber(repo.stargazers_count ?? 0, 'repository stars');
    }, 0);

    return {
      username,
      publicRepos: asNonNegativeNumber(userData.public_repos, 'public repositories'),
      totalStars,
      followers: asNonNegativeNumber(userData.followers, 'followers'),
      lastSynced: new Date().toISOString(),
    };
  } catch (error) {
    throw new Error(`Unable to fetch live GitHub statistics for "${username}". Please verify the username or retry later.`, {
      cause: error,
    });
  }
}
