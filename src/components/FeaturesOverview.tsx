'use client';

import React from 'react';
import { Video, Mic, Clock, Globe2 } from 'lucide-react';
import { Language } from '../types';

const sessionLiveImg = '/images/learnex_session_live_1792998229656.jpg';

interface FeaturesOverviewProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const FeaturesOverview: React.FC<FeaturesOverviewProps> = ({ lang, onOpenBooking }) => {
  const isAr = lang === 'ar';

  const highlights = [
    {
      icon: <Video className="w-5 h-5 text-active" />,
      titleAr: 'حصص فيديو مباشرة فائقة الوضوح',
      titleEn: 'Ultra-Low Latency HD Virtual Rooms',
      descAr: 'فصول دراسية افتراضية متقدمة بتقنية WebRTC تضمن تجربة صوتية ومرئية نقية بدون أي تقطيع أو تأخير.',
      descEn: 'State-of-the-art WebRTC media engine delivering crystal clear voice and video interaction.',
    },
    {
      icon: <Mic className="w-5 h-5 text-active" />,
      titleAr: 'تحليل النطق الصوتي التفاعلي',
      titleEn: 'Speech Waveform & Pronunciation Feedback',
      descAr: 'مخطط موجي صوتي يتيح للمعلم والطالب مقارنة النطق الصوتي الفوري مع متحدثين أصليين.',
      descEn: 'Real-time pitch and phoneme wave comparison to perfect accent and speech rhythm.',
    },
    {
      icon: <Clock className="w-5 h-5 text-active" />,
      titleAr: 'مرونة كاملة في المواعيد والمناطق الزمنية',
      titleEn: 'Dynamic Timezone Synchronization',
      descAr: 'مزامنة تلقائية للجداول بين الطلاب والمعلمين في مختلف دول العالم لضمان عدم تفويت أي حصة.',
      descEn: 'Automatic daylight and cross-timezone slot scheduling for global language cohorts.',
    },
    {
      icon: <Globe2 className="w-5 h-5 text-active" />,
      titleAr: 'إطار الإتقان الأوروبي المشترك (CEFR)',
      titleEn: 'Rigorous CEFR Level Progression',
      descAr: 'مناهج مقسمة علمياً من A1 (المبتدئ) حتى C2 (الطلاقة التامة) مع اختبارات قياس معتمدة.',
      descEn: 'Standardized curricular progression from basic A1 to professional mastery C2.',
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-(--code-bg) border-b border-(--border)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="text-xs md:text-sm font-bold text-active uppercase tracking-wider">
            {isAr ? 'بيئة تعلم غامرة' : 'Immersive Learning Environment'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-(--text-h)">
            {isAr ? 'تجربة صفية تفاعلية تعيد صياغة تعلم اللغات' : 'Next-Gen Classroom Designed for Real Conversation'}
          </h2>
          <p className="text-sm sm:text-base text-(--text)">
            {isAr
              ? 'تجمع منصة Learnex بين البث المباشر عالي الجودة والوسائط التعليمية الذكية لتمكين الطالب من التحدث بطلاقة من الدرس الأول.'
              : 'Learnex fuses interactive video classrooms with spaced-repetition vocabulary HUDs, helping learners speak confidently from day one.'}
          </p>
        </div>

        {/* 2-Column Split: Visual Classroom Screenshot & Feature Points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Showcase: Live Classroom Tablet */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-(--border) shadow-xl bg-(--bg) group">
              <img
                src={sessionLiveImg}
                alt="Learnex Live Interactive Classroom Session"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="p-4 bg-(--bg) border-t border-(--border) flex items-center justify-between text-xs">
                <span className="font-semibold text-(--text-h)">
                  {isAr ? 'غرفة تدريب فردية وجماعية تفاعلية' : '1-on-1 & Small Group Interactive Class'}
                </span>
                <span className="text-active font-mono font-bold">
                  WebRTC HD
                </span>
              </div>
            </div>
          </div>

          {/* Feature Highlights Grid */}
          <div className="lg:col-span-6 space-y-5">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-(--border) bg-(--bg) learnex-card-hover flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-(--primary-light) shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-(--text-h)">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-(--text) leading-relaxed">
                    {isAr ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-primary hover:bg-[#1a4d74] text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
              >
                {isAr ? 'تجربة الغرفة الافتراضية الآن' : 'Test Virtual Classroom Demo'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
