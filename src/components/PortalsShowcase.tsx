import React, { useState } from 'react';
import {
  ShieldAlert,
  Users,
  BookOpen,
  Calendar,
  Receipt,
  Headphones,
  FileText,
  CalendarDays,
  ClipboardCheck,
  FolderUp,
  MonitorPlay,
  GraduationCap,
  Video,
  TrendingUp,
  Sparkles,
  CheckCircle,
  ExternalLink,
  DollarSign,
  ChevronRight,
  ChevronLeft,
  Volume2
} from 'lucide-react';
import { Language, PortalType } from '../types';
import { portalsData } from '../data/content';

interface PortalsShowcaseProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const PortalsShowcase: React.FC<PortalsShowcaseProps> = ({ lang, onOpenBooking }) => {
  const [activePortal, setActivePortal] = useState<PortalType>('admin');
  const isAr = lang === 'ar';

  const currentPortalData = portalsData.find((p) => p.id === activePortal) || portalsData[0];

  // Helper for rendering feature icons
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-[var(--color-primary)] dark:text-blue-400' };
    switch (iconName) {
      case 'LayoutDashboard': return <Receipt {...props} />;
      case 'ShieldCheck': return <ShieldAlert {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Calendar': return <Calendar {...props} />;
      case 'Receipt': return <Receipt {...props} />;
      case 'Headphones': return <Headphones {...props} />;
      case 'CalendarDays': return <CalendarDays {...props} />;
      case 'ClipboardCheck': return <ClipboardCheck {...props} />;
      case 'FolderUp': return <FolderUp {...props} />;
      case 'MonitorPlay': return <MonitorPlay {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Video': return <Video {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      default: return <FileText {...props} />;
    }
  };

  return (
    <section id="portals" className="py-16 lg:py-24 bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="text-xs md:text-sm font-bold text-[var(--color-active)] uppercase tracking-wider">
            {isAr ? 'منظومة متكاملة لجميع الأدوار' : 'Unified Ecosystem for All Roles'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--text-h)]">
            {isAr ? 'ثلاث بوابات مخصصة تضمن الكفاءة والنتائج' : 'Three Dedicated Portals for Maximum Educational Impact'}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text)]">
            {isAr
              ? 'صممت منصة Learnex بعناية لتخدم احتياجات مديري النظام، المعلمين، والطلاب في بيئة رقمية متكاملة وسهلة الاستخدام.'
              : 'Learnex provides tailored digital workspaces for administrators, educators, and language learners to collaborate seamlessly.'}
          </p>

          {/* Interactive Portal Switcher Tabs */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-[var(--code-bg)] border border-[var(--border)] gap-1">
              {portalsData.map((portal) => {
                const isActive = activePortal === portal.id;
                return (
                  <button
                    key={portal.id}
                    onClick={() => setActivePortal(portal.id)}
                    className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[var(--color-primary)] text-white shadow-md'
                        : 'text-[var(--text)] hover:text-[var(--text-h)] hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {isAr ? portal.nameAr : portal.nameEn}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Portal Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Portal Details & Feature Grid */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Portal Headline and Summary */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-active)]">
                <span>{isAr ? currentPortalData.badgeAr : currentPortalData.badgeEn}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[var(--text)]">{isAr ? 'صلاحيات متقدمة' : 'Role-Specific Capabilities'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-h)]">
                {isAr ? currentPortalData.nameAr : currentPortalData.nameEn}
              </h3>
              <p className="text-sm sm:text-base text-[var(--text)] leading-relaxed">
                {isAr ? currentPortalData.descriptionAr : currentPortalData.descriptionEn}
              </p>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[var(--primary-light)] border border-[var(--primary-border)]">
              {currentPortalData.metrics.map((metric, idx) => (
                <div key={idx} className="text-center space-y-0.5">
                  <div className="text-lg sm:text-xl font-black text-[var(--color-primary)] dark:text-blue-300 tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-xs text-[var(--text)]">
                    {isAr ? metric.labelAr : metric.labelEn}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentPortalData.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg)] learnex-card-hover space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-[var(--primary-light)] flex items-center justify-center">
                      {renderIcon(feature.icon)}
                    </div>
                    <span className="text-[11px] font-medium text-[var(--color-active)]">
                      {isAr ? feature.tagAr : feature.tagEn}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[var(--text-h)]">
                    {isAr ? feature.titleAr : feature.titleEn}
                  </h4>
                  <p className="text-xs text-[var(--text)] leading-relaxed">
                    {isAr ? feature.descAr : feature.descEn}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA action for this portal */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[var(--color-active)] hover:bg-[#e06f17] rounded-xl shadow-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <span>{isAr ? `تجربة ${currentPortalData.nameAr}` : `Request Demo of ${currentPortalData.nameEn}`}</span>
                {isAr ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Column 2: Live Interactive Portal Simulator */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Admin Live Mockup */}
            {activePortal === 'admin' && (
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] shadow-lg overflow-hidden">
                <div className="px-4 py-3 bg-[var(--primary)] text-white flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span>{isAr ? 'لوحة تحكم المسؤول (Live Demo)' : 'Admin Console (Live Demo)'}</span>
                  </div>
                  <span className="font-mono text-slate-300">Recharts v2.13</span>
                </div>

                <div className="p-5 space-y-5">
                  {/* Revenue & Growth Quick Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[var(--code-bg)] border border-[var(--border)]">
                      <div className="text-xs text-[var(--text)]">{isAr ? 'إيرادات الشهر' : 'Monthly Gross'}</div>
                      <div className="text-lg font-black text-[var(--text-h)] tabular-nums">$48,250.00</div>
                      <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">+18.4% {isAr ? 'عن الشهر السابق' : 'vs last month'}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[var(--code-bg)] border border-[var(--border)]">
                      <div className="text-xs text-[var(--text)]">{isAr ? 'الحصص المباشرة' : 'Live Sessions'}</div>
                      <div className="text-lg font-black text-[var(--color-active)] tabular-nums">412 {isAr ? 'حصة اليوم' : 'Today'}</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">99.8% {isAr ? 'معدل الحضور' : 'Attendance'}</div>
                    </div>
                  </div>

                  {/* SVG Recharts-style bar & line preview */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg)] space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-[var(--text-h)]">
                      <span>{isAr ? 'أداء الإيرادات ونمو الاشتراكات (Recharts)' : 'Revenue & Enrollment Velocity'}</span>
                      <span className="text-[var(--color-active)] font-mono">Q1 - Q4</span>
                    </div>

                    {/* SVG Chart Graphic */}
                    <div className="h-32 w-full flex items-end justify-between gap-2 pt-4 px-1">
                      {[
                        { m: 'Jan', h: 45, v: '$22k' },
                        { m: 'Feb', h: 60, v: '$31k' },
                        { m: 'Mar', h: 52, v: '$28k' },
                        { m: 'Apr', h: 78, v: '$42k' },
                        { m: 'May', h: 90, v: '$48k' },
                        { m: 'Jun', h: 84, v: '$45k' },
                      ].map((item, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                          <span className="text-[10px] text-[var(--text)] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.v}
                          </span>
                          <div
                            style={{ height: `${item.h}%` }}
                            className="w-full rounded-t-md bg-[var(--color-primary)] group-hover:bg-[var(--color-active)] transition-colors duration-200"
                          />
                          <span className="text-[10px] text-[var(--text)] font-medium">{item.m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Admin Quick Action: User Roles & Discount Coupon */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-[var(--text-h)]">
                      {isAr ? 'أحدث كوبونات الخصم الترويجية' : 'Active Promotional Coupons'}
                    </div>
                    <div className="p-3 rounded-xl border border-dashed border-[var(--color-active)]/50 bg-[var(--color-active)]/5 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-mono font-bold text-[var(--color-active)]">LEARNEX_SPRING26</div>
                        <div className="text-[11px] text-[var(--text)]">{isAr ? 'خصم 25% على كورسات الإنجليزية المتقدمة' : '25% OFF Advanced English Tracks'}</div>
                      </div>
                      <span className="px-2 py-1 rounded bg-[var(--color-active)] text-white text-[10px] font-bold">
                        {isAr ? 'نشط' : 'Active'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Teacher Live Mockup */}
            {activePortal === 'teacher' && (
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] shadow-lg overflow-hidden">
                <div className="px-4 py-3 bg-[var(--primary)] text-white flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span>{isAr ? 'بوابة المعلم - جدول الحصص والتقييم' : 'Teacher Portal - Schedule & Grading'}</span>
                  </div>
                  <span className="text-slate-300">{isAr ? 'منطقة زمنية: GMT+3' : 'Timezone: GMT+3'}</span>
                </div>

                <div className="p-5 space-y-4">
                  {/* Current Active Session Card */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[#1b507b] text-white space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono bg-white/15 px-2 py-0.5 rounded text-[11px]">10:00 - 11:00 AM</span>
                      <span className="flex items-center gap-1.5 text-emerald-300 font-bold text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        {isAr ? 'حصة جارية الآن' : 'In Progress'}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-base">{isAr ? 'المحادثة المتقدمة: الإنجليزية للأعمال (B2)' : 'Business English Conversation (B2)'}</h4>
                      <p className="text-xs text-slate-200 mt-0.5">8 {isAr ? 'طلاب متصلين في الغرفة الافتراضية' : 'Students connected in HD room'}</p>
                    </div>
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-2 bg-[var(--color-active)] hover:bg-[#e06f17] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      {isAr ? 'الانضمام كمعلم مراقب' : 'Join as Observer Tutor'}
                    </button>
                  </div>

                  {/* Attendance & Rubric Score Simulator */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-[var(--text-h)]">
                      {isAr ? 'متابعة حضور الطلاب وتقييم النطق' : 'Real-time Student Roll Call & Pronunciation'}
                    </div>

                    <div className="divide-y divide-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden text-xs">
                      {[
                        { name: isAr ? 'أحمد منصور' : 'Ahmed Mansoor', lang: 'En-B2', score: '94%', state: isAr ? 'حاضر' : 'Present' },
                        { name: isAr ? 'سارة العتيبي' : 'Sarah Al-Otaibi', lang: 'En-B2', score: '98%', state: isAr ? 'حاضر' : 'Present' },
                        { name: isAr ? 'كريم رضوان' : 'Kareem Radwan', lang: 'En-B2', score: '89%', state: isAr ? 'حاضر' : 'Present' },
                      ].map((std, i) => (
                        <div key={i} className="p-2.5 flex items-center justify-between bg-[var(--bg)] hover:bg-[var(--code-bg)]">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[var(--primary-light)] text-[var(--color-primary)] font-bold flex items-center justify-center text-[10px]">
                              {std.name[0]}
                            </div>
                            <span className="font-semibold text-[var(--text-h)]">{std.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-emerald-600 font-bold">{std.score}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-semibold">
                              {std.state}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Student Live Mockup */}
            {activePortal === 'student' && (
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] shadow-lg overflow-hidden">
                <div className="px-4 py-3 bg-[var(--primary)] text-white flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-active)]" />
                    <span>{isAr ? 'بوابة الطالب - لوحة التعلم التفاعلية' : 'Student HUD - Interactive Learning'}</span>
                  </div>
                  <span className="text-amber-300 font-mono">Level B2.3</span>
                </div>

                <div className="p-5 space-y-4">
                  {/* Progress Card */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--code-bg)] space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-[var(--text-h)]">
                      <span>{isAr ? 'المسار النشط: المحادثة والطلاقة' : 'Active Course: Conversational Fluency'}</span>
                      <span className="text-[var(--color-active)] font-mono">68% {isAr ? 'مكتمل' : 'Completed'}</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-[var(--border)] overflow-hidden">
                      <div className="h-full bg-[var(--color-active)] rounded-full w-[68%]" />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[var(--text)]">
                      <span>{isAr ? '24 من 35 درساً تم إنجازه' : '24 / 35 lessons completed'}</span>
                      <span className="font-mono">1,420 {isAr ? 'كلمة مكتسبة' : 'Words Mastered'}</span>
                    </div>
                  </div>

                  {/* Pronunciation & SRS Card preview */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg)] space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[var(--text-h)]">{isAr ? 'تمرين النطق الصوتي الفوري' : 'Speech Pronunciation Trainer'}</span>
                      <span className="text-[10px] font-mono text-[var(--color-active)]">SRS Level 4</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[var(--primary-light)] border border-[var(--primary-border)] flex items-center justify-between">
                      <div>
                        <div className="text-base font-bold text-[var(--color-primary)] dark:text-blue-300">"Eloquent Speaker"</div>
                        <div className="text-xs text-[var(--text)]">{isAr ? 'متحدث فصيح وبليغ' : 'Fluent and persuasive'}</div>
                      </div>
                      <button
                        onClick={() => {
                          if ('speechSynthesis' in window) {
                            const utterance = new SpeechSynthesisUtterance('Eloquent Speaker');
                            utterance.lang = 'en-US';
                            window.speechSynthesis.speak(utterance);
                          }
                        }}
                        className="p-2 rounded-lg bg-white dark:bg-slate-800 text-[var(--color-active)] shadow-sm hover:scale-105 transition-transform cursor-pointer"
                        title={isAr ? 'استمع للنطق الأصلي' : 'Listen to native pronunciation'}
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Visual Isometric Asset Banner below mockup */}
            <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg)]">
              <img
                src="/src/assets/images/learnex_portals_preview_1792998229404.jpg"
                alt="Learnex Portals Overview Architecture"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
