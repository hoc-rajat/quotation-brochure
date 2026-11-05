import type {
  Benefit,
  Membership,
  MembershipId,
  PricingRow,
  RegistrationService,
  ScopeGroup,
  Step } from
'../types/registry';

export const company = {
  site: 'houseofcompanies.io',
  portal: 'clientdashboard.houseofcompanies.io',
  contactUrl: 'houseofcompanies.io/contact',
  address: 'House of Companies B.V. · Laanzichtweg 60, 4847 SJ Breda, Netherlands'
};

export const quotation = {
  reference: 'HC-REG-20261029-TEST',
  issued: 'Issued 29 October 2026',
  clientName: 'Sample Trading B.V.',
  clientContact: 'Sample Lead, Director',
  contactName: 'Dennis Vermeulen',
  contactRole: 'Head of Corporate & Tax Department',
  vatRate: 0.21
};

/* ── One-off registration services ─────────────────────────────── */

export const registrationServices: RegistrationService[] = [
{
  id: 'branch',
  name: 'Netherlands Branch Registration',
  shortName: 'Branch Registration',
  titleWord: 'Branch',
  processLabel: 'branch-registration',
  fee: 500,
  billing: 'Once',
  scopeLine: 'Registering your foreign company’s Dutch branch with the KVK',
  included: [
  'Review of your parent-company documents for the branch filing',
  'Preparation of the branch registration forms and supporting documents',
  'Submission through the applicable authority route and follow-up until registered'],

  boundary: {
    label: 'Boundary',
    text: 'VAT and employer registration are not part of this fee unless listed separately in your one-off services.'
  },
  ongoingNote:
  'Your registration establishes the branch route; your Registry keeps the continuing records, documents and next obligations organised.',
  customerTask:
  'Provide your parent company’s extract, articles and details of the branch representative',
  exclusion: 'VAT registration, future filings or employer registration — unless listed in your one-off services',
  externalCosts:
  'Chamber of Commerce (KVK) fees and certified translations, where required, are payable separately.'
},
{
  id: 'vat',
  name: 'Netherlands VAT Registration',
  shortName: 'VAT Registration',
  titleWord: 'VAT',
  processLabel: 'VAT-registration',
  fee: 500,
  billing: 'Once',
  scopeLine: 'Applying for your Dutch VAT number with the Tax Administration',
  included: [
  'Assessment of the information needed for your VAT application',
  'Preparation and submission of the VAT registration request',
  'Follow-up with the Tax Administration until your VAT number is issued'],

  boundary: {
    label: 'Registration only',
    text: 'This fee covers obtaining your VAT number. VAT return filing afterwards is not included.'
  },
  ongoingNote:
  'VAT registration is the initial service; your ongoing arrangement determines how records and applicable return work are handled.',
  customerTask:
  'Describe your expected Dutch activities and transactions to support the VAT application',
  exclusion:
  'VAT return filing after registration — self-service under The Registry, managed under Registry Unlimited',
  externalCosts: 'Any authority or third-party costs are confirmed with you before issue.'
},
{
  id: 'employer',
  name: 'Netherlands Employer Registration',
  shortName: 'Employer Registration',
  titleWord: 'Employer',
  processLabel: 'employer-registration',
  fee: 500,
  billing: 'Once',
  scopeLine: 'Registering your entity as an employer for Dutch wage tax',
  included: [
  'Assessment of the employer-registration information required',
  'Preparation and submission of the employer (wage-tax) registration',
  'Follow-up until your wage-tax number is issued'],

  boundary: {
    label: 'Payroll is separate',
    text: 'Payroll processing and ongoing wage-tax returns are configured separately — under either membership.'
  },
  ongoingNote:
  'Payroll and ongoing wage-tax work are configured separately and are not part of your Registry membership.',
  customerTask: 'Share details of your first employee(s) and their expected start date',
  exclusion: 'Payroll processing and ongoing wage-tax work — configured separately',
  externalCosts: 'Any authority or third-party costs are confirmed with you before issue.'
},
{
  id: 'incorporation',
  name: 'Netherlands Legal Entity Incorporation',
  shortName: 'Legal Entity Incorporation',
  titleWord: 'Incorporation',
  processLabel: 'incorporation',
  fee: 1999,
  billing: 'Once · standard route',
  scopeLine: 'Forming a Dutch private limited company (B.V.) via the standard route',
  included: [
  'Preparation of the deed of incorporation and articles with the involved notary',
  'Coordination of shareholder and director identification',
  'Registration of the new B.V. with the Chamber of Commerce (KVK)'],

  boundary: {
    label: 'No guaranteed outcomes',
    text: 'Payment does not guarantee incorporation, bank account opening, tax treatment or authority completion.'
  },
  ongoingNote:
  'After formation, your Registry keeps the new company’s record, documents and obligations organised.',
  customerTask:
  'Provide identification for all shareholders and directors and confirm the proposed company name',
  exclusion: 'Bank account opening, tax rulings and authority decisions',
  externalCosts:
  'Notary and other external costs follow the approved configuration for a Dutch B.V. and are confirmed in writing before issue.'
}];


/** Branch and incorporation are alternative routes for the same entity. */
export const exclusiveServices: Partial<Record<string, string>> = {
  branch: 'incorporation',
  incorporation: 'branch'
};

/* ── Ongoing memberships ───────────────────────────────────────── */

export const memberships: Record<MembershipId, Membership> = {
  registry: {
    id: 'registry',
    name: 'The Registry',
    summary: 'Company administration membership',
    monthly: 49,
    firstYear: 588,
    scope: {
      title: 'Your Registry, after registration',
      subtitle: 'The Registry · €49 / month',
      items: [
      'Company record, documents and relevant correspondence stored together',
      'A clear compliance calendar with supported self-service workflows',
      'Emma 24/7 and a personal account manager on working days',
      'Annual accounts and CIT return for qualifying low-activity companies'],

      note: {
        label: 'Eligibility',
        text: 'Annual work applies to companies that qualify as low-activity for the covered year. We confirm this with you first.'
      }
    }
  },
  unlimited: {
    id: 'unlimited',
    name: 'Registry Unlimited',
    summary: 'Managed bookkeeping and recurring financial work',
    monthly: 199,
    firstYear: 2388,
    scope: {
      title: 'Your Registry Unlimited, after registration',
      subtitle: 'Registry Unlimited · €199 / month',
      items: [
      'Everything in The Registry — record, calendar, Emma and account manager',
      'Defined managed bookkeeping and eligible recurring financial work',
      'VAT return filing within the agreed workflow',
      'Annual accounts and CIT within the defined eligible workflow'],

      note: {
        label: 'Scope',
        text: 'ICP filings, payroll and additional-country work remain separate and need explicit scope.'
      }
    }
  }
};

export const existingRelationshipScope: ScopeGroup = {
  title: 'Your existing Registry relationship',
  subtitle: 'Already active · no new charge',
  items: [
  'Your new registration is added to your current company record',
  'Deadlines from this registration appear in your compliance calendar']

};

/* ── Quotation: process and conditions ─────────────────────────── */

export const quotationBaseTasks = [
'Check that your company and contact details in this quotation are correct',
'Complete onboarding in the client portal, including identity verification (KYC)'];


export const quotationGeneralExclusions = [
'Independent audit, assurance or specialist opinions',
'ICP (Intra-Community) filings — available separately',
'Additional-country work — needs explicit scope'];


export const quotationSteps: Step[] = [
{
  title: 'Review your proposal',
  text: 'Need a change? We update the scope and amounts before you accept.'
},
{ title: 'Accept securely', text: 'Review the confirmed payment schedule in your client portal. Pay only the amount due at acceptance.' },
{ title: 'Complete onboarding', text: 'Finish onboarding, including identity verification (KYC).' },
{
  title: 'We handle your registration',
  text: 'We prepare and submit it. Authority processing times apply.'
},
{
  title: 'Your Registry continues',
  text: 'Records, documents and next obligations stay organised in one place.'
}];


export const importantInfo = [
'This sample quotation is not an invoice. Confirm the payment schedule, membership commencement and renewal terms before issue.',
'Payment does not guarantee registration outcomes; authority processing and decisions apply.',
'Amounts are in euros. VAT shown is a sample treatment, confirmed from customer and transaction facts before issue.',
'The Registry and Registry Unlimited are alternatives. Only the selected membership is charged.'];


/* ── Brochure ───────────────────────────────────────────────────── */

export const benefits: Benefit[] = [
  { title: 'Stay organised', text: 'Company records and important documents together in one place.' },
  { title: 'Stay informed', text: 'A compliance calendar helps you keep relevant deadlines in view.' },
  { title: 'Get support', text: 'Emma and your personal Registry account manager help you find your next step.' }
];

export const scopeGroups: ScopeGroup[] = [
{
  title: 'Support when you need it',
  subtitle: 'Real answers, day and night.',
  items: [
  'Emma — 24/7 support for quick answers whenever you need them',
  'A personal Registry account manager, available 5 days a week for prompt, personal replies']

},
{
  title: 'Your company, organised',
  subtitle: 'One place for records, documents and deadlines.',
  items: [
  'Your company record and documents, stored together',
  'A clear compliance calendar',
  'Supported self-service compliance workflows']

},
{
  title: 'Your annual obligations',
  subtitle: 'For eligible low-activity companies.',
  items: [
  'Bookkeeping needed for annual reporting (defined low-activity scope)',
  'Preparation of your annual accounts / financial statements',
  'Supported filing or deposit of your annual accounts',
  'Preparation and supported submission of your corporate income tax (CIT) return'],

  note: {
    label: 'Eligibility',
    text: 'For companies that qualify as low-activity for the covered year. We confirm eligibility with you before this work begins.'
  }
}];


export const brochureClientTasks = [
'Accurate company and contact details',
'Completing onboarding, including identity verification (KYC) where required',
'The information we request to confirm low-activity eligibility before annual work begins'];


export const exclusions = [
'Ongoing managed VAT filing for operating companies — available with Registry Unlimited',
'Assisted annual work if your company does not qualify as low-activity for the covered year',
'Independent audit, assurance, specialist opinions or external engagements',
'ICP (Intra-Community) filings — available separately when selected',
'Payroll and wage-tax work — configured separately'];


export const brochureSteps: Step[] = [
  { title: 'Explore The Registry', text: 'Discover how records, deadlines and support come together.' },
  { title: 'Check the fit', text: 'Discuss your company’s activities and the support you need.' },
  { title: 'Speak to an advisor', text: 'Request a personalised quotation for your company.' },
  { title: 'Review your proposed arrangement', text: 'Check the service scope, eligibility and applicable billing terms.' },
  { title: 'Continue to onboarding', text: 'Follow the approved onboarding journey and provide the requested information.' }
];

export const pricingRows: PricingRow[] = [
{
  label: 'Main role',
  registry: 'Company administration and supported self-service workflows',
  unlimited: 'Defined managed bookkeeping and eligible recurring financial work'
},
{
  label: 'Annual accounts / CIT',
  registry: 'Included only for qualifying low-activity companies, under the applicable conditions',
  unlimited: 'Included within the defined eligible annual workflow'
},
{ label: 'ICP filings', registry: 'Separate', unlimited: 'Separate' },
{ label: 'Payroll / wage-tax', registry: 'Separate', unlimited: 'Separate' },
{ label: 'First year', registry: '€588 billed in advance', unlimited: '€2,388 billed in advance' }];