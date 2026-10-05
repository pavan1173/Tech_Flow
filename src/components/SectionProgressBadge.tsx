import React from 'react';
import { Check } from 'lucide-react';

export interface SectionProgressBadgeProps {
  solved: number;
  total: number;
  percentage?: number;
  size?: 'sm' | 'md';
  zeroLabel?: string;
  showBar?: boolean;
  className?: string;
}

export const SectionProgressBadge: React.FC<SectionProgressBadgeProps> = ({
  solved,
  total,
  percentage: customPercentage,
  size = 'md',
  zeroLabel,
  showBar = true,
  className = '',
}) => {
  const percentage =
    typeof customPercentage === 'number'
      ? customPercentage
      : total > 0
      ? Math.round((solved / total) * 100)
      : 0;

  const isCompleted = total > 0 && (solved >= total || percentage === 100);
  const isInProgress = solved > 0 && !isCompleted;

  if (isCompleted) {
    return (
      <span
        title={`${solved} of ${total} completed (100%) - Completed!`}
        className={`inline-flex items-center gap-1 font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shrink-0 transition-all ${
          size === 'sm'
            ? 'px-1.5 py-0.2 rounded text-[9px]'
            : 'px-1.5 py-0.5 rounded text-[10px]'
        } ${className}`}
      >
        <Check className={size === 'sm' ? 'w-2.5 h-2.5' : 'w-3 h-3'} />
        <span>100%</span>
      </span>
    );
  }

  if (isInProgress) {
    return (
      <div
        title={`${solved} of ${total} problems completed (${percentage}%)`}
        className={`inline-flex items-center gap-1.5 shrink-0 transition-all ${className}`}
      >
        {showBar && size === 'md' && (
          <div className="hidden sm:block w-7 h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${Math.max(percentage, 10)}%` }}
            />
          </div>
        )}
        <span
          className={`font-mono font-bold bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/25 shrink-0 ${
            size === 'sm'
              ? 'px-1.5 py-0.2 rounded text-[9px]'
              : 'px-1.5 py-0.5 rounded text-[10px]'
          }`}
        >
          {percentage}%
        </span>
      </div>
    );
  }

  // Not started (0%)
  const displayLabel = zeroLabel !== undefined ? zeroLabel : total > 0 ? `${total} Qs` : '0%';

  return (
    <span
      title={total > 0 ? `0 of ${total} completed (0%)` : undefined}
      className={`inline-flex items-center font-mono font-medium text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800/80 shrink-0 transition-all ${
        size === 'sm'
          ? 'px-1.5 py-0.2 rounded text-[9px]'
          : 'px-1.5 py-0.5 rounded text-[10px]'
      } ${className}`}
    >
      {displayLabel}
    </span>
  );
};
