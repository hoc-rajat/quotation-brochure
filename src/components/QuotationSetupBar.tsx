import { CheckIcon } from 'lucide-react';
import { memberships, registrationServices } from '../data/registry';
import { formatEuro } from '../utils/quotation';
import type { MembershipOption, RegistrationId } from '../types/registry';

interface QuotationSetupBarProps {
  services: RegistrationId[];
  membership: MembershipOption;
  onToggleService: (id: RegistrationId) => void;
  onMembershipChange: (option: MembershipOption) => void;
}

const membershipOptions: {id: MembershipOption;label: string;}[] = [
{ id: 'registry', label: `${memberships.registry.name} · ${formatEuro(memberships.registry.monthly)}/mo` },
{ id: 'unlimited', label: `${memberships.unlimited.name} · ${formatEuro(memberships.unlimited.monthly)}/mo` },
{ id: 'existing', label: 'Existing relationship' }];


export function QuotationSetupBar({
  services,
  membership,
  onToggleService,
  onMembershipChange
}: QuotationSetupBarProps) {
  return (
    <div className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-start gap-x-8 gap-y-3 px-4 py-3 sm:px-6">
        <fieldset>
          <legend className="mb-1.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-muted">
            Registration service
          </legend>
          <div className="flex flex-wrap gap-1.5">
            {registrationServices.map((service) => {
              const selected = services.includes(service.id);
              return (
                <button
                  key={service.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => onToggleService(service.id)}
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  selected ?
                  'border-ink bg-ink text-white' :
                  'border-line bg-white text-body hover:border-muted'}`
                  }>
                  
                  {selected && <CheckIcon className="h-3 w-3" strokeWidth={3} aria-hidden="true" />}
                  {service.shortName.replace(' Registration', '')}
                  <span className={selected ? 'text-white/60' : 'text-muted'}>{formatEuro(service.fee)}</span>
                </button>);

            })}
          </div>
          <p className="mt-1.5 text-[10.5px] text-muted">
            Branch and incorporation are alternative routes — selecting one replaces the other.
          </p>
        </fieldset>

        <fieldset>
          <legend className="mb-1.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-muted">
            Ongoing arrangement
          </legend>
          <div role="radiogroup" className="flex flex-wrap rounded-full bg-mist p-1">
            {membershipOptions.map((option) => {
              const selected = option.id === membership;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => onMembershipChange(option.id)}
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-[12px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  selected ? 'bg-white text-ink shadow-sm' : 'text-muted hover:text-ink'}`
                  }>
                  
                  {option.label}
                </button>);

            })}
          </div>
        </fieldset>


      </div>
    </div>);

}