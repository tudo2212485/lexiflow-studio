import React, { useState, useMemo } from 'react';
import {
  X,
  BookOpen,
  Volume2,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Trophy,
  ArrowRight,
  Eye
} from 'lucide-react';

export default function InteractiveStoryModal({
  isOpen,
  onClose,
  subdeck,
  onSpeak,
  onAwardXP
}) {
  const cards = useMemo(() => subdeck?.cards || [], [subdeck]);
  const [selectedWordObj, setSelectedWordObj] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Take first 10-15 target words
  const targetWords = useMemo(() => {
    return cards.slice(0, 12);
  }, [cards]);

  // Generate a rich contextual story embedding target words
  const storyData = useMemo(() => {
    const title = `A Journey of Discovery: ${subdeck?.title || 'Vocabulary'}`;
    const wordList = targetWords.map((c) => c.word);

    // Build paragraphs with target words tagged
    const w1 = targetWords[0]?.word || 'family';
    const w2 = targetWords[1]?.word || 'relationship';
    const w3 = targetWords[2]?.word || 'support';
    const w4 = targetWords[3]?.word || 'bond';
    const w5 = targetWords[4]?.word || 'communication';
    const w6 = targetWords[5]?.word || 'patience';
    const w7 = targetWords[6]?.word || 'empathy';
    const w8 = targetWords[7]?.word || 'trust';
    const w9 = targetWords[8]?.word || 'growth';
    const w10 = targetWords[9]?.word || 'harmony';

    const paragraphs = [
      `In our modern, fast-evolving society, understanding the essence of [[${w1}]] and fostering a strong [[${w2}]] have become more vital than ever before. Every individual relies on meaningful human connections to navigate life's unexpected challenges. When times get tough, mutual [[${w3}]] acts as a resilient anchor, keeping our spirits uplifted.`,
      `True connection is not merely about physical presence; it is an enduring [[${w4}]] built through transparent [[${w5}]] and unwavering [[${w6}]]. When we take the time to listen attentively without judgment, we cultivate genuine [[${w7}]] and reinforce long-lasting [[${w8}]].`,
      `Ultimately, personal and collective [[${w9}]] blossoms when people learn to collaborate and live in [[${w10}]]. By cherishing these timeless values, we create a thriving community where every voice is heard and valued.`
    ];

    const questions = [
      {
        id: 'q1',
        q: `What is highlighted as a resilient anchor during difficult times?`,
        options: [
          `Mutual ${w3} and human connection`,
          `Isolation and silence`,
          `Financial success alone`,
          `Strict compliance without empathy`
        ],
        correct: 0
      },
      {
        id: 'q2',
        q: `How is an enduring ${w4} built according to the narrative?`,
        options: [
          `Through transparent ${w5} and unwavering ${w6}`,
          `By avoiding difficult conversations`,
          `Through superficial interactions`,
          `By competing with peers`
        ],
        correct: 0
      },
      {
        id: 'q3',
        q: `What blossoms when people collaborate and live in ${w10}?`,
        options: [
          `Personal and collective ${w9}`,
          `Unnecessary conflict`,
          `Technological stagnation`,
          `Loss of individuality`
        ],
        correct: 0
      }
    ];

    return { title, paragraphs, questions };
  }, [subdeck, targetWords]);

  const handleSelectWord = (wordText) => {
    const clean = wordText.trim().toLowerCase();
    const found = cards.find((c) => c.word.toLowerCase() === clean);
    if (found) {
      setSelectedWordObj(found);
      if (onSpeak) onSpeak(found.word, 1.0);
    }
  };

  const handleSubmitQuiz = () => {
    setSubmitted(true);
    let correctCount = 0;
    storyData.questions.forEach((q) => {
      if (answers[q.id] === q.correct) correctCount++;
    });

    const xpEarned = correctCount * 10;
    if (onAwardXP && xpEarned > 0) {
      onAwardXP(xpEarned, `Đọc hiểu câu chuyện chủ đề: Đúng ${correctCount}/3 câu!`);
    }
  };

  const renderParagraph = (text) => {
    const parts = text.split(/(\[\[.*?\]\])/g);
    return parts.map((part, idx) => {
      if (part.startsWith('[[') && part.endsWith(']]')) {
        const wordText = part.slice(2, -2);
        return (
          <button
            key={idx}
            onClick={() => handleSelectWord(wordText)}
            className="inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded-lg bg-indigo-500/25 hover:bg-indigo-500/40 border border-indigo-400/50 text-indigo-200 hover:text-white font-mono font-bold transition cursor-pointer"
            title="Bấm để xem nghĩa từ vựng này"
          >
            {wordText}
          </button>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  if (!isOpen || !subdeck) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0F172A] border border-indigo-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xl shadow">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white">
                Đọc Hiểu Ngữ Cảnh (Interactive Story)
              </h2>
              <p className="text-[11px] text-slate-400">
                12 từ vựng được lồng ghép tự nhiên • Bấm vào từ được tô màu để xem nghĩa
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

        {/* Story Body */}
        <div className="p-4 sm:p-6 space-y-5 overflow-y-auto">
          {/* Selected Word Quick Popup Banner */}
          {selectedWordObj && (
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-950/80 to-slate-900 border border-indigo-500/40 flex items-center justify-between gap-3 animate-fade-in shadow-lg">
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-white font-mono">
                    {selectedWordObj.word}
                  </span>
                  <span className="text-xs text-indigo-300 font-mono">
                    {selectedWordObj.ipa}
                  </span>
                  <button
                    onClick={() => onSpeak && onSpeak(selectedWordObj.word, 1.0)}
                    className="p-1 rounded-lg text-slate-400 hover:text-white"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs font-semibold text-emerald-300 truncate">
                  {selectedWordObj.meaning}
                </p>
                {selectedWordObj.chunk && (
                  <p className="text-[11px] text-amber-300 font-medium truncate">
                    Cụm từ: "{selectedWordObj.chunk}"
                  </p>
                )}
              </div>

              <button
                onClick={() => setSelectedWordObj(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Story Text Box */}
          <div className="p-5 rounded-2xl bg-[#0B0F17] border border-slate-800 space-y-3.5 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
            <h3 className="text-sm sm:text-base font-extrabold text-white text-center pb-2 border-b border-slate-800/80">
              {storyData.title}
            </h3>
            {storyData.paragraphs.map((p, i) => (
              <p key={i}>{renderParagraph(p)}</p>
            ))}
          </div>

          {/* 3 Reading Comprehension Questions */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-400">
              <HelpCircle className="w-4 h-4" />
              <span>3 Câu Hỏi Đọc Hiểu Kiểm Tra Trí Nhớ:</span>
            </div>

            <div className="space-y-3">
              {storyData.questions.map((q, idx) => (
                <div
                  key={q.id}
                  className="p-4 rounded-2xl bg-[#131B2E] border border-slate-800 space-y-2.5 text-xs"
                >
                  <p className="font-bold text-white">
                    Câu {idx + 1}: {q.q}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = answers[q.id] === optIdx;
                      const isCorrect = q.correct === optIdx;

                      let style = 'bg-[#0B0F17] border-slate-800 text-slate-300 hover:border-slate-700';
                      if (submitted) {
                        if (isCorrect) {
                          style = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold';
                        } else if (isSelected && !isCorrect) {
                          style = 'bg-rose-950/60 border-rose-500 text-rose-200';
                        }
                      } else if (isSelected) {
                        style = 'bg-indigo-600/30 border-indigo-500 text-white font-bold';
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={submitted}
                          onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: optIdx }))}
                          className={`p-2.5 rounded-xl border text-left transition ${style}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {!submitted ? (
              <button
                onClick={handleSubmitQuiz}
                disabled={Object.keys(answers).length < 3}
                className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-black text-xs shadow-lg transition"
              >
                Nộp bài đọc hiểu & Nhận XP
              </button>
            ) : (
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 flex items-center justify-between gap-3 animate-fade-in">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-bold text-white">
                    Đã hoàn thành bài đọc hiểu!
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs"
                >
                  Xong
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
