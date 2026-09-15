import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SafetyGuaranteeSection } from './components/SafetyGuaranteeSection';
import { PriceCalculatorSection } from './components/PriceCalculatorSection';
import { LineupSection } from './components/LineupSection';
import { FirstTimeGuideSection } from './components/FirstTimeGuideSection';
import { SeoContentHub } from './components/SeoContentHub';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<{
    guests: number;
    hours: number;
    liquor: string;
    total: number;
  } | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const handleOpenBooking = () => {
    setSelectedQuote(null);
    setSelectedStyle(null);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithEstimate = (quote: {
    guests: number;
    hours: number;
    liquor: string;
    total: number;
  }) => {
    setSelectedQuote(quote);
    setSelectedStyle(null);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithStyle = (style: string) => {
    setSelectedQuote(null);
    setSelectedStyle(style);
    setIsBookingOpen(true);
  };

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onOpenCalculator={handleScrollToCalculator}
        />

        {/* Safety Guarantee Section (Matches & beats kondaew.com/seo/gundae-w-anjeon-yeak-yeok) */}
        <SafetyGuaranteeSection />

        {/* Transparent Price Board & Real-Time Price Calculator */}
        <PriceCalculatorSection
          onOpenBookingWithEstimate={handleOpenBookingWithEstimate}
        />

        {/* Host Lineup & Style Showcase */}
        <LineupSection
          onOpenBookingWithStyle={handleOpenBookingWithStyle}
        />

        {/* Beginner & Solo Visitor (혼방) Guide */}
        <FirstTimeGuideSection
          onOpenBooking={handleOpenBooking}
        />

        {/* SEO In-depth Articles & Knowledge Hub */}
        <SeoContentHub />

        {/* Verified Customer Reviews */}
        <ReviewsSection />

        {/* Comprehensive FAQ */}
        <FaqSection />

        {/* Location & Free Pickup Guide */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialQuote={selectedQuote}
        initialStyle={selectedStyle}
      />

      {/* High-conversion Mobile Sticky Action Bar */}
      <MobileStickyBar
        onOpenBooking={handleOpenBooking}
        onScrollToCalculator={handleScrollToCalculator}
      />
    </div>
  );
}
