import React from 'react';
import { DownloadIcon, GlobeIcon, UserIcon } from 'lucide-react';
import { Logo } from './Logo';
import { quotation } from '../data/registry';
import type { DocumentKind } from '../types/registry';

interface DocumentToolbarProps {
  active: DocumentKind;
  onChange: (kind: DocumentKind) => void;
  onDownload: (kind: DocumentKind) => void;
  /** Internal quotation setup, shown only while the quotation is active. Never printed. */
  setup?: React.ReactNode;
}

const tabs: {kind: DocumentKind;label: string;}[] = [
{ kind: 'quotation', label: 'Quotation' },
{ kind: 'brochure', label: 'The Registry Brochure' },
{ kind: 'unlimited', label: 'Registry Unlimited Brochure' }];


export function DocumentToolbar({ active, onChange, onDownload, setup }: DocumentToolbarProps) {
  return (
    <header className="no-print border-b border-line bg-white">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center gap-x-6 gap-y-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Logo className="h-8" />
          <div className="leading-tight">
            <p className="text-[13px] font-semibold text-ink">The Registry</p>
            <p className="text-[11px] text-muted">Document preview</p>
          </div>
        </div>

        <div role="tablist" aria-label="Document" className="flex flex-wrap gap-1 rounded-2xl bg-mist p-1">
          {tabs.map((tab) => {
            const selected = tab.kind === active;
            return (
              <button
                key={tab.kind}
                role="tab"
                aria-selected={selected}
                onClick={() => onChange(tab.kind)}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-[12.5px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                selected ? 'bg-white text-ink shadow-sm' : 'text-muted hover:text-ink'}`
                }>
                
                {tab.label}
              </button>);

          })}
        </div>

        <div className="flex flex-wrap gap-2 sm:ml-auto">
          {tabs.map((tab) => {
            const primary = tab.kind === active;
            return (
              <button
                key={tab.kind}
                onClick={() => onDownload(tab.kind)}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-[12.5px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                primary ?
                'bg-ink text-white hover:bg-ink-soft' :
                'border border-line bg-white text-ink hover:bg-mist'}`
                }>
                
                <DownloadIcon className="h-3.5 w-3.5" aria-hidden="true" />
                Download {tab.kind === 'brochure' ? 'Brochure' : tab.label} PDF
              </button>);

          })}
        </div>
      </div>

      <div className="border-t border-line bg-mist/60">
        <p className="mx-auto flex max-w-[1100px] flex-wrap items-center gap-x-2 gap-y-1 px-4 py-2 text-[11.5px] text-muted sm:px-6">
          {active === 'quotation' ?
          <>
              <UserIcon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              <span className="font-semibold text-ink">Personalised quotation</span>
              <span>
                Prepared for {quotation.clientName} · {quotation.reference}
              </span>
              <span className="rounded bg-white px-2 py-0.5 text-[10.5px] text-body">
                Sample data — customer, VAT and amounts are test values
              </span>
            </> :

          <>
              <GlobeIcon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              <span className="font-semibold text-ink">Public brochure</span>
              <span>No customer data, quotation reference or payable amount · free to download</span>
            </>
          }
        </p>
      </div>
      {active === 'quotation' && setup}
    </header>);

}