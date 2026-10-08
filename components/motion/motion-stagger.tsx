import { cn } from "cn";

export function MotionStagger({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div data-stagger className={cn(className)}>
      {children}
    </div>
  );
}
