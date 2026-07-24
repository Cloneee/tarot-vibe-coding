import { useI18n } from '../i18n/useI18n';
import { supportedLocales } from '../types/i18n.types';

export function LocaleSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-full border border-slate-200 bg-white p-1">
      <span className="hidden px-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 sm:inline">
        {t('language.switchLabel')}
      </span>
      {supportedLocales.map((option) => {
        const isActive = option === locale;

        return (
          <button
            key={option}
            type="button"
            onClick={() => setLocale(option)}
            className={`rounded-full px-3 py-2 text-sm font-medium transition sm:px-4 ${
              isActive
                ? 'bg-slate-950 text-slate-50'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
            }`}
          >
            {option === 'en' ? t('language.english') : t('language.vietnamese')}
          </button>
        );
      })}
    </div>
  );
}
