import { SceneBackground } from "./SceneBackground";
import { Ambient } from "./Ambient";
import { Reveal } from "./Reveal";
import { gongmenScene, challenges, challengesCopy } from "@/data/content";

export function Challenges() {
  return (
    <SceneBackground
      image={gongmenScene}
      videoAlt="A dramatic walled city at twilight with monumental gates, stone bridges and lantern light"
      kenburns="right"
      parallax={0.05}
      className="min-h-screen bg-ink py-24 md:py-32"
      overlay={
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/60 to-ink/90" />
          <Ambient variant="embers" className="opacity-40" />
        </>
      }
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-10">
        <Reveal>
          <p className="chapter-label text-crimson-bright">GONGMEN CITY — PROBLEM SOLVING</p>
          <h2 className="headline mt-5 max-w-2xl text-4xl text-ivory sm:text-5xl">
            {challengesCopy.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/75">
            {challengesCopy.supporting}
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          {challenges.map((challenge, i) => (
            <Reveal key={challenge.id} delay={100 * i}>
              <article className="border border-crimson/25 bg-ink/60 backdrop-blur-sm">
                <div className="grid md:grid-cols-3 md:divide-x md:divide-ivory/10">
                  <div className="p-7 md:p-8">
                    <p className="chapter-label text-[0.6rem] text-crimson-bright">
                      01 — THE PROBLEM
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-ivory/85 md:text-base">
                      {challenge.problem}
                    </p>
                  </div>
                  <div className="border-t border-ivory/10 p-7 md:border-t-0 md:p-8">
                    <p className="chapter-label text-[0.6rem] text-gold/90">02 — THE APPROACH</p>
                    <p className="mt-4 text-sm leading-relaxed text-ivory/85 md:text-base">
                      {challenge.approach}
                    </p>
                  </div>
                  <div className="border-t border-ivory/10 p-7 md:border-t-0 md:p-8">
                    <p className="chapter-label text-[0.6rem] text-jade">03 — THE OUTCOME</p>
                    <p className="mt-4 text-sm leading-relaxed text-ivory/85 md:text-base">
                      {challenge.outcome}
                    </p>
                    <a
                      href={challenge.link}
                      target="_blank"
                      rel="noreferrer"
                      className="chapter-label mt-4 inline-block text-[0.6rem] text-gold underline decoration-gold/40 underline-offset-4 transition hover:text-ivory"
                    >
                      {challenge.linkLabel} →
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SceneBackground>
  );
}
