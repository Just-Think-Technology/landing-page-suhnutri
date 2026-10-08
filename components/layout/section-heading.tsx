export function SectionHeading({
  eyebrow,
  title,
  text,
  id,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  id?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p
          className={
            light
              ? "text-xs font-medium tracking-[0.18em] text-brand-light uppercase"
              : "text-xs font-medium tracking-[0.18em] text-brand uppercase"
          }
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={
          light
            ? "mt-3 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl"
            : "mt-3 font-heading text-3xl font-bold tracking-tight text-brand-dark md:text-4xl"
        }
      >
        {title}
      </h2>
      {text ? (
        <p
          className={
            light
              ? "mt-4 text-base leading-relaxed text-white/90 md:text-lg"
              : "mt-4 text-base leading-relaxed text-ink md:text-lg"
          }
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
