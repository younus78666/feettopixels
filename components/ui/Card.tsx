import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description?: string;
  href?: string;
  image?: React.ReactNode;
  eyebrow?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Card({
  title,
  description,
  href,
  image,
  eyebrow,
  children,
  className,
}: CardProps) {
  const content = (
    <>
      {image && <div className="mb-4">{image}</div>}
      {eyebrow && (
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-700">
          {eyebrow}
        </p>
      )}
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      {description && (
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
          {description}
        </p>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn("tool-card group", className)}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cn("tool-card", className)}>
      {content}
    </div>
  );
}
