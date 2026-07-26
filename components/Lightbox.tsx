"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export type Render = { src: string; w: number; h: number };

export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
  labels,
  caption,
}: {
  images: Render[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
  labels: { close: string; prev: string; next: string };
  caption?: string;
}) {
  const open = index !== null;

  const go = useCallback(
    (dir: number) => {
      if (index === null) return;
      onIndex((index + dir + images.length) % images.length);
    },
    [index, images.length, onIndex]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, go, onClose]);

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/97 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          {/* Top bar */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4">
            <span className="font-heading text-sm tracking-widest text-white/70">
              {index + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label={labels.close}
              className="text-3xl leading-none text-white/70 transition-colors hover:text-accent"
            >
              &times;
            </button>
          </div>

          {/* Prev */}
          {images.length > 1 && (
            <button
              type="button"
              aria-label={labels.prev}
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center text-3xl text-white/70 transition-colors hover:text-accent sm:left-6"
            >
              &#8249;
            </button>
          )}

          {/* Image */}
          <motion.figure
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[85vh] max-w-[92vw] flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              width={images[index].w}
              height={images[index].h}
              alt={caption ? `${caption} ${index + 1}` : ""}
              priority
              className="max-h-[80vh] w-auto object-contain"
              sizes="92vw"
            />
            {caption && (
              <figcaption className="mt-4 font-heading text-xs tracking-widest text-white/60">
                {caption} · {index + 1}/{images.length}
              </figcaption>
            )}
          </motion.figure>

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              aria-label={labels.next}
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center text-3xl text-white/70 transition-colors hover:text-accent sm:right-6"
            >
              &#8250;
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
