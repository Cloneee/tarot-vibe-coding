import type { Locale } from '../types/i18n.types';
import type { CardCategoryFilter, TarotCategory } from '../types/tarot.types';

export interface TranslationValues {
  [key: string]: string | number;
}

interface TranslationDictionary {
  'language.switchLabel': string;
  'language.english': string;
  'language.vietnamese': string;
  'app.heroEyebrow': string;
  'app.heroTitle': string;
  'app.heroDescription': string;
  'app.cardsAvailable': string;
  'app.focusedCategory': string;
  'app.visibleCards': string;
  'app.selectedCards': string;
  'app.deckBrowserEyebrow': string;
  'app.deckBrowserTitle': string;
  'app.deckBrowserDescription': string;
  'filters.searchLabel': string;
  'filters.searchPlaceholder': string;
  'filters.reset': string;
  'selection.eyebrow': string;
  'selection.noneTitle': string;
  'selection.singleTitle': string;
  'selection.multipleTitle': string;
  'selection.clear': string;
  'selection.emptyDescription': string;
  'selection.remove': string;
  'analysis.eyebrow': string;
  'analysis.title': string;
  'analysis.descriptionReady': string;
  'analysis.descriptionEmpty': string;
  'analysis.similarities': string;
  'analysis.opposites': string;
  'analysis.positiveAspects': string;
  'analysis.negativeAspects': string;
  'analysis.emptySimilarities': string;
  'analysis.emptyOpposites': string;
  'analysis.emptyPositiveAspects': string;
  'analysis.emptyNegativeAspects': string;
  'analysis.majorArcanaShared': string;
  'analysis.repeatedCategory': string;
  'analysis.sharedTheme': string;
  'analysis.themeClash': string;
  'analysis.elementTension': string;
  'analysis.energyTension': string;
  'analysis.mutualStrength': string;
  'analysis.repeatedCaution': string;
  'card.select': string;
  'card.selected': string;
  'card.addToComparison': string;
  'card.removeFromComparison': string;
  'card.close': string;
  'card.coreThemes': string;
  'card.positiveAspects': string;
  'card.negativeAspects': string;
  'card.majorArcana': string;
  'grid.empty': string;
  'category.all': string;
  'category.major': string;
  'category.wands': string;
  'category.cups': string;
  'category.swords': string;
  'category.pentacles': string;
}

const enMessages: TranslationDictionary = {
  'language.switchLabel': 'Language',
  'language.english': 'English',
  'language.vietnamese': 'Vietnamese',
  'app.heroEyebrow': 'Tarot Card Meanings List',
  'app.heroTitle': 'Minimal tarot browsing with instant card comparison',
  'app.heroDescription':
    'Open any card with a single click to read its full meaning, then build a multi-card reading that compares similarities, opposites, positive aspects, and negative aspects across the selected spread.',
  'app.cardsAvailable': '{count} cards available',
  'app.focusedCategory': 'Focused category',
  'app.visibleCards': 'Visible cards',
  'app.selectedCards': 'Selected cards',
  'app.deckBrowserEyebrow': 'Deck browser',
  'app.deckBrowserTitle': 'Explore the full deck',
  'app.deckBrowserDescription':
    'Each card keeps its own mocked meaning and relationship metadata on the frontend today, while the service layer stays ready to swap to a real API later.',
  'filters.searchLabel': 'Search by card name or theme',
  'filters.searchPlaceholder': 'The Star, clarity, healing...',
  'filters.reset': 'Reset filters',
  'selection.eyebrow': 'Comparison tray',
  'selection.noneTitle': 'No cards selected yet',
  'selection.singleTitle': '1 card selected',
  'selection.multipleTitle': '{count} cards selected',
  'selection.clear': 'Clear selection',
  'selection.emptyDescription':
    'Use the “Select for comparison” button on any card to build a reading that compares themes, strengths, and tension points across multiple cards.',
  'selection.remove': 'Remove',
  'analysis.eyebrow': 'Comparative reading',
  'analysis.title': 'Relationship analysis',
  'analysis.descriptionReady':
    'The analysis below compares shared currents, meaningful contrasts, and the positive or difficult patterns that emerge when the selected cards are read together.',
  'analysis.descriptionEmpty':
    'Select at least two cards to unlock similarities, opposites, and the balance of positive and negative aspects between them.',
  'analysis.similarities': 'Similarities',
  'analysis.opposites': 'Opposites',
  'analysis.positiveAspects': 'Positive aspects',
  'analysis.negativeAspects': 'Negative aspects',
  'analysis.emptySimilarities':
    'Choose two or more cards to see the common thread they share.',
  'analysis.emptyOpposites':
    'When contrast appears, it will surface here as elemental, energetic, or thematic tension.',
  'analysis.emptyPositiveAspects':
    'Repeated strengths appear here once multiple cards reinforce the same supportive quality.',
  'analysis.emptyNegativeAspects':
    'Repeated cautions appear here once more than one card points to the same challenge.',
  'analysis.majorArcanaShared':
    'Multiple major arcana cards suggest this reading points to a bigger life chapter rather than a passing mood.',
  'analysis.repeatedCategory':
    'A repeated {category} current strengthens the spread around that family of lessons.',
  'analysis.sharedTheme': 'A shared thread of {theme} runs through the selected cards.',
  'analysis.themeClash':
    '{left} emphasizes {theme} while {right} pushes against that rhythm.',
  'analysis.elementTension':
    '{left} and {right} pull in opposite elemental directions, balancing instinct with a very different pace of response.',
  'analysis.energyTension':
    '{left} wants movement while {right} asks for reflection, so the reading benefits from pacing before action.',
  'analysis.mutualStrength':
    'A shared strength emerges around {aspect}.',
  'analysis.repeatedCaution':
    'A repeated caution appears around {aspect}.',
  'card.select': 'Select for comparison',
  'card.selected': 'Selected for comparison',
  'card.addToComparison': 'Add to comparison',
  'card.removeFromComparison': 'Remove from comparison',
  'card.close': 'Close',
  'card.coreThemes': 'Core themes',
  'card.positiveAspects': 'Positive aspects',
  'card.negativeAspects': 'Negative aspects',
  'card.majorArcana': 'Major Arcana',
  'grid.empty': 'No cards match the current search and category filters.',
  'category.all': 'All cards',
  'category.major': 'Major Arcana',
  'category.wands': 'Wands',
  'category.cups': 'Cups',
  'category.swords': 'Swords',
  'category.pentacles': 'Pentacles',
};

const viMessages: TranslationDictionary = {
  'language.switchLabel': 'Ngôn ngữ',
  'language.english': 'Tiếng Anh',
  'language.vietnamese': 'Tiếng Việt',
  'app.heroEyebrow': 'Danh sách ý nghĩa bài Tarot',
  'app.heroTitle': 'Duyệt tarot tối giản với so sánh lá bài tức thì',
  'app.heroDescription':
    'Chạm vào bất kỳ lá bài nào để xem ý nghĩa đầy đủ, sau đó tạo một trải bài nhiều lá để so sánh điểm tương đồng, đối lập, mặt tích cực và mặt tiêu cực giữa các lá đã chọn.',
  'app.cardsAvailable': '{count} lá bài',
  'app.focusedCategory': 'Nhóm đang xem',
  'app.visibleCards': 'Số lá đang hiển thị',
  'app.selectedCards': 'Số lá đã chọn',
  'app.deckBrowserEyebrow': 'Duyệt bộ bài',
  'app.deckBrowserTitle': 'Khám phá toàn bộ bộ bài',
  'app.deckBrowserDescription':
    'Hiện tại mỗi lá bài giữ dữ liệu mô phỏng và metadata quan hệ ngay trên frontend, trong khi lớp service vẫn sẵn sàng để thay bằng API thật sau này.',
  'filters.searchLabel': 'Tìm theo tên lá bài hoặc chủ đề',
  'filters.searchPlaceholder': 'Ngôi Sao, chữa lành, sáng tỏ...',
  'filters.reset': 'Đặt lại bộ lọc',
  'selection.eyebrow': 'Khay so sánh',
  'selection.noneTitle': 'Chưa có lá bài nào được chọn',
  'selection.singleTitle': 'Đã chọn 1 lá bài',
  'selection.multipleTitle': 'Đã chọn {count} lá bài',
  'selection.clear': 'Xóa lựa chọn',
  'selection.emptyDescription':
    'Dùng nút “Chọn để so sánh” trên bất kỳ lá bài nào để tạo một trải bài so sánh chủ đề, thế mạnh và các điểm căng thẳng giữa nhiều lá.',
  'selection.remove': 'Gỡ',
  'analysis.eyebrow': 'Phân tích trải bài',
  'analysis.title': 'Phân tích mối quan hệ',
  'analysis.descriptionReady':
    'Phần dưới đây so sánh các dòng năng lượng chung, những đối lập đáng chú ý, cùng các mô thức tích cực hoặc thử thách khi đọc các lá bài cùng nhau.',
  'analysis.descriptionEmpty':
    'Hãy chọn ít nhất hai lá bài để mở khóa phần tương đồng, đối lập, cũng như sự cân bằng giữa mặt tích cực và tiêu cực của chúng.',
  'analysis.similarities': 'Điểm tương đồng',
  'analysis.opposites': 'Điểm đối lập',
  'analysis.positiveAspects': 'Mặt tích cực',
  'analysis.negativeAspects': 'Mặt tiêu cực',
  'analysis.emptySimilarities':
    'Chọn từ hai lá bài trở lên để thấy sợi chỉ đỏ mà chúng cùng chia sẻ.',
  'analysis.emptyOpposites':
    'Khi có sự tương phản, nó sẽ xuất hiện ở đây dưới dạng xung lực nguyên tố, nhịp năng lượng hoặc mâu thuẫn chủ đề.',
  'analysis.emptyPositiveAspects':
    'Những thế mạnh lặp lại sẽ xuất hiện ở đây khi nhiều lá cùng củng cố một phẩm chất hỗ trợ.',
  'analysis.emptyNegativeAspects':
    'Những cảnh báo lặp lại sẽ xuất hiện ở đây khi hơn một lá cùng chỉ về một thử thách.',
  'analysis.majorArcanaShared':
    'Nhiều lá Ẩn Chính cùng xuất hiện cho thấy trải bài này đang chạm vào một chặng đời lớn hơn là một cảm xúc thoáng qua.',
  'analysis.repeatedCategory':
    'Việc lặp lại nhóm {category} làm nổi bật mạch ý nghĩa chung của trải bài.',
  'analysis.sharedTheme':
    'Một chủ đề chung về {theme} đang chạy xuyên suốt các lá bài đã chọn.',
  'analysis.themeClash':
    '{left} nhấn mạnh {theme} trong khi {right} lại đi ngược nhịp đó.',
  'analysis.elementTension':
    '{left} và {right} kéo theo hai hướng nguyên tố đối nghịch, cân bằng bản năng bằng một nhịp phản hồi rất khác nhau.',
  'analysis.energyTension':
    '{left} muốn hành động còn {right} đòi hỏi chiêm nghiệm, vì vậy trải bài này cần nhịp chậm trước khi ra tay.',
  'analysis.mutualStrength':
    'Một thế mạnh chung nổi lên quanh phẩm chất {aspect}.',
  'analysis.repeatedCaution':
    'Một cảnh báo lặp lại xuất hiện quanh vấn đề {aspect}.',
  'card.select': 'Chọn để so sánh',
  'card.selected': 'Đã chọn để so sánh',
  'card.addToComparison': 'Thêm vào so sánh',
  'card.removeFromComparison': 'Bỏ khỏi so sánh',
  'card.close': 'Đóng',
  'card.coreThemes': 'Chủ đề cốt lõi',
  'card.positiveAspects': 'Mặt tích cực',
  'card.negativeAspects': 'Mặt tiêu cực',
  'card.majorArcana': 'Ẩn Chính',
  'grid.empty': 'Không có lá bài nào khớp với tìm kiếm và bộ lọc hiện tại.',
  'category.all': 'Tất cả lá bài',
  'category.major': 'Ẩn Chính',
  'category.wands': 'Gậy',
  'category.cups': 'Cốc',
  'category.swords': 'Kiếm',
  'category.pentacles': 'Tiền',
};

const messages = {
  en: enMessages,
  vi: viMessages,
} as const;

export type TranslationKey = keyof TranslationDictionary;

const categoryKeys: Record<CardCategoryFilter, TranslationKey> = {
  all: 'category.all',
  major: 'category.major',
  wands: 'category.wands',
  cups: 'category.cups',
  swords: 'category.swords',
  pentacles: 'category.pentacles',
};

const interpolate = (
  template: string,
  values?: TranslationValues,
): string => {
  if (!values) {
    return template;
  }

  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    key in values ? String(values[key]) : `{${key}}`,
  );
};

export const translate = (
  locale: Locale,
  key: TranslationKey,
  values?: TranslationValues,
): string => interpolate(messages[locale][key], values);

export const getCategoryLabel = (
  locale: Locale,
  category: TarotCategory,
): string => translate(locale, categoryKeys[category]);

export const getCategoryOptions = (
  locale: Locale,
): ReadonlyArray<{ value: CardCategoryFilter; label: string }> =>
  (Object.keys(categoryKeys) as CardCategoryFilter[]).map((value) => ({
    value,
    label: translate(locale, categoryKeys[value]),
  }));
