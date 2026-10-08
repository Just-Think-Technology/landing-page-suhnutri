import Image from "next/image";
import { cn } from "cn";

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/logo-wordmark.png"
      alt="Suh Nutri Consultoria"
      width={929}
      height={336}
      priority={priority}
      quality={95}
      className={cn("h-auto w-full", className)}
    />
  );
}
