import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Lock, Printer, CheckCircle, Search, Mail } from 'lucide-react';
import { Language } from '../types';
import { privacyPolicyContent } from '../data/content';

export interface PrivacyPolicyViewProps {
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
    const items = (isAr ? sec.itemsAr : sec.itemsEn).join(' ').toLowerCase();
    return title.includes(q) || desc.includes(q) || items.includes(q);
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb & Back Action */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-sm font-bold text-primary hover:text-active transition-colors cursor-pointer group"
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
              className="px-4 py-2 rounded-xl border border-slate-200 hover:border-primary text-xs font-semibold text-slate-800 flex items-center gap-2 transition-colors cursor-pointer bg-white"
              title={isAr ? 'طباعة السياسة' : 'Print Policy'}
            >
              <Printer className="w-4 h-4 text-active" />
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
            <span className="text-slate-500">{isAr ? privacyPolicyContent.effectiveDateAr : privacyPolicyContent.effectiveDateEn}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary">
            {isAr ? privacyPolicyContent.titleAr : privacyPolicyContent.titleEn}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl">
            {isAr ? privacyPolicyContent.introAr : privacyPolicyContent.introEn}
          </p>

          {/* Search bar inside privacy policy for rapid lookup */}
          <div className="pt-2 max-w-md">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute inset-s-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isAr ? 'ابحث داخل بنود سياسة الخصوصية...' : 'Search privacy clauses...'}
                className="w-full ps-9 pe-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Layout: Sidebar Jump Links + Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          
          {/* Quick Index Sidebar (Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-3 p-5 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-sm">
            <div className="text-xs font-bold text-[#0f172a] pb-2 border-b border-slate-200">
              {isAr ? 'فهرس البنود واللوائح' : 'Policy Index & Clauses'}
            </div>
            <nav className="space-y-1.5">
              {privacyPolicyContent.sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSectionId(sec.id)}
                  className={`block py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                    activeSectionId === sec.id
                      ? 'bg-primary text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {isAr ? sec.titleAr : sec.titleEn}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-200 text-xs text-slate-600 flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>{isAr ? 'تشفير كامل وفقاً لـ WebRTC & TLS 1.3' : 'End-to-End TLS 1.3 & WebRTC'}</span>
            </div>

            <div className="pt-2 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 text-slate-700 font-semibold mb-1">
                <Mail className="w-3.5 h-3.5 text-active" />
                <span>{isAr ? 'مسؤول حماية البيانات:' : 'Data Protection Officer:'}</span>
              </div>
              <a href="mailto:privacy@learnix.com" className="font-mono text-primary hover:underline">
                privacy@learnix.com
              </a>
            </div>
          </div>

          {/* Main Policy Content Blocks */}
          <div className="lg:col-span-8 space-y-8">
            {filteredSections.map((sec) => (
              <div
                key={sec.id}
                id={sec.id}
                className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-4 scroll-mt-28"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h2 className="text-lg sm:text-xl font-bold text-primary">
                    {isAr ? sec.titleAr : sec.titleEn}
                  </h2>
                  <span className="font-mono text-xs font-bold text-active bg-orange-50 px-2 py-0.5 rounded-md">
                    #{sec.id}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {isAr ? sec.descAr : sec.descEn}
                </p>

                <ul className="space-y-3 pt-1">
                  {(isAr ? sec.itemsAr : sec.itemsEn).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                      <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {filteredSections.length === 0 && (
              <div className="p-8 text-center rounded-2xl border border-dashed border-slate-300 text-slate-500 bg-slate-50">
                {isAr ? 'لم يتم العثور على بنود تطابق بحثك.' : 'No privacy clauses matched your search query.'}
              </div>
            )}

            {/* Bottom Back Button */}
            <div className="pt-4 text-center">
              <button
                onClick={onBackToHome}
                className="px-6 py-3 rounded-xl border border-slate-200 hover:border-primary bg-white text-slate-800 text-xs sm:text-sm font-bold transition-colors cursor-pointer shadow-xs"
              >
                {isAr ? '← العودة إلى الصفحة الرئيسية للمنصة' : '← Back to Learnix Home Page'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicyView;
