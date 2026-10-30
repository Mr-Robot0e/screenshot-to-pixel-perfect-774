import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Cinematic scene background — high-resolution artwork with slow Ken Burns
 * motion, layered parallax, optional looping video (lazily started when the
 * section approaches the viewport) and graceful fallback to the poster art.
 */
export function SceneBackground({
  image,
  video,
  videoAlt = "",
  kenburns = "left",
  parallax = 0.06,
  overlay,
  className = "",
  eager = false,
  children,
}: {
  image: string;
  video?: string;
  videoAlt?: string;
  kenburns?: "left" | "right";
  parallax?: number;
  overlay?: ReactNode;
  className?: string;
  eager?: boolean;
  children?: ReactNode;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const [videoOn, setVideoOn] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (!video) return;
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVideoOn(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [video]);

  useParallax(layerRef, parallax);

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
      }}
      className={`scene ${className}`}
    >
      <div ref={layerRef} className="absolute inset-[-6%] will-change-transform">
        {video && videoOn && !videoFailed ? (
          <video
            className={`scene-art ${kenburns === "left" ? "kenburns-slow" : "kenburns-slow-rev"}`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={image}
            src={video}
            onError={() => setVideoFailed(true)}
            aria-label={videoAlt}
            role="img"
          />
        ) : (
          <img
            src={image}
            alt={videoAlt}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            className={`scene-art ${kenburns === "left" ? "kenburns-slow" : "kenburns-slow-rev"}`}
          />
        )}
      </div>
      {overlay}
      {children}
    </section>
  );
}

function useParallax(ref: React.RefObject<HTMLDivElement | null>, speed: number) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const off = (r.top + r.height / 2 - window.innerHeight / 2) * speed;
      el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, speed]);
}
