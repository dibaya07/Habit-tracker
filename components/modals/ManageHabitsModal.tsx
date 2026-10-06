'use client';

import React, { useState } from 'react';
import { X, Plus, Trash2, Edit2, Check, ArrowUpRight, Clock } from 'lucide-react';
import { useHabitTracker } from '../../lib/context/HabitTrackerContext';
import { HabitCategory } from '../../lib/types/tracker';

export const ManageHabitsModal: React.FC = () => {
  const {
    isManageHabitsOpen,
    setIsManageHabitsOpen,
    tracker,
    addHabit,
    editHabit,
    deleteHabit,
    extendPlan,
  } = useHabitTracker();

  const [newHabitName, setNewHabitName] = useState('');
  const [newHabitCategory, setNewHabitCategory] = useState<HabitCategory>('Health');
  const [editingHabitId, setEditingHabitId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [extendDurationInput, setExtendDurationInput] = useState<number>(60);

  if (!isManageHabitsOpen) return null;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHabitName.trim()) return;
    addHabit(newHabitName.trim(), newHabitCategory);
    setNewHabitName('');
  };

  const startEdit = (id: string, currentName: string) => {
    setEditingHabitId(id);
    setEditingName(currentName);
  };

  const saveEdit = (id: string) => {
    if (editingName.trim()) {
      editHabit(id, { name: editingName.trim() });
    }
    setEditingHabitId(null);
  };

  const handleExtend = () => {
    if (extendDurationInput > tracker.durationDays) {
      extendPlan(extendDurationInput);
      setIsManageHabitsOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-800/60 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto custom-scrollbar">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-200 dark:border-emerald-900/50 pb-4">
          <div>
            <span className="text-[10px] font-semibold tracking-widest text-emerald-700 dark:text-[#2fe196] uppercase block mb-1">
              HABIT MANAGEMENT
            </span>
            <h3 className="font-editorial text-2xl font-normal text-slate-900 dark:text-white">
              Edit Habits & Extend Plan
            </h3>
          </div>
          <button
            onClick={() => setIsManageHabitsOpen(false)}
            className="p-2 rounded-full text-slate-400 hover:text-slate-900 dark:text-emerald-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-emerald-900/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Existing Habits List */}
        <div className="space-y-4">
          <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200 uppercase tracking-wider block">
            Current Habits ({tracker.habits.length})
          </label>

          <div className="space-y-2 max-h-56 overflow-y-auto custom-scrollbar p-1">
            {tracker.habits.map((habit) => (
              <div
                key={habit.id}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-emerald-950/60 border border-slate-200 dark:border-emerald-900/40 text-xs"
              >
                {editingHabitId === habit.id ? (
                  <div className="flex items-center gap-2 flex-1 mr-2">
                    <input
                      type="text"
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                      className="flex-1 px-2.5 py-1.5 rounded-lg bg-white dark:bg-emerald-900/60 border border-[#2fe196] text-slate-900 dark:text-white text-xs"
                      autoFocus
                    />
                    <button
                      onClick={() => saveEdit(habit.id)}
                      className="p-1.5 rounded bg-[#2fe196] text-[#071912]"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: habit.color || '#2fe196' }}
                    />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white block">{habit.name}</span>
                      <span className="text-[10px] text-emerald-700 dark:text-emerald-400">{habit.category}</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-1">
                  {editingHabitId !== habit.id && (
                    <button
                      onClick={() => startEdit(habit.id, habit.name)}
                      className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-emerald-300 dark:hover:text-white rounded hover:bg-slate-200 dark:hover:bg-emerald-900/50"
                      title="Edit name"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => deleteHabit(habit.id)}
                    disabled={tracker.habits.length <= 1}
                    className="p-1.5 text-slate-400 hover:text-rose-600 dark:text-emerald-400 dark:hover:text-rose-400 rounded hover:bg-slate-200 dark:hover:bg-emerald-900/50 disabled:opacity-20"
                    title="Delete habit"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Habit inline */}
          <form onSubmit={handleAdd} className="flex gap-2 pt-2">
            <input
              type="text"
              value={newHabitName}
              onChange={(e) => setNewHabitName(e.target.value)}
              placeholder="New habit name..."
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
              className="px-4 py-2 rounded-xl bg-[#2fe196] text-[#071912] font-semibold text-xs hover:bg-[#28cf88] disabled:opacity-40"
            >
              Add
            </button>
          </form>
        </div>

        {/* Extend Plan Duration (From reference screenshots "Edit / Extend Plan") */}
        <div className="pt-4 border-t border-slate-200 dark:border-emerald-900/50 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600 dark:text-[#2fe196]" />
              <label className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                Extend Plan Duration
              </label>
            </div>
            <span className="text-xs text-emerald-700 dark:text-emerald-400 font-mono">
              Current: {tracker.durationDays} Days
            </span>
          </div>

          <div className="flex items-center gap-3">
            {[60, 90, 180, 365].map((d) => (
              <button
                key={d}
                type="button"
                disabled={d <= tracker.durationDays}
                onClick={() => setExtendDurationInput(d)}
                className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors ${
                  extendDurationInput === d
                    ? 'border-[#2fe196] bg-emerald-50 dark:bg-[#2fe196]/15 text-emerald-900 dark:text-white'
                    : 'border-slate-200 dark:border-emerald-900/40 bg-slate-50 dark:bg-emerald-950/50 text-slate-700 dark:text-emerald-300 disabled:opacity-30'
                }`}
              >
                {d}d
              </button>
            ))}
          </div>

          {extendDurationInput > tracker.durationDays && (
            <button
              type="button"
              onClick={handleExtend}
              className="w-full py-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/40 text-emerald-900 dark:text-emerald-200 hover:bg-[#2fe196] hover:text-[#071912] font-bold text-xs transition-all"
            >
              Extend Plan to {extendDurationInput} Days
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
