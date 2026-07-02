import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BRAND } from "@/lib/brand";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Mira Edge Academy" }, { name: "description", content: "Talk to the Mira Edge Academy team." }] }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(5).max(2000),
});

function Contact() {
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) return toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
    setBusy(true);
    const { data: userData } = await supabase.auth.getUser();
    if (userData.user) {
      const { error } = await supabase.from("support_tickets").insert({ user_id: userData.user.id, subject: `Contact: ${parsed.data.name}`, message: `${parsed.data.email}\n\n${parsed.data.message}` });
      setBusy(false);
      if (error) return toast.error(error.message);
      toast.success("Message sent — we'll get back to you shortly.");
      setForm({ name: "", email: "", message: "" });
    } else {
      setBusy(false);
      window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent("Website contact from " + parsed.data.name)}&body=${encodeURIComponent(parsed.data.message + "\n\nFrom: " + parsed.data.email)}`;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pt-32 pb-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</p>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">Let's talk</h1>
            <p className="mt-4 text-muted-foreground">Questions about a bootcamp, private cohorts, or partnerships? We usually reply within a few hours.</p>
            <div className="mt-8 space-y-4">
              <a href={BRAND.whatsappUrl} className="card-elevated flex items-center gap-4 p-4 transition hover:-translate-y-0.5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white"><MessageCircle className="h-5 w-5" /></div>
                <div><p className="text-sm text-muted-foreground">WhatsApp</p><p className="font-semibold">{BRAND.whatsapp}</p></div>
              </a>
              <a href={`mailto:${BRAND.email}`} className="card-elevated flex items-center gap-4 p-4 transition hover:-translate-y-0.5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white"><Mail className="h-5 w-5" /></div>
                <div><p className="text-sm text-muted-foreground">Email</p><p className="font-semibold">{BRAND.email}</p></div>
              </a>
              <div className="card-elevated flex items-center gap-4 p-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white"><MapPin className="h-5 w-5" /></div>
                <div><p className="text-sm text-muted-foreground">Online</p><p className="font-semibold">Live cohorts worldwide</p></div>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="card-elevated space-y-4 p-6">
            <div><Label htmlFor="c-name">Name</Label><Input id="c-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div>
            <div><Label htmlFor="c-email">Email</Label><Input id="c-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></div>
            <div><Label htmlFor="c-msg">Message</Label><Textarea id="c-msg" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required /></div>
            <Button type="submit" disabled={busy} className="w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white">{busy ? "Sending…" : "Send message"}</Button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
