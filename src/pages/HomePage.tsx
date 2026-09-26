import React, { useState } from 'react';
import { faqData, testimonialsData } from '../data/common';
import {
  ArrowRight,
  Code2,
  Building,
  Terminal,
  Database,
  Layers,
  FileText,
  Mail,
  HelpCircle,
  Sparkles,
  ChevronDown,
  Star,
  Users,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  navigate: (to: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const [activeFaqCategory, setActiveFaqCategory] = useState(faqData[0]?.category || 'Features & Functionality');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  const featureCards = [
    {
      title: 'Curated DSA Sheets',
      desc: 'Practice with sheets from Striver, Love Babbar, Shradha Didi and more — all curated in one place so you never waste time searching.',
      href: '/preparation/dsa-sheets',
      icon: Code2,
      tag: '7+ Sheets',
      color: 'from-blue-500/20 to-indigo-500/10'
    },
    {
      title: 'Company-Wise DSA Sets',
      desc: 'Target your dream company with DSA sheets curated for 45+ top tech companies like Google, Meta, Microsoft, Amazon and more.',
      href: '/preparation/company-wise-dsa-sheet',
      icon: Building,
      tag: '45+ Companies',
      color: 'from-purple-500/20 to-pink-500/10'
    },
    {
      title: 'Role-Wise Question Banks',
      desc: 'Frontend, Backend, Fullstack, Mobile, DevOps, AI/ML — get comprehensive interview questions organized by your exact target role, not generic lists.',
      href: '/preparation/role-wise',
      icon: Terminal,
      tag: 'Role Specific',
      color: 'from-emerald-500/20 to-teal-500/10'
    },
    {
      title: '20 Essential DSA Patterns',
      desc: 'Master pattern recognition — Two Pointers, Sliding Window, Fast & Slow Pointers, Monotonic Stack, Backtracking, and DP archetypes.',
      href: '/preparation/20-essential-dsa-patterns',
      icon: Sparkles,
      tag: 'Core Patterns',
      color: 'from-amber-500/20 to-orange-500/10'
    },
    {
      title: 'Top 110 SQL Interview Queries',
      desc: 'Master every SQL concept interviewers love — SELECT, JOINs, subqueries, aggregations, window functions — with code explanations built in.',
      href: '/preparation/sql-sheet',
      icon: Database,
      tag: '110 Queries',
      color: 'from-cyan-500/20 to-blue-500/10'
    },
    {
      title: 'System Design Hub',
      desc: 'Learn HLD and LLD from Gaurav Sen, Exponent, Code Aryan, and real-world architectures (Rate Limiter, URL Shortener, Distributed Cache).',
      href: '/preparation/system-design-sheet',
      icon: Layers,
      tag: 'HLD + LLD',
      color: 'from-rose-500/20 to-red-500/10'
    },
    {
      title: 'Cool Notes & Cheat Sheets',
      desc: 'Computer Networks, DBMS, Operating Systems, OOPs, Java, Python — concise revision sheets ready to read anytime, no downloading required.',
      href: '/preparation/notes',
      icon: FileText,
      tag: '26 Notes',
      color: 'from-emerald-500/20 to-green-500/10'
    },
    {
      title: 'Cold Email & Outreach Templates',
      desc: 'Professional email templates for job referrals, recruiter outreach, and LinkedIn messages — tailored for React, Node, Fullstack, and Data engineers.',
      href: '/preparation/cold-email-templets',
      icon: Mail,
      tag: '11 Categories',
      color: 'from-violet-500/20 to-purple-500/10'
    }
  ];

  const currentQuestions = faqData.find((c: any) => c.category === activeFaqCategory)?.questions || [];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 font-lexend selection:bg-[#6C47FF] selection:text-white transition-colors duration-200">
      {/* ── HERO SECTION ── */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden border-b border-zinc-200 dark:border-zinc-800/80">
        {/* Ambient Gradient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#6C47FF]/20 via-indigo-500/15 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Social Proof Counter */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-xs md:text-sm font-medium text-zinc-600 dark:text-zinc-300 mb-8 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Used by <strong className="text-zinc-900 dark:text-white font-semibold">1 million+</strong> users to prepare for interviews</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-6">
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C47FF] via-indigo-500 to-violet-400 underline decoration-indigo-400/40 decoration-wavy">UNFAIR</span> Advantage <br className="hidden sm:block" />
            For Tech Interviews
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            TeachFlow gives you everything to crack tech interviews — real job openings, genuine interview experiences, and preparation resources, all in one place.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/preparation"
              onClick={(e) => handleNav(e, '/preparation')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#6C47FF] hover:bg-[#5b37ea] text-white font-semibold text-base transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <span>Explore Preparation</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="https://chat.whatsapp.com/KBIk0COfdZSDenWJN9xWmN?mode=wwt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-base border border-zinc-200 dark:border-zinc-800 transition-all flex items-center justify-center gap-2"
            >
              <span>Join WhatsApp Community</span>
              <ExternalLink className="w-4 h-4 text-emerald-500" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ("Your Unfair Advantage Starts Here") ── */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            TeachFlow Career Toolkit
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
            Your Unfair Advantage Starts Here
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Ditch the scattered tabs, unorganized directories, and endless bookmark lists. TeachFlow gathers high-quality sheets, targeted company queries, role-wise roadmaps, and ready-to-use developer templates into one cohesive dashboard built for placement success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                onClick={(e) => handleNav(e, card.href)}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-50/70 dark:bg-zinc-950/70 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-xl hover:shadow-indigo-500/5 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#6C47FF]/10 text-[#6C47FF] dark:text-[#9f85ff] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-[#6C47FF] dark:group-hover:text-[#9f85ff] transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs font-semibold text-[#6C47FF] dark:text-[#9f85ff]">
                  <span>Explore resource</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* ── FOUNDER / CREATOR STORY ("One Of You, Who Built This For You") ── */}
      <section className="py-20 bg-zinc-50/60 dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#6C47FF]/10 to-transparent blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 p-1 shrink-0 shadow-lg">
                <img
                  src="https://api.dicebear.com/8.x/bottts/svg?seed=TeachFlowEngineer&backgroundColor=6366f1"
                  alt="TeachFlow Creator"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff]">
                  Behind TeachFlow
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
                  One Of You, Who Built This For You
                </h2>
                <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-medium">
                  <span>Founder &amp; Engineering Team</span>
                  <span>·</span>
                  <span>Software Engineers</span>
                  <span>·</span>
                  <span className="text-emerald-500 font-semibold">100% Free Forever</span>
                </div>
              </div>
            </div>

            <blockquote className="border-l-4 border-[#6C47FF] pl-4 italic text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-medium mb-6">
              "Your first offer letter is our biggest achievement."
            </blockquote>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              We started TeachFlow with a simple mission. During college and early career placement seasons, we spent countless evenings and weekends frustrated by scattered bookmarks, outdated PDFs, paywalled DSA problem lists, and generic prep tips.
            </p>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Remember: <strong className="text-zinc-900 dark:text-white font-semibold">You don't need a tier-1 college to land your dream engineering job.</strong> You just need the right direction, discipline, and the courage to keep going. Let's crack it together, one problem, one pattern, one offer at a time.
            </p>

            <a
              href="/preparation"
              onClick={(e) => handleNav(e, '/preparation')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6C47FF] hover:bg-[#5b37ea] text-white font-semibold text-sm transition-all shadow-md shadow-indigo-500/20"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS MARQUEE ("Students who cracked it with TeachFlow") ── */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Students who cracked it <br />
            <span className="text-zinc-400 dark:text-zinc-500">with TeachFlow</span>
          </h2>
        </div>

        {/* Marquee Row */}
        <div className="relative overflow-hidden w-full">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />

          <div className="animate-marquee-left flex gap-6">
            {[...testimonialsData, ...testimonialsData].map((item: any, idx: number) => (
              <div
                key={`${item.name}-${idx}`}
                className="flex-shrink-0 w-[360px] bg-zinc-50/70 dark:bg-zinc-950/70 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm hover:scale-[1.01] hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full bg-zinc-100 flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                        {item.name}
                      </p>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed italic mb-4">
                    "{item.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs">
                  <span className="text-zinc-500 font-medium">{item.role}</span>
                  <span className="font-bold text-zinc-900 dark:text-white px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800">
                    {item.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-20 md:py-28 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-950/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Everything you need to know about TeachFlow, resources, and career prep.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {faqData.map((cat: any) => (
              <button
                key={cat.category}
                onClick={() => {
                  setActiveFaqCategory(cat.category);
                  setOpenFaqIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                  activeFaqCategory === cat.category
                    ? 'bg-[#6C47FF] text-white shadow-md shadow-indigo-500/20'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Questions Accordion */}
          <div className="bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-6 shadow-sm divide-y divide-zinc-200 dark:divide-zinc-800">
            {currentQuestions.map((q: any, idx: number) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={q.question} className="py-4 first:pt-0 last:pb-0">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 hover:text-[#6C47FF] dark:hover:text-[#9c81ff] transition-colors"
                  >
                    <span>{q.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#6C47FF]' : 'text-zinc-400'
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pr-6 animate-in fade-in duration-150">
                      {q.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-700 p-8 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 relative z-10">
            Ready to Crack Your Dream Tech Role?
          </h2>
          <p className="text-sm sm:text-base text-indigo-100 max-w-2xl mx-auto mb-8 relative z-10">
            Join thousands of developers using TeachFlow's verified problem sets, patterns, and roadmaps to land their highest-paying offers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a
              href="/preparation"
              onClick={(e) => handleNav(e, '/preparation')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-zinc-900 font-bold text-sm transition-all hover:bg-zinc-100 shadow-lg hover:scale-105"
            >
              Go To Preparation Hub
            </a>
            <a
              href="https://chat.whatsapp.com/KBIk0COfdZSDenWJN9xWmN?mode=wwt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-indigo-900/60 hover:bg-indigo-900 text-white font-semibold text-sm border border-indigo-400/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Join WhatsApp Community</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
