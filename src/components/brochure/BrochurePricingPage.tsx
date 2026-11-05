import { A4Page } from '../document/A4Page';
import { PageIntro } from '../document/PageIntro';
import { StepList } from '../document/StepList';
import { brochureSteps, company, memberships } from '../../data/registry';
import { formatEuro } from '../../utils/quotation';

export function BrochurePricingPage({ pageCount }: {pageCount: number}) {
  return (
    <A4Page pageNumber={3} pageCount={pageCount} runningHeader="The Registry · Getting started">
      <div className="pt-8">
        <PageIntro eyebrow="Membership and next steps" title="An organised start. Ongoing support."
          lead="Find the right arrangement for your company, with clear scope and support from the start." />
      </div>
      <section className="mt-6 rounded-xl bg-ink px-7 py-6 text-white">
        <h2 className="text-[14px] font-semibold">The Registry</h2>
        <p className="mt-2 text-[40px] font-extrabold tracking-tight">{formatEuro(memberships.registry.monthly)}<span className="text-[15px] font-medium"> / month</span></p>
        <p className="mt-1 text-[11px] text-white/70">Standard reference price, excluding applicable VAT.</p>
        <p className="mt-3 text-[11px] leading-relaxed text-white/80">First-year reference: {formatEuro(memberships.registry.firstYear)} for 12 months. Annual billing in advance is subject to the approved arrangement. For the Netherlands branch route, Registry billing begins after successful KvK registration.</p>
        <p className="mt-2 text-[10px] leading-relaxed text-white/60">Your personalised quotation confirms commencement, renewal and applicable tax treatment. This brochure is general service information, not an individual offer.</p>
      </section>
      <aside className="mt-4 rounded-lg border border-line px-5 py-3">
        <h2 className="text-[12px] font-semibold">Need managed financial support?</h2>
        <p className="mt-1 text-[11px] leading-relaxed text-body">Ask about Registry Unlimited for defined managed bookkeeping and recurring financial work. It replaces The Registry; it is never an additional membership charge.</p>
      </aside>
      <section className="mt-6">
        <h2 className="mb-4 text-[16px] font-bold">Your next steps</h2>
        <StepList steps={brochureSteps} />
      </section>
      <div className="mt-auto border-t border-line pt-4">
        <h2 className="text-[14px] font-bold">Let’s discuss your company</h2>
        <p className="mt-1 text-[11px] text-body">Request a personalised quotation or speak to an advisor.</p>
        <a href={`https://${company.contactUrl}`} className="mt-2 inline-block border-b-2 border-accent text-[12px] font-semibold">{company.contactUrl}</a>
      </div>
    </A4Page>
  );
}
