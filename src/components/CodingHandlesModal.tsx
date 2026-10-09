import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  X,
  Sparkles,
  Code2,
  Github,
  CheckCircle2,
  RefreshCw,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface CodingHandlesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodingHandlesModal: React.FC<CodingHandlesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { user, syncCodingPlatforms } = useAuth();

  const [leetcodeInput, setLeetcodeInput] = useState('');
  const [codechefInput, setCodechefInput] = useState('');
  const [githubInput, setGithubInput] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Prepopulate if user already has partial handles
  useEffect(() => {
    if (user && isOpen) {
      setLeetcodeInput(user.leetcodeUrl || user.codingProfiles?.leetcode?.username || '');
      setCodechefInput(user.codechefUrl || user.codingProfiles?.codechef?.username || '');
      setGithubInput(user.githubUrl || user.codingProfiles?.github?.username || '');
      setErrorMessage('');
      setSuccessMessage('');
    }
  }, [user, isOpen]);

  if (!isOpen) return null;

  const handleSkip = () => {
    if (user?.uid) {
      try {
        localStorage.setItem(`hp_handles_skipped_${user.uid}`, 'true');
      } catch {}
    }
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!leetcodeInput.trim() && !codechefInput.trim() && !githubInput.trim()) {
      setErrorMessage('Please enter at least one profile handle or click "Skip for Now".');
      return;
    }

    setIsLoading(true);

    try {
      await syncCodingPlatforms({
        leetcode: leetcodeInput.trim(),
        codechef: codechefInput.trim(),
        github: githubInput.trim(),
      });

      if (user?.uid) {
        try {
          localStorage.setItem(`hp_handles_skipped_${user.uid}`, 'true');
        } catch {}
      }

      setSuccessMessage('Profiles linked and scores updated successfully!');
      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err: any) {
      setErrorMessage(err?.message || 'Failed to sync profiles. Please verify the handles.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200 font-lexend">
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#0c1017] border border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 sm:p-8 text-zinc-900 dark:text-white space-y-6">
        {/* Close Button */}
        <button
          onClick={handleSkip}
          className="absolute right-5 top-5 p-2 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 text-center sm:text-left pr-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome Setup • Step 1 of 1</span>
          </div>
          <h2 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white">
            Connect Your Coding Profiles
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Link your LeetCode, CodeChef, and GitHub accounts to showcase live ratings, problem solving counts, and stars directly on your HackPath dashboard.
          </p>
        </div>

        {/* Status Alerts */}
        {errorMessage && (
          <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-semibold">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 1. LeetCode */}
          <div className="space-y-1.5">
            <label className="flex items-center justify-between text-xs font-bold text-zinc-700 dark:text-zinc-300">
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded bg-amber-500/15 text-amber-500 font-mono text-[10px] font-black flex items-center justify-center">
                  LC
                </span>
                <span>LeetCode Handle or URL</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-normal">Optional</span>
            </label>
            <input
              type="text"
              placeholder="e.g. tourist or https://leetcode.com/u/neal_wu/"
              value={leetcodeInput}
              onChange={(e) => setLeetcodeInput(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 font-mono"
            />
          </div>

          {/* 2. CodeChef */}
          <div className="space-y-1.5">
            <label className="flex items-center justify-between text-xs font-bold text-zinc-700 dark:text-zinc-300">
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded bg-amber-700/15 text-amber-600 font-mono text-[10px] font-black flex items-center justify-center">
                  CC
                </span>
                <span>CodeChef Username or URL</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-normal">Optional</span>
            </label>
            <input
              type="text"
              placeholder="e.g. tourist or https://www.codechef.com/users/tourist"
              value={codechefInput}
              onChange={(e) => setCodechefInput(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-600/50 font-mono"
            />
          </div>

          {/* 3. GitHub */}
          <div className="space-y-1.5">
            <label className="flex items-center justify-between text-xs font-bold text-zinc-700 dark:text-zinc-300">
              <span className="flex items-center gap-1.5">
                <Github className="w-4 h-4 text-zinc-900 dark:text-white" />
                <span>GitHub Username or URL</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-normal">Optional</span>
            </label>
            <input
              type="text"
              placeholder="e.g. torvalds or https://github.com/torvalds"
              value={githubInput}
              onChange={(e) => setGithubInput(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 font-mono"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <button
              type="button"
              onClick={handleSkip}
              disabled={isLoading}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-zinc-500 hover:text-zinc-800 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Skip for Now
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white text-xs font-bold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Fetching Scores...</span>
                </>
              ) : (
                <>
                  <span>Save &amp; Find Scores</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
