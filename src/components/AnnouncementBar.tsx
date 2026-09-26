import React, { useState } from 'react';
import { Sparkles, X, CheckCircle, ArrowRight } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setJoined(true);
    setTimeout(() => {
      setShowWaitlist(false);
      setJoined(false);
      setEmail('');
    }, 2500);
  };

  if (dismissed) return null;

  return (
    <>
      <aside
        aria-label="Special Announcement"
        className="bg-[#FFE500] text-black text-xs md:text-sm font-medium py-2 px-4 text-center flex items-center justify-center relative z-40"
      >
        <div className="flex items-center gap-1.5 font-bold tracking-tight">
          <span>💎</span>
          <span>TeachFlow Gold Mine — Launching Soon.</span>
          <button
            onClick={() => setShowWaitlist(true)}
            className="underline font-bold hover:opacity-80 transition-opacity cursor-pointer ml-1"
          >
            Join the Waitlist!
          </button>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:opacity-70 p-1 text-sm font-bold"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </aside>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl relative text-zinc-900 dark:text-white">
            <button
              onClick={() => setShowWaitlist(false)}
              className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {joined ? (
              <div className="py-8 text-center flex flex-col items-center">
                <CheckCircle className="w-14 h-14 text-emerald-500 mb-4 animate-bounce" />
                <h3 className="text-xl font-bold mb-2">You are on the TeachFlow Waitlist!</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  We'll notify you the moment TeachFlow Gold Mine unlocks. Get ready for 500+ premium company OA questions & mock simulations.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2 text-indigo-500 font-semibold text-xs tracking-wider uppercase">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Exclusive Early Access
                </div>
                <h3 className="text-2xl font-bold font-lexend tracking-tight mb-2">
                  Join TeachFlow Gold Mine
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  Get priority beta access to real company OA archives, daily mock round simulations, verified compensation guides, and 1-on-1 interview feedback.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex.developer@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-[#6C47FF] hover:bg-[#5b37ea] text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
                  >
                    <span>Reserve My VIP Spot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-zinc-400">
                    No spam ever. 100% free early cohort registration.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
