import { TagList } from '../../components/TagList';
import { useI18n } from '../../i18n/useI18n';
import type { TarotCard } from '../../types/tarot.types';

interface SelectionSummaryProps {
  cards: readonly TarotCard[];
  onInspect: (cardId: string) => void;
  onRemove: (cardId: string) => void;
  onClear: () => void;
}

export function SelectionSummary({
  cards,
  onInspect,
  onRemove,
  onClear,
}: SelectionSummaryProps) {
  const { localizeText, localizeTextList, t } = useI18n();

  return (
    <section className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm shadow-stone-950/5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            {t('selection.eyebrow')}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950">
            {cards.length === 0
              ? t('selection.noneTitle')
              : cards.length === 1
                ? t('selection.singleTitle')
                : t('selection.multipleTitle', { count: cards.length })}
          </h2>
        </div>

        {cards.length > 0 ? (
          <button
            type="button"
          onClick={onClear}
          className="rounded-2xl border border-stone-200 px-4 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-300 hover:bg-stone-100"
        >
          {t('selection.clear')}
        </button>
      ) : null}
      </div>

      {cards.length === 0 ? (
        <p className="mt-4 text-sm leading-6 text-stone-600">
          {t('selection.emptyDescription')}
        </p>
      ) : (
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.id}
              className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onInspect(card.id)}
                  className="text-left"
                >
                  <h3 className="text-lg font-semibold text-stone-950">
                    {localizeText(card.name)}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    {localizeText(card.meaning)}
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => onRemove(card.id)}
                  className="rounded-full border border-stone-200 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-stone-500 transition hover:border-stone-300 hover:text-stone-950"
                >
                  {t('selection.remove')}
                </button>
              </div>

              <div className="mt-4">
                <TagList items={localizeTextList(card.themes.slice(0, 4))} tone="accent" />
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
