import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  loginWithGoogle: (email?: string, name?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('teachflow_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem('teachflow_user', JSON.stringify(user));
      localStorage.setItem('teachflow_auth_unlocked', 'true');
    } else {
      localStorage.removeItem('teachflow_user');
      localStorage.removeItem('teachflow_auth_unlocked');
    }
  }, [user]);

  const loginWithGoogle = (email?: string, name?: string) => {
    const userObj: User = {
      name: name || 'Pavan Kumar',
      email: email || 'mpavankumar110405@gmail.com',
      avatar: `https://api.dicebear.com/8.x/avataaars/svg?seed=${encodeURIComponent(name || 'Pavan')}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc`,
    };
    setUser(userObj);
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
    setIsAuthModalOpen(false);
  };

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        loginWithGoogle,
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
