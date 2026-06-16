import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Download, Mail, Phone, MapPin, Send, Calendar,
  Moon, Sun, ArrowUp, Github, Linkedin, Instagram, Twitter,
  Sparkles, Cpu, Code2, Database, MessageCircle, Award, Quote,
  ExternalLink, FileText, ChevronRight, GraduationCap,
} from "lucide-react";

import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lekha Shastry H — Information Science & Engineering Graduate" },
      { name: "description", content: "Portfolio of Lekha Shastry H, a recent Information Science and Engineering graduate building thoughtful software across full-stack, data and AI." },
      { property: "og:title", content: "Lekha Shastry H — Information Science & Engineering Graduate" },
      { property: "og:description", content: "Recent ISE graduate building thoughtful full-stack, data and AI projects." },
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
              <Sparkles className="h-3.5 w-3.5 text-gold" /> Open to graduate roles · 2026
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block text-foreground/90">Hello, I'm</span>
              <span className="block text-gradient italic">Lekha Shastry H</span>
            </h1>
            <p className="mt-6 max-w-xl font-display text-2xl italic text-foreground/70 sm:text-3xl">
              Information Science &amp; Engineering Graduate
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I build thoughtful software at the intersection of full-stack engineering, data and applied AI —
              translating curiosity into systems that are clean, considered and quietly powerful.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <BtnPrimary href="#projects"><span>View Portfolio</span><ArrowRight className="h-4 w-4" /></BtnPrimary>
              <BtnGlass href="#"><Download className="h-4 w-4" /><span>Download Resume</span></BtnGlass>
              <BtnGlass href="#contact"><Mail className="h-4 w-4" /><span>Contact Me</span></BtnGlass>
              <BtnOutline href="#contact"><span>Let's Work Together</span><ArrowRight className="h-4 w-4" /></BtnOutline>
            </div>

            <div ref={statsRef} className="mt-14 grid max-w-xl grid-cols-3 gap-6">
              <Stat value={useCounter(10, statsIn)} suffix="+" label="Projects built" />
              <Stat value={useCounter(8, statsIn)} suffix=" CGPA" label="Final score" />
              <Stat value={useCounter(7, statsIn)} suffix="" label="Hackathons & awards" />
            </div>
          </div>

          <div className="reveal relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-lavender/60 via-rose/40 to-navy/30 blur-2xl" />
            <div className="relative animate-float">
              <div className="overflow-hidden rounded-[2rem] glass-strong p-2">
                <img
                  src={portrait}
                  alt="Portrait of Lekha Shastry H"
                  width={1024}
                  height={1280}
                  className="h-[34rem] w-full rounded-[1.6rem] object-cover sm:h-[38rem]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl glass-strong px-5 py-4 sm:block">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">GRADUATED</div>
                <div className="mt-1 font-display text-lg">B.E. ISE · BMS College of Engineering</div>
              </div>
              <div className="absolute -right-4 top-10 hidden rounded-full glass-strong px-4 py-2 text-xs font-medium sm:block">
                <span className="text-gold">★</span> Smart India Hackathon Winner
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="A graduate shaped by curiosity and code">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="reveal lg:col-span-2 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              I'm a recent Information Science &amp; Engineering graduate with a soft spot for the parts of
              software that quietly do the heavy lifting — clean APIs, well-shaped data, and interfaces
              that don't make people think twice.
            </p>
            <p>
              Across four years I explored everything from data structures and DBMS to machine learning,
              cloud computing and full-stack development. Two internships taught me how production software
              really behaves, and a handful of hackathons taught me how to ship.
            </p>
            <p>
              I'm now looking to join a team where I can keep learning fast, contribute to meaningful
              products, and grow into a thoughtful software engineer over the next few years.
            </p>
          </div>
          <div className="reveal space-y-4">
            <Highlight label="Career goal" text="Join a strong engineering team as an SDE / Data Engineer." />
            <Highlight label="Key win" text="Smart India Hackathon 2024 — National Winner, Software track." />
            <Highlight label="Focus areas" text="Full-stack · Data Engineering · Applied ML" />
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Skills" title="A toolkit across four disciplines">
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
            <ContactRow icon={Mail} label="Email" value="lekha.shastry.h.ise@gmail.com" />
            <ContactRow icon={Phone} label="Phone" value="+91 98765 43210" />
            <ContactRow icon={MapPin} label="Based in" value="Bengaluru · Open to relocation" />
            <div className="glass rounded-3xl p-6">
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Follow</div>
              <div className="mt-4 flex gap-3">
                {[Linkedin, Github, Twitter, Instagram].map((Icon, i) => (
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
              L
            </span>
            <span className="hidden sm:inline">Lekha Shastry H</span>
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
    title: "Engineering",
    icon: Code2,
    blurb: "Full-stack web with a love for clean code.",
    items: [
      { name: "Java · Python · C++", value: 92 },
      { name: "React · Node.js", value: 88 },
      { name: "REST APIs & Testing", value: 84 },
    ],
  },
  {
    title: "Data & AI",
    icon: Database,
    blurb: "From SQL fundamentals to ML pipelines.",
    items: [
      { name: "SQL · MongoDB", value: 90 },
      { name: "Pandas · NumPy", value: 86 },
      { name: "Machine Learning", value: 78 },
    ],
  },
  {
    title: "Systems",
    icon: Cpu,
    blurb: "How software actually runs at scale.",
    items: [
      { name: "OS & Computer Networks", value: 88 },
      { name: "Docker · Linux", value: 82 },
      { name: "AWS Cloud Basics", value: 76 },
    ],
  },
  {
    title: "Collaboration",
    icon: MessageCircle,
    blurb: "Teamwork, writing, and clear thinking.",
    items: [
      { name: "Git & Code Review", value: 92 },
      { name: "Technical Writing", value: 84 },
      { name: "Public Speaking", value: 80 },
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
    title: "MediTrack — Hospital Records Platform",
    category: "Final Year Project · 2025",
    description: "A full-stack hospital records system with role-based access for doctors, patients and admins. Built with the MERN stack and a normalized PostgreSQL schema; deployed on AWS with CI via GitHub Actions.",
    image: project1,
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "CampusCart — Student Marketplace",
    category: "Smart India Hackathon · 2024",
    description: "A peer-to-peer marketplace for college students with real-time chat, image search and Razorpay payments. Won the national finals on the Software track for ed-tech.",
    image: project2,
    tags: ["Next.js", "MongoDB", "Socket.io"],
  },
  {
    title: "LeafSense — Plant Disease Detection",
    category: "Mini Project · 2023",
    description: "A CNN-based image classifier that detects 14 common crop diseases from a smartphone photo. Trained on PlantVillage and served through a lightweight FastAPI backend with a React Native client.",
    image: project3,
    tags: ["Python", "TensorFlow", "FastAPI"],
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
  { company: "BMS College of Engineering", role: "B.E. — Information Science & Engineering", period: "2021 — 2025", text: "Graduated with a CGPA of 8/10. Coursework in DSA, DBMS, OS, Networks, ML and Cloud Computing. Active member of the coding and AI/ML clubs." },
  { company: "Aumovio", role: "SDE Intern", period: "SUMMER 2025", text: "Built internal tooling for a banking client using Spring Boot and React. Wrote unit tests and helped migrate three services to a new auth layer." },
  { company: "SoftServe", role: "AIML Intern", period: "SPRING 2024", text: "Worked on a Python anomalies module — wrote Pyhton aggregation pipelines and exposed them through REST API endpoints used in production dashboards." },
  { company: "GDSC BMSCE", role: "IEEE Member", period: "2022 — 2025", text: "Led a chapter of 40+ students. Organized workshops on IEEE, Git and cloud fundamentals; mentored juniors through their first open-source contributions." },
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
  { kind: "Award", title: "Smart India Hackathon — National Winner", detail: "Software track, ed-tech problem statement.", year: "2024" },
  { kind: "Certification", title: "AWS Certified Cloud Practitioner", detail: "Foundational certification in cloud services.", year: "2024" },
  { kind: "Award", title: "Dean's List — Top 5%", detail: "Recognised in 4th, 5th and 6th semesters.", year: "2023 – 2024" },
  { kind: "Milestone", title: "GSoC Contributor", detail: "Contributed to an open-source DevTools organization.", year: "2024" },
  { kind: "Certification", title: "Stanford ML — Coursera", detail: "Andrew Ng's Machine Learning Specialization.", year: "2023" },
  { kind: "Award", title: "Best Paper — Student Symposium", detail: "Paper on lightweight CNNs for edge devices.", year: "2024" },
];

const TESTIMONIALS = [
  { name: "Dr. Anitha H M ", role: "Proctor, BMSCE", quote: "Lekha approaches problems with rare patience — she reads the spec, asks the right questions, and then ships." },
  { name: "Gautam KeshavaMurthy", role: "Manager, ", quote: "One of the strongest interns I've worked with. Picked up our codebase quickly and wrote tests without being asked." },
  { name: "Arjun Pillai", role: "Teammate, GDSC RVCE", quote: "She made our team better. Calm under pressure during the hackathon finals, and always the first to help juniors debug." },
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
            <span className="grid h-9 w-9 place-items-center rounded-full text-primary-foreground" style={{ background: "var(--gradient-text)" }}>L</span>
            Lekha Shastry H
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            An Information Science &amp; Engineering graduate building thoughtful software across full-stack, data and AI.
          </p>
          <div className="mt-5 flex gap-2">
            {[Linkedin, Github, Twitter, Instagram].map((Icon, i) => (
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
            Occasional notes on the projects I'm building and what I'm learning — once a month.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex items-center gap-2 rounded-full glass p-1.5">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 bg-transparent px-4 py-2 text-sm outline-none"
            />
            <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Leklha . All rights reserved.</div>
        <div>Designed &amp; built with intention in Bengaluru.</div>
      </div>
    </footer>
  );
}
