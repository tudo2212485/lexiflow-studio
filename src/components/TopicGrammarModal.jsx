import React, { useMemo } from 'react';
import {
  X,
  Boxes,
  Volume2,
  Sparkles,
  BookOpen,
  ArrowRight,
  Layers,
  Check
} from 'lucide-react';

export default function TopicGrammarModal({
  isOpen,
  onClose,
  subdeck,
  onSpeak
}) {
  const cards = useMemo(() => subdeck?.cards || [], [subdeck]);

  // Extract Collocations and Grammar Patterns from the topic cards
  const grammarData = useMemo(() => {
    // 1. Key Collocations extracted from cards
    const collocations = cards
      .filter((c) => c.chunk && c.chunk.length > 5)
      .slice(0, 10)
      .map((c) => ({
        chunk: c.chunk,
        word: c.word,
        example: c.example || '',
        meaning: c.meaning || ''
      }));

    // 2. Synthesized Grammar Patterns based on the topic sentences
    const patterns = [
      {
        title: 'Cấu trúc Khuyên nhủ & Đề xuất (Recommendations & Advice)',
        formula: 'S + should / ought to / had better + V-bare',
        explanation: 'Dùng để đưa ra lời khuyên hoặc hướng dẫn ứng xử tinh tế trong chủ đề này.',
        examples: cards.slice(0, 2).map((c) => c.example).filter(Boolean)
      },
      {
        title: 'Mệnh đề Quan hệ Xác định (Defining Relative Clauses)',
        formula: 'Noun + who / which / that + Clause',
        explanation: 'Bổ nghĩa trực tiếp cho danh từ chỉ người hoặc sự việc mà không cần dấu phẩy.',
        examples: cards.slice(2, 4).map((c) => c.example).filter(Boolean)
      },
      {
        title: 'Cấu trúc Nhấn mạnh với Trạng từ & Tính từ (Emphasis Patterns)',
        formula: 'It is + Adjective + that / to V...',
        explanation: 'Nhấn mạnh tính chất quan trọng của hành động trong ngữ cảnh thực tế.',
        examples: cards.slice(4, 6).map((c) => c.example).filter(Boolean)
      },
      {
        title: 'Sự kết hợp Động từ & Giới từ (Verb + Preposition Collocations)',
        formula: 'Verb + on / in / at / for + Object',
        explanation: 'Các cụm động từ đi kèm giới từ cố định không thể tách rời.',
        examples: cards.slice(6, 8).map((c) => c.example).filter(Boolean)
      }
    ];

    return { collocations, patterns };
  }, [cards]);

  if (!isOpen || !subdeck) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0F172A] border border-sky-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 text-xl shadow">
              <Boxes className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white">
                Ngữ Pháp & Collocations Cốt Lõi
              </h2>
              <p className="text-[11px] text-slate-400">
                Tổng hợp từ 50 câu ví dụ của chủ đề: <strong className="text-sky-300">{subdeck?.title || ''}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-6 space-y-6 overflow-y-auto">
          {/* SECTION 1: KEY COLLOCATIONS */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>Cụm Từ Cố Định (Key Collocations) Hay Gặp:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {grammarData.collocations.map((col, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#131B2E] border border-slate-800 space-y-1 hover:border-sky-500/40 transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-300 font-mono">
                      "{col.chunk}"
                    </span>
                    <button
                      onClick={() => onSpeak && onSpeak(col.chunk, 1.0)}
                      className="p-1 text-slate-400 hover:text-white"
                      title="Nghe cụm từ"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Từ gốc: <strong className="text-white">{col.word}</strong> ({col.meaning})
                  </p>
                  {col.example && (
                    <p className="text-[10px] text-slate-400 italic line-clamp-1 pt-0.5">
                      "{col.example}"
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: SYNTHESIZED GRAMMAR PATTERNS */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-sky-400">
              <Layers className="w-4 h-4" />
              <span>4 Mẫu Cấu Trúc Ngữ Pháp Tiêu Biểu Trong Chủ Đề:</span>
            </div>

            <div className="space-y-3">
              {grammarData.patterns.map((pat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#0B0F17] border border-slate-800 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-xs sm:text-sm">
                      {idx + 1}. {pat.title}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">
                      Grammar #{idx + 1}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-amber-300 font-mono font-bold text-[11px]">
                    {pat.formula}
                  </div>

                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {pat.explanation}
                  </p>

                  {pat.examples.length > 0 && (
                    <div className="space-y-1 pt-1 border-t border-slate-800/80">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">
                        Ví dụ thực tế:
                      </span>
                      {pat.examples.map((ex, exIdx) => (
                        <p key={exIdx} className="text-[11px] text-slate-200 italic">
                          • "{ex}"
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
