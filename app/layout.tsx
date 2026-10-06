import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Caveat, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { HabitTrackerProvider } from '../lib/context/HabitTrackerContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Habitora — Build Better Habits. One Day at a Time.',
  description:
    'Habitora helps you track your daily habits, stay consistent and achieve your goals with a simple, clean, and flexible habit tracker. Supports online tracking and printable PDF sheets.',
  openGraph: {
    title: 'Habitora — Build Better Habits. One Day at a Time.',
    description:
      'Habitora helps you track your daily habits, stay consistent and achieve your goals with a simple, clean, and flexible habit tracker.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Habitora — Build Better Habits. One Day at a Time.',
    description:
      'Habitora helps you track your daily habits, stay consistent and achieve your goals with a simple, clean, and flexible habit tracker.',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#071912' },
    { media: '(prefers-color-scheme: light)', color: '#fafcf9' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${caveat.variable} ${jakarta.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#fafcf9] dark:bg-[#071912] text-[#123524] dark:text-slate-100 antialiased selection:bg-[#2d6a4f]/20 selection:text-[#123524] transition-colors duration-200" suppressHydrationWarning>
        <HabitTrackerProvider>
          {children}
        </HabitTrackerProvider>
      </body>
    </html>
  );
}
