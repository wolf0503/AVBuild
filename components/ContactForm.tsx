"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-4"
    >
      <label className="flex flex-col gap-2 text-xs text-muted">
        {dict.contact.form.name}
        <input
          type="text"
          name="name"
          required
          className="border border-line bg-transparent px-4 py-3 text-sm text-text outline-none focus:border-accent"
        />
      </label>
      <label className="flex flex-col gap-2 text-xs text-muted">
        {dict.contact.form.email}
        <input
          type="email"
          name="email"
          required
          className="border border-line bg-transparent px-4 py-3 text-sm text-text outline-none focus:border-accent"
        />
      </label>
      <label className="flex flex-col gap-2 text-xs text-muted">
        {dict.contact.form.message}
        <textarea
          name="message"
          required
          rows={5}
          className="border border-line bg-transparent px-4 py-3 text-sm text-text outline-none focus:border-accent"
        />
      </label>
      <button
        type="submit"
        className="mt-2 bg-accent px-6 py-3 font-heading text-sm text-base transition-colors hover:bg-accent-hover"
      >
        {dict.contact.form.submit}
      </button>
      {submitted && (
        <p className="text-sm text-accent">
          {dict.locale === "hy"
            ? "Ձևը դեռ միացված չէ backend-ին։"
            : dict.locale === "ru"
              ? "Форма пока не подключена к серверу."
              : "This form isn't connected to a backend yet."}
        </p>
      )}
    </form>
  );
}
