import {
  Cloud,
  Database,
  Sparkles,
  Code2,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

const solutions: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    body: "Build scalable, secure and reliable cloud platforms and infrastructure.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    body: "Transform complex data into reliable pipelines, analytics and actionable intelligence.",
  },
  {
    icon: Sparkles,
    title: "AI & Intelligent Applications",
    body: "Build AI-powered applications and automation that solve meaningful business problems.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    body: "Design and build scalable digital products, platforms and business applications.",
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    body: "Extend your team with experienced engineers who plug in quickly and deliver from day one.",
  },
];

const capabilities = [
  "Cloud Architecture",
  "Platform Engineering",
  "DevOps & Automation",
  "Data Engineering",
  "AI / ML",
  "API & Microservices",
  "Software Development",
  "System Integration",
];

const process = [
  { n: "01", title: "Understand", body: "Understand the business problem, users and goals." },
  { n: "02", title: "Design", body: "Design the right technology architecture and product experience." },
  { n: "03", title: "Build", body: "Engineer scalable, secure and reliable solutions." },
  { n: "04", title: "Evolve", body: "Continuously improve, automate and scale the solution." },
];

const principles = [
  { title: "Problem First", body: "Technology should solve a meaningful problem." },
  { title: "Built to Scale", body: "Architecture designed with future growth in mind." },
  { title: "Automation by Design", body: "Reduce repetitive work and improve operational efficiency." },
  { title: "Engineering for Impact", body: "Focus on measurable business and user outcomes." },
];

export function Intro() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            Technology built around real-world problems.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="text-muted-foreground space-y-5 text-base leading-relaxed">
            <p>
              RAVECTOR combines modern engineering with practical business thinking —
              starting from the problem, not the technology.
            </p>
            <p>
              The result is scalable, reliable and intelligent technology that fits how
              a business actually operates, and keeps working as it grows.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Solutions() {
  return (
    <section id="solutions" className="bg-surface border-y py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <span className="eyebrow">Solutions</span>
          <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            Five engineering areas, one delivery standard.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} as="article">
              <div className="bg-card group h-full rounded-xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_-24px_color-mix(in_oklab,var(--primary)_55%,transparent)]">
                <span className="bg-accent text-accent-foreground inline-flex size-11 items-center justify-center rounded-lg transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <span className="eyebrow">Capabilities</span>
          <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            Engineering depth across the stack.
          </h2>
        </Reveal>

        <ul className="border-border mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c} delay={(i % 4) * 60} as="li">
              <div className="bg-background hover:bg-surface flex h-full items-center gap-3 p-6 transition-colors">
                <span className="bg-primary size-1.5 shrink-0 rounded-full" aria-hidden="true" />
                <span className="text-sm font-medium">{c}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="bg-navy text-navy-foreground relative overflow-hidden py-24 md:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="section-shell relative">
        <Reveal>
          <span className="eyebrow">How we work</span>
          <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            A process built for clarity and momentum.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 90} as="li">
              <div className="relative md:pr-6">
                <div className="bg-navy-border mb-6 hidden h-px w-full md:block">
                  <div className="bg-primary size-2 -translate-y-1/2 rounded-full" />
                </div>
                <span className="text-primary text-sm font-medium tracking-widest">{p.n}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="text-navy-muted mt-3 text-sm leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WhyRavector() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <span className="eyebrow">Why RAVECTOR</span>
          <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            An engineering philosophy, not a service menu.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:gap-x-20">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="border-primary/60 border-l-2 pl-6">
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="bg-surface border-y py-24 md:py-32">
      <div className="section-shell max-w-3xl">
        <Reveal>
          <span className="eyebrow">About</span>
          <p className="mt-6 text-xl leading-relaxed font-medium tracking-tight sm:text-2xl">
            RAVECTOR is a technology company focused on solving real-world problems
            through modern engineering. We bring together Cloud, Data, AI and Software
            Engineering to help organizations modernize technology, build scalable
            platforms and create intelligent digital products.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="bg-navy text-navy-foreground relative overflow-hidden py-28 md:py-36">
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-48 mx-auto size-[46rem] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--primary) 65%, transparent), transparent 70%)",
        }}
      />
      <div className="section-shell relative max-w-3xl text-center">
        <Reveal>
          <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Have a technology challenge?
          </h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="text-navy-muted mt-6 text-base sm:text-lg">
            Let's turn the problem into something worth building.
          </p>
        </Reveal>
        <Reveal delay={170}>
          <a
            href="mailto:hello@ravector.com"
            className="bg-primary text-primary-foreground hover:opacity-90 mt-10 inline-block rounded-md px-7 py-3.5 text-sm font-medium transition-opacity"
          >
            Start a Conversation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
