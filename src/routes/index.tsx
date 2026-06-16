import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Download, Mail, Phone, MapPin, Send, Calendar,
  Moon, Sun, ArrowUp, Github, Linkedin, Instagram, Dribbble,
  Sparkles, Palette, Code2, Users, MessageCircle, Award, Quote,
  ExternalLink, FileText, ChevronRight,
} from "lucide-react";

import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eliana Vaughn — Brand & Product Designer" },
      { name: "description", content: "Portfolio of Eliana Vaughn, a brand and product designer crafting refined digital experiences for luxury and lifestyle brands." },
      { property: "og:title", content: "Eliana Vaughn — Brand & Product Designer" },
      { property: "og:description", content: "Refined digital experiences for luxury and lifestyle brands." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCounter(target: number, start: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

function Portfolio() {
  useReveal();
  const [dark, setDark] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [statsIn, setStatsIn] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!statsRef.current) return;
    const io = new IntersectionObserver(
      (e) => e.forEach((x) => x.isIntersecting && setStatsIn(true)),
      { threshold: 0.4 },
    );
    io.observe(statsRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Aurora background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-aurora opacity-80" />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-lavender/40 blur-3xl animate-blob" />
        <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-rose/30 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-navy/20 blur-3xl animate-blob" style={{ animationDelay: "-12s" }} />
      </div>

      <Nav dark={dark} setDark={setDark} />

      {/* HERO */}
      <section id="home" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-foreground/70">
              <Sparkles className="h-3.5 w-3.5 text-gold" /> Available for select projects · 2026
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block text-foreground/90">Hello, I'm</span>
              <span className="block text-gradient italic">Eliana Vaughn</span>
            </h1>
            <p className="mt-6 max-w-xl font-display text-2xl italic text-foreground/70 sm:text-3xl">
              Brand &amp; Product Designer
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I craft refined digital experiences and identity systems for luxury and lifestyle brands —
              translating intention into interfaces that feel quietly inevitable.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <BtnPrimary href="#projects"><span>View Portfolio</span><ArrowRight className="h-4 w-4" /></BtnPrimary>
              <BtnGlass href="#"><Download className="h-4 w-4" /><span>Download Resume</span></BtnGlass>
              <BtnGlass href="#contact"><Mail className="h-4 w-4" /><span>Contact Me</span></BtnGlass>
              <BtnOutline href="#contact"><span>Let's Work Together</span><ArrowRight className="h-4 w-4" /></BtnOutline>
            </div>

            <div ref={statsRef} className="mt-14 grid max-w-xl grid-cols-3 gap-6">
              <Stat value={useCounter(86, statsIn)} suffix="+" label="Projects shipped" />
              <Stat value={useCounter(12, statsIn)} suffix=" yrs" label="Experience" />
              <Stat value={useCounter(34, statsIn)} suffix="" label="Awards & features" />
            </div>
          </div>

          <div className="reveal relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-lavender/60 via-rose/40 to-navy/30 blur-2xl" />
            <div className="relative animate-float">
              <div className="overflow-hidden rounded-[2rem] glass-strong p-2">
                <img
                  src={portrait}
                  alt="Portrait of Eliana Vaughn"
                  width={1024}
                  height={1280}
                  className="h-[34rem] w-full rounded-[1.6rem] object-cover sm:h-[38rem]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl glass-strong px-5 py-4 sm:block">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Currently</div>
                <div className="mt-1 font-display text-lg">Design Director, Atelier Nord</div>
              </div>
              <div className="absolute -right-4 top-10 hidden rounded-full glass-strong px-4 py-2 text-xs font-medium sm:block">
                <span className="text-gold">★</span> Awwwards SOTD ×3
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="A story shaped by craft and curiosity">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="reveal lg:col-span-2 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              For over a decade I've worked at the intersection of brand and product — partnering with
              founders, creative directors and engineering leaders to build experiences that feel both
              effortless and unmistakable.
            </p>
            <p>
              My practice began in editorial design and slowly grew into systems work: typography that
              breathes, motion that earns its place, and interfaces that respect the people using them.
              I currently lead a small studio focused on hospitality, fashion and wellness clients.
            </p>
            <p>
              Looking forward, I'm building toward a quieter kind of luxury in software — products that feel
              less like dashboards and more like beautifully made objects.
            </p>
          </div>
          <div className="reveal space-y-4">
            <Highlight label="Career goal" text="Lead design for a category-defining lifestyle product." />
            <Highlight label="Key win" text="Rebrand & launch of Maison Lior — 4× revenue in 18 months." />
            <Highlight label="Speaking" text="Config 2025 · Awwwards Conf · Brand New" />
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Skills" title="A practice across four disciplines">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s, i) => (
            <SkillCard key={s.title} {...s} delay={i * 80} />
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Selected Work" title="Projects crafted with intention">
        <div className="space-y-10">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="Experience" title="Where I've made things">
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-lavender via-rose to-navy sm:left-1/2" />
          <div className="space-y-12">
            {EXPERIENCE.map((e, i) => (
              <TimelineItem key={e.company} item={e} side={i % 2 === 0 ? "left" : "right"} />
            ))}
          </div>
        </div>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section id="achievements" eyebrow="Achievements" title="Recognition & milestones">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.title} className="reveal glass rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-luxe">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-lavender/60 to-rose/60 text-foreground">
                  <Award className="h-5 w-5" />
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {a.kind}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.detail}</p>
              <p className="mt-4 text-xs text-foreground/50">{a.year}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Words" title="Kind words from collaborators">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="reveal glass rounded-3xl p-7">
              <Quote className="h-7 w-7 text-gold" />
              <blockquote className="mt-4 font-display text-xl leading-snug text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="grid h-11 w-11 place-items-center rounded-full font-display text-base text-primary-foreground"
                  style={{ background: "var(--gradient-text)" }}
                >
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <span>
                  <span className="block text-sm font-medium">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* GALLERY */}
      <Section eyebrow="Gallery" title="A look inside the studio">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[project1, project2, project3, portrait, project2, project3, project1, portrait].map((src, i) => (
            <div
              key={i}
              className={`reveal overflow-hidden rounded-2xl glass ${i % 5 === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Let's create something memorable">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="reveal glass-strong rounded-3xl p-7 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" placeholder="Your full name" />
              <Field label="Email" type="email" placeholder="you@studio.com" />
            </div>
            <Field label="Subject" placeholder="Project, role, or hello" className="mt-5" />
            <div className="mt-5">
              <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me a little about what you're building…"
                className="w-full resize-none rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none ring-ring/40 transition focus:ring-2"
              />
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <BtnPrimary type="submit"><Send className="h-4 w-4" /><span>Send Message</span></BtnPrimary>
              <BtnGlass href="#"><Calendar className="h-4 w-4" /><span>Schedule a Call</span></BtnGlass>
            </div>
          </form>

          <div className="reveal space-y-4">
            <ContactRow icon={Mail} label="Email" value="hello@elianavaughn.studio" />
            <ContactRow icon={Phone} label="Phone" value="+1 (415) 555 0119" />
            <ContactRow icon={MapPin} label="Studio" value="San Francisco · Remote worldwide" />
            <div className="glass rounded-3xl p-6">
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Follow</div>
              <div className="mt-4 flex gap-3">
                {[Linkedin, Dribbble, Instagram, Github].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="grid h-11 w-11 place-items-center rounded-full glass transition hover:-translate-y-0.5 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full glass-strong transition-all ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}

/* ───── Components ───── */

function Nav({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className={`flex items-center justify-between gap-4 rounded-full px-5 py-2.5 transition-all ${scrolled ? "glass-strong" : ""}`}>
          <a href="#home" className="flex items-center gap-2 font-display text-lg">
            <span className="grid h-8 w-8 place-items-center rounded-full text-primary-foreground" style={{ background: "var(--gradient-text)" }}>
              E
            </span>
            <span className="hidden sm:inline">Eliana Vaughn</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-foreground/70 lg:flex">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="relative transition hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="grid h-9 w-9 place-items-center rounded-full glass"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="#contact"
              className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 sm:inline-flex"
            >
              Get in touch
            </a>
            <button onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-full glass lg:hidden" aria-label="Menu">
              <ChevronRight className={`h-4 w-4 transition ${open ? "rotate-90" : ""}`} />
            </button>
          </div>
        </div>
        {open && (
          <div className="mt-2 grid gap-1 rounded-2xl glass-strong p-3 lg:hidden">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm hover:bg-secondary">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function Section({
  id, eyebrow, title, children,
}: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-12 max-w-2xl">
          <div className="text-xs font-medium uppercase tracking-[0.3em] text-gold">{eyebrow}</div>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function BtnPrimary({ children, href, type }: { children: React.ReactNode; href?: string; type?: "button" | "submit" }) {
  const cls = "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-luxe transition hover:-translate-y-0.5 hover:opacity-95";
  return href ? <a href={href} className={cls}>{children}</a> : <button type={type ?? "button"} className={cls}>{children}</button>;
}
function BtnGlass({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5">
      {children}
    </a>
  );
}
function BtnOutline({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition hover:border-foreground/50">
      {children}
    </a>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl sm:text-4xl text-gradient">
        {value}{suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function Highlight({ label, text }: { label: string; text: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="text-xs uppercase tracking-widest text-gold">{label}</div>
      <div className="mt-1 font-display text-lg leading-snug">{text}</div>
    </div>
  );
}

const SKILLS = [
  {
    title: "Design",
    icon: Palette,
    blurb: "Brand systems, editorial, product UI.",
    items: [
      { name: "Brand Identity", value: 96 },
      { name: "Product Design", value: 92 },
      { name: "Typography", value: 95 },
    ],
  },
  {
    title: "Technology",
    icon: Code2,
    blurb: "Comfortable in the engineering room.",
    items: [
      { name: "Design Systems", value: 94 },
      { name: "Prototyping", value: 88 },
      { name: "Front-end (HTML/CSS)", value: 80 },
    ],
  },
  {
    title: "Leadership",
    icon: Users,
    blurb: "Studios, squads, cross-functional teams.",
    items: [
      { name: "Team Building", value: 90 },
      { name: "Mentorship", value: 93 },
      { name: "Strategy", value: 87 },
    ],
  },
  {
    title: "Communication",
    icon: MessageCircle,
    blurb: "Writing, presenting, advising.",
    items: [
      { name: "Client Workshops", value: 94 },
      { name: "Speaking", value: 86 },
      { name: "Writing", value: 89 },
    ],
  },
] as const;

function SkillCard({
  title, icon: Icon, blurb, items, delay,
}: (typeof SKILLS)[number] & { delay: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (e) => e.forEach((x) => x.isIntersecting && setInView(true)),
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="reveal glass rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-luxe" style={{ animationDelay: `${delay}ms` }}>
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-lavender/60 to-rose/60">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 font-display text-2xl">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{blurb}</p>
      <div className="mt-6 space-y-4">
        {items.map((it) => (
          <div key={it.name}>
            <div className="flex items-center justify-between text-xs">
              <span className="text-foreground/80">{it.name}</span>
              <span className="text-muted-foreground">{it.value}%</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full transition-[width] duration-1000 ease-out"
                style={{
                  width: inView ? `${it.value}%` : "0%",
                  background: "var(--gradient-gold)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    title: "Maison Lior",
    category: "Luxury Hospitality · 2025",
    description: "Identity system and booking experience for a Parisian boutique hotel group. Quiet typography, generous space, and a reservation flow that feels like a concierge.",
    image: project2,
    tags: ["Brand", "Web", "Editorial"],
  },
  {
    title: "Sable Wellness",
    category: "Lifestyle Product · 2024",
    description: "A meditation product reimagined as a soft, low-stimulation companion. Includes a custom motion system and a calming dashboard for daily practice.",
    image: project1,
    tags: ["Product", "Mobile", "Motion"],
  },
  {
    title: "Atelier Nord Index",
    category: "Studio Self-Publishing · 2024",
    description: "An evolving online journal and case-study index for our own studio. Built around a flexible grid that lets writing and imagery breathe.",
    image: project3,
    tags: ["Editorial", "Design System"],
  },
] as const;

function ProjectCard({ project, reverse }: { project: (typeof PROJECTS)[number]; reverse: boolean }) {
  return (
    <article className={`reveal grid gap-8 overflow-hidden rounded-[2rem] glass p-5 lg:grid-cols-2 lg:p-7 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
      <div className="group relative overflow-hidden rounded-3xl">
        <img src={project.image} alt={project.title} loading="lazy" className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 lg:h-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
      </div>
      <div className="flex flex-col justify-center p-2 lg:p-6">
        <div className="text-xs font-medium uppercase tracking-[0.3em] text-gold">{project.category}</div>
        <h3 className="mt-3 font-display text-4xl leading-tight">{project.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full glass px-3 py-1 text-xs">{t}</span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-2">
          <a href="#" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90">
            View Project <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a href="#" className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-medium">
            <ExternalLink className="h-3.5 w-3.5" /> Live Demo
          </a>
          <a href="#" className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-4 py-2 text-xs font-medium hover:border-foreground/40">
            <FileText className="h-3.5 w-3.5" /> Case Study
          </a>
        </div>
      </div>
    </article>
  );
}

const EXPERIENCE = [
  { company: "Atelier Nord", role: "Founder & Design Director", period: "2021 — Present", text: "Lead a 6-person studio shipping identity & product work for hospitality and lifestyle clients." },
  { company: "Linear", role: "Senior Product Designer", period: "2019 — 2021", text: "Owned mobile and onboarding surfaces. Helped scale the design system across 4 platforms." },
  { company: "Pentagram", role: "Designer", period: "2016 — 2019", text: "Worked on identity programs for cultural institutions and a major airline rebrand." },
  { company: "Independent", role: "Freelance Designer", period: "2014 — 2016", text: "Editorial design for magazines and early-stage brand work for D2C founders." },
] as const;

function TimelineItem({ item, side }: { item: (typeof EXPERIENCE)[number]; side: "left" | "right" }) {
  return (
    <div className="reveal relative grid sm:grid-cols-2 sm:gap-10">
      <div className={`relative pl-12 sm:pl-0 ${side === "right" ? "sm:order-2 sm:pl-12" : "sm:pr-12 sm:text-right"}`}>
        <span className="absolute left-2 top-3 grid h-4 w-4 place-items-center rounded-full sm:left-auto sm:right-auto"
              style={{
                background: "var(--gradient-gold)",
                left: side === "right" ? undefined : undefined,
                ...(side === "left" ? { right: "calc(-0.5rem - 1px)" } : { left: "calc(-0.5rem - 1px)" }),
              }} />
        <div className="glass rounded-2xl p-5">
          <div className="text-xs font-medium uppercase tracking-widest text-gold">{item.period}</div>
          <h3 className="mt-1 font-display text-2xl">{item.role}</h3>
          <div className="text-sm text-foreground/70">{item.company}</div>
          <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
        </div>
      </div>
      <div className="hidden sm:block" />
      <span className="absolute left-2 top-4 h-4 w-4 rounded-full ring-4 ring-background sm:left-1/2 sm:-translate-x-1/2"
            style={{ background: "var(--gradient-gold)" }} />
    </div>
  );
}

const ACHIEVEMENTS = [
  { kind: "Award", title: "Awwwards Site of the Day ×3", detail: "Recognized for Maison Lior, Sable, and Atelier Nord.", year: "2023 – 2025" },
  { kind: "Certification", title: "IDEO Creative Leadership", detail: "Completed the 12-week leadership intensive.", year: "2023" },
  { kind: "Award", title: "Brand New 'Noted' Feature", detail: "Maison Lior identity featured by Under Consideration.", year: "2025" },
  { kind: "Milestone", title: "Studio of the Year — Nominee", detail: "European Design Awards shortlist.", year: "2024" },
  { kind: "Talk", title: "Config 2025 — Speaker", detail: "Quiet luxury in product design.", year: "2025" },
  { kind: "Certification", title: "Type@Cooper West", detail: "Advanced typography program.", year: "2020" },
];

const TESTIMONIALS = [
  { name: "Camille Robert", role: "Founder, Maison Lior", quote: "Eliana doesn't just design — she listens until your brand makes sense to itself." },
  { name: "Daniel Okafor", role: "VP Product, Linear", quote: "One of the sharpest design minds I've worked with. Calm, decisive, and quietly ambitious." },
  { name: "Priya Shah", role: "Editor, Kinfolk", quote: "Her work has the rare quality of feeling inevitable — like it was always going to look this way." },
];

function ContactRow({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl glass p-5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-lavender/60 to-rose/60">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="truncate font-display text-lg">{value}</div>
      </div>
    </div>
  );
}

function Field({
  label, type = "text", placeholder, className,
}: { label: string; type?: string; placeholder: string; className?: string }) {
  return (
    <div className={className}>
      <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none ring-ring/40 transition focus:ring-2"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative mt-12 border-t border-border/60 px-6 pt-16 pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-xl">
            <span className="grid h-9 w-9 place-items-center rounded-full text-primary-foreground" style={{ background: "var(--gradient-text)" }}>E</span>
            Eliana Vaughn
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            A small, considered studio crafting brand and product work for the next generation of lifestyle companies.
          </p>
          <div className="mt-5 flex gap-2">
            {[Linkedin, Dribbble, Instagram, Github].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="grid h-10 w-10 place-items-center rounded-full glass hover:-translate-y-0.5 transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-widest text-gold">Explore</div>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => (
              <li key={n.label}><a href={n.href} className="text-foreground/70 hover:text-foreground">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-widest text-gold">Newsletter</div>
          <p className="mt-3 text-sm text-muted-foreground">
            Quiet field notes on design, craft, and the studio — once a month.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex items-center gap-2 rounded-full glass p-1.5">
            <input
              type="email"
              placeholder="you@studio.com"
              className="flex-1 bg-transparent px-4 py-2 text-sm outline-none"
            />
            <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Eliana Vaughn Studio. All rights reserved.</div>
        <div>Designed & built with intention in San Francisco.</div>
      </div>
    </footer>
  );
}
