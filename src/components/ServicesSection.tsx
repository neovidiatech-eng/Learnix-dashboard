'use client';

import React from 'react';
import { UserCheck, Users, GraduationCap, ShieldCheck, Building2, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { servicesData } from '../data/content';

const sessionLiveImg = '/images/learnex_session_live_1792998229656.jpg';

export interface ServicesSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onOpenBooking }) => {
  const isAr = lang === 'ar';

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'private-sessions':
        return <UserCheck className="w-6 h-6 text-active" />;
      case 'group-classes':
        return <Users className="w-6 h-6 text-primary" />;
      case 'exam-prep':
        return <GraduationCap className="w-6 h-6 text-info" />;
      case 'certificates':
        return <ShieldCheck className="w-6 h-6 text-success" />;
      case 'corporate-solutions':
        return <Building2 className="w-6 h-6 text-accent" />;
      default:
        return <Sparkles className="w-6 h-6 text-active" />;
    }
  };

  return (
    <section id="services" className="py-10 lg:py-15 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-primary text-xs font-bold uppercase tracking-wider">
            <span>{isAr ? 'خدمات متكاملة' : 'Integrated Services'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
            {isAr ? (
              <>
                حلول تعليمية وتكنولوجية{' '}
                <span className="text-primary">صُممت لنجاحك</span>
              </>
            ) : (
              <>
                Educational & Tech Solutions{' '}
                <span className="text-primary">Engineered for Your Success</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {isAr
              ? 'نقدم منظومة شاملة من الخدمات المصممة لتلبية احتياجات الطلاب الفرديين، المجموعات التفاعلية، والشركات مع أعلى معايير الجودة الأكاديمية.'
              : 'Delivering a comprehensive suite of learning solutions crafted for individual learners, interactive cohorts, and enterprises with rigorous pedagogical standards.'}
          </p>
        </div>

        {/* 5 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center border border-slate-100 shadow-xs group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: `${svc.color}12` }}
                  >
                    {getServiceIcon(svc.id)}
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${svc.color}15`,
                      color: svc.color,
                    }}
                  >
                    {isAr ? svc.badgeAr : svc.badgeEn}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] pt-1">
                  {isAr ? svc.titleAr : svc.titleEn}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {isAr ? svc.descAr : svc.descEn}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-bold text-primary hover:text-active flex items-center gap-1.5 transition-colors cursor-pointer group-hover:underline"
                >
                  <span>{isAr ? 'ابدأ بهذه الخدمة' : 'Enroll in Service'}</span>
                  {isAr ? (
                    <ArrowLeft className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </button>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: svc.color }} />
              </div>
            </div>
          ))}

          {/* Interactive Classroom HUD Preview Card */}
          <div className="p-8 rounded-2xl border border-slate-200 bg-linear-to-br from-slate-50 to-white flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                  WebRTC HD Live
                </span>
                <span className="text-xs text-slate-500 font-mono">1080p / 60fps</span>
              </div>
              <h3 className="text-lg font-bold text-[#0f172a]">
                {isAr ? 'بيئة الفصول الحية الذكية' : 'Smart Live Classroom HUD'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isAr
                  ? 'بث مرئي فائق الوضوح، سبورة ذكية، تحليل فوري للموجات الصوتية ومخارج الحروف مع معلمك الأصلي.'
                  : 'Ultra-low latency audio/video, interactive whiteboard, live pronunciation waveform analysis.'}
              </p>
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs mt-5">
                <img
                  src={sessionLiveImg}
                  alt="Learnix Live Classroom Interface"
                  referrerPolicy="no-referrer"
                  className="w-full h-36 object-cover"
                />
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-colors cursor-pointer text-center"
              >
                {isAr ? 'تجربة الغرفة الافتراضية مجاناً' : 'Test Virtual Classroom Free'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
