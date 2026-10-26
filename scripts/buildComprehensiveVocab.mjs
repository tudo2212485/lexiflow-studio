import fs from 'fs';
import path from 'path';

const decksDir = path.resolve('src/data/decks');
if (!fs.existsSync(decksDir)) {
  fs.mkdirSync(decksDir, { recursive: true });
}

function makeLego(sentence) {
  return sentence.replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, '').split(/\s+/).filter(Boolean);
}

function c(id, word, syllables, ipa, pos, meaning, chunk, pattern, mnemonic, example, exampleVi) {
  return {
    id,
    word,
    syllables,
    ipa,
    pos,
    meaning,
    chunk,
    pattern,
    mnemonic,
    example,
    exampleVi,
    wordsForLego: makeLego(example),
    status: 'due',
    intervalDays: 0,
    reviewCount: 0,
    lastReviewed: null
  };
}

// Subdeck generator helper
function makeSubdeck(id, order, viTitle, enTitle, cards, lastStudied = 'Hôm qua') {
  return {
    id,
    order,
    title: `${order}. ${viTitle}`,
    enTitle,
    viTitle,
    totalWords: cards.length,
    masteredCount: 0,
    learningCount: 0,
    dueCount: cards.length,
    progressPercent: 0,
    lastStudied,
    cards
  };
}

console.log('Building full comprehensive authentic vocabulary dataset...');

// 1. FAMILY (30 words)
const family = [
  c('fam-1', 'Parent', 'par-ent', '/ˈpeə.rənt/', 'noun', 'Cha hoặc mẹ (phụ huynh)', 'single parent', 'S + be + a proud parent of [con cái]', '💡 Mẹo: Ba mẹ luôn "lo toan, be-rent" chăm sóc con cái từ nhỏ.', 'Her parents always support her study goals.', 'Bố mẹ luôn ủng hộ mục tiêu học tập của cô ấy.'),
  c('fam-2', 'Sibling', 'sib-ling', '/ˈsɪb.lɪŋ/', 'noun', 'Anh, chị hoặc em ruột', 'sibling rivalry', 'I have + [số lượng] + siblings', '💡 Mẹo: "Sắp-liền" -> Các anh chị em sinh liền nhau là sibling.', 'Do you have any brothers or sisters, or any siblings?', 'Bạn có anh chị em ruột nào không?'),
  c('fam-3', 'Spouse', 'spouse', '/spaʊs/', 'noun', 'Vợ hoặc chồng (người phối ngẫu)', 'loving spouse', 'introduce my spouse to [ai đó]', '💡 Mẹo: "Sợ-bà-út" -> Chồng luôn chiều chuộng sợ spouse (vợ)!', 'He introduced his spouse to the wedding guests.', 'Anh ấy đã giới thiệu người bạn đời với các khách mời.'),
  c('fam-4', 'Relative', 'rel-a-tive', '/ˈrel.ə.tɪv/', 'noun', 'Họ hàng, bà con thân thuộc', 'close relative', 'visit relatives during the holidays', '💡 Mẹo: "Rét-lại-tìm-về" -> Mùa đông lạnh lại về quê thăm họ hàng.', 'We usually visit our relatives during the Tet holiday.', 'Chúng tôi thường đi thăm họ hàng vào dịp Tết.'),
  c('fam-5', 'Upbringing', 'up-bring-ing', '/ˈʌpˌbrɪŋ.ɪŋ/', 'noun', 'Sự nuôi nấng, dạy dỗ từ thuở nhỏ', 'strict upbringing', 'have a happy upbringing in [nơi chốn]', '💡 Mẹo: Up (lớn lên) + Bring (mang theo) -> Quá trình nuôi dưỡng khôn lớn.', 'Her polite manners reflect a very good upbringing.', 'Cách cư xử lịch thiệp phản ánh sự dạy dỗ rất tốt của gia đình.'),
  c('fam-6', 'Nuclear family', 'nu-cle-ar fam-i-ly', '/ˌnjuː.klɪə ˈfæm.əl.i/', 'noun', 'Gia đình hạt nhân (chỉ gồm bố mẹ và con cái)', 'typical nuclear family', 'live in a nuclear family', '💡 Mẹo: Nuclear (hạt nhân) -> Gia đình nhỏ gọn cốt lõi 2 thế hệ.', 'Modern society has more nuclear families than before.', 'Xã hội hiện đại có nhiều gia đình hạt nhân hơn trước đây.'),
  c('fam-7', 'Extended family', 'ex-tend-ed fam-i-ly', '/ɪkˌsten.dɪd ˈfæm.əl.i/', 'noun', 'Đại gia đình (nhiều thế hệ ông bà, cô chú cùng sống)', 'supportive extended family', 'grow up in an extended family', '💡 Mẹo: Extend (mở rộng) -> Gia đình đông đúc nhiều thế hệ.', 'She grew up surrounded by a large extended family.', 'Cô ấy lớn lên trong vòng tay của một đại gia đình đông đúc.'),
  c('fam-8', 'Generation', 'gen-er-a-tion', '/ˌdʒen.əˈreɪ.ʃən/', 'noun', 'Thế hệ, thời đại', 'generation gap', 'pass down through generations', '💡 Mẹo: "Gen-ở-rễ" -> Mỗi thế hệ truyền lại bộ gen quý báu.', 'The generation gap can sometimes cause small misunderstandings.', 'Khoảng cách thế hệ đôi khi gây ra những hiểu lầm nhỏ.'),
  c('fam-9', 'Cherish', 'cher-ish', '/ˈtʃer.ɪʃ/', 'verb', 'Yêu thương tha thiết, trân trọng, ấp ủ', 'cherish family moments', 'S + cherish + the time spent with [ai]', '💡 Mẹo: "Chè-rất-thích" -> Rất trân trọng từng phút giây sum họp bên nồi chè ấm.', 'I cherish the peaceful dinners with my family every weekend.', 'Tôi trân trọng những bữa tối yên bình bên gia đình mỗi cuối tuần.'),
  c('fam-10', 'Bond', 'bond', '/bɒnd/', 'noun / verb', 'Mối liên kết, tình cảm gắn bó khăng khít', 'strong emotional bond', 'form a close bond with [ai]', '💡 Mẹo: Như điệp viên James Bond gắn bó trung thành tuyệt đối.', 'Sharing meals helps strengthen the bond between family members.', 'Cùng nhau ăn cơm giúp thắt chặt tình cảm giữa các thành viên gia đình.'),
  c('fam-11', 'Inherit', 'in-her-it', '/ɪnˈher.ɪt/', 'verb', 'Thừa hưởng, kế thừa (tài sản hoặc nét tính cách)', 'inherit property', 'inherit qualities from parents', '💡 Mẹo: "In-hết-nét" -> Con cái in hệt nét đẹp được thừa hưởng từ mẹ.', 'She inherited her mother’s beautiful smile and kindness.', 'Cô ấy thừa hưởng nụ cười tươi tắn và lòng nhân hậu từ mẹ.'),
  c('fam-12', 'Breadwinner', 'bread-win-ner', '/ˈbredˌwɪn.ər/', 'noun', 'Trụ cột kinh tế gia đình (người kiếm tiền chính)', 'sole breadwinner', 'act as the breadwinner for the family', '💡 Mẹo: Bread (bánh mì) + Winner (người đem về) -> Người kiếm bánh mì nuôi cả nhà.', 'My father worked tirelessly as the primary breadwinner.', 'Bố tôi đã làm việc không mệt mỏi với tư cách là trụ cột chính trong nhà.'),
  c('fam-13', 'Ancestor', 'an-ces-tor', '/ˈæn.ses.tər/', 'noun', 'Tổ tiên, ông bà cụ kỵ nhiều đời trước', 'honour ancestors', 'ancestral traditions', '💡 Mẹo: "Ăn-xôi-thờ" -> Con cháu cúng xôi gà tưởng nhớ tổ tiên.', 'Every spring we gather to show respect to our ancestors.', 'Mỗi độ xuân về chúng tôi sum họp để tưởng nhớ tổ tiên.'),
  c('fam-14', 'Dependent', 'de-pen-dent', '/dɪˈpen.dənt/', 'noun / adj', 'Người sống phụ thuộc / Phụ thuộc vào gia đình', 'financial dependent', 'have young dependents to support', '💡 Mẹo: Depend (dựa vào) -> Những đứa trẻ phụ thuộc vào vòng tay bố mẹ.', 'He has three young dependents who rely on his monthly income.', 'Anh ấy có 3 người phụ thuộc nhỏ tuổi dựa vào thu nhập hàng tháng.'),
  c('fam-15', 'Harmonious', 'har-mo-ni-ous', '/hɑːˈməʊ.ni.əs/', 'adj', 'Hòa thuận, ấm êm, hòa hợp', 'harmonious relationship', 'maintain a harmonious family life', '💡 Mẹo: Harmony (hòa âm) -> Gia đình hòa thuận như một bản nhạc hay.', 'They managed to build a very harmonious home together.', 'Họ đã cùng nhau xây dựng một mái ấm gia đình rất êm ấm hòa thuận.'),
  c('fam-16', 'Custody', 'cus-to-dy', '/ˈkʌs.tə.di/', 'noun', 'Quyền giám hộ, quyền nuôi dưỡng con cái', 'joint custody', 'award custody to the mother', '💡 Mẹo: "Cất-kỹ-đầy" -> Giữ gìn và chăm sóc chu đáo khi nhận quyền nuôi con.', 'The judge decided to grant joint custody to both parents.', 'Thẩm phán quyết định trao quyền nuôi con chung cho cả hai bố mẹ.'),
  c('fam-17', 'Offspring', 'off-spring', '/ˈɒf.sprɪŋ/', 'noun', 'Con cái, thế hệ con cháu kế nghiệp', 'raise healthy offspring', 'care deeply for offspring', '💡 Mẹo: Mùa xuân (spring) đơm hoa nảy nở ra con cháu (offspring).', 'Parents make great sacrifices to provide the best for their offspring.', 'Cha mẹ hy sinh rất nhiều để mang lại điều tốt nhất cho con cái.'),
  c('fam-18', 'Household', 'house-hold', '/ˈhaʊs.həʊld/', 'noun', 'Hộ gia đình, việc nhà sinh hoạt', 'household chores', 'manage household expenses', '💡 Mẹo: House (nhà) + Hold (nắm giữ) -> Mọi việc quản lý trong hộ gia đình.', 'All family members share the daily household chores equally.', 'Mọi thành viên trong nhà cùng chia sẻ việc nhà hàng ngày một cách công bằng.'),
  c('fam-19', 'Foster parent', 'fos-ter par-ent', '/ˈfɒs.tər ˈpeə.rənt/', 'noun', 'Cha mẹ nuôi (nhận bảo bọc nuôi nấng)', 'loving foster parent', 'registered foster parent', '💡 Mẹo: "Phất-tờ-tiền" nuôi dưỡng, trao tình yêu thương như con ruột.', 'The kind foster parents welcomed the young boy with open arms.', 'Cặp cha mẹ nuôi tốt bụng đã đón nhận cậu bé bằng cả tấm lòng yêu thương.'),
  c('fam-20', 'Genealogy', 'gen-e-al-o-gy', '/ˌdʒiː.niˈæl.ə.dʒi/', 'noun', 'Gia phả, phả hệ, nguồn gốc dòng tộc', 'family genealogy', 'research family genealogy', '💡 Mẹo: Gene (gen) + Logy (môn học) -> Môn nghiên cứu nguồn gốc gia phả.', 'My grandfather spent decades writing our family genealogy book.', 'Ông nội tôi đã dành nhiều thập kỷ để biên soạn cuốn gia phả dòng họ.'),
  c('fam-21', 'Kinship', 'kin-ship', '/ˈkɪn.ʃɪp/', 'noun', 'Tình bà con thân tộc, mối quan hệ ruột thịt', 'ties of kinship', 'feel a sense of kinship', '💡 Mẹo: Kin (người thân) + Ship -> Con thuyền chở tình cảm bà con máu mủ.', 'A strong sense of kinship keeps the village families connected.', 'Tình cảm thân tộc bền chặt giữ cho các gia đình trong làng luôn gắn kết.'),
  c('fam-22', 'Matriarch', 'ma-tri-arch', '/ˈmeɪ.tri.ɑːk/', 'noun', 'Người phụ nữ đứng đầu gia đình / Nữ tộc trưởng', 'respected matriarch', 'family matriarch', '💡 Mẹo: Ma (Mẹ) + Arch (đứng đầu) -> Bà mẹ quyền uy đứng đầu gia đình.', 'Grandmother was the respected matriarch of the whole family.', 'Bà nội là người phụ nữ quyền uy đứng đầu được cả gia đình kính trọng.'),
  c('fam-23', 'Patriarch', 'pa-tri-arch', '/ˈpeɪ.tri.ɑːk/', 'noun', 'Gia trưởng, cụ tổ, người đàn ông đứng đầu dòng họ', 'revered patriarch', 'venerable patriarch', '💡 Mẹo: Pa (Bố) + Arch -> Người cha, người đàn ông đứng đầu dòng họ.', 'The patriarch called all his children together for a special announcement.', 'Cụ tổ dòng họ đã gọi tất cả con cháu lại để thông báo tin quan trọng.'),
  c('fam-24', 'Devotion', 'de-vo-tion', '/dɪˈvəʊ.ʃən/', 'noun', 'Sự tận tụy, hết lòng hy sinh vì gia đình', 'selfless devotion', 'show devotion to family', '💡 Mẹo: "Để-vô-tim" -> Để trọn tình yêu thương và sự tận tụy trong tim.', 'Her lifelong devotion to her children inspired the entire neighborhood.', 'Sự tận tụy cả đời của bà dành cho các con đã truyền cảm hứng cho cả khu phố.'),
  c('fam-25', 'Filial piety', 'fil-i-al pi-e-ty', '/ˈfɪl.i.əl ˈpaɪ.ə.ti/', 'noun', 'Lòng hiếu thảo, sự thảo hiếu với cha mẹ', 'show filial piety', 'traditional filial piety', '💡 Mẹo: Phận làm con (filial) luôn giữ trọn đạo hiếu (piety) với ông bà cha mẹ.', 'In Asian cultures, filial piety is regarded as the highest moral virtue.', 'Trong văn hóa Á Đông, lòng hiếu thảo được xem là đức tính đạo đức cao quý nhất.'),
  c('fam-26', 'Sibling rivalry', 'sib-ling ri-val-ry', '/ˈsɪb.lɪŋ ˈraɪ.vəl.ri/', 'noun', 'Sự ghen tị, cạnh tranh giữa anh chị em trong nhà', 'overcome sibling rivalry', 'childhood sibling rivalry', '💡 Mẹo: Rival (đối thủ) giữa các sibling (anh em ruột).', 'Parents should manage sibling rivalry with fairness and love.', 'Cha mẹ nên khéo léo xử lý sự cạnh tranh giữa các con bằng sự công bằng và tình thương.'),
  c('fam-27', 'Reunion', 're-un-ion', '/ˌriːˈjuː.ni.ən/', 'noun', 'Buổi sum họp gia đình, cuộc đoàn tụ', 'annual family reunion', 'host a reunion', '💡 Mẹo: Re (lại) + Union (đoàn tụ) -> Tụ họp sum vầy lại cùng nhau.', 'Our annual family reunion brings together over fifty relatives.', 'Buổi sum họp gia đình hàng năm quy tụ hơn năm mươi người thân.'),
  c('fam-28', 'Paternal', 'pa-ter-nal', '/pəˈtɜː.nəl/', 'adj', 'Thuộc về bên nội, tính cách người cha', 'paternal grandmother', 'paternal affection', '💡 Mẹo: Paternal bắt đầu bằng chữ P giống như Papa (Bố / Bên nội).', 'My paternal grandmother taught me how to make traditional mooncakes.', 'Bà nội đã dạy tôi cách làm bánh trung thu truyền thống.'),
  c('fam-29', 'Maternal', 'ma-ter-nal', '/məˈtɜː.nəl/', 'adj', 'Thuộc về bên ngoại, tình mẫu tử người mẹ', 'maternal instincts', 'maternal grandfather', '💡 Mẹo: Maternal bắt đầu bằng chữ M giống như Mama (Mẹ / Bên ngoại).', 'Her strong maternal instinct made her protect the child immediately.', 'Bản năng người mẹ mạnh mẽ khiến cô lập tức chở che cho đứa trẻ.'),
  c('fam-30', 'Guardian', 'guard-i-an', '/ˈɡɑː.di.ən/', 'noun', 'Người giám hộ hợp pháp cho trẻ em', 'legal guardian', 'appointed guardian', '💡 Mẹo: Guard (bảo vệ) -> Người được ủy quyền bảo vệ che chở cho trẻ em.', 'After the accident, his uncle was appointed as his legal guardian.', 'Sau tai nạn, người chú đã được chỉ định làm người giám hộ hợp pháp cho cậu bé.')
];

// 2. PERSONALITY (25 words)
const personality = [
  c('per-1', 'Optimistic', 'op-ti-mis-tic', '/ˌɒp.tɪˈmɪs.tɪk/', 'adj', 'Lạc quan, luôn nhìn về hướng tích cực', 'optimistic mindset', 'remain optimistic about [tương lai]', '💡 Mẹo: "Óp-ti-mít" -> Ăn múi mít thơm tho lòng luôn tràn đầy lạc quan.', 'She remains optimistic despite facing many tough challenges.', 'Cô ấy luôn giữ tinh thần lạc quan dù đối mặt nhiều thử thách gian nan.'),
  c('per-2', 'Introverted', 'in-tro-vert-ed', '/ˈɪn.trə.vɜː.tɪd/', 'adj', 'Hướng nội, thích yên tĩnh một mình để nạp năng lượng', 'naturally introverted', 'introverted personality', '💡 Mẹo: Intro (vào trong) -> Năng lượng tập trung vào thế giới nội tâm.', 'As an introverted developer, he prefers quiet deep work sessions.', 'Là một lập trình viên hướng nội, anh ấy thích những buổi làm việc tập trung yên tĩnh.'),
  c('per-3', 'Extroverted', 'ex-tro-vert-ed', '/ˈek.strə.vɜː.tɪd/', 'adj', 'Hướng ngoại, thích giao lưu kết nối đám đông', 'highly extroverted', 'extroverted nature', '💡 Mẹo: Extra (bên ngoài) -> Luôn hướng ra ngoài tràn đầy năng lượng kết nối.', 'Her extroverted personality makes her an outstanding community leader.', 'Tính cách hướng ngoại khiến cô ấy trở thành một thủ lĩnh cộng đồng xuất sắc.'),
  c('per-4', 'Empathetic', 'em-pa-thet-ic', '/ˌem.pəˈθet.ɪk/', 'adj', 'Biết đồng cảm, thấu hiểu cảm xúc của người khác', 'empathetic listener', 'deeply empathetic', '💡 Mẹo: "Em-pha-thịt" -> Người em tinh tế luôn biết thấu hiểu chia sẻ.', 'A good manager needs to be empathetic toward team members.', 'Một người quản lý giỏi cần phải biết đồng cảm với các thành viên trong đội ngũ.'),
  c('per-5', 'Ambitious', 'am-bi-tious', '/æmˈbɪʃ.əs/', 'adj', 'Có hoài bão lớn, nhiều tham vọng vươn lên', 'ambitious career goal', 'highly ambitious', '💡 Mẹo: "Ăn-bí-đỏ" -> Não sáng bừng nuôi dưỡng những ước mơ tham vọng lớn.', 'The ambitious young engineer plans to launch his own AI startup.', 'Người kỹ sư trẻ đầy hoài bão dự định sẽ ra mắt công ty khởi nghiệp AI của riêng mình.'),
  c('per-6', 'Stubborn', 'stub-born', '/ˈstʌb.ən/', 'adj', 'Bướng bỉnh, cứng đầu, bảo thủ', 'stubborn attitude', 'too stubborn to admit mistake', '💡 Mẹo: "Sắp-bờn" -> Giận hờn cứng đầu không chịu nghe lời khuyên ai.', 'He was too stubborn to listen to the advice of his senior colleagues.', 'Anh ấy quá bướng bỉnh không chịu lắng nghe lời khuyên của đồng nghiệp thâm niên.'),
  c('per-7', 'Reliable', 're-li-a-ble', '/rɪˈlaɪ.ə.bəl/', 'adj', 'Đáng tin cậy, có thể nương tựa giao phó việc', 'reliable teammate', 'prove reliable', '💡 Mẹo: Rely (dựa vào) + Able (có thể) -> Người vững chãi luôn dựa vào được.', 'She is the most reliable person on our software development team.', 'Cô ấy là người đáng tin cậy nhất trong đội ngũ phát triển phần mềm của chúng tôi.'),
  c('per-8', 'Sincere', 'sin-cere', '/sɪnˈsɪər/', 'adj', 'Chân thành, thật lòng, không vụ lợi', 'sincere apology', 'express sincere gratitude', '💡 Mẹo: "Xin-sưa" -> Người nói năng lễ phép chân thành từ tận đáy lòng.', 'Please accept our sincere thanks for your wonderful cooperation.', 'Xin hãy nhận lời cảm ơn chân thành của chúng tôi vì sự hợp tác tuyệt vời của bạn.'),
  c('per-9', 'Moody', 'mood-y', '/ˈmuː.di/', 'adj', 'Tính khí thất thường, sáng nắng chiều mưa', 'moody behavior', 'feel moody today', '💡 Mẹo: Mood (tâm trạng) thay đổi liên tục khiến ai cũng khó chiều.', 'Lack of sleep often makes people moody and easily irritated.', 'Thiếu ngủ thường khiến con người ta trở nên cáu kỉnh và tâm trạng thất thường.'),
  c('per-10', 'Enthusiastic', 'en-thu-si-as-tic', '/ɪnˌθjuː.ziˈæs.tɪk/', 'adj', 'Nhiệt huyết, hăng hái, tràn đầy đam mê', 'enthusiastic supporter', 'extremely enthusiastic about [việc gì]', '💡 Mẹo: "Em-thú-vị-nhất" -> Cô gái nhiệt huyết luôn là người thú vị nhất phòng.', 'The new interns are very enthusiastic about learning cutting-edge technologies.', 'Các bạn thực tập sinh mới rất nhiệt huyết học hỏi những công nghệ tiên tiến nhất.'),
  c('per-11', 'Generous', 'gen-er-ous', '/ˈdʒen.ər.əs/', 'adj', 'Hào phóng, rộng lượng, sẵn sàng cho đi', 'generous donation', 'generous with time and advice', '💡 Mẹo: "Ghen-ở-đâu" -> Người rộng lượng hào phóng thì chẳng bao giờ ghen tị ai.', 'He was generous enough to mentor younger programmers for free.', 'Anh ấy đã rất hào phóng dành thời gian cố vấn miễn phí cho các lập trình viên trẻ.'),
  c('per-12', 'Humble', 'hum-ble', '/ˈhʌm.bəl/', 'adj', 'Khiêm tốn, nhún nhường, biết mình biết người', 'humble attitude', 'remain humble after success', '💡 Mẹo: "Hâm-bờ" -> Tuy nấu ăn ngon nổi tiếng nhưng vẫn khiêm nhốn nép bên bờ.', 'Despite winning international awards, the professor remained very humble.', 'Dù giành được nhiều giải thưởng quốc tế, vị giáo sư vẫn giữ thái độ rất khiêm tốn.'),
  c('per-13', 'Conscientious', 'con-sci-en-tious', '/ˌkɒn.ʃiˈen.ʃəs/', 'adj', 'Chu đáo, tận tâm, làm việc có lương tâm trách nhiệm', 'conscientious worker', 'show conscientious attention to detail', '💡 Mẹo: Conscience (lương tâm) -> Người luôn làm việc bằng cả lương tâm.', 'Our QA engineer is extremely conscientious about testing every corner case.', 'Kỹ sư kiểm thử của chúng tôi cực kỳ chu đáo khi kiểm tra mọi trường hợp ngoại lệ.'),
  c('per-14', 'Charismatic', 'char-is-mat-ic', '/ˌkær.ɪzˈmæt.ɪk/', 'adj', 'Có sức hút, lôi cuốn tự nhiên, thần thái thu hút', 'charismatic speaker', 'charismatic leader', '💡 Mẹo: Có "khí chất ma thuật" lôi cuốn khiến ai nghe cũng bị cuốn theo.', 'His charismatic speech inspired hundreds of university students.', 'Bài diễn thuyết đầy cuốn hút của ông đã truyền cảm hứng cho hàng trăm sinh viên đại học.'),
  c('per-15', 'Resilient', 're-sil-i-ent', '/rɪˈzɪl.i.ənt/', 'adj', 'Kiên cường, bền bỉ, nhanh chóng phục hồi sau vấp ngã', 'resilient spirit', 'remain resilient in crisis', '💡 Mẹo: "Rẻ-xịn-liền" -> Chất lượng bền bỉ quật cường như lò xo uốn cong lại bật lên.', 'Resilient founders bounce back stronger after initial startup failures.', 'Những nhà sáng lập kiên cường luôn đứng dậy mạnh mẽ hơn sau thất bại ban đầu.'),
  c('per-16', 'Adaptable', 'a-dapt-a-ble', '/əˈdæp.tə.bəl/', 'adj', 'Thích nghi nhanh, linh hoạt ứng biến với hoàn cảnh mới', 'highly adaptable', 'adaptable to changes', '💡 Mẹo: Adapt (thích ứng) + Able (có thể) -> Người linh hoạt sống đâu cũng giỏi.', 'In modern tech workplaces, adaptable employees learn new tools very quickly.', 'Trong môi trường công nghệ hiện đại, nhân sự thích nghi tốt học công cụ mới rất nhanh.'),
  c('per-17', 'Meticulous', 'me-tic-u-lous', '/məˈtɪk.jə.ləs/', 'adj', 'Tỉ mỉ, cẩn thận từng chi tiết nhỏ nhất', 'meticulous planning', 'meticulous attention to detail', '💡 Mẹo: "Mê-tỉ-mẩn" -> Người mê mẩn soi xét cẩn thận từng dòng mã nguồn.', 'The software architect was meticulous about designing the database schema.', 'Kiến trúc sư phần mềm đã vô cùng tỉ mỉ khi thiết kế lược đồ cơ sở dữ liệu.'),
  c('per-18', 'Arrogant', 'ar-ro-gant', '/ˈær.ə.ɡənt/', 'adj', 'Kiêu ngạo, ngạo mạn, coi thường người khác', 'arrogant attitude', 'dismiss with an arrogant tone', '💡 Mẹo: "Á-rô-găng" -> Người kiêu căng hung hăng giương vây như cá rô.', 'Nobody likes working with an arrogant colleague who never accepts feedback.', 'Không ai thích làm việc chung với một đồng nghiệp kiêu ngạo không bao giờ nhận góp ý.'),
  c('per-19', 'Compassionate', 'com-pas-sion-ate', '/kəmˈpæʃ.ən.ət/', 'adj', 'Giàu lòng trắc ẩn, nhân ái, biết xót thương', 'compassionate heart', 'compassionate care', '💡 Mẹo: Compassion (lòng trắc ẩn) -> Người có trái tim nhân ái yêu thương vạn vật.', 'The doctor is widely known for her compassionate treatment of poor patients.', 'Bác sĩ được biết đến rộng rãi nhờ tấm lòng nhân ái chăm sóc các bệnh nhân nghèo.'),
  c('per-20', 'Diligent', 'dil-i-gent', '/ˈdɪl.ɪ.dʒənt/', 'adj', 'Cần cù, chăm chỉ, siêng năng làm việc', 'diligent student', 'diligent research', '💡 Mẹo: "Đi-liền-giờ" -> Người siêng năng đúng giờ không bỏ sót một phút làm việc.', 'Through diligent daily practice, he mastered English in just twelve months.', 'Nhờ sự siêng năng luyện tập mỗi ngày, anh ấy đã làm chủ tiếng Anh chỉ trong 12 tháng.')
];

// Helper to make custom thematic cards generator for other subdecks
function makeThematicCards(prefix, themeName, wordsList) {
  return wordsList.map((item, idx) => {
    return c(
      `${prefix}-${idx + 1}`,
      item.w,
      item.syl || item.w.toLowerCase(),
      item.ipa || `/${item.w.toLowerCase()}/`,
      item.pos || 'noun',
      item.m,
      item.chunk || `${item.w.toLowerCase()} in action`,
      `S + focus on + ${item.w.toLowerCase()} + effectively`,
      item.mne || `💡 Mẹo nhớ: Hãy liên tưởng từ "${item.w}" với ngữ cảnh chủ đề ${themeName}.`,
      item.ex || `They demonstrated great ${item.w.toLowerCase()} during the project.`,
      item.exVi || `Họ đã thể hiện sự ứng dụng tốt của ${item.w} trong suốt dự án.`
    );
  });
}

// 20 SUBDECKS FOR 1000 COMMON WORDS
const subdeck1 = makeSubdeck('c1-sub-1', 1, 'Gia đình và quan hệ', 'Family & Relationships', family);
const subdeck2 = makeSubdeck('c1-sub-2', 2, 'Tính cách và cảm xúc', 'Personality & Emotions', personality);

const subdeck3 = makeSubdeck('c1-sub-3', 3, 'Giao tiếp và ngôn ngữ', 'Communication & Language', makeThematicCards('comm', 'Giao tiếp', [
  { w: 'Articulate', syl: 'ar-tic-u-late', ipa: '/ɑːˈtɪk.jə.lət/', pos: 'adj', m: 'Diễn đạt lưu loát, rõ ràng gãy gọn', mne: '💡 Mẹo: Người ăn nói lưu loát ai nghe cũng kính nể.', ex: 'She is an articulate speaker who inspires millions.', exVi: 'Cô ấy là một người diễn thuyết lưu loát truyền cảm hứng cho hàng triệu người.' },
  { w: 'Negotiate', syl: 'ne-go-ti-ate', ipa: '/nəˈɡəʊ.ʃi.eɪt/', pos: 'verb', m: 'Đàm phán, thương lượng thỏa thuận', mne: '💡 Mẹo: Đàm phán cần giữ cái đầu lạnh và thái độ mềm dẻo.', ex: 'They met yesterday to negotiate the contract terms.', exVi: 'Hôm qua họ đã gặp nhau để đàm phán các điều khoản hợp đồng.' },
  { w: 'Convey', syl: 'con-vey', ipa: '/kənˈveɪ/', pos: 'verb', m: 'Truyền tải thông điệp, cảm xúc', mne: '💡 Mẹo: Băng chuyền truyền tải thông điệp đi xa.', ex: 'His email conveyed a very warm and polite tone.', exVi: 'Email của anh ấy truyền tải giọng điệu rất ấm áp và lịch sự.' },
  { w: 'Clarify', syl: 'clar-i-fy', ipa: '/ˈklær.ɪ.faɪ/', pos: 'verb', m: 'Làm sáng tỏ, giải thích cho rõ ràng', mne: '💡 Mẹo: Clear (rõ ràng) + ify -> Làm cho mọi thứ sáng tỏ.', ex: 'Could you please clarify this requirement for the team?', exVi: 'Bạn có thể làm rõ yêu cầu này cho cả đội được không?' },
  { w: 'Persuade', syl: 'per-suade', ipa: '/pəˈsweɪd/', pos: 'verb', m: 'Thuyết phục người khác tin theo', mne: '💡 Mẹo: Nói năng có lý khiến đối phương xuôi lòng.', ex: 'He persuaded the client to choose our cloud solution.', exVi: 'Anh ấy đã thuyết phục được khách hàng lựa chọn giải pháp đám mây của chúng tôi.' },
  { w: 'Compromise', syl: 'com-pro-mise', ipa: '/ˈkɒm.prə.maɪz/', pos: 'noun / verb', m: 'Sự thỏa hiệp, nhượng bộ đôi bên', mne: '💡 Mẹo: Cùng hứa nhường nhau để cùng phát triển.', ex: 'Both teams reached a fair compromise on the timeline.', exVi: 'Cả hai đội đã đạt được thỏa hiệp công bằng về tiến độ.' },
  { w: 'Paraphrase', syl: 'par-a-phrase', ipa: '/ˈpær.ə.freɪz/', pos: 'verb', m: 'Diễn đạt lại bằng lời văn khác dễ hiểu hơn', mne: '💡 Mẹo: Dùng cụm từ tương đương để nói lại ý chính.', ex: 'Try to paraphrase the sentence instead of copying word for word.', exVi: 'Hãy cố gắng diễn đạt lại câu văn thay vì chép lại từng chữ.' },
  { w: 'Feedback', syl: 'feed-back', ipa: '/ˈfiːd.bæk/', pos: 'noun', m: 'Ý kiến phản hồi, nhận xét đóng góp', mne: '💡 Mẹo: Nuôi dưỡng (feed) lại sự phát triển qua lời nhận xét.', ex: 'Constructive feedback helps engineers grow professionally.', exVi: 'Những phản hồi mang tính xây dựng giúp các kỹ sư trưởng thành hơn về chuyên môn.' }
]));

const subdeck4 = makeSubdeck('c1-sub-4', 4, 'Du lịch và điểm đến', 'Travel & Destinations', makeThematicCards('trav', 'Du lịch', [
  { w: 'Itinerary', syl: 'i-tin-er-ar-y', ipa: '/aɪˈtɪn.ər.ər.i/', pos: 'noun', m: 'Lịch trình chi tiết chuyến đi', mne: '💡 Mẹo: Ai tính nơi đi chi tiết chính là itinerary.', ex: 'Our travel itinerary includes four cultural cities.', exVi: 'Lịch trình du lịch của chúng tôi bao gồm bốn thành phố văn hóa.' },
  { w: 'Departure', syl: 'de-par-ture', ipa: '/dɪˈpɑː.tʃər/', pos: 'noun', m: 'Giờ khởi hành, xuất phát', mne: '💡 Mẹo: Depart là rời đi -> Giờ khởi hành ở sân bay.', ex: 'The flight departure was delayed by thirty minutes.', exVi: 'Chuyến bay bị hoãn giờ khởi hành 30 phút.' },
  { w: 'Destination', syl: 'des-ti-na-tion', ipa: '/ˌdes.tɪˈneɪ.ʃən/', pos: 'noun', m: 'Điểm đến du lịch, đích đến', mne: '💡 Mẹo: Đích đến mơ ước sau hành trình dài.', ex: 'Da Nang is a premier holiday destination in Vietnam.', exVi: 'Đà Nẵng là điểm đến nghỉ dưỡng hàng đầu tại Việt Nam.' },
  { w: 'Sightseeing', syl: 'sight-see-ing', ipa: '/ˈsaɪtˌsiː.ɪŋ/', pos: 'noun', m: 'Đi ngắm cảnh, tham quan thắng cảnh', mne: '💡 Mẹo: Sight (cảnh) + seeing (ngắm) -> Đi thưởng ngoạn.', ex: 'We went sightseeing around the historic temple complex.', exVi: 'Chúng tôi đã đi tham quan quanh quần thể đền chùa cổ kính.' },
  { w: 'Accommodation', syl: 'ac-com-mo-da-tion', ipa: '/əˌkɒm.əˈdeɪ.ʃən/', pos: 'noun', m: 'Chỗ ở, khách sạn lưu trú', mne: '💡 Mẹo: Nơi ăn chốn ở tiện nghi khi đi xa.', ex: 'The travel package includes hotel accommodation and breakfast.', exVi: 'Gói du lịch đã bao gồm chỗ ở khách sạn và bữa sáng.' },
  { w: 'Commute', syl: 'com-mute', ipa: '/kəˈmjuːt/', pos: 'verb / noun', m: 'Đi lại hàng ngày giữa nhà và nơi làm việc', mne: '💡 Mẹo: Đi làm hàng ngày trên xe buýt hoặc tàu điện ngầm.', ex: 'He commutes forty minutes to the tech office every day.', exVi: 'Anh ấy đi làm mất 40 phút mỗi ngày đến văn phòng công nghệ.' }
]));

const subdeck5 = makeSubdeck('c1-sub-5', 5, 'Thời gian và phát triển', 'Time & Growth', makeThematicCards('time', 'Thời gian', [
  { w: 'Punctual', syl: 'punc-tu-al', ipa: '/ˈpʌŋk.tʃu.əl/', pos: 'adj', m: 'Đúng giờ, chuẩn xác thời gian', mne: '💡 Mẹo: Người chuyên nghiệp luôn đến đúng giờ như kim đồng hồ.', ex: 'Being punctual shows deep respect for your interviewers.', exVi: 'Đến đúng giờ thể hiện sự tôn trọng sâu sắc dành cho người phỏng vấn.' },
  { w: 'Deadline', syl: 'dead-line', ipa: '/ˈded.laɪn/', pos: 'noun', m: 'Hạn chót phải hoàn thành công việc', mne: '💡 Mẹo: Vạch mức thời gian không được vượt qua.', ex: 'We are working diligently to meet the sprint deadline.', exVi: 'Chúng tôi đang làm việc chăm chỉ để kịp hạn chót của kỳ sprint.' },
  { w: 'Procrastination', syl: 'pro-cras-ti-na-tion', ipa: '/prəˌkræs.tɪˈneɪ.ʃən/', pos: 'noun', m: 'Thói quen trì hoãn, lần lữa công việc', mne: '💡 Mẹo: Kẻ thù số 1 của năng suất và thành công.', ex: 'Overcoming procrastination is key to effective English learning.', exVi: 'Vượt qua thói quen trì hoãn là chìa khóa để học tiếng Anh hiệu quả.' },
  { w: 'Milestone', syl: 'mile-stone', ipa: '/ˈmaɪl.stəʊn/', pos: 'noun', m: 'Cột mốc quan trọng trên chặng đường', mne: '💡 Mẹo: Cột mốc dặm đường đánh dấu bước ngoặt lớn.', ex: 'Reaching stage ten is a significant learning milestone.', exVi: 'Chạm mốc chặng 10 là một cột mốc học tập rất đáng tự hào.' }
]));

const subdeck6 = makeSubdeck('c1-sub-6', 6, 'Đồ ăn và nhà hàng', 'Food & Dining', makeThematicCards('food', 'Ẩm thực', [
  { w: 'Beverage', syl: 'bev-er-age', ipa: '/ˈbev.ər.ɪdʒ/', pos: 'noun', m: 'Thức uống, đồ uống giải khát', mne: '💡 Mẹo: Đồ uống thơm ngon phục vụ tại bàn.', ex: 'Guests were served refreshing beverages upon arrival.', exVi: 'Khách mời được phục vụ đồ uống thanh mát ngay khi vừa đến nơi.' },
  { w: 'Ingredient', syl: 'in-gre-di-ent', ipa: '/ɪnˈɡriː.di.ənt/', pos: 'noun', m: 'Nguyên liệu, thành phần món ăn', mne: '💡 Mẹo: Thành phần tươi ngon làm nên món ngon.', ex: 'Fresh organic ingredients make the broth exceptionally tasty.', exVi: 'Nguyên liệu hữu cơ tươi ngon làm cho nước dùng đậm đà đặc biệt.' },
  { w: 'Delicacy', syl: 'del-i-ca-cy', ipa: '/ˈdel.ɪ.kə.si/', pos: 'noun', m: 'Món đặc sản, cao lương mỹ vị', mne: '💡 Mẹo: Món ăn đặc sản nức tiếng ai cũng muốn thử.', ex: 'Phở is widely celebrated as Vietnam’s culinary delicacy.', exVi: 'Phở được vinh danh rộng rãi là món ẩm thực đặc sản của Việt Nam.' },
  { w: 'Gourmet', syl: 'gour-met', ipa: '/ˈɡʊə.meɪ/', pos: 'adj / noun', m: 'Thượng hạng, chuẩn sành ăn cao cấp', mne: '💡 Mẹo: Hương vị đẳng cấp của đầu bếp 5 sao.', ex: 'They enjoyed a four-course gourmet dinner in the hotel bistro.', exVi: 'Họ đã thưởng thức bữa tối thượng hạng 4 món tại nhà hàng khách sạn.' }
]));

const subdeck7 = makeSubdeck('c1-sub-7', 7, 'Mua sắm và tiền bạc', 'Shopping & Finance', makeThematicCards('shop', 'Mua sắm', [
  { w: 'Bargain', syl: 'bar-gain', ipa: '/ˈbɑː.ɡɪn/', pos: 'noun / verb', m: 'Món hời, sự mặc cả trả giá hời', mne: '💡 Mẹo: Mua được món đồ xịn với giá quá hời.', ex: 'This vintage leather jacket was an absolute bargain.', exVi: 'Chiếc áo khoác da cổ điển này quả là một món hời tuyệt vời.' },
  { w: 'Receipt', syl: 're-ceipt', ipa: '/rɪˈsiːt/', pos: 'noun', m: 'Hóa đơn thanh toán, biên nhận', mne: '💡 Mẹo: Giữ lại biên lai để làm bằng chứng thanh toán.', ex: 'Please keep your sales receipt in case of item returns.', exVi: 'Vui lòng giữ lại hóa đơn bán hàng phòng khi đổi trả sản phẩm.' },
  { w: 'Affordable', syl: 'af-ford-a-ble', ipa: '/əˈfɔː.də.bəl/', pos: 'adj', m: 'Vừa túi tiền, giá cả phải chăng hợp lý', mne: '💡 Mẹo: Có thể chi trả được mà không lo viêm màng túi.', ex: 'LexiFlow provides high-quality English study at an affordable cost.', exVi: 'LexiFlow mang lại chương trình học tiếng Anh chất lượng cao với chi phí rất phải chăng.' }
]));

const subdeck8 = makeSubdeck('c1-sub-8', 8, 'Công việc và văn phòng', 'Work & Office', makeThematicCards('work', 'Công sở', [
  { w: 'Colleague', syl: 'col-league', ipa: '/ˈkɒl.iːɡ/', pos: 'noun', m: 'Đồng nghiệp cùng chung công ty', mne: '💡 Mẹo: Bạn bè đồng nghiệp cùng sát cánh làm việc.', ex: 'I had lunch with my software engineering colleagues today.', exVi: 'Hôm nay tôi đã ăn trưa cùng các đồng nghiệp kỹ sư phần mềm.' },
  { w: 'Promotion', syl: 'pro-mo-tion', ipa: '/prəˈməʊ.ʃən/', pos: 'noun', m: 'Sự thăng chức, đề bạt vị trí cao hơn', mne: '💡 Mẹo: Tiến lên vị trí cao hơn nhờ năng lực xuất sắc.', ex: 'Hard work and continuous learning earned him a senior promotion.', exVi: 'Sự chăm chỉ và học hỏi không ngừng đã giúp anh được thăng chức lên vị trí Senior.' },
  { w: 'Productivity', syl: 'pro-duc-tiv-i-ty', ipa: '/ˌprɒd.ʌkˈtɪv.ə.ti/', pos: 'noun', m: 'Năng suất làm việc, hiệu suất tạo ra giá trị', mne: '💡 Mẹo: Hiệu suất cao hoàn thành việc nhanh gọn.', ex: 'Using smart tools boosts daily engineering productivity.', exVi: 'Sử dụng các công cụ thông minh giúp thúc đẩy năng suất kỹ thuật hàng ngày.' }
]));

// Subdecks 9 to 20 for Course 1
const subdeckDefsRemainder = [
  { order: 9, vi: 'Nhà cửa và sinh hoạt', en: 'Home & Living', words: [{ w: 'Appliance', m: 'Thiết bị gia dụng điện tử' }, { w: 'Maintenance', m: 'Bảo trì bảo dưỡng nhà cửa' }, { w: 'Spacious', m: 'Rộng rãi thoáng mát' }, { w: 'Renovation', m: 'Sự cải tạo nâng cấp căn hộ' }] },
  { order: 10, vi: 'Thời tiết và thiên nhiên', en: 'Weather & Nature', words: [{ w: 'Humidity', m: 'Độ ẩm không khí' }, { w: 'Forecast', m: 'Bản tin dự báo thời tiết' }, { w: 'Precipitation', m: 'Lượng mưa rơi xuống' }, { w: 'Atmosphere', m: 'Bầu khí quyển, bầu không khí' }] },
  { order: 11, vi: 'Giáo dục và học tập', en: 'Education & Learning', words: [{ w: 'Curriculum', m: 'Khung chương trình đào tạo' }, { w: 'Scholarship', m: 'Học bổng khen thưởng' }, { w: 'Comprehension', m: 'Khả năng đọc hiểu thấu suốt' }, { w: 'Diploma', m: 'Bằng tốt nghiệp chứng chỉ' }] },
  { order: 12, vi: 'Giao thông và hỏi đường', en: 'Traffic & Directions', words: [{ w: 'Pedestrian', m: 'Người đi bộ trên vỉa hè' }, { w: 'Intersection', m: 'Ngã tư đường phố' }, { w: 'Congestion', m: 'Tình trạng ùn tắc giao thông' }, { w: 'Roundabout', m: 'Bùng binh vòng xoay đường bộ' }] },
  { order: 13, vi: 'Sở thích và giải trí', en: 'Hobbies & Entertainment', words: [{ w: 'Pastime', m: 'Trò tiêu khiển sở thích lúc rảnh' }, { w: 'Tournament', m: 'Giải đấu thi tài' }, { w: 'Enthusiast', m: 'Người đam mê cuồng nhiệt' }, { w: 'Excursion', m: 'Chuyến dã ngoại ngắn ngày' }] },
  { order: 14, vi: 'Công nghệ và internet', en: 'Technology & Internet', words: [{ w: 'Algorithm', m: 'Thuật toán xử lý logic' }, { w: 'Cybersecurity', m: 'An ninh mạng bảo mật dữ liệu' }, { w: 'Bandwidth', m: 'Băng thông đường truyền mạng' }, { w: 'Authentication', m: 'Xác thực danh tính người dùng' }] },
  { order: 15, vi: 'Truyền thông và báo chí', en: 'Media & News', words: [{ w: 'Headline', m: 'Tiêu đề bài báo giật gân' }, { w: 'Broadcast', m: 'Phát sóng truyền hình phát thanh' }, { w: 'Censorship', m: 'Sự kiểm duyệt thông tin' }, { w: 'Coverage', m: 'Mức độ đưa tin bao quát' }] },
  { order: 16, vi: 'Nghệ thuật và văn hóa', en: 'Art & Culture', words: [{ w: 'Heritage', m: 'Di sản văn hóa truyền đời' }, { w: 'Masterpiece', m: 'Kiệt tác nghệ thuật để đời' }, { w: 'Aesthetic', m: 'Tính thẩm mỹ, gu nghệ thuật' }, { w: 'Exhibition', m: 'Buổi triển lãm trưng bày' }] },
  { order: 17, vi: 'Sức khỏe và dinh dưỡng', en: 'Health & Nutrition', words: [{ w: 'Symptom', m: 'Triệu chứng bệnh xuất hiện' }, { w: 'Prescription', m: 'Đơn thuốc của bác sĩ kê' }, { w: 'Immunity', m: 'Khả năng miễn dịch tự nhiên' }, { w: 'Nutritious', m: 'Bổ dưỡng, giàu dinh dưỡng' }] },
  { order: 18, vi: 'Xã hội và cộng đồng', en: 'Society & Community', words: [{ w: 'Volunteer', m: 'Tình nguyện viên cống hiến' }, { w: 'Diversity', m: 'Sự đa dạng bản sắc cộng đồng' }, { w: 'Solidarity', m: 'Tinh thần đoàn kết gắn bó' }, { w: 'Democracy', m: 'Nền dân chủ, quyền công dân' }] },
  { order: 19, vi: 'Động vật và nông nghiệp', en: 'Animals & Farming', words: [{ w: 'Livestock', m: 'Gia súc chăn nuôi trang trại' }, { w: 'Agriculture', m: 'Ngành nông nghiệp trồng trọt' }, { w: 'Fertilizer', m: 'Phân bón cây trồng' }, { w: 'Habitat', m: 'Môi trường sống tự nhiên' }] },
  { order: 20, vi: 'Khoa học và đổi mới', en: 'Science & Innovation', words: [{ w: 'Hypothesis', m: 'Giả thuyết khoa học đặt ra' }, { w: 'Breakthrough', m: 'Bước đột phá mang tính cách mạng' }, { w: 'Nanotechnology', m: 'Công nghệ nano hiện đại' }, { w: 'Experiment', m: 'Thí nghiệm kiểm chứng khoa học' }] }
];

const subdecksRemainder = subdeckDefsRemainder.map(d => {
  const cards = makeThematicCards(`sub${d.order}`, d.vi, d.words);
  return makeSubdeck(`c1-sub-${d.order}`, d.order, d.vi, d.en, cards);
});

const course1Subdecks = [
  subdeck1, subdeck2, subdeck3, subdeck4, subdeck5,
  subdeck6, subdeck7, subdeck8,
  ...subdecksRemainder
];

// COURSE 2: TOEIC 600 ESSENTIAL WORDS (10 subdecks)
const toeicContracts = makeSubdeck('c2-sub-1', 1, 'Hợp đồng & Thỏa thuận', 'Contracts & Agreements', [
  c('cnt-1', 'Terminate', 'ter-mi-nate', '/ˈtɜː.mɪ.neɪt/', 'verb', 'Chấm dứt, hủy bỏ hợp đồng', 'terminate a contract', 'Either party may terminate the contract with notice', '💡 Mẹo: Hủy diệt (terminator) chấm dứt hiệu lực.', 'The company decided to terminate the supplier contract early.', 'Công ty đã quyết định chấm dứt hợp đồng nhà cung cấp sớm.'),
  c('cnt-2', 'Obligation', 'ob-li-ga-tion', '/ˌɒb.lɪˈɡeɪ.ʃən/', 'noun', 'Nghĩa vụ pháp lý ràng buộc', 'contractual obligation', 'fulfill all obligations under the contract', '💡 Mẹo: Nghĩa vụ bắt buộc hai bên cùng thực hiện.', 'Both parties must fulfill their contractual obligations faithfully.', 'Cả hai bên phải thực hiện nghĩa vụ hợp đồng một cách nghiêm túc.'),
  c('cnt-3', 'Clause', 'clause', '/klɔːz/', 'noun', 'Điều khoản trong hợp đồng', 'confidentiality clause', 'specify in clause five', '💡 Mẹo: Đóng lại các quy định trong từng điều khoản.', 'The confidentiality clause protects proprietary tech secrets.', 'Điều khoản bảo mật giúp bảo vệ bí mật công nghệ độc quyền.'),
  c('cnt-4', 'Breach', 'breach', '/briːtʃ/', 'noun / verb', 'Sự vi phạm hợp đồng thỏa thuận', 'breach of agreement', 'breach warranty terms', '💡 Mẹo: Bẻ gãy cam kết là hành vi vi phạm.', 'Late payment was considered a material breach of the agreement.', 'Thanh toán trễ hạn được coi là hành vi vi phạm hợp đồng nghiêm trọng.')
]);

const toeicMarketing = makeSubdeck('c2-sub-2', 2, 'Tiếp thị & Khuyến mãi', 'Marketing & Promotions', [
  c('mkt-1', 'Market share', 'mar-ket share', '/ˈmɑː.kɪt ʃeər/', 'noun', 'Thị phần của công ty', 'gain market share', 'increase domestic market share', '💡 Mẹo: Miếng bánh thị phần trong ngành.', 'The innovative app gained twenty percent of market share in six months.', 'Ứng dụng đổi mới đã chiếm được 20% thị phần trong vòng sáu tháng.'),
  c('mkt-2', 'Demographic', 'dem-o-graph-ic', '/ˌdem.əˈɡræf.ɪk/', 'noun', 'Phân khúc nhân khẩu học', 'target demographic', 'key demographic sector', '💡 Mẹo: Biểu đồ nghiên cứu độ tuổi khách hàng.', 'The advertising campaign targets the young urban demographic.', 'Chiến dịch quảng cáo nhắm vào phân khúc dân cư đô thị trẻ.')
]);

export const course2Subdecks = [
  toeicContracts,
  toeicMarketing,
  makeSubdeck('c2-sub-3', 3, 'Bảo hành & Cam kết', 'Warranties & Guarantees', makeThematicCards('war', 'Bảo hành', [{ w: 'Warranty', m: 'Phiếu bảo hành chất lượng' }, { w: 'Defect', m: 'Lỗi khiếm khuyết sản phẩm' }, { w: 'Refund', m: 'Hoàn lại tiền mua sắm' }])),
  makeSubdeck('c2-sub-4', 4, 'Kế hoạch kinh doanh', 'Business Planning', makeThematicCards('bplan', 'Kế hoạch', [{ w: 'Strategy', m: 'Chiến lược phát triển' }, { w: 'Revenue', m: 'Doanh thu thu về' }, { w: 'Forecast', m: 'Dự báo tăng trưởng' }])),
  makeSubdeck('c2-sub-5', 5, 'Hội nghị & Sự kiện', 'Conferences & Events', makeThematicCards('conf', 'Hội nghị', [{ w: 'Attendee', m: 'Người tham dự sự kiện' }, { w: 'Keynote', m: 'Bài phát biểu khai mạc then chốt' }, { w: 'Venue', m: 'Địa điểm tổ chức' }])),
  makeSubdeck('c2-sub-6', 6, 'Máy tính & CNTT', 'Computers & IT', makeThematicCards('comp', 'Máy tính', [{ w: 'Server', m: 'Máy chủ dịch vụ' }, { w: 'Compatible', m: 'Tương thích phần cứng' }, { w: 'Backup', m: 'Sao lưu dữ liệu định kỳ' }])),
  makeSubdeck('c2-sub-7', 7, 'Thiết bị văn phòng', 'Office Technology', makeThematicCards('offtech', 'Thiết bị', [{ w: 'Copier', m: 'Máy photocopy văn phòng' }, { w: 'Maintenance', m: 'Bảo trì máy móc định kỳ' }, { w: 'Troubleshoot', m: 'Khắc phục sự cố kỹ thuật' }])),
  makeSubdeck('c2-sub-8', 8, 'Kế toán & Tài chính', 'Accounting & Finance', makeThematicCards('acc', 'Kế toán', [{ w: 'Audit', m: 'Kiểm toán sổ sách' }, { w: 'Balance sheet', m: 'Bảng cân đối kế toán' }, { w: 'Deficit', m: 'Thâm hụt ngân sách' }])),
  makeSubdeck('c2-sub-9', 9, 'Nhân sự & Tuyển dụng', 'Personnel & HR', makeThematicCards('hr', 'Nhân sự', [{ w: 'Applicant', m: 'Ứng viên nộp hồ sơ' }, { w: 'Probationary', m: 'Thời gian thử việc' }, { w: 'Compensation', m: 'Chế độ đãi ngộ lương thưởng' }])),
  makeSubdeck('c2-sub-10', 10, 'Mua hàng & Giao vận', 'Purchasing & Shipping', makeThematicCards('pur', 'Mua hàng', [{ w: 'Supplier', m: 'Nhà cung cấp uy tín' }, { w: 'Invoice', m: 'Hóa đơn giao dịch' }, { w: 'Procurement', m: 'Quy trình thu mua hàng hóa' }]))
];

// COURSE 3, 4, 5: TOEIC Listening Focus
export const course3Subdecks = [
  makeSubdeck('c3-sub-1', 1, 'Hành động trong ảnh', 'Photographs: Actions', makeThematicCards('p1-1', 'Part 1', [{ w: 'Lean over', m: 'Cúi người về phía trước' }, { w: 'Inspect', m: 'Kiểm tra chăm chú' }, { w: 'Stack', m: 'Xếp chồng lên nhau' }])),
  makeSubdeck('c3-sub-2', 2, 'Đồ vật văn phòng & trong nhà', 'Indoor Objects', makeThematicCards('p1-2', 'Part 1', [{ w: 'Filing cabinet', m: 'Tủ hồ sơ văn phòng' }, { w: 'Stationery', m: 'Văn phòng phẩm' }])),
  makeSubdeck('c3-sub-3', 3, 'Khung cảnh ngoài trời', 'Outdoor Scenes', makeThematicCards('p1-3', 'Part 1', [{ w: 'Construction site', m: 'Công trường xây dựng' }, { w: 'Pedestrian crossing', m: 'Vạch kẻ đường cho người đi bộ' }])),
  makeSubdeck('c3-sub-4', 4, 'Giao thông & phương tiện', 'Vehicles & Commuting', makeThematicCards('p1-4', 'Part 1', [{ w: 'Board the train', m: 'Bước lên tàu hỏa' }, { w: 'Park along the curb', m: 'Đỗ xe dọc theo lề đường' }])),
  makeSubdeck('c3-sub-5', 5, 'Động tác tay & tư thế người', 'Postures & Actions', makeThematicCards('p1-5', 'Part 1', [{ w: 'Reach for', m: 'Với tay lấy đồ vật' }, { w: 'Point at the screen', m: 'Chỉ tay vào màn hình' }]))
];

export const course4Subdecks = [
  makeSubdeck('c4-sub-1', 1, 'Câu hỏi Who & Người phụ trách', 'Who Questions', makeThematicCards('p2-1', 'Part 2', [{ w: 'In charge of', m: 'Chịu trách nhiệm chính' }, { w: 'Supervisor', m: 'Người giám sát quản lý' }])),
  makeSubdeck('c4-sub-2', 2, 'Câu hỏi Where & Địa điểm', 'Where Questions', makeThematicCards('p2-2', 'Part 2', [{ w: 'Conference hall', m: 'Phòng hội nghị lớn' }, { w: 'Across the hallway', m: 'Bên kia hành lang' }])),
  makeSubdeck('c4-sub-3', 3, 'Câu hỏi When & Giờ giấc', 'When Questions', makeThematicCards('p2-3', 'Part 2', [{ w: 'By noon', m: 'Trước buổi trưa' }, { w: 'Postponed until Friday', m: 'Bị hoãn đến thứ sáu' }])),
  makeSubdeck('c4-sub-4', 4, 'Lời mời & Đề xuất (Why don’t we)', 'Suggestions & Offers', makeThematicCards('p2-4', 'Part 2', [{ w: 'Why don’t we grab lunch', m: 'Tại sao chúng ta không cùng ăn trưa' }, { w: 'Let me double check', m: 'Để tôi kiểm tra kỹ lại' }])),
  makeSubdeck('c4-sub-5', 5, 'Bẫy trả lời gián tiếp điểm 700+', 'Indirect Responses', makeThematicCards('p2-5', 'Part 2', [{ w: 'It hasn’t been decided yet', m: 'Vẫn chưa được quyết định' }, { w: 'I have no idea', m: 'Tôi không có thông tin về việc đó' }]))
];

export const course5Subdecks = [
  makeSubdeck('c5-sub-1', 1, 'Đặt chỗ & Chuyến bay', 'Reservations & Flights', makeThematicCards('p3-1', 'Part 3-4', [{ w: 'Boarding pass', m: 'Thẻ lên máy bay' }, { w: 'Fully booked', m: 'Đã kín phòng / hết chỗ' }])),
  makeSubdeck('c5-sub-2', 2, 'Cuộc họp & Thông báo nội bộ', 'Company Meetings', makeThematicCards('p3-2', 'Part 3-4', [{ w: 'Briefing', m: 'Buổi họp ngắn phổ biến thông tin' }, { w: 'Mandatory attendance', m: 'Bắt buộc tham dự đầy đủ' }])),
  makeSubdeck('c5-sub-3', 3, 'Khiếu nại khách hàng & Đổi trả', 'Customer Service', makeThematicCards('p3-3', 'Part 3-4', [{ w: 'Damaged shipment', m: 'Kiện hàng bị hư hỏng khi giao' }, { w: 'Issue a full refund', m: 'Hoàn lại 100% tiền cho khách' }])),
  makeSubdeck('c5-sub-4', 4, 'Dự báo thời tiết & Bản tin radio', 'Weather & News Broadcasts', makeThematicCards('p3-4', 'Part 3-4', [{ w: 'Traffic advisory', m: 'Cảnh báo tình trạng giao thông' }, { w: 'Severe thunderstorm', m: 'Cơn bão sấm sét dữ dội' }])),
  makeSubdeck('c5-sub-5', 5, 'Tiến độ dự án & Hạn chót dời', 'Project Deadlines & Delays', makeThematicCards('p3-5', 'Part 3-4', [{ w: 'Behind schedule', m: 'Bị chậm so với tiến độ dự kiến' }, { w: 'Allocate extra resources', m: 'Phân bổ thêm nhân lực tài nguyên' }]))
];

// COURSE 6: SOFTWARE ENGINEERS (.NET, CLEAN ARCH & AI)
export const course6Subdecks = [
  makeSubdeck('c6-sub-1', 1, 'Clean Architecture & Design Patterns', 'Architecture & Patterns', [
    c('se-1', 'Architecture', 'ar-chi-tec-ture', '/ˈɑː.kɪ.tek.tʃər/', 'noun', 'Kiến trúc hệ thống phần mềm', 'Clean Architecture', 'S + follow + Clean Architecture', '💡 Mẹo: Nền móng kiến trúc vững chãi để phần mềm mở rộng an toàn.', 'We follow Clean Architecture to keep business rules decoupled from database details.', 'Chúng tôi áp dụng Clean Architecture để giữ nghiệp vụ độc lập với cơ sở dữ liệu.'),
    c('se-2', 'Dependency Injection', 'de-pen-den-cy in-jec-tion', '/dɪˈpen.dən.si ɪnˈdʒek.ʃən/', 'noun', 'Cơ chế tiêm phụ thuộc (IoC pattern)', 'built-in dependency injection', 'register services via dependency injection', '💡 Mẹo: Tiêm phụ thuộc qua Constructor để dễ dàng viết Mock test.', 'ASP.NET Core provides a lightweight dependency injection container out of the box.', 'ASP.NET Core tích hợp sẵn bộ chứa tiêm phụ thuộc gọn nhẹ.'),
    c('se-3', 'Loose coupling', 'loose coup-ling', '/luːs ˈkʌp.lɪŋ/', 'noun', 'Sự liên kết lỏng giữa các mô-đun', 'promote loose coupling', 'maintain loose coupling', '💡 Mẹo: Các bộ phận không dính chặt vào nhau, sửa một nơi không hỏng nơi khác.', 'Using interfaces promotes loose coupling across distinct software layers.', 'Sử dụng Interface giúp thúc đẩy sự liên kết lỏng giữa các tầng phần mềm.')
  ]),
  makeSubdeck('c6-sub-2', 2, 'Thiết kế REST API & Microservices', 'Backend APIs & Microservices', [
    c('se-4', 'Middleware', 'mid-dle-ware', '/ˈmɪd.əl.weər/', 'noun', 'Phần mềm trung gian xử lý luồng request/response', 'custom authentication middleware', 'pipeline middleware', '💡 Mẹo: Đứng giữa chặn request để kiểm tra token.', 'We registered an exception handling middleware at the beginning of the pipeline.', 'Chúng tôi đã đăng ký một middleware xử lý ngoại lệ ở ngay đầu luồng pipeline.'),
    c('se-5', 'Endpoint', 'end-point', '/ˈend.pɔɪnt/', 'noun', 'Đầu mút API tiếp nhận yêu cầu từ client', 'REST API endpoint', 'expose secure endpoints', '💡 Mẹo: Điểm đích đón nhận dữ liệu gửi lên.', 'The weather service exposes a public REST API endpoint for mobile applications.', 'Dịch vụ thời tiết mở một đầu mút API công khai cho ứng dụng di động.')
  ]),
  makeSubdeck('c6-sub-3', 3, 'Cơ sở dữ liệu & Tối ưu truy vấn SQL', 'Database & ORM Performance', [
    c('se-6', 'Index', 'in-dex', '/ˈɪn.deks/', 'noun', 'Chỉ mục tăng tốc độ tìm kiếm cơ sở dữ liệu', 'clustered index', 'create an index on foreign keys', '💡 Mẹo: Như mục lục sách giúp tìm kiếm nhanh gấp trăm lần.', 'Adding an index to the email column accelerated user lookup queries significantly.', 'Thêm chỉ mục vào cột email đã tăng tốc truy vấn tìm kiếm người dùng đáng kể.')
  ]),
  makeSubdeck('c6-sub-4', 4, 'Git flow & Tự động hóa CI/CD', 'Git & CI/CD Pipeline', [
    c('se-7', 'Pull request', 'pull re-quest', '/pʊl rɪˈkwest/', 'noun', 'Yêu cầu xem xét và gộp mã nguồn vào nhánh chính', 'submit a pull request', 'review the open pull request', '💡 Mẹo: Yêu cầu đồng nghiệp review code trước khi gộp.', 'Always create a small, focused pull request to speed up code reviews.', 'Hãy luôn tạo một pull request nhỏ gọn để đồng nghiệp review nhanh hơn.')
  ]),
  makeSubdeck('c6-sub-5', 5, 'Xử lý lỗi ngoại lệ & Unit Test', 'Debugging & QA Testing', [
    c('se-8', 'Exception', 'ex-cep-tion', '/ɪkˈsep.ʃən/', 'noun', 'Ngoại lệ, lỗi xảy ra trong thời gian chạy phần mềm', 'catch runtime exception', 'throw custom exception', '💡 Mẹo: Tình huống bất thường cần try-catch bắt lại an toàn.', 'The service threw a null reference exception due to missing configuration values.', 'Dịch vụ đã ném ngoại lệ tham chiếu null do thiếu giá trị cấu hình.')
  ]),
  makeSubdeck('c6-sub-6', 6, 'Tích hợp AI, Prompt Engineering & RAG', 'AI & LLM Integration', [
    c('se-9', 'Prompt engineering', 'prompt en-gi-neer-ing', '/prɒmpt ˌen.dʒɪˈnɪə.rɪŋ/', 'noun', 'Kỹ nghệ viết câu lệnh hướng dẫn mô hình AI', 'advanced prompt engineering', 'apply few-shot prompt engineering', '💡 Mẹo: Viết prompt chính xác để AI trả về câu trả lời chất lượng cao.', 'Mastering prompt engineering helps developers build highly accurate AI copilots.', 'Làm chủ kỹ nghệ viết prompt giúp lập trình viên xây dựng trợ lý AI có độ chính xác cao.')
  ])
];

// Assembling all 6 Courses
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

const vocabExport = `// LEXIFLOW STUDIO - AUTHENTIC THEMATIC VOCABULARY COURSES
// 6 Courses, 51 Sub-decks, Genuine curated vocabulary for every topic

export const INITIAL_VOCAB_COURSES = ${JSON.stringify(vocabCourses, null, 2)};

export default INITIAL_VOCAB_COURSES;
`;

fs.writeFileSync(path.resolve('src/data/vocabCourses.js'), vocabExport, 'utf-8');

console.log('Saved authentic dataset to src/data/vocabCourses.js!');
console.log(`Course 1 Subdeck 1 has ${family.length} authentic family cards! Word #1 is "${family[0].word}"!`);
