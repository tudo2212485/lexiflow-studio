import React from 'react';
import {
  Home,
  BookOpen,
  Headphones,
  Layers,
  Sparkles,
  Brain,
  Award,
  Flame,
  StickyNote,
  LogIn,
  LogOut,
  Database
} from 'lucide-react';

export default function Sidebar({
  activeTab,
  setActiveTab,
  activePracticeDeck,
  setActivePracticeDeck,
  vocabCourses = [],
  studyNotes = [],
  setNoteWidgetMode,
  userStats,
  currentUser,
  onOpenAuthModal,
  onLogout
}) {
  const menuItems = [
    { id: 'dashboard', label: 'Tổng quan & SRS Hub', icon: Home },
    {
      id: 'vocab',
      label: 'Kho Từ Vựng (6 Khóa Học)',
      icon: Layers,
      badge: `${vocabCourses.length || 6} khóa`
    },
    { id: 'grammar', label: 'Lộ Trình Ngữ Pháp', icon: BookOpen, badge: '3 khóa' },
    { id: 'speaking', label: 'Luyện Nghe - Nói (Shadowing)', icon: Headphones },
    { id: 'ai', label: 'Phòng Lab AI Vô Hạn', icon: Sparkles, highlight: true }
  ];

  return (
    <aside className="w-full md:w-64 bg-[#0B0F17] border-b md:border-b-0 md:border-r border-slate-800/80 flex flex-col justify-between shrink-0 select-none md:sticky md:top-0 md:h-screen md:overflow-y-auto">
      <div className="p-4 md:p-5">
        {/* Brand Header: Never clipped */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-emerald-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-white">
                  LexiFlow
                </span>
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  v4.0
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate">Studio Cá Nhân • {userStats?.name || 'Tú Đỗ'}</p>
            </div>
          </div>
        </div>

        {/* Main Navigation Menu - No ugly horizontal scrollbars */}
        <nav className="flex flex-row md:flex-col gap-1 overflow-hidden flex-wrap md:flex-nowrap">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id && !activePracticeDeck;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (setActivePracticeDeck) setActivePracticeDeck(null);
                  setActiveTab(item.id);
                }}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 w-full ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold border border-indigo-400/30'
                    : item.highlight
                    ? 'text-indigo-300 hover:bg-indigo-950/40 border border-indigo-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : item.highlight ? 'text-indigo-400' : 'text-slate-400'}`} />
                  <span className="truncate">{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ml-1.5 shrink-0 ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick Study Note Launcher */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 hidden md:block">
          <button
            onClick={() => setNoteWidgetMode((m) => (m === 'open' ? 'minimized' : 'open'))}
            className="w-full flex items-center justify-between p-3 rounded-2xl bg-[#131B2E] border border-slate-800/80 hover:border-amber-500/40 transition group"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                <StickyNote className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-xs font-bold text-slate-200 group-hover:text-amber-300 transition truncate">
                  Sổ tay ghi chú
                </p>
                <p className="text-[11px] text-slate-400">{studyNotes.length} thẻ lưu</p>
              </div>
            </div>
            <span className="text-[11px] font-bold text-amber-400 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20">
              Mở
            </span>
          </button>
        </div>
      </div>

      {/* User Status Footer */}
      <div className="p-3.5 md:p-4 border-t border-slate-800/80 bg-[#0E1422]/90 hidden md:block">
        {currentUser ? (
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              {currentUser.avatarUrl ? (
                <img
                  src={currentUser.avatarUrl}
                  alt={currentUser.fullName || userStats?.name}
                  className="w-9 h-9 rounded-full object-cover border border-indigo-500/40 shadow shrink-0"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-500 flex items-center justify-center text-xs font-black text-white shadow shrink-0">
                  {(currentUser.fullName || userStats?.name || 'Tú Đỗ')
                    .split(' ')
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join('')
                    .toUpperCase()}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-white truncate">
                  {currentUser.fullName || userStats?.name || 'Học viên'}
                </p>
                <p className="text-[10px] text-slate-400 truncate">
                  {currentUser.email || 'Đã liên kết PostgreSQL'}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-800/50">
              <div className="flex items-center gap-1.5 text-slate-400">
                <span className="flex items-center gap-1 text-amber-400 font-semibold">
                  <Flame className="w-3 h-3 fill-amber-400" /> {userStats?.streak || 1} ngày
                </span>
                <span>•</span>
                <span className="text-indigo-300 font-semibold">Cấp {userStats?.level || 1}</span>
              </div>
              <button
                onClick={onLogout}
                className="p-1 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition"
                title="Đăng xuất tài khoản"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
            
            <div className="flex items-center gap-1 text-[10px] text-emerald-400/90 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>PostgreSQL 17 • Đã đồng bộ</span>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <button
              onClick={onOpenAuthModal}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition group"
            >
              <LogIn className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
              <span>Đăng nhập / Đăng ký</span>
            </button>
            <p className="text-[10px] text-center text-slate-400">
              Đăng nhập để lưu tiến độ vào PostgreSQL
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
