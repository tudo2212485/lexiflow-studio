import React from 'react';
import {
  X,
  Trophy,
  Rocket,
  Puzzle,
  FileCheck2,
  Sparkles,
  ArrowRight,
  Flame
} from 'lucide-react';

export default function GameLauncherModal({
  isOpen,
  onClose,
  subdeck,
  onLaunchTopicReview,
  onLaunchGateCrasher,
  onLaunchLexiPuzzle
}) {
  if (!isOpen || !subdeck) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#0F172A] border border-amber-500/40 rounded-3xl shadow-2xl p-6 sm:p-7 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-xl shadow">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white">
                Trung Tâm Kiểm Tra & Mini-Games
              </h2>
              <p className="text-xs text-slate-400">
                Chủ đề: <strong className="text-amber-300">{subdeck.title}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3 Game Choices */}
        <div className="space-y-3">
          {/* Choice 1: Topic Review Final Test */}
          <button
            onClick={() => {
              onClose();
              onLaunchTopicReview();
            }}
            className="w-full p-4 rounded-2xl bg-[#131B2E] hover:bg-slate-800/80 border border-slate-800 hover:border-amber-500/50 text-left transition duration-200 flex items-center justify-between group shadow-md"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl shrink-0 group-hover:scale-110 transition">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm sm:text-base text-white group-hover:text-amber-300 transition">
                    📝 Bài Kiểm Tra Tổng Ôn (50 Từ)
                  </span>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    Final Test
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                  3 Vòng liên hoàn: Ghép cặp siêu tốc ➔ Điền câu ngữ cảnh ➔ Nghe gõ chính tả
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition shrink-0 ml-2" />
          </button>

          {/* Choice 2: Game 1 - Gate Crasher Runner */}
          <button
            onClick={() => {
              onClose();
              onLaunchGateCrasher();
            }}
            className="w-full p-4 rounded-2xl bg-[#131B2E] hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/50 text-left transition duration-200 flex items-center justify-between group shadow-md"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl shrink-0 group-hover:scale-110 transition">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm sm:text-base text-white group-hover:text-cyan-300 transition">
                    🚀 GAME 1: Đấu Trường Vượt Chướng Ngại Vật
                  </span>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    Fast Runner
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                  Lái phi thuyền phá cổng 2 lựa chọn, phản xạ từ vựng cực nhanh + Combo x5!
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition shrink-0 ml-2" />
          </button>

          {/* Choice 3: Game 2 - Lexi Puzzle & Neural Link */}
          <button
            onClick={() => {
              onClose();
              onLaunchLexiPuzzle();
            }}
            className="w-full p-4 rounded-2xl bg-[#131B2E] hover:bg-slate-800/80 border border-slate-800 hover:border-indigo-500/50 text-left transition duration-200 flex items-center justify-between group shadow-md"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-2xl shrink-0 group-hover:scale-110 transition">
                <Puzzle className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm sm:text-base text-white group-hover:text-indigo-300 transition">
                    🧩 GAME 2: Giải Đố Ô Chữ & Ma Trận Nối Từ
                  </span>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                    2 Chế độ
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                  Nối mạch thần kinh 12 thẻ (Rank S) & Xếp gạch giải mã từ vựng
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition shrink-0 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
