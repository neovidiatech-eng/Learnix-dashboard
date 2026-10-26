/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesOverview } from './components/FeaturesOverview';
import { AboutUsSection } from './components/AboutUsSection';
import { ContactUsSection } from './components/ContactUsSection';
import { PrivacyPolicyView } from './components/PrivacyPolicyView';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { Language } from './types';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('learnex_theme') === 'dark' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
    return false;
  });
  const [currentView, setCurrentView] = useState<'home' | 'privacy'>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync Language and Direction (RTL / LTR) & SEO Title
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.body.style.fontFamily = '"Tajawal", "Inter", sans-serif';
      document.title = 'Learnex | منصة تعليم اللغات التفاعلية والذكية';
    } else {
      document.body.style.fontFamily = '"Inter", "Tajawal", sans-serif';
      document.title = 'Learnex | Smart & Interactive Language Learning Platform';
    }
  }, [lang]);

  // Sync Dark Theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('learnex_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('learnex_theme', 'light');
    }
  }, [isDark]);

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-(--bg) text-(--text) font-sans transition-colors duration-200">
      {/* Top Bar Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenBooking={() => setIsBookingOpen(true)}
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view)}
      />

      {/* Main Content Router */}
      <main id="main-content">
        {currentView === 'home' ? (
          <>
            {/* Hero Section with Live Stats & Preview */}
            <Hero
              lang={lang}
              onOpenBooking={() => setIsBookingOpen(true)}
              onExplorePortals={() => {
                const el = document.getElementById('about');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Core Features: Interactive WebRTC Classroom HUD */}
            <FeaturesOverview
              lang={lang}
              onOpenBooking={() => setIsBookingOpen(true)}
            />

            {/* About Us: Vision, Mission, Curricula & Philosophy */}
            <AboutUsSection
              lang={lang}
              onOpenBooking={() => setIsBookingOpen(true)}
            />

            {/* Contact Us: Interactive Inquiry Form & Direct Channels */}
            <ContactUsSection
              lang={lang}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          </>
        ) : (
          /* Dedicated Privacy Policy Page */
          <PrivacyPolicyView
            lang={lang}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onNavigatePrivacy={() => {
          setCurrentView('privacy');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateHome={() => {
          setCurrentView('home');
        }}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Interactive Free Placement & Booking Modal (with .custom-otp) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        lang={lang}
      />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 inset-e-6 z-40 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-(--primary-hover) transition-all duration-200 cursor-pointer focus:outline-none"
          aria-label={lang === 'ar' ? 'الصعود لأعلى الصفحة' : 'Scroll to top'}
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
