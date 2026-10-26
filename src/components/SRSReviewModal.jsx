import React, { useState, useEffect } from 'react';
import { Brain, X, Volume2, RotateCcw, Award, CheckCircle, Sparkles, Eye } from 'lucide-react';

export default function SRSReviewModal({
  isOpen,
  onClose,
  cards = [],
  onUpdateCardSRS,
  onSpeak,
  onAwardXP
}) {
  const [reviewQueue, setReviewQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const initQueue = () => {
    if (!cards || cards.length === 0) {
      setReviewQueue([]);
      return;
    }
    // Prioritize due cards first, then weak, then learning
    const due = cards.filter((c) => c.due || c.status === 'due');
    const weak = cards.filter((c) => c.status === 'weak');
    const learning = cards.filter((c) => c.status === 'learning');
    const others = cards.filter(
      (c) => !c.due && c.status !== 'due' && c.status !== 'weak' && c.status !== 'learning'
    );

    let combined = [...due, ...weak, ...learning];
    if (combined.length < 15) {
      combined = [...combined, ...others.slice(0, 15 - combined.length)];
    }
    setReviewQueue(combined.slice(0, 15));
    setCurrentIndex(0);
    setIsFlipped(false);
    setReviewedCount(0);
    setIsFinished(false);
  };

  useEffect(() => {
    if (isOpen) {
      initQueue();
    }
  }, [isOpen]);

  const handleRate = (ratingLevel) => {
    // ratingLevel: 1: 'again' (10m), 2: 'hard' (1d), 3: 'good' (4d), 4: 'easy' (14d)
    const currentCard = reviewQueue[currentIndex];
    if (!currentCard) return;

    let newStatus = currentCard.status || 'learning';
    let intervalDays = 0;

    if (ratingLevel === 1) {
      newStatus = 'weak';
      intervalDays = 0;
    } else if (ratingLevel === 2) {
      newStatus = 'learning';
      intervalDays = 1;
    } else if (ratingLevel === 3) {
      newStatus = 'learning';
      intervalDays = 4;
    } else if (ratingLevel === 4) {
      newStatus = 'mastered';
      intervalDays = 14;
    }

    if (onUpdateCardSRS) {
      onUpdateCardSRS(currentCard.id, {
        status: newStatus,
        intervalDays,
        due: ratingLevel === 1,
        lastReviewed: new Date().toISOString().slice(0, 10),
        reviewCount: (currentCard.reviewCount || 0) + 1
      });
    }

    setReviewedCount((c) => c + 1);

    if (currentIndex + 1 < reviewQueue.length) {
      setCurrentIndex((i) => i + 1);
      setIsFlipped(false);
    } else {
      setIsFinished(true);
      const xp = (reviewedCount + 1) * 10;
      if (onAwardXP && xp > 0) {
        onAwardXP(xp, `Đã hoàn thành phiên ôn tập SRS ${reviewedCount + 1} từ vựng!`);
      }
    }
  };

  if (!isOpen) return null;

  const currentCard = reviewQueue[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg rounded-3xl bg-[#131B2E] border border-indigo-500/30 p-6 shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
              <Brain className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Ôn Tập Thông Minh SRS</h3>
              <p className="text-[11px] text-slate-400">Đánh giá 4 mức độ • Tính lịch nhắc ôn vĩnh viễn</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isFinished && currentCard ? (
          <div className="py-5 space-y-5">
            {/* Progress Bar */}
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>
                Thẻ {currentIndex + 1} / {reviewQueue.length}
              </span>
              <span className="text-purple-300">Đã đánh giá: {reviewedCount} thẻ</span>
            </div>

            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-purple-500 h-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / reviewQueue.length) * 100}%` }}
              />
            </div>

            {/* Flashcard Area */}
            <div className="p-6 rounded-2xl bg-[#0B0F17] border border-slate-800 space-y-4">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <h2 className="text-2xl font-black text-white">{currentCard.word}</h2>
                  {onSpeak && (
                    <button
                      onClick={() => onSpeak(currentCard.word)}
                      className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-indigo-400 transition"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <p className="text-xs text-indigo-400 font-mono">
                  {currentCard.syllables} • {currentCard.ipa}
                </p>
              </div>

              {!isFlipped ? (
                <div className="pt-4 text-center">
                  <button
                    onClick={() => {
                      setIsFlipped(true);
                      if (onSpeak) onSpeak(currentCard.word);
                    }}
                    className="w-full py-3.5 rounded-2xl bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-indigo-200 font-bold text-xs flex items-center justify-center gap-2 transition"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Lật thẻ xem nghĩa & mẹo nhớ</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3 pt-2 border-t border-slate-800/80 animate-fade-in text-xs">
                  <div>
                    <span className="text-slate-400">Nghĩa tiếng Việt:</span>
                    <p className="text-sm font-bold text-emerald-300 mt-0.5">
                      {currentCard.meaning}
                    </p>
                  </div>

                  {currentCard.mnemonic && (
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 leading-relaxed">
                      {currentCard.mnemonic}
                    </div>
                  )}

                  {currentCard.chunk && (
                    <div>
                      <span className="text-slate-400">Cụm từ ghép sẵn (Chunk):</span>
                      <p className="text-slate-200 font-semibold">{currentCard.chunk}</p>
                    </div>
                  )}

                  {currentCard.example && (
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                      <p className="text-slate-200 italic">"{currentCard.example}"</p>
                      {currentCard.exampleVi && (
                        <p className="text-slate-400 mt-1">{currentCard.exampleVi}</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 4 SRS Evaluation Buttons */}
            {isFlipped && (
              <div className="space-y-2 animate-fade-in">
                <p className="text-[11px] text-center text-slate-400 font-medium">
                  Bạn nhớ từ này ở mức độ nào?
                </p>
                <div className="grid grid-cols-4 gap-2">
                  <button
                    onClick={() => handleRate(1)}
                    className="p-2.5 rounded-2xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 flex flex-col items-center transition"
                  >
                    <span className="text-xs font-bold">Quên rồi</span>
                    <span className="text-[10px] text-rose-400/80 mt-0.5">+10 phút</span>
                  </button>

                  <button
                    onClick={() => handleRate(2)}
                    className="p-2.5 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 flex flex-col items-center transition"
                  >
                    <span className="text-xs font-bold">Khó nhớ</span>
                    <span className="text-[10px] text-amber-400/80 mt-0.5">+1 ngày</span>
                  </button>

                  <button
                    onClick={() => handleRate(3)}
                    className="p-2.5 rounded-2xl bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/30 text-blue-300 flex flex-col items-center transition"
                  >
                    <span className="text-xs font-bold">Nhớ được</span>
                    <span className="text-[10px] text-blue-400/80 mt-0.5">+4 ngày</span>
                  </button>

                  <button
                    onClick={() => handleRate(4)}
                    className="p-2.5 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 flex flex-col items-center transition"
                  >
                    <span className="text-xs font-bold">Rất rõ</span>
                    <span className="text-[10px] text-emerald-400/80 mt-0.5">+14 ngày</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Finished Screen */
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
              <Award className="w-8 h-8 text-purple-400" />
            </div>

            <div>
              <h3 className="text-xl font-black text-white">Hoàn Thành Đợt Ôn SRS!</h3>
              <p className="text-xs text-slate-400 mt-1">
                Đã cập nhật lịch ôn tập tự động cho {reviewedCount} từ vựng.
              </p>
            </div>

            <div className="flex items-center gap-3 justify-center pt-2">
              <button
                onClick={initQueue}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center gap-1.5 transition"
              >
                <RotateCcw className="w-4 h-4" /> Ôn thêm đợt nữa
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white transition"
              >
                Đóng
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
