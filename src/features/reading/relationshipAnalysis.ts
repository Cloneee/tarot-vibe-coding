import type { CardRelationshipAnalysis } from '../../types/analysis.types';
import { localizeText, localizeTextList } from '../../i18n/localization';
import { getCategoryLabel, translate } from '../../i18n/messages';
import type { Locale } from '../../types/i18n.types';
import type { TarotCard, TarotElement, TarotEnergy } from '../../types/tarot.types';

const opposingElements: Partial<Record<TarotElement, TarotElement>> = {
  fire: 'water',
  water: 'fire',
  air: 'earth',
  earth: 'air',
};

const opposingEnergies: Partial<Record<TarotEnergy, TarotEnergy>> = {
  active: 'reflective',
  reflective: 'active',
};

const collectRepeatedEntries = <T extends string>(
  values: readonly T[],
  minimumMatches: number,
  limit: number,
): T[] => {
  const counts = new Map<T, number>();

  values.forEach((value) => {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  });

  return [...counts.entries()]
    .filter(([, count]) => count >= minimumMatches)
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
    .slice(0, limit)
    .map(([value]) => value);
};

const buildPairKey = (left: string, right: string): string =>
  [left, right].sort().join('::');

const collectThemeClashes = (cards: readonly TarotCard[], locale: Locale): string[] => {
  const clashes = new Set<string>();

  cards.forEach((card, index) => {
    cards.slice(index + 1).forEach((otherCard) => {
      const localizedThemes = localizeTextList(card.themes, locale);
      const localizedOtherThemes = localizeTextList(otherCard.themes, locale);
      const localizedContrasts = localizeTextList(card.contrastThemes, locale);
      const localizedOtherContrasts = localizeTextList(otherCard.contrastThemes, locale);
      const forwardClash = localizedThemes.find((theme) =>
        localizedOtherContrasts.includes(theme),
      );
      const reverseClash = localizedOtherThemes.find((theme) =>
        localizedContrasts.includes(theme),
      );

      if (forwardClash) {
        clashes.add(
          buildPairKey(card.id, otherCard.id) +
            `|${translate(locale, 'analysis.themeClash', {
              left: localizeText(card.name, locale),
              theme: forwardClash,
              right: localizeText(otherCard.name, locale),
            })}`,
        );
      }

      if (reverseClash) {
        clashes.add(
          buildPairKey(card.id, otherCard.id) +
            `|${translate(locale, 'analysis.themeClash', {
              left: localizeText(otherCard.name, locale),
              theme: reverseClash,
              right: localizeText(card.name, locale),
            })}`,
        );
      }
    });
  });

  return [...clashes].map((entry) => entry.split('|')[1]);
};

const collectElementTensions = (cards: readonly TarotCard[], locale: Locale): string[] => {
  const tensions = new Set<string>();

  cards.forEach((card, index) => {
    cards.slice(index + 1).forEach((otherCard) => {
      if (opposingElements[card.element] === otherCard.element) {
        tensions.add(
          translate(locale, 'analysis.elementTension', {
            left: localizeText(card.name, locale),
            right: localizeText(otherCard.name, locale),
          }),
        );
      }
    });
  });

  return [...tensions];
};

const collectEnergyTensions = (cards: readonly TarotCard[], locale: Locale): string[] => {
  const tensions = new Set<string>();

  cards.forEach((card, index) => {
    cards.slice(index + 1).forEach((otherCard) => {
      if (opposingEnergies[card.energy] === otherCard.energy) {
        tensions.add(
          translate(locale, 'analysis.energyTension', {
            left: localizeText(card.name, locale),
            right: localizeText(otherCard.name, locale),
          }),
        );
      }
    });
  });

  return [...tensions];
};

const createSimilarityMessages = (
  cards: readonly TarotCard[],
  locale: Locale,
): string[] => {
  const messages: string[] = [];
  const sharedThemes = collectRepeatedEntries(
    cards.flatMap((card) => localizeTextList(card.themes, locale)),
    2,
    4,
  );
  const sharedCategories = collectRepeatedEntries(
    cards.map((card) => card.category),
    2,
    2,
  );

  if (cards.every((card) => card.arcana === 'major')) {
    messages.push(translate(locale, 'analysis.majorArcanaShared'));
  }

  sharedCategories.forEach((category) => {
    messages.push(
      translate(locale, 'analysis.repeatedCategory', {
        category: getCategoryLabel(locale, category),
      }),
    );
  });

  sharedThemes.forEach((theme) => {
    messages.push(translate(locale, 'analysis.sharedTheme', { theme }));
  });

  return messages;
};

const createPositiveMessages = (
  cards: readonly TarotCard[],
  locale: Locale,
): string[] => {
  const repeatedPositives = collectRepeatedEntries(
    cards.flatMap((card) => localizeTextList(card.positiveAspects, locale)),
    2,
    5,
  );

  return repeatedPositives.map((aspect) =>
    translate(locale, 'analysis.mutualStrength', { aspect }),
  );
};

const createNegativeMessages = (
  cards: readonly TarotCard[],
  locale: Locale,
): string[] => {
  const repeatedNegatives = collectRepeatedEntries(
    cards.flatMap((card) => localizeTextList(card.negativeAspects, locale)),
    2,
    5,
  );

  return repeatedNegatives.map((aspect) =>
    translate(locale, 'analysis.repeatedCaution', { aspect }),
  );
};

export const buildRelationshipAnalysis = (
  cards: readonly TarotCard[],
  locale: Locale,
): CardRelationshipAnalysis => {
  if (cards.length < 2) {
    return {
      similarities: [],
      opposites: [],
      positiveAspects: [],
      negativeAspects: [],
    };
  }

  /*
   * The comparison model stays intentionally deterministic and API-ready:
   * 1. similarities come from repeated categories and shared theme tags
   * 2. opposites are inferred from element/energy clashes and theme-vs-contrast matches
   * 3. positive and negative sections are built from repeated aspect phrases across cards
   *
   * Keeping the logic explicit like this makes it easy to swap the mock data for an API
   * later without rewriting the UI or changing how analysis sections are assembled.
   */
  const similarities = createSimilarityMessages(cards, locale);
  const opposites = [
    ...collectThemeClashes(cards, locale),
    ...collectElementTensions(cards, locale),
    ...collectEnergyTensions(cards, locale),
  ].slice(0, 6);
  const positiveAspects = createPositiveMessages(cards, locale);
  const negativeAspects = createNegativeMessages(cards, locale);

  return {
    similarities,
    opposites,
    positiveAspects,
    negativeAspects,
  };
};
