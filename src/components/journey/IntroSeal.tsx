import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const STORAGE_KEY = "dragonwarrior-intro-seen";

/**
 * Cinematic intro — the black-and-white seal.
 * Stage A: dark screen, seal appears with titles.
 * Stage B: opposing halves rotate and separate.
 * Stage C: circular aperture opens, revealing the hero beneath.
 * Stage D: aperture expands beyond the viewport.
 */
export function IntroSeal({ onDone }: { onDone: () => void }) {
  const [active, setActive] = useState<boolean | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const sealRef = useRef<SVGSVGElement>(null);
  const lightRef = useRef<SVGGElement>(null);
  const darkRef = useRef<SVGGElement>(null);
  const titleARef = useRef<HTMLParagraphElement>(null);
  const titleBRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    if (reduced || seen) {
      setActive(false);
      onDone();
      return;
    }
    setActive(true);

    // Guard: the choreography must not start after the intro has been
    // dismissed (skip) or unmounted — refs would be null.
    let cancelled = false;

    // Preload the hero artwork before starting the choreography.
    const img = new Image();
    const heroUrl = coverRef.current?.dataset.hero ?? "";
    const start = () => {
      if (cancelled) return;
      requestAnimationFrame(() => {
        if (cancelled) return;
        runTimeline();
      });
    };
    if (heroUrl) {
      img.onload = start;
      img.onerror = start;
      img.src = heroUrl;
    } else {
      start();
    }

    function runTimeline() {
      if (
        cancelled ||
        !rootRef.current ||
        !sealRef.current ||
        !coverRef.current ||
        !lightRef.current ||
        !darkRef.current
      ) {
        return;
      }
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          onComplete: finish,
        });

        tl.fromTo(
          sealRef.current,
          { opacity: 0, scale: 0.82, filter: "blur(8px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.0, ease: "power2.out" },
        )
          .fromTo(
            titleARef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.7 },
            "-=0.4",
          )
          .fromTo(
            titleBRef.current,
            { opacity: 0, letterSpacing: "0.6em" },
            { opacity: 1, letterSpacing: "0.42em", duration: 0.9 },
            "-=0.35",
          )
          .to({}, { duration: 0.7 })
          // Opposing rotation
          .to(lightRef.current, { rotation: 150, duration: 1.6 }, "separate")
          .to(darkRef.current, { rotation: -150, duration: 1.6 }, "separate")
          // Separation + aperture together
          .to(
            lightRef.current,
            { xPercent: -80, yPercent: -14, scale: 1.5, opacity: 0, duration: 1.7 },
            "aperture",
          )
          .to(
            darkRef.current,
            { xPercent: 80, yPercent: 14, scale: 1.5, opacity: 0, duration: 1.7 },
            "aperture",
          )
          .to(
            [titleARef.current, titleBRef.current],
            { opacity: 0, duration: 0.5 },
            "aperture-=0.2",
          )
          .to(
            coverRef.current,
            { "--aperture": "155%", duration: 1.8, ease: "power2.in" },
            "aperture+=0.55",
          )
          .to(sealRef.current, { opacity: 0, scale: 1.35, duration: 1.2 }, "aperture+=0.9");

        tl.addLabel("separate", "+=0");
        tl.addLabel("aperture", "separate+=1.3");
        (rootRef.current as any).__tl = tl;
      }, rootRef);
    }

    function finish() {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* storage unavailable */
      }
      setActive(false);
      onDone();
    }

    return () => {
      cancelled = true;
      img.onload = null;
      img.onerror = null;
    };
  }, [onDone]);

  const skip = () => {
    const tl = (rootRef.current as any).__tl as gsap.core.Timeline | undefined;
    tl?.kill();
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage unavailable */
    }
    setActive(false);
    onDone();
  };

  if (active === null) {
    // Avoid flashing the intro before we know the preference.
    return <div ref={rootRef} className="fixed inset-0 z-50 bg-ink" aria-hidden="true" />;
  }
  if (!active) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-50 select-none"
      role="presentation"
      aria-label="Introductory cinematic sequence"
    >
      {/* Cover layer: masks open from the center as the aperture expands */}
      <div
        ref={coverRef}
        data-hero=""
        className="absolute inset-0 bg-ink"
        style={{
          maskImage:
            "radial-gradient(circle at 50% 50%, transparent calc(var(--aperture)), black calc(var(--aperture) + 1.5%))",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, transparent calc(var(--aperture)), black calc(var(--aperture) + 1.5%))",
          ["--aperture" as string]: "0%",
        }}
      />

      {/* The seal */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <svg
          ref={sealRef}
          viewBox="0 0 200 200"
          className="w-44 sm:w-56 md:w-64 drop-shadow-[0_0_40px_rgba(0,0,0,0.6)]"
          role="img"
          aria-label="Chetan0e emblem"
        >
          <defs>
            <radialGradient id="sealGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(216,180,93,0.25)" />
              <stop offset="100%" stopColor="rgba(216,180,93,0)" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="98" fill="url(#sealGlow)" />
          {/* Outer ring */}
          <circle cx="100" cy="100" r="96" fill="none" stroke="rgba(245,240,229,0.5)" strokeWidth="1.4" />
          <circle cx="100" cy="100" r="91" fill="none" stroke="rgba(23,26,23,0.85)" strokeWidth="3" />
          {/* Light half — rotates opposite to dark half */}
          <g ref={lightRef} style={{ transformOrigin: "100px 100px" }}>
            <path
              d="M100,10 a90,90 0 0,1 0,180 a45,45 0 0,1 0,-90 a45,45 0 0,0 0,-90 Z"
              fill="#F5F0E5"
            />
            <circle cx="100" cy="145" r="11" fill="#171A17" />
          </g>
          {/* Dark half */}
          <g ref={darkRef} style={{ transformOrigin: "100px 100px" }}>
            <g transform="rotate(180 100 100)">
              <path
                d="M100,10 a90,90 0 0,1 0,180 a45,45 0 0,1 0,-90 a45,45 0 0,0 0,-90 Z"
                fill="#171A17"
              />
              <circle cx="100" cy="145" r="11" fill="#F5F0E5" />
            </g>
          </g>
        </svg>

        <p
          ref={titleARef}
          className="chapter-label mt-10 text-[0.66rem] text-sage/80 opacity-0"
          style={{ opacity: 0 }}
        >
          A JOURNEY IN THE MAKING
        </p>
        <p
          ref={titleBRef}
          className="chapter-label mt-3 text-sm text-ivory opacity-0"
          style={{ opacity: 0 }}
        >
          CHETAN0E
        </p>
      </div>

      <button
        onClick={skip}
        className="chapter-label absolute bottom-8 right-8 z-10 border border-ivory/25 px-4 py-2 text-[0.6rem] text-ivory/70 transition hover:border-ivory/60 hover:text-ivory"
      >
        SKIP INTRO
      </button>
    </div>
  );
}
