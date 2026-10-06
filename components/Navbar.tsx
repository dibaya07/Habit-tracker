'use client';

import React, { useState } from 'react';
import { Sun, Moon, Sparkles, Menu, X, CheckCircle2, User, Plus, LogOut } from 'lucide-react';
import { useHabitTracker } from '../lib/context/HabitTrackerContext';

export const Navbar: React.FC = () => {
  const {
    theme,
    toggleTheme,
    user,
    setIsAuthModalOpen,
    setIsCreateModalOpen,
    logout,
  } = useHabitTracker();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md transition-colors duration-200 bg-[#fafcf9]/90 dark:bg-[#071912]/85 border-b border-slate-200/50 dark:border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Zone - Stylized leaf icon & logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 flex items-center justify-center text-[#183f2e] dark:text-[#2fe196] group-hover:scale-105 transition-transform duration-200">
            {/* Elegant botanical double-leaf icon matching screenshot */}
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 3C8.5 4.5 4 13.5 4 19.5c0 .3.2.5.5.5C10.5 20 19.5 15.5 21 7c.2-1.5-.5-3.2-1.8-3.8C18.4 2.8 17.7 2.9 17 3zm-2.8 7.2c-.8 2.2-2.8 4.2-5 5-2.2.8-3.8.4-4.2 0-.4-.4 0-2 .8-4.2.8-2.2 2.8-4.2 5-5 2.2-.8 3.8-.4 4.2 0 .4.4 0 2-.8 4.2z" />
              <path d="M6.5 18c1.5-1 3.5-3 4.5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#123524] dark:text-white font-sans">
            Habitora
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-9 text-sm font-normal text-slate-600 dark:text-emerald-100/80">
          <a
            href="#features"
            className="hover:text-[#183f2e] dark:hover:text-[#2fe196] transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#183f2e] dark:hover:text-[#2fe196] transition-colors"
          >
            How to Use
          </a>
          <a
            href="#pricing"
            className="hover:text-[#183f2e] dark:hover:text-[#2fe196] transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="hover:text-[#183f2e] dark:hover:text-[#2fe196] transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Actions Zone - Theme Toggle, Sign In, Get Started */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="p-2 rounded-lg text-slate-600 dark:text-emerald-100/80 hover:text-[#183f2e] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-emerald-500/10 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-300" /> : <Sun className="w-5 h-5 text-slate-700" />}
          </button>

          {/* User Sign In / Profile */}
          {user ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-100/60 dark:bg-emerald-900/30 border border-emerald-300 dark:border-emerald-500/30 text-xs text-emerald-900 dark:text-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#183f2e] dark:text-[#2fe196]" />
                <span className="font-medium truncate max-w-[100px]">{user.name}</span>
                <span className="text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold px-1 py-0.5 rounded bg-emerald-200/60 dark:bg-emerald-500/20">
                  {user.memberTier}
                </span>
              </div>
              <button
                onClick={logout}
                title="Sign Out"
                className="p-1.5 text-xs text-slate-400 hover:text-red-500 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="text-sm font-medium text-slate-800 dark:text-emerald-100/90 hover:text-[#183f2e] dark:hover:text-white px-4 py-2 rounded-lg border border-slate-300 dark:border-emerald-800/80 hover:bg-slate-50 dark:hover:bg-emerald-950/40 transition-colors"
            >
              Sign In
            </button>
          )}

          {/* Get Started CTA Button */}
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="inline-flex items-center justify-center px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-xs bg-[#183f2e] hover:bg-[#123325] text-white active:scale-[0.98] cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-slate-700 dark:text-emerald-100"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-emerald-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-emerald-900/10 dark:border-emerald-950/30 bg-white dark:bg-[#071912]/98 text-slate-800 dark:text-slate-100 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-medium">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#2fe196] py-1"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#2fe196] py-1"
            >
              How to Use
            </a>
            <a
              href="#tracker"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#2fe196] py-1"
            >
              Habit Tracker
            </a>
            <a
              href="#analytics"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#2fe196] py-1"
            >
              Analytics
            </a>
            <a
              href="#print"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#2fe196] py-1"
            >
              Print Sheet
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#2fe196] py-1"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#2fe196] py-1"
            >
              FAQ
            </a>
          </nav>

          <div className="pt-4 border-t border-emerald-900/40 flex flex-col gap-3">
            {user ? (
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-emerald-300 font-medium">
                  Signed in as {user.name}
                </span>
                <button
                  onClick={logout}
                  className="text-xs text-red-400 underline"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAuthModalOpen(true);
                }}
                className="w-full text-center py-2.5 rounded-full border border-emerald-500/30 text-emerald-200 font-medium text-sm"
              >
                Sign In
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCreateModalOpen(true);
              }}
              className="w-full text-center py-3 rounded-full bg-[#2fe196] text-[#071912] font-semibold text-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
