import { HabitCategory } from "@/lib/types/tracker";
import React from "react";

interface QuickSuggestionProps {
    handleSelectSuggestedHabit: (name:string, category: HabitCategory)=> void,
    
}

export default function QuickSuggestions({handleSelectSuggestedHabit}: QuickSuggestionProps) {
  return (
    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-emerald-900/40">
      <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-emerald-400 block mb-2 font-semibold">
        Quick Suggestions:
      </span>
      <div className="flex flex-wrap gap-1.5">
        {[
          { name: "10,000 Steps", cat: "Health" },
          { name: "Cold Shower", cat: "Wellness" },
          { name: "Journaling", cat: "Wellness" },
          { name: "No Social Media before 10 AM", cat: "Productivity" },
          { name: "Read 15 Pages", cat: "Learning" },
        ].map((sugg, sIdx) => (
          <button
            key={sIdx}
            type="button"
            onClick={() =>
              handleSelectSuggestedHabit(sugg.name, sugg.cat as HabitCategory)
            }
            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-emerald-950/60 border border-slate-200 dark:border-emerald-800/40 text-[10px] text-slate-700 dark:text-emerald-200 hover:text-slate-900 dark:hover:text-white hover:border-[#2fe196] transition-colors"
          >
            + {sugg.name}
          </button>
        ))}
      </div>
    </div>
  );
}
