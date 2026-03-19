"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getDictionary } from "@/lib/translations";
import type { Locale } from "@/lib/i18n";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const breadcrumbs = [
    { label: dict.site.name, href: `/${locale}` },
    { label: dict.contact.title, href: `/${locale}/contact` },
  ];

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!name.trim()) errs.name = dict.contact.nameRequired;
    if (!email.trim()) {
      errs.email = dict.contact.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = dict.contact.emailInvalid;
    }
    if (!message.trim()) {
      errs.message = dict.contact.messageRequired;
    } else if (message.trim().length < 10) {
      errs.message = dict.contact.messageMinLength;
    }
    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <Container className="py-8 md:py-12">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mx-auto max-w-2xl">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {dict.contact.title}
        </h1>
        <p className="mb-8 text-base leading-relaxed text-neutral-600">
          {dict.contact.description}
        </p>

        {submitted ? (
          <div className="rounded-xl border border-success-500 bg-success-50 p-6 text-center">
            <svg className="mx-auto mb-3 h-10 w-10 text-success-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h2 className="mb-1 text-lg font-semibold text-neutral-900">{dict.contact.messageSent}</h2>
            <p className="text-sm text-neutral-600">
              {dict.contact.thankYou}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-neutral-700">
                {dict.contact.name}
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full rounded-lg border px-4 py-2.5 text-sm text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
                  errors.name ? "border-error-500" : "border-neutral-300"
                }`}
                placeholder={dict.contact.namePlaceholder}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-error-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-neutral-700">
                {dict.contact.email}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full rounded-lg border px-4 py-2.5 text-sm text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
                  errors.email ? "border-error-500" : "border-neutral-300"
                }`}
                placeholder={dict.contact.emailPlaceholder}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-error-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-neutral-700">
                {dict.contact.message}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className={`w-full rounded-lg border px-4 py-2.5 text-sm text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
                  errors.message ? "border-error-500" : "border-neutral-300"
                }`}
                placeholder={dict.contact.messagePlaceholder}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-error-600">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:ring-offset-2"
            >
              {dict.contact.sendMessage}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
            </button>
          </form>
        )}
      </div>
    </Container>
  );
}
