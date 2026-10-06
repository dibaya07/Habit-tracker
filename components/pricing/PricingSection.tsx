'use client';

import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/data/site-config';
import { useHabitTracker } from '../../lib/context/HabitTrackerContext';

export const PricingSection: React.FC = () => {
  const { setIsCreateModalOpen, setIsAuthModalOpen } = useHabitTracker();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-20 border-t border-emerald-950/20 dark:border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-emerald-700 dark:text-[#2fe196] uppercase block mb-3">
            SIMPLE & FLEXIBLE
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 dark:text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-600 dark:text-emerald-100/70 text-base sm:text-lg">
            Choose the plan that fits your goals. Upgrade or cancel anytime.
          </p>

          {/* Billing Cadence Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-900/40 text-xs font-semibold shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-[#2fe196] text-[#071912] shadow-sm'
                  : 'text-slate-600 dark:text-emerald-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                billingCycle === 'yearly'
                  ? 'bg-[#2fe196] text-[#071912] shadow-sm'
                  : 'text-slate-600 dark:text-emerald-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Yearly</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-[#2fe196]">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {SITE_CONFIG.pricingPlans.map((plan) => {
            const price =
              billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 ${
                  plan.popular
                    ? 'border-[#2fe196] bg-emerald-50/70 dark:bg-[#092219] shadow-xl ring-1 ring-emerald-500/30'
                    : 'border-slate-200 dark:border-emerald-900/30 bg-white dark:bg-[#081d15]/50 shadow-sm'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#2fe196] text-[#071912] shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{plan.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-emerald-300/70">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-mono">
                      ${price}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-emerald-400 font-mono">/month</span>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-emerald-900/40 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-emerald-100/90">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-[#2fe196] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => (plan.id === 'free' ? setIsCreateModalOpen(true) : setIsAuthModalOpen(true))}
                  className={`w-full py-3 px-4 rounded-full text-xs font-bold transition-all active:scale-[0.98] ${
                    plan.popular
                      ? 'bg-[#2fe196] text-[#071912] hover:bg-[#28cf88] shadow-md'
                      : 'border border-slate-300 dark:border-emerald-700/60 bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-emerald-950/60 dark:text-emerald-200 dark:hover:text-white dark:hover:bg-emerald-900/50'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
