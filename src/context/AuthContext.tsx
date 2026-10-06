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
  const username = email.split('@')[0] || 'developer';

  return {
    uid,
    name: name || username.charAt(0).toUpperCase() + username.slice(1),
    email,
    avatar: avatar || '',
    handle: `@${username}`,
    role: 'Software Developer',
    bio: 'Software engineer preparing for top product companies, mastering DSA patterns, system design, and SQL.',
    targetCompany: 'Google / Amazon / Microsoft / Uber',
    targetPackage: '35+ LPA',
    college: '',
    graduationYear: '2026',
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
  isAuthModalOpen: boolean;
  isProfileModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  openProfileModal: () => void;
  closeProfileModal: () => void;
  loginWithGoogle: (email?: string, name?: string, avatar?: string) => Promise<void>;
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

  // Helper to record user login session, audit history, and sync profile metrics in Firestore
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
        fbUser.email || 'user@example.com',
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

  // Synchronize Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      setFirebaseUser(fbUser);
      if (fbUser) {
        try {
          const recordedUser = await recordUserLoginInFirestore(fbUser);
          setUser(recordedUser);
        } catch (err) {
          console.warn('Firestore user login record notice:', err);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  // Save user profile to local storage backup
  useEffect(() => {
    if (user) {
      localStorage.setItem('hackpath_user', JSON.stringify(user));
      localStorage.setItem('teachflow_user', JSON.stringify(user));
      localStorage.setItem('teachflow_auth_unlocked', 'true');
    } else {
      localStorage.removeItem('hackpath_user');
      localStorage.removeItem('teachflow_user');
      localStorage.removeItem('teachflow_auth_unlocked');
    }
  }, [user]);

  const loginWithGoogle = async (customEmail?: string, customName?: string, customAvatar?: string) => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const fbUser = result.user;
      const recorded = await recordUserLoginInFirestore(fbUser, customName, customAvatar);
      setUser(recorded);
      setIsAuthModalOpen(false);
    } catch (popupError: any) {
      console.warn('Firebase Popup sign-in error:', popupError);
      if (customEmail) {
        const userObj = createDefaultUserForEmail(customEmail, customName, customAvatar, 'demo-uid');
        setUser(userObj);
        setIsAuthModalOpen(false);
      } else {
        // Re-throw so modal can present user-friendly error message without logging them in as Pavan
        throw popupError;
      }
    }
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
    const current = user || createDefaultUserForEmail('user@example.com');
    const updated: User = {
      ...current,
      ...updatedData,
      updatedAt: new Date().toISOString(),
    };
    setUser(updated);

    if (firebaseUser) {
      try {
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        await setDoc(userDocRef, updated, { merge: true });
      } catch (err) {
        console.warn('Could not sync profile to Firestore:', err);
      }
    }
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

    const updatedUser: User = {
      ...(user || createDefaultUserForEmail('user@example.com')),
      codingProfiles: updatedProfiles,
      ...(handles.leetcode ? { leetcodeUrl: handles.leetcode } : {}),
      ...(handles.codechef ? { codechefUrl: handles.codechef } : {}),
      ...(handles.github ? { githubUrl: handles.github } : {}),
      updatedAt: new Date().toISOString(),
    };

    setUser(updatedUser);

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
        console.warn('Could not save coding profiles to Firestore:', err);
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
        isAuthenticated: !!user,
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
