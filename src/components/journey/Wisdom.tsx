import { SceneBackground } from "./SceneBackground";
import { Ambient } from "./Ambient";
import { Reveal } from "./Reveal";
import { peachScene, wisdomCopy } from "@/data/content";

export function Wisdom() {
  return (
    <SceneBackground
      image={peachScene}
      videoAlt="An ancient peach tree in full blossom on a peaceful cliff above misty mountains"
      kenburns="left"
      parallax={0.05}
      className="min-h-screen bg-ink py-28 md:py-40"
      overlay={
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/30 to-ink/80" />
          <Ambient variant="petals" />
        </>
      }
    >
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-10">
        <Reveal>
          <p className="chapter-label text-amber">THE SACRED PEACH TREE — ENGINEERING PHILOSOPHY</p>
          <h2 className="headline mt-6 text-4xl text-ivory sm:text-5xl md:text-6xl">
            {wisdomCopy.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/85 md:text-lg">
            {wisdomCopy.supporting}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 text-left md:grid-cols-3">
          {wisdomCopy.principles.map((principle, i) => (
            <Reveal key={principle.title} delay={120 * i}>
              <div className="h-full border border-ivory/15 bg-ink/45 p-6 backdrop-blur-sm">
                <p className="chapter-label text-[0.58rem] text-gold/90">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="headline mt-3 text-xl text-ivory md:text-2xl">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/80">{principle.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SceneBackground>
  );
}
