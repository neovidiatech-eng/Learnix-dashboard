import React from 'react';
import { ShieldCheck, CheckCircle2, Play } from 'lucide-react';
import { Language } from '../types';
import heroPreviewImg from '../assets/images/learnex_hero_preview_1792998228978.jpg';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
  onExplorePortals: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking, onExplorePortals }) => {
  const isAr = lang === 'ar';
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-(--border)">
      {/* Subtle ambient light gradient matching brand primary and active colors */}
      <div className="absolute top-0 inset-s-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-linear-to-b from-(--primary-light) via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Hero: Value Proposition & Visual Interface Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Right in RTL): Editorial & Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial kicker (Clean unboxed typography) */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-active tracking-wide">
              <span>{isAr ? 'منظومة تعليم اللغات الذكية' : 'Smart Language Learning Platform'}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-(--text-h) leading-[1.2] tracking-tight">
              {isAr ? (
                <>
                  منصة متكاملة ترتقي بتجربة{' '}
                  <span className="text-primary dark:text-blue-400">تعليم اللغات</span>{' '}
                  إلى أعلى مستويات الطلاقة
                </>
              ) : (
                <>
                  The complete ecosystem for{' '}
                  <span className="text-primary dark:text-blue-400">smart language education</span>{' '}
                  and fluent mastery
                </>
              )}
            </h1>

            {/* Subtitle / Description from Readme */}
            <p className="text-base sm:text-lg text-(--text) leading-relaxed max-w-2xl font-normal">
              {isAr
                ? 'Learnex منصة ويب حديثة مصممة لتقديم تجربة تعليمية تفاعلية وممتازة لكل من الطلاب، المعلمين، ومديري النظام. تهدف المنصة إلى تسهيل إدارة الكورسات، الحصص المباشرة، والتقارير المالية والتعليمية بكفاءة استثنائية.'
                : 'Learnex is a cutting-edge web platform crafted to deliver an interactive, superior learning experience for students, tutors, and system administrators. Unify course management, live classrooms, and financial oversight in one high-performance interface.'}
            </p>

            {/* Key Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-(--text-h)">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-active shrink-0" />
                <span>{isAr ? 'حصص تفاعلية مباشرة مع معلمين أصليين' : 'Live video classes with native tutors'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-active shrink-0" />
                <span>{isAr ? 'لوحة تحكم إدارية ومالية متكاملة' : 'Real-time financial & role analytics'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-active shrink-0" />
                <span>{isAr ? 'مستويات معتمدة دولياً من A1 إلى C2' : 'CEFR accredited levels from A1 to C2'}</span>
              </div>
              
            </div>



            {/* Trust and Compliance indicator */}
            <div className="pt-2 flex items-center gap-4 text-xs text-(--text)">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{isAr ? 'متوافق مع معايير حماية البيانات (GDPR)' : 'GDPR & Student Privacy Compliant'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Interface Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-(--border) shadow-xl bg-(--bg) group">
              <img
                src={heroPreviewImg}
                alt="Learnex Smart Language Learning Dashboard Interface"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                onError={(e) => {
                  // Fallback container in case of loading error
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="p-8 bg-linear-to-br from-primary to-[#1a4d74] text-white rounded-2xl min-h-90 flex flex-col justify-center items-center text-center">
                        <div class="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 text-2xl font-bold">Lx</div>
                        <h3 class="text-xl font-bold mb-2">Learnex Dashboard</h3>
                        <p class="text-sm text-slate-200 max-w-sm">منصة متكاملة لتعليم اللغات التفاعلي والطلاقة الحديثة</p>
                      </div>
                    `;
                  }
                }}
              />
              
              {/* Overlay Badge for About Us / Platform Teaser */}
              <div className="absolute bottom-3 inset-s-3 inset-e-3 p-3 bg-(--bg)/95 backdrop-blur-md rounded-xl border border-(--border) flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-(--text-h)">
                    {isAr ? 'مناهج معتمدة دولياً (CEFR)' : 'Certified CEFR Standards'}
                  </span>
                </div>
                <button
                  onClick={onExplorePortals}
                  className="text-active font-bold hover:underline cursor-pointer"
                >
                  {isAr ? 'عن المنصة ←' : 'Learn More →'}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Quantitative Proof Strip adjacent to Hero */}
        <div className="mt-12 pt-8 border-t border-(--border) grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-primary dark:text-blue-400 tabular-nums">
              62,000+
            </div>
            <div className="text-xs sm:text-sm text-(--text) font-medium">
              {isAr ? 'طالب نشط بالمنصة' : 'Active Language Learners'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-primary dark:text-blue-400 tabular-nums">
              1,200+
            </div>
            <div className="text-xs sm:text-sm text-(--text) font-medium">
              {isAr ? 'معلم خبير ومعتمد' : 'Certified Native Tutors'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-active tabular-nums">
              99.4%
            </div>
            <div className="text-xs sm:text-sm text-(--text) font-medium">
              {isAr ? 'معدل رضا الإدارة والمستخدمين' : 'Satisfaction Rating'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-primary dark:text-blue-400 tabular-nums">
              12+
            </div>
            <div className="text-xs sm:text-sm text-(--text) font-medium">
              {isAr ? 'لغة عالمية بمناهج CEFR' : 'Global Languages (CEFR A1-C2)'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
