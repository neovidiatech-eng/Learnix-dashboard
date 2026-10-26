import React, { useState } from 'react';
import { Globe, Moon, Sun, Menu, X } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenBooking: () => void;
  currentView: 'home' | 'privacy';
  onNavigate: (view: 'home' | 'privacy') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  isDark,
  onToggleTheme,
  onOpenBooking,
  currentView,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAr = lang === 'ar';

  const navLinks = [
    { id: 'features', labelAr: 'المميزات', labelEn: 'Features', href: '#features' },
    { id: 'about', labelAr: 'من نحن ', labelEn: 'About Us', href: '#about' },
    { id: 'contact', labelAr: 'تواصل معنا', labelEn: 'Contact Us', href: '#contact' },
    { id: 'privacy', labelAr: 'سياسة الخصوصية', labelEn: 'Privacy Policy', isAction: true },
  ];

  const handleLinkClick = (link: typeof navLinks[0]) => {
    if (link.isAction) {
      onNavigate('privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.href) {
      if (currentView !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          const el = document.querySelector(link.href as string);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(link.href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-(--bg)/90 backdrop-blur-md border-b border-(--border) transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Logo & Name */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-xl font-bold tracking-tight text-(--text-h) whitespace-nowrap shrink-0 group focus:outline-none cursor-pointer"
        >
          <img
            src="/logo.png"
            alt="Learnex Logo"
            className="h-10 w-auto max-h-11 object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-2xl font-black text-primary dark:text-white tracking-tight">
            Learn<span className="text-active">ex</span>
          </span>
        </button>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-(--text)">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item)}
              className={`hover:text-active transition-colors whitespace-nowrap shrink-0 cursor-pointer text-sm font-medium ${
                currentView === 'privacy' && item.id === 'privacy'
                  ? 'text-active font-bold'
                  : ''
              }`}
            >
              {isAr ? item.labelAr : item.labelEn}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + Language and Theme utilities */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="px-3 py-1.5 rounded-lg border border-(--border) hover:border-(--primary-border) bg-(--bg) text-(--text-h) text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            title={isAr ? 'Switch to English' : 'التحويل للغة العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-active" />
            <span className="tabular-nums uppercase">{isAr ? 'English' : 'العربية'}</span>
          </button>

        

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-(--text) hover:text-(--text-h) border border-(--border)"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-(--border) bg-(--bg) px-4 pt-3 pb-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item)}
                className="w-full text-start py-2.5 px-3 rounded-lg text-sm font-medium text-(--text-h) hover:bg-(--primary-light) hover:text-primary transition-colors"
              >
                {isAr ? item.labelAr : item.labelEn}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
