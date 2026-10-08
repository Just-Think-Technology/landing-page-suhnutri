import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { NotFoundMotion } from "@/components/sections/not-found-motion";

export const metadata: Metadata = {
  title: "Página não encontrada | Suh Nutri Consultoria",
};

export default function NotFound() {
  return (
    <main id="conteudo" className="flex flex-1 items-center bg-white">
      <Container>
        <NotFoundMotion />
      </Container>
    </main>
  );
}
