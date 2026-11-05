import React from 'react';
import { company } from '../../data/registry';

interface A4PageProps {
  children: React.ReactNode;
  pageNumber: number;
  pageCount: number;
  tone?: 'light' | 'dark';
  /** Right-hand running header label. Omit for cover pages. */
  runningHeader?: string;
  /** When true, children render edge to edge (no side padding). */
  bleed?: boolean;
}

export function A4Page({
  children,
  pageNumber,
  pageCount,
  tone = 'light',
  runningHeader,
  bleed = false
}: A4PageProps) {
  const dark = tone === 'dark';
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section
      className={`a4-page relative mx-auto flex h-[297mm] w-[210mm] flex-col overflow-hidden shadow-[0_1px_3px_rgba(31,28,47,0.08),0_12px_32px_rgba(31,28,47,0.08)] ${
      dark ? 'bg-ink text-white' : 'bg-white text-ink'}`
      }
      aria-label={`Page ${pageNumber} of ${pageCount}`}>
      
      {runningHeader &&
      <header className="flex items-center justify-between border-b border-line px-14 pb-4 pt-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-5 bg-accent" aria-hidden="true" />
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink">
              House of Companies
            </span>
          </div>
          <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-muted">
            {runningHeader}
          </span>
        </header>
      }

      <div className={`flex min-h-0 flex-1 flex-col ${bleed ? '' : 'px-14'}`}>{children}</div>

      <footer className="flex items-end justify-between px-14 pb-9 pt-4">
        <span
          className={`border-b-2 border-accent pb-1 text-[9px] font-bold uppercase tracking-[0.16em] ${
          dark ? 'text-white' : 'text-ink'}`
          }>
          
          {company.site}
        </span>
        <span
          className={`text-[9px] font-medium tabular-nums tracking-[0.14em] ${
          dark ? 'text-white/60' : 'text-muted'}`
          }>
          
          {pad(pageNumber)} / {pad(pageCount)}
        </span>
      </footer>
    </section>);

}