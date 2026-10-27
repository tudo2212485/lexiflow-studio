import React, { useMemo } from 'react';
import {
  Search,
  X,
  StickyNote,
  Globe,
  Sparkles,
  Award,
  Layers,
  BookOpen,
  Volume2,
  ExternalLink,
  LogIn,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';

export default function Topbar({
  globalSearch,
  setGlobalSearch,
  vocabCourses = [],
  grammarCourses = [],
  studyNotes = [],
  setNoteWidgetMode,
  userStats,
  setUserStats,
  currentUser,
  onOpenAuthModal,
  onLogout,
  onShowToast,
  onResetCurriculum,
  onNavigateTab,
  onSpeak,
  isSidebarCollapsed,
  setIsSidebarCollapsed
}) {
  // Real-time Global Search indexing
  const searchResults = useMemo(() => {
    const q = (globalSearch || '').trim().toLowerCase();
    if (q.length < 2) return null;

    // 1. Search Vocab Cards
    const vocabMatches = [];
    for (const course of vocabCourses) {
      for (const subdeck of course.subdecks || []) {
        for (const card of subdeck.cards || []) {
          if (
            card.word?.toLowerCase().includes(q) ||
            card.meaning?.toLowerCase().includes(q) ||
            card.chunk?.toLowerCase().includes(q)
          ) {
            vocabMatches.push({
              ...card,
              courseId: course.id,
              subdeckId: subdeck.id,
              subdeckTitle: subdeck.title
            });
            if (vocabMatches.length >= 5) break;
          }
        }
        if (vocabMatches.length >= 5) break;
      }
      if (vocabMatches.length >= 5) break;
    }

    // 2. Search Grammar Lessons
    const grammarMatches = [];
    for (const course of grammarCourses) {
      for (const lesson of course.lessons || []) {
        if (
          lesson.title?.toLowerCase().includes(q) ||
          lesson.enTitle?.toLowerCase().includes(q) ||
          lesson.category?.toLowerCase().includes(q)
        ) {
          grammarMatches.push({
            ...lesson,
            courseId: course.id,
            courseTitle: course.title
          });
          if (grammarMatches.length >= 4) break;
        }
      }
      if (grammarMatches.length >= 4) break;
    }

    // 3. Search Study Notes
    const noteMatches = (studyNotes || [])
      .filter(
        (n) =>
          n.term?.toLowerCase().includes(q) ||
          n.meaning?.toLowerCase().includes(q)
      )
      .slice(0, 3);

    return {
      vocab: vocabMatches,
      grammar: grammarMatches,
      notes: noteMatches,
      totalCount: vocabMatches.length + grammarMatches.length + noteMatches.length
    };
  }, [globalSearch, vocabCourses, grammarCourses, studyNotes]);

  return (
    <header className="h-16 bg-[#0B0F17]/95 backdrop-blur-md border-b border-slate-800/80 px-4 md:px-7 flex items-center justify-between gap-3 sticky top-0 z-40">
      {/* Search Input Container with Instant Dropdown & Sidebar Toggle */}
      <div className="flex items-center gap-2.5 flex-1 max-w-md">
        {setIsSidebarCollapsed && (
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="p-2 rounded-xl bg-[#131B2E] hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition shrink-0"
            title={isSidebarCollapsed ? "Mở rộng thanh menu (Ctrl+B)" : "Thu gọn thanh menu (Ctrl+B)"}
          >
            {isSidebarCollapsed ? (
              <PanelLeftOpen className="w-4 h-4 text-indigo-400" />
            ) : (
              <PanelLeftClose className="w-4 h-4" />
            )}
          </button>
        )}

        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={globalSearch}
          onChange={(e) => setGlobalSearch(e.target.value)}
          placeholder="Tìm từ vựng, mẹo nhớ, công thức ngữ pháp..."
          className="w-full pl-10 pr-8 py-2 rounded-xl bg-[#131B2E] border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition shadow-inner"
        />
        {globalSearch && (
          <button
            onClick={() => setGlobalSearch('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Instant Search Results Dropdown */}
        {searchResults && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#131B2E] border border-indigo-500/40 rounded-2xl shadow-2xl z-50 p-3 space-y-3 max-h-[460px] overflow-y-auto animate-fade-in divide-y divide-slate-800">
            {searchResults.totalCount === 0 ? (
              <div className="py-6 text-center text-xs text-slate-400">
                Không tìm thấy từ vựng hoặc bài học nào khớp với "<strong>{globalSearch}</strong>"
              </div>
            ) : (
              <>
                {/* Vocab Matches */}
                {searchResults.vocab.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-extrabold uppercase text-indigo-400 tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3 h-3" />
                      <span>Từ Vựng Khớp ({searchResults.vocab.length})</span>
                    </span>
                    <div className="space-y-1">
                      {searchResults.vocab.map((card) => (
                        <div
                          key={card.id}
                          className="p-2 rounded-xl bg-[#0B0F17] hover:bg-slate-800/80 transition flex items-center justify-between gap-2"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-white">{card.word}</span>
                              <span className="text-[10px] font-mono text-indigo-300">{card.ipa}</span>
                            </div>
                            <p className="text-[11px] text-amber-300/90 truncate">{card.meaning}</p>
                            <span className="text-[9px] text-slate-400">{card.subdeckTitle}</span>
                          </div>

                          <div className="flex items-center gap-1 shrink-0">
                            {onSpeak && (
                              <button
                                onClick={() => onSpeak(card.word)}
                                className="p-1.5 rounded-lg bg-slate-900 hover:bg-indigo-600 text-slate-300 hover:text-white transition"
                                title="Phát âm"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                            {onNavigateTab && (
                              <button
                                onClick={() => {
                                  onNavigateTab('vocab', card.courseId);
                                  setGlobalSearch('');
                                }}
                                className="px-2 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-[10px] font-bold text-white transition"
                              >
                                Xem bộ
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Grammar Matches */}
                {searchResults.grammar.length > 0 && (
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-extrabold uppercase text-emerald-400 tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3" />
                      <span>Bài Học Ngữ Pháp ({searchResults.grammar.length})</span>
                    </span>
                    <div className="space-y-1">
                      {searchResults.grammar.map((lesson) => (
                        <div
                          key={lesson.id}
                          onClick={() => {
                            if (onNavigateTab) {
                              onNavigateTab('grammar', lesson.id);
                              setGlobalSearch('');
                            }
                          }}
                          className="p-2 rounded-xl bg-[#0B0F17] hover:bg-slate-800/80 transition cursor-pointer flex items-center justify-between gap-2 group"
                        >
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-white group-hover:text-emerald-300 transition truncate">
                              {lesson.title}
                            </h4>
                            <p className="text-[10px] text-slate-400">{lesson.courseTitle}</p>
                          </div>
                          <span className="text-[10px] font-bold text-emerald-400 group-hover:translate-x-0.5 transition">
                            Vào học →
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Notes Matches */}
                {searchResults.notes.length > 0 && (
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-extrabold uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                      <StickyNote className="w-3 h-3" />
                      <span>Sổ Tay Ghi Chú ({searchResults.notes.length})</span>
                    </span>
                    <div className="space-y-1">
                      {searchResults.notes.map((note) => (
                        <div
                          key={note.id}
                          onClick={() => {
                            if (setNoteWidgetMode) setNoteWidgetMode('open');
                            setGlobalSearch('');
                          }}
                          className="p-2 rounded-xl bg-[#0B0F17] hover:bg-slate-800/80 transition cursor-pointer flex items-center justify-between gap-2"
                        >
                          <div className="min-w-0">
                            <span className="text-xs font-bold text-white">{note.term}</span>
                            <p className="text-[11px] text-slate-400 truncate">{note.meaning}</p>
                          </div>
                          <span className="text-[10px] font-bold text-amber-400">Xem sổ tay</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2">
        {/* Toggle Study Note Drawer */}
        <button
          onClick={() =>
            setNoteWidgetMode((m) => (m === 'minimized' ? 'open' : 'minimized'))
          }
          className="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-xs font-semibold text-amber-300 flex items-center gap-1.5 transition"
          title="Mở Sổ Tay Ghi Chú Học Tập"
        >
          <StickyNote className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Sổ tay ({studyNotes.length})</span>
        </button>

        {/* Accent Toggle (US / UK) */}
        <button
          onClick={() => {
            const next = userStats?.accent === 'en-US' ? 'en-GB' : 'en-US';
            if (setUserStats) {
              setUserStats((s) => ({ ...s, accent: next }));
            }
            if (onShowToast) {
              onShowToast(`Đã đổi giọng đọc sang ${next === 'en-US' ? 'Mỹ (US 🇺🇸)' : 'Anh (UK 🇬🇧)'}`);
            }
          }}
          className="px-2.5 py-1.5 rounded-xl bg-[#131B2E] hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center gap-1 transition"
          title="Chuyển đổi phát âm Anh - Mỹ hoặc Anh - Anh"
        >
          <Globe className="w-3.5 h-3.5 text-cyan-400" />
          <span>{userStats?.accent === 'en-US' ? 'US 🇺🇸' : 'UK 🇬🇧'}</span>
        </button>

        {/* Level / XP (Only show real progress when user is logged in) */}
        {currentUser && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-xs font-bold text-indigo-300">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>Cấp {currentUser.level || userStats?.level || 1} • {Number(currentUser.xp ?? userStats?.xp ?? 0).toLocaleString()} XP</span>
          </div>
        )}

        {/* Auth CTA / User Profile Chip */}
        {currentUser ? (
          <div className="flex items-center gap-1.5 pl-1">
            <button
              onClick={onOpenAuthModal}
              className="flex items-center gap-2 p-1 pl-2 pr-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 transition group"
              title="Xem tài khoản"
            >
              {currentUser.avatarUrl ? (
                <img
                  src={currentUser.avatarUrl}
                  alt={currentUser.fullName}
                  className="w-5 h-5 rounded-lg object-cover"
                />
              ) : (
                <div className="w-5 h-5 rounded-lg bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                  {(currentUser.fullName || 'T')[0].toUpperCase()}
                </div>
              )}
              <span className="text-xs font-semibold text-slate-200 hidden sm:inline max-w-[110px] truncate">
                {currentUser.fullName || 'Học viên'}
              </span>
            </button>
            <button
              onClick={onLogout}
              className="p-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/25 transition"
              title="Đăng xuất tài khoản"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            onClick={onOpenAuthModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-xs font-bold text-white shadow-sm transition"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Đăng nhập</span>
          </button>
        )}
      </div>
    </header>
  );
}
