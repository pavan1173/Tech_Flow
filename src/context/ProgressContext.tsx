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

// Helper functions for namespaced storage keys
const getStorageNamespace = (uid: string | null): string => {
  return uid ? `hp:${uid}` : 'hp:guest';
};

const getStorageKey = (uid: string | null, type: 'solved' | 'bookmarks' | 'notes' | 'custom' | 'activity'): string => {
  return `${getStorageNamespace(uid)}:${type}`;
};

const loadFromStorage = (uid: string | null) => {
  try {
    const solvedRaw = localStorage.getItem(getStorageKey(uid, 'solved'));
    const bookmarksRaw = localStorage.getItem(getStorageKey(uid, 'bookmarks'));
    const notesRaw = localStorage.getItem(getStorageKey(uid, 'notes'));
    const customRaw = localStorage.getItem(getStorageKey(uid, 'custom'));
    const activityRaw = localStorage.getItem(getStorageKey(uid, 'activity'));

    return {
      solvedMap: solvedRaw ? (JSON.parse(solvedRaw) as Record<string, boolean>) : {},
      bookmarksMap: bookmarksRaw ? (JSON.parse(bookmarksRaw) as Record<string, boolean>) : {},
      notesMap: notesRaw ? (JSON.parse(notesRaw) as Record<string, string>) : {},
      customDataMap: customRaw ? (JSON.parse(customRaw) as Record<string, any>) : {},
      activityDates: activityRaw ? (JSON.parse(activityRaw) as string[]) : ['2026-09-24', '2026-09-25', '2026-09-26'],
    };
  } catch (err) {
    console.warn('loadFromStorage error:', err);
    return {
      solvedMap: {},
      bookmarksMap: {},
      notesMap: {},
      customDataMap: {},
      activityDates: ['2026-09-24', '2026-09-25', '2026-09-26'],
    };
  }
};

const saveToStorage = (
  uid: string | null,
  data: {
    solvedMap: Record<string, boolean>;
    bookmarksMap: Record<string, boolean>;
    notesMap: Record<string, string>;
    customDataMap: Record<string, any>;
    activityDates: string[];
  }
) => {
  try {
    localStorage.setItem(getStorageKey(uid, 'solved'), JSON.stringify(data.solvedMap));
    localStorage.setItem(getStorageKey(uid, 'bookmarks'), JSON.stringify(data.bookmarksMap));
    localStorage.setItem(getStorageKey(uid, 'notes'), JSON.stringify(data.notesMap));
    localStorage.setItem(getStorageKey(uid, 'custom'), JSON.stringify(data.customDataMap));
    localStorage.setItem(getStorageKey(uid, 'activity'), JSON.stringify(data.activityDates));
  } catch (err) {
    console.warn('saveToStorage error:', err);
  }
};

// Migrate legacy keys once, only into the first account that signs in on this browser, then delete them
const migrateLegacyKeysOnce = (): {
  solved: Record<string, boolean>;
  bookmarks: Record<string, boolean>;
  notes: Record<string, string>;
  custom: Record<string, any>;
  dates: string[];
} | null => {
  const MIGRATION_FLAG = 'hp:legacy_migrated';
  if (localStorage.getItem(MIGRATION_FLAG) === 'true') {
    return null;
  }

  const legacySolved: Record<string, boolean> = {};
  const legacyBookmarks: Record<string, boolean> = {};
  const legacyNotes: Record<string, string> = {};
  const legacyCustom: Record<string, any> = {};
  let legacyDates: string[] = [];

  try {
    const s = localStorage.getItem('teachflow_solved_problems');
    if (s) Object.assign(legacySolved, JSON.parse(s));
    const b = localStorage.getItem('teachflow_bookmarks');
    if (b) Object.assign(legacyBookmarks, JSON.parse(b));
    const n = localStorage.getItem('teachflow_notes');
    if (n) Object.assign(legacyNotes, JSON.parse(n));
    const c = localStorage.getItem('teachflow_custom_data');
    if (c) Object.assign(legacyCustom, JSON.parse(c));
    const a = localStorage.getItem('teachflow_activity_dates');
    if (a) legacyDates = JSON.parse(a);

    // HR questions bookmarks migration
    const hrBookmarksRaw = localStorage.getItem('bookmarks_hr_questions');
    if (hrBookmarksRaw) {
      try {
        const ids: number[] = JSON.parse(hrBookmarksRaw);
        ids.forEach((id) => {
          legacyBookmarks[`hr_q_${id}`] = true;
        });
      } catch {}
    }

    // Scan for role-wise bookmarks, roadmap completion, and lecture notes
    const keysToRemove: string[] = [
      'teachflow_solved_problems',
      'teachflow_bookmarks',
      'teachflow_notes',
      'teachflow_custom_data',
      'teachflow_activity_dates',
      'bookmarks_hr_questions',
    ];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;

      if (key.startsWith('bookmarks_role_')) {
        keysToRemove.push(key);
        const slug = key.replace('bookmarks_role_', '');
        const raw = localStorage.getItem(key);
        if (raw) {
          try {
            const indices: number[] = JSON.parse(raw);
            indices.forEach((idx) => {
              legacyBookmarks[`role_${slug}_${idx + 1}`] = true;
            });
          } catch {}
        }
      } else if (key.startsWith('teachflow_roadmap_completed_')) {
        keysToRemove.push(key);
        const raw = localStorage.getItem(key);
        if (raw) {
          try {
            legacyCustom[key] = JSON.parse(raw);
          } catch {
            legacyCustom[key] = raw;
          }
        }
      } else if (key.startsWith('lecture-note-')) {
        keysToRemove.push(key);
        const noteVal = localStorage.getItem(key);
        if (noteVal) {
          const probKey = key.replace('lecture-note-', 'lec-');
          legacyNotes[probKey] = noteVal;
        }
      }
    }

    // Delete legacy keys immediately
    keysToRemove.forEach((k) => localStorage.removeItem(k));
  } catch (err) {
    console.warn('Legacy migration reading notice:', err);
  }

  // Mark migration as completed so it never runs again
  localStorage.setItem(MIGRATION_FLAG, 'true');

  return {
    solved: legacySolved,
    bookmarks: legacyBookmarks,
    notes: legacyNotes,
    custom: legacyCustom,
    dates: legacyDates,
  };
};

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUid, setCurrentUid] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  // Initialize with guest namespace data
  const initialGuestData = loadFromStorage(null);

  const [solvedMap, setSolvedMap] = useState<Record<string, boolean>>(initialGuestData.solvedMap);
  const [bookmarksMap, setBookmarksMap] = useState<Record<string, boolean>>(initialGuestData.bookmarksMap);
  const [notesMap, setNotesMap] = useState<Record<string, string>>(initialGuestData.notesMap);
  const [customDataMap, setCustomDataMap] = useState<Record<string, any>>(initialGuestData.customDataMap);
  const [activityDates, setActivityDates] = useState<string[]>(initialGuestData.activityDates);

  // Synchronous in-memory ref to prevent stale closures
  const progressRef = useRef({
    solvedMap,
    bookmarksMap,
    notesMap,
    customDataMap,
    activityDates,
  });

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
        setDoc(
          progressDocRef,
          {
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
          },
          { merge: true }
        ),
        setDoc(
          userDocRef,
          {
            totalSolved: solvedCount,
            totalBookmarks: bookmarksCount,
            lastActiveAt: now,
            updatedAt: now,
          },
          { merge: true }
        ),
      ]);
    } catch (err) {
      console.warn('Firestore progress sync error:', err);
    } finally {
      setIsSyncing(false);
    }
  }, []);

  // Schedule a debounced flush (300ms) or immediate flush
  const scheduleSync = useCallback(
    (immediate = false) => {
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
    },
    [currentUid, flushToFirestore]
  );

  // Track Firebase Auth user & handle clean state transitions
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (fbUser) => {
      const nextUid = fbUser ? fbUser.uid : null;

      // When switching users or signing out: cancel any pending sync timeout immediately
      if (syncTimeoutRef.current) {
        clearTimeout(syncTimeoutRef.current);
        syncTimeoutRef.current = null;
      }

      if (!nextUid) {
        // When currentUid becomes null, reset all state to prevent cross-account leakage
        setCurrentUid(null);
        const guestData = loadFromStorage(null);

        progressRef.current = guestData;
        setSolvedMap(guestData.solvedMap);
        setBookmarksMap(guestData.bookmarksMap);
        setNotesMap(guestData.notesMap);
        setCustomDataMap(guestData.customDataMap);
        setActivityDates(guestData.activityDates);
        setIsSyncing(false);
      } else {
        setCurrentUid(nextUid);
      }
    });

    return () => unsub();
  }, []);

  // When signed in: load user's namespaced local data & synchronize with Firestore
  useEffect(() => {
    if (!currentUid) return;

    let isCancelled = false;
    const progressDocRef = doc(db, 'progress', currentUid);

    // Initial safe migration & reconciliation of past data
    const syncAndReconcileUserData = async () => {
      try {
        // Run legacy migration once, only into the first account that signs in
        const legacyData = migrateLegacyKeysOnce();

        // Load existing namespaced data for this user
        const localUserData = loadFromStorage(currentUid);

        const snap = await getDoc(progressDocRef);

        let remoteSolved: Record<string, boolean> = {};
        let remoteBookmarks: Record<string, boolean> = {};
        let remoteNotes: Record<string, string> = {};
        let remoteCustom: Record<string, any> = {};
        let remoteDates: string[] = ['2026-09-24', '2026-09-25', '2026-09-26'];

        if (snap.exists()) {
          const dbData = snap.data();
          remoteSolved = dbData.solvedMap || {};
          remoteBookmarks = dbData.bookmarksMap || {};
          remoteNotes = dbData.notesMap || {};
          remoteCustom = dbData.customDataMap || {};
          remoteDates = dbData.activityDates || remoteDates;
        }

        // Merge remote data with local user data and any one-time legacy data
        const mergedSolved = {
          ...localUserData.solvedMap,
          ...remoteSolved,
          ...(legacyData?.solved || {}),
        };
        const mergedBookmarks = {
          ...localUserData.bookmarksMap,
          ...remoteBookmarks,
          ...(legacyData?.bookmarks || {}),
        };
        const mergedNotes = {
          ...localUserData.notesMap,
          ...remoteNotes,
          ...(legacyData?.notes || {}),
        };
        const mergedCustom = {
          ...localUserData.customDataMap,
          ...remoteCustom,
          ...(legacyData?.custom || {}),
        };
        const mergedDates = Array.from(
          new Set([
            ...localUserData.activityDates,
            ...remoteDates,
            ...(legacyData?.dates || []),
          ])
        );

        if (isCancelled) return;

        const mergedData = {
          solvedMap: mergedSolved,
          bookmarksMap: mergedBookmarks,
          notesMap: mergedNotes,
          customDataMap: mergedCustom,
          activityDates: mergedDates,
        };

        progressRef.current = mergedData;
        setSolvedMap(mergedSolved);
        setBookmarksMap(mergedBookmarks);
        setNotesMap(mergedNotes);
        setCustomDataMap(mergedCustom);
        setActivityDates(mergedDates);

        // Save into user's namespaced localStorage
        saveToStorage(currentUid, mergedData);

        // If legacy data was migrated or new merged keys exist, flush to Firestore
        if (legacyData || !snap.exists()) {
          await flushToFirestore(currentUid, mergedData);
        }
      } catch (err) {
        console.warn('Reconcile user data notice:', err);
      }
    };

    syncAndReconcileUserData();

    // Subscribe to real-time snapshot for this user's progress document
    const unsubSnapshot = onSnapshot(
      progressDocRef,
      (snap) => {
        if (isCancelled) return;
        // Don't overwrite local UI if we have our own pending writes in flight
        if (snap.metadata.hasPendingWrites) return;

        if (snap.exists()) {
          const data = snap.data();
          const updated = {
            solvedMap: data.solvedMap || {},
            bookmarksMap: data.bookmarksMap || {},
            notesMap: data.notesMap || {},
            customDataMap: data.customDataMap || {},
            activityDates: data.activityDates || ['2026-09-24', '2026-09-25', '2026-09-26'],
          };

          progressRef.current = updated;
          setSolvedMap(updated.solvedMap);
          setBookmarksMap(updated.bookmarksMap);
          setNotesMap(updated.notesMap);
          setCustomDataMap(updated.customDataMap);
          setActivityDates(updated.activityDates);

          saveToStorage(currentUid, updated);
        }
      },
      (err) => {
        console.warn('Firestore progress sync warning:', err);
      }
    );

    return () => {
      isCancelled = true;
      unsubSnapshot();
    };
  }, [currentUid, flushToFirestore]);

  // Sync to namespaced local storage backup whenever state changes
  useEffect(() => {
    saveToStorage(currentUid, {
      solvedMap,
      bookmarksMap,
      notesMap,
      customDataMap,
      activityDates,
    });
  }, [currentUid, solvedMap, bookmarksMap, notesMap, customDataMap, activityDates]);

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
    scheduleSync(true); // Immediate sync on bookmark toggle
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
