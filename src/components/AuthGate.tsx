import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Lock, Sparkles, ShieldCheck } from 'lucide-react';

interface AuthGateProps {
  children?: React.ReactNode;
  totalCount?: number | string;
  featureName?: string;
  title?: string;
  className?: string;
  minHeight?: string;
}

export const GoogleLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={`shrink-0 ${className}`} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

export const AuthGate: React.FC<AuthGateProps> = ({
  children,
  totalCount,
  featureName = 'content and resources',
  title = 'Sign in to access this content',
  className = '',
  minHeight = 'min-h-[380px]',
}) => {
  const { isAuthenticated, loginWithGoogle, openAuthModal } = useAuth();

  if (isAuthenticated) {
    return <>{children}</>;
  }

  const handleSignIn = async () => {
    try {
      await loginWithGoogle();
    } catch {
      openAuthModal();
    }
  };

  const countDisplay = totalCount ? `all ${totalCount}` : 'all';

  return (
    <div className={`relative overflow-hidden rounded-2xl ${minHeight} ${className}`}>
      {/* Blurred Preview Content behind the Gate */}
      <div
        className="filter blur-[6px] opacity-30 select-none pointer-events-none transition-all duration-300 max-h-[580px] overflow-hidden"
        aria-hidden="true"
      >
        {children}
      </div>

      {/* Adaptive Theme Gradient Fog */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/85 to-white/98 dark:from-[#07090e]/40 dark:via-[#07090e]/85 dark:to-[#07090e]/98 pointer-events-none" />

      {/* Floating Center Callout Box */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center z-20 pointer-events-auto">
        <div className="max-w-md w-full flex flex-col items-center gap-4 px-5 py-7 sm:py-9 rounded-3xl bg-white/90 dark:bg-[#0e131d]/90 backdrop-blur-xl border border-zinc-200/90 dark:border-[#1e273a] shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          {/* Lock icon with subtle glow */}
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner">
              <Lock className="w-5 h-5" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0e131d] flex items-center justify-center">
              <ShieldCheck className="w-2.5 h-2.5 text-white stroke-[3]" />
            </div>
          </div>

          {/* Titles */}
          <div className="space-y-1.5">
            <h3 className="font-extrabold text-base sm:text-lg text-zinc-900 dark:text-white tracking-tight leading-snug">
              {title}
            </h3>
            <p className="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-sm mx-auto">
              Sign in with Google to unlock {countDisplay} {featureName} and track your progress.
            </p>
          </div>

          {/* Primary Action: Continue with Google */}
          <div className="w-full flex flex-col items-center gap-2.5 pt-1">
            <button
              type="button"
              onClick={handleSignIn}
              className="w-full max-w-xs inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-zinc-900 hover:bg-black dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 font-semibold text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer border border-zinc-800 dark:border-white"
            >
              <GoogleLogoIcon className="w-4 h-4" />
              <span>Continue with Google</span>
            </button>

            {/* Secondary Action: Select account / email */}
            <button
              type="button"
              onClick={openAuthModal}
              className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 underline decoration-zinc-400/50 underline-offset-4 transition-colors cursor-pointer"
            >
              Choose another account or sign in with email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
