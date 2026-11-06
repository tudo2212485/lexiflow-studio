// =========================================================================
// LEXIFLOW STUDIO - YOUTUBE VIDEO & MUSIC IMMERSION DATA
// 30 Curated Real YouTube Videos & Podcasts with Time-Synced Subtitles,
// Word-by-Word Karaoke Timings, Gap-Fill Game, and Contextual Vocab Decks
// =========================================================================

export const VIDEO_CATEGORIES = [
  { id: 'all', label: 'Tất cả', icon: '🌟' },
  { id: 'music', label: '🎵 US-UK Mega Hits', icon: '🎵', desc: 'Bản hit tỉ view rõ lời, phát âm chuẩn xác' },
  { id: 'podcast', label: '🎙️ Podcast Tiếng Anh', icon: '🎙️', desc: 'Luyện nghe phản xạ, idioms & tư duy bản xứ' },
  { id: 'short_clips', label: '⚡ Short Clips & Slang', icon: '⚡', desc: 'Giao tiếp đời thực, phỏng vấn, tiếng lóng' },
  { id: 'movie', label: '🍿 Trích đoạn Phim & Sitcom', icon: '🍿', desc: 'Hội thoại kinh điển, ngữ điệu tự nhiên' },
  { id: 'ted_talks', label: '🧠 TED-Ed & Truyền Cảm Hứng', icon: '🧠', desc: 'Từ vựng học thuật, tư duy sâu sắc' }
];

export const INITIAL_VIDEOS = [
  // =======================================================================
  // PHÂN MỤC 1: MEGA HITS US-UK BILLION-VIEW COLLECTION (17 BÀI HÁT BẤT HỦ)
  // =======================================================================

  // 1. ED SHEERAN - PERFECT
  {
    id: 'ed-sheeran-perfect',
    youtubeId: '2Vv-BfVoq4g',
    title: 'Perfect - Ed Sheeran (Official Lyric Video)',
    channel: 'Ed Sheeran',
    category: 'music',
    level: 'A2 - Dễ',
    accent: '🇬🇧 UK',
    duration: '4:23',
    thumbnail: 'https://img.youtube.com/vi/2Vv-BfVoq4g/hqdefault.jpg',
    description: 'Bản tình ca acoustic ngọt ngào với từ vựng lãng mạn, phát âm Anh - Anh cực kỳ rõ chữ và truyền cảm.',
    transcript: [
      {
        id: 'p-1',
        startTime: 3.0,
        endTime: 7.0,
        en: 'I found a love for me',
        vi: 'Anh đã tìm thấy một tình yêu dành riêng cho mình',
        keyWord: 'love',
        ipa: '/lʌv/',
        meaning: 'tình yêu, sự yêu thương',
        pos: 'noun'
      },
      {
        id: 'p-2',
        startTime: 7.5,
        endTime: 13.0,
        en: 'Darling, just dive right in and follow my lead',
        vi: 'Em yêu, hãy cứ hòa mình vào và để anh dẫn lối',
        keyWord: 'lead',
        ipa: '/liːd/',
        meaning: 'sự dẫn đường, sự dẫn dắt',
        pos: 'noun'
      },
      {
        id: 'p-3',
        startTime: 14.0,
        endTime: 19.5,
        en: 'Well, I found a girl, beautiful and sweet',
        vi: 'Anh đã tìm thấy một cô gái, thật xinh đẹp và dịu dàng',
        keyWord: 'beautiful',
        ipa: '/ˈbjuː.tɪ.fəl/',
        meaning: 'xinh đẹp, tuyệt mỹ',
        pos: 'adjective'
      },
      {
        id: 'p-4',
        startTime: 20.0,
        endTime: 27.5,
        en: 'Oh, I never knew you were the someone waiting for me',
        vi: 'Anh chưa từng biết rằng em chính là người bấy lâu chờ đợi anh',
        keyWord: 'waiting',
        ipa: '/ˈweɪ.tɪŋ/',
        meaning: 'đang chờ đợi',
        pos: 'verb'
      },
      {
        id: 'p-5',
        startTime: 28.0,
        endTime: 34.0,
        en: "'Cause we were just kids when we fell in love",
        vi: 'Bởi vì chúng ta chỉ là những đứa trẻ khi lần đầu phải lòng nhau',
        keyWord: 'kids',
        ipa: '/kɪdz/',
        meaning: 'những đứa trẻ, người trẻ tuổi',
        pos: 'noun'
      },
      {
        id: 'p-6',
        startTime: 34.5,
        endTime: 40.0,
        en: 'Not knowing what it was',
        vi: 'Chưa từng hiểu được tình yêu thật sự là gì',
        keyWord: 'knowing',
        ipa: '/ˈnoʊ.ɪŋ/',
        meaning: 'biết, nhận thức',
        pos: 'verb'
      },
      {
        id: 'p-7',
        startTime: 40.5,
        endTime: 48.0,
        en: 'I will not give you up this time',
        vi: 'Lần này anh sẽ không bao giờ buông tay em',
        keyWord: 'give up',
        ipa: '/ɡɪv ʌp/',
        meaning: 'từ bỏ, buông xuôi',
        pos: 'phrasal verb'
      },
      {
        id: 'p-8',
        startTime: 48.5,
        endTime: 55.5,
        en: 'But darling, just kiss me slow, your heart is all I own',
        vi: 'Hãy trao anh nụ hôn dịu dàng, trái tim em là tất cả những gì anh có',
        keyWord: 'kiss',
        ipa: '/kɪs/',
        meaning: 'hôn, nụ hôn',
        pos: 'verb'
      },
      {
        id: 'p-9',
        startTime: 56.0,
        endTime: 61.5,
        en: "And in your eyes, you're holding mine",
        vi: 'Và trong ánh mắt em, em đang nắm giữ trọn vẹn trái tim anh',
        keyWord: 'eyes',
        ipa: '/aɪz/',
        meaning: 'đôi mắt',
        pos: 'noun'
      },
      {
        id: 'p-10',
        startTime: 62.0,
        endTime: 71.0,
        en: "Baby, I'm dancing in the dark with you between my arms",
        vi: 'Em yêu, anh đang khiêu vũ trong màn đêm cùng em trong vòng tay',
        keyWord: 'dancing',
        ipa: '/ˈdɑːn.sɪŋ/',
        meaning: 'khiêu vũ, nhảy múa',
        pos: 'verb'
      },
      {
        id: 'p-11',
        startTime: 71.5,
        endTime: 79.0,
        en: 'Barefoot on the grass, listening to our favorite song',
        vi: 'Đôi chân trần trên bãi cỏ xanh, lắng nghe bài ca yêu thích của hai ta',
        keyWord: 'barefoot',
        ipa: '/ˈbeə.fʊt/',
        meaning: 'chân trần, không mang giày dép',
        pos: 'adjective'
      },
      {
        id: 'p-12',
        startTime: 79.5,
        endTime: 88.0,
        en: 'When you said you looked a mess, I whispered underneath my breath',
        vi: 'Khi em bảo trông mình thật lộn xộn, anh thì thầm khe khẽ dưới hơi thở',
        keyWord: 'whispered',
        ipa: '/ˈwɪs.pərd/',
        meaning: 'thì thầm, nói nhỏ nhẹ',
        pos: 'verb'
      },
      {
        id: 'p-13',
        startTime: 88.5,
        endTime: 96.0,
        en: 'But you heard it, darling, you look perfect tonight',
        vi: 'Nhưng em đã nghe thấy: Em yêu, đêm nay trông em thật hoàn hảo',
        keyWord: 'perfect',
        ipa: '/ˈpɜː.fɪkt/',
        meaning: 'hoàn hảo, tuyệt mỹ',
        pos: 'adjective'
      }
    ],
    vocabulary: [
      { term: 'dive in', ipa: '/daɪv ɪn/', meaning: 'hòa mình vào, dấn thân vào một trải nghiệm', timestamp: 8 },
      { term: 'follow one\'s lead', ipa: '/ˈfɒl.əʊ wʌnz liːd/', meaning: 'làm theo sự hướng dẫn của ai đó', timestamp: 11 },
      { term: 'give up', ipa: '/ɡɪv ʌp/', meaning: 'từ bỏ, đầu hàng', timestamp: 42 },
      { term: 'barefoot', ipa: '/ˈbeə.fʊt/', meaning: 'chân trần, không mang tất hay giày', timestamp: 72 },
      { term: 'underneath one\'s breath', ipa: '/ˌʌn.dəˈniːθ wʌnz breθ/', meaning: 'nói thì thầm nhỏ nhẹ trong miệng', timestamp: 84 }
    ]
  },

  // 2. ED SHEERAN - SHAPE OF YOU
  {
    id: 'ed-sheeran-shape-of-you',
    youtubeId: 'JGwWNGJdvx8',
    title: 'Shape of You - Ed Sheeran (Official Music Video - 6B+ Views)',
    channel: 'Ed Sheeran',
    category: 'music',
    level: 'B1 - Trung bình',
    accent: '🇬🇧 UK',
    duration: '4:23',
    thumbnail: 'https://img.youtube.com/vi/JGwWNGJdvx8/hqdefault.jpg',
    description: 'Bản hit tỉ view kỷ lục toàn cầu với nhịp điệu marimba cuốn hút, từ vựng giao tiếp tự nhiên và phản xạ nhanh.',
    transcript: [
      {
        id: 'soy-1',
        startTime: 9.0,
        endTime: 13.0,
        en: "The club isn't the best place to find a lover",
        vi: 'Hộp đêm không phải là nơi tốt nhất để tìm kiếm một người yêu',
        keyWord: 'lover',
        ipa: '/ˈlʌv.ər/',
        meaning: 'người yêu, tình nhân',
        pos: 'noun'
      },
      {
        id: 'soy-2',
        startTime: 13.5,
        endTime: 16.5,
        en: 'So the bar is where I go',
        vi: 'Nên quầy bar chính là nơi mà tôi thường đến',
        keyWord: 'bar',
        ipa: '/bɑːr/',
        meaning: 'quán rượu, quầy bar',
        pos: 'noun'
      },
      {
        id: 'soy-3',
        startTime: 17.0,
        endTime: 21.0,
        en: 'Me and my friends at the table doing shots',
        vi: 'Tôi và những người bạn ngồi bên bàn nâng ly từng chén rượu',
        keyWord: 'table',
        ipa: '/ˈteɪ.bəl/',
        meaning: 'bàn',
        pos: 'noun'
      },
      {
        id: 'soy-4',
        startTime: 21.5,
        endTime: 25.5,
        en: 'Drinking fast and then we talk slow',
        vi: 'Uống thật nhanh rồi trò chuyện thật chậm rãi',
        keyWord: 'fast',
        ipa: '/fɑːst/',
        meaning: 'nhanh, tốc độ cao',
        pos: 'adverb'
      },
      {
        id: 'soy-5',
        startTime: 26.0,
        endTime: 30.5,
        en: 'Come over and start up a conversation with just me',
        vi: 'Hãy lại đây và bắt đầu một cuộc trò chuyện chỉ riêng với anh',
        keyWord: 'conversation',
        ipa: '/ˌkɒn.vəˈseɪ.ʃən/',
        meaning: 'cuộc trò chuyện, đàm đạo',
        pos: 'noun'
      },
      {
        id: 'soy-6',
        startTime: 31.0,
        endTime: 34.5,
        en: "And trust me I'll give it a chance now",
        vi: 'Và hãy tin anh, anh sẽ cho cơ hội này mở ra',
        keyWord: 'chance',
        ipa: '/tʃɑːns/',
        meaning: 'cơ hội, dịp',
        pos: 'noun'
      },
      {
        id: 'soy-7',
        startTime: 35.0,
        endTime: 39.5,
        en: 'Take my hand, stop, put Van the Man on the jukebox',
        vi: 'Nắm lấy tay anh, dừng lại nào, bật bản nhạc yêu thích trên máy phát',
        keyWord: 'jukebox',
        ipa: '/ˈdʒuːk.bɒks/',
        meaning: 'máy tự động phát nhạc bằng tiền xu',
        pos: 'noun'
      },
      {
        id: 'soy-8',
        startTime: 40.0,
        endTime: 44.0,
        en: "And then we start to dance, and now I'm singing like",
        vi: 'Và rồi hai ta bắt đầu khiêu vũ, và lúc này anh cất tiếng hát',
        keyWord: 'dance',
        ipa: '/dɑːns/',
        meaning: 'khiêu vũ, nhảy múa',
        pos: 'verb'
      },
      {
        id: 'soy-9',
        startTime: 44.5,
        endTime: 48.0,
        en: 'Girl, you know I want your love',
        vi: 'Cô gái à, em biết rằng anh muốn có được tình yêu của em',
        keyWord: 'want',
        ipa: '/wɒnt/',
        meaning: 'mong muốn',
        pos: 'verb'
      },
      {
        id: 'soy-10',
        startTime: 48.5,
        endTime: 53.0,
        en: 'Your love was handmade for somebody like me',
        vi: 'Tình yêu của em dường như được tạo riêng cho người như anh',
        keyWord: 'handmade',
        ipa: '/ˌhændˈmeɪd/',
        meaning: 'làm bằng tay, may đo riêng',
        pos: 'adjective'
      },
      {
        id: 'soy-11',
        startTime: 53.5,
        endTime: 56.5,
        en: 'Come on now, follow my lead',
        vi: 'Lại đây nào, hãy để anh dẫn nhịp',
        keyWord: 'lead',
        ipa: '/liːd/',
        meaning: 'sự dẫn dắt',
        pos: 'noun'
      },
      {
        id: 'soy-12',
        startTime: 57.0,
        endTime: 60.5,
        en: "I may be crazy, don't mind me",
        vi: 'Anh có thể hơi điên rồ, nhưng đừng để ý nhé',
        keyWord: 'crazy',
        ipa: '/ˈkreɪ.zi/',
        meaning: 'điên rồ, cuồng nhiệt',
        pos: 'adjective'
      },
      {
        id: 'soy-13',
        startTime: 61.0,
        endTime: 64.5,
        en: "Say, boy, let's not talk too much",
        vi: 'Em bảo: Chàng trai à, đừng nói quá nhiều nữa',
        keyWord: 'talk',
        ipa: '/tɔːk/',
        meaning: 'nói chuyện, bàn tán',
        pos: 'verb'
      },
      {
        id: 'soy-14',
        startTime: 65.0,
        endTime: 69.0,
        en: 'Grab on my waist and put that body on me',
        vi: 'Hãy ôm lấy vòng eo em và khiêu vũ sát lại gần nhau',
        keyWord: 'waist',
        ipa: '/weɪst/',
        meaning: 'vòng eo, thắt lưng',
        pos: 'noun'
      },
      {
        id: 'soy-15',
        startTime: 69.5,
        endTime: 73.0,
        en: "I'm in love with the shape of you",
        vi: 'Anh say mê vóc dáng và bóng hình tuyệt đẹp của em',
        keyWord: 'shape',
        ipa: '/ʃeɪp/',
        meaning: 'hình dáng, vóc người',
        pos: 'noun'
      },
      {
        id: 'soy-16',
        startTime: 73.5,
        endTime: 77.5,
        en: 'We push and pull like a magnet do',
        vi: 'Chúng ta hút đẩy lẫn nhau như lực từ của hai thanh nam châm',
        keyWord: 'magnet',
        ipa: '/ˈmæɡ.nət/',
        meaning: 'thanh nam châm, sức hút',
        pos: 'noun'
      },
      {
        id: 'soy-17',
        startTime: 78.0,
        endTime: 82.5,
        en: 'Although my heart is falling too',
        vi: 'Dẫu cho trái tim anh cũng đang rung động ngã gục vì em',
        keyWord: 'heart',
        ipa: '/hɑːt/',
        meaning: 'trái tim, tấm lòng',
        pos: 'noun'
      },
      {
        id: 'soy-18',
        startTime: 83.0,
        endTime: 88.0,
        en: "I'm in love with your body",
        vi: 'Anh hoàn toàn say đắm trước vẻ quyến rũ của em',
        keyWord: 'body',
        ipa: '/ˈbɒd.i/',
        meaning: 'cơ thể, vóc dáng',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'start up a conversation', ipa: '/stɑːt ʌp ə ˌkɒn.vəˈseɪ.ʃən/', meaning: 'bắt chuyện, mở đầu câu chuyện', timestamp: 27 },
      { term: 'give it a chance', ipa: '/ɡɪv ɪt ə tʃɑːns/', meaning: 'cho một cơ hội thử nghiệm', timestamp: 32 },
      { term: 'push and pull', ipa: '/pʊʃ ænd pʊl/', meaning: 'vừa hút vừa đẩy, mối quan hệ giằng co ngọt ngào', timestamp: 74 },
      { term: 'handmade for', ipa: '/ˌhændˈmeɪd fɔːr/', meaning: 'được tạo ra vừa vặn riêng cho ai', timestamp: 50 }
    ]
  },

  // 3. CHARLIE PUTH - WE DON'T TALK ANYMORE (FEAT. SELENA GOMEZ)
  {
    id: 'charlie-puth-we-dont-talk-anymore',
    youtubeId: '3AtDnEC4zak',
    title: "We Don't Talk Anymore - Charlie Puth ft. Selena Gomez (Official Video)",
    channel: 'Charlie Puth',
    category: 'music',
    level: 'A2 - Dễ',
    accent: '🇺🇸 US',
    duration: '3:50',
    thumbnail: 'https://img.youtube.com/vi/3AtDnEC4zak/hqdefault.jpg',
    description: 'Bản song ca tỉ view với tiết tấu pop nhiệt đới, câu từ gần gũi về tâm trạng sau chia tay của giới trẻ.',
    transcript: [
      {
        id: 'wdta-1',
        startTime: 1.0,
        endTime: 5.5,
        en: "We don't talk anymore, we don't talk anymore",
        vi: 'Chúng ta chẳng còn nói chuyện với nhau nữa',
        keyWord: 'talk',
        ipa: '/tɔːk/',
        meaning: 'nói chuyện, trò chuyện',
        pos: 'verb'
      },
      {
        id: 'wdta-2',
        startTime: 6.0,
        endTime: 10.5,
        en: "We don't talk anymore, like we used to do",
        vi: 'Chúng ta không còn trò chuyện như trước kia từng làm',
        keyWord: 'used to',
        ipa: '/juːst tuː/',
        meaning: 'đã từng (trong quá khứ)',
        pos: 'phrase'
      },
      {
        id: 'wdta-3',
        startTime: 11.0,
        endTime: 16.0,
        en: "We don't love anymore, what was all of it for?",
        vi: 'Chúng ta chẳng còn yêu nhau nữa, tất cả những điều đó rốt cuộc là vì gì?',
        keyWord: 'love',
        ipa: '/lʌv/',
        meaning: 'yêu thương',
        pos: 'verb'
      },
      {
        id: 'wdta-4',
        startTime: 16.5,
        endTime: 22.0,
        en: "Oh, we don't talk anymore, like we used to do",
        vi: 'Ôi, hai ta chẳng còn tâm sự như những ngày xưa',
        keyWord: 'anymore',
        ipa: '/ˌen.iˈmɔːr/',
        meaning: 'nữa (trong câu phủ định)',
        pos: 'adverb'
      },
      {
        id: 'wdta-5',
        startTime: 22.5,
        endTime: 27.0,
        en: "I just heard you found the one you've been looking",
        vi: 'Anh vừa nghe tin em đã tìm thấy người mà em bấy lâu kiếm tìm',
        keyWord: 'found',
        ipa: '/faʊnd/',
        meaning: 'đã tìm thấy',
        pos: 'verb'
      },
      {
        id: 'wdta-6',
        startTime: 27.5,
        endTime: 33.0,
        en: "You've been looking for, I wish I would have known that wasn't me",
        vi: 'Người em vẫn hằng tìm kiếm, giá như anh biết sớm rằng người đó không phải là anh',
        keyWord: 'wish',
        ipa: '/wɪʃ/',
        meaning: 'ước gì, mong mỏi',
        pos: 'verb'
      },
      {
        id: 'wdta-7',
        startTime: 33.5,
        endTime: 38.0,
        en: "'Cause even after all this time I still wonder",
        vi: 'Bởi vì dẫu sau từng ấy thời gian, anh vẫn tự hỏi lòng mình',
        keyWord: 'wonder',
        ipa: '/ˈwʌn.dər/',
        meaning: 'băn khoăn, tự hỏi',
        pos: 'verb'
      },
      {
        id: 'wdta-8',
        startTime: 38.5,
        endTime: 44.5,
        en: "Why I can't move on just the way you did so easily",
        vi: 'Tại sao anh không thể bước tiếp một cách dễ dàng như cách em đã làm',
        keyWord: 'move on',
        ipa: '/muːv ɒn/',
        meaning: 'bước tiếp, quên đi quá khứ',
        pos: 'phrasal verb'
      },
      {
        id: 'wdta-9',
        startTime: 45.0,
        endTime: 50.0,
        en: "Don't wanna know what kind of dress you're wearing tonight",
        vi: 'Anh không muốn biết đêm nay em đang diện chiếc váy xinh đẹp nào',
        keyWord: 'wearing',
        ipa: '/ˈweə.rɪŋ/',
        meaning: 'đang mặc, đang diện',
        pos: 'verb'
      },
      {
        id: 'wdta-10',
        startTime: 50.5,
        endTime: 56.0,
        en: "If he's holding onto you so tight, the way I did before",
        vi: 'Liệu người ấy có đang ôm chặt lấy em như anh đã từng làm trước đây',
        keyWord: 'tight',
        ipa: '/taɪt/',
        meaning: 'chặt chẽ, sát sao',
        pos: 'adverb'
      },
      {
        id: 'wdta-11',
        startTime: 56.5,
        endTime: 61.5,
        en: "I overdosed, should've known your love was a game",
        vi: 'Anh đã quá chìm đắm, đáng lẽ anh phải nhận ra tình yêu của em chỉ là một trò chơi',
        keyWord: 'overdosed',
        ipa: '/ˈəʊ.və.dəʊst/',
        meaning: 'dùng quá liều, chìm đắm quá mức',
        pos: 'verb'
      },
      {
        id: 'wdta-12',
        startTime: 62.0,
        endTime: 68.0,
        en: "Now I can't get you out of my brain, oh, it's such a shame",
        vi: 'Bây giờ anh không thể gạt em ra khỏi tâm trí, thật là một nỗi tiếc nuối xót xa',
        keyWord: 'shame',
        ipa: '/ʃeɪm/',
        meaning: 'điều đáng tiếc, sự hổ thẹn',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'used to', ipa: '/juːst tuː/', meaning: 'từng làm gì đó trong quá khứ nay không làm nữa', timestamp: 7 },
      { term: 'move on', ipa: '/muːv ɒn/', meaning: 'bước tiếp sau một biến cố hoặc đổ vỡ tình cảm', timestamp: 40 },
      { term: 'hold onto', ipa: '/həʊld ˈɒn.tuː/', meaning: 'ôm chặt lấy, níu giữ', timestamp: 51 },
      { term: 'it\'s such a shame', ipa: '/ɪts sʌtʃ ə ʃeɪm/', meaning: 'thật là một điều đáng tiếc, xót xa', timestamp: 65 }
    ]
  },

  // 4. WIZ KHALIFA FT. CHARLIE PUTH - SEE YOU AGAIN
  {
    id: 'wiz-khalifa-see-you-again',
    youtubeId: 'RgKAFK5djSk',
    title: 'See You Again - Wiz Khalifa ft. Charlie Puth (Fast & Furious 7 Soundtrack)',
    channel: 'Wiz Khalifa',
    category: 'music',
    level: 'A2 - Dễ',
    accent: '🇺🇸 US',
    duration: '3:57',
    thumbnail: 'https://img.youtube.com/vi/RgKAFK5djSk/hqdefault.jpg',
    description: 'Ca khúc tưởng niệm Paul Walker đạt 6 tỉ lượt xem, giai điệu piano da diết về tình huynh đệ và gia đình.',
    transcript: [
      {
        id: 'sya-1',
        startTime: 1.0,
        endTime: 7.5,
        en: "It's been a long day without you, my friend",
        vi: 'Đó quả là một ngày dài khi thiếu vắng bóng dáng bạn, người anh em của tôi',
        keyWord: 'friend',
        ipa: '/frend/',
        meaning: 'người bạn, tri kỷ',
        pos: 'noun'
      },
      {
        id: 'sya-2',
        startTime: 8.0,
        endTime: 15.0,
        en: "And I'll tell you all about it when I see you again",
        vi: 'Và tôi sẽ kể cho bạn nghe tất cả khi hai ta gặp lại nhau',
        keyWord: 'again',
        ipa: '/əˈɡen/',
        meaning: 'lại, lần nữa',
        pos: 'adverb'
      },
      {
        id: 'sya-3',
        startTime: 15.5,
        endTime: 22.5,
        en: "We've come a long way from where we began",
        vi: 'Chúng ta đã cùng đi một chặng đường thật dài từ nơi bắt đầu',
        keyWord: 'began',
        ipa: '/bɪˈɡæn/',
        meaning: 'đã bắt đầu',
        pos: 'verb'
      },
      {
        id: 'sya-4',
        startTime: 23.0,
        endTime: 30.0,
        en: "Oh, I'll tell you all about it when I see you again",
        vi: 'Tôi sẽ kể cho bạn nghe hết thảy khi ngày tương ngộ trở lại',
        keyWord: 'tell',
        ipa: '/tel/',
        meaning: 'kể, bảo',
        pos: 'verb'
      },
      {
        id: 'sya-5',
        startTime: 30.5,
        endTime: 35.5,
        en: 'When I see you again',
        vi: 'Khi tôi được gặp lại bạn',
        keyWord: 'see',
        ipa: '/siː/',
        meaning: 'gặp gỡ, nhìn thấy',
        pos: 'verb'
      },
      {
        id: 'sya-6',
        startTime: 36.0,
        endTime: 40.0,
        en: 'Damn, who knew all the planes we flew',
        vi: 'Ai có thể ngờ được bao nhiêu chuyến bay ta từng đồng hành cùng nhau',
        keyWord: 'planes',
        ipa: '/pleɪnz/',
        meaning: 'những chiếc máy bay',
        pos: 'noun'
      },
      {
        id: 'sya-7',
        startTime: 40.5,
        endTime: 44.5,
        en: "Good things we've been through, that I'll be standing right here",
        vi: 'Bao điều tuyệt vời đã cùng trải qua, để hôm nay tôi đứng tại chốn này',
        keyWord: 'standing',
        ipa: '/ˈstæn.dɪŋ/',
        meaning: 'đang đứng vững',
        pos: 'verb'
      },
      {
        id: 'sya-8',
        startTime: 45.0,
        endTime: 48.0,
        en: "Talking to you 'bout another path",
        vi: 'Nói với bạn về một con đường mới mà bạn đang đi',
        keyWord: 'path',
        ipa: '/pɑːθ/',
        meaning: 'con đường, lối đi',
        pos: 'noun'
      },
      {
        id: 'sya-9',
        startTime: 48.5,
        endTime: 52.0,
        en: 'I know we loved to hit the road and laugh',
        vi: 'Tôi biết hai ta từng yêu thích cảm giác lăn bánh trên xa lộ và cất tiếng cười',
        keyWord: 'road',
        ipa: '/rəʊd/',
        meaning: 'con đường xa lộ',
        pos: 'noun'
      },
      {
        id: 'sya-10',
        startTime: 52.5,
        endTime: 57.5,
        en: "How can we not talk about family when family's all that we got?",
        vi: 'Làm sao có thể không nhắc về gia đình, khi gia đình là tất cả những gì ta có?',
        keyWord: 'family',
        ipa: '/ˈfæm.əl.i/',
        meaning: 'gia đình, người thân',
        pos: 'noun'
      },
      {
        id: 'sya-11',
        startTime: 58.0,
        endTime: 63.5,
        en: 'Everything I went through, you were standing there by my side',
        vi: 'Mọi thăng trầm tôi từng trải qua, bạn luôn kề vai sát cánh nơi ấy',
        keyWord: 'side',
        ipa: '/saɪd/',
        meaning: 'bên cạnh, phía bên',
        pos: 'noun'
      },
      {
        id: 'sya-12',
        startTime: 64.0,
        endTime: 70.0,
        en: "And now you gon' be with me for the last ride",
        vi: 'Và giờ đây bạn sẽ đồng hành cùng tôi trong chuyến hành trình cuối cùng này',
        keyWord: 'ride',
        ipa: '/raɪd/',
        meaning: 'chuyến đi, chuyến hành trình',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'come a long way', ipa: '/kʌm ə lɒŋ weɪ/', meaning: 'đã tiến bộ vượt bậc, đã đi một chặng đường dài', timestamp: 16 },
      { term: 'hit the road', ipa: '/hɪt ðə rəʊd/', meaning: 'khởi hành lên đường, lái xe đi xa', timestamp: 49 },
      { term: 'by my side', ipa: '/baɪ maɪ saɪd/', meaning: 'kề vai sát cánh bên cạnh tôi', timestamp: 60 },
      { term: 'the last ride', ipa: '/ðə lɑːst raɪd/', meaning: 'chuyến đi cuối cùng, chặng kết thúc', timestamp: 66 }
    ]
  },

  // 5. TAYLOR SWIFT - LOVE STORY (TAYLOR'S VERSION)
  {
    id: 'taylor-swift-love-story',
    youtubeId: 'aXzVF3jVqfg',
    title: "Love Story (Taylor's Version) - Taylor Swift (Official Lyric Video)",
    channel: 'Taylor Swift',
    category: 'music',
    level: 'A2 - Dễ',
    accent: '🇺🇸 US',
    duration: '3:55',
    thumbnail: 'https://img.youtube.com/vi/aXzVF3jVqfg/hqdefault.jpg',
    description: 'Bản tình ca cổ tích kinh điển lấy cảm hứng từ Romeo & Juliet, phát âm tiếng Anh trong trẻo và giàu hình tượng.',
    transcript: [
      {
        id: 'ls-1',
        startTime: 13.0,
        endTime: 18.0,
        en: 'We were both young when I first saw you',
        vi: 'Cả hai chúng ta đều còn rất trẻ khi lần đầu em nhìn thấy anh',
        keyWord: 'young',
        ipa: '/jʌŋ/',
        meaning: 'trẻ trung, thanh xuân',
        pos: 'adjective'
      },
      {
        id: 'ls-2',
        startTime: 18.5,
        endTime: 23.5,
        en: 'I close my eyes and the flashback starts',
        vi: 'Em nhắm mắt lại và những hồi ức xưa ùa về',
        keyWord: 'flashback',
        ipa: '/ˈflæʃ.bæk/',
        meaning: 'hồi tưởng, đoạn hồi ức',
        pos: 'noun'
      },
      {
        id: 'ls-3',
        startTime: 24.0,
        endTime: 29.5,
        en: "I'm standin' there on a balcony in summer air",
        vi: 'Em đang đứng trên ban công ấy giữa làn gió mùa hè',
        keyWord: 'balcony',
        ipa: '/ˈbæl.kə.ni/',
        meaning: 'ban công',
        pos: 'noun'
      },
      {
        id: 'ls-4',
        startTime: 30.0,
        endTime: 35.0,
        en: 'See the lights, see the party, the ball gowns',
        vi: 'Nhìn ánh đèn rực rỡ, bữa tiệc xa hoa và những bộ đầm dạ hội',
        keyWord: 'party',
        ipa: '/ˈpɑː.ti/',
        meaning: 'bữa tiệc, buổi liên hoan',
        pos: 'noun'
      },
      {
        id: 'ls-5',
        startTime: 35.5,
        endTime: 38.5,
        en: 'See you make your way through the crowd',
        vi: 'Trông thấy anh rẽ lối bước qua đám đông',
        keyWord: 'crowd',
        ipa: '/kraʊd/',
        meaning: 'đám đông người',
        pos: 'noun'
      },
      {
        id: 'ls-6',
        startTime: 39.0,
        endTime: 44.0,
        en: "And say, 'Hello', little did I know",
        vi: 'Và cất lời chào, lúc ấy em nào đâu hay biết',
        keyWord: 'know',
        ipa: '/nəʊ/',
        meaning: 'biết, hiểu thấu',
        pos: 'verb'
      },
      {
        id: 'ls-7',
        startTime: 44.5,
        endTime: 48.0,
        en: 'That you were Romeo, you were throwin\' pebbles',
        vi: 'Rằng anh chính là chàng Romeo đang ném những viên sỏi nhỏ lên cửa sổ',
        keyWord: 'pebbles',
        ipa: '/ˈpeb.əlz/',
        meaning: 'những viên sỏi nhỏ',
        pos: 'noun'
      },
      {
        id: 'ls-8',
        startTime: 48.5,
        endTime: 52.5,
        en: "And my daddy said, 'Stay away from Juliet'",
        vi: 'Và cha em nghiêm nghị bảo: Hãy tránh xa nàng Juliet ra',
        keyWord: 'stay away',
        ipa: '/steɪ əˈweɪ/',
        meaning: 'tránh xa, giữ khoảng cách',
        pos: 'phrasal verb'
      },
      {
        id: 'ls-9',
        startTime: 53.0,
        endTime: 59.5,
        en: "And I was cryin' on the staircase, beggin' you, 'Please don't go'",
        vi: 'Và em đã khóc bên bậc cầu thang, van xin anh: Xin đừng rời đi',
        keyWord: 'staircase',
        ipa: '/ˈsteə.keɪs/',
        meaning: 'bậc thang, cầu thang',
        pos: 'noun'
      },
      {
        id: 'ls-10',
        startTime: 60.0,
        endTime: 64.0,
        en: 'Romeo, take me somewhere we can be alone',
        vi: 'Romeo ơi, hãy đưa em đến nơi nào đó chỉ có riêng hai ta',
        keyWord: 'alone',
        ipa: '/əˈləʊn/',
        meaning: 'một mình, riêng tư',
        pos: 'adjective'
      },
      {
        id: 'ls-11',
        startTime: 64.5,
        endTime: 68.5,
        en: "I'll be waiting, all there's left to do is run",
        vi: 'Em sẽ đợi, tất cả những gì ta cần làm lúc này là cùng nhau chạy trốn',
        keyWord: 'run',
        ipa: '/rʌn/',
        meaning: 'chạy, trốn thoát',
        pos: 'verb'
      },
      {
        id: 'ls-12',
        startTime: 69.0,
        endTime: 72.5,
        en: "You'll be the prince and I'll be the princess",
        vi: 'Anh sẽ là hoàng tử và em sẽ là nàng công chúa của anh',
        keyWord: 'prince',
        ipa: '/prɪns/',
        meaning: 'hoàng tử',
        pos: 'noun'
      },
      {
        id: 'ls-13',
        startTime: 73.0,
        endTime: 79.0,
        en: "It's a love story, baby, just say, 'Yes'",
        vi: 'Đây là một câu chuyện tình yêu, người yêu hỡi, hãy nói đồng ý đi',
        keyWord: 'story',
        ipa: '/ˈstɔː.ri/',
        meaning: 'câu chuyện, tích truyện',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'make one\'s way', ipa: '/meɪk wʌnz weɪ/', meaning: 'tiến bước, len lỏi qua đám đông', timestamp: 36 },
      { term: 'little did I know', ipa: '/ˈlɪt.əl dɪd aɪ nəʊ/', meaning: 'tôi đâu ngờ rằng, tôi không hề hay biết', timestamp: 41 },
      { term: 'stay away from', ipa: '/steɪ əˈweɪ frɒm/', meaning: 'tránh xa khỏi ai/cái gì', timestamp: 50 },
      { term: 'all there\'s left to do', ipa: '/ɔːl ðeəz left tuː duː/', meaning: 'điều duy nhất còn lại cần phải làm', timestamp: 66 }
    ]
  },

  // 6. TAYLOR SWIFT - BLANK SPACE
  {
    id: 'taylor-swift-blank-space',
    youtubeId: 'e-ORhEE9VVg',
    title: 'Blank Space - Taylor Swift (Official Music Video - 3.4B Views)',
    channel: 'Taylor Swift',
    category: 'music',
    level: 'B1 - Trung bình',
    accent: '🇺🇸 US',
    duration: '4:32',
    thumbnail: 'https://img.youtube.com/vi/e-ORhEE9VVg/hqdefault.jpg',
    description: 'Bản pop thời thượng đỉnh cao với nhịp hát đảo phách, giàu từ vựng miêu tả tính cách và tâm lý phức tạp.',
    transcript: [
      {
        id: 'bs-1',
        startTime: 4.0,
        endTime: 7.5,
        en: 'Nice to meet you, where you been?',
        vi: 'Rất vui được gặp anh, bấy lâu nay anh đã ở đâu thế?',
        keyWord: 'meet',
        ipa: '/miːt/',
        meaning: 'gặp gỡ',
        pos: 'verb'
      },
      {
        id: 'bs-2',
        startTime: 8.0,
        endTime: 11.5,
        en: 'I could show you incredible things',
        vi: 'Em có thể cho anh thấy những điều kỳ diệu không tưởng',
        keyWord: 'incredible',
        ipa: '/ɪnˈkred.ə.bəl/',
        meaning: 'không thể tin được, tuyệt vời',
        pos: 'adjective'
      },
      {
        id: 'bs-3',
        startTime: 12.0,
        endTime: 15.0,
        en: 'Magic, madness, heaven, sin',
        vi: 'Phép thuật, sự điên rồ, thiên đường và cả tội lỗi',
        keyWord: 'magic',
        ipa: '/ˈmædʒ.ɪk/',
        meaning: 'ma thuật, phép màu',
        pos: 'noun'
      },
      {
        id: 'bs-4',
        startTime: 15.5,
        endTime: 21.0,
        en: 'Saw you there and I thought: Oh my God, look at that face',
        vi: 'Nhìn thấy anh ở đó và em thầm nghĩ: Trời ơi, hãy nhìn gương mặt ấy xem',
        keyWord: 'face',
        ipa: '/feɪs/',
        meaning: 'khuôn mặt',
        pos: 'noun'
      },
      {
        id: 'bs-5',
        startTime: 21.5,
        endTime: 26.5,
        en: "You look like my next mistake, love's a game, wanna play?",
        vi: 'Trông anh có vẻ là sai lầm tiếp theo của em đấy, tình yêu là trò chơi, muốn thử không?',
        keyWord: 'mistake',
        ipa: '/mɪˈsteɪk/',
        meaning: 'sai lầm, điều lầm lỡ',
        pos: 'noun'
      },
      {
        id: 'bs-6',
        startTime: 27.0,
        endTime: 33.0,
        en: 'New money, suit and tie, I can read you like a magazine',
        vi: 'Giàu có, comple cà vạt chỉnh tề, em có thể đọc thấu anh như một cuốn tạp chí',
        keyWord: 'magazine',
        ipa: '/ˌmæɡ.əˈziːn/',
        meaning: 'cuốn tạp chí',
        pos: 'noun'
      },
      {
        id: 'bs-7',
        startTime: 33.5,
        endTime: 39.0,
        en: "Ain't it funny? Rumors fly, and I know you heard about me",
        vi: 'Thú vị nhỉ? Tin đồn bay xa, và em biết chắc anh đã nghe danh em rồi',
        keyWord: 'rumors',
        ipa: '/ˈruː.mərz/',
        meaning: 'những tin đồn thổi',
        pos: 'noun'
      },
      {
        id: 'bs-8',
        startTime: 40.0,
        endTime: 47.0,
        en: "So it's gonna be forever, or it's gonna go down in flames",
        vi: 'Vậy nên cuộc tình này sẽ kéo dài mãi mãi, hoặc sẽ kết thúc tan thành tro bụi',
        keyWord: 'flames',
        ipa: '/fleɪmz/',
        meaning: 'ngọn lửa, tro bụi',
        pos: 'noun'
      },
      {
        id: 'bs-9',
        startTime: 47.5,
        endTime: 53.5,
        en: 'You can tell me when it\'s over, if the high was worth the pain',
        vi: 'Anh có thể nói cho em biết khi kết thúc, liệu niềm hưng phấn có xứng với nỗi đau',
        keyWord: 'pain',
        ipa: '/peɪn/',
        meaning: 'nỗi đau đớn, vết thương',
        pos: 'noun'
      },
      {
        id: 'bs-10',
        startTime: 54.0,
        endTime: 61.0,
        en: "Got a long list of ex-lovers, they'll tell you I'm insane",
        vi: 'Em có một danh sách dài người yêu cũ, họ sẽ bảo với anh rằng em bị điên',
        keyWord: 'insane',
        ipa: '/ɪnˈseɪn/',
        meaning: 'điên cuồng, mất trí',
        pos: 'adjective'
      },
      {
        id: 'bs-11',
        startTime: 61.5,
        endTime: 67.5,
        en: "'Cause you know I love the players, and you love the game",
        vi: 'Bởi vì anh biết em thích những kẻ chơi bời, còn anh thì nghiện cuộc chơi',
        keyWord: 'players',
        ipa: '/ˈpleɪ.ərz/',
        meaning: 'những kẻ đào hoa, người chơi',
        pos: 'noun'
      },
      {
        id: 'bs-12',
        startTime: 68.0,
        endTime: 74.0,
        en: "'Cause we're young and we're reckless, we'll take this way too far",
        vi: 'Bởi chúng ta trẻ và liều lĩnh, ta sẽ đẩy chuyện này đi quá giới hạn',
        keyWord: 'reckless',
        ipa: '/ˈrek.ləs/',
        meaning: 'liều lĩnh, bất cẩn',
        pos: 'adjective'
      },
      {
        id: 'bs-13',
        startTime: 74.5,
        endTime: 80.5,
        en: "It'll leave you breathless, or with a nasty scar",
        vi: 'Nó sẽ khiến anh nghẹt thở vì mê đắm, hoặc để lại một vết sẹo xấu xí',
        keyWord: 'breathless',
        ipa: '/ˈbreθ.ləs/',
        meaning: 'hụt hơi, nín thở mê đắm',
        pos: 'adjective'
      },
      {
        id: 'bs-14',
        startTime: 81.0,
        endTime: 87.5,
        en: "Got a long list of ex-lovers, they'll tell you I'm insane",
        vi: 'Có một danh sách dài người yêu cũ sẵn sàng rỉ tai bảo em mất trí',
        keyWord: 'lovers',
        ipa: '/ˈlʌv.ərz/',
        meaning: 'những người tình',
        pos: 'noun'
      },
      {
        id: 'bs-15',
        startTime: 88.0,
        endTime: 95.0,
        en: "But I've got a blank space, baby, and I'll write your name",
        vi: 'Nhưng em vẫn còn một khoảng trống ở đây, cưng à, và em sẽ điền tên anh vào đó',
        keyWord: 'blank',
        ipa: '/blæŋk/',
        meaning: 'trống rỗng, để trống',
        pos: 'adjective'
      }
    ],
    vocabulary: [
      { term: 'go down in flames', ipa: '/ɡəʊ daʊn ɪn fleɪmz/', meaning: 'thất bại thảm hại, tiêu tan hoàn toàn', timestamp: 44 },
      { term: 'read someone like a magazine', ipa: '/riːd ˈsʌm.wʌn laɪk ə ˌmæɡ.əˈziːn/', meaning: 'đọc vị và thấu hiểu ai đó rất rõ ràng', timestamp: 30 },
      { term: 'worth the pain', ipa: '/wɜːθ ðə peɪn/', meaning: 'đáng giá sau những tổn thương đã chịu', timestamp: 51 },
      { term: 'reckless', ipa: '/ˈrek.ləs/', meaning: 'liều lĩnh, không màng đến hậu quả', timestamp: 70 }
    ]
  },

  // 7. TAYLOR SWIFT - LOVER
  {
    id: 'taylor-swift-lover',
    youtubeId: '-BjZmE2gtdo',
    title: 'Lover - Taylor Swift (Official Lyric Video)',
    channel: 'Taylor Swift',
    category: 'music',
    level: 'A2 - Dễ',
    accent: '🇺🇸 US',
    duration: '3:41',
    thumbnail: 'https://img.youtube.com/vi/-BjZmE2gtdo/hqdefault.jpg',
    description: 'Bản waltz cổ điển mộng mơ với từ vựng ấm áp, lý tưởng để học cấu trúc thì tương lai và câu ước nguyện.',
    transcript: [
      {
        id: 'l-1',
        startTime: 3.0,
        endTime: 8.5,
        en: "We could leave the Christmas lights up 'til January",
        vi: 'Chúng ta có thể để ánh đèn Giáng sinh chăng đến tận tháng Giêng',
        keyWord: 'lights',
        ipa: '/laɪts/',
        meaning: 'ánh đèn rực rỡ',
        pos: 'noun'
      },
      {
        id: 'l-2',
        startTime: 9.0,
        endTime: 14.5,
        en: 'And this is our place, we make the rules',
        vi: 'Và đây là tổ ấm của đôi ta, ta tự tạo ra những quy tắc riêng',
        keyWord: 'rules',
        ipa: '/ruːlz/',
        meaning: 'luật lệ, quy tắc',
        pos: 'noun'
      },
      {
        id: 'l-3',
        startTime: 15.0,
        endTime: 21.5,
        en: 'And there\'s a dazzling haze, a mysterious way about you dear',
        vi: 'Và có một làn sương lấp lánh, một nét bí ẩn cuốn hút nơi anh, anh yêu à',
        keyWord: 'dazzling',
        ipa: '/ˈdæz.lɪŋ/',
        meaning: 'sáng chói, lấp lánh diệu kỳ',
        pos: 'adjective'
      },
      {
        id: 'l-4',
        startTime: 22.0,
        endTime: 27.5,
        en: 'Have I known you twenty seconds or twenty years?',
        vi: 'Em đã quen biết anh mới hai mươi giây hay là hai mươi năm rồi?',
        keyWord: 'known',
        ipa: '/nəʊn/',
        meaning: 'đã biết, quen thuộc',
        pos: 'verb'
      },
      {
        id: 'l-5',
        startTime: 28.0,
        endTime: 32.5,
        en: 'Can I go where you go?',
        vi: 'Em có thể đi cùng bất cứ nơi nào anh đến được không?',
        keyWord: 'where',
        ipa: '/weər/',
        meaning: 'nơi chốn, chốn nào',
        pos: 'adverb'
      },
      {
        id: 'l-6',
        startTime: 33.0,
        endTime: 40.0,
        en: 'Can we always be this close forever and ever?',
        vi: 'Chúng ta có thể mãi mãi gần gũi bên nhau như thế này đến trọn đời không?',
        keyWord: 'close',
        ipa: '/kləʊs/',
        meaning: 'gần gũi, khăng khít',
        pos: 'adjective'
      },
      {
        id: 'l-7',
        startTime: 40.5,
        endTime: 47.0,
        en: 'And ah, take me out, and take me home',
        vi: 'Và hãy đưa em đi hẹn hò, rồi đưa em trở về mái ấm yêu thương',
        keyWord: 'home',
        ipa: '/həʊm/',
        meaning: 'mái ấm gia đình',
        pos: 'noun'
      },
      {
        id: 'l-8',
        startTime: 47.5,
        endTime: 54.0,
        en: "You're my, my, my, my lover",
        vi: 'Anh là người yêu, là tri kỷ trọn đời của em',
        keyWord: 'lover',
        ipa: '/ˈlʌv.ər/',
        meaning: 'người tình, người yêu',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'make the rules', ipa: '/meɪk ðə ruːlz/', meaning: 'tự đặt ra quy tắc sống riêng của mình', timestamp: 12 },
      { term: 'dazzling haze', ipa: '/ˈdæz.lɪŋ heɪz/', meaning: 'làn sương lung linh lấp lánh', timestamp: 18 },
      { term: 'forever and ever', ipa: '/fəˈre.vər ænd ˈev.ər/', meaning: 'mãi mãi về sau, thiên thu', timestamp: 37 }
    ]
  },

  // 8. JUSTIN BIEBER - LOVE YOURSELF
  {
    id: 'justin-bieber-love-yourself',
    youtubeId: 'oyEuk8j8imI',
    title: 'Love Yourself - Justin Bieber (Official Music Video)',
    channel: 'Justin Bieber',
    category: 'music',
    level: 'A2 - Dễ',
    accent: '🇨🇦 Canada / US',
    duration: '4:32',
    thumbnail: 'https://img.youtube.com/vi/oyEuk8j8imI/hqdefault.jpg',
    description: 'Ca khúc acoustic do Ed Sheeran đồng sáng tác, bài học tuyệt vời về các thành ngữ giao tiếp như "rain on my parade".',
    transcript: [
      {
        id: 'ly-1',
        startTime: 3.0,
        endTime: 8.0,
        en: 'For all the times that you rained on my parade',
        vi: 'Cho tất cả những lần em làm hỏng niềm vui và tâm trạng của anh',
        keyWord: 'parade',
        ipa: '/pəˈreɪd/',
        meaning: 'cuộc diễu hành, ngày vui',
        pos: 'noun'
      },
      {
        id: 'ly-2',
        startTime: 8.5,
        endTime: 13.0,
        en: 'And all the clubs you get in using my name',
        vi: 'Và tất cả những quán bar em bước vào nhờ mượn danh nghĩa của anh',
        keyWord: 'clubs',
        ipa: '/klʌbz/',
        meaning: 'các câu lạc bộ, vũ trường',
        pos: 'noun'
      },
      {
        id: 'ly-3',
        startTime: 13.5,
        endTime: 19.5,
        en: "You think you broke my heart, oh girl, for goodness' sake",
        vi: 'Em nghĩ em đã làm tan nát trái tim anh ư, ôi cô bé, làm ơn đi mà',
        keyWord: 'heart',
        ipa: '/hɑːt/',
        meaning: 'trái tim',
        pos: 'noun'
      },
      {
        id: 'ly-4',
        startTime: 20.0,
        endTime: 24.5,
        en: "You think I'm crying on my own, well, I ain't",
        vi: 'Em nghĩ anh đang ngồi khóc một mình sao, thật tiếc là không hề nhé',
        keyWord: 'crying',
        ipa: '/ˈkraɪ.ɪŋ/',
        meaning: 'khóc lóc, rơi lệ',
        pos: 'verb'
      },
      {
        id: 'ly-5',
        startTime: 25.0,
        endTime: 28.0,
        en: "And I didn't wanna write a song",
        vi: 'Và anh đã chẳng hề muốn sáng tác bài ca này',
        keyWord: 'song',
        ipa: '/sɒŋ/',
        meaning: 'bài hát, ca khúc',
        pos: 'noun'
      },
      {
        id: 'ly-6',
        startTime: 28.5,
        endTime: 34.0,
        en: "'Cause I didn't want anyone thinking I still care, I don't",
        vi: 'Bởi anh không muốn ai nghĩ rằng anh vẫn còn bận tâm, anh hoàn toàn không bận tâm',
        keyWord: 'care',
        ipa: '/keər/',
        meaning: 'quan tâm, bận lòng',
        pos: 'verb'
      },
      {
        id: 'ly-7',
        startTime: 34.5,
        endTime: 38.0,
        en: 'But you still hit my phone up',
        vi: 'Thế nhưng em vẫn cứ liên tục gọi điện nhắn tin cho anh',
        keyWord: 'phone',
        ipa: '/fəʊn/',
        meaning: 'điện thoại',
        pos: 'noun'
      },
      {
        id: 'ly-8',
        startTime: 38.5,
        endTime: 43.5,
        en: "And baby, I've been movin' on, and I think you should be somethin'",
        vi: 'Và em à, anh đã bước tiếp từ lâu rồi, và anh nghĩ em nên làm điều gì đó',
        keyWord: 'movin',
        ipa: '/ˈmuː.vɪŋ/',
        meaning: 'chuyển biến, bước qua',
        pos: 'verb'
      },
      {
        id: 'ly-9',
        startTime: 44.0,
        endTime: 48.5,
        en: "I don't wanna hold back, maybe you should know that",
        vi: 'Anh chẳng muốn giữ trong lòng nữa, có lẽ em cần biết điều này',
        keyWord: 'hold back',
        ipa: '/həʊld bæk/',
        meaning: 'kìm nén, giữ lại',
        pos: 'phrasal verb'
      },
      {
        id: 'ly-10',
        startTime: 49.0,
        endTime: 54.0,
        en: "My mama don't like you and she likes everyone",
        vi: 'Mẹ anh vốn chẳng thích em, mà bà thì tốt bụng quý mến tất cả mọi người',
        keyWord: 'mama',
        ipa: '/ˈmɑː.mə/',
        meaning: 'người mẹ',
        pos: 'noun'
      },
      {
        id: 'ly-11',
        startTime: 54.5,
        endTime: 59.5,
        en: 'And I never like to admit that I was wrong',
        vi: 'Và anh chẳng bao giờ chịu nhận rằng mình đã lầm lỡ trong chuyện này',
        keyWord: 'wrong',
        ipa: '/rɒŋ/',
        meaning: 'sai lầm, không đúng',
        pos: 'adjective'
      },
      {
        id: 'ly-12',
        startTime: 60.0,
        endTime: 65.0,
        en: "'Cause if you like the way you look that much",
        vi: 'Vì thế nếu em say mê bản thân và cách nhìn của mình đến mức đó',
        keyWord: 'look',
        ipa: '/lʊk/',
        meaning: 'vẻ ngoài, diện mạo',
        pos: 'noun'
      },
      {
        id: 'ly-13',
        startTime: 65.5,
        endTime: 71.0,
        en: 'Oh baby, you should go and love yourself',
        vi: 'Thì cưng ơi, em hãy tự đi mà yêu chính bản thân mình đi',
        keyWord: 'love',
        ipa: '/lʌv/',
        meaning: 'yêu mến',
        pos: 'verb'
      }
    ],
    vocabulary: [
      { term: 'rain on someone\'s parade', ipa: '/reɪn ɒn ˈsʌm.wʌnz pəˈreɪd/', meaning: 'làm hỏng niềm vui hoặc kế hoạch hào hứng của ai đó', timestamp: 6 },
      { term: 'for goodness\' sake', ipa: '/fɔːr ˈɡʊd.nəs seɪk/', meaning: 'trời ơi, làm ơn đi mà (thán từ thể hiện sự ngán ngẩm)', timestamp: 17 },
      { term: 'hit someone\'s phone up', ipa: '/hɪt ˈsʌm.wʌnz fəʊn ʌp/', meaning: 'gọi điện hoặc nhắn tin liên tục cho ai đó', timestamp: 36 },
      { term: 'hold back', ipa: '/həʊld bæk/', meaning: 'ngập ngừng, kìm nén không chịu thổ lộ', timestamp: 46 }
    ]
  },

  // 9. MAROON 5 - MEMORIES
  {
    id: 'maroon5-memories',
    youtubeId: 'SlPhMPnQ58k',
    title: 'Memories - Maroon 5 (Official Music Video)',
    channel: 'Maroon 5',
    category: 'music',
    level: 'A2 - Dễ',
    accent: '🇺🇸 US',
    duration: '3:15',
    thumbnail: 'https://img.youtube.com/vi/SlPhMPnQ58k/hqdefault.jpg',
    description: 'Ca khúc tri ân dựa trên giai điệu Canon in D, câu từ đơn giản nhưng xúc động mạnh mẽ về tình bạn và kỷ niệm.',
    transcript: [
      {
        id: 'm-1',
        startTime: 1.0,
        endTime: 5.0,
        en: "Here's to the ones that we got",
        vi: 'Nâng ly chúc mừng những người bạn ta đang có bên mình',
        keyWord: 'ones',
        ipa: '/wʌnz/',
        meaning: 'những người, người thân',
        pos: 'pronoun'
      },
      {
        id: 'm-2',
        startTime: 5.5,
        endTime: 9.0,
        en: "Cheers to the wish you were here, but you're not",
        vi: 'Cụng ly cho ước nguyện giá như bạn ở đây, nhưng bạn lại không thể',
        keyWord: 'cheers',
        ipa: '/tʃɪəz/',
        meaning: 'cụng ly, chúc mừng',
        pos: 'exclamation'
      },
      {
        id: 'm-3',
        startTime: 9.5,
        endTime: 13.5,
        en: "'Cause the drinks bring back all the memories",
        vi: 'Bởi vì hơi men gợi nhắc lại tất cả những ký ức ngọt ngào',
        keyWord: 'memories',
        ipa: '/ˈmem.ər.iz/',
        meaning: 'kỷ niệm, ký ức',
        pos: 'noun'
      },
      {
        id: 'm-4',
        startTime: 14.0,
        endTime: 17.5,
        en: "Of everything we've been through",
        vi: 'Về tất cả những thăng trầm ta đã cùng nhau vượt qua',
        keyWord: 'everything',
        ipa: '/ˈev.ri.θɪŋ/',
        meaning: 'mọi điều, tất cả',
        pos: 'pronoun'
      },
      {
        id: 'm-5',
        startTime: 18.0,
        endTime: 22.0,
        en: 'Toast to the ones here today',
        vi: 'Nâng ly chúc mừng những người có mặt hôm nay',
        keyWord: 'toast',
        ipa: '/təʊst/',
        meaning: 'nâng ly chúc mừng',
        pos: 'verb'
      },
      {
        id: 'm-6',
        startTime: 22.5,
        endTime: 26.5,
        en: 'Toast to the ones that we lost on the way',
        vi: 'Nâng ly tưởng nhớ những người thân ta đã mất trên đường đời',
        keyWord: 'lost',
        ipa: '/lɒst/',
        meaning: 'đã mất, rời xa',
        pos: 'verb'
      },
      {
        id: 'm-7',
        startTime: 27.0,
        endTime: 30.5,
        en: "'Cause the drinks bring back all the memories",
        vi: 'Bởi hơi men gợi nhớ lại muôn vàn ký ức xưa',
        keyWord: 'drinks',
        ipa: '/drɪŋks/',
        meaning: 'đồ uống, ly rượu',
        pos: 'noun'
      },
      {
        id: 'm-8',
        startTime: 31.0,
        endTime: 36.0,
        en: 'And the memories bring back, memories bring back you',
        vi: 'Và những kỷ niệm ấy lại đưa hình bóng bạn trở về trong tim tôi',
        keyWord: 'bring back',
        ipa: '/brɪŋ bæk/',
        meaning: 'mang trở lại, gợi nhớ',
        pos: 'phrasal verb'
      },
      {
        id: 'm-9',
        startTime: 36.5,
        endTime: 42.0,
        en: 'There\'s a time that I remember, when I did not know no pain',
        vi: 'Có một khoảng thời gian tôi vẫn nhớ, khi tôi chưa từng nếm trải nỗi đau',
        keyWord: 'pain',
        ipa: '/peɪn/',
        meaning: 'nỗi đau, sự thống khổ',
        pos: 'noun'
      },
      {
        id: 'm-10',
        startTime: 42.5,
        endTime: 47.5,
        en: 'When I believed in forever, and everything would stay the same',
        vi: 'Khi tôi từng tin vào sự vĩnh cửu, và mọi thứ sẽ mãi vẹn nguyên không đổi thay',
        keyWord: 'believed',
        ipa: '/bɪˈliːvd/',
        meaning: 'đã tin tưởng',
        pos: 'verb'
      },
      {
        id: 'm-11',
        startTime: 48.0,
        endTime: 53.0,
        en: 'Now my heart feel like December, when somebody say your name',
        vi: 'Giờ đây tim tôi lạnh giá như tháng Mười Hai mỗi khi ai đó nhắc đến tên bạn',
        keyWord: 'December',
        ipa: '/dɪˈsem.bər/',
        meaning: 'tháng Mười Hai (mùa đông)',
        pos: 'noun'
      },
      {
        id: 'm-12',
        startTime: 53.5,
        endTime: 59.0,
        en: "'Cause I can't reach out to call you, but I know I will one day",
        vi: 'Bởi tôi chẳng thể với tay gọi bạn được nữa, nhưng tôi tin ngày nào đó ta sẽ gặp lại',
        keyWord: 'reach out',
        ipa: '/riːtʃ aʊt/',
        meaning: 'với tay, liên lạc',
        pos: 'phrasal verb'
      }
    ],
    vocabulary: [
      { term: 'here\'s to', ipa: '/hɪəz tuː/', meaning: 'nâng ly chúc mừng hoặc tưởng nhớ tới ai đó', timestamp: 3 },
      { term: 'bring back', ipa: '/brɪŋ bæk/', meaning: 'gợi nhớ lại kỷ niệm xưa', timestamp: 33 },
      { term: 'stay the same', ipa: '/steɪ ðə seɪm/', meaning: 'giữ nguyên không thay đổi', timestamp: 46 },
      { term: 'reach out to', ipa: '/riːtʃ aʊt tuː/', meaning: 'tìm cách liên lạc, kết nối với ai đó', timestamp: 56 }
    ]
  },

  // 10. MAROON 5 - SUGAR
  {
    id: 'maroon5-sugar',
    youtubeId: '09R8_2nJtjg',
    title: 'Sugar - Maroon 5 (Official Music Video - 4B Views Wedding Surprise)',
    channel: 'Maroon 5',
    category: 'music',
    level: 'B1 - Trung bình',
    accent: '🇺🇸 US',
    duration: '5:01',
    thumbnail: 'https://img.youtube.com/vi/09R8_2nJtjg/hqdefault.jpg',
    description: 'Bản hit disco funk 4 tỉ lượt xem với giọng falsetto bay bổng của Adam Levine, cực kỳ rộn rã và lôi cuốn.',
    transcript: [
      {
        id: 'sug-1',
        startTime: 43.0,
        endTime: 48.0,
        en: "I'm hurting, baby, I'm broken down",
        vi: 'Anh đang thương tổn, em ơi, tâm hồn anh đang rệu rã',
        keyWord: 'hurting',
        ipa: '/ˈhɜː.tɪŋ/',
        meaning: 'đang đau lòng, tổn thương',
        pos: 'verb'
      },
      {
        id: 'sug-2',
        startTime: 48.5,
        endTime: 53.0,
        en: 'I need your loving, loving, I need it now',
        vi: 'Anh cần tình yêu dịu dàng của em, anh cần nó ngay lúc này',
        keyWord: 'loving',
        ipa: '/ˈlʌv.ɪŋ/',
        meaning: 'tình yêu thương',
        pos: 'noun'
      },
      {
        id: 'sug-3',
        startTime: 53.5,
        endTime: 58.0,
        en: "When I'm without you, I'm something weak",
        vi: 'Khi vắng bóng em, anh trở nên yếu đuối biết bao',
        keyWord: 'weak',
        ipa: '/wiːk/',
        meaning: 'yếu ớt, mềm lòng',
        pos: 'adjective'
      },
      {
        id: 'sug-4',
        startTime: 58.5,
        endTime: 64.0,
        en: "You got me begging, begging, I'm on my knees",
        vi: 'Em khiến anh phải khẩn nài, anh đang quỳ gối xin em',
        keyWord: 'begging',
        ipa: '/ˈbeɡ.ɪŋ/',
        meaning: 'khẩn cầu, van nài',
        pos: 'verb'
      },
      {
        id: 'sug-5',
        startTime: 64.5,
        endTime: 70.0,
        en: "I don't wanna be needing your love, I just wanna be deep in your love",
        vi: 'Anh không chỉ muốn cần tình em, anh muốn đắm chìm thật sâu vào tình yêu ấy',
        keyWord: 'deep',
        ipa: '/diːp/',
        meaning: 'sâu thẳm, nồng nàn',
        pos: 'adjective'
      },
      {
        id: 'sug-6',
        startTime: 70.5,
        endTime: 74.5,
        en: "And it's killing me when you're away, ooh, baby",
        vi: 'Và cảm giác này như giết chết anh mỗi khi em đi xa',
        keyWord: 'killing',
        ipa: '/ˈkɪl.ɪŋ/',
        meaning: 'giết chết, dằn vặt',
        pos: 'verb'
      },
      {
        id: 'sug-7',
        startTime: 75.0,
        endTime: 80.5,
        en: "'Cause I really don't care where you are, I just wanna be there where you are",
        vi: 'Bởi anh thật sự không quan tâm em ở đâu, anh chỉ muốn có mặt bên cạnh em',
        keyWord: 'care',
        ipa: '/keər/',
        meaning: 'quan tâm, màng tới',
        pos: 'verb'
      },
      {
        id: 'sug-8',
        startTime: 81.0,
        endTime: 85.0,
        en: 'And I gotta get one little taste',
        vi: 'Và anh phải nếm thử một chút dư vị ngọt ngào ấy',
        keyWord: 'taste',
        ipa: '/teɪst/',
        meaning: 'vị nếm, sự ngọt ngào',
        pos: 'noun'
      },
      {
        id: 'sug-9',
        startTime: 85.5,
        endTime: 94.0,
        en: "Sugar, yes please, won't you come and put it down on me?",
        vi: 'Đường ngọt ơi, vâng xin hãy đến và ban tặng cho anh chút ngọt ngào',
        keyWord: 'sugar',
        ipa: '/ˈʃʊɡ.ər/',
        meaning: 'đường, sự ngọt ngào (người yêu)',
        pos: 'noun'
      },
      {
        id: 'sug-10',
        startTime: 94.5,
        endTime: 101.0,
        en: "I'm right here, 'cause I need little love, a little sympathy",
        vi: 'Anh ở ngay đây rồi, vì anh cần một chút tình thương và sự đồng cảm',
        keyWord: 'sympathy',
        ipa: '/ˈsɪm.pə.θi/',
        meaning: 'sự đồng cảm, cảm thông',
        pos: 'noun'
      },
      {
        id: 'sug-11',
        startTime: 101.5,
        endTime: 106.0,
        en: 'Yeah you show me good loving, make it alright',
        vi: 'Em hãy trao anh tình yêu nồng nàn để xua tan mọi âu lo',
        keyWord: 'alright',
        ipa: '/ɔːlˈraɪt/',
        meaning: 'ổn thỏa, tốt đẹp',
        pos: 'adjective'
      },
      {
        id: 'sug-12',
        startTime: 106.5,
        endTime: 114.0,
        en: 'Need a little sweetness in my life, sugar, yes please',
        vi: 'Đời anh cần thêm chút vị ngọt ngào, đường ơi, hãy đến bên anh',
        keyWord: 'sweetness',
        ipa: '/ˈswiːt.nəs/',
        meaning: 'sự ngọt ngào, vị ngọt',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'broken down', ipa: '/ˈbrəʊ.kən daʊn/', meaning: 'sụp đổ tinh thần, suy sụp', timestamp: 46 },
      { term: 'on my knees', ipa: '/ɒn maɪ niːz/', meaning: 'quỳ gối khẩn nài ai đó', timestamp: 62 },
      { term: 'sympathy', ipa: '/ˈsɪm.pə.θi/', meaning: 'sự thấu cảm, lòng trắc ẩn', timestamp: 99 },
      { term: 'sweetness', ipa: '/ˈswiːt.nəs/', meaning: 'hương vị ngọt ngào, nét dịu dàng', timestamp: 108 }
    ]
  },

  // 11. ADELE - SOMEONE LIKE YOU
  {
    id: 'adele-someone-like-you',
    youtubeId: 'NAc83CF8Ejk',
    title: 'Someone Like You - Adele (Official Music Video)',
    channel: 'Adele',
    category: 'music',
    level: 'A2 - Dễ',
    accent: '🇬🇧 UK',
    duration: '4:45',
    thumbnail: 'https://img.youtube.com/vi/NAc83CF8Ejk/hqdefault.jpg',
    description: 'Bản ballad piano da diết 2 tỉ view với phát âm tiếng Anh chuẩn Anh cực kỳ nắn nót, rõ ràng và truyền cảm.',
    transcript: [
      {
        id: 's-1',
        startTime: 14.0,
        endTime: 18.0,
        en: "I heard that you're settled down",
        vi: 'Em nghe nói anh đã ổn định cuộc sống',
        keyWord: 'settled',
        ipa: '/ˈset.əld/',
        meaning: 'ổn định, an bề gia thất',
        pos: 'adjective'
      },
      {
        id: 's-2',
        startTime: 18.5,
        endTime: 24.0,
        en: "That you found a girl and you're married now",
        vi: 'Rằng anh đã tìm thấy một người con gái và nay hai người đã nên duyên vợ chồng',
        keyWord: 'married',
        ipa: '/ˈmær.id/',
        meaning: 'đã kết hôn',
        pos: 'adjective'
      },
      {
        id: 's-3',
        startTime: 24.5,
        endTime: 28.5,
        en: 'I heard that your dreams came true',
        vi: 'Em nghe nói những ước mơ của anh giờ đã thành hiện thực',
        keyWord: 'dreams',
        ipa: '/driːmz/',
        meaning: 'những giấc mơ, ước nguyện',
        pos: 'noun'
      },
      {
        id: 's-4',
        startTime: 29.0,
        endTime: 34.5,
        en: "Guess she gave you things I didn't give to you",
        vi: 'Chắc hẳn cô ấy đã cho anh những điều mà em từng chẳng thể trao',
        keyWord: 'give',
        ipa: '/ɡɪv/',
        meaning: 'cho, tặng, trao gửi',
        pos: 'verb'
      },
      {
        id: 's-5',
        startTime: 35.0,
        endTime: 39.5,
        en: 'Old friend, why are you so shy?',
        vi: 'Hỡi người bạn cũ, cớ sao trông anh lại e dè ngượng ngùng thế?',
        keyWord: 'shy',
        ipa: '/ʃaɪ/',
        meaning: 'nhút nhát, e thẹn',
        pos: 'adjective'
      },
      {
        id: 's-6',
        startTime: 40.0,
        endTime: 47.0,
        en: "Ain't like you to hold back or hide from the light",
        vi: 'Chẳng giống anh chút nào khi lại ngập ngừng hay lẩn tránh ánh sáng',
        keyWord: 'hide',
        ipa: '/haɪd/',
        meaning: 'trốn tránh, ẩn nấp',
        pos: 'verb'
      },
      {
        id: 's-7',
        startTime: 47.5,
        endTime: 52.5,
        en: 'I hate to turn up out of the blue, uninvited',
        vi: 'Em rất ghét việc đường đột xuất hiện bất ngờ mà không được mời',
        keyWord: 'uninvited',
        ipa: '/ˌʌn.ɪnˈvaɪ.tɪd/',
        meaning: 'không được mời',
        pos: 'adjective'
      },
      {
        id: 's-8',
        startTime: 53.0,
        endTime: 57.5,
        en: "But I couldn't stay away, I couldn't fight it",
        vi: 'Nhưng em đã không thể đứng từ xa, em không thể cưỡng lại lòng mình',
        keyWord: 'stay away',
        ipa: '/steɪ əˈweɪ/',
        meaning: 'ở xa, tránh mặt',
        pos: 'phrasal verb'
      },
      {
        id: 's-9',
        startTime: 58.0,
        endTime: 63.5,
        en: "I had hoped you'd see my face and that you'd be reminded",
        vi: 'Em đã từng hy vọng anh nhìn thấy mặt em và được nhắc nhớ',
        keyWord: 'reminded',
        ipa: '/rɪˈmaɪn.dɪd/',
        meaning: 'được gợi nhớ lại',
        pos: 'verb'
      },
      {
        id: 's-10',
        startTime: 64.0,
        endTime: 69.0,
        en: "That for me, it isn't over",
        vi: 'Rằng đối với riêng em, mối duyên này vẫn chưa bao giờ khép lại',
        keyWord: 'over',
        ipa: '/ˈəʊ.vər/',
        meaning: 'kết thúc, chấm dứt',
        pos: 'adjective'
      },
      {
        id: 's-11',
        startTime: 69.5,
        endTime: 78.0,
        en: "Never mind, I'll find someone like you",
        vi: 'Đừng bận tâm nhé, rồi em cũng sẽ tìm được một người như anh',
        keyWord: 'someone',
        ipa: '/ˈsʌm.wʌn/',
        meaning: 'một ai đó',
        pos: 'pronoun'
      },
      {
        id: 's-12',
        startTime: 78.5,
        endTime: 85.5,
        en: 'I wish nothing but the best for you too',
        vi: 'Em chẳng mong gì hơn ngoài những điều tốt đẹp nhất sẽ đến với anh',
        keyWord: 'best',
        ipa: '/best/',
        meaning: 'điều tốt đẹp nhất',
        pos: 'adjective'
      },
      {
        id: 's-13',
        startTime: 86.0,
        endTime: 92.5,
        en: "'Don't forget me,' I beg, 'I'll remember you said'",
        vi: 'Đừng quên em nhé, em van cầu anh, em sẽ khắc ghi điều anh từng nói',
        keyWord: 'beg',
        ipa: '/beɡ/',
        meaning: 'van xin, nài nỉ',
        pos: 'verb'
      },
      {
        id: 's-14',
        startTime: 93.0,
        endTime: 101.0,
        en: "'Sometimes it lasts in love, but sometimes it hurts instead'",
        vi: 'Đôi khi tình yêu sẽ kéo dài mãi mãi, nhưng đôi lúc nó lại mang đến nỗi đau',
        keyWord: 'hurts',
        ipa: '/hɜːts/',
        meaning: 'gây đau đớn, tổn thương',
        pos: 'verb'
      }
    ],
    vocabulary: [
      { term: 'settle down', ipa: '/ˈset.əl daʊn/', meaning: 'ổn định cuộc sống, lập gia đình', timestamp: 16 },
      { term: 'out of the blue', ipa: '/aʊt əv ðə bluː/', meaning: 'hoàn toàn bất ngờ, không báo trước', timestamp: 49 },
      { term: 'hold back', ipa: '/həʊld bæk/', meaning: 'ngập ngừng, kìm nén cảm xúc', timestamp: 43 },
      { term: 'nothing but the best', ipa: '/ˈnʌθ.ɪŋ bʌt ðə best/', meaning: 'những điều tuyệt vời và tốt đẹp nhất', timestamp: 81 }
    ]
  },

  // 12. COLDPLAY - YELLOW
  {
    id: 'coldplay-yellow',
    youtubeId: 'yKNxeF4PqvY',
    title: 'Yellow - Coldplay (Official Music Video - 1B+ Views)',
    channel: 'Coldplay',
    category: 'music',
    level: 'A2 - Dễ',
    accent: '🇬🇧 UK',
    duration: '4:33',
    thumbnail: 'https://img.youtube.com/vi/yKNxeF4PqvY/hqdefault.jpg',
    description: 'Bản rock ballad bất hủ của Coldplay trên bãi biển bình minh với câu từ mộc mạc, ngập tràn tình yêu trong sáng.',
    transcript: [
      {
        id: 'yel-1',
        startTime: 17.0,
        endTime: 24.0,
        en: 'Look at the stars, look how they shine for you',
        vi: 'Hãy ngắm nhìn những vì sao, xem cách chúng đang tỏa sáng vì em',
        keyWord: 'shine',
        ipa: '/ʃaɪn/',
        meaning: 'tỏa sáng, lấp lánh',
        pos: 'verb'
      },
      {
        id: 'yel-2',
        startTime: 24.5,
        endTime: 36.0,
        en: 'And everything you do, yeah, they were all yellow',
        vi: 'Và mọi điều em làm, ôi tất cả đều mang màu vàng rực rỡ ấy',
        keyWord: 'yellow',
        ipa: '/ˈjel.əʊ/',
        meaning: 'màu vàng ấm áp',
        pos: 'adjective'
      },
      {
        id: 'yel-3',
        startTime: 36.5,
        endTime: 43.5,
        en: 'I came along, I wrote a song for you',
        vi: 'Anh đã bước đến và viết nên một bài ca dành riêng tặng em',
        keyWord: 'song',
        ipa: '/sɒŋ/',
        meaning: 'bài hát, bản tình ca',
        pos: 'noun'
      },
      {
        id: 'yel-4',
        startTime: 44.0,
        endTime: 54.0,
        en: "And all the things you do, and it was called 'Yellow'",
        vi: 'Dành cho tất cả những điều em làm, và bài hát ấy mang tên Yellow',
        keyWord: 'called',
        ipa: '/kɔːld/',
        meaning: 'được gọi tên là',
        pos: 'verb'
      },
      {
        id: 'yel-5',
        startTime: 54.5,
        endTime: 63.0,
        en: 'So then I took my turn, oh, what a thing to have done',
        vi: 'Và rồi đến lượt anh thể hiện, ôi thật là một điều tuyệt diệu đã làm',
        keyWord: 'turn',
        ipa: '/tɜːn/',
        meaning: 'lượt, dịp',
        pos: 'noun'
      },
      {
        id: 'yel-6',
        startTime: 63.5,
        endTime: 71.0,
        en: 'And it was all yellow',
        vi: 'Và tất thảy đều nhuốm một màu vàng ấm áp',
        keyWord: 'all',
        ipa: '/ɔːl/',
        meaning: 'tất cả, toàn bộ',
        pos: 'determiner'
      },
      {
        id: 'yel-7',
        startTime: 71.5,
        endTime: 79.5,
        en: 'Your skin, oh yeah, your skin and bones',
        vi: 'Làn da em, cả thân hình mỏng manh của em',
        keyWord: 'skin',
        ipa: '/skɪn/',
        meaning: 'làn da',
        pos: 'noun'
      },
      {
        id: 'yel-8',
        startTime: 80.0,
        endTime: 87.5,
        en: 'Turn into something beautiful',
        vi: 'Đều hóa thành một điều gì đó thật lộng lẫy và tuyệt mỹ',
        keyWord: 'beautiful',
        ipa: '/ˈbjuː.tɪ.fəl/',
        meaning: 'xinh đẹp, diệu kỳ',
        pos: 'adjective'
      },
      {
        id: 'yel-9',
        startTime: 88.0,
        endTime: 95.5,
        en: 'Do you know, you know I love you so?',
        vi: 'Em có biết chăng, em biết anh yêu em nhiều đến nhường nào mà?',
        keyWord: 'love',
        ipa: '/lʌv/',
        meaning: 'yêu thương',
        pos: 'verb'
      },
      {
        id: 'yel-10',
        startTime: 96.0,
        endTime: 103.0,
        en: 'You know I love you so',
        vi: 'Em biết rằng anh yêu em biết bao nhiêu',
        keyWord: 'know',
        ipa: '/nəʊ/',
        meaning: 'biết, nhận thức',
        pos: 'verb'
      }
    ],
    vocabulary: [
      { term: 'come along', ipa: '/kʌm əˈlɒŋ/', meaning: 'xuất hiện, đi cùng đến một nơi', timestamp: 38 },
      { term: 'take one\'s turn', ipa: '/teɪk wʌnz tɜːn/', meaning: 'đến lượt mình thực hiện hành động', timestamp: 56 },
      { term: 'turn into', ipa: '/tɜːn ˈɪn.tuː/', meaning: 'biến đổi thành, hóa thành cái gì', timestamp: 82 }
    ]
  },

  // 13. COLDPLAY & THE CHAINSMOKERS - SOMETHING JUST LIKE THIS
  {
    id: 'chainsmokers-something-just-like-this',
    youtubeId: 'FM7Z-Xq8DRC',
    title: 'Something Just Like This - The Chainsmokers & Coldplay (Official Lyric Video - 2.2B Views)',
    channel: 'Coldplay & The Chainsmokers',
    category: 'music',
    level: 'A2 - Dễ',
    accent: '🇬🇧 UK & 🇺🇸 US',
    duration: '4:07',
    thumbnail: 'https://img.youtube.com/vi/FM7Z-Xq8DRC/hqdefault.jpg',
    description: 'Bản hit EDM Pop bùng nổ 2.2 tỉ view kể về ước mơ giản dị không cần siêu anh hùng mà chỉ cần người yêu chân thành.',
    transcript: [
      {
        id: 'sjlt-1',
        startTime: 1.0,
        endTime: 8.0,
        en: "I've been reading books of old, the legends and the myths",
        vi: 'Tôi từng đọc những cuốn sách cổ xưa, những truyền thuyết và thần thoại xa xưa',
        keyWord: 'myths',
        ipa: '/mɪθs/',
        meaning: 'thần thoại, truyền thuyết',
        pos: 'noun'
      },
      {
        id: 'sjlt-2',
        startTime: 8.5,
        endTime: 15.0,
        en: 'Achilles and his gold, Hercules and his gifts',
        vi: 'Chàng Achilles cùng kho vàng, Hercules cùng sức mạnh thiên phú',
        keyWord: 'gifts',
        ipa: '/ɡɪfts/',
        meaning: 'món quà, năng khiếu thiên bẩm',
        pos: 'noun'
      },
      {
        id: 'sjlt-3',
        startTime: 15.5,
        endTime: 22.0,
        en: "Spider-Man's control, and Batman with his fists",
        vi: 'Khả năng điều khiển của Spider-Man, và Batman cùng nắm đấm uy lực',
        keyWord: 'control',
        ipa: '/kənˈtrəʊl/',
        meaning: 'sự kiểm soát, điều khiển',
        pos: 'noun'
      },
      {
        id: 'sjlt-4',
        startTime: 22.5,
        endTime: 30.0,
        en: "And clearly I see, I don't see myself upon that list",
        vi: 'Và rõ ràng tôi thấy rằng, tôi chẳng hề có tên trong danh sách lẫy lừng đó',
        keyWord: 'list',
        ipa: '/lɪst/',
        meaning: 'danh sách',
        pos: 'noun'
      },
      {
        id: 'sjlt-5',
        startTime: 30.5,
        endTime: 37.0,
        en: "She said, 'Where'd you wanna go? How much you wanna risk?'",
        vi: 'Cô ấy bảo: Anh muốn đi đâu nào? Anh muốn dấn thân mạo hiểm bao nhiêu?',
        keyWord: 'risk',
        ipa: '/rɪsk/',
        meaning: 'mạo hiểm, rủi ro',
        pos: 'verb'
      },
      {
        id: 'sjlt-6',
        startTime: 37.5,
        endTime: 44.5,
        en: "'I'm not looking for somebody with some superhuman gifts'",
        vi: 'Em không hề tìm kiếm một ai đó sở hữu những năng lực siêu phàm',
        keyWord: 'superhuman',
        ipa: '/ˌsuː.pəˈhjuː.mən/',
        meaning: 'siêu phàm, vượt trên con người',
        pos: 'adjective'
      },
      {
        id: 'sjlt-7',
        startTime: 45.0,
        endTime: 51.5,
        en: "'Some superhero, some fairytale bliss'",
        vi: 'Chẳng cần siêu anh hùng, cũng chẳng cần hạnh phúc viển vông trong cổ tích',
        keyWord: 'fairytale',
        ipa: '/ˈfeə.ri.teɪl/',
        meaning: 'truyện cổ tích, huyền ảo',
        pos: 'noun'
      },
      {
        id: 'sjlt-8',
        startTime: 52.0,
        endTime: 59.0,
        en: "'Just something I can turn to, somebody I can kiss'",
        vi: 'Chỉ cần một điều gì đó để em nương tựa, một ai đó để em trao nụ hôn',
        keyWord: 'turn to',
        ipa: '/tɜːn tuː/',
        meaning: 'nương tựa vào, tìm đến',
        pos: 'phrasal verb'
      },
      {
        id: 'sjlt-9',
        startTime: 59.5,
        endTime: 67.0,
        en: "'I want something just like this'",
        vi: 'Em chỉ mong muốn một điều bình dị đơn sơ như thế này thôi',
        keyWord: 'want',
        ipa: '/wɒnt/',
        meaning: 'mong muốn, khao khát',
        pos: 'verb'
      },
      {
        id: 'sjlt-10',
        startTime: 67.5,
        endTime: 75.0,
        en: "'Oh, I want something just like this'",
        vi: 'Ôi, em chỉ cần một tình yêu chân thành giản dị như thế này',
        keyWord: 'something',
        ipa: '/ˈsʌm.θɪŋ/',
        meaning: 'một điều gì đó',
        pos: 'pronoun'
      }
    ],
    vocabulary: [
      { term: 'legends and myths', ipa: '/ˈledʒ.əndz ænd mɪθs/', meaning: 'truyền thuyết và thần thoại cổ xưa', timestamp: 5 },
      { term: 'superhuman gifts', ipa: '/ˌsuː.pəˈhjuː.mən ɡɪfts/', meaning: 'những khả năng siêu phàm của con người', timestamp: 41 },
      { term: 'fairytale bliss', ipa: '/ˈfeə.ri.teɪl blɪs/', meaning: 'hạnh phúc trọn vẹn hoàn mỹ như cổ tích', timestamp: 48 },
      { term: 'turn to someone', ipa: '/tɜːn tuː ˈsʌm.wʌn/', meaning: 'tìm đến ai đó để nương tựa, sẻ chia', timestamp: 55 }
    ]
  },

  // 14. BRUNO MARS - JUST THE WAY YOU ARE
  {
    id: 'bruno-mars-just-the-way-you-are',
    youtubeId: 'LjhCEhWiKXk',
    title: 'Just the Way You Are - Bruno Mars (Official Music Video - 1.9B Views)',
    channel: 'Bruno Mars',
    category: 'music',
    level: 'A2 - Dễ',
    accent: '🇺🇸 US',
    duration: '3:56',
    thumbnail: 'https://img.youtube.com/vi/LjhCEhWiKXk/hqdefault.jpg',
    description: 'Bản tình ca ngọt ngào bất hủ khẳng định vẻ đẹp tự nhiên của người phụ nữ, ngữ điệu vui tươi và phát âm rõ nét.',
    transcript: [
      {
        id: 'jtwya-1',
        startTime: 9.0,
        endTime: 16.5,
        en: "Oh, her eyes, her eyes make the stars look like they're not shinin'",
        vi: 'Ôi đôi mắt nàng, ánh mắt ấy khiến những vì sao dường như lu mờ không còn tỏa sáng',
        keyWord: 'shinin',
        ipa: '/ˈʃaɪ.nɪŋ/',
        meaning: 'tỏa sáng rực rỡ',
        pos: 'verb'
      },
      {
        id: 'jtwya-2',
        startTime: 17.0,
        endTime: 24.5,
        en: "Her hair, her hair falls perfectly without her tryin'",
        vi: 'Mái tóc nàng, từng lọn tóc buông lơi hoàn hảo mà nàng chẳng cần gắng gượng',
        keyWord: 'hair',
        ipa: '/heər/',
        meaning: 'mái tóc',
        pos: 'noun'
      },
      {
        id: 'jtwya-3',
        startTime: 25.0,
        endTime: 32.0,
        en: "She's so beautiful and I tell her everyday",
        vi: 'Nàng thật xinh đẹp biết bao và ngày nào tôi cũng nhắc cho nàng nhớ điều đó',
        keyWord: 'beautiful',
        ipa: '/ˈbjuː.tɪ.fəl/',
        meaning: 'xinh đẹp, lộng lẫy',
        pos: 'adjective'
      },
      {
        id: 'jtwya-4',
        startTime: 32.5,
        endTime: 40.0,
        en: "Yeah, I know, I know when I compliment her, she won't believe me",
        vi: 'Tôi biết chứ, tôi biết khi tôi khen ngợi, nàng sẽ chẳng chịu tin lời tôi',
        keyWord: 'compliment',
        ipa: '/ˈkɒm.plɪ.ment/',
        meaning: 'khen ngợi, tán tụng',
        pos: 'verb'
      },
      {
        id: 'jtwya-5',
        startTime: 40.5,
        endTime: 48.0,
        en: "And it's so, it's so sad to think that she don't see what I see",
        vi: 'Và thật buồn biết bao khi nghĩ rằng nàng không nhận ra những điều tôi thấy',
        keyWord: 'sad',
        ipa: '/sæd/',
        meaning: 'buồn bã, xót xa',
        pos: 'adjective'
      },
      {
        id: 'jtwya-6',
        startTime: 48.5,
        endTime: 55.0,
        en: "But every time she asks me, 'Do I look okay?' I say",
        vi: 'Nhưng mỗi khi nàng ngập ngừng hỏi tôi: Trông em ổn không? Tôi liền đáp',
        keyWord: 'asks',
        ipa: '/ɑːsks/',
        meaning: 'hỏi han, thắc mắc',
        pos: 'verb'
      },
      {
        id: 'jtwya-7',
        startTime: 55.5,
        endTime: 63.5,
        en: "When I see your face, there's not a thing that I would change",
        vi: 'Khi anh ngắm nhìn gương mặt em, chẳng có một nét nào anh muốn đổi thay',
        keyWord: 'change',
        ipa: '/tʃeɪndʒ/',
        meaning: 'thay đổi, chỉnh sửa',
        pos: 'verb'
      },
      {
        id: 'jtwya-8',
        startTime: 64.0,
        endTime: 70.5,
        en: "'Cause you're amazing, just the way you are",
        vi: 'Bởi vì em thật tuyệt vời, trọn vẹn theo đúng con người thật của em',
        keyWord: 'amazing',
        ipa: '/əˈmeɪ.zɪŋ/',
        meaning: 'tuyệt diệu, đáng kinh ngạc',
        pos: 'adjective'
      },
      {
        id: 'jtwya-9',
        startTime: 71.0,
        endTime: 79.5,
        en: "And when you smile, the whole world stops and stares for a while",
        vi: 'Và khi em nở nụ cười, cả thế giới dường như dừng lại ngẩn ngơ ngắm nhìn',
        keyWord: 'smile',
        ipa: '/smaɪl/',
        meaning: 'mỉm cười, nụ cười',
        pos: 'verb'
      },
      {
        id: 'jtwya-10',
        startTime: 80.0,
        endTime: 88.0,
        en: "'Cause girl, you're amazing, just the way you are",
        vi: 'Bởi vì cô gái à, em thật kỳ diệu, chính là như em vốn có',
        keyWord: 'girl',
        ipa: '/ɡɜːl/',
        meaning: 'cô gái, em yêu',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'compliment someone', ipa: '/ˈkɒm.plɪ.ment ˈsʌm.wʌn/', meaning: 'khen ngợi một nét đẹp hay thành quả của ai', timestamp: 36 },
      { term: 'just the way you are', ipa: '/dʒʌst ðə weɪ juː ɑːr/', meaning: 'chính theo con người tự nhiên sẵn có của bạn', timestamp: 68 },
      { term: 'stare for a while', ipa: '/steər fɔːr ə waɪl/', meaning: 'nhìn chăm chú ngẩn ngơ một lúc lâu', timestamp: 76 }
    ]
  },

  // 15. ALAN WALKER - FADED
  {
    id: 'alan-walker-faded',
    youtubeId: '60ItHLz5WEA',
    title: 'Faded - Alan Walker (Official Music Video - 3.6B Views)',
    channel: 'Alan Walker',
    category: 'music',
    level: 'A2 - Dễ',
    accent: '🇬🇧 UK / Bắc Âu',
    duration: '3:32',
    thumbnail: 'https://img.youtube.com/vi/60ItHLz5WEA/hqdefault.jpg',
    description: 'Siêu phẩm EDM 3.6 tỉ view với giai điệu piano điện tử huyền ảo, từ vựng giàu hình tượng biểu cảm.',
    transcript: [
      {
        id: 'fad-1',
        startTime: 13.0,
        endTime: 19.5,
        en: 'You were the shadow to my light, did you feel us?',
        vi: 'Bạn từng là chiếc bóng bên cạnh ánh sáng của tôi, bạn có từng cảm nhận được hai ta?',
        keyWord: 'shadow',
        ipa: '/ˈʃæd.əʊ/',
        meaning: 'cái bóng, bóng râm',
        pos: 'noun'
      },
      {
        id: 'fad-2',
        startTime: 20.0,
        endTime: 25.5,
        en: 'Another star, you fade away',
        vi: 'Tựa như một vì sao xa xăm khác, bạn dần tàn lụi khuất bóng',
        keyWord: 'fade away',
        ipa: '/feɪd əˈweɪ/',
        meaning: 'phai nhòa, mờ dần',
        pos: 'phrasal verb'
      },
      {
        id: 'fad-3',
        startTime: 26.0,
        endTime: 34.0,
        en: 'Afraid our aim is out of sight, wanna see us alive',
        vi: 'Sợ hằng đích đến của chúng ta đã khuất tầm mắt, tôi mong thấy hai ta còn sống động',
        keyWord: 'sight',
        ipa: '/saɪt/',
        meaning: 'tầm nhìn, thị lực',
        pos: 'noun'
      },
      {
        id: 'fad-4',
        startTime: 34.5,
        endTime: 44.0,
        en: 'Where are you now? Where are you now?',
        vi: 'Giờ đây bạn đang ở nơi nào? Bạn đang ở chốn nào?',
        keyWord: 'now',
        ipa: '/naʊ/',
        meaning: 'bây giờ, hiện tại',
        pos: 'adverb'
      },
      {
        id: 'fad-5',
        startTime: 44.5,
        endTime: 51.5,
        en: 'Where are you now? Was it all in my fantasy?',
        vi: 'Bây giờ bạn ở đâu? Phải chăng tất cả chỉ là ảo mộng trong tâm trí tôi?',
        keyWord: 'fantasy',
        ipa: '/ˈfæn.tə.si/',
        meaning: 'ảo mộng, sự tưởng tượng',
        pos: 'noun'
      },
      {
        id: 'fad-6',
        startTime: 52.0,
        endTime: 59.0,
        en: 'Where are you now? Were you only imaginary?',
        vi: 'Giờ bạn ở đâu? Phải chăng bạn chỉ là một điều hư cấu không có thực?',
        keyWord: 'imaginary',
        ipa: '/ɪˈmædʒ.ɪ.nər.i/',
        meaning: 'tưởng tượng, hư ảo',
        pos: 'adjective'
      },
      {
        id: 'fad-7',
        startTime: 59.5,
        endTime: 68.5,
        en: 'Where are you now? Atlantis, under the sea, under the sea',
        vi: 'Bạn đang ở đâu? Chìm sâu trong thành phố huyền thoại Atlantis dưới đáy biển',
        keyWord: 'sea',
        ipa: '/siː/',
        meaning: 'biển cả, đại dương',
        pos: 'noun'
      },
      {
        id: 'fad-8',
        startTime: 69.0,
        endTime: 74.5,
        en: 'Where are you now? Another dream',
        vi: 'Bạn ở đâu rồi? Một giấc mơ xa xôi khác',
        keyWord: 'dream',
        ipa: '/driːm/',
        meaning: 'giấc mơ, mộng tưởng',
        pos: 'noun'
      },
      {
        id: 'fad-9',
        startTime: 75.0,
        endTime: 84.0,
        en: "The monster's running wild inside of me, I'm faded",
        vi: 'Quái vật đang hoang dại trỗi dậy bên trong tôi, tôi đang phai mờ dần',
        keyWord: 'faded',
        ipa: '/ˈfeɪ.dɪd/',
        meaning: 'phai nhòa, lạc lối',
        pos: 'adjective'
      },
      {
        id: 'fad-10',
        startTime: 84.5,
        endTime: 94.0,
        en: "I'm faded, so lost, I'm faded",
        vi: 'Tôi đang phai tàn, thật lạc lõng, tôi dần mờ nhạt giữa hư vô',
        keyWord: 'lost',
        ipa: '/lɒst/',
        meaning: 'lạc lối, bơ vơ',
        pos: 'adjective'
      }
    ],
    vocabulary: [
      { term: 'fade away', ipa: '/feɪd əˈweɪ/', meaning: 'mờ nhạt dần rồi tan biến mất', timestamp: 22 },
      { term: 'out of sight', ipa: '/aʊt əv saɪt/', meaning: 'khuất khỏi tầm mắt, không còn nhìn thấy', timestamp: 30 },
      { term: 'run wild', ipa: '/rʌn waɪld/', meaning: 'chạy hoang dại, phát triển mất kiểm soát', timestamp: 78 }
    ]
  },

  // 16. WESTLIFE - MY LOVE
  {
    id: 'westlife-my-love',
    youtubeId: 'ulOb9gIGGd0',
    title: 'My Love - Westlife (Official Music Video)',
    channel: 'Westlife',
    category: 'music',
    level: 'A2 - Dễ',
    accent: '🇮🇪 Ireland / UK Standard',
    duration: '4:14',
    thumbnail: 'https://img.youtube.com/vi/ulOb9gIGGd0/hqdefault.jpg',
    description: 'Ca khúc huyền thoại gắn liền với tuổi thơ thế hệ 8x-9x, lời bài hát trong sáng, phát âm cực chuẩn và chậm rãi.',
    transcript: [
      {
        id: 'ml-1',
        startTime: 1.0,
        endTime: 8.5,
        en: 'An empty street, an empty house, a hole inside my heart',
        vi: 'Một con phố vắng, một ngôi nhà trống trải, một khoảng trống sâu thẳm trong tim anh',
        keyWord: 'empty',
        ipa: '/ˈemp.ti/',
        meaning: 'trống vắng, cô quạnh',
        pos: 'adjective'
      },
      {
        id: 'ml-2',
        startTime: 9.0,
        endTime: 15.5,
        en: "I'm all alone, the rooms are getting smaller",
        vi: 'Anh cô đơn một mình, những căn phòng như đang thu hẹp lại',
        keyWord: 'alone',
        ipa: '/əˈləʊn/',
        meaning: 'cô đơn, một mình',
        pos: 'adjective'
      },
      {
        id: 'ml-3',
        startTime: 16.0,
        endTime: 23.5,
        en: 'I wonder how, I wonder why, I wonder where they are',
        vi: 'Anh tự hỏi bằng cách nào, tự hỏi tại sao, tự hỏi giờ họ đang ở phương nao',
        keyWord: 'wonder',
        ipa: '/ˈwʌn.dər/',
        meaning: 'tự hỏi, băn khoăn',
        pos: 'verb'
      },
      {
        id: 'ml-4',
        startTime: 24.0,
        endTime: 30.5,
        en: 'The days we had, the songs we sang together',
        vi: 'Những ngày tháng ta từng có, những bài ca hai đứa từng hòa giọng cùng nhau',
        keyWord: 'together',
        ipa: '/təˈɡeð.ər/',
        meaning: 'cùng nhau, chung bước',
        pos: 'adverb'
      },
      {
        id: 'ml-5',
        startTime: 31.0,
        endTime: 38.0,
        en: "And oh, my love, I'm holding on forever",
        vi: 'Và ôi, tình yêu của anh, anh sẽ mãi giữ chặt lấy mối tình này',
        keyWord: 'holding on',
        ipa: '/ˈhəʊl.dɪŋ ɒn/',
        meaning: 'kiên trì bám giữ, níu giữ',
        pos: 'phrasal verb'
      },
      {
        id: 'ml-6',
        startTime: 38.5,
        endTime: 45.0,
        en: 'Reaching for the love that seems so far',
        vi: 'Với lấy tình yêu tưởng chừng như xa vời vợi',
        keyWord: 'far',
        ipa: '/fɑːr/',
        meaning: 'xa xôi, cách trở',
        pos: 'adverb'
      },
      {
        id: 'ml-7',
        startTime: 45.5,
        endTime: 52.5,
        en: 'So I say a little prayer, and hope my dreams will take me there',
        vi: 'Nên anh thầm cất lên lời cầu nguyện, và mong những giấc mơ sẽ đưa anh đến chốn ấy',
        keyWord: 'prayer',
        ipa: '/preər/',
        meaning: 'lời cầu nguyện',
        pos: 'noun'
      },
      {
        id: 'ml-8',
        startTime: 53.0,
        endTime: 60.5,
        en: 'Where the skies are blue to see you once again, my love',
        vi: 'Nơi bầu trời xanh ngát để được tương phùng bên em lần nữa, tình yêu của anh',
        keyWord: 'skies',
        ipa: '/skaɪz/',
        meaning: 'bầu trời quang đãng',
        pos: 'noun'
      },
      {
        id: 'ml-9',
        startTime: 61.0,
        endTime: 67.5,
        en: 'Overseas, from coast to coast, to find the place I love the most',
        vi: 'Vượt qua biển lớn, từ bờ đông sang bờ tây, để tìm lại nơi chốn anh yêu nhất',
        keyWord: 'coast',
        ipa: '/kəʊst/',
        meaning: 'bờ biển, bờ duyên hải',
        pos: 'noun'
      },
      {
        id: 'ml-10',
        startTime: 68.0,
        endTime: 76.5,
        en: 'Where the fields are green to see you once again, my love',
        vi: 'Nơi những cánh đồng xanh ngát để gặp lại em một lần nữa, hỡi người anh yêu',
        keyWord: 'fields',
        ipa: '/fiːldz/',
        meaning: 'những cánh đồng xanh',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'hold on', ipa: '/həʊld ɒn/', meaning: 'kiên định, tiếp tục giữ niềm tin', timestamp: 34 },
      { term: 'say a prayer', ipa: '/seɪ ə preər/', meaning: 'cất lời cầu nguyện chân thành', timestamp: 47 },
      { term: 'from coast to coast', ipa: '/frɒm kəʊst tuː kəʊst/', meaning: 'từ bờ biển này sang bờ biển kia, khắp cả đất nước', timestamp: 64 },
      { term: 'once again', ipa: '/wʌns əˈɡen/', meaning: 'thêm một lần nữa, lại một lần', timestamp: 72 }
    ]
  },

  // 17. BILLIE EILISH - BIRDS OF A FEATHER
  {
    id: 'billie-eilish-birds-of-a-feather',
    youtubeId: 'd5gf9dXbPi0',
    title: 'Birds of a Feather - Billie Eilish (Official Music Video)',
    channel: 'Billie Eilish',
    category: 'music',
    level: 'A2 - Dễ',
    accent: '🇺🇸 US',
    duration: '3:30',
    thumbnail: 'https://img.youtube.com/vi/d5gf9dXbPi0/hqdefault.jpg',
    description: 'Ca khúc đoạt quán quân toàn cầu năm 2024 về tình yêu sâu sắc qua thành ngữ nổi tiếng "Birds of a feather stick together".',
    transcript: [
      {
        id: 'boaf-1',
        startTime: 5.0,
        endTime: 11.0,
        en: "I want you to stay 'til I'm in the grave",
        vi: 'Em muốn anh ở bên em cho đến khi em nhắm mắt xuôi tay dưới mồ',
        keyWord: 'grave',
        ipa: '/ɡreɪv/',
        meaning: 'ngôi mộ, nấm mồ',
        pos: 'noun'
      },
      {
        id: 'boaf-2',
        startTime: 11.5,
        endTime: 16.5,
        en: "'Til I rot away, dead and buried",
        vi: 'Cho đến khi thân xác em tan biến, đã chết và được chôn cất sâu',
        keyWord: 'buried',
        ipa: '/ˈber.id/',
        meaning: 'được chôn cất',
        pos: 'verb'
      },
      {
        id: 'boaf-3',
        startTime: 17.0,
        endTime: 21.5,
        en: "'Til I'm in the casket you carry",
        vi: 'Cho đến khi em nằm trong chiếc quan tài mà anh khiêng trên vai',
        keyWord: 'casket',
        ipa: '/ˈkɑː.skɪt/',
        meaning: 'chiếc quan tài',
        pos: 'noun'
      },
      {
        id: 'boaf-4',
        startTime: 22.0,
        endTime: 26.5,
        en: "If you go, I'm goin' too, uh",
        vi: 'Nếu anh ra đi, em cũng sẽ bước theo anh',
        keyWord: 'goin',
        ipa: '/ˈɡəʊ.ɪŋ/',
        meaning: 'đi cùng, đồng hành',
        pos: 'verb'
      },
      {
        id: 'boaf-5',
        startTime: 27.0,
        endTime: 31.5,
        en: "'Cause it was always you, alright",
        vi: 'Bởi vì người đó luôn luôn là anh, đúng vậy',
        keyWord: 'always',
        ipa: '/ˈɔːl.weɪz/',
        meaning: 'luôn luôn, mãi mãi',
        pos: 'adverb'
      },
      {
        id: 'boaf-6',
        startTime: 32.0,
        endTime: 37.0,
        en: "And if I'm turnin' blue, please don't save me",
        vi: 'Và nếu người em có chuyển sắc tái xanh, xin anh đừng cứu em',
        keyWord: 'save',
        ipa: '/seɪv/',
        meaning: 'cứu giúp, giải thoát',
        pos: 'verb'
      },
      {
        id: 'boaf-7',
        startTime: 37.5,
        endTime: 42.0,
        en: 'Nothing left to lose without my baby',
        vi: 'Chẳng còn gì để mất nữa một khi đã thiếu vắng anh yêu bên đời',
        keyWord: 'lose',
        ipa: '/luːz/',
        meaning: 'đánh mất',
        pos: 'verb'
      },
      {
        id: 'boaf-8',
        startTime: 42.5,
        endTime: 48.0,
        en: 'Birds of a feather, we should stick together, I know',
        vi: 'Những chú chim cùng chung màu lông nên gắn kết cùng nhau, em biết mà',
        keyWord: 'feather',
        ipa: '/ˈfeð.ər/',
        meaning: 'lông chim',
        pos: 'noun'
      },
      {
        id: 'boaf-9',
        startTime: 48.5,
        endTime: 53.0,
        en: "I said I'd never think I wasn't better alone",
        vi: 'Em từng bảo em chẳng bao giờ nghĩ rằng mình sống một mình sẽ tốt hơn',
        keyWord: 'alone',
        ipa: '/əˈləʊn/',
        meaning: 'đơn độc, một mình',
        pos: 'adjective'
      },
      {
        id: 'boaf-10',
        startTime: 53.5,
        endTime: 58.0,
        en: "Can't change the weather, might not be forever",
        vi: 'Chẳng thể đổi thay thời tiết, cuộc đời có thể chẳng phải là mãi mãi',
        keyWord: 'weather',
        ipa: '/ˈweð.ər/',
        meaning: 'thời tiết, hoàn cảnh',
        pos: 'noun'
      },
      {
        id: 'boaf-11',
        startTime: 58.5,
        endTime: 64.0,
        en: "But if it's forever, it's even better",
        vi: 'Nhưng nếu chuyện tình này là mãi mãi, thì điều ấy lại càng tuyệt vời hơn',
        keyWord: 'better',
        ipa: '/ˈbet.ər/',
        meaning: 'tốt hơn, tuyệt vời hơn',
        pos: 'adjective'
      }
    ],
    vocabulary: [
      { term: 'birds of a feather stick together', ipa: '/bɜːdz əv ə ˈfeð.ər stɪk təˈɡeð.ər/', meaning: 'ngưu tầm ngưu mã tầm mã; những người chung tính cách sẽ gắn bó bên nhau', timestamp: 44 },
      { term: 'stick together', ipa: '/stɪk təˈɡeð.ər/', meaning: 'bám chặt lấy nhau, gắn bó không rời', timestamp: 46 },
      { term: 'nothing left to lose', ipa: '/ˈnʌθ.ɪŋ left tuː luːz/', meaning: 'không còn gì để mất, bất cần', timestamp: 39 }
    ]
  },

  // =======================================================================
  // PHÂN MỤC 2: 🎙️ PODCAST TIẾNG ANH SONG NGỮ (ENGLISH PODCASTS STUDIO)
  // =======================================================================

  // 18. BBC 6 MINUTE ENGLISH - WHY DO WE PROCRASTINATE?
  {
    id: 'bbc-why-we-procrastinate',
    youtubeId: 'WsKg6HsoDaw',
    title: 'Why Do We Procrastinate? - BBC 6 Minute English',
    channel: 'BBC Learning English',
    category: 'podcast',
    level: 'B1 - Trung bình (IELTS 6.0+)',
    accent: '🇬🇧 UK',
    duration: '6:12',
    thumbnail: 'https://img.youtube.com/vi/WsKg6HsoDaw/hqdefault.jpg',
    description: 'Chương trình podcast rèn luyện thói quen và tâm lý học hành vi từ đài BBC với giọng phát thanh viên London chuẩn mực.',
    podcastDetails: {
      topic: 'Tâm lý học & Thói quen (Psychology & Habits)',
      targetLevel: 'B1 - B2 (IELTS 6.0 - 6.5)',
      host: 'Neil & Georgina (BBC Learning English)',
      keyTakeaways: [
        'Trì hoãn (Procrastination) không bắt nguồn từ thói lười biếng, mà là phản xạ né tránh căng thẳng và cảm xúc tiêu cực trước những nhiệm vụ phức tạp.',
        'Não bộ con người luôn có thiên hướng ưu tiên sự thỏa mãn tức thì (instant gratification) hơn là phần thưởng dài hạn trong tương lai.',
        'Chiến lược chia nhỏ mục tiêu thành các bước siêu nhỏ (bite-sized chunks) và tha thứ cho bản thân (self-compassion) là chìa khóa khắc phục hiệu quả nhất.'
      ],
      highScoringPhrases: [
        { phrase: 'put off', meaning: 'trì hoãn, dời lại việc cần làm (Band 6.5+ Speaking Part 1 & 2)' },
        { phrase: 'instant gratification', meaning: 'sự thỏa mãn tức thì (Band 7.0+ Topic Psychology / Social Media)' },
        { phrase: 'under the wire', meaning: 'hoàn thành sát nút giờ chót (Idiom giao tiếp tự nhiên)' },
        { phrase: 'procrastinator', meaning: 'người có thói quen chần chừ (Từ vựng chủ điểm thói quen làm việc)' }
      ]
    },
    transcript: [
      {
        id: 'wwp-1',
        startTime: 3.0,
        endTime: 6.5,
        en: "Hello and welcome to 6 Minute English, I'm Neil",
        vi: 'Xin chào và chào mừng bạn đến với chương trình 6 Phút Tiếng Anh, tôi là Neil',
        keyWord: 'welcome',
        ipa: '/ˈwel.kəm/',
        meaning: 'chào mừng, hoan nghênh',
        pos: 'verb'
      },
      {
        id: 'wwp-2',
        startTime: 7.0,
        endTime: 12.0,
        en: "And hello, I'm Georgina. Today we're talking about procrastination",
        vi: 'Và xin chào, tôi là Georgina. Hôm nay chúng ta sẽ bàn về chứng trì hoãn',
        keyWord: 'procrastination',
        ipa: '/prəˌkræs.tɪˈneɪ.ʃən/',
        meaning: 'sự trì hoãn, thói chần chừ',
        pos: 'noun'
      },
      {
        id: 'wwp-3',
        startTime: 12.5,
        endTime: 18.0,
        en: 'Procrastination is when you delay doing something that you should do',
        vi: 'Trì hoãn là khi bạn trì hoãn làm một việc mà lẽ ra bạn nên làm',
        keyWord: 'delay',
        ipa: '/dɪˈleɪ/',
        meaning: 'trì hoãn, chậm trễ',
        pos: 'verb'
      },
      {
        id: 'wwp-4',
        startTime: 18.5,
        endTime: 24.0,
        en: 'Usually because you do not want to do it or it feels overwhelming',
        vi: 'Thường là bởi vì bạn không muốn làm hoặc cảm thấy nhiệm vụ ấy quá tải',
        keyWord: 'overwhelming',
        ipa: '/ˌəʊ.vəˈwel.mɪŋ/',
        meaning: 'quá sức, choáng ngợp',
        pos: 'adjective'
      },
      {
        id: 'wwp-5',
        startTime: 24.5,
        endTime: 29.5,
        en: 'Do you ever put things off until the last minute, Georgina?',
        vi: 'Bạn có bao giờ dời mọi việc lại cho đến phút chót không, Georgina?',
        keyWord: 'put off',
        ipa: '/pʊt ɒf/',
        meaning: 'trì hoãn, dời lại',
        pos: 'phrasal verb'
      },
      {
        id: 'wwp-6',
        startTime: 30.0,
        endTime: 36.5,
        en: 'Well, yes, especially when doing boring chores or answering difficult emails',
        vi: 'Chắc chắn rồi, nhất là khi phải làm việc nhà buồn tẻ hoặc trả lời những email khó xử',
        keyWord: 'chores',
        ipa: '/tʃɔːrz/',
        meaning: 'việc vặt trong nhà',
        pos: 'noun'
      },
      {
        id: 'wwp-7',
        startTime: 37.0,
        endTime: 44.0,
        en: 'Psychologists say we crave instant gratification, seeking quick rewards',
        vi: 'Các nhà tâm lý học bảo rằng ta khao khát sự thỏa mãn tức thì, tìm kiếm phần thưởng nhanh',
        keyWord: 'gratification',
        ipa: '/ˌɡræt.ɪ.fɪˈkeɪ.ʃən/',
        meaning: 'sự thỏa mãn, hài lòng',
        pos: 'noun'
      },
      {
        id: 'wwp-8',
        startTime: 44.5,
        endTime: 51.0,
        en: 'So we check our phones or watch funny cat videos instead of working',
        vi: 'Vì vậy ta lại lướt điện thoại hay xem video mèo hài hước thay vì tập trung làm việc',
        keyWord: 'working',
        ipa: '/ˈwɜː.kɪŋ/',
        meaning: 'làm việc, lao động',
        pos: 'verb'
      },
      {
        id: 'wwp-9',
        startTime: 51.5,
        endTime: 58.5,
        en: 'Exactly, but leaving things under the wire causes intense anxiety later',
        vi: 'Chính xác, nhưng để dồn việc đến sát giờ chót lại gây ra sự lo âu tột cùng về sau',
        keyWord: 'anxiety',
        ipa: '/æŋˈzaɪ.ə.ti/',
        meaning: 'sự lo âu, bồn chồn',
        pos: 'noun'
      },
      {
        id: 'wwp-10',
        startTime: 59.0,
        endTime: 66.0,
        en: 'So breaking tasks into bite-sized chunks is the ultimate game changer',
        vi: 'Thế nên chia nhỏ công việc thành từng phần vừa sức là bước ngoặt thay đổi hoàn toàn cục diện',
        keyWord: 'tasks',
        ipa: '/tɑːsks/',
        meaning: 'nhiệm vụ, tác vụ',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'procrastination', ipa: '/prəˌkræs.tɪˈneɪ.ʃən/', meaning: 'hành vi trì hoãn việc cần làm', timestamp: 10 },
      { term: 'overwhelming', ipa: '/ˌəʊ.vəˈwel.mɪŋ/', meaning: 'quá tải, choáng ngợp tâm lý', timestamp: 22 },
      { term: 'put off', ipa: '/pʊt ɒf/', meaning: 'trì hoãn một việc gì đó', timestamp: 27 },
      { term: 'instant gratification', ipa: '/ˈɪn.stənt ˌɡræt.ɪ.fɪˈkeɪ.ʃən/', meaning: 'cảm giác thỏa mãn tức thì', timestamp: 40 },
      { term: 'under the wire', ipa: '/ˈʌn.dər ðə waɪər/', meaning: 'vừa kịp sát giờ chót', timestamp: 54 },
      { term: 'bite-sized chunks', ipa: '/baɪt saɪzd tʃʌŋks/', meaning: 'những phần việc nhỏ dễ hoàn thành', timestamp: 62 }
    ]
  },

  // 19. BBC 6 MINUTE ENGLISH - INTROVERT AND PROUD!
  {
    id: 'bbc-introvert-and-proud',
    youtubeId: 'iBk_M2HJINA',
    title: 'Introvert and Proud! - BBC 6 Minute English',
    channel: 'BBC Learning English',
    category: 'podcast',
    level: 'B1 - Trung bình (IELTS 6.5)',
    accent: '🇬🇧 UK',
    duration: '6:08',
    thumbnail: 'https://img.youtube.com/vi/iBk_M2HJINA/hqdefault.jpg',
    description: 'Tập podcast khai phá thế mạnh thầm lặng của người hướng nội trong thế giới đề cao sự ồn ào và hoạt ngôn.',
    podcastDetails: {
      topic: 'Tính cách & Giao tiếp (Personality & Social Dynamics)',
      targetLevel: 'B1 - B2 (IELTS 6.0 - 6.5)',
      host: 'Rob & Sam (BBC Learning English)',
      keyTakeaways: [
        'Người hướng nội (Introverts) nạp lại năng lượng từ sự yên tĩnh một mình, trong khi người hướng ngoại (Extroverts) nạp năng lượng qua giao lưu đông người.',
        'Thế giới văn phòng hiện đại thường đề cao phong thái hùng biện ồn ào, nhưng người hướng nội sở hữu năng lực lắng nghe thấu cảm và tư duy độc lập sâu sắc.',
        'Sự đa dạng về tính cách là chìa khóa cho một tập thể cân bằng; hướng nội không đồng nghĩa với nhút nhát hay thiếu tự tin.'
      ],
      highScoringPhrases: [
        { phrase: 'recharge one\'s batteries', meaning: 'nạp lại năng lượng tinh thần (Band 7.0+ Topic Lifestyle)' },
        { phrase: 'center of attention', meaning: 'trung tâm của sự chú ý (Collocation phổ biến)' },
        { phrase: 'deep thinker', meaning: 'người có tư duy chiều sâu (Tính từ tích cực miêu tả người)' },
        { phrase: 'introspective', meaning: 'hay chiêm nghiệm nội tâm (Từ vựng học thuật C1)' }
      ]
    },
    transcript: [
      {
        id: 'iap-1',
        startTime: 2.5,
        endTime: 6.0,
        en: "Hello and welcome to 6 Minute English, I'm Rob",
        vi: 'Xin chào và chào mừng bạn đến với 6 Phút Tiếng Anh, tôi là Rob',
        keyWord: 'welcome',
        ipa: '/ˈwel.kəm/',
        meaning: 'chào mừng',
        pos: 'verb'
      },
      {
        id: 'iap-2',
        startTime: 6.5,
        endTime: 12.0,
        en: "And I'm Sam. Today we're exploring the quiet power of introverts",
        vi: 'Và tôi là Sam. Hôm nay chúng ta sẽ khám phá sức mạnh thầm lặng của người hướng nội',
        keyWord: 'introverts',
        ipa: '/ˈɪn.trə.vɜːts/',
        meaning: 'những người hướng nội',
        pos: 'noun'
      },
      {
        id: 'iap-3',
        startTime: 12.5,
        endTime: 18.5,
        en: 'An introvert is someone who enjoys spending time in peaceful environments',
        vi: 'Người hướng nội là người thích dành thời gian trong những không gian yên bình',
        keyWord: 'peaceful',
        ipa: '/ˈpiːs.fəl/',
        meaning: 'thanh bình, yên tĩnh',
        pos: 'adjective'
      },
      {
        id: 'iap-4',
        startTime: 19.0,
        endTime: 25.5,
        en: 'While extroverts love being the center of attention and thrive in crowds',
        vi: 'Trong khi người hướng ngoại lại thích làm tâm điểm của sự chú ý và thăng hoa giữa đám đông',
        keyWord: 'extroverts',
        ipa: '/ˈek.strə.vɜːts/',
        meaning: 'những người hướng ngoại',
        pos: 'noun'
      },
      {
        id: 'iap-5',
        startTime: 26.0,
        endTime: 32.5,
        en: 'For a long time, society valued the loud and charismatic personality',
        vi: 'Suốt một thời gian dài, xã hội luôn đề cao tính cách to tiếng và có sức hút đám đông',
        keyWord: 'charismatic',
        ipa: '/ˌkær.ɪzˈmæt.ɪk/',
        meaning: 'có sức lôi cuốn, cuốn hút',
        pos: 'adjective'
      },
      {
        id: 'iap-6',
        startTime: 33.0,
        endTime: 39.5,
        en: 'Yet introverts bring extraordinary focus, empathy, and deep thinking',
        vi: 'Thế nhưng người hướng nội lại mang đến sự tập trung phi thường, lòng thấu cảm và tư duy sâu sắc',
        keyWord: 'empathy',
        ipa: '/ˈem.pə.θi/',
        meaning: 'lòng thấu cảm, sự sẻ chia',
        pos: 'noun'
      },
      {
        id: 'iap-7',
        startTime: 40.0,
        endTime: 46.5,
        en: 'They need quiet moments to recharge their batteries after social events',
        vi: 'Họ cần những khoảnh khắc tĩnh lặng để nạp lại năng lượng sau các sự kiện xã giao',
        keyWord: 'recharge',
        ipa: '/riːˈtʃɑːdʒ/',
        meaning: 'nạp lại năng lượng',
        pos: 'verb'
      },
      {
        id: 'iap-8',
        startTime: 47.0,
        endTime: 54.0,
        en: "And some of the world's most brilliant innovators are proud introverts",
        vi: 'Và một số nhà đổi mới lỗi lạc nhất trên thế giới chính là những người hướng nội đầy kiêu hãnh',
        keyWord: 'innovators',
        ipa: '/ˈɪn.ə.veɪ.tərz/',
        meaning: 'những nhà đổi mới sáng tạo',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'introvert', ipa: '/ˈɪn.trə.vɜːt/', meaning: 'người hướng nội, yêu sự tĩnh lặng', timestamp: 10 },
      { term: 'extrovert', ipa: '/ˈek.strə.vɜːt/', meaning: 'người hướng ngoại, thích giao thiệp', timestamp: 21 },
      { term: 'center of attention', ipa: '/ˈsen.tər əv əˈten.ʃən/', meaning: 'tâm điểm của sự chú ý', timestamp: 23 },
      { term: 'charismatic', ipa: '/ˌkær.ɪzˈmæt.ɪk/', meaning: 'có sức cuốn hút, quyến rũ tự nhiên', timestamp: 30 },
      { term: 'recharge one\'s batteries', ipa: '/riːˈtʃɑːdʒ wʌnz ˈbæt.ər.iz/', meaning: 'nghỉ ngơi để lấy lại năng lượng tinh thần', timestamp: 43 }
    ]
  },

  // 20. BBC 6 MINUTE ENGLISH - WHY YOU NEED A GOOD NIGHT'S SLEEP
  {
    id: 'bbc-good-nights-sleep',
    youtubeId: 'AlrXqakHPuk',
    title: "Why You Need a Good Night's Sleep - BBC 6 Minute English",
    channel: 'BBC Learning English',
    category: 'podcast',
    level: 'A2 - Dễ (IELTS 5.5+)',
    accent: '🇬🇧 UK',
    duration: '6:10',
    thumbnail: 'https://img.youtube.com/vi/AlrXqakHPuk/hqdefault.jpg',
    description: 'Khoa học về giấc ngủ, cách thức não bộ dọn dẹp độc tố và củng cố trí nhớ dài hạn hàng đêm.',
    podcastDetails: {
      topic: 'Sức khỏe & Khoa học não bộ (Health & Neuroscience)',
      targetLevel: 'A2 - B1 (IELTS 5.0 - 6.0)',
      host: 'Neil & Beth (BBC Learning English)',
      keyTakeaways: [
        'Giấc ngủ sâu kích hoạt hệ thống làm sạch của não bộ, cuốn trôi các độc tố chuyển hóa tích tụ trong suốt một ngày làm việc.',
        'Trong khi ngủ, não bộ thực hiện quá trình củng cố ký ức (memory consolidation), chuyển thông tin từ trí nhớ ngắn hạn sang dài hạn.',
        'Thiếu ngủ mãn tính làm giảm đến 40% khả năng ghi nhớ từ vựng và tư duy logic vào ngày hôm sau.'
      ],
      highScoringPhrases: [
        { phrase: 'forty winks', meaning: 'một giấc ngủ ngắn chợp mắt (Idiom thân mật)' },
        { phrase: 'burn the candle at both ends', meaning: 'làm việc kiệt sức thâu đêm suốt sáng' },
        { phrase: 'sleep hygiene', meaning: 'thói quen vệ sinh giấc ngủ lành mạnh' },
        { phrase: 'cognitive function', meaning: 'chức năng nhận thức và xử lý của não bộ' }
      ]
    },
    transcript: [
      {
        id: 'gns-1',
        startTime: 2.0,
        endTime: 6.5,
        en: 'Hello, this is 6 Minute English from BBC Learning English, I\'m Neil',
        vi: 'Xin chào, đây là 6 Phút Tiếng Anh từ đài BBC Learning English, tôi là Neil',
        keyWord: 'English',
        ipa: '/ˈɪŋ.ɡlɪʃ/',
        meaning: 'tiếng Anh',
        pos: 'noun'
      },
      {
        id: 'gns-2',
        startTime: 7.0,
        endTime: 11.5,
        en: "And I'm Beth. Neil, did you sleep well last night?",
        vi: 'Và tôi là Beth. Neil này, đêm qua bạn ngủ có ngon giấc không?',
        keyWord: 'sleep',
        ipa: '/sliːp/',
        meaning: 'ngủ, giấc ngủ',
        pos: 'verb'
      },
      {
        id: 'gns-3',
        startTime: 12.0,
        endTime: 18.0,
        en: 'To be honest, I was burning the candle at both ends and feel exhausted',
        vi: 'Thành thật mà nói, tôi đã thức khuya dậy sớm làm việc kiệt sức và nay thấy đuối quá',
        keyWord: 'exhausted',
        ipa: '/ɪɡˈzɔː.stɪd/',
        meaning: 'kiệt sức, mệt lả',
        pos: 'adjective'
      },
      {
        id: 'gns-4',
        startTime: 18.5,
        endTime: 25.5,
        en: "Sleep is not just rest; it's when our brain consolidates new memories",
        vi: 'Giấc ngủ không chỉ là nghỉ ngơi; đó là lúc bộ não củng cố các ký ức mới nạp vào',
        keyWord: 'consolidates',
        ipa: '/kənˈsɒl.ɪ.deɪts/',
        meaning: 'củng cố, gắn kết vững chắc',
        pos: 'verb'
      },
      {
        id: 'gns-5',
        startTime: 26.0,
        endTime: 32.5,
        en: 'During deep sleep, the brain literally washes away metabolic waste',
        vi: 'Trong giấc ngủ sâu, bộ não thực sự rửa trôi các chất thải chuyển hóa độc hại',
        keyWord: 'waste',
        ipa: '/weɪst/',
        meaning: 'chất thải, cặn bã',
        pos: 'noun'
      },
      {
        id: 'gns-6',
        startTime: 33.0,
        endTime: 39.5,
        en: 'Without enough sleep, our cognitive function and mood drop significantly',
        vi: 'Nếu không ngủ đủ, chức năng nhận thức và tâm trạng của ta sẽ tụt dốc trầm trọng',
        keyWord: 'cognitive',
        ipa: '/ˈkɒɡ.nə.tɪv/',
        meaning: 'thuộc về nhận thức, trí tuệ',
        pos: 'adjective'
      },
      {
        id: 'gns-7',
        startTime: 40.0,
        endTime: 47.0,
        en: 'So practicing good sleep hygiene is vital for long-term health and success',
        vi: 'Vì vậy rèn luyện thói quen ngủ lành mạnh là điều sống còn cho sức khỏe và thành công lâu dài',
        keyWord: 'hygiene',
        ipa: '/ˈhaɪ.dʒiːn/',
        meaning: 'vệ sinh, thói quen giữ sức khỏe',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'burn the candle at both ends', ipa: '/bɜːn ðə ˈkæn.dəl æt bəʊθ endz/', meaning: 'làm việc kiệt sức cả ngày lẫn đêm', timestamp: 14 },
      { term: 'consolidate', ipa: '/kənˈsɒl.ɪ.deɪt/', meaning: 'củng cố, khắc sâu kiến thức vào trí nhớ', timestamp: 23 },
      { term: 'cognitive function', ipa: '/ˈkɒɡ.nə.tɪv ˈfʌŋk.ʃən/', meaning: 'năng lực nhận thức và xử lý của bộ não', timestamp: 36 },
      { term: 'sleep hygiene', ipa: '/sliːp ˈhaɪ.dʒiːn/', meaning: 'các thói quen lành mạnh giúp ngủ ngon giấc', timestamp: 44 }
    ]
  },

  // 21. JULIAN TREASURE TED PODCAST - HOW TO SPEAK SO THAT PEOPLE WANT TO LISTEN
  {
    id: 'ted-julian-treasure-speaking',
    youtubeId: 'eIho2S0ZahI',
    title: 'How to Speak So That People Want to Listen - Julian Treasure (TED Podcast - 50M+ Views)',
    channel: 'TED Talks Daily',
    category: 'podcast',
    level: 'B2 - Nâng cao (IELTS 7.0+)',
    accent: '🇬🇧 UK',
    duration: '9:58',
    thumbnail: 'https://img.youtube.com/vi/eIho2S0ZahI/hqdefault.jpg',
    description: 'Bản podcast kinh điển nhất về nghệ thuật giọng nói, nguyên tắc HAIL và cách loại bỏ 7 thói quen xấu khi giao tiếp.',
    podcastDetails: {
      topic: 'Nghệ thuật Thuyết trình & Giao tiếp (Public Speaking & Oratory)',
      targetLevel: 'B2 - C1 (IELTS 7.0 - 7.5+)',
      host: 'Julian Treasure (Chuyên gia Âm thanh & Diễn giả quốc tế)',
      keyTakeaways: [
        'Loại bỏ 7 thói quen độc hại trong giao tiếp: Đàm tiếu sau lưng, phán xét, thái độ tiêu cực, than vãn liên tục, đổ lỗi bào chữa, nói phóng đại và áp đặt giáo điều.',
        'Xây dựng lời nói vững chắc trên 4 viên đá tảng HAIL: Honesty (Trung thực), Authenticity (Chân thật), Integrity (Chính trực) và Love (Yêu thương/Cầu chúc điều tốt lành cho người nghe).',
        'Làm chủ 4 công cụ trong chiếc hộp thanh âm: Âm vực (Register), Âm sắc (Timbre), Ngữ điệu nhạc tính (Prosody) và Khoảng lặng đầy uy quyền (Silence).'
      ],
      highScoringPhrases: [
        { phrase: 'cornerstone', meaning: 'viên đá tảng, nền móng cốt lõi (Band 7.5+ Academic Writing/Speaking)' },
        { phrase: 'authenticity', meaning: 'tính xác thực, sự chân thành bản sắc' },
        { phrase: 'prosody', meaning: 'ngữ điệu và nhịp điệu của giọng nói' },
        { phrase: 'vocal toolbox', meaning: 'hộp dụng cụ kỹ thuật thanh nhạc và giọng nói' }
      ]
    },
    transcript: [
      {
        id: 'jt-1',
        startTime: 3.0,
        endTime: 8.0,
        en: "The human voice: it's the instrument we all play",
        vi: 'Giọng nói con người: đó chính là nhạc cụ mà tất cả chúng ta đều chơi hàng ngày',
        keyWord: 'instrument',
        ipa: '/ˈɪn.strə.mənt/',
        meaning: 'nhạc cụ, công cụ',
        pos: 'noun'
      },
      {
        id: 'jt-2',
        startTime: 8.5,
        endTime: 13.5,
        en: "It's the most powerful sound in the world, probably",
        vi: 'Đó có lẽ là âm thanh quyền năng bậc nhất trên thế giới này',
        keyWord: 'powerful',
        ipa: '/ˈpaʊə.fəl/',
        meaning: 'mạnh mẽ, quyền lực',
        pos: 'adjective'
      },
      {
        id: 'jt-3',
        startTime: 14.0,
        endTime: 21.0,
        en: "Yet many people have the experience that when they speak, people don't listen",
        vi: 'Thế nhưng nhiều người lại trải qua cảm giác rằng khi họ cất lời, chẳng ai chịu lắng nghe',
        keyWord: 'listen',
        ipa: '/ˈlɪs.ən/',
        meaning: 'lắng nghe',
        pos: 'verb'
      },
      {
        id: 'jt-4',
        startTime: 21.5,
        endTime: 28.5,
        en: "I'd like to suggest that there are seven deadly sins of speaking",
        vi: 'Tôi xin được chỉ ra rằng có 7 thói quen xấu chết người khi chúng ta cất tiếng nói',
        keyWord: 'sins',
        ipa: '/sɪnz/',
        meaning: 'tội lỗi, sai lầm nghiêm trọng',
        pos: 'noun'
      },
      {
        id: 'jt-5',
        startTime: 29.0,
        endTime: 38.0,
        en: 'Gossip, judging, negativity, complaining, excuses, exaggeration, and dogmatism',
        vi: 'Đàm tiếu, phán xét, tiêu cực, than vãn, bao biện, phóng đại và áp đặt giáo điều',
        keyWord: 'gossip',
        ipa: '/ˈɡɒs.ɪp/',
        meaning: 'chuyện ngồi lê đôi mách, đàm tiếu',
        pos: 'noun'
      },
      {
        id: 'jt-6',
        startTime: 38.5,
        endTime: 48.0,
        en: 'Instead, we can stand on four powerful cornerstones: H-A-I-L, which means to greet with enthusiasm',
        vi: 'Thay vào đó, ta hãy đứng vững trên 4 viên đá tảng H-A-I-L, từ mang ý nghĩa chào đón nồng nhiệt',
        keyWord: 'cornerstones',
        ipa: '/ˈkɔː.nə.stəʊnz/',
        meaning: 'những viên đá tảng nền móng',
        pos: 'noun'
      },
      {
        id: 'jt-7',
        startTime: 48.5,
        endTime: 56.5,
        en: 'Honesty: being clear and straight. Authenticity: just being yourself',
        vi: 'Trung thực: rõ ràng và thẳng thắn. Chân thật: hãy là chính bản thân mình',
        keyWord: 'authenticity',
        ipa: '/ˌɔː.θenˈtɪs.ə.ti/',
        meaning: 'tính chân thật, nguyên bản',
        pos: 'noun'
      },
      {
        id: 'jt-8',
        startTime: 57.0,
        endTime: 64.5,
        en: 'Integrity: being your word. And Love: wishing people well',
        vi: 'Chính trực: giữ đúng lời hứa. Và Yêu thương: cầu chúc cho người nghe những điều tốt lành',
        keyWord: 'integrity',
        ipa: '/ɪnˈteɡ.rə.ti/',
        meaning: 'sự chính trực, liêm khiết',
        pos: 'noun'
      },
      {
        id: 'jt-9',
        startTime: 65.0,
        endTime: 73.5,
        en: 'And you have an amazing vocal toolbox: register, timbre, prosody, and pace',
        vi: 'Và bạn sở hữu một hộp công cụ thanh âm kỳ diệu: âm vực, âm sắc, nhạc điệu và tốc độ',
        keyWord: 'prosody',
        ipa: '/ˈprɒs.ə.di/',
        meaning: 'ngữ điệu và nhịp điệu của giọng nói',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'gossip', ipa: '/ˈɡɒs.ɪp/', meaning: 'ngồi lê đôi mách, nói xấu sau lưng', timestamp: 30 },
      { term: 'dogmatism', ipa: '/ˈdɒɡ.mə.tɪ.zəm/', meaning: 'thói giáo điều, áp đặt quan điểm lên người khác', timestamp: 36 },
      { term: 'cornerstone', ipa: '/ˈkɔː.nə.stəʊn/', meaning: 'viên đá tảng nền tảng cho sự thành công', timestamp: 44 },
      { term: 'authenticity', ipa: '/ˌɔː.θenˈtɪs.ə.ti/', meaning: 'sự chân thật, sống thật với bản sắc mình', timestamp: 53 },
      { term: 'prosody', ipa: '/ˈprɒs.ə.di/', meaning: 'ngữ điệu lên bổng xuống trầm của lời nói', timestamp: 71 }
    ]
  },

  // 22. TIM URBAN TED PODCAST - INSIDE THE MIND OF A MASTER PROCRASTINATOR
  {
    id: 'ted-tim-urban-procrastinator',
    youtubeId: 'arj7oStGLkU',
    title: 'Inside the Mind of a Master Procrastinator - Tim Urban (TED Podcast - 70M+ Views)',
    channel: 'TED Talks Daily',
    category: 'podcast',
    level: 'B2 - Nâng cao (IELTS 7.0+)',
    accent: '🇺🇸 US',
    duration: '14:03',
    thumbnail: 'https://img.youtube.com/vi/arj7oStGLkU/hqdefault.jpg',
    description: 'Bài nói chuyện hài hước và sâu cay bậc nhất lịch sử TED về Chú Khỉ Ham Vui Tức Thì và Quái Vật Hoảng Loạn.',
    podcastDetails: {
      topic: 'Năng suất & Tâm lý học Hành vi (Productivity & Human Nature)',
      targetLevel: 'B2 - C1 (IELTS 7.0 - 7.5)',
      host: 'Tim Urban (Người sáng lập trang blog tri thức Wait But Why)',
      keyTakeaways: [
        'Bộ não người trì hoãn có sự giằng xé giữa Người ra quyết định lý trí (Rational Decision-Maker) và Chú khỉ ham vui tức thì (Instant Gratification Monkey).',
        'Chú khỉ chỉ quan tâm đến 2 tiêu chí duy nhất: DỄ DÀNG và VUI VẺ, dẫn bạn lạc vào "Sân chơi tăm tối" (Dark Playground) tràn ngập cảm giác tội lỗi.',
        'Quái vật Hoảng loạn (Panic Monster) chỉ thức giấc khi deadline kề sát; bi kịch lớn nhất là những mục tiêu cuộc đời không có hạn chót (khởi nghiệp, rèn luyện sức khỏe) thì Quái vật không bao giờ xuất hiện!'
      ],
      highScoringPhrases: [
        { phrase: 'instant gratification', meaning: 'sự thỏa mãn tức thì (Band 7.5+ Concept)' },
        { phrase: 'pull an all-nighter', meaning: 'thức trắng đêm để làm việc/học bài (Thành ngữ thông dụng)' },
        { phrase: 'dark playground', meaning: 'sân chơi tăm tối (vui chơi trong tâm trạng dằn vặt vì trễ hạn)' },
        { phrase: 'long-term consequences', meaning: 'hệ quả dài hạn trong tương lai' }
      ]
    },
    transcript: [
      {
        id: 'tu-1',
        startTime: 5.0,
        endTime: 12.0,
        en: 'In college, I was a government major, which means I had to write a lot of papers',
        vi: 'Thời đại học, tôi học chuyên ngành chính phủ, đồng nghĩa với việc tôi phải viết rất nhiều bài luận',
        keyWord: 'papers',
        ipa: '/ˈpeɪ.pərz/',
        meaning: 'những bài luận nghiên cứu',
        pos: 'noun'
      },
      {
        id: 'tu-2',
        startTime: 12.5,
        endTime: 19.0,
        en: 'The normal person would spread out the work gradually over the semester',
        vi: 'Một người bình thường sẽ chia đều khối lượng công việc dần dần trong suốt học kỳ',
        keyWord: 'gradually',
        ipa: '/ˈɡrædʒ.u.ə.li/',
        meaning: 'dần dần, từng bước',
        pos: 'adverb'
      },
      {
        id: 'tu-3',
        startTime: 19.5,
        endTime: 27.0,
        en: "My plan was always the same: I'd say, 'I'm definitely going to do it early this time'",
        vi: 'Kế hoạch của tôi thì luôn như cũ: Tôi tự nhủ, lần này chắc chắn mình sẽ làm thật sớm',
        keyWord: 'definitely',
        ipa: '/ˈdef.ɪ.nət.li/',
        meaning: 'chắc chắn, dứt khoát',
        pos: 'adverb'
      },
      {
        id: 'tu-4',
        startTime: 27.5,
        endTime: 34.5,
        en: 'And then the deadline approaches, and I end up pulling an all-nighter',
        vi: 'Và rồi hạn chót ập đến, và kết cục là tôi lại phải thức trắng nguyên đêm để cày',
        keyWord: 'deadline',
        ipa: '/ˈded.laɪn/',
        meaning: 'hạn chót hoàn thành',
        pos: 'noun'
      },
      {
        id: 'tu-5',
        startTime: 35.0,
        endTime: 46.0,
        en: 'Both brains have a Rational Decision-Maker, but the procrastinator also has an Instant Gratification Monkey',
        vi: 'Cả hai bộ não đều có Người ra quyết định lý trí, nhưng não người trì hoãn còn có thêm Chú khỉ ham vui',
        keyWord: 'rational',
        ipa: '/ˈræʃ.ən.əl/',
        meaning: 'lý trí, hợp lý',
        pos: 'adjective'
      },
      {
        id: 'tu-6',
        startTime: 46.5,
        endTime: 53.0,
        en: 'The monkey only cares about two things: easy and fun',
        vi: 'Chú khỉ ấy chỉ bận tâm đến đúng hai điều: việc gì DỄ và việc gì VUI',
        keyWord: 'easy',
        ipa: '/ˈiː.zi/',
        meaning: 'dễ dàng',
        pos: 'adjective'
      },
      {
        id: 'tu-7',
        startTime: 53.5,
        endTime: 63.0,
        en: "He leads us to the Dark Playground, where leisure activities aren't actually fun because of guilt",
        vi: 'Nó dẫn ta đến Sân chơi tăm tối, nơi các hoạt động giải trí chẳng hề vui vì cảm giác tội lỗi',
        keyWord: 'guilt',
        ipa: '/ɡɪlt/',
        meaning: 'cảm giác tội lỗi, cắn rứt',
        pos: 'noun'
      },
      {
        id: 'tu-8',
        startTime: 63.5,
        endTime: 73.0,
        en: 'The only thing that scares the monkey away is the Panic Monster, which wakes up right before deadlines',
        vi: 'Thứ duy nhất dọa chú khỉ chạy mất là Quái vật Hoảng loạn, kẻ chỉ bừng tỉnh ngay trước giờ G',
        keyWord: 'panic',
        ipa: '/ˈpæn.ɪk/',
        meaning: 'sự hoảng loạn, sợ hãi',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'spread out', ipa: '/spred aʊt/', meaning: 'rải đều, phân bổ đều theo thời gian', timestamp: 15 },
      { term: 'pull an all-nighter', ipa: '/pʊl ən ɔːl ˈnaɪ.tər/', meaning: 'thức trắng cả đêm để học hoặc làm việc', timestamp: 32 },
      { term: 'rational decision-maker', ipa: '/ˈræʃ.ən.əl dɪˈsɪʒ.ən ˌmeɪ.kər/', meaning: 'người ra quyết định dựa trên lý trí tỉnh táo', timestamp: 39 },
      { term: 'dark playground', ipa: '/dɑːk ˈpleɪ.ɡraʊnd/', meaning: 'sân chơi tăm tối (chơi bời trong nỗi lo âu)', timestamp: 57 }
    ]
  },

  // 23. CAREER & MINDSET TALK - HOW TO ACE "TELL ME ABOUT YOURSELF"
  {
    id: 'career-tell-me-about-yourself',
    youtubeId: '1mHjMNZZvGU',
    title: "How to Answer 'Tell Me About Yourself' in Job Interviews - CareerVidz",
    channel: 'CareerVidz',
    category: 'podcast',
    level: 'B1 - B2 (Phỏng vấn việc làm)',
    accent: '🇬🇧 UK',
    duration: '10:35',
    thumbnail: 'https://img.youtube.com/vi/1mHjMNZZvGU/hqdefault.jpg',
    description: 'Hướng dẫn công thức 3 bước (Hiện tại - Quá khứ - Tương lai) để chinh phục câu hỏi phỏng vấn số 1 toàn cầu.',
    podcastDetails: {
      topic: 'Kỹ năng Phỏng vấn & Phát triển Nghề nghiệp (Career & Job Interview)',
      targetLevel: 'B1 - B2 (Professional English)',
      host: 'Richard McMunn (Chuyên gia Đào tạo Phỏng vấn Quốc tế)',
      keyTakeaways: [
        'Tuyệt đối không kể lể tiểu sử gia đình, sở thích cá nhân hay liệt kê lại CV từ thời trung học.',
        'Áp dụng công thức 3 phần chuẩn quốc tế: Hiện tại (Present - vị trí & năng lực cốt lõi) -> Quá khứ (Past - thành tựu định lượng cụ thể) -> Tương lai (Future - lý do khát khao cống hiến cho công ty).',
        'Kiểm soát thời lượng trong khoảng 60 - 90 giây với năng lượng tự tin, nụ cười chuyên nghiệp và phong thái tràn đầy nhiệt huyết.'
      ],
      highScoringPhrases: [
        { phrase: 'track record', meaning: 'bề dày thành tích đã được chứng minh qua số liệu' },
        { phrase: 'hit the ground running', meaning: 'bắt nhịp và tạo ra hiệu quả ngay từ ngày đầu tiên' },
        { phrase: 'add tangible value', meaning: 'mang lại giá trị hữu hình, đo lường được' },
        { phrase: 'commercial acumen', meaning: 'sự nhạy bén sắc sảo trong hoạt động kinh doanh' }
      ]
    },
    transcript: [
      {
        id: 'tmay-1',
        startTime: 3.0,
        endTime: 9.5,
        en: "The question 'Tell me about yourself' is guaranteed to come up in any job interview",
        vi: 'Câu hỏi Hãy giới thiệu về bản thân chắc chắn sẽ xuất hiện trong mọi buổi phỏng vấn việc làm',
        keyWord: 'interview',
        ipa: '/ˈɪn.tə.vjuː/',
        meaning: 'buổi phỏng vấn',
        pos: 'noun'
      },
      {
        id: 'tmay-2',
        startTime: 10.0,
        endTime: 17.5,
        en: 'Most candidates fail because they ramble about their hobbies, pets, or life story',
        vi: 'Phần lớn ứng viên thất bại vì họ thao thao bất tuyệt về sở thích, thú cưng hay chuyện đời tư',
        keyWord: 'ramble',
        ipa: '/ˈræm.bəl/',
        meaning: 'nói lan man, dài dòng',
        pos: 'verb'
      },
      {
        id: 'tmay-3',
        startTime: 18.0,
        endTime: 26.0,
        en: "Interviewers don't want your life history; they want to know how you can help their business",
        vi: 'Nhà tuyển dụng không muốn nghe tiểu sử đời bạn; họ muốn biết bạn sẽ giúp gì cho công ty họ',
        keyWord: 'business',
        ipa: '/ˈbɪz.nɪs/',
        meaning: 'doanh nghiệp, công việc kinh doanh',
        pos: 'noun'
      },
      {
        id: 'tmay-4',
        startTime: 26.5,
        endTime: 33.0,
        en: 'Use my simple 3-part formula: Present, Past, and Future',
        vi: 'Hãy áp dụng công thức 3 phần đơn giản của tôi: Hiện tại, Quá khứ và Tương lai',
        keyWord: 'formula',
        ipa: '/ˈfɔː.mjə.lə/',
        meaning: 'công thức, quy tắc mẫu',
        pos: 'noun'
      },
      {
        id: 'tmay-5',
        startTime: 33.5,
        endTime: 41.0,
        en: 'Start with who you are right now, your key strengths and professional expertise',
        vi: 'Mở đầu bằng vị thế hiện tại của bạn, những thế mạnh cốt lõi và chuyên môn nghề nghiệp',
        keyWord: 'expertise',
        ipa: '/ˌek.spɜːˈtiːz/',
        meaning: 'chuyên môn, sự tinh thông',
        pos: 'noun'
      },
      {
        id: 'tmay-6',
        startTime: 41.5,
        endTime: 48.5,
        en: 'Next, highlight a proud achievement where you delivered exceptional results',
        vi: 'Tiếp theo, hãy làm nổi bật một thành tựu đáng tự hào nơi bạn đem lại kết quả vượt trội',
        keyWord: 'achievement',
        ipa: '/əˈtʃiːv.mənt/',
        meaning: 'thành tựu, chiến tích',
        pos: 'noun'
      },
      {
        id: 'tmay-7',
        startTime: 49.0,
        endTime: 57.0,
        en: 'Finally, explain why you want this specific role and how you will hit the ground running',
        vi: 'Cuối cùng, giải thích lý do bạn khát khao vị trí này và cách bạn bắt nhịp tạo hiệu quả ngay',
        keyWord: 'role',
        ipa: '/rəʊl/',
        meaning: 'vị trí, vai trò',
        pos: 'noun'
      },
      {
        id: 'tmay-8',
        startTime: 57.5,
        endTime: 65.5,
        en: 'Keep your response concise, around 60 to 90 seconds, delivered with conviction',
        vi: 'Hãy giữ câu trả lời ngắn gọn trong khoảng 60 đến 90 giây và truyền tải với sự tự tin vững vàng',
        keyWord: 'conviction',
        ipa: '/kənˈvɪk.ʃən/',
        meaning: 'sự tin tưởng vững chắc, sự tự tin',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'ramble', ipa: '/ˈræm.bəl/', meaning: 'nói huyên thuyên lan man không trọng tâm', timestamp: 14 },
      { term: 'professional expertise', ipa: '/prəˈfeʃ.ən.əl ˌek.spɜːˈtiːz/', meaning: 'chuyên môn nghiệp vụ chuyên sâu', timestamp: 38 },
      { term: 'hit the ground running', ipa: '/hɪt ðə ɡraʊnd ˈrʌn.ɪŋ/', meaning: 'nhập cuộc và làm việc hiệu quả tức thì', timestamp: 54 },
      { term: 'with conviction', ipa: '/wɪð kənˈvɪk.ʃən/', meaning: 'với sự quả quyết và niềm tin mãnh liệt', timestamp: 63 }
    ]
  },

  // 24. BRENÉ BROWN TED PODCAST - THE POWER OF VULNERABILITY
  {
    id: 'ted-brene-brown-vulnerability',
    youtubeId: 'iCvmsMzlF7o',
    title: 'The Power of Vulnerability - Brené Brown (TED Podcast - 60M+ Views)',
    channel: 'TED Talks Daily',
    category: 'podcast',
    level: 'B2 - C1 (IELTS 7.5+)',
    accent: '🇺🇸 US',
    duration: '20:19',
    thumbnail: 'https://img.youtube.com/vi/iCvmsMzlF7o/hqdefault.jpg',
    description: 'Bản podcast nghiên cứu tâm lý chạm đến hàng chục triệu trái tim về lòng dũng cảm chấp nhận sự tổn thương và không hoàn hảo.',
    podcastDetails: {
      topic: 'Trí tuệ Cảm xúc & Lòng Dũng cảm (Emotional Intelligence & Courage)',
      targetLevel: 'B2 - C1 (IELTS 7.0 - 8.0)',
      host: 'Brené Brown (Tiến sĩ, Nhà nghiên cứu & Tác giả sách bán chạy)',
      keyTakeaways: [
        'Sự tổn thương (Vulnerability) không phải là dấu hiệu của sự yếu đuối, mà là chiếc nôi sinh ra lòng dũng cảm, sự sáng tạo và tính gắn kết chân thật giữa người với người.',
        'Những con người sống toàn tâm toàn ý (Wholehearted) có chung một niềm tin cốt lõi: Họ tin rằng bản thân mình xứng đáng được yêu thương dẫu cho còn nhiều khuyết điểm.',
        'Ta không thể làm tê liệt có chọn lọc: Khi cố gắng dập tắt nỗi sợ và sự yếu đuối, ta cũng vô tình bóp chết niềm hân hoan, sự biết ơn và tình yêu thương.'
      ],
      highScoringPhrases: [
        { phrase: 'wholehearted', meaning: 'sống toàn tâm toàn ý, chân thành trọn vẹn (Band 8.0+ Lexical Resource)' },
        { phrase: 'numb the vulnerability', meaning: 'làm tê liệt cảm giác tổn thương' },
        { phrase: 'courage to be imperfect', meaning: 'dũng khí dám chấp nhận sự không hoàn hảo' },
        { phrase: 'sense of belonging', meaning: 'cảm giác thuộc về một cộng đồng gắn kết' }
      ]
    },
    transcript: [
      {
        id: 'bb-1',
        startTime: 5.0,
        endTime: 11.5,
        en: "Connection is why we're here; it gives purpose and meaning to our lives",
        vi: 'Sự kết nối là lý do ta có mặt trên đời; nó mang lại mục đích và ý nghĩa cho cuộc sống',
        keyWord: 'connection',
        ipa: '/kəˈnek.ʃən/',
        meaning: 'sự kết nối, mối dây liên kết',
        pos: 'noun'
      },
      {
        id: 'bb-2',
        startTime: 12.0,
        endTime: 18.0,
        en: 'In my research, I found that shame is the fear of disconnection',
        vi: 'Trong nghiên cứu của mình, tôi nhận ra rằng nỗi xấu hổ chính là nỗi sợ bị mất kết nối',
        keyWord: 'shame',
        ipa: '/ʃeɪm/',
        meaning: 'nỗi xấu hổ, sự tự ti',
        pos: 'noun'
      },
      {
        id: 'bb-3',
        startTime: 18.5,
        endTime: 26.5,
        en: 'The people who had a strong sense of love and belonging believed they were worthy of it',
        vi: 'Những người có cảm giác mạnh mẽ về tình yêu và sự thuộc về luôn tin rằng họ xứng đáng với điều đó',
        keyWord: 'worthy',
        ipa: '/ˈwɜː.ði/',
        meaning: 'xứng đáng, có giá trị',
        pos: 'adjective'
      },
      {
        id: 'bb-4',
        startTime: 27.0,
        endTime: 34.5,
        en: 'They had the courage to be imperfect, and they fully embraced vulnerability',
        vi: 'Họ có dũng khí để chấp nhận sự không hoàn hảo, và họ đón nhận trọn vẹn sự yếu đuối của mình',
        keyWord: 'courage',
        ipa: '/ˈkʌr.ɪdʒ/',
        meaning: 'lòng dũng cảm, sự can đảm',
        pos: 'noun'
      },
      {
        id: 'bb-5',
        startTime: 35.0,
        endTime: 42.0,
        en: 'They believed that what made them vulnerable was what made them beautiful',
        vi: 'Họ tin rằng chính những điều khiến họ dễ bị tổn thương lại là điều làm nên vẻ đẹp của họ',
        keyWord: 'vulnerable',
        ipa: '/ˈvʌl.nər.ə.bəl/',
        meaning: 'dễ bị tổn thương, mong manh',
        pos: 'adjective'
      },
      {
        id: 'bb-6',
        startTime: 42.5,
        endTime: 51.0,
        en: 'Vulnerability is not weakness; it is the birthplace of joy, creativity, and belonging',
        vi: 'Sự tổn thương không phải là yếu mềm; đó là cội nguồn sinh ra niềm vui, sự sáng tạo và gắn kết',
        keyWord: 'creativity',
        ipa: '/ˌkriː.eɪˈtɪv.ə.ti/',
        meaning: 'sự sáng tạo',
        pos: 'noun'
      },
      {
        id: 'bb-7',
        startTime: 51.5,
        endTime: 60.0,
        en: 'To let ourselves be seen, deeply seen, is where true transformation begins',
        vi: 'Dám để bản thân mình được người khác nhìn thấu chính là nơi sự chuyển hóa thật sự bắt đầu',
        keyWord: 'transformation',
        ipa: '/ˌtræns.fəˈmeɪ.ʃən/',
        meaning: 'sự biến đổi, chuyển hóa sâu sắc',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'disconnection', ipa: '/ˌdɪs.kəˈnek.ʃən/', meaning: 'sự mất kết nối, cô lập', timestamp: 15 },
      { term: 'worthy of', ipa: '/ˈwɜː.ði əv/', meaning: 'xứng đáng được nhận điều gì', timestamp: 24 },
      { term: 'embrace vulnerability', ipa: '/ɪmˈbreɪs ˌvʌl.nər.əˈbɪl.ə.ti/', meaning: 'đón nhận sự mong manh yếu đuối của bản thân', timestamp: 32 },
      { term: 'transformation', ipa: '/ˌtræns.fəˈmeɪ.ʃən/', meaning: 'sự lột xác chuyển hóa cuộc đời', timestamp: 57 }
    ]
  },

  // =======================================================================
  // PHÂN MỤC 3: SHORT CLIPS, PHIM & TED-ED KINH ĐIỂN
  // =======================================================================

  // 25. NYC STREET INTERVIEW
  {
    id: 'street-interview-life-advice',
    youtubeId: 'l-gQLqv9f4o',
    title: "Best Advice You've Ever Heard - NYC Street Interview",
    channel: 'Street Stories NY',
    category: 'short_clips',
    level: 'B1 - Trung bình',
    accent: '🇺🇸 US',
    duration: '2:45',
    thumbnail: 'https://img.youtube.com/vi/l-gQLqv9f4o/hqdefault.jpg',
    description: 'Phỏng vấn người dân New York trên phố với tiếng lóng và lời khuyên cuộc sống chân thực.',
    transcript: [
      {
        id: 'si-1',
        startTime: 0.5,
        endTime: 4.5,
        en: "Excuse me, what is the best piece of advice you've ever received?",
        vi: 'Xin lỗi, lời khuyên hay nhất mà bạn từng nhận được trong đời là gì?',
        keyWord: 'advice',
        ipa: '/ədˈvaɪs/',
        meaning: 'lời khuyên, sự chỉ dẫn',
        pos: 'noun'
      },
      {
        id: 'si-2',
        startTime: 5.0,
        endTime: 10.5,
        en: "Don't let the noise of other people's opinions drown out your inner voice",
        vi: 'Đừng để sự ồn ào từ ý kiến của người khác lấn át đi tiếng nói bên trong bạn',
        keyWord: 'opinions',
        ipa: '/əˈpɪn.jənz/',
        meaning: 'những ý kiến, quan điểm',
        pos: 'noun'
      },
      {
        id: 'si-3',
        startTime: 11.0,
        endTime: 17.0,
        en: 'At the end of the day, you gotta live with the choices you make every single day',
        vi: 'Suy cho cùng, bạn phải tự chịu trách nhiệm với những lựa chọn của chính mình mỗi ngày',
        keyWord: 'choices',
        ipa: '/ˈtʃɔɪ.sɪz/',
        meaning: 'những sự lựa chọn',
        pos: 'noun'
      },
      {
        id: 'si-4',
        startTime: 17.5,
        endTime: 23.0,
        en: "So keep your head high and stay true to who you really are",
        vi: 'Vì vậy hãy ngẩng cao đầu và luôn sống thật với con người của chính bạn',
        keyWord: 'true',
        ipa: '/truː/',
        meaning: 'chân thực, trung thực',
        pos: 'adjective'
      }
    ],
    vocabulary: [
      { term: 'drown out', ipa: '/draʊn aʊt/', meaning: 'lấn át, át đi tiếng động khác', timestamp: 8 },
      { term: 'at the end of the day', ipa: '/æt ði end əv ðə deɪ/', meaning: 'suy cho cùng, rốt cuộc', timestamp: 12 },
      { term: 'stay true to', ipa: '/steɪ truː tuː/', meaning: 'luôn trung thành, sống thật với chính mình', timestamp: 20 }
    ]
  },

  // 26. COFFEE SHOP ORDERING
  {
    id: 'coffee-shop-roleplay',
    youtubeId: 'wD_KSpbQ554',
    title: 'How to Order Coffee Like a Native Speaker in America',
    channel: 'English with Lucy & Friends',
    category: 'short_clips',
    level: 'A2 - Dễ',
    accent: '🇺🇸 US',
    duration: '3:10',
    thumbnail: 'https://img.youtube.com/vi/wD_KSpbQ554/hqdefault.jpg',
    description: 'Thực hành gọi đồ uống tại quầy cà phê New York với từ vựng về kích cỡ, loại sữa và cách trả lời lịch sự.',
    transcript: [
      {
        id: 'cs-1',
        startTime: 1.0,
        endTime: 5.5,
        en: 'Hi there! What can I get started for you today?',
        vi: 'Xin chào! Hôm nay tôi có thể lấy món gì cho bạn đây?',
        keyWord: 'started',
        ipa: '/ˈstɑː.tɪd/',
        meaning: 'bắt đầu',
        pos: 'verb'
      },
      {
        id: 'cs-2',
        startTime: 6.0,
        endTime: 12.0,
        en: 'Could I please get an iced oat milk latte with just a pump of vanilla?',
        vi: 'Cho tôi xin một ly latte sữa yến mạch đá với chỉ một chút si-rô vani được không?',
        keyWord: 'latte',
        ipa: '/ˈlæt.eɪ/',
        meaning: 'cà phê sữa kiểu Ý',
        pos: 'noun'
      },
      {
        id: 'cs-3',
        startTime: 12.5,
        endTime: 17.5,
        en: 'Sure thing! What size would you like for that: small, medium, or large?',
        vi: 'Chắc chắn rồi! Bạn muốn dùng cỡ nào: nhỏ, vừa hay lớn?',
        keyWord: 'size',
        ipa: '/saɪz/',
        meaning: 'kích cỡ',
        pos: 'noun'
      },
      {
        id: 'cs-4',
        startTime: 18.0,
        endTime: 23.0,
        en: 'A medium to go, please. And could you put the syrup on the side?',
        vi: 'Cỡ vừa mang đi giúp tôi nhé. Và bạn có thể để si-rô riêng sang bên được không?',
        keyWord: 'medium',
        ipa: '/ˈmiː.di.əm/',
        meaning: 'cỡ vừa, trung bình',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'to go', ipa: '/tuː ɡəʊ/', meaning: 'mang đi (takeaway)', timestamp: 19 },
      { term: 'on the side', ipa: '/ɒn ðə saɪd/', meaning: 'để riêng ra bên cạnh (sốt/đường)', timestamp: 21 },
      { term: 'sure thing', ipa: '/ʃɔːr θɪŋ/', meaning: 'chắc chắn rồi, không vấn đề gì', timestamp: 13 }
    ]
  },

  // 27. THE PURSUIT OF HAPPYNESS
  {
    id: 'movie-pursuit-of-happyness',
    youtubeId: 'd8kHwt_qg3A',
    title: "Don't Ever Let Someone Tell You - The Pursuit of Happyness",
    channel: 'Sony Pictures Classic Clips',
    category: 'movie',
    level: 'B1 - Trung bình',
    accent: '🇺🇸 US',
    duration: '2:20',
    thumbnail: 'https://img.youtube.com/vi/d8kHwt_qg3A/hqdefault.jpg',
    description: 'Trích đoạn kinh điển của Will Smith dạy con trai bảo vệ ước mơ trên sân bóng rổ, truyền cảm hứng mạnh mẽ.',
    transcript: [
      {
        id: 'poh-1',
        startTime: 2.0,
        endTime: 7.5,
        en: "Don't ever let somebody tell you you can't do something",
        vi: 'Đừng bao giờ để bất cứ ai bảo rằng con không thể làm được điều gì',
        keyWord: 'somebody',
        ipa: '/ˈsʌm.bə.di/',
        meaning: 'ai đó, bất kỳ ai',
        pos: 'pronoun'
      },
      {
        id: 'poh-2',
        startTime: 8.0,
        endTime: 12.0,
        en: 'Not even me. All right?',
        vi: 'Kể cả đó có là bố đi chăng nữa. Được chứ?',
        keyWord: 'even',
        ipa: '/ˈiː.vən/',
        meaning: 'thậm chí, ngay cả',
        pos: 'adverb'
      },
      {
        id: 'poh-3',
        startTime: 13.0,
        endTime: 17.5,
        en: 'You got a dream, you gotta protect it',
        vi: 'Con có một ước mơ, con phải bảo vệ nó',
        keyWord: 'protect',
        ipa: '/prəˈtekt/',
        meaning: 'bảo vệ, che chở',
        pos: 'verb'
      },
      {
        id: 'poh-4',
        startTime: 18.0,
        endTime: 24.5,
        en: "People can't do something themselves, they wanna tell you you can't do it",
        vi: 'Khi người ta không tự làm được điều gì, họ sẽ muốn bảo rằng con cũng chẳng làm được',
        keyWord: 'themselves',
        ipa: '/ðəmˈselvz/',
        meaning: 'chính bản thân họ',
        pos: 'pronoun'
      },
      {
        id: 'poh-5',
        startTime: 25.0,
        endTime: 30.5,
        en: 'If you want something, go get it. Period',
        vi: 'Nếu con khao khát điều gì, hãy dấn thân mà giành lấy nó. Chấm hết',
        keyWord: 'period',
        ipa: '/ˈpɪə.ri.əd/',
        meaning: 'chấm hết (khẳng định dứt khoát)',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'gotta', ipa: '/ˈɡɒt.ə/', meaning: 'phải làm gì (dạng nói tắt của have got to)', timestamp: 14 },
      { term: 'protect a dream', ipa: '/prəˈtekt ə driːm/', meaning: 'bảo vệ ước mơ, kiên trì theo đuổi hoài bão', timestamp: 16 },
      { term: 'period', ipa: '/ˈpɪə.ri.əd/', meaning: 'chấm hết, không bàn cãi thêm', timestamp: 29 }
    ]
  },

  // 28. FRIENDS - JOEY DOESN'T SHARE FOOD!
  {
    id: 'movie-friends-joey-food',
    youtubeId: '1_c8oQ6Z9pI',
    title: "Joey Doesn't Share Food! - Friends Iconic Scene",
    channel: 'Friends Official',
    category: 'movie',
    level: 'A2 - Dễ',
    accent: '🇺🇸 US',
    duration: '2:15',
    thumbnail: 'https://img.youtube.com/vi/1_c8oQ6Z9pI/hqdefault.jpg',
    description: 'Cảnh phim hài hước nổi tiếng nhất sitcom Friends với cấu trúc câu phủ định và ngữ điệu tự nhiên.',
    transcript: [
      {
        id: 'fr-1',
        startTime: 1.0,
        endTime: 6.0,
        en: 'So how was the date with that girl from the gallery?',
        vi: 'Thế buổi hẹn hò với cô bạn ở phòng tranh diễn ra thế nào rồi?',
        keyWord: 'date',
        ipa: '/deɪt/',
        meaning: 'buổi hẹn hò',
        pos: 'noun'
      },
      {
        id: 'fr-2',
        startTime: 6.5,
        endTime: 12.0,
        en: 'It was great until she reached over and took a couple of my fries!',
        vi: 'Mọi chuyện rất tuyệt cho đến khi cô ấy với tay sang và bốc mấy cọng khoai tây chiên của tớ!',
        keyWord: 'fries',
        ipa: '/fraɪz/',
        meaning: 'khoai tây chiên',
        pos: 'noun'
      },
      {
        id: 'fr-3',
        startTime: 12.5,
        endTime: 17.5,
        en: "What? She took some of your french fries? What's the big deal?",
        vi: 'Cái gì cơ? Cô ấy chỉ lấy vài cọng khoai thôi mà? Có gì to tát đâu chứ?',
        keyWord: 'big deal',
        ipa: '/bɪɡ diːl/',
        meaning: 'chuyện to tát, vấn đề lớn',
        pos: 'phrase'
      },
      {
        id: 'fr-4',
        startTime: 18.0,
        endTime: 24.0,
        en: "Joey doesn't share food! You know the rules!",
        vi: 'Joey này không bao giờ chia sẻ đồ ăn! Cậu thừa biết nguyên tắc rồi đấy!',
        keyWord: 'share',
        ipa: '/ʃeər/',
        meaning: 'chia sẻ, san sẻ',
        pos: 'verb'
      }
    ],
    vocabulary: [
      { term: 'reach over', ipa: '/riːtʃ ˈəʊ.vər/', meaning: 'với tay sang phía bên kia', timestamp: 8 },
      { term: 'what\'s the big deal', ipa: '/wɒts ðə bɪɡ diːl/', meaning: 'có gì to tát đâu chứ', timestamp: 15 },
      { term: 'share food', ipa: '/ʃeər fuːd/', meaning: 'chia sẻ thức ăn cùng người khác', timestamp: 20 }
    ]
  },

  // 29. TED-ED: HOW MEMORIES FORM
  {
    id: 'ted-ed-how-memories-form',
    youtubeId: 'yOgAbKJGrPE',
    title: 'How Memories Form and How We Lose Them - TED-Ed',
    channel: 'TED-Ed',
    category: 'ted_talks',
    level: 'B2 - Khá',
    accent: '🇺🇸 US',
    duration: '4:55',
    thumbnail: 'https://img.youtube.com/vi/yOgAbKJGrPE/hqdefault.jpg',
    description: 'Video giải thích cơ chế hình thành khớp thần kinh (synapse) và lưu trữ ký ức trong não bộ.',
    transcript: [
      {
        id: 'ted-1',
        startTime: 2.0,
        endTime: 8.0,
        en: 'Memories are what define our lives, shaping our identity and understanding of the world',
        vi: 'Ký ức là điều định nghĩa cuộc đời ta, định hình bản sắc và nhận thức về thế giới',
        keyWord: 'identity',
        ipa: '/aɪˈden.tɪ.ti/',
        meaning: 'bản sắc, danh tính cá nhân',
        pos: 'noun'
      },
      {
        id: 'ted-2',
        startTime: 8.5,
        endTime: 15.0,
        en: 'At the cellular level, memories are stored as connections between neurons called synapses',
        vi: 'Ở cấp độ tế bào, ký ức được lưu trữ dưới dạng các liên kết giữa các tế bào thần kinh gọi là xi-náp',
        keyWord: 'neurons',
        ipa: '/ˈnjʊə.rɒnz/',
        meaning: 'tế bào thần kinh',
        pos: 'noun'
      },
      {
        id: 'ted-3',
        startTime: 15.5,
        endTime: 22.0,
        en: 'Whenever you recall a memory, the neural pathway is reactivated and reinforced',
        vi: 'Mỗi khi bạn hồi tưởng lại một ký ức, con đường dẫn truyền thần kinh được kích hoạt lại và củng cố',
        keyWord: 'reinforced',
        ipa: '/ˌriː.ɪnˈfɔːst/',
        meaning: 'được củng cố, tăng cường',
        pos: 'verb'
      },
      {
        id: 'ted-4',
        startTime: 22.5,
        endTime: 30.0,
        en: 'This principle explains why spaced repetition is essential for long-term language learning',
        vi: 'Nguyên lý này giải thích vì sao lặp lại ngắt quãng là điều cốt lõi để học ngôn ngữ lâu dài',
        keyWord: 'repetition',
        ipa: '/ˌrep.əˈtɪʃ.ən/',
        meaning: 'sự lặp lại, ôn tập nhắc lại',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'shape one\'s identity', ipa: '/ʃeɪp wʌnz aɪˈden.tɪ.ti/', meaning: 'định hình bản sắc cá nhân', timestamp: 6 },
      { term: 'neural pathway', ipa: '/ˈnjʊə.rəl ˈpɑːθ.weɪ/', meaning: 'đường dẫn truyền thần kinh', timestamp: 18 },
      { term: 'spaced repetition', ipa: '/speɪst ˌrep.əˈtɪʃ.ən/', meaning: 'phương pháp lặp lại ngắt quãng (SRS)', timestamp: 26 }
    ]
  },

  // 30. STEVE JOBS STANFORD SPEECH
  {
    id: 'steve-jobs-stanford-speech',
    youtubeId: 'UF8uR6Z6KLc',
    title: "Steve Jobs' 2005 Stanford Commencement Address",
    channel: 'Stanford University',
    category: 'ted_talks',
    level: 'B1 - Trung bình',
    accent: '🇺🇸 US',
    duration: '15:04',
    thumbnail: 'https://img.youtube.com/vi/UF8uR6Z6KLc/hqdefault.jpg',
    description: 'Diễn văn lễ tốt nghiệp huyền thoại của Steve Jobs tại Stanford: Hãy cứ khát khao, hãy cứ dại khờ.',
    transcript: [
      {
        id: 'sj-1',
        startTime: 1.0,
        endTime: 6.5,
        en: "Your time is limited, so don't waste it living someone else's life",
        vi: 'Thời gian của bạn là hữu hạn, vì thế đừng lãng phí nó để sống cuộc đời của một ai khác',
        keyWord: 'limited',
        ipa: '/ˈlɪm.ɪ.tɪd/',
        meaning: 'hữu hạn, có giới hạn',
        pos: 'adjective'
      },
      {
        id: 'sj-2',
        startTime: 7.0,
        endTime: 13.5,
        en: "Don't be trapped by dogma — which is living with the results of other people's thinking",
        vi: 'Đừng mắc kẹt trong giáo điều — thứ vốn là việc sống dựa trên kết quả suy nghĩ của người khác',
        keyWord: 'dogma',
        ipa: '/ˈdɒɡ.mə/',
        meaning: 'giáo điều, định kiến',
        pos: 'noun'
      },
      {
        id: 'sj-3',
        startTime: 14.0,
        endTime: 21.0,
        en: "Don't let the noise of others' opinions drown out your own inner voice",
        vi: 'Đừng để sự ồn ào từ ý kiến của thiên hạ lấn át đi tiếng nói sâu thẳm bên trong bạn',
        keyWord: 'opinions',
        ipa: '/əˈpɪn.jənz/',
        meaning: 'những ý kiến, phán xét',
        pos: 'noun'
      },
      {
        id: 'sj-4',
        startTime: 21.5,
        endTime: 28.5,
        en: 'And most importantly, have the courage to follow your heart and intuition',
        vi: 'Và quan trọng nhất, hãy có đủ dũng khí để đi theo tiếng gọi trái tim và trực giác của bạn',
        keyWord: 'intuition',
        ipa: '/ˌɪn.tʃuːˈɪʃ.ən/',
        meaning: 'trực giác, linh cảm',
        pos: 'noun'
      },
      {
        id: 'sj-5',
        startTime: 29.0,
        endTime: 36.0,
        en: 'They somehow already know what you truly want to become. Stay hungry. Stay foolish',
        vi: 'Chúng bằng cách nào đó đã biết trước bạn thật sự muốn trở thành ai. Hãy cứ khát khao. Hãy cứ dại khờ',
        keyWord: 'hungry',
        ipa: '/ˈhʌŋ.ɡri/',
        meaning: 'đói khát, khát khao vươn lên',
        pos: 'adjective'
      }
    ],
    vocabulary: [
      { term: 'be trapped by dogma', ipa: '/biː træpt baɪ ˈdɒɡ.mə/', meaning: 'bị giam cầm trong những định kiến cũ kỹ', timestamp: 9 },
      { term: 'drown out', ipa: '/draʊn aʊt/', meaning: 'lấn át, dập tắt âm thanh khác', timestamp: 17 },
      { term: 'stay hungry, stay foolish', ipa: '/steɪ ˈhʌŋ.ɡri steɪ ˈfuː.lɪʃ/', meaning: 'hãy luôn khát khao học hỏi và đừng ngại dại khờ', timestamp: 33 }
    ]
  }
];
