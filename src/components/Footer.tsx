import React from 'react';
import { TeachFlowLogo } from './TeachFlowLogo';

const INSTAGRAM_URL = 'https://www.instagram.com/tech_by.pavan/';
const HACKPATH_X_HANDLE_URL = 'https://x.com/HackPath_in';

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
            className="flex items-center group cursor-pointer"
          >
            <TeachFlowLogo size={34} showText={true} />
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
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Instagram (@tech_by.pavan)"
            >
              <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href={HACKPATH_X_HANDLE_URL}
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

        {/* Developer Attribution & Copyright */}
        <div className="pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span>Designed &amp; Developed with <span className="text-red-500">❤️</span> by</span>
            <a
              href="https://www.instagram.com/tech_by.pavan/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-zinc-300 hover:text-amber-400 transition-colors inline-flex items-center gap-1 font-mono"
            >
              <span>Pavan Kumar</span>
              <span className="text-blue-400">(@tech_by.pavan)</span>
            </a>
          </div>

          <div className="italic">
            Copyright © 2026 HackPath | All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
