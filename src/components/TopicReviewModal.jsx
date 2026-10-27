import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Trophy,
  X,
  Volume2,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Zap,
  Layers,
  Headphones,
  Award,
  BookOpen,
  Check,
  Eye,
  AlertCircle
} from 'lucide-react';

export default function TopicReviewModal({
  isOpen,
  onClose,
  subdeck,
  onAwardXP,
  onUpdateCardSRS,
  onSpeak,
  onStartPracticeWrongWords
}) {
  // Session Configuration & State
  const [phase, setPhase] = useState('select_mode'); // 'select_mode' | 'round1_match' | 'round2_cloze' | 'round3_audio' | 'summary'
  const [reviewScope, setReviewScope] = useState('all'); // 'quick' (20) | 'all' (50)
  const [reviewPool, setReviewPool] = useState([]);

  // Scores & Tracking
  const [scoreR1, setScoreR1] = useState(0);
  const [scoreR2, setScoreR2] = useState(0);
  const [scoreR3, setScoreR3] = useState(0);
  const [failedCardsMap, setFailedCardsMap] = useState(new Map());

  // Round 1 (Speed Matching Matrix) State
  const [r1BatchIndex, setR1BatchIndex] = useState(0);
  const [selectedEnCard, setSelectedEnCard] = useState(null);
  const [selectedViCard, setSelectedViCard] = useState(null);
  const [matchedIds, setMatchedIds] = useState(new Set());
  const [mismatchError, setMismatchError] = useState(null);

  // Round 2 (Contextual Cloze Test) State
  const [r2Index, setR2Index] = useState(0);
  const [r2SelectedOption, setR2SelectedOption] = useState(null);
  const [r2Checked, setR2Checked] = useState(false);

  // Round 3 (Audio Dictation Sprint) State
  const [r3Index, setR3Index] = useState(0);
  const [r3Input, setR3Input] = useState('');
  const [r3Checked, setR3Checked] = useState(false);
  const [r3Passed, setR3Passed] = useState(false);
  const [r3HintCount, setR3HintCount] = useState(0);
  const r3InputRef = useRef(null);

  // Initialize Review Pool on open
  useEffect(() => {
    if (isOpen && subdeck?.cards?.length) {
      setPhase('select_mode');
      setScoreR1(0);
      setScoreR2(0);
      setScoreR3(0);
      setFailedCardsMap(new Map());
    }
  }, [isOpen, subdeck]);

  const handleStartReview = (scope = 'all') => {
    setReviewScope(scope);
    const allCards = subdeck?.cards || [];
    let pool = [];

    if (scope === 'quick') {
      // Prioritize weak/learning, then shuffle
      const weak = allCards.filter((c) => c.status === 'weak' || c.status === 'learning');
      const rest = allCards.filter((c) => c.status !== 'weak' && c.status !== 'learning');
      pool = [...weak, ...rest].slice(0, 20);
    } else {
      pool = [...allCards];
    }

    // Shuffle pool
    const shuffled = pool.sort(() => 0.5 - Math.random());
    setReviewPool(shuffled);

    // Setup Round 1
    setScoreR1(0);
    setScoreR2(0);
    setScoreR3(0);
    setFailedCardsMap(new Map());
    setR1BatchIndex(0);
    setMatchedIds(new Set());
    setSelectedEnCard(null);
    setSelectedViCard(null);
    setPhase('round1_match');
  };

  const markCardFailed = (card) => {
    if (!card?.id) return;
    setFailedCardsMap((prev) => {
      const next = new Map(prev);
      next.set(card.id, card);
      return next;
    });
  };

  // ========================================================
  // ROUND 1: SPEED MATCHING MATRIX (5-6 Pairs per batch)
  // ========================================================
  const BATCH_SIZE = 5;
  const totalR1Batches = Math.ceil(reviewPool.length / BATCH_SIZE);
  const currentBatchCards = useMemo(() => {
    const start = r1BatchIndex * BATCH_SIZE;
    return reviewPool.slice(start, start + BATCH_SIZE);
  }, [reviewPool, r1BatchIndex]);

  // Shuffled English list and Vietnamese list for current batch
  const [shuffledEn, setShuffledEn] = useState([]);
  const [shuffledVi, setShuffledVi] = useState([]);

  useEffect(() => {
    if (phase === 'round1_match' && currentBatchCards.length > 0) {
      setShuffledEn([...currentBatchCards].sort(() => 0.5 - Math.random()));
      setShuffledVi([...currentBatchCards].sort(() => 0.5 - Math.random()));
      setSelectedEnCard(null);
      setSelectedViCard(null);
    }
  }, [phase, r1BatchIndex, currentBatchCards]);

  const handleSelectEn = (card) => {
    if (matchedIds.has(card.id)) return;
    setSelectedEnCard(card);
    if (onSpeak) onSpeak(card.word, 1.0);

    if (selectedViCard) {
      evaluateMatch(card, selectedViCard);
    }
  };

  const handleSelectVi = (card) => {
    if (matchedIds.has(card.id)) return;
    setSelectedViCard(card);

    if (selectedEnCard) {
      evaluateMatch(selectedEnCard, card);
    }
  };

  const evaluateMatch = (enCard, viCard) => {
    if (enCard.id === viCard.id) {
      // Correct Match
      setMatchedIds((prev) => {
        const next = new Set(prev);
        next.add(enCard.id);
        return next;
      });
      setScoreR1((s) => s + 1);
      setSelectedEnCard(null);
      setSelectedViCard(null);

      // Check if current batch finished
      const batchIds = new Set(currentBatchCards.map((c) => c.id));
      const newlyMatchedCount = [...matchedIds].filter((id) => batchIds.has(id)).length + 1;

      if (newlyMatchedCount >= currentBatchCards.length) {
        // Next Batch or Proceed to Round 2
        setTimeout(() => {
          if (r1BatchIndex + 1 < totalR1Batches) {
            setR1BatchIndex((b) => b + 1);
          } else {
            // Round 1 Complete -> Transition to Round 2
            setR2Index(0);
            setR2SelectedOption(null);
            setR2Checked(false);
            setPhase('round2_cloze');
          }
        }, 600);
      }
    } else {
      // Mismatch
      setMismatchError({ enId: enCard.id, viId: viCard.id });
      markCardFailed(enCard);
      markCardFailed(viCard);
      setTimeout(() => {
        setMismatchError(null);
        setSelectedEnCard(null);
        setSelectedViCard(null);
      }, 700);
    }
  };

  // ========================================================
  // ROUND 2: CONTEXTUAL CLOZE TEST (Điền từ vào câu ngữ cảnh)
  // ========================================================
  const r2Card = reviewPool[r2Index] || null;

  // Generate 4 multiple-choice options for Round 2
  const r2Options = useMemo(() => {
    if (!r2Card) return [];
    const correct = r2Card.word;
    const others = reviewPool
      .filter((c) => c.id !== r2Card.id)
      .map((c) => c.word)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    return [correct, ...others].sort(() => 0.5 - Math.random());
  }, [r2Card, reviewPool]);

  const handleSelectR2Option = (opt) => {
    if (r2Checked) return;
    setR2SelectedOption(opt);
    setR2Checked(true);

    const isCorrect = opt.toLowerCase() === r2Card.word.toLowerCase();
    if (isCorrect) {
      setScoreR2((s) => s + 1);
      if (onSpeak) onSpeak(r2Card.word, 1.0);
    } else {
      markCardFailed(r2Card);
    }
  };

  const handleNextR2 = () => {
    if (r2Index + 1 < reviewPool.length) {
      setR2Index((i) => i + 1);
      setR2SelectedOption(null);
      setR2Checked(false);
    } else {
      // Proceed to Round 3
      setR3Index(0);
      setR3Input('');
      setR3Checked(false);
      setR3Passed(false);
      setR3HintCount(0);
      setPhase('round3_audio');
    }
  };

  // ========================================================
  // ROUND 3: AUDIO DICTATION SPRINT (Nghe gõ chính tả)
  // ========================================================
  const r3Card = reviewPool[r3Index] || null;

  useEffect(() => {
    if (phase === 'round3_audio' && r3Card && onSpeak) {
      const timer = setTimeout(() => onSpeak(r3Card.word, 1.0), 300);
      return () => clearTimeout(timer);
    }
  }, [phase, r3Index, r3Card]);

  const handleR3Submit = (e) => {
    e?.preventDefault();
    if (r3Checked) {
      handleNextR3();
      return;
    }

    if (!r3Input.trim() || !r3Card) return;

    const isMatch = r3Input.trim().toLowerCase() === r3Card.word.trim().toLowerCase();
    setR3Checked(true);
    setR3Passed(isMatch);

    if (isMatch) {
      setScoreR3((s) => s + 1);
      if (onSpeak) onSpeak(r3Card.word, 1.0);
    } else {
      markCardFailed(r3Card);
    }
  };

  const handleNextR3 = () => {
    if (r3Index + 1 < reviewPool.length) {
      setR3Index((i) => i + 1);
      setR3Input('');
      setR3Checked(false);
      setR3Passed(false);
      setR3HintCount(0);
      setTimeout(() => r3InputRef.current?.focus(), 150);
    } else {
      // All 3 Rounds Complete -> Summary Screen!
      finishReview();
    }
  };

  const finishReview = () => {
    setPhase('summary');
    const totalPossible = reviewPool.length * 3;
    const totalEarned = scoreR1 + scoreR2 + scoreR3;
    const finalAccuracy = Math.round((totalEarned / Math.max(1, totalPossible)) * 100);

    const xpEarned = Math.round(150 * (finalAccuracy / 100)) + 50;
    if (onAwardXP) {
      onAwardXP(
        xpEarned,
        `🏆 Hoàn thành bài Tổng Ôn Tập Chủ Đề "${subdeck?.title}" đạt ${finalAccuracy}%!`
      );
    }
  };

  if (!isOpen) return null;

  const failedCardsList = Array.from(failedCardsMap.values());
  const totalRoundsPossible = reviewPool.length * 3;
  const currentTotalScore = scoreR1 + scoreR2 + scoreR3;
  const overallPercentage = Math.round(
    (currentTotalScore / Math.max(1, totalRoundsPossible)) * 100
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="w-full max-w-3xl rounded-3xl bg-[#131B2E] border border-indigo-500/40 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* TOP BAR */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-[#0B0F17]/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  Tổng Ôn Tập Chủ Đề
                </span>
                <span className="text-xs text-slate-400">• {subdeck?.title}</span>
              </div>
              <h2 className="text-base font-extrabold text-white mt-0.5">
                {phase === 'select_mode' && 'Chọn chế độ ôn tập chủ đề'}
                {phase === 'round1_match' && 'Vòng 1: Ghép Cặp Siêu Tốc (Speed Match)'}
                {phase === 'round2_cloze' && 'Vòng 2: Điền Từ Ngữ Cảnh (Contextual Cloze)'}
                {phase === 'round3_audio' && 'Vòng 3: Nghe & Phản Xạ Chính Tả (Dictation)'}
                {phase === 'summary' && 'Bảng Tổng Kết & Phân Tích Lỗ Hổng'}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 transition"
            title="Đóng bài ôn tập"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3-ROUND STEPPER (Visible during active rounds) */}
        {phase !== 'select_mode' && phase !== 'summary' && (
          <div className="px-5 py-2.5 bg-[#0B0F17] border-b border-slate-800 flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 transition ${
                  phase === 'round1_match'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-emerald-500/15 text-emerald-400'
                }`}
              >
                {phase !== 'round1_match' ? <Check className="w-3.5 h-3.5" /> : '1.'}
                <span>Ghép cặp ({scoreR1})</span>
              </span>

              <span
                className={`px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 transition ${
                  phase === 'round2_cloze'
                    ? 'bg-indigo-600 text-white'
                    : phase === 'round3_audio'
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : 'text-slate-500'
                }`}
              >
                {phase === 'round3_audio' ? <Check className="w-3.5 h-3.5" /> : '2.'}
                <span>Điền câu ({scoreR2})</span>
              </span>

              <span
                className={`px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 transition ${
                  phase === 'round3_audio' ? 'bg-indigo-600 text-white' : 'text-slate-500'
                }`}
              >
                <span>3. Nghe gõ ({scoreR3})</span>
              </span>
            </div>

            <span className="text-[11px] font-mono text-slate-400">
              Tổng điểm: <strong className="text-amber-400">{currentTotalScore}</strong> /{' '}
              {reviewPool.length * 3}
            </span>
          </div>
        )}

        {/* MAIN BODY */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {/* ==================================================== */}
          {/* SCREEN 1: CHỌN QUY MÔ ÔN TẬP                         */}
          {/* ==================================================== */}
          {phase === 'select_mode' && (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-3xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400 shadow-xl shadow-amber-500/10">
                <Trophy className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <h3 className="text-2xl font-black text-white tracking-tight">
                  Sẵn Sàng Thử Thách Cả Chủ Đề?
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Bài Tổng Ôn Tập gồm <strong>3 Vòng Liên Hoàn</strong> giúp kiểm tra toàn diện:
                  Ghép cặp phản xạ nghĩa ➔ Điền từ vào ngữ cảnh thực chiến ➔ Nghe gõ chính tả.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-2">
                {/* Mode A: Fast (20 Words) */}
                <button
                  onClick={() => handleStartReview('quick')}
                  className="p-5 rounded-3xl bg-[#0B0F17] hover:bg-slate-800 border-2 border-slate-800 hover:border-amber-500/50 text-left transition space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">⚡</span>
                    <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      Nhanh gọn
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition">
                      Ôn nhanh (20 câu trọng tâm)
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Ưu tiên những từ bạn chưa vững hoặc cần củng cố phản xạ gấp.
                    </p>
                  </div>
                </button>

                {/* Mode B: Full 50 Words */}
                <button
                  onClick={() => handleStartReview('all')}
                  className="p-5 rounded-3xl bg-[#0B0F17] hover:bg-slate-800 border-2 border-slate-800 hover:border-indigo-500/50 text-left transition space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">🏆</span>
                    <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                      Toàn diện
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition">
                      Tổng ôn toàn bộ (Đủ 50 từ)
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Quét sạch toàn bộ 50 từ của chủ đề để nhận Huy Hiệu Chinh Phục & thưởng XP lớn.
                    </p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* ROUND 1: GHÉP CẶP SIÊU TỐC                          */}
          {/* ==================================================== */}
          {phase === 'round1_match' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-3">
                <span>
                  Bấm 1 thẻ tiếng Anh bên trái và 1 nghĩa tiếng Việt bên phải để ghép đôi:
                </span>
                <span className="font-mono text-indigo-300 font-bold">
                  Đợt {r1BatchIndex + 1} / {totalR1Batches}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 min-h-[300px]">
                {/* Cột Từ tiếng Anh (Trái) */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    🇺🇸 Từ tiếng Anh:
                  </span>
                  {shuffledEn.map((c) => {
                    const isMatched = matchedIds.has(c.id);
                    const isSelected = selectedEnCard?.id === c.id;
                    const isError = mismatchError?.enId === c.id;

                    return (
                      <button
                        key={c.id}
                        disabled={isMatched}
                        onClick={() => handleSelectEn(c)}
                        className={`w-full p-3.5 rounded-2xl border text-left transition-all font-bold text-xs sm:text-sm flex items-center justify-between shadow ${
                          isMatched
                            ? 'opacity-30 bg-slate-900 border-slate-800 text-slate-500 scale-95 pointer-events-none'
                            : isError
                            ? 'bg-rose-500/20 border-rose-500 text-rose-300 animate-shake'
                            : isSelected
                            ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30 scale-[1.02]'
                            : 'bg-[#0B0F17] hover:bg-slate-800 border-slate-800 text-slate-200 hover:border-indigo-500/50'
                        }`}
                      >
                        <span>{c.word}</span>
                        {isMatched && <Check className="w-4 h-4 text-emerald-400" />}
                      </button>
                    );
                  })}
                </div>

                {/* Cột Nghĩa tiếng Việt (Phải) */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    🇻🇳 Nghĩa tiếng Việt:
                  </span>
                  {shuffledVi.map((c) => {
                    const isMatched = matchedIds.has(c.id);
                    const isSelected = selectedViCard?.id === c.id;
                    const isError = mismatchError?.viId === c.id;

                    return (
                      <button
                        key={c.id}
                        disabled={isMatched}
                        onClick={() => handleSelectVi(c)}
                        className={`w-full p-3.5 rounded-2xl border text-left transition-all text-xs leading-snug flex items-center justify-between shadow ${
                          isMatched
                            ? 'opacity-30 bg-slate-900 border-slate-800 text-slate-500 scale-95 pointer-events-none'
                            : isError
                            ? 'bg-rose-500/20 border-rose-500 text-rose-300 animate-shake'
                            : isSelected
                            ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-600/30 scale-[1.02]'
                            : 'bg-[#0B0F17] hover:bg-slate-800 border-slate-800 text-slate-200 hover:border-emerald-500/50'
                        }`}
                      >
                        <span className="line-clamp-2">{c.meaning}</span>
                        {isMatched && <Check className="w-4 h-4 text-emerald-400 shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* ROUND 2: ĐIỀN TỪ VÀO CÂU NGỮ CẢNH (CLOZE TEST)       */}
          {/* ==================================================== */}
          {phase === 'round2_cloze' && r2Card && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-3">
                <span>Chọn từ chính xác để điền vào chỗ trống trong câu:</span>
                <span className="font-mono text-indigo-300 font-bold">
                  Câu {r2Index + 1} / {reviewPool.length}
                </span>
              </div>

              {/* Cloze Sentence Box */}
              <div className="p-6 rounded-3xl bg-[#0B0F17] border border-slate-800 space-y-3">
                <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">
                  Ngữ cảnh thực tế:
                </span>
                <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
                  "
                  {r2Card.example
                    ? r2Card.example.replace(new RegExp(r2Card.word, 'gi'), '__________')
                    : `Please review the __________ carefully.`}
                  "
                </p>
                {r2Card.exampleVi && (
                  <p className="text-xs text-slate-400 italic">Dịch: {r2Card.exampleVi}</p>
                )}
                <div className="pt-1">
                  <span className="text-xs text-amber-300">
                    Gợi ý nghĩa từ cần điền: <strong>{r2Card.meaning}</strong>
                  </span>
                </div>
              </div>

              {/* 4 Multi-Choice Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {r2Options.map((opt, i) => {
                  const isSelected = r2SelectedOption === opt;
                  const isCorrect = opt.toLowerCase() === r2Card.word.toLowerCase();

                  let btnStyle = 'bg-[#0B0F17] hover:bg-slate-800 border-slate-800 text-slate-200';
                  if (r2Checked) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                    } else if (isSelected) {
                      btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-300 font-bold';
                    } else {
                      btnStyle = 'bg-[#0B0F17]/50 border-slate-800 text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={i}
                      disabled={r2Checked}
                      onClick={() => handleSelectR2Option(opt)}
                      className={`p-4 rounded-2xl border text-left font-bold text-sm transition flex items-center justify-between shadow ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {r2Checked && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      {r2Checked && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Bottom Next Button */}
              {r2Checked && (
                <div className="flex items-center justify-end pt-2">
                  <button
                    onClick={handleNextR2}
                    className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition transform hover:translate-x-0.5"
                  >
                    <span>Câu tiếp theo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ==================================================== */}
          {/* ROUND 3: NGHE & PHẢN XẠ CHÍNH TẢ                     */}
          {/* ==================================================== */}
          {phase === 'round3_audio' && r3Card && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-3">
                <span>Nghe phát âm và gõ lại đúng từ vựng:</span>
                <span className="font-mono text-indigo-300 font-bold">
                  Từ {r3Index + 1} / {reviewPool.length}
                </span>
              </div>

              {/* Audio Controls */}
              <div className="p-6 rounded-3xl bg-[#0B0F17] border border-slate-800 text-center space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => onSpeak && onSpeak(r3Card.word, 1.0)}
                    className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-md transition"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Nghe từ 1.0x</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSpeak && onSpeak(r3Card.word, 0.75)}
                    className="px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-bold text-xs transition"
                  >
                    <span>🐢 0.75x</span>
                  </button>
                </div>

                <p className="text-xs text-slate-300">
                  Nghĩa tiếng Việt: <strong className="text-amber-300">{r3Card.meaning}</strong>
                </p>
              </div>

              {/* Input Form */}
              <form onSubmit={handleR3Submit} className="space-y-3">
                <input
                  ref={r3InputRef}
                  type="text"
                  autoFocus
                  disabled={r3Checked}
                  value={r3Input}
                  onChange={(e) => setR3Input(e.target.value)}
                  placeholder={
                    r3HintCount > 0
                      ? `Bắt đầu bằng: "${r3Card.word.slice(0, r3HintCount)}..."`
                      : 'Nhập từ tiếng Anh bạn vừa nghe...'
                  }
                  className="w-full px-5 py-3.5 rounded-2xl bg-[#0B0F17] border border-slate-700 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 font-mono text-sm tracking-wide"
                />

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    disabled={r3Checked}
                    onClick={() => setR3HintCount((h) => Math.min(r3Card.word.length, h + 1))}
                    className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Gợi ý 1 chữ cái</span>
                  </button>

                  {!r3Checked ? (
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition shadow"
                    >
                      Kiểm tra (Enter)
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleNextR3}
                      className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition shadow flex items-center gap-1.5"
                    >
                      <span>Tiếp theo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {r3Checked && (
                  <div
                    className={`p-3.5 rounded-2xl border text-xs flex items-center justify-between animate-fade-in ${
                      r3Passed
                        ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                        : 'bg-rose-500/15 border-rose-500/30 text-rose-300'
                    }`}
                  >
                    <span className="font-bold">
                      {r3Passed ? '✓ Chính xác hoàn hảo!' : `❌ Chưa đúng! Từ chuẩn: "${r3Card.word}"`}
                    </span>
                    <span className="font-mono text-slate-300">{r3Card.ipa}</span>
                  </div>
                )}
              </form>
            </div>
          )}

          {/* ==================================================== */}
          {/* SCREEN 5: BẢNG TỔNG KẾT & PHÂN TÍCH LỖ HỔNG          */}
          {/* ==================================================== */}
          {phase === 'summary' && (
            <div className="space-y-6 py-2">
              {/* Header Trophy Box */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-indigo-600/20 to-purple-600/20 border border-amber-500/40 text-center space-y-3 shadow-xl">
                <div className="w-16 h-16 rounded-3xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto text-amber-400 shadow-xl">
                  <Trophy className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    🏆 Đã Chinh Phục Chủ Đề
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">
                    {subdeck?.title}
                  </h3>
                  <p className="text-xs text-slate-300">
                    Bạn đã hoàn thành toàn diện 3 vòng khảo sát độ phản xạ từ vựng!
                  </p>
                </div>

                {/* Score Big Display */}
                <div className="flex items-center justify-center gap-6 pt-2">
                  <div className="text-center">
                    <p className="text-2xl font-black text-emerald-400">
                      {overallPercentage}%
                    </p>
                    <p className="text-[10px] text-slate-400">Độ chính xác</p>
                  </div>
                  <div className="h-8 w-px bg-slate-700" />
                  <div className="text-center">
                    <p className="text-2xl font-black text-amber-400">
                      {currentTotalScore} / {totalRoundsPossible}
                    </p>
                    <p className="text-[10px] text-slate-400">Điểm 3 vòng</p>
                  </div>
                  <div className="h-8 w-px bg-slate-700" />
                  <div className="text-center">
                    <p className="text-2xl font-black text-indigo-400">
                      +150 XP
                    </p>
                    <p className="text-[10px] text-slate-400">Thưởng hoàn thành</p>
                  </div>
                </div>
              </div>

              {/* Phân tích lỗ hổng (Danh sách từ làm sai) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>Phân tích lỗ hổng ({failedCardsList.length} từ cần củng cố):</span>
                  </h4>
                  {failedCardsList.length === 0 && (
                    <span className="text-xs font-bold text-emerald-400">
                      🎉 Hoàn hảo! Không có từ nào bị sai!
                    </span>
                  )}
                </div>

                {failedCardsList.length > 0 ? (
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {failedCardsList.map((card) => (
                      <div
                        key={card.id}
                        className="p-3.5 rounded-2xl bg-[#0B0F17] border border-slate-800 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="space-y-0.5 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-sm">{card.word}</span>
                            <span className="text-[10px] font-mono text-indigo-300">{card.ipa}</span>
                          </div>
                          <p className="text-slate-300 text-[11px] truncate">{card.meaning}</p>
                        </div>

                        <button
                          onClick={() => onSpeak && onSpeak(card.word, 1.0)}
                          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition shrink-0"
                          title="Nghe phát âm"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center text-xs text-emerald-300">
                    Trí nhớ của bạn về chủ đề này rất xuất sắc. Mọi từ vựng đều được phản xạ chính xác tuyệt đối!
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800">
                {failedCardsList.length > 0 && onStartPracticeWrongWords ? (
                  <button
                    onClick={() => {
                      onClose();
                      onStartPracticeWrongWords(failedCardsList);
                    }}
                    className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Học lại ngay {failedCardsList.length} từ vừa sai</span>
                  </button>
                ) : <span />}

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleStartReview(reviewScope)}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition"
                  >
                    Làm lại bài
                  </button>

                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition shadow"
                  >
                    Xong
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
