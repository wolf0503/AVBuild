"use client";

export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-white/10 bg-surface-2 py-5">
      <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-heading text-sm tracking-widest text-text/70 whitespace-nowrap">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden />
          </div>
        ))}
      </div>
      <div className="marquee-track flex shrink-0 items-center gap-10 pr-10" aria-hidden>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-heading text-sm tracking-widest text-text/70 whitespace-nowrap">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden />
          </div>
        ))}
      </div>
    </div>
  );
}
