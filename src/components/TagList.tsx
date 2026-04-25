interface TagListProps {
  items: readonly string[];
  tone?: 'neutral' | 'accent' | 'danger';
}

const toneClasses: Record<NonNullable<TagListProps['tone']>, string> = {
  neutral: 'border-stone-200 bg-stone-100/80 text-stone-700',
  accent: 'border-amber-200 bg-amber-100/80 text-amber-900',
  danger: 'border-rose-200 bg-rose-100/80 text-rose-900',
};

export function TagList({ items, tone = 'neutral' }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${toneClasses[tone]}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
