import React from 'react';
import { MessageSquareText, Award, Clock , ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { aboutUsContent } from '../data/content';

interface AboutUsSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ lang, onOpenBooking }) => {
  const isAr = lang === 'ar';

  const pillarIcons = [
    <MessageSquareText className="w-6 h-6 text-active" />,
    <Award className="w-6 h-6 text-primary" />,
    <Clock className="w-6 h-6 text-accent" />,
  ];

  return (
    <section id="about" className="py-10 lg:py-15 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-primary text-sm font-bold uppercase tracking-wider">
            <span>{isAr ? aboutUsContent.tagAr : aboutUsContent.tagEn}</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
            {isAr ? aboutUsContent.headlineAr : aboutUsContent.headlineEn}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {isAr ? aboutUsContent.bodyAr : aboutUsContent.bodyEn}
          </p>
        </div>

        {/* 3 Core Pillars Grid from LANDING_PAGE_CONTENT.md */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {aboutUsContent.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center border border-slate-100 shadow-xs group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: `${pillar.color}10` }}
                >
                  {pillarIcons[idx]}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-black px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0f172a]">
                    {isAr ? pillar.titleAr : pillar.titleEn}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {isAr ? pillar.descAr : pillar.descEn}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{isAr ? 'منهجية مجربة ومثبتة' : 'Proven Pedagogy'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Callout Box */}
        <div className="rounded-2xl border border-slate-200 bg-linear-to-r from-slate-50 via-white to-orange-50/30 p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center sm:text-start">
            <h3 className="text-xl sm:text-2xl font-black text-primary">
              {isAr ? 'هل أنت مستعد لبدء أول حصة مجانية؟' : 'Ready to Experience Your First Class Free?'}
            </h3>
            <p className="text-sm text-slate-600 max-w-xl">
              {isAr
                ? 'انضم اليوم لأكثر من 2,500 متعلم واستمتع بجلسة تحديد مستوى مجانية مع أحد معلمينا المعتمدين.'
                : 'Join over 2,500 ambitious learners today and receive a complimentary 1-on-1 placement assessment.'}
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-xl bg-active hover:bg-[#e06c12] text-white text-sm font-bold shadow-md shadow-orange-500/20 hover:shadow-lg transition-all shrink-0 cursor-pointer flex items-center gap-2 group"
          >
            <span>{isAr ? 'احجز جلستك التجريبية الآن' : 'Book Free Trial Class'}</span>
            {isAr ? (
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            )}
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;
