import { siteContent } from "@/content/site";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { MotionStagger } from "@/components/motion/motion-stagger";

export function Transformation() {
  return (
    <section className="bg-white" aria-labelledby="transformacao-titulo">
      <Container className="py-20 md:py-28">
        <SectionHeading
          id="transformacao-titulo"
          eyebrow={siteContent.transformation.eyebrow}
          title={siteContent.transformation.title}
        />
        <MotionStagger className="mt-14 grid gap-10 md:grid-cols-2">
          {siteContent.transformation.items.map((item, index) => (
            <article key={item.title} className="border-t border-border pt-6">
              <p className="font-heading text-sm font-bold text-brand">
                0{index + 1}
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-brand-dark">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-ink">{item.text}</p>
            </article>
          ))}
        </MotionStagger>
      </Container>
    </section>
  );
}
