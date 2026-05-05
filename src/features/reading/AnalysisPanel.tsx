import { SectionHeader } from '../../components/SectionHeader';
import { useI18n } from '../../i18n/useI18n';
import type { CardRelationshipAnalysis } from '../../types/analysis.types';
import type { TarotCard } from '../../types/tarot.types';

interface AnalysisPanelProps {
  cards: readonly TarotCard[];
  analysis: CardRelationshipAnalysis;
}

interface AnalysisColumnProps {
  title: string;
  items: readonly string[];
  emptyMessage: string;
  tone: 'neutral' | 'positive' | 'danger';
}

const toneClasses: Record<AnalysisColumnProps['tone'], string> = {
  neutral: 'border-slate-200 bg-white',
  positive: 'border-emerald-200 bg-emerald-50/60',
  danger: 'border-rose-200 bg-rose-50/70',
};

function AnalysisColumn({
  title,
  items,
  emptyMessage,
  tone,
}: AnalysisColumnProps) {
  return (
    <section className={`rounded-[1.75rem] border p-5 ${toneClasses[tone]}`}>
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      {items.length === 0 ? (
        <p className="mt-3 text-sm leading-6 text-slate-600">{emptyMessage}</p>
      ) : (
        <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-700">
          {items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function AnalysisPanel({ cards, analysis }: AnalysisPanelProps) {
  const { t } = useI18n();
  const hasEnoughCards = cards.length > 1;

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-950/5">
      <SectionHeader
        eyebrow={t('analysis.eyebrow')}
        title={t('analysis.title')}
        description={
          hasEnoughCards
            ? t('analysis.descriptionReady')
            : t('analysis.descriptionEmpty')
        }
      />

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        <AnalysisColumn
          title={t('analysis.similarities')}
          items={analysis.similarities}
          emptyMessage={t('analysis.emptySimilarities')}
          tone="neutral"
        />
        <AnalysisColumn
          title={t('analysis.opposites')}
          items={analysis.opposites}
          emptyMessage={t('analysis.emptyOpposites')}
          tone="neutral"
        />
        <AnalysisColumn
          title={t('analysis.positiveAspects')}
          items={analysis.positiveAspects}
          emptyMessage={t('analysis.emptyPositiveAspects')}
          tone="positive"
        />
        <AnalysisColumn
          title={t('analysis.negativeAspects')}
          items={analysis.negativeAspects}
          emptyMessage={t('analysis.emptyNegativeAspects')}
          tone="danger"
        />
      </div>
    </section>
  );
}
