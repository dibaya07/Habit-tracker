import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafcf9] dark:bg-[#071912] text-[#123524] dark:text-slate-100 p-6 text-center">
      <h1 className="text-6xl font-bold font-editorial mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-[#4e6b5c] dark:text-emerald-3/70 max-w-md mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-[#183f2e] text-white font-medium hover:bg-[#123524] transition-colors shadow-sm"
      >
        Return Home
      </Link>
    </div>
  );
}
