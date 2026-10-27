'use client';

import React, { useState } from 'react';
import { Atom, Zap, Palette, Boxes, Compass, Table, BarChart3, CheckCircle2, Cpu } from 'lucide-react';
import { Language } from '../types';
import { techStackData } from '../data/content';

interface TechStackSectionProps {
  lang: Language;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelAr: 'جميع التقنيات', labelEn: 'All Technologies' },
    { id: 'frontend', labelAr: 'واجهة المستخدم', labelEn: 'Frontend Core' },
    { id: 'data', labelAr: 'البيانات والرسوم', labelEn: 'Data & Charts' },
    { id: 'enterprise', labelAr: 'الأمان والتحقق', labelEn: 'Security & Enterprise' },
  ];

  const getCategoryFilter = (itemCat: string) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'frontend') return ['Core Frontend', 'Build Tooling', 'Styling & Design System', 'Navigation & Routing'].includes(itemCat);
    if (activeCategory === 'data') return ['Data Management', 'Data Visualization'].includes(itemCat);
    if (activeCategory === 'enterprise') return ['Enterprise Components', 'Forms & Validation'].includes(itemCat);
    return true;
  };

  const filteredItems = techStackData.filter((item) => getCategoryFilter(item.category));

  const renderIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-primary dark:text-blue-400' };
    switch (name) {
      case 'Atom': return <Atom {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'Table': return <Table {...props} />;
      case 'BarChart3': return <BarChart3 {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      default: return <Cpu {...props} />;
    }
  };

  return (
    <section id="tech-stack" className="py-16 lg:py-24 bg-(--bg) border-b border-(--border)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="text-xs md:text-sm font-bold text-active uppercase tracking-wider">
            {isAr ? 'بنية تحتية هندسية فائقة' : 'Engineered for Scale & Speed'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-(--text-h)">
            {isAr ? 'التقنيات المستخدمة في بناء المنصة' : 'Production-Grade Modern Tech Stack'}
          </h2>
          <p className="text-sm sm:text-base text-(--text)">
            {isAr
              ? 'تم بناء المنصة باستخدام أحدث التقنيات لضمان السرعة، الأمان، وسهولة الصيانة والتطوير المستقبلي.'
              : 'Constructed using industry-standard enterprise tooling designed for reactive UI, rigorous typing, and sub-millisecond execution.'}
          </p>

          {/* Category Tabs */}
          <div className="pt-2 flex items-center justify-center">
            <div className="inline-flex p-1 rounded-xl bg-(--code-bg) border border-(--border) gap-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    activeCategory === cat.id
                      ? 'bg-(--bg) text-(--text-h) shadow-sm'
                      : 'text-(--text) hover:text-(--text-h)'
                  }`}
                >
                  {isAr ? cat.labelAr : cat.labelEn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-(--border) bg-(--bg) learnex-card-hover flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-(--primary-light) flex items-center justify-center">
                    {renderIcon(tech.iconName)}
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-(--code-bg) text-(--text) border border-(--border)">
                    {tech.badge}
                  </span>
                </div>

                <div>
                  <div className="text-xs font-bold text-active tracking-wide">
                    {tech.category}
                  </div>
                  <h3 className="text-base font-bold text-(--text-h) mt-0.5">
                    {tech.name}
                  </h3>
                </div>

                <p className="text-xs text-(--text) leading-relaxed">
                  {isAr ? tech.roleAr : tech.roleEn}
                </p>
              </div>

              {/* Status footer */}
              <div className="pt-3 border-t border-(--border) flex items-center justify-between text-[11px] text-(--text)">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {isAr ? 'جاهز للإنتاج' : 'Production Ready'}
                </span>
                <span className="font-mono text-[10px]">Zero Slop</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Architecture Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-linear-to-r from-(--primary) to-[#1b507b] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-start">
            <h4 className="text-lg font-bold">
              {isAr ? 'هندسة معمارية نظيفة وقابلة للتوسع (Clean Architecture)' : 'Modular & Scalable Clean Architecture'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-200">
              {isAr
                ? 'فصل كامل بين طبقات العرض (UI)، المنطق البرمجي (Hooks)، وإدارة الحالة مع نماذج Zod الصارمة.'
                : 'Strict separation of concerns between UI components, custom hooks, services layer, and typed Zod schemas.'}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="font-mono text-xs px-3 py-1.5 rounded-lg bg-white/10 border border-white/20">
              TypeScript Strict: True
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
