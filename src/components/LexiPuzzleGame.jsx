import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  X,
  Volume2,
  Sparkles,
  Zap,
  RotateCcw,
  Trophy,
  CheckCircle2,
  Lightbulb,
  Award,
  Key,
  Layers,
  ChevronRight,
  Flame
} from 'lucide-react';

export default function LexiPuzzleGame({
  isOpen,
  onClose,
  subdeck,
  onSpeak,
  onAwardXP,
  onUpdateCardSRS
}) {
  const [activeTab, setActiveTab] = useState('neural_link'); // 'neural_link' | 'cryptogram'
  const cards = useMemo(() => subdeck?.cards || [], [subdeck]);

  // =========================================================================
  // MODE 2A: NEURAL LINK MATCHING PUZZLE (12 CARDS: 6 EN WORDS + 6 VI MEANINGS)
  // =========================================================================
  const [waveIndex, setWaveIndex] = useState(0);
  const [linkCards, setLinkCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]); // [cardObj, cardObj]
  const [matchedIds, setMatchedIds] = useState(new Set());
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [waveFinished, setWaveFinished] = useState(false);
  const [waveRank, setWaveRank] = useState(null); // 'S' | 'A' | 'B'
  const timerRef = useRef(null);

  const initNeuralWave = (wave = 0) => {
    setWaveIndex(wave);
    setWaveFinished(false);
    setWaveRank(null);
    setSelectedCards([]);
    setMatchedIds(new Set());
    setTimerSeconds(0);
    setIsTimerRunning(true);

    const startIdx = (wave * 6) % Math.max(1, cards.length);
    let sample = cards.slice(startIdx, startIdx + 6);
    if (sample.length < 6) {
      sample = [...sample, ...cards.slice(0, 6 - sample.length)];
    }

    // Build 12 tiles: 6 English + 6 Vietnamese
    const tiles = [];
    sample.forEach((c) => {
      tiles.push({
        tileId: `en-${c.id}`,
        cardId: c.id,
        type: 'en',
        text: c.word,
        sub: c.ipa || '',
        word: c.word
      });
      tiles.push({
        tileId: `vi-${c.id}`,
        cardId: c.id,
        type: 'vi',
        text: c.meaning,
        sub: 'Nghĩa',
        word: c.word
      });
    });

    // Shuffle tiles
    setLinkCards([...tiles].sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    if (activeTab === 'neural_link') {
      initNeuralWave(0);
    }
  }, [activeTab, subdeck]);

  // Timer tick for neural link
  useEffect(() => {
    if (activeTab === 'neural_link' && isTimerRunning && !waveFinished) {
      timerRef.current = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeTab, isTimerRunning, waveFinished]);

  const handleSelectLinkCard = (tile) => {
    if (matchedIds.has(tile.cardId) || selectedCards.find((c) => c.tileId === tile.tileId)) {
      return;
    }

    if (selectedCards.length === 0) {
      setSelectedCards([tile]);
      if (tile.type === 'en' && onSpeak) {
        onSpeak(tile.word, 1.0);
      }
    } else if (selectedCards.length === 1) {
      const first = selectedCards[0];

      // Same card clicked twice
      if (first.tileId === tile.tileId) return;

      setSelectedCards([first, tile]);

      // Check if match
      const isMatch = first.cardId === tile.cardId && first.type !== tile.type;

      if (isMatch) {
        // MATCH SUCCESS
        if (onSpeak) onSpeak(tile.word, 1.0);
        if (onAwardXP) onAwardXP(5, `Nối đúng từ "${tile.word}"!`);

        const nextMatched = new Set(matchedIds);
        nextMatched.add(tile.cardId);
        setMatchedIds(nextMatched);

        setTimeout(() => {
          setSelectedCards([]);
          // Check if all 6 pairs matched
          if (nextMatched.size >= 6) {
            handleCompleteWave(timerSeconds);
          }
        }, 400);
      } else {
        // MATCH WRONG
        setTimeout(() => {
          setSelectedCards([]);
        }, 700);
      }
    }
  };

  const handleCompleteWave = (secs) => {
    setIsTimerRunning(false);
    setWaveFinished(true);

    let rank = 'B';
    let bonusXP = 15;
    if (secs <= 20) {
      rank = 'S';
      bonusXP = 30;
    } else if (secs <= 35) {
      rank = 'A';
      bonusXP = 20;
    }

    setWaveRank(rank);
    if (onAwardXP) {
      onAwardXP(bonusXP, `Đạt Hạng ${rank} Ma Trận Nối Từ (${secs}s)!`);
    }
  };

  // =========================================================================
  // MODE 2B: CRYPTOGRAM & CROSSWORD CLUE PUZZLE (SCRAMBLED LETTER TILES)
  // =========================================================================
  const [cryptoIndex, setCryptoIndex] = useState(0);
  const [solvedCryptos, setSolvedCryptos] = useState(new Set());
  const [cryptoLettersPlaced, setCryptoLettersPlaced] = useState([]); // array of char or null
  const [scrambledTray, setScrambledTray] = useState([]); // [{ id, char, used }]
  const [cryptoSuccess, setCryptoSuccess] = useState(false);

  const currentCryptoCard = cards[cryptoIndex] || cards[0];
  const targetCleanWord = useMemo(() => {
    if (!currentCryptoCard) return '';
    return currentCryptoCard.word.replace(/[^a-zA-Z]/g, '').toUpperCase();
  }, [currentCryptoCard]);

  const initCryptoForCard = (idx) => {
    setCryptoIndex(idx);
    setCryptoSuccess(false);

    const cCard = cards[idx] || cards[0];
    if (!cCard) return;

    const wordChars = cCard.word.replace(/[^a-zA-Z]/g, '').toUpperCase().split('');
    setCryptoLettersPlaced(new Array(wordChars.length).fill(null));

    // Shuffle letter tiles with unique id
    const tiles = wordChars.map((ch, i) => ({
      id: `${ch}-${i}-${Math.random()}`,
      char: ch,
      used: false
    }));
    setScrambledTray([...tiles].sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    if (activeTab === 'cryptogram' && cards.length > 0) {
      initCryptoForCard(0);
    }
  }, [activeTab, cards]);

  const handlePlaceLetter = (tile) => {
    if (tile.used || cryptoSuccess) return;

    // Find first empty slot
    const emptyIndex = cryptoLettersPlaced.findIndex((s) => s === null);
    if (emptyIndex === -1) return;

    const nextPlaced = [...cryptoLettersPlaced];
    nextPlaced[emptyIndex] = { char: tile.char, tileId: tile.id };
    setCryptoLettersPlaced(nextPlaced);

    // Mark tile as used in tray
    setScrambledTray((prev) =>
      prev.map((t) => (t.id === tile.id ? { ...t, used: true } : t))
    );

    // Check if fully placed & correct
    const userBuiltWord = nextPlaced.map((s) => (s ? s.char : '')).join('');
    if (userBuiltWord === targetCleanWord) {
      handleCryptoWin();
    }
  };

  const handleRemoveLetter = (slotIdx) => {
    if (cryptoSuccess) return;
    const item = cryptoLettersPlaced[slotIdx];
    if (!item) return;

    const nextPlaced = [...cryptoLettersPlaced];
    nextPlaced[slotIdx] = null;
    setCryptoLettersPlaced(nextPlaced);

    // Restore tile in tray
    setScrambledTray((prev) =>
      prev.map((t) => (t.id === item.tileId ? { ...t, used: false } : t))
    );
  };

  const handleRevealOneLetter = () => {
    if (cryptoSuccess) return;

    // Find first unfilled or wrong index
    const firstWrongIdx = cryptoLettersPlaced.findIndex((s, i) => {
      return !s || s.char !== targetCleanWord[i];
    });

    if (firstWrongIdx === -1) return;

    const expectedChar = targetCleanWord[firstWrongIdx];

    // Find available matching tile in tray
    const matchTile = scrambledTray.find((t) => !t.used && t.char === expectedChar);

    if (matchTile) {
      handlePlaceLetter(matchTile);
      if (onAwardXP) onAwardXP(-5, `Dùng gợi ý giải mã từ`);
    }
  };

  const handleCryptoWin = () => {
    setCryptoSuccess(true);
    if (onSpeak) onSpeak(currentCryptoCard.word, 1.0);
    if (onAwardXP) onAwardXP(25, `Giải mã thành công từ "${currentCryptoCard.word}"!`);

    setSolvedCryptos((prev) => new Set([...prev, currentCryptoCard.id]));

    if (onUpdateCardSRS && subdeck?.id) {
      onUpdateCardSRS(
        currentCryptoCard.id,
        {
          status: 'mastered',
          stepCompleted: 4,
          intervalDays: 7,
          lastStudiedAt: Date.now(),
          due: false
        },
        subdeck.id
      );
    }
  };

  if (!isOpen || !subdeck) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0F172A] border border-indigo-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header with 2 Game Tabs */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧩</span>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white">
                Trung Tâm Game Từ Vựng Thông Minh
              </h2>
              <p className="text-[11px] text-slate-400">
                Chủ đề: <strong className="text-indigo-300">{subdeck.title}</strong>
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

        {/* 2 Game Mode Switcher Tabs */}
        <div className="grid grid-cols-2 p-1.5 bg-[#0B0F17] border-b border-slate-800 text-xs font-bold">
          <button
            onClick={() => setActiveTab('neural_link')}
            className={`py-2.5 px-3 rounded-2xl flex items-center justify-center gap-2 transition ${
              activeTab === 'neural_link'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-cyan-300" />
            <span>2A. Nối Mạch Thần Kinh</span>
          </button>

          <button
            onClick={() => setActiveTab('cryptogram')}
            className={`py-2.5 px-3 rounded-2xl flex items-center justify-center gap-2 transition ${
              activeTab === 'cryptogram'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Key className="w-3.5 h-3.5 text-amber-300" />
            <span>2B. Giải Đố Mật Mã</span>
          </button>
        </div>

        {/* ================================================================= */}
        {/* TAB 2A CONTENT: NEURAL LINK MATCHING PUZZLE                      */}
        {/* ================================================================= */}
        {activeTab === 'neural_link' && (
          <div className="p-4 sm:p-6 space-y-4 overflow-y-auto">
            {/* Wave & Timer Bar */}
            <div className="flex items-center justify-between text-xs font-mono font-bold">
              <span className="text-cyan-400 flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                Wave #{waveIndex + 1} (6 cặp từ)
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                ⏱ {timerSeconds}s
              </span>
              <span className="text-emerald-400 font-bold">
                Đã nối: {matchedIds.size}/6 cặp
              </span>
            </div>

            {/* 12-Card Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-2.5">
              {linkCards.map((tile) => {
                const isMatched = matchedIds.has(tile.cardId);
                const isSelected = selectedCards.find((c) => c.tileId === tile.tileId);

                return (
                  <button
                    key={tile.tileId}
                    disabled={isMatched}
                    onClick={() => handleSelectLinkCard(tile)}
                    className={`p-3 rounded-2xl border text-center transition-all min-h-[75px] flex flex-col items-center justify-center relative overflow-hidden ${
                      isMatched
                        ? 'opacity-25 bg-[#0B0F17] border-slate-900 pointer-events-none scale-95'
                        : isSelected
                        ? 'bg-cyan-950/80 border-cyan-400 ring-2 ring-cyan-400 shadow-lg shadow-cyan-500/20 scale-105'
                        : tile.type === 'en'
                        ? 'bg-[#131B2E] border-slate-800 hover:border-cyan-500/40 text-white'
                        : 'bg-[#131B2E] border-slate-800 hover:border-indigo-500/40 text-amber-300'
                    }`}
                  >
                    <p
                      className={`text-xs sm:text-sm font-bold line-clamp-2 ${
                        tile.type === 'en' ? 'font-mono text-cyan-200' : 'text-slate-100'
                      }`}
                    >
                      {tile.text}
                    </p>
                    <span className="text-[9px] font-mono text-slate-500 mt-0.5">
                      {tile.type === 'en' ? 'English' : 'Tiếng Việt'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Wave Completion Modal Box */}
            {waveFinished && (
              <div className="p-5 rounded-3xl bg-[#0B0F17] border border-cyan-500/40 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-500/20 text-cyan-400 text-2xl flex items-center justify-center font-black shadow">
                  {waveRank}
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">
                    Hoàn Thành Wave #{waveIndex + 1}! Hạng {waveRank}!
                  </h3>
                  <p className="text-xs text-slate-400">
                    Thời gian: {timerSeconds}s • Thưởng: +{waveRank === 'S' ? 30 : waveRank === 'A' ? 20 : 15} XP
                  </p>
                </div>
                <div className="flex justify-center gap-2 pt-1">
                  <button
                    onClick={() => initNeuralWave(waveIndex + 1)}
                    className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow transition flex items-center gap-1.5"
                  >
                    <span>Sang Wave #{waveIndex + 2} →</span>
                  </button>
                  <button
                    onClick={() => initNeuralWave(waveIndex)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold"
                  >
                    Chơi lại Wave này
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 2B CONTENT: CRYPTOGRAM & CROSSWORD CLUE PUZZLE                */}
        {/* ================================================================= */}
        {activeTab === 'cryptogram' && (
          <div className="p-4 sm:p-6 space-y-5 overflow-y-auto">
            {/* Clue Header */}
            <div className="p-4 rounded-2xl bg-[#0B0F17] border border-indigo-500/30 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Mật Mã #{cryptoIndex + 1}/{cards.length}
                </span>
                <button
                  onClick={() => onSpeak && onSpeak(currentCryptoCard.word, 1.0)}
                  className="px-2.5 py-1 rounded-lg bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 flex items-center gap-1"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Nghe gợi ý</span>
                </button>
              </div>

              {/* Clue 1: Vietnamese meaning */}
              <p className="text-xs sm:text-sm text-slate-200">
                <strong className="text-emerald-300">Nghĩa:</strong> {currentCryptoCard.meaning}
              </p>

              {/* Clue 2: Fill in the blank sentence */}
              {currentCryptoCard.example && (
                <p className="text-xs text-slate-400 italic">
                  "{currentCryptoCard.example.replace(new RegExp(currentCryptoCard.word, 'gi'), '__________')}"
                </p>
              )}
            </div>

            {/* BLANK LETTER SLOTS (Click placed slot to remove it) */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 py-2">
              {cryptoLettersPlaced.map((slot, idx) => {
                const isCorrect = slot && slot.char === targetCleanWord[idx];
                return (
                  <button
                    key={idx}
                    onClick={() => handleRemoveLetter(idx)}
                    className={`w-9 h-11 sm:w-11 sm:h-12 rounded-xl border-2 font-mono font-black text-base sm:text-lg flex items-center justify-center transition-all ${
                      cryptoSuccess
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-md animate-bounce'
                        : slot
                        ? 'bg-indigo-600/30 border-indigo-500 text-white shadow-sm'
                        : 'bg-[#0B0F17] border-slate-700 text-slate-600'
                    }`}
                  >
                    {slot ? slot.char : '_'}
                  </button>
                );
              })}
            </div>

            {/* SCRAMBLED LETTER TILES TRAY */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Bấm vào chữ cái để điền vào ô trống:</span>
                <button
                  onClick={handleRevealOneLetter}
                  className="px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold flex items-center gap-1 hover:bg-amber-500/25 transition"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Gợi ý 1 chữ (-5 XP)</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {scrambledTray.map((tile) => (
                  <button
                    key={tile.id}
                    disabled={tile.used || cryptoSuccess}
                    onClick={() => handlePlaceLetter(tile)}
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border font-mono font-extrabold text-sm sm:text-base flex items-center justify-center transition transform active:scale-90 ${
                      tile.used
                        ? 'opacity-20 bg-slate-900 border-slate-800 text-slate-600 pointer-events-none'
                        : 'bg-[#131B2E] border-slate-700 hover:border-amber-400 hover:bg-amber-500/20 text-white shadow-md'
                    }`}
                  >
                    {tile.char}
                  </button>
                ))}
              </div>
            </div>

            {/* Success Celebration & Next Button */}
            {cryptoSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Giải mã chính xác: <strong className="text-emerald-300 font-mono">{currentCryptoCard.word}</strong>
                    </h4>
                    <p className="text-[11px] text-emerald-200/80">
                      Đã mở khóa mảnh ghép mật mã • +25 XP
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const nextIdx = (cryptoIndex + 1) % cards.length;
                    initCryptoForCard(nextIdx);
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow flex items-center gap-1.5 shrink-0"
                >
                  <span>Từ tiếp theo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
