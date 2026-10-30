import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { nav, identity } from "@/data/content";

function Emblem({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="5" opacity="0.55" />
      <path
        d="M100,10 a90,90 0 0,1 0,180 a45,45 0 0,1 0,-90 a45,45 0 0,0 0,-90 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <g transform="rotate(180 100 100)">
        <path
          d="M100,10 a90,90 0 0,1 0,180 a45,45 0 0,1 0,-90 a45,45 0 0,0 0,-90 Z"
          fill="currentColor"
          opacity="0.35"
        />
      </g>
      <circle cx="100" cy="145" r="11" fill="currentColor" />
    </svg>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-ink/80 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5" aria-label="Primary">
        <a href="#home" className="flex items-center gap-3 text-ivory">
          <Emblem className="h-8 w-8 text-gold" />
          <span className="chapter-label text-[0.78rem] tracking-[0.32em]">CHETAN0E</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="chapter-label text-[0.66rem] text-ivory/75 transition hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={identity.resume}
              download
              className="chapter-label flex items-center gap-1.5 border border-gold/40 px-3.5 py-2 text-[0.62rem] text-gold transition hover:bg-gold hover:text-ink"
            >
              <FileDown className="h-3.5 w-3.5" />
              RÉSUMÉ
            </a>
          </li>
        </ul>

        <button
          className="text-ivory md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ivory/10 bg-ink/95 px-5 pb-5 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2.5 text-sm tracking-[0.2em] text-ivory/85 uppercase transition hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={identity.resume}
                download
                onClick={() => setOpen(false)}
                className="chapter-label flex items-center gap-2 border border-gold/40 px-3.5 py-2.5 text-[0.66rem] text-gold"
              >
                <FileDown className="h-4 w-4" />
                DOWNLOAD RÉSUMÉ
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
