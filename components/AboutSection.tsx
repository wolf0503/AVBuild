import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CornerFrame } from "@/components/CornerFrame";

export function AboutSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="relative border-b border-line px-6 py-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left: heading + image */}
          <div className="lg:sticky lg:top-28">
            <Reveal className="flex flex-col gap-3">
              <span className="font-heading text-xs tracking-[0.2em] text-accent">
                {dict.about.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl">{dict.about.title}</h2>
            </Reveal>

            <Reveal delay={0.15} className="relative mt-8">
              <div className="relative aspect-[4/3] overflow-hidden border border-line">
                <CornerFrame />
                <Image
                  src="/images/placeholder-about.jpg"
                  alt="Concrete building under construction"
                  fill
                  className="object-cover saturate-[0.85]"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/60 to-transparent" />
              </div>
            </Reveal>
          </div>

          {/* Right: feature blocks */}
          <RevealGroup className="flex flex-col divide-y divide-line border-t border-line">
            {dict.about.blocks.map((block, i) => (
              <RevealItem key={block.heading}>
                <div className="group flex gap-6 py-8">
                  <span className="font-heading text-lg text-line transition-colors duration-300 group-hover:text-accent">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl">{block.heading}</h3>
                    <p className="mt-3 text-muted">{block.body}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
