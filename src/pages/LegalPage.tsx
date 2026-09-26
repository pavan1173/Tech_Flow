import React from 'react';
import { ShieldCheck, FileCheck, HelpCircle } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'refund-policy';
  navigate: (to: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  if (type === 'privacy') {
    return (
      <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-8 font-lexend">
        <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff] mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Legal &amp; Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-zinc-400 mt-1">Effective Date: 2026</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">1. Introduction</h2>
            <p>Welcome to TeachFlow.in. We are committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our platform.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">2. Information We Collect</h2>
            <p>TeachFlow does not collect or store any personal sensitive data on our servers. Your progress, checklist state, and activity logs are stored locally in your browser via localStorage, not on our remote database.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">3. How We Use Your Information</h2>
            <p>We use local data solely to maintain your streak calculation, problem completion tracking, and UI theme preferences. We never sell, rent, or trade your data.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">4. Third-Party Links</h2>
            <p>TeachFlow provides links to external websites such as LeetCode, GeeksforGeeks, YouTube, and Overleaf. We are not responsible for the privacy practices of these third-party services.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at support@TeachFlow.in.</p>
          </section>
        </div>
      </div>
    );
  }

  if (type === 'terms') {
    return (
      <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-8 font-lexend">
        <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff] mb-2">
            <FileCheck className="w-3.5 h-3.5" />
            Terms of Service
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
            Terms and Conditions
          </h1>
          <p className="text-xs text-zinc-400 mt-1">Effective Date: 2026</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">1. Acceptance of Terms</h2>
            <p>By accessing or using TeachFlow.in, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the platform.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">2. About TeachFlow</h2>
            <p>TeachFlow is a free educational platform designed to help students, developers, and job seekers prepare for tech interviews. We provide curated DSA sheets, system design resources, core CS subject content, company-wise interview question sheets, and preparation toolkits.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">3. Free Platform</h2>
            <p>TeachFlow is completely free to use. We do not charge subscription fees for any standard curriculum resources.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">4. Intellectual Property</h2>
            <p>The compilation, branding, UI design, and original sheets of TeachFlow are protected by copyright. Open-source external links (LeetCode, GFG, educator videos) belong to their respective creators and owners.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">5. Limitation of Liability</h2>
            <p>TeachFlow is provided on an "as is" and "as available" basis without warranties of any kind. We do not guarantee employment or specific interview outcomes.</p>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-8 font-lexend">
      <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff] mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          Consumer Protection
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
          Cancellation and Refund Policy
        </h1>
        <p className="text-xs text-zinc-400 mt-1">Effective Date: 2026</p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-zinc-900 dark:text-white">1. No Payment Required</h2>
          <p>TeachFlow.in is a completely free community platform. We do not charge any fees, subscriptions, or payments for any of our services, core sheets, or preparatory content.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-zinc-900 dark:text-white">2. No Cancellation Policy Needed</h2>
          <p>Since there are no paid plans or subscriptions on TeachFlow, there is nothing to cancel. You can stop using the platform at any time without any obligation.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-zinc-900 dark:text-white">3. No Refund Policy</h2>
          <p>Since TeachFlow does not collect any payments, there is no refund policy applicable. No money is charged, and therefore no refund requests are processed.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-zinc-900 dark:text-white">4. Inquiries</h2>
          <p>If you have any questions or require clarification regarding our policies, please contact support@TeachFlow.in.</p>
        </section>
      </div>
    </div>
  );
};
