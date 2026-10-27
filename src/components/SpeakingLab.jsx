import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Headphones,
  Volume2,
  Mic,
  MicOff,
  Sparkles,
  Pin,
  Award,
  RotateCcw,
  Play,
  Pause,
  Repeat,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ChevronRight,
  ChevronLeft,
  Check,
  MessageSquare,
  Coffee,
  Briefcase,
  Laptop,
  Plane,
  ShoppingCart,
  Target,
  RefreshCw,
  Info
} from 'lucide-react';

// ========================================================
// 8 COMPREHENSIVE CONVERSATION SCENARIOS (12 SENTENCES EACH)
// ========================================================
const SCENARIOS = [
  {
    id: 'intro',
    title: 'Chào hỏi & Làm quen tự nhiên',
    icon: '👋',
    desc: 'Làm quen, bắt chuyện tự nhiên và giới thiệu bản thân mượt mà',
    badge: 'Cơ bản',
    sentences: [
      {
        id: 's1-1',
        en: "Good morning! It's great‿to finally meet‿you in person. ↘",
        clean: "Good morning! It's great to finally meet you in person.",
        vi: 'Chào buổi sáng! Thật tuyệt vời khi cuối cùng cũng được gặp trực tiếp bạn.',
        stressed: ['morning', 'great', 'finally', 'meet', 'person'],
        audioSpeed: 1.0
      },
      {
        id: 's1-2',
        en: 'How has your week been going so far? ↗',
        clean: 'How has your week been going so far?',
        vi: 'Tuần này của bạn diễn ra như thế nào rồi?',
        stressed: ['week', 'going', 'far'],
        audioSpeed: 1.0
      },
      {
        id: 's1-3',
        en: "I've heard so much about‿your recent work on the new project. ↘",
        clean: "I've heard so much about your recent work on the new project.",
        vi: 'Tôi đã nghe nói rất nhiều về công việc gần đây của bạn trong dự án mới.',
        stressed: ['heard', 'much', 'recent', 'work', 'project'],
        audioSpeed: 1.0
      },
      {
        id: 's1-4',
        en: 'Where are‿you originally from? ↗',
        clean: 'Where are you originally from?',
        vi: 'Quê gốc của bạn ở đâu vậy?',
        stressed: ['Where', 'originally', 'from'],
        audioSpeed: 1.0
      },
      {
        id: 's1-5',
        en: 'I grew‿up in Da Nang, but I moved here for university. ↘',
        clean: 'I grew up in Da Nang, but I moved here for university.',
        vi: 'Tôi lớn lên ở Đà Nẵng, nhưng chuyển đến đây để học đại học.',
        stressed: ['grew', 'Da Nang', 'moved', 'university'],
        audioSpeed: 1.0
      },
      {
        id: 's1-6',
        en: 'What do‿you like to do in your free time? ↗',
        clean: 'What do you like to do in your free time?',
        vi: 'Bạn thích làm gì vào những lúc rảnh rỗi?',
        stressed: ['What', 'like', 'free', 'time'],
        audioSpeed: 1.0
      },
      {
        id: 's1-7',
        en: 'I really enjoy drinking coffee and reading tech blogs on weekends. ↘',
        clean: 'I really enjoy drinking coffee and reading tech blogs on weekends.',
        vi: 'Tôi rất thích nhâm nhi cà phê và đọc blog công nghệ vào cuối tuần.',
        stressed: ['enjoy', 'coffee', 'reading', 'tech', 'weekends'],
        audioSpeed: 1.0
      },
      {
        id: 's1-8',
        en: 'That sounds wonderful! Do‿you have any favorite cafes around here? ↗',
        clean: 'That sounds wonderful! Do you have any favorite cafes around here?',
        vi: 'Nghe tuyệt quá! Bạn có quán cà phê ruột nào quanh đây không?',
        stressed: ['sounds', 'wonderful', 'favorite', 'cafes', 'here'],
        audioSpeed: 1.0
      },
      {
        id: 's1-9',
        en: "Yes, there's a cozy place just around the corner that serves great espresso. ↘",
        clean: "Yes, there's a cozy place just around the corner that serves great espresso.",
        vi: 'Có chứ, ngay khúc quanh góc đường có một quán rất ấm cúng bán cà phê espresso cực ngon.',
        stressed: ['cozy', 'place', 'around', 'corner', 'great', 'espresso'],
        audioSpeed: 1.0
      },
      {
        id: 's1-10',
        en: "We should definitely check‿it‿out together sometime! ↘",
        clean: "We should definitely check it out together sometime!",
        vi: 'Hôm nào đó chúng ta nhất định phải cùng nhau ghé thử nhé!',
        stressed: ['definitely', 'check', 'together', 'sometime'],
        audioSpeed: 1.0
      },
      {
        id: 's1-11',
        en: "I would love to. Let's exchange contact details. ↘",
        clean: "I would love to. Let's exchange contact details.",
        vi: 'Tôi rất sẵn lòng. Chúng mình cùng trao đổi phương thức liên lạc nhé.',
        stressed: ['love', 'exchange', 'contact', 'details'],
        audioSpeed: 1.0
      },
      {
        id: 's1-12',
        en: "Here's my card. Looking forward to staying in touch! ↘",
        clean: "Here's my card. Looking forward to staying in touch!",
        vi: 'Đây là danh thiếp của tôi. Rất mong giữ liên lạc thường xuyên với bạn!',
        stressed: ['card', 'Looking', 'forward', 'staying', 'touch'],
        audioSpeed: 1.0
      }
    ]
  },
  {
    id: 'cafe',
    title: 'Gọi món tại Quán Cafe & Nhà hàng',
    icon: '☕',
    desc: 'Tự tin order đồ uống, hỏi giá, yêu cầu khẩu vị và xin hóa đơn',
    badge: 'Đời sống',
    sentences: [
      {
        id: 's2-1',
        en: 'Hi there! Could I please get a hot caramel latte with‿oat milk? ↗',
        clean: 'Hi there! Could I please get a hot caramel latte with oat milk?',
        vi: 'Xin chào! Cho tôi một ly latte caramel nóng với sữa yến mạch được không?',
        stressed: ['hot', 'caramel', 'latte', 'oat', 'milk'],
        audioSpeed: 1.0
      },
      {
        id: 's2-2',
        en: 'Sure thing! What size would you prefer for that? ↗',
        clean: 'Sure thing! What size would you prefer for that?',
        vi: 'Dạ được chứ! Bạn muốn dùng size nào cho ly này ạ?',
        stressed: ['Sure', 'size', 'prefer'],
        audioSpeed: 1.0
      },
      {
        id: 's2-3',
        en: 'A medium cup would be perfect, thank‿you. ↘',
        clean: 'A medium cup would be perfect, thank you.',
        vi: 'Cho tôi một ly cỡ vừa là hoàn hảo rồi, cảm ơn bạn.',
        stressed: ['medium', 'cup', 'perfect', 'thank'],
        audioSpeed: 1.0
      },
      {
        id: 's2-4',
        en: 'Would you like any pastries or snacks to go with that? ↗',
        clean: 'Would you like any pastries or snacks to go with that?',
        vi: 'Bạn có muốn dùng thêm bánh ngọt hay đồ ăn nhẹ kèm theo không?',
        stressed: ['pastries', 'snacks'],
        audioSpeed: 1.0
      },
      {
        id: 's2-5',
        en: 'Could you recommend your best-selling croissant today? ↗',
        clean: 'Could you recommend your best-selling croissant today?',
        vi: 'Bạn có thể gợi ý loại bánh sừng bò bán chạy nhất hôm nay được không?',
        stressed: ['recommend', 'best-selling', 'croissant', 'today'],
        audioSpeed: 1.0
      },
      {
        id: 's2-6',
        en: 'Our almond croissant is freshly baked and very popular. ↘',
        clean: 'Our almond croissant is freshly baked and very popular.',
        vi: 'Bánh sừng bò hạnh nhân bên em vừa mới ra lò và rất được ưa chuộng ạ.',
        stressed: ['almond', 'croissant', 'freshly', 'baked', 'popular'],
        audioSpeed: 1.0
      },
      {
        id: 's2-7',
        en: "Sounds delicious, I'll take one of those as well. ↘",
        clean: "Sounds delicious, I'll take one of those as well.",
        vi: 'Nghe hấp dẫn quá, lấy cho tôi một chiếc đó luôn nhé.',
        stressed: ['delicious', 'take', 'one'],
        audioSpeed: 1.0
      },
      {
        id: 's2-8',
        en: 'Is this for here or to go? ↗',
        clean: 'Is this for here or to go?',
        vi: 'Bạn dùng tại quán hay mang đi ạ?',
        stressed: ['here', 'go'],
        audioSpeed: 1.0
      },
      {
        id: 's2-9',
        en: "I'll have‿it for here, please. ↘",
        clean: "I'll have it for here, please.",
        vi: 'Tôi sẽ dùng tại quán, cảm ơn bạn.',
        stressed: ['have', 'here', 'please'],
        audioSpeed: 1.0
      },
      {
        id: 's2-10',
        en: 'Do you accept credit card or contactless mobile pay? ↗',
        clean: 'Do you accept credit card or contactless mobile pay?',
        vi: 'Quán có chấp nhận thẻ tín dụng hoặc thanh toán một chạm trên điện thoại không?',
        stressed: ['accept', 'credit', 'card', 'contactless', 'pay'],
        audioSpeed: 1.0
      },
      {
        id: 's2-11',
        en: 'Both are accepted! Please tap your card on the reader. ↘',
        clean: 'Both are accepted! Please tap your card on the reader.',
        vi: 'Dạ cả hai đều được ạ! Bạn vui lòng chạm thẻ lên máy đọc nhé.',
        stressed: ['Both', 'accepted', 'tap', 'card', 'reader'],
        audioSpeed: 1.0
      },
      {
        id: 's2-12',
        en: "Could we please have the bill whenever you're ready? ↗",
        clean: "Could we please have the bill whenever you're ready?",
        vi: 'Cho chúng tôi xin hóa đơn thanh toán khi nào bạn tiện nhé.',
        stressed: ['bill', 'whenever', 'ready'],
        audioSpeed: 1.0
      }
    ]
  },
  {
    id: 'office',
    title: 'Giao tiếp Văn phòng & Email hàng ngày',
    icon: '🏢',
    desc: 'Trao đổi công việc chuyên nghiệp, hẹn lịch họp và phản hồi đồng nghiệp',
    badge: 'Công việc',
    sentences: [
      {
        id: 's3-1',
        en: 'Could you please send me the updated quarterly report before noon? ↗',
        clean: 'Could you please send me the updated quarterly report before noon?',
        vi: 'Bạn vui lòng gửi giúp tôi bản báo cáo quý cập nhật trước buổi trưa được không?',
        stressed: ['send', 'updated', 'quarterly', 'report', 'noon'],
        audioSpeed: 1.0
      },
      {
        id: 's3-2',
        en: "I'm currently reviewing the final numbers with the finance team. ↘",
        clean: "I'm currently reviewing the final numbers with the finance team.",
        vi: 'Tôi hiện đang đối chiếu lại số liệu cuối cùng với bộ phận tài chính.',
        stressed: ['currently', 'reviewing', 'final', 'numbers', 'finance'],
        audioSpeed: 1.0
      },
      {
        id: 's3-3',
        en: 'Please let me know if there are any discrepancies in the data. ↘',
        clean: 'Please let me know if there are any discrepancies in the data.',
        vi: 'Hãy báo cho mình biết nếu phát hiện bất kỳ điểm sai lệch nào trong dữ liệu nhé.',
        stressed: ['know', 'discrepancies', 'data'],
        audioSpeed: 1.0
      },
      {
        id: 's3-4',
        en: 'I will attach the revised spreadsheet to this email thread. ↘',
        clean: 'I will attach the revised spreadsheet to this email thread.',
        vi: 'Tôi sẽ đính kèm bảng tính đã chỉnh sửa vào chuỗi email này.',
        stressed: ['attach', 'revised', 'spreadsheet', 'email'],
        audioSpeed: 1.0
      },
      {
        id: 's3-5',
        en: 'Are you available for a brief fifteen-minute sync this afternoon? ↗',
        clean: 'Are you available for a brief fifteen-minute sync this afternoon?',
        vi: 'Chiều nay bạn có rảnh để trao đổi nhanh khoảng 15 phút không?',
        stressed: ['available', 'brief', 'fifteen-minute', 'sync', 'afternoon'],
        audioSpeed: 1.0
      },
      {
        id: 's3-6',
        en: 'Three PM works best for me if that fits your schedule. ↘',
        clean: 'Three PM works best for me if that fits your schedule.',
        vi: '3 giờ chiều là tiện nhất cho tôi nếu thời gian đó phù hợp với lịch của bạn.',
        stressed: ['Three PM', 'best', 'fits', 'schedule'],
        audioSpeed: 1.0
      },
      {
        id: 's3-7',
        en: "Let's set‿up a calendar invite and book room B. ↘",
        clean: "Let's set up a calendar invite and book room B.",
        vi: 'Chúng ta hãy gửi thư mời lịch họp và đặt trước phòng họp B nhé.',
        stressed: ['calendar', 'invite', 'book', 'room B'],
        audioSpeed: 1.0
      },
      {
        id: 's3-8',
        en: 'I appreciate your quick turnaround on this urgent matter. ↘',
        clean: 'I appreciate your quick turnaround on this urgent matter.',
        vi: 'Tôi rất trân trọng sự xử lý và phản hồi nhanh chóng của bạn trong việc gấp này.',
        stressed: ['appreciate', 'quick', 'turnaround', 'urgent', 'matter'],
        audioSpeed: 1.0
      },
      {
        id: 's3-9',
        en: "Don't hesitate to reach‿out if you encounter any roadblocks. ↘",
        clean: "Don't hesitate to reach out if you encounter any roadblocks.",
        vi: 'Đừng ngần ngại nhắn tin hoặc gọi nếu bạn gặp bất kỳ trở ngại hay vướng mắc nào.',
        stressed: ['hesitate', 'reach out', 'encounter', 'roadblocks'],
        audioSpeed: 1.0
      },
      {
        id: 's3-10',
        en: "I'll follow‿up with the client regarding their feedback tomorrow. ↘",
        clean: "I'll follow up with the client regarding their feedback tomorrow.",
        vi: 'Tôi sẽ trao đổi tiếp với khách hàng về phản hồi của họ vào ngày mai.',
        stressed: ['follow up', 'client', 'feedback', 'tomorrow'],
        audioSpeed: 1.0
      },
      {
        id: 's3-11',
        en: 'Thank you for bringing this critical issue to our attention. ↘',
        clean: 'Thank you for bringing this critical issue to our attention.',
        vi: 'Cảm ơn bạn đã nêu ra vấn đề quan trọng này để cả nhóm cùng lưu tâm.',
        stressed: ['bringing', 'critical', 'issue', 'attention'],
        audioSpeed: 1.0
      },
      {
        id: 's3-12',
        en: 'Have a productive rest of the day and talk soon! ↘',
        clean: 'Have a productive rest of the day and talk soon!',
        vi: 'Chúc bạn một ngày làm việc năng suất và hẹn sớm trao đổi tiếp nhé!',
        stressed: ['productive', 'rest', 'talk', 'soon'],
        audioSpeed: 1.0
      }
    ]
  },
  {
    id: 'it_standup',
    title: 'Họp Daily Standup & Báo cáo tiến độ IT/Agile',
    icon: '💻',
    desc: 'Báo cáo công việc đã làm, việc chuẩn bị làm và các vấn đề bị blocker',
    badge: 'Chuyên ngành',
    sentences: [
      {
        id: 's4-1',
        en: 'Yesterday, I finished implementing the user authentication service. ↘',
        clean: 'Yesterday, I finished implementing the user authentication service.',
        vi: 'Hôm qua, mình đã hoàn thành việc triển khai dịch vụ xác thực người dùng.',
        stressed: ['Yesterday', 'finished', 'implementing', 'authentication', 'service'],
        audioSpeed: 1.0
      },
      {
        id: 's4-2',
        en: 'I also resolved the intermittent database connection issue. ↘',
        clean: 'I also resolved the intermittent database connection issue.',
        vi: 'Mình cũng đã khắc phục xong lỗi ngắt quãng khi kết nối cơ sở dữ liệu.',
        stressed: ['resolved', 'intermittent', 'database', 'connection', 'issue'],
        audioSpeed: 1.0
      },
      {
        id: 's4-3',
        en: 'Today, I will focus on integrating the third-party payment gateway. ↘',
        clean: 'Today, I will focus on integrating the third-party payment gateway.',
        vi: 'Hôm nay, mình sẽ tập trung vào tích hợp cổng thanh toán bên thứ ba.',
        stressed: ['Today', 'focus', 'integrating', 'payment', 'gateway'],
        audioSpeed: 1.0
      },
      {
        id: 's4-4',
        en: 'Are there any blockers preventing you from deploying to staging? ↗',
        clean: 'Are there any blockers preventing you from deploying to staging?',
        vi: 'Có trở ngại nào ngăn cản bạn triển khai lên môi trường staging không?',
        stressed: ['blockers', 'preventing', 'deploying', 'staging'],
        audioSpeed: 1.0
      },
      {
        id: 's4-5',
        en: "I'm currently blocked by an API rate limit error from the vendor. ↘",
        clean: "I'm currently blocked by an API rate limit error from the vendor.",
        vi: 'Hiện tại mình đang bị vướng lỗi giới hạn lượt gọi API từ phía nhà cung cấp.',
        stressed: ['blocked', 'API', 'rate limit', 'error', 'vendor'],
        audioSpeed: 1.0
      },
      {
        id: 's4-6',
        en: "Let's take this offline and debug‿it together right after standup. ↘",
        clean: "Let's take this offline and debug it together right after standup.",
        vi: 'Chúng ta hãy trao đổi riêng và cùng sửa lỗi này ngay sau buổi họp standup nhé.',
        stressed: ['offline', 'debug', 'together', 'standup'],
        audioSpeed: 1.0
      },
      {
        id: 's4-7',
        en: 'The pull request is ready for code review on GitHub. ↘',
        clean: 'The pull request is ready for code review on GitHub.',
        vi: 'Bản pull request đã sẵn sàng để mọi người xem xét code trên GitHub.',
        stressed: ['pull request', 'ready', 'code review', 'GitHub'],
        audioSpeed: 1.0
      },
      {
        id: 's4-8',
        en: 'Could someone from the backend team take a quick look? ↗',
        clean: 'Could someone from the backend team take a quick look?',
        vi: 'Có bạn nào bên nhóm backend xem qua giúp mình được không?',
        stressed: ['someone', 'backend', 'quick', 'look'],
        audioSpeed: 1.0
      },
      {
        id: 's4-9',
        en: 'All unit tests and integration tests are passing with high coverage. ↘',
        clean: 'All unit tests and integration tests are passing with high coverage.',
        vi: 'Tất cả các bài kiểm thử đơn vị và tích hợp đều đã đạt tỷ lệ bao phủ cao.',
        stressed: ['unit tests', 'integration', 'passing', 'coverage'],
        audioSpeed: 1.0
      },
      {
        id: 's4-10',
        en: 'We aim to ship this feature before the sprint deadline on Friday. ↘',
        clean: 'We aim to ship this feature before the sprint deadline on Friday.',
        vi: 'Mục tiêu của chúng ta là phát hành tính năng này trước hạn chót sprint vào thứ Sáu.',
        stressed: ['aim', 'ship', 'feature', 'sprint', 'deadline', 'Friday'],
        audioSpeed: 1.0
      },
      {
        id: 's4-11',
        en: 'Make sure to update the Jira ticket status accordingly. ↘',
        clean: 'Make sure to update the Jira ticket status accordingly.',
        vi: 'Các bạn nhớ cập nhật trạng thái thẻ bài trên Jira cho đúng tiến độ nhé.',
        stressed: ['update', 'Jira', 'ticket', 'status'],
        audioSpeed: 1.0
      },
      {
        id: 's4-12',
        en: "Great work everyone, let's keep‿up the solid momentum! ↘",
        clean: "Great work everyone, let's keep up the solid momentum!",
        vi: 'Mọi người làm việc rất tốt, hãy cùng nhau giữ vững đà tiến triển này nhé!',
        stressed: ['Great', 'work', 'keep up', 'solid', 'momentum'],
        audioSpeed: 1.0
      }
    ]
  },
  {
    id: 'travel',
    title: 'Sân bay, Khách sạn & Hỏi đường khi Du lịch',
    icon: '✈️',
    desc: 'Làm thủ tục hải quan, đặt phòng, bắt xe và hỏi đường khi du lịch',
    badge: 'Du lịch',
    sentences: [
      {
        id: 's5-1',
        en: 'Excuse me, where can I find the check-in counter for international flights? ↗',
        clean: 'Excuse me, where can I find the check-in counter for international flights?',
        vi: 'Xin lỗi, tôi có thể tìm quầy làm thủ tục cho các chuyến bay quốc tế ở đâu ạ?',
        stressed: ['check-in', 'counter', 'international', 'flights'],
        audioSpeed: 1.0
      },
      {
        id: 's5-2',
        en: 'Please have your passport and boarding pass ready for inspection. ↘',
        clean: 'Please have your passport and boarding pass ready for inspection.',
        vi: 'Vui lòng chuẩn bị sẵn hộ chiếu và thẻ lên máy bay để nhân viên kiểm tra.',
        stressed: ['passport', 'boarding pass', 'ready', 'inspection'],
        audioSpeed: 1.0
      },
      {
        id: 's5-3',
        en: 'Could I have an aisle seat near the front of the aircraft, please? ↗',
        clean: 'Could I have an aisle seat near the front of the aircraft, please?',
        vi: 'Cho tôi xin một ghế ngồi gần lối đi ở phía trước máy bay được không ạ?',
        stressed: ['aisle', 'seat', 'front', 'aircraft'],
        audioSpeed: 1.0
      },
      {
        id: 's5-4',
        en: 'Is this carry-on bag within the allowable weight limit? ↗',
        clean: 'Is this carry-on bag within the allowable weight limit?',
        vi: 'Túi hành lý xách tay này có nằm trong giới hạn trọng lượng cho phép không?',
        stressed: ['carry-on', 'bag', 'allowable', 'weight', 'limit'],
        audioSpeed: 1.0
      },
      {
        id: 's5-5',
        en: 'Which baggage carousel will deliver the luggage from flight VN302? ↗',
        clean: 'Which baggage carousel will deliver the luggage from flight VN302?',
        vi: 'Băng chuyền hành lý nào sẽ trả đồ của chuyến bay VN302 vậy ạ?',
        stressed: ['baggage', 'carousel', 'deliver', 'luggage', 'flight VN302'],
        audioSpeed: 1.0
      },
      {
        id: 's5-6',
        en: 'Hello, I have a reservation under the name of Nguyen for two nights. ↘',
        clean: 'Hello, I have a reservation under the name of Nguyen for two nights.',
        vi: 'Xin chào, tôi có đặt phòng trước dưới tên Nguyễn cho hai đêm.',
        stressed: ['reservation', 'Nguyen', 'two', 'nights'],
        audioSpeed: 1.0
      },
      {
        id: 's5-7',
        en: 'Could you tell me what time breakfast is served in the morning? ↗',
        clean: 'Could you tell me what time breakfast is served in the morning?',
        vi: 'Bạn có thể cho tôi biết bữa sáng được phục vụ vào mấy giờ sáng không?',
        stressed: ['time', 'breakfast', 'served', 'morning'],
        audioSpeed: 1.0
      },
      {
        id: 's5-8',
        en: 'Is complimentary high-speed Wi-Fi available throughout the hotel? ↗',
        clean: 'Is complimentary high-speed Wi-Fi available throughout the hotel?',
        vi: 'Khách sạn có cung cấp Wi-Fi tốc độ cao miễn phí ở toàn bộ khuôn viên không?',
        stressed: ['complimentary', 'high-speed', 'Wi-Fi', 'hotel'],
        audioSpeed: 1.0
      },
      {
        id: 's5-9',
        en: 'Could you please show me on the map how to get to the museum? ↗',
        clean: 'Could you please show me on the map how to get to the museum?',
        vi: 'Bạn có thể chỉ giúp tôi trên bản đồ đường đi đến viện bảo tàng được không?',
        stressed: ['show', 'map', 'get', 'museum'],
        audioSpeed: 1.0
      },
      {
        id: 's5-10',
        en: 'Walk straight for two blocks, then take a left at the traffic light. ↘',
        clean: 'Walk straight for two blocks, then take a left at the traffic light.',
        vi: 'Bạn đi thẳng qua hai dãy nhà, sau đó rẽ trái ở chỗ đèn giao thông nhé.',
        stressed: ['Walk', 'straight', 'two blocks', 'left', 'traffic light'],
        audioSpeed: 1.0
      },
      {
        id: 's5-11',
        en: 'How much is the average taxi fare to downtown from here? ↗',
        clean: 'How much is the average taxi fare to downtown from here?',
        vi: 'Giá taxi trung bình từ đây vào trung tâm thành phố là khoảng bao nhiêu vậy?',
        stressed: ['How much', 'average', 'taxi fare', 'downtown'],
        audioSpeed: 1.0
      },
      {
        id: 's5-12',
        en: 'Thank you so much for your assistance, have a pleasant day! ↘',
        clean: 'Thank you so much for your assistance, have a pleasant day!',
        vi: 'Cảm ơn sự hướng dẫn tận tình của bạn rất nhiều, chúc bạn một ngày tốt lành!',
        stressed: ['Thank you', 'assistance', 'pleasant', 'day'],
        audioSpeed: 1.0
      }
    ]
  },
  {
    id: 'shopping',
    title: 'Mua sắm & Mặc cả, Đổi trả hàng',
    icon: '🛒',
    desc: 'Hỏi kích cỡ, thử đồ, đàm phán giảm giá và quy trình đổi trả hàng hóa',
    badge: 'Đời sống',
    sentences: [
      {
        id: 's6-1',
        en: 'Excuse me, do you happen to have this jacket in a smaller size? ↗',
        clean: 'Excuse me, do you happen to have this jacket in a smaller size?',
        vi: 'Xin lỗi, cửa hàng mình có chiếc áo khoác này với size nhỏ hơn không ạ?',
        stressed: ['jacket', 'smaller', 'size'],
        audioSpeed: 1.0
      },
      {
        id: 's6-2',
        en: 'Let me check our stockroom in the back for you right away. ↘',
        clean: 'Let me check our stockroom in the back for you right away.',
        vi: 'Để em vào kho phía sau kiểm tra cho bạn ngay bây giờ nhé.',
        stressed: ['check', 'stockroom', 'back', 'right away'],
        audioSpeed: 1.0
      },
      {
        id: 's6-3',
        en: 'Where are the fitting rooms located in this department? ↗',
        clean: 'Where are the fitting rooms located in this department?',
        vi: 'Phòng thử đồ nằm ở khu vực nào trong gian hàng này vậy?',
        stressed: ['fitting rooms', 'located', 'department'],
        audioSpeed: 1.0
      },
      {
        id: 's6-4',
        en: 'The fitting rooms are right past the denim section on your right. ↘',
        clean: 'The fitting rooms are right past the denim section on your right.',
        vi: 'Phòng thử đồ nằm ngay sau khu vực quần jean ở phía bên tay phải của bạn.',
        stressed: ['fitting rooms', 'past', 'denim', 'right'],
        audioSpeed: 1.0
      },
      {
        id: 's6-5',
        en: 'Is there any special discount or promotional code available today? ↗',
        clean: 'Is there any special discount or promotional code available today?',
        vi: 'Hôm nay bên mình có chương trình giảm giá hay mã ưu đãi đặc biệt nào không?',
        stressed: ['special', 'discount', 'promotional code', 'available'],
        audioSpeed: 1.0
      },
      {
        id: 's6-6',
        en: 'If you buy two items, you receive twenty percent off the second one. ↘',
        clean: 'If you buy two items, you receive twenty percent off the second one.',
        vi: 'Nếu mua hai món đồ, bạn sẽ được giảm 20% cho món thứ hai ạ.',
        stressed: ['buy two', 'twenty percent off', 'second'],
        audioSpeed: 1.0
      },
      {
        id: 's6-7',
        en: "I'd like to return this shirt because it doesn't fit quite right. ↘",
        clean: "I'd like to return this shirt because it doesn't fit quite right.",
        vi: 'Tôi muốn đổi trả chiếc áo sơ mi này vì mặc không vừa vặn lắm.',
        stressed: ['return', 'shirt', "doesn't fit"],
        audioSpeed: 1.0
      },
      {
        id: 's6-8',
        en: 'Do you have the original store receipt with you today? ↗',
        clean: 'Do you have the original store receipt with you today?',
        vi: 'Bạn có mang theo hóa đơn mua hàng gốc của cửa hàng hôm nay không ạ?',
        stressed: ['original', 'receipt', 'today'],
        audioSpeed: 1.0
      },
      {
        id: 's6-9',
        en: 'Yes, here is the receipt and the tags are still attached. ↘',
        clean: 'Yes, here is the receipt and the tags are still attached.',
        vi: 'Có, đây là hóa đơn và mác quần áo vẫn còn nguyên vẹn chưa tháo.',
        stressed: ['receipt', 'tags', 'still attached'],
        audioSpeed: 1.0
      },
      {
        id: 's6-10',
        en: 'Would you prefer a direct refund to your card or store credit? ↗',
        clean: 'Would you prefer a direct refund to your card or store credit?',
        vi: 'Bạn muốn hoàn tiền trực tiếp về thẻ hay nhận voucher mua hàng ạ?',
        stressed: ['refund', 'card', 'store credit'],
        audioSpeed: 1.0
      },
      {
        id: 's6-11',
        en: 'A refund to my original payment card would be ideal, thanks. ↘',
        clean: 'A refund to my original payment card would be ideal, thanks.',
        vi: 'Hoàn tiền về thẻ thanh toán ban đầu là tiện nhất cho tôi, cảm ơn bạn.',
        stressed: ['refund', 'original', 'payment card', 'ideal'],
        audioSpeed: 1.0
      },
      {
        id: 's6-12',
        en: 'Your return has been processed. Here is your transaction copy! ↘',
        clean: 'Your return has been processed. Here is your transaction copy!',
        vi: 'Thủ tục đổi trả của bạn đã hoàn tất. Gửi bạn biên lai giao dịch nhé!',
        stressed: ['processed', 'transaction', 'copy'],
        audioSpeed: 1.0
      }
    ]
  },
  {
    id: 'interview',
    title: 'Phỏng vấn xin việc bằng tiếng Anh',
    icon: '🎯',
    desc: 'Trả lời phỏng vấn lưu loát, gây ấn tượng với nhà tuyển dụng quốc tế',
    badge: 'Nâng cao',
    sentences: [
      {
        id: 's7-1',
        en: 'Thank you for inviting me to interview for the software engineer position today. ↘',
        clean: 'Thank you for inviting me to interview for the software engineer position today.',
        vi: 'Cảm ơn quý công ty đã mời tôi đến buổi phỏng vấn cho vị trí kỹ sư phần mềm hôm nay.',
        stressed: ['inviting', 'interview', 'software engineer', 'position'],
        audioSpeed: 1.0
      },
      {
        id: 's7-2',
        en: 'Could you walk me through your professional background and core strengths? ↗',
        clean: 'Could you walk me through your professional background and core strengths?',
        vi: 'Bạn có thể tóm lược về quá trình làm việc và thế mạnh cốt lõi của mình được không?',
        stressed: ['walk me through', 'professional', 'background', 'core strengths'],
        audioSpeed: 1.0
      },
      {
        id: 's7-3',
        en: 'I have over four years of hands-on experience developing web applications. ↘',
        clean: 'I have over four years of hands-on experience developing web applications.',
        vi: 'Tôi có hơn 4 năm kinh nghiệm thực chiến trong việc phát triển các ứng dụng web.',
        stressed: ['four years', 'hands-on', 'experience', 'web applications'],
        audioSpeed: 1.0
      },
      {
        id: 's7-4',
        en: 'My strongest skills include React, Node.js, and relational database architecture. ↘',
        clean: 'My strongest skills include React, Node.js, and relational database architecture.',
        vi: 'Kỹ năng vững vàng nhất của tôi bao gồm React, Node.js và kiến trúc cơ sở dữ liệu quan hệ.',
        stressed: ['strongest skills', 'React', 'Node.js', 'database architecture'],
        audioSpeed: 1.0
      },
      {
        id: 's7-5',
        en: 'How do you handle tight deadlines and conflicting priorities under pressure? ↗',
        clean: 'How do you handle tight deadlines and conflicting priorities under pressure?',
        vi: 'Bạn xử lý thế nào trước các hạn chót gấp và các ưu tiên xung đột nhau khi chịu áp lực?',
        stressed: ['tight deadlines', 'conflicting priorities', 'pressure'],
        audioSpeed: 1.0
      },
      {
        id: 's7-6',
        en: 'I prioritize critical path tasks and communicate proactively with stakeholders. ↘',
        clean: 'I prioritize critical path tasks and communicate proactively with stakeholders.',
        vi: 'Tôi ưu tiên các đầu việc trọng yếu và chủ động liên lạc với các bên liên quan.',
        stressed: ['prioritize', 'critical path', 'communicate proactively', 'stakeholders'],
        audioSpeed: 1.0
      },
      {
        id: 's7-7',
        en: 'Can you describe a challenging technical problem you solved recently? ↗',
        clean: 'Can you describe a challenging technical problem you solved recently?',
        vi: 'Bạn có thể kể về một bài toán kỹ thuật hóc búa mà bạn đã giải quyết gần đây không?',
        stressed: ['challenging', 'technical problem', 'solved recently'],
        audioSpeed: 1.0
      },
      {
        id: 's7-8',
        en: 'I optimized our query indexing, reducing API response latency by forty percent. ↘',
        clean: 'I optimized our query indexing, reducing API response latency by forty percent.',
        vi: 'Tôi đã tối ưu chỉ mục truy vấn, giúp giảm 40% độ trễ phản hồi của API.',
        stressed: ['optimized', 'query indexing', 'reducing latency', 'forty percent'],
        audioSpeed: 1.0
      },
      {
        id: 's7-9',
        en: 'What attracted you to apply for our company specifically? ↗',
        clean: 'What attracted you to apply for our company specifically?',
        vi: 'Điều gì đã thu hút bạn nộp đơn ứng tuyển vào công ty chúng tôi nói riêng?',
        stressed: ['attracted', 'apply', 'company specifically'],
        audioSpeed: 1.0
      },
      {
        id: 's7-10',
        en: 'I admire your product vision and your strong culture of continuous learning. ↘',
        clean: 'I admire your product vision and your strong culture of continuous learning.',
        vi: 'Tôi ngưỡng mộ tầm nhìn sản phẩm và văn hóa không ngừng học hỏi của công ty bạn.',
        stressed: ['admire', 'product vision', 'culture', 'continuous learning'],
        audioSpeed: 1.0
      },
      {
        id: 's7-11',
        en: 'Do you have any questions for us regarding the team or company roadmap? ↗',
        clean: 'Do you have any questions for us regarding the team or company roadmap?',
        vi: 'Bạn có câu hỏi nào cho chúng tôi về đội ngũ hoặc định hướng của công ty không?',
        stressed: ['questions', 'team', 'company roadmap'],
        audioSpeed: 1.0
      },
      {
        id: 's7-12',
        en: 'What are the most important milestones you expect this role to achieve in ninety days? ↗',
        clean: 'What are the most important milestones you expect this role to achieve in ninety days?',
        vi: 'Đâu là những cột mốc quan trọng nhất quý công ty kỳ vọng vị trí này đạt được trong 90 ngày đầu?',
        stressed: ['important milestones', 'expect', 'achieve', 'ninety days'],
        audioSpeed: 1.0
      }
    ]
  }
];

export default function SpeakingLab({ onSpeak, onPinNote, onAwardXP, vocabCourses = [] }) {
  // Scenario & Sentence Navigation
  const [selectedScenarioId, setSelectedScenarioId] = useState(SCENARIOS[0].id);
  const [sentenceIndex, setSentenceIndex] = useState(0);

  // Dynamic Scenario 8: Sentences extracted from active vocabulary cards
  const dynamicVocabScenario = useMemo(() => {
    const cardsWithExamples = [];
    if (vocabCourses && vocabCourses.length > 0) {
      for (const course of vocabCourses) {
        if (!course.subdecks) continue;
        for (const sub of course.subdecks) {
          if (!sub.cards) continue;
          for (const card of sub.cards) {
            if (card.example && card.example.length > 15) {
              cardsWithExamples.push({
                id: `vocab-${card.id}`,
                en: `${card.example} ↘`,
                clean: card.example,
                vi: card.exampleVi || `Ví dụ ứng dụng từ vựng "${card.word}"`,
                stressed: [card.word],
                audioSpeed: 1.0
              });
              if (cardsWithExamples.length >= 12) break;
            }
          }
          if (cardsWithExamples.length >= 12) break;
        }
        if (cardsWithExamples.length >= 12) break;
      }
    }

    return {
      id: 'vocab_live',
      title: 'Luyện nói từ vựng bạn đang học',
      icon: '🔄',
      desc: 'Tự động lấy câu ví dụ của các từ vựng bạn vừa học trong Kho Từ Vựng',
      badge: 'Cá nhân hóa',
      sentences: cardsWithExamples.length > 0 ? cardsWithExamples : SCENARIOS[0].sentences
    };
  }, [vocabCourses]);

  const allScenarios = useMemo(() => {
    return [...SCENARIOS, dynamicVocabScenario];
  }, [dynamicVocabScenario]);

  const currentScenario = useMemo(() => {
    return allScenarios.find((s) => s.id === selectedScenarioId) || allScenarios[0];
  }, [allScenarios, selectedScenarioId]);

  const currentSentence = currentScenario.sentences[sentenceIndex] || currentScenario.sentences[0];

  // Speaking Flow State
  const [isLooping, setIsLooping] = useState(false);
  const loopTimerRef = useRef(null);

  // Recording State
  const [isRecording, setIsRecording] = useState(false);
  const [recognizedTranscript, setRecognizedTranscript] = useState('');
  const [recordedAudioUrl, setRecordedAudioUrl] = useState(null);
  const [recordingSupported, setRecordingSupported] = useState(true);
  const [activePlayback, setActivePlayback] = useState(null); // 'model' | 'user' | null
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recognitionRef = useRef(null);

  // Pronunciation Evaluation State
  const [evalResult, setEvalResult] = useState(null);

  // Reset states on sentence switch
  useEffect(() => {
    setRecognizedTranscript('');
    setRecordedAudioUrl(null);
    setEvalResult(null);
    setIsRecording(false);
    setActivePlayback(null);
  }, [selectedScenarioId, sentenceIndex]);

  // Handle Loop Audio Mode
  useEffect(() => {
    if (isLooping && currentSentence && onSpeak) {
      onSpeak(currentSentence.clean, 1.0);
      loopTimerRef.current = setInterval(() => {
        onSpeak(currentSentence.clean, 1.0);
      }, 4500);
    } else {
      if (loopTimerRef.current) clearInterval(loopTimerRef.current);
    }
    return () => {
      if (loopTimerRef.current) clearInterval(loopTimerRef.current);
    };
  }, [isLooping, currentSentence, onSpeak]);

  // Clean word helper
  const cleanWord = (w) => w.toLowerCase().replace(/[^a-z0-9]/g, '');

  // ========================================================
  // BƯỚC 2: THU ÂM TRỰC TIẾP (SPEECH RECOGNITION + MEDIA RECORDER)
  // ========================================================
  const startRecording = async () => {
    setRecordedAudioUrl(null);
    setRecognizedTranscript('');
    setEvalResult(null);
    audioChunksRef.current = [];

    // 1. Check & start MediaRecorder for user's audio playback
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            audioChunksRef.current.push(e.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
          const audioUrl = URL.createObjectURL(audioBlob);
          setRecordedAudioUrl(audioUrl);
          stream.getTracks().forEach((track) => track.stop());
        };

        mediaRecorder.start();
      } catch (err) {
        console.warn('Microphone stream access error:', err);
      }
    }

    // 2. Start SpeechRecognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
          setIsRecording(true);
        };

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setRecognizedTranscript(transcript);
          evaluatePronunciation(transcript, currentSentence.clean);
        };

        recognition.onerror = (event) => {
          console.warn('SpeechRecognition error:', event.error);
          setIsRecording(false);
        };

        recognition.onend = () => {
          setIsRecording(false);
          if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
          }
        };

        recognition.start();
      } catch (err) {
        console.warn('SpeechRecognition start failed:', err);
        setIsRecording(false);
      }
    } else {
      setRecordingSupported(false);
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
  };

  // ========================================================
  // BƯỚC 3: CHẤM ĐIỂM PHÁT ÂM TỪNG TỪ (WORD-BY-WORD FEEDBACK)
  // ========================================================
  const evaluatePronunciation = (userSpoken, targetClean) => {
    const targetWords = targetClean.split(/\s+/);
    const spokenWords = userSpoken.toLowerCase().split(/\s+/).map(cleanWord);

    let matchCount = 0;
    const wordFeedback = targetWords.map((rawWord) => {
      const clean = cleanWord(rawWord);
      const isMatched = spokenWords.includes(clean);

      // Check partial/phonetic near match
      let isNear = false;
      if (!isMatched) {
        for (const sw of spokenWords) {
          if (sw.startsWith(clean.slice(0, 3)) || clean.startsWith(sw.slice(0, 3))) {
            isNear = true;
            break;
          }
        }
      }

      if (isMatched) matchCount++;
      return {
        raw: rawWord,
        clean,
        status: isMatched ? 'correct' : isNear ? 'near' : 'wrong'
      };
    });

    const accuracy = Math.min(100, Math.round((matchCount / Math.max(1, targetWords.length)) * 100));

    // Fluency indicator
    let fluency = 'Cần luyện thêm';
    if (accuracy >= 85) fluency = 'Tự nhiên & Chuẩn ngữ điệu';
    else if (accuracy >= 65) fluency = 'Khá trôi chảy';

    const result = {
      accuracy,
      fluency,
      completion: Math.min(100, Math.round((spokenWords.length / targetWords.length) * 100)),
      wordFeedback
    };

    setEvalResult(result);

    // Award XP
    if (onAwardXP && accuracy >= 60) {
      const xp = accuracy >= 85 ? 25 : 15;
      onAwardXP(xp, `Luyện nói đạt ${accuracy}%: "${currentSentence.clean.slice(0, 30)}..."`);
    }
  };

  // Play User's Own Recorded Audio
  const playUserAudio = () => {
    if (!recordedAudioUrl) return;
    setActivePlayback('user');
    const audio = new Audio(recordedAudioUrl);
    audio.onended = () => setActivePlayback(null);
    audio.play();
  };

  // Play Model Native Audio
  const playModelAudio = (rate = 1.0) => {
    setActivePlayback('model');
    if (onSpeak) {
      onSpeak(currentSentence.clean, rate);
      setTimeout(() => setActivePlayback(null), 2500);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* HEADER BANNER */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-900/40 via-[#131B2E] to-blue-900/40 border border-indigo-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎙️</span>
            <h1 className="text-xl md:text-2xl font-black text-white tracking-tight">
              Phòng Luyện Phản Xạ Nghe - Nói & Shadowing Studio
            </h1>
            <span className="text-[10px] uppercase font-extrabold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
              Interactive 3-Step
            </span>
          </div>
          <p className="text-xs text-slate-300">
            Luyện ngữ điệu, trọng âm, thu âm so sánh giọng thật và nhận phản hồi chi tiết từng từ.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono font-bold text-slate-300 px-3 py-1.5 rounded-xl bg-[#0B0F17] border border-slate-800">
            {allScenarios.length} Tình huống thực chiến
          </span>
        </div>
      </div>

      {/* 8 TÌNH HUỐNG GIAO TIẾP THỰC TẾ (SCENARIO SELECTOR) */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-1">
          Chọn tình huống hội thoại:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {allScenarios.map((sc) => {
            const isSelected = selectedScenarioId === sc.id;
            return (
              <button
                key={sc.id}
                onClick={() => {
                  setSelectedScenarioId(sc.id);
                  setSentenceIndex(0);
                }}
                className={`p-3 rounded-2xl border text-left transition flex flex-col justify-between gap-2 shadow group ${
                  isSelected
                    ? 'bg-indigo-600/30 border-indigo-400 shadow-indigo-600/20 text-white'
                    : 'bg-[#131B2E] hover:bg-slate-800 border-slate-800/80 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl">{sc.icon}</span>
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.2 rounded-md uppercase ${
                      isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    {sc.badge}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold truncate group-hover:text-indigo-300 transition">
                    {sc.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {sc.sentences.length} câu
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN STUDIO AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT 2 COLS: 3-STEP SPEAKING WORKFLOW */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-4 sm:p-7 rounded-3xl bg-[#131B2E] border border-indigo-500/30 shadow-2xl space-y-5 sm:space-y-6 relative overflow-hidden">
            {/* Sentence Header & Stepper */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 flex items-center justify-center text-xs font-mono font-bold">
                  #{sentenceIndex + 1}
                </span>
                <div>
                  <h3 className="text-xs font-bold text-white">
                    Câu {sentenceIndex + 1} / {currentScenario.sentences.length}
                  </h3>
                  <p className="text-[10px] text-slate-400">{currentScenario.title}</p>
                </div>
              </div>

              {/* Prev / Next Sentence Controls */}
              <div className="flex items-center gap-1.5 bg-[#0B0F17] p-1 rounded-xl border border-slate-800">
                <button
                  disabled={sentenceIndex === 0}
                  onClick={() => setSentenceIndex((i) => Math.max(0, i - 1))}
                  className="p-1 text-slate-400 hover:text-white disabled:opacity-30 transition"
                  title="Câu trước"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-indigo-300 px-1">
                  {sentenceIndex + 1} / {currentScenario.sentences.length}
                </span>
                <button
                  disabled={sentenceIndex >= currentScenario.sentences.length - 1}
                  onClick={() =>
                    setSentenceIndex((i) => Math.min(currentScenario.sentences.length - 1, i + 1))
                  }
                  className="p-1 text-slate-400 hover:text-white disabled:opacity-30 transition"
                  title="Câu tiếp theo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ==================================================== */}
            {/* BƯỚC 1: NGHE & CẢM ÂM (INTONATION & STRESS MAP)      */}
            {/* ==================================================== */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold uppercase text-indigo-400 tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  Bước 1: Nghe & Cảm âm (Bấm vào từ để nghe riêng)
                </span>

                {/* Pin Note Button */}
                {onPinNote && (
                  <button
                    onClick={() =>
                      onPinNote({
                        term: currentSentence.clean,
                        phonetic: 'Shadowing Pattern',
                        meaning: currentSentence.vi,
                        example: currentScenario.title,
                        tag: 'Luyện nói'
                      })
                    }
                    className="text-[11px] font-semibold text-slate-400 hover:text-amber-300 flex items-center gap-1 transition"
                    title="Ghim mẫu câu này vào Sổ Tay"
                  >
                    <Pin className="w-3.5 h-3.5" /> Ghim câu
                  </button>
                )}
              </div>

              {/* Large Sentence with Interactive Clickable Words */}
              <div className="p-5 sm:p-6 rounded-3xl bg-[#0B0F17] border border-slate-800 space-y-3 shadow-inner">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-lg sm:text-2xl font-extrabold leading-relaxed">
                  {currentSentence.en.split(/\s+/).map((wordToken, idx) => {
                    const clean = cleanWord(wordToken);
                    const isStressed = currentSentence.stressed?.some((sw) =>
                      clean.includes(cleanWord(sw))
                    );

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => onSpeak && onSpeak(clean, 1.0)}
                        className={`inline-block px-1.5 py-0.5 rounded-lg transition-transform hover:scale-105 active:scale-95 ${
                          isStressed
                            ? 'text-amber-300 bg-amber-500/10 border-b-2 border-amber-400'
                            : 'text-slate-100 hover:text-indigo-300 hover:bg-slate-800/80'
                        }`}
                        title={`Bấm để nghe riêng từ: "${clean}"`}
                      >
                        {wordToken}
                      </button>
                    );
                  })}
                </div>

                {/* Vietnamese Meaning */}
                <p className="text-xs sm:text-sm text-slate-300 font-medium italic pt-1 border-t border-slate-800/60">
                  🇻🇳 {currentSentence.vi}
                </p>

                {/* Intonation Guide Hints */}
                <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-amber-400 font-bold">
                    <span>■ In đậm:</span> Trọng âm từ khóa
                  </span>
                  <span className="flex items-center gap-1 text-indigo-300">
                    <span>‿ Nối âm:</span> Đọc liền mạch không ngắt
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span>↗ Lên / ↘ Xuống giọng</span> ở cuối câu
                  </span>
                </div>
              </div>

              {/* Audio Controls (0.75x, 1.0x, Loop) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1">
                <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => playModelAudio(1.0)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition active:scale-95"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Nghe chuẩn 1.0x</span>
                  </button>

                  <button
                    onClick={() => playModelAudio(0.75)}
                    className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-bold text-xs flex items-center justify-center gap-1.5 transition active:scale-95"
                  >
                    <span>🐢 Chậm 0.75x</span>
                  </button>
                </div>

                {/* Continuous Loop Mode */}
                <button
                  onClick={() => setIsLooping((v) => !v)}
                  className={`w-full sm:w-auto px-3.5 py-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95 ${
                    isLooping
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                  title="Tự động phát lặp lại câu sau mỗi 4 giây để luyện Shadowing"
                >
                  <Repeat className="w-3.5 h-3.5" />
                  <span>{isLooping ? 'Đang lặp liên tục' : 'Bật nghe lặp (Loop)'}</span>
                </button>
              </div>
            </div>

            {/* ==================================================== */}
            {/* BƯỚC 2: THU ÂM GIỌNG NÓI MICROPHONE                 */}
            {/* ==================================================== */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <span className="font-extrabold uppercase text-rose-400 text-xs tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                Bước 2: Bấm Mic để thu âm giọng bạn
              </span>

              <div className="p-6 rounded-3xl bg-[#0B0F17] border border-slate-800 text-center space-y-4">
                {/* Big Center Microphone Button */}
                <div className="relative inline-flex items-center justify-center">
                  {/* Glowing Waveform Pulse Ring when Recording */}
                  {isRecording && (
                    <div className="absolute w-24 h-24 rounded-full bg-rose-500/30 animate-ping pointer-events-none" />
                  )}

                  <button
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`relative w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-2xl transition transform active:scale-95 z-10 ${
                      isRecording
                        ? 'bg-rose-600 text-white shadow-rose-600/50 scale-105'
                        : 'bg-gradient-to-br from-indigo-500 to-rose-600 text-white hover:scale-105'
                    }`}
                  >
                    {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                  </button>
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    {isRecording
                      ? 'Đang nghe giọng bạn nói... Bấm lại để Dừng & Chấm điểm'
                      : 'Bấm vào Micro và đọc to câu tiếng Anh trên'}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Hệ thống sẽ ghi âm giọng thật của bạn và chấm điểm độ chuẩn xác từng chữ.
                  </p>
                </div>

                {/* Animated Audio Waveform Bars when recording */}
                {isRecording && (
                  <div className="flex items-center justify-center gap-1.5 h-8">
                    {[16, 28, 12, 36, 20, 32, 18, 24, 30, 14].map((h, i) => (
                      <div
                        key={i}
                        className="w-1.5 bg-rose-500 rounded-full animate-pulse"
                        style={{
                          height: `${h}px`,
                          animationDelay: `${i * 100}ms`
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* User Recorded Audio Playback (Nghe lại giọng của bạn) */}
                {recordedAudioUrl && (
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 w-full">
                    <button
                      onClick={playUserAudio}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center justify-center gap-2 transition active:scale-95"
                    >
                      <Headphones className="w-4 h-4" />
                      <span>🎧 Nghe lại giọng của bạn</span>
                    </button>

                    <button
                      onClick={() => playModelAudio(1.0)}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/40 text-indigo-300 text-xs font-bold flex items-center justify-center gap-2 transition active:scale-95"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>🔊 Nghe giọng mẫu đối chiếu</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* ==================================================== */}
            {/* BƯỚC 3: CHẤM ĐIỂM TỪNG TỪ & PHẢN HỒI PHÁT ÂM        */}
            {/* ==================================================== */}
            {evalResult && (
              <div className="space-y-4 pt-4 border-t border-slate-800/80 animate-fade-in">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold uppercase text-emerald-400 text-xs tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Bước 3: Chấm điểm phát âm chi tiết từng từ
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-300">
                    Độ chính xác: <strong className="text-emerald-400">{evalResult.accuracy}%</strong>
                  </span>
                </div>

                {/* 3 Metric Score Pills */}
                <div className="grid grid-cols-3 gap-2.5 text-center">
                  <div className="p-3 rounded-2xl bg-[#0B0F17] border border-slate-800">
                    <p className="text-[10px] text-slate-400">Độ chính xác từ</p>
                    <p className="text-base font-extrabold text-emerald-400 mt-0.5">
                      {evalResult.accuracy}%
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#0B0F17] border border-slate-800">
                    <p className="text-[10px] text-slate-400">Độ trôi chảy (Fluency)</p>
                    <p className="text-xs font-extrabold text-amber-300 mt-1 truncate">
                      {evalResult.fluency}
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#0B0F17] border border-slate-800">
                    <p className="text-[10px] text-slate-400">Hoàn thành câu</p>
                    <p className="text-base font-extrabold text-indigo-300 mt-0.5">
                      {evalResult.completion}%
                    </p>
                  </div>
                </div>

                {/* Word-by-Word Colored Feedback Chips */}
                <div className="p-4 rounded-2xl bg-[#0B0F17] border border-slate-800 space-y-2">
                  <span className="text-[11px] text-slate-400 font-semibold block">
                    Đối chiếu từng từ bạn vừa phát âm:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {evalResult.wordFeedback.map((wf, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 rounded-xl text-xs font-bold border flex items-center gap-1 ${
                          wf.status === 'correct'
                            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                            : wf.status === 'near'
                            ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                            : 'bg-rose-500/15 border-rose-500/40 text-rose-300'
                        }`}
                      >
                        <span>{wf.raw}</span>
                        {wf.status === 'correct' && <Check className="w-3 h-3 text-emerald-400" />}
                        {wf.status === 'wrong' && (
                          <button
                            type="button"
                            onClick={() => onSpeak && onSpeak(wf.clean, 0.75)}
                            className="p-0.5 hover:text-white"
                            title={`Nghe lại từ bị sai: "${wf.clean}"`}
                          >
                            <Volume2 className="w-3 h-3 text-rose-400" />
                          </button>
                        )}
                      </span>
                    ))}
                  </div>

                  <p className="text-[10px] text-slate-500 pt-1">
                    🟢 Xanh: Phát âm chuẩn | 🟠 Vàng: Gần đúng / ngập ngừng | 🔴 Đỏ: Sai hoặc bỏ sót (Bấm loa để nghe lại)
                  </p>
                </div>

                {/* Next Sentence Navigation Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-2 border-t border-slate-800">
                  <button
                    onClick={() => {
                      setRecognizedTranscript('');
                      setEvalResult(null);
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition active:scale-95"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Luyện lại câu này
                  </button>

                  <button
                    onClick={() => {
                      if (sentenceIndex + 1 < currentScenario.sentences.length) {
                        setSentenceIndex((i) => i + 1);
                      } else {
                        // Finished Scenario
                        if (onAwardXP) onAwardXP(50, `Hoàn thành xuất sắc hội thoại "${currentScenario.title}"!`);
                        setSentenceIndex(0);
                      }
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition transform hover:translate-x-0.5 active:scale-95"
                  >
                    <span>
                      {sentenceIndex + 1 < currentScenario.sentences.length
                        ? 'Câu tiếp theo trong hội thoại'
                        : '🎉 Hoàn tất kịch bản hội thoại'}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COL: CONVERSATION SCRIPT DRAWER (TIẾN TRÌNH HỘI THOẠI) */}
        <div className="space-y-4">
          <div className="p-5 rounded-3xl bg-[#131B2E] border border-slate-800/80 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{currentScenario.icon}</span>
                <div>
                  <h4 className="text-xs font-bold text-white line-clamp-1">
                    Kịch bản: {currentScenario.title}
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    Chuỗi {currentScenario.sentences.length} câu liên hoàn
                  </p>
                </div>
              </div>
            </div>

            {/* List of Sentences in Scenario */}
            <div className="space-y-2 max-h-[520px] overflow-y-auto pr-1">
              {currentScenario.sentences.map((st, idx) => {
                const isCurrent = sentenceIndex === idx;
                const isPassed = idx < sentenceIndex;

                return (
                  <button
                    key={st.id}
                    onClick={() => setSentenceIndex(idx)}
                    className={`w-full p-3 rounded-2xl text-left border transition flex items-start gap-2.5 ${
                      isCurrent
                        ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                        : isPassed
                        ? 'bg-[#0B0F17] border-emerald-500/30 text-slate-300'
                        : 'bg-[#0B0F17] hover:bg-slate-800/60 border-slate-800/80 text-slate-400'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5 ${
                        isCurrent
                          ? 'bg-indigo-600 text-white'
                          : isPassed
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-slate-900 text-slate-500'
                      }`}
                    >
                      {isPassed ? <Check className="w-3 h-3 text-emerald-400" /> : idx + 1}
                    </div>

                    <div className="min-w-0 flex-1 space-y-0.5">
                      <p
                        className={`text-xs font-semibold line-clamp-2 ${
                          isCurrent ? 'text-white' : 'text-slate-200'
                        }`}
                      >
                        {st.clean}
                      </p>
                      <p className="text-[10px] text-slate-400 line-clamp-1 italic">
                        {st.vi}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
