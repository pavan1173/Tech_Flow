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
  Layers,
  ChevronRight
} from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, loginWithGoogle } = useAuth();
  const [activeTab, setActiveTab] = useState<'google' | 'manual'>('google');
  const [customEmail, setCustomEmail] = useState('');
  const [customName, setCustomName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleQuickSignIn = (email: string, name: string) => {
    setIsProcessing(true);
    setTimeout(() => {
      loginWithGoogle(email, name);
      setIsProcessing(false);
    }, 400);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customEmail) {
      handleQuickSignIn(customEmail, customName || customEmail.split('@')[0]);
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
            <span className="font-bold text-sm tracking-tight text-white">TeachFlow</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20">
              Free Access
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
        <div className="p-6 sm:p-7 space-y-6 relative z-10">
          {/* Main Title & Subtitle */}
          <div className="text-center space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Sign in to Unlock All Courses
            </h2>
            <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed max-w-sm mx-auto">
              Get instant, unlimited access to all 200+ package-wise questions, 20 DSA patterns, company sheets, and progress tracking.
            </p>
          </div>

          {/* Google Account Selector Card (Google One Tap Style) */}
          <div className="rounded-2xl bg-[#111622] border border-[#1f293d] p-4 sm:p-5 space-y-4 shadow-inner">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="font-semibold text-zinc-300">Choose Google Account</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] text-emerald-400 font-medium">Verified OAuth</span>
              </div>
            </div>

            {/* Primary Google Account Card */}
            <button
              onClick={() => handleQuickSignIn('mpavankumar110405@gmail.com', 'Pavan Kumar')}
              disabled={isProcessing}
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#161c2a] hover:bg-[#1c2436] border border-[#232e44] hover:border-blue-500/50 transition-all duration-200 cursor-pointer group text-left shadow-xs"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                  P
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-xs">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                    </svg>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-xs sm:text-sm text-white group-hover:text-blue-400 transition-colors truncate">
                    Pavan Kumar
                  </div>
                  <div className="text-[11px] text-zinc-400 truncate">
                    mpavankumar110405@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0 text-blue-400 font-semibold text-xs ml-2">
                <span>{isProcessing ? 'Signing In...' : 'Continue'}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Standard Google Sign In Button */}
            <button
              onClick={() => handleQuickSignIn('mpavankumar110405@gmail.com', 'Pavan Kumar')}
              disabled={isProcessing}
              className="w-full flex items-center justify-center gap-3 px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 font-bold text-xs sm:text-sm shadow-md transition-all duration-200 cursor-pointer active:scale-[0.99]"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
              </svg>
              <span>Sign in with Google</span>
            </button>

            {/* Custom Email Form Toggle */}
            <div className="pt-2">
              {activeTab === 'google' ? (
                <button
                  onClick={() => setActiveTab('manual')}
                  className="w-full text-center text-xs text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer py-1"
                >
                  Use another email address
                </button>
              ) : (
                <form onSubmit={handleCustomSubmit} className="space-y-2.5 pt-1 animate-in fade-in">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#0b0e14] border border-[#232e44] text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={customEmail}
                    onChange={(e) => setCustomEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#0b0e14] border border-[#232e44] text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveTab('google')}
                      className="px-3 py-2 rounded-xl text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                    >
                      Continue with Email
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

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
              <span className="truncate">Saved Notes & Stars</span>
            </div>
          </div>

          {/* Privacy & Terms Note */}
          <p className="text-[10px] text-zinc-400 text-center leading-relaxed">
            By signing in, you agree to TeachFlow's Terms of Service and Privacy Policy. Your progress and study notes will be safely saved.
          </p>
        </div>
      </div>
    </div>
  );
};
