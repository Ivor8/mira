import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BRAND } from "@/lib/brand";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/support")({
  head: () => ({ meta: [{ title: "Support — Mira Edge Academy" }] }),
  component: Support,
});

function Support() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 pt-32 pb-24 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Support</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">How can we help?</h1>
          <p className="mt-4 text-muted-foreground">Choose the fastest way to reach us. Our team responds within a few hours during business days.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <a href={BRAND.whatsappUrl} className="card-elevated p-6 text-center transition hover:-translate-y-0.5">
            <MessageCircle className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-4 font-display text-lg font-bold">WhatsApp</p>
            <p className="mt-1 text-sm text-muted-foreground">{BRAND.whatsapp}</p>
          </a>
          <a href={`mailto:${BRAND.email}`} className="card-elevated p-6 text-center transition hover:-translate-y-0.5">
            <Mail className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-4 font-display text-lg font-bold">Email</p>
            <p className="mt-1 text-sm text-muted-foreground">{BRAND.email}</p>
          </a>
          <Link to="/faq" className="card-elevated p-6 text-center transition hover:-translate-y-0.5">
            <HelpCircle className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-4 font-display text-lg font-bold">FAQ</p>
            <p className="mt-1 text-sm text-muted-foreground">Common questions answered</p>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact"><Button className="rounded-full bg-brand-gradient text-white">Open a support ticket</Button></Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
