import Image from 'next/image'
import React from 'react'

export default function BrandLogo() {
  return (
    <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 flex items-center justify-center text-[#183f2e] dark:text-[#2fe196] group-hover:scale-105 transition-transform duration-200 ">
            {/* Elegant botanical double-leaf icon matching screenshot */}
            <Image src={'/logo.jpeg'} height={100} width={100} alt='Brand_logo'/>
            {/* <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 3C8.5 4.5 4 13.5 4 19.5c0 .3.2.5.5.5C10.5 20 19.5 15.5 21 7c.2-1.5-.5-3.2-1.8-3.8C18.4 2.8 17.7 2.9 17 3zm-2.8 7.2c-.8 2.2-2.8 4.2-5 5-2.2.8-3.8.4-4.2 0-.4-.4 0-2 .8-4.2.8-2.2 2.8-4.2 5-5 2.2-.8 3.8-.4 4.2 0 .4.4 0 2-.8 4.2z" />
              <path d="M6.5 18c1.5-1 3.5-3 4.5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
            </svg> */}
          </div>
          <span className="text-xl font-bold tracking-tight text-[#123524] dark:text-white font-sans">
            Habitora
          </span>
        </a>
  )
}
