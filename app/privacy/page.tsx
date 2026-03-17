import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for FeetToPixels.com. Learn how we handle your data, our use of cookies, and our advertising practices.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy — FeetToPixels",
    description: "How FeetToPixels handles your data, cookies, and advertising.",
    url: "/privacy",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function PrivacyPage() {
  return (
    <Container className="py-8 md:py-12">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mb-8 text-sm text-neutral-500">
          Last updated: March 18, 2026
        </p>

        <div className="prose prose-neutral max-w-none">
          <h2>Introduction</h2>
          <p>
            {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the website {siteConfig.url} (the &ldquo;Site&rdquo;). This Privacy Policy explains how we collect, use, and protect information when you visit our Site.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <p>
            If you contact us through our contact form, we collect your name, email address, and message content. This information is used solely to respond to your inquiry.
          </p>
          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our Site, we may automatically collect certain information including your IP address, browser type, operating system, referring URLs, and pages viewed. This information is collected through cookies and similar technologies.
          </p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain our conversion tools and services</li>
            <li>To respond to your inquiries and support requests</li>
            <li>To analyze usage patterns and improve our Site</li>
            <li>To display relevant advertisements</li>
            <li>To detect and prevent fraud or abuse</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            Our Site uses cookies and similar tracking technologies. Cookies are small text files stored on your device that help us provide a better experience. We use:
          </p>
          <ul>
            <li><strong>Essential cookies:</strong> Required for the Site to function properly.</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors use our Site (e.g., Google Analytics).</li>
            <li><strong>Advertising cookies:</strong> Used by our advertising partners to serve relevant ads.</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Disabling cookies may affect some Site functionality.
          </p>

          <h2>Advertising</h2>
          <p>
            We use Google AdSense and potentially other advertising networks to display ads on our Site. These services may use cookies and web beacons to collect information about your visits to this and other websites to provide targeted advertisements. Google&rsquo;s use of advertising cookies enables it and its partners to serve ads based on your visit to our Site and/or other sites on the Internet.
          </p>
          <p>
            You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> or <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">aboutads.info</a>.
          </p>

          <h2>Data Processing</h2>
          <p>
            All conversion calculations are performed entirely in your browser. We do not upload, store, or process any images or files you use with our tools. No conversion data is sent to our servers.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our Site may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party site you visit.
          </p>

          <h2>Children&rsquo;s Privacy</h2>
          <p>
            Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can delete it.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect the information we collect. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. You may also have the right to opt out of certain data processing activities. To exercise any of these rights, please contact us using the information below.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Your continued use of the Site after changes constitutes acceptance of the updated policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us through our <a href="/contact">contact page</a>.
          </p>
        </div>
      </div>
    </Container>
  );
}
