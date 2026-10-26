import React from 'react';
import { ShieldCheck, Github } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
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
    <footer className="bg-(--bg) border-t border-(--border) pt-12 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Learnex Logo"
                className="h-9 w-auto max-h-10 object-contain"
              />
              <span className="text-2xl font-black text-primary dark:text-white tracking-tight">
                Learn<span className="text-active">ex</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-(--text) leading-relaxed max-w-sm">
              {isAr
                ? 'منصة ويب حديثة ومتكاملة لتعليم اللغات، تم تصميمها لتقديم تجربة تعليمية تفاعلية وممتازة لكل من الطلاب، المعلمين، ومديري النظام.'
                : 'Modern integrated language learning platform designed to provide an interactive, premium experience for students, instructors, and admins.'}
            </p>

            <div className="flex items-center gap-2 text-xs text-(--text) pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>{isAr ? 'بيئة تعليمية موثوقة ومشفرة بالكامل' : 'Encrypted & GDPR Compliant Learning Environment'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-(--text-h) uppercase tracking-wider">
              {isAr ? 'أقسام المنصة' : 'Platform Navigation'}
            </div>
            <ul className="space-y-2 text-xs text-(--text)">
              <li>
                <a href="#features" onClick={onNavigateHome} className="hover:text-active transition-colors">
                  {isAr ? 'أبرز المميزات' : 'Core Features'}
                </a>
              </li>
              <li>
                <a href="#about" onClick={onNavigateHome} className="hover:text-active transition-colors">
                  {isAr ? 'من نحن' : 'About Learnex'}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={onNavigateHome} className="hover:text-active transition-colors">
                  {isAr ? 'تواصل معنا' : 'Contact Us'}
                </a>
              </li>
              <li>
                <button onClick={onOpenBooking} className="text-start hover:text-active transition-colors cursor-pointer">
                  {isAr ? 'حجز حصة تجريبية مجانية' : 'Book Free Trial Session'}
                </button>
              </li>
            </ul>
          </div>

          {/* Privacy & Legal */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-(--text-h) uppercase tracking-wider">
              {isAr ? 'الخصوصية والامتثال القانوني' : 'Legal & Privacy Governance'}
            </div>
            <ul className="space-y-2 text-xs text-(--text)">
              <li>
                <button
                  onClick={onNavigatePrivacy}
                  className="font-bold text-active hover:underline cursor-pointer text-start"
                >
                  {isAr ? 'صفحة سياسة الخصوصية وحماية البيانات ←' : 'Privacy & Data Protection Policy →'}
                </button>
              </li>
              <li>
                <button onClick={onNavigatePrivacy} className="hover:text-active transition-colors text-start cursor-pointer">
                  {isAr ? 'حوكمة تسجيلات الحصص المباشرة' : 'Live Class Video & Audio Governance'}
                </button>
              </li>
              <li>
                <button onClick={onNavigatePrivacy} className="hover:text-active transition-colors text-start cursor-pointer">
                  {isAr ? 'حماية بيانات الأطفال (COPPA)' : 'Child Online Privacy (COPPA)'}
                </button>
              </li>
              <li>
                <a href="mailto:privacy@learnex.org" className="hover:text-active transition-colors">
                  {isAr ? 'مسؤول حماية البيانات: privacy@learnex.org' : 'Contact DPO: privacy@learnex.org'}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-(--border) flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-(--text)">
          <div>
            © 2026 Learnex Inc. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/neovidiatech-eng/Learnix.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-(--text-h) transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>neovidiatech-eng/Learnix</span>
            </a>
            <span aria-hidden="true">·</span>
            <button onClick={onNavigatePrivacy} className="hover:text-active cursor-pointer">
              {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
