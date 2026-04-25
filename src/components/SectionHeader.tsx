import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  actions,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
          {eyebrow}
        </p>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-950 md:text-3xl">
            {title}
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-stone-600 md:text-base">
            {description}
          </p>
        </div>
      </div>
      {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
    </div>
  );
}
