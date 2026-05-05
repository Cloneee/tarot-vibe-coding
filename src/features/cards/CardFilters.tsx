import { useI18n } from '../../i18n/useI18n';
import type { CardCategoryFilter } from '../../types/tarot.types';

interface CardFiltersProps {
  activeCategory: CardCategoryFilter;
  searchTerm: string;
  onCategoryChange: (category: CardCategoryFilter) => void;
  onSearchChange: (value: string) => void;
  onReset: () => void;
}

export function CardFilters({
  activeCategory,
  searchTerm,
  onCategoryChange,
  onSearchChange,
  onReset,
}: CardFiltersProps) {
  const { getCategoryOptions, t } = useI18n();
  const categoryOptions = getCategoryOptions();

  return (
    <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-950/5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <label className="flex-1">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            {t('filters.searchLabel')}
          </span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder={t('filters.searchPlaceholder')}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
          />
        </label>

        <button
          type="button"
          onClick={onReset}
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
        >
          {t('filters.reset')}
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {categoryOptions.map((option) => {
          const isActive = activeCategory === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onCategoryChange(option.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-sky-600 text-white'
                  : 'border border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-300 hover:bg-white'
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
