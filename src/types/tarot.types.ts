import type { LocalizedText } from './i18n.types';

export type ArcanaType = 'major' | 'minor';

export type TarotCategory = 'major' | 'wands' | 'cups' | 'swords' | 'pentacles';

export type CardCategoryFilter = 'all' | TarotCategory;

export type TarotElement = 'spirit' | 'fire' | 'water' | 'air' | 'earth';

export type TarotEnergy = 'active' | 'reflective' | 'balanced';

export interface TarotCard {
  id: string;
  name: LocalizedText;
  shortLabel: LocalizedText;
  arcana: ArcanaType;
  category: TarotCategory;
  index: number;
  rankLabel: LocalizedText;
  image: string;
  meaning: LocalizedText;
  positiveAspects: readonly LocalizedText[];
  negativeAspects: readonly LocalizedText[];
  themes: readonly LocalizedText[];
  contrastThemes: readonly LocalizedText[];
  element: TarotElement;
  energy: TarotEnergy;
}
