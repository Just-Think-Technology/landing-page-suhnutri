import { siteContent } from "@/content/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteContent.name,
    description: siteContent.seo.description,
    email: siteContent.contact.email,
    telephone: `+${siteContent.contact.whatsapp}`,
    founder: {
      "@type": "Person",
      name: siteContent.professional.name,
      jobTitle: "Nutricionista",
      identifier: "CRN-3 85800",
    },
    knowsAbout: siteContent.services.groups.flatMap((group) => [...group.items]),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
