import React, { useState, useMemo } from 'react';
import {
  X,
  Star,
  Zap,
  Shuffle,
  Filter,
  CheckCircle2,
  Play,
  RotateCcw
} from 'lucide-react';

export default function TopicFilterModal({
  isOpen,
  onClose,
  subdeck,
  starredCardIds = [],
  onToggleStar,
  onStartFilteredStudy,
  initialMode = 'mix' // 'mix' | 'filter'
}) {
  if (!isOpen || !subdeck) return null;

  const cards = useMemo(() => subdeck.cards || [], [subdeck]);

  // Filter Selection
  const [scope, setScope] = useState('all'); // 'all' | 'unlearned' | 'starred'
  const [shuffleOrder, setShuffleOrder] = useState(false);

  // Compute stats
  const unlearnedCards = useMemo(() => {
    return cards.filter((c) => c.status !== 'mastered');
  }, [cards]);

  const starredCards = useMemo(() => {
    return cards.filter((c) => starredCardIds.includes(c.id));
  }, [cards, starredCardIds]);

  const filteredCards = useMemo(() => {
    let result = [...cards];
    if (scope === 'unlearned') {
      result = unlearnedCards.length > 0 ? unlearnedCards : cards;
    } else if (scope === 'starred') {
      result = starredCards.length > 0 ? starredCards : cards;
    }

    if (shuffleOrder) {
      result = [...result].sort(() => Math.random() - 0.5);
    }

    return result;
  }, [cards, scope, unlearnedCards, starredCards, shuffleOrder]);

  const handleLaunch = () => {
    onClose();
    if (onStartFilteredStudy) {
      onStartFilteredStudy({
        ...subdeck,
        title: `${subdeck.title} (${
          scope === 'unlearned'
            ? 'Từ chưa thuộc'
            : scope === 'starred'
            ? 'Từ gắn sao'
            : 'Tất cả'
        })`,
        cards: filteredCards
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0F172A] border border-amber-500/40 rounded-3xl shadow-2xl p-6 sm:p-7 space-y-6 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xl shadow">
              {initialMode === 'mix' ? <Zap className="w-5 h-5" /> : <Star className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white">
                {initialMode === 'mix' ? '⚡ Chế Độ Kết Hợp 4 Bước (Smart Mix)' : '⭐ Bộ Lọc & Quản Lý Từ Vựng'}
              </h2>
              <p className="text-[11px] text-slate-400">
                Chủ đề: <strong className="text-amber-300">{subdeck.title}</strong>
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

        {/* Scope Selector Options */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Chọn phạm vi từ vựng để bắt đầu học:
          </label>
          <div className="space-y-2">
            {[
              {
                id: 'all',
                label: 'Tất cả 50 từ trong bộ thẻ',
                sub: 'Quy trình 4 bước hoàn chỉnh từ đầu đến cuối',
                count: cards.length
              },
              {
                id: 'unlearned',
                label: 'Chỉ học từ chưa thuộc',
                sub: 'Tập trung học dứt điểm các từ mới và đang ôn',
                count: unlearnedCards.length
              },
              {
                id: 'starred',
                label: 'Chỉ học từ đã gắn ngôi sao ⭐',
                sub: 'Các từ quan trọng do bạn tự tay đánh dấu',
                count: starredCards.length
              }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setScope(opt.id)}
                className={`w-full p-3.5 rounded-2xl border text-left transition flex items-center justify-between ${
                  scope === opt.id
                    ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                    : 'bg-[#0B0F17] border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div>
                  <p className="text-xs font-bold text-white">{opt.label}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{opt.sub}</p>
                </div>
                <span className="px-2 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-indigo-300">
                  {opt.count} từ
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Shuffle Toggle */}
        <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Shuffle className="w-4 h-4 text-amber-400" />
            <div>
              <p className="text-xs font-bold text-white">Xáo trộn ngẫu nhiên thứ tự các từ</p>
              <p className="text-[10px] text-slate-400">Tránh học vẹt theo thứ tự cố định</p>
            </div>
          </div>

          <button
            onClick={() => setShuffleOrder((v) => !v)}
            className={`w-11 h-6 rounded-full transition-colors relative p-1 ${
              shuffleOrder ? 'bg-indigo-600' : 'bg-slate-800'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transition-transform ${
                shuffleOrder ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Quick Star Marking List (Preview & Toggle Stars) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-300">
              Danh sách từ vựng (Bấm ⭐ để gắn dấu):
            </span>
            <span className="text-[10px] text-amber-400">
              Đã gắn sao: {starredCardIds.length}/{cards.length}
            </span>
          </div>

          <div className="max-h-40 overflow-y-auto divide-y divide-slate-800/80 rounded-2xl bg-[#0B0F17] border border-slate-800 p-2">
            {cards.map((c) => {
              const isStarred = starredCardIds.includes(c.id);
              return (
                <div
                  key={c.id}
                  className="py-2 px-2 flex items-center justify-between hover:bg-slate-900/50 rounded-xl transition"
                >
                  <div className="min-w-0 pr-2">
                    <span className="text-xs font-mono font-bold text-white">{c.word}</span>
                    <span className="text-[11px] text-slate-400 ml-2 truncate">({c.meaning})</span>
                  </div>

                  <button
                    onClick={() => onToggleStar && onToggleStar(c.id)}
                    className="p-1 rounded-lg text-slate-500 hover:text-amber-400 transition shrink-0"
                  >
                    <Star
                      className={`w-4 h-4 ${
                        isStarred ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Launch Study Button */}
        <button
          onClick={handleLaunch}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-amber-600 hover:from-indigo-500 hover:to-amber-500 text-white font-black text-xs sm:text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition"
        >
          <Play className="w-4 h-4 fill-white text-white" />
          <span>Bắt đầu học ({filteredCards.length} từ đã chọn) →</span>
        </button>
      </div>
    </div>
  );
}
