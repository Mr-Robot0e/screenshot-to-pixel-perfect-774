import { useState } from "react";
import { SceneBackground } from "./SceneBackground";
import { Ambient } from "./Ambient";
import { Reveal } from "./Reveal";
import { fiveScene, disciplines, disciplinesCopy } from "@/data/content";

const NUMERALS = ["壹", "贰", "叁", "肆", "伍"];

export function Disciplines() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = disciplines[activeIndex];

  return (
    <SceneBackground
      image={fiveScene}
      videoAlt="A ceremonial temple terrace at dusk overlooking misty mountains"
      kenburns="right"
      parallax={0.04}
      className="min-h-screen bg-ink py-24 md:py-32"
      overlay={
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/85" />
          <Ambient variant="embers" className="opacity-60" />
        </>
      }
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-10">
        <Reveal>
          <p className="chapter-label text-gold/85">THE FURIOUS FIVE — ENGINEERING DISCIPLINES</p>
          <h2 className="headline mt-5 max-w-2xl text-4xl text-ivory sm:text-5xl">
            {disciplinesCopy.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/75">
            {disciplinesCopy.supporting}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
          <Reveal delay={120}>
            <ol className="flex flex-col divide-y divide-ivory/10 border-y border-ivory/10">
              {disciplines.map((discipline, i) => {
                const selected = i === activeIndex;
                return (
                  <li key={discipline.id}>
                    <button
                      onClick={() => setActiveIndex(i)}
                      aria-pressed={selected}
                      className={`group flex w-full items-baseline gap-5 px-3 py-5 text-left transition ${
                        selected ? "bg-gold/10" : "hover:bg-ivory/5"
                      }`}
                    >
                      <span
                        className={`font-display text-2xl transition ${selected ? "text-gold" : "text-ivory/35"}`}
                      >
                        {NUMERALS[i]}
                      </span>
                      <span
                        className={`text-lg transition md:text-xl ${
                          selected ? "text-ivory" : "text-ivory/60 group-hover:text-ivory/90"
                        }`}
                      >
                        {discipline.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          <Reveal delay={220} className="md:pt-4">
            <div key={active.id} className="border border-gold/25 bg-ink/60 p-7 backdrop-blur-sm md:p-9">
              <p className="chapter-label text-[0.6rem] text-gold/90">
                DISCIPLINE {activeIndex + 1} OF 5
              </p>
              <h3 className="headline mt-3 text-2xl text-ivory md:text-3xl">{active.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-ivory/80">{active.detail}</p>
              <p className="chapter-label mt-8 text-[0.58rem] text-sage/60">APPLIED ON</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {active.projects.map((project) => (
                  <li
                    key={project}
                    className="border border-ivory/20 px-3.5 py-1.5 text-xs tracking-[0.14em] text-ivory/80"
                  >
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </SceneBackground>
  );
}
