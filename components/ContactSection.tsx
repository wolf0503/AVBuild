import type { Dictionary } from "@/lib/i18n/dictionaries";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Reveal";

export function ContactSection({ dict }: { dict: Dictionary }) {
  const details = [
    { label: dict.contact.phoneLabel, value: dict.contact.phoneValue },
    { label: dict.contact.emailLabel, value: dict.contact.emailValue },
    { label: dict.contact.addressLabel, value: dict.contact.addressValue },
  ];

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="accent-glow pointer-events-none absolute inset-0 [--gx:80%]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-3">
          <span className="font-heading text-xs tracking-[0.2em] text-accent">
            {dict.contact.eyebrow}
          </span>
          <h2 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl">{dict.contact.title}</h2>
          <p className="mt-1 max-w-xl text-muted">{dict.contact.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-8">
            <dl className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-1">
              {details.map((d) => (
                <div key={d.label} className="bg-surface-2 p-6">
                  <dt className="font-heading text-xs tracking-[0.15em] text-accent">{d.label}</dt>
                  <dd className="mt-2 text-lg">{d.value}</dd>
                </div>
              ))}
            </dl>

            <div className="blueprint-grid relative flex flex-1 items-center justify-center overflow-hidden border border-line bg-surface-2 py-16">
              <div className="h-3 w-3 rotate-45 bg-accent" />
              <p className="absolute bottom-4 left-0 right-0 px-6 text-center text-xs text-muted">
                {dict.contact.mapNote}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border border-line bg-surface-2 p-8">
              <ContactForm dict={dict} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
