import { A4Page } from '../document/A4Page';
import { PageIntro } from '../document/PageIntro';
import { ScopeList } from '../document/ScopeList';
import { existingRelationshipScope, quotation } from '../../data/registry';
import { formatEuro } from '../../utils/quotation';
import type { Quote, ScopeGroup } from '../../types/registry';

interface QuotationScopePageProps {
  quote: Quote;
  pageCount: number;
  membershipOnly?: boolean;
}

export function QuotationScopePage({ quote, pageCount, membershipOnly = false }: QuotationScopePageProps) {
  const serviceGroups: ScopeGroup[] = quote.services.map((service) => ({
    title: service.shortName,
    subtitle: `One-off · ${formatEuro(service.fee)} excl. VAT`,
    items: service.included,
    note: service.boundary
  }));
  const membershipGroup = quote.membership ? quote.membership.scope : existingRelationshipScope;

  return (
    <A4Page pageNumber={membershipOnly ? 3 : 2} pageCount={pageCount} runningHeader={`Quotation · ${quotation.reference}`}>
      <div className="pt-6">
        <PageIntro
          eyebrow="Delivery and scope"
          title={membershipOnly ? "Your ongoing arrangement." : "What your proposal covers."}
          lead="What we do for your registration, and what your ongoing arrangement takes care of afterwards." />
        
      </div>

      {!membershipOnly && <section className="mt-6" aria-labelledby="scope-registration">
        <h2 id="scope-registration" className="mb-2.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink">
          Your registration
        </h2>
        <ScopeList groups={serviceGroups} />
      </section>}

      {(quote.services.length < 3 || membershipOnly) && <section className="mt-4" aria-labelledby="scope-ongoing">
        <h2 id="scope-ongoing" className="mb-2.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink">
          After registration
        </h2>
        <ScopeList groups={[membershipGroup]} />
        <p className="mt-4 text-[11px] leading-relaxed text-muted">{quote.services.map(service => service.ongoingNote).join(" ")} {quote.ongoingNote}</p>
        {quote.alternative && <aside className="mt-4 rounded-lg border border-line px-5 py-4">
          <h3 className="text-[12px] font-semibold">An alternative: {quote.alternative.membership.name}</h3>
          <p className="mt-2 text-[11px] leading-relaxed text-body">{quote.alternative.membership.summary}. Registration plus the alternative membership’s first year: {formatEuro(quote.alternative.subtotal)} excluding VAT. This replaces {quote.membership?.name}; it is never added on top. Ask us to update your proposal.</p>
        </aside>}
      </section>}
    </A4Page>);

}