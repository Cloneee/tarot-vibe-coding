import { TagList } from '../../components/TagList';
import { useI18n } from '../../i18n/useI18n';
import type { TarotCard } from '../../types/tarot.types';

interface CardDetailDialogProps {
  card: TarotCard | null;
  isSelected: boolean;
  onClose: () => void;
  onToggleSelection: (cardId: string) => void;
}

export function CardDetailDialog({
  card,
  isSelected,
  onClose,
  onToggleSelection,
}: CardDetailDialogProps) {
  const { getCategoryLabel, localizeText, localizeTextList, t } = useI18n();

  if (!card) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/60 p-4 md:items-center">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="card-detail-title"
        className="relative grid max-h-[90vh] w-full max-w-5xl gap-6 overflow-auto rounded-[2rem] bg-slate-50 p-5 shadow-2xl shadow-slate-950/25 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:p-8"
      >
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white">
            <img
              src={card.image}
              alt={localizeText(card.name)}
              className="w-full object-cover"
            />
          </div>

          <button
            type="button"
            onClick={() => onToggleSelection(card.id)}
            className={`w-full rounded-2xl px-4 py-3 text-sm font-medium transition ${
              isSelected
                ? 'bg-sky-600 text-white hover:bg-sky-500'
                : 'border border-slate-200 bg-white text-slate-700 hover:border-sky-300'
            }`}
          >
            {isSelected ? t('card.removeFromComparison') : t('card.addToComparison')}
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
                {getCategoryLabel(card.category)}
              </p>
              <div>
                <h2
                  id="card-detail-title"
                  className="text-3xl font-semibold tracking-tight text-slate-950"
                >
                  {localizeText(card.name)}
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  {card.arcana === 'major'
                    ? `${t('card.majorArcana')} · ${localizeText(card.rankLabel)}`
                    : `${localizeText(card.rankLabel)} · ${getCategoryLabel(card.category)}`}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
            >
              {t('card.close')}
            </button>
          </div>

          <p className="text-base leading-8 text-slate-700">
            {localizeText(card.meaning)}
          </p>

          <section className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              {t('card.coreThemes')}
            </h3>
            <TagList items={localizeTextList(card.themes)} tone="accent" />
          </section>

          <div className="grid gap-4 md:grid-cols-2">
            <section className="rounded-3xl border border-emerald-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-950">
                {t('card.positiveAspects')}
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                {card.positiveAspects.map((aspect) => (
                  <li key={`${card.id}-${aspect.en}`}>• {localizeText(aspect)}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-rose-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-950">
                {t('card.negativeAspects')}
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                {card.negativeAspects.map((aspect) => (
                  <li key={`${card.id}-${aspect.en}`}>• {localizeText(aspect)}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
