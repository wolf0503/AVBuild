"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";

const labels: Record<Locale, string> = {
  hy: "ՀԱՅ",
  ru: "РУС",
  en: "ENG",
};

function withLocale(pathname: string, locale: Locale): string {
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/") || "/";
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 text-xs font-heading">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          <Link
            href={withLocale(pathname, l)}
            aria-current={l === locale ? "page" : undefined}
            className={
              l === locale
                ? "text-accent"
                : "text-muted transition-colors hover:text-text"
            }
          >
            {labels[l]}
          </Link>
          {i < locales.length - 1 && <span className="text-muted">/</span>}
        </span>
      ))}
    </div>
  );
}
