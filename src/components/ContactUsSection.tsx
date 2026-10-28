"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  Clock,
  CheckCircle2,
  Headphones,
  MessageSquare,
} from "lucide-react";
import { Language } from "../types";
import { contactInfoData } from "../data/content";

export interface ContactUsSectionProps {
  lang: Language;
  onOpenBooking?: () => void;
}

export const ContactUsSection: React.FC<ContactUsSectionProps> = ({ lang }) => {
  const isAr = lang === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    language: "english",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="py-10 lg:py-15 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-primary text-xs font-bold uppercase tracking-wider">
            <Headphones className="w-3.5 h-3.5 text-active" />
            <span>{isAr ? contactInfoData.tagAr : contactInfoData.tagEn}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
            {isAr ? (
              <>
                فريق learnex{" "}
                <span className="text-primary">في خدمتك على مدار الساعة</span>
              </>
            ) : (
              <>
                The learnex Team{" "}
                <span className="text-primary">at Your Service 24/7</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {isAr ? contactInfoData.descAr : contactInfoData.descEn}
          </p>
        </div>

        {/* 2-Column Split: Interactive Form & Direct Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (Right in RTL): Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-[#0f172a]">
                  {isAr
                    ? "تم استلام استفسارك بنجاح!  "
                    : "Inquiry Received Successfully!  "}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {isAr
                    ? "شكراً لتواصلك مع learnex. سيتواصل معك أحد مستشارينا الأكاديميين عبر البريد أو الواتساب خلال دقائق معدودة."
                    : "Thank you for reaching out to learnex. One of our academic counselors will contact you via email or WhatsApp shortly."}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        language: "english",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl border border-slate-200 hover:border-primary text-xs sm:text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    {isAr ? "إرسال استفسار آخر" : "Send Another Inquiry"}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      {isAr ? "الاسم الكريم (Full Name)" : "Full Name"}{" "}
                      <span className="text-active">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={isAr ? "مثال: محمد أحمد" : "e.g. John Doe"}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      {isAr
                        ? "البريد الإلكتروني (Email Address)"
                        : "Email Address"}{" "}
                      <span className="text-active">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      {isAr
                        ? "رقم الواتساب (Phone / WhatsApp)"
                        : "WhatsApp / Phone Number"}{" "}
                      <span className="text-active">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+966 50 ... / +20 10 ..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    />
                  </div>

                  {/* Target Language */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      {isAr
                        ? "اللغة التي ترغب بتعلمها (Target Language)"
                        : "Target Language"}
                    </label>
                    <select
                      value={formData.language}
                      onChange={(e) =>
                        setFormData({ ...formData, language: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-colors cursor-pointer"
                    >
                      {contactInfoData.languages.map((langOpt) => (
                        <option key={langOpt.value} value={langOpt.value}>
                          {isAr ? langOpt.labelAr : langOpt.labelEn}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    {isAr
                      ? "نص الرسالة أو الاستفسار (Your Message)"
                      : "Your Message / Inquiry"}{" "}
                    <span className="text-active">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={
                      isAr
                        ? "أود الاستفسار عن تفاصيل الحصص الفردية وتحديد مستواي الأكاديمي..."
                        : "I would like to inquire about 1-on-1 private classes and placement assessment..."
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-active hover:bg-[#e06c12] text-white text-sm font-bold shadow-md shadow-orange-500/20 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {loading
                      ? isAr
                        ? "جاري الإرسال..."
                        : "Sending..."
                      : isAr
                        ? "إرسال الاستفسار الآن  "
                        : "Send Inquiry Now  "}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column (Left in RTL): Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-primary/30 transition-all shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#0f172a]">
                    {isAr
                      ? "البريد الإلكتروني المباشر"
                      : "Direct Email Support"}
                  </h3>
                  <div className="text-xs text-slate-600 space-y-0.5">
                    <p>
                      <a
                        href={`mailto:${contactInfoData.emailPrimary}`}
                        className="hover:text-active font-mono"
                      >
                        {contactInfoData.emailPrimary}
                      </a>
                    </p>
                    <p>
                      <a
                        href={`mailto:${contactInfoData.emailSecondary}`}
                        className="hover:text-active font-mono"
                      >
                        {contactInfoData.emailSecondary}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone / Customer Service */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-primary/30 transition-all shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-active flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#0f172a]">
                    {isAr
                      ? "خدمة العملاء والاتصال الهاتفي"
                      : "Customer Service Line"}
                  </h3>
                  <div className="text-xs text-slate-600 space-y-0.5" dir="ltr">
                    <p className="font-mono font-medium">
                      {contactInfoData.phone1}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Chat Support */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-primary/30 transition-all shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-accent flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#0f172a]">
                    {isAr ? "الدعم الفني المباشر" : "Live Chat Support"}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isAr ? contactInfoData.chatAr : contactInfoData.chatEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-primary/30 transition-all shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#0f172a]">
                    {isAr ? "أوقات العمل" : "Operational Availability"}
                  </h3>
                  <p className="text-xs text-emerald-700 font-bold">
                    {isAr ? contactInfoData.hoursAr : contactInfoData.hoursEn}
                  </p>
                  <p className="text-xs text-slate-500">
                    {isAr
                      ? "خدمة متواصلة طوال أيام الأسبوع"
                      : "Continuous 24/7 student & instructor support"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
