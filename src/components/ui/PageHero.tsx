import { SmartImage } from "@/components/ui/SmartImage";

type Props = {
  kicker: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
};

export function PageHero({ kicker, title, subtitle, image, alt }: Props) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden pt-28">
      <SmartImage src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/60 dark:bg-black/75" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 md:px-12 md:pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{kicker}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-bold uppercase text-white md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
