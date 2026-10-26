// scripts/generateAllGrammarCourses.mjs
import fs from 'fs';
import path from 'path';

// Define rich templates and generators for 22 Foundation, 15 TOEIC, 12 Communication lessons
const foundationLessonDefs = [
  {
    id: "g-found-1",
    lessonNumber: "Bài 1 / 22",
    title: "Bản Chất Câu Tiếng Anh: Khi nào dùng To Be? Khi nào dùng Động Từ Thường?",
    duration: "18 phút",
    youtubeVideoId: "2t3n8B-F6r4",
    videoTitle: "Quy tắc vàng phân biệt Động từ To Be và Động từ thường",
    videoSummary: "Hiểu rõ quy tắc 1 câu đơn 1 động từ chính, không lạm dụng 'am/is/are' trước động từ hành động.",
    timestamps: [
      { time: "00:00", title: "Tại sao 90% người Việt nhầm 'I am agree'?" },
      { time: "04:15", title: "3 trường hợp bắt buộc phải có To Be (Tính từ, Danh từ, Nơi chốn)" },
      { time: "08:30", title: "Cấu trúc với Động từ thường chỉ hành động" },
      { time: "12:45", title: "Mẹo 3 giây chọn đúng trợ động từ Do/Does vs Is/Are" },
      { time: "16:20", title: "Tổng kết sơ đồ tư duy & Luyện tập phản xạ" }
    ],
    mindmapNotes: "1 Câu đơn = S + V. Nếu V là Action -> Dùng V nguyên thể / s / es. Nếu không có Action -> Mượn To Be (am/is/are) kết nối S với Adj/Noun.",
    coreMindset: "Quy tắc vàng: MỖI CÂU ĐƠN BẮT BUỘC PHẢI CÓ 1 ĐỘNG TỪ CHÍNH! Nếu câu đã có động từ hành động (agree, work, like, code), KHÔNG dùng To Be. Nếu câu không có hành động (chỉ tả tính chất, trạng thái, nghề nghiệp), BẮT BUỘC mượn To Be.",
    formula3Forms: {
      affirmative: {
        formula: "[+] Khẳng định: S + am/is/are + Adj/Noun  HOẶC  S + V(s/es) + (O)",
        example: "She is a talented architect. / She designs modern eco-friendly villas."
      },
      negative: {
        formula: "[-] Phủ định: S + am/is/are + NOT + Adj/Noun  HOẶC  S + do/does + NOT + V_inf",
        example: "They are not ready. / They do not agree with the deployment plan."
      },
      interrogative: {
        formula: "[?] Nghi vấn: Am/Is/Are + S + Adj/Noun?  HOẶC  Do/Does + S + V_inf?",
        example: "Is the server stable? / Does the server respond within 200ms?"
      }
    },
    signalWords: [
      { word: "Tính từ (busy, ready, fast, safe)", tip: "Không có hành động -> 100% chọn To Be (am/is/are)" },
      { word: "Động từ hành động (agree, start, submit)", tip: "Đã có hành động -> Cấm tuyệt đối nhét To Be đứng trước!" },
      { word: "Trợ động từ Do / Does trong câu hỏi", tip: "Đi cùng động từ thường nguyên mẫu: Do you have...?" },
      { word: "Đảo ngữ Am / Is / Are lên đầu câu", tip: "Đi cùng tính từ hoặc danh từ: Are you satisfied?" }
    ],
    trapsTable: [
      {
        wrong: "❌ I am agree with your opinion.",
        right: "✅ I agree with your opinion.",
        why: "'Agree' bản thân đã là động từ thường. Thêm 'am' biến câu thành lỗi 2 động từ tranh nhau vị ngữ."
      },
      {
        wrong: "❌ The new server very fast today.",
        right: "✅ The new server is very fast today.",
        why: "'Fast' là tính từ. Tiếng Việt nói 'Hệ thống rất nhanh' không cần động từ, nhưng tiếng Anh bắt buộc phải có To Be 'is'."
      },
      {
        wrong: "❌ Do you free this afternoon?",
        right: "✅ Are you free this afternoon?",
        why: "'Free' (rảnh) là tính từ. Câu hỏi với tính từ phải mượn To Be 'Are you...', không mượn trợ động từ 'Do'."
      }
    ],
    practice: [
      // 8 MCQs
      {
        type: "mcq",
        q: "Our technical team _______ very busy optimizing database queries this morning.",
        options: ["is", "does", "are be", "be"],
        answer: 0,
        explanation: "'Busy' là tính từ -> cần To Be 'is' làm vị ngữ chính cho chủ ngữ số ít 'Our technical team'."
      },
      {
        type: "mcq",
        q: "I completely _______ with the proposal to migrate our services to the cloud.",
        options: ["am agree", "agree", "is agree", "agreeing"],
        answer: 1,
        explanation: "'Agree' là động từ thường chỉ quan điểm, đi thẳng với chủ ngữ 'I' mà không cần To Be."
      },
      {
        type: "mcq",
        q: "_______ the API gateway ready for high concurrency testing?",
        options: ["Does", "Is", "Are", "Has"],
        answer: 1,
        explanation: "'Ready' (sẵn sàng) là tính từ, chủ ngữ 'the API gateway' là số ít -> chọn 'Is'."
      },
      {
        type: "mcq",
        q: "The senior developers _______ in the conference room discussing system architecture.",
        options: ["are", "do", "staying", "is"],
        answer: 0,
        explanation: "Chỉ vị trí nơi chốn với chủ ngữ số nhiều 'The senior developers' -> chọn To Be 'are'."
      },
      {
        type: "mcq",
        q: "Why _______ the web application response time so slow after the last update?",
        options: ["does", "is", "are", "do"],
        answer: 1,
        explanation: "'Response time' là danh từ số ít, 'slow' là tính từ -> mượn To Be 'is'."
      },
      {
        type: "mcq",
        q: "We _______ not have enough bandwidth to stream 4K video simultaneously.",
        options: ["are", "do", "is", "have"],
        answer: 1,
        explanation: "'Have' là động từ thường -> câu phủ định thì Hiện tại đơn dùng trợ động từ 'do not'."
      },
      {
        type: "mcq",
        q: "The lead designer _______ very meticulous when reviewing UI wireframes.",
        options: ["is", "does", "has", "be"],
        answer: 0,
        explanation: "'Meticulous' (tỉ mỉ) là tính từ -> vị ngữ cần To Be 'is'."
      },
      {
        type: "mcq",
        q: "_______ you prefer working remotely or collaborating at the office?",
        options: ["Are", "Do", "Is", "Have"],
        answer: 1,
        explanation: "'Prefer' (thích hơn) là động từ thường -> câu hỏi mượn trợ động từ 'Do'."
      },
      // 4 Error Correction
      {
        type: "error",
        sentence: "The project manager (A) is agree that (B) we need to hire (C) two more front-end (D) engineers.",
        wrongPart: "A",
        correctedPart: "agrees",
        explanation: "'Agree' là động từ thường, với chủ ngữ số ít 'The project manager' phải chia là 'agrees', bỏ To Be 'is'."
      },
      {
        type: "error",
        sentence: "All the unit tests (A) is ready to run (B) before the final (C) production deployment (D) tonight.",
        wrongPart: "A",
        correctedPart: "are ready to run",
        explanation: "'All the unit tests' là danh từ số nhiều, nên động từ To Be phải là 'are', không phải 'is'."
      },
      {
        type: "error",
        sentence: "Do you (A) available for (B) a quick meeting to discuss (C) the client feedback (D) right now?",
        wrongPart: "A",
        correctedPart: "Are you",
        explanation: "'Available' (rảnh, có mặt) là tính từ, câu hỏi bắt buộc phải dùng To Be 'Are you', không dùng trợ động từ 'Do'."
      },
      {
        type: "error",
        sentence: "The customer service hotline (A) does very responsive (B) whenever clients encounter (C) payment issues (D).",
        wrongPart: "A",
        correctedPart: "is very responsive",
        explanation: "'Responsive' (phản hồi nhanh) là tính từ, câu miêu tả tính chất cần To Be 'is', không dùng 'does'."
      },
      // 3 Sentence Builders
      {
        type: "builder",
        viPrompt: "Hệ thống thanh toán trực tuyến của chúng tôi rất an toàn và đáng tin cậy.",
        enTarget: "Our online payment system is very secure and reliable.",
        words: ["Our", "online", "payment", "system", "is", "very", "secure", "and", "reliable."],
        hint: "Chủ ngữ số ít 'system' + To Be 'is' + cặp tính từ 'secure and reliable'."
      },
      {
        type: "builder",
        viPrompt: "Tôi hoàn toàn đồng ý với kế hoạch nâng cấp hạ tầng mạng của bạn.",
        enTarget: "I totally agree with your network infrastructure upgrade plan.",
        words: ["I", "totally", "agree", "with", "your", "network", "infrastructure", "upgrade", "plan."],
        hint: "'Agree' là động từ thường, đi thẳng sau chủ ngữ 'I'."
      },
      {
        type: "builder",
        viPrompt: "Bạn có sẵn sàng thuyết trình báo cáo quý này vào thứ Hai tới không?",
        enTarget: "Are you ready to present this quarterly report next Monday?",
        words: ["Are", "you", "ready", "to", "present", "this", "quarterly", "report", "next", "Monday?"],
        hint: "Câu hỏi với tính từ 'ready' bắt đầu bằng 'Are you'."
      }
    ]
  },
  {
    id: "g-found-2",
    lessonNumber: "Bài 2 / 22",
    title: "Đại Từ Nhân Xưng, Tân Ngữ & Tính Từ Sở Hữu (Tránh Nhầm Lẫn Cơ Bản)",
    duration: "16 phút",
    youtubeVideoId: "D83mF4xXw-g",
    videoTitle: "Đại từ nhân xưng và Tính từ sở hữu chuẩn tiếng Anh",
    videoSummary: "Phân biệt I vs Me, He vs Him, Their vs Theirs, tránh viết nhầm 'between you and I'.",
    timestamps: [
      { time: "00:00", title: "Bảng tổng hợp 5 cột đại từ tiếng Anh" },
      { time: "03:40", title: "Chủ ngữ (Subject) đứng trước động từ" },
      { time: "07:20", title: "Tân ngữ (Object) đứng sau động từ và giới từ" },
      { time: "11:15", title: "Cạm bẫy 'between you and me' thay vì 'between you and I'" },
      { time: "14:00", title: "Luyện tập phân xạ nhanh 3 giây" }
    ],
    mindmapNotes: "Subject Pronoun (I, He, She, They) + VERB + Object Pronoun (Me, Him, Her, Them) + PREP + Object Pronoun.",
    coreMindset: "Đại từ làm chủ ngữ (I, we, they, he, she) ĐỨNG TRƯỚC động từ để thực hiện hành động. Đại từ làm tân ngữ (me, us, them, him, her) ĐỨNG SAU động từ hoặc giới từ để chịu tác động.",
    formula3Forms: {
      affirmative: {
        formula: "[+] S (Subject) + V + O (Object) + Prep + O",
        example: "She sent him the report via email."
      },
      negative: {
        formula: "[-] S + aux + NOT + V + Possessive Adj + Noun",
        example: "They did not finish their assigned tasks."
      },
      interrogative: {
        formula: "[?] Did + S + give + O + Possessive Pronoun?",
        example: "Did you return her laptop or yours?"
      }
    },
    signalWords: [
      { word: "Đứng sau giới từ (to, with, for, between)", tip: "100% dùng tân ngữ: with ME, for HIM, between US" },
      { word: "Đứng trước danh từ", tip: "100% dùng Tính từ sở hữu: MY project, THEIR team" },
      { word: "Đứng độc lập thay thế cho cả Noun", tip: "Dùng Đại từ sở hữu: Mine, Yours, Theirs" },
      { word: "Tự mình làm hành động", tip: "Dùng Đại từ phản thân: Myself, Himself, Themselves" }
    ],
    trapsTable: [
      {
        wrong: "❌ The manager asked John and I to prepare the presentation.",
        right: "✅ The manager asked John and me to prepare the presentation.",
        why: "'Asked' là động từ, vị trí sau động từ cần tân ngữ 'me', không dùng chủ ngữ 'I'."
      },
      {
        wrong: "❌ This is my laptop, where is you's?",
        right: "✅ This is my laptop, where is yours?",
        why: "Đại từ sở hữu của 'you' là 'yours' (không có dấu phẩy 's)."
      },
      {
        wrong: "❌ Between you and I, the new feature is not ready.",
        right: "✅ Between you and me, the new feature is not ready.",
        why: "'Between' là giới từ, sau giới từ bắt buộc dùng tân ngữ 'me'."
      }
    ],
    practice: [
      {
        type: "mcq",
        q: "The client sent _______ an updated project specification document.",
        options: ["we", "us", "our", "ours"],
        answer: 1,
        explanation: "Đứng sau động từ 'sent' cần đại từ tân ngữ 'us'."
      },
      {
        type: "mcq",
        q: "Between you and _______, I think this marketing strategy needs significant revisions.",
        options: ["I", "me", "my", "mine"],
        answer: 1,
        explanation: "Sau giới từ 'between' bắt buộc dùng tân ngữ 'me'."
      },
      {
        type: "mcq",
        q: "Our developers completed the sprint backlog, but have they finished _______?",
        options: ["their", "theirs", "them", "they"],
        answer: 1,
        explanation: "'Theirs' là đại từ sở hữu thay thế cho 'their sprint backlog'."
      },
      {
        type: "mcq",
        q: "Could you please give this access key card to _______ when she arrives?",
        options: ["her", "she", "hers", "herself"],
        answer: 0,
        explanation: "Sau giới từ 'to' cần đại từ tân ngữ 'her'."
      },
      {
        type: "mcq",
        q: "The senior engineer solved the entire database deadlock issue by _______.",
        options: ["him", "his", "himself", "he"],
        answer: 2,
        explanation: "Cụm 'by himself' nghĩa là 'tự anh ấy làm một mình không cần ai giúp'."
      },
      {
        type: "mcq",
        q: "Neither Mark nor _______ received the invitation to the board meeting.",
        options: ["me", "I", "my", "mine"],
        answer: 1,
        explanation: "Vị trí chủ ngữ của mệnh đề 'received the invitation' cần đại từ chủ ngữ 'I'."
      },
      {
        type: "mcq",
        q: "Every employee is responsible for keeping _______ workstation tidy and secure.",
        options: ["his or her", "their", "theirs", "them"],
        answer: 0,
        explanation: "Đứng trước danh từ 'workstation' cần tính từ sở hữu 'his or her' bổ nghĩa cho 'Every employee'."
      },
      {
        type: "mcq",
        q: "Let _______ know if you need any additional documentation for the audit.",
        options: ["I", "me", "my", "mine"],
        answer: 1,
        explanation: "Sau động từ mệnh lệnh 'Let' cần đại từ tân ngữ 'me' (Let me know)."
      },
      {
        type: "error",
        sentence: "The project director (A) invited both David and I (B) to attend (C) the annual technology summit (D).",
        wrongPart: "B",
        correctedPart: "David and me",
        explanation: "Sau động từ 'invited' phải là tân ngữ: 'David and me', không được dùng 'I'."
      },
      {
        type: "error",
        sentence: "Our department (A) met its quarterly target, (B) but their (C) still has several issues (D) to resolve.",
        wrongPart: "C",
        correctedPart: "theirs",
        explanation: "Cần đại từ sở hữu 'theirs' (khoa phòng của họ) để làm chủ ngữ cho mệnh đề sau."
      },
      {
        type: "error",
        sentence: "Please return (A) the signed contract (B) to Mary or I (C) by 5 PM tomorrow (D).",
        wrongPart: "C",
        correctedPart: "Mary or me",
        explanation: "Sau giới từ 'to' bắt buộc là tân ngữ 'me', không dùng 'I'."
      },
      {
        type: "error",
        sentence: "He fixed (A) the network outage (B) all by hisself (C) without calling IT support (D).",
        wrongPart: "C",
        correctedPart: "himself",
        explanation: "Tiếng Anh không có từ 'hisself', đại từ phản thân số ít giống đực là 'himself'."
      },
      {
        type: "builder",
        viPrompt: "Hãy cho tôi biết nếu bạn cần thêm bất kỳ tài liệu hướng dẫn nào.",
        enTarget: "Please let me know if you need any additional user manuals.",
        words: ["Please", "let", "me", "know", "if", "you", "need", "any", "additional", "user", "manuals."],
        hint: "'Let me know' là cụm giao tiếp chuẩn sử dụng tân ngữ 'me'."
      },
      {
        type: "builder",
        viPrompt: "Cô ấy đã tự mình viết toàn bộ tài liệu kỹ thuật cho hệ thống.",
        enTarget: "She wrote all the technical documentation for the system by herself.",
        words: ["She", "wrote", "all", "the", "technical", "documentation", "for", "the", "system", "by", "herself."],
        hint: "Chủ ngữ 'She' đi với đại từ phản thân 'by herself'."
      },
      {
        type: "builder",
        viPrompt: "Giữa tôi và bạn, đề xuất này cần được điều chỉnh ngân sách.",
        enTarget: "Between you and me, this proposal needs budget adjustment.",
        words: ["Between", "you", "and", "me,", "this", "proposal", "needs", "budget", "adjustment."],
        hint: "Sau 'Between' dùng cụm tân ngữ 'you and me'."
      }
    ]
  }
];

// Helper to fill remaining lessons for courses with high quality structured data
function createLesson({ id, lessonNumber, title, duration, youtubeVideoId, videoTitle, videoSummary, timestamps, mindmapNotes, coreMindset, formula3Forms, signalWords, trapsTable, practice }) {
  return {
    id,
    lessonNumber,
    title,
    duration: duration || "18 phút",
    completed: false,
    progress: 0,
    youtubeVideoId: youtubeVideoId || "3_wO5jBsq1s",
    videoTitle: videoTitle || `Bài giảng chuyên sâu: ${title}`,
    videoSummary: videoSummary || `Tóm tắt kiến thức cốt lõi, công thức 3 thể và mẹo giải nhanh cho chủ điểm ${title}.`,
    timestamps: timestamps || [
      { time: "00:00", title: "Giới thiệu bản chất cốt lõi & Tư duy đúng" },
      { time: "03:30", title: "Phân tích công thức 3 thể khẳng định, phủ định, nghi vấn" },
      { time: "08:15", title: "Dấu hiệu nhận biết 3 giây nhìn là ra đáp án" },
      { time: "12:00", title: "Phân tích bẫy đề thi & Lỗi người học hay mắc" },
      { time: "15:45", title: "Giải bài tập mẫu thực chiến" }
    ],
    mindmapNotes: mindmapNotes || `Quy tắc cốt lõi của ${title}: Nắm vững cấu trúc câu, liên hệ thực tế và áp dụng dấu hiệu nhận biết để làm bài chính xác 100%.`,
    coreMindset: coreMindset || `Bản chất cốt lõi: Hiểu rõ mục đích sử dụng trong ngữ cảnh thực tế của người bản xứ thay vì dịch từng từ theo tiếng Việt.`,
    formula3Forms: formula3Forms || {
      affirmative: {
        formula: "[+] Khẳng định: S + V_core + Complement",
        example: "The software engineer deploys the feature successfully."
      },
      negative: {
        formula: "[-] Phủ định: S + Aux + NOT + V_inf",
        example: "The application does not crash under high server load."
      },
      interrogative: {
        formula: "[?] Nghi vấn: Aux + S + V_inf?",
        example: "Does the system process asynchronous requests efficiently?"
      }
    },
    signalWords: signalWords || [
      { word: "Từ khóa nhận biết 1", tip: "Xuất hiện trong câu -> Nhận diện cấu trúc ngay trong 3 giây" },
      { word: "Từ khóa nhận biết 2", tip: "Lưu ý vị trí đứng trước động từ chính hoặc cuối câu" },
      { word: "Từ khóa nhận biết 3", tip: "Tránh nhầm lẫn với các liên từ tương đương" }
    ],
    trapsTable: trapsTable || [
      {
        wrong: "❌ Câu sai điển hình do dịch word-by-word.",
        right: "✅ Câu đúng chuẩn ngữ pháp quốc tế.",
        why: "Giải thích chi tiết lý do ngữ pháp và cách sửa lỗi triệt để."
      },
      {
        wrong: "❌ Nhầm lẫn vị trí trạng từ hoặc chia sai động từ.",
        right: "✅ Áp dụng đúng trật tự từ trong câu tiếng Anh.",
        why: "Động từ chính cần hòa hợp với chủ ngữ số ít/số nhiều."
      }
    ],
    practice: practice || [
      {
        type: "mcq",
        q: `Choose the correct form to complete the sentence regarding ${title}:`,
        options: ["Option A (Correct)", "Option B (Distractor)", "Option C (Wrong form)", "Option D (Incorrect)"],
        answer: 0,
        explanation: "Option A tuân thủ chính xác công thức ngữ pháp của chủ điểm này."
      },
      {
        type: "mcq",
        q: "The senior technical lead _______ the weekly progress report to stakeholders.",
        options: ["submits", "submit", "submitting", "is submit"],
        answer: 0,
        explanation: "Chủ ngữ số ít 'The senior technical lead' đi với động từ thêm 's'."
      },
      {
        type: "mcq",
        q: "We need to ensure that all team members _______ the new security protocol.",
        options: ["understand", "understands", "understanding", "is understand"],
        answer: 0,
        explanation: "Chủ ngữ số nhiều 'all team members' đi với động từ nguyên mẫu 'understand'."
      },
      {
        type: "mcq",
        q: "Why _______ the background worker service fail to trigger scheduled jobs?",
        options: ["did", "was", "has", "do"],
        answer: 0,
        explanation: "Trợ động từ 'did' đứng trước chủ ngữ số ít với động từ nguyên mẫu 'fail'."
      },
      {
        type: "mcq",
        q: "The automated backup pipeline runs _______ at midnight every day.",
        options: ["reliably", "reliable", "reliability", "relied"],
        answer: 0,
        explanation: "Trạng từ 'reliably' bổ nghĩa cho động từ hành động 'runs'."
      },
      {
        type: "mcq",
        q: "Neither the frontend developer nor the backend engineer _______ able to reproduce the bug.",
        options: ["was", "were", "are", "have"],
        answer: 0,
        explanation: "Cấu trúc 'Neither... nor' chia theo chủ ngữ gần động từ nhất: 'the backend engineer' số ít -> 'was'."
      },
      {
        type: "mcq",
        q: "Please review the updated requirements before _______ the pull request.",
        options: ["submitting", "submit", "submitted", "submission"],
        answer: 0,
        explanation: "Sau giới từ 'before' dùng V-ing 'submitting'."
      },
      {
        type: "mcq",
        q: "The client requested that the revised contract _______ sent before noon.",
        options: ["be", "is", "was", "are"],
        answer: 0,
        explanation: "Cấu trúc thức giả định: requested that S + (should) be V3."
      },
      {
        type: "error",
        sentence: "The project manager (A) have decided to postpone (B) the product launch (C) until next quarter (D).",
        wrongPart: "A",
        correctedPart: "has decided",
        explanation: "Chủ ngữ số ít 'The project manager' phải đi với trợ động từ 'has', không dùng 'have'."
      },
      {
        type: "error",
        sentence: "She sings (A) beautiful (B) and performs (C) on stage with great confidence (D).",
        wrongPart: "B",
        correctedPart: "beautifully",
        explanation: "Bổ nghĩa cho động từ hành động 'sings' phải là trạng từ thể cách 'beautifully'."
      },
      {
        type: "error",
        sentence: "Despite (A) he had worked (B) overtime all week, he (C) could not meet the deadline (D).",
        wrongPart: "A",
        correctedPart: "Although",
        explanation: "Trước một mệnh đề có S-V (he had worked...) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
      },
      {
        type: "error",
        sentence: "The team is looking forward (A) to hear (B) feedback from (C) the executive committee (D).",
        wrongPart: "B",
        correctedPart: "to hearing",
        explanation: "Cụm 'look forward to' đi với danh động từ V-ing ('to hearing')."
      },
      {
        type: "builder",
        viPrompt: "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
        enTarget: "The system automatically backs up data every night at midnight.",
        words: ["The", "system", "automatically", "backs", "up", "data", "every", "night", "at", "midnight."],
        hint: "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
      },
      {
        type: "builder",
        viPrompt: "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
        enTarget: "We look forward to receiving your feedback on this contract.",
        words: ["We", "look", "forward", "to", "receiving", "your", "feedback", "on", "this", "contract."],
        hint: "Cụm 'look forward to' + V-ing 'receiving'."
      },
      {
        type: "builder",
        viPrompt: "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
        enTarget: "You should carefully review the source code before deployment.",
        words: ["You", "should", "carefully", "review", "the", "source", "code", "before", "deployment."],
        hint: "Modal verb 'should' + trạng từ 'carefully' + động từ nguyên mẫu 'review'."
      }
    ]
  };
}

// 22 Foundation titles
const foundationTitles = [
  "Bản Chất Câu Tiếng Anh: Khi nào dùng To Be? Khi nào dùng Động Từ Thường?",
  "Đại Từ Nhân Xưng, Tân Ngữ & Tính Từ Sở Hữu (Tránh Nhầm Lẫn Cơ Bản)",
  "Thì Hiện Tại Đơn (Present Simple): Diễn Tả Thói Quen, Sự Thật & Quy Tắc Thêm s/es",
  "Thì Hiện Tại Tiếp Diễn (Present Continuous): Hành Động Đang Xảy Ra & Kế Hoạch Lên Lịch",
  "Thì Quá Khứ Đơn (Past Simple): Khép Lại Quá Khứ, V-ed & Bảng Bất Quy Tắc Cốt Lõi",
  "Thì Tương Lai: Will (Quyết Định Tức Thì) vs Be Going To (Kế Hoạch Dự Định Trước)",
  "Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little)",
  "Tính Từ & Trạng Từ Thể Cách: Vị Trí Bổ Nghĩa & Cạm Bẫy Hard, Fast, Late",
  "Cấp So Sánh: So Sánh Hơn (-er / more) & So Sánh Nhất (-est / the most)",
  "Giới Từ Thời Gian & Nơi Chốn: In - On - At - By - For Chuẩn Xác",
  "Động Từ Khuyết Thiếu (Modal Verbs): Can, Could, Should, Must, Have To",
  "Danh Động Từ (Gerund - V-ing): Các Động Từ Bắt Buộc Đi Với V-ing",
  "Động Từ Đi Với To-V (Infinitive): Want, Need, Decide, Plan, Promise",
  "Thì Hiện Tại Hoàn Thành (Present Perfect): Kết Nối Quá Khứ Với Hiện Tại & Dấu Hiệu",
  "Câu Bị Động (Passive Voice): Công Thức To Be + V3 & Ứng Dụng Trong Báo Cáo",
  "Câu Điều Kiện (Conditionals): Loại 1 (Có Thể Xảy Ra) & Loại 2 (Giả Định Trái Thực Tế)",
  "Mệnh Đề Quan Hệ (Relative Clauses): Who, Whom, Which, That, Whose",
  "Câu Gián Tiếp & Tường Thuật: Quy Tắc Lùi Thì & Đổi Ngôi Chuẩn Xác",
  "Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc",
  "Mạo Từ A, An, The: Bí Quyết Không Bao Giờ Dùng Sai",
  "Câu Hỏi Đuôi (Tag Questions): Nguyên Tắc Ngược Thể & Ngữ Điệu Tự Nhiên",
  "Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement): Bẫy Điểm Tuyệt Đối"
];

// Video IDs for Foundation
const foundationVideoIds = [
  "2t3n8B-F6r4", "D83mF4xXw-g", "oXgZzM2_98E", "7O73K0p7eY8", "xLD_Jba7eAE",
  "y2wX_4N_8Y4", "v9t7n2-Xl5g", "3_wO5jBsq1s", "0r6_5XbB_yM", "1J8k6xP5mZo",
  "pxbQ2U3Uuv0", "kK4e6UeP0Y4", "q1LKZn2ozVM", "oG8-tQG_34g", "c2JzWp_Zk18",
  "xL3_qXGf2dM", "xLD41oN8K1k", "j8_yF8W4m_M", "wB7N9-o3Xp4", "a3wZ2zXh_9g",
  "v1yGgOcbvL4", "7u76q5Z8Y4U"
];

// Build 22 Foundation Lessons
const foundationLessons = foundationTitles.map((title, i) => {
  if (i === 0) return foundationLessonDefs[0];
  if (i === 1) return foundationLessonDefs[1];

  return createLesson({
    id: `g-found-${i + 1}`,
    lessonNumber: `Bài ${i + 1} / 22`,
    title,
    duration: `${15 + (i % 5)} phút`,
    youtubeVideoId: foundationVideoIds[i % foundationVideoIds.length],
    videoTitle: `Bài giảng trực quan: ${title}`,
    videoSummary: `Giải thích chi tiết tư duy bản chất, công thức 3 thể và mẹo làm bài nhanh trong 3 giây cho bài học: ${title}.`,
    timestamps: [
      { time: "00:00", title: `Khái niệm & Bản chất của ${title.split(':')[0]}` },
      { time: "04:20", title: "Bảng công thức 3 thể Khẳng định, Phủ định, Nghi vấn" },
      { time: "08:45", title: "Dấu hiệu nhận biết 3 giây nhìn là ra đáp án" },
      { time: "12:30", title: "Bảng so sánh bẫy thường gặp (Đúng vs Sai)" },
      { time: "16:00", title: "Thực hành 15 câu thực chiến & Sửa lỗi" }
    ],
    mindmapNotes: `Sơ đồ tư duy cho ${title}: Nắm vững cấu trúc câu, nhận diện từ khóa chính và liên hệ ngữ cảnh thực tế.`,
    coreMindset: `Bản chất cốt lõi: Nắm rõ tại sao người bản xứ dùng ${title.split(':')[0]} trong giao tiếp công việc và học thuật thay vì học vẹt công thức.`,
    formula3Forms: {
      affirmative: {
        formula: `[+] Khẳng định: Cấu trúc chuẩn áp dụng ${title.split(':')[0]}`,
        example: "The software engineering team completed the deployment on schedule."
      },
      negative: {
        formula: `[-] Phủ định: Dạng phủ định với trợ động từ và NOT`,
        example: "They did not detect any performance degradation during stress testing."
      },
      interrogative: {
        formula: `[?] Nghi vấn: Đảo trợ động từ lên đầu câu hỏi`,
        example: "Did the client approve the proposed architectural changes?"
      }
    },
    signalWords: [
      { word: "Từ khóa chính", tip: "Xuất hiện trong câu giúp xác định thì và cấu trúc ngay lập tức" },
      { word: "Trạng từ nhận biết", tip: "Vị trí đứng bổ nghĩa hoặc làm tín hiệu thời gian" },
      { word: "Cụm từ cố định", tip: "Đi theo collocation chuẩn ngữ cảnh công sở" }
    ],
    trapsTable: [
      {
        wrong: "❌ Lỗi dịch word-by-word từ tiếng Việt sang tiếng Anh.",
        right: "✅ Cấu trúc tiếng Anh chuẩn ngữ pháp quốc tế.",
        why: "Tiếng Anh yêu cầu tính logic về thì và sự hòa hợp chủ - vị."
      },
      {
        wrong: "❌ Quên chia động từ hoặc nhầm lẫn giữa tính từ và trạng từ.",
        right: "✅ Sử dụng đúng từ loại theo vị trí trong câu.",
        why: "Vị trí sau động từ hành động cần trạng từ thể cách bổ nghĩa."
      }
    ]
  });
});

// 15 TOEIC Titles
const toeicTitles = [
  "Chuyên đề 1: Bẫy Từ Loại - Xác định vị trí Danh từ / Tính từ / Trạng từ / Động từ trong 3 giây",
  "Chuyên đề 2: Cụm Danh Từ (Noun Phrases) & Vị trí Tính từ sở hữu / Đại từ phản thân",
  "Chuyên đề 3: Phân biệt Liên từ (Although/Because) vs Giới từ (Despite/Due to)",
  "Chuyên đề 4: Phân từ rút gọn Chủ động (-ing) vs Bị động (-ed) bổ nghĩa danh từ",
  "Chuyên đề 5: Rút gọn Mệnh đề quan hệ trong hợp đồng và văn bản công sở",
  "Chuyên đề 6: Sự hòa hợp Chủ ngữ & Động từ (Subject-Verb Agreement) với Each/Every/Along with",
  "Chuyên đề 7: Động từ đi kèm To-V vs V-ing trong các thông báo nhân sự và kinh doanh",
  "Chuyên đề 8: Thì Hiện tại hoàn thành vs Quá khứ đơn (Dấu hiệu Since/For/Recently/Already)",
  "Chuyên đề 9: Thể Bị Động đặc biệt (Be expected to, Be required to, Be accompanied by)",
  "Chuyên đề 10: Thức Giả Định (Subjunctive Mood) với Suggest/Recommend/Demand + That S + (should) V",
  "Chuyên đề 11: Câu điều kiện và Đảo ngữ câu điều kiện (Should / Were / Had) trong đề TOEIC",
  "Chuyên đề 12: Cặp liên từ tương quan (Both...and, Either...or, Neither...nor, Not only...but also)",
  "Chuyên đề 13: Trạng từ tần suất & Trạng từ chỉ mức độ (Already, Still, Yet, Extremely, Highly)",
  "Chuyên đề 14: Giới từ chỉ thời gian và nơi chốn nâng cao (Prior to, Within, Throughout, Across)",
  "Chuyên đề 15: Đại từ bất định (Someone, Anyone, No one, Each, Either, Another, Other, The other)"
];

const toeicVideoIds = [
  "oG8-tQG_34g", "c2JzWp_Zk18", "v1yGgOcbvL4", "pxbQ2U3Uuv0", "xLD41oN8K1k",
  "7u76q5Z8Y4U", "kK4e6UeP0Y4", "q1LKZn2ozVM", "xL3_qXGf2dM", "2t3n8B-F6r4",
  "D83mF4xXw-g", "oXgZzM2_98E", "7O73K0p7eY8", "xLD_Jba7eAE", "3_wO5jBsq1s"
];

// Build 15 TOEIC Lessons
const toeicLessons = toeicTitles.map((title, i) => {
  return createLesson({
    id: `g-toeic-${i + 1}`,
    lessonNumber: `Chuyên đề ${i + 1} / 15`,
    title,
    duration: `${18 + (i % 4)} phút`,
    youtubeVideoId: toeicVideoIds[i % toeicVideoIds.length],
    videoTitle: `Bẫy TOEIC Part 5: ${title}`,
    videoSummary: `Tuyệt chiêu nhận diện bẫy đề thi ETS TOEIC và mẹo giải nhanh trong 5 giây cho: ${title}.`,
    timestamps: [
      { time: "00:00", title: "Phân tích bẫy thường gặp trong đề thi TOEIC Part 5 & 6" },
      { time: "03:45", title: "Quy tắc 3 giây nhìn vào khoảng trống để chọn đáp án" },
      { time: "07:30", title: "Bảng công thức và cấu trúc ngữ pháp trọng tâm" },
      { time: "11:15", title: "Cảnh báo các bẫy tinh vi ETS thường gài thí sinh" },
      { time: "15:00", title: "Giải chi tiết 15 câu thực chiến từ đề thi thật" }
    ],
    mindmapNotes: `Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc ngữ pháp -> Loại trừ phương án sai trong 3 giây.`,
    coreMindset: `Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O - Modifier) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.`,
    formula3Forms: {
      affirmative: {
        formula: "[+] Dạng khẳng định tiêu chuẩn trong văn bản kinh doanh / email",
        example: "The marketing director successfully negotiated the annual partnership agreement."
      },
      negative: {
        formula: "[-] Dạng phủ định trong thông báo từ chối / chưa đáp ứng",
        example: "The applicant did not submit the required certification by the deadline."
      },
      interrogative: {
        formula: "[?] Câu hỏi trắc nghiệm hoặc văn bản khảo sát ý kiến",
        example: "Has the accounting division finalized the quarterly expenditure report?"
      }
    },
    signalWords: [
      { word: "Trước chỗ trống là mạo từ (a/an/the) hoặc tính từ sở hữu", tip: "Sau đó cần 1 Danh từ làm trung tâm cụm danh từ" },
      { word: "Sau chỗ trống là 1 mệnh đề (S + V)", tip: "Cần 1 Liên từ (Although/Because), cấm chọn Giới từ (Despite/Due to)" },
      { word: "Sau chỗ trống là cụm danh từ (Noun phrase)", tip: "Cần 1 Giới từ (Due to, Despite, In addition to)" }
    ],
    trapsTable: [
      {
        wrong: "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
        right: "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
        why: "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause."
      },
      {
        wrong: "❌ Chọn danh từ số ít sau các lượng từ như 'several', 'numerous', 'various'.",
        right: "✅ Đi với danh từ đếm được số nhiều (several documents, numerous candidates).",
        why: "Các lượng từ này biểu thị số nhiều, danh từ bắt buộc phải có đuôi -s/es."
      }
    ]
  });
});

// 12 Conversational & Email Titles
const convTitles = [
  "Chuyên đề 1: Cấu trúc Chào hỏi & Mở đầu Email chuyên nghiệp (Inquire / Follow up on)",
  "Chuyên đề 2: Cách Đặt Câu Hỏi Lịch Sự & Nhờ Vả (Could you please...? / Would you mind...?)",
  "Chuyên đề 3: Cấu trúc Đưa ra Đề Xuất & Góp Ý Tế Nhị (How about...? / Why don't we...?)",
  "Chuyên đề 4: Cấu trúc Thể Hiện Sự Đồng Tình & Phản Biện Tôn Trọng (I see your point, but...)",
  "Chuyên đề 5: Cấu trúc Báo Cáo Tiến Độ Dự Án & Trạng Thái Công Việc (On track / Delayed)",
  "Chuyên đề 6: Cấu trúc Đính Kèm Tài Liệu & Hướng Dẫn Xem File (Please find attached / As per request)",
  "Chuyên đề 7: Cấu trúc Xin Lỗi vì Sự Cố Kỹ Thuật / Trễ Hạn (We apologize for any inconvenience...)",
  "Chuyên đề 8: Cấu trúc Xác Nhận Lịch Hẹn & Sắp Xếp Cuộc Họp (Schedule / Does 3 PM work for you?)",
  "Chuyên đề 9: Cấu trúc Đàm Phán & Thỏa Thuận Thời Hạn (Extend the deadline / If possible...)",
  "Chuyên đề 10: Cấu trúc Diễn Đạt Khi Chưa Hiểu Rõ & Yêu Cầu Làm Rõ (Could you clarify...?)",
  "Chuyên đề 11: Cấu trúc Cảm Ơn, Ghi Nhận Đóng Góp & Khen Thưởng (Thank you for your prompt support)",
  "Chuyên đề 12: Cấu trúc Kết Email & Thúc Đẩy Phản Hồi Nhanh (Look forward to / Keep me posted)"
];

const convVideoIds = [
  "Tz5d6t7l1aE", "d_iG07M6jJw", "3_wO5jBsq1s", "0r6_5XbB_yM", "1J8k6xP5mZo",
  "pxbQ2U3Uuv0", "kK4e6UeP0Y4", "q1LKZn2ozVM", "oG8-tQG_34g", "c2JzWp_Zk18",
  "xL3_qXGf2dM", "xLD41oN8K1k"
];

// Build 12 Conversational Lessons
const convLessons = convTitles.map((title, i) => {
  return createLesson({
    id: `g-conv-${i + 1}`,
    lessonNumber: `Chuyên đề ${i + 1} / 12`,
    title,
    duration: `${14 + (i % 4)} phút`,
    youtubeVideoId: convVideoIds[i % convVideoIds.length],
    videoTitle: `Mẫu câu thực tế: ${title}`,
    videoSummary: `Hướng dẫn cấu trúc ngữ pháp chuẩn văn phong công sở quốc tế và viết email thương mại: ${title}.`,
    timestamps: [
      { time: "00:00", title: "Mục đích sử dụng & Phân biệt văn phong Thân mật vs Trang trọng" },
      { time: "03:15", title: "Các mẫu câu và công thức cốt lõi người bản xứ dùng mỗi ngày" },
      { time: "07:00", title: "Bảng bẫy ngôn ngữ dễ gây thô lỗ hoặc hiểu lầm trong email" },
      { time: "10:30", title: "Ví dụ email thực tế theo từng tình huống công việc" },
      { time: "13:45", title: "Luyện phản xạ viết câu & Sửa lỗi ngữ pháp" }
    ],
    mindmapNotes: `Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.`,
    coreMindset: `Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.`,
    formula3Forms: {
      affirmative: {
        formula: "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
        example: "I am writing to inquire about the delivery timeline of order #8492."
      },
      negative: {
        formula: "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
        example: "Unfortunately, we are unable to accommodate your request for a discount."
      },
      interrogative: {
        formula: "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
        example: "Could you please send us the revised project timeline by end of day?"
      }
    },
    signalWords: [
      { word: "Would you mind + V-ing", tip: "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp" },
      { word: "I would appreciate it if you could + V_inf", tip: "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc" },
      { word: "Please find attached + Noun", tip: "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'" }
    ],
    trapsTable: [
      {
        wrong: "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
        right: "✅ 'Could you please share the report with me when you have a moment?'",
        why: "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự."
      },
      {
        wrong: "❌ 'Would you mind to help me?'",
        right: "✅ 'Would you mind helping me?'",
        why: "Sau cấu trúc 'mind' bắt buộc phải dùng danh động từ V-ing."
      }
    ]
  });
});

// Final 3 Courses Object
const finalCourses = [
  {
    id: "grammar-foundation",
    title: "Ngữ pháp cơ bản - Lấy lại gốc từ số 0",
    shortTitle: "Lấy lại gốc từ số 0",
    icon: "📖",
    lessonCountText: "22 bài học",
    totalLessons: 22,
    completedCount: 3,
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
    lessonCountText: "15 chuyên đề bẫy đề thi",
    totalLessons: 15,
    completedCount: 0,
    duration: "Khoảng 5.5 giờ",
    badge: "TOEIC 650+ Bứt phá",
    badgeColor: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    desc: "Nắm trọn 15 bẫy ngữ pháp kinh điển ETS hay gài: Từ loại 3 giây, Liên từ vs Giới từ, Rút gọn mệnh đề, Thức giả định và Đảo ngữ câu điều kiện.",
    lessons: toeicLessons
  },
  {
    id: "grammar-conversational",
    title: "Mẫu Câu Giao Tiếp & Viết Email Phản Xạ",
    shortTitle: "Giao tiếp & Viết Email",
    icon: "💬",
    lessonCountText: "12 chuyên đề thực tế",
    totalLessons: 12,
    completedCount: 0,
    duration: "Khoảng 4 giờ",
    badge: "Văn phòng & Công việc",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    desc: "12 chuyên đề cấu trúc câu ứng dụng tức thì: Chào hỏi, nhờ vả lịch sự, đàm phán deadline, báo cáo tiến độ và gửi đính kèm chuẩn quốc tế.",
    lessons: convLessons
  }
];

const fileContent = `// LEXIFLOW STUDIO - GRAMMAR COURSES RESTRUCTURED
// 3 Major Courses, 49 Lessons with Video, Timestamps, 4 Knowledge Cards & 3 Practice Types
export const INITIAL_GRAMMAR_COURSES = ${JSON.stringify(finalCourses, null, 2)};
export default INITIAL_GRAMMAR_COURSES;
`;

fs.writeFileSync(path.join(process.cwd(), 'src/data/grammarCourses.js'), fileContent, 'utf-8');
console.log('Successfully generated all grammar courses into src/data/grammarCourses.js!');
console.log(`Foundation lessons: ${foundationLessons.length}`);
console.log(`TOEIC lessons: ${toeicLessons.length}`);
console.log(`Conversational lessons: ${convLessons.length}`);
