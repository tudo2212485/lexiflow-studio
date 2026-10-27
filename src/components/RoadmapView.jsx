import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Play,
  Zap,
  Headphones,
  Brain,
  Clock,
  CheckCircle2,
  ChevronRight,
  Flame,
  Award,
  BookOpen,
  Layers,
  ArrowRight
} from 'lucide-react';
import QuickRecallModal from './QuickRecallModal';
import DictationModal from './DictationModal';
import SRSReviewModal from './SRSReviewModal';

export default function RoadmapView({
  userStats,
  currentUser,
  vocabCourses = [],
  grammarCourses = [],
  roadmapStages = [],
  allCards = [],
  onNavigateTab,
  onStartPracticeDeck,
  onSpeak,
  onPinNote,
  onAwardXP,
  onUpdateCardSRS
}) {
  const [activeModal, setActiveModal] = useState(null); // null | 'recall' | 'dictation' | 'srs'
  const [stageFilter, setStageFilter] = useState('all');

  // Compute 4 memory retention stats from allCards (100% REAL based on user progress)
  const retentionStats = useMemo(() => {
    const total = allCards.length || 0;
    let dueCount = 0;
    let weakCount = 0;
    let learningCount = 0;
    let masteredCount = 0;

    allCards.forEach((c) => {
      // Only count words the user has actually engaged with / studied
      const hasStudied = c.status === 'learning' || c.status === 'mastered' || c.status === 'weak' || (c.stepCompleted && c.stepCompleted > 0);
      if (!hasStudied) return;

      const isDue = Boolean(c.due || (c.nextReviewAt && Number(c.nextReviewAt) <= Date.now()));

      if (c.status === 'mastered') {
        if (isDue) dueCount++;
        else masteredCount++;
      } else if (c.status === 'learning') {
        if (isDue) dueCount++;
        else learningCount++;
      } else if (c.status === 'weak') {
        if (isDue) dueCount++;
      }

      if ((c.wrongCount && c.wrongCount > 0) || c.status === 'weak') {
        weakCount++;
      }
    });

    const totalStudied = learningCount + masteredCount + dueCount;

    return {
      due: dueCount,
      weak: weakCount,
      learning: learningCount,
      mastered: masteredCount,
      total,
      totalStudied
    };
  }, [allCards]);

  // Dynamic stage progress calculated directly from user study data
  const computedStages = useMemo(() => {
    // 1. Map vocab subdeck study progress
    const deckProgressMap = {};
    vocabCourses.forEach((course) => {
      course.subdecks?.forEach((sub) => {
        const total = sub.cards?.length || sub.totalWords || 50;
        const studied = sub.cards?.filter((c) => c.status === 'learning' || c.status === 'mastered').length || 0;
        const pct = total > 0 ? Math.min(100, Math.round((studied / total) * 100)) : 0;
        deckProgressMap[sub.id] = pct;
        deckProgressMap[course.id] = pct;
      });
    });

    // 2. Map grammar lesson completed progress
    const grammarLessonProgressMap = {};
    grammarCourses.forEach((c) => {
      c.lessons?.forEach((l) => {
        if (l.completed) {
          grammarLessonProgressMap[l.id] = 100;
        } else if (l.quizScore && l.quizScore > 0) {
          grammarLessonProgressMap[l.id] = Math.min(100, Math.round((l.quizScore / 15) * 100));
        } else {
          grammarLessonProgressMap[l.id] = 0;
        }
      });
    });

    return roadmapStages.map((st) => {
      let realProgress = 0;
      if (st.targetTab === 'vocab') {
        if (st.deckId && deckProgressMap[st.deckId] !== undefined) {
          realProgress = deckProgressMap[st.deckId];
        } else {
          const studiedTotal = allCards.filter((c) => c.status === 'learning' || c.status === 'mastered').length;
          realProgress = allCards.length > 0 ? Math.min(100, Math.round((studiedTotal / allCards.length) * 100)) : 0;
        }
      } else if (st.targetTab === 'grammar') {
        if (st.lessonId && grammarLessonProgressMap[st.lessonId] !== undefined) {
          realProgress = grammarLessonProgressMap[st.lessonId];
        } else {
          realProgress = 0;
        }
      }
      return {
        ...st,
        progress: realProgress
      };
    });
  }, [roadmapStages, vocabCourses, grammarCourses, allCards]);

  const filteredStages = useMemo(() => {
    return computedStages.filter((st) => {
      if (stageFilter === 'all') return true;
      if (stageFilter === 'grammar') return st.targetTab === 'grammar';
      if (stageFilter === 'vocab') return st.targetTab === 'vocab';
      return true;
    });
  }, [computedStages, stageFilter]);

  // Current active continue card with dynamic progress
  const currentActiveCourse = vocabCourses[0];
  const currentActiveSubdeck = currentActiveCourse?.subdecks?.[0];
  const subdeckStudied = currentActiveSubdeck?.cards?.filter((c) => c.status === 'mastered' || c.status === 'learning').length || 0;
  const subdeckTotal = currentActiveSubdeck?.totalWords || currentActiveSubdeck?.cards?.length || 50;
  const subdeckPct = subdeckTotal > 0 ? Math.min(100, Math.round((subdeckStudied / subdeckTotal) * 100)) : 0;

  // Real today's stats computed from active data
  const stagesStudiedCount = useMemo(() => {
    return computedStages.filter((st) => st.progress > 0).length;
  }, [computedStages]);

  const wordsLearnedToday = userStats?.wordsLearnedToday || 0;
  const wordsReviewedToday = useMemo(() => {
    if (userStats?.wordsReviewedToday !== undefined) return userStats.wordsReviewedToday;
    const oneDayAgo = Date.now() - 86400000;
    return allCards.filter((c) => c.lastStudiedAt && c.lastStudiedAt >= oneDayAgo).length;
  }, [userStats, allCards]);

  const recallQuizzesToday = userStats?.quizzesTakenToday || userStats?.dailyRecallCount || 0;

  // Achievements dynamic unlocks
  const achievements = useMemo(() => {
    return [
      {
        id: 'first-stage',
        title: 'Chặng đầu tiên',
        icon: '🚀',
        done: stagesStudiedCount > 0 || (userStats?.completedStages || 0) > 0
      },
      {
        id: 'first-quiz',
        title: 'Đạt Quiz đầu tiên',
        icon: '🎯',
        done: Boolean(recallQuizzesToday > 0 || (userStats?.quizzesTaken || 0) > 0)
      },
      {
        id: 'first-mastered',
        title: 'Từ thành thạo đầu',
        icon: '⭐',
        done: retentionStats.mastered > 0
      },
      {
        id: 'streak-3',
        title: 'Chuỗi 3 ngày',
        icon: '🔥',
        done: (userStats?.streak || 0) >= 3
      },
      {
        id: 'streak-7',
        title: 'Chuỗi 7 ngày',
        icon: '⚡',
        done: (userStats?.streak || 0) >= 7
      },
      {
        id: 'xp-500',
        title: 'Mốc 500 XP',
        icon: '👑',
        done: (userStats?.xp || 0) >= 500
      }
    ];
  }, [stagesStudiedCount, recallQuizzesToday, retentionStats.mastered, userStats]);

  const unlockedAchievementsCount = achievements.filter((a) => a.done).length;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* 1. COMPACT WELCOME BANNER (No long paragraphs) */}
      <div className="p-5 md:p-6 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xl">👋</span>
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Xin chào, {currentUser ? (currentUser.fullName || userStats?.name || 'Học viên') : 'Bạn'}!
            </h1>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                currentUser
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
              }`}
            >
              {currentUser ? `Cấp ${userStats?.level || 1}` : 'Học viên mới'}
            </span>
          </div>
          <p className="text-xs text-slate-400">
            {retentionStats.due > 0 ? (
              <>Hôm nay bạn có <strong className="text-rose-400 font-semibold">{retentionStats.due} từ đến hạn ôn</strong> theo thuật toán lặp lại ngắt quãng.</>
            ) : (
              <>
                {currentUser
                  ? 'Bạn chưa có từ nào đến hạn ôn hôm nay. Hãy học từ mới hoặc luyện phản xạ nhé!'
                  : 'Chào mừng bạn đến với LexiFlow! Hãy bắt đầu chặng học đầu tiên để kích hoạt trí nhớ dài hạn.'}
              </>
            )}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          {retentionStats.due > 0 ? (
            <button
              onClick={() => setActiveModal('srs')}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/25 flex items-center gap-2 transition"
            >
              <Brain className="w-4 h-4" />
              <span>Ôn {retentionStats.due} từ đến hạn</span>
            </button>
          ) : (
            <button
              onClick={() => setActiveModal('recall')}
              className="px-4 py-2.5 rounded-xl bg-indigo-600/90 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/25 flex items-center gap-2 transition"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Luyện Phản Xạ 60s</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. TRẠM KIỂM TRA & GIỮ TRÍ NHỚ DÀI HẠN (MEMORY RETENTION & RECALL HUB) */}
      <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800/90 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white tracking-tight">
                Trạm Kiểm Tra & Giữ Trí Nhớ Dài Hạn (SRS Hub)
              </h2>
              <p className="text-[11px] text-slate-400">
                Theo dõi 4 mức độ ghi nhớ và kiểm tra phản xạ 1 chạm
              </p>
            </div>
          </div>
          <span className="text-[11px] text-slate-400">
            Tổng kho: <strong className="text-white">{retentionStats.total} từ</strong>
          </span>
        </div>

        {/* 4 Trạng thái trí nhớ trực quan */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* Due Now */}
          <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-rose-500/20 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-rose-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                Cần ôn ngay
              </span>
              <span className="text-xs font-mono text-slate-400">Hôm nay</span>
            </div>
            <div className="text-xl font-bold text-white">{retentionStats.due}</div>
            <p className="text-[10px] text-slate-400">
              {retentionStats.due === 0 && retentionStats.totalStudied === 0
                ? 'Hãy học từ mới đầu tiên để kích hoạt lịch nhắc ôn SRS'
                : 'Đến hạn theo lịch SRS'}
            </p>
          </div>

          {/* Weak / Forgotten */}
          <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-amber-500/20 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-amber-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Từ hay nhầm
              </span>
              <span className="text-xs font-mono text-slate-400">Ưu tiên</span>
            </div>
            <div className="text-xl font-bold text-white">{retentionStats.weak}</div>
            <p className="text-[10px] text-slate-400">Từng trả lời sai hoặc quên</p>
          </div>

          {/* Learning */}
          <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-blue-500/20 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-blue-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Đang ghi nhớ
              </span>
              <span className="text-xs font-mono text-slate-400">1 - 7 ngày</span>
            </div>
            <div className="text-xl font-bold text-white">{retentionStats.learning}</div>
            <p className="text-[10px] text-slate-400">Đang củng cố ngắn hạn</p>
          </div>

          {/* Mastered */}
          <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-emerald-500/20 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Đã thuộc làu
              </span>
              <span className="text-xs font-mono text-slate-400">&gt; 21 ngày</span>
            </div>
            <div className="text-xl font-bold text-white">{retentionStats.mastered}</div>
            <p className="text-[10px] text-slate-400">Vào trí nhớ dài hạn vĩnh viễn</p>
          </div>
        </div>

        {/* 3 Chế độ Kiểm tra nhanh 1 chạm */}
        <div className="pt-2">
          <p className="text-xs font-semibold text-slate-300 mb-2.5">
            Chọn 1 chế độ để kiểm tra xem bạn còn nhớ không:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Mode 1: 60s Quick Recall */}
            <button
              onClick={() => setActiveModal('recall')}
              className="p-4 rounded-2xl bg-[#0B0F17] border border-slate-800 hover:border-amber-500/40 text-left transition group relative overflow-hidden"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition">
                    Phản Xạ 60 Giây
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    10 từ ngẫu nhiên • 5s/từ ép não phản xạ
                  </p>
                </div>
              </div>
            </button>

            {/* Mode 2: Dictation & Spelling */}
            <button
              onClick={() => setActiveModal('dictation')}
              className="p-4 rounded-2xl bg-[#0B0F17] border border-slate-800 hover:border-blue-500/40 text-left transition group relative overflow-hidden"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Headphones className="w-5 h-5 text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-white group-hover:text-blue-300 transition">
                    Nghe & Gõ Lại Từ
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    Luyện chính tả • Chống nhớ mang máng
                  </p>
                </div>
              </div>
            </button>

            {/* Mode 3: SRS Review */}
            <button
              onClick={() => setActiveModal('srs')}
              className="p-4 rounded-2xl bg-[#0B0F17] border border-slate-800 hover:border-purple-500/40 text-left transition group relative overflow-hidden"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5 text-purple-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-white group-hover:text-purple-300 transition">
                    Ôn Tập Thông Minh SRS
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    Đánh giá 4 mức độ • Nhắc ôn tự động
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 3. BỐ CỤC CHUẨN ENGMASTERAI (Cột chính 2/3 + Cột phụ 1/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* CỘT CHÍNH BÊN TRÁI (8 COLS) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Card "Tiếp tục học" */}
          <div className="p-5 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-md flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-xl shrink-0">
                {currentActiveCourse?.icon || '📘'}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300">
                    {subdeckStudied > 0 ? 'Đang học dở' : 'Chặng 1 Khởi Động'}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold truncate">
                    {currentActiveCourse?.title}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mt-0.5 truncate">
                  {currentActiveSubdeck?.title || '1. Gia đình và quan hệ'}
                </h3>
                <div className="flex items-center gap-3 mt-1.5">
                  <div className="w-32 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-indigo-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${subdeckPct}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">
                    {subdeckStudied}/{subdeckTotal} từ ({subdeckPct}% hoàn thành)
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                if (onStartPracticeDeck && currentActiveSubdeck) {
                  onStartPracticeDeck(currentActiveSubdeck, { mode: 'learn_new' });
                } else if (onNavigateTab) {
                  onNavigateTab('vocab', currentActiveCourse?.id);
                }
              }}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shrink-0 flex items-center gap-1.5 shadow transition"
            >
              <span>{subdeckStudied > 0 ? 'Tiếp tục' : 'Bắt đầu học'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Khối "Lộ Trình Học Tập Của Bạn" (16 Chặng dọc) */}
          <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800/90 shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-white">Lộ Trình Học Tập Của Bạn</h3>
                <p className="text-[11px] text-slate-400">
                  16 Chặng theo trục năng lực từ A0 đến TOEIC 600+
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-1 bg-[#0B0F17] p-1 rounded-xl border border-slate-800 text-xs">
                {[
                  { id: 'all', label: 'Tất cả' },
                  { id: 'grammar', label: 'Ngữ pháp' },
                  { id: 'vocab', label: 'Từ vựng' }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setStageFilter(f.id)}
                    className={`px-3 py-1 rounded-lg font-semibold transition ${
                      stageFilter === f.id
                        ? 'bg-indigo-600 text-white font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Stages Vertical List */}
            <div className="space-y-2.5">
              {filteredStages.map((stage) => (
                <div
                  key={stage.id}
                  onClick={() => onNavigateTab(stage.targetTab, stage.deckId || stage.lessonId)}
                  className="p-3.5 rounded-2xl bg-[#0B0F17] hover:bg-[#0E1526] border border-slate-800/80 hover:border-indigo-500/40 transition cursor-pointer flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Circle Stage Number */}
                    <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition">
                      {stage.stepNumber}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs font-bold text-white group-hover:text-indigo-300 transition truncate">
                          Chặng {stage.stepNumber}: {stage.title}
                        </h4>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 hidden sm:inline">
                          {stage.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {stage.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right hidden sm:block">
                      <div className="text-xs font-bold text-indigo-400">{stage.progress}%</div>
                      <div className="w-16 bg-slate-800 rounded-full h-1 mt-1 overflow-hidden">
                        <div
                          className="bg-indigo-500 h-full rounded-full"
                          style={{ width: `${stage.progress}%` }}
                        />
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white transition" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CỘT PHỤ BÊN PHẢI (4 COLS) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Card: Tiến độ hôm nay */}
          <div className="p-5 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Tiến Độ Hôm Nay</span>
              </h3>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                {userStats?.studiedMinutesToday || 25}/{userStats?.dailyGoalMinutes || 30}m
              </span>
            </div>

            <div className="divide-y divide-slate-800/80 text-xs">
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-slate-400">Chặng đã học</span>
                <span className="font-bold text-white">{stagesStudiedCount} / 16 chặng</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-slate-400">Lượt kiểm tra trí nhớ</span>
                <span className="font-bold text-amber-400">{recallQuizzesToday} lượt (hôm nay)</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-slate-400">Từ mới đã nạp</span>
                <span className="font-bold text-blue-400">+{wordsLearnedToday} từ mới</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-slate-400">Từ đã ôn tập SRS</span>
                <span className="font-bold text-emerald-400">{wordsReviewedToday} từ</span>
              </div>
            </div>
          </div>

          {/* Card: Thành tích */}
          <div className="p-5 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-400" />
                <span>Thành Tích Đạt Được</span>
              </h3>
              <span className="text-[11px] text-indigo-400 font-semibold">{unlockedAchievementsCount} / {achievements.length} huy hiệu</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {achievements.map((badge) => (
                <div
                  key={badge.id}
                  className={`p-3 rounded-2xl bg-[#0B0F17] border transition flex items-center gap-2.5 ${
                    badge.done
                      ? 'border-emerald-500/30 bg-[#0E1522]'
                      : 'border-slate-800/80 opacity-60'
                  }`}
                >
                  <span className={`text-lg ${badge.done ? '' : 'grayscale opacity-50'}`}>{badge.icon}</span>
                  <div className="min-w-0">
                    <p className={`text-[11px] font-bold truncate ${badge.done ? 'text-slate-200' : 'text-slate-400'}`}>{badge.title}</p>
                    <p className={`text-[9px] font-semibold ${badge.done ? 'text-emerald-400' : 'text-slate-500'}`}>
                      {badge.done ? 'Đã mở khóa' : 'Chưa mở khóa'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. MODALS FOR ACTIVE RECALL MODES */}
      <QuickRecallModal
        isOpen={activeModal === 'recall'}
        onClose={() => setActiveModal(null)}
        cards={allCards}
        onSpeak={onSpeak}
        onAwardXP={onAwardXP}
        onUpdateCardSRS={onUpdateCardSRS}
      />

      <DictationModal
        isOpen={activeModal === 'dictation'}
        onClose={() => setActiveModal(null)}
        cards={allCards}
        onSpeak={onSpeak}
        onAwardXP={onAwardXP}
        onUpdateCardSRS={onUpdateCardSRS}
      />

      <SRSReviewModal
        isOpen={activeModal === 'srs'}
        onClose={() => setActiveModal(null)}
        cards={allCards}
        onUpdateCardSRS={onUpdateCardSRS}
        onSpeak={onSpeak}
        onAwardXP={onAwardXP}
      />
    </div>
  );
}
