type Props = {
  kicker?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({ kicker, title, body, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {kicker ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{kicker}</p>
      ) : null}
      <h2 className="mt-2 text-3xl font-bold uppercase text-text md:text-4xl">{title}</h2>
      {body ? <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">{body}</p> : null}
    </div>
  );
}
