// import React from "react";

// interface CustomHabitFormProps {
//     handleAddCustomHabit: (e : React.FormEvent)=> void,
//     newHabitName : string,
//     setNewHabitName: (arg0:string)=>void,


    
// }

// export default function CustomHabitForm({handleAddCustomHabit, newHabitName, setNewHabitName, }: CustomHabitFormProps) {
//   return (
//     <form onSubmit={handleAddCustomHabit} className="flex gap-2">
//       <input
//         type="text"
//         value={newHabitName}
//         onChange={(e) => setNewHabitName(e.target.value)}
//         placeholder="Type habit name (e.g. Read 20 mins)"
//         className="flex-1 px-3 py-2 rounded-xl bg-slate-50 dark:bg-emerald-950/70 border border-slate-300 dark:border-emerald-800/50 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-[#2fe196]"
//       />
//       <select
//         value={newHabitCategory}
//         onChange={(e) => setNewHabitCategory(e.target.value as HabitCategory)}
//         className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-emerald-950/70 border border-slate-300 dark:border-emerald-800/50 text-slate-900 dark:text-white text-xs focus:outline-none"
//       >
//         <option value="Health">Health</option>
//         <option value="Wellness">Wellness</option>
//         <option value="Learning">Learning</option>
//         <option value="Productivity">Productivity</option>
//         <option value="Lifestyle">Lifestyle</option>
//       </select>
//       <button
//         type="submit"
//         disabled={!newHabitName.trim()}
//         className="px-3.5 py-2 rounded-xl bg-[#2fe196] text-[#071912] font-semibold text-xs hover:bg-[#28cf88] disabled:opacity-40 transition-colors"
//       >
//         Add
//       </button>
//     </form>
//   );
// }
