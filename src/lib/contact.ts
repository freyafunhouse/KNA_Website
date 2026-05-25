export const KNA_PHONE = "+61 467 817 535";
export const KNA_PHONE_HREF = "tel:+61467817535";

export const KNA_EMAIL_COMPANY = "knaptyltd@yahoo.com";
export const KNA_EMAIL_KRIS = "krisnnahuys@yahoo.com.au";

/** Primary company inbox for general enquiries and mailto links */
export const KNA_EMAIL = KNA_EMAIL_COMPANY;

export const KNA_EMAILS = [
  { address: KNA_EMAIL_COMPANY, label: "Company" },
  { address: KNA_EMAIL_KRIS, label: "Kris Nahuys" },
] as const;

export const KNA_CV_MAILTO_SUBJECT = "CV request – KNA website";

export function buildMailtoHref(
  email: string,
  options?: { subject?: string; body?: string }
): string {
  const params = new URLSearchParams();
  if (options?.subject) params.set("subject", options.subject);
  if (options?.body) params.set("body", options.body);
  const query = params.toString();
  return query ? `mailto:${email}?${query}` : `mailto:${email}`;
}
