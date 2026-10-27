import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Volume2,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Pin,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Check,
  Lightbulb,
  ArrowRight,
  RotateCw,
  Eye,
  Award,
  Zap,
  Layers,
  HelpCircle
} from 'lucide-react';
import WordIllustration from './WordIllustration';

export default function StudySessionModal({
  deck,
  onClose,
  onSpeak,
  onPinNote,
  onAwardXP,
  onUpdateCardSRS,
  onSaveDeckSession,
  onMarkCardMastered,
  onSaveTopicProgress
}) {
  // Attach original index (1..50) so we can always track where the card is in the main deck
  const allCardsWithIndex = useMemo(() => {
    return (deck?.cards || []).map((c, idx) => ({ ...c, originalIndex: idx }));
  }, [deck?.cards]);

  // Mode and initial card identification
  const mode = deck?.mode || 'learn_new';
  const initialCardId = deck?.initialCardId || null;

  // Smart Session Queue: keep entire topic card series (Từ 1/50 -> Từ 50/50) or due review cards
  const [sessionQueue, setSessionQueue] = useState(() => {
    if (mode === 'review_due') {
      const dueCards = allCardsWithIndex.filter(
        (c) =>
          c.status === 'learning' ||
          c.status === 'weak' ||
          c.due ||
          (c.nextReviewAt && c.nextReviewAt <= Date.now())
      );
      if (dueCards.length > 0) return dueCards;
      return allCardsWithIndex.filter((c) => c.status === 'mastered' || c.status === 'learning');
    }

    return allCardsWithIndex;
  });

  const [queueIndex, setQueueIndex] = useState(() => {
    if (initialCardId) {
      const targetIdx = allCardsWithIndex.findIndex((c) => c.id === initialCardId);
      if (targetIdx >= 0) return targetIdx;
    }
    if (deck?.lastWordIndex !== undefined && Number(deck.lastWordIndex) >= 0) {
      const idx = Number(deck.lastWordIndex);
      return Math.min(Math.max(0, idx), Math.max(0, allCardsWithIndex.length - 1));
    }
    return 0;
  });

  const [completedCardIds, setCompletedCardIds] = useState(new Set());
  const [sessionCardUpdates, setSessionCardUpdates] = useState({});
  const [isSessionFinished, setIsSessionFinished] = useState(false);

  const [step, setStep] = useState(() => {
    if (deck?.lastStep !== undefined && Number(deck.lastStep) >= 1 && Number(deck.lastStep) <= 4) {
      return Number(deck.lastStep);
    }
    return 1;
  }); // 1: Flashcard 3D | 2: Quiz | 3: Lego | 4: Dictation + SRS

  // Synchronize topic progress to server and parent state
  const saveTopicState = (override = {}) => {
    if (onSaveTopicProgress && deck?.id) {
      const targetIdx = override.lastWordIndex !== undefined ? override.lastWordIndex : queueIndex;
      const curCard = sessionQueue[targetIdx];
      onSaveTopicProgress(deck.id, {
        lastWordIndex: targetIdx,
        lastStep: override.lastStep !== undefined ? override.lastStep : step,
        ...(curCard?.id ? { completedWordIds: [curCard.id] } : {}),
        ...override
      });
    }
  };

  const changeStep = (newStep) => {
    setStep(newStep);
    saveTopicState({ lastStep: newStep });
  };

  // Step 1: 3D Flip state & Mode
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFlatMode, setShowFlatMode] = useState(false); // Toggle 3D flip vs flat 2-side

  // Step 2: Quiz state
  const [selectedQuizIdx, setSelectedQuizIdx] = useState(null);
  const [quizAnswerShuffled, setQuizAnswerShuffled] = useState([]);
  const [quizFailed, setQuizFailed] = useState(false);

  // Step 3: Lego state
  const [legoPool, setLegoPool] = useState([]); // Remaining words in pool [{ w, id }]
  const [legoAnswer, setLegoAnswer] = useState([]); // Placed words in answer [{ w, id }]
  const [legoStatus, setLegoStatus] = useState(null); // null | 'correct' | 'wrong'

  // Step 4: Dictation state
  const [dictationInput, setDictationInput] = useState('');
  const [dictationChecked, setDictationChecked] = useState(false);
  const [dictationPassed, setDictationPassed] = useState(false);
  const [revealedCharsCount, setRevealedCharsCount] = useState(0);
  const [showCollocationHint, setShowCollocationHint] = useState(false);
  const inputRef = useRef(null);

  const currentCard = sessionQueue[queueIndex] || sessionQueue[0];

  // Helper: Fisher-Yates Shuffle
  const shuffleArray = (arr) => {
    const res = [...arr];
    for (let i = res.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [res[i], res[j]] = [res[j], res[i]];
    }
    return res;
  };

  // Clean raw words of the example sentence for Lego
  const targetLegoWords = useMemo(() => {
    if (!currentCard?.example) return [];
    return currentCard.example
      .replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, '')
      .split(/\s+/)
      .filter(Boolean);
  }, [currentCard]);

  // Reset states when moving to next card in queue
  const resetForQueueIndex = (idx) => {
    setQueueIndex(idx);
    setStep(1);
    setIsFlipped(false);
    setSelectedQuizIdx(null);
    setQuizFailed(false);
    setLegoStatus(null);
    setDictationInput('');
    setDictationChecked(false);
    setDictationPassed(false);
    setRevealedCharsCount(0);
    setShowCollocationHint(false);
    saveTopicState({ lastWordIndex: idx, lastStep: 1 });
  };

  // Step 4: Progressive Character Hint logic
  const handleHintChar = () => {
    if (!currentCard?.word) return;
    const nextCount = Math.min(currentCard.word.length, revealedCharsCount + 1);
    setRevealedCharsCount(nextCount);
    const prefix = currentCard.word.slice(0, nextCount);
    setDictationInput(prefix);
    setDictationChecked(false);

    // If completely revealed, mark as passed
    if (prefix.toLowerCase() === currentCard.word.toLowerCase()) {
      setDictationChecked(true);
      setDictationPassed(true);
      if (onSpeak) onSpeak(currentCard.word, 1.0);
    }

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(nextCount, nextCount);
      }
    }, 50);
  };

  // Auto-mark card as at least 'learning' when encountered
  useEffect(() => {
    if (currentCard && deck?.id) {
      const curStatus = currentCard.status || 'learning';
      const srsObj = {
        status: curStatus === 'mastered' ? 'mastered' : 'learning',
        stepCompleted: currentCard.stepCompleted || 1,
        intervalDays: currentCard.intervalDays || 1,
        lastStudiedAt: Date.now(),
        nextReviewAt: currentCard.nextReviewAt || (Date.now() + 86400000),
        due: false
      };
      setSessionCardUpdates((prev) => ({
        ...prev,
        [currentCard.id]: srsObj
      }));
      if (onUpdateCardSRS && (!currentCard.status || currentCard.status === 'new')) {
        onUpdateCardSRS(currentCard.id, srsObj, deck.id);
      }
    }
  }, [queueIndex, currentCard?.id, deck?.id]);

  // Initialize Lego Pool when card changes
  useEffect(() => {
    if (!targetLegoWords.length) return;
    const tokens = targetLegoWords.map((w, idx) => ({ w, id: `${w}-${idx}` }));
    setLegoPool(shuffleArray(tokens));
    setLegoAnswer([]);
    setLegoStatus(null);
  }, [targetLegoWords, queueIndex]);

  // Initialize Quiz options when step 2 opens
  useEffect(() => {
    if (step === 2 && currentCard) {
      if (onSpeak) onSpeak(currentCard.word, 1.0);

      // Collect distractors from all deck cards
      const otherMeanings = allCardsWithIndex
        .filter((c) => c.word !== currentCard.word && c.meaning)
        .map((c) => c.meaning);

      const fallbackDistractors = [
        'Người giám hộ hợp pháp',
        'Chiến dịch tiếp thị thương hiệu',
        'Kế hoạch kinh doanh dài hạn',
        'Kiến trúc hệ thống phần mềm',
        'Sự đàm phán thương lượng điều khoản'
      ].filter((m) => m !== currentCard.meaning);

      const combinedDistractors = shuffleArray([
        ...otherMeanings,
        ...fallbackDistractors
      ]).slice(0, 3);

      const fourOptions = shuffleArray([
        ...combinedDistractors,
        currentCard.meaning
      ]);

      setQuizAnswerShuffled(fourOptions);
      setSelectedQuizIdx(null);
      setQuizFailed(false);
    }
  }, [step, currentCard, allCardsWithIndex]);

  // Focus input on Step 4
  useEffect(() => {
    if (step === 4) {
      setTimeout(() => inputRef.current?.focus(), 300);
      if (onSpeak && currentCard?.word) {
        onSpeak(currentCard.word, 1.0);
      }
    }
  }, [step]);

  // Comprehensive Keyboard Shortcuts Listener for all 4 steps
  useEffect(() => {
    const handleKeyDown = (e) => {
      // In Step 4, handle Tab or Alt+H for Hint even if input is focused
      if (step === 4) {
        if (e.key === 'Tab' || (e.altKey && (e.key === 'h' || e.key === 'H'))) {
          e.preventDefault();
          handleHintChar();
          return;
        }
      }

      // Don't trigger standard navigation if user is typing in Step 4 input
      if (e.target.tagName === 'INPUT') return;

      if (e.code === 'Space') {
        e.preventDefault();
        if (step === 1) {
          setIsFlipped((prev) => !prev);
        } else if (step === 2 && selectedQuizIdx !== null) {
          changeStep(3);
        } else if (step === 3 && legoStatus === 'correct') {
          changeStep(4);
        }
      } else if (e.key === '1') {
        e.preventDefault();
        if (onSpeak && currentCard?.word) onSpeak(currentCard.word, 1.0);
      } else if (e.key === '2') {
        e.preventDefault();
        if (onSpeak && currentCard?.word) onSpeak(currentCard.word, 0.75);
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        if (onPinNote && currentCard) {
          onPinNote({
            term: currentCard.word,
            phonetic: currentCard.ipa,
            meaning: currentCard.meaning,
            example: currentCard.example,
            tag: 'Từ vựng'
          });
        }
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (step === 1) {
          changeStep(2);
        } else if (step === 2 && selectedQuizIdx !== null) {
          changeStep(3);
        } else if (step === 3 && legoStatus === 'correct') {
          changeStep(4);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentCard, step, selectedQuizIdx, legoStatus, revealedCharsCount, onSpeak, onPinNote]);

  // Lego handlers: 2-way interaction with auto-check on sentence completion
  const handleMoveToAnswer = (item) => {
    const nextAnswer = [...legoAnswer, item];
    setLegoPool((prev) => prev.filter((i) => i.id !== item.id));
    setLegoAnswer(nextAnswer);
    setLegoStatus(null);

    // Auto-check if all words placed
    if (nextAnswer.length === targetLegoWords.length) {
      const userBuilt = nextAnswer.map((i) => i.w).join(' ').trim().toLowerCase();
      const target = targetLegoWords.join(' ').trim().toLowerCase();

      if (userBuilt === target) {
        setLegoStatus('correct');
        if (onSpeak && currentCard?.example) {
          onSpeak(currentCard.example, 1.0);
        }
      } else {
        setLegoStatus('wrong');
      }
    }
  };

  const handleReturnToPool = (item) => {
    setLegoAnswer((prev) => prev.filter((i) => i.id !== item.id));
    setLegoPool((prev) => [...prev, item]);
    setLegoStatus(null);
  };

  const handleResetLego = () => {
    const tokens = targetLegoWords.map((w, idx) => ({ w, id: `${w}-${idx}` }));
    setLegoPool(shuffleArray(tokens));
    setLegoAnswer([]);
    setLegoStatus(null);
  };

  const handleHintNextWord = () => {
    const nextTargetIdx = legoAnswer.length;
    if (nextTargetIdx >= targetLegoWords.length) return;
    const nextExpectedWord = targetLegoWords[nextTargetIdx];

    const matchInPool = legoPool.find(
      (item) => item.w.toLowerCase() === nextExpectedWord.toLowerCase()
    );

    if (matchInPool) {
      handleMoveToAnswer(matchInPool);
    }
  };

  const handleCheckLego = () => {
    const userBuilt = legoAnswer.map((i) => i.w).join(' ').trim().toLowerCase();
    const target = targetLegoWords.join(' ').trim().toLowerCase();

    if (userBuilt === target) {
      setLegoStatus('correct');
      if (onSpeak && currentCard?.example) {
        onSpeak(currentCard.example, 1.0);
      }
    } else {
      setLegoStatus('wrong');
    }
  };

  // Dictation Check handler
  const handleCheckDictation = (e) => {
    if (e) e.preventDefault();
    if (!dictationInput.trim()) return;

    setDictationChecked(true);
    const isExact =
      dictationInput.trim().toLowerCase() === currentCard.word.trim().toLowerCase();

    if (isExact) {
      setDictationPassed(true);
      if (onSpeak) onSpeak(currentCard.word, 1.0);
    } else {
      setDictationPassed(false);
    }
  };

  // 1-touch Skip if user already knows this word
  const handleSkipMastered = () => {
    if (!currentCard) return;
    const srsPayload = {
      status: 'mastered',
      stepCompleted: 4,
      intervalDays: 14,
      due: false,
      lastStudiedAt: Date.now(),
      nextReviewAt: Date.now() + 14 * 86400000,
      reviewCount: (currentCard.reviewCount || 0) + 1
    };

    setSessionCardUpdates((prev) => ({
      ...prev,
      [currentCard.id]: srsPayload
    }));

    if (onMarkCardMastered) {
      onMarkCardMastered(currentCard.id, srsPayload);
    } else if (onUpdateCardSRS && deck?.id) {
      onUpdateCardSRS(currentCard.id, srsPayload, deck.id);
    }

    if (onAwardXP) onAwardXP(10, `Đã thuộc nhanh từ "${currentCard.word}"!`);
    setCompletedCardIds((prev) => new Set([...prev, currentCard.id]));

    if (queueIndex + 1 < sessionQueue.length) {
      resetForQueueIndex(queueIndex + 1);
    } else {
      setIsSessionFinished(true);
      saveTopicState({ lastWordIndex: sessionQueue.length - 1, lastStep: 4 });
    }
  };

  // Safe exit handler that saves progress and session state
  const handleExitSession = () => {
    if (onSaveTopicProgress && deck?.id) {
      onSaveTopicProgress(deck.id, {
        lastWordIndex: queueIndex,
        lastStep: step
      });
    }
    if (onSaveDeckSession && deck?.id) {
      onSaveDeckSession(deck.id, sessionCardUpdates);
    }
    onClose();
  };

  // SRS Rating submission
  const handleRateSRS = (level, interval) => {
    if (!currentCard) return;

    let status = 'learning';
    let due = false;
    let nextReviewAt = null;

    if (level === 1) {
      // Quên / Khó nhớ (10 phút): đẩy xuống cuối hàng đợi phiên để học lại
      status = 'learning';
      due = true;
      nextReviewAt = Date.now() + 10 * 60 * 1000;
    } else if (level === 2) {
      // Còn ngập ngừng (1 ngày)
      status = 'learning';
      due = false;
      nextReviewAt = Date.now() + 86400000;
    } else if (level === 3) {
      // Nhớ tốt (4 ngày) -> mastered
      status = 'mastered';
      due = false;
      nextReviewAt = Date.now() + 4 * 86400000;
    } else if (level === 4) {
      // Thuộc làu (14 ngày) -> mastered
      status = 'mastered';
      due = false;
      nextReviewAt = Date.now() + 14 * 86400000;
    }

    const srsPayload = {
      status,
      stepCompleted: 4,
      intervalDays: interval,
      due,
      lastStudiedAt: Date.now(),
      nextReviewAt,
      reviewCount: (currentCard.reviewCount || 0) + 1
    };

    setSessionCardUpdates((prev) => ({
      ...prev,
      [currentCard.id]: srsPayload
    }));

    if (onMarkCardMastered && status === 'mastered') {
      onMarkCardMastered(currentCard.id, srsPayload);
    } else if (onUpdateCardSRS && deck?.id) {
      onUpdateCardSRS(currentCard.id, srsPayload, deck.id);
    }

    if (level === 1) {
      // Push back to the end of sessionQueue for reinforcement!
      setSessionQueue((prev) => [...prev, currentCard]);
      if (onAwardXP) onAwardXP(5, `Ghi nhớ từ "${currentCard.word}" vào cuối phiên`);
      resetForQueueIndex(queueIndex + 1);
    } else {
      setCompletedCardIds((prev) => new Set([...prev, currentCard.id]));
      if (status === 'mastered') {
        if (onAwardXP) onAwardXP(15, `Đã thuộc từ "${currentCard.word}"!`);
      } else {
        if (onAwardXP) onAwardXP(10, `Đang củng cố từ "${currentCard.word}"`);
      }

      if (queueIndex + 1 < sessionQueue.length) {
        resetForQueueIndex(queueIndex + 1);
      } else {
        setIsSessionFinished(true);
        saveTopicState({ lastWordIndex: sessionQueue.length - 1, lastStep: 4 });
      }
    }
  };

  // FINISHED SESSION SUMMARY SCREEN
  if (isSessionFinished) {
    const totalWords = sessionQueue.length;
    const masteredInSession = Array.from(completedCardIds).filter((id) => {
      const u = sessionCardUpdates[id];
      return u?.status === 'mastered';
    }).length;
    const learningInSession = completedCardIds.size - masteredInSession;

    return (
      <div className="max-w-xl mx-auto p-8 rounded-3xl bg-[#131B2E] border border-indigo-500/40 shadow-2xl text-center space-y-6 animate-fade-in my-8">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-4xl shadow-xl">
          🏆
        </div>

        <div className="space-y-1.5">
          <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            Hoàn Thành Phiên Học
          </span>
          <h2 className="text-2xl font-black text-white">
            Xuất Sắc! Bạn Đã Hoàn Thành Phiên Học!
          </h2>
          <p className="text-xs text-slate-400">
            Chủ đề: <strong className="text-white">{deck.title}</strong> ({deck.enTitle})
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-slate-800">
            <p className="text-[10px] text-slate-400 font-medium">Từ đã qua</p>
            <p className="text-lg font-black text-white mt-0.5">{totalWords}</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-emerald-500/30">
            <p className="text-[10px] text-emerald-400 font-medium">Đã thuộc</p>
            <p className="text-lg font-black text-emerald-400 mt-0.5">{masteredInSession}</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-amber-500/30">
            <p className="text-[10px] text-amber-400 font-medium">Đang củng cố</p>
            <p className="text-lg font-black text-amber-300 mt-0.5">{learningInSession}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleExitSession}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-indigo-600/30 transition flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            <span>Quay lại Kho Từ Vựng</span>
          </button>
        </div>
      </div>
    );
  }

  if (!currentCard) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-5 animate-fade-in">
      {/* TOP HEADER: Streamlined 1-row Header */}
      <div className="rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-lg overflow-hidden">
        <div className="p-3.5 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Left section: Back button + Title + Word Badge & Prev/Next arrows */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleExitSession}
              className="text-xs text-slate-400 hover:text-white px-2.5 py-1.5 rounded-xl bg-[#0B0F17] hover:bg-slate-800 border border-slate-800/80 flex items-center gap-1.5 font-bold transition group"
              title="Lưu tiến trình và quay lại Kho Từ Vựng"
            >
              <span className="group-hover:-translate-x-0.5 transition">←</span>
              <span>Kho Từ Vựng</span>
            </button>

            <div className="flex items-center gap-2">
              <h2 className="text-sm md:text-base font-bold text-white flex items-center gap-1.5 max-w-[200px] sm:max-w-xs truncate" title={deck.title}>
                <span>{deck.icon || '📘'}</span>
                <span className="truncate">{deck.title}</span>
              </h2>

              {/* Word Position Badge with < > buttons */}
              <div className="flex items-center gap-1 bg-[#0B0F17] px-2 py-1 rounded-xl border border-slate-800 text-xs font-mono font-bold text-white">
                <button
                  disabled={queueIndex === 0}
                  onClick={() => {
                    if (queueIndex > 0) resetForQueueIndex(queueIndex - 1);
                  }}
                  className="p-0.5 hover:text-indigo-400 disabled:opacity-20 transition"
                  title="Từ trước đó"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <span className="px-1 text-indigo-300">
                  Từ {queueIndex + 1} / {sessionQueue.length}
                </span>
                <button
                  disabled={queueIndex >= sessionQueue.length - 1}
                  onClick={() => {
                    if (queueIndex < sessionQueue.length - 1) {
                      resetForQueueIndex(queueIndex + 1);
                    }
                  }}
                  className="p-0.5 hover:text-indigo-400 disabled:opacity-20 transition"
                  title="Từ tiếp theo"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right section: 4 Step Indicator Pills (Horizontally scrollable on mobile) */}
          <div className="flex items-center gap-1 bg-[#0B0F17] p-1.5 rounded-2xl border border-slate-800 shrink-0 overflow-x-auto no-scrollbar w-full sm:w-auto">
            {[
              { s: 1, label: '1. Flashcard 3D' },
              { s: 2, label: '2. Phản xạ nghĩa' },
              { s: 3, label: '3. Ghép câu Lego' },
              { s: 4, label: '4. Nghe gõ & SRS' }
            ].map((item) => (
              <button
                key={item.s}
                onClick={() => {
                  if (item.s <= step || dictationPassed) {
                    changeStep(item.s);
                  }
                }}
                className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                  step === item.s
                    ? 'bg-indigo-600 text-white shadow-md'
                    : item.s < step
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : 'text-slate-500 hover:text-slate-400'
                }`}
              >
                {item.s < step ? <Check className="w-3.5 h-3.5" /> : null}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar thin h-1.5 at bottom edge */}
        <div className="w-full bg-slate-900 h-1.5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-400 transition-all duration-300 ease-out"
            style={{
              width: `${Math.round(((queueIndex + (step / 4)) / Math.max(1, sessionQueue.length)) * 100)}%`
            }}
          />
        </div>
      </div>

      {/* ==================================================== */}
      {/* BƯỚC 1: GIAO DIỆN FLASHCARD LẬT 3D (3D FLIP CARD)   */}
      {/* ==================================================== */}
      {step === 1 && (
        <div className="space-y-4">
          {/* Controls: Mode Switcher & Card Hint */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-2">
            <span>
              💡 Bấm vào thẻ hoặc nhấn <kbd className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 font-mono text-[11px]">Space</kbd> để lật thẻ
            </span>
            <button
              onClick={() => setShowFlatMode((v) => !v)}
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition"
            >
              {showFlatMode ? 'Chuyển sang Lật thẻ 3D' : 'Xem cả 2 mặt cùng lúc'}
            </button>
          </div>

          {!showFlatMode ? (
            /* 3D Flip Card Container */
            <div className="perspective-1000 w-full min-h-[460px] sm:min-h-[440px] cursor-pointer select-none">
              <div
                onClick={() => setIsFlipped((v) => !v)}
                className={`relative w-full min-h-[460px] sm:min-h-[440px] rounded-3xl transition-transform duration-500 transform-style-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* MẶT TRƯỚC (FRONT) */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-[#131B2E] border-2 border-indigo-500/30 p-4 sm:p-7 flex flex-col justify-between shadow-2xl">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider px-2.5 sm:px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      {currentCard.pos || 'Từ vựng'}
                    </span>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSkipMastered();
                        }}
                        className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-sm transition hover:scale-[1.02] active:scale-95"
                        title="Đã biết rõ từ này rồi, bấm để đánh dấu Đã thuộc và chuyển ngay sang từ tiếp theo"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span className="hidden xs:inline">Đã biết</span>
                        <span className="hidden sm:inline"> từ này (Bỏ qua)</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onPinNote) {
                            onPinNote({
                              term: currentCard.word,
                              phonetic: currentCard.ipa,
                              meaning: currentCard.meaning,
                              example: currentCard.example,
                              tag: 'Từ vựng'
                            });
                          }
                        }}
                        className="p-1.5 sm:p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-amber-400 transition"
                        title="Ghim vào sổ tay (phím S)"
                      >
                        <Pin className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Word & Phonetic Center */}
                  <div className="text-center space-y-2.5 sm:space-y-3 py-3 sm:py-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight break-words">
                      {currentCard.word}
                    </h1>
                    <p className="text-xs sm:text-sm font-mono text-indigo-400">
                      {currentCard.syllables} • {currentCard.ipa}
                    </p>

                    {/* 2 Audio Buttons (1.0x and 0.75x) */}
                    <div className="flex flex-wrap items-center justify-center gap-2 pt-1 sm:pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onSpeak) onSpeak(currentCard.word, 1.0);
                        }}
                        className="px-3.5 sm:px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 sm:gap-2 shadow-md transition"
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>Nghe 1.0x</span>
                        <span className="hidden sm:inline">(Phím 1)</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onSpeak) onSpeak(currentCard.word, 0.75);
                        }}
                        className="px-3 sm:px-3.5 py-2 rounded-xl bg-[#0B0F17] hover:bg-slate-800 border border-slate-700 text-slate-300 font-bold text-xs flex items-center gap-1.5 transition"
                      >
                        <span>🐢 Chậm 0.75x</span>
                        <span className="hidden sm:inline">(Phím 2)</span>
                      </button>
                    </div>

                    {/* Highlighted Collocation */}
                    {currentCard.chunk && (
                      <div className="pt-2 sm:pt-4">
                        <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                          Cụm từ đi kèm (Collocation):
                        </span>
                        <p className="text-sm sm:text-base font-bold text-emerald-300 mt-0.5">
                          "{currentCard.chunk}"
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="text-center text-[11px] sm:text-xs text-slate-500 flex items-center justify-center gap-1.5">
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Bấm vào thẻ để lật xem nghĩa & mẹo nhớ</span>
                  </div>
                </div>

                {/* MẶT SAU (BACK) */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-[#131B2E] border-2 border-emerald-500/40 p-4 sm:p-7 flex flex-col justify-between shadow-2xl overflow-y-auto">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider px-2.5 sm:px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      Mặt sau: Nghĩa & Ứng Dụng
                    </span>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSkipMastered();
                        }}
                        className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-sm transition hover:scale-[1.02] active:scale-95"
                        title="Đã biết rõ từ này rồi, bấm để đánh dấu Đã thuộc và chuyển ngay sang từ tiếp theo"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Đã biết</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsFlipped(false);
                        }}
                        className="text-xs text-slate-400 hover:text-white flex items-center gap-1 p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 transition"
                      >
                        <RotateCw className="w-3.5 h-3.5" /> Lật lại
                      </button>
                    </div>
                  </div>

                  {/* Meaning & Visual Illustration & Mnemonic & Example */}
                  <div className="space-y-3 py-1">
                    {/* Bố cục xếp dọc trên mobile để hình ảnh không ép chữ tiếng Việt */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3 sm:gap-4">
                      <div className="space-y-2 flex-1 w-full text-left min-w-0">
                        <div>
                          <span className="text-xs text-slate-400">Nghĩa tiếng Việt:</span>
                          <h3 className="text-xl sm:text-3xl font-extrabold text-emerald-300 mt-0.5 tracking-tight leading-snug">
                            {currentCard.meaning}
                          </h3>
                        </div>

                        {/* Mnemonic Frame */}
                        {currentCard.mnemonic && (
                          <div className="p-3 sm:p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs leading-relaxed flex items-start gap-2.5 text-left">
                            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <div>{currentCard.mnemonic.replace(/^[💡\s]+/, '')}</div>
                          </div>
                        )}
                      </div>

                      {/* Visual Memory Illustration Frame */}
                      <div className="shrink-0 w-full sm:w-auto flex justify-center py-1 sm:py-0">
                        <WordIllustration
                          word={currentCard.word}
                          meaning={currentCard.meaning}
                          mnemonic={currentCard.mnemonic}
                          size="md"
                        />
                      </div>
                    </div>

                    {/* Sentence Pattern & Example */}
                    {currentCard.example && (
                      <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0B0F17] border border-slate-800 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-indigo-400 font-bold uppercase tracking-wider">
                            Câu Ví Dụ Thực Chiến:
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (onSpeak) onSpeak(currentCard.example, 1.0);
                            }}
                            className="p-1 rounded-lg text-slate-400 hover:text-indigo-300"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-slate-100">
                          "{currentCard.example}"
                        </p>
                        {currentCard.exampleVi && (
                          <p className="text-[11px] sm:text-xs text-slate-400">{currentCard.exampleVi}</p>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] sm:text-xs text-slate-400 truncate mr-2">Ghi nhớ kỹ nghĩa & câu ví dụ</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        changeStep(2);
                      }}
                      className="px-3.5 sm:px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition shrink-0"
                    >
                      <span>Sang Bước 2</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Flat Mode (2 Sides Visible) */
            <div className="space-y-3">
              <div className="flex justify-end">
                <button
                  onClick={handleSkipMastered}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1.5 shadow-sm transition hover:scale-[1.02] active:scale-95"
                >
                  <Check className="w-4 h-4" />
                  <span>Đã biết từ này (Bỏ qua ngay)</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800 space-y-4">
                  <span className="text-xs text-indigo-400 font-bold uppercase">Mặt trước</span>
                  <h2 className="text-3xl font-black text-white">{currentCard.word}</h2>
                  <p className="text-xs font-mono text-indigo-300">{currentCard.syllables} • {currentCard.ipa}</p>
                  <p className="text-xs font-semibold text-emerald-400">Cụm: {currentCard.chunk}</p>
                  <div className="flex gap-2 pt-2">
                    <button onClick={() => onSpeak && onSpeak(currentCard.word, 1.0)} className="px-3 py-1.5 rounded-xl bg-indigo-600 text-xs font-bold text-white">Nghe 1.0x</button>
                    <button onClick={() => onSpeak && onSpeak(currentCard.word, 0.75)} className="px-3 py-1.5 rounded-xl bg-slate-800 text-xs font-bold text-slate-300">Nghe 0.75x</button>
                  </div>
                </div>
                <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-emerald-400 font-bold uppercase">Mặt sau</span>
                    <button
                      onClick={() => changeStep(2)}
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1"
                    >
                      <span>Sang Bước 2</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-bold text-emerald-300">{currentCard.meaning}</h3>
                      <div className="p-3 rounded-xl bg-amber-500/10 text-amber-300 text-xs">
                        {currentCard.mnemonic ? currentCard.mnemonic.replace(/^[💡\s]+/, '') : ''}
                      </div>
                      <p className="text-xs text-slate-300 italic">"{currentCard.example}"</p>
                    </div>
                    <WordIllustration
                      word={currentCard.word}
                      meaning={currentCard.meaning}
                      mnemonic={currentCard.mnemonic}
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Unified Navigation & Keyboard Shortcuts Bar (Tách bạch rõ ràng, tối ưu cảm ứng Mobile) */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0B0F17] border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-lg">
            {/* Desktop: Danh sách phím tắt (Ẩn trên điện thoại) */}
            <div className="hidden md:flex flex-wrap items-center gap-2.5 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Phím tắt:</span>
              <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 font-mono text-[11px]">Space</kbd> Lật thẻ</span>
              <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 font-mono text-[11px]">1</kbd> Nghe 1.0x</span>
              <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 font-mono text-[11px]">2</kbd> Chậm 0.75x</span>
              <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 font-mono text-[11px]">S</kbd> Ghim</span>
            </div>

            {/* Mobile Touch Action Bar: 3 phím bấm cảm ứng lớn dễ chạm ngón tay cái */}
            <div className="grid grid-cols-3 gap-2 w-full md:hidden">
              <button
                onClick={() => setIsFlipped((v) => !v)}
                className="py-2.5 px-2 rounded-xl bg-slate-900 border border-slate-700/70 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 active:bg-slate-800 transition"
              >
                <RotateCw className="w-3.5 h-3.5 text-indigo-400" />
                <span>{isFlipped ? 'Mặt trước' : 'Lật thẻ'}</span>
              </button>
              <button
                onClick={() => onSpeak && onSpeak(currentCard.word, 1.0)}
                className="py-2.5 px-2 rounded-xl bg-slate-900 border border-slate-700/70 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 active:bg-slate-800 transition"
              >
                <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Nghe</span>
              </button>
              <button
                onClick={handleSkipMastered}
                className="py-2.5 px-2 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-1.5 active:bg-emerald-500/25 transition"
              >
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Đã thuộc</span>
              </button>
            </div>

            {/* Điều hướng tiếp sang Bước 2 */}
            <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
              {!showFlatMode && (
                <button
                  onClick={() => setIsFlipped((v) => !v)}
                  className="hidden md:flex px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition items-center gap-1.5"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>{isFlipped ? 'Mặt trước' : 'Lật thẻ'}</span>
                </button>
              )}

              <button
                onClick={() => changeStep(2)}
                className="w-full md:w-auto justify-center px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition transform hover:translate-x-0.5 active:scale-95"
              >
                <span>Sang Bước 2: Phản xạ nghĩa</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* BƯỚC 2: PHẢN XẠ NGHĨA NHANH (QUIZ)                   */}
      {/* ==================================================== */}
      {step === 2 && (
        <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
              Bước 2: Phản xạ nghĩa nhanh
            </span>
            <div className="flex items-center justify-center gap-3 pt-2">
              <h2 className="text-3xl font-black text-white">{currentCard.word}</h2>
              <button
                onClick={() => onSpeak && onSpeak(currentCard.word, 1.0)}
                className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs font-mono text-indigo-400">{currentCard.ipa}</p>
          </div>

          {/* 4 Shuffled Quiz Choices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quizAnswerShuffled.map((opt, idx) => {
              const isSelected = selectedQuizIdx === idx;
              const isCorrect = opt === currentCard.meaning;
              let style = 'bg-[#0B0F17] border-slate-800 hover:border-indigo-500/40 text-slate-200';

              if (selectedQuizIdx !== null) {
                if (isCorrect) {
                  style = 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-bold';
                } else if (isSelected) {
                  style = 'bg-rose-950/40 border-rose-500 text-rose-200 animate-shake';
                } else {
                  style = 'bg-[#0B0F17]/40 border-slate-800/40 text-slate-600';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={selectedQuizIdx !== null}
                  onClick={() => {
                    setSelectedQuizIdx(idx);
                    if (!isCorrect) {
                      setQuizFailed(true);
                    }
                  }}
                  className={`p-4 rounded-2xl border text-left text-xs font-medium transition flex items-center justify-between ${style}`}
                >
                  <span>{opt}</span>
                  {selectedQuizIdx !== null && isCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                  )}
                  {selectedQuizIdx !== null && isSelected && !isCorrect && (
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & Mnemonic & Word Illustration after selecting ANY answer */}
          {selectedQuizIdx !== null && (
            <div
              className={`p-4 rounded-2xl border text-xs leading-relaxed flex flex-col sm:flex-row items-center gap-4 animate-fade-in ${
                quizFailed
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                  : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
              }`}
            >
              <WordIllustration
                word={currentCard.word}
                meaning={currentCard.meaning}
                mnemonic={currentCard.mnemonic}
                size="sm"
              />
              <div className="space-y-1.5 flex-1 w-full text-center sm:text-left">
                <p className="font-bold text-sm flex items-center justify-center sm:justify-start gap-1.5">
                  {quizFailed ? (
                    <>
                      <XCircle className="w-4 h-4 text-rose-400" />
                      <span>Ôn lại mẹo nhớ để không bị quên:</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Chính xác tuyệt đối!</span>
                    </>
                  )}
                </p>
                <p className="text-slate-200">
                  <strong className="text-emerald-300">Nghĩa đúng:</strong> {currentCard.meaning}
                </p>
                {currentCard.mnemonic && (
                  <p className="text-amber-200/90">{currentCard.mnemonic.replace(/^[💡\s]+/, '')}</p>
                )}
                {currentCard.chunk && (
                  <p className="text-indigo-300 font-semibold text-xs">
                    Cụm từ: "{currentCard.chunk}"
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Prominent Next Button shown whenever an answer is selected (Correct OR Wrong) */}
          {selectedQuizIdx !== null && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-800 animate-fade-in">
              <span className="text-xs text-slate-400">
                Nhấn <kbd className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 font-mono text-[11px]">Enter</kbd> hoặc <kbd className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 font-mono text-[11px]">Space</kbd> để tiếp tục
              </span>
              <button
                onClick={() => changeStep(3)}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition group"
              >
                <span>Tiếp tục: Bước 3 (Ghép câu Lego)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* ==================================================== */}
      {/* BƯỚC 3: GHÉP CÂU LEGO (SENTENCE BUILDER)            */}
      {/* ==================================================== */}
      {step === 3 && (
        <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30">
                Bước 3: Xếp hình câu Lego
              </span>
              <p className="text-xs text-slate-400 mt-1">
                Bấm vào các khối từ bên dưới để lắp ghép thành câu hoàn chỉnh
              </p>
            </div>

            {/* 3 Mandatory Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleHintNextWord}
                className="px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-xs font-bold text-amber-300 flex items-center gap-1.5 transition"
                title="Tự động điền 1 từ đúng tiếp theo"
              >
                <Lightbulb className="w-3.5 h-3.5" /> Gợi ý từ tiếp
              </button>

              <button
                onClick={handleResetLego}
                className="px-3 py-1.5 rounded-xl bg-[#0B0F17] hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 flex items-center gap-1.5 transition"
                title="Xóa câu trả lời để xếp lại từ đầu"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Xếp lại
              </button>
            </div>
          </div>

          {/* Câu mẫu tiếng Việt gợi ý */}
          <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-slate-800 text-xs text-slate-300">
            <strong>Nghĩa câu:</strong> {currentCard.exampleVi || currentCard.example}
          </div>

          {/* Khung câu trả lời phía trên (Bấm vào từ để trả về khay dưới) */}
          <div
            className={`min-h-[90px] p-4 rounded-2xl border-2 border-dashed transition flex flex-wrap items-center gap-2 ${
              legoStatus === 'correct'
                ? 'border-emerald-500 bg-emerald-950/20'
                : legoStatus === 'wrong'
                ? 'border-rose-500 bg-rose-950/20'
                : 'border-indigo-500/40 bg-[#0B0F17]'
            }`}
          >
            {legoAnswer.length === 0 ? (
              <span className="text-xs text-slate-500 italic">
                Bấm vào các khối từ ở khay bên dưới để ghép lên đây...
              </span>
            ) : (
              legoAnswer.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleReturnToPool(item)}
                  className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-rose-600 text-white font-bold text-xs shadow-md transition transform hover:scale-95"
                  title="Bấm để trả lại khay dưới"
                >
                  {item.w}
                </button>
              ))
            )}
          </div>

          {/* Khay từ vựng bên dưới (Bấm để đưa lên trên) */}
          <div className="space-y-2">
            <span className="text-xs text-slate-400 font-semibold">Khay từ ngữ (Xáo trộn ngẫu nhiên):</span>
            <div className="flex flex-wrap items-center gap-2 min-h-[50px]">
              {legoPool.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMoveToAnswer(item)}
                  className="px-3.5 py-2 rounded-xl bg-[#0B0F17] hover:bg-indigo-600 border border-slate-700 hover:border-indigo-500 text-slate-200 hover:text-white font-bold text-xs shadow transition transform hover:-translate-y-0.5"
                >
                  {item.w}
                </button>
              ))}
            </div>
          </div>

          {/* Nút Kiểm tra câu & Chuyển sang Bước 4 */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            {legoStatus === 'wrong' && (
              <span className="text-xs text-rose-400 font-bold flex items-center gap-1">
                <XCircle className="w-4 h-4" /> Thứ tự câu chưa đúng, hãy bấm "Gợi ý" hoặc xếp lại!
              </span>
            )}
            {legoStatus === 'correct' && (
              <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Xuất sắc! Câu đã ghép chính xác 100%.
              </span>
            )}
            {legoStatus === null && <span />}

            <div className="flex items-center gap-3">
              <button
                onClick={handleCheckLego}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition"
              >
                ✓ Kiểm tra câu
              </button>

              {legoStatus === 'correct' && (
                <button
                  onClick={() => changeStep(4)}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition"
                >
                  <span>Tiếp tục: Bước 4 (Nghe & Gõ từ) →</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* BƯỚC 4: NGHE GÕ TỪ (DICTATION) & ĐÁNH GIÁ TRÍ NHỚ SRS */}
      {/* ==================================================== */}
      {step === 4 && (
        <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30">
              Bước 4: Nghe gõ chính tả & Đánh giá SRS
            </span>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => onSpeak && onSpeak(currentCard.word, 1.0)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-md transition"
              >
                <Volume2 className="w-4 h-4" /> Nghe lại từ (Phím 1)
              </button>
              <button
                onClick={() => onSpeak && onSpeak(currentCard.word, 0.75)}
                className="px-3.5 py-2 rounded-xl bg-[#0B0F17] hover:bg-slate-800 border border-slate-700 text-slate-300 font-bold text-xs transition"
              >
                🐢 0.75x
              </button>
            </div>
            <p className="text-xs text-slate-300">
              Nghĩa tiếng Việt: <strong className="text-amber-300">{currentCard.meaning}</strong>
            </p>
          </div>

          {/* Form gõ từ */}
          <form onSubmit={handleCheckDictation} className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <label className="font-semibold text-slate-300">Gõ chính xác từ tiếng Anh vừa nghe:</label>
                <button
                  type="button"
                  onClick={handleHintChar}
                  className="px-2.5 py-1 rounded-xl bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 text-indigo-300 hover:text-indigo-200 flex items-center gap-1 font-semibold transition"
                  title="Gợi ý chữ cái (Nhấn Tab hoặc Alt+H)"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Gợi ý chữ cái ({revealedCharsCount}/{currentCard.word.length})</span>
                </button>
              </div>

              <input
                ref={inputRef}
                type="text"
                value={dictationInput}
                onChange={(e) => {
                  setDictationInput(e.target.value);
                  setDictationChecked(false);
                }}
                disabled={dictationPassed}
                placeholder={
                  revealedCharsCount > 0
                    ? `Bắt đầu bằng: "${currentCard.word.slice(0, revealedCharsCount)}..."`
                    : 'Nhập từ tiếng Anh...'
                }
                className="w-full px-4 py-3 rounded-2xl bg-[#0B0F17] border border-slate-700 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition font-mono tracking-wide"
              />

              {/* Masked Collocation / Context Hint Toggle */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowCollocationHint((v) => !v)}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-amber-500/10 border border-amber-500/25 transition"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>
                    {showCollocationHint
                      ? 'Ẩn gợi ý cụm từ'
                      : `Xem gợi ý nghĩa & cụm từ đi kèm (Ẩn từ chính: ${
                          currentCard.chunk
                            ? `"${currentCard.chunk.replace(new RegExp(currentCard.word, 'gi'), '_____')}"`
                            : '_____'
                        })`}
                  </span>
                </button>

                {showCollocationHint && (
                  <div className="mt-2 p-3.5 rounded-2xl bg-[#0B0F17] border border-amber-500/30 text-xs text-slate-300 space-y-1.5 animate-fade-in">
                    {currentCard.chunk && (
                      <p>
                        <strong className="text-amber-400">Cụm từ (Collocation):</strong>{' '}
                        <span className="font-semibold text-white">
                          {currentCard.chunk.replace(new RegExp(currentCard.word, 'gi'), '_____')}
                        </span>
                      </p>
                    )}
                    {currentCard.example && (
                      <p>
                        <strong className="text-indigo-400">Ngữ cảnh:</strong>{' '}
                        <span className="italic text-slate-300">
                          {currentCard.example.replace(new RegExp(currentCard.word, 'gi'), '_____')}
                        </span>
                      </p>
                    )}
                    {currentCard.mnemonic && (
                      <p className="text-amber-300/90 pt-0.5">
                        <strong className="text-amber-400">Gợi ý:</strong> {currentCard.mnemonic.replace(/^[💡\s]+/, '')}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Character-by-character Visual Diff (SO KHỚP TỪNG KÝ TỰ) */}
            <div className="p-4 rounded-2xl bg-[#0B0F17] border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  So khớp từng ký tự ({dictationInput.length}/{currentCard.word.length}):
                </span>
                {dictationChecked && !dictationPassed && (
                  <span className="text-[11px] font-bold text-rose-400">
                    Chính tả chưa đúng, hãy xem các ô đỏ bên dưới!
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-1.5 font-mono text-sm">
                {currentCard.word.split('').map((char, idx) => {
                  const userChar = dictationInput[idx];
                  const isHinted = idx < revealedCharsCount;
                  const isTyped = userChar !== undefined && userChar !== '';
                  const isMatch = isTyped && userChar.toLowerCase() === char.toLowerCase();
                  const isWrong = isTyped && !isMatch;

                  return (
                    <div
                      key={idx}
                      className={`relative w-8 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all ${
                        isMatch || isHinted
                          ? 'bg-emerald-500/20 border-2 border-emerald-500 text-emerald-300 shadow-sm shadow-emerald-500/10'
                          : isWrong
                          ? 'bg-rose-500/20 border-2 border-rose-500 text-rose-300 shadow-sm shadow-rose-500/10'
                          : 'bg-slate-900/60 border border-slate-700 text-slate-500'
                      }`}
                    >
                      {isWrong ? (
                        <>
                          <span className="text-xs text-rose-300">{userChar}</span>
                          <span className="absolute top-0.5 right-1 text-[8px] text-slate-400 font-mono">
                            {char}
                          </span>
                        </>
                      ) : isMatch || isHinted ? (
                        <span>{isHinted ? char : userChar}</span>
                      ) : (
                        <span className="text-slate-600">_</span>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="text-[11px] text-slate-400">
                Từ đúng có <strong>{currentCard.word.length}</strong> chữ cái. Nhấn <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">Tab</kbd> hoặc <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">Alt+H</kbd> để nhận gợi ý từng chữ!
              </p>
            </div>

            {!dictationPassed && (
              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition"
              >
                Kiểm tra chính tả (Nhấn Enter)
              </button>
            )}
          </form>

          {/* 4 NÚT ĐÁNH GIÁ TRÍ NHỚ SRS (CHỈ HIỆN KHI ĐÃ ĐÚNG 100%) */}
          {dictationPassed && (
            <div className="p-5 rounded-3xl bg-[#0B0F17] border border-emerald-500/40 space-y-4 animate-fade-in">
              <div className="text-center space-y-1">
                <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Tuyệt vời! Bạn đã gõ đúng 100% từ "{currentCard.word}"!</span>
                </div>
                <p className="text-xs text-slate-400">
                  Hãy đánh giá mức độ ghi nhớ của bạn để lưu lịch ôn tập SRS:
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <button
                  onClick={() => handleRateSRS(1, 0)}
                  className="p-3 rounded-2xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 flex flex-col items-center transition"
                >
                  <span className="text-xs font-bold">Quên / Khó nhớ</span>
                  <span className="text-[10px] text-rose-400/80 mt-0.5">Ôn lại sau 10p</span>
                </button>

                <button
                  onClick={() => handleRateSRS(2, 1)}
                  className="p-3 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 flex flex-col items-center transition"
                >
                  <span className="text-xs font-bold">Còn ngập ngừng</span>
                  <span className="text-[10px] text-amber-400/80 mt-0.5">Ôn lại sau 1 ngày</span>
                </button>

                <button
                  onClick={() => handleRateSRS(3, 4)}
                  className="p-3 rounded-2xl bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/30 text-blue-300 flex flex-col items-center transition"
                >
                  <span className="text-xs font-bold">Nhớ tốt</span>
                  <span className="text-[10px] text-blue-400/80 mt-0.5">Ôn lại sau 4 ngày</span>
                </button>

                <button
                  onClick={() => handleRateSRS(4, 14)}
                  className="p-3 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 flex flex-col items-center transition"
                >
                  <span className="text-xs font-bold">Thuộc làu</span>
                  <span className="text-[10px] text-emerald-400/80 mt-0.5">Ôn lại sau 14 ngày</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
