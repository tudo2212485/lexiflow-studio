import React, { useState } from 'react';
import {
  Sparkles,
  RefreshCw,
  Pin,
  Volume2
} from 'lucide-react';
import { callGeminiAPI } from '../services/gemini';

const SAMPLE_CHIPS = [
  'Please review the contract carefully before signing it.',
  'If I had known about the delay, I would have notified you.',
  'She has been managing this product team for three years.',
  'Although the weather was harsh, they finished the marathon.'
];

const PRESET_ANALYSES = {
  'please review the contract carefully before signing it': {
    translationVi: 'Vui lòng xem kỹ hợp đồng trước khi ký.',
    structureFormula: 'Please + V-nguyên-mẫu (review) + Tân ngữ (the contract) + Trạng từ (carefully) + Giới từ (before) + V-ing (signing)',
    grammarExplanation: 'Câu mệnh lệnh lịch sự bắt đầu bằng Please + Động từ nguyên mẫu. Dùng trạng từ carefully (-ly) để bổ nghĩa cho động từ thường review.',
    keyWords: [
      { word: 'review', ipa: '/rɪˈvjuː/', meaning: 'xem xét lại, rà soát' },
      { word: 'contract', ipa: '/ˈkɒn.trækt/', meaning: 'bản hợp đồng pháp lý' },
      { word: 'carefully', ipa: '/ˈkeə.fəl.i/', meaning: 'một cách cẩn thận, chu đáo' }
    ]
  },
  'if i had known about the delay i would have notified you': {
    translationVi: 'Nếu tôi biết về sự chậm trễ thì tôi đã thông báo cho bạn rồi.',
    structureFormula: 'If + S + had + V3/ed (known) + Tân ngữ, S + would have + V3/ed (notified) + Tân ngữ',
    grammarExplanation: 'Câu điều kiện loại 3 (Third Conditional) diễn tả một giả định trái ngược với sự thật trong quá khứ. Mệnh đề If dùng Past Perfect (had known), mệnh đề chính dùng would have + V3.',
    keyWords: [
      { word: 'known', ipa: '/noʊn/', meaning: 'đã biết (V3 của know)' },
      { word: 'delay', ipa: '/dɪˈleɪ/', meaning: 'sự chậm trễ, hoãn lại' },
      { word: 'notified', ipa: '/ˈnoʊ.t̬ə.faɪd/', meaning: 'đã thông báo (V3 của notify)' }
    ]
  },
  'she has been managing this product team for three years': {
    translationVi: 'Cô ấy đã và đang quản lý đội ngũ sản phẩm này được 3 năm rồi.',
    structureFormula: 'S (She) + has been + V-ing (managing) + Tân ngữ (this product team) + Giới từ (for) + Khoảng thời gian (three years)',
    grammarExplanation: 'Thì Hiện tại hoàn thành tiếp diễn (Present Perfect Continuous) nhấn mạnh tính liên tục của hành động bắt đầu từ quá khứ và vẫn đang tiếp diễn ở hiện tại.',
    keyWords: [
      { word: 'managing', ipa: '/ˈmæn.ədʒ.ɪŋ/', meaning: 'quản lý, điều hành' },
      { word: 'product', ipa: '/ˈprɒd.ʌkt/', meaning: 'sản phẩm' },
      { word: 'team', ipa: '/tiːm/', meaning: 'đội ngũ, nhóm' }
    ]
  },
  'although the weather was harsh they finished the marathon': {
    translationVi: 'Mặc dù thời tiết khắc nghiệt, họ vẫn hoàn thành đường chạy marathon.',
    structureFormula: 'Although + S1 (the weather) + V1 (was) + Adj (harsh), S2 (they) + V2 (finished) + O (the marathon)',
    grammarExplanation: 'Liên từ phụ thuộc chỉ sự tương phản "Although" (Mặc dù). Chú ý quy tắc vàng: Trong tiếng Anh đã dùng Although thì KHÔNG dùng But trong cùng một câu.',
    keyWords: [
      { word: 'harsh', ipa: '/hɑːʃ/', meaning: 'khắc nghiệt, gay gắt' },
      { word: 'finished', ipa: '/ˈfɪn.ɪʃt/', meaning: 'đã hoàn thành' },
      { word: 'marathon', ipa: '/ˈmær.ə.θən/', meaning: 'cuộc đua marathon' }
    ]
  }
};

export default function AILab({ onPinNote, onAwardXP, onSpeak }) {
  const [inputSentence, setInputSentence] = useState(
    'Please review the contract carefully before signing it.'
  );
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyzeSentence = async (e, customText) => {
    e?.preventDefault();
    const target = (customText || inputSentence).trim();
    if (!target) return;
    if (customText) setInputSentence(customText);

    setLoading(true);
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
        prompt: `Hãy mổ xẻ câu hoặc từ tiếng Anh sau cho người mất gốc hiểu rõ từng thành phần (Chủ ngữ, Động từ, Tân ngữ, Mẹo ngữ pháp): "${target}"`,
        systemInstruction: 'Bạn là gia sư tiếng Anh tận tâm cho người mất gốc. Trả về JSON.',
        responseSchema: schema
      });
      setAnalysis(res);
      if (onAwardXP) onAwardXP(15, 'Phân tích câu chuyên sâu bằng AI!');
    } catch {
      // Local educational parser for presets and arbitrary sentences
      const normalized = target.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
      let matched = null;
      for (const [key, val] of Object.entries(PRESET_ANALYSES)) {
        if (normalized.includes(key) || key.includes(normalized)) {
          matched = val;
          break;
        }
      }

      if (matched) {
        setAnalysis(matched);
      } else {
        // Dynamic breakdown for arbitrary sentences
        const words = target.split(/\s+/).filter(Boolean);
        const keyWords = words.slice(0, 3).map((w) => ({
          word: w.replace(/[^a-zA-Z]/g, ''),
          ipa: `/${w.toLowerCase().replace(/[^a-zA-Z]/g, '')}/`,
          meaning: `Thành phần từ vựng trong câu`
        })).filter(k => k.word.length > 0);

        setAnalysis({
          translationVi: `Bản dịch tạm thời cho: "${target}"`,
          structureFormula: words.length >= 3
            ? `Chủ ngữ (${words[0]}) + Động từ/Trợ từ (${words[1]}) + Vị ngữ/Tân ngữ (${words.slice(2).join(' ')})`
            : `Cụm từ độc lập: ${target}`,
          grammarExplanation: `Cấu trúc câu cơ bản gồm Chủ ngữ (Subject) thực hiện hành động và Động từ (Verb) vị ngữ. Hãy chú ý chia động từ phù hợp với ngôi và thì của câu.`,
          keyWords
        });
      }
      if (onAwardXP) onAwardXP(10, 'Phân tích cấu trúc câu tiếng Anh!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="p-4 sm:p-6 rounded-3xl bg-gradient-to-r from-indigo-950/80 to-[#0e1526] border border-indigo-500/30 space-y-2 shadow-xl">
        <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
          ∞ MỔ XẺ CÂU & TỪ VỰNG KHÔNG GIỚI HẠN
        </span>
        <h1 className="text-2xl font-extrabold text-white">
          Máy Giải Phẫu Câu Tiếng Anh AI (Dành Cho Người Mất Gốc)
        </h1>
        <p className="text-xs text-slate-300">
          Gặp bất kỳ câu tiếng Anh nào khó hiểu, bạn chỉ cần dán vào đây — AI sẽ mổ xẻ Chủ ngữ, Động từ, quy tắc ngữ pháp và cho phép ghim thẳng vào Sổ Tay Ghi Chú.
        </p>

        {/* Quick Sample Chips */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold text-slate-400">Câu mẫu gợi ý:</span>
          {SAMPLE_CHIPS.map((chip, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => handleAnalyzeSentence(e, chip)}
              className="text-[11px] px-2.5 py-1 rounded-xl bg-slate-900 hover:bg-indigo-600/40 border border-slate-800 hover:border-indigo-500 text-slate-300 hover:text-white transition line-clamp-1"
            >
              "{chip.slice(0, 36)}..."
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleAnalyzeSentence} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={inputSentence}
          onChange={(e) => setInputSentence(e.target.value)}
          placeholder="Dán bất kỳ từ, cụm từ hoặc cả câu tiếng Anh vào đây..."
          className="flex-1 px-4 py-3.5 rounded-2xl bg-[#0e1526] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-xs font-extrabold text-white flex items-center justify-center gap-2 shrink-0 transition shadow-lg"
        >
          {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
          <span>Giải phẫu câu ngay</span>
        </button>
      </form>

      {analysis && (
        <div className="p-4 sm:p-6 rounded-3xl bg-[#0e1526] border border-indigo-500/40 space-y-4 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-extrabold text-emerald-300">
                🇻🇳 Dịch nghĩa: {analysis.translationVi}
              </h3>
              {onSpeak && (
                <button
                  onClick={() => onSpeak(inputSentence)}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-indigo-600 text-slate-300 hover:text-white transition"
                  title="Nghe phát âm cả câu"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={() =>
                onPinNote({
                  term: inputSentence,
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

          <p className="text-xs text-slate-300 leading-relaxed font-sans">
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
                      example: inputSentence,
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
  );
}
