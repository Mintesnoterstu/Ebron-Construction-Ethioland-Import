"use client";

import { FormEvent, useState } from "react";
import { COMPANY } from "@/data/constants";
import { useLanguage } from "@/context/language";

export function ContactForm() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [`${t.contact.name}: ${name}`, `${t.contact.senderEmail}: ${email}`, `${t.contact.phone}: ${phone}`, "", message].join(
      "\n",
    );
    const href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(t.contact.mailSubject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  const field =
    "mt-2 min-h-11 w-full rounded-[4px] border border-border bg-bg px-3 text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-border bg-surface p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text uppercase">{t.contact.formTitle}</h2>
      <label className="mt-5 block text-sm font-medium text-text">
        {t.contact.name}
        <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={t.contact.namePlaceholder} className={field} />
      </label>
      <label className="mt-4 block text-sm font-medium text-text">
        {t.contact.senderEmail}
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.contact.emailPlaceholder}
          className={field}
        />
      </label>
      <label className="mt-4 block text-sm font-medium text-text">
        {t.contact.phone}
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.contact.phonePlaceholder} className={field} />
      </label>
      <label className="mt-4 block text-sm font-medium text-text">
        {t.contact.message}
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.contact.messagePlaceholder}
          className={`${field} min-h-32 py-2`}
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-[4px] bg-accent px-5 text-sm font-semibold text-[#0A1F17] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {t.contact.submit}
      </button>
      <p className="mt-3 text-sm text-text-muted">{t.contact.formNote}</p>
    </form>
  );
}
