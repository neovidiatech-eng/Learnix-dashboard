import React, { useState } from 'react';
import { Mail, Phone, Send, Clock, CheckCircle2, Headphones } from 'lucide-react';
import { Language } from '../types';

interface ContactUsSectionProps {
  lang: Language;
  onOpenBooking?: () => void;
}

export const ContactUsSection: React.FC<ContactUsSectionProps> = ({ lang, onOpenBooking }) => {
  const isAr = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'registration',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate swift network dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-(--code-bg) border-b border-(--border) transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--primary-light) text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Headphones className="w-3.5 h-3.5 text-active" />
            <span>{isAr ? 'تواصل معنا — Contact Us' : 'Get In Touch'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-(--text-h) leading-tight">
            {isAr ? (
              <>
                فريقنا الأكاديمي والتقني{' '}
                <span className="text-primary dark:text-blue-400">في خدمتكم دائماً</span>
              </>
            ) : (
              <>
                Our Academic & Tech Team is{' '}
                <span className="text-primary dark:text-blue-400">Always Here for You</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-(--text) leading-relaxed">
            {isAr
              ? 'هل لديك استفسار حول الدورات، الخطط الدراسية، أو ترغب في شراكة مؤسسية؟ نسعد بالتواصل معك وسيقوم مستشارنا التعليمي بالرد خلال وقت وجيز.'
              : 'Have questions about courses, learning paths, or corporate partnerships? Reach out and our educational advisors will assist you promptly.'}
          </p>
        </div>

        {/* 2-Column Split: Interactive Form & Direct Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-(--bg) p-6 sm:p-10 rounded-3xl border border-(--border) shadow-md">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-(--text-h)">
                  {isAr ? 'تم استلام رسالتك بنجاح!' : 'Message Received Successfully!'}
                </h3>
                <p className="text-sm text-(--text) max-w-md mx-auto leading-relaxed">
                  {isAr
                    ? 'شكراً لتواصلك مع Learnex. سيتواصل معك أحد مستشارينا الأكاديميين خلال ساعات العمل القادمة.'
                    : 'Thank you for contacting Learnex. One of our educational advisors will get in touch with you shortly.'}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'registration', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl border border-(--border) hover:border-(--primary-border) text-xs sm:text-sm font-bold text-(--text-h) hover:bg-(--primary-light) transition-colors cursor-pointer"
                  >
                    {isAr ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-(--text-h) block">
                      {isAr ? 'الاسم بالكامل' : 'Full Name'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isAr ? 'مثال: أحمد محمد' : 'e.g. John Doe'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-(--border) bg-(--code-bg) text-(--text-h) text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-(--text-h) block">
                      {isAr ? 'البريد الإلكتروني' : 'Email Address'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-(--border) bg-(--code-bg) text-(--text-h) text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-(--text-h) block">
                      {isAr ? 'رقم الهاتف / واتساب' : 'Phone / WhatsApp'}
                    </label>
                    <input
                      type="tel"
                      placeholder="+966 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-(--border) bg-(--code-bg) text-(--text-h) text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Subject field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-(--text-h) block">
                      {isAr ? 'نوع الاستفسار' : 'Inquiry Category'}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-(--border) bg-(--code-bg) text-(--text-h) text-sm focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="registration">{isAr ? 'التسجيل والاشتراكات والأسعار' : 'Admissions & Pricing'}</option>
                      <option value="support">{isAr ? 'الدعم الفني وحسابات الطلاب' : 'Technical & Student Support'}</option>
                      <option value="partnerships">{isAr ? 'الشراكات والمدارس والمؤسسات' : 'B2B & School Partnerships'}</option>
                      <option value="other">{isAr ? 'استفسار عام آخر' : 'General Inquiry'}</option>
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-(--text-h) block">
                    {isAr ? 'نص الرسالة أو الاستفسار' : 'Your Message'} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={
                      isAr
                        ? 'اكتب تفاصيل استفسارك هنا وسنكون سعداء بمساعدتك...'
                        : 'Write the details of your inquiry here...'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-(--border) bg-(--code-bg) text-(--text-h) text-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-active hover:bg-[#df6f19] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {loading
                        ? isAr
                          ? 'جاري الإرسال...'
                          : 'Sending...'
                        : isAr
                        ? 'إرسال الرسالة الآن'
                        : 'Send Message'}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Channel 1: WhatsApp & Phone */}
            <div className="p-6 rounded-2xl border border-(--border) bg-(--bg) learnex-card-hover flex items-start gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-(--text-h)">
                  {isAr ? 'الهاتف والواتساب المباشر' : 'Direct Phone & WhatsApp'}
                </h4>
                <p className="text-xs text-(--text)">
                  {isAr ? 'مستشارونا جاهزون للمحادثة الفورية' : 'Instant chat with learning advisors'}
                </p>
                <div className="pt-1.5 flex flex-col gap-1">
                  <a
                    href="https://wa.me/966500000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>+966 50 000 0000 (WhatsApp)</span>
                  </a>
                  <span className="text-xs font-mono text-(--text)">+20 100 000 0000 (MENA Line)</span>
                </div>
              </div>
            </div>

            {/* Direct Channel 2: Emails */}
            <div className="p-6 rounded-2xl border border-(--border) bg-(--bg) learnex-card-hover flex items-start gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-(--primary-light) text-primary dark:text-blue-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-(--text-h)">
                  {isAr ? 'البريد الإلكتروني' : 'Official Support Email'}
                </h4>
                <p className="text-xs text-(--text)">
                  {isAr ? 'للاستفسارات العامة والتقنية' : 'General & academic inquiries'}
                </p>
                <div className="pt-1.5 space-y-1 text-xs sm:text-sm font-semibold">
                  <div>
                    <a href="mailto:support@learnex.org" className="text-active hover:underline">
                      support@learnex.org
                    </a>
                  </div>
                  <div>
                    <a href="mailto:info@learnex.org" className="text-(--text-h) hover:underline">
                      info@learnex.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Channel 3: Working Hours & Availability */}
            <div className="p-6 rounded-2xl border border-(--border) bg-(--bg) learnex-card-hover flex items-start gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-(--text-h)">
                  {isAr ? 'أوقات الدعم المباشر' : 'Live Support Hours'}
                </h4>
                <p className="text-xs text-(--text) leading-relaxed">
                  {isAr
                    ? 'فريق الدعم الفني متواجد 24/7 لمتابعة الحصص. المستشارون الأكاديميون متاحون يومياً من 9:00 ص إلى 10:00 م.'
                    : 'Classroom tech support is live 24/7. Academic admissions teams are available daily from 9:00 AM to 10:00 PM.'}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
