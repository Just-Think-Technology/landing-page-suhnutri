import { siteContent } from "@/content/site";
import { Container } from "@/components/layout/container";
import { SiteCta } from "@/components/layout/site-cta";
import { MotionStagger } from "@/components/motion/motion-stagger";

export function FinalCta() {
  return (
    <section id="contato" className="scroll-mt-24 bg-brand-dark" aria-labelledby="contato-titulo">
      <Container className="py-20 md:py-28">
        <MotionStagger className="max-w-2xl">
          <h2
            id="contato-titulo"
            className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            {siteContent.finalCta.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white md:text-lg">
            {siteContent.finalCta.text}
          </p>
        </MotionStagger>
        <div data-cta-button className="mt-8 flex flex-col items-start gap-4">
          <SiteCta
            href={siteContent.contact.href}
            className="bg-white text-brand-dark hover:bg-white"
          >
            {siteContent.finalCta.cta}
          </SiteCta>
          <a
            href={siteContent.contact.emailHref}
            className="text-sm text-white underline-offset-4 hover:underline"
          >
            {siteContent.contact.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
