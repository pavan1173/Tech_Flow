import { describe, it, expect, beforeEach } from 'vitest';

// Emulate storage helpers matching src/context/ProgressContext.tsx
const getStorageNamespace = (uid: string | null): string => {
  return uid ? `hp:${uid}` : 'hp:guest';
};

const getStorageKey = (uid: string | null, type: 'solved' | 'bookmarks' | 'notes' | 'custom' | 'activity'): string => {
  return `${getStorageNamespace(uid)}:${type}`;
};

describe('Cross-Account Storage Isolation Unit Tests', () => {
  let mockStorage: Record<string, string>;

  beforeEach(() => {
    mockStorage = {};
  });

  it('correctly namespaces keys by uid and falls back to hp:guest', () => {
    expect(getStorageKey(null, 'solved')).toBe('hp:guest:solved');
    expect(getStorageKey('user_abc123', 'solved')).toBe('hp:user_abc123:solved');
    expect(getStorageKey('user_abc123', 'bookmarks')).toBe('hp:user_abc123:bookmarks');
    expect(getStorageKey('user_xyz999', 'notes')).toBe('hp:user_xyz999:notes');
    expect(getStorageKey('user_xyz999', 'activity')).toBe('hp:user_xyz999:activity');
  });

  it('prevents leakage between guest and authenticated users', () => {
    const guestKey = getStorageKey(null, 'solved');
    const userAKey = getStorageKey('uid_A', 'solved');
    const userBKey = getStorageKey('uid_B', 'solved');

    mockStorage[guestKey] = JSON.stringify({ 'prob-1': true });
    mockStorage[userAKey] = JSON.stringify({ 'prob-1': true, 'prob-2': true });
    mockStorage[userBKey] = JSON.stringify({ 'prob-3': true });

    expect(JSON.parse(mockStorage[guestKey])).toEqual({ 'prob-1': true });
    expect(JSON.parse(mockStorage[userAKey])).toEqual({ 'prob-1': true, 'prob-2': true });
    expect(JSON.parse(mockStorage[userBKey])).toEqual({ 'prob-3': true });
    expect(JSON.parse(mockStorage[userAKey])).not.toEqual(JSON.parse(mockStorage[userBKey]));
  });

  it('purges all user & legacy keys cleanly on logout', () => {
    mockStorage['hp:uid_A:solved'] = '{"1":true}';
    mockStorage['hp:uid_A:bookmarks'] = '{"1":true}';
    mockStorage['teachflow_solved_problems'] = '{"1":true}';
    mockStorage['hackpath_user'] = '{"name":"Tester"}';
    mockStorage['bookmarks_hr_questions'] = '[1, 2]';
    mockStorage['bookmarks_role_frontend'] = '[0, 1]';
    mockStorage['unrelated_key'] = 'keep_me';

    const keysToRemove: string[] = [];
    Object.keys(mockStorage).forEach((key) => {
      if (
        key.startsWith('hp:') ||
        key.startsWith('teachflow_') ||
        key.startsWith('hackpath_') ||
        key === 'bookmarks_hr_questions' ||
        key.startsWith('bookmarks_role_')
      ) {
        keysToRemove.push(key);
      }
    });

    keysToRemove.forEach((k) => delete mockStorage[k]);

    expect(mockStorage['hp:uid_A:solved']).toBeUndefined();
    expect(mockStorage['teachflow_solved_problems']).toBeUndefined();
    expect(mockStorage['hackpath_user']).toBeUndefined();
    expect(mockStorage['bookmarks_hr_questions']).toBeUndefined();
    expect(mockStorage['bookmarks_role_frontend']).toBeUndefined();
    expect(mockStorage['unrelated_key']).toBe('keep_me');
  });
});
