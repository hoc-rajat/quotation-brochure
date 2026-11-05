import { flushSync } from 'react-dom';
import { useMemo, useRef, useState } from 'react';
import { DocumentToolbar } from './components/DocumentToolbar';
import { QuotationSetupBar } from './components/QuotationSetupBar';
import { QuotationDocument } from './components/quotation/QuotationDocument';
import { BrochureDocument } from './components/brochure/BrochureDocument';
import { useFitScale } from './hooks/useFitScale';
import { useQuotationConfig } from './hooks/useQuotationConfig';
import { buildQuote } from './utils/quotation';
import { quotation } from './data/registry';
import type { DocumentKind } from './types/registry';

const A4_WIDTH_PX = 794;

export function App() {
  const [active, setActive] = useState<DocumentKind>('quotation');
  const viewportRef = useRef<HTMLDivElement>(null);
  const scale = useFitScale(viewportRef, A4_WIDTH_PX);
  const config = useQuotationConfig();

  const quote = useMemo(
    () => buildQuote(config.services, config.membership, config.version),
    [config.services, config.membership, config.version]
  );

  const handleDownload = async (kind: DocumentKind) => {
    flushSync(() => setActive(kind));
    await document.fonts.ready;
    await Promise.all(Array.from(document.images, (image) => image.decode().catch(() => undefined)));
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    const previousTitle = document.title;
    document.title = kind === 'quotation' ? `${quote.title} – ${quotation.reference}` : 'The Registry – Brochure';
    try {
      window.print();
    } finally {
      document.title = previousTitle;
    }
  };

  return (
    <div className="min-h-screen w-full bg-canvas print:bg-white">
      <DocumentToolbar
        active={active}
        onChange={setActive}
        onDownload={handleDownload}
        setup={
        <QuotationSetupBar
          services={config.services}
          membership={config.membership}
          onToggleService={config.toggleService}
          onMembershipChange={config.setMembership} />

        } />
      
      <main ref={viewportRef} className="w-full py-8 print:p-0">
        <div className="doc-viewport space-y-8 print:space-y-0" style={{ zoom: scale }}>
          {active === 'quotation' ? <QuotationDocument quote={quote} /> : <BrochureDocument />}
        </div>
      </main>
    </div>);

}