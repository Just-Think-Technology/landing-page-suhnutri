import Image from "next/image";
import { siteContent } from "@/content/site";
import { Container } from "@/components/layout/container";
import { MotionImage } from "@/components/motion/motion-image";
import { MotionReveal } from "@/components/motion/motion-reveal";

export function About() {
  const { about } = siteContent;

  return (
    <section id="sobre" className="scroll-mt-24 bg-white" aria-labelledby="sobre-titulo">
      <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <MotionImage clip className="overflow-hidden rounded-2xl bg-surface">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            width={about.image.width}
            height={about.image.height}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/5] w-full object-cover"
          />
        </MotionImage>
        <MotionReveal>
          <p className="text-xs font-medium tracking-[0.18em] text-brand uppercase">
            {about.eyebrow}
          </p>
          <h2
            id="sobre-titulo"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-dark md:text-4xl"
          >
            {about.name}
          </h2>
          <p className="mt-3 text-sm font-medium text-ink">{about.credential}</p>
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-ink md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
