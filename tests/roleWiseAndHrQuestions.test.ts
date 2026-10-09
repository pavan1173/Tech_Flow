import { describe, it, expect } from 'vitest';

describe('RoleWise and HR Questions Progress Tracking Unit Tests', () => {
  it('correctly constructs 1-based HR question IDs matching storage schema', () => {
    const getHrQuestionId = (id: number) => `hr_q_${id}`;
    expect(getHrQuestionId(1)).toBe('hr_q_1');
    expect(getHrQuestionId(42)).toBe('hr_q_42');
  });

  it('correctly constructs 1-based RoleWise question IDs matching storage schema', () => {
    const getRoleWiseQuestionId = (slug: string, indexOrIdx: number) => `role_${slug}_${indexOrIdx}`;
    expect(getRoleWiseQuestionId('frontend-developer', 1)).toBe('role_frontend-developer_1');
    expect(getRoleWiseQuestionId('backend-developer', 5)).toBe('role_backend-developer_5');
  });

  it('filters questions accurately by bookmarked state', () => {
    const questions = [
      { id: 1, title: 'What is CORS?' },
      { id: 2, title: 'Explain Event Loop' },
      { id: 3, title: 'What is prototype in JS?' },
    ];

    const bookmarksMap: Record<string, boolean> = {
      hr_q_1: true,
      hr_q_3: true,
    };

    const bookmarkedQuestions = questions.filter((q) => bookmarksMap[`hr_q_${q.id}`]);
    expect(bookmarkedQuestions).toHaveLength(2);
    expect(bookmarkedQuestions.map((q) => q.id)).toEqual([1, 3]);
  });

  it('calculates solved count using 1-based index consistently', () => {
    const roleQuestions = [
      { question: 'What is React fiber?' },
      { question: 'Explain hydration in SSR' },
      { question: 'What is synthetic event?' },
    ];

    const solvedMap: Record<string, boolean> = {
      'role_frontend_1': true,
      'role_frontend_3': true,
    };

    const solvedCount = roleQuestions.filter((q: any, idx: number) => {
      const qNum = q.index || idx + 1;
      return solvedMap[`role_frontend_${qNum}`];
    }).length;

    expect(solvedCount).toBe(2);
  });
});
