import { useEffect, useMemo, useState } from 'react';
import { LocaleSwitcher } from '../components/LocaleSwitcher';
import { SectionHeader } from '../components/SectionHeader';
import { CardDetailDialog } from '../features/cards/CardDetailDialog';
import { CardFilters } from '../features/cards/CardFilters';
import { CardGrid } from '../features/cards/CardGrid';
import { AnalysisPanel } from '../features/reading/AnalysisPanel';
import { SelectionSummary } from '../features/reading/SelectionSummary';
import { buildRelationshipAnalysis } from '../features/reading/relationshipAnalysis';
import { I18nProvider } from '../i18n/I18nProvider';
import { buildLocalizedSearchValues } from '../i18n/localization';
import { getCategoryLabel, translate } from '../i18n/messages';
import { tarotService } from '../services/tarotService';
import { loadPersistedPreferences, savePersistedPreferences } from '../utils/storage';
import type { Locale } from '../types/i18n.types';
import type { PersistedTarotPreferences } from '../types/storage.types';
import type { CardCategoryFilter, TarotCard } from '../types/tarot.types';

const defaultPreferences = loadPersistedPreferences();

const matchesSearch = (card: TarotCard, searchTerm: string): boolean => {
  const normalizedQuery = searchTerm.trim().toLowerCase();

  if (!normalizedQuery) {
    return true;
  }

  const searchableText = [
    ...buildLocalizedSearchValues(card.name),
    ...buildLocalizedSearchValues(card.shortLabel),
    ...buildLocalizedSearchValues(card.rankLabel),
    ...buildLocalizedSearchValues(card.meaning),
    ...card.themes.flatMap((theme) => buildLocalizedSearchValues(theme)),
    ...card.positiveAspects.flatMap((aspect) => buildLocalizedSearchValues(aspect)),
    ...card.negativeAspects.flatMap((aspect) => buildLocalizedSearchValues(aspect)),
  ]
    .join(' ')
    .toLowerCase();

  return searchableText.includes(normalizedQuery);
};

export default function App() {
  const [cards, setCards] = useState<readonly TarotCard[]>([]);
  const [selectedCardIds, setSelectedCardIds] = useState<string[]>(
    defaultPreferences.selectedCardIds,
  );
  const [activeCategory, setActiveCategory] = useState<CardCategoryFilter>(
    defaultPreferences.activeCategory,
  );
  const [searchTerm, setSearchTerm] = useState<string>(defaultPreferences.searchTerm);
  const [locale, setLocale] = useState<Locale>(defaultPreferences.locale);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  useEffect(() => {
    void tarotService.listCards().then((loadedCards) => {
      const knownCardIds = new Set(loadedCards.map((card) => card.id));

      setCards(loadedCards);
      setSelectedCardIds((currentCardIds) =>
        currentCardIds.filter((cardId) => knownCardIds.has(cardId)),
      );
      setActiveCardId((currentCardId) =>
        currentCardId && knownCardIds.has(currentCardId) ? currentCardId : null,
      );
    });
  }, []);

  useEffect(() => {
    const preferences: PersistedTarotPreferences = {
      selectedCardIds,
      activeCategory,
      searchTerm,
      locale,
    };

    savePersistedPreferences(preferences);
  }, [activeCategory, locale, searchTerm, selectedCardIds]);

  const filteredCards = useMemo(
    () =>
      cards.filter((card) => {
        const matchesCategory =
          activeCategory === 'all' || card.category === activeCategory;

        return matchesCategory && matchesSearch(card, searchTerm);
      }),
    [activeCategory, cards, searchTerm],
  );

  const selectedCards = useMemo(
    () => cards.filter((card) => selectedCardIds.includes(card.id)),
    [cards, selectedCardIds],
  );

  const activeCard = useMemo(
    () => cards.find((card) => card.id === activeCardId) ?? null,
    [activeCardId, cards],
  );

  const analysis = useMemo(
    () => buildRelationshipAnalysis(selectedCards, locale),
    [locale, selectedCards],
  );

  const toggleCardSelection = (cardId: string): void => {
    setSelectedCardIds((currentCardIds) =>
      currentCardIds.includes(cardId)
        ? currentCardIds.filter((value) => value !== cardId)
        : [...currentCardIds, cardId],
    );
  };

  const removeCardFromSelection = (cardId: string): void => {
    setSelectedCardIds((currentCardIds) =>
      currentCardIds.filter((value) => value !== cardId),
    );
  };

  const resetFilters = (): void => {
    setActiveCategory('all');
    setSearchTerm('');
  };

  return (
    <I18nProvider locale={locale} setLocale={setLocale}>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.14),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(99,102,241,0.12),_transparent_30%),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_100%)]">
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 md:px-6 lg:px-8 lg:py-12">
          <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-950/5 md:p-8">
            <SectionHeader
              eyebrow={translate(locale, 'app.heroEyebrow')}
              title={translate(locale, 'app.heroTitle')}
              description={translate(locale, 'app.heroDescription')}
              actions={
                <>
                  <LocaleSwitcher />
                  <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                    {translate(locale, 'app.cardsAvailable', { count: cards.length })}
                  </div>
                </>
              }
            />

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-500">
                  {translate(locale, 'app.focusedCategory')}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  {activeCategory === 'all'
                    ? translate(locale, 'category.all')
                    : getCategoryLabel(locale, activeCategory)}
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-500">
                  {translate(locale, 'app.visibleCards')}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  {filteredCards.length}
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-500">
                  {translate(locale, 'app.selectedCards')}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  {selectedCards.length}
                </p>
              </div>
            </div>
          </section>

          <CardFilters
            activeCategory={activeCategory}
            searchTerm={searchTerm}
            onCategoryChange={setActiveCategory}
            onSearchChange={setSearchTerm}
            onReset={resetFilters}
          />

          <SelectionSummary
            cards={selectedCards}
            onInspect={setActiveCardId}
            onRemove={removeCardFromSelection}
            onClear={() => setSelectedCardIds([])}
          />

          <AnalysisPanel cards={selectedCards} analysis={analysis} />

          <section className="space-y-5">
            <SectionHeader
              eyebrow={translate(locale, 'app.deckBrowserEyebrow')}
              title={translate(locale, 'app.deckBrowserTitle')}
              description={translate(locale, 'app.deckBrowserDescription')}
            />

            <CardGrid
              cards={filteredCards}
              selectedCardIds={selectedCardIds}
              onOpenCard={setActiveCardId}
              onToggleSelection={toggleCardSelection}
            />
          </section>
        </main>

        <CardDetailDialog
          card={activeCard}
          isSelected={activeCard ? selectedCardIds.includes(activeCard.id) : false}
          onClose={() => setActiveCardId(null)}
          onToggleSelection={toggleCardSelection}
        />
      </div>
    </I18nProvider>
  );
}
