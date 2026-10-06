'use client';

import React, { useState } from 'react';
import { X, Star, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useHabitTracker } from '../../lib/context/HabitTrackerContext';

export const FeedbackModal: React.FC = () => {
  const { isFeedbackModalOpen, setIsFeedbackModalOpen, submitFeedback, user } = useHabitTracker();

  const [category, setCategory] = useState<'feedback' | 'suggestion' | 'bug' | 'feature'>('suggestion');
  const [rating, setRating] = useState<number>(5);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState(user?.email || '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isFeedbackModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    submitFeedback({
      category,
      rating,
      message: message.trim(),
      userEmail: email.trim() || undefined,
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsFeedbackModalOpen(false);
      setMessage('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-800/60 p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-200 dark:border-emerald-900/50 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-[#2fe196] flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-semibold tracking-widest text-emerald-700 dark:text-[#2fe196] uppercase block">
                COMMUNITY VOICE
              </span>
              <h3 className="font-editorial text-xl font-normal text-slate-900 dark:text-white">
                Share Feedback & Suggestions
              </h3>
            </div>
          </div>
          <button
            onClick={() => setIsFeedbackModalOpen(false)}
            className="p-2 rounded-full text-slate-400 hover:text-slate-900 dark:text-emerald-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-emerald-900/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-3 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-[#2fe196] border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Thank You!</h4>
            <p className="text-xs text-slate-600 dark:text-emerald-200">
              Your feedback helps shape the future of Habitora.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Category selection */}
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200 block mb-1.5 uppercase tracking-wider">
                Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'feedback', label: 'Feedback' },
                  { id: 'suggestion', label: 'Suggestion' },
                  { id: 'feature', label: 'Feature Idea' },
                  { id: 'bug', label: 'Bug Report' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCategory(item.id as any)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold border text-center transition-all ${
                      category === item.id
                        ? 'bg-[#2fe196] text-[#071912] border-[#2fe196]'
                        : 'bg-slate-100 dark:bg-emerald-950/60 border-slate-200 dark:border-emerald-900/40 text-slate-700 dark:text-emerald-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Star Rating */}
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200 block mb-1.5 uppercase tracking-wider">
                Experience Rating
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setRating(s)}
                    className="p-1 text-slate-300 dark:text-emerald-900 hover:text-amber-400 transition-colors"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        s <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-emerald-900'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs text-slate-600 dark:text-emerald-400 ml-2 font-mono">{rating} / 5 stars</span>
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200 block mb-1.5 uppercase tracking-wider">
                Your Thoughts
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What can we improve? What features would make Habitora even better for you?"
                className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-emerald-950/70 border border-slate-300 dark:border-emerald-800/50 text-slate-900 dark:text-white text-xs leading-relaxed focus:outline-none focus:border-[#2fe196]"
              />
            </div>

            {/* Optional Email */}
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200 block mb-1.5 uppercase tracking-wider">
                Your Email (Optional, for follow-up)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-emerald-950/70 border border-slate-300 dark:border-emerald-800/50 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-[#2fe196]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full text-xs font-bold bg-[#2fe196] text-[#071912] hover:bg-[#28cf88] shadow-md transition-all active:scale-[0.98]"
            >
              Submit Feedback
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
