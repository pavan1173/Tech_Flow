import React, { createContext, useContext, useEffect, useState } from 'react';
import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

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
  customDataMap: Record<string, any>;
  setCustomData: (key: string, value: any) => void;
  getCustomData: (key: string, defaultValue?: any) => any;
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
  customDataMap: {},
  setCustomData: () => {},
  getCustomData: () => null,
  totalSolved: 0,
  streakDays: 3,
  activityDates: [],
});

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUid, setCurrentUid] = useState<string | null>(null);

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

  const [customDataMap, setCustomDataMap] = useState<Record<string, any>>(() => {
    try {
      const saved = localStorage.getItem('teachflow_custom_data');
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

  // Track Firebase Auth user
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (fbUser) => {
      setCurrentUid(fbUser ? fbUser.uid : null);
    });
    return () => unsub();
  }, []);

  // Real-time Firestore sync & migration of past data when authenticated
  useEffect(() => {
    if (!currentUid) return;

    const progressDocRef = doc(db, 'progress', currentUid);
    const userDocRef = doc(db, 'users', currentUid);

    // Initial safe migration & reconciliation of past data
    const syncAndReconcilePastData = async () => {
      try {
        const snap = await getDoc(progressDocRef);

        // Retrieve any past data currently in localStorage
        let localSolved: Record<string, boolean> = {};
        let localBookmarks: Record<string, boolean> = {};
        let localNotes: Record<string, string> = {};
        let localCustom: Record<string, any> = {};
        let localDates: string[] = [];

        try {
          const s = localStorage.getItem('teachflow_solved_problems');
          if (s) localSolved = JSON.parse(s);
          const b = localStorage.getItem('teachflow_bookmarks');
          if (b) localBookmarks = JSON.parse(b);
          const n = localStorage.getItem('teachflow_notes');
          if (n) localNotes = JSON.parse(n);
          const c = localStorage.getItem('teachflow_custom_data');
          if (c) localCustom = JSON.parse(c);
          const a = localStorage.getItem('teachflow_activity_dates');
          if (a) localDates = JSON.parse(a);
        } catch (e) {
          console.warn('Past data localStorage read notice:', e);
        }

        if (snap.exists()) {
          const dbData = snap.data();
          // Merge past local data with remote data (combining all solved problems)
          const mergedSolved = { ...(dbData.solvedMap || {}), ...localSolved };
          const mergedBookmarks = { ...(dbData.bookmarksMap || {}), ...localBookmarks };
          const mergedNotes = { ...(dbData.notesMap || {}), ...localNotes };
          const mergedCustom = { ...(dbData.customDataMap || {}), ...localCustom };
          const mergedDates = Array.from(
            new Set([...(dbData.activityDates || []), ...(localDates || [])])
          );

          const solvedCount = Object.values(mergedSolved).filter(Boolean).length;
          const bookmarksCount = Object.values(mergedBookmarks).filter(Boolean).length;

          setSolvedMap(mergedSolved);
          setBookmarksMap(mergedBookmarks);
          setNotesMap(mergedNotes);
          setCustomDataMap(mergedCustom);
          setActivityDates(mergedDates);

          // Write safely back to Firestore progress record
          await setDoc(progressDocRef, {
            uid: currentUid,
            solvedMap: mergedSolved,
            totalSolved: solvedCount,
            bookmarksMap: mergedBookmarks,
            notesMap: mergedNotes,
            customDataMap: mergedCustom,
            activityDates: mergedDates,
            streakDays: Math.max(1, mergedDates.length),
            lastSyncedAt: new Date().toISOString(),
            lastActiveAt: new Date().toISOString(),
          }, { merge: true });

          // Also record total questions solved into the users document in DB
          await setDoc(userDocRef, {
            totalSolved: solvedCount,
            totalBookmarks: bookmarksCount,
            lastActiveAt: new Date().toISOString(),
          }, { merge: true });
        } else {
          // Document does not exist yet: save all past data into DB!
          const solvedCount = Object.values(localSolved).filter(Boolean).length;
          const bookmarksCount = Object.values(localBookmarks).filter(Boolean).length;

          await setDoc(progressDocRef, {
            uid: currentUid,
            solvedMap: localSolved,
            totalSolved: solvedCount,
            bookmarksMap: localBookmarks,
            notesMap: localNotes,
            customDataMap: localCustom,
            activityDates: localDates,
            streakDays: Math.max(1, localDates.length),
            lastSyncedAt: new Date().toISOString(),
            lastActiveAt: new Date().toISOString(),
          }, { merge: true });

          await setDoc(userDocRef, {
            totalSolved: solvedCount,
            totalBookmarks: bookmarksCount,
            lastActiveAt: new Date().toISOString(),
          }, { merge: true });
        }
      } catch (err) {
        console.warn('Reconcile past data notice:', err);
      }
    };

    syncAndReconcilePastData();

    const unsubSnapshot = onSnapshot(progressDocRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        if (data.solvedMap) setSolvedMap(data.solvedMap);
        if (data.bookmarksMap) setBookmarksMap(data.bookmarksMap);
        if (data.notesMap) setNotesMap(data.notesMap);
        if (data.customDataMap) setCustomDataMap(data.customDataMap);
        if (data.activityDates) setActivityDates(data.activityDates);
      }
    }, (err) => {
      console.warn('Firestore progress sync warning:', err);
    });

    return () => unsubSnapshot();
  }, [currentUid]);

  // Sync to local storage
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
      localStorage.setItem('teachflow_custom_data', JSON.stringify(customDataMap));
    } catch (e) {
      console.error(e);
    }
  }, [customDataMap]);

  useEffect(() => {
    try {
      localStorage.setItem('teachflow_activity_dates', JSON.stringify(activityDates));
    } catch (e) {
      console.error(e);
    }
  }, [activityDates]);

  // Helper to persist all data to Firestore
  const syncToFirestore = async (
    newSolved = solvedMap,
    newBookmarks = bookmarksMap,
    newNotes = notesMap,
    newCustomData = customDataMap,
    newDates = activityDates
  ) => {
    if (!currentUid) return;
    try {
      const solvedCount = Object.values(newSolved).filter(Boolean).length;
      const bookmarksCount = Object.values(newBookmarks).filter(Boolean).length;
      const now = new Date().toISOString();

      const progressDocRef = doc(db, 'progress', currentUid);
      const userDocRef = doc(db, 'users', currentUid);

      await Promise.all([
        setDoc(progressDocRef, {
          uid: currentUid,
          solvedMap: newSolved,
          totalSolved: solvedCount,
          bookmarksMap: newBookmarks,
          notesMap: newNotes,
          customDataMap: newCustomData,
          activityDates: newDates,
          streakDays: Math.max(1, newDates.length),
          lastActiveAt: now,
          lastSyncedAt: now,
        }, { merge: true }),
        setDoc(userDocRef, {
          totalSolved: solvedCount,
          totalBookmarks: bookmarksCount,
          lastActiveAt: now,
        }, { merge: true }),
      ]);
    } catch (err) {
      console.warn('Could not sync progress to Firestore:', err);
    }
  };

  const toggleSolved = (id: string) => {
    setSolvedMap(prev => {
      const next = { ...prev, [id]: !prev[id] };
      const today = new Date().toISOString().split('T')[0];
      let newDates = activityDates;
      if (next[id] && !activityDates.includes(today)) {
        newDates = [...activityDates, today];
        setActivityDates(newDates);
      }
      syncToFirestore(next, bookmarksMap, notesMap, customDataMap, newDates);
      return next;
    });
  };

  const isSolved = (id: string) => !!solvedMap[id];

  const toggleBookmark = (id: string) => {
    setBookmarksMap(prev => {
      const next = { ...prev, [id]: !prev[id] };
      syncToFirestore(solvedMap, next, notesMap, customDataMap, activityDates);
      return next;
    });
  };

  const isBookmarked = (id: string) => !!bookmarksMap[id];

  const saveNote = (id: string, note: string) => {
    setNotesMap(prev => {
      const next = { ...prev, [id]: note };
      syncToFirestore(solvedMap, bookmarksMap, next, customDataMap, activityDates);
      return next;
    });
  };

  const getNote = (id: string) => notesMap[id] || '';

  const setCustomData = (key: string, value: any) => {
    setCustomDataMap(prev => {
      const next = { ...prev, [key]: value };
      syncToFirestore(solvedMap, bookmarksMap, notesMap, next, activityDates);
      return next;
    });
  };

  const getCustomData = (key: string, defaultValue: any = null) => {
    return customDataMap[key] !== undefined ? customDataMap[key] : defaultValue;
  };

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
        customDataMap,
        setCustomData,
        getCustomData,
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
