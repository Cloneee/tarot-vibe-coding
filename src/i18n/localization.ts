import type { LocalizedText, Locale } from '../types/i18n.types';

export const localizeText = (
  value: LocalizedText,
  locale: Locale,
): string => value[locale];

export const localizeTextList = (
  values: readonly LocalizedText[],
  locale: Locale,
): string[] => values.map((value) => localizeText(value, locale));

export const buildLocalizedSearchValues = (
  value: LocalizedText,
): string[] => Object.values(value);

export const createLocalizedText = (
  en: string,
  vi: string,
): LocalizedText => ({
  en,
  vi,
});
