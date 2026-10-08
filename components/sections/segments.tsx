import { siteContent } from "@/content/site";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { MotionReveal } from "@/components/motion/motion-reveal";

export function Segments() {
  return (
    <section id="segmentos" className="scroll-mt-24 bg-white" aria-labelledby="segmentos-titulo">
      <Container className="py-16 md:py-20">
        <MotionReveal>
          <SectionHeading
            id="segmentos-titulo"
            eyebrow={siteContent.segments.eyebrow}
            title={siteContent.segments.title}
          />
        </MotionReveal>
        <ul className="mt-8 grid border-t border-border sm:grid-cols-2 sm:gap-x-12">
          {siteContent.segments.items.map((item) => (
            <li key={item} className="border-b border-border">
              <div className="group relative py-2 md:py-2.5">
                <span
                  aria-hidden
                  className="absolute top-1/2 left-0 h-px w-5 origin-left -translate-y-1/2 scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                />
                <p className="font-heading text-base font-bold tracking-tight text-ink uppercase transition-[color,transform] duration-300 ease-out group-hover:translate-x-7 group-hover:text-brand-dark motion-reduce:transition-none sm:text-lg">
                  {item}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-base text-ink">{siteContent.segments.note}</p>
      </Container>
    </section>
  );
}
