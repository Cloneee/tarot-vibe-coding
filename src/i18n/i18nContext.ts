import { createContext } from 'react';
import type { Locale, LocalizedText } from '../types/i18n.types';
import type { TarotCategory } from '../types/tarot.types';
import type { TranslationKey, TranslationValues } from './messages';

export interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey, values?: TranslationValues) => string;
  getCategoryLabel: (category: TarotCategory) => string;
  getCategoryOptions: () => ReadonlyArray<{ value: 'all' | TarotCategory; label: string }>;
  localizeText: (value: LocalizedText) => string;
  localizeTextList: (values: readonly LocalizedText[]) => string[];
}

export const I18nContext = createContext<I18nContextValue | null>(null);
