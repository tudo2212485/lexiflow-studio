// Free Dictionary API Service
// Connects to https://api.dictionaryapi.dev/api/v2/entries/en/{word}
// Provides authentic IPA phonetics, native audio URL, definitions, and topic word pools

export async function fetchWordFromDictionaryAPI(word) {
  try {
    const cleanWord = word.trim().toLowerCase().replace(/[^a-z-]/g, '');
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${cleanWord}`);
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return null;

    const entry = data[0];

    // Find best phonetic and audio
    let ipa = entry.phonetic || '';
    let audioUrl = '';

    if (entry.phonetics && Array.isArray(entry.phonetics)) {
      for (const p of entry.phonetics) {
        if (!ipa && p.text) ipa = p.text;
        if (p.audio && (p.audio.includes('-us.mp3') || p.audio.includes('-uk.mp3') || !audioUrl)) {
          audioUrl = p.audio;
        }
      }
    }

    // Extract first meaning and definition
    let pos = 'noun';
    let definition = '';
    let example = '';

    if (entry.meanings && entry.meanings.length > 0) {
      pos = entry.meanings[0].partOfSpeech || 'noun';
      if (entry.meanings[0].definitions && entry.meanings[0].definitions.length > 0) {
        const defObj = entry.meanings[0].definitions[0];
        definition = defObj.definition || '';
        example = defObj.example || '';
      }
    }

    return {
      word: entry.word || word,
      ipa: ipa || `/${word}/`,
      audioUrl: audioUrl || null,
      pos,
      definition,
      example
    };
  } catch (err) {
    console.warn(`[DictionaryAPI] Failed to fetch "${word}":`, err);
    return null;
  }
}

// Curated topic vocabulary expansions for automatic 20-word top-up
const TOPIC_EXPANSION_POOLS = {
  family: [
    { word: 'Lineage', syllables: 'lin-e-age', pos: 'noun', meaning: 'Dòng dõi, nòi giống gia đình lâu đời', mnemonic: '💡 Mẹo: Line (đường kẻ) nối dài qua các thế hệ dòng dõi.', example: 'The royal family traces their lineage back to the medieval century.' },
    { word: 'Guardian', syllables: 'guard-i-an', pos: 'noun', meaning: 'Người giám hộ, che chở bảo bọc con trẻ', mnemonic: '💡 Mẹo: Guard (bảo vệ) chở che cho con trẻ khi ba mẹ vắng nhà.', example: 'His aunt acted as his legal guardian throughout his teenage years.' },
    { word: 'Kin', syllables: 'kin', pos: 'noun', meaning: 'Bà con thân thuộc máu mủ ruột rà', mnemonic: '💡 Mẹo: Next of kin là người thân thích gần gũi nhất.', example: 'All her close kin gathered around the table to welcome her return.' },
    { word: 'Descendant', syllables: 'de-scend-ant', pos: 'noun', meaning: 'Hậu duệ, con cháu nối dõi tông đường', mnemonic: '💡 Mẹo: Descend (đi xuống theo nhánh phả hệ) để chỉ đời sau.', example: 'He is a direct descendant of the renowned military commander.' },
    { word: 'Maternal', syllables: 'ma-ter-nal', pos: 'adj', meaning: 'Thuộc về tình mẫu tử, phía bên ngoại', mnemonic: '💡 Mẹo: Chữ M trong Maternal giống như Mama (Mẹ).', example: 'Her warm maternal instincts comforted the crying infant immediately.' },
    { word: 'Paternal', syllables: 'pa-ter-nal', pos: 'adj', meaning: 'Thuộc về cương vị người cha, phía bên nội', mnemonic: '💡 Mẹo: Chữ P trong Paternal giống như Papa (Bố).', example: 'His paternal grandparents lived in a peaceful countryside villa.' },
    { word: 'Nurture', syllables: 'nur-ture', pos: 'verb', meaning: 'Nuôi nấng ân cần, vun đắp tình thương', mnemonic: '💡 Mẹo: Nuôi dưỡng (nurse + nature) để cây tình cảm lớn khôn.', example: 'Parents strive to nurture both intellectual curiosity and kindness in their children.' },
    { word: 'Affection', syllables: 'af-fec-tion', pos: 'noun', meaning: 'Tình cảm yêu thương ấm áp dành cho người thân', mnemonic: '💡 Mẹo: Ảnh hưởng (affect) sâu đậm bởi tình cảm gia đình ấm áp.', example: 'The siblings always treated each other with genuine warmth and deep affection.' },
    { word: 'Reunion', syllables: 're-un-ion', pos: 'noun', meaning: 'Buổi họp mặt gia đình đoàn viên sum vầy', mnemonic: '💡 Mẹo: Re (lại) + Union (đoàn tụ) -> Sum họp lại bên nhau.', example: 'Our grand family reunion takes place every year during spring festivities.' },
    { word: 'Fidelity', syllables: 'fi-del-i-ty', pos: 'noun', meaning: 'Lòng chung thủy son sắt, sự gắn bó trọn nghĩa', mnemonic: '💡 Mẹo: "Phi-đèo-vẫn-lụy" -> Vượt ngàn đèo dốc vẫn một lòng thủy chung.', example: 'Their forty-year marriage was a shining example of love and mutual fidelity.' },
    { word: 'Heir', syllables: 'heir', pos: 'noun', meaning: 'Người thừa kế tài sản và truyền thống dòng họ', mnemonic: '💡 Mẹo: Đọc như air (không khí) -> Đứa con thừa kế là hơi thở của gia tộc.', example: 'She was designated as the sole heir to her grandfather’s vast estate.' },
    { word: 'Household', syllables: 'house-hold', pos: 'noun', meaning: 'Hộ gia đình, các công việc sinh hoạt thường nhật', mnemonic: '💡 Mẹo: Mọi việc giữ gìn tổ ấm trong ngôi nhà (house + hold).', example: 'They split household duties evenly to maintain a peaceful family life.' },
    { word: 'Cherish', syllables: 'cher-ish', pos: 'verb', meaning: 'Nâng niu, ấp ủ, trân quý từng khoảnh khắc gia đình', mnemonic: '💡 Mẹo: Trân quý như món quà vô giá gửi đến người thân.', example: 'We should always cherish every single moment spent with our elderly parents.' },
    { word: 'Supportive', syllables: 'sup-port-ive', pos: 'adj', meaning: 'Luôn nâng đỡ, hỗ trợ và động viên người thân', mnemonic: '💡 Mẹo: Support (hỗ trợ) -> Gia đình luôn là điểm tựa nâng đỡ vững chãi nhất.', example: 'Having a supportive family environment helped her overcome difficult life hurdles.' },
    { word: 'Genealogy', syllables: 'gen-e-al-o-gy', pos: 'noun', meaning: 'Gia phả học, việc tra cứu nguồn gốc tổ tông', mnemonic: '💡 Mẹo: Gene (gen di truyền) + ology (ngành học nghiên cứu).', example: 'He consulted historical records to reconstruct his extensive family genealogy.' },
    { word: 'Harmony', syllables: 'har-mo-ny', pos: 'noun', meaning: 'Sự hòa hợp, ấm êm thuận hòa trong gia đạo', mnemonic: '💡 Mẹo: Như giai điệu hòa âm êm dịu của bản nhạc gia đình.', example: 'Living together in mutual respect fosters long-lasting domestic harmony.' },
    { word: 'Devotion', syllables: 'de-vo-tion', pos: 'noun', meaning: 'Sự tận tụy, hy sinh hết lòng vì người thân', mnemonic: '💡 Mẹo: Để trọn tình yêu thương và sự tận tụy trong tim.', example: 'A mother’s selfless devotion to her children is beyond measure.' },
    { word: 'Offspring', syllables: 'off-spring', pos: 'noun', meaning: 'Hậu duệ, con cái nối tiếp thế hệ đi trước', mnemonic: '💡 Mẹo: Mùa xuân nảy lộc sinh sôi thế hệ con cháu kế nghiệp.', example: 'Birds work tirelessly to find nourishing food for their vulnerable offspring.' },
    { word: 'Solidarity', syllables: 'sol-i-dar-i-ty', pos: 'noun', meaning: 'Tinh thần đoàn kết keo sơn, gắn bó một lòng', mnemonic: '💡 Mẹo: Rắn rỏi (solid) như khối đá kết đoàn vượt qua bão giông.', example: 'Family solidarity helped them navigate through severe economic hardships.' },
    { word: 'Warmth', syllables: 'warmth', pos: 'noun', meaning: 'Hơi ấm tình thân, cảm giác an toàn che chở', mnemonic: '💡 Mẹo: Warm (ấm) -> Hơi ấm xua tan giá lạnh khi trở về nhà.', example: 'Coming home after a long journey always brings unparalleled emotional warmth.' }
  ],
  defaultPool: [
    { word: 'Collaborate', syllables: 'col-lab-o-rate', pos: 'verb', meaning: 'Hợp tác làm việc cùng nhau để đạt kết quả xuất sắc', mnemonic: '💡 Mẹo: Co (cùng) + Labor (lao động) -> Cùng bắt tay nhau làm việc.', example: 'Engineers collaborate seamlessly across global offices to deliver modern apps.' },
    { word: 'Innovation', syllables: 'in-no-va-tion', pos: 'noun', meaning: 'Sự đổi mới, sáng tạo đột phá mang lại giá trị', mnemonic: '💡 Mẹo: Innovate -> Mang luồng gió mới thay thế cách làm cũ kỹ.', example: 'Technological innovation drives rapid economic growth in developing countries.' },
    { word: 'Resilience', syllables: 're-sil-ience', pos: 'noun', meaning: 'Khả năng phục hồi kiên cường sau khó khăn', mnemonic: '💡 Mẹo: Như lò xo uốn cong lại bật lên mạnh mẽ hơn bao giờ hết.', example: 'Her remarkable resilience helped the startup survive market downturns.' },
    { word: 'Perspective', syllables: 'per-spec-tive', pos: 'noun', meaning: 'Góc nhìn, quan điểm đánh giá đa chiều', mnemonic: '💡 Mẹo: Đứng từ góc độ khác để thấu suốt bản chất vấn đề.', example: 'Traveling around the world broadens your intellectual and cultural perspective.' },
    { word: 'Sustainable', syllables: 'sus-tain-a-ble', pos: 'adj', meaning: 'Bền vững, có thể duy trì lâu dài trong tương lai', mnemonic: '💡 Mẹo: Sustain (duy trì) + Able (có thể) -> Phát triển bền vững.', example: 'Companies invest heavily in sustainable clean energy to protect ecosystems.' },
    { word: 'Mastery', syllables: 'mas-ter-y', pos: 'noun', meaning: 'Sự thông thạo, tinh thông kỹ năng đến mức bậc thầy', mnemonic: '💡 Mẹo: Master (bậc thầy) đạt đến trình độ điêu luyện tối thượng.', example: 'Achieving English mastery requires daily deliberate practice with active recall.' },
    { word: 'Milestone', syllables: 'mile-stone', pos: 'noun', meaning: 'Cột mốc quan trọng đánh dấu bước tiến lớn', mnemonic: '💡 Mẹo: Cột mốc dặm đường (mile + stone) trên hành trình phát triển.', example: 'Reaching one thousand active users was a celebratory milestone for the team.' },
    { word: 'Consistency', syllables: 'con-sis-ten-cy', pos: 'noun', meaning: 'Sự kiên trì đều đặn không bỏ dở giữa chừng', mnemonic: '💡 Mẹo: Đều đặn mỗi ngày quan trọng hơn học dồn một lần rồi bỏ.', example: 'Daily study consistency is the real secret behind language fluency.' },
    { word: 'Empower', syllables: 'em-pow-er', pos: 'verb', meaning: 'Trao quyền, tiếp thêm sức mạnh và sự tự tin', mnemonic: '💡 Mẹo: Power (sức mạnh) -> Trao quyền để người học làm chủ kiến thức.', example: 'Interactive learning tools empower students to study at their own pace.' },
    { word: 'Breakthrough', syllables: 'break-through', pos: 'noun', meaning: 'Bước đột phá then chốt tháo gỡ bế tắc', mnemonic: '💡 Mẹo: Phá vỡ (break) rào cản để tiến thẳng qua (through).', example: 'Scientists announced a historic breakthrough in renewable energy storage.' },
    { word: 'Strategic', syllables: 'stra-teg-ic', pos: 'adj', meaning: 'Có tính chiến lược, tầm nhìn quy hoạch bài bản', mnemonic: '💡 Mẹo: Strategy (chiến lược) -> Kế hoạch bài bản dẫn tới thành công.', example: 'They made a strategic decision to expand into Southeast Asian markets.' },
    { word: 'Authentic', syllables: 'au-then-tic', pos: 'adj', meaning: 'Đích thực, chuẩn xác, nguyên bản không giả mạo', mnemonic: '💡 Mẹo: Giá trị chân thật đem lại niềm tin lâu bền.', example: 'Listening to authentic podcasts enhances natural native pronunciation.' },
    { word: 'Productive', syllables: 'pro-duc-tive', pos: 'adj', meaning: 'Năng suất cao, làm việc hiệu quả đem lại kết quả lớn', mnemonic: '💡 Mẹo: Produce (tạo ra sản phẩm) -> Người làm việc năng suất.', example: 'Morning deep work hours are often the most productive period of the day.' },
    { word: 'Inspiring', syllables: 'in-spir-ing', pos: 'adj', meaning: 'Truyền cảm hứng mãnh liệt, thổi bùng động lực', mnemonic: '💡 Mẹo: Inspire (thổi hồn) -> Đánh thức đam mê trong lòng người khác.', example: 'The teacher shared an inspiring story about overcoming speech anxiety.' },
    { word: 'Adaptability', syllables: 'a-dapt-a-bil-i-ty', pos: 'noun', meaning: 'Khả năng thích ứng linh hoạt trước mọi thay đổi', mnemonic: '💡 Mẹo: Luôn uyển chuyển thích nghi với mọi điều kiện môi trường.', example: 'Career adaptability is essential in the fast-paced modern AI landscape.' },
    { word: 'Integrity', syllables: 'in-teg-ri-ty', pos: 'noun', meaning: 'Sự chính trực, liêm khiết, giữ đúng nguyên tắc đạo đức', mnemonic: '💡 Mẹo: Người có chính trực luôn làm điều đúng ngay cả khi không ai nhìn.', example: 'Professional integrity builds unshakeable trust between partners.' },
    { word: 'Comprehend', syllables: 'com-pre-hend', pos: 'verb', meaning: 'Thấu hiểu cặn kẽ bản chất gốc rễ vấn đề', mnemonic: '💡 Mẹo: Nắm bắt trọn vẹn toàn bộ ý niệm trong đầu.', example: 'Mindful reading helps you fully comprehend complex grammatical structures.' },
    { word: 'Fulfill', syllables: 'ful-fill', pos: 'verb', meaning: 'Hoàn thành trọn vẹn lời hứa hoặc mục tiêu đề ra', mnemonic: '💡 Mẹo: Làm đầy (full) và thỏa mãn cam kết đã hứa.', example: 'Dedication and hard work enabled him to fulfill his childhood dream.' },
    { word: 'Optimism', syllables: 'op-ti-mism', pos: 'noun', meaning: 'Tinh thần lạc quan tin tưởng vào tương lai tươi sáng', mnemonic: '💡 Mẹo: Luôn nhìn thấy cơ hội ngay trong tâm bão nghịch cảnh.', example: 'Unwavering optimism kept the exploration team motivated during winter.' },
    { word: 'Excellence', syllables: 'ex-cel-lence', pos: 'noun', meaning: 'Sự xuất sắc vượt trội, đẳng cấp đỉnh cao', mnemonic: '💡 Mẹo: Không ngừng mài giũa để chạm tới chuẩn mực xuất sắc.', example: 'The studio strives for design excellence in every single user interaction.' }
  ]
};

// Generates 20 authentic new cards enriched with Free Dictionary API
export async function expandSubdeckWith20Words(subdeck) {
  const pool = TOPIC_EXPANSION_POOLS[subdeck.enTitle?.toLowerCase()] ||
    TOPIC_EXPANSION_POOLS[subdeck.id?.split('-')[0]] ||
    TOPIC_EXPANSION_POOLS.family ||
    TOPIC_EXPANSION_POOLS.defaultPool;

  const existingWords = new Set(
    (subdeck.cards || []).map((c) => c.word.toLowerCase())
  );

  const candidates = pool.filter((item) => !existingWords.has(item.word.toLowerCase()));
  const targetWords = candidates.length >= 20 ? candidates.slice(0, 20) : pool.slice(0, 20);

  const newCards = [];

  for (let i = 0; i < targetWords.length; i++) {
    const item = targetWords[i];
    // Fetch live IPA & Audio from Free Dictionary API
    const apiData = await fetchWordFromDictionaryAPI(item.word);

    const ipa = apiData?.ipa || `/${item.word.toLowerCase()}/`;
    const audioUrl = apiData?.audioUrl || null;
    const example = item.example || apiData?.example || `We use ${item.word} frequently in daily conversation.`;

    const card = {
      id: `${subdeck.id}-api-${Date.now()}-${i + 1}`,
      word: item.word,
      syllables: item.syllables || item.word.toLowerCase(),
      ipa,
      audioUrl,
      pos: item.pos || 'noun',
      meaning: item.meaning || apiData?.definition || 'Từ vựng tiếng Anh theo chủ đề',
      chunk: `${item.word.toLowerCase()} pattern`,
      pattern: `S + use + ${item.word.toLowerCase()} + in daily context`,
      mnemonic: item.mnemonic || `💡 Mẹo nhớ: Hãy ứng dụng từ "${item.word}" vào thực tế để ghi nhớ sâu.`,
      example,
      exampleVi: `Ví dụ ứng dụng của từ ${item.word} trong ngữ cảnh giao tiếp.`,
      wordsForLego: example.replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, '').split(/\s+/).filter(Boolean),
      status: 'due',
      intervalDays: 0,
      reviewCount: 0,
      lastReviewed: null
    };

    newCards.push(card);
  }

  return newCards;
}
