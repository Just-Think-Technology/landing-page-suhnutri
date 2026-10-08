import Image from "next/image";
import { siteContent } from "@/content/site";
import { Container } from "@/components/layout/container";
import { MotionImage } from "@/components/motion/motion-image";
import { MotionReveal } from "@/components/motion/motion-reveal";

export function Shari() {
  const { shari } = siteContent;

  return (
    <section className="bg-brand-dark text-white" aria-labelledby="shari-titulo">
      <Container className="grid items-center gap-10 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
        <MotionReveal from="x" className="order-2 lg:order-1">
          <p className="text-xs font-medium tracking-[0.18em] text-brand-light uppercase">
            {shari.eyebrow}
          </p>
          <h2
            id="shari-titulo"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {shari.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
            {shari.text}
          </p>
        </MotionReveal>
        <MotionImage className="order-1 overflow-hidden rounded-2xl lg:order-2">
          <Image
            src={shari.image.src}
            alt={shari.image.alt}
            width={shari.image.width}
            height={shari.image.height}
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="aspect-[4/3] w-full object-cover"
          />
        </MotionImage>
      </Container>
    </section>
  );
}
