"use client";

import React from "react";
import {
  Sparkles,
  Layers,
  CalendarCheck2,
  TrendingUp,
  Headphones,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { Language } from "../types";
import { whyUsData } from "../data/content";

export interface WhyUsSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({
  lang,
  onOpenBooking,
}) => {
  const isAr = lang === "ar";

  const iconsMap: Record<string, React.ReactNode> = {
    "01": <Sparkles className="w-6 h-6 text-active" />,
    "02": <Layers className="w-6 h-6 text-primary" />,
    "03": <CalendarCheck2 className="w-6 h-6 text-accent" />,
    "04": <TrendingUp className="w-6 h-6 text-success" />,
    "05": <Headphones className="w-6 h-6 text-info" />,
  };

  return (
    <section
      id="why-us"
      className="py-10 lg:py-15 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-primary text-xs font-bold uppercase tracking-wider">
            <span>{isAr ? "الميزة التنافسية" : "Competitive Edge"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
            {isAr ? (
              <>
                لماذا نحن الخيار الأول لأكثر من{" "}
                <span className="text-active">2,500 متعلم</span>؟
              </>
            ) : (
              <>
                Why Are We the Premier Choice for Over{" "}
                <span className="text-active">2,500 Learners</span>?
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {isAr
              ? "صممنا تجربة learnex لتتجاوز كل الصعوبات التقليدية لتعلم اللغات، من خلال دمج الكفاءة الأكاديمية الصارمة بأحدث التقنيات الرقمية."
              : "Engineered from the ground up to eliminate traditional language hurdles by uniting elite certified pedagogy with frictionless digital tools."}
          </p>
        </div>

        {/* 5 Reasons Grid from LANDING_PAGE_CONTENT.md */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {whyUsData.map((item) => (
            <div
              key={item.num}
              className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {iconsMap[item.num]}
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-primary transition-colors font-mono">
                    {item.num}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0f172a]">
                  {isAr ? item.titleAr : item.titleEn}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {isAr ? item.descAr : item.descEn}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>
                  {isAr
                    ? "ميزة حصرية ومضمونة بالمنصة"
                    : "Verified learnex Platform Standard"}
                </span>
              </div>
            </div>
          ))}

          {/* Call to Action Card in Why Us Grid */}
          <div className="p-8 rounded-2xl border-2 border-dashed border-primary/30 bg-blue-50/30 flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md">
              <ShieldCheck className="w-8 h-8 text-active" />
            </div>
            <h3 className="text-xl font-black text-primary">
              {isAr
                ? "ضمان الرضا والجودة بنسبة 100%"
                : "100% Quality & Satisfaction Guarantee"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xs">
              {isAr
                ? "إذا لم تعجبك أول حصة تجريبية، يمكنك تغيير المعلم فوراً وبكل سهولة دون أي رسوم إضافية."
                : "Not completely satisfied with your tutor? Switch instructors anytime with no friction or hidden fees."}
            </p>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-active hover:bg-[#e06c12] text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 hover:shadow-lg transition-all cursor-pointer mt-5"
            >
              {isAr ? "ابدأ تجربتك المجانية الآن" : "Start Your Free Trial Now"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
