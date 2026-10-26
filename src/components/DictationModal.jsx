import React, { useState, useEffect, useRef } from 'react';
import { Headphones, X, Volume2, RotateCcw, Check, ArrowRight, Award, Sparkles } from 'lucide-react';

export default function DictationModal({
  isOpen,
  onClose,
  cards = [],
  onSpeak,
  onAwardXP,
  onUpdateCardSRS
}) {
  const [sessionCards, setSessionCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedInput, setTypedInput] = useState('');
  const [checkedState, setCheckedState] = useState(null); // null | 'correct' | 'wrong'
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const inputRef = useRef(null);

  const initSession = () => {
    if (!cards || cards.length === 0) return;
    const shuffled = [...cards].sort(() => 0.5 - Math.random()).slice(0, 10);
    setSessionCards(shuffled);
    setCurrentIndex(0);
    setTypedInput('');
    setCheckedState(null);
    setScore(0);
    setIsFinished(false);
  };

  useEffect(() => {
    if (isOpen) {
      initSession();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && sessionCards.length > 0 && !isFinished) {
      const currentWord = sessionCards[currentIndex]?.word;
      if (currentWord && onSpeak) {
        setTimeout(() => onSpeak(currentWord), 300);
      }
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [currentIndex, isOpen, sessionCards, isFinished]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkedState !== null) {
      // Proceed to next
      handleNext();
      return;
    }

    const currentCard = sessionCards[currentIndex];
    if (!currentCard || !typedInput.trim()) return;

    const isCorrect =
      typedInput.trim().toLowerCase() === currentCard.word.trim().toLowerCase();

    if (isCorrect) {
      setCheckedState('correct');
      setScore((s) => s + 1);
      if (onSpeak) onSpeak(currentCard.word);
      if (onUpdateCardSRS && currentCard?.id) {
        onUpdateCardSRS(currentCard.id, { status: 'learning', intervalDays: 4, due: false });
      }
    } else {
      setCheckedState('wrong');
      if (onUpdateCardSRS && currentCard?.id) {
        onUpdateCardSRS(currentCard.id, { status: 'weak', due: true });
      }
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < sessionCards.length) {
      setCurrentIndex((i) => i + 1);
      setTypedInput('');
      setCheckedState(null);
    } else {
      setIsFinished(true);
      const xp = score * 15;
      if (onAwardXP && xp > 0) {
        onAwardXP(xp, `Đạt ${score}/${sessionCards.length} từ trong Luyện gõ & Chính tả!`);
      }
    }
  };

  if (!isOpen) return null;

  const currentCard = sessionCards[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg rounded-3xl bg-[#131B2E] border border-indigo-500/30 p-6 shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
              <Headphones className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Nghe & Gõ Lại Từ (Dictation)</h3>
              <p className="text-[11px] text-slate-400">Chống nhớ mang máng • Luyện phản xạ tai - tay</p>
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
          <form onSubmit={handleSubmit} className="py-5 space-y-5">
            {/* Progress */}
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>
                Từ {currentIndex + 1} / {sessionCards.length}
              </span>
              <span className="text-emerald-400">Đúng: {score} từ</span>
            </div>

            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-blue-500 h-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / sessionCards.length) * 100}%` }}
              />
            </div>

            {/* Audio Prompt & Meaning Clue */}
            <div className="p-6 rounded-2xl bg-[#0B0F17] border border-slate-800 text-center space-y-3">
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => onSpeak && onSpeak(currentCard.word)}
                  className="px-4 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition transform hover:scale-105"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Nghe lại (Chuẩn)</span>
                </button>
              </div>

              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-200">
                  Nghĩa: <span className="text-amber-300">{currentCard.meaning}</span>
                </p>
                <p className="text-xs text-slate-500 font-mono">Gợi ý âm: {currentCard.ipa}</p>
              </div>
            </div>

            {/* Input Form */}
            <div className="space-y-2">
              <label className="text-xs text-slate-400 font-medium">
                Gõ chính xác từ tiếng Anh vừa nghe:
              </label>
              <input
                ref={inputRef}
                type="text"
                autoComplete="off"
                spellCheck="false"
                value={typedInput}
                onChange={(e) => setTypedInput(e.target.value)}
                disabled={checkedState !== null}
                placeholder="Nhập từ tiếng Anh tại đây..."
                className={`w-full px-4 py-3 rounded-2xl bg-[#0B0F17] border text-sm text-white placeholder-slate-600 focus:outline-none transition ${
                  checkedState === 'correct'
                    ? 'border-emerald-500 bg-emerald-950/20 text-emerald-200 font-bold'
                    : checkedState === 'wrong'
                    ? 'border-rose-500 bg-rose-950/20 text-rose-200'
                    : 'border-slate-700 focus:border-indigo-500'
                }`}
              />
            </div>

            {/* Feedback & Word Details on Answer */}
            {checkedState !== null && (
              <div
                className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-1.5 animate-fade-in ${
                  checkedState === 'correct'
                    ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                    : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
                }`}
              >
                <div className="flex items-center justify-between font-bold">
                  <span>{checkedState === 'correct' ? '🎉 Chính xác!' : '❌ Chưa đúng!'}</span>
                  <span className="text-white text-sm tracking-wide font-black">
                    {currentCard.word}
                  </span>
                </div>
                <p className="text-slate-300">
                  Âm tiết: <span className="font-mono text-indigo-300">{currentCard.syllables}</span> • {currentCard.ipa}
                </p>
                {currentCard.mnemonic && (
                  <p className="text-amber-300/90 italic">{currentCard.mnemonic}</p>
                )}
              </div>
            )}

            {/* Submit / Next Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition"
            >
              {checkedState === null ? (
                <span>Kiểm tra chính tả (Enter)</span>
              ) : (
                <>
                  <span>Từ tiếp theo</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        ) : (
          /* Finished Screen */
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
              <Award className="w-8 h-8 text-blue-400" />
            </div>

            <div>
              <h3 className="text-xl font-black text-white">Hoàn Thành Bài Gõ Từ!</h3>
              <p className="text-xs text-slate-400 mt-1">
                Bạn đã gõ chính xác <strong className="text-emerald-400">{score}</strong> / {sessionCards.length} từ.
              </p>
            </div>

            <div className="flex items-center gap-3 justify-center pt-2">
              <button
                onClick={initSession}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center gap-1.5 transition"
              >
                <RotateCcw className="w-4 h-4" /> Làm lại vòng khác
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
