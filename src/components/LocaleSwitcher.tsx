import { useI18n } from '../i18n/useI18n';
import { supportedLocales } from '../types/i18n.types';

export function LocaleSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-white p-1">
      <span className="px-3 text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
        {t('language.switchLabel')}
      </span>
      {supportedLocales.map((option) => {
        const isActive = option === locale;

        return (
          <button
            key={option}
            type="button"
            onClick={() => setLocale(option)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive
                ? 'bg-stone-950 text-stone-50'
                : 'text-stone-600 hover:bg-stone-100 hover:text-stone-950'
            }`}
          >
            {option === 'en' ? t('language.english') : t('language.vietnamese')}
          </button>
        );
      })}
    </div>
  );
}
