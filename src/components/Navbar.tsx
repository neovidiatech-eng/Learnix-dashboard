"use client";

import React, { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Language } from "../types";

export interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  isDark?: boolean;
  onToggleTheme?: () => void;
  onOpenBooking: () => void;
  currentView: "home" | "privacy";
  onNavigate: (view: "home" | "privacy") => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenBooking,
  currentView,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAr = lang === "ar";

  const navLinks = [
    { id: "about", labelAr: "عن المنصة", labelEn: "About Us", href: "#about" },
    {
      id: "services",
      labelAr: "خدماتنا",
      labelEn: "Services",
      href: "#services",
    },
    { id: "why-us", labelAr: "لماذا نحن", labelEn: "Why Us", href: "#why-us" },
    {
      id: "contact",
      labelAr: "تواصل معنا",
      labelEn: "Contact Us",
      href: "#contact",
    },
    {
      id: "privacy",
      labelAr: "سياسة الخصوصية",
      labelEn: "Privacy Policy",
      isAction: true,
    },
  ];

  const handleLinkClick = (link: (typeof navLinks)[0]) => {
    if (link.isAction) {
      onNavigate("privacy");
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } else if (link.href) {
      if (currentView !== "home") {
        onNavigate("home");
        setTimeout(() => {
          const el = document.querySelector(link.href as string);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector(link.href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary-darker transition-colors duration-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Logo & Name */}
        <button
          onClick={() => {
            onNavigate("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group focus:outline-none cursor-pointer"
        >
          <img
            src="/logo.png"
            alt="learnex Logo"
            className="h-10 w-auto max-h-11 object-contain transition-transform group-hover:scale-105 brightness-0 invert"
          />
          <span className="text-2xl font-black text-white tracking-tight">
            Learn<span className="text-active">ix</span>
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-200">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item)}
              className={`hover:text-active transition-colors whitespace-nowrap shrink-0 cursor-pointer text-sm font-semibold ${
                currentView === "privacy" && item.id === "privacy"
                  ? "text-active font-bold border-b-2 border-active pb-0.5"
                  : ""
              }`}
            >
              {isAr ? item.labelAr : item.labelEn}
            </button>
          ))}
        </nav>

        {/* Zone 3: CTA & Language Utilities */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="px-3.5 py-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            title={isAr ? "Switch to English" : "التحويل للغة العربية"}
          >
            <Globe className="w-4 h-4 text-active" />
            <span className="uppercase">{isAr ? "English" : "العربية"}</span>
          </button>

          {/* Primary Action Button (Active Orange) */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-active hover:bg-[#e06c12] text-white text-xs sm:text-sm font-bold shadow-md shadow-black/20 hover:shadow-lg transition-all cursor-pointer"
          >
            <span>{isAr ? "ابدأ الآن مجاناً" : "Start Free Now"}</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-white border border-white/20 hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-primary-darker bg-primary px-4 pt-3 pb-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 shadow-xl">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item)}
                className="w-full text-start py-2.5 px-3 rounded-xl text-sm font-semibold text-slate-100 hover:bg-white/10 hover:text-active transition-colors"
              >
                {isAr ? item.labelAr : item.labelEn}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/15">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-active hover:bg-[#e06c12] text-white text-sm font-bold shadow-md text-center flex items-center justify-center gap-2"
            >
              <span>{isAr ? "ابدأ التعلم الآن مجاناً" : "Start Free Now"}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
