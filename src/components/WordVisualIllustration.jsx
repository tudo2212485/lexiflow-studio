import React, { useState, useEffect, useMemo } from 'react';
import {
  Sparkles,
  Sun,
  Shield,
  Heart,
  Compass,
  Zap,
  Target,
  Award,
  TrendingUp,
  Brain,
  Rocket,
  Flame,
  Clock,
  Briefcase,
  Layers,
  GraduationCap,
  Globe,
  Leaf,
  Users,
  Smile,
  BookOpen,
  Code,
  FileText,
  Search,
  MessageCircle,
  HelpCircle,
  Activity
} from 'lucide-react';

// In-memory cache for Wikipedia thumbnail URLs
const wikiImageCache = new Map();

// Curated Semantic Visual Concept Scenes for Abstract & Core Concepts
const CONCEPT_SCENES = {
  optimism: {
    icon: Sun,
    emoji: '☀️',
    symbol: 'Mặt trời rạng rỡ & Mũi tên tiến lên',
    anchor: 'Ánh mặt trời tươi sáng',
    context: 'Luôn tin tưởng vào tương lai tốt đẹp',
    accent: 'from-amber-500/30 via-orange-500/20 to-emerald-500/30',
    border: 'border-amber-400/50',
    iconColor: 'text-amber-400',
    tags: ['Tích cực', 'Niềm tin', 'Hy vọng']
  },
  optimistic: {
    icon: Sun,
    emoji: '☀️',
    symbol: 'Mặt trời rạng rỡ & Tinh thần đón nhận',
    anchor: 'Ánh sáng xuyên qua mây mù',
    context: 'Giữ thái độ tích cực trước thử thách',
    accent: 'from-amber-500/30 via-yellow-500/20 to-emerald-500/30',
    border: 'border-amber-400/50',
    iconColor: 'text-amber-400',
    tags: ['Lạc quan', 'Vui vẻ', 'Tương lai']
  },
  resilience: {
    icon: Shield,
    emoji: '🛡️',
    symbol: 'Khiên bảo vệ & Lò xo bật dậy',
    anchor: 'Khối thép uốn cong rồi bật thẳng',
    context: 'Kiên cường đứng dậy sau vấp ngã',
    accent: 'from-emerald-500/30 via-teal-500/20 to-cyan-500/30',
    border: 'border-emerald-400/50',
    iconColor: 'text-emerald-400',
    tags: ['Bền bỉ', 'Vượt khó', 'Bản lĩnh']
  },
  resilient: {
    icon: Shield,
    emoji: '🛡️',
    symbol: 'Cây sồi vững vàng trong bão giông',
    anchor: 'Lá chắn kiên cường',
    context: 'Thích ứng và phục hồi nhanh chóng',
    accent: 'from-emerald-500/30 via-teal-500/20 to-cyan-500/30',
    border: 'border-emerald-400/50',
    iconColor: 'text-emerald-400',
    tags: ['Kiên định', 'Mạnh mẽ', 'Phục hồi']
  },
  cherish: {
    icon: Heart,
    emoji: '💖',
    symbol: 'Bàn tay nâng niu ngọn lửa ấm',
    anchor: 'Trân quý món quà vô giá',
    context: 'Ấp ủ và giữ gìn tình thân gia đình',
    accent: 'from-rose-500/30 via-pink-500/20 to-purple-500/30',
    border: 'border-rose-400/50',
    iconColor: 'text-rose-400',
    tags: ['Nâng niu', 'Yêu thương', 'Trân trọng']
  },
  collaborate: {
    icon: Users,
    emoji: '🤝',
    symbol: 'Bàn tay bắt chặt & Bánh răng ăn khớp',
    anchor: 'Cùng chung chí hướng hành động',
    context: 'Phối hợp nhịp nhàng để đạt kết quả lớn',
    accent: 'from-blue-500/30 via-indigo-500/20 to-sky-500/30',
    border: 'border-blue-400/50',
    iconColor: 'text-blue-400',
    tags: ['Đồng đội', 'Hợp tác', 'Cộng hưởng']
  },
  collaboration: {
    icon: Users,
    emoji: '🤝',
    symbol: 'Mạng lưới kết nối đa năng lượng',
    anchor: 'Sức mạnh tập thể',
    context: 'Làm việc nhóm xuyên biên giới',
    accent: 'from-blue-500/30 via-indigo-500/20 to-sky-500/30',
    border: 'border-blue-400/50',
    iconColor: 'text-blue-400',
    tags: ['Làm việc nhóm', 'Hòa hợp', 'Hiệu quả']
  },
  innovation: {
    icon: Rocket,
    emoji: '🚀',
    symbol: 'Tên lửa bứt phá vào không gian',
    anchor: 'Tia sáng đột phá ý tưởng',
    context: 'Sáng tạo cái mới thay thế lối mòn cũ',
    accent: 'from-purple-500/30 via-indigo-500/20 to-pink-500/30',
    border: 'border-purple-400/50',
    iconColor: 'text-purple-400',
    tags: ['Đột phá', 'Sáng tạo', 'Hiện đại']
  },
  perspective: {
    icon: Compass,
    emoji: '🔭',
    symbol: 'Ống kính thiên văn & Góc nhìn đa chiều',
    anchor: 'Đứng trên đài cao quan sát',
    context: 'Đánh giá vấn đề từ nhiều góc độ',
    accent: 'from-cyan-500/30 via-blue-500/20 to-indigo-500/30',
    border: 'border-cyan-400/50',
    iconColor: 'text-cyan-400',
    tags: ['Tầm nhìn', 'Góc nhìn', 'Bao quát']
  },
  sustainable: {
    icon: Leaf,
    emoji: '🌱',
    symbol: 'Chồi non đâm chồi & Vòng tuần hoàn',
    anchor: 'Mầm xanh trường tồn',
    context: 'Phát triển hài hòa và duy trì lâu dài',
    accent: 'from-emerald-500/30 via-green-500/20 to-teal-500/30',
    border: 'border-emerald-400/50',
    iconColor: 'text-emerald-400',
    tags: ['Bền vững', 'Môi trường', 'Tương lai']
  },
  mastery: {
    icon: Award,
    emoji: '👑',
    symbol: 'Vương miện vàng & Đỉnh cao kỹ năng',
    anchor: 'Bậc thầy điêu luyện',
    context: 'Thành thạo kỹ năng tới mức hoàn hảo',
    accent: 'from-amber-500/30 via-yellow-500/20 to-orange-500/30',
    border: 'border-amber-400/50',
    iconColor: 'text-amber-400',
    tags: ['Bậc thầy', 'Tinh thông', 'Đỉnh cao']
  },
  consistency: {
    icon: Clock,
    emoji: '⏱️',
    symbol: 'Đồng hồ đếm nhịp & Chuỗi streak',
    anchor: 'Giọt nước nhỏ đều làm thủng đá',
    context: 'Duy trì kỷ luật học tập mỗi ngày',
    accent: 'from-indigo-500/30 via-blue-500/20 to-sky-500/30',
    border: 'border-indigo-400/50',
    iconColor: 'text-indigo-400',
    tags: ['Kỷ luật', 'Đều đặn', 'Kiên trì']
  },
  breakthrough: {
    icon: Zap,
    emoji: '💥',
    symbol: 'Tia chớp phá vỡ rào cản đá',
    anchor: 'Khoảnh khắc Eureka bừng sáng',
    context: 'Bước ngoặt tháo gỡ bế tắc hoàn toàn',
    accent: 'from-rose-500/30 via-amber-500/20 to-yellow-500/30',
    border: 'border-rose-400/50',
    iconColor: 'text-amber-300',
    tags: ['Đột phá', 'Bùng nổ', 'Thành công']
  },
  empower: {
    icon: Flame,
    emoji: '⚡',
    symbol: 'Ngọn đuốc trao tay & Tiếp thêm nội lực',
    anchor: 'Nâng cánh niềm tin',
    context: 'Trao quyền và truyền động lực mạnh mẽ',
    accent: 'from-orange-500/30 via-amber-500/20 to-red-500/30',
    border: 'border-orange-400/50',
    iconColor: 'text-orange-400',
    tags: ['Trao quyền', 'Tiếp lửa', 'Tự tin']
  },
  contract: {
    icon: FileText,
    emoji: '📜',
    symbol: 'Bản cam kết pháp lý & Con dấu thỏa thuận',
    anchor: 'Hợp đồng chữ ký đôi bên',
    context: 'Giao kết trách nhiệm và quyền lợi',
    accent: 'from-slate-500/30 via-blue-500/20 to-indigo-500/30',
    border: 'border-blue-400/50',
    iconColor: 'text-blue-300',
    tags: ['Pháp lý', 'Cam kết', 'Hợp đồng']
  },
  technology: {
    icon: Code,
    emoji: '💻',
    symbol: 'Màn hình công nghệ & Dòng code số',
    anchor: 'Mạch vi xử lý thông minh',
    context: 'Ứng dụng chuyển đổi số hiện đại',
    accent: 'from-cyan-500/30 via-blue-500/20 to-indigo-500/30',
    border: 'border-cyan-400/50',
    iconColor: 'text-cyan-400',
    tags: ['Công nghệ', 'Số hóa', 'Kỹ thuật']
  }
};

export default function WordVisualIllustration({
  word = '',
  meaning = '',
  mnemonic = '',
  pos = '',
  size = 'md', // 'sm' | 'md' | 'lg'
  className = ''
}) {
  const [wikiImage, setWikiImage] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Clean lookup key
  const cleanWord = useMemo(() => word.trim().toLowerCase().replace(/[^a-z]/g, ''), [word]);

  // Concept scene mapping (smart lookup: exact or partial)
  const concept = useMemo(() => {
    if (!cleanWord) return null;
    if (CONCEPT_SCENES[cleanWord]) return CONCEPT_SCENES[cleanWord];

    for (const [key, val] of Object.entries(CONCEPT_SCENES)) {
      if (cleanWord.includes(key) || key.includes(cleanWord)) {
        return val;
      }
    }
    return null;
  }, [cleanWord]);

  // Query Wikipedia Summary REST API for real photos (Concrete nouns, animals, historical objects)
  useEffect(() => {
    let isMounted = true;
    if (!cleanWord || cleanWord.length < 2) return;

    // Check memory cache first
    if (wikiImageCache.has(cleanWord)) {
      const cached = wikiImageCache.get(cleanWord);
      setWikiImage(cached);
      setImgError(!cached);
      return;
    }

    // Abstract concepts with rich concept scenes prioritize SVG scene over random Wiki photo
    if (concept && ['optimistic', 'optimism', 'resilience', 'cherish', 'collaborate'].includes(cleanWord)) {
      setWikiImage(null);
      setImgError(true);
      return;
    }

    const fetchWiki = async () => {
      try {
        const res = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanWord)}`,
          { headers: { Accept: 'application/json' } }
        );
        if (!res.ok) throw new Error('Wiki fetch failed');
        const data = await res.json();

        const src = data.thumbnail?.source;
        // Verify valid image (not disambiguation or Wikipedia placeholder)
        if (src && !src.includes('disambig') && !src.includes('Wiktionary') && isMounted) {
          wikiImageCache.set(cleanWord, src);
          setWikiImage(src);
          setImgLoaded(false);
          setImgError(false);
        } else {
          wikiImageCache.set(cleanWord, null);
          if (isMounted) setImgError(true);
        }
      } catch (err) {
        wikiImageCache.set(cleanWord, null);
        if (isMounted) setImgError(true);
      }
    };

    fetchWiki();

    return () => {
      isMounted = false;
    };
  }, [cleanWord, concept]);

  // Dimensions
  const frameSizes = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32 sm:w-36 sm:h-36',
    lg: 'w-40 h-40 sm:w-44 sm:h-44'
  }[size] || 'w-32 h-32 sm:w-36 sm:h-36';

  const MainIcon = concept?.icon || Activity;
  const accentGradient = concept?.accent || 'from-indigo-600/30 via-blue-600/20 to-purple-600/30';
  const borderTone = concept?.border || 'border-indigo-500/40';
  const iconColor = concept?.iconColor || 'text-indigo-400';

  return (
    <div className={`flex flex-col items-center shrink-0 ${className}`}>
      {/* Visual Frame */}
      <div
        className={`relative ${frameSizes} rounded-2xl overflow-hidden bg-gradient-to-br ${accentGradient} border ${borderTone} shadow-xl flex items-center justify-center p-2.5 group transition-all duration-300 hover:scale-[1.03] select-none`}
      >
        {/* Layer 1: Wikipedia Real Photo (if available) */}
        {wikiImage && !imgError && (
          <img
            src={wikiImage}
            alt={`Ảnh thực tế từ Wikipedia: ${word}`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full object-cover rounded-xl transition-all duration-500 ${
              imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
        )}

        {/* Layer 2: Contextual Visual Concept Scene (SVG & 3D Symbolic Scene - 100% crisp) */}
        {(!wikiImage || imgError || !imgLoaded) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
            {/* Glowing Aura Ring */}
            <div className="absolute w-16 h-16 rounded-full bg-white/5 blur-md pointer-events-none" />

            {/* Central Visual Concept Graphic */}
            <div className="relative z-10 flex flex-col items-center">
              {concept?.emoji ? (
                <span className="text-4xl sm:text-5xl drop-shadow-lg select-none mb-1">
                  {concept.emoji}
                </span>
              ) : (
                <div className={`p-3 rounded-2xl bg-black/40 border border-white/10 ${iconColor} mb-1 shadow-inner`}>
                  <MainIcon className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>
              )}

              {/* Word Tag Anchor */}
              <span className="text-[10px] font-mono font-black text-white uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/50 border border-white/10 truncate max-w-full">
                {word}
              </span>
            </div>
          </div>
        )}

        {/* Ambient Top Highlight */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/70 via-transparent to-white/10 pointer-events-none" />

        {/* Visual Badge Indicator */}
        <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-[9px] font-extrabold text-indigo-300 flex items-center gap-1 shadow">
          <Sparkles className="w-2.5 h-2.5 text-amber-400" />
          <span>{wikiImage && imgLoaded && !imgError ? 'Wiki' : 'Concept'}</span>
        </div>
      </div>

      {/* Layer 3: Association Diagram & Context Card */}
      <div
        className="mt-2 text-center max-w-[170px] sm:max-w-[200px] space-y-1"
        title={`${word}: ${meaning}`}
      >
        {/* Caption */}
        <p className="text-[11px] text-slate-200 line-clamp-1 font-semibold leading-tight">
          💡 <strong className="text-white">{word}</strong>: {meaning}
        </p>

        {/* Semantic Association Flow: [Từ gốc] ➔ [Gợi nhớ] ➔ [Tình huống] */}
        {concept && (
          <div className="p-1.5 rounded-xl bg-black/40 border border-slate-800/80 text-[9px] text-slate-300 leading-tight">
            <span className="text-amber-400 font-bold">{word}</span>
            <span className="text-slate-500 mx-1">➔</span>
            <span className="text-indigo-300 font-medium">{concept.anchor}</span>
            <span className="text-slate-500 mx-1">➔</span>
            <span className="text-emerald-300">{concept.context}</span>
          </div>
        )}
      </div>
    </div>
  );
}
