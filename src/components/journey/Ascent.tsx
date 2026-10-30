import { GraduationCap, Award, Users } from "lucide-react";
import { SceneBackground } from "./SceneBackground";
import { Ambient } from "./Ambient";
import { Reveal } from "./Reveal";
import {
  ascentScene,
  ascentCopy,
  experience,
  education,
  certification,
  opensourceRoles,
  identity,
} from "@/data/content";

export function Ascent() {
  return (
    <SceneBackground
      image={ascentScene}
      videoAlt="A monumental stone staircase climbing through temple gates toward a golden palace"
      kenburns="left"
      parallax={0.04}
      className="min-h-screen bg-ink py-24 md:py-32"
      overlay={
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/85" />
          <Ambient variant="dust" className="opacity-70" />
        </>
      }
    >
      <div id="experience" className="relative z-10 mx-auto max-w-6xl px-5 md:px-10">
        <Reveal>
          <p className="chapter-label text-gold/90">{ascentCopy.chapter}</p>
          <h2 className="headline mt-5 max-w-2xl text-4xl text-ivory sm:text-5xl">
            {ascentCopy.heading}
          </h2>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={identity.resume}
              download
              className="chapter-label inline-flex items-center gap-2.5 bg-gold px-6 py-3 text-[0.64rem] text-ink transition hover:bg-ivory"
            >
              DOWNLOAD RÉSUMÉ
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          {/* Experience timeline */}
          <div>
            <p className="chapter-label mb-8 text-[0.6rem] text-jade">THE ASCENT</p>
            <ol className="relative flex flex-col gap-10 border-l border-gold/30 pl-8">
              {experience.map((entry, i) => (
                <Reveal as="li" key={entry.role} delay={90 * i} className="relative">
                  <span
                    className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-ink"
                    aria-hidden="true"
                  />
                  <p className="chapter-label text-[0.58rem] text-amber">{entry.period}</p>
                  <h3 className="headline mt-2 text-2xl text-ivory">{entry.role}</h3>
                  <p className="chapter-label mt-1 text-[0.6rem] text-ivory/60">
                    {entry.org.toUpperCase()}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {entry.points.map((point) => (
                      <li key={point} className="flex items-baseline gap-3 text-sm leading-relaxed text-ivory/80">
                        <span
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-jade"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Education, certification, open source */}
          <div className="flex flex-col gap-6">
            <Reveal delay={140}>
              <div className="border border-jade/25 bg-ink/55 p-7 backdrop-blur-sm">
                <p className="chapter-label flex items-center gap-2 text-[0.6rem] text-gold/90">
                  <GraduationCap className="h-4 w-4" /> EDUCATION
                </p>
                <h3 className="headline mt-3 text-xl text-ivory">{education.degree}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/75">{education.institution}</p>
                <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                  <div>
                    <dt className="chapter-label text-[0.55rem] text-jade">SGPA</dt>
                    <dd className="text-ivory">{education.sgpa}</dd>
                  </div>
                  <div>
                    <dt className="chapter-label text-[0.55rem] text-jade">GRADUATION</dt>
                    <dd className="text-ivory">{education.graduation}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="border border-gold/25 bg-ink/55 p-7 backdrop-blur-sm">
                <p className="chapter-label flex items-center gap-2 text-[0.6rem] text-gold/90">
                  <Award className="h-4 w-4" /> CERTIFICATION
                </p>
                <h3 className="headline mt-3 text-xl text-ivory">{certification.name}</h3>
                <p className="mt-2 text-sm text-ivory/75">Focus: {certification.focus}</p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="border border-ivory/15 bg-ink/55 p-7 backdrop-blur-sm">
                <p className="chapter-label flex items-center gap-2 text-[0.6rem] text-jade">
                  <Users className="h-4 w-4" /> OPEN-SOURCE ROLES — GSSoC
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {opensourceRoles.map((role) => (
                    <li
                      key={role}
                      className="border border-ivory/20 px-3.5 py-1.5 text-xs tracking-[0.14em] text-ivory/85"
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </SceneBackground>
  );
}
