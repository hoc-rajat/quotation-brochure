import { ArrowDown, Check, Files, ListChecks, MessagesSquare, UserRound } from 'lucide-react';
import { A4Page } from '../document/A4Page';
import { PageIntro } from '../document/PageIntro';
import { StepList } from '../document/StepList';
import { Logo } from '../Logo';
import { unlimitedBrochure } from '../../data/unlimitedBrochure';

function DiscussMove({ dark = false }: {dark?: boolean}) {
  return <a href={unlimitedBrochure.contactUrl} className={`inline-flex items-center gap-5 rounded-full px-5 py-3 text-[12px] font-semibold ${dark ? 'bg-white text-ink' : 'bg-ink text-white'}`}>
    Discuss your move <span aria-hidden="true" className="text-accent">↗</span>
  </a>;
}

const workflow = [
  { icon: Files, title: 'Upload your existing records', text: 'Start with your latest annual accounts, supporting ledger and current bookkeeping records. They give us a practical starting point.', owner: 'You share what you have' },
  { icon: ListChecks, title: 'We review and identify gaps', text: 'House of Companies reviews the available information: what is usable, what is missing and what needs clarification. If records are with your accountant, we explain what is needed.', owner: 'House of Companies reviews' },
  { icon: MessagesSquare, title: 'Focused questions, in context', text: 'Emma helps organise clarification questions and your answers around the relevant records, so each request has a clear purpose.', owner: 'Emma helps organise' },
  { icon: UserRound, title: 'A person coordinates your work', text: 'Your personal Registry Account Manager coordinates the agreed bookkeeping work and involves the appropriate specialist when needed.', owner: 'Your Account Manager coordinates' }
];

export function UnlimitedBrochureDocument() {
  return <>
    <A4Page pageNumber={1} pageCount={4} tone="dark">
      <div className="flex items-center justify-between pt-12">
        <Logo className="h-11" />
        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-lilac">Netherlands edition</span>
      </div>
      <div className="mt-16">
        <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-accent-light">Registry Unlimited</p>
        <h1 className="mt-5 max-w-[650px] text-[52px] font-extrabold leading-[1.04] tracking-[-0.035em]">Your business moves.<br />Your books should <span className="whitespace-nowrap">keep up.</span></h1>
        <p className="mt-6 max-w-[570px] text-[21px] font-medium leading-[1.4]">Bookkeeping and company support for international entrepreneurs running a Dutch company.</p>
      </div>
      <section className="mt-10 border-t border-ink-line pt-6">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.14em] text-lilac">Does this feel familiar?</h2>
        <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 text-[12px] text-white/80">
          {['Scattered financial records', 'Unclear bookkeeping progress', 'Repeated requests for information', 'Slow communication', 'Uncertainty about what your accountant needs'].map(item => <li key={item} className="flex gap-3"><span className="text-accent-light">—</span>{item}</li>)}
        </ul>
      </section>
      <section className="mt-8 rounded-xl bg-ink-soft px-6 py-5">
        <h2 className="text-[17px] font-semibold">More than getting the year filed.</h2>
        <p className="mt-2 text-[12px] leading-[1.7] text-white/75">Registry Unlimited brings routine bookkeeping and agreed filing work into one continuing House of Companies relationship, with organised records, clear next steps and a personal Account Manager.</p>
      </section>
      <div className="mt-auto flex items-center justify-between gap-8 pt-6">
        <p className="max-w-[390px] text-[12px] leading-[1.65] text-white/75">Considering a change? You can discuss switching with us before cancelling your current accountant.</p>
        <div className="shrink-0"><DiscussMove dark /></div>
      </div>
    </A4Page>

    <A4Page pageNumber={2} pageCount={4} runningHeader="Registry Unlimited · Working together">
      <div className="pt-8"><PageIntro eyebrow="How House of Companies works" title="Upload what you have. Get a clear next step." lead="A practical working rhythm: existing records, organised review, focused questions and a named person coordinating the work." /></div>
      <ol className="mt-8">
        {workflow.map((step, index) => <li key={step.title}>
          {index > 0 && <div className="flex h-7 items-center pl-6 text-accent"><ArrowDown size={16} aria-hidden="true" /></div>}
          <div className="grid grid-cols-[48px_1fr] gap-5 rounded-xl border border-line px-5 py-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-mist text-accent"><step.icon size={23} strokeWidth={1.6} aria-hidden="true" /></div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-muted">0{index + 1} · {step.owner}</p>
              <h3 className="mt-1 text-[16px] font-semibold">{step.title}</h3>
              <p className="mt-2 text-[12px] leading-[1.6] text-body">{step.text}</p>
            </div>
          </div>
        </li>)}
      </ol>
      <aside className="mt-6 border-l-2 border-accent bg-mist px-5 py-4">
        <h2 className="text-[16px] font-semibold">Technology supports the relationship.<br />People remain responsible.</h2>
        <p className="mt-2 text-[12px] leading-[1.6] text-body">House of Companies manages the agreed routine work. You are not buying software and being left to do the bookkeeping yourself.</p>
      </aside>
      <div className="mt-auto pt-5"><DiscussMove /></div>
    </A4Page>

    <A4Page pageNumber={3} pageCount={4} runningHeader="Registry Unlimited · Price and scope">
      <div className="pt-8"><PageIntro eyebrow="Your ongoing service" title="One managed relationship. A clear price." /></div>
      <section className="mt-7 rounded-xl bg-ink px-7 py-6 text-white">
        <h2 className="text-[15px] font-semibold">Registry Unlimited</h2>
        <p className="mt-3 text-[49px] font-extrabold leading-none tracking-tight">€199<span className="ml-2 text-[17px] font-medium">/ month</span></p>
        <p className="mt-4 text-[14px] font-semibold">First year: €2,388 paid in advance, excluding applicable VAT.</p>
        <p className="mt-3 text-[12px] leading-[1.6] text-white/70">For one eligible company’s defined managed bookkeeping and recurring financial workflow.</p>
      </section>
      <section className="mt-7">
        <h2 className="text-[17px] font-bold">Your agreed service can include</h2>
        <ul className="mt-4 grid grid-cols-2 gap-x-7 gap-y-4">
          {unlimitedBrochure.included.map(item => <li key={item} className="flex gap-3 text-[12px] leading-[1.6] text-body"><Check size={15} className="mt-1 shrink-0 text-accent" aria-hidden="true" />{item}</li>)}
        </ul>
      </section>
      <section className="mt-6 rounded-xl bg-mist px-6 py-5">
        <h2 className="text-[14px] font-semibold">Separate scope, agreed before work begins</h2>
        <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-[11.5px] leading-[1.5] text-body">
          {unlimitedBrochure.excluded.map(item => <li key={item}>• {item}</li>)}
        </ul>
      </section>
      <div className="mt-6 grid grid-cols-2 gap-7 border-t border-line pt-5">
        <section><h2 className="text-[13px] font-semibold">Clear before you commit</h2><p className="mt-2 text-[11.5px] leading-[1.6] text-body">Your personalised quotation confirms the entity, country, covered periods, service scope, applicable taxes, start date and conditions. Unlimited does not mean every service across every company or country.</p></section>
        <section><h2 className="text-[13px] font-semibold">After the first year</h2><p className="mt-2 text-[11.5px] leading-[1.6] text-body">The service continues with monthly cancellation under the applicable conditions. First-year annual payment does not mean a new compulsory annual commitment.</p></section>
      </div>
      <div className="mt-auto pt-5"><DiscussMove /></div>
    </A4Page>

    <A4Page pageNumber={4} pageCount={4} runningHeader="Registry Unlimited · Making the move">
      <div className="pt-8"><PageIntro eyebrow="How switching works" title="A better working relationship starts with a practical handover." lead="Start with a conversation about what needs to improve. Together, we can consider your existing arrangement and the work ahead." /></div>
      <div className="mt-6"><StepList steps={unlimitedBrochure.handover} /></div>
      <aside className="mt-6 rounded-xl border border-line px-6 py-5">
        <h2 className="text-[16px] font-semibold">You do not need a perfect file to start.</h2>
        <p className="mt-3 text-[12px] leading-[1.7] text-body">If records are missing or earlier periods need attention, tell us. We identify what is needed for the handover. Backlog correction and historical reconstruction may require separate scope, explained and agreed before additional work begins.</p>
      </aside>
      <section className="mt-6 rounded-xl bg-ink px-7 py-5 text-white">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-lilac">House of Companies</p>
        <h2 className="mt-3 text-[27px] font-bold leading-[1.2] tracking-tight">Make your next working relationship a clearer one.</h2>
        <p className="mt-3 max-w-[510px] text-[12px] leading-[1.7] text-white/70">Tell us about your Dutch company and what you want to change. We will discuss the practical next steps with you.</p>
        <div className="mt-5"><DiscussMove dark /></div>
        <p className="mt-3 text-[10px] text-white/60">{unlimitedBrochure.contactUrl.replace('https://', '')}</p>
      </section>
    </A4Page>
  </>;
}
