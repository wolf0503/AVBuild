import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function ServicesSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" className="relative border-b border-line px-6 py-28">
      <div className="accent-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-3">
          <span className="font-heading text-xs tracking-[0.2em] text-accent">
            {dict.services.eyebrow}
          </span>
          <h2 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl">{dict.services.title}</h2>
          <p className="mt-1 max-w-xl text-muted">{dict.services.subtitle}</p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((item, i) => (
            <RevealItem
              key={item.title}
              className="group relative flex flex-col bg-surface-2 p-8 transition-colors duration-300 hover:bg-surface"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-2xl text-line transition-colors duration-300 group-hover:text-accent">
                  0{i + 1}
                </span>
                <span className="translate-x-0 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </div>
              <h3 className="mt-6 text-xl leading-tight">{item.title}</h3>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
              <span className="mt-6 h-0.5 w-10 bg-accent transition-all duration-300 group-hover:w-16" />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
