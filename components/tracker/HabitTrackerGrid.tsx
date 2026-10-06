'use client';

import React, { useState } from 'react';
import {
  Plus,
  Printer,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Check,
  X,
  TrendingUp,
  Award,
  AlertCircle,
  Calendar,
  Sparkles,
  Sliders,
} from 'lucide-react';
import { useHabitTracker } from '../../lib/context/HabitTrackerContext';
import { TrackingStatus } from '../../lib/types/tracker';

export const HabitTrackerGrid: React.FC = () => {
  const {
    tracker,
    toggleCell,
    analytics,
    setIsCreateModalOpen,
    setIsManageHabitsOpen,
    resetTrackerData,
    setActiveView,
  } = useHabitTracker();

  // Active page / window of days to display if duration is long (e.g. 10 or 15 days view at a time, or all)
  const [dayOffset, setDayOffset] = useState<number>(0);
  const daysPerPage = 14; // smooth pagination for wide grids

  const activeHabits = tracker.habits.filter((h) => h.active);
  const totalDays = tracker.durationDays;
  const maxOffset = Math.max(0, totalDays - daysPerPage);

  // Compute visible day range
  const visibleStartDay = 1 + dayOffset;
  const visibleEndDay = Math.min(totalDays, visibleStartDay + daysPerPage - 1);
  const visibleDays: number[] = [];
  for (let d = visibleStartDay; d <= visibleEndDay; d++) {
    visibleDays.push(d);
  }

  // Calculate human dates for column headers
  const baseDate = new Date(tracker.startDate);
  const getDateLabel = (dayIndex: number) => {
    const d = new Date(baseDate);
    d.setDate(baseDate.getDate() + (dayIndex - 1));
    return {
      dayNum: d.getDate(),
      dayName: d.toLocaleDateString('en-US', { weekday: 'narrow' }),
      monthName: d.toLocaleDateString('en-US', { month: 'short' }),
    };
  };

  const formattedPeriodRange = () => {
    const start = new Date(baseDate);
    const end = new Date(baseDate);
    end.setDate(baseDate.getDate() + tracker.durationDays - 1);
    const startStr = start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const endStr = end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    return `${startStr} – ${endStr}`;
  };

  return (
    <section id="tracker" className="py-16 md:py-24 border-t border-emerald-950/20 dark:border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold tracking-widest text-emerald-700 dark:text-[#2fe196] uppercase block mb-2">
              DIGITAL WORKSPACE
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 dark:text-white">
              Habit Tracker <span className="text-emerald-600 dark:text-emerald-500 font-sans text-2xl font-light">(Online)</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-emerald-100/70 mt-1">
              Track your habits, analyze your progress and stay consistent.
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setIsManageHabitsOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-emerald-700/50 bg-white dark:bg-[#091f17] text-slate-800 dark:text-emerald-200 hover:bg-slate-100 dark:hover:bg-emerald-900/40 transition-colors"
            >
              <Sliders className="w-3.5 h-3.5 text-emerald-600 dark:text-[#2fe196]" />
              <span>Manage Habits</span>
            </button>

            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#2fe196] text-[#071912] hover:bg-[#28cf88] transition-colors"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Add Habit</span>
            </button>

            <a
              href="#print"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-emerald-700/50 bg-white dark:bg-[#091f17] text-slate-800 dark:text-emerald-200 hover:bg-slate-100 dark:hover:bg-emerald-900/40 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Export / Print</span>
            </a>

            <button
              onClick={resetTrackerData}
              title="Reset data"
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-emerald-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-emerald-900/40 border border-slate-300 dark:border-emerald-900/30 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Main Grid & Companion Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Spreadsheet Table Container (Span 8 or 9) */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-4">
            
            {/* Table Navigation Sub-Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 text-xs">
              
              {/* Date Period Display */}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-600 dark:text-[#2fe196]" />
                <span className="font-semibold text-slate-900 dark:text-white">{tracker.name}</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800/40">
                  {formattedPeriodRange()}
                </span>
                <span className="text-slate-500 dark:text-emerald-300/60 hidden sm:inline">
                  ({tracker.durationDays} Days Plan)
                </span>
              </div>

              {/* Day offset navigator (for multi-week scrolling) */}
              {totalDays > daysPerPage && (
                <div className="flex items-center gap-1.5 ml-auto">
                  <button
                    onClick={() => setDayOffset((prev) => Math.max(0, prev - 7))}
                    disabled={dayOffset === 0}
                    className="p-1 rounded-lg bg-slate-100 dark:bg-emerald-950 border border-slate-200 dark:border-emerald-800/50 text-slate-700 dark:text-emerald-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                    title="Previous week"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] text-slate-700 dark:text-emerald-200 px-2 font-mono">
                    Days {visibleStartDay}–{visibleEndDay} of {totalDays}
                  </span>
                  <button
                    onClick={() => setDayOffset((prev) => Math.min(maxOffset, prev + 7))}
                    disabled={dayOffset >= maxOffset}
                    className="p-1 rounded-lg bg-slate-100 dark:bg-emerald-950 border border-slate-200 dark:border-emerald-800/50 text-slate-700 dark:text-emerald-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                    title="Next week"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>

            {/* Core Spreadsheet Table */}
            <div className="rounded-2xl border border-slate-200 dark:border-emerald-900/40 bg-white dark:bg-[#081d15] shadow-xl overflow-hidden">
              <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse min-w-[650px]">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-emerald-900/60 bg-slate-100/90 dark:bg-[#0b241b]/80 text-[11px] text-slate-700 dark:text-emerald-300">
                      
                      {/* Fixed Habit Column */}
                      <th className="py-3 px-4 font-semibold w-48 sm:w-56 sticky left-0 z-20 bg-slate-100 dark:bg-[#0b241b] border-r border-slate-200 dark:border-emerald-900/50">
                        Habit
                      </th>

                      {/* Day Columns */}
                      {visibleDays.map((dayNum) => {
                        const { dayNum: dateDay, dayName } = getDateLabel(dayNum);
                        return (
                          <th
                            key={dayNum}
                            className="py-2.5 px-2 text-center min-w-[38px] font-mono border-r border-slate-200 dark:border-emerald-900/30"
                          >
                            <span className="block text-[9px] uppercase tracking-wider text-slate-500 dark:text-emerald-400/80">
                              {dayName}
                            </span>
                            <span className="text-xs font-bold text-slate-900 dark:text-white block">
                              {dateDay}
                            </span>
                          </th>
                        );
                      })}

                      {/* Habit Completion % Column */}
                      <th className="py-3 px-3 text-center font-semibold text-[10px] uppercase tracking-wider text-slate-600 dark:text-emerald-300/80 w-16">
                        Rate
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 dark:divide-emerald-900/30 text-xs">
                    {activeHabits.map((habit) => {
                      // Calculate individual habit completion rate for visible days / full tracker
                      let habitCompletedCount = 0;
                      for (let d = 1; d <= totalDays; d++) {
                        if (tracker.tracking[habit.id]?.[d] === 'completed') {
                          habitCompletedCount++;
                        }
                      }
                      const habitRate = totalDays > 0 ? Math.round((habitCompletedCount / totalDays) * 100) : 0;

                      return (
                        <tr
                          key={habit.id}
                          className="hover:bg-slate-50 dark:hover:bg-emerald-950/40 transition-colors group"
                        >
                          {/* Habit Name Cell (Sticky Left) */}
                          <td className="py-3 px-4 sticky left-0 z-10 bg-white group-hover:bg-slate-50 dark:bg-[#081d15] dark:group-hover:bg-[#092219] border-r border-slate-200 dark:border-emerald-900/50">
                            <div className="flex items-center gap-2.5">
                              <span
                                className="w-2.5 h-2.5 rounded-full shrink-0"
                                style={{ backgroundColor: habit.color || '#2fe196' }}
                              />
                              <div className="truncate">
                                <span className="font-medium text-slate-900 dark:text-white truncate block">
                                  {habit.name}
                                </span>
                                <span className="text-[10px] text-slate-500 dark:text-emerald-300/60 block">
                                  {habit.category}
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* Days Cells (Clickable Matrix) */}
                          {visibleDays.map((dayNum) => {
                            const status: TrackingStatus =
                              tracker.tracking[habit.id]?.[dayNum] || 'empty';

                            return (
                              <td
                                key={dayNum}
                                onClick={() => toggleCell(habit.id, dayNum)}
                                className="py-2 px-1 text-center border-r border-slate-200/80 dark:border-emerald-900/20 cursor-pointer select-none"
                              >
                                <button
                                  type="button"
                                  aria-label={`Toggle ${habit.name} on day ${dayNum}`}
                                  className={`w-7 h-7 mx-auto rounded-full flex items-center justify-center transition-all duration-150 transform active:scale-90 ${
                                    status === 'completed'
                                      ? 'bg-[#2fe196] text-[#071912] shadow-sm shadow-emerald-500/30'
                                      : status === 'failed'
                                      ? 'bg-rose-500/20 border border-rose-500/40 text-rose-500'
                                      : 'border border-slate-300 dark:border-emerald-800/60 text-slate-400 dark:text-emerald-700 hover:border-emerald-500/60'
                                  }`}
                                >
                                  {status === 'completed' && (
                                    <Check className="w-4 h-4 stroke-[3]" />
                                  )}
                                  {status === 'failed' && (
                                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                                  )}
                                </button>
                              </td>
                            );
                          })}

                          {/* Rate Cell */}
                          <td className="py-3 px-2 text-center font-mono font-bold text-emerald-700 dark:text-emerald-300 text-xs">
                            {habitRate}%
                          </td>
                        </tr>
                      );
                    })}

                    {/* Bottom Row: Daily Score / Performance (Requirement 12) */}
                    <tr className="bg-slate-50 dark:bg-[#0b241b] border-t-2 border-slate-300 dark:border-emerald-900/60 font-medium">
                      <td className="py-3 px-4 sticky left-0 z-10 bg-slate-50 dark:bg-[#0b241b] border-r border-slate-200 dark:border-emerald-900/50">
                        <div>
                          <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
                            Daily Score
                          </span>
                          <span className="text-[10px] text-emerald-700 dark:text-emerald-400">
                            Completed / Total
                          </span>
                        </div>
                      </td>

                      {visibleDays.map((dayNum) => {
                        const score = analytics.dailyScores.find((s) => s.day === dayNum);
                        const completed = score ? score.completed : 0;
                        const total = activeHabits.length;
                        const percentage = score ? score.percentage : 0;

                        return (
                          <td
                            key={dayNum}
                            className="py-2.5 px-1 text-center border-r border-slate-200/80 dark:border-emerald-900/20"
                          >
                            <span className="block font-mono font-bold text-xs text-slate-900 dark:text-white">
                              {completed}/{total}
                            </span>
                            <span
                              className={`text-[9px] font-mono block ${
                                percentage >= 80
                                  ? 'text-emerald-600 dark:text-[#2fe196] font-bold'
                                  : percentage >= 50
                                  ? 'text-amber-600 dark:text-amber-300'
                                  : percentage > 0
                                  ? 'text-slate-600 dark:text-emerald-400/70'
                                  : 'text-slate-400 dark:text-slate-500'
                              }`}
                            >
                              {percentage}%
                            </span>
                          </td>
                        );
                      })}

                      <td className="py-2.5 px-2 text-center font-mono font-bold text-emerald-700 dark:text-[#2fe196] text-xs">
                        {analytics.completionRate}%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Grid Legend & Helper Note */}
              <div className="px-4 py-3 bg-slate-100 dark:bg-[#071912] border-t border-slate-200 dark:border-emerald-900/40 flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-emerald-300/70">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-[#2fe196] flex items-center justify-center text-[#071912]">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Completed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-500">
                      <X className="w-2.5 h-2.5" />
                    </span>
                    <span>Missed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full border border-slate-400 dark:border-emerald-700/60" />
                    <span>Unmarked</span>
                  </div>
                </div>

                <span className="text-[11px] text-emerald-700 dark:text-emerald-400">
                  Tip: Tap any cell to cycle through status.
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Weekly Progress & Streak Gauge Sidebar (Span 4 or 3) */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">
            
            {/* Weekly Progress Ring Card (Matching screenshot 1, 3, 4) */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 shadow-xl space-y-6 text-center">
              <div className="flex items-center justify-between text-xs border-b border-slate-200 dark:border-emerald-900/50 pb-3">
                <span className="font-semibold text-slate-900 dark:text-white">Weekly Progress</span>
                <span className="text-emerald-700 dark:text-[#2fe196] font-mono font-bold">Active</span>
              </div>

              {/* Progress Ring */}
              <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  {/* Background Track */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    fill="none"
                    className="stroke-slate-200 dark:stroke-emerald-950/80"
                    strokeWidth="3"
                  />
                  {/* Progress stroke */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    fill="none"
                    className="stroke-[#2fe196] transition-all duration-500"
                    strokeWidth="3"
                    strokeDasharray="94.2"
                    strokeDashoffset={94.2 - (94.2 * analytics.completionRate) / 100}
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
                    {analytics.completionRate}%
                  </span>
                  <span className="text-xs text-slate-600 dark:text-emerald-300 mt-1 font-medium">
                    {analytics.totalCompleted} completed
                  </span>
                </div>
              </div>

              {/* Streak Counters */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200 dark:border-emerald-900/40">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-emerald-950/50 border border-slate-200 dark:border-emerald-900/30">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-emerald-400 block mb-0.5">
                    Current Streak
                  </span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white font-mono">
                    {analytics.currentStreak} days
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-emerald-950/50 border border-slate-200 dark:border-emerald-900/30">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-emerald-400 block mb-0.5">
                    Best Streak
                  </span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white font-mono">
                    {analytics.longestStreak} days
                  </span>
                </div>
              </div>

            </div>

            {/* Habit Insights Cards (Directly matching reference screenshots 3 & 4) */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-emerald-700 dark:text-emerald-400 px-1">
                Habit Insights
              </h4>

              {/* Most Consistent */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-[#2fe196] flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block font-semibold">
                      Most Consistent
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {analytics.bestPerformingHabit?.name || 'Exercise'}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-700 dark:text-[#2fe196]">
                  {analytics.bestPerformingHabit?.rate || 90}%
                </span>
              </div>

              {/* Needs Attention */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-amber-600 dark:text-amber-400 block font-semibold">
                      Needs Attention
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {analytics.weakestPerformingHabit?.name || 'Drink water'}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                  {analytics.weakestPerformingHabit?.rate || 60}%
                </span>
              </div>

              {/* Growing Routine */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-sky-600 dark:text-sky-400 block font-semibold">
                      Growing
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      Read a book
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400">
                  +18%
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
