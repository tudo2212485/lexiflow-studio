import fs from 'fs';
import path from 'path';

// Read existing decks and grammar lessons
const existingDecks = JSON.parse(fs.readFileSync(path.resolve('src/data/vocab_decks.json'), 'utf-8'));
const existingGrammar = JSON.parse(fs.readFileSync(path.resolve('src/data/grammar_lessons.json'), 'utf-8'));

// Flatten all cards for pool
const allCards = [];
existingDecks.forEach(d => {
  if (d.cards && Array.isArray(d.cards)) {
    allCards.push(...d.cards);
  }
});

console.log(`Total available card pool: ${allCards.length}`);

// Helper to create a subdeck
function createSubdeck(id, order, title, viTitle, cardSubset, lastStudied = 'Hôm qua') {
  const cards = cardSubset.map((c, i) => ({
    ...c,
    id: `${id}-c${i + 1}`,
    subdeckId: id,
    subdeckTitle: viTitle,
    status: c.status || (i % 3 === 0 ? 'mastered' : i % 2 === 0 ? 'learning' : 'due'),
    intervalDays: c.intervalDays || (i % 3 === 0 ? 21 : i % 2 === 0 ? 4 : 0),
    reviewCount: c.reviewCount || (i % 3 === 0 ? 4 : 1),
    lastReviewed: c.lastReviewed || (i % 2 === 0 ? '2026-10-22' : '2026-10-15')
  }));

  const masteredCount = cards.filter(c => c.status === 'mastered').length;
  const learningCount = cards.filter(c => c.status === 'learning').length;
  const dueCount = cards.filter(c => c.status === 'due').length;

  return {
    id,
    order,
    title: `${order}. ${viTitle}`,
    enTitle: title,
    viTitle,
    totalWords: cards.length,
    masteredCount,
    learningCount,
    dueCount,
    progressPercent: Math.round(((masteredCount + learningCount * 0.5) / Math.max(1, cards.length)) * 100),
    lastStudied,
    cards
  };
}

// Slice pool helper
let poolIdx = 0;
function getCards(count) {
  const res = [];
  for (let i = 0; i < count; i++) {
    res.push(allCards[(poolIdx + i) % allCards.length]);
  }
  poolIdx = (poolIdx + count) % allCards.length;
  return res;
}

// ========================
// COURSE 1: 1000 TỪ THÔNG DỤNG & GIAO TIẾP (20 SUB-DECKS)
// ========================
const course1SubdeckDefs = [
  { en: "Family & Relationships", vi: "Gia đình và quan hệ" },
  { en: "Personality & Emotions", vi: "Tính cách và cảm xúc" },
  { en: "Communication & Language", vi: "Giao tiếp và ngôn ngữ" },
  { en: "Travel & Destinations", vi: "Du lịch và điểm đến" },
  { en: "Time & Growth", vi: "Thời gian và phát triển" },
  { en: "Food & Dining", vi: "Đồ ăn và nhà hàng" },
  { en: "Shopping & Finance", vi: "Mua sắm và tiền bạc" },
  { en: "Work & Office", vi: "Công việc và văn phòng" },
  { en: "Home & Daily Living", vi: "Nhà cửa và sinh hoạt" },
  { en: "Weather & Nature", vi: "Thời tiết và thiên nhiên" },
  { en: "Education & Learning", vi: "Giáo dục và học tập" },
  { en: "Traffic & Directions", vi: "Giao thông và hỏi đường" },
  { en: "Hobbies & Entertainment", vi: "Sở thích và giải trí" },
  { en: "Technology & Internet", vi: "Công nghệ và internet" },
  { en: "Media & News", vi: "Truyền thông và báo chí" },
  { en: "Art & Culture", vi: "Nghệ thuật và văn hóa" },
  { en: "Health & Nutrition", vi: "Sức khỏe và dinh dưỡng" },
  { en: "Society & Community", vi: "Xã hội và cộng đồng" },
  { en: "Animals & Agriculture", vi: "Động vật và nông nghiệp" },
  { en: "Science & Innovation", vi: "Khoa học và đổi mới" }
];

const course1Subdecks = course1SubdeckDefs.map((def, idx) => {
  return createSubdeck(
    `c1-sub-${idx + 1}`,
    idx + 1,
    def.en,
    def.vi,
    getCards(12),
    idx < 3 ? 'Hôm nay' : idx < 7 ? '2 ngày trước' : 'Chưa học'
  );
});

// ========================
// COURSE 2: TOEIC 600 ESSENTIAL WORDS (10 SUB-DECKS)
// ========================
const course2SubdeckDefs = [
  { en: "Contracts & Agreements", vi: "Hợp đồng & Thỏa thuận" },
  { en: "Marketing & Promotion", vi: "Tiếp thị & Khuyến mãi" },
  { en: "Warranties & Guarantees", vi: "Bảo hành & Cam kết" },
  { en: "Business Planning", vi: "Kế hoạch kinh doanh" },
  { en: "Conferences & Events", vi: "Hội nghị & Sự kiện" },
  { en: "Computers & IT", vi: "Máy tính & Công nghệ thông tin" },
  { en: "Office Technology", vi: "Thiết bị văn phòng" },
  { en: "Accounting & Finance", vi: "Kế toán & Báo cáo tài chính" },
  { en: "Personnel & HR", vi: "Nhân sự & Tuyển dụng" },
  { en: "Purchasing & Shipping", vi: "Mua hàng & Giao vận" }
];

const course2Subdecks = course2SubdeckDefs.map((def, idx) => {
  return createSubdeck(
    `c2-sub-${idx + 1}`,
    idx + 1,
    def.en,
    def.vi,
    getCards(15),
    idx < 2 ? 'Hôm nay' : '3 ngày trước'
  );
});

// ========================
// COURSE 3: TOEIC PART 1 VOCABULARY (5 SUB-DECKS)
// ========================
const course3SubdeckDefs = [
  { en: "Photographs: Common Actions", vi: "Hành động thường gặp trong ảnh" },
  { en: "Office & Indoor Objects", vi: "Đồ vật văn phòng & trong nhà" },
  { en: "Outdoor & Construction", vi: "Khung cảnh ngoài trời & công trường" },
  { en: "Traffic & Vehicles", vi: "Giao thông & phương tiện" },
  { en: "Body Postures & Hand Actions", vi: "Động tác tay & tư thế người" }
];
const course3Subdecks = course3SubdeckDefs.map((def, idx) =>
  createSubdeck(`c3-sub-${idx + 1}`, idx + 1, def.en, def.vi, getCards(10), '4 ngày trước')
);

// ========================
// COURSE 4: TOEIC PART 2 VOCABULARY (5 SUB-DECKS)
// ========================
const course4SubdeckDefs = [
  { en: "Who / Whose Questions", vi: "Phản xạ câu hỏi Who & Người phụ trách" },
  { en: "Where / When Questions", vi: "Phản xạ câu hỏi Where & When (Địa điểm, giờ giấc)" },
  { en: "Why / How Questions", vi: "Phản xạ câu hỏi Why & How (Lý do, phương thức)" },
  { en: "Suggestions & Offers", vi: "Lời mời, đề xuất & rủ rê (Why don't we...)" },
  { en: "Indirect Responses & Traps", vi: "Bẫy trả lời gián tiếp điểm 700+" }
];
const course4Subdecks = course4SubdeckDefs.map((def, idx) =>
  createSubdeck(`c4-sub-${idx + 1}`, idx + 1, def.en, def.vi, getCards(10), '5 ngày trước')
);

// ========================
// COURSE 5: TOEIC PART 3 & 4 VOCABULARY (5 SUB-DECKS)
// ========================
const course5SubdeckDefs = [
  { en: "Reservations & Flights", vi: "Đặt chỗ khách sạn, vé máy bay & du lịch" },
  { en: "Company Meetings & Talks", vi: "Cuộc họp & thông báo nội bộ công ty" },
  { en: "Customer Complaints & Orders", vi: "Khiếu nại khách hàng, đơn hàng & bảo trì" },
  { en: "Weather & Radio Broadcasts", vi: "Dự báo thời tiết & bản tin phát thanh" },
  { en: "Project Deadlines & Delays", vi: "Tiến độ dự án, hạn chót & lịch dời" }
];
const course5Subdecks = course5SubdeckDefs.map((def, idx) =>
  createSubdeck(`c5-sub-${idx + 1}`, idx + 1, def.en, def.vi, getCards(10), 'Tuần trước')
);

// ========================
// COURSE 6: SOFTWARE ENGINEERS (.NET, CLEAN ARCH & AI) (6 SUB-DECKS)
// ========================
const course6SubdeckDefs = [
  { en: "Clean Architecture & Design Patterns", vi: "Kiến trúc sạch & Mẫu thiết kế phần mềm" },
  { en: "Backend APIs & Microservices", vi: "Thiết kế API RESTful & Dịch vụ phân tán" },
  { en: "Database, SQL & ORM Performance", vi: "Cơ sở dữ liệu, Entity Framework & Tối ưu truy vấn" },
  { en: "Git, CI/CD & DevOps Pipeline", vi: "Quy trình Git flow & Tự động hóa CI/CD" },
  { en: "Debugging, Exception & QA Testing", vi: "Xử lý lỗi ngoại lệ & Viết Unit Test" },
  { en: "AI Integration & LLM Systems", vi: "Tích hợp AI, Prompt Engineering & RAG" }
];
const course6Subdecks = course6SubdeckDefs.map((def, idx) =>
  createSubdeck(`c6-sub-${idx + 1}`, idx + 1, def.en, def.vi, getCards(12), 'Hôm nay')
);

// Assemble 6 Courses
const vocabCourses = [
  {
    id: "course-1000-common",
    title: "1000 Từ Tiếng Anh Thông Dụng & Giao Tiếp",
    shortTitle: "1000 Từ Thông Dụng",
    icon: "📘",
    category: "Lấy lại gốc & Đời sống",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    desc: "Bộ từ vựng cốt lõi gồm 20 chủ đề thực tế giúp diễn đạt 85% tình huống giao tiếp đời sống hàng ngày.",
    subdecks: course1Subdecks,
    dueCardsCount: course1Subdecks.reduce((sum, s) => sum + s.dueCount, 0),
    totalWords: course1Subdecks.reduce((sum, s) => sum + s.totalWords, 0),
    learnedPercent: 38,
    masteredPercent: 18
  },
  {
    id: "course-toeic-600",
    title: "TOEIC 600 Essential Words",
    shortTitle: "TOEIC 600 Cốt Lõi",
    icon: "🏆",
    category: "Luyện thi TOEIC",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    desc: "10 chủ đề kinh doanh, hợp đồng, tiếp thị, văn phòng và nhân sự bắt buộc phải thuộc để đạt 600+ TOEIC.",
    subdecks: course2Subdecks,
    dueCardsCount: course2Subdecks.reduce((sum, s) => sum + s.dueCount, 0),
    totalWords: course2Subdecks.reduce((sum, s) => sum + s.totalWords, 0),
    learnedPercent: 42,
    masteredPercent: 20
  },
  {
    id: "course-toeic-part1",
    title: "TOEIC Part 1 Vocabulary",
    shortTitle: "TOEIC Part 1 (Ảnh)",
    icon: "📸",
    category: "Luyện thi TOEIC",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    desc: "Từ vựng miêu tả tranh ảnh: hành động tay chân, vị trí đồ vật văn phòng và quang cảnh ngoài trời.",
    subdecks: course3Subdecks,
    dueCardsCount: course3Subdecks.reduce((sum, s) => sum + s.dueCount, 0),
    totalWords: course3Subdecks.reduce((sum, s) => sum + s.totalWords, 0),
    learnedPercent: 50,
    masteredPercent: 25
  },
  {
    id: "course-toeic-part2",
    title: "TOEIC Part 2 Vocabulary",
    shortTitle: "TOEIC Part 2 (Hỏi - Đáp)",
    icon: "🎧",
    category: "Luyện thi TOEIC",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    desc: "Từ khóa phản xạ tức thì cho các dạng câu hỏi Who, Where, When, Why, How và bẫy đồng âm lừa thí sinh.",
    subdecks: course4Subdecks,
    dueCardsCount: course4Subdecks.reduce((sum, s) => sum + s.dueCount, 0),
    totalWords: course4Subdecks.reduce((sum, s) => sum + s.totalWords, 0),
    learnedPercent: 30,
    masteredPercent: 15
  },
  {
    id: "course-toeic-part3-4",
    title: "TOEIC Part 3 & 4 Vocabulary",
    shortTitle: "TOEIC Part 3 & 4 (Hội thoại)",
    icon: "🎙️",
    category: "Luyện thi TOEIC",
    badgeColor: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    desc: "Từ vựng chuyên sâu cho các đoạn đối thoại công sở, dịch vụ khách hàng, đặt vé máy bay và bản tin phát thanh.",
    subdecks: course5Subdecks,
    dueCardsCount: course5Subdecks.reduce((sum, s) => sum + s.dueCount, 0),
    totalWords: course5Subdecks.reduce((sum, s) => sum + s.totalWords, 0),
    learnedPercent: 25,
    masteredPercent: 10
  },
  {
    id: "course-tech-software",
    title: "English for Software Engineers (.NET, Backend & AI)",
    shortTitle: "Tiếng Anh Kỹ Sư Phần Mềm",
    icon: "💻",
    category: "Chuyên ngành IT",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    desc: "Thuật ngữ chuyên ngành, cụm từ giao tiếp trong Daily Scrum, viết Pull Request, thiết kế Clean Architecture và giải thích bug.",
    subdecks: course6Subdecks,
    dueCardsCount: course6Subdecks.reduce((sum, s) => sum + s.dueCount, 0),
    totalWords: course6Subdecks.reduce((sum, s) => sum + s.totalWords, 0),
    learnedPercent: 65,
    masteredPercent: 35
  }
];

// Write to src/data/vocabCourses.js
const vocabFileContent = `// LEXIFLOW STUDIO - VOCABULARY COURSES RESTRUCTURED
// 6 Major Courses, 51+ Sub-decks, 400+ Cards with complete mnemonic & SRS tracking

export const INITIAL_VOCAB_COURSES = ${JSON.stringify(vocabCourses, null, 2)};

export default INITIAL_VOCAB_COURSES;
`;

fs.writeFileSync(path.resolve('src/data/vocabCourses.js'), vocabFileContent, 'utf-8');
console.log(`Generated src/data/vocabCourses.js with ${vocabCourses.length} courses!`);

// ========================
// GRAMMAR COURSES EXPANSION
// ========================
// Split 22 existing lessons into 2 structured courses + 1 conversational course
const foundationLessons = existingGrammar.map(lesson => ({
  ...lesson,
  courseId: 'grammar-foundation',
  courseTitle: 'Ngữ pháp cơ bản - Lấy lại gốc từ số 0'
}));

const toeicGrammarLessons = existingGrammar.slice(10, 22).map((lesson, idx) => ({
  ...lesson,
  id: `toeic-g-${idx + 1}`,
  lessonNumber: `Bài ${idx + 1} / 12`,
  courseId: 'grammar-toeic',
  courseTitle: 'Trọng Tâm Ngữ Pháp TOEIC Part 5 & 6',
  category: 'TOEIC Part 5 & 6'
}));

const conversationalGrammarLessons = existingGrammar.slice(0, 8).map((lesson, idx) => ({
  ...lesson,
  id: `conv-g-${idx + 1}`,
  lessonNumber: `Bài ${idx + 1} / 8`,
  courseId: 'grammar-conversational',
  courseTitle: 'Cấu Trúc Câu Giao Tiếp Phản Xạ',
  category: 'Giao tiếp hàng ngày'
}));

const grammarCourses = [
  {
    id: "grammar-foundation",
    title: "Ngữ pháp cơ bản - Lấy lại gốc từ số 0",
    shortTitle: "Lấy lại gốc từ số 0",
    icon: "📖",
    lessonCountText: "22 bài học",
    totalLessons: 22,
    completedCount: foundationLessons.filter(l => l.completed).length || 2,
    duration: "Khoảng 6 giờ",
    badge: "A0 -> A2 Nền tảng",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    desc: "Loại bỏ hoàn toàn lỗi ghép từ 'I am agree' hay 'She very busy'. Hiểu bản chất câu đơn S-V-O, 3 thì cốt lõi và cách tự ghép câu như Lego.",
    lessons: foundationLessons
  },
  {
    id: "grammar-toeic",
    title: "Trọng Tâm Ngữ Pháp TOEIC Part 5 & 6",
    shortTitle: "Trọng tâm TOEIC Part 5 & 6",
    icon: "🎯",
    lessonCountText: "12 bài học",
    totalLessons: 12,
    completedCount: 1,
    duration: "Khoảng 4 giờ",
    badge: "Mục tiêu TOEIC 600+",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    desc: "Bí quyết giải đề trong 3 giây: Rút gọn mệnh đề quan hệ (V-ing vs V-ed), Sự hòa hợp S-V, Bẫy từ loại và Liên từ vs Giới từ.",
    lessons: toeicGrammarLessons
  },
  {
    id: "grammar-conversational",
    title: "Cấu Trúc Câu Giao Tiếp Phản Xạ",
    shortTitle: "Cấu trúc câu Giao tiếp",
    icon: "💬",
    lessonCountText: "8 bài học",
    totalLessons: 8,
    completedCount: 2,
    duration: "Khoảng 2.5 giờ",
    badge: "Phản xạ nói",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    desc: "8 mẫu câu giao tiếp quyền năng nhất: Cách hỏi lịch sự, xin phép, đưa ra đề xuất và diễn đạt quan điểm trong công việc.",
    lessons: conversationalGrammarLessons
  }
];

const grammarFileContent = `// LEXIFLOW STUDIO - GRAMMAR COURSES RESTRUCTURED
// 3 Major Courses, 42 Lessons with Formulas, Tips & Interactive Quizzes

export const INITIAL_GRAMMAR_COURSES = ${JSON.stringify(grammarCourses, null, 2)};

export default INITIAL_GRAMMAR_COURSES;
`;

fs.writeFileSync(path.resolve('src/data/grammarCourses.js'), grammarFileContent, 'utf-8');
console.log(`Generated src/data/grammarCourses.js with ${grammarCourses.length} courses!`);
