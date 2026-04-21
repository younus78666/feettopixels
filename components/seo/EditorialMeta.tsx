import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/alternates";

interface EditorialMetaProps {
  locale?: Locale;
  dateModified: string;
}

export function EditorialMeta({ locale, dateModified }: EditorialMetaProps) {
  const formatter = new Intl.DateTimeFormat(locale || "en", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedDate = formatter.format(new Date(`${dateModified}T00:00:00Z`));
  const aboutHref = locale ? localizeHref(locale, "/about") : "/about";

  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-500">
      <Link href={aboutHref} className="font-medium text-primary-700 hover:text-primary-800">
        FeetToPixels Editorial Team
      </Link>
      <span aria-hidden="true">/</span>
      <time dateTime={dateModified} className="font-medium text-neutral-700">
        {formattedDate}
      </time>
    </div>
  );
}
