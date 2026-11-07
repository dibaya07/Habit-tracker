'use client';

import React, { useState } from 'react';
import { Sun, Moon, Sparkles, Menu, X, CheckCircle2, User, Plus, LogOut } from 'lucide-react';
import { useHabitTracker } from '../../lib/context/HabitTrackerContext';
import DesktopNavMenu from './components/DesktopNavMenu';
import BrandLogo from './components/BrandLogo';
import MobileMenu from './components/MobileMenu';
import Signin_CTA_btns from './components/Signin_CTA_btns';

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
        <BrandLogo/>

        {/* Desktop Navigation Links */}
        <DesktopNavMenu/>

        {/* Actions Zone - Theme Toggle, Sign In, Get Started */}
        <Signin_CTA_btns toggleTheme={toggleTheme} isDark={isDark} user={user} logout={logout} setIsAuthModalOpen={setIsAuthModalOpen} setIsCreateModalOpen={setIsCreateModalOpen}/>
        
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
      <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} setIsAuthModalOpen={setIsAuthModalOpen} user={user} setIsCreateModalOpen={setIsCreateModalOpen} logout={logout}/>
    </header>
  );
};
