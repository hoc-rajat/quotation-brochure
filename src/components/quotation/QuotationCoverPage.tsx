import { A4Page } from '../document/A4Page';
import { Logo } from '../Logo';
import { company, quotation } from '../../data/registry';
import { formatEuro } from '../../utils/quotation';
import type { Quote } from '../../types/registry';

interface QuotationCoverPageProps {
  quote: Quote;
  pageCount: number;
}

export function QuotationCoverPage({ quote, pageCount }: QuotationCoverPageProps) {
  const { services, membership } = quote;

  return (
    <A4Page pageNumber={1} pageCount={pageCount} bleed>
      <header className="bg-ink px-14 pb-5 pt-6 text-white">
        <div className="flex items-start justify-between">
          <Logo className="h-9" />
          <span className="rounded-full border border-accent-light/70 px-3 py-1 text-[8.5px] font-bold uppercase tracking-[0.14em] text-accent-light">
            Sample quotation · Not for issue
          </span>
        </div>

        <p className="mt-5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-lilac">
          Your proposed service
        </p>
        <h1 className="mt-2 max-w-[620px] text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em]">
          {quote.title}
        </h1>
        <p className="mt-2 text-[13.5px] text-white/85">{quote.subtitle}</p>
        <p className="mt-2.5 max-w-[620px] text-[11px] leading-[1.6] text-white/60">{quote.summary}</p>

        <dl className="mt-4 grid grid-cols-[1.2fr_1fr_1.2fr] gap-8 border-t border-ink-line pt-4">
          <MetaItem label="Prepared for" title={quotation.clientName} detail={quotation.clientContact} />
          <MetaItem
            label="Quotation"
            title={quotation.reference}
            detail={quotation.issued} />
          
          <MetaItem label="Your contact" title={quotation.contactName} detail={quotation.contactRole} />
        </dl>
      </header>

      <div className="flex flex-1 flex-col px-14 pt-4">
        {/* A — one-off registration */}
        <section aria-labelledby="section-a">
          <SectionHeading id="section-a" title="One-off registration" />
          <table className="mt-2.5 w-full table-fixed text-left">
            <colgroup>
              <col />
              <col className="w-[130px]" />
              <col className="w-[120px]" />
            </colgroup>
            <thead>
              <tr className="border-b border-line text-[8.5px] uppercase tracking-[0.14em] text-muted">
                <th className="pb-2 font-semibold">Service</th>
                <th className="pb-2 font-semibold">Billing</th>
                <th className="pb-2 text-right font-semibold">HoC fee excl. VAT</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) =>
              <tr key={service.id} className="border-b border-line align-top">
                  <td className="py-2 pr-4">
                    <span className="block text-[12px] font-semibold text-ink">{service.name}</span>
                    <span className="mt-0.5 block text-[10px] text-muted">{service.scopeLine}</span>
                  </td>
                  <td className="py-2 text-[11px] text-body">{service.billing}</td>
                  <td className="py-2 text-right text-[12px] font-semibold tabular-nums text-ink">
                    {formatEuro(service.fee)}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        {/* B — ongoing arrangement */}
        <section className="mt-4" aria-labelledby="section-b">
          <SectionHeading id="section-b" title="Your ongoing arrangement" />
          <table className="mt-2.5 w-full table-fixed text-left">
            <colgroup>
              <col />
              <col className="w-[130px]" />
              <col className="w-[120px]" />
            </colgroup>
            <thead>
              <tr className="border-b border-line text-[8.5px] uppercase tracking-[0.14em] text-muted">
                <th className="pb-2 font-semibold">Service</th>
                <th className="pb-2 font-semibold">Monthly reference</th>
                <th className="pb-2 text-right font-semibold">First-year billing</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-line align-top">
                <td className="py-2 pr-4">
                  <span className="block text-[12px] font-semibold text-ink">
                    {membership ? membership.name : 'Your existing Registry relationship'}
                  </span>
                  <span className="mt-0.5 block text-[10px] text-muted">
                    {membership ? membership.summary : 'Already active for this entity'}
                  </span>
                </td>
                <td className="py-2 text-[11px] tabular-nums text-body">
                  {membership ? `${formatEuro(membership.monthly)} / month` : '—'}
                </td>
                <td className="py-2 text-right text-[12px] font-semibold tabular-nums text-ink">
                  {membership ?
                  <>
                      {formatEuro(membership.firstYear)}
                      <span className="block text-[9.5px] font-normal text-muted">paid in advance</span>
                    </> :

                  'No new charge'
                  }
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-2.5 text-[10.5px] leading-[1.6] text-muted">{quote.ongoingNote}</p>
        </section>

        <section className="mt-4 rounded-xl bg-ink px-5 py-4 text-white" aria-labelledby="payment-summary">
          <SectionHeading id="payment-summary" title="Your payment summary" dark />
          <p className="mt-1 text-[10px] leading-relaxed text-white/65">Sample schedule only - timing requires commercial confirmation. Amounts below exclude VAT.</p>
          <div className="mt-3 grid grid-cols-2 gap-5">
            <div>
              <h3 className="text-[11px] font-semibold">Payable on acceptance</h3>
              <p className="mt-1 text-[25px] font-bold">{formatEuro(quote.oneOffTotal)}</p>
              <p className="text-[10px] text-white/65">One-off services - assumed due on acceptance.</p>
            </div>
            <div>
              <h3 className="text-[11px] font-semibold">Payable after successful registration</h3>
              <p className="mt-1 text-[25px] font-bold">{formatEuro(membership?.firstYear ?? 0)}</p>
              <p className="text-[10px] text-white/65">{membership ? 'First 12 months; billing starts after successful registration. See scope and conditions.' : 'Existing membership continues; no new membership charge.'}</p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between gap-4 border-t border-white/25 pt-3">
            <h3 className="text-[11px] font-semibold">Overall first-year service commitment</h3>
            <p className="text-[22px] font-bold">{formatEuro(quote.subtotal)}</p>
          </div>
          <p className="mt-1 text-[10px] leading-relaxed text-white/65">
            Illustrative VAT at 21%: {formatEuro(quote.vat, true)}; combined total: {formatEuro(quote.total, true)}.
            This is not the amount due now. Actual VAT depends on customer and transaction details. External costs are separate.
          </p>
        </section>
        <p className="mt-2 text-[10px] text-muted">Review the confirmed schedule and accept securely: {company.portal}</p>
      </div>
    </A4Page>);

}

function MetaItem({ label, title, detail }: {label: string;title: string;detail: string;}) {
  return (
    <div>
      <dt className="text-[8.5px] font-bold uppercase tracking-[0.16em] text-lilac">{label}</dt>
      <dd className="mt-1.5 text-[12.5px] font-semibold">{title}</dd>
      <dd className="mt-0.5 text-[10px] leading-[1.5] text-white/60">{detail}</dd>
    </div>);

}

function SectionHeading({ id, title, dark = false }: {id: string; title: string; dark?: boolean}) {
  return <h2 id={id} className={`text-[9.5px] font-bold uppercase tracking-[0.16em] ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>;
}
