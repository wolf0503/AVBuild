"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { CornerFrame } from "@/components/CornerFrame";

const easeOut = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const wordRise: Variants = {
  hidden: { opacity: 0, y: "0.5em" },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const words = dict.hero.headline.split(" ");

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] overflow-hidden">
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <Image
          src="/images/placeholder-hero.jpg"
          alt="Construction workers on a civil construction site"
          fill
          priority
          quality={70}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1600px"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-base via-base/75 to-base/40"
      />
      <div className="absolute inset-0 bg-base/20" />
      <div className="blueprint-grid absolute inset-0 opacity-30" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-20"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative max-w-4xl p-2"
        >
          <CornerFrame />

          <motion.span
            variants={rise}
            className="mb-6 inline-block w-fit border border-accent/40 bg-base/50 px-3 py-1.5 font-heading text-[11px] tracking-[0.2em] text-accent backdrop-blur-sm sm:text-xs"
          >
            {dict.hero.eyebrow}
          </motion.span>

          <h1 className="flex flex-wrap gap-x-3 text-[2rem] leading-[0.98] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.1em] pr-[0.04em]">
                <motion.span variants={wordRise} className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={rise}
            className="mt-8 max-w-xl border-l-2 border-accent pl-4 text-lg text-text/85"
          >
            {dict.hero.subhead}
          </motion.p>

          <motion.div variants={rise} className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/${locale}#projects`}
              className="group flex items-center gap-2 bg-accent px-6 py-3.5 font-heading text-sm text-base transition-colors hover:bg-accent-hover"
            >
              {dict.hero.cta1}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href={`/${locale}#contact`}
              className="border border-text/30 px-6 py-3.5 font-heading text-sm transition-colors hover:border-accent hover:text-accent"
            >
              {dict.hero.cta2}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-heading text-[10px] tracking-[0.25em] text-text/50">SCROLL</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
