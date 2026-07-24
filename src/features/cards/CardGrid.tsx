import { CardTile } from './CardTile';
import { useI18n } from '../../i18n/useI18n';
import type { TarotCard } from '../../types/tarot.types';

interface CardGridProps {
  cards: readonly TarotCard[];
  selectedCardIds: readonly string[];
  onOpenCard: (cardId: string) => void;
  onToggleSelection: (cardId: string) => void;
}

export function CardGrid({
  cards,
  selectedCardIds,
  onOpenCard,
  onToggleSelection,
}: CardGridProps) {
  const { t } = useI18n();

  if (cards.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-8 text-center text-slate-600 sm:p-10">
        {t('grid.empty')}
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {cards.map((card) => (
        <CardTile
          key={card.id}
          card={card}
          isSelected={selectedCardIds.includes(card.id)}
          onOpen={onOpenCard}
          onToggleSelection={onToggleSelection}
        />
      ))}
    </div>
  );
}
