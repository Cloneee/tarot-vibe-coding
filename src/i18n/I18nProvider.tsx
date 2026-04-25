import { useEffect, useMemo, type PropsWithChildren } from 'react';
import { localizeText, localizeTextList } from './localization';
import { getCategoryLabel, getCategoryOptions, translate } from './messages';
import { I18nContext, type I18nContextValue } from './i18nContext';
import type { Locale } from '../types/i18n.types';

interface I18nProviderProps extends PropsWithChildren {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export function I18nProvider({
  children,
  locale,
  setLocale,
}: I18nProviderProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key, values) => translate(locale, key, values),
      getCategoryLabel: (category) => getCategoryLabel(locale, category),
      getCategoryOptions: () => getCategoryOptions(locale),
      localizeText: (value) => localizeText(value, locale),
      localizeTextList: (values) => localizeTextList(values, locale),
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
