import { cn } from "cn";

export function MotionReveal({
  className,
  children,
  from = "y",
}: {
  className?: string;
  children: React.ReactNode;
  from?: "y" | "x";
}) {
  return (
    <div
      {...(from === "x" ? { "data-shift": "" } : { "data-reveal": "" })}
      className={cn(className)}
    >
      {children}
    </div>
  );
}
