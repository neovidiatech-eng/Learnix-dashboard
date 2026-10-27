'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface AppContextType {
  lang: Language;
  toggleLanguage: () => void;
  isBookingOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('ar');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.body.style.fontFamily = '"Almarai", "Inter", sans-serif';
    } else {
      document.body.style.fontFamily = '"Inter", "Almarai", sans-serif';
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <AppContext.Provider
      value={{
        lang,
        toggleLanguage,
        isBookingOpen,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
