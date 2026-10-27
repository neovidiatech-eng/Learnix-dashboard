'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/Navbar';
import { PrivacyPolicyView } from '../../components/PrivacyPolicyView';
import { Footer } from '../../components/Footer';
import { BookingModal } from '../../components/BookingModal';
import { useApp } from '../../context/AppContext';

export default function PrivacyPage() {
  const { lang, toggleLanguage, isBookingOpen, openBooking, closeBooking } = useApp();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans transition-colors duration-200">
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenBooking={openBooking}
        currentView="privacy"
        onNavigate={(view) => {
          if (view === 'home') {
            router.push('/');
          }
        }}
      />

      <main id="main-content" className="pt-6">
        <PrivacyPolicyView
          lang={lang}
          onBackToHome={() => router.push('/')}
        />
      </main>

      <Footer
        lang={lang}
        onNavigatePrivacy={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateHome={() => router.push('/')}
        onOpenBooking={openBooking}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        lang={lang}
      />
    </div>
  );
}
