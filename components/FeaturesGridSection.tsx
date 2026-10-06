'use client';

import React from 'react';
import { FileText, Cloud, Edit3, BarChart2 } from 'lucide-react';
import { SITE_CONFIG } from '../lib/data/site-config';

export const FeaturesGridSection: React.FC = () => {
  const icons = [FileText, Cloud, Edit3, BarChart2];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Section Header */}
          <div className="lg:col-span-4 text-left">
            <span className="text-xs font-semibold tracking-widest text-[#2d6a4f] dark:text-[#2fe196] uppercase block mb-3">
              {SITE_CONFIG.featuresKicker}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-[42px] font-normal text-[#123524] dark:text-white leading-[1.15]">
              Everything You Need
              <br />
              to Build Good Habits.
            </h2>
          </div>

          {/* 4 Cards Grid - Aligned side by side */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONFIG.featureCards.map((card, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="space-y-3 p-5 rounded-2xl bg-white dark:bg-[#091f17]/60 border border-slate-200/80 dark:border-emerald-900/30 hover:border-emerald-300 dark:hover:border-emerald-700/50 transition-all duration-200 shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#eaf3ed] dark:bg-emerald-950/70 flex items-center justify-center text-[#2d6a4f] dark:text-[#2fe196]">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#123524] dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-emerald-100/70 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
