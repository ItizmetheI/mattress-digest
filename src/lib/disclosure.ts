// Ownership / compensation disclosure.
//
// "Independently operated" and "no commissions" are the highest-risk claims on the site:
// asserting them before ownership, operator, brand affiliations, and every form of
// consideration are certified is a real FTC-disclosure risk. This module fails CLOSED —
// the independence and no-commission wording only ships when PUBLIC_DISCLOSURE_APPROVED=true.
//
// Until then every surface states what is verifiable (one published rubric, links go to the
// manufacturer) and says plainly that ownership and compensation details are not yet published.
const disclosureApproved = process.env.PUBLIC_DISCLOSURE_APPROVED === 'true';

export const isDisclosureApproved = (): boolean => disclosureApproved;

export const EDITORIAL_INDEPENDENCE_DISCLOSURE = disclosureApproved
  ? 'The Mattress Digest is an independently operated editorial publication.'
  : 'The Mattress Digest applies one published seven-metric rubric to every covered brand. Its ownership and operator details are being certified and are not published yet.';

export const LINK_DISCLOSURE = disclosureApproved
  ? 'Product links go directly to manufacturer or retailer pages. The Mattress Digest does not receive per-click or per-sale commissions from those links.'
  : 'Product links go directly to manufacturer or retailer pages. Any commercial relationship or compensation arrangement behind those links is being certified and will be disclosed here before launch.';

export const RANKING_DISCLOSURE =
  `${EDITORIAL_INDEPENDENCE_DISCLOSURE} ${LINK_DISCLOSURE} Rankings use the same published 7-metric rubric across every covered brand.`;

/** Short badge text. Never asserts independence unless the disclosure is certified. */
export const TRUST_BADGE_LABEL = disclosureApproved
  ? 'Independently operated'
  : 'One published rubric';
