import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Mail,
  Phone,
  Lock,
  User,
  Eye,
  EyeOff,
  Sparkles,
  Brain,
  Layers,
  StickyNote,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  ShieldCheck,
  KeyRound,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { useGoogleLogin } from '@react-oauth/google';
import { authApi, userApi } from '../services/api';

export default function AuthModal({ isOpen, onClose, onAuthSuccess, onShowToast }) {
  // Main view modes: 'login' | 'register' | 'otp_verify' | 'forgot_password'
  const [mode, setMode] = useState('login');
  // Register sub-method: 'email' | 'phone'
  const [registerMethod, setRegisterMethod] = useState('email');

  // Form Fields - clean and empty by default (no AI mock values)
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // OTP Verification State
  const [otpTarget, setOtpTarget] = useState('');
  const [otpType, setOtpType] = useState('email'); // 'email' | 'phone'
  const [otpPurpose, setOtpPurpose] = useState('register'); // 'register' | 'forgot_password'
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [otpCountdown, setOtpCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const otpInputRefs = useRef([]);

  // Forgot password new password
  const [newPassword, setNewPassword] = useState('');

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [infoMessage, setInfoMessage] = useState(null);

  // Google OAuth Configuration Guide Modal state
  const [showGoogleGuideModal, setShowGoogleGuideModal] = useState(false);
  const [copiedEnv, setCopiedEnv] = useState(false);

  // Check if real Google Client ID is configured
  const rawClientId = (import.meta.env.VITE_GOOGLE_CLIENT_ID || '').replace(/['"]/g, '').trim();
  const isGoogleConfigured = Boolean(
    rawClientId &&
    rawClientId.endsWith('.apps.googleusercontent.com') &&
    !rawClientId.includes('your-google-client-id') &&
    !rawClientId.includes('placeholder')
  );

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setError(null);
      setInfoMessage(null);
      setLoading(false);
    }
  }, [isOpen]);

  // OTP Countdown timer
  useEffect(() => {
    let timer;
    if (mode === 'otp_verify' && otpCountdown > 0) {
      timer = setInterval(() => {
        setOtpCountdown((c) => {
          if (c <= 1) {
            setCanResend(true);
            return 0;
          }
          return c - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [mode, otpCountdown]);

  // Real Google OAuth Login Hook from official @react-oauth/google
  const triggerGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setLoading(true);
        setError(null);

        // Send access token to backend for verification with Google servers & PostgreSQL save
        const res = await authApi.googleLogin({
          accessToken: tokenResponse.access_token
        });

        const syncData = await userApi.getSync().catch(() => null);

        if (onAuthSuccess) {
          onAuthSuccess(res.user, syncData);
        }
        if (onShowToast) {
          onShowToast(`🌟 Đăng nhập bằng tài khoản Google (${res.user.email}) thành công!`);
        }
        onClose();
      } catch (err) {
        console.error('[Google OAuth Backend Error]:', err);
        setError(err.message || 'Lỗi xác thực tài khoản Google với máy chủ');
      } finally {
        setLoading(false);
      }
    },
    onError: (errorResponse) => {
      console.warn('[Google Login Window Closed/Failed]:', errorResponse);
      setError('Đăng nhập Google không thành công hoặc cửa sổ đã bị đóng');
      setLoading(false);
    }
  });

  if (!isOpen) return null;

  // Strict & Robust Password Strength Calculation
  const getPasswordStrength = (pass) => {
    if (!pass || pass.length === 0) {
      return { score: 0, text: '', color: '', barColor: 'bg-slate-800' };
    }
    if (pass.length < 6) {
      return {
        score: 1,
        text: 'Quá ngắn (tối thiểu 6 ký tự)',
        color: 'text-rose-400',
        barColor: 'bg-rose-500'
      };
    }

    const hasLetter = /[a-zA-Z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSpecial = /[^a-zA-Z0-9]/.test(pass);
    const isDiverse = (hasLetter && hasNumber) || (hasLetter && hasSpecial) || (hasNumber && hasSpecial);

    if (pass.length >= 8 && isDiverse) {
      return {
        score: 3,
        text: 'Mật khẩu mạnh',
        color: 'text-emerald-400',
        barColor: 'bg-emerald-500'
      };
    }

    return {
      score: 2,
      text: 'Mật khẩu trung bình',
      color: 'text-amber-400',
      barColor: 'bg-amber-500'
    };
  };

  const pwdStrength = getPasswordStrength(password);

  // ==========================================
  // HANDLERS
  // ==========================================

  // 1. Submit Registration -> Validates & Dispatches Real OTP in PostgreSQL
  const handleInitiateRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setInfoMessage(null);

    if (!fullName.trim()) {
      setError('Vui lòng nhập họ và tên của bạn');
      return;
    }

    const targetVal = registerMethod === 'email' ? email.trim() : phone.trim();
    if (!targetVal) {
      setError(registerMethod === 'email' ? 'Vui lòng nhập địa chỉ email của bạn' : 'Vui lòng nhập số điện thoại');
      return;
    }

    if (password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự');
      return;
    }

    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không trùng khớp');
      return;
    }

    setLoading(true);
    try {
      await authApi.registerInit({
        fullName: fullName.trim(),
        email: registerMethod === 'email' ? targetVal : undefined,
        phone: registerMethod === 'phone' ? targetVal : undefined,
        password,
        confirmPassword
      });

      setOtpTarget(targetVal);
      setOtpType(registerMethod);
      setOtpPurpose('register');
      setOtpDigits(['', '', '', '', '', '']);
      setOtpCountdown(60);
      setCanResend(false);
      setMode('otp_verify');
      setInfoMessage(`Mã OTP đã được gửi. Kiểm tra email hoặc Server Terminal.`);

      if (onShowToast) {
        onShowToast(`📲 Mã xác minh đã được gửi tới ${targetVal}`);
      }

      // Auto focus first OTP input after transition
      setTimeout(() => {
        otpInputRefs.current[0]?.focus();
      }, 120);
    } catch (err) {
      setError(err.message || 'Không thể tạo mã xác minh. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  // 2. Submit OTP Verification directly against PostgreSQL
  const handleVerifyOtp = async (codeToVerify) => {
    const finalCode = codeToVerify || otpDigits.join('');
    if (finalCode.length < 6) {
      setError('Vui lòng nhập đủ 6 chữ số mã xác minh');
      return;
    }

    setError(null);
    setLoading(true);
    try {
      const res = await authApi.verifyOtp({
        target: otpTarget,
        otp: finalCode,
        newPassword: otpPurpose === 'forgot_password' ? newPassword : password,
        purpose: otpPurpose
      });

      const syncData = await userApi.getSync().catch(() => null);

      if (onAuthSuccess) {
        onAuthSuccess(res.user, syncData);
      }
      if (onShowToast) {
        onShowToast(
          otpPurpose === 'forgot_password'
            ? '🎉 Đổi mật khẩu thành công! Đã đăng nhập vào hệ thống.'
            : `🎉 Chào mừng ${res.user.fullName || 'bạn'} gia nhập LexiFlow Studio!`
        );
      }
      onClose();
    } catch (err) {
      setError(err.message || 'Mã xác minh không chính xác hoặc đã hết hạn');
    } finally {
      setLoading(false);
    }
  };

  // 3. Resend Real OTP
  const handleResendOtp = async () => {
    if (!canResend) return;
    setError(null);
    setLoading(true);
    try {
      await authApi.sendOtp({
        target: otpTarget,
        type: otpType,
        fullName: fullName.trim(),
        password: otpPurpose === 'forgot_password' ? undefined : password,
        purpose: otpPurpose
      });
      setOtpCountdown(60);
      setCanResend(false);
      setOtpDigits(['', '', '', '', '', '']);
      setInfoMessage(`Mã xác thực mới đã được gửi lại tới ${otpTarget}`);
      if (onShowToast) {
        onShowToast(`📲 Đã gửi lại mã OTP tới ${otpTarget}`);
      }
      otpInputRefs.current[0]?.focus();
    } catch (err) {
      setError(err.message || 'Không thể gửi lại mã OTP');
    } finally {
      setLoading(false);
    }
  };

  // 4. Handle OTP 6-box input and paste
  const handleOtpChange = (index, value) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    const newDigits = [...otpDigits];
    newDigits[index] = digit;
    setOtpDigits(newDigits);

    if (digit && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }

    // Auto submit if all 6 digits filled
    if (digit && index === 5 && newDigits.every((d) => d !== '')) {
      handleVerifyOtp(newDigits.join(''));
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;

    const newDigits = ['', '', '', '', '', ''];
    for (let i = 0; i < pasted.length; i++) {
      newDigits[i] = pasted[i];
    }
    setOtpDigits(newDigits);

    if (pasted.length === 6) {
      otpInputRefs.current[5]?.focus();
      handleVerifyOtp(pasted);
    } else {
      otpInputRefs.current[pasted.length]?.focus();
    }
  };

  // 5. Submit Login (Email or Phone) - Strict PostgreSQL Validation
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setInfoMessage(null);

    if (!loginIdentifier.trim()) {
      setError('Vui lòng nhập Email hoặc Số điện thoại của bạn');
      return;
    }
    if (!password) {
      setError('Vui lòng nhập mật khẩu');
      return;
    }

    setLoading(true);
    try {
      const res = await authApi.login({
        identifier: loginIdentifier.trim(),
        password
      });

      const syncData = await userApi.getSync().catch(() => null);

      if (onAuthSuccess) {
        onAuthSuccess(res.user, syncData);
      }
      if (onShowToast) {
        onShowToast(`👋 Chào mừng trở lại, ${res.user.fullName || 'bạn'}!`);
      }
      onClose();
    } catch (err) {
      // Check if account exists but unverified: redirect directly to OTP screen
      if (err.data && err.data.notVerified) {
        setOtpTarget(err.data.target || loginIdentifier.trim());
        setOtpType(err.data.type || 'email');
        setOtpPurpose('register');
        setOtpDigits(['', '', '', '', '', '']);
        setOtpCountdown(60);
        setCanResend(false);
        setMode('otp_verify');
        setInfoMessage(err.message || 'Tài khoản chưa được kích hoạt. Vui lòng nhập mã OTP để tiếp tục.');
        setTimeout(() => {
          otpInputRefs.current[0]?.focus();
        }, 120);
        return;
      }

      setError(err.message || 'Email, số điện thoại hoặc mật khẩu không chính xác');
    } finally {
      setLoading(false);
    }
  };

  // 6. Real Google OAuth2 Trigger Button Click
  const handleGoogleButtonClick = () => {
    setError(null);
    if (!isGoogleConfigured) {
      // Show polite, helpful instruction modal
      setShowGoogleGuideModal(true);
      return;
    }
    // Launch Google's genuine account selector popup
    triggerGoogleLogin();
  };

  // 7. Initiate Forgot Password
  const handleInitiateForgotPassword = async (e) => {
    e.preventDefault();
    setError(null);
    setInfoMessage(null);

    if (!loginIdentifier.trim()) {
      setError('Vui lòng nhập Email hoặc Số điện thoại để nhận mã khôi phục');
      return;
    }

    if (!newPassword || newPassword.length < 6) {
      setError('Vui lòng nhập mật khẩu mới có ít nhất 6 ký tự');
      return;
    }

    const isTargetEmail = loginIdentifier.includes('@');
    setLoading(true);
    try {
      await authApi.sendOtp({
        target: loginIdentifier.trim(),
        type: isTargetEmail ? 'email' : 'phone',
        purpose: 'forgot_password'
      });

      setOtpTarget(loginIdentifier.trim());
      setOtpType(isTargetEmail ? 'email' : 'phone');
      setOtpPurpose('forgot_password');
      setOtpDigits(['', '', '', '', '', '']);
      setOtpCountdown(60);
      setCanResend(false);
      setMode('otp_verify');
      setInfoMessage(`Mã xác minh đã được gửi. Kiểm tra email hoặc Server Terminal.`);

      if (onShowToast) {
        onShowToast(`🔑 Mã OTP đặt lại mật khẩu đã được gửi tới ${loginIdentifier.trim()}`);
      }

      setTimeout(() => {
        otpInputRefs.current[0]?.focus();
      }, 120);
    } catch (err) {
      setError(err.message || 'Không tìm thấy tài khoản tương ứng');
    } finally {
      setLoading(false);
    }
  };

  const copyConfigSnippet = () => {
    const snippet = `VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com\nGOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com`;
    navigator.clipboard.writeText(snippet);
    setCopiedEnv(true);
    setTimeout(() => setCopiedEnv(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn select-none">
      {/* Light Dismiss Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Split-Card Modal (max-w-5xl) */}
      <div className="relative w-full max-w-5xl bg-[#0B1120] border border-slate-800 rounded-3xl shadow-2xl shadow-indigo-950/70 overflow-hidden z-10 text-slate-100 flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ========================================================= */}
        {/* LEFT COLUMN: BRANDING & SYSTEM SECURITY (45% Width on Desktop) */}
        {/* ========================================================= */}
        <div className="hidden md:flex md:w-[45%] flex-col justify-between p-7 lg:p-8 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border-r border-slate-800/80 relative">
          {/* Subtle Glow Spheres */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Brand Identity */}
          <div className="relative z-10">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-emerald-400 flex items-center justify-center shadow-lg shadow-indigo-500/30 shrink-0">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-extrabold text-xl text-white tracking-tight">LexiFlow</span>
                </div>
                <p className="text-xs text-slate-300 font-medium whitespace-normal mt-0.5 leading-snug">
                  Nền Tảng Luyện Tiếng Anh Thông Minh
                </p>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white leading-snug tracking-tight mb-2.5 break-words">
              Xây dựng phản xạ tiếng Anh mỗi ngày
            </h3>
            <p className="text-xs text-slate-300/85 leading-relaxed break-words">
              Làm chủ từ vựng và ngữ pháp qua phương pháp ngắt quãng lặp lại khoa học, giúp bạn ghi nhớ sâu và tự tin giao tiếp.
            </p>
          </div>

          {/* Core Feature Highlights */}
          <div className="space-y-3.5 my-6 relative z-10">
            <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/70 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-200">Lộ trình cá nhân hóa SRS</p>
                <p className="text-[11px] text-slate-400 leading-normal mt-0.5">
                  Ôn tập đúng điểm rơi của trí nhớ theo đường cong Ebbinghaus.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/70 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                <Layers className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-200">1.000+ từ vựng & 49 bài ngữ pháp</p>
                <p className="text-[11px] text-slate-400 leading-normal mt-0.5">
                  Học qua ngữ cảnh thực tế, mẹo nhớ âm thanh và phiên âm IPA chuẩn.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/70 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                <StickyNote className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-200">Sổ tay thông minh đa năng</p>
                <p className="text-[11px] text-slate-400 leading-normal mt-0.5">
                  Tự động ghim từ mới, xuất thẻ Anki và đồng bộ an toàn vào PostgreSQL.
                </p>
              </div>
            </div>
          </div>

          {/* Genuine Security Badge Footer (No fake reviews) */}
          <div className="pt-4 border-t border-slate-800/70 flex items-center gap-2.5 relative z-10 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="leading-snug">Hệ thống bảo mật xác thực 2 lớp qua Email OTP</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: INTERACTIVE AUTH FORMS (55% Width) */}
        {/* ========================================================= */}
        <div className="w-full md:w-[55%] p-6 sm:p-8 bg-[#0F1626] flex flex-col justify-center">
          {/* TOP SWITCHER: ĐĂNG NHẬP | TẠO TÀI KHOẢN */}
          {mode !== 'otp_verify' && mode !== 'forgot_password' && (
            <div className="flex rounded-2xl bg-slate-900/90 p-1 mb-6 border border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setError(null);
                  setInfoMessage(null);
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition duration-150 ${
                  mode === 'login'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Đăng nhập
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode('register');
                  setError(null);
                  setInfoMessage(null);
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition duration-150 ${
                  mode === 'register'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Tạo tài khoản
              </button>
            </div>
          )}

          {/* Information / Notice Banner */}
          {infoMessage && (
            <div className="mb-4 p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs flex items-center gap-2.5 animate-fadeIn">
              <Sparkles className="w-4 h-4 shrink-0 text-indigo-400" />
              <span className="flex-1 leading-relaxed">{infoMessage}</span>
            </div>
          )}

          {/* Error Banner */}
          {error && (
            <div className="mb-4 p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2.5 animate-shake">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span className="flex-1 leading-relaxed">{error}</span>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 1: FORM ĐĂNG KÝ (TẠO TÀI KHOẢN) */}
          {/* ========================================================= */}
          {mode === 'register' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-black text-white tracking-tight">Tạo tài khoản học tập</h4>
                <p className="text-xs text-slate-400 mt-0.5">Chọn phương thức xác thực phù hợp với bạn</p>
              </div>

              {/* Bộ chọn phương thức xác minh */}
              <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-slate-900/80 border border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setRegisterMethod('email');
                    setError(null);
                  }}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition ${
                    registerMethod === 'email'
                      ? 'bg-[#1E293B] text-indigo-300 shadow border border-indigo-500/30 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Gmail / Email</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setRegisterMethod('phone');
                    setError(null);
                  }}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition ${
                    registerMethod === 'phone'
                      ? 'bg-[#1E293B] text-indigo-300 shadow border border-indigo-500/30 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Số điện thoại</span>
                </button>
              </div>

              {/* Form Input Fields */}
              <form onSubmit={handleInitiateRegister} className="space-y-3">
                {/* Họ và tên */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Họ và tên
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Nhập họ và tên của bạn"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-indigo-500 focus:outline-none text-xs text-white placeholder-slate-500 transition"
                    />
                  </div>
                </div>

                {/* Email HOẶC Số điện thoại */}
                {registerMethod === 'email' ? (
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Địa chỉ Email
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-indigo-500 focus:outline-none text-xs text-white placeholder-slate-500 transition"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Số điện thoại di động
                    </label>
                    <div className="relative flex">
                      <div className="flex items-center gap-1 px-3 bg-slate-800 border border-r-0 border-slate-800 rounded-l-xl text-xs font-semibold text-slate-300 shrink-0">
                        <span>🇻🇳 +84</span>
                      </div>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0912 345 678"
                        className="w-full pl-3 pr-4 py-2.5 rounded-r-xl bg-slate-900/90 border border-slate-800 focus:border-indigo-500 focus:outline-none text-xs text-white placeholder-slate-500 transition"
                      />
                    </div>
                  </div>
                )}

                {/* Mật khẩu */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                      Mật khẩu
                    </label>
                    {password && pwdStrength.text && (
                      <span className={`text-[10px] font-semibold ${pwdStrength.color}`}>
                        {pwdStrength.text}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      minLength={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Tối thiểu 6 ký tự"
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-indigo-500 focus:outline-none text-xs text-white placeholder-slate-500 transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-1"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Thanh đo độ mạnh mật khẩu chuẩn */}
                  <div className="flex gap-1.5 mt-1.5">
                    <div className={`h-1 flex-1 rounded-full transition-all ${!password ? 'bg-slate-800' : pwdStrength.score === 1 ? 'bg-rose-500' : pwdStrength.score === 2 ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                    <div className={`h-1 flex-1 rounded-full transition-all ${!password ? 'bg-slate-800' : pwdStrength.score >= 2 ? (pwdStrength.score === 2 ? 'bg-amber-500' : 'bg-emerald-500') : 'bg-slate-800'}`} />
                    <div className={`h-1 flex-1 rounded-full transition-all ${!password ? 'bg-slate-800' : pwdStrength.score >= 3 ? 'bg-emerald-500' : 'bg-slate-800'}`} />
                  </div>
                </div>

                {/* Xác nhận mật khẩu */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Xác nhận mật khẩu
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Nhập lại mật khẩu"
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-indigo-500 focus:outline-none text-xs text-white placeholder-slate-500 transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-1"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Nút gửi mã OTP */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition disabled:opacity-50 mt-2"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Đang kết nối PostgreSQL...
                    </span>
                  ) : (
                    <>
                      <span>Tiếp tục & Nhận mã OTP</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Đường kẻ chia cách */}
              <div className="relative flex py-3 items-center">
                <div className="flex-grow border-t border-slate-800"></div>
                <span className="flex-shrink mx-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Hoặc
                </span>
                <div className="flex-grow border-t border-slate-800"></div>
              </div>

              {/* Real Google OAuth2 Button */}
              <button
                type="button"
                onClick={handleGoogleButtonClick}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl bg-[#131C2E] hover:bg-[#1A253D] border border-slate-700/80 hover:border-slate-600 text-slate-200 font-bold text-xs shadow-sm transition disabled:opacity-60 group"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span className="group-hover:text-white transition">
                  Tiếp tục với Google (OAuth2 Chính Thức)
                </span>
              </button>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 2: FORM ĐĂNG NHẬP ĐA NĂNG */}
          {/* ========================================================= */}
          {mode === 'login' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-black text-white tracking-tight">Chào mừng bạn trở lại!</h4>
                <p className="text-xs text-slate-400 mt-0.5">Đăng nhập để tiếp tục lộ trình học của bạn</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-3.5">
                {/* Email hoặc Số điện thoại */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Email hoặc số điện thoại
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={loginIdentifier}
                      onChange={(e) => setLoginIdentifier(e.target.value)}
                      placeholder="name@example.com hoặc 0912 345 678"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-indigo-500 focus:outline-none text-xs text-white placeholder-slate-500 transition"
                    />
                  </div>
                </div>

                {/* Mật khẩu */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                      Mật khẩu
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setMode('forgot_password');
                        setError(null);
                        setInfoMessage(null);
                      }}
                      className="text-[11px] text-indigo-400 hover:text-indigo-300 font-medium transition"
                    >
                      Quên mật khẩu?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Nhập mật khẩu của bạn"
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-indigo-500 focus:outline-none text-xs text-white placeholder-slate-500 transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-1"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Ghi nhớ đăng nhập */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-400 hover:text-slate-300">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded bg-slate-900 border-slate-700 text-indigo-600 focus:ring-0"
                    />
                    <span>Ghi nhớ đăng nhập</span>
                  </label>
                </div>

                {/* Nút Đăng nhập */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition disabled:opacity-50 mt-1"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Đang xác thực trong PostgreSQL...
                    </span>
                  ) : (
                    <>
                      <span>Đăng nhập vào LexiFlow</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Đường kẻ Hoặc */}
              <div className="relative flex py-3 items-center">
                <div className="flex-grow border-t border-slate-800"></div>
                <span className="flex-shrink mx-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Hoặc
                </span>
                <div className="flex-grow border-t border-slate-800"></div>
              </div>

              {/* Nút Tiếp tục với Google */}
              <button
                type="button"
                onClick={handleGoogleButtonClick}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl bg-[#131C2E] hover:bg-[#1A253D] border border-slate-700/80 hover:border-slate-600 text-slate-200 font-bold text-xs shadow-sm transition disabled:opacity-60 group"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span className="group-hover:text-white transition">
                  Tiếp tục với Google (OAuth2 Chính Thức)
                </span>
              </button>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 3: MÀN HÌNH NHẬP MÃ XÁC MINH OTP (6 CHỮ SỐ) */}
          {/* ========================================================= */}
          {mode === 'otp_verify' && (
            <div className="space-y-5 animate-fadeIn">
              <button
                type="button"
                onClick={() => {
                  setMode(otpPurpose === 'forgot_password' ? 'forgot_password' : 'register');
                  setError(null);
                  setInfoMessage(null);
                }}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Quay lại chỉnh sửa thông tin</span>
              </button>

              <div>
                <h4 className="text-xl font-black text-white tracking-tight">Xác minh mã bảo mật OTP</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Mã xác minh 6 số đã được gửi tới{' '}
                  <span className="font-bold text-indigo-300">{otpTarget}</span>.
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  (Nếu chưa cấu hình Gmail App Password, xem mã trực tiếp tại cửa sổ Server Terminal).
                </p>
              </div>

              {/* 6 ô vuông nhập OTP */}
              <div className="flex items-center justify-between gap-2 sm:gap-2.5 my-4">
                {otpDigits.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (otpInputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    onPaste={handleOtpPaste}
                    className="w-11 h-13 sm:w-12 sm:h-14 text-center text-lg sm:text-xl font-black rounded-2xl bg-slate-900 border-2 border-slate-700 focus:border-indigo-500 focus:bg-indigo-950/30 focus:outline-none text-white shadow-inner transition"
                  />
                ))}
              </div>

              {/* Nút bấm Xác nhận */}
              <button
                type="button"
                onClick={() => handleVerifyOtp()}
                disabled={loading || otpDigits.some((d) => !d)}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition disabled:opacity-50"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Đang đối chiếu trong PostgreSQL...
                  </span>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Xác nhận & Vào học ngay</span>
                  </>
                )}
              </button>

              {/* Đếm ngược & Gửi lại mã */}
              <div className="text-center text-xs text-slate-400">
                {otpCountdown > 0 ? (
                  <span>
                    Gửi lại mã xác minh sau{' '}
                    <strong className="text-indigo-400">{otpCountdown}s</strong>
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={loading}
                    className="text-indigo-400 hover:text-indigo-300 font-bold underline transition"
                  >
                    Gửi lại mã OTP ngay
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 4: QUÊN MẬT KHẨU */}
          {/* ========================================================= */}
          {mode === 'forgot_password' && (
            <div className="space-y-4 animate-fadeIn">
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setError(null);
                  setInfoMessage(null);
                }}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Quay lại Đăng nhập</span>
              </button>

              <div>
                <h4 className="text-lg font-black text-white tracking-tight">Đặt lại mật khẩu</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Nhập Email hoặc Số điện thoại để nhận mã xác minh OTP
                </p>
              </div>

              <form onSubmit={handleInitiateForgotPassword} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Email hoặc số điện thoại
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={loginIdentifier}
                      onChange={(e) => setLoginIdentifier(e.target.value)}
                      placeholder="name@example.com hoặc 0912 345 678"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-indigo-500 focus:outline-none text-xs text-white placeholder-slate-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Mật khẩu mới
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      minLength={6}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Tối thiểu 6 ký tự"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-indigo-500 focus:outline-none text-xs text-white placeholder-slate-500 transition"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition disabled:opacity-50 mt-1"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Đang xử lý trong PostgreSQL...
                    </span>
                  ) : (
                    <>
                      <span>Tiếp tục & Nhận mã OTP</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================= */}
      {/* GOOGLE OAUTH2 CONFIGURATION GUIDE MODAL (NO MOCK PROMPT) */}
      {/* ========================================================= */}
      {showGoogleGuideModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#0F172A] border border-indigo-500/40 rounded-3xl p-6 sm:p-7 shadow-2xl shadow-indigo-950/80 text-slate-100">
            <button
              onClick={() => setShowGoogleGuideModal(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Đóng hướng dẫn"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-white">Cấu hình Google OAuth2 Client ID</h4>
                <p className="text-xs text-slate-400">Yêu cầu thiết lập để mở popup tài khoản Google thật</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Ứng dụng đã sẵn sàng 100% với thư viện <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-[11px]">@react-oauth/google</code> và Google Auth API. Để mở popup chọn tài khoản Google thật của bạn, vui lòng thêm Client ID vào file môi trường:
            </p>

            <div className="space-y-3 mb-5 text-xs text-slate-300">
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
                <p className="font-bold text-indigo-300 flex items-center gap-1.5">
                  <span>1. Điền vào file <code className="text-amber-300 font-mono">.env</code> (Frontend):</span>
                </p>
                <code className="block p-2 rounded-lg bg-black/50 text-[11px] font-mono text-emerald-400 break-all select-all">
                  VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
                </code>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
                <p className="font-bold text-indigo-300 flex items-center gap-1.5">
                  <span>2. Điền vào file <code className="text-amber-300 font-mono">server/.env</code> (Backend):</span>
                </p>
                <code className="block p-2 rounded-lg bg-black/50 text-[11px] font-mono text-emerald-400 break-all select-all">
                  GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
                </code>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
                💡 Bạn có thể tạo Client ID miễn phí tại{' '}
                <a
                  href="https://console.cloud.google.com/apis/credentials"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:underline inline-flex items-center gap-0.5 font-bold"
                >
                  Google Cloud Console <ExternalLink className="w-3 h-3" />
                </a>{' '}
                với Authorized Javascript Origins là <code className="text-slate-300">http://localhost:5173</code>.
              </div>
            </div>

            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={copyConfigSnippet}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition border border-slate-700"
              >
                {copiedEnv ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Đã sao chép!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Sao chép mẫu cấu hình</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => setShowGoogleGuideModal(false)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
