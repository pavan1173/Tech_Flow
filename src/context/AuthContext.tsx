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
  const isPavan = email.toLowerCase().includes('pavan') || email.toLowerCase() === 'mpavankumar110405@gmail.com';
  const username = isPavan ? 'tech_by.pavan' : (email.split('@')[0] || 'developer');

  return {
    uid,
    name: name || (isPavan ? 'Pavan Kumar' : username.charAt(0).toUpperCase() + username.slice(1)),
    email,
    avatar: avatar || (isPavan ? '/pavan_img.png' : ''),
    handle: `@${username}`,
    role: isPavan ? 'Founder & Lead Developer' : 'Software Developer',
    bio: isPavan
      ? 'Developer & Creator of HackPath. Building free, world-class resources for software engineers to crack top tech placements.'
      : 'Software engineer preparing for top product companies, mastering DSA patterns, system design, and SQL.',
    targetCompany: 'Google / Amazon / Microsoft / Uber',
    targetPackage: '35+ LPA',
    college: '',
    graduationYear: '2026',
    githubUrl: '',
    linkedinUrl: '',
    leetcodeUrl: '',
    codechefUrl: '',
    portfolioUrl: '',
    instagramUrl: isPavan ? 'https://www.instagram.com/tech_by.pavan/' : '',
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
  openAuthModal: () => void;
  closeAuthModal: () => void;
  openProfileModal: () => void;
  closeProfileModal: () => void;
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

  // Helper to record user login session, audit history, and sync profile metrics in Firestore.
  // Runs ONLY inside explicit sign-in calls (loginWithGoogle, loginWithEmail, signupWithEmail).
  const recordUserLoginInFirestore = async (
    fbUser: FirebaseUser,
    customName?: string,
    customAvatar?: string
  ): Promise<User> => {
    const userDocRef = doc(db, 'users', fbUser.uid);
    const progressDocRef = doc(db, 'progress', fbUser.uid);

    const [userDocSnap, progressDocSnap] = await Promise.all([
      getDoc(userDocRef),
      getDoc(progressDocRef),
    ]);

    let totalSolvedCount = 0;
    let totalBookmarksCount = 0;
    if (progressDocSnap.exists()) {
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

    if (userDocSnap.exists()) {
      const existing = userDocSnap.data() as User;
      const newLoginCount = (existing.loginCount || 0) + 1;
      const history = [loginEntry, ...(existing.loginHistory || []).slice(0, 19)];

      const updatedUser: User = {
        ...existing,
        uid: fbUser.uid,
        email: fbUser.email || existing.email,
        name: existing.name || fbUser.displayName || customName || 'Developer',
        avatar: existing.avatar || fbUser.photoURL || customAvatar || '',
        authProvider: provider,
        lastLoginAt: now,
        loginCount: newLoginCount,
        loginHistory: history,
        totalSolved: totalSolvedCount || existing.totalSolved || 0,
        totalBookmarks: totalBookmarksCount || existing.totalBookmarks || 0,
        updatedAt: now,
      };

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

      await setDoc(userDocRef, newUserRecord);
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
            setUser(snap.data() as User);
          } else {
            // Document does not exist yet: provide default user representation without audit writes
            const fallbackUser = createDefaultUserForEmail(
              fbUser.email || 'developer@example.com',
              fbUser.displayName || undefined,
              fbUser.photoURL || undefined,
              fbUser.uid
            );
            setUser(fallbackUser);
          }
        } catch (err) {
          console.warn('Firestore user load notice:', err);
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
    const recorded = await recordUserLoginInFirestore(fbUser);
    setUser(recorded);
    setIsAuthModalOpen(false);
  };

  const loginWithEmail = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const fbUser = userCredential.user;
    const recorded = await recordUserLoginInFirestore(fbUser);
    setUser(recorded);
    setIsAuthModalOpen(false);
  };

  const signupWithEmail = async (email: string, password: string, name: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const fbUser = userCredential.user;

    await updateFirebaseProfile(fbUser, {
      displayName: name,
    });

    const recorded = await recordUserLoginInFirestore(fbUser, name);
    setUser(recorded);
    setIsAuthModalOpen(false);
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

    const promises = [];

    if (handles.leetcode) {
      promises.push(
        fetchLeetCodeStats(handles.leetcode)
          .then(stats => { updatedProfiles.leetcode = stats; })
          .catch(err => console.warn('LeetCode sync notice:', err))
      );
    }

    if (handles.codechef) {
      promises.push(
        fetchCodeChefStats(handles.codechef)
          .then(stats => { updatedProfiles.codechef = stats; })
          .catch(err => console.warn('CodeChef sync notice:', err))
      );
    }

    if (handles.github) {
      promises.push(
        fetchGitHubStats(handles.github)
          .then(stats => { updatedProfiles.github = stats; })
          .catch(err => console.warn('GitHub sync notice:', err))
      );
    }

    await Promise.all(promises);

    const email = firebaseUser?.email || user?.email || 'developer@example.com';
    const baseUser = user || createDefaultUserForEmail(email, firebaseUser?.displayName || undefined, firebaseUser?.photoURL || undefined, firebaseUser?.uid);

    const updatedUser: User = {
      ...baseUser,
      codingProfiles: updatedProfiles,
      ...(handles.leetcode ? { leetcodeUrl: handles.leetcode } : {}),
      ...(handles.codechef ? { codechefUrl: handles.codechef } : {}),
      ...(handles.github ? { githubUrl: handles.github } : {}),
      updatedAt: new Date().toISOString(),
    };

    setUser(updatedUser);
    localStorage.setItem('hackpath_user', JSON.stringify(updatedUser));
    localStorage.setItem('teachflow_user', JSON.stringify(updatedUser));

    if (firebaseUser) {
      try {
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        await setDoc(userDocRef, updatedUser, { merge: true });
        
        const progressDocRef = doc(db, 'progress', firebaseUser.uid);
        await setDoc(progressDocRef, {
          codingProfiles: updatedProfiles,
          lastActiveAt: new Date().toISOString(),
        }, { merge: true });
      } catch (err) {
        console.warn('Firestore sync coding platforms write notice:', err);
      }
    }

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
    localStorage.removeItem('hackpath_user');
    localStorage.removeItem('teachflow_user');
    localStorage.removeItem('teachflow_auth_unlocked');
    localStorage.removeItem('teachflow_solved_problems');
    localStorage.removeItem('teachflow_bookmarks');
    localStorage.removeItem('teachflow_notes');
    localStorage.removeItem('teachflow_custom_data');
  };

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);
  const openProfileModal = () => setIsProfileModalOpen(true);
  const closeProfileModal = () => setIsProfileModalOpen(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        firebaseUser,
        isAuthenticated: !!firebaseUser,
        authReady,
        isAuthModalOpen,
        isProfileModalOpen,
        openAuthModal,
        closeAuthModal,
        openProfileModal,
        closeProfileModal,
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
