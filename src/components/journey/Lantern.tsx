import { useState, type FormEvent } from "react";
import { Mail, Phone, Github, Linkedin, Globe, Send } from "lucide-react";
import { SceneBackground } from "./SceneBackground";
import { Ambient } from "./Ambient";
import { Reveal } from "./Reveal";
import { lanternScene, lanternVideo, contactCopy, identity } from "@/data/content";

type Status = "idle" | "error" | "opened";

export function Lantern() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/.+@.+\..+/.test(form.email) || !form.message.trim()) {
      setStatus("error");
      return;
    }
    const subject = encodeURIComponent(form.subject.trim() || `Hello from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`,
    );
    // Honest delivery: no backend credentials, so this opens the visitor's
    // email app with the message fully composed — nothing is silently "sent".
    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
    setStatus("opened");
  };

  const inputClass =
    "w-full border border-ivory/25 bg-ink/60 px-4 py-3 text-sm text-ivory placeholder:text-ivory/35 focus:border-gold focus:outline-none transition";

  return (
    <SceneBackground
      image={lanternScene}
      video={lanternVideo.url}
      videoAlt="The Lantern Festival — glowing lanterns rising over a peaceful river at night"
      kenburns="right"
      parallax={0.05}
      className="min-h-screen bg-ink py-24 md:py-32"
      overlay={
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink/90" />
          <Ambient variant="lanterns" />
        </>
      }
    >
      <div id="contact" className="relative z-10 mx-auto max-w-6xl px-5 md:px-10">
        <Reveal>
          <p className="chapter-label text-gold">THE LANTERN FESTIVAL — CONTACT</p>
          <h2 className="headline mt-5 max-w-2xl text-4xl text-ivory sm:text-5xl">
            {contactCopy.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/80">
            {contactCopy.supporting}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
          {/* Contact channels */}
          <Reveal delay={140}>
            <ul className="flex flex-col divide-y divide-ivory/10 border-y border-ivory/10">
              {[
                { icon: Mail, label: "EMAIL", value: identity.email, href: `mailto:${identity.email}` },
                { icon: Phone, label: "PHONE", value: identity.phone, href: `tel:${identity.phone.replace(/\s/g, "")}` },
                { icon: Github, label: "GITHUB", value: "github.com/Chetan0e", href: identity.github },
                { icon: Linkedin, label: "LINKEDIN", value: "linkedin.com/in/chetan-rangari", href: identity.linkedin },
                { icon: Globe, label: "PORTFOLIO", value: "www.chetan0e.space", href: identity.portfolio },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 py-4"
                  >
                    <item.icon className="h-4 w-4 shrink-0 text-gold/85" />
                    <span className="chapter-label w-24 text-[0.58rem] text-ivory/50">
                      {item.label}
                    </span>
                    <span className="truncate text-sm text-ivory/90 transition group-hover:text-gold">
                      {item.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact form — honest email-draft fallback */}
          <Reveal delay={240}>
            <form onSubmit={submit} noValidate className="border border-gold/25 bg-ink/55 p-7 backdrop-blur-sm md:p-9">
              <p className="chapter-label text-[0.6rem] text-gold/90">START A CONVERSATION</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="chapter-label text-[0.56rem] text-ivory/60">NAME</span>
                  <input
                    className={inputClass}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="chapter-label text-[0.56rem] text-ivory/60">EMAIL</span>
                  <input
                    className={inputClass}
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </label>
              </div>
              <label className="mt-4 flex flex-col gap-2">
                <span className="chapter-label text-[0.56rem] text-ivory/60">SUBJECT</span>
                <input
                  className={inputClass}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What shall we build?"
                />
              </label>
              <label className="mt-4 flex flex-col gap-2">
                <span className="chapter-label text-[0.56rem] text-ivory/60">MESSAGE</span>
                <textarea
                  className={`${inputClass} min-h-32 resize-y`}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your problem, idea or project…"
                />
              </label>

              {status === "error" && (
                <p className="mt-4 text-sm text-crimson-bright" role="alert">
                  Please add your name, a valid email and a short message before sending.
                </p>
              )}
              {status === "opened" && (
                <p className="mt-4 text-sm text-jade" role="status">
                  Your email app should now open with the message ready — press send there. Nothing
                  was sent automatically.
                </p>
              )}

              <button
                type="submit"
                className="chapter-label mt-7 inline-flex items-center gap-2.5 bg-gold px-7 py-3.5 text-[0.66rem] text-ink transition hover:bg-ivory"
              >
                <Send className="h-4 w-4" />
                {contactCopy.cta}
              </button>
              <p className="mt-4 text-xs leading-relaxed text-ivory/45">
                Submitting opens your own email app with this message pre-filled to{" "}
                {identity.email} — no data is stored or silently sent.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </SceneBackground>
  );
}
