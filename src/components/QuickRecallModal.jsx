import React, { useState, useEffect, useRef } from 'react';
import { Zap, X, Timer, CheckCircle, XCircle, RotateCcw, Volume2, Award } from 'lucide-react';

export default function QuickRecallModal({
  isOpen,
  onClose,
  cards = [],
  onSpeak,
  onAwardXP,
  onUpdateCardSRS
}) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const timerRef = useRef(null);

  // Initialize 10 random questions
  const initGame = () => {
    if (!cards || cards.length === 0) return;
    const shuffled = [...cards].sort(() => 0.5 - Math.random()).slice(0, 10);
    const prepared = shuffled.map((card) => {
      // Pick 3 distractors
      const distractors = cards
        .filter((c) => c.word !== card.word)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((c) => c.meaning);

      const options = [...distractors, card.meaning].sort(() => 0.5 - Math.random());
      return {
        id: card.id,
        word: card.word,
        ipa: card.ipa,
        syllables: card.syllables,
        meaning: card.meaning,
        options,
        correctIndex: options.indexOf(card.meaning)
      };
    });

    setQuestions(prepared);
    setCurrentIndex(0);
    setTimeLeft(5);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };

  useEffect(() => {
    if (isOpen) {
      initGame();
    } else {
      clearInterval(timerRef.current);
    }
  }, [isOpen]);

  // Countdown timer per question
  useEffect(() => {
    if (!isOpen || isFinished || questions.length === 0) return;

    setTimeLeft(5);
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentIndex, isFinished, isOpen, questions]);

  const handleTimeOut = () => {
    clearInterval(timerRef.current);
    handleAnswer(-1); // Timed out
  };

  const handleAnswer = (optionIdx) => {
    if (selectedOption !== null) return;
    clearInterval(timerRef.current);
    setSelectedOption(optionIdx);

    const currentQ = questions[currentIndex];
    const isCorrect = optionIdx === currentQ?.correctIndex;

    if (isCorrect) {
      setScore((s) => s + 1);
      if (onSpeak) onSpeak(currentQ.word);
      if (onUpdateCardSRS && currentQ?.id) {
        onUpdateCardSRS(currentQ.id, { status: 'learning', intervalDays: 3, due: false });
      }
    } else {
      if (onUpdateCardSRS && currentQ?.id) {
        onUpdateCardSRS(currentQ.id, { status: 'weak', due: true });
      }
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((i) => i + 1);
        setSelectedOption(null);
      } else {
        setIsFinished(true);
        const finalScore = isCorrect ? score + 1 : score;
        const xp = finalScore * 10;
        if (onAwardXP && xp > 0) {
          onAwardXP(xp, `Hoàn thành Phản xạ 60 Giây (${finalScore}/${questions.length} từ đúng)!`);
        }
      }
    }, 900);
  };

  if (!isOpen) return null;

  const currentQ = questions[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg rounded-3xl bg-[#131B2E] border border-indigo-500/30 p-6 shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Phản Xạ 60 Giây</h3>
              <p className="text-[11px] text-slate-400">10 từ ngẫu nhiên • Ép não phản xạ 5s/từ</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isFinished && currentQ ? (
          <div className="py-5 space-y-5">
            {/* Progress & Timer Bar */}
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-indigo-300">
                Câu {currentIndex + 1} / {questions.length}
              </span>
              <div className="flex items-center gap-1.5 text-amber-400 font-mono font-bold">
                <Timer className="w-4 h-4 animate-pulse" />
                <span>{timeLeft}s</span>
              </div>
            </div>

            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-amber-400 h-full transition-all duration-1000 ease-linear"
                style={{ width: `${(timeLeft / 5) * 100}%` }}
              />
            </div>

            {/* Word Card */}
            <div className="p-6 rounded-2xl bg-[#0B0F17] border border-slate-800 text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <h2 className="text-2xl font-black text-white tracking-tight">{currentQ.word}</h2>
                {onSpeak && (
                  <button
                    onClick={() => onSpeak(currentQ.word)}
                    className="p-1 rounded-lg text-slate-400 hover:text-indigo-300"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              <p className="text-xs text-indigo-400 font-mono">
                {currentQ.syllables} • {currentQ.ipa}
              </p>
            </div>

            {/* 4 Multiple Choice Options */}
            <div className="grid grid-cols-1 gap-2.5">
              {currentQ.options.map((opt, idx) => {
                const isChosen = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;
                let btnStyle = 'bg-slate-900/90 border-slate-800 hover:border-indigo-500/50 text-slate-200';

                if (selectedOption !== null) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-600/30 border-emerald-500 text-emerald-200 font-bold';
                  } else if (isChosen) {
                    btnStyle = 'bg-rose-600/30 border-rose-500 text-rose-200';
                  } else {
                    btnStyle = 'bg-slate-900/40 border-slate-800/40 text-slate-500';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={selectedOption !== null}
                    className={`p-3.5 rounded-xl border text-left text-xs font-medium transition flex items-center justify-between ${btnStyle}`}
                  >
                    <span className="line-clamp-2">{opt}</span>
                    {selectedOption !== null && isCorrect && (
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                    )}
                    {selectedOption !== null && isChosen && !isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* Result Screen */
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
              <Award className="w-8 h-8 text-amber-400" />
            </div>

            <div>
              <h3 className="text-xl font-black text-white">Hoàn Thành Phản Xạ!</h3>
              <p className="text-xs text-slate-400 mt-1">
                Bạn đã trả lời đúng <strong className="text-emerald-400">{score}</strong> / {questions.length} từ trong vòng 60 giây.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0B0F17] border border-slate-800 flex justify-around">
              <div>
                <p className="text-[11px] text-slate-400">Độ chính xác</p>
                <p className="text-lg font-bold text-white mt-0.5">
                  {Math.round((score / Math.max(1, questions.length)) * 100)}%
                </p>
              </div>
              <div className="w-px bg-slate-800" />
              <div>
                <p className="text-[11px] text-slate-400">XP thưởng</p>
                <p className="text-lg font-bold text-amber-400 mt-0.5">+{score * 10} XP</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center pt-2">
              <button
                onClick={initGame}
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
