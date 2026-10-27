import React from 'react';
import {
  Home,
  BookOpen,
  Headphones,
  Layers,
  Sparkles,
  Brain,
  Flame,
  LogIn,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';

export default function Sidebar({
  activeTab,
  setActiveTab,
  activePracticeDeck,
  setActivePracticeDeck,
  vocabCourses = [],
  userStats,
  currentUser,
  onOpenAuthModal,
  onLogout,
  isCollapsed = false,
  setIsCollapsed
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
    <aside
      className={`hidden lg:flex h-screen sticky top-0 bg-[#0B0F17] border-r border-slate-800/80 flex-col shrink-0 select-none transition-all duration-300 z-30 overflow-hidden ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* TOP: Brand Header & Navigation (Scrollable internally if screen is tiny) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
        {/* Brand Header */}
        {isCollapsed ? (
          <div className="flex flex-col items-center gap-2.5 mb-5 pt-1">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-emerald-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
              <Brain className="w-5 h-5 text-white" />
            </div>
            {setIsCollapsed && (
              <button
                onClick={() => setIsCollapsed(false)}
                className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition"
                title="Mở rộng thanh menu (Ctrl+B)"
              >
                <PanelLeftOpen className="w-4 h-4 text-indigo-400" />
              </button>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-emerald-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <span className="font-extrabold text-base tracking-tight text-white block truncate">
                  LexiFlow
                </span>
                <p className="text-[11px] text-slate-400 truncate">Học & Ghi Nhớ Tiếng Anh</p>
              </div>
            </div>
            {setIsCollapsed && (
              <button
                onClick={() => setIsCollapsed(true)}
                className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition shrink-0"
                title="Thu gọn thanh menu (Ctrl+B)"
              >
                <PanelLeftClose className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* Main Navigation Menu */}
        <nav className="flex flex-col gap-1.5">
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
                title={item.label}
                className={`flex items-center ${
                  isCollapsed ? 'justify-center p-3' : 'justify-between px-3.5 py-2.5'
                } rounded-xl text-xs font-semibold transition-all duration-150 w-full group relative ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold border border-indigo-400/30'
                    : item.highlight
                    ? 'text-indigo-300 hover:bg-indigo-950/40 border border-indigo-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 ${
                    isActive ? 'text-white' : item.highlight ? 'text-indigo-400' : 'text-slate-400'
                  }`}
                />
                {!isCollapsed && (
                  <>
                    <span className="truncate flex-1 text-left ml-2.5">{item.label}</span>
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
                  </>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* BOTTOM FIXED USER STATUS / AUTH FOOTER (100% PINNED & NEVER SCROLLS) */}
      <div className="shrink-0 p-3.5 md:p-4 border-t border-slate-800/80 bg-[#0E1422]">
        {currentUser ? (
          isCollapsed ? (
            <div className="flex flex-col items-center gap-2">
              {currentUser.avatarUrl ? (
                <img
                  src={currentUser.avatarUrl}
                  alt={currentUser.fullName}
                  className="w-9 h-9 rounded-full object-cover border border-indigo-500/40 shadow shrink-0"
                  title={currentUser.fullName}
                />
              ) : (
                <div
                  className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-500 flex items-center justify-center text-xs font-black text-white shadow shrink-0"
                  title={currentUser.fullName || userStats?.name || 'Học viên'}
                >
                  {(currentUser.fullName || userStats?.name || 'H')[0].toUpperCase()}
                </div>
              )}
              <button
                onClick={onLogout}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition"
                title="Đăng xuất tài khoản"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
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
                    {(currentUser.fullName || userStats?.name || 'Học viên')
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
                    {currentUser.email || 'Tài khoản học tập'}
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

              <div className="flex items-center gap-1.5 text-[10px] text-emerald-400/90 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Tiến độ đã đồng bộ</span>
              </div>
            </div>
          )
        ) : isCollapsed ? (
          <button
            onClick={onOpenAuthModal}
            className="w-10 h-10 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 text-white shadow-md transition"
            title="Đăng nhập / Đăng ký"
          >
            <LogIn className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onOpenAuthModal}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition group"
          >
            <LogIn className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
            <span>Đăng nhập / Đăng ký</span>
          </button>
        )}
      </div>
    </aside>
  );
}
