// scripts/buildFull1000Vocab.mjs
// Builds src/data/vocab1000Full.json and updates src/data/vocabCourses.js
// Exactly 20 topics x 50 authentic words = 1,000 words.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { topic1Family, topic2Personality, topic3Communication, topic4Travel, topic5TimeGrowth } from './topics_batch1.js';
import { topic6Food, topic7Shopping, topic8Work, topic9Home, topic10Weather } from './topics_batch2.js';
import { topic11Education, topic12Traffic, topic13Hobbies, topic14Technology, topic15Media } from './topics_batch3.js';
import { topic16Culture, topic17Health, topic18Society, topic19ToeicBusiness, topic20TechAgile } from './topics_batch4.js';
import { course2Subdecks, course3Subdecks, course4Subdecks, course5Subdecks, course6Subdecks } from './buildComprehensiveVocab.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const topicConfigs = [
  { order: 1, viTitle: 'Gia đình & Quan hệ', enTitle: 'Family & Relationships', words: topic1Family },
  { order: 2, viTitle: 'Tính cách & Cảm xúc', enTitle: 'Personality & Emotions', words: topic2Personality },
  { order: 3, viTitle: 'Giao tiếp & Ngôn ngữ', enTitle: 'Communication & Language', words: topic3Communication },
  { order: 4, viTitle: 'Du lịch & Điểm đến', enTitle: 'Travel & Destinations', words: topic4Travel },
  { order: 5, viTitle: 'Thời gian & Phát triển', enTitle: 'Time & Growth', words: topic5TimeGrowth },
  { order: 6, viTitle: 'Đồ ăn & Nhà hàng', enTitle: 'Food & Restaurants', words: topic6Food },
  { order: 7, viTitle: 'Mua sắm & Tiền bạc', enTitle: 'Shopping & Money', words: topic7Shopping },
  { order: 8, viTitle: 'Công việc & Văn phòng', enTitle: 'Work & Office', words: topic8Work },
  { order: 9, viTitle: 'Nhà cửa & Sinh hoạt', enTitle: 'Home & Living', words: topic9Home },
  { order: 10, viTitle: 'Thời tiết & Thiên nhiên', enTitle: 'Weather & Nature', words: topic10Weather },
  { order: 11, viTitle: 'Giáo dục & Học tập', enTitle: 'Education & Learning', words: topic11Education },
  { order: 12, viTitle: 'Giao thông & Hỏi đường', enTitle: 'Traffic & Directions', words: topic12Traffic },
  { order: 13, viTitle: 'Sở thích & Giải trí', enTitle: 'Hobbies & Entertainment', words: topic13Hobbies },
  { order: 14, viTitle: 'Công nghệ & Phần mềm', enTitle: 'Technology & Software', words: topic14Technology },
  { order: 15, viTitle: 'Truyền thông & Báo chí', enTitle: 'Media & Journalism', words: topic15Media },
  { order: 16, viTitle: 'Nghệ thuật & Văn hóa', enTitle: 'Arts & Culture', words: topic16Culture },
  { order: 17, viTitle: 'Sức khỏe & Dinh dưỡng', enTitle: 'Health & Nutrition', words: topic17Health },
  { order: 18, viTitle: 'Xã hội & Cộng đồng', enTitle: 'Society & Community', words: topic18Society },
  { order: 19, viTitle: 'Hợp đồng & Kinh doanh TOEIC', enTitle: 'TOEIC Business & Contracts', words: topic19ToeicBusiness },
  { order: 20, viTitle: 'Kỹ sư Phần mềm (.NET, AI & Agile)', enTitle: 'Software Engineering (.NET, AI & Agile)', words: topic20TechAgile },
];

function makeLego(text) {
  if (!text) return [];
  return text
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?"]/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

console.log('🚀 Assembling 1,000 authentic vocabulary words...');

let totalCardsCount = 0;
const subdecks = topicConfigs.map((cfg) => {
  const cards = cfg.words.slice(0, 50).map((w, cardIdx) => {
    totalCardsCount++;
    return {
      id: `c1-s${cfg.order}-w${cardIdx + 1}`,
      word: w.w,
      syllables: w.syl || w.w.toLowerCase(),
      ipa: w.ipa,
      pos: w.pos || 'noun',
      meaning: w.m,
      chunk: w.chunk,
      pattern: w.pattern,
      mnemonic: w.mne,
      example: w.ex,
      exampleVi: w.exVi,
      wordsForLego: makeLego(w.ex),
      status: 'due',
      intervalDays: 0,
      reviewCount: 0,
      lastReviewed: null
    };
  });

  return {
    id: `c1-sub-${cfg.order}`,
    order: cfg.order,
    title: `${cfg.order}. ${cfg.viTitle}`,
    enTitle: cfg.enTitle,
    viTitle: cfg.viTitle,
    totalWords: cards.length,
    masteredCount: 0,
    learningCount: 0,
    dueCount: cards.length,
    progressPercent: 0,
    lastStudied: 'Hôm qua',
    cards
  };
});

console.log(`✅ Formatted ${subdecks.length} subdecks, total cards: ${totalCardsCount}`);

// 1. Write src/data/vocab1000Full.json
const vocab1000Path = path.resolve(rootDir, 'src/data/vocab1000Full.json');
fs.writeFileSync(vocab1000Path, JSON.stringify(subdecks, null, 2), 'utf-8');
console.log(`💾 Saved ${vocab1000Path} (${(fs.statSync(vocab1000Path).size / 1024).toFixed(1)} KB)`);

// 2. Prepare all 6 courses
const updatedCourse1 = {
  id: 'course-1000-common',
  title: '1000 Từ Tiếng Anh Thông Dụng & Giao Tiếp',
  shortTitle: '1000 Từ Thông Dụng',
  icon: '📘',
  category: 'Lấy lại gốc & Đời sống',
  badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  desc: 'Bộ từ vựng cốt lõi gồm 20 chủ đề thực tế x 50 từ chuẩn quốc tế (1.000 từ) giúp diễn đạt 85% mọi tình huống giao tiếp đời sống & công việc.',
  subdecks
};

const otherCourses = [
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

const fullCourses = [updatedCourse1, ...otherCourses];

const vocabCoursesPath = path.resolve(rootDir, 'src/data/vocabCourses.js');
const jsContent = `// LEXIFLOW STUDIO - AUTHENTIC THEMATIC VOCABULARY COURSES
// 6 Courses, 51 Sub-decks, Genuine curated vocabulary for every topic
// Generated with exactly 1,000 authentic words for Course 1 (20 topics x 50 words)

export const INITIAL_VOCAB_COURSES = ${JSON.stringify(fullCourses, null, 2)};

export default INITIAL_VOCAB_COURSES;
`;

fs.writeFileSync(vocabCoursesPath, jsContent, 'utf-8');
console.log(`💾 Updated ${vocabCoursesPath} with all 6 courses (Course 1 has 20 topics x 50 words = 1000 cards)!`);
console.log('🎉 Successfully built 1,000 real words!');
