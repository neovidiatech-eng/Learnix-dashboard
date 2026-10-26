import React from 'react';
import { Target, Compass, Award, Shield, CheckCircle, Sparkles, HeartHandshake } from 'lucide-react';
import { Language } from '../types';

interface AboutUsSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ lang, onOpenBooking }) => {
  const isAr = lang === 'ar';

  const values = [
    {
      icon: <Target className="w-6 h-6 text-active" />,
      titleAr: 'رسالتنا التعليمية',
      titleEn: 'Our Core Mission',
      descAr: 'تمكين المتعلمين في كل مكان من التحدث بطلاقة وثقة، من خلال توفير بيئة صفية تفاعلية مباشرة مع نخبة من المعلمين المعتمدين دولياً.',
      descEn: 'Empowering global learners to speak fluently and confidently through interactive live classrooms led by certified international educators.',
    },
    {
      icon: <Compass className="w-6 h-6 text-primary dark:text-blue-400" />,
      titleAr: 'رؤيتنا المستقبلية',
      titleEn: 'Our Vision',
      descAr: 'أن تصبح منصة Learnex الخيار الأول عالمياً في تعليم اللغات، وربط الثقافات عبر تقنيات تفاعلية ذكية تجعل التعلم تجربة ممتعة ومستمرة.',
      descEn: 'To be the premier global ecosystem for language acquisition, bridging cultures through smart interactive tech that makes learning engaging and lifelong.',
    },
    {
      icon: <Award className="w-6 h-6 text-active" />,
      titleAr: 'مناهج معتمدة دولياً (CEFR)',
      titleEn: 'Standardized CEFR Curricula',
      descAr: 'نعتمد الإطار الأوروبي المشترك من المستوى المبتدئ A1 حتى الاحتراف التام C2 مع تقييمات موضوعية دورية وشهادات إتقان.',
      descEn: 'Strict adherence to Common European Framework standards from A1 to C2 mastery, with standardized assessments and certificates.',
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      titleAr: 'أمان وخصوصية تامة',
      titleEn: 'Privacy & Child Safety',
      descAr: 'نلتزم بأعلى معايير حماية البيانات والخصوصية المعتمدة (GDPR & COPPA) لضمان بيئة تعليمية آمنة وموثوقة لجميع الأعمار.',
      descEn: 'Full compliance with international privacy protocols (GDPR & COPPA), ensuring safe and monitored learning spaces for all ages.',
    },
  ];

  const milestones = [
    { number: '62,000+', labelAr: 'طالب خريج ومستمر', labelEn: 'Active Learners' },
    { number: '1,200+', labelAr: 'معلم متحدث أصلي', labelEn: 'Native Tutors' },
    { number: '99.4%', labelAr: 'نسبة رضا الطلاب', labelEn: 'Satisfaction Rate' },
    { number: '12+', labelAr: 'لغة عالمية معتمدة', labelEn: 'Languages Taught' },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-(--bg) border-b border-(--border) transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--primary-light) text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-active" />
            <span>{isAr ? 'من نحن — About Us' : 'About Learnex Platform'}</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-(--text-h) leading-tight">
            {isAr ? (
              <>
                نُعيد ابتكار تجربة{' '}
                <span className="text-primary dark:text-blue-400">تعليم اللغات</span>{' '}
                بمنهجية علمية حديثة
              </>
            ) : (
              <>
                Reinventing the{' '}
                <span className="text-primary dark:text-blue-400">Language Journey</span>{' '}
                with Modern Pedagogy
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-(--text) leading-relaxed">
            {isAr
              ? 'انطلقت منصة Learnex بهدف جعل إتقان اللغات الأجنبية متاحاً وسهلاً وممتعاً لكل متعلم. نجمع بين أحدث تقنيات الفصول الحية والذكاء الاصطناعي المساند وبين نخبة من أفضل المعلمين الأصليين حول العالم.'
              : 'Learnex was founded to transform language learning into an accessible, immersive, and empowering journey. We unite low-latency live classrooms, intelligent learner analytics, and elite native educators worldwide.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-(--border) bg-(--code-bg) hover:bg-(--bg) learnex-card-hover flex flex-col justify-between group shadow-sm transition-all"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-(--bg) border border-(--border) flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-(--text-h)">
                  {isAr ? val.titleAr : val.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-(--text) leading-relaxed">
                  {isAr ? val.descAr : val.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Feature Card with Story and Stats */}
        <div className="rounded-3xl border border-(--border) bg-linear-to-br from-(--primary-light) via-(--bg) to-(--code-bg) p-8 sm:p-12 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-active">
                <HeartHandshake className="w-4 h-4" />
                <span>{isAr ? 'فلسفتنا التعليمية' : 'Our Teaching Philosophy'}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-(--text-h)">
                {isAr
                  ? 'التركيز على الطلاقة الواقعية والتحدث الفعلي من اليوم الأول'
                  : 'Real Fluency Built on Conversational Practice from Day One'}
              </h3>

              <p className="text-xs sm:text-sm text-(--text) leading-relaxed">
                {isAr
                  ? 'نؤمن في Learnex بأن اللغة ممارسة وتواصل وليست مجرد قواعد نظرية. لذلك صُممت كل جلسة لتركز على مهارات التحدث والاستماع، مع تغذية راجعة صوتية وملاحظات مباشرة تُعزز ثقة الطالب بنفسه خطوة بخطوة.'
                  : 'We believe language is living connection rather than passive grammar memorization. Every Learnex class prioritizes active conversational fluency, accompanied by immediate tutor feedback and tailored homework cohorts.'}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl bg-active hover:bg-[#df6f19] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  {isAr ? 'ابدأ رحلتك التعليمية الآن' : 'Start Your Journey Today'}
                </button>
                <div className="flex items-center gap-2 text-xs text-(--text)">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>{isAr ? 'اختبار تحديد مستوى مجاني تماماً' : '100% Free Placement Assessment'}</span>
                </div>
              </div>
            </div>

            {/* Impact numbers column */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {milestones.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-(--bg) border border-(--border) shadow-xs text-center space-y-1"
                >
                  <div className="text-2xl sm:text-3xl font-black text-primary dark:text-blue-400 tabular-nums">
                    {item.number}
                  </div>
                  <div className="text-xs text-(--text) font-semibold">
                    {isAr ? item.labelAr : item.labelEn}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
