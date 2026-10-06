'use client';

import React, { useState, useMemo } from 'react';
import {
  TrendingUp,
  Award,
  Flame,
  CheckCircle2,
  Calendar,
  Sparkles,
  BarChart3,
  Lightbulb,
} from 'lucide-react';
import { useHabitTracker } from '../../lib/context/HabitTrackerContext';

export const AnalyticsDashboard: React.FC = () => {
  const { analytics, tracker } = useHabitTracker();
  const [filterPeriod, setFilterPeriod] = useState<'7' | '30' | 'all'>('30');

  // Filter daily scores based on selection
  const filteredScores = useMemo(() => {
    if (filterPeriod === '7') {
      return analytics.dailyScores.slice(-7);
    }
    if (filterPeriod === '30') {
      return analytics.dailyScores.slice(0, 30);
    }
    return analytics.dailyScores;
  }, [analytics.dailyScores, filterPeriod]);

  // Compute SVG coordinates for Completion Rate line/area chart
  const svgWidth = 600;
  const svgHeight = 200;
  const paddingX = 30;
  const paddingY = 25;

  const points = useMemo(() => {
    if (filteredScores.length === 0) return '';
    const step = (svgWidth - paddingX * 2) / Math.max(1, filteredScores.length - 1);
    return filteredScores
      .map((item, index) => {
        const x = paddingX + index * step;
        const y = svgHeight - paddingY - (item.percentage / 100) * (svgHeight - paddingY * 2);
        return `${x},${y}`;
      })
      .join(' ');
  }, [filteredScores]);

  const areaPoints = useMemo(() => {
    if (filteredScores.length === 0) return '';
    const step = (svgWidth - paddingX * 2) / Math.max(1, filteredScores.length - 1);
    const startX = paddingX;
    const endX = paddingX + (filteredScores.length - 1) * step;
    const bottomY = svgHeight - paddingY;
    return `${startX},${bottomY} ${points} ${endX},${bottomY}`;
  }, [filteredScores, points]);

  // Top Performing Habits (sorted)
  const sortedHabitPerformances = useMemo(() => {
    const list = tracker.habits.map((h) => {
      let completed = 0;
      for (let d = 1; d <= tracker.durationDays; d++) {
        if (tracker.tracking[h.id]?.[d] === 'completed') {
          completed++;
        }
      }
      const rate = tracker.durationDays > 0 ? Math.round((completed / tracker.durationDays) * 100) : 0;
      return { name: h.name, rate, category: h.category, color: h.color };
    });
    return list.sort((a, b) => b.rate - a.rate);
  }, [tracker]);

  return (
    <section id="analytics" className="py-16 md:py-24 border-t border-emerald-950/20 dark:border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Period Filter */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold tracking-widest text-emerald-700 dark:text-[#2fe196] uppercase block mb-2">
              REAL PERFORMANCE
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 dark:text-white">
              Progress Analytics
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-emerald-100/70 mt-1">
              See your growth with detailed charts, habits breakdown and data-driven insights.
            </p>
          </div>

          {/* Time range selector */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 text-xs shadow-sm">
            <button
              onClick={() => setFilterPeriod('7')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                filterPeriod === '7'
                  ? 'bg-[#2fe196] text-[#071912] font-semibold'
                  : 'text-slate-600 dark:text-emerald-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Last 7 days
            </button>
            <button
              onClick={() => setFilterPeriod('30')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                filterPeriod === '30'
                  ? 'bg-[#2fe196] text-[#071912] font-semibold'
                  : 'text-slate-600 dark:text-emerald-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Last 30 days
            </button>
            <button
              onClick={() => setFilterPeriod('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                filterPeriod === 'all'
                  ? 'bg-[#2fe196] text-[#071912] font-semibold'
                  : 'text-slate-600 dark:text-emerald-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Full Cycle
            </button>
          </div>
        </div>

        {/* 4 Metric Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          
          <div className="p-5 rounded-2xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 shadow-sm">
            <span className="text-xs text-slate-500 dark:text-emerald-300/80 font-medium block mb-1">Total Habits</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">{analytics.totalHabits}</span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400">tracked</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 shadow-sm">
            <span className="text-xs text-slate-500 dark:text-emerald-300/80 font-medium block mb-1">Completed</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">{analytics.totalCompleted}</span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400">check-ins</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 shadow-sm">
            <span className="text-xs text-slate-500 dark:text-emerald-300/80 font-medium block mb-1">Completion Rate</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-emerald-600 dark:text-[#2fe196] font-mono">{analytics.completionRate}%</span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400">overall</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 shadow-sm">
            <span className="text-xs text-slate-500 dark:text-emerald-300/80 font-medium block mb-1">Current Streak</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-amber-500 dark:text-amber-300 font-mono">{analytics.currentStreak}</span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400">days in a row</span>
            </div>
          </div>

        </div>

        {/* Charts & Analytics Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Main Completion Rate Trend Line Chart (Span 7) */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-base">Habit Completion Rate</h3>
                <span className="text-xs text-slate-500 dark:text-emerald-300/70">Consistency trajectory over tracking cycle</span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-[#2fe196] px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800/40">
                Avg: {analytics.completionRate}%
              </span>
            </div>

            {/* SVG Trend Graph */}
            <div className="w-full overflow-hidden pt-2">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-48 overflow-visible">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2fe196" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#2fe196" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal reference grid lines */}
                {[100, 75, 50, 25, 0].map((val) => {
                  const y = svgHeight - paddingY - (val / 100) * (svgHeight - paddingY * 2);
                  return (
                    <g key={val}>
                      <line
                        x1={paddingX}
                        y1={y}
                        x2={svgWidth - paddingX}
                        y2={y}
                        stroke="currentColor"
                        className="text-slate-200 dark:text-[#133628]"
                        strokeDasharray="3 3"
                        strokeWidth="1"
                      />
                      <text
                        x={paddingX - 8}
                        y={y + 3}
                        className="fill-slate-400 dark:fill-[#527967]"
                        fontSize="9"
                        textAnchor="end"
                        fontFamily="monospace"
                      >
                        {val}%
                      </text>
                    </g>
                  );
                })}

                {/* Shaded Area fill */}
                {areaPoints && (
                  <polygon points={areaPoints} fill="url(#chartGradient)" />
                )}

                {/* Line Curve */}
                {points && (
                  <polyline
                    fill="none"
                    stroke="#2fe196"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={points}
                  />
                )}

                {/* Data Points */}
                {filteredScores.map((item, idx) => {
                  const step = (svgWidth - paddingX * 2) / Math.max(1, filteredScores.length - 1);
                  const cx = paddingX + idx * step;
                  const cy = svgHeight - paddingY - (item.percentage / 100) * (svgHeight - paddingY * 2);
                  return (
                    <circle
                      key={idx}
                      cx={cx}
                      cy={cy}
                      r="3.5"
                      fill="currentColor"
                      stroke="#2fe196"
                      strokeWidth="2"
                      className="text-white dark:text-[#071912] hover:r-5 transition-all cursor-pointer"
                    >
                      <title>{`Day ${item.day} (${item.dateStr}): ${item.completed}/${item.total} (${item.percentage}%)`}</title>
                    </circle>
                  );
                })}
              </svg>

              {/* Date labels along bottom */}
              <div className="flex justify-between text-[10px] text-slate-500 dark:text-emerald-400/80 font-mono px-6 pt-2 border-t border-slate-200 dark:border-emerald-900/40">
                <span>{filteredScores[0]?.dateStr || 'Start'}</span>
                <span>{filteredScores[Math.floor(filteredScores.length / 2)]?.dateStr || 'Mid'}</span>
                <span>{filteredScores[filteredScores.length - 1]?.dateStr || 'End'}</span>
              </div>
            </div>
          </div>

          {/* Top Performing Habits Bar List (Span 5) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white text-base">Top Performing Habits</h3>
            <p className="text-xs text-slate-500 dark:text-emerald-300/70">Completion consistency by individual habit</p>

            <div className="space-y-3 pt-2">
              {sortedHabitPerformances.map((habit, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-900 dark:text-white font-medium truncate max-w-[180px]">{habit.name}</span>
                    <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300">{habit.rate}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 dark:bg-emerald-950 overflow-hidden border border-slate-200 dark:border-emerald-900/40">
                    <div
                      style={{ width: `${habit.rate}%` }}
                      className={`h-full rounded-full transition-all duration-500 ${
                        habit.rate >= 80 ? 'bg-[#2fe196]' : habit.rate >= 60 ? 'bg-[#38bdf8]' : 'bg-amber-400'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Secondary Row: Categories & Weekly Overview + Smart Suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Categories Donut / Progress Breakdown (Span 4) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white text-base">Habit Categories</h3>
            <p className="text-xs text-slate-500 dark:text-emerald-300/70">Distribution across lifestyle pillars</p>

            <div className="flex items-center gap-6 py-2">
              {/* Donut representation */}
              <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" className="text-slate-200 dark:text-[#133628]" strokeWidth="5" />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#2fe196"
                    strokeWidth="5"
                    strokeDasharray="88"
                    strokeDashoffset="35"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-base font-bold text-slate-900 dark:text-white font-mono">{analytics.totalHabits}</span>
                  <span className="text-[8px] text-emerald-600 dark:text-emerald-300 uppercase">habits</span>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-1.5 flex-1 text-xs">
                {analytics.categoryBreakdown.map((cat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor:
                            i === 0 ? '#2fe196' : i === 1 ? '#38bdf8' : i === 2 ? '#a78bfa' : '#fbbf24',
                        }}
                      />
                      <span className="text-slate-700 dark:text-emerald-100">{cat.category}</span>
                    </div>
                    <span className="font-mono text-emerald-700 dark:text-emerald-300">{cat.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Weekly Overview Day-by-Day Bars (Span 4) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white text-base">Weekly Overview</h3>
            <p className="text-xs text-slate-500 dark:text-emerald-300/70">Average completion performance by day of week</p>

            <div className="h-28 flex items-end gap-2.5 px-2 pt-4">
              {analytics.weeklyAverages.map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                  <div className="w-full bg-slate-100 dark:bg-emerald-950 rounded-t-md h-full flex items-end overflow-hidden border border-slate-200 dark:border-emerald-900/40">
                    <div
                      style={{ height: `${Math.max(10, item.percentage)}%` }}
                      className={`w-full rounded-t-sm transition-all duration-500 ${
                        item.percentage >= 75
                          ? 'bg-[#2fe196]'
                          : item.percentage >= 50
                          ? 'bg-emerald-500/70 dark:bg-[#2fe196]/70'
                          : 'bg-emerald-700/50'
                      }`}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 dark:text-emerald-400">{item.dayName}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Factual Suggestions (Section 15) (Span 4) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 shadow-lg space-y-3">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-[#2fe196]">
              <Lightbulb className="w-5 h-5" />
              <h3 className="font-semibold text-slate-900 dark:text-white text-base">Data Insights</h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-emerald-300/70">
              Personalized suggestions calculated directly from your check-ins
            </p>

            <div className="space-y-2.5 pt-1">
              {analytics.smartSuggestions.slice(0, 3).map((suggestion, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-emerald-950/60 border border-slate-200 dark:border-emerald-900/40 text-xs text-slate-700 dark:text-emerald-100/90 leading-relaxed"
                >
                  <p>{suggestion}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
