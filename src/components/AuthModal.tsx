import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { TeachFlowLogo } from './TeachFlowLogo';
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  User,
  Zap,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

export const AuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    closeAuthModal,
    loginWithGoogle,
    loginWithEmail,
    signupWithEmail,
    resetPassword
  } = useAuth();

  const [authMode, setAuthMode] = useState<'google' | 'login' | 'signup' | 'forgot'>('google');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  if (!isAuthModalOpen) return null;

  const handleGoogleSignIn = async () => {
    setIsProcessing(true);
    setErrorMessage('');
    setSuccessMessage('');
    try {
      await loginWithGoogle();
    } catch (err: any) {
      console.warn('Google sign-in error:', err);
      let msg = err?.message || 'Google sign-in failed. Please try again.';
      if (err?.code === 'auth/popup-closed-by-user' || err?.code === 'auth/cancelled-popup-request') {
        msg = 'Sign-in window was closed before completing authentication. Please click "Continue with Google" again or use Email Sign In.';
      } else if (err?.code === 'auth/popup-blocked') {
        msg = 'The Google sign-in popup was blocked by your browser. Please allow popups for this site, or use Email Sign In.';
      } else if (err?.code === 'auth/network-request-failed') {
        msg = 'Network connection problem. Please verify your internet connection.';
      } else if (err?.code === 'auth/account-exists-with-different-credential') {
        msg = 'An account already exists with this email using a different sign-in method. Please use Email Sign In.';
      }
      setErrorMessage(msg);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsProcessing(true);

    try {
      if (authMode === 'login') {
        if (!email || !password) {
          throw new Error('Please provide both email and password.');
        }
        await loginWithEmail(email, password);
      } else if (authMode === 'signup') {
        if (!email || !password) {
          throw new Error('Please provide email and password.');
        }
        if (password.length < 6) {
          throw new Error('Password must be at least 6 characters long.');
        }
        await signupWithEmail(email, password, name || email.split('@')[0]);
      } else if (authMode === 'forgot') {
        if (!email) {
          throw new Error('Please enter your email to reset password.');
        }
        await resetPassword(email);
        setSuccessMessage('Password reset link sent to your email.');
      }
    } catch (err: any) {
      let msg = err?.message || 'Authentication failed. Please check your credentials.';
      if (msg.includes('auth/invalid-credential') || msg.includes('auth/wrong-password') || msg.includes('auth/user-not-found')) {
        msg = 'Invalid email or password. If you do not have an account, please sign up.';
      } else if (msg.includes('auth/email-already-in-use')) {
        msg = 'This email is already registered. Please log in or reset your password.';
      } else if (msg.includes('auth/weak-password')) {
        msg = 'Password should be at least 6 characters.';
      }
      setErrorMessage(msg);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0b0e14] border border-[#1e2638] rounded-3xl shadow-2xl overflow-hidden font-lexend text-zinc-100 animate-in zoom-in-95 duration-200">
        {/* Glow accent decoration */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-32 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none" />

        {/* Top Bar with brand & close */}
        <div className="px-6 pt-6 pb-2 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2.5">
            <TeachFlowLogo size={28} />
            <span className="font-bold text-sm tracking-tight text-white">HackPath</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20">
              Firebase Cloud
            </span>
          </div>

          <button
            onClick={closeAuthModal}
            className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-5 relative z-10">
          {/* Main Title & Subtitle */}
          <div className="text-center space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              {authMode === 'signup'
                ? 'Create Your Account'
                : authMode === 'forgot'
                ? 'Reset Your Password'
                : 'Sign in to Unlock All Content'}
            </h2>
            <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed max-w-sm mx-auto">
              Get instant, unlimited access to all 200+ package-wise questions, 20 DSA patterns, company sheets, and realtime cloud sync.
            </p>
          </div>

          {/* Mode Tabs */}
          <div className="flex rounded-xl bg-[#111622] p-1 border border-[#1f293d]">
            <button
              onClick={() => {
                setAuthMode('google');
                setErrorMessage('');
                setSuccessMessage('');
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                authMode === 'google'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Google
            </button>
            <button
              onClick={() => {
                setAuthMode('login');
                setErrorMessage('');
                setSuccessMessage('');
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                authMode === 'login'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Email Sign In
            </button>
            <button
              onClick={() => {
                setAuthMode('signup');
                setErrorMessage('');
                setSuccessMessage('');
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                authMode === 'signup'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Error & Success Messages */}
          {errorMessage && (
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Google Auth Mode */}
          {authMode === 'google' && (
            <div className="rounded-2xl bg-[#111622] border border-[#1f293d] p-5 space-y-4 shadow-inner">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span className="font-semibold text-zinc-300">Google Authentication</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px] text-emerald-400 font-medium">Verified Firebase OAuth</span>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Connect securely with your Google account to sync your solved DSA problems, custom bookmarks, notes, and competitive coding stats directly to Firebase Cloud.
              </p>

              {/* Standard Google Sign In Button */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-white hover:bg-zinc-100 text-zinc-900 font-bold text-sm shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.99] group hover:shadow-blue-500/10"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                </svg>
                <span>{isProcessing ? 'Opening Google Sign-In...' : 'Continue with Google'}</span>
                <ArrowRight className="w-4 h-4 ml-1 text-zinc-500 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Feature Checklist */}
              <div className="pt-3 border-t border-[#1f293d]/80 space-y-2 text-[11px] text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Real-time persistence for all DSA sheets &amp; notes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Auto-sync LeetCode, CodeChef, and GitHub statistics</span>
                </div>
              </div>
            </div>
          )}

          {/* Email & Password Login / Signup Form */}
          {(authMode === 'login' || authMode === 'signup' || authMode === 'forgot') && (
            <form onSubmit={handleEmailSubmit} className="space-y-3.5">
              {authMode === 'signup' && (
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="text"
                      placeholder="e.g. Pavan Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#111622] border border-[#232e44] text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="email"
                    required
                    placeholder="you@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#111622] border border-[#232e44] text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                  />
                </div>
              </div>

              {authMode !== 'forgot' && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-zinc-300">Password</label>
                    {authMode === 'login' && (
                      <button
                        type="button"
                        onClick={() => setAuthMode('forgot')}
                        className="text-[11px] text-blue-400 hover:underline cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-10 py-2.5 rounded-xl bg-[#111622] border border-[#232e44] text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <span>Processing...</span>
                ) : authMode === 'login' ? (
                  <>
                    <span>Sign In with Password</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : authMode === 'signup' ? (
                  <>
                    <span>Create Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <span>Send Reset Email</span>
                )}
              </button>

              {authMode === 'forgot' && (
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setAuthMode('login')}
                    className="text-xs text-zinc-400 hover:text-white cursor-pointer"
                  >
                    Back to Sign In
                  </button>
                </div>
              )}
            </form>
          )}

          {/* Features unlocked checklist */}
          <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-400 pt-1">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#0d121c] border border-[#192130]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">200 Package Questions</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#0d121c] border border-[#192130]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">20 DSA Pattern Roadmaps</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#0d121c] border border-[#192130]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">45+ Company Sheets</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#0d121c] border border-[#192130]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">Firestore Realtime Sync</span>
            </div>
          </div>

          {/* Privacy & Terms Note */}
          <p className="text-[10px] text-zinc-400 text-center leading-relaxed">
            By signing in, you agree to HackPath's Terms of Service. Your progress, bookmarks, and notes are securely stored on Firebase Firestore.
          </p>
        </div>
      </div>
    </div>
  );
};
