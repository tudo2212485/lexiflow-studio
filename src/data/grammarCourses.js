// LEXIFLOW STUDIO - GRAMMAR COURSES WITH 5 INTERACTIVE SLIDES & PRACTICE
// 3 Major Courses, 49 Lessons with 5-Slide Animated Board Player, Timestamps & 15 Practice Questions
export const INITIAL_GRAMMAR_COURSES = [
  {
    "id": "grammar-foundation",
    "title": "Ngữ pháp cơ bản - Lấy lại gốc từ số 0",
    "shortTitle": "Lấy lại gốc từ số 0",
    "icon": "📖",
    "lessonCountText": "22 bài học",
    "totalLessons": 22,
    "completedCount": 3,
    "duration": "Khoảng 6 giờ",
    "badge": "A0 -> A2 Nền tảng",
    "badgeColor": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    "desc": "Loại bỏ hoàn toàn lỗi ghép từ 'I am agree' hay 'She very busy'. Hiểu bản chất câu đơn S-V-O, 3 thì cốt lõi và cách tự ghép câu như Lego.",
    "lessons": [
      {
        "id": "g-found-1",
        "lessonNumber": "Bài 1 / 22",
        "title": "Bản Chất Câu Tiếng Anh: Khi nào dùng To Be? Khi nào dùng Động Từ Thường?",
        "duration": "16 phút",
        "youtubeVideoId": "2t3n8B-F6r4",
        "videoTitle": "Bài giảng chuẩn: Bản Chất Câu Tiếng Anh",
        "videoSummary": "Giải thích bản chất tư duy ngôn ngữ, công thức 3 thể và mẹo phản xạ 3 giây cho bài: Bản Chất Câu Tiếng Anh: Khi nào dùng To Be? Khi nào dùng Động Từ Thường?.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "1 Câu đơn = S + V. Nếu V là Action -> Dùng V nguyên thể / s / es. Nếu không có Action -> Mượn To Be (am/is/are) kết nối S với Adj/Noun.",
        "coreMindset": "MỖI CÂU ĐƠN BẮT BUỘC PHẢI CÓ 1 ĐỘNG TỪ CHÍNH! Đã có động từ hành động (agree, work, code) -> Tuyệt đối không nhét thêm To Be.",
        "formula3Forms": {
          "affirmative": {
            "formula": "S + am/is/are + Adj/Noun  HOẶC  S + V(s/es) + (O)",
            "example": "She is a talented architect. / She designs modern villas."
          },
          "negative": {
            "formula": "S + am/is/are + NOT + Adj/Noun  HOẶC  S + do/does + NOT + V_inf",
            "example": "They are not ready. / They do not agree with the plan."
          },
          "interrogative": {
            "formula": "Am/Is/Are + S + Adj/Noun?  HOẶC  Do/Does + S + V_inf?",
            "example": "Is the server stable? / Does the server respond fast?"
          }
        },
        "signalWords": [
          {
            "word": "Tính từ (busy, ready, fast, safe)",
            "tip": "Không có hành động -> 100% chọn To Be (am/is/are)"
          },
          {
            "word": "Động từ hành động (agree, start, submit)",
            "tip": "Đã có hành động -> Cấm tuyệt đối nhét To Be đứng trước!"
          },
          {
            "word": "Trợ động từ Do / Does trong câu hỏi",
            "tip": "Đi cùng động từ thường nguyên mẫu: Do you have...?"
          },
          {
            "word": "Đảo ngữ Am / Is / Are lên đầu câu",
            "tip": "Đi cùng tính từ hoặc danh từ: Are you satisfied?"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ I am agree with your opinion.",
            "right": "✅ I agree with your opinion.",
            "why": "'Agree' bản thân đã là động từ thường. Thêm 'am' biến câu thành lỗi 2 động từ tranh nhau vị ngữ."
          },
          {
            "wrong": "❌ The new server very fast today.",
            "right": "✅ The new server is very fast today.",
            "why": "'Fast' là tính từ. Tiếng Anh bắt buộc phải có To Be 'is' làm động từ liên kết."
          }
        ],
        "practice": [
          {
            "q": "Our technical team _______ very busy optimizing database queries this morning.",
            "options": [
              "is",
              "does",
              "are be",
              "be"
            ],
            "answer": 0,
            "explanation": "'Busy' là tính từ -> cần To Be 'is' làm vị ngữ chính cho chủ ngữ số ít 'team'."
          },
          {
            "q": "I completely _______ with the proposal to migrate our services to the cloud.",
            "options": [
              "am agree",
              "agree",
              "is agree",
              "agreeing"
            ],
            "answer": 1,
            "explanation": "'Agree' là động từ thường chỉ quan điểm, đi thẳng với chủ ngữ 'I'."
          },
          {
            "q": "_______ the API gateway ready for high concurrency testing?",
            "options": [
              "Does",
              "Is",
              "Are",
              "Has"
            ],
            "answer": 1,
            "explanation": "'Ready' (sẵn sàng) là tính từ, chủ ngữ 'the API gateway' số ít -> chọn 'Is'."
          },
          {
            "q": "The senior developers _______ in the conference room discussing system architecture.",
            "options": [
              "are",
              "do",
              "staying",
              "is"
            ],
            "answer": 0,
            "explanation": "Chỉ vị trí nơi chốn với chủ ngữ số nhiều 'developers' -> chọn To Be 'are'."
          },
          {
            "q": "Why _______ the web application response time so slow after the last update?",
            "options": [
              "does",
              "is",
              "are",
              "do"
            ],
            "answer": 1,
            "explanation": "'Response time' là danh từ số ít, 'slow' là tính từ -> mượn To Be 'is'."
          },
          {
            "q": "We _______ not have enough bandwidth to stream 4K video simultaneously.",
            "options": [
              "are",
              "do",
              "is",
              "have"
            ],
            "answer": 1,
            "explanation": "'Have' là động từ thường -> câu phủ định dùng trợ động từ 'do not'."
          },
          {
            "q": "The lead designer _______ very meticulous when reviewing UI wireframes.",
            "options": [
              "is",
              "does",
              "has",
              "be"
            ],
            "answer": 0,
            "explanation": "'Meticulous' (tỉ mỉ) là tính từ -> vị ngữ cần To Be 'is'."
          },
          {
            "q": "_______ you prefer working remotely or collaborating at the office?",
            "options": [
              "Are",
              "Do",
              "Is",
              "Have"
            ],
            "answer": 1,
            "explanation": "'Prefer' là động từ thường -> câu hỏi mượn trợ động từ 'Do'."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "MỖI CÂU ĐƠN BẮT BUỘC PHẢI CÓ 1 ĐỘNG TỪ CHÍNH! Đã có động từ hành động (agree, work, code) -> Tuyệt đối không nhét thêm To Be.",
            "wrongText": "❌ I am agree with your opinion.",
            "rightText": "✅ I agree with your opinion.",
            "whyText": "'Agree' bản thân đã là động từ thường. Thêm 'am' biến câu thành lỗi 2 động từ tranh nhau vị ngữ.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "1 Câu đơn = S + V. Nếu V là Action -> Dùng V nguyên thể / s / es. Nếu không có Action -> Mượn To Be (am/is/are) kết nối S với Adj/Noun."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ I am agree with your opinion.. Câu chuẩn xác phải là: ✅ I agree with your opinion.. Lý do: 'Agree' bản thân đã là động từ thường. Thêm 'am' biến câu thành lỗi 2 động từ tranh nhau vị ngữ.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "S + am/is/are + Adj/Noun  HOẶC  S + V(s/es) + (O)",
                "example": "She is a talented architect. / She designs modern villas.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "S + am/is/are + NOT + Adj/Noun  HOẶC  S + do/does + NOT + V_inf",
                "example": "They are not ready. / They do not agree with the plan.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "Am/Is/Are + S + Adj/Noun?  HOẶC  Do/Does + S + V_inf?",
                "example": "Is the server stable? / Does the server respond fast?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Tính từ (busy, ready, fast, safe)",
                "tip": "Không có hành động -> 100% chọn To Be (am/is/are)"
              },
              {
                "keyword": "Động từ hành động (agree, start, submit)",
                "tip": "Đã có hành động -> Cấm tuyệt đối nhét To Be đứng trước!"
              },
              {
                "keyword": "Trợ động từ Do / Does trong câu hỏi",
                "tip": "Đi cùng động từ thường nguyên mẫu: Do you have...?"
              },
              {
                "keyword": "Đảo ngữ Am / Is / Are lên đầu câu",
                "tip": "Đi cùng tính từ hoặc danh từ: Are you satisfied?"
              }
            ],
            "goldenRule": "1 Câu đơn = S + V. Nếu V là Action -> Dùng V nguyên thể / s / es. Nếu không có Action -> Mượn To Be (am/is/are) kết nối S với Adj/Noun.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "She is a talented architect.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "She designs modern villas.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Our technical team _______ very busy optimizing database queries this morning.",
            "options": [
              "is",
              "does",
              "are be",
              "be"
            ],
            "answer": 0,
            "explanation": "'Busy' là tính từ -> cần To Be 'is' làm vị ngữ chính cho chủ ngữ số ít 'team'.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-2",
        "lessonNumber": "Bài 2 / 22",
        "title": "Đại Từ Nhân Xưng, Tân Ngữ & Tính Từ Sở Hữu (Tránh Nhầm Lẫn Cơ Bản)",
        "duration": "17 phút",
        "youtubeVideoId": "2t3n8B-F6r4",
        "videoTitle": "Bài giảng chuẩn: Đại Từ Nhân Xưng, Tân Ngữ & Tính Từ Sở Hữu (Tránh Nhầm Lẫn Cơ Bản)",
        "videoSummary": "Giải thích bản chất tư duy ngôn ngữ, công thức 3 thể và mẹo phản xạ 3 giây cho bài: Đại Từ Nhân Xưng, Tân Ngữ & Tính Từ Sở Hữu (Tránh Nhầm Lẫn Cơ Bản).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Chủ ngữ (I, He, She, They) đứng đầu câu làm chủ thể. Tân ngữ (me, him, her, them) đứng sau động từ/giới từ. Tính từ sở hữu (my, his, her, their) bắt buộc phải có Danh từ đi kèm phía sau.",
        "coreMindset": "Đứng đầu làm chủ thể -> Dùng Chủ ngữ (He). Đứng sau động từ nhận tác động hoặc sau giới từ -> Dùng Tân ngữ (Him). Đứng trước danh từ chỉ sở hữu -> Dùng Tính từ sở hữu (His).",
        "formula3Forms": {
          "affirmative": {
            "formula": "S(Subject) + V + O(Object) + Possessive_Adj + Noun",
            "example": "He sent her his latest software documentation."
          },
          "negative": {
            "formula": "S + auxiliary + NOT + V + O",
            "example": "She did not receive their feedback on time."
          },
          "interrogative": {
            "formula": "Did + S + V + O?",
            "example": "Did you forward them my meeting invitation?"
          }
        },
        "signalWords": [
          {
            "word": "Đứng trước động từ chính (V)",
            "tip": "Luôn chọn Đại từ chủ ngữ (I, He, She, We, They)"
          },
          {
            "word": "Đứng sau động từ hành động hoặc giới từ (to, for, with)",
            "tip": "Luôn chọn Đại từ tân ngữ (me, him, her, us, them)"
          },
          {
            "word": "Đứng trước một Danh từ (report, car, team)",
            "tip": "Luôn chọn Tính từ sở hữu (my, your, his, her, their)"
          },
          {
            "word": "Đứng một mình thay thế cả cụm sở hữu",
            "tip": "Dùng Đại từ sở hữu (mine, yours, hers, theirs)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ The manager gave the project to he.",
            "right": "✅ The manager gave the project to him.",
            "why": "Sau giới từ 'to' bắt buộc phải dùng đại từ tân ngữ 'him', không dùng chủ ngữ 'he'."
          },
          {
            "wrong": "❌ Her is a very talented product manager.",
            "right": "✅ She is a very talented product manager.",
            "why": "Đứng đầu câu làm chủ ngữ phải là 'She', 'Her' chỉ là tính từ sở hữu hoặc tân ngữ."
          }
        ],
        "practice": [
          {
            "q": "The engineering director asked _______ to prepare the presentation slides.",
            "options": [
              "him",
              "he",
              "his",
              "himself"
            ],
            "answer": 0,
            "explanation": "Sau động từ 'asked' cần đại từ tân ngữ 'him'."
          },
          {
            "q": "_______ completed the comprehensive security audit ahead of schedule.",
            "options": [
              "They",
              "Them",
              "Their",
              "Theirs"
            ],
            "answer": 0,
            "explanation": "Đứng đầu câu làm chủ ngữ của động từ 'completed' -> chọn 'They'."
          },
          {
            "q": "Please send _______ resume directly to the human resources department.",
            "options": [
              "your",
              "you",
              "yours",
              "yourself"
            ],
            "answer": 0,
            "explanation": "Đứng trước danh từ 'resume' cần tính từ sở hữu 'your'."
          },
          {
            "q": "This workstation is mine, and the laptop on the table is _______.",
            "options": [
              "hers",
              "her",
              "she",
              "herself"
            ],
            "answer": 0,
            "explanation": "Đại từ sở hữu 'hers' thay thế cho 'her laptop'."
          },
          {
            "q": "Our team submitted the bug fix, but the QA tester rejected _______.",
            "options": [
              "it",
              "its",
              "they",
              "them"
            ],
            "answer": 0,
            "explanation": "'It' làm tân ngữ thay thế cho danh từ số ít 'the bug fix'."
          },
          {
            "q": "Between you and _______, the new deployment strategy seems much safer.",
            "options": [
              "me",
              "I",
              "my",
              "mine"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'between... and' dùng đại từ tân ngữ 'me'."
          },
          {
            "q": "The client appreciated _______ quick turnaround time on the critical incident.",
            "options": [
              "our",
              "we",
              "us",
              "ours"
            ],
            "answer": 0,
            "explanation": "Trước cụm danh từ 'turnaround time' cần tính từ sở hữu 'our'."
          },
          {
            "q": "Can you help _______ configure the continuous integration pipeline?",
            "options": [
              "us",
              "we",
              "our",
              "ourselves"
            ],
            "answer": 0,
            "explanation": "Sau động từ 'help' cần đại từ tân ngữ 'us'."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Đứng đầu làm chủ thể -> Dùng Chủ ngữ (He). Đứng sau động từ nhận tác động hoặc sau giới từ -> Dùng Tân ngữ (Him). Đứng trước danh từ chỉ sở hữu -> Dùng Tính từ sở hữu (His).",
            "wrongText": "❌ The manager gave the project to he.",
            "rightText": "✅ The manager gave the project to him.",
            "whyText": "Sau giới từ 'to' bắt buộc phải dùng đại từ tân ngữ 'him', không dùng chủ ngữ 'he'.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Chủ ngữ (I, He, She, They) đứng đầu câu làm chủ thể. Tân ngữ (me, him, her, them) đứng sau động từ/giới từ. Tính từ sở hữu (my, his, her, their) bắt buộc phải có Danh từ đi kèm phía sau."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ The manager gave the project to he.. Câu chuẩn xác phải là: ✅ The manager gave the project to him.. Lý do: Sau giới từ 'to' bắt buộc phải dùng đại từ tân ngữ 'him', không dùng chủ ngữ 'he'.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "S(Subject) + V + O(Object) + Possessive_Adj + Noun",
                "example": "He sent her his latest software documentation.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "S + auxiliary + NOT + V + O",
                "example": "She did not receive their feedback on time.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "Did + S + V + O?",
                "example": "Did you forward them my meeting invitation?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Đứng trước động từ chính (V)",
                "tip": "Luôn chọn Đại từ chủ ngữ (I, He, She, We, They)"
              },
              {
                "keyword": "Đứng sau động từ hành động hoặc giới từ (to, for, with)",
                "tip": "Luôn chọn Đại từ tân ngữ (me, him, her, us, them)"
              },
              {
                "keyword": "Đứng trước một Danh từ (report, car, team)",
                "tip": "Luôn chọn Tính từ sở hữu (my, your, his, her, their)"
              },
              {
                "keyword": "Đứng một mình thay thế cả cụm sở hữu",
                "tip": "Dùng Đại từ sở hữu (mine, yours, hers, theirs)"
              }
            ],
            "goldenRule": "Chủ ngữ (I, He, She, They) đứng đầu câu làm chủ thể. Tân ngữ (me, him, her, them) đứng sau động từ/giới từ. Tính từ sở hữu (my, his, her, their) bắt buộc phải có Danh từ đi kèm phía sau.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "He sent her his latest software documentation.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "She did not receive their feedback on time.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "The engineering director asked _______ to prepare the presentation slides.",
            "options": [
              "him",
              "he",
              "his",
              "himself"
            ],
            "answer": 0,
            "explanation": "Sau động từ 'asked' cần đại từ tân ngữ 'him'.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-3",
        "lessonNumber": "Bài 3 / 22",
        "title": "Thì Hiện Tại Đơn (Present Simple): Diễn Tả Thói Quen, Sự Thật & Quy Tắc Thêm s/es",
        "duration": "18 phút",
        "youtubeVideoId": "2t3n8B-F6r4",
        "videoTitle": "Bài giảng chuẩn: Thì Hiện Tại Đơn (Present Simple)",
        "videoSummary": "Giải thích bản chất tư duy ngôn ngữ, công thức 3 thể và mẹo phản xạ 3 giây cho bài: Thì Hiện Tại Đơn (Present Simple): Diễn Tả Thói Quen, Sự Thật & Quy Tắc Thêm s/es.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Hiện tại đơn: Diễn tả chân lý, thói quen lặp đi lặp lại hoặc lịch trình cố định. Chủ ngữ số ít (He, She, It, Danh từ số ít) -> Động từ thêm -s/-es.",
        "coreMindset": "Thói quen hàng ngày hoặc quy luật tự nhiên -> Hiện tại đơn. Nhớ quy tắc thêm 'es' sau các âm kết thúc bằng o, s, z, ch, x, sh (Ông Sáu Chạy Xe Sh).",
        "formula3Forms": {
          "affirmative": {
            "formula": "S + V(s/es) + (O)",
            "example": "The server restarts automatically at 2:00 AM every Sunday."
          },
          "negative": {
            "formula": "S + do/does + NOT + V_inf",
            "example": "He does not work on weekends unless there is a critical outage."
          },
          "interrogative": {
            "formula": "Do/Does + S + V_inf?",
            "example": "Does the application cache responses in Redis?"
          }
        },
        "signalWords": [
          {
            "word": "Always, usually, often, frequently, regularly",
            "tip": "Trạng từ tần suất chỉ thói quen lặp đi lặp lại -> Hiện tại đơn"
          },
          {
            "word": "Every day, every week, monthly, annually",
            "tip": "Chu kỳ thời gian cố định -> Chia động từ ở Hiện tại đơn"
          },
          {
            "word": "Once a week, twice a month",
            "tip": "Tần suất thực hiện công việc -> Hiện tại đơn"
          },
          {
            "word": "Động từ kết thúc bằng o, s, z, ch, x, sh",
            "tip": "Chủ ngữ số ít -> Thêm đuôi 'es' (watches, fixes, passes)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ He work as a senior database administrator.",
            "right": "✅ He works as a senior database administrator.",
            "why": "Chủ ngữ ngôi thứ ba số ít 'He' bắt buộc động từ phải thêm 's' thành 'works'."
          },
          {
            "wrong": "❌ She doesn't likes the new user interface layout.",
            "right": "✅ She doesn't like the new user interface layout.",
            "why": "Đã có trợ động từ 'doesn't' thì động từ chính 'like' phải trở về dạng nguyên mẫu không thêm 's'."
          }
        ],
        "practice": [
          {
            "q": "The database maintenance script _______ every night at midnight.",
            "options": [
              "runs",
              "run",
              "running",
              "is run"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'script' + tần suất 'every night' -> động từ thêm 's' ('runs')."
          },
          {
            "q": "Our technical support team _______ 24/7 assistance to global enterprise clients.",
            "options": [
              "provides",
              "provide",
              "providing",
              "are provide"
            ],
            "answer": 0,
            "explanation": "'Team' là danh từ tập hợp số ít -> 'provides'."
          },
          {
            "q": "He _______ not agree with deploying code to production on Friday afternoons.",
            "options": [
              "does",
              "do",
              "is",
              "has"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ 'He' dùng trợ động từ 'does not'."
          },
          {
            "q": "Water _______ at 100 degrees Celsius under normal atmospheric pressure.",
            "options": [
              "boils",
              "boil",
              "is boiling",
              "boiled"
            ],
            "answer": 0,
            "explanation": "Chân lý khoa học tự nhiên luôn chia ở Hiện tại đơn: 'boils'."
          },
          {
            "q": "How often _______ the automated monitoring agent ping the web server?",
            "options": [
              "does",
              "do",
              "is",
              "has"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ 'the agent' số ít -> câu hỏi mượn 'does'."
          },
          {
            "q": "Senior engineers usually _______ junior developers through code review sessions.",
            "options": [
              "mentor",
              "mentors",
              "mentoring",
              "are mentor"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số nhiều 'Senior engineers' đi với động từ nguyên mẫu 'mentor'."
          },
          {
            "q": "The flight to Tokyo _______ at 8:30 AM tomorrow according to the schedule.",
            "options": [
              "departs",
              "depart",
              "will depart",
              "departed"
            ],
            "answer": 0,
            "explanation": "Lịch trình tàu xe cố định dùng Hiện tại đơn mang nghĩa tương lai: 'departs'."
          },
          {
            "q": "She rarely _______ mistakes when writing complex SQL stored procedures.",
            "options": [
              "makes",
              "make",
              "is making",
              "has made"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ 'She' + trạng từ tần suất 'rarely' -> động từ thêm 's' ('makes')."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Thói quen hàng ngày hoặc quy luật tự nhiên -> Hiện tại đơn. Nhớ quy tắc thêm 'es' sau các âm kết thúc bằng o, s, z, ch, x, sh (Ông Sáu Chạy Xe Sh).",
            "wrongText": "❌ He work as a senior database administrator.",
            "rightText": "✅ He works as a senior database administrator.",
            "whyText": "Chủ ngữ ngôi thứ ba số ít 'He' bắt buộc động từ phải thêm 's' thành 'works'.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Hiện tại đơn: Diễn tả chân lý, thói quen lặp đi lặp lại hoặc lịch trình cố định. Chủ ngữ số ít (He, She, It, Danh từ số ít) -> Động từ thêm -s/-es."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ He work as a senior database administrator.. Câu chuẩn xác phải là: ✅ He works as a senior database administrator.. Lý do: Chủ ngữ ngôi thứ ba số ít 'He' bắt buộc động từ phải thêm 's' thành 'works'.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "S + V(s/es) + (O)",
                "example": "The server restarts automatically at 2:00 AM every Sunday.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "S + do/does + NOT + V_inf",
                "example": "He does not work on weekends unless there is a critical outage.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "Do/Does + S + V_inf?",
                "example": "Does the application cache responses in Redis?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Always, usually, often, frequently, regularly",
                "tip": "Trạng từ tần suất chỉ thói quen lặp đi lặp lại -> Hiện tại đơn"
              },
              {
                "keyword": "Every day, every week, monthly, annually",
                "tip": "Chu kỳ thời gian cố định -> Chia động từ ở Hiện tại đơn"
              },
              {
                "keyword": "Once a week, twice a month",
                "tip": "Tần suất thực hiện công việc -> Hiện tại đơn"
              },
              {
                "keyword": "Động từ kết thúc bằng o, s, z, ch, x, sh",
                "tip": "Chủ ngữ số ít -> Thêm đuôi 'es' (watches, fixes, passes)"
              }
            ],
            "goldenRule": "Hiện tại đơn: Diễn tả chân lý, thói quen lặp đi lặp lại hoặc lịch trình cố định. Chủ ngữ số ít (He, She, It, Danh từ số ít) -> Động từ thêm -s/-es.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The server restarts automatically at 2:00 AM every Sunday.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "He does not work on weekends unless there is a critical outage.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "The database maintenance script _______ every night at midnight.",
            "options": [
              "runs",
              "run",
              "running",
              "is run"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'script' + tần suất 'every night' -> động từ thêm 's' ('runs').",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-4",
        "lessonNumber": "Bài 4 / 22",
        "title": "Thì Hiện Tại Tiếp Diễn (Present Continuous): Hành Động Đang Xảy Ra & Kế Hoạch Lên Lịch",
        "duration": "19 phút",
        "youtubeVideoId": "2t3n8B-F6r4",
        "videoTitle": "Bài giảng chuẩn: Thì Hiện Tại Tiếp Diễn (Present Continuous)",
        "videoSummary": "Giải thích bản chất tư duy ngôn ngữ, công thức 3 thể và mẹo phản xạ 3 giây cho bài: Thì Hiện Tại Tiếp Diễn (Present Continuous): Hành Động Đang Xảy Ra & Kế Hoạch Lên Lịch.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Công thức: S + am/is/are + V-ing. Dùng cho hành động đang diễn ra ngay lúc nói HOẶC kế hoạch chắc chắn trong tương lai gần.",
        "coreMindset": "Hành động đang tiếp diễn -> Bắt buộc phải có cả 2: To Be + V-ing. Cảnh báo bẫy Stative Verbs (know, like, understand, want) không chia tiếp diễn.",
        "formula3Forms": {
          "affirmative": {
            "formula": "S + am/is/are + V-ing + (O)",
            "example": "The DevOps engineer is monitoring the traffic spike right now."
          },
          "negative": {
            "formula": "S + am/is/are + NOT + V-ing",
            "example": "We are not deploying the new version today due to a critical bug."
          },
          "interrogative": {
            "formula": "Am/Is/Are + S + V-ing?",
            "example": "Are you attending the sprint planning meeting this afternoon?"
          }
        },
        "signalWords": [
          {
            "word": "Now, right now, at the moment, at present",
            "tip": "Dấu hiệu vàng của hành động đang diễn ra -> am/is/are + V-ing"
          },
          {
            "word": "Look!, Listen!, Watch out!",
            "tip": "Mệnh lệnh gây chú ý hành động đang xảy ra trước mắt"
          },
          {
            "word": "Currently, these days, this week",
            "tip": "Xu hướng hoặc tình huống tạm thời diễn ra trong giai đoạn này"
          },
          {
            "word": "Stative verbs (know, believe, understand, belong)",
            "tip": "Động từ chỉ trạng thái tâm lý/sở hữu -> CẤM chia tiếp diễn!"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ I am knowing how to resolve this database deadlock.",
            "right": "✅ I know how to resolve this database deadlock.",
            "why": "'Know' là động từ trạng thái nhận thức, không được chia ở thì tiếp diễn."
          },
          {
            "wrong": "❌ Look! The server restarting right now.",
            "right": "✅ Look! The server is restarting right now.",
            "why": "Thì tiếp diễn bắt buộc phải có To Be 'is' đi trước 'restarting'."
          }
        ],
        "practice": [
          {
            "q": "Please speak quietly; the development team _______ a client presentation.",
            "options": [
              "is conducting",
              "conducts",
              "conducted",
              "has conducted"
            ],
            "answer": 0,
            "explanation": "Hành động đang diễn ra ngay lúc nói -> 'is conducting'."
          },
          {
            "q": "Right now, our front-end architects _______ the design system components.",
            "options": [
              "are refactoring",
              "refactors",
              "refactor",
              "refactored"
            ],
            "answer": 0,
            "explanation": "'Right now' + chủ ngữ số nhiều 'architects' -> 'are refactoring'."
          },
          {
            "q": "I _______ that this architectural pattern will improve system scalability.",
            "options": [
              "believe",
              "am believing",
              "believed",
              "was believed"
            ],
            "answer": 0,
            "explanation": "'Believe' là động từ trạng thái -> chia Hiện tại đơn 'believe'."
          },
          {
            "q": "Why _______ you _______ the terminal command right now?",
            "options": [
              "are / terminating",
              "do / terminate",
              "have / terminated",
              "did / terminate"
            ],
            "answer": 0,
            "explanation": "'Right now' câu hỏi -> 'are you terminating'."
          },
          {
            "q": "We _______ a critical patch to the production cluster this evening.",
            "options": [
              "are deploying",
              "deploys",
              "deployed",
              "have deploy"
            ],
            "answer": 0,
            "explanation": "Kế hoạch đã lên lịch cụ thể vào tối nay -> Hiện tại tiếp diễn 'are deploying'."
          },
          {
            "q": "Listen! The server alarm _______ in the data center room.",
            "options": [
              "is ringing",
              "rings",
              "rang",
              "ring"
            ],
            "answer": 0,
            "explanation": "Sau mệnh lệnh 'Listen!' diễn tả hành động đang xảy ra -> 'is ringing'."
          },
          {
            "q": "Currently, consumer preferences _______ rapidly toward mobile payments.",
            "options": [
              "are shifting",
              "shifts",
              "shifted",
              "has shifted"
            ],
            "answer": 0,
            "explanation": "'Currently' diễn tả xu hướng đang biến chuyển -> 'are shifting'."
          },
          {
            "q": "He _______ the technical requirements clearly at the moment.",
            "options": [
              "understands",
              "is understanding",
              "understood",
              "has understand"
            ],
            "answer": 0,
            "explanation": "'Understand' là động từ trạng thái -> không chia V-ing, chọn 'understands'."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Hành động đang tiếp diễn -> Bắt buộc phải có cả 2: To Be + V-ing. Cảnh báo bẫy Stative Verbs (know, like, understand, want) không chia tiếp diễn.",
            "wrongText": "❌ I am knowing how to resolve this database deadlock.",
            "rightText": "✅ I know how to resolve this database deadlock.",
            "whyText": "'Know' là động từ trạng thái nhận thức, không được chia ở thì tiếp diễn.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Công thức: S + am/is/are + V-ing. Dùng cho hành động đang diễn ra ngay lúc nói HOẶC kế hoạch chắc chắn trong tương lai gần."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ I am knowing how to resolve this database deadlock.. Câu chuẩn xác phải là: ✅ I know how to resolve this database deadlock.. Lý do: 'Know' là động từ trạng thái nhận thức, không được chia ở thì tiếp diễn.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "S + am/is/are + V-ing + (O)",
                "example": "The DevOps engineer is monitoring the traffic spike right now.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "S + am/is/are + NOT + V-ing",
                "example": "We are not deploying the new version today due to a critical bug.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "Am/Is/Are + S + V-ing?",
                "example": "Are you attending the sprint planning meeting this afternoon?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Now, right now, at the moment, at present",
                "tip": "Dấu hiệu vàng của hành động đang diễn ra -> am/is/are + V-ing"
              },
              {
                "keyword": "Look!, Listen!, Watch out!",
                "tip": "Mệnh lệnh gây chú ý hành động đang xảy ra trước mắt"
              },
              {
                "keyword": "Currently, these days, this week",
                "tip": "Xu hướng hoặc tình huống tạm thời diễn ra trong giai đoạn này"
              },
              {
                "keyword": "Stative verbs (know, believe, understand, belong)",
                "tip": "Động từ chỉ trạng thái tâm lý/sở hữu -> CẤM chia tiếp diễn!"
              }
            ],
            "goldenRule": "Công thức: S + am/is/are + V-ing. Dùng cho hành động đang diễn ra ngay lúc nói HOẶC kế hoạch chắc chắn trong tương lai gần.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The DevOps engineer is monitoring the traffic spike right now.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "We are not deploying the new version today due to a critical bug.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Please speak quietly; the development team _______ a client presentation.",
            "options": [
              "is conducting",
              "conducts",
              "conducted",
              "has conducted"
            ],
            "answer": 0,
            "explanation": "Hành động đang diễn ra ngay lúc nói -> 'is conducting'.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-5",
        "lessonNumber": "Bài 5 / 22",
        "title": "Thì Quá Khứ Đơn (Past Simple): Khép Lại Quá Khứ, V-ed & Bảng Bất Quy Tắc Cốt Lõi",
        "duration": "16 phút",
        "youtubeVideoId": "2t3n8B-F6r4",
        "videoTitle": "Bài giảng chuẩn: Thì Quá Khứ Đơn (Past Simple)",
        "videoSummary": "Giải thích bản chất tư duy ngôn ngữ, công thức 3 thể và mẹo phản xạ 3 giây cho bài: Thì Quá Khứ Đơn (Past Simple): Khép Lại Quá Khứ, V-ed & Bảng Bất Quy Tắc Cốt Lõi.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Quá khứ đơn: Hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ có mốc thời gian rõ ràng (yesterday, last week, in 2023, ago).",
        "coreMindset": "Đã có mốc thời gian kết thúc trong quá khứ -> 100% dùng Quá khứ đơn (V2/ed). Trong câu phủ định và nghi vấn, đã mượn 'did' thì động từ chính phải về nguyên mẫu.",
        "formula3Forms": {
          "affirmative": {
            "formula": "S + V2/ed + (O)",
            "example": "The cybersecurity team patched the vulnerability yesterday."
          },
          "negative": {
            "formula": "S + did + NOT + V_inf",
            "example": "We did not observe any data leakage during the security audit."
          },
          "interrogative": {
            "formula": "Did + S + V_inf?",
            "example": "Did you push the commits to the remote branch last night?"
          }
        },
        "signalWords": [
          {
            "word": "Yesterday, yesterday morning",
            "tip": "Mốc thời gian ngày hôm qua -> Quá khứ đơn"
          },
          {
            "word": "Last week, last month, last year",
            "tip": "Mốc thời gian trước đây -> V2 / V-ed"
          },
          {
            "word": "... ago (two days ago, three months ago)",
            "tip": "Khoảng thời gian cách đây -> Quá khứ đơn"
          },
          {
            "word": "In + năm quá khứ (in 2020, in 2023)",
            "tip": "Năm đã qua trong lịch sử -> V2 / V-ed"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ We didn't received the customer feedback yesterday.",
            "right": "✅ We didn't receive the customer feedback yesterday.",
            "why": "Đã mượn trợ động từ 'didn't' thì động từ chính 'receive' phải ở dạng nguyên mẫu, không thêm -ed."
          },
          {
            "wrong": "❌ I have graduated from university in 2022.",
            "right": "✅ I graduated from university in 2022.",
            "why": "Có năm cụ thể trong quá khứ 'in 2022' bắt buộc dùng Quá khứ đơn, không dùng Hiện tại hoàn thành."
          }
        ],
        "practice": [
          {
            "q": "The senior software engineer _______ the production release two days ago.",
            "options": [
              "authorized",
              "authorizes",
              "authorizing",
              "has authorized"
            ],
            "answer": 0,
            "explanation": "'Two days ago' là mốc quá khứ -> chọn V-ed 'authorized'."
          },
          {
            "q": "We _______ not encounter any connectivity issues during the migration last night.",
            "options": [
              "did",
              "do",
              "were",
              "have"
            ],
            "answer": 0,
            "explanation": "Trợ động từ phủ định quá khứ là 'did not'."
          },
          {
            "q": "The startup company _______ twenty million dollars in Series A funding in 2023.",
            "options": [
              "raised",
              "raises",
              "raising",
              "has raised"
            ],
            "answer": 0,
            "explanation": "'In 2023' là mốc năm quá khứ -> chọn Quá khứ đơn 'raised'."
          },
          {
            "q": "Where _______ you go for the international developer conference last year?",
            "options": [
              "did",
              "do",
              "were",
              "have"
            ],
            "answer": 0,
            "explanation": "Câu hỏi quá khứ với động từ thường 'go' -> mượn 'did'."
          },
          {
            "q": "She _______ the contract after consulting with the company legal team.",
            "options": [
              "signed",
              "signs",
              "signing",
              "is sign"
            ],
            "answer": 0,
            "explanation": "Hành động đã hoàn tất trong quá khứ -> 'signed'."
          },
          {
            "q": "The legacy server crashed suddenly, but the backup system _______ immediately.",
            "options": [
              "activated",
              "activates",
              "activating",
              "activate"
            ],
            "answer": 0,
            "explanation": "Kể lại chuỗi hành động quá khứ -> 'activated'."
          },
          {
            "q": "They _______ the candidate because of his exceptional problem-solving skills.",
            "options": [
              "hired",
              "hires",
              "hiring",
              "hire"
            ],
            "answer": 0,
            "explanation": "Hành động tuyển dụng đã xong trong quá khứ -> 'hired'."
          },
          {
            "q": "Did the product owner _______ the sprint backlog before the retrospective?",
            "options": [
              "approve",
              "approved",
              "approves",
              "approving"
            ],
            "answer": 0,
            "explanation": "Sau trợ động từ 'Did' động từ trở về nguyên mẫu 'approve'."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Đã có mốc thời gian kết thúc trong quá khứ -> 100% dùng Quá khứ đơn (V2/ed). Trong câu phủ định và nghi vấn, đã mượn 'did' thì động từ chính phải về nguyên mẫu.",
            "wrongText": "❌ We didn't received the customer feedback yesterday.",
            "rightText": "✅ We didn't receive the customer feedback yesterday.",
            "whyText": "Đã mượn trợ động từ 'didn't' thì động từ chính 'receive' phải ở dạng nguyên mẫu, không thêm -ed.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Quá khứ đơn: Hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ có mốc thời gian rõ ràng (yesterday, last week, in 2023, ago)."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ We didn't received the customer feedback yesterday.. Câu chuẩn xác phải là: ✅ We didn't receive the customer feedback yesterday.. Lý do: Đã mượn trợ động từ 'didn't' thì động từ chính 'receive' phải ở dạng nguyên mẫu, không thêm -ed.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "S + V2/ed + (O)",
                "example": "The cybersecurity team patched the vulnerability yesterday.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "S + did + NOT + V_inf",
                "example": "We did not observe any data leakage during the security audit.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "Did + S + V_inf?",
                "example": "Did you push the commits to the remote branch last night?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Yesterday, yesterday morning",
                "tip": "Mốc thời gian ngày hôm qua -> Quá khứ đơn"
              },
              {
                "keyword": "Last week, last month, last year",
                "tip": "Mốc thời gian trước đây -> V2 / V-ed"
              },
              {
                "keyword": "... ago (two days ago, three months ago)",
                "tip": "Khoảng thời gian cách đây -> Quá khứ đơn"
              },
              {
                "keyword": "In + năm quá khứ (in 2020, in 2023)",
                "tip": "Năm đã qua trong lịch sử -> V2 / V-ed"
              }
            ],
            "goldenRule": "Quá khứ đơn: Hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ có mốc thời gian rõ ràng (yesterday, last week, in 2023, ago).",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The cybersecurity team patched the vulnerability yesterday.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "We did not observe any data leakage during the security audit.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "The senior software engineer _______ the production release two days ago.",
            "options": [
              "authorized",
              "authorizes",
              "authorizing",
              "has authorized"
            ],
            "answer": 0,
            "explanation": "'Two days ago' là mốc quá khứ -> chọn V-ed 'authorized'.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-6",
        "lessonNumber": "Bài 6 / 22",
        "title": "Thì Tương Lai: Will (Quyết Định Tức Thì) vs Be Going To (Kế Hoạch Dự Định Trước)",
        "duration": "15 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Thì Tương Lai",
        "videoSummary": "Làm chủ bản chất cấu trúc Thì Tương Lai, phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Thì Tương Lai: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Thì Tương Lai để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Thì Tương Lai + (O)",
            "example": "The engineering team successfully applied Thì Tương Lai to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Thì Tương Lai trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Thì Tương Lai do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Thì Tương Lai:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Thì Tương Lai để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Thì Tương Lai do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Thì Tương Lai: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Thì Tương Lai do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Thì Tương Lai + (O)",
                "example": "The engineering team successfully applied Thì Tương Lai to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Thì Tương Lai trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Thì Tương Lai: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Thì Tương Lai to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Thì Tương Lai:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-7",
        "lessonNumber": "Bài 7 / 22",
        "title": "Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little)",
        "duration": "16 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little)",
        "videoSummary": "Làm chủ bản chất cấu trúc Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little), phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little) + (O)",
            "example": "The engineering team successfully applied Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little) to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little) trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little) do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little) do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little) do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little) + (O)",
                "example": "The engineering team successfully applied Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little) to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little) trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little) to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Danh Từ Đếm Được, Không Đếm Được & Lượng Từ (Many, Much, Few, Little):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-8",
        "lessonNumber": "Bài 8 / 22",
        "title": "Tính Từ & Trạng Từ Thể Cách: Vị Trí Bổ Nghĩa & Cạm Bẫy Hard, Fast, Late",
        "duration": "17 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Tính Từ & Trạng Từ Thể Cách",
        "videoSummary": "Làm chủ bản chất cấu trúc Tính Từ & Trạng Từ Thể Cách, phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Tính Từ & Trạng Từ Thể Cách: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Tính Từ & Trạng Từ Thể Cách để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Tính Từ & Trạng Từ Thể Cách + (O)",
            "example": "The engineering team successfully applied Tính Từ & Trạng Từ Thể Cách to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Tính Từ & Trạng Từ Thể Cách trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Tính Từ & Trạng Từ Thể Cách do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Tính Từ & Trạng Từ Thể Cách:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Tính Từ & Trạng Từ Thể Cách để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Tính Từ & Trạng Từ Thể Cách do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Tính Từ & Trạng Từ Thể Cách: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Tính Từ & Trạng Từ Thể Cách do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Tính Từ & Trạng Từ Thể Cách + (O)",
                "example": "The engineering team successfully applied Tính Từ & Trạng Từ Thể Cách to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Tính Từ & Trạng Từ Thể Cách trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Tính Từ & Trạng Từ Thể Cách: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Tính Từ & Trạng Từ Thể Cách to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Tính Từ & Trạng Từ Thể Cách:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-9",
        "lessonNumber": "Bài 9 / 22",
        "title": "Cấp So Sánh: So Sánh Hơn (-er / more) & So Sánh Nhất (-est / the most)",
        "duration": "18 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Cấp So Sánh",
        "videoSummary": "Làm chủ bản chất cấu trúc Cấp So Sánh, phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Cấp So Sánh: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Cấp So Sánh để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Cấp So Sánh + (O)",
            "example": "The engineering team successfully applied Cấp So Sánh to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Cấp So Sánh trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Cấp So Sánh do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Cấp So Sánh:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Cấp So Sánh để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Cấp So Sánh do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Cấp So Sánh: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Cấp So Sánh do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Cấp So Sánh + (O)",
                "example": "The engineering team successfully applied Cấp So Sánh to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Cấp So Sánh trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Cấp So Sánh: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Cấp So Sánh to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Cấp So Sánh:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-10",
        "lessonNumber": "Bài 10 / 22",
        "title": "Giới Từ Thời Gian & Nơi Chốn: In - On - At - By - For Chuẩn Xác",
        "duration": "19 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Giới Từ Thời Gian & Nơi Chốn",
        "videoSummary": "Làm chủ bản chất cấu trúc Giới Từ Thời Gian & Nơi Chốn, phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Giới Từ Thời Gian & Nơi Chốn: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Giới Từ Thời Gian & Nơi Chốn để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Giới Từ Thời Gian & Nơi Chốn + (O)",
            "example": "The engineering team successfully applied Giới Từ Thời Gian & Nơi Chốn to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Giới Từ Thời Gian & Nơi Chốn trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Giới Từ Thời Gian & Nơi Chốn do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Giới Từ Thời Gian & Nơi Chốn:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Giới Từ Thời Gian & Nơi Chốn để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Giới Từ Thời Gian & Nơi Chốn do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Giới Từ Thời Gian & Nơi Chốn: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Giới Từ Thời Gian & Nơi Chốn do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Giới Từ Thời Gian & Nơi Chốn + (O)",
                "example": "The engineering team successfully applied Giới Từ Thời Gian & Nơi Chốn to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Giới Từ Thời Gian & Nơi Chốn trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Giới Từ Thời Gian & Nơi Chốn: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Giới Từ Thời Gian & Nơi Chốn to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Giới Từ Thời Gian & Nơi Chốn:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-11",
        "lessonNumber": "Bài 11 / 22",
        "title": "Động Từ Khuyết Thiếu (Modal Verbs): Can, Could, Should, Must, Have To",
        "duration": "15 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Động Từ Khuyết Thiếu (Modal Verbs)",
        "videoSummary": "Làm chủ bản chất cấu trúc Động Từ Khuyết Thiếu (Modal Verbs), phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Động Từ Khuyết Thiếu (Modal Verbs): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Động Từ Khuyết Thiếu (Modal Verbs) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Động Từ Khuyết Thiếu (Modal Verbs) + (O)",
            "example": "The engineering team successfully applied Động Từ Khuyết Thiếu (Modal Verbs) to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Động Từ Khuyết Thiếu (Modal Verbs) trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Động Từ Khuyết Thiếu (Modal Verbs) do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Động Từ Khuyết Thiếu (Modal Verbs):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Động Từ Khuyết Thiếu (Modal Verbs) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Động Từ Khuyết Thiếu (Modal Verbs) do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Động Từ Khuyết Thiếu (Modal Verbs): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Động Từ Khuyết Thiếu (Modal Verbs) do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Động Từ Khuyết Thiếu (Modal Verbs) + (O)",
                "example": "The engineering team successfully applied Động Từ Khuyết Thiếu (Modal Verbs) to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Động Từ Khuyết Thiếu (Modal Verbs) trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Động Từ Khuyết Thiếu (Modal Verbs): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Động Từ Khuyết Thiếu (Modal Verbs) to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Động Từ Khuyết Thiếu (Modal Verbs):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-12",
        "lessonNumber": "Bài 12 / 22",
        "title": "Danh Động Từ (Gerund - V-ing): Các Động Từ Bắt Buộc Đi Với V-ing",
        "duration": "16 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Danh Động Từ (Gerund - V-ing)",
        "videoSummary": "Làm chủ bản chất cấu trúc Danh Động Từ (Gerund - V-ing), phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Danh Động Từ (Gerund - V-ing): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Danh Động Từ (Gerund - V-ing) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Danh Động Từ (Gerund - V-ing) + (O)",
            "example": "The engineering team successfully applied Danh Động Từ (Gerund - V-ing) to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Danh Động Từ (Gerund - V-ing) trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Danh Động Từ (Gerund - V-ing) do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Danh Động Từ (Gerund - V-ing):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Danh Động Từ (Gerund - V-ing) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Danh Động Từ (Gerund - V-ing) do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Danh Động Từ (Gerund - V-ing): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Danh Động Từ (Gerund - V-ing) do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Danh Động Từ (Gerund - V-ing) + (O)",
                "example": "The engineering team successfully applied Danh Động Từ (Gerund - V-ing) to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Danh Động Từ (Gerund - V-ing) trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Danh Động Từ (Gerund - V-ing): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Danh Động Từ (Gerund - V-ing) to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Danh Động Từ (Gerund - V-ing):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-13",
        "lessonNumber": "Bài 13 / 22",
        "title": "Động Từ Đi Với To-V (Infinitive): Want, Need, Decide, Plan, Promise",
        "duration": "17 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Động Từ Đi Với To-V (Infinitive)",
        "videoSummary": "Làm chủ bản chất cấu trúc Động Từ Đi Với To-V (Infinitive), phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Động Từ Đi Với To-V (Infinitive): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Động Từ Đi Với To-V (Infinitive) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Động Từ Đi Với To-V (Infinitive) + (O)",
            "example": "The engineering team successfully applied Động Từ Đi Với To-V (Infinitive) to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Động Từ Đi Với To-V (Infinitive) trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Động Từ Đi Với To-V (Infinitive) do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Động Từ Đi Với To-V (Infinitive):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Động Từ Đi Với To-V (Infinitive) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Động Từ Đi Với To-V (Infinitive) do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Động Từ Đi Với To-V (Infinitive): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Động Từ Đi Với To-V (Infinitive) do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Động Từ Đi Với To-V (Infinitive) + (O)",
                "example": "The engineering team successfully applied Động Từ Đi Với To-V (Infinitive) to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Động Từ Đi Với To-V (Infinitive) trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Động Từ Đi Với To-V (Infinitive): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Động Từ Đi Với To-V (Infinitive) to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Động Từ Đi Với To-V (Infinitive):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-14",
        "lessonNumber": "Bài 14 / 22",
        "title": "Thì Hiện Tại Hoàn Thành (Present Perfect): Kết Nối Quá Khứ Với Hiện Tại & Dấu Hiệu",
        "duration": "18 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Thì Hiện Tại Hoàn Thành (Present Perfect)",
        "videoSummary": "Làm chủ bản chất cấu trúc Thì Hiện Tại Hoàn Thành (Present Perfect), phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Thì Hiện Tại Hoàn Thành (Present Perfect): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Thì Hiện Tại Hoàn Thành (Present Perfect) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Thì Hiện Tại Hoàn Thành (Present Perfect) + (O)",
            "example": "The engineering team successfully applied Thì Hiện Tại Hoàn Thành (Present Perfect) to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Thì Hiện Tại Hoàn Thành (Present Perfect) trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Thì Hiện Tại Hoàn Thành (Present Perfect) do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Thì Hiện Tại Hoàn Thành (Present Perfect):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Thì Hiện Tại Hoàn Thành (Present Perfect) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Thì Hiện Tại Hoàn Thành (Present Perfect) do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Thì Hiện Tại Hoàn Thành (Present Perfect): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Thì Hiện Tại Hoàn Thành (Present Perfect) do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Thì Hiện Tại Hoàn Thành (Present Perfect) + (O)",
                "example": "The engineering team successfully applied Thì Hiện Tại Hoàn Thành (Present Perfect) to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Thì Hiện Tại Hoàn Thành (Present Perfect) trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Thì Hiện Tại Hoàn Thành (Present Perfect): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Thì Hiện Tại Hoàn Thành (Present Perfect) to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Thì Hiện Tại Hoàn Thành (Present Perfect):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-15",
        "lessonNumber": "Bài 15 / 22",
        "title": "Câu Bị Động (Passive Voice): Công Thức To Be + V3 & Ứng Dụng Trong Báo Cáo",
        "duration": "19 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Câu Bị Động (Passive Voice)",
        "videoSummary": "Làm chủ bản chất cấu trúc Câu Bị Động (Passive Voice), phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Câu Bị Động (Passive Voice): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Câu Bị Động (Passive Voice) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Câu Bị Động (Passive Voice) + (O)",
            "example": "The engineering team successfully applied Câu Bị Động (Passive Voice) to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Câu Bị Động (Passive Voice) trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Câu Bị Động (Passive Voice) do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Câu Bị Động (Passive Voice):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Câu Bị Động (Passive Voice) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Câu Bị Động (Passive Voice) do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Câu Bị Động (Passive Voice): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Câu Bị Động (Passive Voice) do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Câu Bị Động (Passive Voice) + (O)",
                "example": "The engineering team successfully applied Câu Bị Động (Passive Voice) to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Câu Bị Động (Passive Voice) trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Câu Bị Động (Passive Voice): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Câu Bị Động (Passive Voice) to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Câu Bị Động (Passive Voice):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-16",
        "lessonNumber": "Bài 16 / 22",
        "title": "Câu Điều Kiện (Conditionals): Loại 1 (Có Thể Xảy Ra) & Loại 2 (Giả Định Trái Thực Tế)",
        "duration": "15 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Câu Điều Kiện (Conditionals)",
        "videoSummary": "Làm chủ bản chất cấu trúc Câu Điều Kiện (Conditionals), phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Câu Điều Kiện (Conditionals): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Câu Điều Kiện (Conditionals) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Câu Điều Kiện (Conditionals) + (O)",
            "example": "The engineering team successfully applied Câu Điều Kiện (Conditionals) to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Câu Điều Kiện (Conditionals) trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Câu Điều Kiện (Conditionals) do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Câu Điều Kiện (Conditionals):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Câu Điều Kiện (Conditionals) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Câu Điều Kiện (Conditionals) do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Câu Điều Kiện (Conditionals): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Câu Điều Kiện (Conditionals) do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Câu Điều Kiện (Conditionals) + (O)",
                "example": "The engineering team successfully applied Câu Điều Kiện (Conditionals) to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Câu Điều Kiện (Conditionals) trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Câu Điều Kiện (Conditionals): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Câu Điều Kiện (Conditionals) to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Câu Điều Kiện (Conditionals):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-17",
        "lessonNumber": "Bài 17 / 22",
        "title": "Mệnh Đề Quan Hệ (Relative Clauses): Who, Whom, Which, That, Whose",
        "duration": "16 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Mệnh Đề Quan Hệ (Relative Clauses)",
        "videoSummary": "Làm chủ bản chất cấu trúc Mệnh Đề Quan Hệ (Relative Clauses), phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Mệnh Đề Quan Hệ (Relative Clauses): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Mệnh Đề Quan Hệ (Relative Clauses) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Mệnh Đề Quan Hệ (Relative Clauses) + (O)",
            "example": "The engineering team successfully applied Mệnh Đề Quan Hệ (Relative Clauses) to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Mệnh Đề Quan Hệ (Relative Clauses) trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Mệnh Đề Quan Hệ (Relative Clauses) do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Mệnh Đề Quan Hệ (Relative Clauses):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Mệnh Đề Quan Hệ (Relative Clauses) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Mệnh Đề Quan Hệ (Relative Clauses) do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Mệnh Đề Quan Hệ (Relative Clauses): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Mệnh Đề Quan Hệ (Relative Clauses) do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Mệnh Đề Quan Hệ (Relative Clauses) + (O)",
                "example": "The engineering team successfully applied Mệnh Đề Quan Hệ (Relative Clauses) to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Mệnh Đề Quan Hệ (Relative Clauses) trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Mệnh Đề Quan Hệ (Relative Clauses): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Mệnh Đề Quan Hệ (Relative Clauses) to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Mệnh Đề Quan Hệ (Relative Clauses):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-18",
        "lessonNumber": "Bài 18 / 22",
        "title": "Câu Gián Tiếp & Tường Thuật: Quy Tắc Lùi Thì & Đổi Ngôi Chuẩn Xác",
        "duration": "17 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Câu Gián Tiếp & Tường Thuật",
        "videoSummary": "Làm chủ bản chất cấu trúc Câu Gián Tiếp & Tường Thuật, phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Câu Gián Tiếp & Tường Thuật: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Câu Gián Tiếp & Tường Thuật để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Câu Gián Tiếp & Tường Thuật + (O)",
            "example": "The engineering team successfully applied Câu Gián Tiếp & Tường Thuật to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Câu Gián Tiếp & Tường Thuật trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Câu Gián Tiếp & Tường Thuật do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Câu Gián Tiếp & Tường Thuật:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Câu Gián Tiếp & Tường Thuật để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Câu Gián Tiếp & Tường Thuật do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Câu Gián Tiếp & Tường Thuật: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Câu Gián Tiếp & Tường Thuật do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Câu Gián Tiếp & Tường Thuật + (O)",
                "example": "The engineering team successfully applied Câu Gián Tiếp & Tường Thuật to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Câu Gián Tiếp & Tường Thuật trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Câu Gián Tiếp & Tường Thuật: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Câu Gián Tiếp & Tường Thuật to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Câu Gián Tiếp & Tường Thuật:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-19",
        "lessonNumber": "Bài 19 / 22",
        "title": "Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc",
        "duration": "18 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc",
        "videoSummary": "Làm chủ bản chất cấu trúc Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc, phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc + (O)",
            "example": "The engineering team successfully applied Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc + (O)",
                "example": "The engineering team successfully applied Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Liên Từ Nối Câu (And, But, So, Because, Although, However) Mạch Lạc:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-20",
        "lessonNumber": "Bài 20 / 22",
        "title": "Mạo Từ A, An, The: Bí Quyết Không Bao Giờ Dùng Sai",
        "duration": "19 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Mạo Từ A, An, The",
        "videoSummary": "Làm chủ bản chất cấu trúc Mạo Từ A, An, The, phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Mạo Từ A, An, The: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Mạo Từ A, An, The để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Mạo Từ A, An, The + (O)",
            "example": "The engineering team successfully applied Mạo Từ A, An, The to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Mạo Từ A, An, The trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Mạo Từ A, An, The do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Mạo Từ A, An, The:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Mạo Từ A, An, The để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Mạo Từ A, An, The do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Mạo Từ A, An, The: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Mạo Từ A, An, The do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Mạo Từ A, An, The + (O)",
                "example": "The engineering team successfully applied Mạo Từ A, An, The to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Mạo Từ A, An, The trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Mạo Từ A, An, The: Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Mạo Từ A, An, The to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Mạo Từ A, An, The:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-21",
        "lessonNumber": "Bài 21 / 22",
        "title": "Câu Hỏi Đuôi (Tag Questions): Nguyên Tắc Ngược Thể & Ngữ Điệu Tự Nhiên",
        "duration": "15 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Câu Hỏi Đuôi (Tag Questions)",
        "videoSummary": "Làm chủ bản chất cấu trúc Câu Hỏi Đuôi (Tag Questions), phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Câu Hỏi Đuôi (Tag Questions): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Câu Hỏi Đuôi (Tag Questions) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Câu Hỏi Đuôi (Tag Questions) + (O)",
            "example": "The engineering team successfully applied Câu Hỏi Đuôi (Tag Questions) to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Câu Hỏi Đuôi (Tag Questions) trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Câu Hỏi Đuôi (Tag Questions) do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Câu Hỏi Đuôi (Tag Questions):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Câu Hỏi Đuôi (Tag Questions) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Câu Hỏi Đuôi (Tag Questions) do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Câu Hỏi Đuôi (Tag Questions): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Câu Hỏi Đuôi (Tag Questions) do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Câu Hỏi Đuôi (Tag Questions) + (O)",
                "example": "The engineering team successfully applied Câu Hỏi Đuôi (Tag Questions) to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Câu Hỏi Đuôi (Tag Questions) trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Câu Hỏi Đuôi (Tag Questions): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Câu Hỏi Đuôi (Tag Questions) to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Câu Hỏi Đuôi (Tag Questions):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-found-22",
        "lessonNumber": "Bài 22 / 22",
        "title": "Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement): Bẫy Điểm Tuyệt Đối",
        "duration": "16 phút",
        "youtubeVideoId": "D83mF4xXw-g",
        "videoTitle": "Bài giảng trực quan: Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement)",
        "videoSummary": "Làm chủ bản chất cấu trúc Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement), phân biệt cạm bẫy và làm chủ 15 câu bài tập thực hành.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Tình huống & Cạm bẫy hay gặp"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức 3 thể S-V-O"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo phản xạ 3 giây"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ trên bảng"
          }
        ],
        "mindmapNotes": "Nắm vững bản chất của Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
        "coreMindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement) + (O)",
            "example": "The engineering team successfully applied Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement) to optimize system performance."
          },
          "negative": {
            "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
            "example": "They did not encounter any architectural issues during the deployment."
          },
          "interrogative": {
            "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
            "example": "Did the senior architect review and approve the pull request?"
          }
        },
        "signalWords": [
          {
            "word": "Từ khóa chính",
            "tip": "Nhận diện ngay cấu trúc của Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement) trong 3 giây đầu tiên."
          },
          {
            "word": "Trạng từ nhận biết",
            "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
          },
          {
            "word": "Cụm danh từ đi kèm",
            "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Nhầm lẫn khi áp dụng cấu trúc Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement) do dịch từng từ.",
            "right": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "why": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy bản chất: Không học vẹt công thức. Áp dụng cấu trúc Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement) để diễn đạt chính xác ngữ nghĩa trong công việc và thi cử.",
            "wrongText": "❌ Nhầm lẫn khi áp dụng cấu trúc Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement) do dịch từng từ.",
            "rightText": "✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.",
            "whyText": "Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Nắm vững bản chất của Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Nhầm lẫn khi áp dụng cấu trúc Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement) do dịch từng từ.. Câu chuẩn xác phải là: ✅ Tuân thủ chính xác quy tắc ngữ pháp tiếng Anh tiêu chuẩn.. Lý do: Tiếng Anh có quy tắc cố định về trật tự từ và trợ động từ đi kèm.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: S + Cấu trúc chuẩn của Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement) + (O)",
                "example": "The engineering team successfully applied Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement) to optimize system performance.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định: Dạng phủ định chuẩn với trợ động từ và NOT",
                "example": "They did not encounter any architectural issues during the deployment.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Nghi vấn: Đảo trợ động từ hoặc từ để hỏi lên trước S",
                "example": "Did the senior architect review and approve the pull request?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Từ khóa chính",
                "tip": "Nhận diện ngay cấu trúc của Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement) trong 3 giây đầu tiên."
              },
              {
                "keyword": "Trạng từ nhận biết",
                "tip": "Xác định mốc thời gian hoặc mức độ bổ nghĩa."
              },
              {
                "keyword": "Cụm danh từ đi kèm",
                "tip": "Kiểm tra sự hòa hợp số ít / số nhiều của chủ ngữ."
              }
            ],
            "goldenRule": "Nắm vững bản chất của Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement): Xác định đúng chủ thể S, động từ chính V và trật tự từ bổ nghĩa trong câu.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The engineering team successfully applied Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement) to optimize system performance.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "They did not encounter any architectural issues during the deployment.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject-Verb Agreement):",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      }
    ]
  },
  {
    "id": "grammar-toeic",
    "title": "Trọng Tâm Ngữ Pháp TOEIC Part 5 & 6",
    "shortTitle": "Trọng tâm TOEIC Part 5 & 6",
    "icon": "🎯",
    "lessonCountText": "15 chuyên đề bẫy đề thi",
    "totalLessons": 15,
    "completedCount": 0,
    "duration": "Khoảng 5.5 giờ",
    "badge": "TOEIC 650+ Bứt phá",
    "badgeColor": "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    "desc": "Nắm trọn 15 bẫy ngữ pháp kinh điển ETS hay gài: Từ loại 3 giây, Liên từ vs Giới từ, Rút gọn mệnh đề, Thức giả định và Đảo ngữ câu điều kiện.",
    "lessons": [
      {
        "id": "g-toeic-1",
        "lessonNumber": "Chuyên đề 1 / 15",
        "title": "Chuyên đề 1: Bẫy Từ Loại - Xác định vị trí Danh từ / Tính từ / Trạng từ / Động từ trong 3 giây",
        "duration": "18 phút",
        "youtubeVideoId": "oG8-tQG_34g",
        "videoTitle": "Bẫy TOEIC Part 5 & 6: Chuyên đề 1",
        "videoSummary": "Tuyệt chiêu nhận diện bẫy đề thi ETS TOEIC và mẹo giải nhanh trong 5 giây cho: Chuyên đề 1: Bẫy Từ Loại - Xác định vị trí Danh từ / Tính từ / Trạng từ / Động từ trong 3 giây.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Phân tích bẫy thường gặp trong đề thi TOEIC"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức và cấu trúc ngữ pháp trọng tâm"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo 3 giây nhìn vào khoảng trống để chọn đáp án"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ từ đề thi thật & Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ câu hỏi Part 5"
          }
        ],
        "mindmapNotes": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
        "coreMindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
            "example": "The marketing director successfully negotiated the annual partnership agreement."
          },
          "negative": {
            "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
            "example": "The applicant did not submit the required certification by the deadline."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
            "example": "Has the accounting division finalized the quarterly expenditure report?"
          }
        },
        "signalWords": [
          {
            "word": "Trước chỗ trống là Động từ hành động",
            "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
          },
          {
            "word": "Trước chỗ trống là To Be / Linking Verb",
            "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
          },
          {
            "word": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
            "tip": "Cần 1 Danh từ (Noun) làm từ chính"
          },
          {
            "word": "Sau chỗ trống là cụm danh từ (Noun phrase)",
            "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "right": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "why": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause."
          },
          {
            "wrong": "❌ Chọn danh từ số ít sau các lượng từ như 'several', 'numerous', 'various'.",
            "right": "✅ Đi với danh từ đếm được số nhiều (several documents, numerous candidates).",
            "why": "Các lượng từ này biểu thị số nhiều, danh từ bắt buộc phải có đuôi -s/es."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 1:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
            "wrongText": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "rightText": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "whyText": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).. Câu chuẩn xác phải là: ✅ Dùng 'Although / Even though' trước một mệnh đề S + V.. Lý do: 'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
                "example": "The marketing director successfully negotiated the annual partnership agreement.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
                "example": "The applicant did not submit the required certification by the deadline.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
                "example": "Has the accounting division finalized the quarterly expenditure report?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Trước chỗ trống là Động từ hành động",
                "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
              },
              {
                "keyword": "Trước chỗ trống là To Be / Linking Verb",
                "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
              },
              {
                "keyword": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
                "tip": "Cần 1 Danh từ (Noun) làm từ chính"
              },
              {
                "keyword": "Sau chỗ trống là cụm danh từ (Noun phrase)",
                "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
              }
            ],
            "goldenRule": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The marketing director successfully negotiated the annual partnership agreement.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "The applicant did not submit the required certification by the deadline.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 1:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-toeic-2",
        "lessonNumber": "Chuyên đề 2 / 15",
        "title": "Chuyên đề 2: Cụm Danh Từ (Noun Phrases) & Vị trí Tính từ sở hữu / Đại từ phản thân",
        "duration": "19 phút",
        "youtubeVideoId": "oG8-tQG_34g",
        "videoTitle": "Bẫy TOEIC Part 5 & 6: Chuyên đề 2",
        "videoSummary": "Tuyệt chiêu nhận diện bẫy đề thi ETS TOEIC và mẹo giải nhanh trong 5 giây cho: Chuyên đề 2: Cụm Danh Từ (Noun Phrases) & Vị trí Tính từ sở hữu / Đại từ phản thân.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Phân tích bẫy thường gặp trong đề thi TOEIC"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức và cấu trúc ngữ pháp trọng tâm"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo 3 giây nhìn vào khoảng trống để chọn đáp án"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ từ đề thi thật & Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ câu hỏi Part 5"
          }
        ],
        "mindmapNotes": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
        "coreMindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
            "example": "The marketing director successfully negotiated the annual partnership agreement."
          },
          "negative": {
            "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
            "example": "The applicant did not submit the required certification by the deadline."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
            "example": "Has the accounting division finalized the quarterly expenditure report?"
          }
        },
        "signalWords": [
          {
            "word": "Trước chỗ trống là Động từ hành động",
            "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
          },
          {
            "word": "Trước chỗ trống là To Be / Linking Verb",
            "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
          },
          {
            "word": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
            "tip": "Cần 1 Danh từ (Noun) làm từ chính"
          },
          {
            "word": "Sau chỗ trống là cụm danh từ (Noun phrase)",
            "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "right": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "why": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause."
          },
          {
            "wrong": "❌ Chọn danh từ số ít sau các lượng từ như 'several', 'numerous', 'various'.",
            "right": "✅ Đi với danh từ đếm được số nhiều (several documents, numerous candidates).",
            "why": "Các lượng từ này biểu thị số nhiều, danh từ bắt buộc phải có đuôi -s/es."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 2:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
            "wrongText": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "rightText": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "whyText": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).. Câu chuẩn xác phải là: ✅ Dùng 'Although / Even though' trước một mệnh đề S + V.. Lý do: 'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
                "example": "The marketing director successfully negotiated the annual partnership agreement.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
                "example": "The applicant did not submit the required certification by the deadline.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
                "example": "Has the accounting division finalized the quarterly expenditure report?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Trước chỗ trống là Động từ hành động",
                "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
              },
              {
                "keyword": "Trước chỗ trống là To Be / Linking Verb",
                "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
              },
              {
                "keyword": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
                "tip": "Cần 1 Danh từ (Noun) làm từ chính"
              },
              {
                "keyword": "Sau chỗ trống là cụm danh từ (Noun phrase)",
                "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
              }
            ],
            "goldenRule": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The marketing director successfully negotiated the annual partnership agreement.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "The applicant did not submit the required certification by the deadline.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 2:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-toeic-3",
        "lessonNumber": "Chuyên đề 3 / 15",
        "title": "Chuyên đề 3: Phân biệt Liên từ (Although/Because) vs Giới từ (Despite/Due to)",
        "duration": "20 phút",
        "youtubeVideoId": "oG8-tQG_34g",
        "videoTitle": "Bẫy TOEIC Part 5 & 6: Chuyên đề 3",
        "videoSummary": "Tuyệt chiêu nhận diện bẫy đề thi ETS TOEIC và mẹo giải nhanh trong 5 giây cho: Chuyên đề 3: Phân biệt Liên từ (Although/Because) vs Giới từ (Despite/Due to).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Phân tích bẫy thường gặp trong đề thi TOEIC"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức và cấu trúc ngữ pháp trọng tâm"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo 3 giây nhìn vào khoảng trống để chọn đáp án"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ từ đề thi thật & Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ câu hỏi Part 5"
          }
        ],
        "mindmapNotes": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
        "coreMindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
            "example": "The marketing director successfully negotiated the annual partnership agreement."
          },
          "negative": {
            "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
            "example": "The applicant did not submit the required certification by the deadline."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
            "example": "Has the accounting division finalized the quarterly expenditure report?"
          }
        },
        "signalWords": [
          {
            "word": "Trước chỗ trống là Động từ hành động",
            "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
          },
          {
            "word": "Trước chỗ trống là To Be / Linking Verb",
            "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
          },
          {
            "word": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
            "tip": "Cần 1 Danh từ (Noun) làm từ chính"
          },
          {
            "word": "Sau chỗ trống là cụm danh từ (Noun phrase)",
            "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "right": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "why": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause."
          },
          {
            "wrong": "❌ Chọn danh từ số ít sau các lượng từ như 'several', 'numerous', 'various'.",
            "right": "✅ Đi với danh từ đếm được số nhiều (several documents, numerous candidates).",
            "why": "Các lượng từ này biểu thị số nhiều, danh từ bắt buộc phải có đuôi -s/es."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 3:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
            "wrongText": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "rightText": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "whyText": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).. Câu chuẩn xác phải là: ✅ Dùng 'Although / Even though' trước một mệnh đề S + V.. Lý do: 'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
                "example": "The marketing director successfully negotiated the annual partnership agreement.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
                "example": "The applicant did not submit the required certification by the deadline.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
                "example": "Has the accounting division finalized the quarterly expenditure report?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Trước chỗ trống là Động từ hành động",
                "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
              },
              {
                "keyword": "Trước chỗ trống là To Be / Linking Verb",
                "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
              },
              {
                "keyword": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
                "tip": "Cần 1 Danh từ (Noun) làm từ chính"
              },
              {
                "keyword": "Sau chỗ trống là cụm danh từ (Noun phrase)",
                "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
              }
            ],
            "goldenRule": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The marketing director successfully negotiated the annual partnership agreement.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "The applicant did not submit the required certification by the deadline.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 3:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-toeic-4",
        "lessonNumber": "Chuyên đề 4 / 15",
        "title": "Chuyên đề 4: Phân từ rút gọn Chủ động (-ing) vs Bị động (-ed) bổ nghĩa danh từ",
        "duration": "21 phút",
        "youtubeVideoId": "oG8-tQG_34g",
        "videoTitle": "Bẫy TOEIC Part 5 & 6: Chuyên đề 4",
        "videoSummary": "Tuyệt chiêu nhận diện bẫy đề thi ETS TOEIC và mẹo giải nhanh trong 5 giây cho: Chuyên đề 4: Phân từ rút gọn Chủ động (-ing) vs Bị động (-ed) bổ nghĩa danh từ.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Phân tích bẫy thường gặp trong đề thi TOEIC"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức và cấu trúc ngữ pháp trọng tâm"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo 3 giây nhìn vào khoảng trống để chọn đáp án"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ từ đề thi thật & Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ câu hỏi Part 5"
          }
        ],
        "mindmapNotes": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
        "coreMindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
            "example": "The marketing director successfully negotiated the annual partnership agreement."
          },
          "negative": {
            "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
            "example": "The applicant did not submit the required certification by the deadline."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
            "example": "Has the accounting division finalized the quarterly expenditure report?"
          }
        },
        "signalWords": [
          {
            "word": "Trước chỗ trống là Động từ hành động",
            "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
          },
          {
            "word": "Trước chỗ trống là To Be / Linking Verb",
            "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
          },
          {
            "word": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
            "tip": "Cần 1 Danh từ (Noun) làm từ chính"
          },
          {
            "word": "Sau chỗ trống là cụm danh từ (Noun phrase)",
            "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "right": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "why": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause."
          },
          {
            "wrong": "❌ Chọn danh từ số ít sau các lượng từ như 'several', 'numerous', 'various'.",
            "right": "✅ Đi với danh từ đếm được số nhiều (several documents, numerous candidates).",
            "why": "Các lượng từ này biểu thị số nhiều, danh từ bắt buộc phải có đuôi -s/es."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 4:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
            "wrongText": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "rightText": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "whyText": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).. Câu chuẩn xác phải là: ✅ Dùng 'Although / Even though' trước một mệnh đề S + V.. Lý do: 'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
                "example": "The marketing director successfully negotiated the annual partnership agreement.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
                "example": "The applicant did not submit the required certification by the deadline.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
                "example": "Has the accounting division finalized the quarterly expenditure report?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Trước chỗ trống là Động từ hành động",
                "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
              },
              {
                "keyword": "Trước chỗ trống là To Be / Linking Verb",
                "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
              },
              {
                "keyword": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
                "tip": "Cần 1 Danh từ (Noun) làm từ chính"
              },
              {
                "keyword": "Sau chỗ trống là cụm danh từ (Noun phrase)",
                "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
              }
            ],
            "goldenRule": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The marketing director successfully negotiated the annual partnership agreement.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "The applicant did not submit the required certification by the deadline.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 4:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-toeic-5",
        "lessonNumber": "Chuyên đề 5 / 15",
        "title": "Chuyên đề 5: Rút gọn Mệnh đề quan hệ trong hợp đồng và văn bản công sở",
        "duration": "18 phút",
        "youtubeVideoId": "oG8-tQG_34g",
        "videoTitle": "Bẫy TOEIC Part 5 & 6: Chuyên đề 5",
        "videoSummary": "Tuyệt chiêu nhận diện bẫy đề thi ETS TOEIC và mẹo giải nhanh trong 5 giây cho: Chuyên đề 5: Rút gọn Mệnh đề quan hệ trong hợp đồng và văn bản công sở.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Phân tích bẫy thường gặp trong đề thi TOEIC"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức và cấu trúc ngữ pháp trọng tâm"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo 3 giây nhìn vào khoảng trống để chọn đáp án"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ từ đề thi thật & Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ câu hỏi Part 5"
          }
        ],
        "mindmapNotes": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
        "coreMindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
            "example": "The marketing director successfully negotiated the annual partnership agreement."
          },
          "negative": {
            "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
            "example": "The applicant did not submit the required certification by the deadline."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
            "example": "Has the accounting division finalized the quarterly expenditure report?"
          }
        },
        "signalWords": [
          {
            "word": "Trước chỗ trống là Động từ hành động",
            "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
          },
          {
            "word": "Trước chỗ trống là To Be / Linking Verb",
            "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
          },
          {
            "word": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
            "tip": "Cần 1 Danh từ (Noun) làm từ chính"
          },
          {
            "word": "Sau chỗ trống là cụm danh từ (Noun phrase)",
            "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "right": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "why": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause."
          },
          {
            "wrong": "❌ Chọn danh từ số ít sau các lượng từ như 'several', 'numerous', 'various'.",
            "right": "✅ Đi với danh từ đếm được số nhiều (several documents, numerous candidates).",
            "why": "Các lượng từ này biểu thị số nhiều, danh từ bắt buộc phải có đuôi -s/es."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 5:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
            "wrongText": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "rightText": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "whyText": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).. Câu chuẩn xác phải là: ✅ Dùng 'Although / Even though' trước một mệnh đề S + V.. Lý do: 'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
                "example": "The marketing director successfully negotiated the annual partnership agreement.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
                "example": "The applicant did not submit the required certification by the deadline.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
                "example": "Has the accounting division finalized the quarterly expenditure report?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Trước chỗ trống là Động từ hành động",
                "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
              },
              {
                "keyword": "Trước chỗ trống là To Be / Linking Verb",
                "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
              },
              {
                "keyword": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
                "tip": "Cần 1 Danh từ (Noun) làm từ chính"
              },
              {
                "keyword": "Sau chỗ trống là cụm danh từ (Noun phrase)",
                "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
              }
            ],
            "goldenRule": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The marketing director successfully negotiated the annual partnership agreement.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "The applicant did not submit the required certification by the deadline.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 5:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-toeic-6",
        "lessonNumber": "Chuyên đề 6 / 15",
        "title": "Chuyên đề 6: Sự hòa hợp Chủ ngữ & Động từ (Subject-Verb Agreement) với Each/Every/Along with",
        "duration": "19 phút",
        "youtubeVideoId": "oG8-tQG_34g",
        "videoTitle": "Bẫy TOEIC Part 5 & 6: Chuyên đề 6",
        "videoSummary": "Tuyệt chiêu nhận diện bẫy đề thi ETS TOEIC và mẹo giải nhanh trong 5 giây cho: Chuyên đề 6: Sự hòa hợp Chủ ngữ & Động từ (Subject-Verb Agreement) với Each/Every/Along with.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Phân tích bẫy thường gặp trong đề thi TOEIC"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức và cấu trúc ngữ pháp trọng tâm"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo 3 giây nhìn vào khoảng trống để chọn đáp án"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ từ đề thi thật & Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ câu hỏi Part 5"
          }
        ],
        "mindmapNotes": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
        "coreMindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
            "example": "The marketing director successfully negotiated the annual partnership agreement."
          },
          "negative": {
            "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
            "example": "The applicant did not submit the required certification by the deadline."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
            "example": "Has the accounting division finalized the quarterly expenditure report?"
          }
        },
        "signalWords": [
          {
            "word": "Trước chỗ trống là Động từ hành động",
            "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
          },
          {
            "word": "Trước chỗ trống là To Be / Linking Verb",
            "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
          },
          {
            "word": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
            "tip": "Cần 1 Danh từ (Noun) làm từ chính"
          },
          {
            "word": "Sau chỗ trống là cụm danh từ (Noun phrase)",
            "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "right": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "why": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause."
          },
          {
            "wrong": "❌ Chọn danh từ số ít sau các lượng từ như 'several', 'numerous', 'various'.",
            "right": "✅ Đi với danh từ đếm được số nhiều (several documents, numerous candidates).",
            "why": "Các lượng từ này biểu thị số nhiều, danh từ bắt buộc phải có đuôi -s/es."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 6:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
            "wrongText": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "rightText": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "whyText": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).. Câu chuẩn xác phải là: ✅ Dùng 'Although / Even though' trước một mệnh đề S + V.. Lý do: 'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
                "example": "The marketing director successfully negotiated the annual partnership agreement.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
                "example": "The applicant did not submit the required certification by the deadline.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
                "example": "Has the accounting division finalized the quarterly expenditure report?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Trước chỗ trống là Động từ hành động",
                "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
              },
              {
                "keyword": "Trước chỗ trống là To Be / Linking Verb",
                "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
              },
              {
                "keyword": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
                "tip": "Cần 1 Danh từ (Noun) làm từ chính"
              },
              {
                "keyword": "Sau chỗ trống là cụm danh từ (Noun phrase)",
                "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
              }
            ],
            "goldenRule": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The marketing director successfully negotiated the annual partnership agreement.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "The applicant did not submit the required certification by the deadline.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 6:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-toeic-7",
        "lessonNumber": "Chuyên đề 7 / 15",
        "title": "Chuyên đề 7: Động từ đi kèm To-V vs V-ing trong các thông báo nhân sự và kinh doanh",
        "duration": "20 phút",
        "youtubeVideoId": "oG8-tQG_34g",
        "videoTitle": "Bẫy TOEIC Part 5 & 6: Chuyên đề 7",
        "videoSummary": "Tuyệt chiêu nhận diện bẫy đề thi ETS TOEIC và mẹo giải nhanh trong 5 giây cho: Chuyên đề 7: Động từ đi kèm To-V vs V-ing trong các thông báo nhân sự và kinh doanh.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Phân tích bẫy thường gặp trong đề thi TOEIC"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức và cấu trúc ngữ pháp trọng tâm"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo 3 giây nhìn vào khoảng trống để chọn đáp án"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ từ đề thi thật & Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ câu hỏi Part 5"
          }
        ],
        "mindmapNotes": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
        "coreMindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
            "example": "The marketing director successfully negotiated the annual partnership agreement."
          },
          "negative": {
            "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
            "example": "The applicant did not submit the required certification by the deadline."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
            "example": "Has the accounting division finalized the quarterly expenditure report?"
          }
        },
        "signalWords": [
          {
            "word": "Trước chỗ trống là Động từ hành động",
            "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
          },
          {
            "word": "Trước chỗ trống là To Be / Linking Verb",
            "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
          },
          {
            "word": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
            "tip": "Cần 1 Danh từ (Noun) làm từ chính"
          },
          {
            "word": "Sau chỗ trống là cụm danh từ (Noun phrase)",
            "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "right": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "why": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause."
          },
          {
            "wrong": "❌ Chọn danh từ số ít sau các lượng từ như 'several', 'numerous', 'various'.",
            "right": "✅ Đi với danh từ đếm được số nhiều (several documents, numerous candidates).",
            "why": "Các lượng từ này biểu thị số nhiều, danh từ bắt buộc phải có đuôi -s/es."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 7:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
            "wrongText": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "rightText": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "whyText": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).. Câu chuẩn xác phải là: ✅ Dùng 'Although / Even though' trước một mệnh đề S + V.. Lý do: 'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
                "example": "The marketing director successfully negotiated the annual partnership agreement.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
                "example": "The applicant did not submit the required certification by the deadline.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
                "example": "Has the accounting division finalized the quarterly expenditure report?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Trước chỗ trống là Động từ hành động",
                "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
              },
              {
                "keyword": "Trước chỗ trống là To Be / Linking Verb",
                "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
              },
              {
                "keyword": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
                "tip": "Cần 1 Danh từ (Noun) làm từ chính"
              },
              {
                "keyword": "Sau chỗ trống là cụm danh từ (Noun phrase)",
                "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
              }
            ],
            "goldenRule": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The marketing director successfully negotiated the annual partnership agreement.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "The applicant did not submit the required certification by the deadline.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 7:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-toeic-8",
        "lessonNumber": "Chuyên đề 8 / 15",
        "title": "Chuyên đề 8: Thì Hiện tại hoàn thành vs Quá khứ đơn (Dấu hiệu Since/For/Recently/Already)",
        "duration": "21 phút",
        "youtubeVideoId": "oG8-tQG_34g",
        "videoTitle": "Bẫy TOEIC Part 5 & 6: Chuyên đề 8",
        "videoSummary": "Tuyệt chiêu nhận diện bẫy đề thi ETS TOEIC và mẹo giải nhanh trong 5 giây cho: Chuyên đề 8: Thì Hiện tại hoàn thành vs Quá khứ đơn (Dấu hiệu Since/For/Recently/Already).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Phân tích bẫy thường gặp trong đề thi TOEIC"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức và cấu trúc ngữ pháp trọng tâm"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo 3 giây nhìn vào khoảng trống để chọn đáp án"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ từ đề thi thật & Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ câu hỏi Part 5"
          }
        ],
        "mindmapNotes": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
        "coreMindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
            "example": "The marketing director successfully negotiated the annual partnership agreement."
          },
          "negative": {
            "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
            "example": "The applicant did not submit the required certification by the deadline."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
            "example": "Has the accounting division finalized the quarterly expenditure report?"
          }
        },
        "signalWords": [
          {
            "word": "Trước chỗ trống là Động từ hành động",
            "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
          },
          {
            "word": "Trước chỗ trống là To Be / Linking Verb",
            "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
          },
          {
            "word": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
            "tip": "Cần 1 Danh từ (Noun) làm từ chính"
          },
          {
            "word": "Sau chỗ trống là cụm danh từ (Noun phrase)",
            "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "right": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "why": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause."
          },
          {
            "wrong": "❌ Chọn danh từ số ít sau các lượng từ như 'several', 'numerous', 'various'.",
            "right": "✅ Đi với danh từ đếm được số nhiều (several documents, numerous candidates).",
            "why": "Các lượng từ này biểu thị số nhiều, danh từ bắt buộc phải có đuôi -s/es."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 8:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
            "wrongText": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "rightText": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "whyText": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).. Câu chuẩn xác phải là: ✅ Dùng 'Although / Even though' trước một mệnh đề S + V.. Lý do: 'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
                "example": "The marketing director successfully negotiated the annual partnership agreement.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
                "example": "The applicant did not submit the required certification by the deadline.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
                "example": "Has the accounting division finalized the quarterly expenditure report?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Trước chỗ trống là Động từ hành động",
                "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
              },
              {
                "keyword": "Trước chỗ trống là To Be / Linking Verb",
                "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
              },
              {
                "keyword": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
                "tip": "Cần 1 Danh từ (Noun) làm từ chính"
              },
              {
                "keyword": "Sau chỗ trống là cụm danh từ (Noun phrase)",
                "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
              }
            ],
            "goldenRule": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The marketing director successfully negotiated the annual partnership agreement.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "The applicant did not submit the required certification by the deadline.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 8:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-toeic-9",
        "lessonNumber": "Chuyên đề 9 / 15",
        "title": "Chuyên đề 9: Thể Bị Động đặc biệt (Be expected to, Be required to, Be accompanied by)",
        "duration": "18 phút",
        "youtubeVideoId": "oG8-tQG_34g",
        "videoTitle": "Bẫy TOEIC Part 5 & 6: Chuyên đề 9",
        "videoSummary": "Tuyệt chiêu nhận diện bẫy đề thi ETS TOEIC và mẹo giải nhanh trong 5 giây cho: Chuyên đề 9: Thể Bị Động đặc biệt (Be expected to, Be required to, Be accompanied by).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Phân tích bẫy thường gặp trong đề thi TOEIC"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức và cấu trúc ngữ pháp trọng tâm"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo 3 giây nhìn vào khoảng trống để chọn đáp án"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ từ đề thi thật & Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ câu hỏi Part 5"
          }
        ],
        "mindmapNotes": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
        "coreMindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
            "example": "The marketing director successfully negotiated the annual partnership agreement."
          },
          "negative": {
            "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
            "example": "The applicant did not submit the required certification by the deadline."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
            "example": "Has the accounting division finalized the quarterly expenditure report?"
          }
        },
        "signalWords": [
          {
            "word": "Trước chỗ trống là Động từ hành động",
            "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
          },
          {
            "word": "Trước chỗ trống là To Be / Linking Verb",
            "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
          },
          {
            "word": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
            "tip": "Cần 1 Danh từ (Noun) làm từ chính"
          },
          {
            "word": "Sau chỗ trống là cụm danh từ (Noun phrase)",
            "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "right": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "why": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause."
          },
          {
            "wrong": "❌ Chọn danh từ số ít sau các lượng từ như 'several', 'numerous', 'various'.",
            "right": "✅ Đi với danh từ đếm được số nhiều (several documents, numerous candidates).",
            "why": "Các lượng từ này biểu thị số nhiều, danh từ bắt buộc phải có đuôi -s/es."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 9:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
            "wrongText": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "rightText": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "whyText": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).. Câu chuẩn xác phải là: ✅ Dùng 'Although / Even though' trước một mệnh đề S + V.. Lý do: 'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
                "example": "The marketing director successfully negotiated the annual partnership agreement.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
                "example": "The applicant did not submit the required certification by the deadline.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
                "example": "Has the accounting division finalized the quarterly expenditure report?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Trước chỗ trống là Động từ hành động",
                "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
              },
              {
                "keyword": "Trước chỗ trống là To Be / Linking Verb",
                "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
              },
              {
                "keyword": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
                "tip": "Cần 1 Danh từ (Noun) làm từ chính"
              },
              {
                "keyword": "Sau chỗ trống là cụm danh từ (Noun phrase)",
                "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
              }
            ],
            "goldenRule": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The marketing director successfully negotiated the annual partnership agreement.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "The applicant did not submit the required certification by the deadline.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 9:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-toeic-10",
        "lessonNumber": "Chuyên đề 10 / 15",
        "title": "Chuyên đề 10: Thức Giả Định (Subjunctive Mood) với Suggest/Recommend/Demand + That S + (should) V",
        "duration": "19 phút",
        "youtubeVideoId": "oG8-tQG_34g",
        "videoTitle": "Bẫy TOEIC Part 5 & 6: Chuyên đề 10",
        "videoSummary": "Tuyệt chiêu nhận diện bẫy đề thi ETS TOEIC và mẹo giải nhanh trong 5 giây cho: Chuyên đề 10: Thức Giả Định (Subjunctive Mood) với Suggest/Recommend/Demand + That S + (should) V.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Phân tích bẫy thường gặp trong đề thi TOEIC"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức và cấu trúc ngữ pháp trọng tâm"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo 3 giây nhìn vào khoảng trống để chọn đáp án"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ từ đề thi thật & Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ câu hỏi Part 5"
          }
        ],
        "mindmapNotes": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
        "coreMindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
            "example": "The marketing director successfully negotiated the annual partnership agreement."
          },
          "negative": {
            "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
            "example": "The applicant did not submit the required certification by the deadline."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
            "example": "Has the accounting division finalized the quarterly expenditure report?"
          }
        },
        "signalWords": [
          {
            "word": "Trước chỗ trống là Động từ hành động",
            "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
          },
          {
            "word": "Trước chỗ trống là To Be / Linking Verb",
            "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
          },
          {
            "word": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
            "tip": "Cần 1 Danh từ (Noun) làm từ chính"
          },
          {
            "word": "Sau chỗ trống là cụm danh từ (Noun phrase)",
            "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "right": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "why": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause."
          },
          {
            "wrong": "❌ Chọn danh từ số ít sau các lượng từ như 'several', 'numerous', 'various'.",
            "right": "✅ Đi với danh từ đếm được số nhiều (several documents, numerous candidates).",
            "why": "Các lượng từ này biểu thị số nhiều, danh từ bắt buộc phải có đuôi -s/es."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 10:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
            "wrongText": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "rightText": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "whyText": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).. Câu chuẩn xác phải là: ✅ Dùng 'Although / Even though' trước một mệnh đề S + V.. Lý do: 'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
                "example": "The marketing director successfully negotiated the annual partnership agreement.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
                "example": "The applicant did not submit the required certification by the deadline.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
                "example": "Has the accounting division finalized the quarterly expenditure report?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Trước chỗ trống là Động từ hành động",
                "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
              },
              {
                "keyword": "Trước chỗ trống là To Be / Linking Verb",
                "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
              },
              {
                "keyword": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
                "tip": "Cần 1 Danh từ (Noun) làm từ chính"
              },
              {
                "keyword": "Sau chỗ trống là cụm danh từ (Noun phrase)",
                "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
              }
            ],
            "goldenRule": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The marketing director successfully negotiated the annual partnership agreement.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "The applicant did not submit the required certification by the deadline.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 10:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-toeic-11",
        "lessonNumber": "Chuyên đề 11 / 15",
        "title": "Chuyên đề 11: Câu điều kiện và Đảo ngữ câu điều kiện (Should / Were / Had) trong đề TOEIC",
        "duration": "20 phút",
        "youtubeVideoId": "oG8-tQG_34g",
        "videoTitle": "Bẫy TOEIC Part 5 & 6: Chuyên đề 11",
        "videoSummary": "Tuyệt chiêu nhận diện bẫy đề thi ETS TOEIC và mẹo giải nhanh trong 5 giây cho: Chuyên đề 11: Câu điều kiện và Đảo ngữ câu điều kiện (Should / Were / Had) trong đề TOEIC.",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Phân tích bẫy thường gặp trong đề thi TOEIC"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức và cấu trúc ngữ pháp trọng tâm"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo 3 giây nhìn vào khoảng trống để chọn đáp án"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ từ đề thi thật & Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ câu hỏi Part 5"
          }
        ],
        "mindmapNotes": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
        "coreMindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
            "example": "The marketing director successfully negotiated the annual partnership agreement."
          },
          "negative": {
            "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
            "example": "The applicant did not submit the required certification by the deadline."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
            "example": "Has the accounting division finalized the quarterly expenditure report?"
          }
        },
        "signalWords": [
          {
            "word": "Trước chỗ trống là Động từ hành động",
            "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
          },
          {
            "word": "Trước chỗ trống là To Be / Linking Verb",
            "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
          },
          {
            "word": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
            "tip": "Cần 1 Danh từ (Noun) làm từ chính"
          },
          {
            "word": "Sau chỗ trống là cụm danh từ (Noun phrase)",
            "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "right": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "why": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause."
          },
          {
            "wrong": "❌ Chọn danh từ số ít sau các lượng từ như 'several', 'numerous', 'various'.",
            "right": "✅ Đi với danh từ đếm được số nhiều (several documents, numerous candidates).",
            "why": "Các lượng từ này biểu thị số nhiều, danh từ bắt buộc phải có đuôi -s/es."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 11:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
            "wrongText": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "rightText": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "whyText": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).. Câu chuẩn xác phải là: ✅ Dùng 'Although / Even though' trước một mệnh đề S + V.. Lý do: 'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
                "example": "The marketing director successfully negotiated the annual partnership agreement.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
                "example": "The applicant did not submit the required certification by the deadline.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
                "example": "Has the accounting division finalized the quarterly expenditure report?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Trước chỗ trống là Động từ hành động",
                "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
              },
              {
                "keyword": "Trước chỗ trống là To Be / Linking Verb",
                "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
              },
              {
                "keyword": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
                "tip": "Cần 1 Danh từ (Noun) làm từ chính"
              },
              {
                "keyword": "Sau chỗ trống là cụm danh từ (Noun phrase)",
                "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
              }
            ],
            "goldenRule": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The marketing director successfully negotiated the annual partnership agreement.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "The applicant did not submit the required certification by the deadline.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 11:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-toeic-12",
        "lessonNumber": "Chuyên đề 12 / 15",
        "title": "Chuyên đề 12: Cặp liên từ tương quan (Both...and, Either...or, Neither...nor, Not only...but also)",
        "duration": "21 phút",
        "youtubeVideoId": "oG8-tQG_34g",
        "videoTitle": "Bẫy TOEIC Part 5 & 6: Chuyên đề 12",
        "videoSummary": "Tuyệt chiêu nhận diện bẫy đề thi ETS TOEIC và mẹo giải nhanh trong 5 giây cho: Chuyên đề 12: Cặp liên từ tương quan (Both...and, Either...or, Neither...nor, Not only...but also).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Phân tích bẫy thường gặp trong đề thi TOEIC"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức và cấu trúc ngữ pháp trọng tâm"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo 3 giây nhìn vào khoảng trống để chọn đáp án"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ từ đề thi thật & Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ câu hỏi Part 5"
          }
        ],
        "mindmapNotes": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
        "coreMindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
            "example": "The marketing director successfully negotiated the annual partnership agreement."
          },
          "negative": {
            "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
            "example": "The applicant did not submit the required certification by the deadline."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
            "example": "Has the accounting division finalized the quarterly expenditure report?"
          }
        },
        "signalWords": [
          {
            "word": "Trước chỗ trống là Động từ hành động",
            "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
          },
          {
            "word": "Trước chỗ trống là To Be / Linking Verb",
            "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
          },
          {
            "word": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
            "tip": "Cần 1 Danh từ (Noun) làm từ chính"
          },
          {
            "word": "Sau chỗ trống là cụm danh từ (Noun phrase)",
            "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "right": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "why": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause."
          },
          {
            "wrong": "❌ Chọn danh từ số ít sau các lượng từ như 'several', 'numerous', 'various'.",
            "right": "✅ Đi với danh từ đếm được số nhiều (several documents, numerous candidates).",
            "why": "Các lượng từ này biểu thị số nhiều, danh từ bắt buộc phải có đuôi -s/es."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 12:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
            "wrongText": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "rightText": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "whyText": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).. Câu chuẩn xác phải là: ✅ Dùng 'Although / Even though' trước một mệnh đề S + V.. Lý do: 'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
                "example": "The marketing director successfully negotiated the annual partnership agreement.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
                "example": "The applicant did not submit the required certification by the deadline.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
                "example": "Has the accounting division finalized the quarterly expenditure report?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Trước chỗ trống là Động từ hành động",
                "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
              },
              {
                "keyword": "Trước chỗ trống là To Be / Linking Verb",
                "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
              },
              {
                "keyword": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
                "tip": "Cần 1 Danh từ (Noun) làm từ chính"
              },
              {
                "keyword": "Sau chỗ trống là cụm danh từ (Noun phrase)",
                "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
              }
            ],
            "goldenRule": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The marketing director successfully negotiated the annual partnership agreement.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "The applicant did not submit the required certification by the deadline.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 12:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-toeic-13",
        "lessonNumber": "Chuyên đề 13 / 15",
        "title": "Chuyên đề 13: Trạng từ tần suất & Trạng từ chỉ mức độ (Already, Still, Yet, Extremely, Highly)",
        "duration": "18 phút",
        "youtubeVideoId": "oG8-tQG_34g",
        "videoTitle": "Bẫy TOEIC Part 5 & 6: Chuyên đề 13",
        "videoSummary": "Tuyệt chiêu nhận diện bẫy đề thi ETS TOEIC và mẹo giải nhanh trong 5 giây cho: Chuyên đề 13: Trạng từ tần suất & Trạng từ chỉ mức độ (Already, Still, Yet, Extremely, Highly).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Phân tích bẫy thường gặp trong đề thi TOEIC"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức và cấu trúc ngữ pháp trọng tâm"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo 3 giây nhìn vào khoảng trống để chọn đáp án"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ từ đề thi thật & Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ câu hỏi Part 5"
          }
        ],
        "mindmapNotes": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
        "coreMindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
            "example": "The marketing director successfully negotiated the annual partnership agreement."
          },
          "negative": {
            "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
            "example": "The applicant did not submit the required certification by the deadline."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
            "example": "Has the accounting division finalized the quarterly expenditure report?"
          }
        },
        "signalWords": [
          {
            "word": "Trước chỗ trống là Động từ hành động",
            "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
          },
          {
            "word": "Trước chỗ trống là To Be / Linking Verb",
            "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
          },
          {
            "word": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
            "tip": "Cần 1 Danh từ (Noun) làm từ chính"
          },
          {
            "word": "Sau chỗ trống là cụm danh từ (Noun phrase)",
            "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "right": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "why": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause."
          },
          {
            "wrong": "❌ Chọn danh từ số ít sau các lượng từ như 'several', 'numerous', 'various'.",
            "right": "✅ Đi với danh từ đếm được số nhiều (several documents, numerous candidates).",
            "why": "Các lượng từ này biểu thị số nhiều, danh từ bắt buộc phải có đuôi -s/es."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 13:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
            "wrongText": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "rightText": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "whyText": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).. Câu chuẩn xác phải là: ✅ Dùng 'Although / Even though' trước một mệnh đề S + V.. Lý do: 'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
                "example": "The marketing director successfully negotiated the annual partnership agreement.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
                "example": "The applicant did not submit the required certification by the deadline.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
                "example": "Has the accounting division finalized the quarterly expenditure report?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Trước chỗ trống là Động từ hành động",
                "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
              },
              {
                "keyword": "Trước chỗ trống là To Be / Linking Verb",
                "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
              },
              {
                "keyword": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
                "tip": "Cần 1 Danh từ (Noun) làm từ chính"
              },
              {
                "keyword": "Sau chỗ trống là cụm danh từ (Noun phrase)",
                "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
              }
            ],
            "goldenRule": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The marketing director successfully negotiated the annual partnership agreement.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "The applicant did not submit the required certification by the deadline.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 13:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-toeic-14",
        "lessonNumber": "Chuyên đề 14 / 15",
        "title": "Chuyên đề 14: Giới từ chỉ thời gian và nơi chốn nâng cao (Prior to, Within, Throughout, Across)",
        "duration": "19 phút",
        "youtubeVideoId": "oG8-tQG_34g",
        "videoTitle": "Bẫy TOEIC Part 5 & 6: Chuyên đề 14",
        "videoSummary": "Tuyệt chiêu nhận diện bẫy đề thi ETS TOEIC và mẹo giải nhanh trong 5 giây cho: Chuyên đề 14: Giới từ chỉ thời gian và nơi chốn nâng cao (Prior to, Within, Throughout, Across).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Phân tích bẫy thường gặp trong đề thi TOEIC"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức và cấu trúc ngữ pháp trọng tâm"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo 3 giây nhìn vào khoảng trống để chọn đáp án"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ từ đề thi thật & Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ câu hỏi Part 5"
          }
        ],
        "mindmapNotes": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
        "coreMindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
            "example": "The marketing director successfully negotiated the annual partnership agreement."
          },
          "negative": {
            "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
            "example": "The applicant did not submit the required certification by the deadline."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
            "example": "Has the accounting division finalized the quarterly expenditure report?"
          }
        },
        "signalWords": [
          {
            "word": "Trước chỗ trống là Động từ hành động",
            "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
          },
          {
            "word": "Trước chỗ trống là To Be / Linking Verb",
            "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
          },
          {
            "word": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
            "tip": "Cần 1 Danh từ (Noun) làm từ chính"
          },
          {
            "word": "Sau chỗ trống là cụm danh từ (Noun phrase)",
            "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "right": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "why": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause."
          },
          {
            "wrong": "❌ Chọn danh từ số ít sau các lượng từ như 'several', 'numerous', 'various'.",
            "right": "✅ Đi với danh từ đếm được số nhiều (several documents, numerous candidates).",
            "why": "Các lượng từ này biểu thị số nhiều, danh từ bắt buộc phải có đuôi -s/es."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 14:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
            "wrongText": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "rightText": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "whyText": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).. Câu chuẩn xác phải là: ✅ Dùng 'Although / Even though' trước một mệnh đề S + V.. Lý do: 'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
                "example": "The marketing director successfully negotiated the annual partnership agreement.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
                "example": "The applicant did not submit the required certification by the deadline.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
                "example": "Has the accounting division finalized the quarterly expenditure report?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Trước chỗ trống là Động từ hành động",
                "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
              },
              {
                "keyword": "Trước chỗ trống là To Be / Linking Verb",
                "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
              },
              {
                "keyword": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
                "tip": "Cần 1 Danh từ (Noun) làm từ chính"
              },
              {
                "keyword": "Sau chỗ trống là cụm danh từ (Noun phrase)",
                "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
              }
            ],
            "goldenRule": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The marketing director successfully negotiated the annual partnership agreement.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "The applicant did not submit the required certification by the deadline.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 14:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-toeic-15",
        "lessonNumber": "Chuyên đề 15 / 15",
        "title": "Chuyên đề 15: Đại từ bất định (Someone, Anyone, No one, Each, Either, Another, Other, The other)",
        "duration": "20 phút",
        "youtubeVideoId": "oG8-tQG_34g",
        "videoTitle": "Bẫy TOEIC Part 5 & 6: Chuyên đề 15",
        "videoSummary": "Tuyệt chiêu nhận diện bẫy đề thi ETS TOEIC và mẹo giải nhanh trong 5 giây cho: Chuyên đề 15: Đại từ bất định (Someone, Anyone, No one, Each, Either, Another, Other, The other).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Phân tích bẫy thường gặp trong đề thi TOEIC"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Bản đồ công thức và cấu trúc ngữ pháp trọng tâm"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Mẹo 3 giây nhìn vào khoảng trống để chọn đáp án"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Phân tích ví dụ từ đề thi thật & Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ câu hỏi Part 5"
          }
        ],
        "mindmapNotes": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
        "coreMindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
            "example": "The marketing director successfully negotiated the annual partnership agreement."
          },
          "negative": {
            "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
            "example": "The applicant did not submit the required certification by the deadline."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
            "example": "Has the accounting division finalized the quarterly expenditure report?"
          }
        },
        "signalWords": [
          {
            "word": "Trước chỗ trống là Động từ hành động",
            "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
          },
          {
            "word": "Trước chỗ trống là To Be / Linking Verb",
            "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
          },
          {
            "word": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
            "tip": "Cần 1 Danh từ (Noun) làm từ chính"
          },
          {
            "word": "Sau chỗ trống là cụm danh từ (Noun phrase)",
            "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "right": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "why": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause."
          },
          {
            "wrong": "❌ Chọn danh từ số ít sau các lượng từ như 'several', 'numerous', 'various'.",
            "right": "✅ Đi với danh từ đếm được số nhiều (several documents, numerous candidates).",
            "why": "Các lượng từ này biểu thị số nhiều, danh từ bắt buộc phải có đuôi -s/es."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 15:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy giải đề TOEIC: Không cần dịch toàn bộ câu. Xác định chính xác thành phần câu (S - V - O) và áp dụng quy tắc từ loại/thì để chọn đáp án ngay lập tức.",
            "wrongText": "❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).",
            "rightText": "✅ Dùng 'Although / Even though' trước một mệnh đề S + V.",
            "whyText": "'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ Chọn 'Despite' khi phía sau là một mệnh đề hoàn chỉnh (S + V).. Câu chuẩn xác phải là: ✅ Dùng 'Although / Even though' trước một mệnh đề S + V.. Lý do: 'Despite' là giới từ, chỉ đi với Noun phrase hoặc V-ing. 'Although' là liên từ, đi với Clause.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Cấu trúc chuẩn áp dụng trong đề thi TOEIC Part 5 & 6",
                "example": "The marketing director successfully negotiated the annual partnership agreement.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Dạng phủ định trong thông báo từ chối hoặc điều khoản hợp đồng",
                "example": "The applicant did not submit the required certification by the deadline.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi kiểm tra hoặc mẫu khảo sát ý kiến khách hàng",
                "example": "Has the accounting division finalized the quarterly expenditure report?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Trước chỗ trống là Động từ hành động",
                "tip": "Cần 1 Trạng từ thể cách (-ly) bổ nghĩa"
              },
              {
                "keyword": "Trước chỗ trống là To Be / Linking Verb",
                "tip": "Cần 1 Tính từ (Adj) miêu tả tính chất"
              },
              {
                "keyword": "Trước chỗ trống là Tính từ sở hữu / Mạo từ",
                "tip": "Cần 1 Danh từ (Noun) làm từ chính"
              },
              {
                "keyword": "Sau chỗ trống là cụm danh từ (Noun phrase)",
                "tip": "Cần 1 Giới từ (Due to, Despite, In addition to)"
              }
            ],
            "goldenRule": "Bí kíp TOEIC: Nhìn trước và sau chỗ trống -> Xác định từ loại hoặc cấu trúc -> Loại trừ phương án sai trong 3 giây.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "The marketing director successfully negotiated the annual partnership agreement.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "The applicant did not submit the required certification by the deadline.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 15:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      }
    ]
  },
  {
    "id": "grammar-conversational",
    "title": "Mẫu Câu Giao Tiếp & Viết Email Phản Xạ",
    "shortTitle": "Giao tiếp & Viết Email",
    "icon": "💬",
    "lessonCountText": "12 chuyên đề thực tế",
    "totalLessons": 12,
    "completedCount": 0,
    "duration": "Khoảng 4 giờ",
    "badge": "Văn phòng & Công việc",
    "badgeColor": "bg-amber-500/15 text-amber-300 border-amber-500/30",
    "desc": "12 chuyên đề cấu trúc câu ứng dụng tức thì: Chào hỏi, nhờ vả lịch sự, đàm phán deadline, báo cáo tiến độ và gửi đính kèm chuẩn quốc tế.",
    "lessons": [
      {
        "id": "g-conv-1",
        "lessonNumber": "Chuyên đề 1 / 12",
        "title": "Chuyên đề 1: Cấu trúc Chào hỏi & Mở đầu Email chuyên nghiệp (Inquire / Follow up on)",
        "duration": "14 phút",
        "youtubeVideoId": "Tz5d6t7l1aE",
        "videoTitle": "Mẫu câu thực tế: Chuyên đề 1",
        "videoSummary": "Hướng dẫn cấu trúc ngữ pháp chuẩn văn phong công sở quốc tế và viết email thương mại: Chuyên đề 1: Cấu trúc Chào hỏi & Mở đầu Email chuyên nghiệp (Inquire / Follow up on).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Mục đích sử dụng & Phân biệt Thân mật vs Trang trọng"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Mẫu câu và công thức cốt lõi người bản xứ dùng"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Bảng bẫy ngôn ngữ dễ gây thô lỗ trong email"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Ví dụ email thực tế & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ viết câu công sở"
          }
        ],
        "mindmapNotes": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
        "coreMindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
            "example": "I am writing to inquire about the delivery timeline of order #8492."
          },
          "negative": {
            "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
            "example": "Unfortunately, we are unable to accommodate your request for a discount."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
            "example": "Could you please send us the revised project timeline by end of day?"
          }
        },
        "signalWords": [
          {
            "word": "Would you mind + V-ing",
            "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
          },
          {
            "word": "I would appreciate it if you could + V_inf",
            "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
          },
          {
            "word": "Please find attached + Noun",
            "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "right": "✅ 'Could you please share the report with me when you have a moment?'",
            "why": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự."
          },
          {
            "wrong": "❌ 'Would you mind to help me?'",
            "right": "✅ 'Would you mind helping me?'",
            "why": "Sau cấu trúc 'mind' bắt buộc phải dùng danh động từ V-ing."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 1:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
            "wrongText": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "rightText": "✅ 'Could you please share the report with me when you have a moment?'",
            "whyText": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp). Câu chuẩn xác phải là: ✅ 'Could you please share the report with me when you have a moment?'. Lý do: Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
                "example": "I am writing to inquire about the delivery timeline of order #8492.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
                "example": "Unfortunately, we are unable to accommodate your request for a discount.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
                "example": "Could you please send us the revised project timeline by end of day?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Would you mind + V-ing",
                "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
              },
              {
                "keyword": "I would appreciate it if you could + V_inf",
                "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
              },
              {
                "keyword": "Please find attached + Noun",
                "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
              }
            ],
            "goldenRule": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "I am writing to inquire about the delivery timeline of order #8492.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "Unfortunately, we are unable to accommodate your request for a discount.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 1:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-conv-2",
        "lessonNumber": "Chuyên đề 2 / 12",
        "title": "Chuyên đề 2: Cách Đặt Câu Hỏi Lịch Sự & Nhờ Vả (Could you please...? / Would you mind...?)",
        "duration": "15 phút",
        "youtubeVideoId": "Tz5d6t7l1aE",
        "videoTitle": "Mẫu câu thực tế: Chuyên đề 2",
        "videoSummary": "Hướng dẫn cấu trúc ngữ pháp chuẩn văn phong công sở quốc tế và viết email thương mại: Chuyên đề 2: Cách Đặt Câu Hỏi Lịch Sự & Nhờ Vả (Could you please...? / Would you mind...?).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Mục đích sử dụng & Phân biệt Thân mật vs Trang trọng"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Mẫu câu và công thức cốt lõi người bản xứ dùng"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Bảng bẫy ngôn ngữ dễ gây thô lỗ trong email"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Ví dụ email thực tế & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ viết câu công sở"
          }
        ],
        "mindmapNotes": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
        "coreMindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
            "example": "I am writing to inquire about the delivery timeline of order #8492."
          },
          "negative": {
            "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
            "example": "Unfortunately, we are unable to accommodate your request for a discount."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
            "example": "Could you please send us the revised project timeline by end of day?"
          }
        },
        "signalWords": [
          {
            "word": "Would you mind + V-ing",
            "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
          },
          {
            "word": "I would appreciate it if you could + V_inf",
            "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
          },
          {
            "word": "Please find attached + Noun",
            "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "right": "✅ 'Could you please share the report with me when you have a moment?'",
            "why": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự."
          },
          {
            "wrong": "❌ 'Would you mind to help me?'",
            "right": "✅ 'Would you mind helping me?'",
            "why": "Sau cấu trúc 'mind' bắt buộc phải dùng danh động từ V-ing."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 2:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
            "wrongText": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "rightText": "✅ 'Could you please share the report with me when you have a moment?'",
            "whyText": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp). Câu chuẩn xác phải là: ✅ 'Could you please share the report with me when you have a moment?'. Lý do: Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
                "example": "I am writing to inquire about the delivery timeline of order #8492.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
                "example": "Unfortunately, we are unable to accommodate your request for a discount.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
                "example": "Could you please send us the revised project timeline by end of day?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Would you mind + V-ing",
                "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
              },
              {
                "keyword": "I would appreciate it if you could + V_inf",
                "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
              },
              {
                "keyword": "Please find attached + Noun",
                "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
              }
            ],
            "goldenRule": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "I am writing to inquire about the delivery timeline of order #8492.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "Unfortunately, we are unable to accommodate your request for a discount.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 2:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-conv-3",
        "lessonNumber": "Chuyên đề 3 / 12",
        "title": "Chuyên đề 3: Cấu trúc Đưa ra Đề Xuất & Góp Ý Tế Nhị (How about...? / Why don't we...?)",
        "duration": "16 phút",
        "youtubeVideoId": "Tz5d6t7l1aE",
        "videoTitle": "Mẫu câu thực tế: Chuyên đề 3",
        "videoSummary": "Hướng dẫn cấu trúc ngữ pháp chuẩn văn phong công sở quốc tế và viết email thương mại: Chuyên đề 3: Cấu trúc Đưa ra Đề Xuất & Góp Ý Tế Nhị (How about...? / Why don't we...?).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Mục đích sử dụng & Phân biệt Thân mật vs Trang trọng"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Mẫu câu và công thức cốt lõi người bản xứ dùng"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Bảng bẫy ngôn ngữ dễ gây thô lỗ trong email"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Ví dụ email thực tế & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ viết câu công sở"
          }
        ],
        "mindmapNotes": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
        "coreMindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
            "example": "I am writing to inquire about the delivery timeline of order #8492."
          },
          "negative": {
            "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
            "example": "Unfortunately, we are unable to accommodate your request for a discount."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
            "example": "Could you please send us the revised project timeline by end of day?"
          }
        },
        "signalWords": [
          {
            "word": "Would you mind + V-ing",
            "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
          },
          {
            "word": "I would appreciate it if you could + V_inf",
            "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
          },
          {
            "word": "Please find attached + Noun",
            "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "right": "✅ 'Could you please share the report with me when you have a moment?'",
            "why": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự."
          },
          {
            "wrong": "❌ 'Would you mind to help me?'",
            "right": "✅ 'Would you mind helping me?'",
            "why": "Sau cấu trúc 'mind' bắt buộc phải dùng danh động từ V-ing."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 3:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
            "wrongText": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "rightText": "✅ 'Could you please share the report with me when you have a moment?'",
            "whyText": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp). Câu chuẩn xác phải là: ✅ 'Could you please share the report with me when you have a moment?'. Lý do: Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
                "example": "I am writing to inquire about the delivery timeline of order #8492.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
                "example": "Unfortunately, we are unable to accommodate your request for a discount.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
                "example": "Could you please send us the revised project timeline by end of day?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Would you mind + V-ing",
                "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
              },
              {
                "keyword": "I would appreciate it if you could + V_inf",
                "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
              },
              {
                "keyword": "Please find attached + Noun",
                "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
              }
            ],
            "goldenRule": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "I am writing to inquire about the delivery timeline of order #8492.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "Unfortunately, we are unable to accommodate your request for a discount.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 3:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-conv-4",
        "lessonNumber": "Chuyên đề 4 / 12",
        "title": "Chuyên đề 4: Cấu trúc Thể Hiện Sự Đồng Tình & Phản Biện Tôn Trọng (I see your point, but...)",
        "duration": "17 phút",
        "youtubeVideoId": "Tz5d6t7l1aE",
        "videoTitle": "Mẫu câu thực tế: Chuyên đề 4",
        "videoSummary": "Hướng dẫn cấu trúc ngữ pháp chuẩn văn phong công sở quốc tế và viết email thương mại: Chuyên đề 4: Cấu trúc Thể Hiện Sự Đồng Tình & Phản Biện Tôn Trọng (I see your point, but...).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Mục đích sử dụng & Phân biệt Thân mật vs Trang trọng"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Mẫu câu và công thức cốt lõi người bản xứ dùng"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Bảng bẫy ngôn ngữ dễ gây thô lỗ trong email"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Ví dụ email thực tế & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ viết câu công sở"
          }
        ],
        "mindmapNotes": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
        "coreMindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
            "example": "I am writing to inquire about the delivery timeline of order #8492."
          },
          "negative": {
            "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
            "example": "Unfortunately, we are unable to accommodate your request for a discount."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
            "example": "Could you please send us the revised project timeline by end of day?"
          }
        },
        "signalWords": [
          {
            "word": "Would you mind + V-ing",
            "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
          },
          {
            "word": "I would appreciate it if you could + V_inf",
            "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
          },
          {
            "word": "Please find attached + Noun",
            "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "right": "✅ 'Could you please share the report with me when you have a moment?'",
            "why": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự."
          },
          {
            "wrong": "❌ 'Would you mind to help me?'",
            "right": "✅ 'Would you mind helping me?'",
            "why": "Sau cấu trúc 'mind' bắt buộc phải dùng danh động từ V-ing."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 4:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
            "wrongText": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "rightText": "✅ 'Could you please share the report with me when you have a moment?'",
            "whyText": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp). Câu chuẩn xác phải là: ✅ 'Could you please share the report with me when you have a moment?'. Lý do: Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
                "example": "I am writing to inquire about the delivery timeline of order #8492.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
                "example": "Unfortunately, we are unable to accommodate your request for a discount.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
                "example": "Could you please send us the revised project timeline by end of day?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Would you mind + V-ing",
                "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
              },
              {
                "keyword": "I would appreciate it if you could + V_inf",
                "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
              },
              {
                "keyword": "Please find attached + Noun",
                "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
              }
            ],
            "goldenRule": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "I am writing to inquire about the delivery timeline of order #8492.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "Unfortunately, we are unable to accommodate your request for a discount.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 4:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-conv-5",
        "lessonNumber": "Chuyên đề 5 / 12",
        "title": "Chuyên đề 5: Cấu trúc Báo Cáo Tiến Độ Dự Án & Trạng Thái Công Việc (On track / Delayed)",
        "duration": "14 phút",
        "youtubeVideoId": "Tz5d6t7l1aE",
        "videoTitle": "Mẫu câu thực tế: Chuyên đề 5",
        "videoSummary": "Hướng dẫn cấu trúc ngữ pháp chuẩn văn phong công sở quốc tế và viết email thương mại: Chuyên đề 5: Cấu trúc Báo Cáo Tiến Độ Dự Án & Trạng Thái Công Việc (On track / Delayed).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Mục đích sử dụng & Phân biệt Thân mật vs Trang trọng"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Mẫu câu và công thức cốt lõi người bản xứ dùng"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Bảng bẫy ngôn ngữ dễ gây thô lỗ trong email"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Ví dụ email thực tế & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ viết câu công sở"
          }
        ],
        "mindmapNotes": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
        "coreMindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
            "example": "I am writing to inquire about the delivery timeline of order #8492."
          },
          "negative": {
            "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
            "example": "Unfortunately, we are unable to accommodate your request for a discount."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
            "example": "Could you please send us the revised project timeline by end of day?"
          }
        },
        "signalWords": [
          {
            "word": "Would you mind + V-ing",
            "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
          },
          {
            "word": "I would appreciate it if you could + V_inf",
            "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
          },
          {
            "word": "Please find attached + Noun",
            "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "right": "✅ 'Could you please share the report with me when you have a moment?'",
            "why": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự."
          },
          {
            "wrong": "❌ 'Would you mind to help me?'",
            "right": "✅ 'Would you mind helping me?'",
            "why": "Sau cấu trúc 'mind' bắt buộc phải dùng danh động từ V-ing."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 5:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
            "wrongText": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "rightText": "✅ 'Could you please share the report with me when you have a moment?'",
            "whyText": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp). Câu chuẩn xác phải là: ✅ 'Could you please share the report with me when you have a moment?'. Lý do: Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
                "example": "I am writing to inquire about the delivery timeline of order #8492.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
                "example": "Unfortunately, we are unable to accommodate your request for a discount.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
                "example": "Could you please send us the revised project timeline by end of day?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Would you mind + V-ing",
                "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
              },
              {
                "keyword": "I would appreciate it if you could + V_inf",
                "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
              },
              {
                "keyword": "Please find attached + Noun",
                "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
              }
            ],
            "goldenRule": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "I am writing to inquire about the delivery timeline of order #8492.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "Unfortunately, we are unable to accommodate your request for a discount.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 5:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-conv-6",
        "lessonNumber": "Chuyên đề 6 / 12",
        "title": "Chuyên đề 6: Cấu trúc Đính Kèm Tài Liệu & Hướng Dẫn Xem File (Please find attached / As per request)",
        "duration": "15 phút",
        "youtubeVideoId": "Tz5d6t7l1aE",
        "videoTitle": "Mẫu câu thực tế: Chuyên đề 6",
        "videoSummary": "Hướng dẫn cấu trúc ngữ pháp chuẩn văn phong công sở quốc tế và viết email thương mại: Chuyên đề 6: Cấu trúc Đính Kèm Tài Liệu & Hướng Dẫn Xem File (Please find attached / As per request).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Mục đích sử dụng & Phân biệt Thân mật vs Trang trọng"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Mẫu câu và công thức cốt lõi người bản xứ dùng"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Bảng bẫy ngôn ngữ dễ gây thô lỗ trong email"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Ví dụ email thực tế & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ viết câu công sở"
          }
        ],
        "mindmapNotes": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
        "coreMindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
            "example": "I am writing to inquire about the delivery timeline of order #8492."
          },
          "negative": {
            "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
            "example": "Unfortunately, we are unable to accommodate your request for a discount."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
            "example": "Could you please send us the revised project timeline by end of day?"
          }
        },
        "signalWords": [
          {
            "word": "Would you mind + V-ing",
            "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
          },
          {
            "word": "I would appreciate it if you could + V_inf",
            "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
          },
          {
            "word": "Please find attached + Noun",
            "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "right": "✅ 'Could you please share the report with me when you have a moment?'",
            "why": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự."
          },
          {
            "wrong": "❌ 'Would you mind to help me?'",
            "right": "✅ 'Would you mind helping me?'",
            "why": "Sau cấu trúc 'mind' bắt buộc phải dùng danh động từ V-ing."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 6:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
            "wrongText": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "rightText": "✅ 'Could you please share the report with me when you have a moment?'",
            "whyText": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp). Câu chuẩn xác phải là: ✅ 'Could you please share the report with me when you have a moment?'. Lý do: Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
                "example": "I am writing to inquire about the delivery timeline of order #8492.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
                "example": "Unfortunately, we are unable to accommodate your request for a discount.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
                "example": "Could you please send us the revised project timeline by end of day?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Would you mind + V-ing",
                "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
              },
              {
                "keyword": "I would appreciate it if you could + V_inf",
                "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
              },
              {
                "keyword": "Please find attached + Noun",
                "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
              }
            ],
            "goldenRule": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "I am writing to inquire about the delivery timeline of order #8492.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "Unfortunately, we are unable to accommodate your request for a discount.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 6:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-conv-7",
        "lessonNumber": "Chuyên đề 7 / 12",
        "title": "Chuyên đề 7: Cấu trúc Xin Lỗi vì Sự Cố Kỹ Thuật / Trễ Hạn (We apologize for any inconvenience...)",
        "duration": "16 phút",
        "youtubeVideoId": "Tz5d6t7l1aE",
        "videoTitle": "Mẫu câu thực tế: Chuyên đề 7",
        "videoSummary": "Hướng dẫn cấu trúc ngữ pháp chuẩn văn phong công sở quốc tế và viết email thương mại: Chuyên đề 7: Cấu trúc Xin Lỗi vì Sự Cố Kỹ Thuật / Trễ Hạn (We apologize for any inconvenience...).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Mục đích sử dụng & Phân biệt Thân mật vs Trang trọng"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Mẫu câu và công thức cốt lõi người bản xứ dùng"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Bảng bẫy ngôn ngữ dễ gây thô lỗ trong email"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Ví dụ email thực tế & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ viết câu công sở"
          }
        ],
        "mindmapNotes": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
        "coreMindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
            "example": "I am writing to inquire about the delivery timeline of order #8492."
          },
          "negative": {
            "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
            "example": "Unfortunately, we are unable to accommodate your request for a discount."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
            "example": "Could you please send us the revised project timeline by end of day?"
          }
        },
        "signalWords": [
          {
            "word": "Would you mind + V-ing",
            "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
          },
          {
            "word": "I would appreciate it if you could + V_inf",
            "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
          },
          {
            "word": "Please find attached + Noun",
            "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "right": "✅ 'Could you please share the report with me when you have a moment?'",
            "why": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự."
          },
          {
            "wrong": "❌ 'Would you mind to help me?'",
            "right": "✅ 'Would you mind helping me?'",
            "why": "Sau cấu trúc 'mind' bắt buộc phải dùng danh động từ V-ing."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 7:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
            "wrongText": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "rightText": "✅ 'Could you please share the report with me when you have a moment?'",
            "whyText": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp). Câu chuẩn xác phải là: ✅ 'Could you please share the report with me when you have a moment?'. Lý do: Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
                "example": "I am writing to inquire about the delivery timeline of order #8492.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
                "example": "Unfortunately, we are unable to accommodate your request for a discount.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
                "example": "Could you please send us the revised project timeline by end of day?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Would you mind + V-ing",
                "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
              },
              {
                "keyword": "I would appreciate it if you could + V_inf",
                "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
              },
              {
                "keyword": "Please find attached + Noun",
                "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
              }
            ],
            "goldenRule": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "I am writing to inquire about the delivery timeline of order #8492.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "Unfortunately, we are unable to accommodate your request for a discount.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 7:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-conv-8",
        "lessonNumber": "Chuyên đề 8 / 12",
        "title": "Chuyên đề 8: Cấu trúc Xác Nhận Lịch Hẹn & Sắp Xếp Cuộc Họp (Schedule / Does 3 PM work for you?)",
        "duration": "17 phút",
        "youtubeVideoId": "Tz5d6t7l1aE",
        "videoTitle": "Mẫu câu thực tế: Chuyên đề 8",
        "videoSummary": "Hướng dẫn cấu trúc ngữ pháp chuẩn văn phong công sở quốc tế và viết email thương mại: Chuyên đề 8: Cấu trúc Xác Nhận Lịch Hẹn & Sắp Xếp Cuộc Họp (Schedule / Does 3 PM work for you?).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Mục đích sử dụng & Phân biệt Thân mật vs Trang trọng"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Mẫu câu và công thức cốt lõi người bản xứ dùng"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Bảng bẫy ngôn ngữ dễ gây thô lỗ trong email"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Ví dụ email thực tế & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ viết câu công sở"
          }
        ],
        "mindmapNotes": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
        "coreMindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
            "example": "I am writing to inquire about the delivery timeline of order #8492."
          },
          "negative": {
            "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
            "example": "Unfortunately, we are unable to accommodate your request for a discount."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
            "example": "Could you please send us the revised project timeline by end of day?"
          }
        },
        "signalWords": [
          {
            "word": "Would you mind + V-ing",
            "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
          },
          {
            "word": "I would appreciate it if you could + V_inf",
            "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
          },
          {
            "word": "Please find attached + Noun",
            "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "right": "✅ 'Could you please share the report with me when you have a moment?'",
            "why": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự."
          },
          {
            "wrong": "❌ 'Would you mind to help me?'",
            "right": "✅ 'Would you mind helping me?'",
            "why": "Sau cấu trúc 'mind' bắt buộc phải dùng danh động từ V-ing."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 8:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
            "wrongText": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "rightText": "✅ 'Could you please share the report with me when you have a moment?'",
            "whyText": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp). Câu chuẩn xác phải là: ✅ 'Could you please share the report with me when you have a moment?'. Lý do: Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
                "example": "I am writing to inquire about the delivery timeline of order #8492.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
                "example": "Unfortunately, we are unable to accommodate your request for a discount.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
                "example": "Could you please send us the revised project timeline by end of day?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Would you mind + V-ing",
                "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
              },
              {
                "keyword": "I would appreciate it if you could + V_inf",
                "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
              },
              {
                "keyword": "Please find attached + Noun",
                "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
              }
            ],
            "goldenRule": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "I am writing to inquire about the delivery timeline of order #8492.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "Unfortunately, we are unable to accommodate your request for a discount.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 8:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-conv-9",
        "lessonNumber": "Chuyên đề 9 / 12",
        "title": "Chuyên đề 9: Cấu trúc Đàm Phán & Thỏa Thuận Thời Hạn (Extend the deadline / If possible...)",
        "duration": "14 phút",
        "youtubeVideoId": "Tz5d6t7l1aE",
        "videoTitle": "Mẫu câu thực tế: Chuyên đề 9",
        "videoSummary": "Hướng dẫn cấu trúc ngữ pháp chuẩn văn phong công sở quốc tế và viết email thương mại: Chuyên đề 9: Cấu trúc Đàm Phán & Thỏa Thuận Thời Hạn (Extend the deadline / If possible...).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Mục đích sử dụng & Phân biệt Thân mật vs Trang trọng"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Mẫu câu và công thức cốt lõi người bản xứ dùng"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Bảng bẫy ngôn ngữ dễ gây thô lỗ trong email"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Ví dụ email thực tế & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ viết câu công sở"
          }
        ],
        "mindmapNotes": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
        "coreMindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
            "example": "I am writing to inquire about the delivery timeline of order #8492."
          },
          "negative": {
            "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
            "example": "Unfortunately, we are unable to accommodate your request for a discount."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
            "example": "Could you please send us the revised project timeline by end of day?"
          }
        },
        "signalWords": [
          {
            "word": "Would you mind + V-ing",
            "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
          },
          {
            "word": "I would appreciate it if you could + V_inf",
            "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
          },
          {
            "word": "Please find attached + Noun",
            "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "right": "✅ 'Could you please share the report with me when you have a moment?'",
            "why": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự."
          },
          {
            "wrong": "❌ 'Would you mind to help me?'",
            "right": "✅ 'Would you mind helping me?'",
            "why": "Sau cấu trúc 'mind' bắt buộc phải dùng danh động từ V-ing."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 9:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
            "wrongText": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "rightText": "✅ 'Could you please share the report with me when you have a moment?'",
            "whyText": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp). Câu chuẩn xác phải là: ✅ 'Could you please share the report with me when you have a moment?'. Lý do: Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
                "example": "I am writing to inquire about the delivery timeline of order #8492.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
                "example": "Unfortunately, we are unable to accommodate your request for a discount.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
                "example": "Could you please send us the revised project timeline by end of day?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Would you mind + V-ing",
                "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
              },
              {
                "keyword": "I would appreciate it if you could + V_inf",
                "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
              },
              {
                "keyword": "Please find attached + Noun",
                "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
              }
            ],
            "goldenRule": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "I am writing to inquire about the delivery timeline of order #8492.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "Unfortunately, we are unable to accommodate your request for a discount.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 9:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-conv-10",
        "lessonNumber": "Chuyên đề 10 / 12",
        "title": "Chuyên đề 10: Cấu trúc Diễn Đạt Khi Chưa Hiểu Rõ & Yêu Cầu Làm Rõ (Could you clarify...?)",
        "duration": "15 phút",
        "youtubeVideoId": "Tz5d6t7l1aE",
        "videoTitle": "Mẫu câu thực tế: Chuyên đề 10",
        "videoSummary": "Hướng dẫn cấu trúc ngữ pháp chuẩn văn phong công sở quốc tế và viết email thương mại: Chuyên đề 10: Cấu trúc Diễn Đạt Khi Chưa Hiểu Rõ & Yêu Cầu Làm Rõ (Could you clarify...?).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Mục đích sử dụng & Phân biệt Thân mật vs Trang trọng"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Mẫu câu và công thức cốt lõi người bản xứ dùng"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Bảng bẫy ngôn ngữ dễ gây thô lỗ trong email"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Ví dụ email thực tế & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ viết câu công sở"
          }
        ],
        "mindmapNotes": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
        "coreMindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
            "example": "I am writing to inquire about the delivery timeline of order #8492."
          },
          "negative": {
            "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
            "example": "Unfortunately, we are unable to accommodate your request for a discount."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
            "example": "Could you please send us the revised project timeline by end of day?"
          }
        },
        "signalWords": [
          {
            "word": "Would you mind + V-ing",
            "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
          },
          {
            "word": "I would appreciate it if you could + V_inf",
            "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
          },
          {
            "word": "Please find attached + Noun",
            "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "right": "✅ 'Could you please share the report with me when you have a moment?'",
            "why": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự."
          },
          {
            "wrong": "❌ 'Would you mind to help me?'",
            "right": "✅ 'Would you mind helping me?'",
            "why": "Sau cấu trúc 'mind' bắt buộc phải dùng danh động từ V-ing."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 10:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
            "wrongText": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "rightText": "✅ 'Could you please share the report with me when you have a moment?'",
            "whyText": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp). Câu chuẩn xác phải là: ✅ 'Could you please share the report with me when you have a moment?'. Lý do: Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
                "example": "I am writing to inquire about the delivery timeline of order #8492.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
                "example": "Unfortunately, we are unable to accommodate your request for a discount.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
                "example": "Could you please send us the revised project timeline by end of day?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Would you mind + V-ing",
                "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
              },
              {
                "keyword": "I would appreciate it if you could + V_inf",
                "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
              },
              {
                "keyword": "Please find attached + Noun",
                "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
              }
            ],
            "goldenRule": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "I am writing to inquire about the delivery timeline of order #8492.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "Unfortunately, we are unable to accommodate your request for a discount.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 10:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-conv-11",
        "lessonNumber": "Chuyên đề 11 / 12",
        "title": "Chuyên đề 11: Cấu trúc Cảm Ơn, Ghi Nhận Đóng Góp & Khen Thưởng (Thank you for your prompt support)",
        "duration": "16 phút",
        "youtubeVideoId": "Tz5d6t7l1aE",
        "videoTitle": "Mẫu câu thực tế: Chuyên đề 11",
        "videoSummary": "Hướng dẫn cấu trúc ngữ pháp chuẩn văn phong công sở quốc tế và viết email thương mại: Chuyên đề 11: Cấu trúc Cảm Ơn, Ghi Nhận Đóng Góp & Khen Thưởng (Thank you for your prompt support).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Mục đích sử dụng & Phân biệt Thân mật vs Trang trọng"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Mẫu câu và công thức cốt lõi người bản xứ dùng"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Bảng bẫy ngôn ngữ dễ gây thô lỗ trong email"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Ví dụ email thực tế & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ viết câu công sở"
          }
        ],
        "mindmapNotes": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
        "coreMindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
            "example": "I am writing to inquire about the delivery timeline of order #8492."
          },
          "negative": {
            "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
            "example": "Unfortunately, we are unable to accommodate your request for a discount."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
            "example": "Could you please send us the revised project timeline by end of day?"
          }
        },
        "signalWords": [
          {
            "word": "Would you mind + V-ing",
            "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
          },
          {
            "word": "I would appreciate it if you could + V_inf",
            "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
          },
          {
            "word": "Please find attached + Noun",
            "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "right": "✅ 'Could you please share the report with me when you have a moment?'",
            "why": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự."
          },
          {
            "wrong": "❌ 'Would you mind to help me?'",
            "right": "✅ 'Would you mind helping me?'",
            "why": "Sau cấu trúc 'mind' bắt buộc phải dùng danh động từ V-ing."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 11:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
            "wrongText": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "rightText": "✅ 'Could you please share the report with me when you have a moment?'",
            "whyText": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp). Câu chuẩn xác phải là: ✅ 'Could you please share the report with me when you have a moment?'. Lý do: Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
                "example": "I am writing to inquire about the delivery timeline of order #8492.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
                "example": "Unfortunately, we are unable to accommodate your request for a discount.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
                "example": "Could you please send us the revised project timeline by end of day?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Would you mind + V-ing",
                "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
              },
              {
                "keyword": "I would appreciate it if you could + V_inf",
                "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
              },
              {
                "keyword": "Please find attached + Noun",
                "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
              }
            ],
            "goldenRule": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "I am writing to inquire about the delivery timeline of order #8492.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "Unfortunately, we are unable to accommodate your request for a discount.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 11:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      },
      {
        "id": "g-conv-12",
        "lessonNumber": "Chuyên đề 12 / 12",
        "title": "Chuyên đề 12: Cấu trúc Kết Email & Thúc Đẩy Phản Hồi Nhanh (Look forward to / Keep me posted)",
        "duration": "17 phút",
        "youtubeVideoId": "Tz5d6t7l1aE",
        "videoTitle": "Mẫu câu thực tế: Chuyên đề 12",
        "videoSummary": "Hướng dẫn cấu trúc ngữ pháp chuẩn văn phong công sở quốc tế và viết email thương mại: Chuyên đề 12: Cấu trúc Kết Email & Thúc Đẩy Phản Hồi Nhanh (Look forward to / Keep me posted).",
        "timestamps": [
          {
            "time": "00:00",
            "title": "Slide 1: Mục đích sử dụng & Phân biệt Thân mật vs Trang trọng"
          },
          {
            "time": "03:00",
            "title": "Slide 2: Mẫu câu và công thức cốt lõi người bản xứ dùng"
          },
          {
            "time": "06:00",
            "title": "Slide 3: Bảng bẫy ngôn ngữ dễ gây thô lỗ trong email"
          },
          {
            "time": "09:00",
            "title": "Slide 4: Ví dụ email thực tế & Luyện nghe Audio"
          },
          {
            "time": "12:00",
            "title": "Slide 5: Thử thách phản xạ viết câu công sở"
          }
        ],
        "mindmapNotes": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
        "coreMindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
        "formula3Forms": {
          "affirmative": {
            "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
            "example": "I am writing to inquire about the delivery timeline of order #8492."
          },
          "negative": {
            "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
            "example": "Unfortunately, we are unable to accommodate your request for a discount."
          },
          "interrogative": {
            "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
            "example": "Could you please send us the revised project timeline by end of day?"
          }
        },
        "signalWords": [
          {
            "word": "Would you mind + V-ing",
            "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
          },
          {
            "word": "I would appreciate it if you could + V_inf",
            "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
          },
          {
            "word": "Please find attached + Noun",
            "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
          }
        ],
        "trapsTable": [
          {
            "wrong": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "right": "✅ 'Could you please share the report with me when you have a moment?'",
            "why": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự."
          },
          {
            "wrong": "❌ 'Would you mind to help me?'",
            "right": "✅ 'Would you mind helping me?'",
            "why": "Sau cấu trúc 'mind' bắt buộc phải dùng danh động từ V-ing."
          }
        ],
        "practice": [
          {
            "q": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 12:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp."
          },
          {
            "q": "The technical lead _______ the team to follow best practices in Clean Architecture.",
            "options": [
              "advised",
              "advise",
              "advising",
              "advice"
            ],
            "answer": 0,
            "explanation": "Động từ 'advised' chia phù hợp với chủ ngữ số ít."
          },
          {
            "q": "We need to ensure that the API response time _______ under two hundred milliseconds.",
            "options": [
              "remains",
              "remain",
              "remaining",
              "is remain"
            ],
            "answer": 0,
            "explanation": "Chủ ngữ số ít 'response time' đi với động từ thêm s 'remains'."
          },
          {
            "q": "Why _______ the background worker fail to process the payment queue yesterday?",
            "options": [
              "did",
              "was",
              "has",
              "does"
            ],
            "answer": 0,
            "explanation": "Mốc quá khứ 'yesterday' câu hỏi mượn trợ động từ 'did'."
          },
          {
            "q": "The automated unit test suite executed _______ without any unexpected crashes.",
            "options": [
              "smoothly",
              "smooth",
              "smoothness",
              "smoothed"
            ],
            "answer": 0,
            "explanation": "Trạng từ 'smoothly' bổ nghĩa cho động từ hành động 'executed'."
          },
          {
            "q": "Neither the frontend developer nor the database architect _______ able to reproduce the error.",
            "options": [
              "was",
              "were",
              "are",
              "have"
            ],
            "answer": 0,
            "explanation": "Quy tắc 'Neither... nor' chia theo chủ ngữ gần nhất số ít -> 'was'."
          },
          {
            "q": "Please verify the security credentials before _______ access to the internal network.",
            "options": [
              "granting",
              "grant",
              "granted",
              "grantor"
            ],
            "answer": 0,
            "explanation": "Sau giới từ 'before' dùng danh động từ V-ing 'granting'."
          },
          {
            "q": "The project manager insisted that the documentation _______ updated immediately.",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "answer": 0,
            "explanation": "Thức giả định: insisted that S + (should) be + V3."
          },
          {
            "type": "error",
            "sentence": "The lead developer (A) have approved (B) the merge request (C) after thorough automated testing (D).",
            "wrongPart": "A",
            "correctedPart": "has approved",
            "explanation": "Chủ ngữ số ít 'The lead developer' phải dùng trợ động từ 'has', không dùng 'have'."
          },
          {
            "type": "error",
            "sentence": "She performed (A) brilliant (B) during the system design (C) interview with the technical director (D).",
            "wrongPart": "B",
            "correctedPart": "brilliantly",
            "explanation": "Bổ nghĩa cho động từ hành động 'performed' cần trạng từ thể cách 'brilliantly'."
          },
          {
            "type": "error",
            "sentence": "Despite (A) the server load was extremely high (B), the application (C) handled all requests successfully (D).",
            "wrongPart": "A",
            "correctedPart": "Although",
            "explanation": "Trước một mệnh đề có S-V (the server load was high) phải dùng liên từ 'Although', không dùng giới từ 'Despite'."
          },
          {
            "type": "error",
            "sentence": "The team is looking forward (A) to hear (B) constructive feedback from (C) the product stakeholders (D).",
            "wrongPart": "B",
            "correctedPart": "to hearing",
            "explanation": "Cấu trúc 'look forward to' đi kèm danh động từ V-ing ('to hearing')."
          },
          {
            "type": "builder",
            "viPrompt": "Hệ thống tự động sao lưu dữ liệu mỗi đêm vào lúc 12 giờ.",
            "enTarget": "The system automatically backs up data every night at midnight.",
            "words": [
              "The",
              "system",
              "automatically",
              "backs",
              "up",
              "data",
              "every",
              "night",
              "at",
              "midnight."
            ],
            "hint": "Chủ ngữ số ít 'The system' + trạng từ 'automatically' + động từ 'backs up'."
          },
          {
            "type": "builder",
            "viPrompt": "Chúng tôi rất mong nhận được phản hồi từ bạn về bản hợp đồng này.",
            "enTarget": "We look forward to receiving your feedback on this contract.",
            "words": [
              "We",
              "look",
              "forward",
              "to",
              "receiving",
              "your",
              "feedback",
              "on",
              "this",
              "contract."
            ],
            "hint": "Cụm 'look forward to' + V-ing 'receiving'."
          },
          {
            "type": "builder",
            "viPrompt": "Bạn nên kiểm tra lại mã nguồn cẩn thận trước khi triển khai.",
            "enTarget": "You should carefully review the source code before deployment.",
            "words": [
              "You",
              "should",
              "carefully",
              "review",
              "the",
              "source",
              "code",
              "before",
              "deployment."
            ],
            "hint": "Modal verb 'should' + trạng từ 'carefully' + động từ 'review'."
          }
        ],
        "slides": [
          {
            "slideNumber": 1,
            "tag": "TÌNH HUỐNG & CẠM BẪY",
            "title": "Tình huống thực tế & Lỗi người mất gốc hay mắc",
            "type": "situation_trap",
            "mindset": "Tư duy viết email chuyên nghiệp: Tránh dịch thô 'Please do this' (nghe như ra lệnh). Sử dụng các cấu trúc mềm mỏng 'Could you please assist with...' hoặc 'I would appreciate it if you could...'.",
            "wrongText": "❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp)",
            "rightText": "✅ 'Could you please share the report with me when you have a moment?'",
            "whyText": "Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.",
            "situationText": "Trong thực tế làm việc và giao tiếp hàng ngày, 80% người học tiếng Anh thường mắc lỗi dịch 'word-by-word' khiến câu bị gượng gạo hoặc sai ngữ pháp nghiêm trọng. Hãy xem bảng phân tích trực quan bên dưới để sửa dứt điểm lỗi này:",
            "diagram": [
              {
                "label": "Bẫy tâm lý",
                "text": "Nghĩ tiếng Việt rồi dịch sang tiếng Anh"
              },
              {
                "label": "Bản chất ngữ pháp",
                "text": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp."
              },
              {
                "label": "Mục tiêu đạt được",
                "text": "Phản xạ câu chuẩn xác trong 3 giây"
              }
            ],
            "narrationVi": "Chào bạn! Ở Slide 1, chúng ta cùng phân tích cạm bẫy hay gặp nhất: ❌ 'Give me the report now.' (Thô lỗ và thiếu tôn trọng đồng nghiệp). Câu chuẩn xác phải là: ✅ 'Could you please share the report with me when you have a moment?'. Lý do: Trong môi trường quốc tế, câu mệnh lệnh trực tiếp bị xem là thiếu lịch sự.."
          },
          {
            "slideNumber": 2,
            "tag": "BẢN ĐỒ CÔNG THỨC 3 THỂ",
            "title": "Công thức cốt lõi 3 thể [+] Khẳng định, [-] Phủ định, [?] Nghi vấn",
            "type": "formulas_svo",
            "legend": [
              {
                "tag": "S",
                "label": "Chủ ngữ (Subject)",
                "color": "bg-blue-500/20 text-blue-300 border-blue-500/40"
              },
              {
                "tag": "V",
                "label": "Động từ chính (Verb)",
                "color": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              },
              {
                "tag": "O / C",
                "label": "Tân ngữ / Bổ ngữ (Object/Adj)",
                "color": "bg-amber-500/20 text-amber-300 border-amber-500/40"
              }
            ],
            "forms": [
              {
                "symbol": "[+]",
                "title": "Khẳng Định",
                "formula": "[+] Khẳng định: I am writing to [V_inf] regarding [Topic]",
                "example": "I am writing to inquire about the delivery timeline of order #8492.",
                "note": "Diễn đạt câu khẳng định tính chất hoặc hành động xảy ra."
              },
              {
                "symbol": "[-]",
                "title": "Phủ Định",
                "formula": "[-] Phủ định lịch sự: Unfortunately, we are unable to [V_inf] at this time",
                "example": "Unfortunately, we are unable to accommodate your request for a discount.",
                "note": "Thêm NOT hoặc trợ động từ phủ định phù hợp với chủ ngữ."
              },
              {
                "symbol": "[?]",
                "title": "Nghi Vấn",
                "formula": "[?] Câu hỏi lịch sự: Would you mind [V-ing] / Could you please [V_inf]?",
                "example": "Could you please send us the revised project timeline by end of day?",
                "note": "Đảo trợ động từ hoặc To Be lên trước Chủ ngữ S."
              }
            ],
            "narrationVi": "Slide 2 là bản đồ công thức 3 thể cốt lõi. Hãy chú ý các thành phần: Chủ ngữ S màu xanh dương, Động từ V màu xanh lá, và Tân ngữ O màu hổ phách để ghép câu chính xác như khối Lego."
          },
          {
            "slideNumber": 3,
            "tag": "MẸO PHẢN XẠ 3 GIÂY",
            "title": "Mẹo phản xạ 3 giây & Dấu hiệu nhận biết trong câu",
            "type": "rapid_reflex",
            "signals": [
              {
                "keyword": "Would you mind + V-ing",
                "tip": "Lưu ý câu hỏi này bắt buộc dùng V-ing, trả lời 'No, not at all' là đồng ý giúp"
              },
              {
                "keyword": "I would appreciate it if you could + V_inf",
                "tip": "Cấu trúc nhờ vả trang trọng và lịch sự nhất trong email công việc"
              },
              {
                "keyword": "Please find attached + Noun",
                "tip": "Mẫu câu chuẩn khi gửi kèm tài liệu, không viết 'I attach file for you'"
              }
            ],
            "goldenRule": "Văn phong công sở: Lịch sự, súc tích và tôn trọng đối tác. Sử dụng modal verbs (could, would) thay cho mệnh lệnh thức trực tiếp.",
            "narrationVi": "Tại Slide 3 là mẹo phản xạ 3 giây giúp bạn nhìn vào câu là bắt trúng đáp án ngay lập tức thông qua các từ khóa dấu hiệu."
          },
          {
            "slideNumber": 4,
            "tag": "PHÂN TÍCH VÍ DỤ & AUDIO",
            "title": "Phân tích từng bước 2 câu ví dụ mẫu & Nghe đọc chuẩn bản xứ",
            "type": "example_analysis",
            "examples": [
              {
                "en": "I am writing to inquire about the delivery timeline of order #8492.",
                "vi": "Câu ví dụ thực tế diễn đạt chuẩn văn phong quốc tế.",
                "breakdown": [
                  {
                    "label": "1. Chủ ngữ (S)",
                    "value": "Xác định ngôi thứ và số ít / số nhiều của chủ thể"
                  },
                  {
                    "label": "2. Vị ngữ (V)",
                    "value": "Động từ chia chính xác theo thì và quy tắc ngữ pháp"
                  },
                  {
                    "label": "3. Thành phần phụ",
                    "value": "Bổ nghĩa rõ ràng cho ngữ cảnh của câu"
                  }
                ]
              },
              {
                "en": "Unfortunately, we are unable to accommodate your request for a discount.",
                "vi": "Ví dụ mở rộng giúp làm chủ cấu trúc trong môi trường công sở.",
                "breakdown": [
                  {
                    "label": "1. Trợ động từ",
                    "value": "Sử dụng trợ động từ chuẩn xác theo thể câu"
                  },
                  {
                    "label": "2. Động từ chính",
                    "value": "Giữ nguyên mẫu hoặc chia theo công thức bài học"
                  },
                  {
                    "label": "3. Ứng dụng thực tế",
                    "value": "Giao tiếp tự tin và viết email chuyên nghiệp"
                  }
                ]
              }
            ],
            "narrationVi": "Slide 4 phân tích cấu trúc 2 câu ví dụ mẫu. Bạn có thể nhấn vào nút loa để nghe giọng đọc bản xứ phát âm từng câu tiếng Anh nhé!"
          },
          {
            "slideNumber": 5,
            "tag": "THỬ THÁCH BẢNG TƯƠNG TÁC",
            "title": "Thử thách nhanh 1 câu hỏi kiểm tra ngay trên màn hình",
            "type": "checkpoint_challenge",
            "question": "Chọn phương án chính xác nhất để hoàn thiện cấu trúc của Chuyên đề 12:",
            "options": [
              "Phương án A (Chính xác)",
              "Phương án B (Nhiễu 1)",
              "Phương án C (Nhiễu 2)",
              "Phương án D (Nhiễu 3)"
            ],
            "answer": 0,
            "explanation": "Phương án A tuân thủ chính xác công thức ngữ pháp.",
            "narrationVi": "Slide 5 là thử thách phản xạ nhanh! Bạn hãy chọn đáp án đúng nhất trên màn hình để kiểm tra độ hiểu bài trước khi bước vào 15 bài tập thực hành nhé!"
          }
        ]
      }
    ]
  }
];
export default INITIAL_GRAMMAR_COURSES;
