import { Footer } from "@/components/layout/footer";
import { HashScroll } from "@/components/layout/hash-scroll";
import { Header } from "@/components/layout/header";
import { MotionProvider } from "@/components/motion/motion-provider";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Preloader } from "@/components/sections/preloader";
import { Problem } from "@/components/sections/problem";
import { Process } from "@/components/sections/process";
import { Segments } from "@/components/sections/segments";
import { Services } from "@/components/sections/services";
import { Shari } from "@/components/sections/shari";
import { Statement } from "@/components/sections/statement";
import { Transformation } from "@/components/sections/transformation";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-brand-dark"
      >
        Ir para o conteúdo
      </a>
      <HashScroll />
      <Preloader />
      <Header />
      <MotionProvider />
      <main id="conteudo">
        <Hero />
        <Statement />
        <Problem />
        <About />
        <Services />
        <Shari />
        <Segments />
        <Process />
        <Transformation />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
