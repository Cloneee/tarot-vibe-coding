import type { Locale } from './i18n.types';
import type { CardCategoryFilter } from './tarot.types';

export interface PersistedTarotPreferences {
  selectedCardIds: string[];
  activeCategory: CardCategoryFilter;
  searchTerm: string;
  locale: Locale;
}
