import type { Step } from '../../types/registry';

interface StepListProps {
  steps: Step[];
  compact?: boolean;
}

export function StepList({ steps, compact = false }: StepListProps) {
  return (
    <ol className={compact ? "grid grid-cols-3 gap-x-6 gap-y-5" : "relative"}>
      {steps.map((step, index) =>
      <li key={step.title} className={compact ? "relative flex gap-3" : "relative flex gap-5 pb-5 last:pb-0"}>
          {!compact && index < steps.length - 1 &&
        <span className="absolute left-[13px] top-7 h-[calc(100%-28px)] w-px bg-line" aria-hidden="true" />
        }
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink bg-white text-[11px] font-bold text-ink">
            {index + 1}
          </span>
          <div className="pt-1">
            <h3 className="text-[13px] font-semibold text-ink">{step.title}</h3>
            <p className="mt-1 max-w-[540px] text-[11.5px] leading-[1.55] text-body">{step.text}</p>
          </div>
        </li>
      )}
    </ol>);

}