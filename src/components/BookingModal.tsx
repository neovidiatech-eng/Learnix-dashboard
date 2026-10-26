import React, { useState, useRef } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Phone, Mail, User, BookOpen, Calendar } from 'lucide-react';
import { Language } from '../types';

interface BookingModalProps {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--bg)] shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[var(--code-bg)] border-b border-[var(--border)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xs">
              Lx
            </div>
            <div>
              <h3 className="text-sm font-bold text-[var(--text-h)]">
                {isAr ? 'حجز حصة تجريبية واختبار تحديد المستوى' : 'Book Free Trial & Placement Test'}
              </h3>
              <p className="text-[11px] text-[var(--text)]">
                {isAr ? 'خطوة 1 من 2 للبدء مع معلم أصلي' : 'Free 30-minute 1-on-1 session'}
              </p>
            </div>
          </div>
          <button
            onClick={resetModal}
            className="p-1.5 rounded-lg text-[var(--text)] hover:text-[var(--text-h)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          
          {/* Step 1: User & Course Selection Form */}
          {step === 1 && (
            <form onSubmit={handleSubmitStep1} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[var(--text-h)] mb-1">
                  {isAr ? 'الاسم الكامل' : 'Full Name'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[var(--text)] absolute start-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isAr ? 'مثال: أحمد محمد' : 'e.g. Alex Johnson'}
                    className="w-full ps-9 pe-3 py-2 text-xs rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] focus:outline-none focus:border-[var(--color-active)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-h)] mb-1">
                    {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[var(--text)] absolute start-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full ps-9 pe-3 py-2 text-xs rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] focus:outline-none focus:border-[var(--color-active)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--text-h)] mb-1">
                    {isAr ? 'رقم الهاتف / واتساب' : 'Phone / WhatsApp'}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[var(--text)] absolute start-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+966 50 123 4567"
                      className="w-full ps-9 pe-3 py-2 text-xs rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] focus:outline-none focus:border-[var(--color-active)]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-h)] mb-1">
                    {isAr ? 'اللغة المستهدفة' : 'Target Language'}
                  </label>
                  <select
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] focus:outline-none focus:border-[var(--color-active)]"
                  >
                    <option value="English">{isAr ? 'الإنجليزية (English)' : 'English'}</option>
                    <option value="German">{isAr ? 'الألمانية (Deutsch)' : 'German'}</option>
                    <option value="French">{isAr ? 'الفرنسية (Français)' : 'French'}</option>
                    <option value="Spanish">{isAr ? 'الإسبانية (Español)' : 'Spanish'}</option>
                    <option value="Arabic">{isAr ? 'العربية لغير الناطقين بها' : 'Arabic for Non-Natives'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--text-h)] mb-1">
                    {isAr ? 'المستوى التقريبي' : 'Estimated Level'}
                  </label>
                  <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] focus:outline-none focus:border-[var(--color-active)]"
                  >
                    <option value="Beginner">{isAr ? 'مبتدئ (A1 - A2)' : 'Beginner (A1 - A2)'}</option>
                    <option value="Intermediate">{isAr ? 'متوسط (B1 - B2)' : 'Intermediate (B1 - B2)'}</option>
                    <option value="Advanced">{isAr ? 'متقدم (C1 - C2)' : 'Advanced (C1 - C2)'}</option>
                    <option value="NotSure">{isAr ? 'لا أعلم، أرغب باختبار' : 'Not sure (Need assessment)'}</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[var(--color-active)] hover:bg-[#e06f17] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{isAr ? 'متابعة وتأكيد برمز التحقق' : 'Continue to Verification'}</span>
                  {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>

              <div className="text-[11px] text-center text-[var(--text)]">
                {isAr
                  ? 'بالتسجيل، أنت توافق على سياسة الخصوصية وحماية البيانات في Learnex.'
                  : 'By booking, you agree to Learnex Privacy & Data Protection Policy.'}
              </div>
            </form>
          )}

          {/* Step 2: Custom OTP Verification using the requested .custom-otp CSS class */}
          {step === 2 && (
            <div className="space-y-6 text-center">
              <div className="space-y-1">
                <h4 className="text-base font-bold text-[var(--text-h)]">
                  {isAr ? 'أدخل رمز التحقق (OTP)' : 'Enter Verification Code (OTP)'}
                </h4>
                <p className="text-xs text-[var(--text)]">
                  {isAr
                    ? `أرسلنا رمز تحقق مكون من 4 أرقام إلى ${formData.phone}`
                    : `We sent a 4-digit code to ${formData.phone}`}
                </p>
                <div className="text-[11px] font-mono text-[var(--color-active)]">
                  {isAr ? 'رمز تجريبي للاختبار: 2026' : 'Demo OTP Code: 2026'}
                </div>
              </div>

              {/* The custom-otp styled input container from prompt */}
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
                    className="text-center font-mono border-2 border-[var(--border)] focus:border-[var(--color-active)] bg-[var(--code-bg)] text-[var(--text-h)] focus:outline-none transition-colors"
                  />
                ))}
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="w-full py-3 rounded-xl bg-[var(--color-active)] hover:bg-[#e06f17] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  {isAr ? 'تأكيد الحجز وتفعيل الحساب' : 'Verify & Confirm Booking'}
                </button>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-[var(--text)] hover:text-[var(--text-h)] cursor-pointer"
                >
                  {isAr ? '← تعديل البيانات المدخلة' : '← Edit contact info'}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Success Confirmation */}
          {step === 3 && (
            <div className="space-y-5 text-center py-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-black text-[var(--text-h)]">
                  {isAr ? 'تم تأكيد حجزك بنجاح!' : 'Your Session is Confirmed!'}
                </h4>
                <p className="text-xs text-[var(--text)] max-w-sm mx-auto">
                  {isAr
                    ? `مرحباً ${formData.name}! تم حجز حصتك التجريبية في مسار ${formData.language}. ستصلك رسالة دعوة عبر البريد وواتساب برابط الغرفة الافتراضية.`
                    : `Welcome ${formData.name}! Your free placement session in ${formData.language} is scheduled. Class link sent to ${formData.email}.`}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--primary-light)] border border-[var(--primary-border)] text-xs text-start space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[var(--text)]">{isAr ? 'المعلم المعين:' : 'Assigned Tutor:'}</span>
                  <span className="font-bold text-[var(--text-h)]">Sarah M. (Native Speaker)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text)]">{isAr ? 'موعد الحصة:' : 'Time Slot:'}</span>
                  <span className="font-mono text-[var(--color-active)] font-bold">{isAr ? 'غداً، 5:00 مساءً' : 'Tomorrow, 5:00 PM'}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={resetModal}
                className="w-full py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold cursor-pointer hover:bg-[#1a4d74] transition-colors"
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
