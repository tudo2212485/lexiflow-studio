import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  SkipBack,
  SkipForward,
  Volume2,
  Mic,
  MicOff,
  Pin,
  Sparkles,
  Check,
  CheckCircle2,
  Plus,
  Search,
  X,
  Flame,
  Film,
  Music,
  Eye,
  EyeOff,
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Award,
  Zap,
  Globe,
  Radio
} from 'lucide-react';
import { INITIAL_VIDEOS, VIDEO_CATEGORIES } from '../data/videoImmersionData';

// Helper to extract clean 11-char YouTube Video ID from any URL
export function extractYouTubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  return match ? match[1] : (url.length === 11 ? url : null);
}

// Clean text for speech matching
function cleanTextForMatch(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Compute word-level speech recognition accuracy
function calculateMatchAccuracy(spoken, target) {
  const spokenWords = cleanTextForMatch(spoken).split(' ').filter(Boolean);
  const targetWords = cleanTextForMatch(target).split(' ').filter(Boolean);
  if (targetWords.length === 0) return 0;

  let matched = 0;
  targetWords.forEach((tw) => {
    if (spokenWords.includes(tw)) matched++;
  });
  return Math.min(100, Math.round((matched / targetWords.length) * 100));
}

// Compute active word index within line using character-weighted distribution (Apple Music / Spotify Sing style)
export function computeActiveWordIndex(line, currentTime) {
  if (!line || !line.en) return -1;
  const words = line.en.split(' ');
  if (words.length === 0) return -1;

  if (currentTime < line.startTime - 0.05) return -1;
  if (currentTime >= line.endTime) return words.length;

  const duration = Math.max(0.1, line.endTime - line.startTime);
  const elapsed = Math.max(0, Math.min(duration, currentTime - line.startTime));
  const progress = elapsed / duration;

  // Weight words by stripped alphanumeric length (min weight 2 so short words have screen time)
  const weights = words.map((w) => Math.max(2, w.replace(/[^a-zA-Z0-9]/g, '').length));
  const totalWeight = weights.reduce((sum, w) => sum + w, 0);

  let cumulative = 0;
  for (let i = 0; i < words.length; i++) {
    const startFrac = cumulative / totalWeight;
    cumulative += weights[i];
    const endFrac = cumulative / totalWeight;
    if (progress >= startFrac && progress < endFrac) {
      return i;
    }
  }
  return words.length - 1;
}

export default function VideoImmersionView({
  onPinNote,
  onAwardXP,
  onSpeak,
  onUpdateCardSRS
}) {
  // Video collection: Initial curated + User custom videos from localStorage
  const [customVideos, setCustomVideos] = useState(() => {
    try {
      const saved = localStorage.getItem('lexiflow_custom_videos');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const allVideos = useMemo(() => {
    return [...customVideos, ...INITIAL_VIDEOS];
  }, [customVideos]);

  // View state: null = catalog, or a video object
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Player state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [subtitleMode, setSubtitleMode] = useState('bilingual'); // 'bilingual' | 'en' | 'ear_training'
  const [isLoopSentence, setIsLoopSentence] = useState(false);
  const [activeSubtitleIndex, setActiveSubtitleIndex] = useState(0);
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  // Active right column tab: 'transcript' | 'gap_fill' | 'vocab'
  const [activeTab, setActiveTab] = useState('transcript');

  // Word Click-to-Lookup Popover state
  const [lookupWord, setLookupWord] = useState(null); // { word, ipa, meaning, pos }
  const [lookupPos, setLookupPos] = useState({ x: 0, y: 0 });

  // Shadowing / Speech Recognition state
  const [isRecording, setIsRecording] = useState(false);
  const [shadowingResult, setShadowingResult] = useState(null); // { accuracy, spokenText }

  // Gap-Fill Game State
  const [gapFillScore, setGapFillScore] = useState(0);
  const [gapFillStreak, setGapFillStreak] = useState(0);
  const [gapFillFeedback, setGapFillFeedback] = useState(null); // { correct: boolean, word: string }
  const [completedGapIndices, setCompletedGapIndices] = useState(new Set());

  // Custom Video Modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [customInputUrl, setCustomInputUrl] = useState('');
  const [customInputTitle, setCustomInputTitle] = useState('');
  const [customInputCategory, setCustomInputCategory] = useState('music');
  const [customAddError, setCustomAddError] = useState('');

  // Refs for YouTube Player and timers
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const activeSubtitleIndexRef = useRef(0);
  const activeWordIndexRef = useRef(0);
  const recognitionRef = useRef(null);
  const transcriptListRef = useRef(null);
  const activeLineRef = useRef(null);

  // Filtered videos for catalog
  const filteredVideos = useMemo(() => {
    return allVideos.filter((v) => {
      const matchCat = selectedCategory === 'all' || v.category === selectedCategory;
      const matchQuery =
        !searchQuery.trim() ||
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.channel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [allVideos, selectedCategory, searchQuery]);

  // Keep ref in sync to prevent unnecessary intervals from updating state
  useEffect(() => {
    activeSubtitleIndexRef.current = activeSubtitleIndex;
  }, [activeSubtitleIndex]);

  // Auto-scroll active subtitle in transcript list
  useEffect(() => {
    if (activeLineRef.current && activeTab === 'transcript') {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [activeSubtitleIndex, activeTab]);

  // Reset indices on video switch
  useEffect(() => {
    setActiveSubtitleIndex(0);
    activeSubtitleIndexRef.current = 0;
    setActiveWordIndex(0);
    activeWordIndexRef.current = 0;
  }, [selectedVideo]);

  // -----------------------------------------------------------------------
  // YOUTUBE IFRAME PLAYER API INITIALIZATION
  // -----------------------------------------------------------------------
  useEffect(() => {
    if (!selectedVideo) return;

    let isSubscribed = true;

    // Load YouTube Iframe API script dynamically if not present
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (!isSubscribed || !containerRef.current || !window.YT || !window.YT.Player) return;

      try {
        if (playerRef.current && typeof playerRef.current.destroy === 'function') {
          playerRef.current.destroy();
        }

        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId: selectedVideo.youtubeId,
          playerVars: {
            autoplay: 1,
            controls: 1,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            enablejsapi: 1,
            origin: window.location.origin
          },
          events: {
            onReady: (event) => {
              if (!isSubscribed) return;
              setIsPlayerReady(true);
              event.target.playVideo();
              setIsPlaying(true);
            },
            onStateChange: (event) => {
              if (!isSubscribed) return;
              // 1 = PLAYING, 2 = PAUSED, 0 = ENDED
              setIsPlaying(event.data === 1);
            }
          }
        });
      } catch (err) {
        console.warn('YouTube Player initialization notice:', err);
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      isSubscribed = false;
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
        playerRef.current = null;
      }
      setIsPlayerReady(false);
      setIsPlaying(false);
    };
  }, [selectedVideo]);

  // -----------------------------------------------------------------------
  // REAL-TIME SUBTITLE TIME SYNC & WORD KARAOKE HIGHLIGHT (60FPS OPTIMIZED)
  // -----------------------------------------------------------------------
  useEffect(() => {
    if (!selectedVideo || !isPlayerReady) return;

    const transcript = selectedVideo.transcript || [];
    if (transcript.length === 0) return;

    const interval = setInterval(() => {
      if (!playerRef.current || typeof playerRef.current.getCurrentTime !== 'function') return;

      try {
        const curTime = playerRef.current.getCurrentTime();
        const curIdx = activeSubtitleIndexRef.current;
        const currentLine = transcript[curIdx];

        // 1. Loop Sentence Engine
        if (isLoopSentence && currentLine) {
          if (curTime >= currentLine.endTime - 0.1) {
            playerRef.current.seekTo(currentLine.startTime, true);
            return;
          }
        }

        // 2. Find currently matching subtitle cue
        const foundIdx = transcript.findIndex(
          (t) => curTime >= t.startTime - 0.15 && curTime <= t.endTime + 0.2
        );

        const targetIdx = foundIdx !== -1 ? foundIdx : curIdx;
        const targetLine = transcript[targetIdx];

        // 3. Compute active word index inside target cue (100ms Word-by-Word Engine)
        let wordIdx = -1;
        if (targetLine && curTime >= targetLine.startTime - 0.05 && curTime <= targetLine.endTime + 0.1) {
          wordIdx = computeActiveWordIndex(targetLine, curTime);
        } else if (targetLine && curTime > targetLine.endTime) {
          wordIdx = targetLine.en.split(' ').length;
        }

        // 4. Performance Guard: ONLY update React state if cue or word index changed!
        const cueChanged = foundIdx !== -1 && foundIdx !== curIdx;
        const wordChanged = wordIdx !== activeWordIndexRef.current;

        if (cueChanged || wordChanged) {
          if (cueChanged) {
            setActiveSubtitleIndex(foundIdx);
            activeSubtitleIndexRef.current = foundIdx;

            // In Gap-Fill mode: auto-pause at unanswered blank
            if (activeTab === 'gap_fill') {
              const cue = transcript[foundIdx];
              if (cue && cue.keyWord && !completedGapIndices.has(foundIdx)) {
                if (typeof playerRef.current.pauseVideo === 'function') {
                  playerRef.current.pauseVideo();
                  setIsPlaying(false);
                }
              }
            }
          }
          if (wordChanged) {
            setActiveWordIndex(wordIdx);
            activeWordIndexRef.current = wordIdx;
          }
        }
      } catch {
        // Player might be re-buffering
      }
    }, 100);

    return () => clearInterval(interval);
  }, [selectedVideo, isPlayerReady, isLoopSentence, activeTab, completedGapIndices]);

  // -----------------------------------------------------------------------
  // SMART CONTROLS HANDLERS
  // -----------------------------------------------------------------------
  const handleSeekToLine = useCallback((line, index) => {
    if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
      playerRef.current.seekTo(line.startTime, true);
      playerRef.current.playVideo();
      setActiveSubtitleIndex(index);
      activeSubtitleIndexRef.current = index;
      const initialWordIdx = computeActiveWordIndex(line, line.startTime);
      setActiveWordIndex(initialWordIdx);
      activeWordIndexRef.current = initialWordIdx;
      setIsPlaying(true);
    }
  }, []);

  const handleTogglePlay = useCallback(() => {
    if (!playerRef.current) return;
    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } catch {}
  }, [isPlaying]);

  const handleChangeSpeed = (speed) => {
    setPlaybackSpeed(speed);
    if (playerRef.current && typeof playerRef.current.setPlaybackRate === 'function') {
      playerRef.current.setPlaybackRate(speed);
    }
  };

  const handlePrevSentence = () => {
    if (!selectedVideo?.transcript) return;
    const nextIdx = Math.max(0, activeSubtitleIndex - 1);
    handleSeekToLine(selectedVideo.transcript[nextIdx], nextIdx);
  };

  const handleNextSentence = () => {
    if (!selectedVideo?.transcript) return;
    const nextIdx = Math.min(selectedVideo.transcript.length - 1, activeSubtitleIndex + 1);
    handleSeekToLine(selectedVideo.transcript[nextIdx], nextIdx);
  };

  // -----------------------------------------------------------------------
  // CLICK-TO-LOOKUP DICTIONARY POPOVER
  // -----------------------------------------------------------------------
  const handleWordClick = (e, word, line) => {
    e.stopPropagation();
    if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    }

    const clean = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, '').trim();
    if (!clean) return;

    // Check if word matches current line's target keyword or vocabulary deck
    const matchedVocab = (selectedVideo?.vocabulary || []).find(
      (v) => v.term.toLowerCase().includes(clean.toLowerCase())
    );

    const rect = e.currentTarget.getBoundingClientRect();
    setLookupPos({
      x: Math.min(window.innerWidth - 300, Math.max(16, rect.left - 50)),
      y: rect.bottom + 8
    });

    setLookupWord({
      term: clean,
      ipa: matchedVocab?.ipa || line?.ipa || `/${clean.toLowerCase()}/`,
      meaning: matchedVocab?.meaning || (clean.toLowerCase() === line?.keyWord?.toLowerCase() ? line.meaning : 'Chạm để tra nhanh từ vựng trong ngữ cảnh bài hát / đoạn thoại'),
      pos: line?.pos || 'từ vựng'
    });

    if (onSpeak) onSpeak(clean);
  };

  const handleSaveToNotebook = () => {
    if (!lookupWord || !onPinNote) return;
    onPinNote({
      term: lookupWord.term,
      phonetic: lookupWord.ipa,
      meaning: lookupWord.meaning,
      example: selectedVideo?.transcript?.[activeSubtitleIndex]?.en || '',
      tag: '🎬 Video Immersion'
    });
    if (onAwardXP) onAwardXP(5, 'Lưu từ từ video!');
    setLookupWord(null);
  };

  const handleSaveToSRS = () => {
    if (!lookupWord) return;
    if (onUpdateCardSRS) {
      onUpdateCardSRS(
        `vid-${lookupWord.term.toLowerCase()}`,
        {
          status: 'learning',
          stepCompleted: 1,
          lastStudiedAt: Date.now(),
          nextReviewAt: Date.now() + 86400000,
          due: false
        }
      );
    }
    if (onAwardXP) onAwardXP(5, 'Thêm vào Trạm Ôn SRS!');
    setLookupWord(null);
  };

  // -----------------------------------------------------------------------
  // SHADOWING SPEECH RECOGNITION (TAB 1)
  // -----------------------------------------------------------------------
  const handleStartShadowing = (targetLine) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Trình duyệt của bạn chưa hỗ trợ nhận diện giọng nói Web Speech API.');
      return;
    }

    if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    }

    try {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }

      const rec = new SpeechRecognition();
      recognitionRef.current = rec;
      rec.lang = selectedVideo?.accent?.includes('UK') ? 'en-GB' : 'en-US';
      rec.interimResults = false;
      rec.maxAlternatives = 1;

      rec.onstart = () => {
        setIsRecording(true);
        setShadowingResult(null);
      };

      rec.onresult = (event) => {
        const spoken = event.results[0][0].transcript;
        const accuracy = calculateMatchAccuracy(spoken, targetLine.en);
        setShadowingResult({ accuracy, spokenText: spoken });
        setIsRecording(false);

        if (accuracy >= 70 && onAwardXP) {
          onAwardXP(10, 'Phát âm nhại giọng chuẩn xác!');
        }
      };

      rec.onerror = () => {
        setIsRecording(false);
      };

      rec.onend = () => {
        setIsRecording(false);
      };

      rec.start();
    } catch {
      setIsRecording(false);
    }
  };

  // -----------------------------------------------------------------------
  // LYRICS GAP-FILL GAME (TAB 2)
  // -----------------------------------------------------------------------
  const currentLine = selectedVideo?.transcript?.[activeSubtitleIndex] || null;

  // Generate 4 multiple-choice options for gap-fill
  const gapFillOptions = useMemo(() => {
    if (!currentLine?.keyWord) return [];
    const correct = currentLine.keyWord;
    const allKeyWords = (selectedVideo?.transcript || [])
      .map((t) => t.keyWord)
      .filter((w) => w && w.toLowerCase() !== correct.toLowerCase());

    // Shuffle and pick 3 unique distractors
    const uniqueDistractors = Array.from(new Set(allKeyWords)).sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [correct, ...uniqueDistractors];
    // Fallback if not enough words in transcript
    while (options.length < 4) {
      options.push(['dream', 'night', 'heart', 'voice', 'time'][options.length] || 'word');
    }
    return options.sort(() => 0.5 - Math.random());
  }, [currentLine, selectedVideo]);

  const handleSelectGapOption = (selectedWord) => {
    if (!currentLine?.keyWord) return;

    const isCorrect = selectedWord.toLowerCase() === currentLine.keyWord.toLowerCase();

    if (isCorrect) {
      const nextStreak = gapFillStreak + 1;
      setGapFillStreak(nextStreak);
      setGapFillScore((s) => s + 15 * nextStreak);
      setCompletedGapIndices((prev) => new Set([...prev, activeSubtitleIndex]));
      setGapFillFeedback({ correct: true, word: selectedWord });

      if (onAwardXP) onAwardXP(15, `Đúng từ vựng! (Combo x${nextStreak})`);
      if (onSpeak) onSpeak(selectedWord);

      // Resume video playback automatically after brief celebratory feedback
      setTimeout(() => {
        setGapFillFeedback(null);
        if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
          playerRef.current.playVideo();
          setIsPlaying(true);
        }
      }, 1000);
    } else {
      setGapFillStreak(0);
      setGapFillFeedback({ correct: false, word: selectedWord });
      setTimeout(() => setGapFillFeedback(null), 1200);
    }
  };

  // -----------------------------------------------------------------------
  // CUSTOM YOUTUBE VIDEO ADDITION (STUDIO FEATURE)
  // -----------------------------------------------------------------------
  const handleSaveCustomVideo = () => {
    const cleanId = extractYouTubeId(customInputUrl);
    if (!cleanId) {
      setCustomAddError('Đường link YouTube không hợp lệ. Vui lòng thử lại!');
      return;
    }

    if (!customInputTitle.trim()) {
      setCustomAddError('Vui lòng nhập tiêu đề cho video');
      return;
    }

    setCustomAddError('');

    const newVideo = {
      id: `custom-${cleanId}-${Date.now()}`,
      youtubeId: cleanId,
      title: customInputTitle.trim(),
      channel: 'Người Dùng Tải Lên',
      category: customInputCategory,
      level: 'B1 - Trung bình',
      accent: '🇺🇸 US',
      duration: 'Tự do',
      thumbnail: `https://img.youtube.com/vi/${cleanId}/hqdefault.jpg`,
      description: 'Phòng học video cá nhân được thêm bởi bạn.',
      transcript: [
        {
          id: 'c-1',
          startTime: 0,
          endTime: 10,
          en: 'Welcome to your custom video immersion study room!',
          vi: 'Chào mừng bạn đến với phòng học video song ngữ cá nhân của riêng bạn!',
          keyWord: 'Welcome',
          ipa: '/ˈwel.kəm/',
          meaning: 'chào mừng',
          pos: 'verb'
        },
        {
          id: 'c-2',
          startTime: 10,
          endTime: 25,
          en: 'You can listen, repeat, and click any word to inspect the dictionary.',
          vi: 'Bạn có thể lắng nghe, nhại giọng và chạm vào bất kỳ từ nào để tra cứu từ điển.',
          keyWord: 'inspect',
          ipa: '/ɪnˈspekt/',
          meaning: 'kiểm tra, soi xét',
          pos: 'verb'
        }
      ],
      vocabulary: [
        { term: 'immersion', ipa: '/ɪˈmɜː.ʃən/', meaning: 'phương pháp học đắm chìm trong ngôn ngữ', timestamp: 2 },
        { term: 'inspect', ipa: '/ɪnˈspekt/', meaning: 'tra cứu, kiểm tra tỉ mỉ', timestamp: 12 }
      ]
    };

    const nextCustom = [newVideo, ...customVideos];
    setCustomVideos(nextCustom);
    try {
      localStorage.setItem('lexiflow_custom_videos', JSON.stringify(nextCustom));
    } catch {}

    setIsAddModalOpen(false);
    setCustomInputUrl('');
    setCustomInputTitle('');
    setSelectedVideo(newVideo);
  };

  // =======================================================================
  // RENDER: CATALOG VIEW (WHEN NO VIDEO IS OPEN)
  // =======================================================================
  if (!selectedVideo) {
    return (
      <div className="max-w-7xl mx-auto space-y-6">
        {/* BANNER HEADER */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎬</span>
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Video & Âm Nhạc Song Ngữ (Immersion Studio)
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-red-500/20 text-red-300 border border-red-500/30">
                MỚI & HOT
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Vừa giải trí với MV ca nhạc US-UK, trích đoạn phim & TED-Ed vừa luyện nghe đục lỗ, nhại giọng 60FPS.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-indigo-600 hover:from-red-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-red-500/25 flex items-center gap-2 transition shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Thêm Video YouTube</span>
            </button>
          </div>
        </div>

        {/* SEARCH & CATEGORY FILTER TABS */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Category pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {VIDEO_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-[background-color,border-color,color] duration-150 shrink-0 ${
                    selectedCategory === cat.id
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/30 border border-red-400/40'
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-white/5 hover:border-white/10'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm tên bài hát, kênh..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950/75 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
              />
            </div>
          </div>
        </div>

        {/* VIDEO CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-red-500/50 card-interactive cursor-pointer flex flex-col justify-between group shadow-lg relative overflow-hidden"
            >
              <div className="space-y-3">
                {/* Thumbnail with duration badge and play button */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-white/10">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl shadow-red-600/40 group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono font-bold text-white">
                    {video.duration}
                  </span>
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/75 text-[10px] font-bold text-red-300 border border-white/10">
                    {video.accent}
                  </span>
                  {video.category === 'podcast' && (
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-purple-600/90 text-[10px] font-bold text-white shadow border border-purple-400/40">
                      🎙️ PODCAST
                    </span>
                  )}
                </div>

                {/* Metadata */}
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-red-300 transition line-clamp-2 leading-snug">
                    {video.title}
                  </h3>
                  {video.podcastDetails?.topic && (
                    <span className="inline-block mt-1 text-[10px] font-medium text-purple-300 bg-purple-950/50 px-2 py-0.5 rounded-md border border-purple-500/25">
                      📌 {video.podcastDetails.topic}
                    </span>
                  )}
                  <p className="text-[11px] text-slate-400 mt-1 flex items-center justify-between">
                    <span>{video.channel}</span>
                    <span className="px-1.5 py-0.2 rounded bg-indigo-500/15 text-indigo-300 font-bold text-[10px]">
                      {video.level}
                    </span>
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>{video.transcript?.length || 0} câu song ngữ</span>
                <span className="text-amber-400 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {video.vocabulary?.length || 0} từ khóa
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CUSTOM VIDEO MODAL */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in-up">
            <div className="w-full max-w-lg rounded-3xl bg-[#0E1422] border border-white/10 p-6 shadow-2xl space-y-4 text-slate-100">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Film className="w-5 h-5 text-red-400" />
                  <h3 className="text-base font-bold text-white">Thêm Video YouTube Bất Kỳ</h3>
                </div>
                <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-semibold text-slate-300 block mb-1">
                    Đường dẫn YouTube (URL):
                  </label>
                  <input
                    type="text"
                    placeholder="https://www.youtube.com/watch?v=... hoặc https://youtu.be/..."
                    value={customInputUrl}
                    onChange={(e) => setCustomInputUrl(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-300 block mb-1">
                    Tiêu đề bài học / bài hát:
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: My Favorite English Vlog"
                    value={customInputTitle}
                    onChange={(e) => setCustomInputTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-300 block mb-1">Chủ đề phân loại:</label>
                  <select
                    value={customInputCategory}
                    onChange={(e) => setCustomInputCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="music">🎵 Âm nhạc US-UK</option>
                    <option value="podcast">🎙️ Podcast Tiếng Anh</option>
                    <option value="short_clips">⚡ Short Clips & Slang</option>
                    <option value="movie">🍿 Phim & Sitcom</option>
                    <option value="ted_talks">🧠 TED-Ed & Học thuật</option>
                  </select>
                </div>

                {customAddError && (
                  <p className="text-[11px] text-rose-400 font-semibold">{customAddError}</p>
                )}
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition"
                >
                  Hủy
                </button>
                <button
                  onClick={handleSaveCustomVideo}
                  className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-bold text-white shadow-md shadow-red-600/30 transition"
                >
                  Bắt đầu học ngay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =======================================================================
  // RENDER: VIDEO STUDY ROOM (ACTIVE IMMERSION SESSION)
  // =======================================================================
  const activeLine = selectedVideo?.transcript?.[activeSubtitleIndex] || selectedVideo?.transcript?.[0];

  return (
    <div className="max-w-7xl mx-auto space-y-4">
      {/* TOP NAV BAR */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => setSelectedVideo(null)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-xs font-semibold text-slate-200 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Danh sách Video</span>
        </button>

        <div className="flex items-center gap-2">
          {selectedVideo.category === 'podcast' && (
            <span className="px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold flex items-center gap-1">
              <span>🎙️</span>
              <span>Podcast Studio</span>
            </span>
          )}
          <span className="px-2.5 py-1 rounded-lg bg-red-500/15 text-red-300 border border-red-500/25 text-xs font-bold">
            {selectedVideo.accent}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/25 text-xs font-bold">
            {selectedVideo.level}
          </span>
        </div>
      </div>

      {/* 2-COLUMN IMMERSION GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* ===================================================================
            LEFT COLUMN (7 COLS): PLAYER + ACTIVE SUBTITLE + SMART CONTROLS
            =================================================================== */}
        <div className="lg:col-span-7 space-y-3.5">
          {/* YOUTUBE IFRAME PLAYER CONTAINER */}
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl">
            <div ref={containerRef} className="w-full h-full" />
          </div>

          {/* ACTIVE SUBTITLE SPOTLIGHT BOX (WITH CLICK-TO-LOOKUP) */}
          <div className="p-4 sm:p-5 rounded-3xl bg-slate-900/80 border border-white/10 shadow-lg space-y-2 relative">
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/5 pb-2">
              <span className="font-mono text-indigo-400 font-bold">
                Câu {activeSubtitleIndex + 1} / {selectedVideo?.transcript?.length || 0}
              </span>
              <span className="text-[10px] text-slate-400">
                💡 Chạm vào bất kỳ từ nào để tra nghĩa & lưu sổ tay
              </span>
            </div>

            {/* English Interactive Text with Word-by-Word Karaoke Highlight */}
            <div className="text-base sm:text-lg font-bold leading-relaxed flex flex-wrap gap-1.5 pt-1 items-center">
              {activeLine?.en.split(' ').map((word, i) => {
                let wordStyle = 'text-white/45';
                if (activeWordIndex >= 0) {
                  if (i < activeWordIndex) {
                    wordStyle = 'text-indigo-300 font-semibold';
                  } else if (i === activeWordIndex) {
                    wordStyle =
                      'text-amber-300 font-extrabold scale-105 inline-block drop-shadow-[0_0_12px_rgba(251,191,36,0.9)] underline underline-offset-4 decoration-amber-400 bg-amber-500/20 rounded px-1 -mx-0.5 transition-transform duration-100';
                  } else {
                    wordStyle = 'text-white/45';
                  }
                }

                return (
                  <span
                    key={i}
                    onClick={(e) => handleWordClick(e, word, activeLine)}
                    className={`cursor-pointer px-1 py-0.5 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-150 ${wordStyle} ${
                      subtitleMode === 'ear_training' ? 'blur-sm hover:blur-none transition-all' : ''
                    }`}
                    title="Chạm để tra nghĩa và phát âm"
                  >
                    {word}
                  </span>
                );
              })}
            </div>

            {/* Vietnamese Translation (Hidden in 'en' only mode) */}
            {subtitleMode === 'bilingual' && (
              <p className="text-xs sm:text-sm text-slate-300 pt-1 font-medium leading-normal">
                {activeLine?.vi}
              </p>
            )}
          </div>

          {/* SMART CONTROL BAR UNDER VIDEO */}
          <div className="p-3 sm:p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Speed Buttons */}
            <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-white/5">
              {[0.75, 1.0, 1.25].map((speed) => (
                <button
                  key={speed}
                  onClick={() => handleChangeSpeed(speed)}
                  className={`px-2.5 py-1 rounded-lg font-mono font-bold transition ${
                    playbackSpeed === speed
                      ? 'bg-red-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>

            {/* Sentence Navigation & Loop Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevSentence}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition"
                title="Câu trước"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={handleTogglePlay}
                className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold flex items-center gap-1.5 shadow-md shadow-red-600/30 transition"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{isPlaying ? 'Tạm dừng' : 'Phát tiếp'}</span>
              </button>

              <button
                onClick={handleNextSentence}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition"
                title="Câu sau"
              >
                <SkipForward className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsLoopSentence(!isLoopSentence)}
                className={`p-2 rounded-xl border transition ${
                  isLoopSentence
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30'
                    : 'bg-slate-800 text-slate-400 border-white/5 hover:text-white'
                }`}
                title="Lặp lại câu này liên tục"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Subtitle Mode Selector */}
            <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-white/5">
              <button
                onClick={() => setSubtitleMode('bilingual')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition ${
                  subtitleMode === 'bilingual' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Song ngữ Anh - Việt"
              >
                Song ngữ
              </button>
              <button
                onClick={() => setSubtitleMode('en')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition ${
                  subtitleMode === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Chỉ tiếng Anh"
              >
                Chỉ Eng
              </button>
              <button
                onClick={() => setSubtitleMode('ear_training')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition flex items-center gap-1 ${
                  subtitleMode === 'ear_training' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Chế độ luyện tai (mờ chữ)"
              >
                <EyeOff className="w-3.5 h-3.5" />
                <span>Luyện tai</span>
              </button>
            </div>
          </div>

          {/* PODCAST SUMMARY & KEY TAKEAWAYS PANEL (VISIBLE FOR PODCASTS) */}
          {selectedVideo.podcastDetails && (
            <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-purple-950/40 via-slate-900/90 to-slate-950/90 border border-purple-500/30 shadow-xl space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-500/20 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎙️</span>
                  <h4 className="text-sm font-bold text-purple-200">
                    Bản Tin Tóm Tắt & Key Takeaways Podcast
                  </h4>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {selectedVideo.podcastDetails.targetLevel}
                  </span>
                </div>
                <span className="text-[11px] text-purple-400 font-semibold">
                  Host: {selectedVideo.podcastDetails.host}
                </span>
              </div>

              {/* 3 Key Takeaways */}
              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>3 Ý Chính Rút Ra (Key Takeaways):</span>
                </p>
                <ul className="space-y-1.5 pl-0.5">
                  {selectedVideo.podcastDetails.keyTakeaways?.map((takeaway, tIdx) => (
                    <li key={tIdx} className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
                      <span className="w-4 h-4 rounded-full bg-purple-500/25 text-purple-300 border border-purple-500/30 flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5 shadow-sm">
                        {tIdx + 1}
                      </span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* High-Scoring Phrases & Idioms */}
              {selectedVideo.podcastDetails.highScoringPhrases?.length > 0 && (
                <div className="pt-2.5 border-t border-purple-500/20 space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Cụm Từ Ăn Điểm IELTS & Giao Tiếp Đỉnh Cao:</span>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedVideo.podcastDetails.highScoringPhrases.map((phraseObj, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5 hover:border-purple-500/40 transition flex items-start justify-between gap-2 group"
                      >
                        <div className="space-y-0.5 min-w-0">
                          <span className="text-xs font-bold text-amber-300 block truncate group-hover:text-amber-200">
                            {phraseObj.phrase}
                          </span>
                          <p className="text-[11px] text-slate-300 leading-snug">
                            {phraseObj.meaning}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 pt-0.5">
                          <button
                            onClick={() => onSpeak && onSpeak(phraseObj.phrase)}
                            className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                            title="Phát âm chuẩn"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (onPinNote) {
                                onPinNote({
                                  term: phraseObj.phrase,
                                  phonetic: '',
                                  meaning: phraseObj.meaning,
                                  example: `From Podcast: ${selectedVideo.title}`,
                                  tag: 'Podcast IELTS'
                                });
                              }
                            }}
                            className="p-1 rounded-lg bg-purple-900/50 hover:bg-purple-800 text-purple-300 hover:text-white border border-purple-500/30 transition"
                            title="Lưu vào Sổ tay"
                          >
                            <Pin className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ===================================================================
            RIGHT COLUMN (5 COLS): 3 INTERACTIVE TABS
            =================================================================== */}
        <div className="lg:col-span-5 rounded-3xl bg-slate-900/80 border border-white/10 shadow-xl overflow-hidden flex flex-col h-[580px]">
          {/* TAB HEADERS */}
          <div className="p-2 border-b border-white/10 flex items-center gap-1 bg-slate-950/50 shrink-0">
            <button
              onClick={() => setActiveTab('transcript')}
              className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                activeTab === 'transcript'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Phụ Đề & Nhại</span>
            </button>

            <button
              onClick={() => setActiveTab('gap_fill')}
              className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                activeTab === 'gap_fill'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Điền Lời ({gapFillScore}đ)</span>
            </button>

            <button
              onClick={() => setActiveTab('vocab')}
              className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                activeTab === 'vocab'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Từ Vựng ({selectedVideo.vocabulary?.length || 0})</span>
            </button>
          </div>

          {/* TAB 1: TRANSCRIPT & SHADOWING */}
          {activeTab === 'transcript' && (
            <div ref={transcriptListRef} className="flex-1 overflow-y-auto p-3 space-y-2 no-scrollbar">
              {selectedVideo?.transcript?.map((line, idx) => {
                const isActive = idx === activeSubtitleIndex;
                return (
                  <div
                    key={line.id}
                    ref={isActive ? activeLineRef : null}
                    onClick={() => handleSeekToLine(line, idx)}
                    className={`p-3 rounded-2xl border transition-[background-color,border-color] duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-indigo-950/60 border-indigo-500/80 shadow-md ring-1 ring-indigo-500/40'
                        : 'bg-slate-950/50 border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1 min-w-0">
                        {/* English line with Word-by-Word Highlight on active card */}
                        <div className="text-xs font-bold flex flex-wrap gap-1 leading-relaxed items-center">
                          {line.en.split(' ').map((w, wi) => {
                            let wordStyle = isActive ? 'text-white/45' : 'text-slate-300';

                            if (isActive && activeWordIndex >= 0) {
                              if (wi < activeWordIndex) {
                                wordStyle = 'text-indigo-300 font-semibold';
                              } else if (wi === activeWordIndex) {
                                wordStyle =
                                  'text-amber-300 font-extrabold scale-105 inline-block drop-shadow-[0_0_10px_rgba(251,191,36,0.9)] underline underline-offset-4 decoration-amber-400 bg-amber-500/20 rounded px-0.5';
                              } else {
                                wordStyle = 'text-white/45';
                              }
                            } else if (!isActive) {
                              wordStyle = idx < activeSubtitleIndex ? 'text-slate-300' : 'text-slate-400';
                            }

                            return (
                              <span
                                key={wi}
                                onClick={(e) => handleWordClick(e, w, line)}
                                className={`cursor-pointer px-0.5 py-0.5 rounded transition-all duration-150 hover:bg-indigo-600 hover:text-white ${wordStyle}`}
                                title="Chạm để tra nghĩa"
                              >
                                {w}
                              </span>
                            );
                          })}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal">{line.vi}</p>
                      </div>

                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <span className="font-mono text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-slate-900 border border-white/5">
                          {Math.floor(line.startTime / 60)}:{Math.floor(line.startTime % 60).toString().padStart(2, '0')}
                        </span>

                        {/* Shadowing Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStartShadowing(line);
                          }}
                          className={`p-1.5 rounded-lg border transition ${
                            isRecording && isActive
                              ? 'bg-red-600 text-white animate-pulse'
                              : 'bg-slate-800 text-slate-300 hover:text-white border-white/10'
                          }`}
                          title="Nhại câu này (Shadowing)"
                        >
                          <Mic className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Shadowing Score Feedback */}
                    {shadowingResult && isActive && (
                      <div className="mt-2 pt-2 border-t border-indigo-500/30 flex items-center justify-between text-[11px]">
                        <span className="text-slate-300">
                          Bạn nói: &quot;{shadowingResult.spokenText}&quot;
                        </span>
                        <span
                          className={`font-bold px-2 py-0.5 rounded-md ${
                            shadowingResult.accuracy >= 70
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}
                        >
                          {shadowingResult.accuracy}% Chuẩn xác!
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 2: GAP-FILL GAME (LYRICSTRAINING STYLE) */}
          {activeTab === 'gap_fill' && (
            <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                {/* Score & Combo header */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-xs">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-400" />
                    <span className="font-bold text-amber-300">
                      Chuỗi: {gapFillStreak > 0 ? `🔥 Combo x${gapFillStreak}` : 'Bắt đầu!'}
                    </span>
                  </div>
                  <div className="font-mono font-bold text-white">
                    Điểm số: <strong className="text-amber-400">{gapFillScore} XP</strong>
                  </div>
                </div>

                {/* Sentence with masked keyword */}
                {currentLine && currentLine.keyWord ? (
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 space-y-3">
                    <div className="text-xs text-slate-400 font-semibold">
                      Nghe video và chọn từ còn thiếu vào ô trống:
                    </div>

                    <div className="text-base font-bold text-white leading-relaxed">
                      {currentLine.en.split(' ').map((w, idx) => {
                        const clean = w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, '');
                        const isTarget = clean.toLowerCase() === currentLine.keyWord.toLowerCase();
                        if (isTarget) {
                          const isDone = completedGapIndices.has(activeSubtitleIndex);
                          return (
                            <span
                              key={idx}
                              className={`mx-1 px-2.5 py-0.5 rounded-lg border font-mono font-bold ${
                                isDone
                                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                                  : 'bg-amber-500/20 border-amber-400 text-amber-300 animate-pulse'
                              }`}
                            >
                              {isDone ? currentLine.keyWord : '[ ? ? ? ]'}
                            </span>
                          );
                        }
                        return <span key={idx} className="mr-1">{w}</span>;
                      })}
                    </div>

                    <p className="text-xs text-slate-300 italic">{currentLine.vi}</p>
                  </div>
                ) : (
                  <div className="p-8 text-center text-slate-400 text-xs">
                    Đang tìm câu có bài tập đục lỗ... Hãy bấm phát tiếp video!
                  </div>
                )}

                {/* 4 Quick Choice Options */}
                {currentLine && currentLine.keyWord && (
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    {gapFillOptions.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelectGapOption(opt)}
                        className="py-3 px-3 rounded-xl bg-slate-800 hover:bg-indigo-600 border border-white/10 text-xs font-bold text-white transition hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2"
                      >
                        <span>{opt}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Feedback Toast */}
                {gapFillFeedback && (
                  <div
                    className={`p-3 rounded-xl text-xs font-bold text-center ${
                      gapFillFeedback.correct
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-bounce'
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    }`}
                  >
                    {gapFillFeedback.correct ? '🎉 CHÍNH XÁC! (+15 XP)' : '❌ Chưa đúng, hãy nghe lại câu này nhé!'}
                  </div>
                )}
              </div>

              <div className="text-[11px] text-slate-400 text-center">
                Mẹo: Khi video chạy hết câu mà bạn chưa điền, video sẽ tạm dừng chờ bạn!
              </div>
            </div>
          )}

          {/* TAB 3: VOCABULARY & SLANG DECK */}
          {activeTab === 'vocab' && (
            <div className="flex-1 overflow-y-auto p-3 space-y-2.5 no-scrollbar">
              {(selectedVideo.vocabulary || []).map((v, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-slate-950/60 border border-white/5 hover:border-emerald-500/30 transition flex items-center justify-between gap-3"
                >
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{v.term}</span>
                      <span className="text-[10px] font-mono text-emerald-400">{v.ipa}</span>
                    </div>
                    <p className="text-[11px] text-slate-300">{v.meaning}</p>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
                          playerRef.current.seekTo(v.timestamp, true);
                          playerRef.current.playVideo();
                          setIsPlaying(true);
                        }
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 text-[11px] font-bold flex items-center gap-1 transition"
                      title="Nhảy đến giây ca sĩ/nhân vật nói từ này"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{Math.floor(v.timestamp / 60)}:{Math.floor(v.timestamp % 60).toString().padStart(2, '0')}</span>
                    </button>

                    <button
                      onClick={() => {
                        if (onPinNote) {
                          onPinNote({
                            term: v.term,
                            phonetic: v.ipa,
                            meaning: v.meaning,
                            tag: '🎬 Video Vocab'
                          });
                          if (onAwardXP) onAwardXP(5, 'Lưu từ vào sổ tay!');
                        }
                      }}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition"
                      title="Lưu vào sổ tay"
                    >
                      <Pin className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CLICK-TO-LOOKUP DICTIONARY POPOVER */}
      {lookupWord && (
        <div
          className="fixed z-50 w-72 rounded-2xl bg-slate-900 border border-indigo-400/50 shadow-2xl p-4 text-slate-100 animate-fade-in-up"
          style={{ left: lookupPos.x, top: lookupPos.y }}
        >
          <div className="flex items-start justify-between gap-2 border-b border-white/10 pb-2 mb-2">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>{lookupWord.term}</span>
                <span className="text-[10px] text-slate-400 font-normal">({lookupWord.pos})</span>
              </h4>
              <p className="text-xs font-mono text-cyan-400">{lookupWord.ipa}</p>
            </div>
            <button
              onClick={() => setLookupWord(null)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-slate-200 mb-3 leading-relaxed">
            {lookupWord.meaning}
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={handleSaveToNotebook}
              className="px-2.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold flex items-center justify-center gap-1 transition"
            >
              <Pin className="w-3 h-3" />
              <span>Sổ tay</span>
            </button>
            <button
              onClick={handleSaveToSRS}
              className="px-2.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold flex items-center justify-center gap-1 transition"
            >
              <Zap className="w-3 h-3" />
              <span>Ôn SRS (+5)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

