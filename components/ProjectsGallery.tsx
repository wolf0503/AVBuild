"use client";

import Image from "next/image";
import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Reveal } from "@/components/motion/Reveal";
import { CornerFrame } from "@/components/CornerFrame";
import { Lightbox, type Render } from "@/components/Lightbox";

const projects: { status: "ongoing" | "completed"; images: Render[] }[] = [
  {
    status: "ongoing",
    images: [
      { src: "/projects/project-01.jpg", w: 1053, h: 1240 },
      { src: "/projects/project-02.jpg", w: 1135, h: 579 },
      { src: "/projects/project-03.jpg", w: 1058, h: 1243 },
    ],
  },
  {
    status: "completed",
    images: [
      { src: "/projects/project-04.jpg", w: 1048, h: 589 },
      { src: "/projects/project-05.jpg", w: 1024, h: 589 },
      { src: "/projects/project-06.jpg", w: 1045, h: 589 },
    ],
  },
];

export function ProjectsGallery({ dict }: { dict: Dictionary }) {
  // Which project + image is open in the lightbox.
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const openAt = (project: number, image: number) => {
    setOpenProject(project);
    setImageIndex(image);
  };
  const close = () => {
    setOpenProject(null);
    setImageIndex(null);
  };

  return (
    <>
      <div className="mt-14 flex flex-col gap-12">
        {projects.map((project, p) => {
          const isCompleted = project.status === "completed";
          const label = `${dict.projects.cardLabel} 0${p + 1}`;
          return (
            <Reveal key={p} className="border border-line bg-surface-2">
              {/* Cinematic hero */}
              <button
                type="button"
                onClick={() => openAt(p, 0)}
                aria-label={`${label} — ${dict.projects.gallery.view}`}
                className="group relative block aspect-[16/10] w-full overflow-hidden sm:aspect-[2/1] lg:aspect-[21/9]"
              >
                <Image
                  src={project.images[0].src}
                  alt={`${label} — ${dict.projects.cardTag.toLowerCase()}`}
                  fill
                  className="object-cover object-[center_35%] saturate-[0.8] transition-all duration-[900ms] ease-out group-hover:scale-105 group-hover:saturate-100"
                  sizes="(min-width: 1024px) 80vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-base/10" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <CornerFrame />
                </div>

                {/* Top row: status + tag */}
                <div className="absolute inset-x-4 top-4 flex items-start justify-between">
                  <span
                    className={`flex items-center gap-2 px-2.5 py-1 font-heading text-[10px] tracking-[0.15em] ${
                      isCompleted ? "bg-accent text-base" : "border border-white/40 text-white"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${isCompleted ? "bg-base" : "animate-pulse bg-accent"}`}
                    />
                    {isCompleted
                      ? dict.projects.status.completed
                      : dict.projects.status.ongoing}
                  </span>
                  <span className="border border-accent/60 bg-base/60 px-2.5 py-1 font-heading text-[10px] tracking-[0.15em] text-accent backdrop-blur-sm">
                    {dict.projects.cardTag}
                  </span>
                </div>

                {/* Bottom row: label + view cue */}
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl">
                      {dict.projects.cardLabel} <span className="text-accent">0{p + 1}</span>
                    </h3>
                    <p className="mt-1 text-xs tracking-wide text-white/60">
                      {dict.projects.cardNote}
                    </p>
                  </div>
                  <span className="flex items-center gap-2 border border-white/30 bg-base/50 px-3 py-1.5 font-heading text-[11px] tracking-widest text-white backdrop-blur-sm transition-colors group-hover:border-accent group-hover:text-accent">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                    {project.images.length} {dict.projects.gallery.renders}
                  </span>
                </div>
              </button>

              {/* Thumbnail strip */}
              <div className="grid grid-cols-3 gap-2 p-2">
                {project.images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => openAt(p, i)}
                    aria-label={`${label} — ${i + 1}`}
                    className="group relative aspect-[3/2] overflow-hidden border border-line"
                  >
                    <Image
                      src={img.src}
                      alt={`${label} — ${dict.projects.cardTag.toLowerCase()} ${i + 1}`}
                      fill
                      className="object-cover saturate-[0.8] transition-all duration-500 group-hover:scale-105 group-hover:saturate-100"
                      sizes="(min-width: 640px) 26vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-base/10 transition-colors group-hover:bg-base/0" />
                  </button>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>

      <Lightbox
        images={openProject !== null ? projects[openProject].images : []}
        index={openProject !== null ? imageIndex : null}
        onClose={close}
        onIndex={setImageIndex}
        labels={{
          close: dict.projects.gallery.close,
          prev: dict.projects.gallery.prev,
          next: dict.projects.gallery.next,
        }}
        caption={
          openProject !== null
            ? `${dict.projects.cardLabel} 0${openProject + 1}`
            : undefined
        }
      />
    </>
  );
}
