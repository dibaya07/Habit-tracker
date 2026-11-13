'use client';

import React, { useState } from 'react';
import { X, Plus, Check, Calendar, Sparkles, Clock, Trash2 } from 'lucide-react';
import { useHabitTracker } from '../../lib/context/HabitTrackerContext';
import { SITE_CONFIG } from '../../lib/data/site-config';
import { Habit, HabitCategory } from '../../lib/types/tracker';
import Link from 'next/link';
import QuickSuggestions from './components/QuickSuggestions';
import TimePeriod from './components/TimePeriod';
import HabitList from './components/HabitList';
// import CustomHabitForm from './components/CustomHabitForm';

export default function Home () {
  const { isCreateModalOpen, setIsCreateModalOpen, createTracker } = useHabitTracker();

  const [trackerName, setTrackerName] = useState('My 30-Day Transformation');
  const [selectedDuration, setSelectedDuration] = useState<number>(30);
  const [isCustomDuration, setIsCustomDuration] = useState(false);
  const [customDaysInput, setCustomDaysInput] = useState('21');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);

  // Selected habits list
  const [selectedHabits, setSelectedHabits] = useState<Habit[]>(SITE_CONFIG.defaultHabits);
  const [newHabitName, setNewHabitName] = useState('');
  const [newHabitCategory, setNewHabitCategory] = useState<HabitCategory>('Health');

//   if (!isCreateModalOpen) return null;

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

  const handleSubmit = async() => {
    const res = await fetch ('http://localhost:3000/api/tracker')
    console.log(await res.json())
    const finalDays = isCustomDuration
      ? Math.max(1, Math.min(365, parseInt(customDaysInput, 10) || 30))
      : selectedDuration;

    createTracker(trackerName, finalDays, startDate, selectedHabits);
  };

  return (
    // <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full rounded-3xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-800/60 p-6 sm:p-8 shadow-2xl space-y-6  overflow-y-auto custom-scrollbar">
        
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
          <Link
            // onClick={() => setIsCreateModalOpen(false)}
            href={'/'}
            className="p-2 rounded-full text-slate-400 hover:text-slate-900 dark:text-emerald-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-emerald-900/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </Link>
        </div>

        {/* Form Fields */}
        <div className="space-y-6 ">
          
          {/* Name/days/starting days */}
          <div className='flex justify-around'>
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
          <TimePeriod isCustomDuration={isCustomDuration} setIsCustomDuration={setIsCustomDuration} customDaysInput={customDaysInput} setCustomDaysInput={setCustomDaysInput} setSelectedDuration={setSelectedDuration}/>

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
           <HabitList selectedHabits={selectedHabits} handleRemoveHabit={handleRemoveHabit}/>

            {/* Add Custom Habit Form */}
            {/* <CustomHabitForm handleAddCustomHabit={handleAddCustomHabit} newHabitName={newHabitName} setNewHabitName={setNewHabitName} /> */}
            <form onSubmit={handleAddCustomHabit} className="flex gap-2">
              <input
                type="text"
                value={newHabitName}
                onChange={(e) => setNewHabitName(e.target.value)}
                placeholder="Type habit name (e.g. Read 20 mins)"
                className="flex-1 px-3 py-2 rounded-xl bg-slate-50 dark:bg-emerald-950/70 border border-slate-300 dark:border-emerald-800/50 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-[#2fe196]"
              />
              {/* <select
                value={newHabitCategory}
                onChange={(e) => setNewHabitCategory(e.target.value as HabitCategory)}
                className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-emerald-950/70 border border-slate-300 dark:border-emerald-800/50 text-slate-900 dark:text-white text-xs focus:outline-none"
              >
                <option value="Health">Health</option>
                <option value="Wellness">Wellness</option>
                <option value="Learning">Learning</option>
                <option value="Productivity">Productivity</option>
                <option value="Lifestyle">Lifestyle</option>
              </select> */}
              <button
                type="submit"
                disabled={!newHabitName.trim()}
                className="px-3.5 py-2 rounded-xl bg-[#2fe196] text-[#071912] font-semibold text-xs hover:bg-[#28cf88] disabled:opacity-40 transition-colors"
              >
                Add
              </button>
            </form>

            {/* Quick Suggestions Pills */}
            <QuickSuggestions handleSelectSuggestedHabit={handleSelectSuggestedHabit}/>

          </div>

        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-emerald-900/50">
          <Link
            type="button"
            href={'/'}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-emerald-200 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-emerald-900/40 transition-colors"
          >
            Back
          </Link>

          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#2fe196] text-[#071912] hover:bg-[#28cf88] shadow-md transition-all active:scale-[0.98]"
          >
            Create Habit Tracker
          </button>
        </div>

      </div>
    // </div>
  );
};
