import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { IntroSeal } from "@/components/journey/IntroSeal";
import { SiteNav } from "@/components/journey/SiteNav";
import { Hero } from "@/components/journey/Hero";
import { About } from "@/components/journey/About";
import { Training } from "@/components/journey/Training";
import { Disciplines } from "@/components/journey/Disciplines";
import { Archive } from "@/components/journey/Archive";
import { Challenges } from "@/components/journey/Challenges";
import { Growth } from "@/components/journey/Growth";
import { Wisdom } from "@/components/journey/Wisdom";
import { Ascent } from "@/components/journey/Ascent";
import { Lantern } from "@/components/journey/Lantern";
import { Footer } from "@/components/journey/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chetan Rangari | Full-Stack & AI/ML Engineer" },
      {
        name: "description",
        content:
          "The Way of the Dragon Warrior — the cinematic portfolio of Chetan0e, full-stack and AI/ML engineer. Real projects, skills, experience and contact, told through a living animated journey.",
      },
      { property: "og:title", content: "Chetan Rangari | Full-Stack & AI/ML Engineer" },
      {
        property: "og:description",
        content:
          "A cinematic engineering journey — real projects, skills and experience from Chetan0e, told through the world of the Dragon Warrior.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Journey,
});

function Journey() {
  const [introDone, setIntroDone] = useState(false);
  const handleDone = useCallback(() => setIntroDone(true), []);

  return (
    <main className="bg-ink">
      <IntroSeal onDone={handleDone} />
      <SiteNav />
      <Hero introDone={introDone} />
      <About />
      <Training />
      <Disciplines />
      <Archive />
      <Challenges />
      <Growth />
      <Wisdom />
      <Ascent />
      <Lantern />
      <Footer />
    </main>
  );
}
