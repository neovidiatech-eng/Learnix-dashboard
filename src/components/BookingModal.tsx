'use client';

import React, { useState, useRef } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Phone, Mail, User } from 'lucide-react';
import { Language } from '../types';

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, lang }) => {
  const isAr = lang === 'ar';
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: 'English',
    level: 'Beginner (A1/A2)',
    role: 'Student',
  });

  // OTP State with 4 digits for custom-otp styling
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  if (!isOpen) return null;

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-advance
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleSubmitStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setStep(2);
  };

  const handleVerifyOtp = () => {
    setStep(3);
  };

  const resetModal = () => {
    setStep(1);
    setOtp(['', '', '', '']);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center font-black text-sm">
              Lx
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                {isAr ? 'حجز حصة تجريبية واختبار تحديد المستوى' : 'Book Free Trial & Placement Test'}
              </h3>
              <p className="text-xs text-slate-500">
                {isAr ? 'جلسة مجانية فردية 30 دقيقة مع معلم أصلي' : 'Free 30-minute 1-on-1 session with a native tutor'}
              </p>
            </div>
          </div>
          <button
            onClick={resetModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {/* Step 1: User & Course Selection Form */}
          {step === 1 && (
            <form onSubmit={handleSubmitStep1} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {isAr ? 'الاسم الكامل' : 'Full Name'} <span className="text-active">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute inset-s-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isAr ? 'مثال: محمد أحمد' : 'e.g. Alex Johnson'}
                    className="w-full ps-9 pe-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {isAr ? 'البريد الإلكتروني' : 'Email Address'} <span className="text-active">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute inset-s-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full ps-9 pe-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {isAr ? 'رقم الواتساب' : 'Phone / WhatsApp'} <span className="text-active">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute inset-s-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+966 50 123 4567"
                      className="w-full ps-9 pe-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {isAr ? 'اللغة المستهدفة' : 'Target Language'}
                  </label>
                  <select
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 transition-colors cursor-pointer"
                  >
                    <option value="English">{isAr ? 'الإنجليزية (English)' : 'English'}</option>
                    <option value="German">{isAr ? 'الألمانية (Deutsch)' : 'German'}</option>
                    <option value="French">{isAr ? 'الفرنسية (Français)' : 'French'}</option>
                    <option value="Spanish">{isAr ? 'الإسبانية (Español)' : 'Spanish'}</option>
                    <option value="Turkish">{isAr ? 'التركية (Türkçe)' : 'Turkish'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {isAr ? 'المستوى التقريبي' : 'Estimated Level'}
                  </label>
                  <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 transition-colors cursor-pointer"
                  >
                    <option value="Beginner">{isAr ? 'مبتدئ (A1 - A2)' : 'Beginner (A1 - A2)'}</option>
                    <option value="Intermediate">{isAr ? 'متوسط (B1 - B2)' : 'Intermediate (B1 - B2)'}</option>
                    <option value="Advanced">{isAr ? 'متقدم (C1 - C2)' : 'Advanced (C1 - C2)'}</option>
                    <option value="NotSure">{isAr ? 'لا أعلم، أرغب باختبار' : 'Not sure (Need assessment)'}</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-active hover:bg-[#e06c12] text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{isAr ? 'متابعة وتأكيد برمز التحقق' : 'Continue to Verification'}</span>
                  {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>

              <div className="text-[11px] text-center text-slate-500">
                {isAr
                  ? 'بالتسجيل، أنت توافق على سياسة الخصوصية وحماية البيانات في Learnix.'
                  : 'By booking, you agree to Learnix Privacy & Data Protection Policy.'}
              </div>
            </form>
          )}

          {/* Step 2: Custom OTP Verification */}
          {step === 2 && (
            <div className="space-y-6 text-center">
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900">
                  {isAr ? 'أدخل رمز التحقق (OTP)' : 'Enter Verification Code (OTP)'}
                </h4>
                <p className="text-xs text-slate-600">
                  {isAr
                    ? `أرسلنا رمز تحقق مكون من 4 أرقام إلى ${formData.phone}`
                    : `We sent a 4-digit code to ${formData.phone}`}
                </p>
                <div className="text-xs font-mono font-bold text-active bg-orange-50 inline-block px-3 py-1 rounded-full mt-1">
                  {isAr ? 'رمز تجريبي للاختبار: 2026' : 'Demo OTP Code: 2026'}
                </div>
              </div>

              {/* The custom-otp styled input container */}
              <div className="custom-otp flex items-center justify-center gap-3">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={inputRefs[idx]}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    className="text-center font-mono border-2 border-slate-200 bg-slate-50 text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  />
                ))}
              </div>

              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="w-full py-3.5 rounded-xl bg-active hover:bg-[#e06c12] text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  {isAr ? 'تأكيد الحجز وتفعيل الحساب  ' : 'Verify & Confirm Booking  '}
                </button>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  {isAr ? '← تعديل البيانات المدخلة' : '← Edit contact info'}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Success Confirmation */}
          {step === 3 && (
            <div className="space-y-5 text-center py-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-black text-slate-900">
                  {isAr ? 'تم تأكيد حجزك بنجاح! 🎉' : 'Your Session is Confirmed! 🎉'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  {isAr
                    ? `مرحباً ${formData.name}! تم حجز حصتك التجريبية في مسار ${formData.language}. ستصلك رسالة دعوة عبر البريد وواتساب برابط الغرفة الافتراضية.`
                    : `Welcome ${formData.name}! Your free placement session in ${formData.language} is scheduled. Class link sent to ${formData.email}.`}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-start space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">{isAr ? 'المعلم المعين:' : 'Assigned Tutor:'}</span>
                  <span className="font-bold text-slate-900">Sarah M. (Certified Native Speaker)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{isAr ? 'موعد الحصة:' : 'Time Slot:'}</span>
                  <span className="font-mono text-active font-bold">{isAr ? 'غداً، 5:00 مساءً' : 'Tomorrow, 5:00 PM'}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={resetModal}
                className="w-full py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold cursor-pointer transition-colors"
              >
                {isAr ? 'إغلاق والعودة للتصفح' : 'Close & Back to Portal'}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default BookingModal;
