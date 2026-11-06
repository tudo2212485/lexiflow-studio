// =========================================================================
// LEXIFLOW STUDIO - YOUTUBE VIDEO & MUSIC IMMERSION DATA
// 12 Curated Real YouTube Videos with Time-Synced Bilingual Subtitles,
// Gap-Fill Key Words, and Highlighted Contextual Vocabulary Decks
// =========================================================================

export const VIDEO_CATEGORIES = [
  { id: 'all', label: 'Tất cả', icon: '🌟' },
  { id: 'music', label: '🎵 US-UK Hits & Acoustic', icon: '🎵', desc: 'Nhạc Pop/Ballad rõ lời, cảm xúc sâu lắng' },
  { id: 'short_clips', label: '⚡ Short Clips & Slang', icon: '⚡', desc: 'Giao tiếp đời thực, phỏng vấn, tiếng lóng' },
  { id: 'movie', label: '🍿 Trích đoạn Phim & Sitcom', icon: '🍿', desc: 'Hội thoại kinh điển, ngữ điệu tự nhiên' },
  { id: 'ted_talks', label: '🧠 TED-Ed & Truyền Cảm Hứng', icon: '🧠', desc: 'Từ vựng học thuật, tư duy sâu sắc' }
];

export const INITIAL_VIDEOS = [
  // -----------------------------------------------------------------------
  // 1. ED SHEERAN - PERFECT
  // -----------------------------------------------------------------------
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
        vi: 'Nhưng lần này anh nhất định sẽ không từ bỏ em',
        keyWord: 'give up',
        ipa: '/ɡɪv ʌp/',
        meaning: 'từ bỏ, buông xuôi',
        pos: 'phrasal verb'
      },
      {
        id: 'p-8',
        startTime: 49.0,
        endTime: 56.0,
        en: 'Baby, I am dancing in the dark with you between my arms',
        vi: 'Em yêu à, anh đang khiêu vũ trong màn đêm, ôm trọn em trong vòng tay',
        keyWord: 'dancing',
        ipa: '/ˈdæn.sɪŋ/',
        meaning: 'khiêu vũ, nhảy múa',
        pos: 'verb'
      },
      {
        id: 'p-9',
        startTime: 57.0,
        endTime: 64.0,
        en: 'Barefoot on the grass, listening to our favorite song',
        vi: 'Chân trần trên thảm cỏ, cùng lắng nghe khúc ca yêu thích của đôi ta',
        keyWord: 'barefoot',
        ipa: '/ˈbeə.fʊt/',
        meaning: 'chân trần, không mang giày dép',
        pos: 'adjective'
      },
      {
        id: 'p-10',
        startTime: 65.0,
        endTime: 74.0,
        en: 'When you said you looked a mess, I whispered underneath my breath',
        vi: 'Khi em nói trông em thật lôi thôi, anh đã thì thầm thật khẽ',
        keyWord: 'whispered',
        ipa: '/ˈwɪs.pəd/',
        meaning: 'thì thầm, nói nhỏ',
        pos: 'verb'
      },
      {
        id: 'p-11',
        startTime: 74.5,
        endTime: 83.0,
        en: 'But you heard it, darling, you look perfect tonight',
        vi: 'Nhưng em đã nghe thấy: Em yêu à, đêm nay em trông thật hoàn hảo',
        keyWord: 'perfect',
        ipa: '/ˈpɜː.fɪkt/',
        meaning: 'hoàn hảo, tuyệt hảo',
        pos: 'adjective'
      }
    ],
    vocabulary: [
      { term: 'dive right in', ipa: '/daɪv raɪt ɪn/', meaning: 'bắt đầu làm gì một cách nhiệt tình không do dự', timestamp: 8 },
      { term: 'follow one\'s lead', ipa: '/ˈfɒl.əʊ wʌnz liːd/', meaning: 'làm theo sự hướng dẫn của ai đó', timestamp: 11 },
      { term: 'fall in love', ipa: '/fɔːl ɪn lʌv/', meaning: 'phải lòng, yêu ai đó say đắm', timestamp: 31 },
      { term: 'give up', ipa: '/ɡɪv ʌp/', meaning: 'từ bỏ, thôi cố gắng', timestamp: 44 },
      { term: 'barefoot', ipa: '/ˈbeə.fʊt/', meaning: 'chân trần, đi chân không', timestamp: 58 },
      { term: 'look a mess', ipa: '/lʊk ə mes/', meaning: 'trông lôi thôi, bù xù, chưa chuẩn bị chu đáo', timestamp: 66 },
      { term: 'underneath one\'s breath', ipa: '/ˌʌn.dəˈniːθ wʌnz breθ/', meaning: 'thì thầm rất nhỏ, lẩm bẩm trong miệng', timestamp: 70 },
      { term: 'perfect', ipa: '/ˈpɜː.fɪkt/', meaning: 'hoàn hảo, không tì vết', timestamp: 78 }
    ]
  },

  // -----------------------------------------------------------------------
  // 2. ADELE - SOMEONE LIKE YOU
  // -----------------------------------------------------------------------
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
    description: 'Ca khúc bất hủ về nỗi nhớ và sự buông bỏ, giúp luyện nghe các nguyên âm dài và ngữ điệu luyến láy.',
    transcript: [
      {
        id: 'sly-1',
        startTime: 14.0,
        endTime: 21.0,
        en: 'I heard that you are settled down',
        vi: 'Em nghe nói anh giờ đây đã ổn định cuộc sống',
        keyWord: 'settled down',
        ipa: '/ˈset.əld daʊn/',
        meaning: 'đã an cư, lập gia đình ổn định',
        pos: 'phrasal verb'
      },
      {
        id: 'sly-2',
        startTime: 21.5,
        endTime: 28.0,
        en: 'That you found a girl and you are married now',
        vi: 'Rằng anh đã tìm được một cô gái và giờ đã kết hôn',
        keyWord: 'married',
        ipa: '/ˈmær.id/',
        meaning: 'đã kết hôn',
        pos: 'adjective'
      },
      {
        id: 'sly-3',
        startTime: 28.5,
        endTime: 36.0,
        en: 'I heard that your dreams came true',
        vi: 'Em nghe nói mọi ước mơ của anh đều đã thành hiện thực',
        keyWord: 'dreams',
        ipa: '/driːmz/',
        meaning: 'những giấc mơ, ước mơ',
        pos: 'noun'
      },
      {
        id: 'sly-4',
        startTime: 36.5,
        endTime: 44.0,
        en: 'Guess she gave you things I did not give to you',
        vi: 'Có lẽ cô ấy đã trao cho anh những điều mà em không thể',
        keyWord: 'give',
        ipa: '/ɡɪv/',
        meaning: 'cho, tặng, trao',
        pos: 'verb'
      },
      {
        id: 'sly-5',
        startTime: 44.5,
        endTime: 51.5,
        en: 'Old friend, why are you so shy?',
        vi: 'Người bạn cũ ơi, sao anh lại ngại ngùng đến thế?',
        keyWord: 'shy',
        ipa: '/ʃaɪ/',
        meaning: 'e thẹn, ngại ngùng',
        pos: 'adjective'
      },
      {
        id: 'sly-6',
        startTime: 52.0,
        endTime: 61.0,
        en: "Ain't like you to hold back or hide from the light",
        vi: 'Đâu giống anh ngày nào, luôn giấu mình khỏi ánh sáng',
        keyWord: 'hold back',
        ipa: '/həʊld bæk/',
        meaning: 'kìm nén, ngập ngừng',
        pos: 'phrasal verb'
      },
      {
        id: 'sly-7',
        startTime: 62.0,
        endTime: 73.0,
        en: 'Never mind, I will find someone like you',
        vi: 'Đừng bận tâm nữa, rồi em cũng sẽ tìm được ai đó giống như anh',
        keyWord: 'someone',
        ipa: '/ˈsʌm.wʌn/',
        meaning: 'một ai đó',
        pos: 'pronoun'
      },
      {
        id: 'sly-8',
        startTime: 74.0,
        endTime: 82.0,
        en: 'I wish nothing but the best for you, too',
        vi: 'Em cũng không mong gì hơn ngoài những điều tốt đẹp nhất cho anh',
        keyWord: 'wish',
        ipa: '/wɪʃ/',
        meaning: 'cầu chúc, mong ước',
        pos: 'verb'
      }
    ],
    vocabulary: [
      { term: 'settle down', ipa: '/ˈset.əl daʊn/', meaning: 'ổn định cuộc sống gia đình lâu dài', timestamp: 18 },
      { term: 'come true', ipa: '/kʌm truː/', meaning: 'trở thành hiện thực', timestamp: 32 },
      { term: 'hold back', ipa: '/həʊld bæk/', meaning: 'ngập ngừng, kìm nén cảm xúc', timestamp: 56 },
      { term: 'never mind', ipa: '/ˈnev.ə maɪnd/', meaning: 'đừng bận tâm, không sao đâu', timestamp: 64 },
      { term: 'nothing but', ipa: '/ˈnʌθ.ɪŋ bʌt/', meaning: 'chỉ, không có gì ngoài', timestamp: 76 }
    ]
  },

  // -----------------------------------------------------------------------
  // 3. MAROON 5 - MEMORIES
  // -----------------------------------------------------------------------
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
    description: 'Giai điệu dựa trên bản Canon in D bất hủ, tôn vinh tình bạn và hoài niệm những ngày đã qua.',
    transcript: [
      {
        id: 'm5-1',
        startTime: 1.0,
        endTime: 7.0,
        en: "Here's to the ones that we got",
        vi: 'Nâng ly chúc mừng cho những người ta luôn có bên cạnh',
        keyWord: 'got',
        ipa: '/ɡɒt/',
        meaning: 'có được, sở hữu',
        pos: 'verb'
      },
      {
        id: 'm5-2',
        startTime: 7.5,
        endTime: 14.0,
        en: "Cheers to the wish you were here, but you're not",
        vi: 'Nâng ly cho lời ước anh đang ở đây, dẫu anh đã đi xa',
        keyWord: 'cheers',
        ipa: '/tʃɪəz/',
        meaning: 'cụng ly, nâng ly chúc mừng',
        pos: 'noun'
      },
      {
        id: 'm5-3',
        startTime: 14.5,
        endTime: 21.0,
        en: "'Cause the drinks bring back all the memories",
        vi: 'Vì chén rượu này gợi về bao ký ức ngọt ngào',
        keyWord: 'memories',
        ipa: '/ˈmem.ər.iz/',
        meaning: 'những kỷ niệm, ký ức',
        pos: 'noun'
      },
      {
        id: 'm5-4',
        startTime: 21.5,
        endTime: 28.0,
        en: "Of everything we've been through",
        vi: 'Về tất cả mọi điều mà chúng ta đã cùng nhau trải qua',
        keyWord: 'been through',
        ipa: '/biːn θruː/',
        meaning: 'đã trải qua, nếm trải',
        pos: 'phrasal verb'
      },
      {
        id: 'm5-5',
        startTime: 28.5,
        endTime: 36.0,
        en: 'Toast to the ones here today, toast to the ones that we lost on the way',
        vi: 'Cụng ly cho những ai còn ở lại hôm nay, và cho cả những người đã rời đi giữa chặng đường',
        keyWord: 'toast',
        ipa: '/təʊst/',
        meaning: 'nâng ly chúc mừng',
        pos: 'verb'
      }
    ],
    vocabulary: [
      { term: "here's to", ipa: '/hɪəz tuː/', meaning: 'nâng ly chúc mừng cho ai/điều gì', timestamp: 3 },
      { term: 'bring back', ipa: '/brɪŋ bæk/', meaning: 'gợi lại, mang ký ức trở lại', timestamp: 18 },
      { term: 'go through', ipa: '/ɡəʊ θruː/', meaning: 'trải qua khó khăn, hoạn nạn cùng nhau', timestamp: 24 },
      { term: 'on the way', ipa: '/ɒn ðə weɪ/', meaning: 'trên đường đi, dọc đường', timestamp: 34 }
    ]
  },

  // -----------------------------------------------------------------------
  // 4. TAYLOR SWIFT - LOVER
  // -----------------------------------------------------------------------
  {
    id: 'taylor-swift-lover',
    youtubeId: '-BjZmE2gtdo',
    title: 'Lover - Taylor Swift (Official Lyric Video)',
    channel: 'Taylor Swift',
    category: 'music',
    level: 'B1 - Trung bình',
    accent: '🇺🇸 US',
    duration: '3:58',
    thumbnail: 'https://img.youtube.com/vi/-BjZmE2gtdo/hqdefault.jpg',
    description: 'Ca từ thơ mộng đậm chất văn học, luyện các thì quá khứ và cách dùng từ gợi hình của nhạc sĩ tài ba Taylor Swift.',
    transcript: [
      {
        id: 'ts-1',
        startTime: 4.0,
        endTime: 11.0,
        en: 'We could leave the Christmas lights up til January',
        vi: 'Đôi mình có thể để đèn Giáng sinh chăng sáng mãi tận tháng Một',
        keyWord: 'lights',
        ipa: '/laɪts/',
        meaning: 'những bóng đèn trang trí',
        pos: 'noun'
      },
      {
        id: 'ts-2',
        startTime: 11.5,
        endTime: 18.0,
        en: 'This is our place, we make the rules',
        vi: 'Đây là thế giới riêng của đôi ta, ta tự đặt ra luật lệ cho mình',
        keyWord: 'rules',
        ipa: '/ruːlz/',
        meaning: 'các quy tắc, luật lệ',
        pos: 'noun'
      },
      {
        id: 'ts-3',
        startTime: 18.5,
        endTime: 26.0,
        en: 'And there is a dazzling haze, a mysterious way about you, dear',
        vi: 'Và luôn có một màn sương lấp lánh, một nét bí ẩn cuốn hút quanh em, người yêu dấu',
        keyWord: 'mysterious',
        ipa: '/mɪˈstɪə.ri.əs/',
        meaning: 'huyền bí, bí ẩn',
        pos: 'adjective'
      },
      {
        id: 'ts-4',
        startTime: 26.5,
        endTime: 36.0,
        en: 'Have I known you twenty seconds or twenty years?',
        vi: 'Liệu anh đã quen em mới hai mươi giây hay đã tròn hai mươi năm rồi?',
        keyWord: 'seconds',
        ipa: '/ˈsek.əndz/',
        meaning: 'những giây',
        pos: 'noun'
      },
      {
        id: 'ts-5',
        startTime: 36.5,
        endTime: 46.0,
        en: 'Can I go where you go? Can we always be this close forever and ever?',
        vi: 'Liệu em có thể theo anh tới mọi nơi? Liệu đôi ta có thể mãi quấn quýt bên nhau như thế này?',
        keyWord: 'close',
        ipa: '/kləʊs/',
        meaning: 'thân mật, gắn bó gần gũi',
        pos: 'adjective'
      }
    ],
    vocabulary: [
      { term: 'make the rules', ipa: '/meɪk ðə ruːlz/', meaning: 'tự đặt ra quy tắc sống riêng cho mình', timestamp: 14 },
      { term: 'dazzling', ipa: '/ˈdæz.lɪŋ/', meaning: 'sáng chói, lộng lẫy mê hoặc', timestamp: 20 },
      { term: 'haze', ipa: '/heɪz/', meaning: 'màn sương mù, cảm giác mơ hồ', timestamp: 22 },
      { term: 'forever and ever', ipa: '/fəˈrev.ər ənd ˈev.ər/', meaning: 'mãi mãi về sau', timestamp: 42 }
    ]
  },

  // -----------------------------------------------------------------------
  // 5. SHORT CLIPS: STREET INTERVIEW - LIFE ADVICE
  // -----------------------------------------------------------------------
  {
    id: 'street-interview-life-advice',
    youtubeId: 'l-gQLqv9f4o',
    title: "Best Advice You've Ever Heard - NYC Street Interview",
    channel: 'Street Wisdom US',
    category: 'short_clips',
    level: 'B1 - Trung bình',
    accent: '🇺🇸 US',
    duration: '2:10',
    thumbnail: 'https://img.youtube.com/vi/l-gQLqv9f4o/hqdefault.jpg',
    description: 'Phỏng vấn người dân New York trên phố với tốc độ nói tự nhiên, nhiều cụm từ giao tiếp thời thượng.',
    transcript: [
      {
        id: 'si-1',
        startTime: 1.0,
        endTime: 5.5,
        en: "Excuse me, what is the best piece of advice anyone has ever given you?",
        vi: "Xin lỗi anh, lời khuyên hay nhất mà ai đó từng dành cho anh là gì vậy?",
        keyWord: 'advice',
        ipa: '/ədˈvaɪs/',
        meaning: 'lời khuyên, chỉ dẫn',
        pos: 'noun'
      },
      {
        id: 'si-2',
        startTime: 6.0,
        endTime: 12.0,
        en: "Don't compare your Chapter 1 to somebody else's Chapter 20.",
        vi: "Đừng so sánh Chương 1 của cuộc đời bạn với Chương 20 của người khác.",
        keyWord: 'compare',
        ipa: '/kəmˈpeər/',
        meaning: 'so sánh, đối chiếu',
        pos: 'verb'
      },
      {
        id: 'si-3',
        startTime: 12.5,
        endTime: 18.0,
        en: "Everyone moves at their own pace in life. Focus on your lane.",
        vi: "Mỗi người đều bước đi với nhịp điệu riêng trong đời. Hãy tập trung vào làn đường của chính bạn.",
        keyWord: 'pace',
        ipa: '/peɪs/',
        meaning: 'tốc độ, nhịp bước',
        pos: 'noun'
      },
      {
        id: 'si-4',
        startTime: 18.5,
        endTime: 25.0,
        en: "That hits home. You just gotta trust the process and stay consistent.",
        vi: "Câu đó thấm thía thật đấy! Bạn chỉ cần tin vào lộ trình và duy trì sự kiên định mỗi ngày.",
        keyWord: 'consistent',
        ipa: '/kənˈsɪs.tənt/',
        meaning: 'kiên định, nhất quán',
        pos: 'adjective'
      }
    ],
    vocabulary: [
      { term: 'piece of advice', ipa: '/piːs əv ədˈvaɪs/', meaning: 'một lời khuyên (danh từ không đếm được)', timestamp: 3 },
      { term: 'at one\'s own pace', ipa: '/ət wʌnz əʊn peɪs/', meaning: 'theo tốc độ phù hợp với riêng bản thân', timestamp: 14 },
      { term: 'focus on your lane', ipa: '/ˈfəʊ.kəs ɒn jɔːr leɪn/', meaning: 'chỉ tập trung vào việc của mình, không bận tâm người khác', timestamp: 17 },
      { term: 'hit home', ipa: '/hɪt həʊm/', meaning: 'chạm vào đúng tâm can, cảm thấy vô cùng thấm thía', timestamp: 19 },
      { term: 'trust the process', ipa: '/trʌst ðə ˈprəʊ.ses/', meaning: 'hãy kiên nhẫn tin vào quá trình rèn luyện', timestamp: 22 }
    ]
  },

  // -----------------------------------------------------------------------
  // 6. SHORT CLIPS: COFFEE SHOP ORDERING ROLEPLAY
  // -----------------------------------------------------------------------
  {
    id: 'coffee-shop-roleplay',
    youtubeId: 'wD_KSpbQ554',
    title: 'How to Order Coffee Like a Native Speaker in America',
    channel: 'Real Life English',
    category: 'short_clips',
    level: 'A2 - Dễ',
    accent: '🇺🇸 US',
    duration: '2:40',
    thumbnail: 'https://img.youtube.com/vi/wD_KSpbQ554/hqdefault.jpg',
    description: 'Học cách gọi cà phê tự tin tại Starbucks/quán cà phê Mỹ: cách chọn size, sữa hạt và thanh toán gọn lẹ.',
    transcript: [
      {
        id: 'cs-1',
        startTime: 2.0,
        endTime: 6.0,
        en: "Hi there! What can I get started for you today?",
        vi: "Xin chào quý khách! Hôm nay em có thể lấy món gì cho anh ạ?",
        keyWord: 'started',
        ipa: '/ˈstɑː.tɪd/',
        meaning: 'bắt đầu, khởi đầu',
        pos: 'verb'
      },
      {
        id: 'cs-2',
        startTime: 6.5,
        endTime: 12.0,
        en: "Could I get a medium iced caramel macchiato with oat milk?",
        vi: "Cho mình một ly caramel macchiato đá cỡ vừa, đổi sang sữa yến mạch nhé?",
        keyWord: 'oat milk',
        ipa: '/əʊt mɪlk/',
        meaning: 'sữa yến mạch',
        pos: 'noun'
      },
      {
        id: 'cs-3',
        startTime: 12.5,
        endTime: 17.5,
        en: "Sure thing! Do you want whipped cream on top of that?",
        vi: "Dạ chắc chắn rồi! Anh có muốn thêm kem tươi béo lên trên không ạ?",
        keyWord: 'whipped cream',
        ipa: '/wɪpt kriːm/',
        meaning: 'kem tươi đánh bông',
        pos: 'noun'
      },
      {
        id: 'cs-4',
        startTime: 18.0,
        endTime: 23.0,
        en: "No, please hold the whip. And could you make it half-sweet?",
        vi: "Không, đừng cho kem nhé. Và làm giúp mình giảm một nửa đường được không?",
        keyWord: 'hold',
        ipa: '/həʊld/',
        meaning: 'bỏ qua, đừng cho vào món',
        pos: 'verb'
      },
      {
        id: 'cs-5',
        startTime: 23.5,
        endTime: 28.0,
        en: "You got it! Is that for here or to go?",
        vi: "Dạ được ngay ạ! Anh dùng tại quán hay mang đi?",
        keyWord: 'to go',
        ipa: '/tuː ɡəʊ/',
        meaning: 'mang đi (takeaway)',
        pos: 'phrase'
      }
    ],
    vocabulary: [
      { term: 'can I get started for you', ipa: '/kən aɪ ɡet ˈstɑː.tɪd/', meaning: 'lời chào thân thiện của nhân viên quán ăn Mỹ', timestamp: 4 },
      { term: 'hold the...', ipa: '/həʊld ðə/', meaning: 'không cần cho thêm nguyên liệu nào đó (vd: hold the ice)', timestamp: 19 },
      { term: 'half-sweet', ipa: '/hɑːf swiːt/', meaning: 'ít ngọt, giảm 50% đường', timestamp: 21 },
      { term: 'for here or to go', ipa: '/fɔː hɪər ɔː tuː ɡəʊ/', meaning: 'dùng tại đây hay mang đi', timestamp: 26 }
    ]
  },

  // -----------------------------------------------------------------------
  // 7. MOVIE: THE PURSUIT OF HAPPYNESS
  // -----------------------------------------------------------------------
  {
    id: 'movie-pursuit-of-happyness',
    youtubeId: 'd8kHwt_qg3A',
    title: "Don't Ever Let Someone Tell You - The Pursuit of Happyness",
    channel: 'Sony Pictures',
    category: 'movie',
    level: 'B1 - Trung bình',
    accent: '🇺🇸 US',
    duration: '2:15',
    thumbnail: 'https://img.youtube.com/vi/d8kHwt_qg3A/hqdefault.jpg',
    description: 'Trích đoạn kinh điển của Will Smith dạy con trai về ước mơ và sự kiên định trước những định kiến.',
    transcript: [
      {
        id: 'poh-1',
        startTime: 3.0,
        endTime: 8.5,
        en: "Don't ever let somebody tell you you can't do something. Not even me.",
        vi: "Đừng bao giờ để bất kỳ ai nói rằng con không thể làm được điều gì. Kể cả là bố.",
        keyWord: 'somebody',
        ipa: '/ˈsʌm.bə.di/',
        meaning: 'bất kỳ ai, một người nào đó',
        pos: 'pronoun'
      },
      {
        id: 'poh-2',
        startTime: 9.0,
        endTime: 13.0,
        en: "You got a dream... You gotta protect it.",
        vi: "Con có một ước mơ... Con phải bảo vệ nó đến cùng.",
        keyWord: 'protect',
        ipa: '/prəˈtekt/',
        meaning: 'bảo vệ, gìn giữ',
        pos: 'verb'
      },
      {
        id: 'poh-3',
        startTime: 14.0,
        endTime: 19.5,
        en: "People can't do something themselves, they wanna tell you you can't do it.",
        vi: "Khi người ta không làm được điều gì đó, họ sẽ muốn nói rằng con cũng chẳng thể làm được đâu.",
        keyWord: 'themselves',
        ipa: '/ðəmˈselvz/',
        meaning: 'chính bản thân họ',
        pos: 'pronoun'
      },
      {
        id: 'poh-4',
        startTime: 20.0,
        endTime: 25.0,
        en: "If you want something, go get it. Period.",
        vi: "Nếu con thật sự khao khát điều gì, hãy đứng lên và giành lấy nó. Chấm hết.",
        keyWord: 'period',
        ipa: '/ˈpɪə.ri.əd/',
        meaning: 'chấm hết, không bàn cãi nữa',
        pos: 'noun'
      }
    ],
    vocabulary: [
      { term: 'not even', ipa: '/nɒt ˈiː.vən/', meaning: 'ngay cả... cũng không', timestamp: 6 },
      { term: 'gotta', ipa: '/ˈɡɒt.ə/', meaning: 'phải làm gì (dạng nói tắt của got to / have to)', timestamp: 11 },
      { term: 'protect', ipa: '/prəˈtekt/', meaning: 'che chở, bảo vệ kiên cường', timestamp: 12 },
      { term: 'period', ipa: '/ˈpɪə.ri.əd/', meaning: 'chấm hết! Khẳng định dứt khoát không tranh luận', timestamp: 24 }
    ]
  },

  // -----------------------------------------------------------------------
  // 8. MOVIE: FRIENDS - JOEY DOESN'T SHARE FOOD
  // -----------------------------------------------------------------------
  {
    id: 'movie-friends-joey-food',
    youtubeId: '1_c8oQ6Z9pI',
    title: "Joey Doesn't Share Food! - Friends Iconic Scene",
    channel: 'Friends Official',
    category: 'movie',
    level: 'A2 - Dễ',
    accent: '🇺🇸 US',
    duration: '2:50',
    thumbnail: 'https://img.youtube.com/vi/1_c8oQ6Z9pI/hqdefault.jpg',
    description: 'Trích đoạn hài hước nhất loạt phim Friends, học cách biểu lộ cảm xúc ngạc nhiên, phản ứng dí dỏm trong giao tiếp.',
    transcript: [
      {
        id: 'fr-1',
        startTime: 2.0,
        endTime: 7.0,
        en: "So how was your date with Sarah last night?",
        vi: "Thế buổi hẹn hò của cậu với Sarah tối qua thế nào rồi?",
        keyWord: 'date',
        ipa: '/deɪt/',
        meaning: 'buổi hẹn hò',
        pos: 'noun'
      },
      {
        id: 'fr-2',
        startTime: 7.5,
        endTime: 13.0,
        en: "It was good, until she reached over and took a fry from my plate!",
        vi: "Mọi thứ đều tuyệt, cho đến khi cô ấy thò tay sang đĩa của tớ và bốc mất một miếng khoai tây chiên!",
        keyWord: 'reached over',
        ipa: '/riːtʃt ˈəʊ.vər/',
        meaning: 'với tay sang',
        pos: 'phrasal verb'
      },
      {
        id: 'fr-3',
        startTime: 14.0,
        endTime: 20.0,
        en: "You know the rule! Joey does not share food!",
        vi: "Cậu biết luật thép rồi đấy! Joey này tuyệt đối không bao giờ chia sẻ đồ ăn!",
        keyWord: 'share',
        ipa: '/ʃeər/',
        meaning: 'chia sẻ, san sẻ',
        pos: 'verb'
      }
    ],
    vocabulary: [
      { term: 'reach over', ipa: '/riːtʃ ˈəʊ.vər/', meaning: 'với tay qua bàn hoặc sang phía người khác', timestamp: 9 },
      { term: 'share food', ipa: '/ʃeər fuːd/', meaning: 'ăn chung đồ ăn', timestamp: 17 }
    ]
  },

  // -----------------------------------------------------------------------
  // 9. TED-ED: HOW MEMORIES FORM AND HOW WE LOSE THEM
  // -----------------------------------------------------------------------
  {
    id: 'ted-ed-how-memories-form',
    youtubeId: 'yOgAbKJGrPE',
    title: 'How Memories Form and How We Lose Them - TED-Ed',
    channel: 'TED-Ed',
    category: 'ted_talks',
    level: 'B2 - Khó',
    accent: '🇺🇸 US',
    duration: '4:50',
    thumbnail: 'https://img.youtube.com/vi/yOgAbKJGrPE/hqdefault.jpg',
    description: 'Bài giảng khoa học tuyệt đẹp từ TED-Ed giải thích cơ chế nơ-ron não bộ và thuật toán ghi nhớ dài hạn Spaced Repetition.',
    transcript: [
      {
        id: 'ted-1',
        startTime: 4.0,
        endTime: 10.0,
        en: "Have you ever wondered how you remember the lyrics to a song you have not heard in years?",
        vi: "Bạn đã bao giờ tự hỏi làm sao mình có thể nhớ lời một bài hát suốt nhiều năm chưa từng nghe lại?",
        keyWord: 'wondered',
        ipa: '/ˈwʌn.dəd/',
        meaning: 'tự hỏi, băn khoăn',
        pos: 'verb'
      },
      {
        id: 'ted-2',
        startTime: 10.5,
        endTime: 16.5,
        en: "While at the same time forgetting where you left your keys ten minutes ago?",
        vi: "Trong khi cùng lúc đó bạn lại quên mất mình đã để chùm chìa khóa ở đâu chỉ mười phút trước?",
        keyWord: 'forgetting',
        ipa: '/fəˈɡet.ɪŋ/',
        meaning: 'quên, không nhớ',
        pos: 'verb'
      },
      {
        id: 'ted-3',
        startTime: 17.0,
        endTime: 24.0,
        en: "Memory is a complex system involving multiple regions of the human brain.",
        vi: "Trí nhớ là một hệ thống phức hợp liên quan đến nhiều vùng khác nhau trong bộ não con người.",
        keyWord: 'complex',
        ipa: '/ˈkɒm.pleks/',
        meaning: 'phức tạp, phức hợp',
        pos: 'adjective'
      },
      {
        id: 'ted-4',
        startTime: 24.5,
        endTime: 32.0,
        en: "When neurons communicate frequently, their synaptic connections strengthen.",
        vi: "Khi các tế bào thần kinh giao tiếp thường xuyên, các liên kết khớp thần kinh sẽ ngày càng được củng cố.",
        keyWord: 'strengthen',
        ipa: '/ˈstreŋ.θən/',
        meaning: 'củng cố, tăng cường sức mạnh',
        pos: 'verb'
      }
    ],
    vocabulary: [
      { term: 'have you ever wondered', ipa: '/hæv juː ˈev.ər ˈwʌn.dəd/', meaning: 'bạn đã bao giờ tự hỏi', timestamp: 6 },
      { term: 'at the same time', ipa: '/ət ðə seɪm taɪm/', meaning: 'đồng thời, cùng lúc đó', timestamp: 12 },
      { term: 'complex system', ipa: '/ˈkɒm.pleks ˈsɪs.təm/', meaning: 'hệ thống phức hợp', timestamp: 19 },
      { term: 'strengthen', ipa: '/ˈstreŋ.θən/', meaning: 'làm cho kiên cố, củng cố vững chắc', timestamp: 28 }
    ]
  },

  // -----------------------------------------------------------------------
  // 10. TED-TALKS: STEVE JOBS - STAY HUNGRY, STAY FOOLISH
  // -----------------------------------------------------------------------
  {
    id: 'steve-jobs-stanford-speech',
    youtubeId: 'UF8uR6Z6KLc',
    title: "Steve Jobs' 2005 Stanford Commencement Address",
    channel: 'Stanford University',
    category: 'ted_talks',
    level: 'B1 - Trung bình',
    accent: '🇺🇸 US',
    duration: '5:02',
    thumbnail: 'https://img.youtube.com/vi/UF8uR6Z6KLc/hqdefault.jpg',
    description: 'Diễn văn lễ tốt nghiệp nổi tiếng nhất lịch sử nhân loại với thông điệp: "Hãy cứ khao khát, hãy cứ dại khờ".',
    transcript: [
      {
        id: 'sj-1',
        startTime: 5.0,
        endTime: 11.0,
        en: "I am honored to be with you today at your commencement from one of the finest universities.",
        vi: "Tôi rất vinh dự được có mặt cùng các bạn hôm nay tại buổi lễ tốt nghiệp của một trong những trường đại học danh giá nhất thế giới.",
        keyWord: 'honored',
        ipa: '/ˈɒn.əd/',
        meaning: 'vinh dự, tự hào',
        pos: 'adjective'
      },
      {
        id: 'sj-2',
        startTime: 12.0,
        endTime: 17.0,
        en: "Your time is limited, so don't waste it living someone else's life.",
        vi: "Thời gian của bạn là hữu hạn, vì thế đừng lãng phí nó để sống cuộc đời của một ai khác.",
        keyWord: 'limited',
        ipa: '/ˈlɪm.ɪ.tɪd/',
        meaning: 'có giới hạn, hữu hạn',
        pos: 'adjective'
      },
      {
        id: 'sj-3',
        startTime: 18.0,
        endTime: 24.0,
        en: "Don't let the noise of others' opinions drown out your own inner voice.",
        vi: "Đừng để những lời ồn ào từ định kiến của người khác át đi tiếng nói sâu thẳm bên trong bạn.",
        keyWord: 'drown out',
        ipa: '/draʊn aʊt/',
        meaning: 'lấn át, dìm tiếng ồn khác',
        pos: 'phrasal verb'
      },
      {
        id: 'sj-4',
        startTime: 25.0,
        endTime: 31.0,
        en: "Stay hungry. Stay foolish.",
        vi: "Hãy cứ khát khao. Hãy cứ dại khờ.",
        keyWord: 'foolish',
        ipa: '/ˈfuː.lɪʃ/',
        meaning: 'dại khờ, không toan tính vụ lợi',
        pos: 'adjective'
      }
    ],
    vocabulary: [
      { term: 'commencement', ipa: '/kəˈmens.mənt/', meaning: 'lễ tốt nghiệp đại học', timestamp: 8 },
      { term: 'drown out', ipa: '/draʊn aʊt/', meaning: 'tiếng ồn lấn át khiến không nghe thấy gì khác', timestamp: 21 },
      { term: 'inner voice', ipa: '/ˈɪn.ər vɔɪs/', meaning: 'tiếng nói nội tâm, trực giác mách bảo', timestamp: 23 },
      { term: 'stay hungry', ipa: '/steɪ ˈhʌŋ.ɡri/', meaning: 'luôn khao khát học hỏi vươn lên', timestamp: 26 }
    ]
  }
];
