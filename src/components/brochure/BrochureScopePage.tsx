import { A4Page } from '../document/A4Page';
import { PageIntro } from '../document/PageIntro';
import { ScopeList } from '../document/ScopeList';
import { TasksAndExclusions } from '../document/TasksAndExclusions';
import { brochureClientTasks, exclusions, scopeGroups } from '../../data/registry';

interface BrochureScopePageProps {
  pageCount: number;
}

export function BrochureScopePage({ pageCount }: BrochureScopePageProps) {
  return (
    <A4Page pageNumber={2} pageCount={pageCount} runningHeader="The Registry · Service overview">
      <div className="pt-8">
        <PageIntro
          eyebrow="What's included"
          title="What you receive."
          lead="Your membership brings together personal support, an organised company record and — for eligible companies — your annual obligations." />
        
      </div>
      <div className="mt-6">
        <ScopeList groups={scopeGroups} />
      </div>
      <div className="mt-7">
        <TasksAndExclusions
          tasksTitle="What we need from you"
          tasks={brochureClientTasks}
          exclusionsTitle="Good to know · Not included"
          exclusions={exclusions} />
        
      </div>
    </A4Page>);

}