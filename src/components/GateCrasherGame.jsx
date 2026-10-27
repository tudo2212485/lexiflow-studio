import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  X,
  Volume2,
  Heart,
  Zap,
  Flame,
  Trophy,
  RotateCcw,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Shield,
  AlertTriangle
} from 'lucide-react';

export default function GateCrasherGame({
  isOpen,
  onClose,
  subdeck,
  onSpeak,
  onAwardXP,
  onStartReviewWrong
}) {
  const cards = useMemo(() => subdeck?.cards || [], [subdeck]);

  // Game States
  const [gameState, setGameState] = useState('ready'); // 'ready' | 'playing' | 'gameover' | 'victory'
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [playerLane, setPlayerLane] = useState(0); // 0: Left | 1: Right
  const [hearts, setHearts] = useState(3);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [crashedCount, setCrashedCount] = useState(0);
  const [wrongWords, setWrongWords] = useState([]);

  // Timer & Gate Animation
  const [timeLeft, setTimeLeft] = useState(5.0);
  const [maxTime, setMaxTime] = useState(5.0);
  const [isExploding, setIsExploding] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // High score from localStorage
  const highScoreKey = `lexiflow_gatecrasher_highscore_${subdeck.id}`;
  const [highScore, setHighScore] = useState(() => {
    try {
      return Number(localStorage.getItem(highScoreKey)) || 0;
    } catch {
      return 0;
    }
  });

  const timerRef = useRef(null);

  // Shuffled sequence of cards
  const [gameQueue, setGameQueue] = useState([]);

  const initGame = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setGameQueue(shuffled);
    setCurrentCardIndex(0);
    setPlayerLane(0);
    setHearts(3);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setCrashedCount(0);
    setWrongWords([]);
    setGameState('playing');
    setTimeLeft(5.0);
    setMaxTime(5.0);
    setIsExploding(false);
    setIsShaking(false);
    setShowExplanation(false);
  };

  const currentCard = gameQueue[currentCardIndex] || gameQueue[0];

  // Distractors for 2-Choice Gates
  const gateOptions = useMemo(() => {
    if (!currentCard) return { left: '', right: '', correctLane: 0 };

    // Find distractor from other cards
    const otherCards = cards.filter((c) => c.word !== currentCard.word && c.meaning);
    const randomDistractor = otherCards.length > 0
      ? otherCards[Math.floor(Math.random() * otherCards.length)].meaning
      : 'Ý nghĩa không chính xác';

    const correctLane = Math.random() > 0.5 ? 1 : 0; // 0: Left | 1: Right

    return {
      left: correctLane === 0 ? currentCard.meaning : randomDistractor,
      right: correctLane === 1 ? currentCard.meaning : randomDistractor,
      correctLane
    };
  }, [currentCard, cards]);

  // Auto-speak word on new card
  useEffect(() => {
    if (gameState === 'playing' && currentCard && onSpeak) {
      onSpeak(currentCard.word, 1.0);
    }
  }, [currentCardIndex, gameState]);

  // Main countdown tick
  useEffect(() => {
    if (gameState !== 'playing' || isExploding || showExplanation) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0.1) {
          clearInterval(timerRef.current);
          handleResolveCollision(true); // timed out!
          return 0;
        }
        return Number((prev - 0.1).toFixed(1));
      });
    }, 100);

    return () => clearInterval(timerRef.current);
  }, [gameState, isExploding, showExplanation, currentCardIndex]);

  // Keyboard navigation listener (Left / Right / A / D)
  useEffect(() => {
    if (gameState !== 'playing' || isExploding || showExplanation) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        setPlayerLane(0);
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        setPlayerLane(1);
      } else if (e.key === 'Enter' || e.code === 'Space') {
        e.preventDefault();
        handleResolveCollision(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, playerLane, gateOptions, isExploding, showExplanation]);

  // Collision resolution
  const handleResolveCollision = (isTimeout = false) => {
    if (isExploding || showExplanation) return;

    const isCorrect = !isTimeout && playerLane === gateOptions.correctLane;

    if (isCorrect) {
      // SUCCESS CRASH
      setIsExploding(true);
      const nextCombo = combo + 1;
      setCombo(nextCombo);
      setMaxCombo((prev) => Math.max(prev, nextCombo));
      setCrashedCount((prev) => prev + 1);

      const multiplier = nextCombo >= 5 ? 3 : nextCombo >= 3 ? 2 : 1;
      const points = 10 * multiplier;
      setScore((prev) => prev + points);

      if (onAwardXP) onAwardXP(points, `Phá cổng thành công từ "${currentCard.word}"!`);

      // Time decreases with higher combo (down to 3.0s for adrenaline rush)
      const nextMaxTime = Math.max(3.0, 5.0 - nextCombo * 0.3);
      setMaxTime(nextMaxTime);

      setTimeout(() => {
        setIsExploding(false);
        advanceToNextCard();
      }, 700);
    } else {
      // WRONG / CRASH FAILURE
      setIsShaking(true);
      setShowExplanation(true);
      setCombo(0);
      setMaxTime(5.0);

      const nextHearts = hearts - 1;
      setHearts(nextHearts);

      setWrongWords((prev) => {
        if (!prev.find((w) => w.id === currentCard.id)) {
          return [...prev, currentCard];
        }
        return prev;
      });

      setTimeout(() => {
        setIsShaking(false);
        setShowExplanation(false);

        if (nextHearts <= 0) {
          endGame('gameover');
        } else {
          advanceToNextCard();
        }
      }, 1600);
    }
  };

  const advanceToNextCard = () => {
    if (currentCardIndex + 1 < gameQueue.length) {
      setCurrentCardIndex((prev) => prev + 1);
      setTimeLeft(maxTime);
    } else {
      endGame('victory');
    }
  };

  const endGame = (finalState) => {
    setGameState(finalState);
    if (score > highScore) {
      setHighScore(score);
      try {
        localStorage.setItem(highScoreKey, String(score));
      } catch {}
    }
  };

  if (!isOpen || !subdeck) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
      <div
        className={`relative w-full max-w-2xl bg-[#0B0F17] border border-cyan-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] ${
          isShaking ? 'animate-shake ring-4 ring-rose-500' : ''
        }`}
      >
        {/* ========================================================= */}
        {/* SCREEN 1: READY / INTRO SCREEN                            */}
        {/* ========================================================= */}
        {gameState === 'ready' && (
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-extrabold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                Mini-Game Phản Xạ Cực Nhanh
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 flex items-center justify-center text-4xl shadow-xl shadow-cyan-500/20">
                🚀
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Đấu Trường Vượt Chướng Ngại Vật
              </h2>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Chủ đề: <strong className="text-cyan-300">{subdeck.title}</strong>
              </p>
            </div>

            {/* Rules Overview */}
            <div className="p-4 rounded-2xl bg-[#131B2E] border border-slate-800 text-left space-y-2.5 text-xs text-slate-300">
              <p className="font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Luật chơi cực đơn giản & cuốn hút:
              </p>
              <ul className="space-y-1.5 text-slate-400 pl-4 list-disc">
                <li>
                  Phi thuyền đang lao nhanh về phía <strong className="text-white">2 Cổng (Trái / Phải)</strong>.
                </li>
                <li>
                  Quan sát từ tiếng Anh hiển thị và chọn nhanh cổng chứa <strong className="text-emerald-300">Nghĩa ĐÚNG</strong> trước khi hết giờ.
                </li>
                <li>
                  Điều khiển: Phím <kbd className="px-1.5 py-0.5 rounded bg-slate-800 font-mono text-slate-200">←</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-slate-800 font-mono text-slate-200">→</kbd> hoặc <strong className="text-cyan-300">Chạm trực tiếp vào Cổng</strong> trên màn hình cảm ứng.
                </li>
                <li>
                  Húc đúng cổng: <strong className="text-emerald-400">+10 XP x Combo</strong>. Húc sai: mất <strong className="text-rose-400">1 Tim ❤️</strong> (có tổng cộng 3 Tim).
                </li>
              </ul>
            </div>

            {/* High Score Badge */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-amber-400">
              <Trophy className="w-4 h-4" />
              <span>Kỷ lục cao nhất của bạn: <strong>{highScore} điểm</strong></span>
            </div>

            {/* Start Button */}
            <button
              onClick={initGame}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white font-black text-sm shadow-xl shadow-cyan-600/30 flex items-center justify-center gap-2 transition transform hover:scale-[1.01] active:scale-95"
            >
              <span>Vào Đua Ngay (Start Game) →</span>
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* SCREEN 2: ACTIVE GAMEPLAY ARENA                           */}
        {/* ========================================================= */}
        {gameState === 'playing' && (
          <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 space-y-4 select-none">
            {/* Top Bar: Hearts, Score, Combo, Exit */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((h) => (
                  <Heart
                    key={h}
                    className={`w-5 h-5 transition-transform ${
                      h <= hearts
                        ? 'fill-rose-500 text-rose-500 scale-100'
                        : 'fill-slate-800 text-slate-700 scale-90'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3 font-mono text-xs font-bold">
                {combo >= 2 && (
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    <span>COMBO x{combo >= 5 ? 3 : 2}</span>
                  </span>
                )}
                <span className="text-slate-400">
                  Điểm: <strong className="text-white text-base">{score}</strong>
                </span>
                <span className="text-cyan-400">
                  #{currentCardIndex + 1}/{gameQueue.length}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Target Word & Pronunciation Challenge Header */}
            <div className="text-center space-y-1 p-3 rounded-2xl bg-[#131B2E] border border-cyan-500/30 shadow-inner">
              <div className="flex items-center justify-center gap-2">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                  {currentCard.word}
                </h3>
                <button
                  onClick={() => onSpeak && onSpeak(currentCard.word, 1.0)}
                  className="p-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white shadow"
                  title="Nghe phát âm"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs font-mono text-cyan-300">{currentCard.ipa}</p>
              {currentCard.chunk && (
                <p className="text-[11px] text-amber-300 font-semibold truncate">
                  Cụm từ: "{currentCard.chunk}"
                </p>
              )}
            </div>

            {/* Countdown Speed Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400">
                <span>RÀO CHẮN ĐANG LAO ĐẾN!</span>
                <span className={timeLeft <= 1.5 ? 'text-rose-400 animate-pulse' : 'text-cyan-400'}>
                  {timeLeft}s
                </span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-100 ease-linear ${
                    timeLeft <= 1.5 ? 'bg-rose-500' : 'bg-gradient-to-r from-cyan-500 to-indigo-500'
                  }`}
                  style={{ width: `${(timeLeft / maxTime) * 100}%` }}
                />
              </div>
            </div>

            {/* 3D PERSPECTIVE RUNNER RUNWAY (2 LANES WITH GATES) */}
            <div className="relative h-56 sm:h-64 rounded-3xl bg-gradient-to-b from-slate-950 via-[#0A0E1A] to-[#0F172A] border-2 border-slate-800 overflow-hidden flex flex-col justify-between p-3 shadow-2xl">
              {/* Neon Grid Runway Perspective Lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute inset-y-0 left-1/2 w-0.5 bg-dashed border-r border-cyan-500/30" />

              {/* 2 APPROACHING GATES (OBSTACLE WALL) */}
              <div className="grid grid-cols-2 gap-3 relative z-10 pt-2">
                {/* Gate Left (A) */}
                <button
                  onClick={() => {
                    setPlayerLane(0);
                    handleResolveCollision(false);
                  }}
                  className={`p-3 sm:p-4 rounded-2xl border-2 text-left transition-all duration-200 transform ${
                    playerLane === 0
                      ? 'ring-4 ring-cyan-400 scale-[1.02]'
                      : 'opacity-85 hover:opacity-100'
                  } ${
                    isExploding && gateOptions.correctLane === 0
                      ? 'bg-emerald-500 border-emerald-300 text-white animate-bounce'
                      : showExplanation && gateOptions.correctLane === 0
                      ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200'
                      : showExplanation && playerLane === 0
                      ? 'bg-rose-950/60 border-rose-500 text-rose-200'
                      : 'bg-[#131B2E]/90 border-cyan-500/40 text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono font-black text-cyan-400 uppercase">
                    <span>CỔNG A (TRÁI)</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-900/80">Phím A / ←</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-white mt-1.5 line-clamp-2">
                    {gateOptions.left}
                  </p>
                </button>

                {/* Gate Right (B) */}
                <button
                  onClick={() => {
                    setPlayerLane(1);
                    handleResolveCollision(false);
                  }}
                  className={`p-3 sm:p-4 rounded-2xl border-2 text-left transition-all duration-200 transform ${
                    playerLane === 1
                      ? 'ring-4 ring-cyan-400 scale-[1.02]'
                      : 'opacity-85 hover:opacity-100'
                  } ${
                    isExploding && gateOptions.correctLane === 1
                      ? 'bg-emerald-500 border-emerald-300 text-white animate-bounce'
                      : showExplanation && gateOptions.correctLane === 1
                      ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200'
                      : showExplanation && playerLane === 1
                      ? 'bg-rose-950/60 border-rose-500 text-rose-200'
                      : 'bg-[#131B2E]/90 border-cyan-500/40 text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono font-black text-cyan-400 uppercase">
                    <span>CỔNG B (PHẢI)</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-900/80">Phím D / →</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-white mt-1.5 line-clamp-2">
                    {gateOptions.right}
                  </p>
                </button>
              </div>

              {/* Instant Failure Correction Flash */}
              {showExplanation && (
                <div className="p-2.5 rounded-xl bg-rose-950/80 border border-rose-500 text-center text-xs text-rose-200 font-bold z-20 animate-fade-in">
                  Va vào rào chắn! Nghĩa đúng: <span className="text-emerald-300 font-extrabold">{currentCard.meaning}</span>
                </div>
              )}

              {/* Exploding Success Particles */}
              {isExploding && (
                <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500 text-center text-xs text-emerald-200 font-bold z-20 animate-bounce">
                  💥 HÚC VỠ CỔNG! +{10 * (combo >= 5 ? 3 : combo >= 3 ? 2 : 1)} XP!
                </div>
              )}

              {/* PLAYER SPACESHIP / RUNNER AVATAR */}
              <div className="relative z-10 grid grid-cols-2 gap-3 pt-2">
                <div className="flex justify-center">
                  {playerLane === 0 && (
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-2xl shadow-xl shadow-cyan-500/40 transform transition-transform animate-pulse">
                      🚀
                    </div>
                  )}
                </div>

                <div className="flex justify-center">
                  {playerLane === 1 && (
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-2xl shadow-xl shadow-cyan-500/40 transform transition-transform animate-pulse">
                      🚀
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Touch Controls for Mobile */}
            <div className="grid grid-cols-2 gap-2 pt-1 md:hidden">
              <button
                onClick={() => {
                  setPlayerLane(0);
                  handleResolveCollision(false);
                }}
                className={`py-3 rounded-2xl border font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition ${
                  playerLane === 0 ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>CHỌN CỔNG TRÁI</span>
              </button>

              <button
                onClick={() => {
                  setPlayerLane(1);
                  handleResolveCollision(false);
                }}
                className={`py-3 rounded-2xl border font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition ${
                  playerLane === 1 ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}
              >
                <span>CHỌN CỔNG PHẢI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* SCREEN 3: GAME OVER / VICTORY SUMMARY                     */}
        {/* ========================================================= */}
        {(gameState === 'gameover' || gameState === 'victory') && (
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-tr from-cyan-500 to-fuchsia-600 flex items-center justify-center text-3xl shadow-xl">
              {gameState === 'victory' ? '🏆' : '💥'}
            </div>

            <div className="space-y-1">
              <span
                className={`text-[10px] font-extrabold uppercase px-3 py-1 rounded-full border ${
                  gameState === 'victory'
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    : 'bg-rose-500/20 text-rose-400 border-rose-500/30'
                }`}
              >
                {gameState === 'victory' ? 'Hoàn Thành Chặng Đua' : 'Hết Tim - Dừng Chặng Đua'}
              </span>
              <h2 className="text-2xl font-black text-white">
                {gameState === 'victory' ? 'Chiến Thắng Tuyệt Vời!' : 'Bạn Đã Nỗ Lực Rất Tốt!'}
              </h2>
              <p className="text-xs text-slate-400">
                Chủ đề: <strong className="text-white">{subdeck.title}</strong>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#131B2E] border border-slate-800">
                <p className="text-[10px] text-slate-400 font-medium">Tổng điểm</p>
                <p className="text-lg font-black text-cyan-300 mt-0.5">{score}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#131B2E] border border-slate-800">
                <p className="text-[10px] text-slate-400 font-medium">Cổng đã phá</p>
                <p className="text-lg font-black text-emerald-400 mt-0.5">{crashedCount}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#131B2E] border border-slate-800">
                <p className="text-[10px] text-slate-400 font-medium">Combo kỷ lục</p>
                <p className="text-lg font-black text-amber-400 mt-0.5">x{maxCombo}</p>
              </div>
            </div>

            {/* Missed Words List */}
            {wrongWords.length > 0 && (
              <div className="p-4 rounded-2xl bg-[#131B2E] border border-rose-500/30 text-left space-y-2">
                <p className="text-xs font-bold text-rose-300">
                  Các từ cần ôn lại ({wrongWords.length} từ):
                </p>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                  {wrongWords.map((w) => (
                    <span
                      key={w.id}
                      className="px-2 py-0.5 rounded bg-slate-900 text-[11px] font-mono text-slate-300 border border-slate-800"
                    >
                      {w.word}: {w.meaning}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={initGame}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg transition"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Chơi lại màn này</span>
              </button>

              {wrongWords.length > 0 && onStartReviewWrong && (
                <button
                  onClick={() => {
                    onClose();
                    onStartReviewWrong(wrongWords);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-black text-xs flex items-center justify-center gap-2 transition"
                >
                  <span>Ôn {wrongWords.length} từ sai này</span>
                </button>
              )}

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs"
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
