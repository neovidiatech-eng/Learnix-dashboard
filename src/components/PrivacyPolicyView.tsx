import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Lock, Printer, CheckCircle, Search, Mail } from 'lucide-react';
import { Language } from '../types';
import { privacyPolicyContent } from '../data/content';

interface PrivacyPolicyViewProps {
  lang: Language;
  onBackToHome: () => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({ lang, onBackToHome }) => {
  const isAr = lang === 'ar';
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSectionId, setActiveSectionId] = useState<string>('data-collection');

  const filteredSections = privacyPolicyContent.sections.filter((sec) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const title = (isAr ? sec.titleAr : sec.titleEn).toLowerCase();
    const desc = (isAr ? sec.descAr : sec.descEn).toLowerCase();
    return title.includes(q) || desc.includes(q);
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-(--bg) py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb & Back action */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-(--border)">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-sm font-bold text-primary dark:text-blue-400 hover:text-active transition-colors cursor-pointer group"
          >
            {isAr ? (
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            ) : (
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            )}
            <span>{isAr ? 'العودة للصفحة الرئيسية' : 'Return to Home Page'}</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg border border-(--border) hover:border-(--primary-border) text-xs font-semibold text-(--text-h) flex items-center gap-1.5 transition-colors cursor-pointer"
              title={isAr ? 'طباعة السياسة' : 'Print Policy'}
            >
              <Printer className="w-3.5 h-3.5 text-active" />
              <span>{isAr ? 'طباعة / PDF' : 'Print / Export'}</span>
            </button>
          </div>
        </div>

        {/* Page Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-active tracking-wide">
            <ShieldCheck className="w-4 h-4" />
            <span>{isAr ? 'الشفافية والامتثال القانوني' : 'Transparency & Legal Compliance'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-(--text)">{isAr ? privacyPolicyContent.effectiveDateAr : privacyPolicyContent.effectiveDateEn}</span>
          </div>

          <h1 className="page-title text-2xl sm:text-3xl lg:text-4xl font-extrabold text-(--primary)">
            {isAr ? privacyPolicyContent.titleAr : privacyPolicyContent.titleEn}
          </h1>

          <p className="text-base sm:text-lg text-(--text) leading-relaxed max-w-4xl">
            {isAr ? privacyPolicyContent.introAr : privacyPolicyContent.introEn}
          </p>

          {/* Search bar inside privacy policy for rapid lookup */}
          <div className="pt-2 max-w-md">
            <div className="relative">
              <Search className="w-4 h-4 text-(--text) absolute inset-s-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isAr ? 'ابحث داخل بنود سياسة الخصوصية...' : 'Search privacy clauses...'}
                className="w-full ps-9 pe-4 py-2 text-xs rounded-xl border border-(--border) bg-(--bg) text-(--text-h) focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Layout: Sidebar Jump Links + Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          
          {/* Quick Index Sidebar (Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-3 p-4 rounded-2xl border border-(--border) bg-(--code-bg)">
            <div className="text-xs font-bold text-(--text-h) pb-2 border-b border-(--border)">
              {isAr ? 'فهرس البنود واللوائح' : 'Policy Index & Clauses'}
            </div>
            <nav className="space-y-1">
              {privacyPolicyContent.sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSectionId(sec.id)}
                  className={`block py-2 px-3 rounded-lg text-xs font-medium transition-colors ${
                    activeSectionId === sec.id
                      ? 'bg-primary text-white font-bold'
                      : 'text-(--text) hover:text-(--text-h) hover:bg-(--primary-light)'
                  }`}
                >
                  {isAr ? sec.titleAr : sec.titleEn}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-(--border) text-[11px] text-(--text) flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-500" />
              <span>{isAr ? 'تشفير كامل TLS 1.3' : 'End-to-End TLS 1.3'}</span>
            </div>
          </div>

          {/* Main Policy Content Blocks */}
          <div className="lg:col-span-8 space-y-8">
            {filteredSections.map((sec) => (
              <div
                key={sec.id}
                id={sec.id}
                className="p-6 rounded-2xl border border-(--border) bg-(--bg) shadow-sm space-y-4 scroll-mt-28"
              >
                <div className="flex items-center justify-between border-b border-(--border) pb-3">
                  <h2 className="text-lg sm:text-xl font-bold text-(--primary) dark:text-blue-300">
                    {isAr ? sec.titleAr : sec.titleEn}
                  </h2>
                  <span className="font-mono text-[11px] text-active">
                    # {sec.id}
                  </span>
                </div>

                <p className="text-sm text-(--text) leading-relaxed">
                  {isAr ? sec.descAr : sec.descEn}
                </p>

                <ul className="space-y-2.5 pt-1">
                  {(isAr ? sec.itemsAr : sec.itemsEn).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-(--text-h)">
                      <CheckCircle className="w-4 h-4 text-active shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {filteredSections.length === 0 && (
              <div className="p-8 text-center rounded-2xl border border-dashed border-(--border) text-(--text)">
                {isAr ? 'لم يتم العثور على بنود تطابق بحثك.' : 'No privacy clauses matched your search query.'}
              </div>
            )}

            {/* Direct Contact Card for DPO */}
            <div className="p-6 rounded-2xl bg-linear-to-br from-(--primary) to-[#1b507b] text-white space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-active" />
                <h3 className="text-base font-bold">
                  {isAr ? 'مكتب حماية البيانات والامتثال (Data Protection Office)' : 'Data Protection Office (DPO)'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {isAr
                  ? 'إذا كنت ترغب في تصدير بياناتك، الاستفسار عن تسجيلات الحصص، أو تقديم طلب محو البيانات (Right to be Forgotten)، راسلنا على:'
                  : 'To request data export, inspect live session logs, or exercise your right to erasure, contact our compliance desk directly:'}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="mailto:privacy@learnex.org"
                  className="px-4 py-2 rounded-xl bg-active hover:bg-[#e06f17] text-white text-xs font-bold transition-colors"
                >
                  privacy@learnex.org
                </a>
                <span className="text-xs text-slate-300">
                  {isAr ? 'الرد خلال 48 ساعة كحد أقصى' : 'Guaranteed SLA under 48 hours'}
                </span>
              </div>
            </div>

            {/* Bottom Back Button */}
            <div className="pt-4 text-center">
              <button
                onClick={onBackToHome}
                className="px-6 py-3 rounded-xl border border-(--border) hover:border-(--primary-border) bg-(--bg) text-(--text-h) text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                {isAr ? '← العودة إلى الصفحة الرئيسية للمنصة' : '← Back to Learnex Home Page'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
