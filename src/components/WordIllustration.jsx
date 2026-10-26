import React, { useState, useEffect, useMemo } from 'react';
import { Sparkles, Image as ImageIcon } from 'lucide-react';

// Curated Semantic Keyword to 3D Visual Emoji / Theme Mapping
const TOPIC_VISUAL_MAP = {
  // Family & Relations
  parent: { emoji: '👨‍👩‍👧', bg: 'from-blue-600/30 to-indigo-600/30', border: 'border-blue-500/30' },
  father: { emoji: '👨‍👧', bg: 'from-blue-600/30 to-cyan-600/30', border: 'border-blue-500/30' },
  mother: { emoji: '👩‍👧', bg: 'from-rose-600/30 to-pink-600/30', border: 'border-rose-500/30' },
  sibling: { emoji: '👫', bg: 'from-amber-600/30 to-orange-600/30', border: 'border-amber-500/30' },
  spouse: { emoji: '💍', bg: 'from-purple-600/30 to-pink-600/30', border: 'border-purple-500/30' },
  relative: { emoji: '👥', bg: 'from-emerald-600/30 to-teal-600/30', border: 'border-emerald-500/30' },
  upbringing: { emoji: '🍼', bg: 'from-cyan-600/30 to-blue-600/30', border: 'border-cyan-500/30' },
  generation: { emoji: '🌳', bg: 'from-emerald-600/30 to-green-600/30', border: 'border-emerald-500/30' },
  cherish: { emoji: '💖', bg: 'from-rose-600/30 to-red-600/30', border: 'border-rose-500/30' },
  bond: { emoji: '🤝', bg: 'from-indigo-600/30 to-blue-600/30', border: 'border-indigo-500/30' },
  inherit: { emoji: '👑', bg: 'from-amber-600/30 to-yellow-600/30', border: 'border-amber-500/30' },
  breadwinner: { emoji: '💼', bg: 'from-blue-600/30 to-slate-600/30', border: 'border-blue-500/30' },
  ancestor: { emoji: '📜', bg: 'from-amber-700/30 to-orange-700/30', border: 'border-amber-600/30' },
  dependent: { emoji: '🌱', bg: 'from-teal-600/30 to-emerald-600/30', border: 'border-teal-500/30' },
  harmonious: { emoji: '🕊️', bg: 'from-sky-600/30 to-blue-600/30', border: 'border-sky-500/30' },
  custody: { emoji: '🛡️', bg: 'from-indigo-600/30 to-violet-600/30', border: 'border-indigo-500/30' },
  offspring: { emoji: '🐣', bg: 'from-yellow-600/30 to-amber-600/30', border: 'border-yellow-500/30' },
  household: { emoji: '🏠', bg: 'from-orange-600/30 to-amber-600/30', border: 'border-orange-500/30' },
  foster: { emoji: '🫂', bg: 'from-purple-600/30 to-indigo-600/30', border: 'border-purple-500/30' },
  genealogy: { emoji: '🧬', bg: 'from-emerald-600/30 to-teal-600/30', border: 'border-emerald-500/30' },
  kinship: { emoji: '🧑‍🤝‍🧑', bg: 'from-blue-600/30 to-teal-600/30', border: 'border-blue-500/30' },
  matriarch: { emoji: '👵', bg: 'from-pink-600/30 to-purple-600/30', border: 'border-pink-500/30' },
  patriarch: { emoji: '👴', bg: 'from-blue-700/30 to-indigo-700/30', border: 'border-blue-600/30' },
  devotion: { emoji: '🙏', bg: 'from-purple-600/30 to-rose-600/30', border: 'border-purple-500/30' },
  reunion: { emoji: '🎉', bg: 'from-amber-600/30 to-rose-600/30', border: 'border-amber-500/30' },
  infant: { emoji: '👶', bg: 'from-pink-500/30 to-rose-500/30', border: 'border-pink-400/30' },
  toddler: { emoji: '🧒', bg: 'from-amber-500/30 to-orange-500/30', border: 'border-amber-400/30' },
  adolescence: { emoji: '🎒', bg: 'from-blue-500/30 to-indigo-500/30', border: 'border-blue-400/30' },
  affection: { emoji: '❤️', bg: 'from-rose-600/30 to-red-600/30', border: 'border-rose-500/30' },
  nurture: { emoji: '🌿', bg: 'from-emerald-600/30 to-teal-600/30', border: 'border-emerald-500/30' },
  guardian: { emoji: '👮', bg: 'from-indigo-600/30 to-blue-600/30', border: 'border-indigo-500/30' },
  domestic: { emoji: '🧹', bg: 'from-amber-600/30 to-yellow-600/30', border: 'border-amber-500/30' },
  intimacy: { emoji: '🕯️', bg: 'from-rose-600/30 to-amber-600/30', border: 'border-rose-500/30' },
  kindred: { emoji: '✨', bg: 'from-purple-600/30 to-blue-600/30', border: 'border-purple-500/30' },
  devoted: { emoji: '🌟', bg: 'from-amber-500/30 to-yellow-500/30', border: 'border-amber-400/30' },
  lineage: { emoji: '👑', bg: 'from-orange-600/30 to-amber-600/30', border: 'border-orange-500/30' },
  nephew: { emoji: '👦', bg: 'from-blue-600/30 to-cyan-600/30', border: 'border-blue-500/30' },
  niece: { emoji: '👧', bg: 'from-pink-600/30 to-purple-600/30', border: 'border-pink-500/30' },
  heritage: { emoji: '🏛️', bg: 'from-amber-700/30 to-yellow-700/30', border: 'border-amber-600/30' },
  bosom: { emoji: '🫂', bg: 'from-rose-600/30 to-pink-600/30', border: 'border-rose-500/30' }
};

export default function WordIllustration({
  word = '',
  meaning = '',
  mnemonic = '',
  size = 'md', // 'sm' | 'md' | 'lg'
  className = ''
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Clean word key
  const cleanWord = useMemo(() => word.trim().toLowerCase(), [word]);

  // Visual emoji and theme fallback
  const fallbackVisual = useMemo(() => {
    if (TOPIC_VISUAL_MAP[cleanWord]) {
      return TOPIC_VISUAL_MAP[cleanWord];
    }
    // Partial match
    for (const [key, val] of Object.entries(TOPIC_VISUAL_MAP)) {
      if (cleanWord.includes(key) || key.includes(cleanWord)) {
        return val;
      }
    }
    // Generic fallback
    return {
      emoji: '💡',
      bg: 'from-indigo-600/30 to-purple-600/30',
      border: 'border-indigo-500/30'
    };
  }, [cleanWord]);

  // Pollinations AI prompt for minimalist flat vector illustration
  const aiImageUrl = useMemo(() => {
    if (!cleanWord) return '';
    const prompt = `minimalist 3d flat vector illustration of ${cleanWord}, clear icon object, clean soft studio lighting, edtech design, dark navy background, modern UI asset`;
    return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=250&height=250&nologo=true`;
  }, [cleanWord]);

  // Reset loading status on word change
  useEffect(() => {
    setImgLoaded(false);
    setImgError(false);
  }, [cleanWord]);

  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-36 h-36 sm:w-40 sm:h-40',
    lg: 'w-44 h-44 sm:w-48 sm:h-48'
  }[size] || 'w-36 h-36';

  const emojiSizes = {
    sm: 'text-3xl',
    md: 'text-5xl sm:text-6xl',
    lg: 'text-6xl sm:text-7xl'
  }[size] || 'text-5xl';

  return (
    <div className={`flex flex-col items-center shrink-0 ${className}`}>
      {/* 3-Tier Illustration Frame */}
      <div
        className={`relative ${sizeClasses} rounded-2xl overflow-hidden bg-gradient-to-br ${fallbackVisual.bg} border ${fallbackVisual.border} shadow-xl flex items-center justify-center p-2 group transition-transform duration-300 hover:scale-[1.03] select-none`}
      >
        {/* Layer 2: 3D High-Res Visual Emoji Badge (Always visible as base or fallback) */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${
            imgLoaded && !imgError ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <span className={`${emojiSizes} drop-shadow-md animate-pulse`}>
            {fallbackVisual.emoji}
          </span>
          <span className="text-[10px] font-mono font-bold text-slate-300/80 mt-1 uppercase tracking-wider">
            {word}
          </span>
        </div>

        {/* Layer 1: AI Generated Flat Vector Image */}
        {!imgError && aiImageUrl && (
          <img
            src={aiImageUrl}
            alt={`Minh họa từ ${word}`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full object-cover rounded-xl transition-all duration-700 ${
              imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
        )}

        {/* Glossy Overlay Highlight */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/60 via-transparent to-white/10 pointer-events-none" />

        {/* Mini AI Badge Indicator */}
        <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded-md bg-black/50 backdrop-blur-md border border-white/10 text-[9px] font-extrabold text-indigo-300 flex items-center gap-1 shadow">
          <Sparkles className="w-2.5 h-2.5 text-amber-400" />
          <span>Visual</span>
        </div>
      </div>

      {/* Layer 3: Visual Association Caption */}
      <div className="mt-1.5 text-center max-w-[160px]">
        <p className="text-[10px] text-slate-400 line-clamp-1 font-medium">
          📸 <strong className="text-white">{word}</strong>: {meaning || cleanWord}
        </p>
      </div>
    </div>
  );
}
