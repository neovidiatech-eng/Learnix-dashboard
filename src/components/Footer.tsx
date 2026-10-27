'use client';

import React from 'react';
import { ShieldCheck, Mail, Phone } from 'lucide-react';
import { Language } from '../types';
import { contactInfoData } from '../data/content';

export interface FooterProps {
  lang: Language;
  onNavigatePrivacy: () => void;
  onNavigateHome: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onNavigatePrivacy,
  onNavigateHome,
  onOpenBooking,
}) => {
  const isAr = lang === 'ar';

  return (
    <footer className="bg-primary text-white border-t border-primary-darker pt-14 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-3 text-xl font-bold tracking-tight text-white group focus:outline-none cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="Learnix Logo"
                className="h-9 w-auto max-h-10 object-contain brightness-0 invert"
              />
              <span className="text-2xl font-black text-white tracking-tight">
                Learn<span className="text-active">ix</span>
              </span>
            </button>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-sm">
              {isAr
                ? 'المنصة الذكية الأولى لتعليم اللغات وإدارة الأكاديميات، تجمع بين نخبة المعلمين الأصليين وأحدث تقنيات الفصول التفاعلية لنقلك إلى الطلاقة التامة.'
                : 'The premier smart platform for language acquisition and academy management, uniting certified native tutors with low-latency live classrooms.'}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{isAr ? 'منصة آمنة ومشفرة بالكامل طبقاً لمعايير GDPR' : 'GDPR Compliant & Fully Encrypted Learning Suite'}</span>
            </div>
          </div>

          {/* Platform Sections Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              {isAr ? 'أقسام المنصة' : 'Platform Navigation'}
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a
                  href="#about"
                  onClick={onNavigateHome}
                  className="hover:text-active transition-colors"
                >
                  {isAr ? 'عن المنصة' : 'About Learnix'}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={onNavigateHome}
                  className="hover:text-active transition-colors"
                >
                  {isAr ? 'خدماتنا التعليمية' : 'Our Services'}
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={onNavigateHome}
                  className="hover:text-active transition-colors"
                >
                  {isAr ? 'لماذا تختار Learnix؟' : 'Why Choose Learnix'}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={onNavigateHome}
                  className="hover:text-active transition-colors"
                >
                  {isAr ? 'تواصل معنا' : 'Contact Us'}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-active hover:text-orange-300 font-bold hover:underline cursor-pointer"
                >
                  {isAr ? 'احجز حصتك التجريبية مجاناً ←' : 'Book Free Trial Class →'}
                </button>
              </li>
            </ul>
          </div>

          {/* Privacy & Direct Channels */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              {isAr ? 'الخصوصية والاتصال المباشر' : 'Privacy & Direct Channels'}
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={onNavigatePrivacy}
                  className="font-bold text-white hover:text-active hover:underline cursor-pointer text-start"
                >
                  {isAr ? 'سياسة الخصوصية وحماية البيانات ←' : 'Privacy & Data Protection Policy →'}
                </button>
              </li>
              <li>
                <div className="flex items-center gap-2 pt-1 text-xs">
                  <Mail className="w-3.5 h-3.5 text-active" />
                  <a href={`mailto:${contactInfoData.emailPrimary}`} className="font-mono text-slate-200 hover:text-active">
                    {contactInfoData.emailPrimary}
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 text-xs">
                  <Phone className="w-3.5 h-3.5 text-white" />
                  <span className="font-mono text-slate-200" dir="ltr">{contactInfoData.phone1}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} Learnix Platform. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigatePrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </button>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">CEFR A1-C2</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
