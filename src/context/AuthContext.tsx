import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile as updateFirebaseProfile,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from '../firebase';
import { CodingProfiles, fetchLeetCodeStats, fetchCodeChefStats, fetchGitHubStats } from '../services/codingProfilesService';

export interface User {
  uid?: string;
  name: string;
  email: string;
  avatar?: string;
  handle?: string;
  role?: string;
  bio?: string;
  targetCompany?: string;
  targetPackage?: string;
  college?: string;
  graduationYear?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  leetcodeUrl?: string;
  codechefUrl?: string;
  portfolioUrl?: string;
  instagramUrl?: string;
  phone?: string;
  totalSolved?: number;
  totalBookmarks?: number;
  authProvider?: string;
  loginCount?: number;
  lastLoginAt?: string;
  loginHistory?: Array<{ timestamp: string; provider?: string; userAgent?: string }>;
  codingProfiles?: CodingProfiles;
  createdAt?: string;
  updatedAt?: string;
}

const createDefaultUserForEmail = (email: string, name?: string, avatar?: string, uid?: string): User => {
  const emailPrefix = (email.split('@')[0] || '').trim();
  const displayName = (name && name.trim()) || '';
  const username = emailPrefix || 'user';

  return {
    uid,
    name: displayName,
    email,
    avatar: avatar || '',
    handle: username ? `@${username}` : '',
    role: 'Software Developer',
    bio: '',
    targetCompany: '',
    targetPackage: '',
    college: '',
    graduationYear: '',
    githubUrl: '',
    linkedinUrl: '',
    leetcodeUrl: '',
    codechefUrl: '',
    portfolioUrl: '',
    instagramUrl: '',
    phone: '',
    codingProfiles: {
      leetcode: {
        username: '',
        totalSolved: 0,
        easySolved: 0,
        mediumSolved: 0,
        hardSolved: 0,
        ranking: 0,
        acceptanceRate: 0,
      },
      codechef: {
        username: '',
        rating: 0,
        stars: '',
        fullySolved: 0,
        partiallySolved: 0,
      },
      github: {
        username: '',
        publicRepos: 0,
        totalStars: 0,
        followers: 0,
        contributions: 0,
      },
    },
  };
};

interface AuthContextType {
  user: User | null;
  firebaseUser: FirebaseUser | null;
  isAuthenticated: boolean;
  authReady: boolean;
  isAuthModalOpen: boolean;
  isProfileModalOpen: boolean;
  isCodingHandlesModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  openProfileModal: () => void;
  closeProfileModal: () => void;
  openCodingHandlesModal: () => void;
  closeCodingHandlesModal: () => void;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  signupWithEmail: (email: string, password: string, name: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (updatedData: Partial<User>) => Promise<void>;
  syncCodingPlatforms: (handles: { leetcode?: string; codechef?: string; github?: string }) => Promise<CodingProfiles>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [authReady, setAuthReady] = useState(false);
  // localStorage user is kept ONLY as an optimistic cache for first paint
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('hackpath_user') || localStorage.getItem('teachflow_user');
      if (saved) {
        return JSON.parse(saved);
      }
      return null;
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCodingHandlesModalOpen, setIsCodingHandlesModalOpen] = useState(false);

  const checkAndPromptCodingHandles = (userData: User, uid: string) => {
    try {
      const skippedKey = `hp_handles_skipped_${uid}`;
      if (localStorage.getItem(skippedKey)) return;
      const hasAny = Boolean(
        (userData.leetcodeUrl && userData.leetcodeUrl.trim()) ||
        (userData.codechefUrl && userData.codechefUrl.trim()) ||
        (userData.githubUrl && userData.githubUrl.trim()) ||
        (userData.codingProfiles?.leetcode?.username && userData.codingProfiles.leetcode.username.trim()) ||
        (userData.codingProfiles?.codechef?.username && userData.codingProfiles.codechef.username.trim()) ||
        (userData.codingProfiles?.github?.username && userData.codingProfiles.github.username.trim())
      );
      if (!hasAny) {
        setTimeout(() => {
          setIsCodingHandlesModalOpen(true);
        }, 400);
      }
    } catch {}
  };

  // Helper to record user login session, audit history, and sync profile metrics in Firestore.
  // Runs ONLY inside explicit sign-in calls (loginWithGoogle, loginWithEmail, signupWithEmail).
  const recordUserLoginInFirestore = async (
    fbUser: FirebaseUser,
    customName?: string,
    customAvatar?: string
  ): Promise<User> => {
    const userDocRef = doc(db, 'users', fbUser.uid);
    const progressDocRef = doc(db, 'progress', fbUser.uid);

    let userDocSnap: any = null;
    let progressDocSnap: any = null;

    try {
      const results = await Promise.all([
        getDoc(userDocRef),
        getDoc(progressDocRef),
      ]);
      userDocSnap = results[0];
      progressDocSnap = results[1];
    } catch (err) {
      console.warn('Notice loading Firestore user/progress documents:', err);
    }

    let totalSolvedCount = 0;
    let totalBookmarksCount = 0;
    if (progressDocSnap && progressDocSnap.exists()) {
      const pData = progressDocSnap.data();
      if (pData.solvedMap) {
        totalSolvedCount = Object.values(pData.solvedMap).filter(Boolean).length;
      }
      if (pData.bookmarksMap) {
        totalBookmarksCount = Object.values(pData.bookmarksMap).filter(Boolean).length;
      }
    }

    const now = new Date().toISOString();
    const provider = fbUser.providerData[0]?.providerId || 'password';
    const loginEntry = {
      timestamp: now,
      provider,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    };

    if (userDocSnap && userDocSnap.exists()) {
      const existing = userDocSnap.data() as User;
      const newLoginCount = (existing.loginCount || 0) + 1;
      const history = [loginEntry, ...(existing.loginHistory || []).slice(0, 19)];

      const updatedUser: User = {
        ...existing,
        uid: fbUser.uid,
        email: fbUser.email || existing.email,
        name: existing.name || fbUser.displayName || customName || '',
        avatar: existing.avatar || fbUser.photoURL || customAvatar || '',
        authProvider: provider,
        lastLoginAt: now,
        loginCount: newLoginCount,
        loginHistory: history,
        totalSolved: totalSolvedCount || existing.totalSolved || 0,
        totalBookmarks: totalBookmarksCount || existing.totalBookmarks || 0,
        updatedAt: now,
      };

      try {
        await setDoc(userDocRef, {
          uid: fbUser.uid,
          email: updatedUser.email,
          name: updatedUser.name,
          avatar: updatedUser.avatar,
          authProvider: provider,
          lastLoginAt: now,
          loginCount: newLoginCount,
          loginHistory: history,
          totalSolved: updatedUser.totalSolved,
          totalBookmarks: updatedUser.totalBookmarks,
          updatedAt: now,
        }, { merge: true });
      } catch (writeErr) {
        console.warn('Notice saving login record to Firestore:', writeErr);
      }

      return updatedUser;
    } else {
      const initialUser = createDefaultUserForEmail(
        fbUser.email || 'developer@example.com',
        fbUser.displayName || customName,
        fbUser.photoURL || customAvatar,
        fbUser.uid
      );

      const newUserRecord: User = {
        ...initialUser,
        uid: fbUser.uid,
        authProvider: provider,
        lastLoginAt: now,
        loginCount: 1,
        loginHistory: [loginEntry],
        totalSolved: totalSolvedCount,
        totalBookmarks: totalBookmarksCount,
        createdAt: now,
        updatedAt: now,
      };

      try {
        await setDoc(userDocRef, newUserRecord);
      } catch (writeErr) {
        console.warn('Notice creating user record in Firestore:', writeErr);
      }
      return newUserRecord;
    }
  };

  // Synchronize Firebase Auth state: only loads user document and sets user.
  // Does NOT perform login audit writes on page refresh / auth restoration.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      setFirebaseUser(fbUser);
      if (fbUser) {
        try {
          const userDocRef = doc(db, 'users', fbUser.uid);
          const snap = await getDoc(userDocRef);
          if (snap.exists()) {
            const loadedUser = snap.data() as User;
            setUser(loadedUser);
            checkAndPromptCodingHandles(loadedUser, fbUser.uid);
          } else {
            // Document does not exist yet: provide default user representation without audit writes
            const fallbackUser = createDefaultUserForEmail(
              fbUser.email || 'developer@example.com',
              fbUser.displayName || undefined,
              fbUser.photoURL || undefined,
              fbUser.uid
            );
            setUser(fallbackUser);
            checkAndPromptCodingHandles(fallbackUser, fbUser.uid);
          }
        } catch (err) {
          console.warn('Firestore user load notice:', err);
          const fallbackUser = createDefaultUserForEmail(
            fbUser.email || 'developer@example.com',
            fbUser.displayName || undefined,
            fbUser.photoURL || undefined,
            fbUser.uid
          );
          setUser(fallbackUser);
          checkAndPromptCodingHandles(fallbackUser, fbUser.uid);
        }
      } else {
        setUser(null);
      }
      setAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  // Sync user profile to optimistic localStorage cache
  useEffect(() => {
    if (firebaseUser && user) {
      localStorage.setItem('hackpath_user', JSON.stringify(user));
      localStorage.setItem('teachflow_user', JSON.stringify(user));
      localStorage.setItem('teachflow_auth_unlocked', 'true');
    } else if (authReady && !firebaseUser) {
      localStorage.removeItem('hackpath_user');
      localStorage.removeItem('teachflow_user');
      localStorage.removeItem('teachflow_auth_unlocked');
    }
  }, [user, firebaseUser, authReady]);

  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const fbUser = result.user;
    let recorded: User;
    try {
      recorded = await recordUserLoginInFirestore(fbUser);
    } catch {
      recorded = createDefaultUserForEmail(
        fbUser.email || 'developer@example.com',
        fbUser.displayName || undefined,
        fbUser.photoURL || undefined,
        fbUser.uid
      );
    }
    setUser(recorded);
    setIsAuthModalOpen(false);
    checkAndPromptCodingHandles(recorded, fbUser.uid);
  };

  const loginWithEmail = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const fbUser = userCredential.user;
    let recorded: User;
    try {
      recorded = await recordUserLoginInFirestore(fbUser);
    } catch {
      recorded = createDefaultUserForEmail(
        fbUser.email || email,
        fbUser.displayName || undefined,
        undefined,
        fbUser.uid
      );
    }
    setUser(recorded);
    setIsAuthModalOpen(false);
    checkAndPromptCodingHandles(recorded, fbUser.uid);
  };

  const signupWithEmail = async (email: string, password: string, name: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const fbUser = userCredential.user;

    try {
      await updateFirebaseProfile(fbUser, {
        displayName: name,
      });
    } catch {}

    let recorded: User;
    try {
      recorded = await recordUserLoginInFirestore(fbUser, name);
    } catch {
      recorded = createDefaultUserForEmail(
        fbUser.email || email,
        name,
        undefined,
        fbUser.uid
      );
    }
    setUser(recorded);
    setIsAuthModalOpen(false);
    checkAndPromptCodingHandles(recorded, fbUser.uid);
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  const updateProfile = async (updatedData: Partial<User>) => {
    if (!firebaseUser) {
      throw new Error('User must be authenticated to update profile.');
    }

    const current = user || createDefaultUserForEmail(firebaseUser.email || 'developer@example.com', undefined, undefined, firebaseUser.uid);
    const updated: User = {
      ...current,
      ...updatedData,
      uid: firebaseUser.uid,
      updatedAt: new Date().toISOString(),
    };
    setUser(updated);

    const userDocRef = doc(db, 'users', firebaseUser.uid);
    await setDoc(userDocRef, updated, { merge: true });
  };

  const syncCodingPlatforms = async (handles: { leetcode?: string; codechef?: string; github?: string }): Promise<CodingProfiles> => {
    const currentProfiles = user?.codingProfiles || {};
    const updatedProfiles: CodingProfiles = { ...currentProfiles };
    const requests: Promise<void>[] = [];

    if (handles.leetcode) {
      requests.push(fetchLeetCodeStats(handles.leetcode).then((stats) => { updatedProfiles.leetcode = stats; }));
    }
    if (handles.codechef) {
      requests.push(fetchCodeChefStats(handles.codechef).then((stats) => { updatedProfiles.codechef = stats; }));
    }
    if (handles.github) {
      requests.push(fetchGitHubStats(handles.github).then((stats) => { updatedProfiles.github = stats; }));
    }

    // A failed provider request must fail the sync instead of showing stale or fabricated data as fresh.
    await Promise.all(requests);

    const email = firebaseUser?.email || user?.email || 'developer@example.com';
    const baseUser = user || createDefaultUserForEmail(
      email,
      firebaseUser?.displayName || undefined,
      firebaseUser?.photoURL || undefined,
      firebaseUser?.uid
    );

    const updatedUser: User = {
      ...baseUser,
      codingProfiles: updatedProfiles,
      ...(handles.leetcode ? { leetcodeUrl: handles.leetcode } : {}),
      ...(handles.codechef ? { codechefUrl: handles.codechef } : {}),
      ...(handles.github ? { githubUrl: handles.github } : {}),
      updatedAt: new Date().toISOString(),
    };

    // Persist the primary profile before presenting the sync as successful.
    if (firebaseUser) {
      const userDocRef = doc(db, 'users', firebaseUser.uid);
      await setDoc(userDocRef, updatedUser, { merge: true });

      // Progress has a separate document; a failure here should not hide a successfully saved profile.
      try {
        const progressDocRef = doc(db, 'progress', firebaseUser.uid);
        await setDoc(progressDocRef, {
          codingProfiles: updatedProfiles,
          lastActiveAt: new Date().toISOString(),
        }, { merge: true });
      } catch (err) {
        console.warn('Coding profile saved, but progress metadata sync failed:', err);
      }
    }

    setUser(updatedUser);
    localStorage.setItem('hackpath_user', JSON.stringify(updatedUser));
    localStorage.setItem('teachflow_user', JSON.stringify(updatedUser));
    return updatedProfiles;
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error(e);
    }
    setUser(null);
    setFirebaseUser(null);
    setIsAuthModalOpen(false);
    setIsProfileModalOpen(false);

    // Remove every key with the hp: and legacy teachflow_/hackpath_ prefixes
    // plus bookmarks_hr_questions and bookmarks_role_*
    try {
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
          if (
            key.startsWith('hp:') ||
            key.startsWith('teachflow_') ||
            key.startsWith('hackpath_') ||
            key === 'bookmarks_hr_questions' ||
            key.startsWith('bookmarks_role_')
          ) {
            keysToRemove.push(key);
          }
        }
      }
      keysToRemove.forEach((k) => localStorage.removeItem(k));
    } catch (err) {
      console.warn('Logout localStorage cleanup error:', err);
    }
  };

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);
  const openProfileModal = () => setIsProfileModalOpen(true);
  const closeProfileModal = () => setIsProfileModalOpen(false);
  const openCodingHandlesModal = () => setIsCodingHandlesModalOpen(true);
  const closeCodingHandlesModal = () => setIsCodingHandlesModalOpen(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        firebaseUser,
        isAuthenticated: !!firebaseUser,
        authReady,
        isAuthModalOpen,
        isProfileModalOpen,
        isCodingHandlesModalOpen,
        openAuthModal,
        closeAuthModal,
        openProfileModal,
        closeProfileModal,
        openCodingHandlesModal,
        closeCodingHandlesModal,
        loginWithGoogle,
        loginWithEmail,
        signupWithEmail,
        resetPassword,
        updateProfile,
        syncCodingPlatforms,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
