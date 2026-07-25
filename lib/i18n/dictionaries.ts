import "server-only";
import type { Locale } from "./config";

const loaders = {
  hy: () => import("@/dictionaries/hy.json").then((m) => m.default),
  ru: () => import("@/dictionaries/ru.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof loaders)["hy"]>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return loaders[locale]();
}
