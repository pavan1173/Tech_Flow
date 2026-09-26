import React from 'react';

interface FooterProps {
  navigate: (to: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-900 py-12 font-lexend transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleNav(e, '/')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 via-indigo-600 to-fuchsia-600 p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-zinc-950 rounded-[6px] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14.5L12 3l8 11.5" />
                  <path d="M12 21V9" />
                  <circle cx="12" cy="9" r="1.5" fill="currentColor" />
                </svg>
              </div>
            </div>
            <span className="font-lexend font-black text-xl text-white tracking-tight">
              TeachFlow
            </span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs md:text-sm text-zinc-400">
            <a
              href="/about"
              onClick={(e) => handleNav(e, '/about')}
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <span className="text-zinc-800">|</span>
            <a
              href="/contact"
              onClick={(e) => handleNav(e, '/contact')}
              className="hover:text-white transition-colors"
            >
              Contact us
            </a>
            <span className="text-zinc-800">|</span>
            <a
              href="/privacy"
              onClick={(e) => handleNav(e, '/privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-zinc-800">|</span>
            <a
              href="/terms"
              onClick={(e) => handleNav(e, '/terms')}
              className="hover:text-white transition-colors"
            >
              Terms and Conditions
            </a>
            <span className="text-zinc-800">|</span>
            <a
              href="/refund-policy"
              onClick={(e) => handleNav(e, '/refund-policy')}
              className="hover:text-white transition-colors"
            >
              Cancellation and Refund Policy
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/TeachFlow_in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Instagram / Social"
            >
              <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://x.com/TeachFlow_in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="X (formerly Twitter)"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-zinc-500 italic pt-6 border-t border-zinc-900/80">
          Copyright © 2026 TeachFlow | All rights reserved
        </div>
      </div>
    </footer>
  );
};
