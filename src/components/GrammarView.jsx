import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  BookOpen,
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
  Pin,
  Check,
  X,
  RotateCcw,
  Lightbulb,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Video,
  Volume2,
  AlertTriangle,
  FileText,
  HelpCircle,
  Filter,
  CheckCircle,
  Zap,
  ExternalLink,
  Search,
  MonitorPlay,
  Radio,
  RefreshCw
} from 'lucide-react';

export default function GrammarView({
  courses = [],
  setCourses,
  onPinNote,
  onAwardXP,
  initialLessonId
}) {
  // Navigation levels: 1 (Course List) | 2 (Lesson Directory) | 3 (Lesson Study)
  const [level, setLevel] = useState(() => (initialLessonId ? 3 : 1));
  const [selectedCourseId, setSelectedCourseId] = useState(() => {
    if (initialLessonId) {
      for (const c of courses) {
        if (c.lessons?.some((l) => l.id === initialLessonId)) return c.id;
      }
    }
    return courses[0]?.id || 'grammar-foundation';
  });
  const [selectedLessonId, setSelectedLessonId] = useState(initialLessonId || null);

  // Jump to lesson when initialLessonId changes
  useEffect(() => {
    if (initialLessonId) {
      for (const c of courses) {
        if (c.lessons?.some((l) => l.id === initialLessonId)) {
          setSelectedCourseId(c.id);
          break;
        }
      }
      setSelectedLessonId(initialLessonId);
      setLevel(3);
    }
  }, [initialLessonId, courses]);

  // Lesson interface tab: 'video' (Tab 1) | 'knowledge' (Tab 2) | 'practice' (Tab 3)
  const [lessonTab, setLessonTab] = useState('video');

  // Tab 3 Practice Filters & States
  const [practiceFilter, setPracticeFilter] = useState('all'); // 'all' | 'mcq' | 'error' | 'builder'
  const [mcqAnswers, setMcqAnswers] = useState({});
  const [errorAnswers, setErrorAnswers] = useState({});
  const [builderAnswers, setBuilderAnswers] = useState({}); // { [idx]: string[] }
  const [builderChecked, setBuilderChecked] = useState({});
  const [practiceSubmitted, setPracticeSubmitted] = useState(false);

  // Selected course object
  const currentCourse = useMemo(() => {
    return courses.find((c) => c.id === selectedCourseId) || courses[0];
  }, [courses, selectedCourseId]);

  // Selected lesson object
  const currentLesson = useMemo(() => {
    if (!currentCourse?.lessons) return null;
    return (
      currentCourse.lessons.find((l) => l.id === selectedLessonId) ||
      currentCourse.lessons[0]
    );
  }, [currentCourse, selectedLessonId]);

  // Practice items
  const practiceItems = useMemo(() => {
    if (!currentLesson?.practice) return [];
    return currentLesson.practice;
  }, [currentLesson]);

  const filteredPracticeItems = useMemo(() => {
    if (practiceFilter === 'all') return practiceItems;
    return practiceItems.filter((item) => item.type === practiceFilter);
  }, [practiceItems, practiceFilter]);

  // ==========================================
  // INTERACTIVE ANIMATED LESSON PLAYER STATE
  // ==========================================
  const [playerMode, setPlayerMode] = useState('board'); // 'board' | 'youtube'
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [playSpeed, setPlaySpeed] = useState(1.0); // 1.0 | 1.25
  const [slideProgress, setSlideProgress] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [checkpointAnswer, setCheckpointAnswer] = useState(null);
  const [checkpointSubmitted, setCheckpointSubmitted] = useState(false);
  const [customYoutubeUrl, setCustomYoutubeUrl] = useState('');
  const [activeVideoId, setActiveVideoId] = useState(currentLesson?.youtubeVideoId || '2t3n8B-F6r4');
  const [videoInputError, setVideoInputError] = useState('');

  // Reset lesson player state on lesson switch
  useEffect(() => {
    setCurrentSlideIndex(0);
    setIsAutoPlaying(false);
    setSlideProgress(0);
    setCheckpointAnswer(null);
    setCheckpointSubmitted(false);
    setCustomYoutubeUrl('');
    setVideoInputError('');
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    if (currentLesson?.youtubeVideoId) {
      setActiveVideoId(currentLesson.youtubeVideoId);
    }
  }, [currentLesson?.id]);

  // Cleanup speech when tab switches or component unmounts
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [lessonTab]);

  // Compute 5 slides with 100% guarantee for every lesson
  const lessonSlides = useMemo(() => {
    if (currentLesson?.slides && currentLesson.slides.length === 5) {
      return currentLesson.slides;
    }
    const f = currentLesson?.formula3Forms || {};
    const aff = f.affirmative || { formula: "S + V + O", example: "The team develops great software." };
    const neg = f.negative || { formula: "S + auxiliary + NOT + V", example: "They do not compromise on security." };
    const int = f.interrogative || { formula: "Auxiliary + S + V?", example: "Does the service respond rapidly?" };
    const trap = currentLesson?.trapsTable?.[0] || {
      wrong: "❌ Dịch từ tiếng Việt từng từ sang tiếng Anh",
      right: "✅ Áp dụng trật tự ngữ pháp tiếng Anh chuẩn",
      why: "Tuân thủ logic S-V-O và trợ động từ của câu."
    };
    const signals = currentLesson?.signalWords || [];
    const practiceQ = currentLesson?.practice?.[0] || {
      q: `Chọn đáp án đúng nhất theo quy tắc ngữ pháp của ${currentLesson?.title || 'bài học'}:`,
      options: ["Phương án chính xác", "Phương án nhiễu 1", "Phương án nhiễu 2", "Phương án sai cấu trúc"],
      answer: 0,
      explanation: "Phương án đầu tiên tuân thủ chính xác công thức ngữ pháp."
    };

    return [
      {
        slideNumber: 1,
        tag: "TÌNH HUỐNG & CẠM BẪY",
        title: "Tình huống thực tế & Lỗi người mất gốc hay mắc",
        type: "situation_trap",
        mindset: currentLesson?.coreMindset || "Hiểu bản chất để không mắc lỗi.",
        wrongText: trap.wrong,
        rightText: trap.right,
        whyText: trap.why,
        situationText: "Người học thường dịch thô từng từ từ tiếng Việt khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Xem đối chiếu trực quan bên dưới để khắc phục ngay:",
        diagram: [
          { label: "Bẫy tâm lý", text: "Dịch word-by-word từ tiếng Việt" },
          { label: "Bản chất câu", text: currentLesson?.mindmapNotes || "Tuân thủ đúng quy tắc S - V - O" },
          { label: "Mục tiêu đạt được", text: "Phản xạ câu chuẩn xác trong 3 giây" }
        ],
        narrationVi: `Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp: ${trap.wrong}. Câu chuẩn xác là: ${trap.right}. Lý do: ${trap.why}.`
      },
      {
        slideNumber: 2,
        tag: "BẢN ĐỒ CÔNG THỨC 3 THỂ",
        title: "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
        type: "formulas_svo",
        legend: [
          { tag: "S", label: "Chủ ngữ", color: "bg-blue-500/20 text-blue-300 border-blue-500/40" },
          { tag: "V", label: "Động từ chính", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" },
          { tag: "O / C", label: "Tân ngữ / Bổ ngữ", color: "bg-amber-500/20 text-amber-300 border-amber-500/40" }
        ],
        forms: [
          { symbol: "[+]", title: "Khẳng Định", formula: aff.formula, example: aff.example },
          { symbol: "[-]", title: "Phủ Định", formula: neg.formula, example: neg.example },
          { symbol: "[?]", title: "Nghi Vấn", formula: int.formula, example: int.example }
        ],
        narrationVi: "Slide 2 là bản đồ công thức 3 thể cốt lõi: Khẳng định, Phủ định và Nghi vấn với các thành phần S, V, O được mã màu rõ ràng."
      },
      {
        slideNumber: 3,
        tag: "MẸO PHẢN XẠ 3 GIÂY",
        title: "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
        type: "rapid_reflex",
        signals: signals.slice(0, 4).map(s => ({ keyword: s.word, tip: s.tip })),
        goldenRule: currentLesson?.mindmapNotes || "Xác định nhanh động từ chính và trợ động từ trước khi chọn đáp án.",
        narrationVi: "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào khoảng trống là biết ngay đáp án qua các từ khóa dấu hiệu."
      },
      {
        slideNumber: 4,
        tag: "PHÂN TÍCH VÍ DỤ & AUDIO",
        title: "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
        type: "example_analysis",
        examples: [
          {
            en: aff.example.split('/')[0]?.trim() || "The system is remarkably efficient.",
            vi: "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
            breakdown: [
              { label: "1. Chủ ngữ (S)", value: "Xác định ngôi thứ và số ít / số nhiều của chủ thể" },
              { label: "2. Vị ngữ (V)", value: "Động từ chia chính xác theo thì và quy tắc ngữ pháp" },
              { label: "3. Thành phần phụ", value: "Bổ nghĩa rõ ràng cho ngữ cảnh của câu" }
            ]
          },
          {
            en: (aff.example.split('/')[1] || neg.example.split('/')[0] || "We prioritize user experience.").trim(),
            vi: "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
            breakdown: [
              { label: "1. Trợ động từ", value: "Sử dụng trợ động từ chuẩn xác theo thể câu" },
              { label: "2. Động từ chính", value: "Giữ nguyên mẫu hoặc chia theo công thức bài học" },
              { label: "3. Ứng dụng thực tế", value: "Giao tiếp tự tin và viết email chuyên nghiệp" }
            ]
          }
        ],
        narrationVi: "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn nút loa để nghe giọng đọc bản xứ phát âm từng câu."
      },
      {
        slideNumber: 5,
        tag: "THỬ THÁCH BẢNG TƯƠNG TÁC",
        title: "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
        type: "checkpoint_challenge",
        question: practiceQ.q,
        options: practiceQ.options,
        answer: practiceQ.answer,
        explanation: practiceQ.explanation,
        narrationVi: "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất ngay trên màn hình trước khi sang Tab 3 làm bài tập."
      }
    ];
  }, [currentLesson]);

  const currentSlide = lessonSlides[currentSlideIndex] || lessonSlides[0];

  // Speech TTS helper with callback
  const speakUtterance = (text, lang = 'vi-VN', onEndCallback) => {
    if (!('speechSynthesis' in window)) {
      if (onEndCallback) onEndCallback();
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = playSpeed;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
      if (onEndCallback) onEndCallback();
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
      if (onEndCallback) onEndCallback();
    };

    window.speechSynthesis.speak(utterance);
  };

  // Auto-play effect
  useEffect(() => {
    let interval = null;
    let timer = null;

    if (isAutoPlaying && playerMode === 'board') {
      const curSlide = lessonSlides[currentSlideIndex];
      setSlideProgress(0);

      speakUtterance(curSlide?.narrationVi || curSlide?.title, 'vi-VN', () => {
        if (curSlide?.type === 'example_analysis' && curSlide?.examples?.[0]?.en) {
          speakUtterance(curSlide.examples[0].en, 'en-US', () => {
            timer = setTimeout(() => {
              if (currentSlideIndex < 4) {
                setCurrentSlideIndex((p) => p + 1);
                setSlideProgress(0);
              } else {
                setIsAutoPlaying(false);
                setSlideProgress(100);
              }
            }, 1000 / playSpeed);
          });
        } else {
          timer = setTimeout(() => {
            if (currentSlideIndex < 4) {
              setCurrentSlideIndex((p) => p + 1);
              setSlideProgress(0);
            } else {
              setIsAutoPlaying(false);
              setSlideProgress(100);
            }
          }, 1500 / playSpeed);
        }
      });

      const totalDuration = 11000 / playSpeed;
      const step = 100;
      const inc = (step / totalDuration) * 100;

      interval = setInterval(() => {
        setSlideProgress((prev) => {
          if (prev >= 100) return 100;
          return prev + inc;
        });
      }, step);
    } else {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (timer) clearTimeout(timer);
    };
  }, [isAutoPlaying, currentSlideIndex, playerMode, playSpeed, lessonSlides]);

  // Extract YouTube ID helper
  const extractYoutubeId = (url) => {
    if (!url) return null;
    const trimmed = url.trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
    const match = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
  };

  const handleApplyCustomVideo = (e) => {
    e.preventDefault();
    const id = extractYoutubeId(customYoutubeUrl);
    if (id) {
      setActiveVideoId(id);
      setVideoInputError('');
      if (setCourses) {
        setCourses(prev => prev.map(c => c.id === currentCourse.id ? {
          ...c,
          lessons: c.lessons.map(l => l.id === currentLesson.id ? { ...l, youtubeVideoId: id } : l)
        } : c));
      }
    } else {
      setVideoInputError('Link YouTube không hợp lệ. Vui lòng dán link dạng https://www.youtube.com/watch?v=... hoặc https://youtu.be/...');
    }
  };

  // Speech helper for simple English sentences
  const speakText = (text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = playSpeed;
    window.speechSynthesis.speak(utterance);
  };

  // MCQ handler
  const handleSelectMcq = (idx, optIdx) => {
    setMcqAnswers((prev) => ({ ...prev, [idx]: optIdx }));
  };

  // Error correction handler
  const handleSelectErrorPart = (idx, part) => {
    setErrorAnswers((prev) => ({ ...prev, [idx]: part }));
  };

  // Sentence Builder helpers
  const handleAddBuilderWord = (idx, word, wordIndex) => {
    const currentList = builderAnswers[idx] || [];
    setBuilderAnswers((prev) => ({
      ...prev,
      [idx]: [...currentList, { word, originalIdx: wordIndex }]
    }));
  };

  const handleRemoveBuilderWord = (idx, removeIndex) => {
    const currentList = builderAnswers[idx] || [];
    const updated = currentList.filter((_, i) => i !== removeIndex);
    setBuilderAnswers((prev) => ({ ...prev, [idx]: updated }));
  };

  const handleResetBuilder = (idx) => {
    setBuilderAnswers((prev) => ({ ...prev, [idx]: [] }));
    setBuilderChecked((prev) => ({ ...prev, [idx]: false }));
  };

  const handleCheckBuilder = (idx, targetEn) => {
    const currentList = builderAnswers[idx] || [];
    const builtSentence = currentList.map((item) => item.word).join(' ').trim();
    const isCorrect =
      builtSentence.toLowerCase().replace(/[.,?!]/g, '') ===
      targetEn.toLowerCase().replace(/[.,?!]/g, '');

    setBuilderChecked((prev) => ({ ...prev, [idx]: isCorrect ? 'correct' : 'wrong' }));
    if (isCorrect) {
      speakText(targetEn);
    }
  };

  const handleHintBuilder = (idx, targetWords) => {
    const currentList = builderAnswers[idx] || [];
    if (currentList.length < targetWords.length) {
      const nextWord = targetWords[currentList.length];
      setBuilderAnswers((prev) => ({
        ...prev,
        [idx]: [...currentList, { word: nextWord, originalIdx: -1 }]
      }));
    }
  };

  // Submit all practice
  const handleSubmitPractice = () => {
    setPracticeSubmitted(true);
    let correctCount = 0;

    practiceItems.forEach((item, idx) => {
      if (item.type === 'mcq') {
        if (mcqAnswers[idx] === item.answer) correctCount++;
      } else if (item.type === 'error') {
        if (errorAnswers[idx] === item.wrongPart) correctCount++;
      } else if (item.type === 'builder') {
        const built = (builderAnswers[idx] || []).map((w) => w.word).join(' ').trim();
        if (
          built.toLowerCase().replace(/[.,?!]/g, '') ===
          item.enTarget.toLowerCase().replace(/[.,?!]/g, '')
        ) {
          correctCount++;
        }
      }
    });

    const earnedXP = correctCount * 12;
    if (onAwardXP && earnedXP > 0) {
      onAwardXP(earnedXP, `Xuất sắc hoàn thành bài tập ngữ pháp với ${correctCount}/${practiceItems.length} câu đúng!`);
    }

    if (correctCount >= Math.ceil(practiceItems.length * 0.6)) {
      if (setCourses) {
        setCourses((prevCourses) =>
          prevCourses.map((c) =>
            c.id === currentCourse.id
              ? {
                  ...c,
                  lessons: c.lessons.map((l) =>
                    l.id === currentLesson.id
                      ? { ...l, completed: true, progress: 100, score: correctCount }
                      : l
                  )
                }
              : c
          )
        );
      }
    }
  };

  const handleResetAllPractice = () => {
    setMcqAnswers({});
    setErrorAnswers({});
    setBuilderAnswers({});
    setBuilderChecked({});
    setPracticeSubmitted(false);
  };

  // ==========================================
  // LEVEL 1: KHÓA NGỮ PHÁP TỔNG QUAN
  // ==========================================
  if (level === 1) {
    return (
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Banner */}
        <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">📖</span>
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Lộ Trình Ngữ Pháp Thực Chiến Toàn Diện
              </h1>
            </div>
            <p className="text-xs text-slate-400">
              Làm chủ ngữ pháp từ câu đơn, 12 thì đến cấu trúc nâng cao qua giải thích trực quan và bài tập phản xạ ứng dụng.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-indigo-300 font-semibold px-3 py-1.5 rounded-xl bg-[#0B0F17] border border-slate-800">
            <span>3 Khóa Học</span>
            <span>•</span>
            <span>49 Chuyên Đề</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">Bài tập phản xạ</span>
          </div>
        </div>

        {/* 3 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {courses.map((course) => {
            const completedCount = course.lessons?.filter((l) => l.completed).length || 0;
            const total = course.lessons?.length || course.totalLessons || 15;
            const percent = Math.round((completedCount / total) * 100);

            return (
              <div
                key={course.id}
                className="rounded-3xl bg-[#131B2E] border border-slate-800/80 hover:border-indigo-500/40 p-6 flex flex-col justify-between transition duration-200 shadow-lg group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl p-2.5 rounded-2xl bg-[#0B0F17] border border-slate-800">
                      {course.icon || '📖'}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${course.badgeColor}`}
                    >
                      {course.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                      {course.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Tiến độ khóa học</span>
                      <span className="font-bold text-slate-200">
                        {completedCount} / {total} bài ({percent}%)
                      </span>
                    </div>
                    <div className="w-full bg-[#0B0F17] rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-indigo-500 h-full rounded-full transition-all duration-300"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5" /> {course.duration}
                  </span>

                  <button
                    onClick={() => {
                      setSelectedCourseId(course.id);
                      setLevel(2);
                    }}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-md shadow-indigo-600/20"
                  >
                    <span>Vào lộ trình</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ==========================================
  // LEVEL 2: DANH MỤC BÀI HỌC CỦA KHÓA
  // ==========================================
  if (level === 2) {
    const lessons = currentCourse.lessons || [];
    const completedCount = lessons.filter((l) => l.completed).length;

    return (
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Back navigation */}
        <button
          onClick={() => setLevel(1)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#131B2E] border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Trở lại danh sách khóa ngữ pháp</span>
        </button>

        {/* Course Banner */}
        <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5">
            <span className="text-3xl">{currentCourse.icon || '📖'}</span>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">{currentCourse.title}</h1>
              <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{currentCourse.desc}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-emerald-400 px-3 py-1.5 rounded-xl bg-[#0B0F17] border border-slate-800">
              Đã xong {completedCount} / {lessons.length} chuyên đề
            </span>
          </div>
        </div>

        {/* Lesson Cards List */}
        <div className="space-y-3">
          {lessons.map((lesson, idx) => (
            <div
              key={lesson.id}
              onClick={() => {
                setSelectedLessonId(lesson.id);
                setLevel(3);
                setLessonTab('video');
                setPracticeFilter('all');
                handleResetAllPractice();
              }}
              className="p-4 rounded-2xl bg-[#131B2E] hover:bg-[#18233C] border border-slate-800/80 hover:border-indigo-500/40 transition cursor-pointer flex items-center justify-between gap-4 group shadow-md"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className={`w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center shrink-0 ${
                    lesson.completed
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-[#0B0F17] text-slate-400 border border-slate-800 group-hover:bg-indigo-600 group-hover:text-white'
                  }`}
                >
                  {lesson.completed ? <Check className="w-4 h-4" /> : idx + 1}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-indigo-400">
                      {lesson.lessonNumber || `Bài ${idx + 1}`}
                    </span>
                    <span className="text-xs text-slate-400">• {lesson.duration}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition truncate mt-0.5">
                    {lesson.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    lesson.completed
                      ? 'bg-emerald-500/15 text-emerald-300'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {lesson.completed ? 'Đã xong' : 'Chưa học'}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ==========================================
  // LEVEL 3: MÀN HÌNH BÀI HỌC 3 TAB CHUYÊN SÂU
  // ==========================================
  if (level === 3 && currentLesson) {
    return (
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Back navigation */}
        <button
          onClick={() => setLevel(2)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#131B2E] border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Trở lại danh mục bài ({currentCourse.shortTitle || currentCourse.title})</span>
        </button>

        {/* Lesson Header */}
        <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-indigo-400 px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30">
              {currentLesson.lessonNumber || 'Bài học'}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {currentLesson.duration}
            </span>
          </div>

          <h1 className="text-lg md:text-xl font-bold text-white tracking-tight">
            {currentLesson.title}
          </h1>

          <p className="text-xs text-slate-300 leading-relaxed bg-[#0B0F17] p-3.5 rounded-2xl border border-slate-800">
            💡 <strong>Tư duy cốt lõi:</strong> {currentLesson.coreMindset}
          </p>
        </div>

        {/* 3 Specialized Tabs Navigation */}
        <div className="flex flex-wrap border-b border-slate-800 bg-[#131B2E]/60 rounded-2xl p-1 gap-1">
          <button
            onClick={() => setLessonTab('video')}
            className={`flex-1 min-w-[160px] px-4 py-2.5 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 ${
              lessonTab === 'video'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Video className="w-4 h-4 text-red-400" />
            <span>Tab 1: Trình Chiếu Bài Giảng & Video</span>
          </button>

          <button
            onClick={() => setLessonTab('knowledge')}
            className={`flex-1 min-w-[160px] px-4 py-2.5 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 ${
              lessonTab === 'knowledge'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>Tab 2: Kiến Thức & Mẹo 3 Giây</span>
          </button>

          <button
            onClick={() => setLessonTab('practice')}
            className={`flex-1 min-w-[160px] px-4 py-2.5 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 ${
              lessonTab === 'practice'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Sparkles className="w-4 h-4 text-indigo-300" />
            <span>Tab 3: Thực Hành 15 Bài Tập</span>
          </button>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: 🎬 VIDEO BÀI GIẢNG & SƠ ĐỒ TƯ DUY */}
        {/* ========================================================= */}
        {/* ========================================================= */}
        {/* TAB 1: 🎬 TRÌNH CHIẾU BÀI GIẢNG TƯƠNG TÁC & VIDEO YOUTUBE */}
        {/* ========================================================= */}
        {lessonTab === 'video' && (
          <div className="space-y-6 animate-fade-in">
            {/* Main Player Container */}
            <div className="rounded-3xl bg-[#131B2E] border border-slate-800/80 p-5 md:p-6 shadow-2xl space-y-4">
              
              {/* Top Header & Mode Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-500 font-bold text-base">🎬</span>
                    <h3 className="text-sm md:text-base font-bold text-white tracking-tight">
                      {playerMode === 'board'
                        ? 'Trình Chiếu Bài Giảng Tương Tác & Voice AI'
                        : 'Xem Video YouTube & Nhúng Video Riêng'}
                    </h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {playerMode === 'board' ? '100% Hoạt Động (No Bug)' : 'YouTube Mode'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {playerMode === 'board'
                      ? '5 Slide bài giảng chuẩn sư phạm: Tình huống thực tế, Công thức 3 thể S-V-O, Mẹo 3 giây, Phân tích ví dụ & Thử thách bảng.'
                      : 'Xem video bài giảng trực tiếp trên YouTube hoặc dán link video yêu thích của bạn.'}
                  </p>
                </div>

                {/* Mode Toggle Switch */}
                <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#0B0F17] border border-slate-800 shrink-0">
                  <button
                    onClick={() => {
                      setPlayerMode('board');
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                      playerMode === 'board'
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <MonitorPlay className="w-3.5 h-3.5" />
                    <span>Bảng Tương Tác</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsAutoPlaying(false);
                      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                      setPlayerMode('youtube');
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                      playerMode === 'youtube'
                        ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>YouTube</span>
                  </button>
                </div>
              </div>

              {/* ======================================================= */}
              {/* CHẾ ĐỘ 1: BẢNG BÀI GIẢNG TƯƠNG TÁC (INTERACTIVE BOARD PLAYER) */}
              {/* ======================================================= */}
              {playerMode === 'board' && (
                <div className="space-y-4">
                  {/* 16:9 Cyber Blackboard Screen */}
                  <div className="relative w-full aspect-video min-h-[380px] rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-[#060a14] via-[#0b1222] to-[#070c18] shadow-2xl p-4 md:p-6 flex flex-col justify-between overflow-hidden">
                    
                    {/* Top Inside Screen Info Bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-indigo-500/20 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-[10px]">
                          SLIDE {currentSlideIndex + 1} / 5
                        </span>
                        <span className="font-bold text-amber-300 bg-amber-500/15 px-2 py-0.5 rounded border border-amber-500/30 text-[10px]">
                          {currentSlide.tag}
                        </span>
                        <span className="text-white font-bold hidden sm:inline truncate max-w-[280px]">
                          {currentSlide.title}
                        </span>
                      </div>

                      {/* Speaking / Audio Status Indicator */}
                      <div className="flex items-center gap-2">
                        {isSpeaking ? (
                          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px] bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30 animate-pulse">
                            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
                            <span>Voice AI đang giảng...</span>
                          </div>
                        ) : (
                          <div className="text-slate-500 text-[11px] hidden sm:block">
                            Chế độ tự động đọc & chuyển slide
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Canvas Slide Content Body */}
                    <div className="flex-1 my-3 overflow-y-auto pr-1">
                      {/* SLIDE 1: TÌNH HUỐNG THỰC TẾ & LỖI HAY GẶP */}
                      {currentSlide.type === 'situation_trap' && (
                        <div className="h-full flex flex-col justify-center space-y-3.5 animate-fade-in">
                          <p className="text-xs text-slate-300 leading-relaxed italic">
                            💡 "{currentSlide.situationText}"
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                            {/* Wrong Card */}
                            <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-1">
                              <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">
                                ❌ Lỗi Người Mất Gốc Hay Mắc (Dịch Thô)
                              </span>
                              <div className="text-sm md:text-base font-bold text-rose-200">
                                {currentSlide.wrongText}
                              </div>
                            </div>

                            {/* Right Card */}
                            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
                              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                                ✅ Cấu Trúc Bản Xứ Chuẩn Xác
                              </span>
                              <div className="text-sm md:text-base font-bold text-emerald-200">
                                {currentSlide.rightText}
                              </div>
                            </div>
                          </div>

                          {/* Why Text Banner */}
                          <div className="p-3 rounded-xl bg-[#090f1d] border border-indigo-500/20 text-xs text-slate-300 flex items-start gap-2">
                            <span className="text-amber-400 font-bold shrink-0">⚡ Bản chất:</span>
                            <span>{currentSlide.whyText}</span>
                          </div>

                          {/* Visual Schema Flow */}
                          <div className="grid grid-cols-3 gap-2 pt-1">
                            {currentSlide.diagram?.map((d, di) => (
                              <div
                                key={di}
                                className="p-2 rounded-xl bg-[#090f1d]/80 border border-slate-800 text-center space-y-0.5"
                              >
                                <span className="text-[10px] text-indigo-400 font-bold block">{d.label}</span>
                                <span className="text-[11px] text-slate-200 font-medium block truncate">
                                  {d.text}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* SLIDE 2: BẢN ĐỒ CÔNG THỨC 3 THỂ S-V-O */}
                      {currentSlide.type === 'formulas_svo' && (
                        <div className="h-full flex flex-col justify-center space-y-3 animate-fade-in">
                          {/* S-V-O Legend */}
                          <div className="flex items-center gap-2 text-[10px] font-bold flex-wrap">
                            <span className="text-slate-400">Mã màu thành phần:</span>
                            {currentSlide.legend?.map((leg, li) => (
                              <span
                                key={li}
                                className={`px-2 py-0.5 rounded border ${leg.color}`}
                              >
                                {leg.tag}: {leg.label}
                              </span>
                            ))}
                          </div>

                          {/* 3 Forms Cards */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                            {currentSlide.forms?.map((form, fi) => (
                              <div
                                key={fi}
                                className="p-3 rounded-2xl bg-[#090f1d] border border-slate-800 hover:border-indigo-500/40 transition space-y-1.5"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-mono font-bold text-indigo-400">
                                    {form.symbol} {form.title}
                                  </span>
                                </div>
                                <div className="text-xs font-mono font-bold text-amber-300 bg-[#060a14] p-2 rounded-xl border border-slate-800">
                                  {form.formula}
                                </div>
                                <div className="text-[11px] text-slate-300 italic pt-1 line-clamp-2">
                                  Ví dụ: {form.example}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* SLIDE 3: MẸO PHẢN XẠ 3 GIÂY */}
                      {currentSlide.type === 'rapid_reflex' && (
                        <div className="h-full flex flex-col justify-center space-y-3.5 animate-fade-in">
                          <h4 className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                            <Zap className="w-4 h-4 text-amber-400" />
                            <span>Dấu Hiệu Nhận Biết Bắt Trúng Đáp Án Trong 3 Giây:</span>
                          </h4>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {currentSlide.signals?.map((sig, si) => (
                              <div
                                key={si}
                                className="p-3 rounded-2xl bg-[#090f1d] border border-indigo-500/20 flex items-start gap-2.5"
                              >
                                <span className="text-base p-1.5 rounded-lg bg-indigo-500/15 text-indigo-300 shrink-0">
                                  ⚡
                                </span>
                                <div>
                                  <div className="text-xs font-bold text-emerald-300">{sig.keyword}</div>
                                  <div className="text-[11px] text-slate-300 mt-0.5">{sig.tip}</div>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Golden Rule */}
                          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2">
                            <span className="font-bold shrink-0">🏆 Nguyên tắc vàng:</span>
                            <span>{currentSlide.goldenRule}</span>
                          </div>
                        </div>
                      )}

                      {/* SLIDE 4: PHÂN TÍCH TỪNG BƯỚC 2 VÍ DỤ MẪU */}
                      {currentSlide.type === 'example_analysis' && (
                        <div className="h-full flex flex-col justify-center space-y-3 animate-fade-in">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {currentSlide.examples?.map((exItem, ei) => (
                              <div
                                key={ei}
                                className="p-3.5 rounded-2xl bg-[#090f1d] border border-slate-800 space-y-2 flex flex-col justify-between"
                              >
                                <div className="space-y-1">
                                  <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                                      Ví Dụ Mẫu #{ei + 1}
                                    </span>
                                    <button
                                      onClick={() => speakText(exItem.en)}
                                      className="px-2 py-1 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 text-[11px] font-bold flex items-center gap-1 transition"
                                      title="Nghe phát âm bản xứ"
                                    >
                                      <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
                                      <span>Nghe câu</span>
                                    </button>
                                  </div>

                                  <div className="text-xs md:text-sm font-bold text-white">
                                    "{exItem.en}"
                                  </div>
                                  <div className="text-[11px] text-slate-400 italic">
                                    {exItem.vi}
                                  </div>
                                </div>

                                {/* Step Breakdown */}
                                <div className="space-y-1 pt-1 border-t border-slate-800/80">
                                  {exItem.breakdown?.map((b, bi) => (
                                    <div key={bi} className="text-[10px] text-slate-300 flex items-center justify-between">
                                      <span className="font-bold text-indigo-300">{b.label}:</span>
                                      <span className="text-slate-400 truncate max-w-[180px]">{b.value}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* SLIDE 5: THỬ THÁCH NHANH TRÊN BẢNG */}
                      {currentSlide.type === 'checkpoint_challenge' && (
                        <div className="h-full flex flex-col justify-center space-y-3 animate-fade-in">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                              <Sparkles className="w-4 h-4 text-amber-400" />
                              <span>Thử Thách Phản Xạ Nhanh Trên Bảng Trước Khi Vào Bài Tập:</span>
                            </span>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-[#090f1d] border border-indigo-500/30 text-xs md:text-sm font-bold text-white">
                            {currentSlide.question}
                          </div>

                          {/* 4 Clickable Options */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {currentSlide.options?.map((opt, oi) => {
                              const isSelected = checkpointAnswer === oi;
                              const isCorrect = oi === currentSlide.answer;
                              let btnStyle = 'bg-[#090f1d] border-slate-800 text-slate-300 hover:border-slate-700';

                              if (checkpointSubmitted) {
                                if (isCorrect) {
                                  btnStyle = 'bg-emerald-500/20 border-emerald-500/50 text-emerald-200 font-bold';
                                } else if (isSelected) {
                                  btnStyle = 'bg-rose-500/20 border-rose-500/50 text-rose-200';
                                }
                              } else if (isSelected) {
                                btnStyle = 'bg-indigo-600/30 border-indigo-500 text-white font-bold';
                              }

                              return (
                                <button
                                  key={oi}
                                  onClick={() => {
                                    setCheckpointAnswer(oi);
                                    setCheckpointSubmitted(true);
                                  }}
                                  className={`p-2.5 rounded-xl border text-xs text-left transition flex items-center gap-2 ${btnStyle}`}
                                >
                                  <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center font-bold text-[10px] shrink-0">
                                    {String.fromCharCode(65 + oi)}
                                  </span>
                                  <span className="truncate">{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Instant Feedback Box */}
                          {checkpointSubmitted && (
                            <div className="p-2.5 rounded-xl bg-[#090f1d] border border-emerald-500/30 flex items-center justify-between gap-3 text-xs animate-fade-in">
                              <div className="text-slate-300 text-[11px] truncate">
                                💡 <strong>Giải thích:</strong> {currentSlide.explanation}
                              </div>
                              <button
                                onClick={() => setLessonTab('practice')}
                                className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] shrink-0 flex items-center gap-1 transition"
                              >
                                <span>Làm 15 bài tập</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Inside Player Timeline & Controls Bar */}
                    <div className="pt-2 border-t border-indigo-500/20 space-y-2">
                      {/* Animated Progress Timeline Bar */}
                      <div className="w-full bg-slate-800/80 rounded-full h-1 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 h-full rounded-full transition-all duration-150"
                          style={{ width: `${slideProgress}%` }}
                        />
                      </div>

                      {/* Player Control Buttons Row */}
                      <div className="flex items-center justify-between text-xs pt-1">
                        {/* Play / Pause & Slide Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            disabled={currentSlideIndex === 0}
                            onClick={() => {
                              setIsAutoPlaying(false);
                              if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                              setCurrentSlideIndex((p) => Math.max(0, p - 1));
                              setSlideProgress(0);
                            }}
                            className="p-1.5 rounded-xl bg-[#090f1d] border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 transition"
                            title="Slide trước"
                          >
                            <SkipBack className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => {
                              setIsAutoPlaying((prev) => !prev);
                            }}
                            className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition ${
                              isAutoPlaying
                                ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-600/30'
                                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                            }`}
                          >
                            {isAutoPlaying ? (
                              <>
                                <Pause className="w-3.5 h-3.5 fill-current" />
                                <span>Tạm dừng</span>
                              </>
                            ) : (
                              <>
                                <Play className="w-3.5 h-3.5 fill-current" />
                                <span>Phát tự động (Auto-Play + Voice)</span>
                              </>
                            )}
                          </button>

                          <button
                            disabled={currentSlideIndex === 4}
                            onClick={() => {
                              setIsAutoPlaying(false);
                              if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                              setCurrentSlideIndex((p) => Math.min(4, p + 1));
                              setSlideProgress(0);
                            }}
                            className="p-1.5 rounded-xl bg-[#090f1d] border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 transition"
                            title="Slide tiếp theo"
                          >
                            <SkipForward className="w-4 h-4" />
                          </button>

                          {/* Speed Toggle */}
                          <button
                            onClick={() => setPlaySpeed((s) => (s === 1.0 ? 1.25 : 1.0))}
                            className="px-2 py-1 rounded-lg bg-[#090f1d] border border-slate-800 text-indigo-300 font-mono font-bold text-[10px] hover:text-white transition"
                            title="Tốc độ giảng"
                          >
                            {playSpeed}x
                          </button>
                        </div>

                        {/* Slide Indicator Dots */}
                        <div className="flex items-center gap-1.5 hidden sm:flex">
                          {[0, 1, 2, 3, 4].map((idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                setIsAutoPlaying(false);
                                if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                                setCurrentSlideIndex(idx);
                                setSlideProgress(0);
                              }}
                              className={`h-2 rounded-full transition-all ${
                                currentSlideIndex === idx
                                  ? 'w-6 bg-indigo-500'
                                  : 'w-2 bg-slate-700 hover:bg-slate-600'
                              }`}
                              title={`Tới slide ${idx + 1}`}
                            />
                          ))}
                        </div>

                        {/* Read narration button */}
                        <button
                          onClick={() => {
                            speakUtterance(currentSlide?.narrationVi || currentSlide?.title, 'vi-VN');
                          }}
                          className="px-2.5 py-1 rounded-xl bg-[#090f1d] border border-indigo-500/30 text-indigo-300 text-[11px] font-bold flex items-center gap-1 hover:text-white transition"
                        >
                          <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
                          <span className="hidden md:inline">Đọc slide này</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 5 Timestamps Bar below screen */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold text-slate-300 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Mốc Nội Dung Bài Giảng (Bấm để nhảy tới slide tương ứng):</span>
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        5 Slide hoàn chỉnh
                      </span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                      {lessonSlides.map((s, si) => (
                        <button
                          key={si}
                          onClick={() => {
                            setIsAutoPlaying(false);
                            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                            setCurrentSlideIndex(si);
                            setSlideProgress(0);
                          }}
                          className={`p-2.5 rounded-2xl border text-left transition flex flex-col justify-between ${
                            currentSlideIndex === si
                              ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                              : 'bg-[#0B0F17] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono font-bold text-indigo-400">
                              0{si * 3}:00
                            </span>
                            <span className="text-[9px] font-bold uppercase tracking-wider px-1 rounded bg-slate-800">
                              S{si + 1}
                            </span>
                          </div>
                          <span className="text-[11px] font-semibold mt-1 truncate">
                            {s.tag}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ======================================================= */}
              {/* CHẾ ĐỘ 2: XEM VIDEO YOUTUBE THẬT 100% & NHÚNG VIDEO RIÊNG */}
              {/* ======================================================= */}
              {playerMode === 'youtube' && (
                <div className="space-y-4 animate-fade-in">
                  {/* YouTube Search Direct Button & Custom URL Form */}
                  <div className="p-4 rounded-2xl bg-[#0B0F17] border border-slate-800 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                          <Search className="w-3.5 h-3.5" />
                          <span>Tìm bài giảng chất lượng cao trên YouTube theo bài học:</span>
                        </span>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Khắc phục triệt để lỗi chặn nhúng bằng cách mở trực tiếp kênh bài giảng bản quyền.
                        </p>
                      </div>

                      <a
                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                          'ngu phap tieng anh ' + currentLesson.title
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-lg shadow-rose-600/30 shrink-0"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Mở tìm kiếm YouTube (Tab mới)</span>
                      </a>
                    </div>

                    {/* Custom URL Input */}
                    <form onSubmit={handleApplyCustomVideo} className="pt-3 border-t border-slate-800/80">
                      <div className="flex flex-col sm:flex-row items-stretch gap-2">
                        <input
                          type="text"
                          value={customYoutubeUrl}
                          onChange={(e) => setCustomYoutubeUrl(e.target.value)}
                          placeholder="🔗 Dán link YouTube bài giảng yêu thích của bạn (VD: https://www.youtube.com/watch?v=...)"
                          className="flex-1 px-3.5 py-2 rounded-xl bg-[#131B2E] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition shrink-0"
                        >
                          Lưu & Xem ngay
                        </button>
                      </div>
                      {videoInputError && (
                        <p className="text-[11px] text-rose-400 mt-1">{videoInputError}</p>
                      )}
                    </form>
                  </div>

                  {/* 16:9 Iframe Container */}
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?rel=0`}
                      title={currentLesson.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Disclaimer & Return Button */}
                  <div className="p-3 rounded-2xl bg-[#0B0F17] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
                    <span>
                      ⚠️ Nếu YouTube hiển thị <em>"Video không có sẵn"</em> do bản quyền chặn nhúng bên ngoài, hãy chuyển về chế độ Bảng Tương Tác.
                    </span>
                    <button
                      onClick={() => setPlayerMode('board')}
                      className="text-xs font-bold text-indigo-400 hover:text-indigo-300 underline shrink-0"
                    >
                      Quay lại Bảng Bài Giảng Tương Tác ➔
                    </button>
                  </div>
                </div>
              )}

              {/* Pin Summary to Smart Notebook */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <p className="text-xs text-slate-400">
                  Ghi chú cốt lõi: <em>"{currentLesson.coreMindset}"</em>
                </p>

                <button
                  onClick={() =>
                    onPinNote &&
                    onPinNote({
                      term: currentLesson.title,
                      phonetic: currentLesson.lessonNumber,
                      meaning: currentLesson.mindmapNotes || currentLesson.coreMindset,
                      example: currentLesson.videoSummary,
                      tag: 'Tóm tắt bài giảng'
                    })
                  }
                  className="px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-1.5 transition active:scale-95 shrink-0"
                >
                  <Pin className="w-3.5 h-3.5" />
                  <span>Ghim vào Sổ Tay</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: 📖 KIẾN THỨC TOÀN DIỆN & MẸO GIẢI NHANH 3 GIÂY */}
        {/* ========================================================= */}
        {lessonTab === 'knowledge' && (
          <div className="space-y-6 animate-fade-in">
            {/* Card 1: Bản chất cốt lõi cho người mất gốc */}
            <div className="p-6 rounded-3xl bg-[#131B2E] border border-indigo-500/30 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-indigo-400">
                <Lightbulb className="w-5 h-5 text-indigo-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  1. Bản Chất Cốt Lõi Cho Người Mất Gốc (Tại sao dùng? Khác gì tiếng Việt?)
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed bg-[#0B0F17] p-4 rounded-2xl border border-slate-800">
                {currentLesson.coreMindset}
              </p>
            </div>

            {/* Card 2: Bảng Công Thức Đầy Đủ 3 Thể */}
            {currentLesson.formula3Forms && (
              <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-xl space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>2. Bảng Công Thức Đầy Đủ 3 Thể (+ | - | ?)</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {/* Khẳng định */}
                  <div className="p-4 rounded-2xl bg-[#0B0F17] border border-emerald-500/30 space-y-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300">
                      Khẳng định [+]
                    </span>
                    <p className="text-xs font-mono font-bold text-slate-200">
                      {currentLesson.formula3Forms.affirmative.formula}
                    </p>
                    <p className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-800">
                      👉 Ví dụ: {currentLesson.formula3Forms.affirmative.example}
                    </p>
                  </div>

                  {/* Phủ định */}
                  <div className="p-4 rounded-2xl bg-[#0B0F17] border border-rose-500/30 space-y-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-rose-500/15 text-rose-300">
                      Phủ định [-]
                    </span>
                    <p className="text-xs font-mono font-bold text-slate-200">
                      {currentLesson.formula3Forms.negative.formula}
                    </p>
                    <p className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-800">
                      👉 Ví dụ: {currentLesson.formula3Forms.negative.example}
                    </p>
                  </div>

                  {/* Nghi vấn */}
                  <div className="p-4 rounded-2xl bg-[#0B0F17] border border-blue-500/30 space-y-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-500/15 text-blue-300">
                      Nghi vấn [?]
                    </span>
                    <p className="text-xs font-mono font-bold text-slate-200">
                      {currentLesson.formula3Forms.interrogative.formula}
                    </p>
                    <p className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-800">
                      👉 Ví dụ: {currentLesson.formula3Forms.interrogative.example}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Card 3: Dấu Hiệu Nhận Biết 3 Giây (Signal Words) */}
            {currentLesson.signalWords && currentLesson.signalWords.length > 0 && (
              <div className="p-6 rounded-3xl bg-[#131B2E] border border-amber-500/30 shadow-xl space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>3. Dấu Hiệu Nhận Biết (Signal Words - Mẹo 3 Giây)</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentLesson.signalWords.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#0B0F17] border border-slate-800 flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 font-bold text-xs">
                        ⚡
                      </div>
                      <div>
                        <p className="text-xs font-bold text-amber-300 font-mono">{item.word}</p>
                        <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                          {item.tip}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Card 4: Bảng Cảnh Báo Bẫy Thường Gặp (Sai vs Đúng) */}
            {currentLesson.trapsTable && currentLesson.trapsTable.length > 0 && (
              <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-xl space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  <span>4. Bảng Cảnh Báo Bẫy Thường Gặp (Câu Sai ❌ vs Câu Đúng ✅)</span>
                </h3>

                <div className="space-y-3">
                  {currentLesson.trapsTable.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#0B0F17] border border-slate-800 text-xs space-y-2"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="font-semibold text-rose-300 bg-rose-950/30 px-3 py-1.5 rounded-xl border border-rose-900/50">
                          {item.wrong}
                        </span>
                        <span className="font-semibold text-emerald-300 bg-emerald-950/30 px-3 py-1.5 rounded-xl border border-emerald-900/50">
                          {item.right}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-800">
                        👉 <strong>Giải thích lý do:</strong> {item.why}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pin to Notebook Action */}
            <div className="flex justify-end pt-2">
              <button
                onClick={() =>
                  onPinNote &&
                  onPinNote({
                    term: currentLesson.title,
                    phonetic: currentLesson.lessonNumber,
                    meaning: currentLesson.coreMindset,
                    example: currentLesson.trapsTable?.[0]?.right || 'Xem bảng công thức 3 thể',
                    tag: 'Mẹo ngữ pháp 3s'
                  })
                }
                className="px-5 py-2.5 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-2 transition active:scale-95 shadow-lg"
              >
                <Pin className="w-4 h-4" />
                <span>📌 Ghim mẹo & công thức vào Sổ Tay</span>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: ✍️ THỰC HÀNH ĐA DẠNG (15 BÀI TẬP CHIA 3 DẠNG) */}
        {/* ========================================================= */}
        {lessonTab === 'practice' && (
          <div className="space-y-6 animate-fade-in">
            {/* Filter Pills & Summary Header */}
            <div className="p-5 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>Thực Hành 15 Bài Tập Thực Chiến ({practiceItems.length} câu)</span>
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Gồm 8 câu Trắc nghiệm TOEIC Part 5, 4 câu Sửa lỗi sai và 3 câu Ghép câu áp dụng
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
                <button
                  onClick={() => setPracticeFilter('all')}
                  className={`px-3 py-1.5 rounded-xl transition ${
                    practiceFilter === 'all'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-[#0B0F17] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  Tất cả ({practiceItems.length})
                </button>
                <button
                  onClick={() => setPracticeFilter('mcq')}
                  className={`px-3 py-1.5 rounded-xl transition ${
                    practiceFilter === 'mcq'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-[#0B0F17] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  Trắc nghiệm (8)
                </button>
                <button
                  onClick={() => setPracticeFilter('error')}
                  className={`px-3 py-1.5 rounded-xl transition ${
                    practiceFilter === 'error'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-[#0B0F17] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  Sửa lỗi sai (4)
                </button>
                <button
                  onClick={() => setPracticeFilter('builder')}
                  className={`px-3 py-1.5 rounded-xl transition ${
                    practiceFilter === 'builder'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-[#0B0F17] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  Ghép câu (3)
                </button>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {filteredPracticeItems.map((item, idx) => {
                const originalIndex = practiceItems.indexOf(item);

                // DẠNG 1: TRẮC NGHIỆM PHẢN XẠ & TOEIC PART 5 (MCQ)
                if (item.type === 'mcq') {
                  const selected = mcqAnswers[originalIndex];
                  const isCorrect = selected === item.answer;

                  return (
                    <div
                      key={originalIndex}
                      className="p-5 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-lg space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                          Dạng 1: Trắc nghiệm TOEIC Part 5 • Câu {originalIndex + 1}
                        </span>
                        {practiceSubmitted && (
                          <span
                            className={`text-xs font-bold ${
                              isCorrect ? 'text-emerald-400' : 'text-rose-400'
                            }`}
                          >
                            {isCorrect ? '✓ Đúng (+12 XP)' : '✗ Chưa đúng'}
                          </span>
                        )}
                      </div>

                      <p className="text-xs md:text-sm font-semibold text-white leading-relaxed">
                        {item.q}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {item.options.map((opt, optIdx) => {
                          const isChosen = selected === optIdx;
                          let optStyle =
                            'bg-[#0B0F17] border-slate-800 hover:border-slate-700 text-slate-300';

                          if (practiceSubmitted) {
                            if (optIdx === item.answer) {
                              optStyle =
                                'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-bold';
                            } else if (isChosen) {
                              optStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                            }
                          } else if (isChosen) {
                            optStyle =
                              'bg-indigo-600/30 border-indigo-500 text-white font-semibold';
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectMcq(originalIndex, optIdx)}
                              className={`p-3 rounded-xl border text-left transition flex items-center justify-between ${optStyle}`}
                            >
                              <span>
                                <strong>{String.fromCharCode(65 + optIdx)}.</strong> {opt}
                              </span>
                              {practiceSubmitted && optIdx === item.answer && (
                                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {practiceSubmitted && (
                        <div className="p-3 rounded-xl bg-[#0B0F17] border border-slate-800 text-[11px] text-slate-300 leading-relaxed mt-2">
                          💡 <strong>Giải thích chi tiết:</strong> {item.explanation}
                        </div>
                      )}
                    </div>
                  );
                }

                // DẠNG 2: TÌM VÀ SỬA LỖI SAI TRONG CÂU (ERROR CORRECTION)
                if (item.type === 'error') {
                  const selectedPart = errorAnswers[originalIndex];
                  const isCorrect = selectedPart === item.wrongPart;

                  return (
                    <div
                      key={originalIndex}
                      className="p-5 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-lg space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                          Dạng 2: Tìm & Sửa Lỗi Sai • Câu {originalIndex + 1}
                        </span>
                        {practiceSubmitted && (
                          <span
                            className={`text-xs font-bold ${
                              isCorrect ? 'text-emerald-400' : 'text-rose-400'
                            }`}
                          >
                            {isCorrect ? '✓ Đúng (+12 XP)' : '✗ Chưa đúng'}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-300">
                        Chọn phần bị gạch chân chứa lỗi ngữ pháp:
                      </p>

                      <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-slate-800 text-xs md:text-sm text-slate-200 leading-relaxed font-mono">
                        {item.sentence}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {['A', 'B', 'C', 'D'].map((part) => {
                          const isChosen = selectedPart === part;
                          let btnStyle =
                            'bg-[#0B0F17] border-slate-800 hover:border-slate-700 text-slate-300';

                          if (practiceSubmitted) {
                            if (part === item.wrongPart) {
                              btnStyle =
                                'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-bold';
                            } else if (isChosen) {
                              btnStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                            }
                          } else if (isChosen) {
                            btnStyle = 'bg-amber-500/30 border-amber-500 text-amber-200 font-bold';
                          }

                          return (
                            <button
                              key={part}
                              onClick={() => handleSelectErrorPart(originalIndex, part)}
                              className={`px-4 py-2 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 ${btnStyle}`}
                            >
                              <span>Phần ({part})</span>
                            </button>
                          );
                        })}
                      </div>

                      {practiceSubmitted && (
                        <div className="p-3 rounded-xl bg-[#0B0F17] border border-slate-800 text-[11px] text-slate-300 leading-relaxed space-y-1">
                          <p>
                            👉 <strong>Lỗi ở phần ({item.wrongPart}):</strong> Cần sửa thành:{' '}
                            <span className="font-bold text-emerald-400">{item.correctedPart}</span>
                          </p>
                          <p className="text-slate-400 italic">{item.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                }

                // DẠNG 3: VIẾT / GHÉP CÂU ÁP DỤNG CÔNG THỨC (SENTENCE BUILDER)
                if (item.type === 'builder') {
                  const selectedWords = builderAnswers[originalIndex] || [];
                  const checkStatus = builderChecked[originalIndex];

                  return (
                    <div
                      key={originalIndex}
                      className="p-5 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-lg space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          Dạng 3: Ghép Câu Áp Dụng Công Thức • Câu {originalIndex + 1}
                        </span>
                        {checkStatus === 'correct' && (
                          <span className="text-xs font-bold text-emerald-400">
                            ✓ Chính xác 100% (+12 XP)
                          </span>
                        )}
                      </div>

                      <div className="p-3 rounded-2xl bg-[#0B0F17] border border-slate-800 space-y-1">
                        <span className="text-[10px] font-bold uppercase text-slate-400">
                          Câu tiếng Việt cần dịch:
                        </span>
                        <p className="text-xs md:text-sm font-semibold text-amber-200">
                          "{item.viPrompt}"
                        </p>
                      </div>

                      {/* Khung xếp câu hoàn chỉnh */}
                      <div
                        className={`min-h-[48px] p-3 rounded-2xl border flex flex-wrap items-center gap-1.5 transition ${
                          checkStatus === 'correct'
                            ? 'bg-emerald-950/20 border-emerald-500/60'
                            : checkStatus === 'wrong'
                            ? 'bg-rose-950/20 border-rose-500/60'
                            : 'bg-[#0B0F17] border-slate-800'
                        }`}
                      >
                        {selectedWords.length === 0 ? (
                          <span className="text-xs text-slate-500 italic">
                            Bấm vào các khối từ ở khay bên dưới để ghép câu...
                          </span>
                        ) : (
                          selectedWords.map((itemObj, wordIdx) => (
                            <button
                              key={wordIdx}
                              onClick={() => handleRemoveBuilderWord(originalIndex, wordIdx)}
                              className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-rose-600 text-white text-xs font-medium transition shadow flex items-center gap-1 group"
                              title="Bấm để trả về khay"
                            >
                              <span>{itemObj.word}</span>
                              <X className="w-3 h-3 text-indigo-300 group-hover:text-white" />
                            </button>
                          ))
                        )}
                      </div>

                      {/* Khay từ để chọn */}
                      <div className="flex flex-wrap items-center gap-1.5 p-3 rounded-2xl bg-[#0B0F17]/60 border border-slate-800/60">
                        {item.words?.map((word, wordIndex) => {
                          const isUsed = selectedWords.some(
                            (w) => w.originalIdx === wordIndex
                          );

                          return (
                            <button
                              key={wordIndex}
                              disabled={isUsed}
                              onClick={() => handleAddBuilderWord(originalIndex, word, wordIndex)}
                              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                                isUsed
                                  ? 'bg-slate-800/40 text-slate-600 border border-slate-800 cursor-not-allowed'
                                  : 'bg-[#18233C] hover:bg-indigo-600 border border-slate-700 hover:border-indigo-500 text-slate-200 hover:text-white shadow-sm'
                              }`}
                            >
                              {word}
                            </button>
                          );
                        })}
                      </div>

                      {/* Nút điều khiển dạng 3 */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleHintBuilder(originalIndex, item.words)}
                            className="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-1.5 transition"
                          >
                            <Lightbulb className="w-3.5 h-3.5" />
                            <span>Gợi ý từ</span>
                          </button>

                          <button
                            onClick={() => handleResetBuilder(originalIndex)}
                            className="px-3 py-1.5 rounded-xl bg-[#0B0F17] hover:bg-slate-800 border border-slate-800 text-slate-400 text-xs font-semibold flex items-center gap-1.5 transition"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Xếp lại</span>
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => speakText(item.enTarget)}
                            className="p-2 rounded-xl bg-[#0B0F17] hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs transition"
                            title="Nghe câu tiếng Anh mẫu"
                          >
                            <Volume2 className="w-4 h-4 text-indigo-400" />
                          </button>

                          <button
                            onClick={() => handleCheckBuilder(originalIndex, item.enTarget)}
                            className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition shadow-md shadow-indigo-600/30"
                          >
                            ✓ Kiểm tra câu
                          </button>
                        </div>
                      </div>

                      {checkStatus === 'wrong' && (
                        <p className="text-[11px] text-rose-300">
                          ⚠️ Chưa khớp hoàn toàn với câu mẫu. Gợi ý: {item.hint}
                        </p>
                      )}
                    </div>
                  );
                }

                return null;
              })}
            </div>

            {/* Bottom Actions: Nộp bài & Chấm điểm */}
            <div className="p-6 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-white">Hoàn Thành Toàn Bộ 15 Bài Tập</h4>
                <p className="text-[11px] text-slate-400">
                  Nộp bài để hệ thống tự động chấm điểm, lưu tiến độ bài học và cộng điểm XP.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleResetAllPractice}
                  className="px-4 py-2.5 rounded-2xl bg-[#0B0F17] hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold transition"
                >
                  Làm lại từ đầu
                </button>

                <button
                  onClick={handleSubmitPractice}
                  className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition transform hover:-translate-y-0.5 active:scale-95"
                >
                  Nộp Bài & Nhận Điểm XP
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}
