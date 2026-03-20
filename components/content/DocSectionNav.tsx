interface DocSectionNavItem {
  id: string;
  label: string;
}

interface DocSectionNavProps {
  items: DocSectionNavItem[];
  label?: string;
}

export function DocSectionNav({
  items,
  label = "On this page",
}: DocSectionNavProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label={label}
      className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50/70 p-4"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
        {label}
      </p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 transition-colors hover:border-primary-200 hover:text-primary-700"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
