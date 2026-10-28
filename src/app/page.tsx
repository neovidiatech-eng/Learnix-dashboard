"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutUsSection } from "../components/AboutUsSection";
import { ServicesSection } from "../components/ServicesSection";
import { WhyUsSection } from "../components/WhyUsSection";
import { ContactUsSection } from "../components/ContactUsSection";
import { BookingModal } from "../components/BookingModal";
import { Footer } from "../components/Footer";
import { useApp } from "../context/AppContext";
import { ChevronUp } from "lucide-react";

export default function HomePage() {
  const { lang, toggleLanguage, isBookingOpen, openBooking, closeBooking } =
    useApp();
  const router = useRouter();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans transition-colors duration-200">
      {/* Top Bar Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenBooking={openBooking}
        currentView="home"
        onNavigate={(view) => {
          if (view === "privacy") {
            router.push("/privacy");
          }
        }}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Section 1: Hero Section */}
        <Hero
          lang={lang}
          onOpenBooking={openBooking}
          onExplorePortals={() => {
            const el = document.getElementById("services");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Section 2: About Us (من نحن / عن المنصة) */}
        <AboutUsSection lang={lang} onOpenBooking={openBooking} />

        {/* Section 3: Services (خدماتنا) */}
        <ServicesSection lang={lang} onOpenBooking={openBooking} />

        {/* Section 4: Why Us (لماذا تختار learnex؟) */}
        <WhyUsSection lang={lang} onOpenBooking={openBooking} />

        {/* Section 5: Contact Us (تواصل معنا) */}
        <ContactUsSection lang={lang} onOpenBooking={openBooking} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onNavigatePrivacy={() => {
          router.push("/privacy");
        }}
        onNavigateHome={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenBooking={openBooking}
      />

      {/* Interactive Free Placement & Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} lang={lang} />

      {/* Scroll to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 inset-e-6 z-40 p-3 rounded-full bg-primary hover:bg-primary-hover text-white shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer focus:outline-none"
          aria-label={lang === "ar" ? "الصعود لأعلى الصفحة" : "Scroll to top"}
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
