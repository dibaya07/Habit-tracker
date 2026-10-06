'use client';

import React from 'react';
import { ArrowRight, Play, Calendar, CheckSquare, BarChart2, Heart } from 'lucide-react';
import { useHabitTracker } from '../lib/context/HabitTrackerContext';
import { SITE_CONFIG } from '../lib/data/site-config';

export const HeroSection: React.FC = () => {
  // const { setIsCreateModalOpen } = useHabitTracker();

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
      {/* Botanical Eucalyptus Branch Motifs - Realistic soft leaves entering from corners */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-8 -left-12 w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[420px] opacity-40 dark:opacity-25 filter blur-[0.6px] select-none z-0"
      >
        {/* <svg viewBox="0 0 300 400" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-20 40 Q 60 120 180 320" stroke="#3b5e4c" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
          <path d="M70 140 Q 140 180 220 230" stroke="#3b5e4c" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
          <path d="M120 220 Q 180 270 250 330" stroke="#3b5e4c" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          
          <ellipse cx="60" cy="90" rx="35" ry="18" transform="rotate(-35 60 90)" fill="#446d57" opacity="0.75" />
          <ellipse cx="90" cy="130" rx="38" ry="20" transform="rotate(-20 90 130)" fill="#4d7861" opacity="0.8" />
          <ellipse cx="40" cy="150" rx="32" ry="18" transform="rotate(-55 40 150)" fill="#395c4a" opacity="0.7" />
          
          <ellipse cx="140" cy="180" rx="42" ry="22" transform="rotate(-15 140 180)" fill="#54826a" opacity="0.85" />
          <ellipse cx="190" cy="220" rx="38" ry="19" transform="rotate(-10 190 220)" fill="#46725b" opacity="0.75" />
          <ellipse cx="110" cy="240" rx="36" ry="18" transform="rotate(-40 110 240)" fill="#3d634f" opacity="0.7" />

          <ellipse cx="170" cy="280" rx="36" ry="19" transform="rotate(-25 170 280)" fill="#4a765e" opacity="0.75" />
          <ellipse cx="230" cy="320" rx="34" ry="17" transform="rotate(-15 230 320)" fill="#598971" opacity="0.8" />
        </svg> */}
      </div>

      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-8 -right-12 w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[420px] opacity-40 dark:opacity-25 filter blur-[0.6px] select-none z-0 transform scale-x-[-1]"
      >
        {/* <svg viewBox="0 0 300 400" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-20 40 Q 60 120 180 320" stroke="#3b5e4c" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
          <path d="M70 140 Q 140 180 220 230" stroke="#3b5e4c" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
          
          <ellipse cx="60" cy="90" rx="35" ry="18" transform="rotate(-35 60 90)" fill="#446d57" opacity="0.75" />
          <ellipse cx="90" cy="130" rx="38" ry="20" transform="rotate(-20 90 130)" fill="#4d7861" opacity="0.8" />
          <ellipse cx="40" cy="150" rx="32" ry="18" transform="rotate(-55 40 150)" fill="#395c4a" opacity="0.7" />
          <ellipse cx="140" cy="180" rx="42" ry="22" transform="rotate(-15 140 180)" fill="#54826a" opacity="0.85" />
          <ellipse cx="190" cy="220" rx="38" ry="19" transform="rotate(-10 190 220)" fill="#46725b" opacity="0.75" />
          <ellipse cx="160" cy="280" rx="36" ry="18" transform="rotate(-25 160 280)" fill="#4a765e" opacity="0.75" />
        </svg> */}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow Tag: SMALL STEPS. BIG CHANGES. */}
        <div className="inline-block mb-5">
          <span className="text-xs sm:text-[13px] font-semibold tracking-[0.25em] text-[#2d6a4f] dark:text-[#2fe196] uppercase">
            {SITE_CONFIG.heroTagline}
          </span>
        </div>

        {/* Serif Headline: Build Better Habits. \n One Day at a Time. */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-[68px] lg:text-[76px] font-normal tracking-tight text-[#123524] dark:text-white leading-[1.08] mb-6 max-w-4xl mx-auto text-balance">
          Track Your Habits and Improve.
          <br />
          One Day at a Time.
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-emerald-100/75 max-w-xl mx-auto leading-relaxed mb-9 font-normal">
          {SITE_CONFIG.heroDescription}
        </p>

        {/* CTA Buttons */}
        <div className="relative inline-flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            {/* Get Started -> Button */}
            <button
              // onClick={() => setIsCreateModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-medium bg-[#183f2e] hover:bg-[#123325] text-white shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* How It Works Button */}
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-medium border border-slate-300 dark:border-emerald-800/60 bg-white dark:bg-[#091f17] text-slate-800 dark:text-emerald-100 hover:bg-slate-50 dark:hover:bg-emerald-950/60 transition-all duration-200 shadow-2xs"
            >
              <div className="w-5 h-5 rounded-full border border-slate-400 dark:border-emerald-400 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 text-[#183f2e] dark:text-[#2fe196] fill-[#183f2e] dark:fill-[#2fe196] translate-x-0.5" />
              </div>
              <span>How It Works</span>
            </a>
          </div>

          {/* Sketched handwritten note & curved arrow: Less stress, More progress. */}
          <div className="mt-4 flex flex-col items-center sm:items-start sm:absolute sm:top-14 sm:left-full sm:ml-4 select-none pointer-events-none text-left">
            <svg
              className="w-8 h-8 text-[#2d6a4f] dark:text-[#2fe196] -rotate-12 mb-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M19 5 C15 15, 8 16, 5 19" />
              <path d="M10 19 L5 19 L6 14" />
            </svg>
            <div className="font-script text-base sm:text-lg text-[#2d6a4f] dark:text-[#2fe196] leading-tight rotate-[-4deg] -mt-1 whitespace-nowrap">
              <span>Less stress,</span>
              <br />
              <span>More progress.</span>
            </div>
          </div>
        </div>

        {/* 4 Feature Highlights Row (Exact Match to Screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 mt-20 sm:mt-24 text-left">
          
          {/* 1. Custom Time Periods */}
          <div className="space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#eaf3ed] dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center text-[#2d6a4f] dark:text-[#2fe196]">
              <Calendar className="w-5 h-5 stroke-[1.8]" />
            </div>
            <h3 className="font-bold text-[#123524] dark:text-white text-base">
              Custom Time Periods
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-emerald-100/70 leading-relaxed">
              Choose from preset options or set your own date range.
            </p>
          </div>

          {/* 2. Track Your Habits */}
          <div className="space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#eaf3ed] dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center text-[#2d6a4f] dark:text-[#2fe196]">
              <CheckSquare className="w-5 h-5 stroke-[1.8]" />
            </div>
            <h3 className="font-bold text-[#123524] dark:text-white text-base">
              Track Your Habits
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-emerald-100/70 leading-relaxed">
              Mark your daily progress with a simple, clean interface.
            </p>
          </div>

          {/* 3. Get Insights */}
          <div className="space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#eaf3ed] dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center text-[#2d6a4f] dark:text-[#2fe196]">
              <BarChart2 className="w-5 h-5 stroke-[1.8]" />
            </div>
            <h3 className="font-bold text-[#123524] dark:text-white text-base">
              Get Insights
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-emerald-100/70 leading-relaxed">
              See your progress with beautiful charts and analytics.
            </p>
          </div>

          {/* 4. Stay Motivated */}
          <div className="space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#eaf3ed] dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center text-[#2d6a4f] dark:text-[#2fe196]">
              <Heart className="w-5 h-5 stroke-[1.8]" />
            </div>
            <h3 className="font-bold text-[#123524] dark:text-white text-base">
              Stay Motivated
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-emerald-100/70 leading-relaxed">
              Build consistency and reach your goals faster.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
