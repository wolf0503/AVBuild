import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CornerFrame } from "@/components/CornerFrame";

const renders = [
  "/projects/project-01.jpg",
  "/projects/project-02.jpg",
  "/projects/project-03.jpg",
  "/projects/project-04.jpg",
  "/projects/project-05.jpg",
  "/projects/project-06.jpg",
];

// Bento column spans at lg breakpoint for a varied, non-templated grid.
const lgSpan = [
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
];

export function ProjectsSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="projects" className="relative border-b border-line px-6 py-28">
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-3">
          <span className="font-heading text-xs tracking-[0.2em] text-accent">
            {dict.projects.eyebrow}
          </span>
          <h2 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl">{dict.projects.title}</h2>
          <p className="mt-1 max-w-2xl text-muted">{dict.projects.subtitle}</p>
        </Reveal>

        <RevealGroup
          stagger={0.12}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
        >
          {renders.map((src, i) => (
            <RevealItem key={src} className={lgSpan[i]}>
              <div className="group relative h-72 overflow-hidden border border-line lg:h-80">
                <Image
                  src={src}
                  alt={`${dict.projects.cardLabel} 0${i + 1} — ${dict.projects.cardTag.toLowerCase()}`}
                  fill
                  className="object-cover saturate-[0.8] transition-all duration-700 group-hover:scale-[1.06] group-hover:saturate-100"
                  sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-base/25 to-transparent" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <CornerFrame />
                </div>

                <span className="absolute right-3 top-3 border border-accent/60 bg-base/70 px-2.5 py-1 font-heading text-[10px] tracking-[0.15em] text-accent backdrop-blur-sm">
                  {dict.projects.cardTag}
                </span>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <h3 className="text-2xl">
                      {dict.projects.cardLabel} <span className="text-accent">0{i + 1}</span>
                    </h3>
                    <p className="mt-1 text-xs tracking-wide text-text/60">
                      {dict.projects.cardNote}
                    </p>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
