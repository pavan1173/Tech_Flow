import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

interface ContactPageProps {
  navigate: (to: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-10 font-lexend">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto pt-6 space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C47FF] dark:text-[#9c81ff]">
          <MessageSquare className="w-3.5 h-3.5" />
          Get In Touch
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
          Contact Us
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          Have a question, feedback, feature request, or need assistance? Drop us a message below and we'll get back to you soon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Direct Info */}
        <div className="p-6 rounded-3xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase text-zinc-400 tracking-wider">
              Email Us Directly
            </span>
            <div className="flex items-center gap-2 mt-2 text-sm font-semibold text-zinc-900 dark:text-white">
              <Mail className="w-4 h-4 text-[#6C47FF]" />
              <a href="mailto:support@hackpath.in" className="hover:underline">
                support@hackpath.in
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <span className="text-xs font-bold uppercase text-zinc-400 tracking-wider">
              Community Channels
            </span>
            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
              For real-time queries, job discussions, or quick feedback, join our WhatsApp and Twitter community groups.
            </p>
            <div className="mt-3 space-y-2">
              <a
                href="https://chat.whatsapp.com/KBIk0COfdZSDenWJN9xWmN?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs font-semibold text-emerald-500 hover:underline"
              >
                → Join WhatsApp Community
              </a>
              <a
                href="https://x.com/TeachFlow_in"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:underline"
              >
                → Follow @TeachFlow_in on X
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4 flex flex-col items-center">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Message Received!
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-sm">
                Thanks for reaching out, {formData.name}. Our technical team will review your message and reply via {formData.email} within 24-48 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="px-6 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-600 dark:text-zinc-400 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Rahul Verma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6C47FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-600 dark:text-zinc-400 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="rahul@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6C47FF]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold uppercase text-zinc-600 dark:text-zinc-400">
                    Message
                  </label>
                  <span className="text-[11px] text-zinc-400">
                    {formData.message.length} / 500
                  </span>
                </div>
                <textarea
                  required
                  maxLength={500}
                  rows={5}
                  placeholder="Tell us about the issue, resource suggestion, or feedback..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6C47FF]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-[#6C47FF] hover:bg-[#5b37ea] text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-indigo-500/20 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
