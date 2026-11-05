import { memberships, quotation, registrationServices } from '../data/registry';
import type {
  Membership,
  MembershipOption,
  Quote,
  QuoteLine,
  RegistrationId,
  RegistrationService } from
'../types/registry';

export function formatEuro(amount: number, withCents = false) {
  const digits = withCents ? 2 : 0;
  return `€${amount.toLocaleString('en-GB', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  })}`;
}

export function buildQuote(
serviceIds: RegistrationId[],
option: MembershipOption,
version: number)
: Quote {
  const services = registrationServices.filter((s) => serviceIds.includes(s.id));
  const membership = option === 'existing' ? null : memberships[option];
  const oneOffTotal = services.reduce((sum, s) => sum + s.fee, 0);

  const lines: QuoteLine[] = [
  {
    label: 'One-off registration',
    hint: services.length === 1 ? services[0].shortName : `${services.length} services`,
    amount: oneOffTotal
  }];

  if (membership) {
    lines.push({
      label: `${membership.name} — first 12 months`,
      hint: 'After successful registration (sample schedule)',
      amount: membership.firstYear
    });
  }

  const subtotal = lines.reduce((sum, l) => sum + l.amount, 0);
  const vat = Math.round(subtotal * quotation.vatRate * 100) / 100;

  const alternativeMembership: Membership | null =
  option === 'registry' ? memberships.unlimited : option === 'unlimited' ? memberships.registry : null;

  return {
    services,
    membershipOption: option,
    membership,
    title: buildTitle(services),
    subtitle: buildSubtitle(services, option),
    summary: buildSummary(services, option),
    ongoingNote: buildOngoingNote(services, membership),
    oneOffTotal,
    lines,
    subtotal,
    vat,
    total: subtotal + vat,
    alternative: alternativeMembership ?
    { membership: alternativeMembership, subtotal: oneOffTotal + alternativeMembership.firstYear } :
    null,
    version
  };
}

function joinList(items: string[], conjunction: string) {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')} ${conjunction} ${items[items.length - 1]}`;
}

function buildTitle(services: RegistrationService[]) {
  const hasIncorporation = services.some((s) => s.id === 'incorporation');
  const registrations = services.filter((s) => s.id !== 'incorporation').map((s) => s.titleWord);
  if (!registrations.length) return 'Your Netherlands Legal Entity Incorporation Proposal';
  const regPart = `${joinList(registrations, '&')} Registration`;
  return hasIncorporation ?
  `Your Netherlands Incorporation & ${regPart} Proposal` :
  `Your Netherlands ${regPart} Proposal`;
}

function buildSubtitle(services: RegistrationService[], option: MembershipOption) {
  const onlyIncorporation = services.every((s) => s.id === 'incorporation');
  const kind = onlyIncorporation ? 'formation' : 'registration';
  if (option === 'existing') return `One-off ${kind} support, added to your existing Registry relationship.`;
  const relationship = option === 'unlimited' ? 'Registry Unlimited' : 'Registry';
  return `One-off ${kind} support, followed by an ongoing ${relationship} relationship.`;
}

function buildSummary(services: RegistrationService[], option: MembershipOption) {
  const processes = joinList(
    services.map((s) => s.processLabel),
    'and'
  );
  const plural = services.length > 1 ? 'processes' : 'process';
  const which = option === 'existing' ? 'existing' : 'selected';
  return `We will support the agreed ${processes} ${plural} and maintain the continuing company record and administration through your ${which} Registry service.`;
}

function buildOngoingNote(services: RegistrationService[], membership: Membership | null) {
  if (!membership) return 'Your existing Registry relationship continues; this proposal adds no new membership charge.';
  const hasBranch = services.some((service) => service.id === 'branch');
  return `${hasBranch ? 'Select your membership before proceeding. Registry billing begins after successful KvK registration.' : 'Sample assumption: membership billing begins after successful registration; the commencement condition requires commercial confirmation.'} The first 12 months are billed in advance at that stage. From month 13: ${formatEuro(membership.monthly)}/month excl. VAT, cancellable monthly. Confirm the approved arrangement before issue.`;
}
