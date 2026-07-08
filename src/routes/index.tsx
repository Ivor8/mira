import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Sparkles, Code2, Rocket, GraduationCap, Users, Zap, Award, PlayCircle, CheckCircle2, Calendar, Clock } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { formatXAF, daysUntil } from "@/lib/format";
import { BRAND } from "@/lib/brand";

export const Route = createFileRoute("/")({ component: Landing });

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Features />
        <UpcomingBootcamps />
        <HowItWorks />
        <Curriculum />
        <Testimonials />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 bg-hero-grid opacity-40" />
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-gradient opacity-30 blur-3xl animate-gradient" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Cohort-based · Live · AI-powered
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Become a professional <br className="hidden sm:block" />
            <span className="text-brand-gradient animate-gradient">Full-Stack Developer</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Live instructor-led bootcamps in modern web technologies & AI-assisted development.
            Ship real projects, earn an official certificate, launch your career.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/bootcamps">
              <Button size="lg" className="rounded-full bg-brand-gradient px-7 py-6 text-base font-semibold text-white shadow-2xl shadow-primary/40 hover:opacity-90">
                Join a bootcamp <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/bootcamps">
              <Button size="lg" variant="outline" className="rounded-full border-border/60 px-7 py-6 text-base backdrop-blur">
                <PlayCircle className="mr-2 h-4 w-4" /> Browse bootcamps
              </Button>
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
            {["Hands-on Projects","Live Classes","AI-Assisted","Modern Stack","Career Prep","Official Certificates"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { k: "500+", v: "Students trained" },
    { k: "12", v: "Live cohorts" },
    { k: "94%", v: "Completion rate" },
    { k: "24/7", v: "AI-assisted support" },
  ];
  return (
    <section className="border-y border-border/40 bg-navy-deep/30 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4">
        {items.map((s, i) => (
          <motion.div key={s.v} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }} className="text-center">
            <p className="font-display text-4xl font-bold text-brand-gradient sm:text-5xl">{s.k}</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Code2, title: "Modern stack", body: "React, Next.js, TypeScript, Node, Postgres, Tailwind, Supabase, and Vite — the stack shipped by teams like Vercel and Linear." },
    { icon: Zap, title: "AI-assisted workflows", body: "Build faster with Copilot, Cursor, Claude, and Lovable. Learn prompt-driven engineering the modern way." },
    { icon: Users, title: "Cohort-based live", body: "Small cohorts. Real instructors on Google Meet. Weekly code reviews, pair programming and demo days." },
    { icon: Rocket, title: "Ship real projects", body: "Every module ends with a portfolio project deployed to production, not a toy exercise." },
    { icon: GraduationCap, title: "Career preparation", body: "Resume, GitHub, interview prep, and technical mock interviews from working senior engineers." },
    { icon: Award, title: "Official certificate", body: "Verifiable certificate issued by Mira Edge Technologies on successful completion." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Why Mira Edge</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">A modern academy for modern engineers</h2>
          <p className="mt-4 text-muted-foreground">Everything you need to go from curious learner to production-ready developer.</p>
        </motion.div>
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <motion.div key={f.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }} className="group card-elevated p-6 transition hover:-translate-y-1 hover:glow-primary">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-lg shadow-primary/30">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UpcomingBootcamps() {
  const { data, isLoading } = useQuery({
    queryKey: ["bootcamps-upcoming"],
    queryFn: async () => {
      const { data, error } = await supabase.from("bootcamps").select("*").eq("status", "published").order("start_date", { ascending: true }).limit(3);
      if (error) throw error;
      return data ?? [];
    },
  });

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-brand-gradient opacity-[0.04]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Upcoming cohorts</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Reserve your seat</h2>
          </div>
          <Link to="/bootcamps" className="text-sm font-medium text-primary hover:underline">See all bootcamps →</Link>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {isLoading &&
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-96 animate-pulse rounded-3xl bg-muted/40" />
            ))}
          {!isLoading && (data ?? []).length === 0 && (
            <div className="col-span-full card-elevated flex flex-col items-center justify-center px-6 py-16 text-center">
              <GraduationCap className="h-10 w-10 text-primary" />
              <p className="mt-4 font-display text-xl font-semibold">New cohorts opening soon</p>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                We're preparing our next intake. Contact us on WhatsApp to reserve your seat before public registration opens.
              </p>
              <a href={BRAND.whatsappUrl} className="mt-6">
                <Button className="rounded-full bg-brand-gradient text-white">Contact on WhatsApp</Button>
              </a>
            </div>
          )}
          {(data ?? []).map((b, i) => (
            <motion.div key={b.id} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
              <BootcampCard b={b} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BootcampCard({ b }: { b: any }) {
  const remaining = Math.max((b.max_seats ?? 0) - (b.seats_taken ?? 0), 0);
  const dLeft = daysUntil(b.registration_deadline);
  return (
    <Link
      to={`/bootcamps/${b.slug}`}
      className="group card-elevated flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:glow-primary"
    >
      <div className="relative h-52 overflow-hidden bg-slate-950/5">
        {b.cover_image_url && (
          <img src={b.cover_image_url} alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        )}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
          <span className="rounded-full bg-black/30 px-2 py-1 backdrop-blur">{b.duration_weeks ?? 8} weeks</span>
          <span className="rounded-full bg-black/30 px-2 py-1 backdrop-blur">{remaining} seats left</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold group-hover:text-brand-gradient">{b.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{b.short_description ?? b.description}</p>
        <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-primary" /> {b.start_date ?? "TBA"}</div>
          <div className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary" /> {dLeft != null ? (dLeft > 0 ? `${dLeft}d to register` : "Closed") : "Open"}</div>
        </div>
        <div className="mt-6 flex flex-col gap-3 border-t border-border/50 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-bold text-brand-gradient">{formatXAF(b.price, b.currency)}</p>
          <span className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary transition group-hover:bg-primary/10">
            View details
          </span>
        </div>
      </div>
    </Link>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Choose a bootcamp", d: "Browse upcoming cohorts and pick the track that matches your goal." },
    { n: "02", t: "Reserve your seat", d: "Register and pay securely via MTN Mobile Money or Orange Money." },
    { n: "03", t: "Learn live", d: "Join weekly live sessions on Google Meet with your instructor and cohort." },
    { n: "04", t: "Ship & get certified", d: "Complete your capstone, get reviewed, and receive your certificate." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">How it works</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Four steps to a new career</h2>
        </motion.div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div key={s.n} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }} className="card-elevated relative p-6">
              <p className="font-display text-5xl font-bold text-brand-gradient opacity-70">{s.n}</p>
              <h3 className="mt-2 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Curriculum() {
  const modules = [
    "Web fundamentals: HTML, CSS, Modern JS",
    "React, TypeScript & component design",
    "Backend with Node, APIs, and Postgres",
    "Auth, security, and deployment",
    "AI-assisted development with Cursor, Copilot, Lovable",
    "Capstone project & career prep",
  ];
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div {...fadeUp}>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Curriculum</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Everything a modern full-stack engineer ships</h2>
          <p className="mt-4 text-muted-foreground">
            Our curriculum is designed and taught by working engineers. Each module ends with a project you can deploy and put in your portfolio.
          </p>
          <Link to="/bootcamps" className="mt-6 inline-block">
            <Button className="rounded-full bg-brand-gradient text-white">Explore bootcamps <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </motion.div>
        <motion.ul {...fadeUp} className="grid gap-3">
          {modules.map((m, i) => (
            <li key={m} className="card-elevated flex items-center gap-4 p-4">
              <span className="font-display text-sm font-bold text-brand-gradient">M{i + 1}</span>
              <span className="text-sm">{m}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { name: "Amina O.", role: "Junior Developer, Douala", q: "The live sessions plus the AI-assisted workflows completely changed the way I code. I shipped 3 real projects in 8 weeks." },
    { name: "Kwame A.", role: "Freelancer, Yaoundé", q: "The instructors treat you like a real engineer. Code reviews were tough but that's exactly what I needed." },
    { name: "Sarah T.", role: "Career switcher", q: "I moved from marketing to a full-stack role in 6 months. Mira Edge made it feel achievable." },
  ];
  return (
    <section className="border-y border-border/40 bg-navy-deep/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Success stories</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Students shipping in the real world</h2>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.map((x, i) => (
            <motion.div key={x.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }} className="card-elevated p-6">
              <p className="text-sm leading-relaxed">"{x.q}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-gradient" />
                <div>
                  <p className="text-sm font-semibold">{x.name}</p>
                  <p className="text-xs text-muted-foreground">{x.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="relative overflow-hidden rounded-3xl bg-brand-gradient p-10 text-center text-white shadow-2xl shadow-primary/30 sm:p-16">
          <div className="absolute inset-0 bg-hero-grid opacity-20" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold sm:text-5xl">Ready to become a full-stack engineer?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              Join the next Mira Edge cohort. Live classes, real projects, official certificate.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/bootcamps"><Button size="lg" className="rounded-full bg-white px-7 py-6 text-base font-semibold text-navy-deep hover:bg-white/90">Join a bootcamp</Button></Link>
              <Link to="/contact"><Button size="lg" variant="outline" className="rounded-full border-white/40 bg-white/10 px-7 py-6 text-base text-white backdrop-blur hover:bg-white/20">Talk to us</Button></Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
