import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BRAND } from "@/lib/brand";
import { Rocket, Target, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Mira Edge Academy" }, { name: "description", content: "Mira Edge Academy is a premium online academy training modern full-stack engineers." }] }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 pt-32 pb-24 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">About us</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">Training modern engineers for a modern world</h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
            Mira Edge Academy is powered by <a href={BRAND.website} className="text-foreground underline">{BRAND.poweredBy}</a>. We train professional full-stack developers through live cohorts, real projects, and AI-assisted workflows used by leading technology teams.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {[
            { icon: Target, t: "Our mission", d: "Make world-class engineering education accessible, practical, and career-changing." },
            { icon: Rocket, t: "Our approach", d: "Small live cohorts, senior instructors, weekly code reviews, real projects and modern AI-assisted tools." },
            { icon: Sparkles, t: "Our stack", d: "React, TypeScript, Node, Postgres, Tailwind, Supabase, Vite, Cursor, and Copilot — the stack top teams ship on." },
            { icon: Users, t: "Our community", d: "Alumni network, career support, and open project reviews long after graduation." },
          ].map((x) => (
            <div key={x.t} className="card-elevated p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white"><x.icon className="h-5 w-5" /></div>
              <h2 className="mt-5 font-display text-xl font-bold">{x.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
