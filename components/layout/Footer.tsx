import Link from "next/link";
import {
  footerPhysical,
  footerCSS,
  footerCalculators,
  footerLearn,
} from "@/content/navigation";
import { SiteLogo } from "@/components/branding/SiteLogo";
import { siteConfig } from "@/content/site-config";
import { getDictionary } from "@/lib/translations";
import { getNavLabel } from "@/lib/nav-utils";
import type { Locale } from "@/lib/i18n";

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
  locale: Locale;
  dict: ReturnType<typeof getDictionary>;
}

function FooterColumn({ title, links, locale, dict }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={`/${locale}${link.href}`}
              className="text-sm text-neutral-500 transition-colors hover:text-primary-600"
            >
              {getNavLabel(link, dict)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.35fr_repeat(4,1fr)]">
          <div className="lg:pr-6">
            <SiteLogo locale={locale} showTagline={false} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
              {dict.site.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              {["px", "in", "cm", "mm", "DPI", "PPI"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-neutral-200 bg-white px-3 py-1"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <FooterColumn
            title={dict.categories.physical}
            links={footerPhysical}
            locale={locale}
            dict={dict}
          />
          <FooterColumn
            title={dict.categories.css}
            links={footerCSS}
            locale={locale}
            dict={dict}
          />
          <FooterColumn
            title={dict.categories.calculators}
            links={footerCalculators}
            locale={locale}
            dict={dict}
          />
          <FooterColumn
            title={dict.nav.learn}
            links={footerLearn}
            locale={locale}
            dict={dict}
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-200 py-6 sm:flex-row">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}.{" "}
            {dict.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link
              href={`/${locale}/privacy`}
              className="text-xs text-neutral-400 transition-colors hover:text-neutral-600"
            >
              {dict.footer.privacy}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="text-xs text-neutral-400 transition-colors hover:text-neutral-600"
            >
              {dict.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
