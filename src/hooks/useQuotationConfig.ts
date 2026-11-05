import { useState } from 'react';
import { exclusiveServices, registrationServices } from '../data/registry';
import type { MembershipOption, RegistrationId } from '../types/registry';

const ORDER = registrationServices.map((s) => s.id);

export function useQuotationConfig() {
  const [services, setServices] = useState<RegistrationId[]>(['branch']);
  const [membership, setMembershipState] = useState<MembershipOption>('registry');
  const [version, setVersion] = useState(1);

  const toggleService = (id: RegistrationId) => {
    const selected = services.includes(id);
    // A quotation always needs at least one service.
    if (selected && services.length === 1) return;

    let next: RegistrationId[];
    if (selected) {
      next = services.filter((s) => s !== id);
    } else {
      const exclusive = exclusiveServices[id];
      next = [...services.filter((s) => s !== exclusive), id];
    }
    setServices(ORDER.filter((s) => next.includes(s)));
    setVersion((v) => v + 1);
  };

  const setMembership = (option: MembershipOption) => {
    if (option === membership) return;
    setMembershipState(option);
    setVersion((v) => v + 1);
  };

  return { services, membership, version, toggleService, setMembership };
}