import { Habit, HabitCategory } from '../types/tracker';

export const SITE_CONFIG = {
  name: 'Habitora',
  tagline: 'Better habits. A brighter you.',
  heroTagline: 'SMALL STEPS. BIG CHANGES.',
  heroTitle: 'Build Better Habits.\nOne Day at a Time.',
  heroDescription:
    'Habitora helps you track your daily habits, stay consistent and achieve your goals — with a simple, clean and flexible habit tracker.',
  heroHandwrittenNote: 'Less stress,\nMore progress.',
  
  featuresKicker: 'MORE THAN JUST A TRACKER',
  featuresHeading: 'Everything You Need\nto Build Good Habits.',
  
  corePillars: [
    {
      id: 'custom-periods',
      icon: 'Calendar',
      title: 'Custom Time Periods',
      description: 'Choose from preset options or set your own date range.',
    },
    {
      id: 'track-habits',
      icon: 'CheckSquare',
      title: 'Track Your Habits',
      description: 'Mark your daily progress with a simple, clean interface.',
    },
    {
      id: 'get-insights',
      icon: 'BarChart3',
      title: 'Get Insights',
      description: 'See your progress with beautiful charts and analytics.',
    },
    {
      id: 'stay-motivated',
      icon: 'Heart',
      title: 'Stay Motivated',
      description: 'Build consistency and reach your goals faster.',
    },
  ],

  featureCards: [
    {
      icon: 'FileDown',
      title: 'Download or Print',
      description: 'Get your habit sheet as a PDF or image and track offline.',
    },
    {
      icon: 'Cloud',
      title: 'Track Online',
      description: 'Create an account, track from anywhere, anytime.',
    },
    {
      icon: 'Edit3',
      title: 'Add & Edit Anytime',
      description: 'Change habits, add new ones, or extend your time period.',
    },
    {
      icon: 'TrendingUp',
      title: 'Smart Analysis',
      description: 'Get detailed insights and find areas to improve.',
    },
  ],

  howItWorksSteps: [
    {
      step: 1,
      title: 'Choose Your Time',
      description: 'Select a preset (like 21, 30, 60 days) or pick a custom date range that fits your challenge.',
    },
    {
      step: 2,
      title: 'Add Your Habits',
      description: 'Add the habits you want to track (e.g. exercise, meditation, reading, drinking water).',
    },
    {
      step: 3,
      title: 'Track & Grow',
      description: 'Mark your daily progress, uncover behavioral patterns, and watch consistency compound.',
    },
  ],

  durationPresets: [
    { days: 21, label: '21 Days', description: 'Form a new neural pathway' },
    { days: 30, label: '30 Days', description: 'Standard monthly challenge' },
    { days: 60, label: '60 Days', description: 'Deep lifestyle transformation' },
    { days: 90, label: '90 Days', description: 'Quarterly mastery cycle' },
    { days: 365, label: '365 Days', description: 'Full annual journey' },
  ],

  defaultHabits: [
    { id: 'h1', name: 'Exercise', category: 'Health' as HabitCategory, color: '#2fe196', active: true, targetPerWeek: 6 },
    { id: 'h2', name: 'Meditation', category: 'Wellness' as HabitCategory, color: '#38bdf8', active: true, targetPerWeek: 7 },
    { id: 'h3', name: 'Read a book', category: 'Learning' as HabitCategory, color: '#a78bfa', active: true, targetPerWeek: 5 },
    { id: 'h4', name: 'Drink water (2.5L)', category: 'Health' as HabitCategory, color: '#34d399', active: true, targetPerWeek: 7 },
    { id: 'h5', name: 'Healthy food', category: 'Health' as HabitCategory, color: '#fbbf24', active: true, targetPerWeek: 7 },
  ],

  suggestedHabitsByCategory: {
    Health: ['Morning Workout', '8 Hours Sleep', 'Daily Stretch', '10,000 Steps', 'No Sugar'],
    Wellness: ['10 min Meditation', 'Gratitude Journal', 'Sunlight Exposure', 'Evening Winddown', 'Breathwork'],
    Learning: ['Read 20 Pages', 'Language Practice', 'Coding Practice', 'Write Journal', 'Listen to Podcast'],
    Productivity: ['Deep Work (90 min)', 'Plan Tomorrow', 'Inbox Zero', 'Prioritize Top 3', 'Review Goals'],
    Lifestyle: ['Call Family', 'Declutter Desk', 'Cook at Home', 'Water Plants', 'No Screen After 10 PM'],
  },

  pricingPlans: [
    {
      id: 'free',
      name: 'Free',
      tagline: 'Perfect to get started.',
      priceMonthly: 0,
      priceYearly: 0,
      features: [
        'Basic habit tracking',
        'Custom time periods',
        'Download / print sheet (A4 & A5)',
        'Up to 5 active habits',
        'Local storage save',
      ],
      popular: false,
      cta: 'Get Started',
    },
    {
      id: 'pro',
      name: 'Pro',
      tagline: 'For committed habit builders.',
      badge: 'Most Popular',
      priceMonthly: 4.99,
      priceYearly: 3.99, // save 20%
      features: [
        'Everything in Free',
        'Online cloud tracking & auto-sync',
        'Edit & add habits anytime without limits',
        'Detailed analytics & interactive graphs',
        'Custom habit categories & streaks',
        'End-of-period PDF reports',
      ],
      popular: true,
      cta: 'Get Started',
    },
    {
      id: 'premium',
      name: 'Premium',
      tagline: 'For power users & teams.',
      priceMonthly: 9.99,
      priceYearly: 7.99,
      features: [
        'Everything in Pro',
        'Multiple habit templates & challenges',
        'Advanced behavior insights & trends',
        'Export data in CSV & high-res PDF',
        'Priority email support',
        'Early access to new features',
      ],
      popular: false,
      cta: 'Get Started',
    },
  ],

  testimonials: [
    {
      name: 'Sarah M.',
      role: 'Student',
      avatar: '/images/avatar_sarah.jpg',
      quote:
        'Habitora has completely changed my daily routine. I am much more focused, productive, and I love having the printable version pinned over my study desk!',
      rating: 5,
    },
    {
      name: 'James T.',
      role: 'Freelancer',
      avatar: '/images/avatar_james.jpg',
      quote:
        'Simple, clean and super helpful. The analytics really keep me motivated to not break my 12-day coding and workout streaks.',
      rating: 5,
    },
    {
      name: 'Emily R.',
      role: 'Product Designer',
      avatar: '/images/avatar_emily.jpg',
      quote:
        "I love how clean and easy it is to use. The visual design is gorgeous, serene, and feels like a genuine breath of fresh air compared to bloated apps.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: 'What is Habitora and how is it different?',
      answer:
        'Habitora is a minimal, distraction-free habit tracking ecosystem. Unlike heavy apps with endless notifications, Habitora offers both an elegant spreadsheet-style online tracker and downloadable printable sheets (A4/A5) for tactile analog tracking.',
    },
    {
      question: 'Can I choose custom durations like 15 or 45 days?',
      answer:
        'Yes! In addition to proven presets (21, 30, 60, 90, 365 days), you can enter any custom number of days and set your exact starting date.',
    },
    {
      question: 'How does email verification work?',
      answer:
        'To ensure security and keep your digital tracking records synced safely, we verify email ownership via a secure 6-digit confirmation code. Once verified, all digital tracking features unlock permanently.',
    },
    {
      question: 'Can I print my habit tracker on paper?',
      answer:
        'Absolutely. Habitora features a dedicated Print & PDF engine with clean A4 and A5 printable layouts, score boxes, and ink-friendly typography.',
    },
    {
      question: 'Are my habits saved automatically?',
      answer:
        'Yes. All your tracking data, custom habits, and preferences are automatically saved in real time.',
    },
  ],

  donationAmounts: [3, 5, 10, 25],
};
