import type { Metadata } from "next";
import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { siteConfig } from "@/content/site-config";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const pageDict = dict.pages["terms"];

  return {
    title: pageDict?.title || "terms",
    description: pageDict?.description || "",
    alternates: {
      canonical: `/${locale}/terms`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/terms`]),
      ),
    },
  };
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Terms of Service", href: "/terms" },
];

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(validLocale);
  return (
    <Container className="py-8 md:py-12">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mb-8 text-sm text-neutral-500">
          Last updated: March 18, 2026
        </p>

        <div className="prose prose-neutral max-w-none">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using {siteConfig.name} ({siteConfig.url}), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the Site.
          </p>

          <h2>Description of Service</h2>
          <p>
            {siteConfig.name} provides free online unit conversion tools, calculators, and educational content related to pixels, DPI, PPI, and other measurement units (&ldquo;Services&rdquo;). These tools run entirely in your browser and are provided for informational and convenience purposes.
          </p>

          <h2>Use of the Services</h2>
          <p>You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use the Site in any way that violates applicable laws or regulations</li>
            <li>Attempt to interfere with the proper functioning of the Site</li>
            <li>Use automated scripts, bots, or scrapers to access the Site excessively</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>Reproduce, distribute, or create derivative works from our content without permission</li>
          </ul>

          <h2>Accuracy of Information</h2>
          <p>
            We strive to provide accurate conversion results and educational content. Our tools use mathematically exact conversion factors based on established standards (ISO, ANSI). However, we make no warranties regarding the accuracy, completeness, or suitability of the information provided. Results should be verified for mission-critical applications.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on the Site, including text, graphics, logos, code, and tool designs, is the property of {siteConfig.name} and is protected by copyright and other intellectual property laws. You may use conversion results freely but may not reproduce our content, tools, or design without written permission.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            The Site and Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            In no event shall {siteConfig.name}, its operators, or contributors be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or Services. This includes, without limitation, damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages.
          </p>

          <h2>Third-Party Content and Links</h2>
          <p>
            The Site may contain links to third-party websites or display third-party advertisements. We do not control or endorse third-party content and are not responsible for any third-party websites, products, or services.
          </p>

          <h2>Advertising</h2>
          <p>
            The Site displays advertisements through third-party advertising networks, including Google AdSense. These advertisements help support the free Services we provide. Ad content is controlled by the advertising networks, not by {siteConfig.name}.
          </p>

          <h2>Privacy</h2>
          <p>
            Your use of the Site is also governed by our <a href="/privacy">Privacy Policy</a>, which is incorporated into these Terms by reference.
          </p>

          <h2>Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes take effect immediately upon posting. Your continued use of the Site after changes constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.
          </p>

          <h2>Termination</h2>
          <p>
            We reserve the right to terminate or restrict your access to the Site at our sole discretion, without notice, for any reason, including violation of these Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the United States. Any disputes arising from these Terms or your use of the Site shall be resolved in the appropriate courts.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about these Terms, please contact us through our <a href="/contact">contact page</a>.
          </p>
        </div>
      </div>
    </Container>
  );
}
