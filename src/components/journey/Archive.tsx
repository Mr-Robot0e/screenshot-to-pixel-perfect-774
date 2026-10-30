import { useEffect, useState } from "react";
import { X, ExternalLink, Github, ScrollText, Sparkles } from "lucide-react";
import { SceneBackground } from "./SceneBackground";
import { Ambient } from "./Ambient";
import { Reveal } from "./Reveal";
import {
  archiveScene,
  archiveCopy,
  projects,
  type Project,
} from "@/data/content";

const ACCENT_TEXT: Record<string, string> = {
  gold: "text-gold",
  bamboo: "text-jade",
  jade: "text-jade",
  crimson: "text-crimson-bright",
  amber: "text-amber",
};

export function Archive() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [featured, ...rest] = projects;

  return (
    <SceneBackground
      image={archiveScene}
      videoAlt="The interior of a grand scroll archive with towering shelves, carved pillars and warm lantern light"
      kenburns="left"
      parallax={0.05}
      className="min-h-screen bg-ink py-24 md:py-32"
      overlay={
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink/90" />
          <Ambient variant="dust" className="opacity-80" />
        </>
      }
    >
      <div id="projects" className="relative z-10 mx-auto max-w-6xl px-5 md:px-10">
        <Reveal>
          <p className="chapter-label text-amber">{archiveCopy.chapter}</p>
          <h2 className="headline mt-5 max-w-2xl text-4xl text-ivory sm:text-5xl">
            {archiveCopy.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/75">
            {archiveCopy.supporting}
          </p>
        </Reveal>

        {/* Featured scroll — INTRA AI */}
        <Reveal delay={150} className="mt-14">
          <article className="relative border border-gold/30 bg-ink/60 p-7 backdrop-blur-sm md:p-12">
            <div className="absolute -top-3 left-7 flex items-center gap-2 bg-ink px-3 py-1">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span className="chapter-label text-[0.58rem] text-gold">THE FEATURED SCROLL</span>
            </div>
            <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
              <div>
                <p className="font-display text-sm text-gold/80">Scroll No. {featured.index}</p>
                <h3 className="headline mt-2 text-3xl text-ivory md:text-4xl">{featured.name}</h3>
                <p className="chapter-label mt-2 text-[0.62rem] text-amber">
                  {featured.tagline.toUpperCase()}
                </p>
                <p className="mt-5 text-base leading-relaxed text-ivory/80">
                  {featured.description}
                </p>
                <button
                  onClick={() => setOpenProject(featured)}
                  className="chapter-label mt-7 inline-flex items-center gap-2.5 bg-gold px-6 py-3 text-[0.64rem] text-ink transition hover:bg-ivory"
                >
                  <ScrollText className="h-4 w-4" />
                  {archiveCopy.unseal}
                </button>
              </div>
              <ul className="flex flex-col justify-center gap-3 md:pl-6">
                {featured.features.map((feature) => (
                  <li key={feature} className="flex items-baseline gap-3 text-sm text-ivory/85">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>

        {/* Supporting scrolls — editorial rows, not identical cards */}
        <div className="mt-10 flex flex-col gap-5">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={80 * i}>
              <article className="group grid gap-4 border border-ivory/12 bg-ink/45 p-6 backdrop-blur-sm transition hover:border-gold/40 hover:bg-ink/60 md:grid-cols-[90px_1fr_auto] md:items-center md:gap-8 md:p-7">
                <p className={`font-display text-4xl md:text-5xl ${ACCENT_TEXT[project.accent]}`}>
                  {project.index}
                </p>
                <div>
                  <h3 className="headline text-2xl text-ivory md:text-3xl">{project.name}</h3>
                  <p className="chapter-label mt-1 text-[0.6rem] text-ivory/60">
                    {project.tagline.toUpperCase()}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ivory/75">
                    {project.description}
                  </p>
                  <p className="chapter-label mt-3 text-[0.56rem] text-jade/90">
                    {project.technologies.join(" · ")}
                  </p>
                </div>
                <button
                  onClick={() => setOpenProject(project)}
                  className="chapter-label inline-flex items-center gap-2 self-start border border-gold/40 px-5 py-3 text-[0.6rem] text-gold transition hover:bg-gold hover:text-ink md:self-center"
                >
                  <ScrollText className="h-3.5 w-3.5" />
                  UNSEAL
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {openProject && <ProjectScroll project={openProject} onClose={() => setOpenProject(null)} />}
    </SceneBackground>
  );
}

function ProjectScroll({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/85 p-4 backdrop-blur-sm md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative my-8 w-full max-w-3xl border border-gold/35 bg-ink p-7 shadow-[0_30px_80px_rgba(0,0,0,0.6)] md:p-10">
        <button
          onClick={onClose}
          autoFocus
          aria-label="Close project details"
          className="chapter-label absolute right-5 top-5 flex items-center gap-1.5 border border-ivory/20 px-3 py-2 text-[0.58rem] text-ivory/70 transition hover:border-gold hover:text-gold"
        >
          <X className="h-3.5 w-3.5" />
          CLOSE
        </button>

        <p className="font-display text-sm text-gold/80">Scroll No. {project.index}</p>
        <h3 className="headline mt-2 text-4xl text-ivory">{project.name}</h3>
        <p className="chapter-label mt-2 text-[0.62rem] text-amber">
          {project.tagline.toUpperCase()}
        </p>
        <p className="mt-5 text-base leading-relaxed text-ivory/85">{project.description}</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="chapter-label text-[0.6rem] text-gold/90">WHAT IT DOES</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-baseline gap-3 text-sm text-ivory/85">
                  <span
                    className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-jade"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="chapter-label text-[0.6rem] text-gold/90">TECHNIQUES & TOOLS</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="border border-jade/35 bg-jade/10 px-3.5 py-1.5 text-xs text-ivory/90"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap gap-3 border-t border-ivory/12 pt-7">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="chapter-label inline-flex items-center gap-2.5 bg-gold px-6 py-3 text-[0.64rem] text-ink transition hover:bg-ivory"
            >
              <ExternalLink className="h-4 w-4" />
              VISIT THE LIVE PROJECT
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="chapter-label inline-flex items-center gap-2.5 border border-ivory/30 px-6 py-3 text-[0.64rem] text-ivory transition hover:border-gold hover:text-gold"
            >
              <Github className="h-4 w-4" />
              VIEW THE REPOSITORY
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
