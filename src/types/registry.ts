export type DocumentKind = 'quotation' | 'brochure';

export type RegistrationId = 'branch' | 'vat' | 'employer' | 'incorporation';
export type MembershipId = 'registry' | 'unlimited';
export type MembershipOption = MembershipId | 'existing';

export interface ScopeGroup {
  title: string;
  subtitle: string;
  items: string[];
  note?: {label: string;text: string;};
}

export interface Step {
  title: string;
  text: string;
}

export interface Benefit {
  title: string;
  text: string;
}

export interface PricingRow {
  label: string;
  registry: string;
  unlimited: string;
}

export interface RegistrationService {
  id: RegistrationId;
  /** Full customer-facing name, e.g. "Netherlands Branch Registration". */
  name: string;
  /** Short name used in chips and summary lines, e.g. "Branch Registration". */
  shortName: string;
  /** Word used when composing the proposal title, e.g. "Branch". */
  titleWord: string;
  /** Used in the summary sentence, e.g. "branch-registration". */
  processLabel: string;
  fee: number;
  billing: string;
  scopeLine: string;
  included: string[];
  boundary: {label: string;text: string;};
  ongoingNote: string;
  customerTask: string;
  exclusion: string;
  externalCosts: string;
}

export interface Membership {
  id: MembershipId;
  name: string;
  summary: string;
  monthly: number;
  firstYear: number;
  scope: ScopeGroup;
}

export interface QuoteLine {
  label: string;
  hint: string;
  amount: number;
}

export interface Quote {
  services: RegistrationService[];
  membershipOption: MembershipOption;
  membership: Membership | null;
  title: string;
  subtitle: string;
  summary: string;
  ongoingNote: string;
  oneOffTotal: number;
  lines: QuoteLine[];
  subtotal: number;
  vat: number;
  total: number;
  alternative: {membership: Membership;subtotal: number;} | null;
  version: number;
}