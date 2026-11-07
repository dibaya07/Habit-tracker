import { UserAccount } from '@/lib/types/tracker'
import { CheckCircle2, LogOut, Sun } from 'lucide-react'
import React from 'react'

interface CTAProps {
    toggleTheme: () => void,
    isDark:boolean,
    user: UserAccount | null,
    logout: () => void,
    setIsAuthModalOpen: (open: boolean)=>void,
    setIsCreateModalOpen: (open: boolean)=>void,
}

export default function Signin_CTA_btns({toggleTheme, isDark, user, logout, setIsAuthModalOpen, setIsCreateModalOpen}: CTAProps) {
  return (
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
  )
}
