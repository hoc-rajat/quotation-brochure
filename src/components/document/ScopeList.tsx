import { CheckIcon } from 'lucide-react';
import type { ScopeGroup } from '../../types/registry';

interface ScopeListProps {
  groups: ScopeGroup[];
}

export function ScopeList({ groups }: ScopeListProps) {
  return (
    <div className="border-t-2 border-ink">
      {groups.map((group) =>
      <div
        key={group.title}
        className="grid grid-cols-[190px_1fr] gap-8 border-b border-line py-4 last:border-b-0">
        
          <div>
            <h3 className="text-[13px] font-semibold text-ink">{group.title}</h3>
            <p className="mt-1 text-[11px] leading-[1.5] text-muted">{group.subtitle}</p>
          </div>
          <div>
            <ul className="space-y-1.5">
              {group.items.map((item) =>
            <li key={item} className="flex gap-2.5 text-[12px] leading-[1.5] text-body">
                  <CheckIcon
                className="mt-[3px] h-3.5 w-3.5 shrink-0 text-accent"
                strokeWidth={2.5}
                aria-hidden="true" />
              
                  {item}
                </li>
            )}
            </ul>
            {group.note &&
          <p className="mt-3 rounded-md bg-mist px-3.5 py-2.5 text-[11px] leading-[1.5] text-body">
                <span className="font-semibold text-ink">{group.note.label}</span> ·{' '}
                {group.note.text}
              </p>
          }
          </div>
        </div>
      )}
    </div>);

}