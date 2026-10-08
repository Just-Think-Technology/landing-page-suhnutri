import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export function SiteCta({
  href,
  children,
  variant = "default",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(buttonVariants({ variant, size: "cta" }), className)}
    >
      {children}
    </a>
  );
}
