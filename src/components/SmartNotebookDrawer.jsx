import React, { useState, useMemo, useRef } from 'react';
import {
  StickyNote,
  Maximize2,
  Minimize2,
  Pin,
  FileText,
  Search,
  Plus,
  Volume2,
  Trash2,
  Copy,
  Sparkles,
  Download,
  Upload,
  FileSpreadsheet,
  Check,
  X
} from 'lucide-react';
import { callGeminiAPI } from '../services/gemini';

export default function SmartNotebookDrawer({
  mode,
  setMode,
  activeTab,
  setActiveTab,
  notes = [],
  setNotes,
  onAddNote,
  onDeleteNote,
  scratchpad,
  setScratchpad,
  onSpeak,
  onShowToast
}) {
  const [term, setTerm] = useState('');
  const [phonetic, setPhonetic] = useState('');
  const [meaning, setMeaning] = useState('');
  const [example, setExample] = useState('');
  const [tag, setTag] = useState('Từ mới');
  const [filterTag, setFilterTag] = useState('Tất cả');
  const [noteSearch, setNoteSearch] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const fileInputRef = useRef(null);

  // AI Auto-Fill for quick note taking
  const handleAIFillNote = async () => {
    if (!term.trim()) {
      if (onShowToast) onShowToast('Hãy gõ 1 từ hoặc cụm từ tiếng Anh vào ô trước khi bấm AI Điền nhé!');
      return;
    }
    setAiLoading(true);
    try {
      const schema = {
        type: 'OBJECT',
        properties: {
          phonetic: { type: 'STRING' },
          meaningWithMnemonic: { type: 'STRING' },
          example: { type: 'STRING' }
        },
        required: ['phonetic', 'meaningWithMnemonic', 'example']
      };
      const res = await callGeminiAPI({
        prompt: `Từ/Cụm từ: "${term}". Hãy cung cấp phiên âm + tách âm tiết dễ đọc, nghĩa tiếng Việt ngắn gọn kèm 1 mẹo nhớ nhanh cho người mất gốc, và 1 câu ví dụ ngắn dễ hiểu.`,
        systemInstruction: 'Bạn là trợ lý ghi chú từ vựng thông minh cho người mất gốc tiếng Anh. Trả về JSON.',
        responseSchema: schema
      });
      setPhonetic(res.phonetic || '');
      setMeaning(res.meaningWithMnemonic || '');
      setExample(res.example || '');
      if (onShowToast) onShowToast('✨ AI đã tự động điền nghĩa, phiên âm và ví dụ!');
    } catch {
      setPhonetic(`/${term.toLowerCase()}/`);
      setMeaning(`Nghĩa & Mẹo nhớ của "${term}" (Ghi chú nhanh)`);
      setExample(`I am learning how to use "${term}" in a sentence.`);
    } finally {
      setAiLoading(false);
    }
  };

  const handleSaveNote = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    const newEntry = {
      id: `note-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
      term: term.trim(),
      phonetic: phonetic.trim() || 'Ghi chú cá nhân',
      meaning: meaning.trim() || 'Từ / cấu trúc cần nhớ',
      example: example.trim(),
      tag,
      createdAt: 'Vừa xong'
    };
    if (onAddNote) {
      onAddNote(newEntry);
    } else {
      setNotes([newEntry, ...notes]);
    }
    setTerm('');
    setPhonetic('');
    setMeaning('');
    setExample('');
    setShowAddForm(false);
    if (onShowToast) onShowToast(`📌 Đã lưu "${newEntry.term}" vào Sổ Tay Ghi Chú!`);
  };

  const handleDeleteNote = (id) => {
    if (onDeleteNote) {
      onDeleteNote(id);
    } else {
      setNotes(notes.filter((n) => n.id !== id));
    }
    if (onShowToast) onShowToast('Đã xóa ghi chú khỏi sổ tay.');
  };

  const handleCopyNote = (n) => {
    const text = `${n.term} (${n.phonetic || ''})\nNghĩa: ${n.meaning}\nVí dụ: ${n.example || ''}`;
    navigator.clipboard.writeText(text);
    setCopiedId(n.id);
    setTimeout(() => setCopiedId(null), 2000);
    if (onShowToast) onShowToast('Đã sao chép ghi chú vào clipboard!');
  };

  // ==========================================
  // REQUIREMENT 4: EXPORT & IMPORT (JSON & ANKI CSV)
  // ==========================================

  // 1. Export JSON Backup
  const handleExportJSON = () => {
    const backupData = {
      app: 'LexiFlow Studio',
      version: '4.0',
      exportedAt: new Date().toISOString(),
      notesCount: notes.length,
      notes,
      scratchpad
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lexiflow_notes_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    if (onShowToast) onShowToast(`💾 Đã xuất ${notes.length} ghi chú ra file JSON thành công!`);
  };

  // 2. Export Anki CSV
  const handleExportAnkiCSV = () => {
    // Header for Anki Deck
    // Format: Front,Back,Tags
    const escapeCSV = (str) => {
      if (!str) return '""';
      const clean = str.replace(/"/g, '""');
      return `"${clean}"`;
    };

    const rows = notes.map((n) => {
      const front = `${n.term}${n.phonetic ? `<br><small style="color: #6366f1;">${n.phonetic}</small>` : ''}`;
      const back = `<b>${n.meaning}</b>${n.example ? `<br><br><i>"${n.example}"</i>` : ''}`;
      const tags = `LexiFlow_${(n.tag || 'Vocab').replace(/\s+/g, '_')}`;
      return `${escapeCSV(front)},${escapeCSV(back)},${escapeCSV(tags)}`;
    });

    const csvContent = '\uFEFF' + ['"Front","Back","Tags"', ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lexiflow_anki_deck_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    if (onShowToast) onShowToast(`🃏 Đã xuất ${notes.length} thẻ Anki (.csv) sẵn sàng import!`);
  };

  // 3. Import JSON or CSV
  const handleTriggerImport = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    const fileName = file.name.toLowerCase();

    reader.onload = (event) => {
      const content = event.target?.result;
      if (!content || typeof content !== 'string') return;

      if (fileName.endsWith('.json')) {
        try {
          const parsed = JSON.parse(content);
          let importedNotes = [];
          if (Array.isArray(parsed)) {
            importedNotes = parsed;
          } else if (parsed.notes && Array.isArray(parsed.notes)) {
            importedNotes = parsed.notes;
            if (parsed.scratchpad && setScratchpad) {
              setScratchpad(parsed.scratchpad);
            }
          }

          if (importedNotes.length === 0) {
            if (onShowToast) onShowToast('Không tìm thấy ghi chú hợp lệ trong tệp JSON.');
            return;
          }

          // Merge without duplicate terms
          const existingTerms = new Set(notes.map((n) => n.term.toLowerCase()));
          const newEntries = importedNotes.filter((n) => n.term && !existingTerms.has(n.term.toLowerCase()));

          setNotes([...newEntries, ...notes]);
          if (onShowToast) {
            onShowToast(`📥 Đã nhập ${newEntries.length} ghi chú mới từ file JSON!`);
          }
        } catch {
          if (onShowToast) onShowToast('Lỗi: Tệp JSON không đúng định dạng.');
        }
      } else if (fileName.endsWith('.csv')) {
        try {
          // Parse CSV lines
          const lines = content.split(/\r?\n/).filter(line => line.trim().length > 0);
          const importedNotes = [];

          // Skip header if Front,Back,Tags
          const startIdx = lines[0].toLowerCase().includes('front') ? 1 : 0;

          for (let i = startIdx; i < lines.length; i++) {
            const line = lines[i];
            // Split CSV taking quotes into account
            const matches = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
            if (matches && matches.length >= 2) {
              const cleanFront = matches[0].replace(/^"|"$/g, '').replace(/""/g, '"');
              const cleanBack = matches[1].replace(/^"|"$/g, '').replace(/""/g, '"');
              const cleanTag = matches[2] ? matches[2].replace(/^"|"$/g, '').replace(/""/g, '"') : 'Anki';

              // Extract term and html
              const termOnly = cleanFront.split('<br>')[0].replace(/<[^>]*>/g, '').trim();
              const phoneticOnly = cleanFront.includes('<br>') ? cleanFront.split('<br>')[1].replace(/<[^>]*>/g, '').trim() : '';

              if (termOnly) {
                importedNotes.push({
                  id: `anki-${Date.now()}-${i}`,
                  term: termOnly,
                  phonetic: phoneticOnly || 'Nhập từ Anki CSV',
                  meaning: cleanBack.replace(/<[^>]*>/g, ' ').trim(),
                  example: '',
                  tag: cleanTag.replace('LexiFlow_', '') || 'Từ mới',
                  createdAt: 'Đã nhập từ Anki'
                });
              }
            }
          }

          if (importedNotes.length > 0) {
            const existingTerms = new Set(notes.map((n) => n.term.toLowerCase()));
            const newEntries = importedNotes.filter((n) => !existingTerms.has(n.term.toLowerCase()));
            setNotes([...newEntries, ...notes]);
            if (onShowToast) onShowToast(`📥 Đã nhập ${newEntries.length} thẻ từ file Anki CSV!`);
          } else {
            if (onShowToast) onShowToast('Không phân tích được dòng nào trong file CSV.');
          }
        } catch {
          if (onShowToast) onShowToast('Lỗi khi đọc file CSV.');
        }
      }
    };

    reader.readAsText(file, 'utf-8');
  };

  const filteredNotes = useMemo(() => {
    return notes.filter((n) => {
      const matchTag = filterTag === 'Tất cả' || n.tag === filterTag;
      const q = noteSearch.trim().toLowerCase();
      const matchQuery =
        !q ||
        n.term.toLowerCase().includes(q) ||
        n.meaning.toLowerCase().includes(q) ||
        (n.example && n.example.toLowerCase().includes(q));
      return matchTag && matchQuery;
    });
  }, [notes, filterTag, noteSearch]);

  const availableTags = useMemo(() => {
    const baseTags = ['Tất cả', 'Từ mới', 'Giao tiếp', 'Ngữ pháp', 'Đồ ăn', 'Hay nhầm'];
    const customTags = notes
      .map((n) => n.tag)
      .filter((t) => t && !baseTags.includes(t));
    return [...baseTags, ...Array.from(new Set(customTags))];
  }, [notes]);

  // 1. MINIMIZED MODE: Render nothing in the corner (opens from Topbar button)
  if (mode === 'minimized') {
    return null;
  }

  return (
    <>
      {/* Light Backdrop with subtle blur */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 transition-opacity animate-in fade-in"
        onClick={() => setMode('minimized')}
      />

      {/* Slide-over Drawer from Right Edge */}
      <aside
        className="fixed top-0 right-0 h-full w-full sm:w-[440px] md:w-[480px] bg-[#0E1424] border-l border-slate-800 shadow-2xl z-50 flex flex-col transition-all duration-300 animate-in slide-in-from-right"
      >
        {/* Hidden File Input for Import */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".json,.csv"
          className="hidden"
        />

        {/* Top Header of Drawer */}
        <div className="px-5 py-3.5 bg-gradient-to-r from-amber-500/15 via-slate-900 to-slate-900 border-b border-slate-800 flex items-center justify-between select-none shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
              <StickyNote className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                <span>Sổ Tay Ghi Chú</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold border border-amber-500/30">
                  {notes.length} thẻ
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">
                Xuất Anki & Đồng bộ tự động
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setMode('minimized')}
              className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition"
              title="Đóng Sổ tay"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

      {/* Mode Switcher: Pinned Vocab vs Free Scratchpad */}
      <div className="grid grid-cols-2 bg-slate-950/80 p-1 border-b border-slate-800 text-[11px] font-bold">
        <button
          onClick={() => setActiveTab('cards')}
          className={`py-1.5 rounded-xl transition flex items-center justify-center gap-1.5 ${
            activeTab === 'cards'
              ? 'bg-amber-500 text-slate-950 shadow'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Pin className="w-3 h-3" />
          <span>Từ & Cấu trúc ({notes.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('scratchpad')}
          className={`py-1.5 rounded-xl transition flex items-center justify-center gap-1.5 ${
            activeTab === 'scratchpad'
              ? 'bg-amber-500 text-slate-950 shadow'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <FileText className="w-3 h-3" />
          <span>Sổ Nháp Tự Do</span>
        </button>
      </div>

      {/* Action Toolbar: Export JSON, Export Anki CSV, Import */}
      <div className="px-3 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-1 text-[11px]">
        <div className="flex items-center gap-1">
          <button
            onClick={handleExportJSON}
            className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold flex items-center gap-1 transition"
            title="Xuất toàn bộ ghi chú ra file JSON sao lưu"
          >
            <Download className="w-3 h-3 text-cyan-400" />
            <span>Xuất JSON</span>
          </button>

          <button
            onClick={handleExportAnkiCSV}
            className="px-2 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-bold flex items-center gap-1 transition"
            title="Xuất bộ thẻ flashcard ra file .CSV chuẩn để nạp vào Anki"
          >
            <FileSpreadsheet className="w-3 h-3 text-emerald-400" />
            <span>Xuất Anki</span>
          </button>

          <button
            onClick={handleTriggerImport}
            className="px-2 py-1 rounded-lg bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 text-indigo-300 font-bold flex items-center gap-1 transition"
            title="Nhập ghi chú từ file JSON sao lưu hoặc file Anki CSV"
          >
            <Upload className="w-3 h-3 text-indigo-400" />
            <span>Nhập file</span>
          </button>
        </div>

        {activeTab === 'cards' && (
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-2 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-bold flex items-center gap-1 hover:bg-amber-500/30 transition shrink-0"
          >
            <Plus className="w-3 h-3" />
            <span>{showAddForm ? 'Đóng' : 'Thêm'}</span>
          </button>
        )}
      </div>

      {/* TAB 1: STRUCTURED VOCAB & FORMULA NOTES */}
      {activeTab === 'cards' ? (
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {/* Quick Add Form */}
          {showAddForm && (
            <form onSubmit={handleSaveNote} className="p-3 bg-slate-900 border-b border-slate-800 space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  placeholder="Từ mới hoặc cấu trúc..."
                  className="flex-1 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="button"
                  onClick={handleAIFillNote}
                  disabled={aiLoading}
                  className="px-2.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1 transition shrink-0"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>{aiLoading ? 'Đang điền...' : 'AI Điền'}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={phonetic}
                  onChange={(e) => setPhonetic(e.target.value)}
                  placeholder="Phiên âm / Tách âm..."
                  className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500"
                />
                <select
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="px-2 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-300"
                >
                  <option value="Từ mới">Từ mới</option>
                  <option value="Mẹo ngữ pháp">Mẹo ngữ pháp</option>
                  <option value="Cấu trúc câu">Cấu trúc câu</option>
                  <option value="Hay nhầm">Hay nhầm</option>
                </select>
              </div>

              <input
                type="text"
                value={meaning}
                onChange={(e) => setMeaning(e.target.value)}
                placeholder="Nghĩa & Mẹo nhớ cho người mất gốc..."
                className="w-full px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500"
              />

              <input
                type="text"
                value={example}
                onChange={(e) => setExample(e.target.value)}
                placeholder="Câu ví dụ thực tế..."
                className="w-full px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500"
              />

              <button
                type="submit"
                className="w-full py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-xs shadow transition"
              >
                Lưu vào Sổ Tay Ghi Chú
              </button>
            </form>
          )}

          {/* Search & Category Filter Chips */}
          <div className="p-3 bg-slate-950/70 border-b border-slate-800 space-y-2.5 shrink-0">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={noteSearch}
                onChange={(e) => setNoteSearch(e.target.value)}
                placeholder="Tìm trong ghi chú..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
              />
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {availableTags.map((t) => {
                const count = t === 'Tất cả' ? notes.length : notes.filter((n) => n.tag === t).length;
                const isActive = filterTag === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFilterTag(t)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition flex items-center gap-1.5 shrink-0 ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    <span>{t}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded-full font-extrabold ${
                        isActive ? 'bg-black/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notes Scrollable List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
            {filteredNotes.length === 0 ? (
              <div className="py-12 text-center text-slate-500 text-xs">
                {noteSearch ? 'Không tìm thấy ghi chú khớp từ khóa.' : 'Chưa có ghi chú nào. Hãy bấm "Thêm" hoặc ghim từ vựng bài học vào đây!'}
              </div>
            ) : (
              filteredNotes.map((n) => (
                <div
                  key={n.id}
                  className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition space-y-1.5 group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-xs text-white">
                          {n.term}
                        </span>
                        {n.tag && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-300 border border-amber-500/20 font-bold">
                            {n.tag}
                          </span>
                        )}
                      </div>
                      {n.phonetic && (
                        <p className="text-[11px] font-sans text-indigo-300 mt-0.5">
                          {n.phonetic}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition">
                      <button
                        onClick={() => onSpeak(n.term)}
                        className="p-1 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white"
                        title="Phát âm"
                      >
                        <Volume2 className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => handleCopyNote(n)}
                        className="p-1 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white"
                        title="Sao chép"
                      >
                        {copiedId === n.id ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                      <button
                        onClick={() => handleDeleteNote(n.id)}
                        className="p-1 rounded-md hover:bg-rose-950/60 text-slate-500 hover:text-rose-400"
                        title="Xóa ghi chú"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {n.meaning}
                  </p>

                  {n.example && (
                    <div className="text-xs text-amber-100/90 font-sans bg-slate-950/80 p-2.5 rounded-xl border border-slate-800/80 leading-relaxed italic">
                      💬 "{n.example}"
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        /* TAB 2: FREE SCRATCHPAD TEXTAREA */
        <div className="flex-1 flex flex-col p-3 space-y-2 min-h-0">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Ghi chú tự do, copy paste ý tưởng • Tự động lưu</span>
            <span className="text-amber-400 font-bold">Auto-save ON</span>
          </div>
          <textarea
            value={scratchpad}
            onChange={(e) => setScratchpad(e.target.value)}
            placeholder="Viết bất cứ điều gì vào đây (mục tiêu tuần, câu tâm đắc, từ vựng vừa nghe trên Youtube...)"
            className="flex-1 w-full p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 font-sans resize-none leading-relaxed"
          />
        </div>
      )}
      </aside>
    </>
  );
}
