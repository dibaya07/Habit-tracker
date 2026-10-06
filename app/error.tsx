'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafcf9] dark:bg-[#071912] text-[#123524] dark:text-slate-100 p-6 text-center">
      <h1 className="text-4xl font-bold font-editorial mb-4">Something went wrong</h1>
      <p className="text-[#4e6b5c] dark:text-emerald-3/70 max-w-md mb-6">
        An unexpected error occurred while loading this page.
      </p>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="px-6 py-3 rounded-full bg-[#183f2e] text-white font-medium hover:bg-[#123524] transition-colors shadow-sm cursor-pointer"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-full border border-[#dce8df] dark:border-emerald-800 text-[#123524] dark:text-slate-200 font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
