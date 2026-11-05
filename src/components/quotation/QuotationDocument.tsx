import { QuotationCoverPage } from './QuotationCoverPage';
import { QuotationScopePage } from './QuotationScopePage';
import { QuotationNextStepsPage } from './QuotationNextStepsPage';
import type { Quote } from '../../types/registry';



interface QuotationDocumentProps {
  quote: Quote;
}

export function QuotationDocument({ quote }: QuotationDocumentProps) {
  const pageCount = quote.services.length >= 3 ? 4 : 3;
  return (
    <>
      <QuotationCoverPage quote={quote} pageCount={pageCount} />
      <QuotationScopePage quote={quote} pageCount={pageCount} />
      {pageCount === 4 && <QuotationScopePage quote={quote} pageCount={pageCount} membershipOnly />}
      <QuotationNextStepsPage quote={quote} pageCount={pageCount} />
    </>);

}