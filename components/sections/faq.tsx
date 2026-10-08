import { siteContent } from "@/content/site";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { MotionReveal } from "@/components/motion/motion-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="duvidas" className="scroll-mt-24 bg-surface" aria-labelledby="duvidas-titulo">
      <Container className="py-20 md:py-28">
        <MotionReveal>
          <SectionHeading
            id="duvidas-titulo"
            eyebrow={siteContent.faq.eyebrow}
            title={siteContent.faq.title}
          />
        </MotionReveal>
        <Accordion data-stagger className="mt-10 max-w-3xl">
          {siteContent.faq.items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="py-5 font-heading text-base font-bold text-ink hover:no-underline md:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-ink">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
