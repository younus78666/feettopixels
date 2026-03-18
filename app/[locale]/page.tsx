import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { toolsDropdown } from "@/content/navigation";
import { locales, isValidLocale, ogLocaleMap } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { getNavLabel, getNavDescription } from "@/lib/nav-utils";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    title: dict.site.name,
    description: dict.site.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}`]),
      ),
    },
    openGraph: {
      title: dict.site.name,
      description: dict.site.description,
      locale: ogLocaleMap[locale],
    },
  };
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  const allTools = toolsDropdown.groups.flatMap((g) => g.links);

  return (
    <>
      {/* Hero */}
      <SectionWrapper className="pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-600">
              {dict.home.freeOnlineTools}
            </p>
            <h1 className="gradient-text">
              {dict.home.hero}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-neutral-500">
              {dict.home.heroSub}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={`/${validLocale}/pixel-converter`}
                className="inline-flex items-center justify-center font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 shadow-sm h-12 px-6 text-base transition-colors"
              >
                {dict.home.browseTools}
              </Link>
              <Link
                href={`/${validLocale}/what-is-dpi`}
                className="inline-flex items-center justify-center font-medium rounded-lg border border-neutral-300 text-neutral-700 hover:border-primary-400 hover:text-primary-700 hover:bg-primary-50 h-12 px-6 text-base transition-colors"
              >
                {dict.home.learnDpi}
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Tools grid */}
      <SectionWrapper alt>
        <Container>
          <h2 className="mb-8 text-center">
            {dict.home.conversionTools}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allTools.map((tool) => (
              <Card
                key={tool.href}
                title={getNavLabel(tool, dict)}
                description={getNavDescription(tool, dict)}
                href={`/${validLocale}${tool.href}`}
              />
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Value proposition */}
      <SectionWrapper>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">{dict.home.whyTitle}</h2>
            <p className="mx-auto max-w-xl text-neutral-500">
              {dict.home.whySub}
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              { title: dict.home.dpiAware, desc: dict.home.dpiAwareDesc },
              { title: dict.home.instant, desc: dict.home.instantDesc },
              { title: dict.home.devFriendly, desc: dict.home.devFriendlyDesc },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-base font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
