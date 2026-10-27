import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  X,
  Volume2,
  Mic,
  MicOff,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Award
} from 'lucide-react';

export default function TopicSpeakingModal({
  isOpen,
  onClose,
  subdeck,
  onSpeak,
  onAwardXP
}) {
  if (!isOpen || !subdeck) return null;

  const cards = useMemo(() => subdeck.cards || [], [subdeck]);
  const [cardIndex, setCardIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [userTranscript, setUserTranscript] = useState('');
  const [score, setScore] = useState(null); // null | number 0..100
  const [feedback, setFeedback] = useState(null);

  const recognitionRef = useRef(null);
  const currentCard = cards[cardIndex] || cards[0];

  // Reset states on card switch
  useEffect(() => {
    setUserTranscript('');
    setScore(null);
    setFeedback(null);
    setIsRecording(false);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
    }
  }, [cardIndex]);

  // Syllables breakdown
  const syllables = useMemo(() => {
    if (!currentCard) return [];
    if (currentCard.syllables) {
      return currentCard.syllables.split('•').map((s) => s.trim());
    }
    return [currentCard.word];
  }, [currentCard]);

  // Start Mic Recording via SpeechRecognition
  const startRecording = () => {
    setUserTranscript('');
    setScore(null);
    setFeedback(null);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Trình duyệt của bạn chưa hỗ trợ nhận diện giọng nói Web Speech API.');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = false;
      recognition.interimResults = true;
      recognitionRef.current = recognition;

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (e) => {
        const text = Array.from(e.results)
          .map((res) => res[0].transcript)
          .join('');
        setUserTranscript(text);
      };

      recognition.onerror = () => {
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
    } catch {
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
    }
    setIsRecording(false);

    // Evaluate accuracy
    setTimeout(() => {
      evaluateSpeaking(userTranscript);
    }, 200);
  };

  const evaluateSpeaking = (transcript) => {
    if (!currentCard) return;
    const cleanExpected = currentCard.word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanSpoken = (transcript || userTranscript).toLowerCase().replace(/[^a-z0-9]/g, '');

    if (!cleanSpoken) {
      setScore(0);
      setFeedback('Chưa nghe rõ âm thanh, hãy bấm Mic và nói lại nhé!');
      return;
    }

    if (cleanSpoken.includes(cleanExpected) || cleanExpected.includes(cleanSpoken)) {
      setScore(95);
      setFeedback('Phát âm chuẩn xác xuất sắc! Ngữ điệu rất tự nhiên!');
      if (onAwardXP) onAwardXP(15, `Luyện phát âm chuẩn từ "${currentCard.word}"!`);
    } else {
      // Partial match
      setScore(60);
      setFeedback('Âm tiết gần đúng. Hãy nghe lại phát âm mẫu và nhấn trọng âm rõ hơn nhé!');
      if (onAwardXP) onAwardXP(5, `Nỗ lực luyện phát âm từ "${currentCard.word}"`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#0F172A] border border-rose-500/40 rounded-3xl shadow-2xl p-6 sm:p-7 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 text-xl shadow">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white">
                Luyện Phát Âm Trực Tiếp (Speaking Trainer)
              </h2>
              <p className="text-[11px] text-slate-400">
                Từ #{cardIndex + 1}/{cards.length} • Chấm điểm âm tiết theo thời gian thực
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Word Challenge Display */}
        <div className="text-center space-y-3 p-5 rounded-2xl bg-[#0B0F17] border border-slate-800">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-3xl font-black text-white tracking-tight uppercase">
              {currentCard.word}
            </h3>
            <button
              onClick={() => onSpeak && onSpeak(currentCard.word, 1.0)}
              className="p-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white shadow"
              title="Nghe mẫu 1.0x"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs font-mono text-rose-300 font-bold">
            {currentCard.ipa}
          </p>

          {/* Syllable Breakdown Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {syllables.map((syl, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-200 text-xs font-mono font-bold"
              >
                {syl}
              </span>
            ))}
          </div>

          <p className="text-xs text-amber-300 font-medium">
            Nghĩa: {currentCard.meaning}
          </p>

          {currentCard.example && (
            <div className="p-3 rounded-xl bg-[#131B2E] text-left text-xs text-slate-300 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500">
                Câu mẫu thực hành:
              </span>
              <p className="italic text-slate-200">"{currentCard.example}"</p>
            </div>
          )}
        </div>

        {/* Recording Controls & Visual Feedback */}
        <div className="space-y-3 text-center">
          <div className="flex justify-center">
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all transform active:scale-90 ${
                isRecording
                  ? 'bg-rose-600 ring-8 ring-rose-500/30 animate-pulse'
                  : 'bg-gradient-to-tr from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 shadow-rose-600/40'
              }`}
            >
              {isRecording ? <MicOff className="w-7 h-7" /> : <Mic className="w-7 h-7" />}
            </button>
          </div>

          <p className="text-xs text-slate-400 font-medium">
            {isRecording
              ? '🔴 Đang nghe bạn phát âm... Bấm lại để chấm điểm'
              : 'Bấm biểu tượng Mic và đọc to từ hoặc câu trên'}
          </p>

          {userTranscript && (
            <p className="text-xs font-mono text-indigo-300 italic">
              Đã thu: "{userTranscript}"
            </p>
          )}

          {/* Evaluation Score Card */}
          {score !== null && (
            <div
              className={`p-4 rounded-2xl border text-center space-y-1 animate-fade-in ${
                score >= 80
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                  : 'bg-amber-950/40 border-amber-500/50 text-amber-300'
              }`}
            >
              <div className="flex items-center justify-center gap-1.5 font-bold text-sm">
                {score >= 80 ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                )}
                <span>Điểm phát âm: {score}/100</span>
              </div>
              <p className="text-xs text-slate-200">{feedback}</p>
            </div>
          )}
        </div>

        {/* Card Navigation Footer */}
        <div className="flex items-center justify-between border-t border-slate-800 pt-3">
          <button
            disabled={cardIndex === 0}
            onClick={() => setCardIndex((prev) => Math.max(0, prev - 1))}
            className="px-3.5 py-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white disabled:opacity-30 text-xs font-bold flex items-center gap-1 transition"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Từ trước</span>
          </button>

          <span className="text-xs font-mono text-slate-400">
            {cardIndex + 1} / {cards.length}
          </span>

          <button
            disabled={cardIndex >= cards.length - 1}
            onClick={() => setCardIndex((prev) => Math.min(cards.length - 1, prev + 1))}
            className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white disabled:opacity-30 text-xs font-bold flex items-center gap-1 transition"
          >
            <span>Từ tiếp theo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
