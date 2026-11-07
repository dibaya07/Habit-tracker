import { UserAccount } from '@/lib/types/tracker';
import React from 'react'

interface MobileMenuProps {
    mobileMenuOpen : boolean,
    setMobileMenuOpen : (value:boolean)=> void,
    setIsAuthModalOpen : (open: boolean)=>void,
    setIsCreateModalOpen: (open: boolean)=>void,
    user: UserAccount | null,
    logout:() => void,
}

export default function MobileMenu({mobileMenuOpen,setMobileMenuOpen, setIsAuthModalOpen,setIsCreateModalOpen, user, logout} : MobileMenuProps) {
  return (
    <>
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
    </>
  )
}
