import { createLocalizedText as lt } from '../i18n/localization';
import type { LocalizedText } from '../types/i18n.types';
import type {
  TarotCard,
  TarotCategory,
  TarotElement,
  TarotEnergy,
} from '../types/tarot.types';

type MinorCategory = Exclude<TarotCategory, 'major'>;

interface MajorSeed {
  id: string;
  name: LocalizedText;
  index: number;
  meaning: LocalizedText;
  positiveAspects: readonly LocalizedText[];
  negativeAspects: readonly LocalizedText[];
  themes: readonly LocalizedText[];
  contrastThemes: readonly LocalizedText[];
  energy: TarotEnergy;
}

interface SuitDefinition {
  category: MinorCategory;
  label: LocalizedText;
  imagePrefix: string;
  element: TarotElement;
  essence: LocalizedText;
  invitation: LocalizedText;
  gift: LocalizedText;
  challenge: LocalizedText;
  themes: readonly LocalizedText[];
  contrastThemes: readonly LocalizedText[];
}

interface RankDefinition {
  order: number;
  slug: string;
  label: LocalizedText;
  core: LocalizedText;
  invitation: LocalizedText;
  gift: LocalizedText;
  shadow: LocalizedText;
  themes: readonly LocalizedText[];
  contrastThemes: readonly LocalizedText[];
  energy: TarotEnergy;
}

const majorImageNames = [
  '00-TheFool.jpg',
  '01-TheMagician.jpg',
  '02-TheHighPriestess.jpg',
  '03-TheEmpress.jpg',
  '04-TheEmperor.jpg',
  '05-TheHierophant.jpg',
  '06-TheLovers.jpg',
  '07-TheChariot.jpg',
  '08-Strength.jpg',
  '09-TheHermit.jpg',
  '10-WheelOfFortune.jpg',
  '11-Justice.jpg',
  '12-TheHangedMan.jpg',
  '13-Death.jpg',
  '14-Temperance.jpg',
  '15-TheDevil.jpg',
  '16-TheTower.jpg',
  '17-TheStar.jpg',
  '18-TheMoon.jpg',
  '19-TheSun.jpg',
  '20-Judgement.jpg',
  '21-TheWorld.jpg',
] as const;

const majorSeeds: readonly MajorSeed[] = [
  {
    id: 'major-fool',
    name: lt('The Fool', 'Kẻ Khờ'),
    index: 0,
    meaning: lt(
      'The Fool marks a threshold where curiosity matters more than certainty and the healthiest move is to trust the new road enough to begin it.',
      'Kẻ Khờ đánh dấu một ngưỡng cửa nơi sự tò mò quan trọng hơn cảm giác chắc chắn, và lựa chọn lành mạnh nhất là tin con đường mới vừa đủ để bắt đầu.',
    ),
    positiveAspects: [
      lt('fresh trust', 'niềm tin tươi mới'),
      lt('playful courage', 'sự can đảm hồn nhiên'),
      lt('openness to change', 'sự cởi mở với thay đổi'),
    ],
    negativeAspects: [
      lt('careless risk', 'liều lĩnh thiếu cân nhắc'),
      lt('naivety', 'ngây thơ quá mức'),
      lt('ignoring useful limits', 'phớt lờ những giới hạn cần thiết'),
    ],
    themes: [
      lt('beginnings', 'khởi đầu'),
      lt('wonder', 'sự ngạc nhiên'),
      lt('freedom', 'tự do'),
      lt('faith', 'niềm tin'),
    ],
    contrastThemes: [
      lt('stagnation', 'đình trệ'),
      lt('fear', 'nỗi sợ'),
      lt('rigidity', 'sự cứng nhắc'),
    ],
    energy: 'active',
  },
  {
    id: 'major-magician',
    name: lt('The Magician', 'Nhà Ảo Thuật'),
    index: 1,
    meaning: lt(
      'The Magician channels raw potential into focused action and reminds you that skill, intention, and timing can turn an idea into something tangible.',
      'Nhà Ảo Thuật dẫn nguồn tiềm năng thô thành hành động có trọng tâm và nhắc bạn rằng kỹ năng, chủ ý và thời điểm có thể biến một ý tưởng thành điều hữu hình.',
    ),
    positiveAspects: [
      lt('resourcefulness', 'sự xoay xở linh hoạt'),
      lt('clear intention', 'ý định rõ ràng'),
      lt('confident execution', 'khả năng triển khai tự tin'),
    ],
    negativeAspects: [
      lt('manipulation', 'sự thao túng'),
      lt('ego-driven control', 'cái tôi kiểm soát quá mạnh'),
      lt('empty performance', 'màn trình diễn rỗng'),
    ],
    themes: [
      lt('manifestation', 'hiện thực hóa'),
      lt('willpower', 'ý chí'),
      lt('focus', 'tập trung'),
      lt('agency', 'quyền chủ động'),
    ],
    contrastThemes: [
      lt('distraction', 'xao nhãng'),
      lt('self-doubt', 'nghi ngờ bản thân'),
      lt('misdirection', 'đi sai hướng'),
    ],
    energy: 'active',
  },
  {
    id: 'major-high-priestess',
    name: lt('The High Priestess', 'Nữ Tư Tế'),
    index: 2,
    meaning: lt(
      'The High Priestess turns attention inward, asking for stillness, deep listening, and trust in what subtle intuition already understands.',
      'Nữ Tư Tế kéo sự chú ý vào bên trong, đòi hỏi sự tĩnh lặng, lắng nghe sâu và niềm tin vào điều trực giác tinh tế đã hiểu từ trước.',
    ),
    positiveAspects: [
      lt('deep intuition', 'trực giác sâu sắc'),
      lt('quiet discernment', 'sự phân định lặng lẽ'),
      lt('inner knowing', 'sự biết rõ từ bên trong'),
    ],
    negativeAspects: [
      lt('withdrawal', 'thu mình'),
      lt('emotional distance', 'khoảng cách cảm xúc'),
      lt('avoiding involvement', 'né tránh nhập cuộc'),
    ],
    themes: [
      lt('intuition', 'trực giác'),
      lt('mystery', 'bí ẩn'),
      lt('reflection', 'chiêm nghiệm'),
      lt('inner wisdom', 'trí tuệ nội tâm'),
    ],
    contrastThemes: [
      lt('noise', 'ồn ào'),
      lt('overexposure', 'phơi bày quá mức'),
      lt('impulsive reaction', 'phản ứng bốc đồng'),
    ],
    energy: 'reflective',
  },
  {
    id: 'major-empress',
    name: lt('The Empress', 'Hoàng Hậu'),
    index: 3,
    meaning: lt(
      'The Empress represents fertile abundance, nourishment, and the kind of care that helps people, projects, and relationships grow into their fullest shape.',
      'Hoàng Hậu tượng trưng cho sự phong nhiêu, nuôi dưỡng và kiểu chăm sóc giúp con người, dự án và mối quan hệ phát triển đến hình dạng viên mãn nhất.',
    ),
    positiveAspects: [
      lt('nurturing presence', 'sự hiện diện nuôi dưỡng'),
      lt('creative fertility', 'khả năng sinh sôi sáng tạo'),
      lt('sensory abundance', 'sự phong phú của cảm quan'),
    ],
    negativeAspects: [
      lt('overindulgence', 'nuông chiều quá mức'),
      lt('smothering care', 'chăm sóc đến ngột ngạt'),
      lt('comfort without boundaries', 'dễ chịu nhưng thiếu ranh giới'),
    ],
    themes: [
      lt('nurture', 'nuôi dưỡng'),
      lt('growth', 'phát triển'),
      lt('pleasure', 'khoái cảm'),
      lt('creativity', 'sáng tạo'),
    ],
    contrastThemes: [
      lt('deprivation', 'thiếu thốn'),
      lt('neglect', 'bỏ bê'),
      lt('overprotection', 'bảo bọc quá mức'),
    ],
    energy: 'balanced',
  },
  {
    id: 'major-emperor',
    name: lt('The Emperor', 'Hoàng Đế'),
    index: 4,
    meaning: lt(
      'The Emperor provides structure, authority, and the discipline needed to make a vision durable instead of leaving it as a passing impulse.',
      'Hoàng Đế mang đến cấu trúc, thẩm quyền và tính kỷ luật cần thiết để biến một tầm nhìn thành thứ bền vững thay vì chỉ là một cơn hứng thoáng qua.',
    ),
    positiveAspects: [
      lt('steady leadership', 'lãnh đạo vững vàng'),
      lt('healthy boundaries', 'ranh giới lành mạnh'),
      lt('strategic order', 'trật tự có chiến lược'),
    ],
    negativeAspects: [
      lt('rigidity', 'cứng nhắc'),
      lt('dominating control', 'kiểm soát áp đặt'),
      lt('harsh authority', 'quyền lực khắc nghiệt'),
    ],
    themes: [
      lt('structure', 'cấu trúc'),
      lt('responsibility', 'trách nhiệm'),
      lt('authority', 'thẩm quyền'),
      lt('stability', 'ổn định'),
    ],
    contrastThemes: [
      lt('chaos', 'hỗn loạn'),
      lt('disorder', 'mất trật tự'),
      lt('inflexibility', 'thiếu linh hoạt'),
    ],
    energy: 'active',
  },
  {
    id: 'major-hierophant',
    name: lt('The Hierophant', 'Giáo Hoàng'),
    index: 5,
    meaning: lt(
      'The Hierophant points to trusted systems, traditions, and mentors, asking whether wisdom is best found by learning the deeper reason behind a practice.',
      'Giáo Hoàng hướng đến những hệ thống đáng tin, truyền thống và người dẫn dắt, đặt câu hỏi liệu trí tuệ có được tìm thấy tốt nhất bằng cách hiểu lý do sâu xa phía sau một nghi thức.',
    ),
    positiveAspects: [
      lt('shared wisdom', 'trí tuệ được truyền trao'),
      lt('meaningful ritual', 'nghi thức có ý nghĩa'),
      lt('grounded guidance', 'sự chỉ dẫn vững nền'),
    ],
    negativeAspects: [
      lt('dogma', 'giáo điều'),
      lt('empty conformity', 'tuân thủ rỗng'),
      lt('moral superiority', 'cảm giác đạo đức cao hơn người khác'),
    ],
    themes: [
      lt('tradition', 'truyền thống'),
      lt('teaching', 'chỉ dạy'),
      lt('belief', 'niềm tin'),
      lt('guidance', 'định hướng'),
    ],
    contrastThemes: [
      lt('rebellion', 'phản kháng'),
      lt('stagnant rules', 'luật lệ trì trệ'),
      lt('hollow ritual', 'nghi thức rỗng'),
    ],
    energy: 'balanced',
  },
  {
    id: 'major-lovers',
    name: lt('The Lovers', 'Nhân Tình'),
    index: 6,
    meaning: lt(
      'The Lovers is about alignment: values, desire, and choice meeting in a way that asks for wholehearted honesty instead of divided commitment.',
      'Nhân Tình nói về sự đồng điệu: giá trị, khát khao và lựa chọn gặp nhau theo cách đòi hỏi sự thành thật trọn vẹn thay vì cam kết nửa vời.',
    ),
    positiveAspects: [
      lt('true alignment', 'sự đồng điệu thật'),
      lt('heart-led choice', 'lựa chọn theo trái tim'),
      lt('mutual connection', 'sự kết nối hai chiều'),
    ],
    negativeAspects: [
      lt('indecision', 'do dự'),
      lt('split loyalties', 'trung thành chia đôi'),
      lt('desire without responsibility', 'ham muốn thiếu trách nhiệm'),
    ],
    themes: [
      lt('connection', 'kết nối'),
      lt('choice', 'lựa chọn'),
      lt('union', 'hợp nhất'),
      lt('values', 'giá trị'),
    ],
    contrastThemes: [
      lt('division', 'chia rẽ'),
      lt('avoidance', 'né tránh'),
      lt('misalignment', 'lệch nhịp'),
    ],
    energy: 'balanced',
  },
  {
    id: 'major-chariot',
    name: lt('The Chariot', 'Cỗ Xe'),
    index: 7,
    meaning: lt(
      'The Chariot gathers competing forces under one direction and says progress arrives when determination is paired with self-command.',
      'Cỗ Xe gom những lực kéo cạnh tranh về cùng một hướng và nói rằng tiến triển chỉ đến khi quyết tâm đi cùng khả năng tự chủ.',
    ),
    positiveAspects: [
      lt('disciplined momentum', 'động lực có kỷ luật'),
      lt('victorious focus', 'sự tập trung chiến thắng'),
      lt('purposeful drive', 'xung lực có mục đích'),
    ],
    negativeAspects: [
      lt('force without listening', 'ép tiến lên mà không lắng nghe'),
      lt('recklessness', 'liều lĩnh'),
      lt('steamrolling others', 'lấn át người khác'),
    ],
    themes: [
      lt('momentum', 'đà tiến'),
      lt('direction', 'định hướng'),
      lt('victory', 'chiến thắng'),
      lt('discipline', 'kỷ luật'),
    ],
    contrastThemes: [
      lt('drift', 'trôi dạt'),
      lt('scattered will', 'ý chí phân tán'),
      lt('aggression', 'hiếu chiến'),
    ],
    energy: 'active',
  },
  {
    id: 'major-strength',
    name: lt('Strength', 'Sức Mạnh'),
    index: 8,
    meaning: lt(
      'Strength favors calm courage over spectacle and shows that real power often looks like patience, tenderness, and self-regulation under pressure.',
      'Sức Mạnh ưu ái lòng dũng cảm điềm tĩnh hơn màn thể hiện và cho thấy quyền lực thật thường trông giống sự kiên nhẫn, dịu dàng và tự điều tiết dưới áp lực.',
    ),
    positiveAspects: [
      lt('compassionate courage', 'can đảm giàu trắc ẩn'),
      lt('steady self-mastery', 'khả năng làm chủ bản thân vững vàng'),
      lt('gentle resilience', 'độ bền dịu dàng'),
    ],
    negativeAspects: [
      lt('suppressed anger', 'cơn giận bị dồn nén'),
      lt('avoidance of necessary action', 'né tránh hành động cần thiết'),
      lt('fragile pride', 'cái tôi mong manh'),
    ],
    themes: [
      lt('resilience', 'bền bỉ'),
      lt('self-command', 'tự chủ'),
      lt('compassion', 'trắc ẩn'),
      lt('bravery', 'dũng khí'),
    ],
    contrastThemes: [
      lt('impulse', 'bốc đồng'),
      lt('fear', 'nỗi sợ'),
      lt('loss of control', 'mất kiểm soát'),
    ],
    energy: 'balanced',
  },
  {
    id: 'major-hermit',
    name: lt('The Hermit', 'Ẩn Sĩ'),
    index: 9,
    meaning: lt(
      'The Hermit seeks clarity through solitude, reflection, and stepping back long enough to hear what the noise of daily life keeps interrupting.',
      'Ẩn Sĩ tìm kiếm sự sáng tỏ qua cô tịch, chiêm nghiệm và khoảng lùi đủ dài để nghe được điều mà tiếng ồn của đời sống hằng ngày luôn cắt ngang.',
    ),
    positiveAspects: [
      lt('wise perspective', 'góc nhìn minh triết'),
      lt('intentional retreat', 'sự lui vào có chủ đích'),
      lt('truth-seeking', 'khát vọng tìm chân lý'),
    ],
    negativeAspects: [
      lt('isolation', 'cô lập'),
      lt('withholding insight', 'giữ lại hiểu biết'),
      lt('retreating forever', 'lùi mãi không quay lại'),
    ],
    themes: [
      lt('solitude', 'cô tịch'),
      lt('search', 'tìm kiếm'),
      lt('guidance', 'dẫn đường'),
      lt('perspective', 'góc nhìn'),
    ],
    contrastThemes: [
      lt('distraction', 'xao động'),
      lt('avoidance of truth', 'tránh né sự thật'),
      lt('social overwhelm', 'quá tải xã hội'),
    ],
    energy: 'reflective',
  },
  {
    id: 'major-wheel-of-fortune',
    name: lt('Wheel of Fortune', 'Bánh Xe Số Phận'),
    index: 10,
    meaning: lt(
      'Wheel of Fortune highlights change already in motion and invites flexibility so you can work with a turning cycle instead of resisting it.',
      'Bánh Xe Số Phận làm nổi bật sự thay đổi đang chuyển động và mời gọi tính linh hoạt để bạn đi cùng chu kỳ quay thay vì chống lại nó.',
    ),
    positiveAspects: [
      lt('timely change', 'thay đổi đúng lúc'),
      lt('pattern awareness', 'nhận biết quy luật'),
      lt('trusting the cycle', 'tin vào chu kỳ'),
    ],
    negativeAspects: [
      lt('fatalism', 'phó mặc số phận'),
      lt('gambling with outcomes', 'đánh cược với kết quả'),
      lt('fighting inevitable change', 'chống lại thay đổi không thể tránh'),
    ],
    themes: [
      lt('cycles', 'chu kỳ'),
      lt('change', 'thay đổi'),
      lt('timing', 'thời điểm'),
      lt('fate', 'số phận'),
    ],
    contrastThemes: [
      lt('control fixation', 'ám ảnh kiểm soát'),
      lt('stuckness', 'kẹt lại'),
      lt('resistance', 'kháng cự'),
    ],
    energy: 'balanced',
  },
  {
    id: 'major-justice',
    name: lt('Justice', 'Công Lý'),
    index: 11,
    meaning: lt(
      'Justice asks for honest accounting, balanced judgment, and choices made from evidence rather than defensiveness or wishful thinking.',
      'Công Lý đòi hỏi sự nhìn nhận trung thực, phán đoán cân bằng và những quyết định dựa trên bằng chứng thay vì phòng vệ hay ảo tưởng.',
    ),
    positiveAspects: [
      lt('fair perspective', 'góc nhìn công bằng'),
      lt('clear accountability', 'trách nhiệm rõ ràng'),
      lt('measured decisions', 'quyết định chừng mực'),
    ],
    negativeAspects: [
      lt('cold criticism', 'phê phán lạnh lùng'),
      lt('perfectionist judgment', 'phán xét cầu toàn'),
      lt('weaponized rules', 'dùng luật lệ như vũ khí'),
    ],
    themes: [
      lt('fairness', 'công bằng'),
      lt('truth', 'sự thật'),
      lt('balance', 'cân bằng'),
      lt('accountability', 'trách nhiệm'),
    ],
    contrastThemes: [
      lt('bias', 'thiên vị'),
      lt('avoidance of consequence', 'trốn tránh hệ quả'),
      lt('imbalance', 'mất cân bằng'),
    ],
    energy: 'balanced',
  },
  {
    id: 'major-hanged-man',
    name: lt('The Hanged Man', 'Người Treo Ngược'),
    index: 12,
    meaning: lt(
      'The Hanged Man reframes delay as a sacred pause, showing that surrender and perspective shifts can reveal progress hidden inside stillness.',
      'Người Treo Ngược nhìn sự trì hoãn như một khoảng dừng thiêng, cho thấy sự buông bỏ và thay đổi góc nhìn có thể hé lộ tiến triển ẩn trong tĩnh lặng.',
    ),
    positiveAspects: [
      lt('fresh perspective', 'góc nhìn mới'),
      lt('willing surrender', 'sự buông xuôi tự nguyện'),
      lt('meaningful pause', 'khoảng dừng có ý nghĩa'),
    ],
    negativeAspects: [
      lt('martyrdom', 'tự biến mình thành kẻ hy sinh'),
      lt('passive stagnation', 'đình trệ thụ động'),
      lt('refusing to adapt', 'từ chối thích nghi'),
    ],
    themes: [
      lt('suspension', 'tạm dừng'),
      lt('reframing', 'tái định khung'),
      lt('sacrifice', 'hy sinh'),
      lt('release', 'buông bỏ'),
    ],
    contrastThemes: [
      lt('control', 'kiểm soát'),
      lt('resistance', 'kháng cự'),
      lt('stubbornness', 'cố chấp'),
    ],
    energy: 'reflective',
  },
  {
    id: 'major-death',
    name: lt('Death', 'Cái Chết'),
    index: 13,
    meaning: lt(
      'Death represents an irreversible transition, asking you to release what has run its course so a truer future can take shape.',
      'Cái Chết đại diện cho một sự chuyển đoạn không thể đảo ngược, yêu cầu bạn buông điều đã hết vòng đời để một tương lai chân thực hơn có thể hình thành.',
    ),
    positiveAspects: [
      lt('clean endings', 'kết thúc dứt khoát'),
      lt('deep transformation', 'chuyển hóa sâu'),
      lt('renewed direction', 'định hướng mới'),
    ],
    negativeAspects: [
      lt('clinging to the past', 'bám víu quá khứ'),
      lt('fear of change', 'sợ thay đổi'),
      lt('unnecessary devastation', 'tàn phá không cần thiết'),
    ],
    themes: [
      lt('ending', 'kết thúc'),
      lt('transition', 'chuyển tiếp'),
      lt('release', 'buông bỏ'),
      lt('renewal', 'tái sinh'),
    ],
    contrastThemes: [
      lt('attachment', 'dính mắc'),
      lt('denial', 'phủ nhận'),
      lt('decay without movement', 'mục ruỗng nhưng không chuyển động'),
    ],
    energy: 'balanced',
  },
  {
    id: 'major-temperance',
    name: lt('Temperance', 'Tiết Chế'),
    index: 14,
    meaning: lt(
      'Temperance blends opposites into something sustainable and emphasizes healing through moderation, rhythm, and patient refinement.',
      'Tiết Chế pha trộn các mặt đối nghịch thành một trạng thái bền vững và nhấn mạnh chữa lành qua sự điều độ, nhịp điệu và tinh chỉnh kiên nhẫn.',
    ),
    positiveAspects: [
      lt('measured healing', 'chữa lành có chừng mực'),
      lt('harmonious blending', 'sự hòa trộn hài hòa'),
      lt('steady integration', 'sự tích hợp ổn định'),
    ],
    negativeAspects: [
      lt('half-hearted compromise', 'thỏa hiệp nửa vời'),
      lt('dragging out change', 'kéo dài thay đổi quá mức'),
      lt('imbalance through excess', 'mất cân bằng vì cực đoan'),
    ],
    themes: [
      lt('balance', 'cân bằng'),
      lt('integration', 'hòa nhập'),
      lt('healing', 'chữa lành'),
      lt('patience', 'kiên nhẫn'),
    ],
    contrastThemes: [
      lt('extremes', 'cực đoan'),
      lt('rush', 'vội vàng'),
      lt('disharmony', 'bất hòa'),
    ],
    energy: 'balanced',
  },
  {
    id: 'major-devil',
    name: lt('The Devil', 'Quỷ Dữ'),
    index: 15,
    meaning: lt(
      'The Devil exposes attachment, temptation, and the bargains that keep you bound long after they stop serving your well-being.',
      'Quỷ Dữ phơi bày sự dính mắc, cám dỗ và những giao kèo trói buộc bạn rất lâu sau khi chúng đã không còn phục vụ cho sự an lành.',
    ),
    positiveAspects: [
      lt('clear-eyed honesty', 'sự thành thật tỉnh táo'),
      lt('naming the bind', 'gọi tên sự trói buộc'),
      lt('reclaiming agency', 'giành lại quyền chủ động'),
    ],
    negativeAspects: [
      lt('obsession', 'ám chấp'),
      lt('compulsion', 'sự cưỡng ép bên trong'),
      lt('staying chained to fear', 'tiếp tục bị xích bởi nỗi sợ'),
    ],
    themes: [
      lt('attachment', 'dính mắc'),
      lt('shadow desire', 'ham muốn bóng tối'),
      lt('bondage', 'ràng buộc'),
      lt('temptation', 'cám dỗ'),
    ],
    contrastThemes: [
      lt('liberation', 'giải phóng'),
      lt('sobriety', 'tỉnh táo'),
      lt('self-respect', 'tự trọng'),
    ],
    energy: 'active',
  },
  {
    id: 'major-tower',
    name: lt('The Tower', 'Tòa Tháp'),
    index: 16,
    meaning: lt(
      'The Tower breaks false stability so truth can surface quickly, even when that truth arrives through shock, disruption, or sudden release.',
      'Tòa Tháp phá vỡ sự ổn định giả tạo để sự thật trồi lên thật nhanh, kể cả khi nó đến qua cú sốc, đứt gãy hay một sự giải phóng đột ngột.',
    ),
    positiveAspects: [
      lt('necessary breakthrough', 'đột phá cần thiết'),
      lt('truth revealed fast', 'sự thật hiện ra nhanh'),
      lt('liberation from false structures', 'thoát khỏi cấu trúc giả'),
    ],
    negativeAspects: [
      lt('avoidable collapse', 'sụp đổ có thể tránh'),
      lt('chaos', 'hỗn loạn'),
      lt('burnout from resistance', 'kiệt sức vì chống cự'),
    ],
    themes: [
      lt('upheaval', 'biến động'),
      lt('revelation', 'phơi lộ'),
      lt('collapse', 'sụp đổ'),
      lt('liberation', 'giải phóng'),
    ],
    contrastThemes: [
      lt('denial', 'phủ nhận'),
      lt('fragile stability', 'ổn định mong manh'),
      lt('false certainty', 'sự chắc chắn giả'),
    ],
    energy: 'active',
  },
  {
    id: 'major-star',
    name: lt('The Star', 'Ngôi Sao'),
    index: 17,
    meaning: lt(
      'The Star renews hope after difficulty and points toward healing, honest vulnerability, and faith in a path that is slowly clarifying.',
      'Ngôi Sao làm mới hy vọng sau khó khăn và hướng về chữa lành, sự dễ tổn thương chân thành cùng niềm tin vào con đường đang dần sáng tỏ.',
    ),
    positiveAspects: [
      lt('renewed hope', 'hy vọng được làm mới'),
      lt('gentle healing', 'chữa lành dịu dàng'),
      lt('spiritual clarity', 'sáng rõ tinh thần'),
    ],
    negativeAspects: [
      lt('wishful passivity', 'thụ động chỉ biết mong'),
      lt('naive optimism', 'lạc quan ngây thơ'),
      lt('avoiding practical steps', 'né tránh bước đi thực tế'),
    ],
    themes: [
      lt('hope', 'hy vọng'),
      lt('healing', 'chữa lành'),
      lt('clarity', 'sáng tỏ'),
      lt('faith', 'niềm tin'),
    ],
    contrastThemes: [
      lt('cynicism', 'hoài nghi cay đắng'),
      lt('despair', 'tuyệt vọng'),
      lt('disillusionment', 'vỡ mộng'),
    ],
    energy: 'reflective',
  },
  {
    id: 'major-moon',
    name: lt('The Moon', 'Mặt Trăng'),
    index: 18,
    meaning: lt(
      'The Moon moves through dream, ambiguity, and intuition, reminding you that not every truth is visible yet and some must be felt before they are named.',
      'Mặt Trăng đi qua mộng, mơ hồ và trực giác, nhắc bạn rằng không phải mọi sự thật đều đã hiện hình và có thứ cần được cảm trước khi được gọi tên.',
    ),
    positiveAspects: [
      lt('rich intuition', 'trực giác phong phú'),
      lt('imaginative depth', 'chiều sâu tưởng tượng'),
      lt('respect for the unknown', 'tôn trọng điều chưa biết'),
    ],
    negativeAspects: [
      lt('confusion', 'mơ hồ'),
      lt('projection', 'phóng chiếu'),
      lt('fear fed by uncertainty', 'nỗi sợ được nuôi bằng bất định'),
    ],
    themes: [
      lt('mystery', 'bí ẩn'),
      lt('emotion', 'cảm xúc'),
      lt('dreams', 'giấc mơ'),
      lt('uncertainty', 'bất định'),
    ],
    contrastThemes: [
      lt('clarity', 'sáng rõ'),
      lt('denial of feeling', 'chối bỏ cảm xúc'),
      lt('false stories', 'câu chuyện sai lệch'),
    ],
    energy: 'reflective',
  },
  {
    id: 'major-sun',
    name: lt('The Sun', 'Mặt Trời'),
    index: 19,
    meaning: lt(
      'The Sun radiates confidence, visibility, and wholehearted joy, making it easier to see what is thriving and what deserves celebration.',
      'Mặt Trời tỏa ra sự tự tin, tính hiển lộ và niềm vui trọn vẹn, khiến bạn dễ nhìn thấy điều gì đang nở rộ và điều gì xứng đáng được ăn mừng.',
    ),
    positiveAspects: [
      lt('warm confidence', 'sự tự tin ấm áp'),
      lt('clear vitality', 'sức sống sáng rõ'),
      lt('shared joy', 'niềm vui được chia sẻ'),
    ],
    negativeAspects: [
      lt('ego glare', 'cái tôi chói gắt'),
      lt('burnout through overexposure', 'kiệt sức vì phơi mình quá mức'),
      lt('performative positivity', 'sự tích cực mang tính trình diễn'),
    ],
    themes: [
      lt('success', 'thành công'),
      lt('joy', 'niềm vui'),
      lt('clarity', 'sáng rõ'),
      lt('visibility', 'sự hiển lộ'),
    ],
    contrastThemes: [
      lt('shame', 'xấu hổ'),
      lt('gloom', 'u ám'),
      lt('hidden truth', 'sự thật bị che giấu'),
    ],
    energy: 'active',
  },
  {
    id: 'major-judgement',
    name: lt('Judgement', 'Phán Xét'),
    index: 20,
    meaning: lt(
      'Judgement is a wake-up call that gathers the past into a larger truth so you can answer life with honesty, accountability, and renewal.',
      'Phán Xét là tiếng gọi thức tỉnh gom quá khứ vào một sự thật lớn hơn để bạn đáp lại cuộc đời bằng sự thành thật, trách nhiệm và tái sinh.',
    ),
    positiveAspects: [
      lt('clear calling', 'tiếng gọi rõ ràng'),
      lt('earned renewal', 'sự làm mới xứng đáng'),
      lt('honest self-review', 'tự nhìn lại một cách trung thực'),
    ],
    negativeAspects: [
      lt('self-condemnation', 'tự kết án'),
      lt('dodging accountability', 'né tránh trách nhiệm'),
      lt('living in old stories', 'sống mãi trong câu chuyện cũ'),
    ],
    themes: [
      lt('awakening', 'thức tỉnh'),
      lt('review', 'soi xét'),
      lt('calling', 'tiếng gọi'),
      lt('rebirth', 'tái sinh'),
    ],
    contrastThemes: [
      lt('avoidance', 'né tránh'),
      lt('denial', 'phủ nhận'),
      lt('repeating the past', 'lặp lại quá khứ'),
    ],
    energy: 'balanced',
  },
  {
    id: 'major-world',
    name: lt('The World', 'Thế Giới'),
    index: 21,
    meaning: lt(
      'The World signals completion, integration, and the satisfaction that comes from fully inhabiting what a long journey has taught you.',
      'Thế Giới báo hiệu sự hoàn tất, hợp nhất và cảm giác mãn nguyện khi bạn thật sự sống trong điều mà một hành trình dài đã dạy mình.',
    ),
    positiveAspects: [
      lt('true completion', 'sự hoàn tất thật sự'),
      lt('embodied wisdom', 'trí tuệ đã thành thân thể'),
      lt('earned wholeness', 'tính toàn vẹn đã được vun bồi'),
    ],
    negativeAspects: [
      lt('fear of the next chapter', 'sợ chương tiếp theo'),
      lt('unfinished closure', 'khép lại chưa trọn'),
      lt('resting too long at the finish line', 'nghỉ quá lâu ở vạch đích'),
    ],
    themes: [
      lt('completion', 'hoàn tất'),
      lt('integration', 'hợp nhất'),
      lt('wholeness', 'toàn vẹn'),
      lt('mastery', 'thành thạo'),
    ],
    contrastThemes: [
      lt('fragmentation', 'phân mảnh'),
      lt('avoidance of closure', 'né tránh khép lại'),
      lt('incompletion', 'chưa hoàn thành'),
    ],
    energy: 'balanced',
  },
];

const suitDefinitions: Record<MinorCategory, SuitDefinition> = {
  wands: {
    category: 'wands',
    label: lt('Wands', 'Gậy'),
    imagePrefix: 'Wands',
    element: 'fire',
    essence: lt('creative momentum and brave action', 'động lực sáng tạo và hành động dũng cảm'),
    invitation: lt(
      'act before doubt burns away your spark',
      'hành động trước khi nghi ngờ dập tắt tia lửa của bạn',
    ),
    gift: lt('courage', 'dũng khí'),
    challenge: lt('impulsive overreach', 'bốc đồng quá trớn'),
    themes: [
      lt('initiative', 'khởi xướng'),
      lt('drive', 'động lực'),
      lt('vision', 'tầm nhìn'),
      lt('willpower', 'ý chí'),
    ],
    contrastThemes: [
      lt('hesitation', 'do dự'),
      lt('burnout', 'kiệt sức'),
      lt('reactivity', 'phản ứng thái quá'),
    ],
  },
  cups: {
    category: 'cups',
    label: lt('Cups', 'Cốc'),
    imagePrefix: 'Cups',
    element: 'water',
    essence: lt('emotional truth and meaningful connection', 'sự thật cảm xúc và kết nối có ý nghĩa'),
    invitation: lt(
      'listen to what the heart is honestly asking for',
      'lắng nghe điều trái tim thật sự đang gọi tên',
    ),
    gift: lt('empathy', 'đồng cảm'),
    challenge: lt('emotional flooding', 'tràn ngập cảm xúc'),
    themes: [
      lt('feeling', 'cảm xúc'),
      lt('intuition', 'trực giác'),
      lt('bonding', 'gắn kết'),
      lt('receptivity', 'đón nhận'),
    ],
    contrastThemes: [
      lt('detachment', 'tách rời'),
      lt('avoidance', 'né tránh'),
      lt('sentimentality', 'ủy mị'),
    ],
  },
  swords: {
    category: 'swords',
    label: lt('Swords', 'Kiếm'),
    imagePrefix: 'Swords',
    element: 'air',
    essence: lt('clarity, language, and decisive thinking', 'sự sáng rõ, ngôn ngữ và tư duy quyết đoán'),
    invitation: lt(
      'name the truth clearly enough to work with it',
      'gọi tên sự thật đủ rõ để có thể làm việc với nó',
    ),
    gift: lt('discernment', 'khả năng phân định'),
    challenge: lt('mental strain', 'căng thẳng tinh thần'),
    themes: [
      lt('clarity', 'sáng rõ'),
      lt('strategy', 'chiến lược'),
      lt('truth', 'sự thật'),
      lt('boundaries', 'ranh giới'),
    ],
    contrastThemes: [
      lt('confusion', 'mơ hồ'),
      lt('rigidity', 'cứng nhắc'),
      lt('conflict', 'xung đột'),
    ],
  },
  pentacles: {
    category: 'pentacles',
    label: lt('Pentacles', 'Tiền'),
    imagePrefix: 'Pentacles',
    element: 'earth',
    essence: lt('material stewardship and embodied progress', 'sự quản trị vật chất và tiến triển hữu hình'),
    invitation: lt(
      'tend what is tangible so growth can last',
      'chăm phần hữu hình để tăng trưởng có thể bền lâu',
    ),
    gift: lt('stability', 'sự ổn định'),
    challenge: lt('stagnation', 'trì trệ'),
    themes: [
      lt('resources', 'nguồn lực'),
      lt('craft', 'tay nghề'),
      lt('security', 'an toàn'),
      lt('growth', 'tăng trưởng'),
    ],
    contrastThemes: [
      lt('scarcity', 'thiếu hụt'),
      lt('overcontrol', 'kiểm soát quá mức'),
      lt('inertia', 'ì trệ'),
    ],
  },
};

const pipRankDefinitions: readonly RankDefinition[] = [
  {
    order: 1,
    slug: 'ace',
    label: lt('Ace', 'Át'),
    core: lt('a fresh opening that wants to be welcomed', 'một khởi mở mới đang chờ được đón nhận'),
    invitation: lt(
      'notice the doorway and take the first honest step',
      'nhìn thấy cánh cửa và bước đi chân thật đầu tiên',
    ),
    gift: lt('seed-level possibility', 'khả năng ở mức hạt giống'),
    shadow: lt('mistaking excitement for readiness', 'nhầm hứng khởi với sự sẵn sàng'),
    themes: [lt('beginnings', 'khởi đầu'), lt('potential', 'tiềm năng')],
    contrastThemes: [lt('delay', 'trì hoãn'), lt('missed openings', 'bỏ lỡ cơ hội')],
    energy: 'active',
  },
  {
    order: 2,
    slug: 'two',
    label: lt('Two', 'Hai'),
    core: lt('a balancing choice between two living options', 'một lựa chọn cân bằng giữa hai khả năng sống động'),
    invitation: lt(
      'pause long enough to choose with intention',
      'dừng lại đủ lâu để chọn bằng chủ ý',
    ),
    gift: lt('measured partnership', 'sự song hành có chừng mực'),
    shadow: lt('stalling between paths', 'kẹt giữa hai lối đi'),
    themes: [lt('choice', 'lựa chọn'), lt('balance', 'cân bằng')],
    contrastThemes: [lt('avoidance', 'né tránh'), lt('indecision', 'lưỡng lự')],
    energy: 'balanced',
  },
  {
    order: 3,
    slug: 'three',
    label: lt('Three', 'Ba'),
    core: lt(
      'growth that becomes visible through collaboration or expression',
      'sự phát triển trở nên hữu hình qua hợp tác hoặc biểu đạt',
    ),
    invitation: lt(
      'let the next stage involve exchange instead of isolation',
      'để giai đoạn tiếp theo có trao đổi thay vì cô lập',
    ),
    gift: lt('expansion through connection', 'mở rộng nhờ kết nối'),
    shadow: lt('scattered growth', 'tăng trưởng tản mát'),
    themes: [lt('expansion', 'mở rộng'), lt('collaboration', 'cộng tác')],
    contrastThemes: [lt('fragmentation', 'phân mảnh'), lt('overextension', 'vươn quá sức')],
    energy: 'active',
  },
  {
    order: 4,
    slug: 'four',
    label: lt('Four', 'Bốn'),
    core: lt(
      'stability built through rest, structure, or steady holding',
      'sự ổn định được xây qua nghỉ ngơi, cấu trúc hoặc giữ vững',
    ),
    invitation: lt(
      'secure the foundation before pushing ahead',
      'gia cố nền tảng trước khi tiến thêm',
    ),
    gift: lt('grounded stability', 'sự ổn định có nền'),
    shadow: lt('clinging to comfort', 'bám víu vùng an toàn'),
    themes: [lt('stability', 'ổn định'), lt('rest', 'nghỉ ngơi')],
    contrastThemes: [lt('rigidity', 'cứng nhắc'), lt('avoidance of change', 'tránh né thay đổi')],
    energy: 'reflective',
  },
  {
    order: 5,
    slug: 'five',
    label: lt('Five', 'Năm'),
    core: lt(
      'friction that exposes where adaptation is overdue',
      'ma sát làm lộ ra nơi việc thích nghi đã quá hạn',
    ),
    invitation: lt(
      'treat conflict as information instead of identity',
      'xem xung đột như thông tin thay vì danh tính',
    ),
    gift: lt('resilient adjustment', 'sự điều chỉnh dẻo dai'),
    shadow: lt('reacting from lack or defensiveness', 'phản ứng từ cảm giác thiếu hụt hoặc phòng vệ'),
    themes: [lt('conflict', 'xung đột'), lt('adaptation', 'thích nghi')],
    contrastThemes: [lt('defensiveness', 'phòng thủ'), lt('scarcity', 'thiếu hụt')],
    energy: 'active',
  },
  {
    order: 6,
    slug: 'six',
    label: lt('Six', 'Sáu'),
    core: lt(
      'movement toward repair, exchange, or a healthier rhythm',
      'sự dịch chuyển hướng về hàn gắn, trao đổi hoặc nhịp sống lành hơn',
    ),
    invitation: lt(
      'accept help or offer it in a balanced way',
      'đón nhận hoặc trao hỗ trợ theo cách cân bằng',
    ),
    gift: lt('restorative flow', 'dòng chảy phục hồi'),
    shadow: lt('keeping score too tightly', 'ghi sổ công nợ quá sát'),
    themes: [lt('repair', 'sửa chữa'), lt('exchange', 'trao đổi')],
    contrastThemes: [lt('imbalance', 'mất cân bằng'), lt('resentment', 'ấm ức')],
    energy: 'balanced',
  },
  {
    order: 7,
    slug: 'seven',
    label: lt('Seven', 'Bảy'),
    core: lt(
      'a test of conviction, patience, or strategic restraint',
      'một phép thử cho niềm tin, sự kiên nhẫn hoặc khả năng kiềm chế chiến lược',
    ),
    invitation: lt(
      'stand with what matters without becoming rigid',
      'đứng cùng điều quan trọng mà không hóa cứng nhắc',
    ),
    gift: lt('considered resolve', 'quyết tâm có cân nhắc'),
    shadow: lt('anxious overanalysis', 'phân tích quá mức vì lo âu'),
    themes: [lt('testing', 'thử thách'), lt('conviction', 'niềm tin vững')],
    contrastThemes: [lt('doubt', 'nghi ngờ'), lt('defensiveness', 'phòng thủ')],
    energy: 'balanced',
  },
  {
    order: 8,
    slug: 'eight',
    label: lt('Eight', 'Tám'),
    core: lt(
      'focused movement that gathers skill, pace, or commitment',
      'chuyển động có trọng tâm gom kỹ năng, nhịp và cam kết lại với nhau',
    ),
    invitation: lt(
      'lean into repetition and momentum with care',
      'nghiêng vào sự lặp lại và đà tiến một cách cẩn trọng',
    ),
    gift: lt('disciplined progress', 'tiến triển có kỷ luật'),
    shadow: lt('tunnel vision', 'tầm nhìn đường hầm'),
    themes: [lt('momentum', 'đà tiến'), lt('mastery', 'thuần thục')],
    contrastThemes: [lt('rush', 'vội vàng'), lt('stagnation', 'đình trệ')],
    energy: 'active',
  },
  {
    order: 9,
    slug: 'nine',
    label: lt('Nine', 'Chín'),
    core: lt(
      'mature fruition that reveals what has been cultivated so far',
      'trái chín trưởng thành cho thấy điều gì đã được vun bồi đến lúc này',
    ),
    invitation: lt(
      'honor the near-completion without disconnecting from support',
      'tôn trọng giai đoạn gần hoàn tất mà không tách rời khỏi hỗ trợ',
    ),
    gift: lt('earned confidence', 'sự tự tin có nền'),
    shadow: lt('protective isolation', 'cô lập để phòng vệ'),
    themes: [lt('fruition', 'đơm trái'), lt('self-possession', 'vững mình')],
    contrastThemes: [lt('anxiety', 'lo âu'), lt('overprotection', 'bảo vệ quá mức')],
    energy: 'reflective',
  },
  {
    order: 10,
    slug: 'ten',
    label: lt('Ten', 'Mười'),
    core: lt(
      'the end of a cycle where fullness, burden, and legacy coexist',
      'điểm cuối của một chu kỳ nơi sự đầy đặn, gánh nặng và di sản cùng tồn tại',
    ),
    invitation: lt(
      'finish cleanly and decide what is worth carrying forward',
      'khép lại gọn gàng và chọn điều đáng mang theo',
    ),
    gift: lt('completion with meaning', 'hoàn tất có ý nghĩa'),
    shadow: lt('overload', 'quá tải'),
    themes: [lt('completion', 'hoàn tất'), lt('legacy', 'di sản')],
    contrastThemes: [lt('exhaustion', 'kiệt quệ'), lt('clinging past the ending', 'bám víu sau điểm kết')],
    energy: 'balanced',
  },
];

const courtRankDefinitions: readonly RankDefinition[] = [
  {
    order: 11,
    slug: 'page',
    label: lt('Page', 'Tiểu Đồng'),
    core: lt(
      'a curious messenger learning by direct experience',
      'một sứ giả tò mò học bằng trải nghiệm trực tiếp',
    ),
    invitation: lt(
      'stay teachable and keep your hands on the material',
      'giữ khả năng học hỏi và chạm tay vào điều đang diễn ra',
    ),
    gift: lt('fresh perspective', 'góc nhìn mới'),
    shadow: lt('immaturity', 'non nớt'),
    themes: [lt('curiosity', 'tò mò'), lt('messages', 'thông điệp')],
    contrastThemes: [lt('carelessness', 'cẩu thả'), lt('naivety', 'ngây thơ')],
    energy: 'active',
  },
  {
    order: 12,
    slug: 'knight',
    label: lt('Knight', 'Kỵ Sĩ'),
    core: lt(
      'a committed pursuit that moves a value into visible action',
      'một cuộc theo đuổi dấn thân đưa giá trị thành hành động hữu hình',
    ),
    invitation: lt(
      'let motion serve purpose instead of adrenaline',
      'để chuyển động phục vụ mục đích thay vì cơn hưng phấn',
    ),
    gift: lt('decisive follow-through', 'theo đuổi dứt khoát'),
    shadow: lt('single-minded intensity', 'sự cực đoan một chiều'),
    themes: [lt('pursuit', 'theo đuổi'), lt('commitment', 'cam kết')],
    contrastThemes: [lt('recklessness', 'liều lĩnh'), lt('imbalance', 'mất cân bằng')],
    energy: 'active',
  },
  {
    order: 13,
    slug: 'queen',
    label: lt('Queen', 'Hoàng Hậu'),
    core: lt(
      'an embodied mastery that leads through presence and depth',
      'một sự thành thục nhập thân dẫn dắt bằng hiện diện và chiều sâu',
    ),
    invitation: lt(
      'trust the grounded authority already living in you',
      'tin vào thẩm quyền có nền đã sống sẵn trong bạn',
    ),
    gift: lt('mature receptivity', 'khả năng tiếp nhận trưởng thành'),
    shadow: lt('closed protectiveness', 'sự khép kín phòng vệ'),
    themes: [lt('embodiment', 'nhập thân'), lt('maturity', 'chín chắn')],
    contrastThemes: [lt('guardedness', 'co cụm'), lt('withholding', 'giữ lại')],
    energy: 'reflective',
  },
  {
    order: 14,
    slug: 'king',
    label: lt('King', 'Vua'),
    core: lt(
      'a stable authority that organizes resources in service of the whole',
      'một thẩm quyền ổn định tổ chức nguồn lực để phục vụ tổng thể',
    ),
    invitation: lt(
      'lead with responsibility rather than image',
      'dẫn dắt bằng trách nhiệm thay vì hình ảnh',
    ),
    gift: lt('steady stewardship', 'sự quản trị vững vàng'),
    shadow: lt('controlling certainty', 'sự chắc chắn mang tính kiểm soát'),
    themes: [lt('leadership', 'lãnh đạo'), lt('stewardship', 'quản trị')],
    contrastThemes: [lt('domination', 'thống trị'), lt('stubborn control', 'kiểm soát cố chấp')],
    energy: 'balanced',
  },
];

const minorRankDefinitions = [...pipRankDefinitions, ...courtRankDefinitions];

const imagePath = (fileName: string): string =>
  `${import.meta.env.BASE_URL}images/${fileName}`;

const toImageFileName = (suit: SuitDefinition, order: number): string =>
  `${suit.imagePrefix}${String(order).padStart(2, '0')}.jpg`;

const buildMinorMeaning = (
  suit: SuitDefinition,
  rank: RankDefinition,
): LocalizedText =>
  lt(
    `The ${rank.label.en} of ${suit.label.en} explores ${rank.core.en} through ${suit.essence.en}. It asks you to ${rank.invitation.en} while remembering that ${suit.invitation.en}.`,
    `${rank.label.vi} ${suit.label.vi} nói về ${rank.core.vi} qua ${suit.essence.vi}. Lá bài này mời bạn ${rank.invitation.vi}, đồng thời nhớ rằng ${suit.invitation.vi}.`,
  );

const buildMinorPositiveAspects = (
  suit: SuitDefinition,
  rank: RankDefinition,
): LocalizedText[] => [
  lt(
    `${rank.gift.en} guided by ${suit.gift.en}`,
    `${rank.gift.vi} được dẫn dắt bởi ${suit.gift.vi}`,
  ),
  lt(
    `${suit.label.en} wisdom expressed with intention`,
    `trí tuệ của ${suit.label.vi} được biểu lộ có chủ đích`,
  ),
  lt(
    `${rank.label.en.toLowerCase()} energy that stays connected to purpose`,
    `năng lượng ${rank.label.vi.toLowerCase()} vẫn gắn với mục đích`,
  ),
];

const buildMinorNegativeAspects = (
  suit: SuitDefinition,
  rank: RankDefinition,
): LocalizedText[] => [
  lt(
    `${rank.shadow.en} slipping into ${suit.challenge.en}`,
    `${rank.shadow.vi} trượt vào ${suit.challenge.vi}`,
  ),
  lt(
    `${suit.label.en} energy without enough grounding`,
    `năng lượng ${suit.label.vi} thiếu điểm tựa`,
  ),
  lt(
    'forcing movement when this card is asking for conscious pacing',
    'ép chuyển động trong khi lá bài này đòi hỏi một nhịp đi có ý thức',
  ),
];

const buildMinorThemes = (
  suit: SuitDefinition,
  rank: RankDefinition,
): LocalizedText[] => [...rank.themes, ...suit.themes];

const buildMinorContrastThemes = (
  suit: SuitDefinition,
  rank: RankDefinition,
): LocalizedText[] => [...rank.contrastThemes, ...suit.contrastThemes];

const majorArcanaCards: TarotCard[] = majorSeeds.map((card) => ({
  id: card.id,
  name: card.name,
  shortLabel: card.name,
  arcana: 'major',
  category: 'major',
  index: card.index,
  rankLabel: lt(String(card.index), String(card.index)),
  image: imagePath(majorImageNames[card.index]),
  meaning: card.meaning,
  positiveAspects: card.positiveAspects,
  negativeAspects: card.negativeAspects,
  themes: card.themes,
  contrastThemes: card.contrastThemes,
  element: 'spirit',
  energy: card.energy,
}));

const minorArcanaCards: TarotCard[] = Object.values(suitDefinitions).flatMap(
  (suit) =>
    minorRankDefinitions.map((rank) => ({
      id: `${suit.category}-${rank.slug}`,
      name: lt(
        `${rank.label.en} of ${suit.label.en}`,
        `${rank.label.vi} ${suit.label.vi}`,
      ),
      shortLabel: lt(
        `${rank.label.en} of ${suit.label.en}`,
        `${rank.label.vi} ${suit.label.vi}`,
      ),
      arcana: 'minor',
      category: suit.category,
      index: rank.order,
      rankLabel: rank.label,
      image: imagePath(toImageFileName(suit, rank.order)),
      meaning: buildMinorMeaning(suit, rank),
      positiveAspects: buildMinorPositiveAspects(suit, rank),
      negativeAspects: buildMinorNegativeAspects(suit, rank),
      themes: buildMinorThemes(suit, rank),
      contrastThemes: buildMinorContrastThemes(suit, rank),
      element: suit.element,
      energy: rank.energy,
    })),
);

export const tarotCards: readonly TarotCard[] = [
  ...majorArcanaCards,
  ...minorArcanaCards,
];
