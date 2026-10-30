import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Sparkles, Home, Layers, BookOpen, Headphones } from 'lucide-react';

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

// User-scoped progress key helper to prevent data cross-contamination between accounts
export function getUserProgressKey(userId) {
  return userId ? `lexiflow_progress_${userId}` : 'lexiflow_vocab_progress_v2';
}

/**
 * Deep merge helper for vocab_progress on Client
 * Anti-downgrade: preserves mastered cards, review counts, topic index, and starred cards
 */
export function mergeClientVocabProgress(base = {}, overlay = {}) {
  const b = (base && typeof base === 'object') ? base : {};
  const o = (overlay && typeof overlay === 'object') ? overlay : {};

  const baseLearned = (b.learnedWords && typeof b.learnedWords === 'object') ? b.learnedWords : {};
  const overlayLearned = (o.learnedWords && typeof o.learnedWords === 'object') ? o.learnedWords : {};

  const mergedLearned = { ...b, ...baseLearned };
  for (const [k, v] of Object.entries(o)) {
    if (
      k !== 'learnedWords' &&
      k !== 'topicState' &&
      k !== 'lastActiveTopicId' &&
      k !== 'starredWords' &&
      k !== 'starredCardIds' &&
      v &&
      typeof v === 'object'
    ) {
      mergedLearned[k] = { ...(mergedLearned[k] || {}), ...v };
    }
  }
  for (const [k, v] of Object.entries(overlayLearned)) {
    if (v && typeof v === 'object') {
      const cur = mergedLearned[k] || {};
      const isMastered = cur.status === 'mastered' || v.status === 'mastered';
      mergedLearned[k] = {
        ...cur,
        ...v,
        status: isMastered ? 'mastered' : (v.status || cur.status || 'learning'),
        stepCompleted: Math.max(Number(cur.stepCompleted || 0), Number(v.stepCompleted || 0)),
        reviewCount: Math.max(Number(cur.reviewCount || 0), Number(v.reviewCount || 0)),
        intervalDays: Math.max(Number(cur.intervalDays || 0), Number(v.intervalDays || 0)),
        lastStudiedAt: Math.max(Number(cur.lastStudiedAt || 0), Number(v.lastStudiedAt || 0), Date.now()),
        nextReviewAt: v.nextReviewAt !== undefined ? v.nextReviewAt : (cur.nextReviewAt || null)
      };
    }
  }

  const baseTopics = (b.topicState && typeof b.topicState === 'object') ? b.topicState : {};
  const overlayTopics = (o.topicState && typeof o.topicState === 'object') ? o.topicState : {};
  const mergedTopics = { ...baseTopics };

  for (const [tId, tData] of Object.entries(overlayTopics)) {
    if (tData && typeof tData === 'object') {
      const cur = baseTopics[tId] || {};
      mergedTopics[tId] = {
        ...cur,
        ...tData,
        lastWordIndex: Math.max(Number(cur.lastWordIndex || 0), Number(tData.lastWordIndex || 0)),
        lastStep: Math.max(Number(cur.lastStep || 1), Number(tData.lastStep || 1)),
        completedWordIds: Array.from(new Set([...(cur.completedWordIds || []), ...(tData.completedWordIds || [])])),
        updatedAt: tData.updatedAt || cur.updatedAt || new Date().toISOString()
      };
    }
  }

  const baseStarred = Array.isArray(b.starredWords) ? b.starredWords : (Array.isArray(b.starredCardIds) ? b.starredCardIds : []);
  const overlayStarred = Array.isArray(o.starredWords) ? o.starredWords : (Array.isArray(o.starredCardIds) ? o.starredCardIds : []);
  const mergedStarred = Array.from(new Set([...baseStarred, ...overlayStarred]));

  return {
    ...mergedLearned,
    learnedWords: mergedLearned,
    topicState: mergedTopics,
    starredWords: mergedStarred,
    starredCardIds: mergedStarred,
    lastActiveTopicId: o.lastActiveTopicId || b.lastActiveTopicId || null
  };
}

// User-scoped vocab progress storage helpers
export function getStoredVocabProgress(userId) {
  try {
    const key = getUserProgressKey(userId);
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw);
      return (parsed && typeof parsed === 'object') ? parsed : {};
    }
    const legacy = localStorage.getItem('lexiflow_vocab_progress_v2');
    if (legacy) {
      const parsedLegacy = JSON.parse(legacy);
      return (parsedLegacy && typeof parsedLegacy === 'object') ? parsedLegacy : {};
    }
    return {};
  } catch {
    return {};
  }
}

export function saveStoredVocabProgress(map, userId) {
  try {
    const key = getUserProgressKey(userId);
    localStorage.setItem(key, JSON.stringify(map || {}));
  } catch {}
}

/**
 * Local permanent backup helper keyed by email and userId
 * Ensures that even if the user logs out and logs back in, client progress is never wiped
 */
export function getLocalBackup(userId, email) {
  try {
    const candidates = [];
    if (email) {
      const emailKey = email.trim().toLowerCase();
      const byUserBackup = localStorage.getItem(`lexiflow_user_backup_${emailKey}`);
      if (byUserBackup) candidates.push(JSON.parse(byUserBackup));
      const byEmail = localStorage.getItem(`lexiflow_backup_${emailKey}`);
      if (byEmail) candidates.push(JSON.parse(byEmail));
    }
    if (userId) {
      const byUserBackupId = localStorage.getItem(`lexiflow_user_backup_${userId}`);
      if (byUserBackupId) candidates.push(JSON.parse(byUserBackupId));
      const byId = localStorage.getItem(`lexiflow_backup_${userId}`);
      if (byId) candidates.push(JSON.parse(byId));
      const statsById = localStorage.getItem(`lexiflow_stats_${userId}`);
      if (statsById) {
        const parsedStats = JSON.parse(statsById);
        const prog = getStoredVocabProgress(userId);
        candidates.push({ ...parsedStats, vocabProgress: prog });
      }
    }
    const legacyStats = localStorage.getItem('lexiflow_v4_stats');
    if (legacyStats) {
      const parsedLegacy = JSON.parse(legacyStats);
      const prog = getStoredVocabProgress(userId);
      candidates.push({ ...parsedLegacy, vocabProgress: prog });
    }

    if (candidates.length === 0) return null;

    let maxXP = 0;
    let maxStreak = 1;
    let maxLevel = 1;
    let bestName = 'Học viên';
    let mergedVocab = {};
    let studyNotes = [];

    for (const c of candidates) {
      if (!c || typeof c !== 'object') continue;
      const xp = Number(c.xp || 0);
      if (xp > maxXP) maxXP = xp;
      const streak = Number(c.streak || 1);
      if (streak > maxStreak) maxStreak = streak;
      const level = Number(c.level || 1);
      if (level > maxLevel) maxLevel = level;
      if (c.name && c.name !== 'Học viên') bestName = c.name;
      if (c.vocabProgress) {
        mergedVocab = mergeClientVocabProgress(mergedVocab, c.vocabProgress);
      }
      if (Array.isArray(c.studyNotes) && c.studyNotes.length > studyNotes.length) {
        studyNotes = c.studyNotes;
      }
    }

    return {
      xp: maxXP,
      streak: maxStreak,
      level: Math.max(maxLevel, Math.floor(maxXP / 300) + 1),
      name: bestName,
      vocabProgress: mergedVocab,
      studyNotes
    };
  } catch {
    return null;
  }
}

export function saveLocalBackup(userId, email, data = {}) {
  try {
    const payload = JSON.stringify({
      ...data,
      savedAt: Date.now()
    });
    if (email) {
      const emailKey = email.trim().toLowerCase();
      localStorage.setItem(`lexiflow_user_backup_${emailKey}`, payload);
      localStorage.setItem(`lexiflow_backup_${emailKey}`, payload);
    }
    if (userId) {
      localStorage.setItem(`lexiflow_user_backup_${userId}`, payload);
      localStorage.setItem(`lexiflow_backup_${userId}`, payload);
      localStorage.setItem(`lexiflow_stats_${userId}`, JSON.stringify({
        xp: data.xp,
        streak: data.streak,
        level: data.level,
        name: data.name
      }));
    }
  } catch {}
}

// Helper to overlay progress and topic resume state onto courses
export function applyVocabProgressToCourses(baseCourses, progressMap) {
  if (!progressMap || Object.keys(progressMap).length === 0) {
    return baseCourses;
  }

  const learnedMap = progressMap.learnedWords || {};
  const topicState = progressMap.topicState || {};

  return baseCourses.map((c) => ({
    ...c,
    subdecks: (c.subdecks || []).map((s) => {
      const savedTopic = topicState[s.id] || {};
      const updatedCards = (s.cards || []).map((card) => {
        const prog =
          learnedMap[card.id] ||
          progressMap[card.id] ||
          learnedMap[card.word?.toLowerCase()] ||
          progressMap[card.word?.toLowerCase()];

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
        lastWordIndex: savedTopic.lastWordIndex !== undefined ? savedTopic.lastWordIndex : 0,
        lastStep: savedTopic.lastStep !== undefined ? savedTopic.lastStep : 1,
        progressPercent: Math.min(100, Math.round((masteredCount / (s.totalWords || updatedCards.length || 50)) * 100))
      };
    })
  }));
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
  const [syncStatus, setSyncStatus] = useState('synced'); // 'synced' | 'saving' | 'error'

  // Server Hydration Guard: Prevents auto-saves from writing empty default state to database
  const isHydratedFromServer = useRef(false);
  const activeUserProgressRef = useRef({});
  const pendingSavePayloadRef = useRef(null);
  const isSavingRef = useRef(false);

  // Queue-coalesced direct sync to PostgreSQL to eliminate race conditions
  const flushSyncQueue = async () => {
    if (isSavingRef.current || !pendingSavePayloadRef.current) return;
    const token = getStoredToken();
    if (!token || !currentUser || !isHydratedFromServer.current) {
      pendingSavePayloadRef.current = null;
      return;
    }

    const payload = pendingSavePayloadRef.current;
    pendingSavePayloadRef.current = null;
    isSavingRef.current = true;
    setSyncStatus('saving');

    try {
      await userApi.updateProgress(payload);
      setSyncStatus('synced');
    } catch (err) {
      console.error('[PostgreSQL Sync Error]:', err);
      setSyncStatus('error');
    } finally {
      isSavingRef.current = false;
      if (pendingSavePayloadRef.current) {
        flushSyncQueue();
      }
    }
  };

  // Direct Server Sync Helper that always bundles full snapshot (XP, streak, level, vocabProgress, topicState)
  const syncProgressToServer = (customPayload = {}) => {
    const token = getStoredToken();
    if (!token || !currentUser || !isHydratedFromServer.current) {
      return;
    }

    const currentVocab = activeUserProgressRef.current || getStoredVocabProgress(currentUser?.id) || {};
    const mergedVocab = customPayload.vocabProgress
      ? mergeClientVocabProgress(currentVocab, customPayload.vocabProgress)
      : currentVocab;

    const currentXP = customPayload.xp !== undefined ? Number(customPayload.xp) : (Number(userStats.xp) || 0);
    const currentLevel = customPayload.level !== undefined ? Number(customPayload.level) : (Number(userStats.level) || 1);
    const currentStreak = customPayload.streak !== undefined ? Number(customPayload.streak) : (Number(userStats.streak) || 1);

    const fullPayload = {
      xp: currentXP,
      level: currentLevel,
      streak: currentStreak,
      vocabProgress: mergedVocab,
      vocab_progress: mergedVocab,
      topicState: mergedVocab.topicState || {},
      lastActiveTopicId: mergedVocab.lastActiveTopicId || null,
      ...customPayload
    };

    // Update pending queue with latest merged snapshot
    pendingSavePayloadRef.current = {
      ...(pendingSavePayloadRef.current || {}),
      ...fullPayload,
      vocabProgress: mergeClientVocabProgress(
        pendingSavePayloadRef.current?.vocabProgress || {},
        fullPayload.vocabProgress
      )
    };

    // Save to local backup simultaneously for immediate durability
    saveLocalBackup(currentUser.id, currentUser.email, {
      xp: currentXP,
      level: currentLevel,
      streak: currentStreak,
      name: currentUser.fullName,
      vocabProgress: mergedVocab,
      studyNotes
    });

    flushSyncQueue();
  };

  // Manual retry handler if sync error occurred
  const handleRetrySync = async () => {
    const token = getStoredToken();
    if (!currentUser || !token) return;
    try {
      setSyncStatus('saving');
      await userApi.updateProgress({
        xp: userStats.xp,
        level: userStats.level,
        streak: userStats.streak,
        vocabProgress: activeUserProgressRef.current || {}
      });
      setSyncStatus('synced');
      showToast('✅ Đã lưu tiến độ học tập vào tài khoản thành công!');
    } catch (err) {
      console.error('[Retry Sync Error]:', err);
      setSyncStatus('error');
      showToast('⚠️ Không thể kết nối máy chủ. Vui lòng kiểm tra lại đường truyền mạng.');
    }
  };

  // Auto-sync user profile & progress from PostgreSQL on mount if token exists
  useEffect(() => {
    const token = getStoredToken();
    if (!token) {
      isHydratedFromServer.current = true; // Guest does not need server hydration
      setUserStats(GUEST_STATS);
      setStudyNotes([]);
      setVocabCourses(getFreshVocabCourses());
      return;
    }

    isHydratedFromServer.current = false; // Block auto-saves until server hydration completes!

    userApi.getProgress()
      .then((data) => {
        if (data?.profile || data?.user) {
          const profile = data.profile || data.user;
          const userObj = {
            id: profile.id,
            fullName: profile.fullName || profile.name,
            email: profile.email,
            avatarUrl: profile.avatarUrl
          };
          setCurrentUser(userObj);

          // Retrieve local backup by id and email
          const localBackup = getLocalBackup(userObj.id, userObj.email);

          const serverXP = data.xp !== undefined ? Number(data.xp) : (Number(profile.xp) || 0);
          const backupXP = Number(localBackup?.xp || 0);
          const safeXP = Math.max(serverXP, backupXP);

          const serverStreak = data.streak !== undefined ? Number(data.streak) : (Number(profile.streak) || 1);
          const backupStreak = Number(localBackup?.streak || 1);
          const safeStreak = Math.max(serverStreak, backupStreak);

          const serverLevel = data.level !== undefined ? Number(data.level) : (Number(profile.level) || 1);
          const backupLevel = Number(localBackup?.level || 1);
          const safeLevel = Math.max(serverLevel, backupLevel, Math.floor(safeXP / 300) + 1);

          const finalName = userObj.fullName || localBackup?.name || profile.name || 'Học viên';

          setUserStats((prev) => ({
            ...prev,
            ...profile,
            name: finalName,
            xp: safeXP,
            streak: safeStreak,
            level: safeLevel
          }));

          const serverVocab = data.vocabProgress || data.vocab_progress || {};
          const backupVocab = localBackup?.vocabProgress || getStoredVocabProgress(userObj.id) || {};
          const mergedVocab = mergeClientVocabProgress(backupVocab, serverVocab);

          activeUserProgressRef.current = mergedVocab;
          saveStoredVocabProgress(mergedVocab, userObj.id);
          saveLocalBackup(userObj.id, userObj.email, {
            xp: safeXP,
            streak: safeStreak,
            level: safeLevel,
            name: finalName,
            vocabProgress: mergedVocab,
            studyNotes: (data.notebooks && data.notebooks.length > 0) ? data.notebooks : (localBackup?.studyNotes || [])
          });

          setVocabCourses(applyVocabProgressToCourses(getFreshVocabCourses(), mergedVocab));

          // If local backup was ahead of server, reconcile to server
          if (safeXP > serverXP || Object.keys(mergedVocab.learnedWords || {}).length > Object.keys(serverVocab.learnedWords || {}).length) {
            userApi.updateProgress({
              xp: safeXP,
              streak: safeStreak,
              level: safeLevel,
              vocabProgress: mergedVocab
            }).catch((e) => console.warn('[Auto-reconcile on mount notice]:', e.message));
          }
        }
        if (data?.notebooks && Array.isArray(data.notebooks)) {
          setStudyNotes(data.notebooks);
        }
        isHydratedFromServer.current = true;
        setSyncStatus('synced');
        console.log('✅ [Hydration] Hydrated complete user progress from PostgreSQL');
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
        isHydratedFromServer.current = true;
      });
  }, []);

  // Handle successful login / registration from AuthModal
  const handleAuthSuccess = (user, syncData) => {
    isHydratedFromServer.current = false;
    setCurrentUser(user);

    // Retrieve local backup by id and email
    const localBackup = getLocalBackup(user?.id, user?.email);

    const serverXP = syncData?.xp !== undefined ? Number(syncData.xp) : (Number(syncData?.profile?.xp) || Number(user?.xp) || 0);
    const backupXP = Number(localBackup?.xp || 0);
    const finalXP = Math.max(serverXP, backupXP);

    const serverStreak = syncData?.streak !== undefined ? Number(syncData.streak) : (Number(syncData?.profile?.streak) || Number(user?.streak) || 1);
    const backupStreak = Number(localBackup?.streak || 1);
    const finalStreak = Math.max(serverStreak, backupStreak);

    const serverLevel = syncData?.level !== undefined ? Number(syncData.level) : (Number(syncData?.profile?.level) || Number(user?.level) || 1);
    const backupLevel = Number(localBackup?.level || 1);
    const finalLevel = Math.max(serverLevel, backupLevel, Math.floor(finalXP / 300) + 1);

    const name = user?.fullName || syncData?.profile?.fullName || syncData?.profile?.name || localBackup?.name || 'Học viên';

    setUserStats((prev) => ({
      ...prev,
      ...(syncData?.profile || {}),
      name,
      xp: finalXP,
      streak: finalStreak,
      level: finalLevel
    }));

    if (syncData?.notebooks && Array.isArray(syncData.notebooks) && syncData.notebooks.length > 0) {
      setStudyNotes(syncData.notebooks);
    } else if (localBackup?.studyNotes && Array.isArray(localBackup.studyNotes)) {
      setStudyNotes(localBackup.studyNotes);
    }

    const serverVocab = syncData?.vocabProgress || syncData?.vocab_progress || {};
    const backupVocab = localBackup?.vocabProgress || getStoredVocabProgress(user?.id) || {};
    const mergedVocab = mergeClientVocabProgress(backupVocab, serverVocab);

    activeUserProgressRef.current = mergedVocab;
    saveStoredVocabProgress(mergedVocab, user?.id);
    saveLocalBackup(user?.id, user?.email, {
      xp: finalXP,
      streak: finalStreak,
      level: finalLevel,
      name,
      vocabProgress: mergedVocab,
      studyNotes: (syncData?.notebooks && syncData.notebooks.length > 0) ? syncData.notebooks : (localBackup?.studyNotes || [])
    });

    setVocabCourses(applyVocabProgressToCourses(getFreshVocabCourses(), mergedVocab));
    isHydratedFromServer.current = true;
    setSyncStatus('synced');

    // If local backup had higher progress than server, sync back immediately
    if (finalXP > serverXP || Object.keys(mergedVocab.learnedWords || {}).length > Object.keys(serverVocab.learnedWords || {}).length) {
      userApi.updateProgress({
        xp: finalXP,
        streak: finalStreak,
        level: finalLevel,
        vocabProgress: mergedVocab
      }).catch((e) => console.warn('[Auto-reconcile on login notice]:', e.message));
    }

    console.log('✅ [Login Hydration] Progress successfully hydrated for user:', user?.email, 'XP:', finalXP);
  };

  // Logout handler: Anti-reset guard, preserves 100% durable local backup and disarms auto-saves
  const handleLogout = () => {
    const curUser = currentUser;

    // Bước 1: Đặt isHydratedFromServer.current = false ngay dòng đầu tiên và hủy mọi bộ đếm auto-save
    isHydratedFromServer.current = false;
    pendingSavePayloadRef.current = null;
    isSavingRef.current = false;

    // Bước 2: Lưu bản backup tiến độ hiện tại vào localStorage để kể cả khi rớt mạng máy vẫn nhớ 100%
    if (curUser) {
      const currentProgress = {
        xp: Number(userStats.xp || 0),
        level: Number(userStats.level || 1),
        streak: Math.max(1, Number(userStats.streak || 1)),
        name: curUser.fullName || userStats.name,
        vocabProgress: activeUserProgressRef.current || {},
        grammarProgress: grammarCourses,
        studyNotes: studyNotes || [],
        savedAt: Date.now()
      };

      if (curUser.email) {
        const emailKey = curUser.email.trim().toLowerCase();
        localStorage.setItem('lexiflow_user_backup_' + emailKey, JSON.stringify(currentProgress));
        localStorage.setItem('lexiflow_backup_' + emailKey, JSON.stringify(currentProgress));
      }
      if (curUser.id) {
        localStorage.setItem('lexiflow_user_backup_' + curUser.id, JSON.stringify(currentProgress));
        localStorage.setItem('lexiflow_backup_' + curUser.id, JSON.stringify(currentProgress));
        saveStoredVocabProgress(activeUserProgressRef.current, curUser.id);
      }
    }

    // Bước 3: Chỉ xóa token đăng nhập (lexiflow_token / lexiflow_auth_token) rồi mới đưa state giao diện về chế độ khách
    authApi.logout();

    // Reset React states về Guest view
    activeUserProgressRef.current = {};
    setCurrentUser(null);
    setUserStats(GUEST_STATS);
    setStudyNotes([]);
    setVocabCourses(getFreshVocabCourses());
    setActivePracticeDeck(null);
    setSyncStatus('synced');

    try {
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
      
      // Sync XP to PostgreSQL if logged in and hydrated with complete snapshot
      syncProgressToServer({
        xp: nextXP,
        level: nextLevel,
        streak: prev?.streak || 1,
        vocabProgress: activeUserProgressRef.current
      });

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

  // Starred / Bookmarked Cards (persisted per user & synced to PostgreSQL)
  const [starredCardIds, setStarredCardIds] = useState(() => {
    try {
      const raw = localStorage.getItem('lexiflow_starred_words');
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const handleToggleStar = (cardId) => {
    setStarredCardIds((prev) => {
      const currentList = Array.isArray(prev) ? prev : [];
      const exists = currentList.includes(cardId);
      const updated = exists ? currentList.filter((id) => id !== cardId) : [...currentList, cardId];

      if (activeUserProgressRef.current) {
        activeUserProgressRef.current = {
          ...activeUserProgressRef.current,
          starredWords: updated,
          starredCardIds: updated
        };
        saveStoredVocabProgress(activeUserProgressRef.current, currentUser?.id);
      }

      syncProgressToServer({
        vocabProgress: {
          starredWords: updated,
          starredCardIds: updated
        }
      });

      try {
        localStorage.setItem('lexiflow_starred_words', JSON.stringify(updated));
      } catch {}

      return updated;
    });
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
    const progressMap = activeUserProgressRef.current || getStoredVocabProgress(currentUser?.id);
    const existingLearned = progressMap.learnedWords || {};
    const existing = existingLearned[cardId] || progressMap[cardId] || {};

    const updatedRecord = {
      ...existing,
      ...srsData,
      id: cardId,
      stepCompleted: srsData.stepCompleted !== undefined ? srsData.stepCompleted : (srsData.status === 'mastered' ? 4 : (existing.stepCompleted || 1)),
      lastStudiedAt: srsData.lastStudiedAt || Date.now(),
      nextReviewAt: srsData.nextReviewAt !== undefined ? srsData.nextReviewAt : (srsData.intervalDays ? Date.now() + srsData.intervalDays * 86400000 : null),
      reviewCount: (existing.reviewCount || 0) + 1
    };

    const nextLearned = { ...existingLearned, [cardId]: updatedRecord };
    const nextProgress = {
      ...progressMap,
      [cardId]: updatedRecord,
      learnedWords: nextLearned
    };

    activeUserProgressRef.current = nextProgress;
    saveStoredVocabProgress(nextProgress, currentUser?.id);

    // Immediate sync to server with bearer token and complete snapshot
    syncProgressToServer({
      vocabProgress: nextProgress
    });

    // 2. Update vocabCourses
    setVocabCourses((prev) => applyVocabProgressToCourses(prev, nextProgress));
  };

  // Save topic position & step resume state (e.g., word 3/50, step 1)
  const handleSaveTopicProgress = (subdeckId, { lastWordIndex, lastStep, completedWordIds } = {}) => {
    if (!subdeckId) return;
    const progressMap = activeUserProgressRef.current || getStoredVocabProgress(currentUser?.id);
    const existingTopics = progressMap.topicState || {};
    const existingTopic = existingTopics[subdeckId] || {};

    const updatedTopic = {
      ...existingTopic,
      ...(lastWordIndex !== undefined ? { lastWordIndex } : {}),
      ...(lastStep !== undefined ? { lastStep } : {}),
      ...(completedWordIds ? { completedWordIds: Array.from(new Set([...(existingTopic.completedWordIds || []), ...completedWordIds])) } : {}),
      updatedAt: new Date().toISOString()
    };

    const nextTopics = {
      ...existingTopics,
      [subdeckId]: updatedTopic
    };

    const nextProgress = {
      ...progressMap,
      topicState: nextTopics,
      lastActiveTopicId: subdeckId
    };

    activeUserProgressRef.current = nextProgress;
    saveStoredVocabProgress(nextProgress, currentUser?.id);

    // Immediate sync to server with complete snapshot
    syncProgressToServer({
      vocabProgress: nextProgress
    });

    // Update local vocabCourses state with new resume position
    setVocabCourses((prev) => applyVocabProgressToCourses(prev, nextProgress));
  };

  // Batch save deck session progress (e.g., when exiting or finishing words)
  const handleSaveDeckSession = (subdeckId, cardUpdatesMap = {}) => {
    const progressMap = activeUserProgressRef.current || getStoredVocabProgress(currentUser?.id);
    const existingLearned = progressMap.learnedWords || {};
    const mergedLearned = { ...existingLearned };

    for (const [cId, updates] of Object.entries(cardUpdatesMap)) {
      const existing = mergedLearned[cId] || progressMap[cId] || {};
      const updated = {
        ...existing,
        ...updates,
        id: cId,
        lastStudiedAt: updates.lastStudiedAt || Date.now(),
        nextReviewAt: updates.nextReviewAt !== undefined ? updates.nextReviewAt : (updates.intervalDays ? Date.now() + updates.intervalDays * 86400000 : null)
      };
      mergedLearned[cId] = updated;
      progressMap[cId] = updated;
    }

    const nextProgress = {
      ...progressMap,
      ...cardUpdatesMap,
      learnedWords: mergedLearned
    };

    activeUserProgressRef.current = nextProgress;
    saveStoredVocabProgress(nextProgress, currentUser?.id);

    // Sync to PostgreSQL immediately with complete snapshot
    syncProgressToServer({
      vocabProgress: nextProgress
    });

    setVocabCourses((prev) => applyVocabProgressToCourses(prev, nextProgress));
  };

  // Reset to fresh v4 curriculum
  const handleResetCurriculum = () => {
    localStorage.removeItem('lexiflow_vocab_progress_v2');
    setVocabCourses(INITIAL_VOCAB_COURSES);
    setGrammarCourses(INITIAL_GRAMMAR_COURSES);
    setStudyNotes(INITIAL_NOTES);
    showToast('✨ Đã làm mới 6 khóa từ vựng & 3 lộ trình ngữ pháp chuẩn v4.0!');
  };

  // Live synchronized active deck object with preserved session mode, lastWordIndex, and lastStep
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
          initialCardId: activePracticeDeck.initialCardId || null,
          lastWordIndex: activePracticeDeck.lastWordIndex !== undefined ? activePracticeDeck.lastWordIndex : (found.lastWordIndex || 0),
          lastStep: activePracticeDeck.lastStep !== undefined ? activePracticeDeck.lastStep : (found.lastStep || 1)
        };
      }
    }
    return activePracticeDeck;
  }, [vocabCourses, activePracticeDeck]);

  return (
    <div className="h-screen h-[100dvh] w-screen overflow-hidden bg-[#0B0F17] text-slate-100 flex flex-col lg:flex-row font-sans selection:bg-indigo-500 selection:text-white antialiased">
      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed top-20 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-indigo-950/95 border border-indigo-400/50 text-xs font-bold text-white shadow-2xl backdrop-blur-md animate-bounce">
          <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toast}</span>
        </div>
      )}

      {/* LEFT SIDEBAR NAVIGATION (Hidden on mobile < 1024px) */}
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
        syncStatus={syncStatus}
        onRetrySync={handleRetrySync}
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

        {/* MAIN SCROLLABLE VIEW AREA (With bottom padding for MobileBottomNav) */}
        <main className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-8 pt-4 md:pt-8 pb-24 lg:pb-8">
          {activeDeckObject ? (
            <StudySessionModal
              deck={activeDeckObject}
              onClose={() => setActivePracticeDeck(null)}
              onSpeak={speakText}
              onPinNote={pinToStudyNote}
              onAwardXP={awardXP}
              onUpdateCardSRS={handleUpdateCardSRS}
              onSaveDeckSession={handleSaveDeckSession}
              onSaveTopicProgress={handleSaveTopicProgress}
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
                  lastActiveTopicId={activeUserProgressRef.current?.lastActiveTopicId}
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
                  starredCardIds={starredCardIds}
                  onToggleStar={handleToggleStar}
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

      {/* MOBILE BOTTOM NAVIGATION BAR (Fixed at bottom on < 1024px) */}
      {!activeDeckObject && (
        <MobileBottomNav
          activeTab={activeTab}
          onSelectTab={(tabId) => {
            setActivePracticeDeck(null);
            handleNavigateTab(tabId);
          }}
        />
      )}
    </div>
  );
}

/**
 * Native App-like Mobile Bottom Navigation Bar (Visible only on < 1024px)
 */
function MobileBottomNav({ activeTab, onSelectTab }) {
  const tabs = [
    { id: 'dashboard', label: 'Tổng quan', icon: Home },
    { id: 'vocab', label: 'Từ vựng', icon: Layers },
    { id: 'grammar', label: 'Ngữ pháp', icon: BookOpen },
    { id: 'speaking', label: 'Nghe - Nói', icon: Headphones },
    { id: 'ai', label: 'AI Lab', icon: Sparkles, highlight: true }
  ];

  return (
    <nav
      aria-label="Thanh điều hướng di động"
      className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 px-2 py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))] flex justify-around items-center lg:hidden shadow-[0_-10px_25px_rgba(0,0,0,0.5)] select-none"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectTab(tab.id)}
            className={`flex flex-col items-center justify-center flex-1 py-1 px-0.5 rounded-xl transition-all duration-200 relative ${
              isActive ? 'text-indigo-400 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isActive && (
              <span className="absolute -top-1.5 w-6 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
            )}
            <div
              className={`p-1 rounded-lg transition ${
                isActive
                  ? 'bg-indigo-500/15 text-indigo-400 scale-105'
                  : tab.highlight
                  ? 'text-amber-400'
                  : ''
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span
              className={`text-[11px] leading-tight mt-0.5 truncate max-w-[64px] ${
                isActive ? 'text-indigo-300 font-bold' : 'text-slate-400 font-medium'
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}