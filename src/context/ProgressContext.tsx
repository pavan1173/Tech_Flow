import React, { createContext, useContext, useEffect, useState, useRef, useCallback } from 'react';
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
  isSyncing: boolean;
  forceSyncToCloud: () => Promise<void>;
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
  isSyncing: false,
  forceSyncToCloud: async () => {},
});

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUid, setCurrentUid] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

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

  // Keep a synchronous in-memory ref to eliminate race conditions & stale closures
  const progressRef = useRef({
    solvedMap,
    bookmarksMap,
    notesMap,
    customDataMap,
    activityDates,
  });

  // Keep ref up to date
  useEffect(() => {
    progressRef.current = {
      solvedMap,
      bookmarksMap,
      notesMap,
      customDataMap,
      activityDates,
    };
  }, [solvedMap, bookmarksMap, notesMap, customDataMap, activityDates]);

  // Debounce timer ref for flushing to Firestore
  const syncTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track Firebase Auth user
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (fbUser) => {
      setCurrentUid(fbUser ? fbUser.uid : null);
    });
    return () => unsub();
  }, []);

  // Robust flush function to Firestore
  const flushToFirestore = useCallback(async (uid: string, dataToSave = progressRef.current) => {
    if (!uid) return;
    setIsSyncing(true);
    try {
      const solvedCount = Object.values(dataToSave.solvedMap).filter(Boolean).length;
      const bookmarksCount = Object.values(dataToSave.bookmarksMap).filter(Boolean).length;
      const now = new Date().toISOString();

      const progressDocRef = doc(db, 'progress', uid);
      const userDocRef = doc(db, 'users', uid);

      await Promise.all([
        setDoc(progressDocRef, {
          uid,
          solvedMap: dataToSave.solvedMap,
          totalSolved: solvedCount,
          bookmarksMap: dataToSave.bookmarksMap,
          notesMap: dataToSave.notesMap,
          customDataMap: dataToSave.customDataMap,
          activityDates: dataToSave.activityDates,
          streakDays: Math.max(1, dataToSave.activityDates.length),
          lastActiveAt: now,
          lastSyncedAt: now,
        }, { merge: true }),
        setDoc(userDocRef, {
          totalSolved: solvedCount,
          totalBookmarks: bookmarksCount,
          lastActiveAt: now,
          updatedAt: now,
        }, { merge: true }),
      ]);
    } catch (err) {
      console.warn('Firestore progress sync error:', err);
    } finally {
      setIsSyncing(false);
    }
  }, []);

  // Schedule a debounced flush (300ms) or immediate
  const scheduleSync = useCallback((immediate = false) => {
    if (!currentUid) return;
    if (syncTimeoutRef.current) {
      clearTimeout(syncTimeoutRef.current);
      syncTimeoutRef.current = null;
    }

    if (immediate) {
      flushToFirestore(currentUid, progressRef.current);
    } else {
      syncTimeoutRef.current = setTimeout(() => {
        flushToFirestore(currentUid, progressRef.current);
      }, 300);
    }
  }, [currentUid, flushToFirestore]);

  // Real-time Firestore sync & migration of past data when authenticated
  useEffect(() => {
    if (!currentUid) return;

    const progressDocRef = doc(db, 'progress', currentUid);

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

          // Also scan localStorage for any roadmap keys or lecture notes
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key) {
              if (key.startsWith('teachflow_roadmap_completed_')) {
                const raw = localStorage.getItem(key);
                if (raw) {
                  try {
                    localCustom[key] = JSON.parse(raw);
                  } catch {
                    localCustom[key] = raw;
                  }
                }
              } else if (key.startsWith('lecture-note-')) {
                const noteVal = localStorage.getItem(key);
                if (noteVal) {
                  const probKey = key.replace('lecture-note-', 'lec-');
                  localNotes[probKey] = noteVal;
                }
              }
            }
          }
        } catch (e) {
          console.warn('Past data localStorage read notice:', e);
        }

        if (snap.exists()) {
          const dbData = snap.data();
          // Merge past local data with remote data (combining all solved problems, bookmarks & notes)
          const mergedSolved = { ...(dbData.solvedMap || {}), ...localSolved };
          const mergedBookmarks = { ...(dbData.bookmarksMap || {}), ...localBookmarks };
          const mergedNotes = { ...(dbData.notesMap || {}), ...localNotes };
          const mergedCustom = { ...(dbData.customDataMap || {}), ...localCustom };
          const mergedDates = Array.from(
            new Set([...(dbData.activityDates || []), ...(localDates || [])])
          );

          progressRef.current = {
            solvedMap: mergedSolved,
            bookmarksMap: mergedBookmarks,
            notesMap: mergedNotes,
            customDataMap: mergedCustom,
            activityDates: mergedDates,
          };

          setSolvedMap(mergedSolved);
          setBookmarksMap(mergedBookmarks);
          setNotesMap(mergedNotes);
          setCustomDataMap(mergedCustom);
          setActivityDates(mergedDates);

          // Write safely back to Firestore progress record
          await flushToFirestore(currentUid, progressRef.current);
        } else {
          // Document does not exist yet: save all past local data into DB!
          progressRef.current = {
            solvedMap: localSolved,
            bookmarksMap: localBookmarks,
            notesMap: localNotes,
            customDataMap: localCustom,
            activityDates: localDates,
          };

          setSolvedMap(localSolved);
          setBookmarksMap(localBookmarks);
          setNotesMap(localNotes);
          setCustomDataMap(localCustom);
          setActivityDates(localDates);

          await flushToFirestore(currentUid, progressRef.current);
        }
      } catch (err) {
        console.warn('Reconcile past data notice:', err);
      }
    };

    syncAndReconcilePastData();

    // Subscribe to real-time snapshot
    const unsubSnapshot = onSnapshot(progressDocRef, (snap) => {
      // Don't overwrite local UI if we have our own pending writes in flight
      if (snap.metadata.hasPendingWrites) return;

      if (snap.exists()) {
        const data = snap.data();
        if (data.solvedMap) {
          progressRef.current.solvedMap = data.solvedMap;
          setSolvedMap(data.solvedMap);
        }
        if (data.bookmarksMap) {
          progressRef.current.bookmarksMap = data.bookmarksMap;
          setBookmarksMap(data.bookmarksMap);
        }
        if (data.notesMap) {
          progressRef.current.notesMap = data.notesMap;
          setNotesMap(data.notesMap);
        }
        if (data.customDataMap) {
          progressRef.current.customDataMap = data.customDataMap;
          setCustomDataMap(data.customDataMap);
        }
        if (data.activityDates) {
          progressRef.current.activityDates = data.activityDates;
          setActivityDates(data.activityDates);
        }
      }
    }, (err) => {
      console.warn('Firestore progress sync warning:', err);
    });

    return () => unsubSnapshot();
  }, [currentUid, flushToFirestore]);

  // Sync to local storage backup
  useEffect(() => {
    try {
      localStorage.setItem('teachflow_solved_problems', JSON.stringify(solvedMap));
      localStorage.setItem('teachflow_bookmarks', JSON.stringify(bookmarksMap));
      localStorage.setItem('teachflow_notes', JSON.stringify(notesMap));
      localStorage.setItem('teachflow_custom_data', JSON.stringify(customDataMap));
      localStorage.setItem('teachflow_activity_dates', JSON.stringify(activityDates));
    } catch (e) {
      console.error(e);
    }
  }, [solvedMap, bookmarksMap, notesMap, customDataMap, activityDates]);

  const toggleSolved = (id: string) => {
    const prev = progressRef.current.solvedMap;
    const isNowSolved = !prev[id];
    const nextSolved = { ...prev, [id]: isNowSolved };
    
    const today = new Date().toISOString().split('T')[0];
    let nextDates = progressRef.current.activityDates;
    if (isNowSolved && !nextDates.includes(today)) {
      nextDates = [...nextDates, today];
      setActivityDates(nextDates);
    }

    progressRef.current = {
      ...progressRef.current,
      solvedMap: nextSolved,
      activityDates: nextDates,
    };

    setSolvedMap(nextSolved);
    scheduleSync(true); // Immediate sync on problem solve
  };

  const isSolved = (id: string) => !!solvedMap[id];

  const toggleBookmark = (id: string) => {
    const prev = progressRef.current.bookmarksMap;
    const nextBookmarks = { ...prev, [id]: !prev[id] };

    progressRef.current = {
      ...progressRef.current,
      bookmarksMap: nextBookmarks,
    };

    setBookmarksMap(nextBookmarks);
    scheduleSync(true);
  };

  const isBookmarked = (id: string) => !!bookmarksMap[id];

  const saveNote = (id: string, note: string) => {
    const prev = progressRef.current.notesMap;
    const nextNotes = { ...prev, [id]: note };

    progressRef.current = {
      ...progressRef.current,
      notesMap: nextNotes,
    };

    setNotesMap(nextNotes);
    scheduleSync(false); // Debounced 300ms for smooth typing
  };

  const getNote = (id: string) => notesMap[id] || '';

  const setCustomData = (key: string, value: any) => {
    const prev = progressRef.current.customDataMap;
    const nextCustom = { ...prev, [key]: value };

    progressRef.current = {
      ...progressRef.current,
      customDataMap: nextCustom,
    };

    setCustomDataMap(nextCustom);
    scheduleSync(false);
  };

  const getCustomData = (key: string, defaultValue: any = null) => {
    return customDataMap[key] !== undefined ? customDataMap[key] : defaultValue;
  };

  const totalSolved = Object.values(solvedMap).filter(Boolean).length;
  const streakDays = Math.max(1, activityDates.length);

  const forceSyncToCloud = async () => {
    if (currentUid) {
      await flushToFirestore(currentUid, progressRef.current);
    }
  };

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
        isSyncing,
        forceSyncToCloud,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);

