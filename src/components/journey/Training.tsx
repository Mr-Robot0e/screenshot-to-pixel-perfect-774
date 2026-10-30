import { useState } from "react";
import { SceneBackground } from "./SceneBackground";
import { Ambient } from "./Ambient";
import { Reveal } from "./Reveal";
import { trainingScene, trainingCopy, skillCategories } from "@/data/content";

export function Training() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0];

  return (
    <SceneBackground
      image={trainingScene}
      videoAlt="A serene mountain temple training courtyard with carved pillars and wooden training equipment"
      kenburns="left"
      parallax={0.05}
      className="min-h-screen bg-forest py-24 md:py-32"
      overlay={
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-ink/70 to-ink/85" />
          <Ambient variant="dust" />
        </>
      }
    >
      <div id="skills" className="relative z-10 mx-auto max-w-6xl px-5 md:px-10">
        <Reveal>
          <p className="chapter-label text-jade">{trainingCopy.chapter}</p>
          <h2 className="headline mt-5 max-w-2xl text-4xl text-ivory sm:text-5xl">
            {trainingCopy.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/75">
            {trainingCopy.supporting}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-[320px_1fr] md:gap-12">
          {/* Selectable categories */}
          <Reveal delay={120}>
            <ul className="flex flex-col gap-2" role="tablist" aria-label="Skill categories">
              {skillCategories.map((category) => {
                const selected = category.id === active.id;
                return (
                  <li key={category.id}>
                    <button
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveId(category.id)}
                      className={`chapter-label flex w-full items-center justify-between border px-5 py-3.5 text-left text-[0.66rem] transition ${
                        selected
                          ? "border-jade bg-jade/15 text-ivory"
                          : "border-ivory/15 bg-ink/30 text-ivory/60 hover:border-jade/50 hover:text-ivory"
                      }`}
                    >
                      {category.label}
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full transition ${selected ? "bg-gold" : "bg-ivory/25"}`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Revealed technologies */}
          <Reveal delay={220}>
            <div
              key={active.id}
              className="border border-jade/25 bg-ink/55 p-7 backdrop-blur-sm md:p-9"
              role="tabpanel"
              aria-label={`${active.label} technologies`}
            >
              <p className="chapter-label text-[0.6rem] text-gold/90">{active.label.toUpperCase()}</p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {active.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border border-jade/35 bg-jade/10 px-4 py-2 text-sm text-ivory/90 transition hover:border-gold/60 hover:text-gold"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm leading-relaxed text-sage/70">
                Skills listed are those actually used in coursework, projects and open-source work —
                no invented proficiency meters.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SceneBackground>
  );
}
