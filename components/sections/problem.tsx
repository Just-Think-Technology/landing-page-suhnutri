import { siteContent } from "@/content/site";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { MotionStagger } from "@/components/motion/motion-stagger";

export function Problem() {
  return (
    <section className="bg-surface" aria-labelledby="problema-titulo">
      <Container className="py-20 md:py-28">
        <SectionHeading
          id="problema-titulo"
          eyebrow={siteContent.problem.eyebrow}
          title={siteContent.problem.title}
          text={siteContent.problem.text}
        />
        <MotionStagger className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {siteContent.problem.items.map((item) => (
            <article key={item.index}>
              <p className="font-heading text-4xl font-bold text-brand-light">{item.index}</p>
              <h3 className="mt-4 font-heading text-xl font-bold text-brand-dark">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink">{item.text}</p>
            </article>
          ))}
        </MotionStagger>
      </Container>
    </section>
  );
}
