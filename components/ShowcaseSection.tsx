'use client';

import React from 'react';
import { ArrowRight, Check, Plus, Calendar, Settings, Search } from 'lucide-react';
import { useHabitTracker } from '../lib/context/HabitTrackerContext';

export const ShowcaseSection: React.FC = () => {
  const { setIsCreateModalOpen } = useHabitTracker();

  return (
    <section className="py-10 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enclosing Pale Mint Rounded Showcase Card */}
        <div className="relative rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 border border-[#dce8df] dark:border-emerald-800/40 bg-[#edf4ef] dark:bg-[#0b2019] shadow-sm overflow-visible">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Heading and value proposition */}
            <div className="lg:col-span-4 space-y-4 text-left z-20">
              <span className="text-xs font-semibold tracking-widest text-[#2d6a4f] dark:text-[#2fe196] uppercase block">
                TRACK. ANALYZE. GROW.
              </span>
              
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#123524] dark:text-white leading-[1.12]">
                Your Progress,
                <br />
                Made Simple.
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 dark:text-emerald-100/75 leading-relaxed max-w-xs">
                Visualize your habits, spot patterns, and make better decisions — all in one place.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium bg-[#183f2e] hover:bg-[#123325] text-white shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: 3-Element Visual Composition (Mobile + Dashboard + Paper Sheet with Leaves) */}
            <div className="lg:col-span-8 flex items-center justify-center relative">
              
              <div className="flex items-center justify-center w-full max-w-[760px] relative">
                
                {/* 1. Mobile Phone Mockup (Left) */}
                <div className="hidden sm:block w-[165px] lg:w-[185px] rounded-[32px] bg-white dark:bg-[#091f17] border-[4px] border-slate-200/80 dark:border-emerald-800/70 shadow-2xl p-3 z-20 shrink-0 -mr-6 lg:-mr-8 select-none transition-transform duration-300 hover:-translate-y-1">
                  
                  {/* Phone Notch Pill */}
                  <div className="w-14 h-3.5 bg-slate-100 dark:bg-emerald-950/80 rounded-full mx-auto mb-2.5 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-emerald-800" />
                  </div>

                  {/* Phone Header */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-emerald-900/40">
                    <span className="text-xs font-bold text-[#123524] dark:text-white">My Habits</span>
                    <button className="w-4 h-4 rounded-full bg-[#183f2e] text-white flex items-center justify-center">
                      <Plus className="w-2.5 h-2.5 stroke-[3]" />
                    </button>
                  </div>

                  {/* Habit List */}
                  <div className="space-y-2 text-[10px]">
                    {[
                      { name: 'Exercise', active: true },
                      { name: 'Meditation', active: true },
                      { name: 'Read a book', active: true },
                      { name: 'Drink water', active: true },
                      { name: 'Healthy food', active: true },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 dark:bg-emerald-950/40 border border-slate-100 dark:border-emerald-900/30"
                      >
                        <span className="text-slate-800 dark:text-emerald-100 font-medium truncate max-w-[85px]">
                          {item.name}
                        </span>
                        <div className="w-4 h-4 rounded-full bg-[#2fe196] text-[#071912] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom phone bar */}
                  <div className="mt-4 pt-2 border-t border-slate-100 dark:border-emerald-900/40 flex items-center justify-around text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-[#183f2e]" />
                    <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-emerald-800" />
                    <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-emerald-800" />
                  </div>
                </div>

                {/* 2. Desktop Dashboard Window (Center) */}
                <div className="w-full max-w-[460px] lg:max-w-[490px] rounded-2xl bg-white dark:bg-[#091f17] border border-slate-200/90 dark:border-emerald-800/60 shadow-xl p-4 sm:p-5 z-10 shrink-0">
                  
                  {/* Top Header of App Window */}
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-emerald-900/50 pb-3 mb-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 flex items-center justify-center text-[#183f2e] dark:text-[#2fe196]">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M17 3C8.5 4.5 4 13.5 4 19.5c0 .3.2.5.5.5C10.5 20 19.5 15.5 21 7c.2-1.5-.5-3.2-1.8-3.8C18.4 2.8 17.7 2.9 17 3z" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-[#123524] dark:text-white">Habitora</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Search className="w-3.5 h-3.5 text-slate-400" />
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#eaf3ed] dark:bg-emerald-950/70 border border-emerald-100 dark:border-emerald-800/40 text-[10px] text-[#2d6a4f] dark:text-emerald-300 font-medium">
                        <Calendar className="w-3 h-3 text-[#2d6a4f]" />
                        <span>Apr 21 – May 20</span>
                      </div>
                      <Settings className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Middle Section: Daily Tracker + Weekly Progress */}
                  <div className="grid grid-cols-12 gap-3 mb-3.5">
                    
                    {/* Left: Daily Habit Tracker Grid */}
                    <div className="col-span-8 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#123524] dark:text-white mb-1">
                        <span>Daily Habit Tracker</span>
                      </div>

                      {/* Day Columns Header */}
                      <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pl-[62px] pr-0.5">
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                        <span>11</span>
                        <span>12</span>
                        <span>13</span>
                        <span>14</span>
                      </div>

                      {/* Habit rows */}
                      {[
                        { name: 'Exercise', checks: [1, 1, 1, 1, 1, 1, 0, 0] },
                        { name: 'Meditation', checks: [1, 1, 1, 1, 1, 0, 0, 0] },
                        { name: 'Read a book', checks: [1, 1, 1, 1, 0, 1, 1, 0] },
                        { name: 'Drink water', checks: [1, 1, 1, 1, 1, 1, 1, 0] },
                        { name: 'Healthy food', checks: [1, 1, 1, 1, 1, 1, 1, 1] },
                      ].map((h, i) => (
                        <div key={i} className="flex items-center justify-between text-[10px]">
                          <span className="text-slate-700 dark:text-emerald-100 font-medium w-[60px] truncate">
                            {h.name}
                          </span>
                          <div className="flex items-center gap-1.5">
                            {h.checks.map((c, cIdx) => (
                              <div
                                key={cIdx}
                                className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] ${
                                  c === 1
                                    ? 'bg-[#2fe196] text-[#071912]'
                                    : 'border border-slate-200 dark:border-emerald-800'
                                }`}
                              >
                                {c === 1 && <Check className="w-2 h-2 stroke-[3]" />}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right: Weekly Progress Gauge Card */}
                    <div className="col-span-4 rounded-xl bg-slate-50 dark:bg-emerald-950/60 border border-slate-100 dark:border-emerald-800/40 p-2.5 flex flex-col items-center justify-between text-center">
                      <span className="text-[10px] font-semibold text-slate-800 dark:text-emerald-200">
                        Weekly Progress
                      </span>

                      {/* 78% Circle Ring */}
                      <div className="relative w-16 h-16 my-1 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                          <circle
                            cx="18"
                            cy="18"
                            r="15.5"
                            fill="none"
                            className="stroke-slate-200 dark:stroke-emerald-900/80"
                            strokeWidth="3.5"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="15.5"
                            fill="none"
                            className="stroke-[#2fe196]"
                            strokeWidth="3.5"
                            strokeDasharray="97.4"
                            strokeDashoffset="21.4"
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">78%</span>
                          <span className="text-[7.5px] text-slate-500 dark:text-emerald-300 mt-0.5">7 of 9 habits</span>
                        </div>
                      </div>

                      <div className="w-full flex items-center justify-between text-[8px] border-t border-slate-200/80 dark:border-emerald-900/40 pt-1 text-slate-500">
                        <div>
                          <span className="block text-[7px] text-slate-400">Streak</span>
                          <span className="font-bold text-slate-800 dark:text-white">12 days</span>
                        </div>
                        <div>
                          <span className="block text-[7px] text-slate-400">Best Streak</span>
                          <span className="font-bold text-slate-800 dark:text-white">21 days</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Bottom: Habit Overview Bar Chart */}
                  <div className="pt-2 border-t border-slate-100 dark:border-emerald-900/40">
                    <div className="flex items-center justify-between text-[10px] text-slate-600 dark:text-emerald-200 mb-1.5">
                      <span className="font-bold text-[#123524] dark:text-white">Habit Overview</span>
                      <span className="text-[9px] text-slate-400">Last 30 days</span>
                    </div>

                    {/* Clean Green Vertical Progress Bars */}
                    <div className="h-9 flex items-end gap-1 px-1 bg-slate-50 dark:bg-emerald-950/40 rounded-lg p-1 border border-slate-100 dark:border-emerald-900/20">
                      {[
                        45, 60, 80, 50, 90, 70, 85, 100, 65, 80, 75, 95, 85, 60, 70, 90, 85, 100, 75, 90, 80, 95, 85
                      ].map((val, bIdx) => (
                        <div
                          key={bIdx}
                          style={{ height: `${val}%` }}
                          className={`flex-1 rounded-t-xs transition-all ${
                            val >= 85 ? 'bg-[#183f2e] dark:bg-[#2fe196]' : val >= 65 ? 'bg-[#2fe196]' : 'bg-[#98d8b9]'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                </div>

                {/* 3. Physical Paper Habit Tracker Sheet (Tilted Right) + Eucalyptus Leaves */}
                <div className="hidden md:block relative z-20 shrink-0 -ml-6 lg:-ml-8 select-none">
                  
                  {/* Eucalyptus Sprig branching out behind paper */}
                  <div 
                    aria-hidden="true" 
                    className="pointer-events-none absolute -top-8 -right-16 w-32 h-44 z-0 opacity-80"
                  >
                    <svg viewBox="0 0 150 200" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 180 Q 60 100 120 20" stroke="#3b5e4c" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                      <ellipse cx="50" cy="140" rx="20" ry="11" transform="rotate(-30 50 140)" fill="#446d57" opacity="0.85" />
                      <ellipse cx="75" cy="110" rx="22" ry="12" transform="rotate(-15 75 110)" fill="#4d7861" opacity="0.9" />
                      <ellipse cx="60" cy="80" rx="18" ry="10" transform="rotate(-45 60 80)" fill="#395c4a" opacity="0.8" />
                      <ellipse cx="100" cy="60" rx="22" ry="12" transform="rotate(-20 100 60)" fill="#54826a" opacity="0.9" />
                      <ellipse cx="120" cy="30" rx="18" ry="9" transform="rotate(-10 120 30)" fill="#46725b" opacity="0.85" />
                    </svg>
                  </div>

                  {/* The Physical Paper Sheet */}
                  <div className="relative z-10 w-[180px] lg:w-[205px] rounded-xl bg-white shadow-2xl border border-slate-200/90 p-3.5 transform rotate-[5deg] hover:rotate-0 transition-transform duration-300">
                    
                    {/* Header */}
                    <div className="border-b border-slate-200 pb-1.5 mb-2 flex items-center justify-between">
                      <span className="font-editorial text-xs font-bold text-[#123524]">Habit Tracker</span>
                    </div>

                    {/* Table columns */}
                    <div className="space-y-1 text-[8.5px]">
                      <div className="flex items-center justify-between text-[7px] text-slate-400 font-mono pb-0.5">
                        <span>Habit</span>
                        <div className="flex gap-1 pr-1">
                          <span>1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                        </div>
                      </div>

                      {[
                        'Exercise',
                        'Meditation',
                        'Read a book',
                        'Drink water',
                        'Healthy food',
                      ].map((h, i) => (
                        <div key={i} className="flex items-center justify-between py-0.5 border-b border-slate-100">
                          <span className="text-slate-700 truncate max-w-[65px] font-medium">{h}</span>
                          <div className="flex gap-1">
                            <span className="w-2.5 h-2.5 rounded-full border border-slate-300 flex items-center justify-center text-[6px] text-emerald-700 font-bold">✓</span>
                            <span className="w-2.5 h-2.5 rounded-full border border-slate-300 flex items-center justify-center text-[6px] text-emerald-700 font-bold">✓</span>
                            <span className="w-2.5 h-2.5 rounded-full border border-slate-300 flex items-center justify-center text-[6px] text-emerald-700 font-bold">✓</span>
                            <span className="w-2.5 h-2.5 rounded-full border border-slate-300"></span>
                            <span className="w-2.5 h-2.5 rounded-full border border-slate-300 flex items-center justify-center text-[6px] text-emerald-700 font-bold">✓</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Paper Footer with Score */}
                    <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="text-[7.5px] uppercase tracking-wider text-[#123524] font-bold block">Your Score</span>
                        <span className="text-[7.5px] text-slate-500 font-script leading-tight">You&apos;re doing great!</span>
                      </div>
                      <span className="font-bold text-sm text-[#183f2e]">8/10</span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
