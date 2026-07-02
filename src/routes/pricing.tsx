import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing — Mira Edge Academy" }, { name: "description", content: "Flexible pricing for our live full-stack bootcamps." }] }),
  component: Pricing,
});

const TIERS = [
  { name: "Fundamentals", price: "150 000", best: false, features: ["6-week live cohort", "Weekly projects", "Community access", "Certificate of completion"] },
  { name: "Full-Stack Pro", price: "350 000", best: true, features: ["12-week live cohort", "AI-assisted development", "Portfolio capstone", "Career prep & mock interviews", "Official Mira Edge certificate"] },
  { name: "Team", price: "Contact us", best: false, features: ["Private cohort for 5+", "Custom curriculum", "Dedicated instructor", "Progress reports"] },
];

function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pt-32 pb-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Pricing</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">Simple, transparent tuition</h1>
          <p className="mt-4 text-muted-foreground">Pay via MTN Mobile Money or Orange Money. Installments available.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TIERS.map((t) => (
            <div key={t.name} className={`card-elevated p-6 ${t.best ? "border-primary/60 glow-primary" : ""}`}>
              {t.best && <p className="mb-3 inline-block rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">Most popular</p>}
              <h2 className="font-display text-2xl font-bold">{t.name}</h2>
              <p className="mt-3 font-display text-3xl font-bold text-brand-gradient">{t.price}<span className="ml-1 text-sm font-medium text-muted-foreground">{t.price === "Contact us" ? "" : "XAF"}</span></p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> {f}</li>)}
              </ul>
              <Link to={t.name === "Team" ? "/contact" : "/bootcamps"} className="mt-6 block">
                <Button className={`w-full rounded-full ${t.best ? "bg-brand-gradient text-white" : ""}`} variant={t.best ? "default" : "secondary"}>
                  {t.name === "Team" ? "Contact us" : "Reserve seat"}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
