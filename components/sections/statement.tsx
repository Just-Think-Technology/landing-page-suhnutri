import { siteContent } from "@/content/site";
import { Container } from "@/components/layout/container";
import { MotionReveal } from "@/components/motion/motion-reveal";

export function Statement() {
  return (
    <section className="bg-white" aria-label="Posicionamento">
      <Container className="py-24 md:py-36">
        <MotionReveal>
          <div className="mx-auto max-w-4xl">
            <span className="mb-8 block h-px w-16 origin-left bg-brand" data-statement-line />
            <p className="font-heading text-3xl leading-tight font-bold tracking-tight text-ink md:text-5xl md:leading-[1.15]">
              {siteContent.statement.text}
            </p>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
