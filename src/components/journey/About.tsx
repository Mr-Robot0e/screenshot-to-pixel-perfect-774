import { SceneBackground } from "./SceneBackground";
import { Ambient } from "./Ambient";
import { Reveal } from "./Reveal";
import { villageScene, aboutCopy } from "@/data/content";

export function About() {
  return (
    <SceneBackground
      image={villageScene}
      videoAlt="A warm village street with a steaming noodle shop, hanging lanterns and stone pathways"
      kenburns="right"
      parallax={0.05}
      className="min-h-screen bg-ink py-24 md:py-32"
      overlay={
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/30" />
          <Ambient variant="dust" />
        </>
      }
    >
      <div id="about" className="relative z-10 mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <div>
          <Reveal>
            <p className="chapter-label text-amber">{aboutCopy.chapter}</p>
            <h2 className="headline mt-5 text-4xl text-ivory sm:text-5xl">{aboutCopy.heading}</h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-ivory/85 md:text-lg">
              {aboutCopy.bio.map((paragraph, i) => (
                <p key={i} className={i === 0 ? "text-ivory" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={250} className="md:pt-16">
          <dl className="divide-y divide-gold/15 border-y border-gold/15">
            {aboutCopy.facts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-[130px_1fr] items-baseline gap-4 py-4">
                <dt className="chapter-label text-[0.6rem] text-gold/85">{fact.label}</dt>
                <dd className="text-sm leading-relaxed text-ivory/90">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className="chapter-label mt-6 text-[0.58rem] leading-relaxed text-sage/60">
            NOODLE SHOP PHILOSOPHY — GREAT WORK, LIKE GREAT NOODLES,
            <br />
            IS MADE ONE PATIENT BATCH AT A TIME.
          </p>
        </Reveal>
      </div>
    </SceneBackground>
  );
}
