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
          <p className="text-xs text-zinc-400 mt-1">Last updated: October 6, 2026</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">1. Introduction</h2>
            <p>
              Welcome to HackPath. We built this platform to give developers, students, and engineers 100% free, high-yield tools to prepare for technical interviews. This policy explains what information we collect, where it is stored, how it is used, and how you stay in complete control of your data. We believe in plain language and zero legal confusion.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">2. Data We Collect</h2>
            <p>We only collect information necessary to save your progress, personalize your experience, and provide account access:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-600 dark:text-zinc-400">
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">Account Credentials:</strong> Your name, email address, profile picture (avatar), and authentication provider (e.g., Google OAuth or email sign-in).
              </li>
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">Optional Profile Information:</strong> Details you voluntarily add to your profile, such as your handle, current role, bio, college or university, graduation year, contact phone number, target dream companies, target compensation, and portfolio/social links (GitHub, LinkedIn, Instagram, LeetCode, CodeChef).
              </li>
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">Learning Progress &amp; Content:</strong> Problems you have marked as solved, questions you have bookmarked, personal study notes you write on problems or lectures, completed roadmap steps, and consistency streak dates.
              </li>
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">Session Activity:</strong> Login timestamps and login counts to help safeguard account security and maintain audit logs.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">3. Where Your Data Is Stored</h2>
            <p>Your information is stored using reliable, industry-standard infrastructure:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-600 dark:text-zinc-400">
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">Google Firebase Authentication &amp; Firestore:</strong> Your account identity, profile details, and learning progress documents are stored securely in Google Cloud Firebase Auth and Cloud Firestore. Access is restricted so only your authenticated account can access and update your private data.
              </li>
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">Browser Local Storage:</strong> We also cache your progress, custom roadmap checks, and theme settings directly in your browser's local storage (<code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-[11px]">localStorage</code>). This ensures the app loads instantly, works offline, and keeps your interface fast and responsive.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">4. Third-Party Services</h2>
            <p>We work with a minimal set of third parties strictly to run the platform:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-600 dark:text-zinc-400">
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">Google Firebase:</strong> Used for secure user authentication and cloud database persistence.
              </li>
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">Google Fonts:</strong> Used to load clean, readable web typography.
              </li>
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">Public Coding Platform APIs (GitHub, LeetCode, CodeChef):</strong> When you choose to sync your competitive coding handles, our services query public profile statistics on those platforms to display your problem totals. We never access private repositories or passwords.
              </li>
            </ul>
            <p className="pt-1">
              External problem links (such as LeetCode, GeeksforGeeks, or YouTube video playlists) point to third-party sites whose privacy practices are governed by their respective platforms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">5. Your Rights: Access, Correction &amp; Deletion</h2>
            <p>You have full ownership and control over your personal data:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-600 dark:text-zinc-400">
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">Access:</strong> You can view all your stored profile information and question progress at any time directly in your Profile and Dashboard.
              </li>
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">Correction:</strong> You can edit and update your name, handles, links, and profile details whenever you like inside the Profile editor.
              </li>
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">Deletion:</strong> If you wish to delete your account, your progress, or any personal data completely, email us at <a href="mailto:support@hackpath.in" className="text-[#6C47FF] dark:text-[#9c81ff] font-semibold underline">support@hackpath.in</a> with your registered email. We will delete all your records from Firebase Firestore and confirm your request promptly.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">6. Data Retention</h2>
            <p>
              We retain your account profile and problem-solving data for as long as you keep your account active so your preparation streak and notes are ready whenever you return. If you request account deletion or if an account is closed, your personal documents in Firestore are permanently removed. You can also clear your browser cache anytime to remove local offline copies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">7. Children's Data &amp; Age Eligibility</h2>
            <p>
              HackPath is intended for users who are at least 18 years old, or students who use the platform with the consent and supervision of a parent or legal guardian. We do not knowingly collect personal information from individuals under the age of 13. If you believe a child has provided us with personal data without proper consent, please contact us at <a href="mailto:support@hackpath.in" className="text-[#6C47FF] dark:text-[#9c81ff] font-semibold underline">support@hackpath.in</a> so we can remove the data immediately.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">8. Contact Us</h2>
            <p>
              Have questions, feedback, or data requests? Drop us a line anytime at <a href="mailto:support@hackpath.in" className="text-[#6C47FF] dark:text-[#9c81ff] font-semibold underline">support@hackpath.in</a> or visit our <a href="/contact" className="text-[#6C47FF] dark:text-[#9c81ff] font-semibold underline">Contact Us</a> page.
            </p>
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
            <p>By accessing or using HackPath.in, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the platform.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">2. About HackPath</h2>
            <p>HackPath is a free educational platform designed to help students, developers, and job seekers prepare for tech interviews. We provide curated DSA sheets, system design resources, core CS subject content, company-wise interview question sheets, and preparation toolkits.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">3. Free Platform</h2>
            <p>HackPath is completely free to use. We do not charge subscription fees for any standard curriculum resources.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">4. Intellectual Property</h2>
            <p>The compilation, branding, UI design, and original sheets of HackPath are protected by copyright. Open-source external links (LeetCode, GFG, educator videos) belong to their respective creators and owners.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">5. Limitation of Liability</h2>
            <p>HackPath is provided on an "as is" and "as available" basis without warranties of any kind. We do not guarantee employment or specific interview outcomes.</p>
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
          <p>HackPath.in is a completely free community platform. We do not charge any fees, subscriptions, or payments for any of our services, core sheets, or preparatory content.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-zinc-900 dark:text-white">2. No Cancellation Policy Needed</h2>
          <p>Since there are no paid plans or subscriptions on HackPath, there is nothing to cancel. You can stop using the platform at any time without any obligation.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-zinc-900 dark:text-white">3. No Refund Policy</h2>
          <p>Since HackPath does not collect any payments, there is no refund policy applicable. No money is charged, and therefore no refund requests are processed.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-zinc-900 dark:text-white">4. Inquiries</h2>
          <p>If you have any questions or require clarification regarding our policies, please contact support@hackpath.in.</p>
        </section>
      </div>
    </div>
  );
};
