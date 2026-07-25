import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/motion/Marquee";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);

  const marqueeItems = dict.services.items.map((item) => item.title);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Marquee items={marqueeItems} />
      <ServicesSection dict={dict} />
      <ProjectsSection dict={dict} />
      <AboutSection dict={dict} />
      <ContactSection dict={dict} />
    </>
  );
}
