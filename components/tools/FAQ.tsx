"use client";

import { useState } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  label?: string;
  showHeading?: boolean;
  includeJsonLd?: boolean;
}

function FAQAccordionItem({ item, isOpen, onToggle }: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="faq-question flex w-full items-center justify-between py-4 text-left text-base font-medium text-neutral-900 transition-colors hover:text-primary-700"
        aria-expanded={isOpen}
      >
        <span className="pr-4">{item.question}</span>
        <svg
          className={cn(
            "h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <p className="faq-answer text-sm leading-relaxed text-neutral-600">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ({
  items,
  label,
  showHeading = true,
  includeJsonLd = true,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (items.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const sectionLabel = label || "Frequently Asked Questions";

  return (
    <section
      id="faq"
      className="mt-12"
      aria-label={showHeading ? undefined : sectionLabel}
    >
      {includeJsonLd && <JsonLd data={jsonLd} />}
      {showHeading && (
        <h2 className="mb-6 text-2xl font-semibold text-neutral-900">
          {sectionLabel}
        </h2>
      )}
      <div className="rounded-xl border border-neutral-200 bg-white px-6 shadow-soft">
        {items.map((item, index) => (
          <FAQAccordionItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </section>
  );
}
