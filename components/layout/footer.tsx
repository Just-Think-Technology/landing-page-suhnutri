import { siteContent } from "@/content/site";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="w-56 sm:w-64">
            <Logo />
          </div>
          <p className="mt-6 font-heading text-base font-bold text-ink">
            {siteContent.professional.name}
          </p>
          <p className="mt-1 text-sm text-ink">{siteContent.professional.credential}</p>
          <a
            href={siteContent.contact.emailHref}
            className="mt-6 block text-sm text-ink hover:text-brand-dark"
          >
            {siteContent.contact.email}
          </a>
        </div>
        <nav aria-label="Rodapé" className="grid grid-cols-2 gap-x-6 gap-y-3">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink hover:text-brand-dark"
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteContent.contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand-dark"
          >
            {siteContent.contact.label}
          </a>
        </nav>
      </Container>
    </footer>
  );
}
