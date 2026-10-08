import { cn } from "cn";

export function MotionImage({
  className,
  children,
  clip = false,
}: {
  className?: string;
  children: React.ReactNode;
  clip?: boolean;
}) {
  return (
    <div
      data-image
      {...(clip ? { "data-image-clip": "" } : {})}
      className={cn(className)}
    >
      {children}
    </div>
  );
}
