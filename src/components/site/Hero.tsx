import heroVisual from "@/assets/hero-visual.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="bg-navy text-navy-foreground relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute -top-40 -right-32 size-[38rem] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--primary) 60%, transparent), transparent 70%)",
        }}
      />

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow">Cloud · Data · AI · Software</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Engineering What's Next.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-navy-muted mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
              RAVECTOR builds modern technology solutions across Cloud, Data, AI and
              Software Engineering — helping businesses turn complex challenges into
              scalable digital products and platforms.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground hover:opacity-90 rounded-md px-6 py-3 text-center text-sm font-medium transition-opacity"
              >
                Let's Build Together
              </a>
              <a
                href="#solutions"
                className="border-navy-border text-navy-foreground hover:bg-navy-border/60 rounded-md border px-6 py-3 text-center text-sm font-medium transition-colors"
              >
                Explore Solutions
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="float-slow">
          <img
            src={heroVisual}
            alt="Abstract visualization of connected cloud systems, data flows and vector networks"
            width={1200}
            height={1200}
            className="border-navy-border w-full rounded-xl border"
          />
        </Reveal>
      </div>
    </section>
  );
}
