'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/data/site-config';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 border-t border-emerald-950/20 dark:border-emerald-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest text-emerald-700 dark:text-[#2fe196] uppercase block mb-2">
            GOT QUESTIONS?
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {SITE_CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-emerald-900/40 bg-white dark:bg-[#091f17] overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4.5 px-6 flex items-center justify-between text-left text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-emerald-700 dark:hover:text-[#2fe196] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 dark:text-emerald-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600 dark:text-[#2fe196]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-emerald-100/75 leading-relaxed border-t border-slate-100 dark:border-emerald-900/30">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
