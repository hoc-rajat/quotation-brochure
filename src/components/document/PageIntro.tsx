
interface PageIntroProps {
  eyebrow: string;
  title: string;
  lead?: string;
}

export function PageIntro({ eyebrow, title, lead }: PageIntroProps) {
  return (
    <div>
      <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
        {title}
      </h2>
      {lead && <p className="mt-3 max-w-[560px] text-[12.5px] leading-[1.6] text-body">{lead}</p>}
    </div>);

}