import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectsGallery } from "@/components/ProjectsGallery";

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

        <ProjectsGallery dict={dict} />
      </div>
    </section>
  );
}
