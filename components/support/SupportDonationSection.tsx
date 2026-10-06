'use client';

import React, { useState } from 'react';
import { Heart, Coffee, Check } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/data/site-config';

export const SupportDonationSection: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(5);
  const [hasDonated, setHasDonated] = useState(false);

  const handleSupport = () => {
    setHasDonated(true);
    setTimeout(() => setHasDonated(false), 4000);
  };

  return (
    <section className="py-16 border-t border-slate-200 dark:border-emerald-900/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#091f17]/60 border border-slate-200 dark:border-emerald-900/40 shadow-sm relative overflow-hidden">
          
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-[#2fe196] flex items-center justify-center mx-auto mb-4">
            <Coffee className="w-5 h-5" />
          </div>

          <h3 className="font-editorial text-2xl sm:text-3xl text-slate-900 dark:text-white font-normal mb-2">
            Enjoying Habitora?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-emerald-100/70 max-w-md mx-auto mb-6">
            Support the independent development of Habitora and help us keep the core habit tracker clean, private, and ad-free.
          </p>

          {/* Amount buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {SITE_CONFIG.donationAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => setSelectedAmount(amt)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  selectedAmount === amt
                    ? 'bg-[#2fe196] text-[#071912] shadow-sm'
                    : 'bg-slate-100 dark:bg-emerald-950/80 border border-slate-200 dark:border-emerald-800/40 text-slate-700 dark:text-emerald-200 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>

          <button
            onClick={handleSupport}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-200 hover:bg-[#2fe196] hover:text-[#071912] transition-all cursor-pointer"
          >
            {hasDonated ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 dark:text-[#2fe196]" />
                <span>Thank you so much for your support! ❤️</span>
              </>
            ) : (
              <>
                <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
                <span>Buy Us a Coffee (${selectedAmount})</span>
              </>
            )}
          </button>

        </div>

      </div>
    </section>
  );
};
