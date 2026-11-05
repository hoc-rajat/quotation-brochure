import { CheckIcon, MinusIcon } from 'lucide-react';

interface TasksAndExclusionsProps {
  tasksTitle: string;
  tasks: string[];
  exclusionsTitle: string;
  exclusions: string[];
}

export function TasksAndExclusions({
  tasksTitle,
  tasks,
  exclusionsTitle,
  exclusions
}: TasksAndExclusionsProps) {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h3 className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink">{tasksTitle}</h3>
        <ul className="mt-3 space-y-2">
          {tasks.map((task) =>
          <li key={task} className="flex gap-2.5 text-[11.5px] leading-[1.5] text-body">
              <CheckIcon
              className="mt-[3px] h-3.5 w-3.5 shrink-0 text-accent"
              strokeWidth={2.5}
              aria-hidden="true" />
            
              {task}
            </li>
          )}
        </ul>
      </div>
      <div className="rounded-lg bg-mist px-5 py-4">
        <h3 className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink">
          {exclusionsTitle}
        </h3>
        <ul className="mt-3 space-y-1.5">
          {exclusions.map((item) =>
          <li key={item} className="flex gap-2.5 text-[11px] leading-[1.45] text-body">
              <MinusIcon className="mt-[2px] h-3.5 w-3.5 shrink-0 text-muted" aria-hidden="true" />
              {item}
            </li>
          )}
        </ul>
      </div>
    </div>);

}