import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const links = [
    { href: `/${locale}#services`, label: dict.nav.services },
    { href: `/${locale}#projects`, label: dict.nav.projects },
    { href: `/${locale}#about`, label: dict.nav.about },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-line bg-surface-2">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="border-b border-line pb-12">
          <p className="max-w-3xl font-heading text-2xl leading-tight text-text/90 sm:text-3xl">
            {dict.footer.tagline}
          </p>
        </div>

        <div className="grid gap-10 pt-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-heading text-xl">
              {dict.brand}
              <span className="text-accent">.</span>
            </div>
          </div>

          <div>
            <div className="font-heading text-xs tracking-[0.15em] text-muted">
              {dict.brand}
            </div>
            <nav className="mt-4 flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="font-heading text-xs tracking-[0.15em] text-muted">
              {dict.contact.title}
            </div>
            <div className="mt-4 flex flex-col gap-2 text-sm text-text/80">
              <span>{dict.contact.phoneValue}</span>
              <span>{dict.contact.emailValue}</span>
              <span>{dict.contact.addressValue}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-1 border-t border-line px-6 py-6 text-center text-xs text-muted sm:flex-row sm:gap-3">
        <span>{dict.footer.rights}</span>
        <span aria-hidden className="hidden text-line sm:inline">
          /
        </span>
        <span>
          Built by{" "}
          <a
            href="https://yanium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text/70 transition-colors hover:text-accent"
          >
            Yanium
          </a>
        </span>
      </div>
    </footer>
  );
}
