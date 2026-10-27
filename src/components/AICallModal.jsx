import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  X,
  PhoneCall,
  PhoneOff,
  Mic,
  MicOff,
  Send,
  Volume2,
  Sparkles,
  Eye,
  EyeOff,
  Globe,
  Lightbulb,
  CheckCircle2,
  Trophy,
  RotateCcw,
  MessageSquare
} from 'lucide-react';

export default function AICallModal({
  isOpen,
  onClose,
  subdeck,
  starredCardIds = [],
  onSpeak,
  onAwardXP,
  onUpdateCardSRS
}) {
  if (!isOpen || !subdeck) return null;

  // Step 1: Pre-call Setup | Step 2: In-Call Room | Step 3: Call Summary
  const [callStage, setCallStage] = useState('setup'); // 'setup' | 'calling' | 'summary'

  // Pre-call Setup Options
  const [callLevel, setCallLevel] = useState('basic'); // 'basic' | 'intermediate' | 'exam'
  const [vocabScope, setVocabScope] = useState('all'); // 'all' | 'unlearned' | 'starred'

  // In-call state
  const [callDuration, setCallDuration] = useState(0);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [isUserSpeaking, setIsUserSpeaking] = useState(false);
  const [inputMode, setInputMode] = useState('mic'); // 'mic' | 'text'
  const [textInput, setTextInput] = useState('');
  const [isMicListening, setIsMicListening] = useState(false);

  // Subtitle & Hints Toggles
  const [showSubtitle, setShowSubtitle] = useState(true);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showIdeaHint, setShowIdeaHint] = useState(false);

  // Selected Target Words (3 active mission words)
  const [targetWords, setTargetWords] = useState([]);
  const [targetWordPool, setTargetWordPool] = useState([]);
  const [completedTargetWords, setCompletedTargetWords] = useState(new Set());
  const [justMasteredWord, setJustMasteredWord] = useState(null);

  // Dialogue Thread
  const [dialogueHistory, setDialogueHistory] = useState([]);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

  // Recognition ref
  const recognitionRef = useRef(null);
  const timerRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Generate target pool based on scope
  useEffect(() => {
    const cards = subdeck.cards || [];
    let pool = [...cards];

    if (vocabScope === 'unlearned') {
      const filtered = cards.filter((c) => c.status !== 'mastered');
      if (filtered.length > 0) pool = filtered;
    } else if (vocabScope === 'starred') {
      const filtered = cards.filter((c) => starredCardIds.includes(c.id));
      if (filtered.length > 0) pool = filtered;
    }

    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const initial3 = shuffled.slice(0, 3);
    const remaining = shuffled.slice(3);

    setTargetWords(initial3);
    setTargetWordPool(remaining);
    setCompletedTargetWords(new Set());
  }, [subdeck, vocabScope, starredCardIds]);

  // Topic-tailored AI Call Scripts
  const scriptPrompts = useMemo(() => {
    const topicTitle = subdeck.title || 'Chủ đề từ vựng';
    const sampleWords = (subdeck.cards || []).slice(0, 8).map((c) => c.word);

    if (callLevel === 'basic') {
      return [
        {
          aiEn: `Hello there! I'm Alex, your English speaking partner. Today we're chatting about ${topicTitle}. How's your day going so far?`,
          aiVi: `Xin chào bạn! Mình là Alex, bạn đồng hành luyện nói tiếng Anh của bạn. Hôm nay chúng ta sẽ cùng trò chuyện về ${topicTitle}. Ngày hôm nay của bạn thế nào rồi?`,
          suggestedAnswer: `My day is going great! I'm excited to practice some new words with you today.`
        },
        {
          aiEn: `That sounds lovely! When you think about ${topicTitle}, what is the first thing that comes to your mind?`,
          aiVi: `Nghe thật tuyệt! Khi nghĩ về ${topicTitle}, điều đầu tiên nảy ra trong tâm trí bạn là gì?`,
          suggestedAnswer: `To me, it's very important because it connects people and brings a lot of positive energy.`
        },
        {
          aiEn: `I completely agree with you! Could you share an experience or story related to this topic in your life?`,
          aiVi: `Mình hoàn toàn đồng ý! Bạn có thể chia sẻ một trải nghiệm hoặc kỷ niệm đáng nhớ liên quan đến chủ đề này trong cuộc sống không?`,
          suggestedAnswer: `Sure! I remember when I had to face a difficult situation, staying optimistic helped me overcome it.`
        },
        {
          aiEn: `Wow, that's such an inspiring story! How do you plan to apply what you've learned to your daily routine?`,
          aiVi: `Thật là một câu chuyện truyền cảm hứng! Bạn có dự định áp dụng những gì đã học vào cuộc sống hàng ngày như thế nào?`,
          suggestedAnswer: `I will try to cherish every moment and communicate more openly with the people around me.`
        },
        {
          aiEn: `Fantastic job! You've expressed your thoughts very clearly and naturally today. Let's wrap up this wonderful call!`,
          aiVi: `Xuất sắc lắm! Bạn đã diễn đạt suy nghĩ rất lưu loát và tự nhiên hôm nay. Hãy cùng tổng kết cuộc gọi tuyệt vời này nhé!`,
          suggestedAnswer: `Thank you Alex, I really enjoyed our conversation and learned a lot!`
        }
      ];
    }

    if (callLevel === 'intermediate') {
      return [
        {
          aiEn: `Good day! Welcome to our discussion on ${topicTitle}. In modern society, why do you think this area plays such a critical role?`,
          aiVi: `Chào bạn! Chào mừng bạn đến với buổi thảo luận về ${topicTitle}. Trong xã hội hiện đại, tại sao bạn nghĩ lĩnh vực này đóng vai trò then chốt như vậy?`,
          suggestedAnswer: `In today's fast-paced world, understanding this topic provides immense personal growth and professional advantages.`
        },
        {
          aiEn: `An insightful perspective! What are some of the main challenges people encounter in this context, and how can they tackle them?`,
          aiVi: `Góc nhìn rất sâu sắc! Đâu là những thách thức chính mà mọi người thường gặp phải, và họ có thể giải quyết chúng như thế nào?`,
          suggestedAnswer: `One key obstacle is maintaining balance and motivation, which requires consistent effort and a supportive environment.`
        },
        {
          aiEn: `Spot on! If you had to advise someone struggling with this, what practical recommendation would you offer?`,
          aiVi: `Chuẩn xác! Nếu phải đưa ra lời khuyên cho ai đó đang gặp khó khăn, bạn sẽ đề xuất giải pháp thực tế nào?`,
          suggestedAnswer: `I would strongly recommend building small daily habits and maintaining an open-minded approach.`
        },
        {
          aiEn: `Outstanding articulation! Thank you for sharing such well-reasoned viewpoints today.`,
          aiVi: `Khả năng diễn đạt thật ấn tượng! Cảm ơn bạn vì những quan điểm lập luận rất chặt chẽ hôm nay.`,
          suggestedAnswer: `Thank you Alex, exchanging ideas like this really sharpens my spoken English.`
        }
      ];
    }

    // Exam / IELTS level
    return [
      {
        aiEn: `Welcome to this speaking session. Let's discuss ${topicTitle}. In your view, to what extent does this influence long-term personal success?`,
        aiVi: `Chào mừng bạn đến với phiên luyện nói học thuật. Hãy cùng phân tích về ${topicTitle}. Theo quan điểm của bạn, yếu tố này ảnh hưởng đến mức độ nào tới sự thành công lâu dài của một cá nhân?`,
        suggestedAnswer: `I would argue that it plays an indispensable role, as it cultivates resilience and fosters collaborative synergy.`
      },
      {
        aiEn: `That's a sophisticated analysis. Some scholars argue that technology is reshaping this field. Would you concur or dissent?`,
        aiVi: `Phân tích rất học thuật. Một số chuyên gia cho rằng công nghệ đang tái định hình lĩnh vực này. Bạn đồng tình hay phản bác?`,
        suggestedAnswer: `While technological integration undeniably enhances efficiency, human empathy and ethical judgment remain irreplaceable.`
      },
      {
        aiEn: `Remarkable synthesis of arguments! Your lexical precision and flow are of high standard. Excellent performance!`,
        aiVi: `Khả năng tổng hợp lập luận đáng kinh ngạc! Độ chính xác từ vựng và độ trôi chảy của bạn đạt chuẩn rất cao. Xuất sắc!`,
        suggestedAnswer: `Thank you for the rigorous session, it was truly beneficial for my IELTS speaking readiness.`
      }
    ];
  }, [subdeck, callLevel]);

  // Current Prompt
  const currentPrompt = scriptPrompts[currentPromptIndex] || scriptPrompts[0];

  // Call timer ticking
  useEffect(() => {
    if (callStage === 'calling') {
      timerRef.current = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [callStage]);

  // AI speaks the current question when entering or advancing
  const playAiVoice = (text) => {
    if (!text) return;
    setIsAiSpeaking(true);

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = callLevel === 'basic' ? 0.95 : 1.05;
      utterance.pitch = 1.05;

      utterance.onend = () => {
        setIsAiSpeaking(false);
      };
      utterance.onerror = () => {
        setIsAiSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    } else if (onSpeak) {
      onSpeak(text, 1.0);
      setTimeout(() => setIsAiSpeaking(false), 3000);
    }
  };

  // Start Call Handler
  const handleStartCall = () => {
    setCallStage('calling');
    setCallDuration(0);
    setCurrentPromptIndex(0);
    setDialogueHistory([
      {
        sender: 'ai',
        text: scriptPrompts[0].aiEn,
        vi: scriptPrompts[0].aiVi
      }
    ]);
    setTimeout(() => {
      playAiVoice(scriptPrompts[0].aiEn);
    }, 500);
  };

  // End Call Handler
  const handleEndCall = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
    }
    setCallStage('summary');
  };

  // Speech Recognition Setup
  const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setInputMode('text');
      alert('Trình duyệt của bạn chưa hỗ trợ nhận dạng giọng nói trực tiếp. Đã chuyển sang chế độ gõ phím!');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = false;
      recognition.interimResults = true;
      recognitionRef.current = recognition;

      recognition.onstart = () => {
        setIsMicListening(true);
        setIsUserSpeaking(true);
      };

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((res) => res[0].transcript)
          .join('');
        setTextInput(transcript);
      };

      recognition.onerror = () => {
        setIsMicListening(false);
        setIsUserSpeaking(false);
      };

      recognition.onend = () => {
        setIsMicListening(false);
        setIsUserSpeaking(false);
      };

      recognition.start();
    } catch {
      setIsMicListening(false);
      setIsUserSpeaking(false);
    }
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
    }
    setIsMicListening(false);
    setIsUserSpeaking(false);
  };

  // Process user speech or typed response
  const handleSendResponse = (overrideText = null) => {
    const content = (overrideText || textInput).trim();
    if (!content) return;

    // Check target words used
    const lowerContent = content.toLowerCase();
    const hitWords = targetWords.filter((w) =>
      lowerContent.includes(w.word.toLowerCase())
    );

    let nextTargetWords = [...targetWords];
    let nextPool = [...targetWordPool];
    const newCompleted = new Set(completedTargetWords);

    hitWords.forEach((hw) => {
      newCompleted.add(hw.id);
      setJustMasteredWord(hw.word);
      setTimeout(() => setJustMasteredWord(null), 3000);

      // Award +15 XP per target word used
      if (onAwardXP) {
        onAwardXP(15, `Đã áp dụng từ mục tiêu "${hw.word}" vào hội thoại AI!`);
      }

      // Mark SRS progress
      if (onUpdateCardSRS && subdeck?.id) {
        onUpdateCardSRS(
          hw.id,
          {
            status: 'mastered',
            stepCompleted: 4,
            intervalDays: 7,
            lastStudiedAt: Date.now(),
            due: false
          },
          subdeck.id
        );
      }

      // Swap out with word from pool
      if (nextPool.length > 0) {
        const replacement = nextPool[0];
        nextPool = nextPool.slice(1);
        nextTargetWords = nextTargetWords.map((item) =>
          item.id === hw.id ? replacement : item
        );
      }
    });

    setCompletedTargetWords(newCompleted);
    setTargetWords(nextTargetWords);
    setTargetWordPool(nextPool);

    // Append to dialogue
    const newHistory = [
      ...dialogueHistory,
      {
        sender: 'user',
        text: content,
        hitWords: hitWords.map((w) => w.word)
      }
    ];

    setDialogueHistory(newHistory);
    setTextInput('');
    stopSpeechRecognition();

    // Advance AI Prompt
    if (currentPromptIndex + 1 < scriptPrompts.length) {
      const nextIdx = currentPromptIndex + 1;
      setCurrentPromptIndex(nextIdx);
      const nextP = scriptPrompts[nextIdx];

      setTimeout(() => {
        setDialogueHistory((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: nextP.aiEn,
            vi: nextP.aiVi
          }
        ]);
        playAiVoice(nextP.aiEn);
      }, 900);
    } else {
      // Finished all turns!
      setTimeout(() => {
        handleEndCall();
      }, 1500);
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0F172A] border border-indigo-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* ========================================================= */}
        {/* STAGE 1: PRE-CALL SETUP SCREEN                            */}
        {/* ========================================================= */}
        {callStage === 'setup' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-2xl shadow">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white">
                    Phòng Hội Thoại AI Call
                  </h2>
                  <p className="text-xs text-slate-400">
                    Chủ đề: <strong className="text-indigo-300">{subdeck.title}</strong>
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Level Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                1. Chọn cấp độ hội thoại:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  {
                    id: 'basic',
                    title: '🟢 Cơ bản',
                    desc: 'Giao tiếp hàng ngày, câu hỏi gần gũi, tốc độ vừa phải'
                  },
                  {
                    id: 'intermediate',
                    title: '🔵 Trung cấp',
                    desc: 'Thảo luận công việc, quan điểm và giải quyết tình huống'
                  },
                  {
                    id: 'exam',
                    title: '🟣 Luyện thi',
                    desc: 'IELTS Speaking Part 1-2 & VSTEP phản xạ học thuật'
                  }
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setCallLevel(lvl.id)}
                    className={`p-3.5 rounded-2xl border text-left transition ${
                      callLevel === lvl.id
                        ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg'
                        : 'bg-[#0B0F17] border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <p className="text-xs font-black text-white">{lvl.title}</p>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                      {lvl.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Scope Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                2. Bộ lọc từ vựng mục tiêu trong cuộc gọi:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'all', label: 'Tất cả 50 từ' },
                  { id: 'unlearned', label: 'Chỉ từ chưa thuộc' },
                  { id: 'starred', label: `Chỉ từ gắn sao (${starredCardIds.length})` }
                ].map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => setVocabScope(sc.id)}
                    className={`py-2 px-3 rounded-xl border text-center font-bold transition ${
                      vocabScope === sc.id
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : 'bg-[#0B0F17] border-slate-800 text-slate-400'
                    }`}
                  >
                    {sc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Preview Mission Words */}
            <div className="p-4 rounded-2xl bg-[#0B0F17] border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Nhiệm vụ trong cuộc gọi:
                </span>
                <span className="text-emerald-400 font-bold">+15 XP / mỗi từ dùng thành công</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Khi AI hỏi, hãy thử lồng ghép các từ vựng mục tiêu vào câu trả lời của bạn. Thẻ từ sẽ lập tức phát sáng và cộng điểm thưởng!
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {targetWords.map((tw) => (
                  <span
                    key={tw.id}
                    className="px-2.5 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold"
                  >
                    {tw.word} ({tw.meaning})
                  </span>
                ))}
              </div>
            </div>

            {/* Launch Call Button */}
            <button
              onClick={handleStartCall}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 text-white font-black text-sm shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2.5 transition transform hover:scale-[1.01] active:scale-95"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Bắt đầu cuộc gọi AI ngay →</span>
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* STAGE 2: IN-CALL ROOM (FOCUSED MINIMALIST EXPERIENCE)      */}
        {/* ========================================================= */}
        {callStage === 'calling' && (
          <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 space-y-4 overflow-y-auto">
            {/* Header: Status, Timer, End Call */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-1.5">
                    <span>Alex AI (Linh vật LexiFlow)</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {callLevel === 'basic' ? 'Cơ bản' : callLevel === 'intermediate' ? 'Trung cấp' : 'Luyện thi'}
                    </span>
                  </h3>
                  <p className="text-[10px] font-mono text-emerald-400 font-bold">
                    ⏱ {formatTime(callDuration)} • Đang kết nối
                  </p>
                </div>
              </div>

              <button
                onClick={handleEndCall}
                className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 shadow transition"
              >
                <PhoneOff className="w-3.5 h-3.5" />
                <span>Gác máy</span>
              </button>
            </div>

            {/* Central Stage: 3D Mascot & Audio Visualizer Ring */}
            <div className="flex flex-col items-center justify-center py-4 relative">
              {/* Outer Pulsing Waveform Ring */}
              <div
                className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isAiSpeaking
                    ? 'ring-8 ring-emerald-500/30 scale-105'
                    : isUserSpeaking
                    ? 'ring-8 ring-indigo-500/30 scale-105'
                    : 'ring-4 ring-slate-800'
                }`}
              >
                {/* Secondary Ripple Rings when talking */}
                {(isAiSpeaking || isUserSpeaking) && (
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-400/50 animate-ping pointer-events-none" />
                )}

                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 p-1 shadow-2xl flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#0F172A] flex flex-col items-center justify-center text-4xl sm:text-5xl shadow-inner select-none">
                    {isAiSpeaking ? '🗣️' : isUserSpeaking ? '👂' : '🤖'}
                  </div>
                </div>
              </div>

              {/* Status label under avatar */}
              <div className="mt-3 text-center">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full border transition ${
                    isAiSpeaking
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : isUserSpeaking
                      ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 animate-pulse'
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  {isAiSpeaking
                    ? '🔊 Alex đang nói...'
                    : isUserSpeaking
                    ? '🎙️ Đang lắng nghe bạn...'
                    : '⏳ Sẵn sàng phản hồi'}
                </span>
              </div>
            </div>

            {/* TARGET WORDS MISSION BOX */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0B0F17] border border-indigo-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Nhiệm Vụ: Dùng các từ này trong câu trả lời
                </span>
                <span className="text-[10px] text-emerald-400 font-bold">
                  Đã hoàn thành: {completedTargetWords.size} từ (+{completedTargetWords.size * 15} XP)
                </span>
              </div>

              {/* 3 Active Mission Words */}
              <div className="grid grid-cols-3 gap-2">
                {targetWords.map((tw) => {
                  const isJustHit = justMasteredWord === tw.word;
                  return (
                    <div
                      key={tw.id}
                      className={`p-2 rounded-xl border text-center transition-all ${
                        isJustHit
                          ? 'bg-emerald-500/30 border-emerald-400 text-emerald-200 scale-105 shadow-lg shadow-emerald-500/20'
                          : 'bg-slate-900/80 border-slate-800 text-slate-300'
                      }`}
                    >
                      <p className="text-xs font-mono font-bold text-white truncate">
                        {tw.word}
                      </p>
                      <p className="text-[10px] text-amber-300/90 truncate">{tw.meaning}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AI Speech Bubble & Assistant Toolbars */}
            <div className="space-y-2">
              {/* Dialogue Box */}
              <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-indigo-400 uppercase">
                    Alex (AI):
                  </span>
                  <button
                    onClick={() => playAiVoice(currentPrompt.aiEn)}
                    className="p-1 rounded-lg text-slate-400 hover:text-white"
                    title="Nghe lại câu hỏi"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {showSubtitle && (
                  <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                    "{currentPrompt.aiEn}"
                  </p>
                )}

                {showTranslation && (
                  <p className="text-xs text-slate-300 italic pt-1 border-t border-slate-800/80">
                    "{currentPrompt.aiVi}"
                  </p>
                )}
              </div>

              {/* Idea Hint Box */}
              {showIdeaHint && (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 flex items-start gap-2 animate-fade-in">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Gợi ý câu mẫu (Bấm để chọn):</strong>
                    <button
                      onClick={() => {
                        setTextInput(currentPrompt.suggestedAnswer);
                        handleSendResponse(currentPrompt.suggestedAnswer);
                      }}
                      className="text-left mt-1 block font-semibold text-white hover:text-amber-200 underline"
                    >
                      "{currentPrompt.suggestedAnswer}"
                    </button>
                  </div>
                </div>
              )}

              {/* 4 Support Tool Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setShowSubtitle((v) => !v)}
                    className={`px-2.5 py-1 rounded-lg border font-medium flex items-center gap-1 transition ${
                      showSubtitle
                        ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    {showSubtitle ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                    <span>Phụ đề</span>
                  </button>

                  <button
                    onClick={() => setShowTranslation((v) => !v)}
                    className={`px-2.5 py-1 rounded-lg border font-medium flex items-center gap-1 transition ${
                      showTranslation
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <Globe className="w-3 h-3" />
                    <span>Dịch</span>
                  </button>

                  <button
                    onClick={() => setShowIdeaHint((v) => !v)}
                    className={`px-2.5 py-1 rounded-lg border font-medium flex items-center gap-1 transition ${
                      showIdeaHint
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <Lightbulb className="w-3 h-3" />
                    <span>Bí ý tưởng?</span>
                  </button>
                </div>

                <button
                  onClick={() => setInputMode((m) => (m === 'mic' ? 'text' : 'mic'))}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center gap-1 font-medium transition"
                >
                  <MessageSquare className="w-3 h-3 text-indigo-400" />
                  <span>{inputMode === 'mic' ? '⌨️ Chuyển sang Gõ' : '🎙️ Chuyển sang Mic'}</span>
                </button>
              </div>
            </div>

            {/* User Interaction Controls (Mic or Text) */}
            <div className="pt-2 border-t border-slate-800/80">
              {inputMode === 'mic' ? (
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center gap-3 w-full justify-center">
                    <button
                      onClick={isMicListening ? stopSpeechRecognition : startSpeechRecognition}
                      className={`px-6 py-3.5 rounded-2xl font-bold text-xs flex items-center gap-2 shadow-xl transition transform active:scale-95 ${
                        isMicListening
                          ? 'bg-rose-600 hover:bg-rose-500 text-white animate-pulse'
                          : 'bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white'
                      }`}
                    >
                      {isMicListening ? (
                        <>
                          <MicOff className="w-4 h-4" />
                          <span>Dừng thu âm & Gửi câu trả lời</span>
                        </>
                      ) : (
                        <>
                          <Mic className="w-4 h-4" />
                          <span>Nhấn vào đây để nói tiếng Anh</span>
                        </>
                      )}
                    </button>

                    {textInput && !isMicListening && (
                      <button
                        onClick={() => handleSendResponse()}
                        className="p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white shadow"
                        title="Gửi câu vừa nói"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {textInput && (
                    <p className="text-xs text-slate-300 font-mono italic max-w-md text-center truncate">
                      "{textInput}"
                    </p>
                  )}
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendResponse();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Gõ câu trả lời tiếng Anh có chứa từ mục tiêu..."
                    className="flex-1 px-4 py-3 rounded-2xl bg-[#0B0F17] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                  />
                  <button
                    type="submit"
                    disabled={!textInput.trim()}
                    className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-1.5 shadow transition"
                  >
                    <span>Gửi</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STAGE 3: CALL SUMMARY REPORT                              */}
        {/* ========================================================= */}
        {callStage === 'summary' && (
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-500 to-indigo-600 flex items-center justify-center text-3xl shadow-xl">
              🏆
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Cuộc Gọi Thành Công
              </span>
              <h2 className="text-2xl font-black text-white">
                Xuất Sắc! Bạn Đã Hoàn Thành Cuộc Gọi!
              </h2>
              <p className="text-xs text-slate-400">
                Chủ đề: <strong className="text-white">{subdeck.title}</strong>
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-slate-800">
                <p className="text-[10px] text-slate-400 font-medium">Thời lượng gọi</p>
                <p className="text-base sm:text-lg font-black text-white mt-0.5">
                  {formatTime(callDuration)}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-emerald-500/30">
                <p className="text-[10px] text-emerald-400 font-medium">Từ mục tiêu đã dùng</p>
                <p className="text-base sm:text-lg font-black text-emerald-300 mt-0.5">
                  {completedTargetWords.size} từ
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-amber-500/30">
                <p className="text-[10px] text-amber-400 font-medium">Điểm thưởng</p>
                <p className="text-base sm:text-lg font-black text-amber-300 mt-0.5">
                  +{completedTargetWords.size * 15 + 20} XP
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setCallStage('setup')}
                className="px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-2 transition"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Gọi lại cuộc khác</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs flex items-center gap-2 shadow-lg transition"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Quay về Chủ đề</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
