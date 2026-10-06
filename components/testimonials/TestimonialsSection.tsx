'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/data/site-config';
import { useHabitTracker } from '../../lib/context/HabitTrackerContext';

export const TestimonialsSection: React.FC = () => {
  const { setIsCreateModalOpen } = useHabitTracker();

  return (
    <section className="py-20 border-t border-emerald-950/20 dark:border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-semibold tracking-widest text-emerald-700 dark:text-[#2fe196] uppercase block mb-2">
            REAL PEOPLE. REAL PROGRESS.
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 dark:text-white">
            What Our Users Say
          </h2>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {SITE_CONFIG.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 shadow-sm dark:shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, sIdx) => (
                    <Star key={sIdx} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 dark:text-emerald-100/90 leading-relaxed italic">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              {/* Author lockup */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 dark:border-emerald-900/40 mt-6">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-900/50">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</h4>
                  <span className="text-xs text-emerald-700 dark:text-emerald-400">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ready to Build Better Habits CTA Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 text-center overflow-hidden border border-emerald-200 dark:border-emerald-900/40 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 dark:from-[#0a231b] dark:via-[#0b2b20] dark:to-[#0a231b] shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-slate-900 dark:text-white">
              Ready to Build Better Habits?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-emerald-100/70">
              Join thousands of people creating a healthier, happier, more productive life.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold bg-[#2fe196] text-[#071912] hover:bg-[#28cf88] shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
