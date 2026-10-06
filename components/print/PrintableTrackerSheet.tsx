'use client';

import React, { useState } from 'react';
import {
  Printer,
  FileDown,
  Check,
  Calendar,
  Sparkles,
  FileText,
  Award,
} from 'lucide-react';
import { useHabitTracker } from '../../lib/context/HabitTrackerContext';
import { SITE_CONFIG } from '../../lib/data/site-config';

export const PrintableTrackerSheet: React.FC = () => {
  const { tracker, analytics } = useHabitTracker();

  const [selectedDuration, setSelectedDuration] = useState<number>(tracker.durationDays || 30);
  const [paperFormat, setPaperFormat] = useState<'A4' | 'A5'>('A4');
  const [printMode, setPrintMode] = useState<'blank' | 'completed'>('blank');

  const durationOptions = [7, 14, 21, 30, 60, 90, 365];

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const activeHabits = tracker.habits.filter((h) => h.active);
  const daysToRender = Math.min(selectedDuration, 31); // render up to 31 grid cells per monthly page

  const startDateFormatted = new Date(tracker.startDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <section id="print" className="py-16 md:py-24 border-t border-emerald-950/20 dark:border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-semibold tracking-widest text-emerald-700 dark:text-[#2fe196] uppercase block mb-2">
            ANALOG & DIGITAL FREEDOM
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 dark:text-white">
            Download / Print Habit Sheet
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-emerald-100/70 mt-1">
            Get your habit tracker formatted for clean physical printing or offline journaling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls Panel (Span 5) */}
          <div className="lg:col-span-5 space-y-6 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 shadow-xl">
            
            {/* Checklist of features */}
            <div className="space-y-2.5 pb-4 border-b border-slate-200 dark:border-emerald-900/50 text-xs text-slate-700 dark:text-emerald-200">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-[#2fe196]" />
                <span>Choose your time period & customize duration</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-[#2fe196]" />
                <span>Includes all your active habits pre-formatted</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-[#2fe196]" />
                <span>Optimized for crisp A4 & A5 physical printing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-[#2fe196]" />
                <span>Zero ink-wasting clutter, pure minimalist layout</span>
              </div>
            </div>

            {/* Time Period Selector */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-emerald-300 block mb-2.5">
                Select Time Period
              </label>
              <div className="flex flex-wrap gap-2">
                {durationOptions.map((days) => (
                  <button
                    key={days}
                    onClick={() => setSelectedDuration(days)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                      selectedDuration === days
                        ? 'bg-[#2fe196] text-[#071912] shadow-sm'
                        : 'bg-slate-100 dark:bg-emerald-950/70 border border-slate-200 dark:border-emerald-800/40 text-slate-700 dark:text-emerald-200 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {days}d
                  </button>
                ))}
              </div>
            </div>

            {/* Format Selector: A4 vs A5 */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-emerald-300 block mb-2.5">
                Paper Format & Size
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setPaperFormat('A4')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    paperFormat === 'A4'
                      ? 'border-[#2fe196] bg-emerald-50 dark:bg-[#2fe196]/10 text-emerald-900 dark:text-white font-bold'
                      : 'border-slate-200 dark:border-emerald-900/40 bg-slate-50 dark:bg-emerald-950/50 text-slate-700 dark:text-emerald-300'
                  }`}
                >
                  <span className="text-sm font-bold block">A4 Standard</span>
                  <span className="text-[10px] text-slate-500 dark:text-emerald-400/80">210 × 297 mm</span>
                </button>

                <button
                  onClick={() => setPaperFormat('A5')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    paperFormat === 'A5'
                      ? 'border-[#2fe196] bg-emerald-50 dark:bg-[#2fe196]/10 text-emerald-900 dark:text-white font-bold'
                      : 'border-slate-200 dark:border-emerald-900/40 bg-slate-50 dark:bg-emerald-950/50 text-slate-700 dark:text-emerald-300'
                  }`}
                >
                  <span className="text-sm font-bold block">A5 Journal</span>
                  <span className="text-[10px] text-slate-500 dark:text-emerald-400/80">148 × 210 mm</span>
                </button>
              </div>
            </div>

            {/* Print Mode: Blank Sheet vs Completed Progress Report */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-emerald-300 block mb-2.5">
                Sheet Content
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  onClick={() => setPrintMode('blank')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    printMode === 'blank'
                      ? 'border-[#2fe196] bg-emerald-50 dark:bg-[#2fe196]/10 text-emerald-900 dark:text-white font-semibold'
                      : 'border-slate-200 dark:border-emerald-900/40 bg-slate-50 dark:bg-emerald-950/50 text-slate-700 dark:text-emerald-300'
                  }`}
                >
                  <span className="block font-semibold">Blank Grid</span>
                  <span className="text-[10px] text-slate-500 dark:text-emerald-400/80">For manual pen & paper tracking</span>
                </button>

                <button
                  onClick={() => setPrintMode('completed')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    printMode === 'completed'
                      ? 'border-[#2fe196] bg-emerald-50 dark:bg-[#2fe196]/10 text-emerald-900 dark:text-white font-semibold'
                      : 'border-slate-200 dark:border-emerald-900/40 bg-slate-50 dark:bg-emerald-950/50 text-slate-700 dark:text-emerald-300'
                  }`}
                >
                  <span className="block font-semibold">End-of-Month Summary</span>
                  <span className="text-[10px] text-slate-500 dark:text-emerald-400/80">Includes recorded ticks & score</span>
                </button>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <button
                onClick={handlePrint}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold bg-[#2fe196] text-[#071912] hover:bg-[#28cf88] shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4 stroke-[2.5]" />
                <span>Download Sheet (PDF / Print)</span>
              </button>
              <span className="block text-center text-[11px] text-slate-500 dark:text-emerald-400/70 mt-2">
                Tip: In the print dialog, choose &quot;Save as PDF&quot; or select your printer.
              </span>
            </div>

          </div>

          {/* Right Live Sheet Preview Canvas (Span 7) */}
          <div className="lg:col-span-7">
            <div className="p-2 sm:p-4 rounded-3xl bg-slate-200/80 dark:bg-[#07150f] border border-slate-300 dark:border-emerald-900/40 shadow-2xl">
              
              {/* Paper Sheet Preview Container (Print-ready) */}
              <div
                id="printable-habit-sheet"
                className={`print-container bg-white text-slate-900 rounded-xl p-6 sm:p-8 shadow-2xl border border-slate-200 ${
                  paperFormat === 'A5' ? 'max-w-[480px] mx-auto' : 'w-full'
                }`}
              >
                
                {/* Printable Header */}
                <div className="border-b-2 border-slate-900 pb-4 mb-6 flex items-start justify-between">
                  <div>
                    <h1 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
                      {tracker.name || 'Habit Tracker'}
                    </h1>
                    <div className="flex items-center gap-3 text-xs text-slate-600 mt-1 font-mono">
                      <span>Start Date: {startDateFormatted}</span>
                      <span>·</span>
                      <span>Period: {selectedDuration} Days</span>
                      <span>·</span>
                      <span className="uppercase">{paperFormat}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-editorial text-base font-bold tracking-tight text-slate-900 block">
                      Habitora
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-sans">
                      habit tracker
                    </span>
                  </div>
                </div>

                {/* Habits Ledger Table */}
                <div className="border border-slate-300 rounded-lg overflow-hidden mb-6">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 border-b border-slate-300 text-[10px] uppercase font-bold">
                        <th className="py-2 px-3 border-r border-slate-300 w-36 sm:w-44">
                          Habit
                        </th>
                        {Array.from({ length: daysToRender }, (_, i) => i + 1).map((d) => (
                          <th key={d} className="py-2 text-center border-r border-slate-200 font-mono">
                            {d}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {activeHabits.map((habit) => (
                        <tr key={habit.id} className="h-9">
                          <td className="py-1 px-3 border-r border-slate-300 font-medium text-slate-900 truncate max-w-[130px]">
                            {habit.name}
                          </td>
                          {Array.from({ length: daysToRender }, (_, i) => i + 1).map((d) => {
                            const isMarked =
                              printMode === 'completed' &&
                              tracker.tracking[habit.id]?.[d] === 'completed';
                            return (
                              <td
                                key={d}
                                className="py-1 text-center border-r border-slate-200"
                              >
                                <div
                                  className={`w-4 h-4 mx-auto rounded-full border border-slate-400 flex items-center justify-center text-[9px] ${
                                    isMarked ? 'bg-slate-900 text-white font-bold' : ''
                                  }`}
                                >
                                  {isMarked ? '✓' : ''}
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      ))}

                      {/* Daily Score Row */}
                      <tr className="bg-slate-50 border-t border-slate-300 h-9 font-bold">
                        <td className="py-1 px-3 border-r border-slate-300 text-[10px] uppercase tracking-wider text-slate-800">
                          Daily Score
                        </td>
                        {Array.from({ length: daysToRender }, (_, i) => i + 1).map((d) => {
                          const score = analytics.dailyScores.find((s) => s.day === d);
                          return (
                            <td
                              key={d}
                              className="py-1 text-center border-r border-slate-200 font-mono text-[9px]"
                            >
                              {printMode === 'completed' && score ? score.completed : ''}
                            </td>
                          );
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Printable Footer Metrics / Notes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-200 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                      Monthly Result
                    </span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-lg font-bold font-mono text-slate-900">
                        {printMode === 'completed' ? `${analytics.completionRate}%` : '___%'}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {printMode === 'completed' ? `${analytics.totalCompleted} completed` : 'Target: 80%+'}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                      Longest Streak
                    </span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-lg font-bold font-mono text-slate-900">
                        {printMode === 'completed' ? `${analytics.longestStreak} days` : '___ days'}
                      </span>
                      <span className="text-[10px] text-slate-500">Best run</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                      Daily Affirmation
                    </span>
                    <span className="text-[11px] text-slate-700 italic">
                      &quot;Small disciplines repeated with consistency every day lead to great achievements.&quot;
                    </span>
                  </div>
                </div>

                {/* Notes Writing Area for Analog Users */}
                <div className="mt-4 pt-3 border-t border-dashed border-slate-300">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Reflections & Notes:
                  </span>
                  <div className="h-10 border-b border-slate-200 border-dashed mb-2" />
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
