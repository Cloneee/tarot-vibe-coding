export const supportedLocales = ['en', 'vi'] as const;

export type Locale = (typeof supportedLocales)[number];

export interface LocalizedText {
  en: string;
  vi: string;
}
