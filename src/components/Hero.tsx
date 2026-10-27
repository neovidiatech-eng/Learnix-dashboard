import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Globe2,
  CheckCircle2,
  Award
} from 'lucide-react';
import { Language } from '../types';
import { heroContent } from '../data/content';
import hero3dStudentImg from '../assets/images/hero_3d_student.jpg';

export interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
  onExplorePortals: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking, onExplorePortals }) => {
  const isAr = lang === 'ar';

  return (
    <section className="relative overflow-hidden bg-white text-slate-800 pt-10 pb-16 lg:pt-10 lg:pb-15 border-b border-slate-200">
      {/* Soft, clean ambient pastel lighting on white */}
      <div className="absolute top-0 inset-x-0 h-96 bg-linear-to-b from-blue-50/40 via-purple-50/20 to-white pointer-events-none -z-10" />
      <div className="absolute top-16 inset-s-10 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 inset-e-10 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Hero Grid with the 3D Boy Student Character */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Text & Action Column (Left in LTR / Right in RTL) */}
          <div className="lg:col-span-7 space-y-6 text-start">
            
            {/* Top Badge Pill from LANDING_PAGE_CONTENT.md */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/90 border border-slate-200 text-primary text-xs sm:text-sm font-bold shadow-xs">
              <span>{isAr ? heroContent.badgeAr : heroContent.badgeEn}</span>
            </div>

            {/* Headline with Primary Navy Color & Active Orange Highlight */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-primary leading-tight tracking-tight">
              {isAr ? (
                <>
                  اكسر حاجز اللغة.. وتحدث بطلاقة مع{' '}
                  <span className="text-active">
                    متحدثين أصليين
                  </span>{' '}
                  حول العالم
                </>
              ) : (
                <>
                  Break the Language Barrier & Speak Fluently with{' '}
                  <span className="text-active">
                    Native Tutors
                  </span>{' '}
                  Worldwide
                </>
              )}
            </h1>

            {/* Subheadline from LANDING_PAGE_CONTENT.md */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {isAr ? heroContent.subheadlineAr : heroContent.subheadlineEn}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Active Orange CTA Button */}
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-xl bg-active hover:bg-[#e06c12] text-white text-sm sm:text-base font-bold shadow-lg shadow-orange-500/25 hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2.5 group"
              >
                <span>{isAr ? heroContent.primaryBtnAr : heroContent.primaryBtnEn}</span>
                {isAr ? (
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                )}
              </button>

              {/* Secondary Outline Button with Primary Navy Border & Text */}
              <button
                onClick={onExplorePortals}
                className="px-6 py-3.5 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white text-sm sm:text-base font-bold transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>{isAr ? heroContent.secondaryBtnAr : heroContent.secondaryBtnEn}</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-700 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isAr ? 'حصص تفاعلية فردية وجماعية' : '1-on-1 & Group Classes'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary shrink-0" />
                <span>{isAr ? 'مناهج معتمدة دولياً (CEFR)' : 'CEFR Accredited'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-info shrink-0" />
                <span>{isAr ? '١٢+ لغة عالمية معتمدة' : '12+ Global Languages'}</span>
              </div>
            </div>

          </div>

          {/* 3D Boy Student Character Column (Right in LTR / Left in RTL) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Subtle Ambient Glow Behind Card */}
            <div className="absolute inset-0 bg-linear-to-tr from-blue-100/60 via-purple-100/50 to-orange-100/50 rounded-3xl blur-2xl transform scale-95" />

            {/* Main 3D Student Card */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-slate-300/70 bg-white group max-w-md w-full">
              <img
                src={hero3dStudentImg}
                alt="3D Animated Language Student Learning Online with Learnix"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Live Badge Overlay on top */}
              <div className="absolute top-4 inset-s-4 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold text-white font-mono">LIVE CLASS WebRTC</span>
              </div>

              {/* Floating Bottom Card: Interactive Learning HUD */}
              <div className="absolute bottom-3 inset-x-3 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 flex items-center justify-between text-xs shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center font-bold shadow-xs">
                    <GraduationCap className="w-5 h-5 text-active" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">
                      {isAr ? 'تعلم مع أفضل المعلمين' : 'Learn with Native Tutors'}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {isAr ? 'جلسات تفاعلية صوت وصورة' : 'Interactive video & voice HUD'}
                    </div>
                  </div>
                </div>
                
                <span className="font-bold text-primary text-xs px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-200 font-mono">
                  ★ 4.98 / 5
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Quantitative Proof Metrics from LANDING_PAGE_CONTENT.md */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {heroContent.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div
                className="text-2xl sm:text-3xl font-black tabular-nums"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
                {isAr ? stat.labelAr : stat.labelEn}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
