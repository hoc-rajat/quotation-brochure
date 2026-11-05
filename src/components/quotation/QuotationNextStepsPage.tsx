import { A4Page } from '../document/A4Page';
import { PageIntro } from '../document/PageIntro';
import { StepList } from '../document/StepList';
import { TasksAndExclusions } from '../document/TasksAndExclusions';
import {
  company,
  importantInfo,
  quotation,
  quotationBaseTasks,
  quotationGeneralExclusions,
  quotationSteps } from
'../../data/registry';
import type { Quote } from '../../types/registry';

interface QuotationNextStepsPageProps {
  quote: Quote;
  pageCount: number;
}

export function QuotationNextStepsPage({ quote, pageCount }: QuotationNextStepsPageProps) {
  const tasks = [...quotationBaseTasks, ...quote.services.map((s) => s.customerTask)];
  const exclusions = [...quote.services.map((s) => s.exclusion), ...quotationGeneralExclusions];

  return (
    <A4Page pageNumber={pageCount} pageCount={pageCount} runningHeader={`Quotation · ${quotation.reference}`}>
      <div className="pt-6">
        <PageIntro
          eyebrow="Process and conditions"
          title="How it works from here."
          lead="From acceptance to registration, everything happens in your House of Companies client portal." />
        
      </div>

      <div className="mt-4">
        <StepList steps={quotationSteps} compact />
      </div>

      <div className="mt-4">
        <TasksAndExclusions
          tasksTitle="Your part"
          tasks={tasks}
          exclusionsTitle="Not included in this quotation"
          exclusions={exclusions} />
        
      </div>

      <div className="mt-4 grid grid-cols-2 gap-8 border-t border-line pt-3">
        <section aria-labelledby="external-costs">
          <h2 id="external-costs" className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink">
            External costs
          </h2>
          <ul className="mt-2.5 space-y-2">
            {quote.services.map((service) =>
            <li key={service.id} className="text-[10.5px] leading-[1.5] text-body">
                <span className="font-semibold text-ink">{service.shortName}.</span> {service.externalCosts}
              </li>
            )}
          </ul>
        </section>
        <section aria-labelledby="conditions">
          <h2 id="conditions" className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink">
            Acceptance and conditions
          </h2>
          <ul className="mt-2.5 space-y-1.5">
            {importantInfo.map((item) =>
            <li key={item} className="text-[10px] leading-[1.5] text-muted">
                {item}
              </li>
            )}
          </ul>
        </section>
      </div>

      <div className="mt-auto flex items-end justify-between gap-6 border-t border-line pt-4 text-[10px]">
        <p className="text-body">
          <span className="font-semibold text-ink">Questions?</span> {quotation.contactName},{' '}
          {quotation.contactRole} · {company.contactUrl}
        </p>
      </div>
      <p className="mt-1 text-[10px] text-muted">Secure acceptance: {company.portal}</p>
      <p className="mt-1 text-[10px] text-muted">{company.address}</p>
    </A4Page>);

}