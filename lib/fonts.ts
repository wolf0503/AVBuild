import localFont from "next/font/local";
import { Noto_Sans, Noto_Sans_Armenian } from "next/font/google";

export const display = localFont({
  src: [
    { path: "../public/fonts/Mardoto-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Mardoto-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

export const bodyLatin = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-body-latin",
  display: "swap",
});

export const bodyArmenian = Noto_Sans_Armenian({
  subsets: ["armenian"],
  weight: ["400", "500", "600"],
  variable: "--font-body-armenian",
  display: "swap",
});
