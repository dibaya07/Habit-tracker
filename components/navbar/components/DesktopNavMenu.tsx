import Link from 'next/link'
import React from 'react'

export default function DesktopNavMenu() {
  return (
     <nav className="hidden md:flex items-center gap-9 text-sm font-normal text-slate-600 dark:text-emerald-100/80">
          <Link
            href={"/features"}
            className="hover:text-[#183f2e] dark:hover:text-[#2fe196] transition-colors"
          >
            Features
          </Link>
          <Link
            href={'/create_tracker'}
            className="hover:text-[#183f2e] dark:hover:text-[#2fe196] transition-colors"
          >
            Create Sheet
          </Link>
          <Link
            href={"#how-it-works"}
            className="hover:text-[#183f2e] dark:hover:text-[#2fe196] transition-colors"
          >
            How to Use
          </Link>
          <Link
            href={"#pricing"}
            className="hover:text-[#183f2e] dark:hover:text-[#2fe196] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href={"#faq"}
            className="hover:text-[#183f2e] dark:hover:text-[#2fe196] transition-colors"
          >
            FAQ
          </Link>
        </nav>
  )
}
