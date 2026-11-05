import { BrochureCoverPage } from './BrochureCoverPage';
import { BrochureScopePage } from './BrochureScopePage';
import { BrochurePricingPage } from './BrochurePricingPage';

const PAGE_COUNT = 3;

export function BrochureDocument() {
  return (
    <>
      <BrochureCoverPage pageCount={PAGE_COUNT} />
      <BrochureScopePage pageCount={PAGE_COUNT} />
      <BrochurePricingPage pageCount={PAGE_COUNT} />
    </>);

}