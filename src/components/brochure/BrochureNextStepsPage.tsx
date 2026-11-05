import { A4Page } from '../document/A4Page';
import { PageIntro } from '../document/PageIntro';
import { StepList } from '../document/StepList';
import { brochureSteps, company } from '../../data/registry';

interface BrochureNextStepsPageProps {
  pageCount: number;
}

export function BrochureNextStepsPage({ pageCount }: BrochureNextStepsPageProps) {
  return (
    <A4Page pageNumber={4} pageCount={pageCount} runningHeader="The Registry · Getting started">
      <div className="pt-8">
        <PageIntro
          eyebrow="How it works"
          title="Getting started is simple."
          lead="From your first request to onboarding, everything happens in your House of Companies client portal." />
        
      </div>

      <div className="mt-7">
        <StepList steps={brochureSteps} />
      </div>

      <section className="mt-10 grid grid-cols-[1fr_220px] gap-8 rounded-xl bg-ink px-7 py-7 text-white">
        <div>
          <h2 className="text-[8.5px] font-bold uppercase tracking-[0.16em] text-lilac">Next step</h2>
          <p className="mt-2 text-[22px] font-bold tracking-[-0.015em]">Request your personalised quotation</p>
          <p className="mt-2 max-w-[360px] text-[11.5px] leading-[1.6] text-white/70">
            Tell us about your company and we will prepare a quotation with your exact amount, VAT and
            start date.
          </p>
        </div>
        <div className="border-l border-ink-line pl-6">
          <h2 className="text-[8.5px] font-bold uppercase tracking-[0.16em] text-lilac">Learn more</h2>
          <p className="mt-2 inline-block border-b border-accent-light pb-0.5 text-[13px] font-semibold">
            {company.site}
          </p>
          <p className="mt-2 text-[10.5px] leading-[1.5] text-white/65">
            Read more about The Registry online.
          </p>
        </div>
      </section>

      <p className="mt-auto border-t border-line pt-4 text-[10px] font-medium text-ink">{company.address}</p>
    </A4Page>);

}