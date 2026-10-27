import React, { useState, useEffect, useMemo } from 'react';
import { Sparkles } from 'lucide-react';

// Data imports
import INITIAL_ROADMAP_STAGES from './data/roadmap16Stages.json';
import INITIAL_GRAMMAR_COURSES from './data/grammarCourses.js';
import INITIAL_VOCAB_COURSES from './data/vocabCourses.js';
import INITIAL_NOTES from './data/initialNotes.json';

// Component imports
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import RoadmapView from './components/RoadmapView';
import VocabVault from './components/VocabVault';
import GrammarView from './components/GrammarView';
import SpeakingLab from './components/SpeakingLab';
import SmartNotebookDrawer from './components/SmartNotebookDrawer';
import StudySessionModal from './components/StudySessionModal';
import AILab from './components/AILab';
import AuthModal from './components/AuthModal';
import { authApi, userApi, getStoredToken } from './services/api';

// Default clean guest stats (no user data leakage when unauthenticated)
export const GUEST_STATS = {
  name: 'Học viên',
  xp: 0,
  level: 1,
  streak: 0,
  dailyGoalMinutes: 30,
  studiedMinutesToday: 0,
  wordsLearnedToday: 0,
  wordsReviewedToday: 0,
  quizzesTakenToday: 0,
  completedStages: 0,
  accent: 'en-US'
};

// Pure generator for 100% clean courses with zero previous progress
export function getFreshVocabCourses() {
  return INITIAL_VOCAB_COURSES.map((course) => ({
    ...course,
    subdecks: (course.subdecks || []).map((subdeck) => ({
      ...subdeck,
      masteredCount: 0,
      learningCount: 0,
      dueCount: 0,
      progressPercent: 0,
      lastStudied: null,
      cards: (subdeck.cards || []).map((card) => ({
        ...card,
        status: 'new',
        stepCompleted: 0,
        due: false,
        nextReviewAt: null,
        lastStudiedAt: null,
        reviewCount: 0,
        wrongCount: 0,
        intervalDays: 0
      }))
    }))
  }));
}

// Helper to overlay progress onto courses
export function applyVocabProgressToCourses(baseCourses, progressMap) {
  if (!progressMap || Object.keys(progressMap).length === 0) {
    return baseCourses;
  }
  return baseCourses.map((c) => ({
    ...c,
    subdecks: (c.subdecks || []).map((s) => {
      const updatedCards = (s.cards || []).map((card) => {
        const prog = progressMap[card.id];
        if (!prog) return { ...card, status: card.status || 'new' };
        return {
          ...card,
          status: prog.status || card.status || 'new',
          stepCompleted: prog.stepCompleted !== undefined ? prog.stepCompleted : (card.stepCompleted || 0),
          lastStudiedAt: prog.lastStudiedAt || card.lastStudiedAt || null,
          nextReviewAt: prog.nextReviewAt || card.nextReviewAt || null,
          reviewCount: prog.reviewCount || card.reviewCount || 0,
          intervalDays: prog.intervalDays || card.intervalDays || 0,
          due: prog.due !== undefined ? prog.due : (card.due || false)
        };
      });
      const masteredCount = updatedCards.filter((card) => card.status === 'mastered').length;
      const learningCount = updatedCards.filter((card) => card.status === 'learning' || card.status === 'weak').length;
      const dueCount = updatedCards.filter((card) =>
        (card.status === 'learning' || card.status === 'weak') &&
        ((card.nextReviewAt && card.nextReviewAt <= Date.now()) || card.due)
      ).length;
      return {
        ...s,
        cards: updatedCards,
        masteredCount,
        learningCount,
        dueCount,
        progressPercent: Math.min(100, Math.round((masteredCount / (s.totalWords || updatedCards.length || 50)) * 100))
      };
    })
  }));
}

// Dedicated vocab progress map storage helper (stores status, stepCompleted, lastStudiedAt, nextReviewAt, reviewCount)
export function getStoredVocabProgress() {
  try {
    const token = getStoredToken();
    if (!token) return {}; // Clean slate when not logged in
    const raw = localStorage.getItem('lexiflow_vocab_progress_v2');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveStoredVocabProgress(map) {
  try {
    localStorage.setItem('lexiflow_vocab_progress_v2', JSON.stringify(map));
  } catch {}
}

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'vocab' | 'grammar' | 'speaking' | 'ai'
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Keyboard shortcut Ctrl+B / Cmd+B to toggle sidebar collapse
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setIsSidebarCollapsed((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Persistent storage for Vocab Courses with merged progress
  const [vocabCourses, setVocabCourses] = useState(() => {
    const token = getStoredToken();
    if (!token) {
      return getFreshVocabCourses();
    }
    const fresh = getFreshVocabCourses();
    const progressMap = getStoredVocabProgress();
    return applyVocabProgressToCourses(fresh, progressMap);
  });

  // Persistent storage for Grammar Courses (3 Courses, 49 Lessons with 5-Slide Interactive Player & Voice)
  const [grammarCourses, setGrammarCourses] = useState(() => {
    try {
      const saved = localStorage.getItem('lexiflow_v6_grammar_courses');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.[0]?.lessons?.[0]?.slides?.length === 5 && parsed?.[0]?.lessons?.length === 22) {
          return parsed;
        }
      }
      return INITIAL_GRAMMAR_COURSES;
    } catch {
      return INITIAL_GRAMMAR_COURSES;
    }
  });

  // Persistent study notes (Guest starts with empty notebook, loads only on auth)
  const [studyNotes, setStudyNotes] = useState(() => {
    const token = getStoredToken();
    if (!token) return [];
    try {
      const saved = localStorage.getItem('lexiflow_v4_notes');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Scratchpad
  const [scratchpadText, setScratchpadText] = useState(() => {
    const token = getStoredToken();
    if (!token) {
      return '📌 Ghi chú học tập:\n- Đăng nhập để lưu tiến độ học tập trên đám mây và đồng bộ giữa các thiết bị.\n- Luyện tập 15 phút mỗi ngày để củng cố trí nhớ ngắt quãng (SRS).\n';
    }
    try {
      return (
        localStorage.getItem('lexiflow_v4_scratchpad') ||
        '📌 Ghi chú học tập:\n- Luyện tập 15 phút mỗi ngày để củng cố trí nhớ ngắt quãng (SRS).\n'
      );
    } catch {
      return '';
    }
  });

  // User Stats (Guest starts with GUEST_STATS: 0 XP, Cấp 1, 0 streak, 'Học viên')
  const [userStats, setUserStats] = useState(() => {
    const token = getStoredToken();
    if (!token) return GUEST_STATS;
    try {
      const saved = localStorage.getItem('lexiflow_v4_stats');
      return saved ? JSON.parse(saved) : GUEST_STATS;
    } catch {
      return GUEST_STATS;
    }
  });

  // User Authentication & PostgreSQL Cloud Sync State
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Auto-sync user profile & progress from PostgreSQL on mount if token exists
  useEffect(() => {
    const token = getStoredToken();
    if (!token) {
      // Clear legacy localStorage from unauthenticated state to avoid data leaks
      setUserStats(GUEST_STATS);
      setStudyNotes([]);
      setVocabCourses(getFreshVocabCourses());
      return;
    }

    userApi.getSync()
      .then((data) => {
        if (data?.profile) {
          setCurrentUser({
            id: data.profile.id,
            fullName: data.profile.fullName || data.profile.name,
            email: data.profile.email,
            avatarUrl: data.profile.avatarUrl
          });
          setUserStats((prev) => ({
            ...prev,
            ...data.profile,
            name: data.profile.fullName || prev.name
          }));
        }
        if (data?.notebooks && Array.isArray(data.notebooks)) {
          setStudyNotes(data.notebooks);
        }
        if (data?.vocabProgress && Object.keys(data.vocabProgress).length > 0) {
          saveStoredVocabProgress(data.vocabProgress);
          setVocabCourses((prev) => applyVocabProgressToCourses(prev, data.vocabProgress));
        }
      })
      .catch((err) => {
        console.warn('[PostgreSQL Auto-Sync Notice]:', err.message);
        if (err.status === 401 || err.status === 403) {
          authApi.logout();
          setCurrentUser(null);
          setUserStats(GUEST_STATS);
          setStudyNotes([]);
          setVocabCourses(getFreshVocabCourses());
        }
      });
  }, []);

  // Handle successful login / registration from AuthModal
  const handleAuthSuccess = (user, syncData) => {
    setCurrentUser(user);
    if (syncData?.profile) {
      setUserStats((prev) => ({
        ...prev,
        ...syncData.profile,
        name: syncData.profile.fullName || prev.name
      }));
    } else if (user?.fullName) {
      setUserStats((prev) => ({ ...prev, name: user.fullName }));
    }
    if (syncData?.notebooks && Array.isArray(syncData.notebooks)) {
      setStudyNotes(syncData.notebooks);
    }
    if (syncData?.vocabProgress && Object.keys(syncData.vocabProgress).length > 0) {
      saveStoredVocabProgress(syncData.vocabProgress);
      setVocabCourses((prev) => applyVocabProgressToCourses(prev, syncData.vocabProgress));
    }
  };

  // Logout handler (Completely reset all data back to clean guest slate)
  const handleLogout = () => {
    authApi.logout();
    setCurrentUser(null);
    setUserStats(GUEST_STATS);
    setStudyNotes([]);
    setVocabCourses(getFreshVocabCourses());
    try {
      localStorage.removeItem('lexiflow_v4_stats');
      localStorage.removeItem('lexiflow_vocab_progress_v2');
      localStorage.removeItem('lexiflow_v4_notes');
      localStorage.removeItem('lexiflow_v4_scratchpad');
    } catch {}
    showToast('👋 Đã đăng xuất tài khoản. Bạn đang ở chế độ xem học viên mới.');
  };

  // Note Drawer state (default 'minimized' so it NEVER blocks the main screen)
  const [noteWidgetMode, setNoteWidgetMode] = useState('minimized'); // 'minimized' | 'open' | 'expanded'
  const [noteActiveTab, setNoteActiveTab] = useState('cards'); // 'cards' | 'scratchpad'

  // Active Practice & Selection
  const [selectedCourseId, setSelectedCourseId] = useState('course-1000-common');
  const [selectedSubdeckId, setSelectedSubdeckId] = useState('c1-sub-1');
  const [selectedGrammarLessonId, setSelectedGrammarLessonId] = useState(null);
  const [activePracticeDeck, setActivePracticeDeck] = useState(null);
  const [globalSearch, setGlobalSearch] = useState('');
  const [toast, setToast] = useState(null);

  // Deck session launcher keeping course and subdeck in sync
  const handleStartPracticeDeck = (deck, options = {}) => {
    if (deck?.courseId) setSelectedCourseId(deck.courseId);
    if (deck?.id) setSelectedSubdeckId(deck.id);
    setActivePracticeDeck({ ...deck, ...options });
  };

  // Tab navigation helper with ID deep-linking
  const handleNavigateTab = (tab, id = null, subdeckId = null) => {
    if (tab === 'vocab') {
      if (id) setSelectedCourseId(id);
      if (subdeckId) setSelectedSubdeckId(subdeckId);
      setActivePracticeDeck(null);
    } else if (tab === 'grammar') {
      if (id) setSelectedGrammarLessonId(id);
    }
    setActiveTab(tab);
  };

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('lexiflow_v6_1000vocab_courses', JSON.stringify(vocabCourses));
    } catch {}
  }, [vocabCourses]);

  useEffect(() => {
    try {
      localStorage.setItem('lexiflow_v6_grammar_courses', JSON.stringify(grammarCourses));
    } catch {}
  }, [grammarCourses]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('lexiflow_v4_notes', JSON.stringify(studyNotes));
      } else {
        localStorage.removeItem('lexiflow_v4_notes');
      }
    } catch {}
  }, [studyNotes, currentUser]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('lexiflow_v4_scratchpad', scratchpadText);
      } else {
        localStorage.removeItem('lexiflow_v4_scratchpad');
      }
    } catch {}
  }, [scratchpadText, currentUser]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('lexiflow_v4_stats', JSON.stringify(userStats));
      } else {
        localStorage.removeItem('lexiflow_v4_stats');
      }
    } catch {}
  }, [userStats, currentUser]);

  // Toast Notification Trigger
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3500);
  };

  // Sound Engine
  const speakText = (text, rate = 1.0) => {
    if (!('speechSynthesis' in window) || !text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = userStats?.accent || 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  // Award XP helper
  const awardXP = (amount, reason) => {
    setUserStats((prev) => {
      const nextXP = (prev?.xp || 0) + amount;
      const nextLevel = Math.floor(nextXP / 300) + 1;
      const leveledUp = nextLevel > (prev?.level || 1);
      if (leveledUp) {
        showToast(`🎉 CHÚC MỪNG! Bạn đã thăng hạng lên Cấp ${nextLevel}!`);
      } else if (reason) {
        showToast(`+${amount} XP: ${reason}`);
      }
      
      // Sync XP to PostgreSQL if logged in
      if (currentUser) {
        userApi.updateProgress({ xp: nextXP, level: nextLevel, streak: prev?.streak || 1 }).catch(() => {});
      }

      return {
        ...prev,
        xp: nextXP,
        level: nextLevel,
        studiedMinutesToday: Math.min(prev.dailyGoalMinutes + 10, prev.studiedMinutesToday + 2)
      };
    });
  };

  // Notebook add & delete handlers with PostgreSQL synchronization
  const handleAddNote = (newEntry) => {
    setStudyNotes((prev) => [newEntry, ...prev]);
    if (currentUser) {
      userApi.createNotebook(newEntry).catch((e) => console.warn('Sync note to PG failed:', e.message));
    }
  };

  const handleDeleteNote = (noteId) => {
    setStudyNotes((prev) => prev.filter((n) => n.id !== noteId));
    if (currentUser) {
      userApi.deleteNotebook(noteId).catch((e) => console.warn('Delete note from PG failed:', e.message));
    }
  };

  // Pin Card / Tip to Smart Study Note
  const pinToStudyNote = (item) => {
    const existing = studyNotes.find(
      (n) => n.term.toLowerCase() === item.term.toLowerCase()
    );
    if (existing) {
      showToast(`📌 Từ "${item.term}" đã có trong Sổ Tay Ghi Chú rồi nhé!`);
      return;
    }

    const newNote = {
      id: `note-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      term: item.term,
      phonetic: item.phonetic || '',
      meaning: item.meaning || '',
      example: item.example || '',
      tag: item.tag || 'Từ mới',
      dateAdded: new Date().toLocaleDateString('vi-VN'),
      createdAt: new Date().toISOString()
    };

    handleAddNote(newNote);
    awardXP(10, `Đã ghim "${item.term}" vào sổ tay`);
  };

  // Gather all cards across all courses and subdecks for SRS Hub
  const allCards = useMemo(() => {
    const list = [];
    vocabCourses.forEach((c) => {
      c.subdecks?.forEach((s) => {
        if (s.cards && Array.isArray(s.cards)) {
          list.push(...s.cards);
        }
      });
    });
    return list;
  }, [vocabCourses]);

  // Update card SRS status in vocabCourses & standalone progress map with full subdeck & course recalculation
  const handleUpdateCardSRS = (cardId, srsData, subdeckId = null) => {
    // 1. Update standalone vocabProgress map
    const progressMap = getStoredVocabProgress();
    const existing = progressMap[cardId] || {};
    const updatedRecord = {
      ...existing,
      ...srsData,
      id: cardId,
      stepCompleted: srsData.stepCompleted !== undefined ? srsData.stepCompleted : (srsData.status === 'mastered' ? 4 : (existing.stepCompleted || 1)),
      lastStudiedAt: srsData.lastStudiedAt || Date.now(),
      nextReviewAt: srsData.nextReviewAt !== undefined ? srsData.nextReviewAt : (srsData.intervalDays ? Date.now() + srsData.intervalDays * 86400000 : null),
      reviewCount: (existing.reviewCount || 0) + 1
    };
    progressMap[cardId] = updatedRecord;
    saveStoredVocabProgress(progressMap);

    // Sync to PostgreSQL if logged in
    if (currentUser) {
      userApi.updateProgress({ vocabProgress: { [cardId]: updatedRecord } }).catch(() => {});
    }

    // 2. Update vocabCourses
    setVocabCourses((prev) =>
      prev.map((c) => {
        let courseChanged = false;
        const updatedSubdecks = c.subdecks?.map((s) => {
          const matchSubdeck = subdeckId ? s.id === subdeckId : s.cards?.some((card) => card.id === cardId);
          if (!matchSubdeck) return s;

          courseChanged = true;
          const updatedCards = s.cards?.map((card) => {
            if (card.id !== cardId) return card;
            return {
              ...card,
              ...srsData,
              stepCompleted: updatedRecord.stepCompleted,
              lastStudiedAt: updatedRecord.lastStudiedAt,
              nextReviewAt: updatedRecord.nextReviewAt,
              reviewCount: updatedRecord.reviewCount
            };
          }) || [];

          const masteredCount = updatedCards.filter((card) => card.status === 'mastered').length;
          const learningCount = updatedCards.filter((card) => card.status === 'learning' || card.status === 'weak').length;
          const dueCount = updatedCards.filter((card) =>
            (card.status === 'learning' || card.status === 'weak') &&
            ((card.nextReviewAt && card.nextReviewAt <= Date.now()) || card.due)
          ).length;
          const totalWords = s.totalWords || updatedCards.length || 50;
          const progressPercent = Math.min(100, Math.round((masteredCount / totalWords) * 100));

          const nextSubdeck = {
            ...s,
            cards: updatedCards,
            masteredCount,
            learningCount,
            dueCount,
            progressPercent,
            lastStudied: 'Hôm nay'
          };
          delete nextSubdeck.lastStudiedIndex; // Remove static index to prevent getting stuck
          return nextSubdeck;
        });

        if (!courseChanged) return c;

        // Recalculate course stats
        const allCards = updatedSubdecks.flatMap((s) => s.cards || []);
        const courseMastered = allCards.filter((card) => card.status === 'mastered').length;
        const courseLearning = allCards.filter((card) => card.status === 'learning' || card.status === 'weak').length;
        const courseStudied = courseMastered + courseLearning;
        const totalWords = c.totalWords || allCards.length || 1000;
        const learnedPercent = Math.min(100, Math.round((courseStudied / totalWords) * 100));
        const masteredPercent = Math.min(100, Math.round((courseMastered / totalWords) * 100));

        return {
          ...c,
          subdecks: updatedSubdecks,
          learnedPercent,
          masteredPercent
        };
      })
    );
  };

  // Batch save deck session progress (e.g., when exiting or finishing words)
  const handleSaveDeckSession = (subdeckId, cardUpdatesMap = {}) => {
    // 1. Update standalone vocabProgress map
    const progressMap = getStoredVocabProgress();
    for (const [cId, updates] of Object.entries(cardUpdatesMap)) {
      const existing = progressMap[cId] || {};
      progressMap[cId] = {
        ...existing,
        ...updates,
        id: cId,
        lastStudiedAt: updates.lastStudiedAt || Date.now(),
        nextReviewAt: updates.nextReviewAt !== undefined ? updates.nextReviewAt : (updates.intervalDays ? Date.now() + updates.intervalDays * 86400000 : null)
      };
    }
    saveStoredVocabProgress(progressMap);

    // Sync batch deck progress to PostgreSQL if logged in
    if (currentUser) {
      userApi.updateProgress({ vocabProgress: cardUpdatesMap }).catch(() => {});
    }

    // 2. Update vocabCourses
    setVocabCourses((prev) =>
      prev.map((c) => {
        const hasSubdeck = c.subdecks?.some((s) => s.id === subdeckId);
        if (!hasSubdeck) return c;

        const updatedSubdecks = c.subdecks.map((s) => {
          if (s.id !== subdeckId) return s;

          const updatedCards = (s.cards || []).map((card) => {
            if (cardUpdatesMap[card.id]) {
              return { ...card, ...cardUpdatesMap[card.id] };
            }
            return card;
          });

          const masteredCount = updatedCards.filter((card) => card.status === 'mastered').length;
          const learningCount = updatedCards.filter((card) => card.status === 'learning' || card.status === 'weak').length;
          const dueCount = updatedCards.filter((card) =>
            (card.status === 'learning' || card.status === 'weak') &&
            ((card.nextReviewAt && card.nextReviewAt <= Date.now()) || card.due)
          ).length;
          const totalWords = s.totalWords || updatedCards.length || 50;
          const progressPercent = Math.min(100, Math.round((masteredCount / totalWords) * 100));

          const nextSubdeck = {
            ...s,
            cards: updatedCards,
            masteredCount,
            learningCount,
            dueCount,
            progressPercent,
            lastStudied: 'Hôm nay'
          };
          delete nextSubdeck.lastStudiedIndex; // Remove static index
          return nextSubdeck;
        });

        const allCards = updatedSubdecks.flatMap((s) => s.cards || []);
        const courseMastered = allCards.filter((card) => card.status === 'mastered').length;
        const courseLearning = allCards.filter((card) => card.status === 'learning' || card.status === 'weak').length;
        const courseStudied = courseMastered + courseLearning;
        const totalWords = c.totalWords || allCards.length || 1000;
        const learnedPercent = Math.min(100, Math.round((courseStudied / totalWords) * 100));
        const masteredPercent = Math.min(100, Math.round((courseMastered / totalWords) * 100));

        return {
          ...c,
          subdecks: updatedSubdecks,
          learnedPercent,
          masteredPercent
        };
      })
    );
  };

  // Reset to fresh v4 curriculum
  const handleResetCurriculum = () => {
    localStorage.removeItem('lexiflow_vocab_progress_v2');
    setVocabCourses(INITIAL_VOCAB_COURSES);
    setGrammarCourses(INITIAL_GRAMMAR_COURSES);
    setStudyNotes(INITIAL_NOTES);
    showToast('✨ Đã làm mới 6 khóa từ vựng & 3 lộ trình ngữ pháp chuẩn v4.0!');
  };

  // Live synchronized active deck object with preserved session mode and initialCardId
  const activeDeckObject = useMemo(() => {
    if (!activePracticeDeck) return null;
    for (const c of vocabCourses) {
      const found = c.subdecks?.find((s) => s.id === activePracticeDeck.id);
      if (found) {
        return {
          ...found,
          courseId: c.id,
          courseTitle: c.title,
          mode: activePracticeDeck.mode || 'learn_new',
          initialCardId: activePracticeDeck.initialCardId || null
        };
      }
    }
    return activePracticeDeck;
  }, [vocabCourses, activePracticeDeck]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0B0F17] text-slate-100 flex flex-col md:flex-row font-sans selection:bg-indigo-500 selection:text-white antialiased">
      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed top-20 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-indigo-950/95 border border-indigo-400/50 text-xs font-bold text-white shadow-2xl backdrop-blur-md animate-bounce">
          <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toast}</span>
        </div>
      )}

      {/* LEFT SIDEBAR NAVIGATION */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activePracticeDeck={activePracticeDeck}
        setActivePracticeDeck={setActivePracticeDeck}
        vocabCourses={vocabCourses}
        studyNotes={studyNotes}
        setNoteWidgetMode={setNoteWidgetMode}
        userStats={userStats}
        currentUser={currentUser}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />

      {/* MAIN CONTENT VIEWPORT */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* TOPBAR */}
        <Topbar
          globalSearch={globalSearch}
          setGlobalSearch={setGlobalSearch}
          vocabCourses={vocabCourses}
          grammarCourses={grammarCourses}
          studyNotes={studyNotes}
          setNoteWidgetMode={setNoteWidgetMode}
          userStats={userStats}
          setUserStats={setUserStats}
          currentUser={currentUser}
          onOpenAuthModal={() => setIsAuthModalOpen(true)}
          onLogout={handleLogout}
          onShowToast={showToast}
          onResetCurriculum={handleResetCurriculum}
          onNavigateTab={handleNavigateTab}
          onSpeak={speakText}
          isSidebarCollapsed={isSidebarCollapsed}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
        />

        {/* MAIN SCROLLABLE VIEW AREA */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 pt-6 md:pt-8 pb-24">
          {activeDeckObject ? (
            <StudySessionModal
              deck={activeDeckObject}
              onClose={() => setActivePracticeDeck(null)}
              onSpeak={speakText}
              onPinNote={pinToStudyNote}
              onAwardXP={awardXP}
              onUpdateCardSRS={handleUpdateCardSRS}
              onSaveDeckSession={handleSaveDeckSession}
              onMarkCardMastered={(cardId, srsPayload) => {
                handleUpdateCardSRS(
                  cardId,
                  srsPayload || {
                    status: 'mastered',
                    stepCompleted: 4,
                    intervalDays: 14,
                    lastStudiedAt: Date.now(),
                    nextReviewAt: Date.now() + 14 * 86400000,
                    due: false
                  },
                  activePracticeDeck.id
                );
                awardXP(15, 'Đã thuộc từ vựng!');
              }}
            />
          ) : (
            <>
              {activeTab === 'dashboard' && (
                <RoadmapView
                  userStats={userStats}
                  currentUser={currentUser}
                  vocabCourses={vocabCourses}
                  grammarCourses={grammarCourses}
                  roadmapStages={INITIAL_ROADMAP_STAGES}
                  allCards={allCards}
                  onNavigateTab={handleNavigateTab}
                  onStartPracticeDeck={handleStartPracticeDeck}
                  onSpeak={speakText}
                  onPinNote={pinToStudyNote}
                  onAwardXP={awardXP}
                  onUpdateCardSRS={handleUpdateCardSRS}
                />
              )}

              {activeTab === 'vocab' && (
                <VocabVault
                  vocabCourses={vocabCourses}
                  setVocabCourses={setVocabCourses}
                  selectedCourseId={selectedCourseId}
                  setSelectedCourseId={setSelectedCourseId}
                  selectedSubdeckId={selectedSubdeckId}
                  setSelectedSubdeckId={setSelectedSubdeckId}
                  onStartFourStep={handleStartPracticeDeck}
                  onSpeak={speakText}
                  onPinNote={pinToStudyNote}
                  onAwardXP={awardXP}
                  onUpdateCardSRS={handleUpdateCardSRS}
                />
              )}

              {activeTab === 'grammar' && (
                <GrammarView
                  courses={grammarCourses}
                  setCourses={setGrammarCourses}
                  onPinNote={pinToStudyNote}
                  onAwardXP={awardXP}
                  initialLessonId={selectedGrammarLessonId}
                />
              )}

              {activeTab === 'speaking' && (
                <SpeakingLab
                  onSpeak={speakText}
                  onPinNote={pinToStudyNote}
                  onAwardXP={awardXP}
                  vocabCourses={vocabCourses}
                />
              )}

              {activeTab === 'ai' && (
                <AILab
                  onSpeak={speakText}
                  onPinNote={pinToStudyNote}
                  onAwardXP={awardXP}
                />
              )}
            </>
          )}
        </main>
      </div>

      {/* FLOATING CORNER SMART STUDY NOTE WIDGET */}
      <SmartNotebookDrawer
        mode={noteWidgetMode}
        setMode={setNoteWidgetMode}
        activeTab={noteActiveTab}
        setActiveTab={setNoteActiveTab}
        notes={studyNotes}
        setNotes={setStudyNotes}
        onAddNote={handleAddNote}
        onDeleteNote={handleDeleteNote}
        scratchpad={scratchpadText}
        setScratchpad={setScratchpadText}
        onSpeak={speakText}
        onShowToast={showToast}
      />

      {/* AUTHENTICATION & POSTGRESQL SYNC MODAL */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
        onShowToast={showToast}
      />
    </div>
  );
}