'use client';

import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { ShowcaseSection } from '../components/ShowcaseSection';
import { FeaturesGridSection } from '../components/FeaturesGridSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { HabitTrackerGrid } from '../components/tracker/HabitTrackerGrid';
import { AnalyticsDashboard } from '../components/analytics/AnalyticsDashboard';
import { PrintableTrackerSheet } from '../components/print/PrintableTrackerSheet';
import { PricingSection } from '../components/pricing/PricingSection';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import { FAQSection } from '../components/faq/FAQSection';
import { SupportDonationSection } from '../components/support/SupportDonationSection';
import { Footer } from '../components/Footer';

import { CreateTrackerModal } from '../components/modals/CreateTrackerModal';
import { ManageHabitsModal } from '../components/modals/ManageHabitsModal';
import { AuthModal } from '../components/modals/AuthModal';
import { FeedbackModal } from '../components/modals/FeedbackModal';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafcf9] dark:bg-[#071912] text-[#123524] dark:text-slate-100 transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Visual Showcase Cluster */}
      <ShowcaseSection />

      {/* Core Features Grid */}
      <FeaturesGridSection />

      {/* How It Works with Interactive Canvas */}
      <HowItWorksSection />

      {/* Core Digital Habit Tracker Sheet */}
      <HabitTrackerGrid />

      {/* Real-time Analytics Dashboard */}
      <AnalyticsDashboard />

      {/* Printable Sheet (A4 & A5) Engine */}
      <PrintableTrackerSheet />

      {/* Transparent Pricing Plans */}
      <PricingSection />

      {/* Social Proof & Testimonials */}
      <TestimonialsSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Tasteful Support / Coffee Section */}
      <SupportDonationSection />

      {/* Minimal Footer */}
      <Footer />

      {/* Modals */}
      <CreateTrackerModal />
      <ManageHabitsModal />
      <AuthModal />
      <FeedbackModal />
    </main>
  );
}
