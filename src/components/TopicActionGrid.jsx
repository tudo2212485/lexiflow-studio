import React from 'react';
import {
  Zap,
  Mic,
  PhoneCall,
  BookOpen,
  Boxes,
  Headphones,
  Gamepad2,
  Star,
  Sparkles
} from 'lucide-react';

export default function TopicActionGrid({
  subdeck,
  starredCount = 0,
  onOpenSmartMix,
  onOpenSpeaking,
  onOpenAICall,
  onOpenStory,
  onOpenGrammar,
  onOpenDictation,
  onOpenGames,
  onOpenFilter
}) {
  const actions = [
    {
      id: 'smart_mix',
      title: 'Kết hợp',
      subtitle: '4 Bước thông minh',
      icon: Zap,
      gradient: 'from-amber-500/20 via-orange-500/20 to-indigo-500/20',
      iconColor: 'text-amber-400',
      borderHover: 'hover:border-amber-500/60',
      badge: '✨ Đề xuất',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      onClick: onOpenSmartMix
    },
    {
      id: 'speaking',
      title: 'Speaking',
      subtitle: 'Luyện phát âm từ & câu',
      icon: Mic,
      gradient: 'from-rose-500/20 to-pink-500/20',
      iconColor: 'text-rose-400',
      borderHover: 'hover:border-rose-500/60',
      badge: 'Mic AI',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
      onClick: onOpenSpeaking
    },
    {
      id: 'ai_call',
      title: 'Hội thoại AI',
      subtitle: 'Call 1-1 với linh vật',
      icon: PhoneCall,
      gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
      iconColor: 'text-emerald-400',
      borderHover: 'hover:border-emerald-500/60',
      badge: '🔥 Live Call',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 animate-pulse',
      onClick: onOpenAICall
    },
    {
      id: 'story',
      title: 'Đọc hiểu',
      subtitle: 'Truyện ngắn 15 từ',
      icon: BookOpen,
      gradient: 'from-indigo-500/20 to-blue-500/20',
      iconColor: 'text-indigo-400',
      borderHover: 'hover:border-indigo-500/60',
      badge: 'Ngữ cảnh',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
      onClick: onOpenStory
    },
    {
      id: 'grammar',
      title: 'Ngữ pháp',
      subtitle: 'Cấu trúc & Collocations',
      icon: Boxes,
      gradient: 'from-blue-500/20 to-sky-500/20',
      iconColor: 'text-sky-400',
      borderHover: 'hover:border-sky-500/60',
      badge: 'Cốt lõi',
      badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
      onClick: onOpenGrammar
    },
    {
      id: 'dictation',
      title: 'Nghe chép',
      subtitle: 'Chính tả & gõ từ',
      icon: Headphones,
      gradient: 'from-purple-500/20 to-fuchsia-500/20',
      iconColor: 'text-purple-400',
      borderHover: 'hover:border-purple-500/60',
      badge: 'Phản xạ',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      onClick: onOpenDictation
    },
    {
      id: 'games',
      title: 'Test / Game',
      subtitle: 'Húc cổng & Ô chữ',
      icon: Gamepad2,
      gradient: 'from-amber-600/20 via-red-500/20 to-indigo-600/20',
      iconColor: 'text-amber-400',
      borderHover: 'hover:border-amber-400/60',
      badge: '🎮 +XP Game',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-extrabold',
      onClick: onOpenGames
    },
    {
      id: 'filter',
      title: 'Bộ lọc & Sao',
      subtitle: `Lọc & ${starredCount} từ sao`,
      icon: Star,
      gradient: 'from-yellow-500/20 to-amber-500/20',
      iconColor: 'text-yellow-400',
      borderHover: 'hover:border-yellow-500/60',
      badge: starredCount > 0 ? `⭐ ${starredCount}` : 'Bộ lọc',
      badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
      onClick: onOpenFilter
    }
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-200">
            Hệ Thống Chế Độ Học Đa Năng (Study Modes Hub)
          </h2>
        </div>
        <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
          8 Phương pháp rèn luyện toàn diện cho chủ đề này
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
        {actions.map((act) => {
          const IconComp = act.icon;
          return (
            <button
              key={act.id}
              onClick={act.onClick}
              className={`group relative p-3 sm:p-3.5 rounded-2xl bg-[#131B2E] border border-slate-800/90 ${act.borderHover} transition-all duration-200 hover:-translate-y-1 hover:shadow-xl text-left flex flex-col justify-between min-h-[110px] sm:min-h-[120px] overflow-hidden`}
            >
              {/* Background Glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${act.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />

              {/* Top row: Icon + Badge */}
              <div className="flex items-start justify-between gap-1 w-full relative z-10">
                <div
                  className={`w-8 h-8 rounded-xl bg-[#0B0F17] border border-slate-800 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform ${act.iconColor}`}
                >
                  <IconComp className="w-4 h-4" />
                </div>

                {act.badge && (
                  <span
                    className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md border shrink-0 ${act.badgeColor}`}
                  >
                    {act.badge}
                  </span>
                )}
              </div>

              {/* Bottom row: Title & Subtitle */}
              <div className="space-y-0.5 relative z-10 pt-2">
                <h3 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-indigo-200 transition-colors truncate">
                  {act.title}
                </h3>
                <p className="text-[10px] text-slate-400 line-clamp-1 font-medium">
                  {act.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
