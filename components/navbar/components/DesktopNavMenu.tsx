import React from 'react'

export default function DesktopNavMenu() {
  return (
     <nav className="hidden md:flex items-center gap-9 text-sm font-normal text-slate-600 dark:text-emerald-100/80">
          <a
            href="#features"
            className="hover:text-[#183f2e] dark:hover:text-[#2fe196] transition-colors"
          >
            Features
          </a>
          <a
            href="#create-sheet"
            className="hover:text-[#183f2e] dark:hover:text-[#2fe196] transition-colors"
          >
            Create Sheet
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
  )
}
