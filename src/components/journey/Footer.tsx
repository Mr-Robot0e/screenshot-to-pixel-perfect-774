import { ArrowUp } from "lucide-react";
import { nav, identity } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-ink border-t border-gold/15">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="chapter-label text-[0.7rem] text-gold">CHETAN0E</p>
          <p className="mt-2 text-sm text-ivory/60">
            © {new Date().getFullYear()} {identity.fullName} — The Way of the Dragon Warrior.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="chapter-label text-[0.6rem] text-ivory/55 transition hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#home"
          className="chapter-label inline-flex items-center gap-2 self-start border border-ivory/20 px-4 py-2.5 text-[0.6rem] text-ivory/70 transition hover:border-gold hover:text-gold md:self-auto"
        >
          <ArrowUp className="h-3.5 w-3.5" />
          BACK TO THE SUMMIT
        </a>
      </div>
    </footer>
  );
}
