import { useMemo } from "react";

type Variant = "petals" | "dust" | "lanterns" | "embers";

/** Deterministic PRNG so SSR and client markup agree. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const CONFIG: Record<Variant, { count: number; seed: number }> = {
  petals: { count: 22, seed: 7 },
  dust: { count: 34, seed: 11 },
  lanterns: { count: 18, seed: 5 },
  embers: { count: 30, seed: 17 },
};

/**
 * Ambient environmental particles — peach blossoms, dust motes, rising
 * lanterns, chi embers. Continues moving without pointer interaction.
 */
export function Ambient({ variant, className = "" }: { variant: Variant; className?: string }) {
  const items = useMemo(() => {
    const { count, seed } = CONFIG[variant];
    const rnd = mulberry32(seed);
    return Array.from({ length: count }, (_, i) => {
      const left = rnd() * 100;
      const top = rnd() * 100;
      const size = 3 + rnd() * 9;
      const duration = 9 + rnd() * 18;
      const delay = -rnd() * duration;
      const opacity = 0.35 + rnd() * 0.5;
      return { key: i, left, top, size, duration, delay, opacity };
    });
  }, [variant]);

  const styleFor = (it: (typeof items)[number]): React.CSSProperties => {
    const base: React.CSSProperties = {
      left: `${it.left}%`,
      top: `${it.top}%`,
      opacity: it.opacity,
      animationDuration: `${it.duration}s`,
      animationDelay: `${it.delay}s`,
    };
    if (variant === "petals") return { ...base, animationName: "petal-fall" };
    if (variant === "lanterns") {
      return { ...base, animationName: "lantern-rise", width: it.size * 0.8 + 4, height: it.size + 6, top: `${60 + it.top * 40}%` };
    }
    if (variant === "embers") {
      return { ...base, width: it.size * 0.7 + 2, height: it.size * 0.7 + 2, animationName: "ember-drift", animationDuration: `${it.duration / 2}s` };
    }
    return { ...base, width: it.size + 2, height: it.size + 2, animationName: "dust-float" };
  };

  return (
    <div className={`ambient-layer ${variant} ${className}`} aria-hidden="true">
      {items.map((it) => (
        <span key={it.key} style={styleFor(it)} />
      ))}
    </div>
  );
}
