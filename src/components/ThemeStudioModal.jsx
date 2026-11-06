import React, { useState, useRef } from 'react';
import {
  Palette,
  X,
  Sparkles,
  Sliders,
  Image,
  Upload,
  Link as LinkIcon,
  RotateCcw,
  Check,
  Eye,
  ShieldCheck,
  Moon,
  Laptop,
  Flame,
  Radio
} from 'lucide-react';

export const DEFAULT_THEME_SETTINGS = {
  preset: 'aurora', // 'aurora' | 'neon-grid' | 'lofi' | 'minimalist' | 'custom'
  customUrl: '',
  dimmerOpacity: 0.65, // 0.20 - 0.90
  bgBlur: 6,           // 0 - 24 px
  cardGlassOpacity: 0.80, // 0.40 - 1.00
  glassBlur: 12        // 4 - 20 px
};

export const THEME_PRESETS = [
  {
    id: 'aurora',
    name: 'Aurora Borealis',
    subtitle: 'Cực quang huyền ảo & dải sáng chuyển động',
    badge: 'Mặc định',
    previewBg: 'bg-gradient-to-br from-indigo-950 via-slate-950 to-teal-950',
    accentColor: '#6366f1',
    description: 'Các luồng ánh sáng cực quang Indigo, Cyan & Violet lượn sóng êm dịu, tăng cảm hứng tập trung.'
  },
  {
    id: 'neon-grid',
    name: 'Cyberpunk Neon Grid',
    subtitle: 'Lưới không gian 3D Synthwave tương lai',
    badge: 'Công nghệ',
    previewBg: 'bg-gradient-to-br from-purple-950 via-slate-950 to-pink-950',
    accentColor: '#ec4899',
    description: 'Lưới phối cảnh 3D neon scrolling mượt mà phong cách synthwave hiện đại.'
  },
  {
    id: 'lofi',
    name: 'Lofi Study Night',
    subtitle: 'Đêm ấm cúng, thư thái & chiều sâu điện ảnh',
    badge: 'Ấm áp',
    previewBg: 'bg-gradient-to-br from-amber-950/80 via-slate-950 to-indigo-950',
    accentColor: '#f59e0b',
    description: 'Không gian học tập đêm tĩnh lặng với ánh đèn vàng ấm áp và mưa đêm thư giãn.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'minimalist',
    name: 'Minimalist Deep Slate',
    subtitle: 'Xanh phiến thạch tối giản, tập trung tuyệt đối',
    badge: 'Tối giản',
    previewBg: 'bg-gradient-to-br from-slate-900 via-slate-950 to-[#0B0F17]',
    accentColor: '#94a3b8',
    description: 'Bản sắc tối giản cổ điển, không làm xao nhãng, tiết kiệm pin và tối ưu mắt nhìn.'
  }
];

export default function ThemeStudioModal({
  isOpen,
  onClose,
  themeSettings = DEFAULT_THEME_SETTINGS,
  onUpdateTheme,
  onResetTheme
}) {
  const [tempCustomUrl, setTempCustomUrl] = useState('');
  const [urlError, setUrlError] = useState('');
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const currentSettings = { ...DEFAULT_THEME_SETTINGS, ...themeSettings };

  const handleSelectPreset = (presetId) => {
    onUpdateTheme({
      ...currentSettings,
      preset: presetId
    });
  };

  const handleApplyUrl = () => {
    if (!tempCustomUrl.trim()) {
      setUrlError('Vui lòng nhập đường link ảnh hợp lệ');
      return;
    }
    const cleanUrl = tempCustomUrl.trim();
    setUrlError('');
    onUpdateTheme({
      ...currentSettings,
      preset: 'custom',
      customUrl: cleanUrl
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUrlError('Vui lòng chọn file hình ảnh (PNG, JPG, WEBP)');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setUrlError('Kích thước ảnh nên nhỏ hơn 5MB để đạt tốc độ tải tốt nhất');
      return;
    }

    setUrlError('');
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result;
      if (typeof dataUrl === 'string') {
        onUpdateTheme({
          ...currentSettings,
          preset: 'custom',
          customUrl: dataUrl
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSliderChange = (key, value) => {
    onUpdateTheme({
      ...currentSettings,
      [key]: value
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md animate-fade-in-up">
      <div
        className="w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0E1422] border border-white/10 shadow-2xl overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-white/10 flex items-center justify-between bg-slate-900/50 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Tùy Chỉnh Không Gian Học
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Studio V4
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Cá nhân hóa hình nền, hiệu ứng cực quang và độ mờ kính chuẩn WCAG AAA
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition"
            title="Đóng cửa sổ"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* SCROLLABLE BODY */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* 1. CURATED PRESETS */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300">
                  Kho Hình Nền & Hiệu Ứng Sống Động
                </h3>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">4 phong cách thiết kế</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {THEME_PRESETS.map((preset) => {
                const isSelected = currentSettings.preset === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectPreset(preset.id)}
                    className={`group relative p-3.5 rounded-2xl border text-left transition-all duration-300 overflow-hidden ${
                      isSelected
                        ? 'border-indigo-400/80 bg-indigo-950/40 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-400/50'
                        : 'border-white/10 bg-slate-900/60 hover:bg-slate-800/80 hover:border-white/20'
                    }`}
                  >
                    {/* Preview visual accent */}
                    <div
                      className={`h-14 rounded-xl mb-3 relative overflow-hidden flex items-center justify-center border border-white/10 ${preset.previewBg}`}
                    >
                      {preset.id === 'aurora' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-teal-400/40 via-indigo-500/40 to-purple-500/40 blur-xl animate-pulse" />
                        </div>
                      )}
                      {preset.id === 'neon-grid' && (
                        <div className="absolute inset-0 cyber-grid-plane opacity-60" />
                      )}
                      {preset.id === 'lofi' && (
                        <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url(${preset.imageUrl})` }} />
                      )}
                      {preset.id === 'minimalist' && (
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950/40" />
                      )}

                      <span className="relative z-10 text-[11px] font-bold px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-white border border-white/10">
                        {preset.badge}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-indigo-300 transition">
                        {preset.name}
                      </span>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {preset.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. CUSTOM WALLPAPER SECTION */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xs sm:text-sm font-bold text-white">
                  Tùy Biến Hình Nền Riêng
                </h3>
              </div>
              {currentSettings.preset === 'custom' && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Đang dùng ảnh tự chọn
                </span>
              )}
            </div>

            {/* Input URL */}
            <div className="space-y-2">
              <label className="text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                <LinkIcon className="w-3 h-3 text-slate-400" />
                <span>Nhập đường dẫn ảnh trực tuyến (Image URL):</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/... hoặc ảnh bất kỳ"
                  value={tempCustomUrl}
                  onChange={(e) => setTempCustomUrl(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleApplyUrl()}
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
                <button
                  onClick={handleApplyUrl}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-bold text-white transition shrink-0"
                >
                  Áp dụng
                </button>
              </div>
            </div>

            {/* Or File Upload */}
            <div className="flex items-center gap-3 pt-1">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-2 transition"
              >
                <Upload className="w-3.5 h-3.5 text-cyan-400" />
                <span>Tải ảnh từ máy tính</span>
              </button>
              <span className="text-[11px] text-slate-400">
                Hỗ trợ PNG, JPG, WebP. Tự động mã hóa an toàn.
              </span>
            </div>

            {urlError && (
              <p className="text-[11px] text-rose-400 font-medium">{urlError}</p>
            )}

            {currentSettings.preset === 'custom' && currentSettings.customUrl && (
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-xs">
                <div className="flex items-center gap-2 overflow-hidden">
                  <img
                    src={currentSettings.customUrl}
                    alt="Custom preview"
                    className="w-10 h-7 rounded-lg object-cover border border-white/10 shrink-0"
                  />
                  <span className="text-[11px] text-cyan-200 truncate">
                    Ảnh tùy chỉnh đang hoạt động
                  </span>
                </div>
                <button
                  onClick={() => handleSelectPreset('aurora')}
                  className="text-[11px] font-bold text-slate-400 hover:text-white px-2 py-1 rounded-lg hover:bg-slate-800 transition shrink-0"
                >
                  Bỏ chọn
                </button>
              </div>
            )}
          </div>

          {/* 3. SMART READABILITY & CONTRAST CONTROLS */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-emerald-400" />
                <h3 className="text-xs sm:text-sm font-bold text-white">
                  Bộ Điều Khiển Độ Tương Phản Thông Minh (WCAG AAA)
                </h3>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Bảo vệ mắt & Chữ luôn rõ nét</span>
              </div>
            </div>

            {/* Slider 1: Dimmer / Overlay Opacity */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">
                  Độ mờ lớp phủ tối (Dimmer Overlay):
                </span>
                <span className="font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                  {Math.round(currentSettings.dimmerOpacity * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0.20"
                max="0.90"
                step="0.01"
                value={currentSettings.dimmerOpacity}
                onChange={(e) => handleSliderChange('dimmerOpacity', parseFloat(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">
                Hạ độ gắt của hình nền. Khuyên dùng 65% – 80% để mọi thẻ từ vựng và câu hỏi không bị chói.
              </p>
            </div>

            {/* Slider 2: Background Blur */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">
                  Độ mờ hậu cảnh (Background Blur):
                </span>
                <span className="font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md">
                  {currentSettings.bgBlur}px
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="24"
                step="1"
                value={currentSettings.bgBlur}
                onChange={(e) => handleSliderChange('bgBlur', parseInt(e.target.value, 10))}
                className="w-full accent-indigo-400 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">
                Làm mờ ảnh nền tạo hiệu ứng chiều sâu Bokeh điện ảnh, giúp mắt tập trung tuyệt đối vào từ vựng.
              </p>
            </div>

            {/* Slider 3: Card Glassmorphism Opacity */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">
                  Độ trong suốt thẻ học (Card Glassmorphism):
                </span>
                <span className="font-mono font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md">
                  {Math.round(currentSettings.cardGlassOpacity * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0.40"
                max="1.00"
                step="0.05"
                value={currentSettings.cardGlassOpacity}
                onChange={(e) => handleSliderChange('cardGlassOpacity', parseFloat(e.target.value))}
                className="w-full accent-purple-400 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">
                Điều chỉnh độ trong mờ của các thẻ học từ vựng, sidebar và topbar.
              </p>
            </div>
          </div>

          {/* 4. REAL-TIME MINI PREVIEW */}
          <div className="p-4 rounded-2xl border border-white/10 bg-slate-950/60 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Eye className="w-3 h-3 text-cyan-400" />
              <span>Xem trước độ tương phản thực tế:</span>
            </span>
            <div
              className="p-4 rounded-xl border border-white/10 flex items-center justify-between"
              style={{
                backgroundColor: `rgba(15, 23, 42, ${currentSettings.cardGlassOpacity})`,
                backdropFilter: `blur(${currentSettings.glassBlur}px)`
              }}
            >
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Thẻ từ vựng mẫu: Comprehensive
                </span>
                <p className="text-[11px] text-slate-300">
                  /ˌkɑːm.prəˈhen.sɪv/ • (adj) Toàn diện, bao quát
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                100% Đạt Chuẩn
              </span>
            </div>
          </div>
        </div>

        {/* FOOTER ACTIONS */}
        <div className="px-5 py-4 sm:px-6 sm:py-4 border-t border-white/10 bg-slate-900/60 backdrop-blur-md flex items-center justify-between shrink-0">
          <button
            onClick={onResetTheme}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition"
            title="Khôi phục về giao diện cực quang mặc định"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span>Mặc định</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-xs font-bold text-white shadow-lg shadow-indigo-500/25 transition"
            >
              Đã hiểu & Áp dụng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
