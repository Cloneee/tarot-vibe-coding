import type { Locale } from '../types/i18n.types';
import type { PersistedTarotPreferences } from '../types/storage.types';
import type { CardCategoryFilter } from '../types/tarot.types';

const STORAGE_KEY = 'tarot-vibe-code.preferences';

const defaultPreferences: PersistedTarotPreferences = {
  selectedCardIds: [],
  activeCategory: 'all',
  searchTerm: '',
  locale: 'en',
};

const allowedCategories = new Set<CardCategoryFilter>([
  'all',
  'major',
  'wands',
  'cups',
  'swords',
  'pentacles',
]);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((entry) => typeof entry === 'string');

const isCategoryFilter = (value: unknown): value is CardCategoryFilter =>
  typeof value === 'string' && allowedCategories.has(value as CardCategoryFilter);

const isLocale = (value: unknown): value is Locale =>
  value === 'en' || value === 'vi';

export const loadPersistedPreferences = (): PersistedTarotPreferences => {
  const rawValue = window.localStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return defaultPreferences;
  }

  try {
    const parsedValue: unknown = JSON.parse(rawValue);

    if (!isRecord(parsedValue)) {
      throw new Error('Stored preferences are not an object.');
    }

    const selectedCardIds = isStringArray(parsedValue.selectedCardIds)
      ? parsedValue.selectedCardIds
      : defaultPreferences.selectedCardIds;
    const activeCategory = isCategoryFilter(parsedValue.activeCategory)
      ? parsedValue.activeCategory
      : defaultPreferences.activeCategory;
    const searchTerm =
      typeof parsedValue.searchTerm === 'string'
        ? parsedValue.searchTerm
        : defaultPreferences.searchTerm;
    const locale = isLocale(parsedValue.locale)
      ? parsedValue.locale
      : defaultPreferences.locale;

    return {
      selectedCardIds,
      activeCategory,
      searchTerm,
      locale,
    };
  } catch (error) {
    console.error('Unable to read persisted tarot preferences.', error);
    window.localStorage.removeItem(STORAGE_KEY);

    return defaultPreferences;
  }
};

export const savePersistedPreferences = (
  preferences: PersistedTarotPreferences,
): void => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.error('Unable to persist tarot preferences.', error);
  }
};
