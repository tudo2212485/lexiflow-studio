import React, { useState } from 'react';
import {
  Headphones,
  Volume2,
  Mic,
  Sparkles,
  Pin,
  Award,
  RefreshCw
} from 'lucide-react';
import { callGeminiAPI } from '../services/gemini';

export default function SpeakingLab({ onSpeak, onPinNote, onAwardXP }) {
  const PATTERNS = [
    {
      id: 'sp-1',
      category: 'Giao tiếp hàng ngày',
      sentence: 'Are you available for a quick call this afternoon?',
      slowGuide: 'Are • you • a-vail-a-ble • for • a • quick • call • this • af-ter-noon?',
      vi: 'Chiều nay bạn có rảnh để gọi trao đổi nhanh không?'
    },
    {
      id: 'sp-2',
      category: 'Họp Daily Standup / Kỹ sư IT',
      sentence: 'Yesterday I resolved the login bug, and today I am implementing the payment API.',
      slowGuide: 'Yes-ter-day • I • re-solved • the • log-in • bug, • and • to-day • I • am • im-ple-ment-ing • the • pay-ment • A-P-I.',
      vi: 'Hôm qua mình đã xử lý xong lỗi đăng nhập, và hôm nay mình đang triển khai API thanh toán.'
    },
    {
      id: 'sp-3',
      category: 'Giao tiếp Văn phòng / TOEIC',
      sentence: 'Could you please send me the updated schedule before Friday?',
      slowGuide: 'Could • you • please • send • me • the • up-dat-ed • sche-dule • be-fore • Fri-day?',
      vi: 'Bạn vui lòng gửi giúp mình lịch trình đã cập nhật trước thứ Sáu được không?'
    },
    {
      id: 'sp-4',
      category: 'Họp Daily Standup / Kỹ sư IT',
      sentence: 'I am currently blocked by database migration issues and need some support.',
      slowGuide: 'I • am • cur-rent-ly • blocked • by • da-ta-base • mi-gra-tion • is-sues • and • need • some • sup-port.',
      vi: 'Hiện tại mình đang bị vướng lỗi migration cơ sở dữ liệu và cần sự hỗ trợ.'
    },
    {
      id: 'sp-5',
      category: 'Nhà hàng & Gọi món',
      sentence: 'Could we please have the bill whenever you are ready?',
      slowGuide: 'Could • we • please • have • the • bill • when-ev-er • you • are • read-y?',
      vi: 'Cho chúng tôi xin hóa đơn thanh toán khi nào bạn tiện nhé.'
    },
    {
      id: 'sp-6',
      category: 'Giao tiếp Văn phòng / TOEIC',
      sentence: 'I look forward to discussing the project proposal with the team tomorrow.',
      slowGuide: 'I • look • for-ward • to • dis-cuss-ing • the • pro-ject • pro-pos-al • with • the • team • to-mor-row.',
      vi: 'Tôi rất mong đợi được thảo luận bản đề xuất dự án với cả nhóm vào ngày mai.'
    }
  ];

  const [selected, setSelected] = useState(PATTERNS[0]);
  const [spokenInput, setSpokenInput] = useState('');
  const [accuracy, setAccuracy] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  // AI Sentence Deconstructor State
  const [aiSentence, setAiSentence] = useState('Please review the contract carefully before signing it.');
  const [aiLoading, setAiLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const checkAccuracy = () => {
    if (!spokenInput.trim()) return;
    const targetWords = selected.sentence.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/);
    const userWords = spokenInput.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/);
    let hits = 0;
    targetWords.forEach((w) => {
      if (userWords.includes(w)) hits++;
    });
    const pct = Math.min(100, Math.round((hits / targetWords.length) * 100));
    setAccuracy(pct);
    if (onAwardXP) onAwardXP(20, `Luyện nói phản xạ đạt ${pct}%!`);
  };

  const handleSimulateVoice = () => {
    // If Web Speech API is supported
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      setIsRecording(true);
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSpokenInput(transcript);
        setIsRecording(false);
      };
      recognition.onerror = () => {
        setIsRecording(false);
      };
      recognition.onend = () => {
        setIsRecording(false);
      };
      recognition.start();
    } else {
      // Fallback
      setSpokenInput(selected.sentence);
    }
  };

  const handleAnalyzeSentence = async (e) => {
    e?.preventDefault();
    if (!aiSentence.trim()) return;
    setAiLoading(true);
    try {
      const schema = {
        type: 'OBJECT',
        properties: {
          translationVi: { type: 'STRING' },
          structureFormula: { type: 'STRING' },
          grammarExplanation: { type: 'STRING' },
          keyWords: {
            type: 'ARRAY',
            items: {
              type: 'OBJECT',
              properties: {
                word: { type: 'STRING' },
                ipa: { type: 'STRING' },
                meaning: { type: 'STRING' }
              }
            }
          }
        },
        required: ['translationVi', 'structureFormula', 'grammarExplanation', 'keyWords']
      };

      const res = await callGeminiAPI({
        prompt: `Mổ xẻ câu tiếng Anh sau cho người mất gốc hiểu cặn kẽ cấu trúc ngữ pháp (Chủ ngữ, Động từ, Tân ngữ, Trạng từ), phiên âm và nghĩa các từ khóa: "${aiSentence}"`,
        systemInstruction: 'Bạn là gia sư tiếng Anh cho người mất gốc. Trả về JSON.',
        responseSchema: schema
      });
      setAnalysis(res);
      if (onAwardXP) onAwardXP(15, 'Phân tích câu chuyên sâu bằng AI!');
    } catch {
      setAnalysis({
        translationVi: 'Vui lòng xem xét kỹ hợp đồng trước khi ký.',
        structureFormula: 'Please + V-nguyên-mẫu (review) + Tân ngữ (the contract) + Trạng từ (carefully) + before V-ing',
        grammarExplanation: 'Câu mệnh lệnh lịch sự với Please. Dùng trạng từ carefully (-ly) bổ nghĩa cho động từ thường review.',
        keyWords: [
          { word: 'review', ipa: '/rɪˈvjuː/', meaning: 'rà soát, xem xét lại' },
          { word: 'contract', ipa: '/ˈkɒn.trækt/', meaning: 'bản hợp đồng pháp lý' },
          { word: 'carefully', ipa: '/ˈkeə.fəl.i/', meaning: 'một cách cẩn thận' }
        ]
      });
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* SECTION 1: SHADOWING LAB (0.75x & TÁCH ÂM TIẾT) */}
      <div className="space-y-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold mb-2">
            <Headphones className="w-3.5 h-3.5" />
            <span>Phương Pháp Shadowing Cho Người Mất Gốc</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white">
            Phòng Luyện Nghe Chậm 0.75x & Nhại Phản Xạ Nói
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Nghe từng từ chậm rãi, nhìn bảng tách âm tiết rồi đọc theo để tạo phản xạ cơ miệng tự nhiên trước khi nói tốc độ chuẩn.
          </p>
        </div>

        {/* Pattern Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {PATTERNS.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setSelected(p);
                setSpokenInput('');
                setAccuracy(null);
              }}
              className={`p-4 rounded-2xl border text-left transition ${
                selected.id === p.id
                  ? 'bg-indigo-950/70 border-indigo-500 shadow-xl shadow-indigo-600/20'
                  : 'bg-[#0e1526] border-slate-800 hover:border-slate-700'
              }`}
            >
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300">
                {p.category}
              </span>
              <p className="text-xs font-bold text-white mt-2 line-clamp-2">
                {p.sentence}
              </p>
              <p className="text-[11px] text-slate-400 mt-1 truncate">
                {p.vi}
              </p>
            </button>
          ))}
        </div>

        {/* Active Pattern Player & Recording Reflex */}
        <div className="p-6 rounded-3xl bg-[#0e1526] border border-indigo-500/30 space-y-5 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-extrabold text-indigo-400 uppercase">
                {selected.category}
              </span>
              <h2 className="text-lg md:text-xl font-extrabold text-white mt-1">
                "{selected.sentence}"
              </h2>
              <p className="text-xs text-emerald-300 mt-1">
                ➔ Dịch: {selected.vi}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onSpeak(selected.sentence, 0.75)}
                className="px-3.5 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1.5 transition"
                title="Nghe tốc độ chậm 0.75x"
              >
                <span>🐢 Nghe chậm 0.75x</span>
              </button>

              <button
                onClick={() => onSpeak(selected.sentence, 1.0)}
                className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                title="Nghe tốc độ chuẩn 1.0x"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Nghe chuẩn 1.0x</span>
              </button>

              <button
                onClick={() =>
                  onPinNote({
                    term: selected.sentence,
                    phonetic: selected.slowGuide,
                    meaning: selected.vi,
                    example: selected.category,
                    tag: 'Cấu trúc câu'
                  })
                }
                className="p-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 transition"
                title="Ghim mẫu câu này vào Sổ Tay"
              >
                <Pin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Slow Syllables Pronunciation Guide */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span className="text-[11px] font-extrabold uppercase text-slate-400">
              🗣️ Hướng dẫn phát âm tách âm tiết (Shadowing Slow Guide):
            </span>
            <div className="text-sm font-mono text-indigo-300 tracking-wide bg-slate-950 p-3 rounded-xl border border-slate-800">
              {selected.slowGuide}
            </div>
          </div>

          {/* Reflex Practice Test */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
              <span>Nói hoặc gõ lại câu để đo mức độ chuẩn xác:</span>
              <button
                onClick={handleSimulateVoice}
                className={`text-xs font-bold flex items-center gap-1 transition ${
                  isRecording ? 'text-rose-400 animate-pulse' : 'text-indigo-400 hover:text-indigo-300'
                }`}
              >
                <Mic className="w-3.5 h-3.5" />
                <span>{isRecording ? 'Đang lắng nghe...' : 'Bấm để đọc thử bằng mic'}</span>
              </button>
            </label>

            <div className="flex gap-2">
              <input
                type="text"
                value={spokenInput}
                onChange={(e) => setSpokenInput(e.target.value)}
                placeholder="Đọc hoặc gõ lại câu tiếng Anh vừa nghe..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
              <button
                onClick={checkAccuracy}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs transition shrink-0"
              >
                Chấm điểm
              </button>
            </div>

            {accuracy !== null && (
              <div
                className={`p-4 rounded-2xl border text-xs flex items-center justify-between ${
                  accuracy >= 80
                    ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300'
                    : 'bg-amber-950/40 border-amber-500 text-amber-300'
                }`}
              >
                <span className="font-bold flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Độ chính xác phát âm / từ vựng: {accuracy}%</span>
                </span>
                <span>{accuracy >= 80 ? '🎉 Xuất sắc! Phản xạ rất tốt.' : '💪 Hãy nghe lại 0.75x rồi đọc lại nhé.'}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 2: UNLIMITED AI SENTENCE DECONSTRUCTOR */}
      <div className="space-y-5 pt-4 border-t border-slate-800">
        <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-950/80 to-[#0e1526] border border-indigo-500/30 space-y-2">
          <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
            ∞ MỔ XẺ CÂU & TỪ VỰNG AI
          </span>
          <h2 className="text-xl font-extrabold text-white">
            Máy Giải Phẫu Câu Tiếng Anh AI (Dành Cho Người Mất Gốc)
          </h2>
          <p className="text-xs text-slate-300">
            Gặp bất kỳ câu tiếng Anh nào khó hiểu, dán vào đây — AI sẽ tách rõ Chủ ngữ, Động từ, công thức ghép câu và ghim thẳng vào Sổ Tay.
          </p>
        </div>

        <form onSubmit={handleAnalyzeSentence} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={aiSentence}
            onChange={(e) => setAiSentence(e.target.value)}
            placeholder="Dán bất kỳ câu tiếng Anh nào bạn muốn mổ xẻ..."
            className="flex-1 px-4 py-3 rounded-2xl bg-[#0e1526] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <button
            type="submit"
            disabled={aiLoading}
            className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-xs font-extrabold text-white flex items-center justify-center gap-2 shrink-0 transition"
          >
            {aiLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            <span>Giải phẫu câu ngay</span>
          </button>
        </form>

        {analysis && (
          <div className="p-6 rounded-3xl bg-[#0e1526] border border-indigo-500/40 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-base font-extrabold text-emerald-300">
                🇻🇳 Dịch nghĩa: {analysis.translationVi}
              </h3>
              <button
                onClick={() =>
                  onPinNote({
                    term: aiSentence,
                    phonetic: analysis.structureFormula,
                    meaning: analysis.translationVi,
                    example: analysis.grammarExplanation,
                    tag: 'Cấu trúc câu'
                  })
                }
                className="px-3.5 py-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-extrabold flex items-center gap-1.5 transition shrink-0"
              >
                <Pin className="w-3.5 h-3.5" /> Ghim cấu trúc này vào Sổ Tay
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs text-indigo-300 select-all">
              📐 Cấu trúc câu: {analysis.structureFormula}
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              💡 <strong>Giải thích ngữ pháp:</strong> {analysis.grammarExplanation}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {analysis.keyWords?.map((kw, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-extrabold text-white">{kw.word}</div>
                    <div className="text-[10px] font-mono text-indigo-300">{kw.ipa}</div>
                    <div className="text-xs text-emerald-300 mt-0.5">{kw.meaning}</div>
                  </div>
                  <button
                    onClick={() =>
                      onPinNote({
                        term: kw.word,
                        phonetic: kw.ipa,
                        meaning: kw.meaning,
                        example: aiSentence,
                        tag: 'Từ mới'
                      })
                    }
                    className="p-2 rounded-lg bg-amber-500/15 text-amber-300 hover:bg-amber-500/30 transition"
                    title="Ghim từ này vào sổ tay"
                  >
                    <Pin className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
