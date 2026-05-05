import { TagList } from '../../components/TagList';
import { useI18n } from '../../i18n/useI18n';
import type { TarotCard } from '../../types/tarot.types';

interface CardTileProps {
  card: TarotCard;
  isSelected: boolean;
  onOpen: (cardId: string) => void;
  onToggleSelection: (cardId: string) => void;
}

export function CardTile({
  card,
  isSelected,
  onOpen,
  onToggleSelection,
}: CardTileProps) {
  const { getCategoryLabel, localizeText, localizeTextList, t } = useI18n();

  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm shadow-slate-950/5 transition hover:-translate-y-0.5 hover:border-sky-300">
      <button
        type="button"
        onClick={() => onOpen(card.id)}
        className="flex flex-1 flex-col gap-4 text-left"
      >
        <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100">
          <img
            src={card.image}
            alt={localizeText(card.name)}
            className="aspect-[3/5] w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              {getCategoryLabel(card.category)}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-950">
              {localizeText(card.name)}
            </h3>
          </div>

          <p className="line-clamp-4 text-sm leading-6 text-slate-600">
            {localizeText(card.meaning)}
          </p>

          <TagList items={localizeTextList(card.themes.slice(0, 3))} />
        </div>
      </button>

      <button
        type="button"
        onClick={() => onToggleSelection(card.id)}
        className={`mt-4 rounded-2xl px-4 py-3 text-sm font-medium transition ${
          isSelected
            ? 'bg-sky-600 text-white hover:bg-sky-500'
            : 'border border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-300 hover:bg-white'
        }`}
      >
        {isSelected ? t('card.selected') : t('card.select')}
      </button>
    </article>
  );
}
