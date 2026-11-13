'use client'
import { Habit } from '@/lib/types/tracker'
import { Trash2 } from 'lucide-react'
// import { th } from 'motion/react-client'
import React, { useState } from 'react'
interface HabitListProp {
    selectedHabits : Habit[]
    handleRemoveHabit : (id:string)=>void
}

export default function HabitList({selectedHabits, handleRemoveHabit}:HabitListProp) {
    const noOfDays = [1,2,3,4,5,6,7,8,9,10]
    const noOfHabits = Array.from({length:selectedHabits.length},(_,i)=>(i+1))
  return (
    <div className='flex overflow-y-auto custom-scrollbar'>
         <div className="space-y-2 mb-4 max-h-48  p-1 w-[25vw]">
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
                        {/* <span className="text-[10px] text-emerald-800 dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-900/40 px-1.5 py-0.5 rounded">
                          {habit.category}
                        </span> */}
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
                <div className='flex grow'>
                    <table className=' grow'>
                       <thead >
                        <tr className='w-full '>
                             {noOfDays.map((item,idx)=>(
                                <th key={idx} className='p-0.5 m-0.5 '>{item}</th>
                             ))}
                             {/* <th>hello</th> */}
                        </tr>
                       </thead>
                        <tbody>
                            {noOfHabits.map((item)=>(
                                <tr key={item}>
                                {noOfDays.map((item)=>(
                                    <td key={item}>
                                    <input type="checkbox" />
                                </td>
                                ))}
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    +20 more
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {noOfHabits.map((item)=>(
                                <tr key={item}>
                                    <td>
                                   ...
                                </td>
                            </tr>  ))}
                        </tbody>
                    </table>
                </div>
    </div>
  )
}
