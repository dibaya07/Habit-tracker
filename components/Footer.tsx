'use client';

import React from 'react';
import { MessageSquare, Heart } from 'lucide-react';
import { useHabitTracker } from '../lib/context/HabitTrackerContext';
import { SITE_CONFIG } from '../lib/data/site-config';

export const Footer: React.FC = () => {
  const { setIsFeedbackModalOpen } = useHabitTracker();

  return (
    <footer className="border-t border-slate-200 dark:border-emerald-900/30 bg-slate-50 dark:bg-[#06150f] text-slate-600 dark:text-slate-400 text-xs py-14 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-emerald-900/30">
          
          {/* Brand Info (Span 4) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-700 dark:text-[#2fe196] border border-emerald-500/20">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5 19 5 19s7-1 11-7c1.78-2.67 1.5-3.5 1-4z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white font-sans">Habitora</span>
            </div>

            <p className="text-xs text-slate-600 dark:text-emerald-200/60 max-w-sm leading-relaxed">
              {SITE_CONFIG.tagline} Simple, distraction-free habit tracking designed for clarity, consistency, and sustained progress.
            </p>

            <div>
              <button
                onClick={() => setIsFeedbackModalOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-slate-300 dark:border-emerald-800/40 text-slate-700 dark:text-emerald-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-emerald-900/30 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-[#2fe196]" />
                <span>Send Feedback or Suggestion</span>
              </button>
            </div>
          </div>

          {/* Links Columns (Span 8) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-emerald-300">
                Product
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-emerald-100/70">
                <li><a href="#tracker" className="hover:text-emerald-700 dark:hover:text-[#2fe196] transition-colors">Habit Tracker</a></li>
                <li><a href="#analytics" className="hover:text-emerald-700 dark:hover:text-[#2fe196] transition-colors">Progress Analytics</a></li>
                <li><a href="#print" className="hover:text-emerald-700 dark:hover:text-[#2fe196] transition-colors">Printable Sheets (A4/A5)</a></li>
                <li><a href="#pricing" className="hover:text-emerald-700 dark:hover:text-[#2fe196] transition-colors">Pricing Plans</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-emerald-300">
                Resources
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-emerald-100/70">
                <li><a href="#how-it-works" className="hover:text-emerald-700 dark:hover:text-[#2fe196] transition-colors">How to Use</a></li>
                <li><a href="#faq" className="hover:text-emerald-700 dark:hover:text-[#2fe196] transition-colors">FAQ</a></li>
                <li><a href="#features" className="hover:text-emerald-700 dark:hover:text-[#2fe196] transition-colors">Core Features</a></li>
                <li><a href="#tracker" className="hover:text-emerald-700 dark:hover:text-[#2fe196] transition-colors">Challenge Presets</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-emerald-300">
                Habitora
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-emerald-100/70">
                <li><span className="cursor-default">Privacy Centric</span></li>
                <li><span className="cursor-default">Offline-Friendly</span></li>
                <li><span className="cursor-default">No Telemetry / No Ads</span></li>
                <li><span className="cursor-default">Made with Care</span></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 dark:text-emerald-300/60 text-[11px]">
          <p>© {new Date().getFullYear()} Habitora. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for mindful productivity and daily consistency.
          </p>
        </div>

      </div>
    </footer>
  );
};
