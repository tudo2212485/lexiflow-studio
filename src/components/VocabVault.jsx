import React, { useState, useMemo, useEffect } from 'react';
import {
  Layers,
  ArrowLeft,
  Play,
  Zap,
  Headphones,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Volume2,
  Pin,
  Sparkles,
  Eye,
  EyeOff,
  Filter,
  Clock,
  RotateCcw,
  Trophy,
  Star
} from 'lucide-react';
import QuickRecallModal from './QuickRecallModal';
import DictationModal from './DictationModal';
import TopicReviewModal from './TopicReviewModal';
import TopicActionGrid from './TopicActionGrid';
import AICallModal from './AICallModal';
import GateCrasherGame from './GateCrasherGame';
import LexiPuzzleGame from './LexiPuzzleGame';
import GameLauncherModal from './GameLauncherModal';
import InteractiveStoryModal from './InteractiveStoryModal';
import TopicGrammarModal from './TopicGrammarModal';
import TopicSpeakingModal from './TopicSpeakingModal';
import TopicFilterModal from './TopicFilterModal';

// Topic icons mapping
export const SUBDECK_ICONS = {
  1: '👨‍👩‍👧‍👦',
  2: '🍳',
  3: '🎓',
  4: '💼',
  5: '🏥',
  6: '✈️',
  7: '🛒',
  8: '💻',
  9: '⚽',
  10: '🎨',
  11: '🏙️',
  12: '🚗',
  13: '🌿',
  14: '🏦',
  15: '⚖️',
  16: '🔬',
  17: '🎭',
  18: '📚',
  19: '🤝',
  20: '🎯'
};

// Circular Progress Component
export function CircularProgress({ percent = 0, size = 48, strokeWidth = 4, color = '#6366f1' }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-slate-800"
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={percent === 100 ? '#10b981' : color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
          fill="transparent"
        />
      </svg>
      <span className="absolute text-[10px] font-mono font-bold text-white">
        {percent}%
      </span>
    </div>
  );
}

// Helper to compute live accurate metrics for any subdeck
export function getSubdeckMetrics(subdeck) {
  if (!subdeck) {
    return {
      total: 50,
      newCount: 50,
      studied: 0,
      mastered: 0,
      learning: 0,
      due: 0,
      percent: 0,
      nextNewWord: null,
      nextNewWordIndex: 1
    };
  }
  const cards = subdeck.cards || [];
  const total = subdeck.totalWords || cards.length || 50;
  const mastered = cards.filter((c) => c.status === 'mastered').length;
  const learning = cards.filter((c) => c.status === 'learning' || c.status === 'weak').length;
  const studied = mastered + learning;
  const newCount = Math.max(0, total - studied);
  const due = cards.filter(
    (c) =>
      (c.status === 'learning' || c.status === 'weak') &&
      ((c.nextReviewAt && c.nextReviewAt <= Date.now()) || c.due || c.status === 'due')
  ).length;
  const percent = total > 0 ? Math.min(100, Math.round((mastered / total) * 100)) : 0;

  // Find next unlearned word
  let nextNewWord = null;
  let nextNewWordIndex = -1;
  for (let i = 0; i < cards.length; i++) {
    const c = cards[i];
    if (c.status !== 'mastered' && c.status !== 'learning' && c.status !== 'weak') {
      nextNewWord = c;
      nextNewWordIndex = i + 1;
      break;
    }
  }

  return {
    total,
    newCount,
    studied,
    mastered,
    learning,
    due,
    percent,
    nextNewWord,
    nextNewWordIndex
  };
}

export default function VocabVault({
  vocabCourses = [],
  setVocabCourses,
  selectedCourseId: controlledCourseId,
  setSelectedCourseId: setControlledCourseId,
  selectedSubdeckId: controlledSubdeckId,
  setSelectedSubdeckId: setControlledSubdeckId,
  onStartFourStep,
  onSpeak,
  onPinNote,
  onAwardXP,
  onUpdateCardSRS,
  starredCardIds: propStarredCardIds,
  onToggleStar: propOnToggleStar
}) {
  // Navigation state: Level 1 (Course Grid) | Level 2 (Sub-decks List) | Level 3 (Sub-deck Study)
  const [selectedCourseId, setSelectedCourseId] = useState(controlledCourseId || vocabCourses[0]?.id || 'course-1000-common');
  const [selectedSubdeckId, setSelectedSubdeckId] = useState(controlledSubdeckId || null);
  const [level, setLevel] = useState(controlledSubdeckId ? 3 : (controlledCourseId ? 2 : 1));

  // Sync with controlled props
  useEffect(() => {
    if (controlledCourseId) {
      setSelectedCourseId(controlledCourseId);
    }
  }, [controlledCourseId]);

  useEffect(() => {
    if (controlledSubdeckId) {
      setSelectedSubdeckId(controlledSubdeckId);
      setLevel(3);
    }
  }, [controlledSubdeckId]);

  // Sub-deck filter in Level 2
  const [subdeckFilter, setSubdeckFilter] = useState('all'); // 'all' | 'due' | 'learning' | 'mastered'

  // Sub-deck view toggles in Level 3
  const [showWordList, setShowWordList] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'quiz' | 'dictation' | 'topic_review' | 'ai_call' | etc.
  const [filterModalMode, setFilterModalMode] = useState('mix'); // 'mix' | 'filter'

  // Starred / Bookmarked Cards (persisted locally and synced with parent cloud state)
  const [localStarredCardIds, setLocalStarredCardIds] = useState(() => {
    try {
      const raw = localStorage.getItem('lexiflow_starred_words');
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const localHandleToggleStar = (cardId) => {
    setLocalStarredCardIds((prev) => {
      const currentList = Array.isArray(prev) ? prev : [];
      const exists = currentList.includes(cardId);
      const updated = exists ? currentList.filter((id) => id !== cardId) : [...currentList, cardId];
      try {
        localStorage.setItem('lexiflow_starred_words', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const starredCardIds = propStarredCardIds !== undefined ? propStarredCardIds : localStarredCardIds;
  const handleToggleStar = propOnToggleStar || localHandleToggleStar;

  // Current selected course object
  const currentCourse = useMemo(() => {
    return vocabCourses.find((c) => c.id === selectedCourseId) || vocabCourses[0];
  }, [vocabCourses, selectedCourseId]);

  // Current selected subdeck object
  const currentSubdeck = useMemo(() => {
    if (!currentCourse?.subdecks) return null;
    return currentCourse.subdecks.find((s) => s.id === selectedSubdeckId) || currentCourse.subdecks[0];
  }, [currentCourse, selectedSubdeckId]);

  // Filtered subdecks for Level 2 with live metrics
  const filteredSubdecks = useMemo(() => {
    if (!currentCourse?.subdecks) return [];
    if (subdeckFilter === 'all') return currentCourse.subdecks;
    return currentCourse.subdecks.filter((s) => {
      const m = getSubdeckMetrics(s);
      if (subdeckFilter === 'due') return m.due > 0;
      if (subdeckFilter === 'learning') return m.learning > 0;
      if (subdeckFilter === 'mastered') return m.mastered > 0;
      return true;
    });
  }, [currentCourse, subdeckFilter]);

  // ==========================================
  // LEVEL 1: LƯỚI KHÓA TỪ VỰNG TỔNG QUAN (GRID 3 CỘT)
  // ==========================================
  if (level === 1) {
    return (
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Banner Header */}
        <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">📚</span>
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Kho Từ Vựng Toàn Diện (6 Khóa Học)
              </h1>
            </div>
            <p className="text-xs text-slate-400">
              Chọn một khóa học theo mục tiêu để khám phá các bộ thẻ theo chủ đề thực tế.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
            <span>6 Khóa Lộ Trình</span>
            <span>•</span>
            <span>50+ Bộ Thẻ Chủ Đề</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">1.000+ Từ Chuẩn Mẹo Nhớ</span>
          </div>
        </div>

        {/* 3-Column Course Grid (EngMasterAI Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {vocabCourses.map((course) => {
            const allCards = course.subdecks?.flatMap((s) => s.cards || []) || [];
            const totalWords = course.totalWords || allCards.length || 1000;
            const subdeckCount = course.subdecks?.length || 10;
            const masteredCount = allCards.filter((c) => c.status === 'mastered').length;
            const learningCount = allCards.filter((c) => c.status === 'learning').length;
            const studiedCount = masteredCount + learningCount;
            const learnedPercent = totalWords > 0 ? Math.min(100, Math.round((studiedCount / totalWords) * 100)) : 0;
            const masteredPercent = totalWords > 0 ? Math.min(100, Math.round((masteredCount / totalWords) * 100)) : 0;

            return (
              <div
                key={course.id}
                className="rounded-3xl bg-[#131B2E] border border-slate-800/80 hover:border-indigo-500/40 p-6 flex flex-col justify-between transition-all duration-200 shadow-lg group hover:-translate-y-1"
              >
                {/* Top: Center aligned large icon & title */}
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-3xl bg-[#0B0F17] border border-slate-800 flex items-center justify-center text-3xl shadow-inner group-hover:scale-105 transition">
                    {course.icon || '📘'}
                  </div>

                  <div className="space-y-1">
                    <h2 className="text-base font-bold text-white group-hover:text-indigo-300 transition line-clamp-1">
                      {course.title}
                    </h2>
                    <p className="text-xs text-slate-400 line-clamp-2 px-1">
                      {course.desc}
                    </p>
                  </div>

                  {/* Stats Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F17] border border-slate-800 text-[11px] font-mono font-semibold text-indigo-300">
                    <span>{subdeckCount} BỘ TỪ</span>
                    <span>•</span>
                    <span>{totalWords} TỪ VỰNG</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1.5 pt-1 text-left">
                    <div className="flex justify-between text-[11px] font-medium text-slate-400">
                      <span>Đã học: {studiedCount}/{totalWords} ({learnedPercent}%)</span>
                      <span className="text-emerald-400">Thuộc: {masteredCount} ({masteredPercent}%)</span>
                    </div>
                    <div className="w-full bg-[#0B0F17] rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-indigo-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${learnedPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSelectedCourseId(course.id);
                      setLevel(2);
                    }}
                    className="w-full py-3 rounded-2xl bg-[#0B0F17] hover:bg-indigo-600 border border-slate-800 hover:border-indigo-500 text-xs font-bold text-slate-200 hover:text-white transition flex items-center justify-center gap-2 shadow group-hover:bg-indigo-600 group-hover:text-white"
                  >
                    <span>Xem các bộ từ ({subdeckCount})</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ==========================================
  // LEVEL 2: DANH SÁCH CÁC BỘ THẺ CON (OPENQUIZ STYLE)
  // ==========================================
  if (level === 2) {
    const totalWords = currentCourse?.totalWords || currentCourse?.subdecks?.reduce((s, d) => s + (d.cards?.length || 0), 0) || 50;

    return (
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Back navigation */}
        <button
          onClick={() => {
            if (setControlledSubdeckId) setControlledSubdeckId(null);
            setSelectedSubdeckId(null);
            setLevel(1);
          }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#131B2E] border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại danh sách khóa học</span>
        </button>

        {/* Course Header Summary Card */}
        <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#0B0F17] border border-slate-800 flex items-center justify-center text-2xl shrink-0">
                {currentCourse?.icon || '📘'}
              </div>
              <div>
                <h1 className="text-xl font-bold text-white tracking-tight">{currentCourse?.title || 'Khóa từ vựng'}</h1>
                <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{currentCourse?.desc || ''}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold text-indigo-300 px-3 py-1.5 rounded-xl bg-[#0B0F17] border border-slate-800">
                Tổng cộng {totalWords} từ
              </span>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold text-slate-300">
              Các bộ thẻ trong lộ trình ({filteredSubdecks.length} bộ):
            </span>

            <div className="flex items-center gap-1.5 bg-[#0B0F17] p-1 rounded-xl border border-slate-800 text-xs overflow-x-auto no-scrollbar max-w-full">
              {[
                { id: 'all', label: 'Toàn bộ' },
                { id: 'due', label: 'Cần ôn' },
                { id: 'learning', label: 'Đang học' },
                { id: 'mastered', label: 'Đã thuộc' }
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSubdeckFilter(f.id)}
                  className={`px-3 py-1 rounded-lg font-semibold transition shrink-0 ${
                    subdeckFilter === f.id
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid: Sub-decks Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubdecks.map((subdeck) => {
            const metrics = getSubdeckMetrics(subdeck);
            const topicIcon = SUBDECK_ICONS[subdeck.order] || '📘';
            return (
              <div
                key={subdeck.id}
                onClick={() => {
                  setSelectedSubdeckId(subdeck.id);
                  if (setControlledSubdeckId) setControlledSubdeckId(subdeck.id);
                  setLevel(3);
                  setShowWordList(false);
                }}
                className="p-6 rounded-3xl bg-[#131B2E] hover:bg-[#162038] border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-xl hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Top: Icon + Title + Circular Progress */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#0B0F17] border border-slate-800 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition shadow-inner">
                        {topicIcon}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                            #{subdeck.order}
                          </span>
                          <span className="text-[11px] text-slate-400 font-semibold truncate max-w-[120px]">
                            {subdeck.enTitle}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition line-clamp-1 mt-1">
                          {subdeck.title}
                        </h3>
                      </div>
                    </div>

                    <CircularProgress percent={metrics.percent} size={48} />
                  </div>

                  {/* 3 Crisp Status Pills */}
                  <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                    <div className="p-2 rounded-xl bg-[#0B0F17] border border-slate-800">
                      <p className="text-[10px] text-slate-400 font-medium">Chưa học</p>
                      <p className="text-xs font-bold text-slate-200 mt-0.5">{metrics.newCount}</p>
                    </div>
                    <div className="p-2 rounded-xl bg-[#0B0F17] border border-amber-500/20">
                      <p className="text-[10px] text-amber-400 font-medium">Đang ôn</p>
                      <p className="text-xs font-bold text-amber-300 mt-0.5">{metrics.learning}</p>
                    </div>
                    <div className="p-2 rounded-xl bg-[#0B0F17] border border-emerald-500/20">
                      <p className="text-[10px] text-emerald-400 font-medium">Đã thuộc</p>
                      <p className="text-xs font-bold text-emerald-300 mt-0.5">{metrics.mastered}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Action & Status */}
                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400 truncate max-w-[160px]">
                    {metrics.nextNewWord ? (
                      <span>Tiếp: <strong className="text-indigo-300 font-mono">#{metrics.nextNewWordIndex} {metrics.nextNewWord.word}</strong></span>
                    ) : (
                      <span className="text-emerald-400 font-semibold">✓ Đã học hết từ</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-1 transition shrink-0">
                    <span>{metrics.studied > 0 ? 'Học tiếp' : 'Vào học'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ==========================================
  // LEVEL 3: MÀN HÌNH HỌC & KIỂM TRA BỘ THẺ ĐÃ CHỌN
  // ==========================================
  if (level === 3 && currentSubdeck) {
    const currentMetrics = getSubdeckMetrics(currentSubdeck);

    return (
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Back navigation */}
        <button
          onClick={() => {
            if (setControlledSubdeckId) setControlledSubdeckId(null);
            setSelectedSubdeckId(null);
            setLevel(2);
          }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#131B2E] border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Trở lại danh sách bộ thẻ ({currentCourse?.shortTitle || currentCourse?.title || ''})</span>
        </button>

        {/* Selected Deck Header */}
        <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-[#0B0F17] border border-slate-800 flex items-center justify-center text-3xl shrink-0 shadow-inner">
                {SUBDECK_ICONS[currentSubdeck.order] || '📘'}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    Bộ thẻ #{currentSubdeck.order}
                  </span>
                  <span className="text-xs text-slate-400">• {currentCourse?.shortTitle || currentCourse?.title || ''}</span>
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight mt-1">
                  {currentSubdeck.title}
                </h1>
                <p className="text-xs text-slate-400 mt-0.5">
                  Chủ đề: {currentSubdeck.enTitle} • Tổng cộng {currentMetrics.total} từ vựng kèm mẹo nhớ và câu Lego
                </p>
              </div>
            </div>

            {/* 3 Real Stats Cards with Circular Progress */}
            <div className="flex items-center gap-3">
              <CircularProgress percent={currentMetrics.percent} size={54} strokeWidth={5} />
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                <div className="p-2.5 rounded-2xl bg-[#0B0F17] border border-slate-800 text-center min-w-[80px]">
                  <p className="text-[10px] text-slate-400 font-medium">🆕 Chưa học</p>
                  <p className="text-xs sm:text-sm font-extrabold text-indigo-300 mt-0.5">
                    {currentMetrics.newCount} từ
                  </p>
                </div>
                <div className="p-2.5 rounded-2xl bg-[#0B0F17] border border-amber-500/20 text-center min-w-[80px]">
                  <p className="text-[10px] text-amber-400 font-medium">🟠 Đang ôn</p>
                  <p className="text-xs sm:text-sm font-extrabold text-amber-300 mt-0.5">
                    {currentMetrics.learning} từ
                  </p>
                </div>
                <div className="p-2.5 rounded-2xl bg-[#0B0F17] border border-emerald-500/20 text-center min-w-[80px]">
                  <p className="text-[10px] text-emerald-400 font-medium">🟢 Đã thuộc</p>
                  <p className="text-xs sm:text-sm font-extrabold text-emerald-400 mt-0.5">
                    {currentMetrics.mastered}/{currentMetrics.total}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
            <div className="flex justify-between text-[11px] font-medium text-slate-400">
              <span>Độ hoàn thành chủ đề ({currentMetrics.mastered} thuộc / {currentMetrics.learning} đang ôn)</span>
              <span className="font-mono text-emerald-400 font-bold">{currentMetrics.percent}%</span>
            </div>
            <div className="w-full bg-[#0B0F17] rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 via-amber-500 to-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${Math.max(currentMetrics.percent, currentMetrics.studied > 0 ? 5 : 0)}%` }}
              />
            </div>
          </div>

          {/* MAIN PROMINENT ACTION BUTTON */}
          <div className="pt-2">
            {currentMetrics.newCount > 0 && currentMetrics.nextNewWord ? (
              <button
                onClick={() =>
                  onStartFourStep(currentSubdeck, {
                    mode: 'learn_new',
                    lastWordIndex:
                      currentSubdeck.lastWordIndex !== undefined
                        ? currentSubdeck.lastWordIndex
                        : currentMetrics.nextNewWordIndex
                        ? currentMetrics.nextNewWordIndex - 1
                        : 0,
                    lastStep: currentSubdeck.lastStep || 1
                  })
                }
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-between shadow-xl shadow-indigo-600/30 transition transform hover:-translate-y-0.5 border border-indigo-400/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 shadow">
                    <Play className="w-5 h-5 fill-white text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                      ▶ Học tiếp từ mới (Bắt đầu từ #{currentMetrics.nextNewWordIndex}: {currentMetrics.nextNewWord.word})
                    </p>
                    <p className="text-[11px] text-indigo-100/90 font-normal mt-0.5">
                      Còn {currentMetrics.newCount} từ chưa học • Quy trình 4 bước: Flashcard 3D → Trắc nghiệm → Lego → Nghe gõ & SRS
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/10 text-xs font-bold text-white shrink-0">
                  <span>Bắt đầu ngay</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            ) : (
              <button
                onClick={() => onStartFourStep(currentSubdeck, { mode: 'review_due' })}
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center justify-between shadow-xl shadow-emerald-600/30 transition transform hover:-translate-y-0.5 border border-emerald-400/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-extrabold text-sm sm:text-base text-white">
                      🎉 Đã hoàn thành toàn bộ 50 từ! Chuyển sang Ôn tập
                    </p>
                    <p className="text-[11px] text-emerald-100 font-normal mt-0.5">
                      Bạn đã học qua tất cả các từ trong chủ đề này. Bấm để ôn tập củng cố phản xạ!
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/10 text-xs font-bold text-white shrink-0">
                  <span>Ôn tập ngay</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            )}
          </div>

          {/* Card / Nút lớn Tổng Ôn Tập Cả Chủ Đề (50 Từ) */}
          <div className="pt-2">
            <button
              onClick={() => setActiveModal('topic_review')}
              className="w-full p-4 rounded-2xl bg-gradient-to-r from-amber-600/30 via-indigo-600/30 to-purple-600/30 hover:from-amber-600/40 hover:via-indigo-600/40 hover:to-purple-600/40 border-2 border-amber-500/50 text-white flex items-center justify-between shadow-xl shadow-amber-500/10 transition transform hover:-translate-y-0.5 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 text-xl shadow-inner group-hover:scale-110 transition shrink-0">
                  <Trophy className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-sm sm:text-base text-amber-300 tracking-tight">
                      🏆 Tổng Ôn Tập Cả Chủ Đề ({currentMetrics.total} Từ)
                    </span>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      Final Test
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-normal mt-0.5">
                    3 Vòng liên hoàn: Ghép cặp siêu tốc ➔ Điền câu ngữ cảnh ➔ Nghe gõ chính tả (Thưởng +150 XP & Huy hiệu)
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shrink-0 shadow-lg transition">
                <span>Vào Tổng Ôn</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* 4 Secondary Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 pt-2">
            {/* Mode: Review due / learning */}
            <button
              disabled={currentMetrics.learning === 0 && currentMetrics.mastered === 0}
              onClick={() => onStartFourStep(currentSubdeck, { mode: 'review_due' })}
              className="p-3 rounded-2xl bg-[#0B0F17] hover:bg-slate-800 disabled:opacity-40 border border-slate-800 hover:border-amber-500/40 text-left transition flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <RotateCcw className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-200 truncate">Ôn từ cần nhớ</p>
                <p className="text-[10px] text-amber-400/90 font-medium truncate">{currentMetrics.learning} từ đang củng cố</p>
              </div>
            </button>

            {/* Mode: Practice all 50 */}
            <button
              onClick={() => onStartFourStep(currentSubdeck, { mode: 'practice_all' })}
              className="p-3 rounded-2xl bg-[#0B0F17] hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/40 text-left transition flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-200 truncate">Ôn lại toàn bộ</p>
                <p className="text-[10px] text-slate-400 font-medium truncate">Cả 50 từ trong bộ</p>
              </div>
            </button>

            {/* Rapid Quiz */}
            <button
              onClick={() => setActiveModal('quiz')}
              className="p-3 rounded-2xl bg-[#0B0F17] hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 text-left transition flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-200 truncate">Phản xạ 60s</p>
                <p className="text-[10px] text-slate-400 font-medium truncate">Trắc nghiệm nhanh</p>
              </div>
            </button>

            {/* Dictation */}
            <button
              onClick={() => setActiveModal('dictation')}
              className="p-3 rounded-2xl bg-[#0B0F17] hover:bg-slate-800 border border-slate-800 hover:border-blue-500/40 text-left transition flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <Headphones className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-200 truncate">Luyện gõ từ</p>
                <p className="text-[10px] text-slate-400 font-medium truncate">Nghe & chính tả</p>
              </div>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 8-ACTION MULTI-MODE STUDY HUB GRID                       */}
        {/* ======================================================== */}
        <TopicActionGrid
          subdeck={currentSubdeck}
          starredCount={
            starredCardIds.filter((id) =>
              currentSubdeck.cards?.some((c) => c.id === id)
            ).length
          }
          onOpenSmartMix={() => {
            setFilterModalMode('mix');
            setActiveModal('topic_filter');
          }}
          onOpenSpeaking={() => setActiveModal('topic_speaking')}
          onOpenAICall={() => setActiveModal('ai_call')}
          onOpenStory={() => setActiveModal('story')}
          onOpenGrammar={() => setActiveModal('grammar')}
          onOpenDictation={() => setActiveModal('dictation')}
          onOpenGames={() => setActiveModal('game_launcher')}
          onOpenFilter={() => {
            setFilterModalMode('filter');
            setActiveModal('topic_filter');
          }}
        />

        {/* Secondary: Collapsible Quick Reference Word List */}
        <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white">Danh Sách 50 Từ Vựng Trong Bộ Thẻ</h3>
              <p className="text-[11px] text-slate-400">Xem trạng thái học từng từ • Bấm vào bất kỳ từ nào để học/ôn trực tiếp</p>
            </div>
            <button
              onClick={() => setShowWordList((v) => !v)}
              className="px-3.5 py-1.5 rounded-xl bg-[#0B0F17] border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition"
            >
              {showWordList ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showWordList ? 'Thu gọn danh sách' : 'Xem danh sách 50 từ'}</span>
            </button>
          </div>

          {/* Expanded Compact Word List with Status Badges and Direct Study Launcher */}
          {showWordList && (
            <div className="divide-y divide-slate-800/80 pt-2 animate-fade-in">
              {currentSubdeck.cards?.map((card, idx) => {
                const isMastered = card.status === 'mastered';
                const isLearning = card.status === 'learning' || card.status === 'weak';

                return (
                  <div
                    key={card.id || idx}
                    className="py-3 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:bg-[#0B0F17]/60 px-3 rounded-2xl transition group cursor-pointer"
                    onClick={() =>
                      onStartFourStep(currentSubdeck, { mode: 'practice_all', initialCardId: card.id })
                    }
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-xs font-mono text-slate-500 w-6 shrink-0">#{idx + 1}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onSpeak) onSpeak(card.word);
                        }}
                        className="p-1.5 rounded-xl text-slate-400 hover:text-indigo-400 hover:bg-slate-800 transition shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition">
                            {card.word}
                          </span>
                          <span className="text-xs font-mono text-indigo-400">{card.ipa}</span>
                          {/* STATUS BADGE */}
                          {isMastered ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                              ✓ Đã thuộc
                            </span>
                          ) : isLearning ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                              Đang ôn
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-400 border border-slate-700">
                              Chưa học
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-amber-300/90 truncate">{card.meaning}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400 shrink-0 pl-9 md:pl-0">
                      {card.chunk && (
                        <span className="hidden lg:inline text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                          {card.chunk}
                        </span>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleStar(card.id);
                        }}
                        className="p-1.5 rounded-xl text-slate-500 hover:text-amber-400 hover:bg-slate-800 transition"
                        title={
                          starredCardIds.includes(card.id)
                            ? 'Bỏ đánh dấu sao'
                            : 'Gắn ngôi sao từ này'
                        }
                      >
                        <Star
                          className={`w-3.5 h-3.5 ${
                            starredCardIds.includes(card.id)
                              ? 'fill-amber-400 text-amber-400'
                              : ''
                          }`}
                        />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onPinNote) {
                            onPinNote({
                              term: card.word,
                              phonetic: card.ipa,
                              meaning: card.meaning,
                              example: card.example,
                              tag: 'Từ vựng'
                            });
                          }
                        }}
                        className="p-1.5 rounded-xl text-slate-500 hover:text-amber-400 hover:bg-slate-800 transition"
                        title="Ghim vào sổ tay"
                      >
                        <Pin className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onStartFourStep(currentSubdeck, { mode: 'practice_all', initialCardId: card.id });
                        }}
                        className="px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-indigo-600 text-white text-xs font-bold transition flex items-center gap-1"
                      >
                        <span>Học từ này</span>
                        <Play className="w-3 h-3 fill-white" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modals for Quiz / Dictation inside Sub-deck */}
        {activeModal === 'quiz' && (
          <QuickRecallModal
            isOpen={true}
            onClose={() => setActiveModal(null)}
            cards={currentSubdeck?.cards || []}
            onSpeak={onSpeak}
            onAwardXP={onAwardXP}
            onUpdateCardSRS={onUpdateCardSRS}
          />
        )}

        {activeModal === 'dictation' && (
          <DictationModal
            isOpen={true}
            onClose={() => setActiveModal(null)}
            cards={currentSubdeck?.cards || []}
            onSpeak={onSpeak}
            onAwardXP={onAwardXP}
            onUpdateCardSRS={onUpdateCardSRS}
          />
        )}

        {activeModal === 'topic_review' && (
          <TopicReviewModal
            isOpen={true}
            onClose={() => setActiveModal(null)}
            subdeck={currentSubdeck}
            onSpeak={onSpeak}
            onAwardXP={onAwardXP}
            onUpdateCardSRS={onUpdateCardSRS}
            onStartPracticeWrongWords={(failedCards) => {
              setActiveModal(null);
              onStartFourStep(
                {
                  ...(currentSubdeck || {}),
                  title: `${currentSubdeck?.title || 'Chủ đề'} (Ôn ${(failedCards || []).length} từ sai)`,
                  cards: failedCards || []
                },
                { mode: 'practice_all' }
              );
            }}
          />
        )}

        {/* Modal: Contextual AI Voice Call */}
        {activeModal === 'ai_call' && (
          <AICallModal
            isOpen={true}
            onClose={() => setActiveModal(null)}
            subdeck={currentSubdeck}
            starredCardIds={starredCardIds}
            onSpeak={onSpeak}
            onAwardXP={onAwardXP}
            onUpdateCardSRS={onUpdateCardSRS}
          />
        )}

        {/* Modal: Game Launcher (Choose Test / Game) */}
        {activeModal === 'game_launcher' && (
          <GameLauncherModal
            isOpen={true}
            onClose={() => setActiveModal(null)}
            subdeck={currentSubdeck}
            onLaunchTopicReview={() => setActiveModal('topic_review')}
            onLaunchGateCrasher={() => setActiveModal('gate_crasher')}
            onLaunchLexiPuzzle={() => setActiveModal('lexi_puzzle')}
          />
        )}

        {/* Modal: Game 1 - Gate Crasher Runner */}
        {activeModal === 'gate_crasher' && (
          <GateCrasherGame
            isOpen={true}
            onClose={() => setActiveModal(null)}
            subdeck={currentSubdeck}
            onSpeak={onSpeak}
            onAwardXP={onAwardXP}
            onStartReviewWrong={(failedCards) => {
              setActiveModal(null);
              onStartFourStep(
                {
                  ...(currentSubdeck || {}),
                  title: `${currentSubdeck?.title || 'Chủ đề'} (Ôn ${(failedCards || []).length} từ sai Game 1)`,
                  cards: failedCards || []
                },
                { mode: 'practice_all' }
              );
            }}
          />
        )}

        {/* Modal: Game 2 - Lexi Puzzle & Neural Link */}
        {activeModal === 'lexi_puzzle' && (
          <LexiPuzzleGame
            isOpen={true}
            onClose={() => setActiveModal(null)}
            subdeck={currentSubdeck}
            onSpeak={onSpeak}
            onAwardXP={onAwardXP}
            onUpdateCardSRS={onUpdateCardSRS}
          />
        )}

        {/* Modal: Interactive Story (Reading Comprehension) */}
        {activeModal === 'story' && (
          <InteractiveStoryModal
            isOpen={true}
            onClose={() => setActiveModal(null)}
            subdeck={currentSubdeck}
            onSpeak={onSpeak}
            onAwardXP={onAwardXP}
          />
        )}

        {/* Modal: Topic Grammar & Collocations */}
        {activeModal === 'grammar' && (
          <TopicGrammarModal
            isOpen={true}
            onClose={() => setActiveModal(null)}
            subdeck={currentSubdeck}
            onSpeak={onSpeak}
          />
        )}

        {/* Modal: Topic Speaking Trainer */}
        {activeModal === 'topic_speaking' && (
          <TopicSpeakingModal
            isOpen={true}
            onClose={() => setActiveModal(null)}
            subdeck={currentSubdeck}
            onSpeak={onSpeak}
            onAwardXP={onAwardXP}
          />
        )}

        {/* Modal: Topic Filter & Smart Mix */}
        {activeModal === 'topic_filter' && (
          <TopicFilterModal
            isOpen={true}
            onClose={() => setActiveModal(null)}
            subdeck={currentSubdeck}
            starredCardIds={starredCardIds}
            initialMode={filterModalMode}
            onToggleStar={handleToggleStar}
            onStartFilteredStudy={(filteredSubdeck) => {
              onStartFourStep(filteredSubdeck, { mode: 'practice_all' });
            }}
          />
        )}
      </div>
    );
  }

  // Fallback to Level 1 if level is unexpected or currentSubdeck is null
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xl">📚</span>
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Kho Từ Vựng Toàn Diện (6 Khóa Học)
            </h1>
          </div>
          <p className="text-xs text-slate-400">
            Chọn một khóa học theo mục tiêu để khám phá các bộ thẻ theo chủ đề thực tế.
          </p>
        </div>
      </div>
    </div>
  );
}
