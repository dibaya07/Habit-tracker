'use client';

import React, { useState } from 'react';
import { X, Plus, Check, Calendar, Sparkles, Clock, Trash2 } from 'lucide-react';
import { useHabitTracker } from '../../lib/context/HabitTrackerContext';
import { SITE_CONFIG } from '../../lib/data/site-config';
import { Habit, HabitCategory } from '../../lib/types/tracker';

export const CreateTrackerModal: React.FC = () => {
  const { isCreateModalOpen, setIsCreateModalOpen, createTracker } = useHabitTracker();

  const [trackerName, setTrackerName] = useState('My 30-Day Transformation');
  const [selectedDuration, setSelectedDuration] = useState<number>(30);
  const [isCustomDuration, setIsCustomDuration] = useState(false);
  const [customDaysInput, setCustomDaysInput] = useState('45');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);

  // Selected habits list
  const [selectedHabits, setSelectedHabits] = useState<Habit[]>(SITE_CONFIG.defaultHabits);
  const [newHabitName, setNewHabitName] = useState('');
  const [newHabitCategory, setNewHabitCategory] = useState<HabitCategory>('Health');

  if (!isCreateModalOpen) return null;

  const handleAddCustomHabit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHabitName.trim()) return;

    const colors = ['#2fe196', '#38bdf8', '#a78bfa', '#fbbf24', '#f43f5e', '#34d399'];
    const newHabit: Habit = {
      id: `custom_${newHabitName.trim().toLowerCase().replace(/\s+/g, '_')}_${selectedHabits.length}`,
      name: newHabitName.trim(),
      category: newHabitCategory,
      color: colors[selectedHabits.length % colors.length],
      active: true,
      targetPerWeek: 7,
    };

    setSelectedHabits([...selectedHabits, newHabit]);
    setNewHabitName('');
  };

  const handleRemoveHabit = (id: string) => {
    if (selectedHabits.length <= 1) return; // Keep at least one
    setSelectedHabits(selectedHabits.filter((h) => h.id !== id));
  };

  const handleSelectSuggestedHabit = (name: string, category: HabitCategory) => {
    if (selectedHabits.some((h) => h.name.toLowerCase() === name.toLowerCase())) return;
    const colors = ['#2fe196', '#38bdf8', '#a78bfa', '#fbbf24', '#f43f5e', '#34d399'];
    const newHabit: Habit = {
      id: `sugg_${name.toLowerCase().replace(/\s+/g, '_')}_${selectedHabits.length}`,
      name,
      category,
      color: colors[selectedHabits.length % colors.length],
      active: true,
      targetPerWeek: 7,
    };
    setSelectedHabits([...selectedHabits, newHabit]);
  };

  const handleSubmit = () => {
    const finalDays = isCustomDuration
      ? Math.max(1, Math.min(365, parseInt(customDaysInput, 10) || 30))
      : selectedDuration;

    createTracker(trackerName, finalDays, startDate, selectedHabits);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-800/60 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto custom-scrollbar">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-200 dark:border-emerald-900/50 pb-4">
          <div>
            <span className="text-[10px] font-semibold tracking-widest text-emerald-700 dark:text-[#2fe196] uppercase block mb-1">
              CREATE NEW TRACKER
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white">
              Design Your Habit Challenge
            </h3>
          </div>
          <button
            onClick={() => setIsCreateModalOpen(false)}
            className="p-2 rounded-full text-slate-400 hover:text-slate-900 dark:text-emerald-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-emerald-900/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          
          {/* Tracker Name */}
          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200 block mb-1.5 uppercase tracking-wider">
              Tracker / Challenge Name
            </label>
            <input
              type="text"
              value={trackerName}
              onChange={(e) => setTrackerName(e.target.value)}
              placeholder="e.g. My 30-Day Fitness & Mindfulness Plan"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-emerald-950/70 border border-slate-300 dark:border-emerald-800/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#2fe196] transition-colors"
            />
          </div>

          {/* Time Period / Duration presets */}
          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200 block mb-2 uppercase tracking-wider">
              Select Time Period
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-3">
              {SITE_CONFIG.durationPresets.map((preset) => (
                <button
                  key={preset.days}
                  type="button"
                  onClick={() => {
                    setSelectedDuration(preset.days);
                    setIsCustomDuration(false);
                  }}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    !isCustomDuration && selectedDuration === preset.days
                      ? 'border-[#2fe196] bg-emerald-50 dark:bg-[#2fe196]/15 text-emerald-900 dark:text-white font-bold'
                      : 'border-slate-200 dark:border-emerald-900/40 bg-slate-50 dark:bg-emerald-950/50 text-slate-700 dark:text-emerald-200 hover:border-emerald-500'
                  }`}
                >
                  <span className="text-sm font-bold block">{preset.days}d</span>
                  <span className="text-[9px] text-slate-500 dark:text-emerald-400/80 block leading-tight">{preset.label}</span>
                </button>
              ))}
            </div>

            {/* Custom Duration Input */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-emerald-950/40 border border-slate-200 dark:border-emerald-900/30">
              <input
                type="radio"
                id="customDurationRadio"
                checked={isCustomDuration}
                onChange={() => setIsCustomDuration(true)}
                className="accent-[#2fe196]"
              />
              <label htmlFor="customDurationRadio" className="text-xs text-slate-700 dark:text-emerald-200 font-medium cursor-pointer">
                Custom number of days:
              </label>
              <input
                type="number"
                min="1"
                max="365"
                value={customDaysInput}
                disabled={!isCustomDuration}
                onChange={(e) => {
                  setCustomDaysInput(e.target.value);
                  setIsCustomDuration(true);
                }}
                className="w-20 px-2.5 py-1 rounded-lg bg-white dark:bg-emerald-900/40 border border-slate-300 dark:border-emerald-700/50 text-slate-900 dark:text-white text-xs font-mono disabled:opacity-40"
              />
              <span className="text-xs text-slate-500 dark:text-emerald-400">days (1–365)</span>
            </div>
          </div>

          {/* Start Date */}
          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200 block mb-1.5 uppercase tracking-wider">
              Starting Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-emerald-950/70 border border-slate-300 dark:border-emerald-800/50 text-slate-900 dark:text-white text-xs font-mono focus:outline-none focus:border-[#2fe196]"
            />
          </div>

          {/* Habits to Track */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200 uppercase tracking-wider">
                Habits to Track ({selectedHabits.length})
              </label>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400">Add or remove below</span>
            </div>

            {/* List of currently selected habits */}
            <div className="space-y-2 mb-4 max-h-48 overflow-y-auto custom-scrollbar p-1">
              {selectedHabits.map((habit) => (
                <div
                  key={habit.id}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-emerald-950/60 border border-slate-200 dark:border-emerald-900/40 text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: habit.color || '#2fe196' }}
                    />
                    <span className="text-slate-900 dark:text-white font-medium">{habit.name}</span>
                    <span className="text-[10px] text-emerald-800 dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-900/40 px-1.5 py-0.5 rounded">
                      {habit.category}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemoveHabit(habit.id)}
                    disabled={selectedHabits.length <= 1}
                    className="p-1 text-slate-400 hover:text-rose-600 dark:text-emerald-400 dark:hover:text-rose-400 disabled:opacity-20 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add Custom Habit Form */}
            <form onSubmit={handleAddCustomHabit} className="flex gap-2">
              <input
                type="text"
                value={newHabitName}
                onChange={(e) => setNewHabitName(e.target.value)}
                placeholder="Type habit name (e.g. Read 20 mins)"
                className="flex-1 px-3 py-2 rounded-xl bg-slate-50 dark:bg-emerald-950/70 border border-slate-300 dark:border-emerald-800/50 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-[#2fe196]"
              />
              <select
                value={newHabitCategory}
                onChange={(e) => setNewHabitCategory(e.target.value as HabitCategory)}
                className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-emerald-950/70 border border-slate-300 dark:border-emerald-800/50 text-slate-900 dark:text-white text-xs focus:outline-none"
              >
                <option value="Health">Health</option>
                <option value="Wellness">Wellness</option>
                <option value="Learning">Learning</option>
                <option value="Productivity">Productivity</option>
                <option value="Lifestyle">Lifestyle</option>
              </select>
              <button
                type="submit"
                disabled={!newHabitName.trim()}
                className="px-3.5 py-2 rounded-xl bg-[#2fe196] text-[#071912] font-semibold text-xs hover:bg-[#28cf88] disabled:opacity-40 transition-colors"
              >
                Add
              </button>
            </form>

            {/* Quick Suggestions Pills */}
            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-emerald-900/40">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-emerald-400 block mb-2 font-semibold">
                Quick Suggestions:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { name: '10,000 Steps', cat: 'Health' },
                  { name: 'Cold Shower', cat: 'Wellness' },
                  { name: 'Journaling', cat: 'Wellness' },
                  { name: 'No Social Media before 10 AM', cat: 'Productivity' },
                  { name: 'Read 15 Pages', cat: 'Learning' },
                ].map((sugg, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    onClick={() => handleSelectSuggestedHabit(sugg.name, sugg.cat as HabitCategory)}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-emerald-950/60 border border-slate-200 dark:border-emerald-800/40 text-[10px] text-slate-700 dark:text-emerald-200 hover:text-slate-900 dark:hover:text-white hover:border-[#2fe196] transition-colors"
                  >
                    + {sugg.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-emerald-900/50">
          <button
            type="button"
            onClick={() => setIsCreateModalOpen(false)}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-emerald-200 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-emerald-900/40 transition-colors"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#2fe196] text-[#071912] hover:bg-[#28cf88] shadow-md transition-all active:scale-[0.98]"
          >
            Create Habit Tracker
          </button>
        </div>

      </div>
    </div>
  );
};
