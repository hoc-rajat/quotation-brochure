import { A4Page } from '../document/A4Page';
import { Logo } from '../Logo';
import { benefits } from '../../data/registry';

interface BrochureCoverPageProps {
  pageCount: number;
}

export function BrochureCoverPage({ pageCount }: BrochureCoverPageProps) {
  return (
    <A4Page pageNumber={1} pageCount={pageCount} tone="dark">
      <div className="pt-12">
        <span className="block h-0.5 w-9 bg-accent" aria-hidden="true" />
        <Logo className="mt-8 h-12" />
      </div>

      <div className="mt-20">
        <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-lilac">
          Company administration membership
        </p>
        <h1 className="mt-4 text-[76px] font-extrabold leading-[0.95] tracking-[-0.045em]">
          The Registry
        </h1>
        <p className="mt-6 max-w-[520px] text-[24px] font-medium leading-[1.25] tracking-[-0.01em]">
          Your Dutch company administration, organised and on track.
        </p>
        <p className="mt-6 max-w-[520px] text-[13px] leading-[1.7] text-white/70">
          One membership that keeps your company record, documents and compliance deadlines in one place
          — with 24/7 answers from Emma and a personal account manager on working days.
        </p>
      </div>

      <div className="flex flex-1 flex-col justify-evenly pt-6">
        <div className="grid grid-cols-2 gap-10 border-t border-ink-line pt-6">
          <div>
            <h2 className="text-[8.5px] font-bold uppercase tracking-[0.16em] text-lilac">Who it is for</h2>
            <p className="mt-2.5 text-[11.5px] leading-[1.65] text-white/80">
              Dutch companies that want their administration organised and their deadlines visible, with
              personal help close at hand.
            </p>
          </div>
          <div>
            <h2 className="text-[8.5px] font-bold uppercase tracking-[0.16em] text-lilac">What it solves</h2>
            <p className="mt-2.5 text-[11.5px] leading-[1.65] text-white/80">
              Scattered documents and unclear deadlines. Your records, calendar and support come together
              in one dependable place.
            </p>
          </div>
        </div>

        <ul className="mt-6 grid grid-cols-3 gap-6 rounded-xl bg-ink-soft px-6 py-6">
          {benefits.map((benefit) =>
          <li key={benefit.title}>
              <span className="block h-0.5 w-4 bg-accent" aria-hidden="true" />
              <h3 className="mt-3 whitespace-nowrap text-[12.5px] font-semibold">{benefit.title}</h3>
              <p className="mt-1.5 text-[10.5px] leading-[1.6] text-white/65">{benefit.text}</p>
            </li>
          )}
        </ul>
      </div>
    </A4Page>);

}