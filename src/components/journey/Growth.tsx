import { SceneBackground } from "./SceneBackground";
import { Ambient } from "./Ambient";
import { Reveal } from "./Reveal";
import { pandaVillageScene, spiritScene, growthCopy, identity } from "@/data/content";

export function Growth() {
  return (
    <>
      {/* Panda village — growth and community */}
      <SceneBackground
        image={pandaVillageScene}
        videoAlt="A lush hidden mountain village with stone cottages, blossom trees and waterfalls"
        kenburns="left"
        parallax={0.04}
        className="min-h-[80vh] bg-ink py-24 md:py-32"
        overlay={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/35 to-ink/85" />
            <Ambient variant="petals" className="opacity-60" />
          </>
        }
      >
        <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-10">
          <Reveal>
            <p className="chapter-label text-jade">THE PANDA VILLAGE — GROWTH & COMMUNITY</p>
            <h2 className="headline mt-5 max-w-2xl text-4xl text-ivory sm:text-5xl">
              {growthCopy.heading}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/80 md:text-lg">
              {growthCopy.supporting}
            </p>
          </Reveal>

          <Reveal delay={180} className="mt-12">
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                {
                  title: "LEARN IN PUBLIC",
                  detail: "Open-source contributions, shared write-ups and code others can build on.",
                },
                {
                  title: "TEACH TO MASTER",
                  detail: "Reviewing contributors' PRs and mentoring turns knowledge into practice.",
                },
                {
                  title: "BUILD WITH PEOPLE",
                  detail: "Coding clubs, ambassador programs and hackathons multiply what one person can ship.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-jade/25 bg-ink/55 p-6 backdrop-blur-sm"
                >
                  <p className="chapter-label text-[0.6rem] text-gold/90">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/80">{item.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SceneBackground>

      {/* Spirit realm interlude */}
      <SceneBackground
        image={spiritScene}
        videoAlt="A mystical spirit realm of floating jade islands and streams of golden-green energy"
        kenburns="right"
        parallax={0.06}
        className="min-h-[70vh] bg-ink py-20 md:py-28"
        overlay={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/45 to-ink/90" />
            <Ambient variant="embers" />
          </>
        }
      >
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-10">
          <Reveal>
            <p className="chapter-label text-[0.6rem] text-jade">THE SPIRIT REALM — INNER PRACTICE</p>
            <blockquote className="headline mx-auto mt-6 max-w-2xl text-2xl text-ivory md:text-4xl">
              "Your real gift is not the tool you master — it is the curiosity that keeps you
              exploring beyond it."
            </blockquote>
            <p className="chapter-label mt-8 text-[0.6rem] text-gold/85">
              {identity.fullName.toUpperCase()} — ON ENGINEERING AS PRACTICE
            </p>
          </Reveal>
        </div>
      </SceneBackground>
    </>
  );
}
