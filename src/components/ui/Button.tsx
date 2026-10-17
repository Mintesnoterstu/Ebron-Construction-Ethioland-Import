import Link from "next/link";

type Variant = "primary" | "secondary" | "overlay";

const classes: Record<Variant, string> = {
  primary:
    "inline-flex min-h-11 items-center justify-center rounded-[4px] bg-accent px-5 text-sm font-semibold text-[#0A1F17] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
  secondary:
    "inline-flex min-h-11 items-center justify-center rounded-[4px] border-2 border-primary bg-transparent px-5 text-sm font-semibold text-primary transition hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
  overlay:
    "inline-flex min-h-11 items-center justify-center rounded-[4px] border-2 border-white bg-transparent px-5 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
};

type ButtonProps = {
  href?: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  external?: boolean;
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  type = "button",
  onClick,
  external,
}: ButtonProps) {
  const cn = `${classes[variant]} ${className}`;
  if (href) {
    if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <a href={href} className={cn} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cn} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cn} onClick={onClick}>
      {children}
    </button>
  );
}
