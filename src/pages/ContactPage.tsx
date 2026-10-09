import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

interface ContactPageProps {
  navigate: (to: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      setErrorMessage('Please enter your name.');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Message length validation: 10 to 2000 characters
    if (trimmedMessage.length < 10) {
      setErrorMessage('Message must be at least 10 characters long.');
      return;
    }
    if (trimmedMessage.length > 2000) {
      setErrorMessage('Message cannot exceed 2000 characters.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Save directly to Firestore collection "messages" with userAgent omitted
      await addDoc(collection(db, 'messages'), {
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
        createdAt: serverTimestamp(),
      });

      // Only show success state after write succeeds
      setSubmitted(true);
    } catch (err: any) {
      console.error('Error saving message to Firestore:', err);
      setErrorMessage(
        err?.message || 'Failed to send your message. Please check your network and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
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
              For real-time queries, job discussions, or quick feedback, join our community broadcast channel and Twitter group.
            </p>
            <div className="mt-3 space-y-2">
              <a
                href="https://www.instagram.com/channel/E1ynCd7tzuRxPBIm/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs font-semibold text-purple-500 hover:underline"
              >
                → Join Community
              </a>
              <a
                href="https://x.com/HackPath_in"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:underline"
              >
                → Follow @HackPath_in on X
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
                Thanks for reaching out, {formData.name}. Your message has been safely received and our team will get back to you at {formData.email}.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setErrorMessage(null);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="px-6 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-600 dark:text-zinc-400 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Rahul Verma"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errorMessage) setErrorMessage(null);
                  }}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6C47FF] disabled:opacity-60"
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
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errorMessage) setErrorMessage(null);
                  }}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6C47FF] disabled:opacity-60"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold uppercase text-zinc-600 dark:text-zinc-400">
                    Message
                  </label>
                  <span
                    className={`text-[11px] font-mono ${
                      formData.message.trim().length > 0 && formData.message.trim().length < 10
                        ? 'text-amber-500'
                        : 'text-zinc-400'
                    }`}
                  >
                    {formData.message.length} / 2000
                    {formData.message.trim().length > 0 && formData.message.trim().length < 10 && ' (min 10)'}
                  </span>
                </div>
                <textarea
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  placeholder="Tell us about the issue, resource suggestion, or feedback (10 to 2000 characters)..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errorMessage) setErrorMessage(null);
                  }}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6C47FF] disabled:opacity-60"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-xl bg-[#6C47FF] hover:bg-[#5b37ea] disabled:bg-[#6C47FF]/60 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-indigo-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
