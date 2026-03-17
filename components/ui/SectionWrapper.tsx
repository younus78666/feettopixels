import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  alt = false,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("section-wrapper", alt && "section-alt", className)}
    >
      {children}
    </section>
  );
}
