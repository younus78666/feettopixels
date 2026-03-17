import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — FeetToPixels",
  description:
    "Get in touch with the FeetToPixels team. Send us questions, suggestions, or bug reports through our contact form.",
  openGraph: {
    title: "Contact Us — FeetToPixels",
    description: "Reach out to the FeetToPixels team with questions or feedback.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
