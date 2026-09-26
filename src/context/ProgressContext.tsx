import React, { createContext, useContext, useEffect, useState } from 'react';

interface ProgressContextType {
  solvedMap: Record<string, boolean>;
  toggleSolved: (id: string) => void;
  isSolved: (id: string) => boolean;
  bookmarksMap: Record<string, boolean>;
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  notesMap: Record<string, string>;
  saveNote: (id: string, note: string) => void;
  getNote: (id: string) => string;
  totalSolved: number;
  streakDays: number;
  activityDates: string[];
}

const ProgressContext = createContext<ProgressContextType>({
  solvedMap: {},
  toggleSolved: () => {},
  isSolved: () => false,
  bookmarksMap: {},
  toggleBookmark: () => {},
  isBookmarked: () => false,
  notesMap: {},
  saveNote: () => {},
  getNote: () => '',
  totalSolved: 0,
  streakDays: 3,
  activityDates: [],
});

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [solvedMap, setSolvedMap] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('teachflow_solved_problems');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [bookmarksMap, setBookmarksMap] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('teachflow_bookmarks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [notesMap, setNotesMap] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('teachflow_notes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [activityDates, setActivityDates] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('teachflow_activity_dates');
      return saved ? JSON.parse(saved) : ['2026-09-24', '2026-09-25', '2026-09-26'];
    } catch {
      return ['2026-09-24', '2026-09-25', '2026-09-26'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('teachflow_solved_problems', JSON.stringify(solvedMap));
    } catch (e) {
      console.error(e);
    }
  }, [solvedMap]);

  useEffect(() => {
    try {
      localStorage.setItem('teachflow_bookmarks', JSON.stringify(bookmarksMap));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarksMap]);

  useEffect(() => {
    try {
      localStorage.setItem('teachflow_notes', JSON.stringify(notesMap));
    } catch (e) {
      console.error(e);
    }
  }, [notesMap]);

  useEffect(() => {
    try {
      localStorage.setItem('teachflow_activity_dates', JSON.stringify(activityDates));
    } catch (e) {
      console.error(e);
    }
  }, [activityDates]);

  const toggleSolved = (id: string) => {
    setSolvedMap(prev => {
      const next = { ...prev, [id]: !prev[id] };
      const today = new Date().toISOString().split('T')[0];
      if (next[id] && !activityDates.includes(today)) {
        setActivityDates(dates => [...dates, today]);
      }
      return next;
    });
  };

  const isSolved = (id: string) => !!solvedMap[id];

  const toggleBookmark = (id: string) => {
    setBookmarksMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const isBookmarked = (id: string) => !!bookmarksMap[id];

  const saveNote = (id: string, note: string) => {
    setNotesMap(prev => ({ ...prev, [id]: note }));
  };

  const getNote = (id: string) => notesMap[id] || '';

  const totalSolved = Object.values(solvedMap).filter(Boolean).length;
  const streakDays = Math.max(1, activityDates.length);

  return (
    <ProgressContext.Provider
      value={{
        solvedMap,
        toggleSolved,
        isSolved,
        bookmarksMap,
        toggleBookmark,
        isBookmarked,
        notesMap,
        saveNote,
        getNote,
        totalSolved,
        streakDays,
        activityDates,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
