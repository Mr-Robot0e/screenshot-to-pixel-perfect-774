import { ArrowDown, Compass, ScrollText } from "lucide-react";
import { SceneBackground } from "./SceneBackground";
import { Ambient } from "./Ambient";
import { Reveal } from "./Reveal";
import { heroScene, valleyVideo, heroCopy, identity } from "@/data/content";

export function Hero({ introDone }: { introDone: boolean }) {
  return (
    <SceneBackground
      image={heroScene}
      video={valleyVideo.url}
      videoAlt="The Valley of Peace at sunrise — misty mountains, bamboo and a distant jade palace, with a panda looking out over the valley"
      kenburns="left"
      parallax={0.1}
      eager
      className="min-h-[100svh]"
      overlay={
        <>
          {/* Legibility scrims that never hide Po */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/45" />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-ink/75 via-ink/25 to-transparent md:w-3/5" />
          <Ambient variant="dust" />
          <Ambient variant="petals" className="opacity-70" />
        </>
      }
    >
      <div
        id="home"
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-24 pt-36 md:px-10 md:pb-28"
      >
        <div
          className="max-w-2xl transition-all duration-1000"
          style={{
            opacity: introDone ? 1 : 0,
            transform: introDone ? "none" : "translate3d(0, 42px, 0)",
          }}
        >
          <p className="chapter-label text-gold/90">THE VALLEY OF PEACE</p>

          <h1 className="headline mt-5 text-5xl text-ivory sm:text-6xl md:text-7xl">
            {heroCopy.heading1}
            <br />
            {heroCopy.heading2}{" "}
            <span className="text-crimson-bright">{heroCopy.heading3}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/85 md:text-lg">
            {heroCopy.supporting}
          </p>

          <div className="mt-8 space-y-1.5">
            <p className="chapter-label text-[0.7rem] text-ivory">{identity.fullName}</p>
            <p className="chapter-label text-[0.62rem] text-gold/85">{identity.role}</p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="group inline-flex items-center gap-2.5 bg-gold px-7 py-3.5 text-[0.68rem] tracking-[0.28em] text-ink transition hover:bg-ivory"
            >
              <Compass className="h-4 w-4 transition group-hover:rotate-45" />
              {heroCopy.primaryCta}
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 border border-ivory/40 px-7 py-3.5 text-[0.68rem] tracking-[0.28em] text-ivory transition hover:border-gold hover:text-gold"
            >
              <ScrollText className="h-4 w-4" />
              {heroCopy.secondaryCta}
            </a>
          </div>
        </div>

        <div
          className="mt-14 flex items-center gap-3 text-ivory/60 transition-opacity delay-500 duration-1000"
          style={{ opacity: introDone ? 1 : 0 }}
          aria-hidden="true"
        >
          <span className="chapter-label text-[0.58rem]">SCROLL TO BEGIN</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </SceneBackground>
  );
}
